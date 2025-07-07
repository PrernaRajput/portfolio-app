import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import StarOverlay from './components/StarOverlay';

export default function App () {
    return (
        <>
            <StarOverlay />
            <CustomCursor />

            <Router>
                <div className="flex flex-col min-h-screen bg-gunmetal text-antiFlashWhite relative z-10">
                    <Navbar />

                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </Router>
        </>
    );
}
