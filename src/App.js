import { Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Sepet from "./components/Sepet";
import Foodetails from "./components/Foodetails";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/" element={<Main />} />
        <Route path="/sepet" element={<Sepet />} />
        <Route path="foodetail/:id" element={<Foodetails />} />
        <Route path="/favorite" element={<Favorites />} />

        {/* <Route path="foodetail/:id" element={<Foodetail />} /> */}
      </Routes>
    </div>
  );
}

export default App;
