import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index path="/" element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
