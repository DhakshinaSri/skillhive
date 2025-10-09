import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@components/common-components/Layout";
import Home from "@pages/Home";
import About from "@pages/About";
import Internship from "@pages/Internship";
import Hr from "@pages/Hr";
import Contact from "@pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/hr" element={<Hr />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
