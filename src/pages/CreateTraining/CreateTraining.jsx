import { useEffect, useState } from "react";
import { getRequest } from "../../api";
import { Input } from "../../components/Input";
import { Paper } from "../../components/Paper";
import { Select } from "../../components/Select";
import { SaveButton } from "./SaveButton";
import { InviteButton } from "./InviteButton";

const locationOptions = [
  { label: "Gym or home?" },
  { value: "Gym", label: "Gym" },
  { value: "Home", label: "Home" },
];

const defaultWorkoutOptions = [{ value: "", label: "Choose a training" }];

export const CreateTraining = () => {
  const [workoutsOptions, setWorkoutsOptions] = useState(defaultWorkoutOptions);
  const [workoutDetails, setWorkoutDetails] = useState({
    trainingType: "",
    location: "",
    duration: "",
    workoutDateAndTime: "",
  });

  useEffect(() => {
    const getAllWorkouts = async () => {
      try {
        const response = await getRequest("/getallworkouts");
        if (response?.status === "success") {
          console.log("Success:", response);

          const workoutsList =
            response?.workouts?.map((workout) => ({
              value: workout.workout_name,
              label: workout.workout_name,
            })) || [];

          setWorkoutsOptions([...defaultWorkoutOptions, ...workoutsList]);
        } else {
          alert(response?.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getAllWorkouts();
  }, []);

  const handleInputChange = (id, value) => {
    setWorkoutDetails((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="grid place-items-center p-3">
      <Paper>
        <h1 className="text-2xl font-bold text-center">Training Selection</h1>

        <div className="mt-4 mb-2">
          <Select
            id="trainingType"
            options={workoutsOptions}
            labelText="Choose workout"
            value={workoutDetails.trainingType}
            onChange={(e) => handleInputChange("trainingType", e.target.value)}
          />

          <Select
            id="location"
            options={locationOptions}
            labelText="Choose location"
            value={workoutDetails.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
          />

          <Input
            id="duration"
            type="number"
            labelText="Minutes per workout"
            placeholder="Enter duration in minutes"
            value={workoutDetails.duration}
            onChange={(e) => handleInputChange("duration", e.target.value)}
          />

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

        <div className="flex flex-col gap-2">
          <div className="flex justify-center">
            <SaveButton workoutDetails={workoutDetails} />
          </div>

          <InviteButton workoutDetails={workoutDetails} />
        </div>
      </Paper>
    </div>
  );
};
