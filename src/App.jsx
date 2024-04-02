//Imports necessary hooks and components from React, React Router, and local modules
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { routes } from "./routes";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useEffect, useContext } from "react";
import { Logo } from "./components/Logo";
import ThemeContext from "./context/ThemeContext";
import "./style.css";

function App() {
    //Hooks for programmatically navigating between routes and accessing the current location.
    const navigate = useNavigate();
    const location = useLocation();
    //hecks for an existing "email" key in local storage to determine the user's logged-in status.
    const email = localStorage.getItem("email");
    const { theme, toggleTheme } = useContext(ThemeContext);

    const isLoggedIn = !!email;

    useEffect(() => {
        //Contains logic for redirecting users based on their authentication
        //state and current location. It ensures that unauthenticated users
        //cannot access certain pages and that logged-in users are redirected from
        //the login/register pages to the home page.
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
        <div
            className={`w-full h-full bg-cover bg-no-repeat	h-screen bg-page overflow-y-auto ${theme}`}
        >
            {isLoggedIn && <Sidebar />}
            <div className="flex justify-center mt-6">
                <Logo />
            </div>
            <Routes>
                {routes.map((route) => {
                    const { path, Element } = route;

                    return (
                        <Route key={path} path={path} element={<Element />} />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
