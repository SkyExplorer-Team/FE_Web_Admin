import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import CreateNewPass from "./pages/CreateNewPass";
import Dashboard from "./pages/Dashboard";
import PublicRoutes from "./utils/PublicRoutes";
import PrivateRoutes from "./utils/PrivateRoutes";
import CheckEmail from "./pages/CheckEmail";
import PageNotFound from "./pages/NotFound";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes />} >
          <Route path="/" element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-new-password/:token" element={<CreateNewPass />} />
          <Route path="/check-email" element={<CheckEmail />} />
        </Route>
        <Route element={<PrivateRoutes />} >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
