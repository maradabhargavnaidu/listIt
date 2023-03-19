import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Authentication from "./Components/Authentication/Authentication";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Authentication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
