import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init({
    offset: 100,
    duration: 600,
  });
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/coaching" element={<Questions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
