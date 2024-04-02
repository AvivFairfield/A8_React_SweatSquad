import { useNavigate } from "react-router-dom";
import { postRequest } from "../../api";
import { formatDate } from "../../utils/formatDate";
import { Button } from "../../components/Button/Button";

/**
 * SaveButton component handles the saving of workout details.
 * @param {Object} workoutDetails - Details of the workout to be saved.
 * @returns {JSX.Element} SaveButton component.
 */
export const SaveButton = ({ workoutDetails }) => {
    const navigate = useNavigate();

    /**
     * Handles the saving of workout details.
     * @async
     */
    const saveWorkoutDetails = async () => {
        try {
            const { trainingType, location, duration, workoutDateAndTime } =
                workoutDetails;

            // Check if any field is empty
            if (
                !trainingType ||
                !location ||
                !duration ||
                !workoutDateAndTime
            ) {
                alert("Please fill in all fields.");
                return;
            }

            // Format workout date and time
            const formattedWorkoutDateAndTime = formatDate(
                new Date(workoutDateAndTime)
            );

            // Send a POST request to save workout details
            const response = await postRequest("/saveworkout", {
                email: localStorage.getItem("email"),
                trainingType,
                location,
                duration,
                workoutDate: formattedWorkoutDateAndTime,
            });

            // Display response message
            alert(response?.message);

            // Log success message and navigate to the home page
            console.log("Success:", response);
            navigate("/");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return <Button onClick={saveWorkoutDetails}>Save</Button>;
};
