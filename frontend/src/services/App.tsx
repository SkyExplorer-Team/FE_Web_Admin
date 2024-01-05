import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
