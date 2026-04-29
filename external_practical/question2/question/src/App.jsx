
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'

// Pages
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>

      {/* Navigation Bar */}
      <nav style={{
        padding: "15px",
        background: "#222",
        textAlign: "center"
      }}>
        <Link to="/" style={{ color: "white", margin: "10px" }}>Home</Link>
        <Link to="/about" style={{ color: "white", margin: "10px" }}>About</Link>
        <Link to="/contact" style={{ color: "white", margin: "10px" }}>Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
