import { useState, useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input";
import { postRequest, getRequest } from "../../api";

export const UserMeasurements = () => {
    const [measurements, setMeasurements] = useState({
        height: "",
        weight: "",
    });
    const [goal, setGoal] = useState({
        goalWeight: "",
        goalDate: "",
    });

    //useEffect is used to fetch user details when the component mounts.
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                //fetch the email from localStorage
                const email = localStorage.getItem("email");
                const response = await getRequest(
                    `/getUserDetails?email=${email}`
                );
                if (response.status === "success") {
                    //Convert numerical data to string to ensure compatibility with input field values.
                    setMeasurements({
                        height: response.data.height,
                        weight: response.data.weight,
                    });
                } else {
                    alert("Failed to fetch user details");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchUserDetails();
    }, []);

    const handleMeasurementsChange = (e) => {
        setMeasurements({
            ...measurements,
            [e.target.id]: e.target.value,
        });
    };

    const handleGoalChange = (e) => {
        setGoal({
            ...goal,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const response = await postRequest("/accountsettings", {
                email: localStorage.getItem("email"),
                height: measurements.height,
                weight: measurements.weight,
            });

            alert(response.message);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex items-end space-x-4">
                <Input
                    id="height"
                    labelText="Height (cm)"
                    value={measurements.height}
                    onChange={handleMeasurementsChange}
                    placeholder="Enter your height"
                    type="number"
                    min="100"
                    max="300"
                    className="mb-0"
                />

                <Input
                    id="weight"
                    labelText="Weight(Kg)"
                    value={measurements.weight}
                    onChange={handleMeasurementsChange}
                    placeholder="Enter your weight"
                    type="number"
                    min="30"
                    max="250"
                    step="0.1"
                    className="mb-0"
                />
            </div>

            <div className="flex items-end space-x-4">
                <Input
                    id="goalDate"
                    labelText="Goal (Kg)"
                    value={goal.goalDate}
                    onChange={handleGoalChange}
                    type="number"
                    min="30"
                    max="250"
                    step="0.1"
                    className="mb-0"
                    placeholder="Enter your goal weight"
                />
                <Input
                    id="goalWeight"
                    labelText="Goal Date"
                    value={goal.goalWeight}
                    onChange={handleGoalChange}
                    type="datetime-local"
                    className="mb-0"
                />
            </div>
            <Button type="submit" className="text-sm py-2.5">
                Save
            </Button>
        </form>
    );
};
