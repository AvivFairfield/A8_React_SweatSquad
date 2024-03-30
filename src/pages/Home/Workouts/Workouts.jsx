import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import { Card } from "../../../components/Card";
import { postRequest } from "../../../api";
import { formatDateTime } from "../../../utils/formatDateTime";

export const Workouts = () => {
	const [workouts, setWorkouts] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const getUserWorkouts = async () => {
			const email = localStorage.getItem("email");
			const userWorkouts = await postRequest("/getuserworkouts", {
				email,
			});

			const formattedWorkouts =
				userWorkouts?.workouts?.map((workout) => ({
					...workout,
					starting_datetime: formatDateTime(
						new Date(workout.starting_datetime)
					),
				})) || [];
			setWorkouts(formattedWorkouts);
		};

		getUserWorkouts();
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const moveSlide = (direction) => {
		const newSlide = currentSlide + direction;
		if (newSlide < 0 || newSlide >= workouts.length) {
			return; // Prevent moving to invalid slide index
		}
		setCurrentSlide(newSlide);
	};

	const removeWorkout = (id) => {
		setWorkouts((prev) => prev.filter((workout) => workout.id !== id));
	};

	const handleDeleteWorkout = async (id) => {
		try {
			const response = await postRequest("/deleteuserworkouts", {
				id,
			});

			if (response?.status === "success") {
				console.log("Success:", response);
				removeWorkout(id);
			}

			alert(response?.message); // should return from api the message that says saved succesffuly
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const handleDoneWorkout = async (id) => {
		try {
			const response = await postRequest("/archiveuserworkouts", {
				id,
			});

			if (response?.status === "success") {
				console.log("Success:", response);
				removeWorkout(id);
			}

			alert(response?.message); // should return from api the message that says saved succesffuly
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="w-full sm:w-11/12 lg:w-2/3 relative overflow-hidden my-8">
			<div
				className="w-full flex transition-transform duration-500 ease-in-out"
				style={{
					transform: `translateX(-${
						currentSlide * (isMobile ? "100" : "33.333")
					}%)`,
				}}
			>
				{workouts.map((workout) => (
					<div
						key={workout.id}
						className="w-full sm:w-1/3 flex-shrink-0 flex items-center justify-center"
					>
						<Card
							title={workout.current_workout}
							subtitle={workout.workout_location}
							date={workout.starting_datetime}
							imgSrc={`public\workoutImages${workout.current_workout}.jpg`}
							onDone={() => handleDoneWorkout(workout.id)}
							onDelete={() => handleDeleteWorkout(workout.id)}
						/>
					</div>
				))}
			</div>

			<button
				className="prev z-1 absolute top-1/2 -left-0 transform -translate-y-1/2 bg-neutral-600 text-white px-2 py-2 rounded-l-md"
				onClick={() => moveSlide(-1)}
			>
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
			<button
				className="next z-1 absolute top-1/2 -right-0 transform -translate-y-1/2 bg-neutral-600 text-white px-2 py-2 rounded-r-md"
				onClick={() => moveSlide(1)}
			>
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
		</div>
	);
};
