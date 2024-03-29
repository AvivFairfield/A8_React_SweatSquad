import { useEffect, useState } from "react";
import { getRequest } from "../../api"; // Importing API utility functions
import { Input } from "../../components/Input"; // Importing custom Input component
import { Paper } from "../../components/Paper"; // Importing custom Paper component
import { Select } from "../../components/Select"; // Importing custom Select component
import { SaveButton } from "./SaveButton"; // Importing custom SaveButton component
import { InviteButton } from "./InviteButton"; // Importing custom InviteButton component

// Location options for Select component
const locationOptions = [
  { label: "Gym or home?" },
  { value: "Gym", label: "Gym" },
  { value: "Home", label: "Home" },
];

// Default workout options for Select component
const defaultWorkoutOptions = [{ value: "", label: "Choose a training" }];

// Functional component for creating a training
export const CreateTraining = () => {
  // State variables for managing workout options and details
  const [workoutsOptions, setWorkoutsOptions] = useState(defaultWorkoutOptions);
  const [workoutDetails, setWorkoutDetails] = useState({
    trainingType: "",
    location: "",
    duration: "",
    workoutDateAndTime: "",
  });

  // useEffect hook for fetching workout data on component mount
  useEffect(() => {
    // Asynchronous function to fetch all workouts
    const getAllWorkouts = async () => {
      try {
        // Sending GET request to fetch all workouts
        const response = await getRequest("/getallworkouts");

        // Processing response if request is successful
        if (response?.status === "success") {
          // Logging response data
          console.log("Success:", response);

          // Mapping received workout data to suitable format for Select component
          const workoutsList =
            response?.workouts?.map((workout) => ({
              value: workout.workout_name,
              label: workout.workout_name,
            })) || [];

          // Updating workout options state with received workout data
          setWorkoutsOptions([...defaultWorkoutOptions, ...workoutsList]);
        } else {
          // Alerting user if request is unsuccessful
          alert(response?.message);
        }
      } catch (error) {
        // Handling errors during request
        console.error("Error:", error);
      }
    };

    // Calling getAllWorkouts function when component mounts
    getAllWorkouts();
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

  // Function to handle input changes and update workout details state
  const handleInputChange = (id, value) => {
    setWorkoutDetails((prev) => ({
      ...prev,
      [id]: value,
    }));
  };


  return (  // JSX returned by the component
    <div className="grid place-items-center p-3">
      <Paper>
        <h1 className="text-2xl font-bold text-center">Training Selection</h1>

        <div className="mt-4 mb-2">
          {/* Select component for choosing workout type */}
          <Select
            id="trainingType"
            options={workoutsOptions}
            labelText="Choose workout"
            value={workoutDetails.trainingType}
            onChange={(e) => handleInputChange("trainingType", e.target.value)}
          />
          {/* Select component for choosing workout location */}
          <Select
            id="location"
            options={locationOptions}
            labelText="Choose location"
            value={workoutDetails.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
          {/* Input component for entering workout duration */}
          <Input
            id="duration"
            type="number"
            labelText="Minutes per workout"
            placeholder="Enter duration in minutes"
            value={workoutDetails.duration}
            onChange={(e) => handleInputChange("duration", e.target.value)}
          />
          {/* Input component for selecting workout date and time */}
          <Input
            id="datetimeInput"
            type="datetime-local"
            labelText="Select a date for your workout"
            value={workoutDetails.workoutDateAndTime}
            onChange={(e) =>
              handleInputChange("workoutDateAndTime", e.target.value)
            }
          />
        </div>

        {/* SaveButton component for saving workout details */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-center">
            <SaveButton workoutDetails={workoutDetails} />
          </div>

          {/* InviteButton component for inviting others to the workout */}
          <InviteButton workoutDetails={workoutDetails} />
        </div>
      </Paper>
    </div>
  );
};
