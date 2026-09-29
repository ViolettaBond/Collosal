import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quote from './Pages/Quote/Quote';
import Contact from './Pages/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Faq from './Pages/Home/FAQ/Faq';
import Pricing from './Pages/Pricing/Pricing';
import Blog from './Pages/Blog/Blog';
import BlogPost from './Pages/BlogPost/BlogPost';
import Terms from './Pages/Terms/Terms';
import Projects from './Pages/Projects/Projects';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail';
import About from './Pages/About/About';
import HowWeWork from './Pages/HowWeWork/HowWeWork';
import Services from './Pages/Services/Services';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/quote" element={<Quote />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<HowWeWork />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:id" element={<ServiceDetail />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
