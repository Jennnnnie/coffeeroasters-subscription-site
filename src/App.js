import "./App.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Plan from "./components/pages/plan/Plan";
import PageNotFound from "./components/pages/PageNotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
