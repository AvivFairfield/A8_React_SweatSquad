import { useNavigate } from "react-router-dom";

import { postRequest } from "../../api";

import { formatDate } from "../../utils/formatDate";
import { Button } from "../../components/Button";

export const SaveButton = ({ workoutDetails }) => {
  const navigate = useNavigate();

  const saveWorkoutDetails = async () => {
    try {
      const { trainingType, location, duration, workoutDateAndTime } =
        workoutDetails;

      if (!trainingType || !location || !duration || !workoutDateAndTime) {
        alert("Please fill in all fields.");

        return;
      }

      const formattedWorkoutDateAndTime = formatDate(
        new Date(workoutDateAndTime)
      );

      const response = await postRequest("/saveworkout", {
        email: localStorage.getItem("email"),
        trainingType,
        location,
        duration,
        workoutDate: formattedWorkoutDateAndTime,
      });

      alert(response?.message);

      console.log("Success:", response);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return <Button onClick={saveWorkoutDetails}>Save</Button>;
};
