import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Contact from "./pages/Contact.jsx";
import PlaceholderLegal from "./pages/PlaceholderLegal.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/privacy"
          element={
            <PlaceholderLegal
              title="Privacy Policy"
              note="Privacy Policy copy will be provided by GEMCOP."
            />
          }
        />
        <Route
          path="/terms"
          element={
            <PlaceholderLegal
              title="Terms & Conditions"
              note="Terms & Conditions copy will be provided by GEMCOP."
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
