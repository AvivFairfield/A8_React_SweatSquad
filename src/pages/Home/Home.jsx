import React from "react";
import { Button } from "../../components/Button";
import "./home.css";
import { Workouts } from "./Workouts/Workouts";
import { useNavigate } from "react-router-dom";
import { ThemeToggleButton } from '../../components/ThemeToggleButton';

export const Home = () => {
  const navigate = useNavigate();

  const firstName = localStorage.getItem("firstname");
  const lastName = localStorage.getItem("lastname");

  return (
    <div className="text-center grid place-items-center p-3">
    {/* Theme toggle button */}
    <div className="my-3">
      <ThemeToggleButton />
    </div>
    
      <p id="welcome_msg" className="text-xl text-center py-1 text-white ">
        Hey there {firstName} {lastName}! check out what's new
      </p>

      <div className="w-5/6 max-w-xl bg-neutral-600 p-3 my-5 rounded-3xl text-white overflow-hidden">
        <div className="news-content ">
          <p>
            New classes and courses starting soon! Join us for a healthier
            lifestyle.
          </p>
          <p>
            For every new friend you bring in you are getting a free lesson!.
          </p>
        </div>
      </div>

      <div className="flex my-3 mb-3 gap-3">
        <Button className="w-44" onClick={() => navigate("/create-training")}>
          Schedule a Class
        </Button>
        <Button className="w-44" onClick={() => navigate("/history")}>
          History
        </Button>
      </div>

      <Workouts />
    </div>
  );
};
