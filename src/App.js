import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/main.css";

import Layout from "./layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateAds from "./pages/CreateAds";
import CreateTextMediaAds from "./pages/CreateTextMediaAds";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index exact path="/" element={<Dashboard />} />
            <Route exact path="/create-ad-select" element={<CreateAds />} />
            <Route
              exact
              path="/create-ad/:type"
              element={<CreateTextMediaAds />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
