import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { routes } from "./routes";
import { Sidebar } from "./components/Sidebar";
import { useEffect } from "react";
import { Logo } from "./components/Logo";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = localStorage.getItem("email");

  const isLoggedIn = !!email;

  useEffect(() => {
    const currentPageIsRegister = location.pathname.startsWith("/register");
    const currentPageIsLogin = location.pathname.startsWith("/login");

    // If the user is not logged in, redirect to the login page
    if (!isLoggedIn) {
      // If the user is not logged in and in register page, do nothing
      if (currentPageIsRegister) {
        return;
      }

      navigate("/login");
      return;
      // If the user is logged in and in login page, redirect to the home page
    } else if (currentPageIsLogin || currentPageIsRegister) {
      navigate("/");
    }
  }, [isLoggedIn, navigate, location.pathname]);

  return (
    <div className="w-full h-full bg-black bg-cover bg-no-repeat	h-screen bg-page overflow-y-auto">
      {isLoggedIn && <Sidebar />}
      <div className="flex justify-center mt-6">
        <Logo />
      </div>
      <Routes>
        {routes.map((route) => {
          const { path, Element } = route;

          return <Route key={path} path={path} element={<Element />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
