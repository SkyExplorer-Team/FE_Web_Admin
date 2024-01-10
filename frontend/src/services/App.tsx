import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import CreateNewPass from "./pages/CreateNewPass";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-new-password" element={<CreateNewPass />} />
      </Routes>
    </Router>
  );
};

export default App;
