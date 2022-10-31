import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";

import SideBar from "./components/SideBar/SideBar";

import "./App.css";

function App() {
  return (
    <SideBar>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.path === "/" ? <Navigate to="home" /> : <route.element />
            }
          />
        ))}
      </Routes>
    </SideBar>
  );
}

export default App;
