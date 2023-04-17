import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Pages/Login";
import RegisterInvestor from "./Pages/RegisterInvestor";
import RegisterStartup from "./Pages/RegisterStartup";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/register-investor"
            element={<RegisterInvestor />}
          />
          <Route exact path="/register-startup" element={<RegisterStartup />} />
          {/* <ProtectedRoute
            path="/investment-portal"
            element={<InvestmentPortal/>}
          />
          <ProtectedRoute path="/startup-portal" element={<StartupPortal/>} />
          <ProtectedRoute path="/startup-details" element={<StartupDetails/>} />
          <ProtectedRoute
            path="/investor-details"
            element={<InvestorDetails/>}
          />
          <ProtectedRoute path="/investor-offers" element={<InvestorOffers/>} />
          <ProtectedRoute
            path="/community-chat"
            element={<CommunityChat/>}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
