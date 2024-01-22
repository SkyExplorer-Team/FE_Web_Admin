import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import CreateNewPass from "./pages/CreateNewPass";
import Dashboard from "./pages/Dashboard";
import DashboardNew from "./dashboard/App";
import PublicRoutes from "./utils/PublicRoutes";
import PrivateRoutes from "./utils/PrivateRoutes";
import CheckConnection from "../components/CheckConnection";

const App: React.FC = () => {
  return (
    <CheckConnection>
      <Router>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/create-new-password" element={<CreateNewPass />} />
            <Route path="/dashboard-new" element={<DashboardNew />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route
            path="/*"
            element={
              <div className="wrapper">
                <h1>PageNotFound</h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </CheckConnection>
  );
};

export default App;
