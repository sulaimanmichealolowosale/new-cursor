import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import RadioAdvertising from './pages/RadioAdvertising'
import BillboardAdvertising from './pages/BillboardAdvertising'
import SocialMediaAdvertising from './pages/SocialMediaAdvertising'
import BrandDesign from './pages/BrandDesign'

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services/radio" element={<RadioAdvertising />} />
                    <Route path="/services/billboard" element={<BillboardAdvertising />} />
                    <Route path="/services/social-media" element={<SocialMediaAdvertising />} />
                    <Route path="/services/brand-design" element={<BrandDesign />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
