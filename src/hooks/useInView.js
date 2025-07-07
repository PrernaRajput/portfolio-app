import { useEffect, useRef, useState } from 'react';

export default function useInView ( options = {} ) {
    const ref = useRef( null );
    const [isIntersecting, setIsIntersecting] = useState( false );

    useEffect( () => {
        const node = ref.current;
        if ( !node ) return;

        const observer = new IntersectionObserver( ( [entry] ) => {
            if ( entry.isIntersecting ) setIsIntersecting( true );
        }, options );

        observer.observe( node );

        return () => {
            if ( node ) observer.unobserve( node );
        };
    }, [options] ); // ✅ now clean and safe

    return [ref, isIntersecting];
}
