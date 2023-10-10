import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dados from "./pages/Dados";

export default function Router() {
  return (
    <>
      <Carousel />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dados" element={<Dados />} />
      </Routes>
      <Footer />
    </>
  );
}
