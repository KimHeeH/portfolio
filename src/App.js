import "./App.css";
import AppLayout from "./Pages/AppLayout/AppLayout";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import { MenuProvider } from "./Context/MenuContext";
import AnimatedCursor from "react-animated-cursor";
function App() {
  return (
    <MenuProvider>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          "Button",
          ".link",
          "div",
          "Carousel",
        ]}
      />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </MenuProvider>
  );
}

export default App;
