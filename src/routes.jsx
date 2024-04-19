//Import components from different pages to be used in routing
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { CreateTraining } from "./pages/CreateTraining/CreateTraining";
import { History } from "./pages/History/History";
import { Progresssion } from "./pages/Progresssion/Progresssion";
import { AccountSettings } from "./pages/AccountSettings/AccountSettings";
import { Register } from "./pages/Register/Register";
import { About } from "./pages/About/About";


/**
 * Defines the routes for the application. Each route object specifies a path
 * and the component (Element) that should be rendered when the application's
 * URL matches the path.
 */
export const routes = [
  {
    path: "*",//Matches any path not defined in the other route objects
    Element: Home,//Component to render for the home page
  },
  {
    path: "/login",//URL path for the login page
    Element: Login,//Component to render for the login page
  },
  {
    path: "/register", //URL path for the registration page
    Element: Register,//Component to render for the registration page
  },
  {
    path: "/create-training",
    Element: CreateTraining,
  },
  {
    path: "/history",
    Element: History,
  },
  {
    path: "/progression",
    Element: Progresssion,
  },
  {
    path: "/account-settings",
    Element: AccountSettings,
  },
  {
    path: "/about",
    Element: About,
  },
 
 
];
