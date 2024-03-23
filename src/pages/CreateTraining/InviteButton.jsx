import { Button } from "../../components/Button";

export const InviteButton = ({ workoutDetails }) => {
  const inviteFriend = () => {
    const { trainingType, location, duration, workoutDateAndTime } =
      workoutDetails;

    if (!trainingType || !location || !duration || !workoutDateAndTime) {
      alert("Please fill in all fields before inviting a friend.");
      return;
    }

    const formattedDateTime = formatDateTime(workoutDateAndTime);

    const message = `Hey! I'm doing a ${trainingType} workout at the ${location} on ${formattedDateTime}. Wanna join me to my challenge? `;

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button onClick={inviteFriend}>Invite a Friend to your challenge</Button>
  );
};

const formatDateTime = (dateTimeStr) => {
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
