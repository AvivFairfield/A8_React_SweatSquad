//The InviteButton allows users to invite friends to join their workout challenge via WhatsApp.
import { Button } from "../../components/Button/Button";

export const InviteButton = ({ workoutDetails }) => {
    //Function to handle inviting a friend via WhatsApp
    const inviteFriend = () => {
        const { trainingType, location, duration, workoutDateAndTime } =
            workoutDetails;
        //Check if all fields are filled; if not, alert the user
        if (!trainingType || !location || !duration || !workoutDateAndTime) {
            alert("Please fill in all fields before inviting a friend.");
            return;
        }
        //Formatting the date and time for the workout
        const formattedDateTime = formatDateTime(workoutDateAndTime);
        //Crafting the invitation message with workout details
        const message = `Hey! I'm doing a ${trainingType} workout at the ${location} on ${formattedDateTime}. Wanna join me to my challenge? `;
        //Encoding the message for URL compatibility
        const encodedMessage = encodeURIComponent(message);
        //Generating the WhatsApp URL with the encoded message
        const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <Button onClick={inviteFriend}>
            Invite a Friend to your challenge
        </Button>
    );
};
//Utility function to format date and time strings into a readable format
const formatDateTime = (dateTimeStr) => {
    //Array of month names for formatting
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const date = new Date(dateTimeStr);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    return `${month} ${day}, ${year} at ${hours}:${minutesStr} ${ampm}`;
};
