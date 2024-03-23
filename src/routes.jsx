import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { CreateTraining } from "./pages/CreateTraining/CreateTraining";
import { History } from "./pages/History/History";
import { Progresssion } from "./pages/Progresssion/Progresssion";
import { AccountSettings } from "./pages/AccountSettings/AccountSettings";
import { Register } from "./pages/Register/Register";

export const routes = [
  {
    path: "*",
    Element: Home,
  },
  {
    path: "/login",
    Element: Login,
  },
  {
    path: "/register",
    Element: Register,
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
];
