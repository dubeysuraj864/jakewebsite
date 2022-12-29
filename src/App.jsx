import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import AOS from "aos";
import "aos/dist/aos.css";
import Payments from "./components/Payments";
import Payments2 from "./components/Payments2";
import Payments3 from "./components/Payments3";

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
            <Route path="/workout_plan" element={<Payments />} />
            <Route path="/nutrition_plan" element={<Payments2 />} />
            <Route path="/workout_nutrition_plan" element={<Payments3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
