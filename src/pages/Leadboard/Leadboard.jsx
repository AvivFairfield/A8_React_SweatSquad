import React, { useEffect, useState } from "react";
import { postRequest } from "../../api";

const headerCells = ["Workout", "Location", "Duration", "Date"];

export const History = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const userHistory = async () => {
      const email = localStorage.getItem("email");
      const response = await postRequest("/getuserhistory", {
        email,
      });

      if (response?.status === "success") {
        const workoutsData =
          response?.workouts?.map((workout) => ({
            ...workout,
            starting_datetime: formatDateTime(
              new Date(workout.starting_datetime)
            ),
          })) || [];

        setWorkouts(workoutsData);
      } else {
        alert(response?.message); // should return from api the message that says saved succesffuly
        console.log(response?.workouts);
      }
    };

    userHistory();
  }, []);

  const Cell = ({ children }) => (
    <td className="sm:py-4 sm:px-6 py-3 px-4">{children}</td>
  );

  return (
    <div className="grid max-h-96 md:w-3/4 md:p-8 p-2 text-white mx-auto my-0 text-center">
      <h1 className="text-3xl font-bold mb-6">Leadboard</h1>

      <div className="overflow-auto h-3/4">
        <table className="w-full h-full text-sm text-left dark:text-gray-400">
          <thead
            className="text-xs uppercase bg-gray-50 dark:bg-gray-700 text-white"
            style={{ position: "sticky", top: 0, zIndex: 1 }}
          >
            <tr>
              {headerCells.map((cell) => (
                <Cell key={cell}>{cell}</Cell>
              ))}
            </tr>
          </thead>
          <tbody>
            {workouts.map((item, index) => (
              <tr
                key={`${item.current_workout}-${index}`}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white"
              >
                <Cell>{item.current_workout}</Cell>
                <Cell>{item.workout_location}</Cell>
                <Cell>{item.workout_duration}</Cell>
                <Cell>{item.starting_datetime}</Cell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const formatDateTime = (date) => {
  const formattedTime = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
  return `${formattedDate} ${formattedTime}`;
};
