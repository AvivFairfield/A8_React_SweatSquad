
//this Home page serves as the landing page for users after they log in to the app
//this page also includes a section with news and announcements 
//about new classes, courses, and incentives for bringing new friends to the app.
//Additionally, there are buttons to navigate users to either
// schedule a new class or view their history of scheduled classes
import React from "react";
import { Button } from "../../components/Button";
import "./home.css";
import { Workouts } from "./Workouts/Workouts";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

   //Retrieving the user's first and last name from localStorage
  const firstName = localStorage.getItem("firstname");
  const lastName = localStorage.getItem("lastname");

  return (
    <div className="text-center grid place-items-center p-3">
      {/* Displaying a welcome message with the user's name */}
      <p id="welcome_msg" className="text-xl text-center py-1 text-white">
        Hey there {firstName} {lastName}! check out what's new
      </p>
       {/* News and announcements section */}
      <div className="w-5/6 max-w-xl bg-neutral-600 p-3 my-5 rounded-3xl text-white overflow-hidden">
        <div className="news-content">
          <p>
            New classes and courses starting soon! Join us for a healthier
            lifestyle.
          </p>
          <p>
            For every new friend you bring in you are getting a free lesson!.
          </p>
        </div>
      </div>
      {/* Buttons for navigating to schedule a class or view history */}
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
