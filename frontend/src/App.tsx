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
import Terms from './Pages/Terms/Terms';

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
                    <Route path="terms" element={<Terms />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
