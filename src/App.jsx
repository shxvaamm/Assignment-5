import { BrowserRouter, Routes, Route } from "react-router";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import ShowDetails from "./pages/ShowDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/shows" element={<Home />} />
            <Route path="/shows/:id" element={<ShowDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
