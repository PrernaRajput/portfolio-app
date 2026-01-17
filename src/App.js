import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

// Create a new component to be able to use useLocation hook
const AppContent = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <div className='flex flex-col min-h-screen dark:bg-bodyBgColorDark bg-bodyBgColor text-textColor dark:text-textColorDark relative z-10'>
      <Navbar />

      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>

      <div className={isContactPage ? "fixed bottom-0 w-full z-20" : ""}>
        <Footer />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <>
      <CustomCursor />

      <Router>
        <AppContent />
      </Router>
    </>
  );
}
