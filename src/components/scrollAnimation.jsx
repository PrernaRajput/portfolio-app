import React, {useRef, useEffect, useState} from "react";
import {useScroll, useTransform, motion} from "framer-motion";

const ScrollAnimation = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const imageCount = 49; // From ezgif-frame-000.jpg to ezgif-frame-048.jpg

  useEffect(() => {
    const preloadImages = () => {
      const loadedImages = [];
      for (let i = 0; i < imageCount; i++) {
        const img = new Image();
        img.src = `/frames/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
        loadedImages.push(img);
      }
      setImages(loadedImages);
      Promise.all(
        loadedImages.map(
          (img) => new Promise((resolve) => (img.onload = resolve)),
        ),
      ).then(() => setLoading(false));
    };
    preloadImages();
  }, []);

  const scrollRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, imageCount - 1]);

  useEffect(() => {
    if (!loading && images.length) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.width = 1920;
      canvas.height = 1080;

      const render = () => {
        const currentFrame = Math.round(frameIndex.get());
        if (images[currentFrame]) {
          const img = images[currentFrame];
          const hRatio = canvas.width / img.width;
          const vRatio = canvas.height / img.height;
          const ratio = Math.min(hRatio, vRatio);
          const centerShift_x = (canvas.width - img.width * ratio) / 2;
          const centerShift_y = (canvas.height - img.height * ratio) / 2;
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio,
          );
        }
      };

      const unsubscribe = frameIndex.onChange(render);
      render();

      return () => {
        unsubscribe();
      };
    }
  }, [loading, images, frameIndex]);

  return (
    <div ref={scrollRef} className='h-[400vh] relative'>
      <div className='sticky top-0 h-screen w-full flex items-center justify-center'>
        {loading && (
          <div
            className='h-screen w-full flex items-center justify-center'
            style={{backgroundColor: "rgb(0,0,3)"}}
          >
            <p className='text-white'>Loading animation...</p>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className='h-full w-full object-contain'
          style={{display: loading ? "none" : "block"}}
        ></canvas>
      </div>
    </div>
  );
};

export default ScrollAnimation;
