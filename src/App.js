import "./App.css";
import Banner from "./Components/Banner/Banner";
import Blogs from "./Components/Blogs/Blogs";
import Experience from "./Components/Experience/Experience";
import Expertise from "./Components/Expertise/Expertise";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Testimonials from "./Components/Testimonials/Testimonials";
import Works from "./Components/Works/Works";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";

function App() {
  return (
    <div>
      <header className="bg-bgblack text-white">
        <Navbar />
        <Banner />
        <Expertise />
        <Works />
        <Experience />
        <Blogs />
        <Testimonials />
        <FAQ />
        <Footer />
      </header>
    </div>
  );
}

export default App;
