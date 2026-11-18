import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import TextileYarns from './pages/TextileYarns.jsx';
import Petrochemicals from './pages/Petrochemicals.jsx';
import Industries from './pages/Industries.jsx';
import HowWeWork from './pages/HowWeWork.jsx';
import Insights from './pages/Insights.jsx';
import Contact from './pages/Contact.jsx';
import Enquiry from './pages/Enquiry.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/textile-yarns" element={<TextileYarns />} />
        <Route path="products/petrochemicals" element={<Petrochemicals />} />
        <Route path="industries" element={<Industries />} />
        <Route path="how-we-work" element={<HowWeWork />} />
        <Route path="insights" element={<Insights />} />
        <Route path="contact" element={<Contact />} />
        <Route path="enquiry" element={<Enquiry />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
