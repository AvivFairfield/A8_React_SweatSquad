// Import React, useState hook, and necessary modules
import React, { useState } from "react";
import { Dialog } from "../../components/Dialog";// Import Dialog component
import { Input } from "../../components/Input";// Import Input component
import { Button } from "../../components/Button/Button";// Import Button component
import { postRequest } from "../../api";// Import postRequest function from API

// Define the ChangePassword component as a functional component
export const ChangePassword = () => {
    // State to manage the dialog open/close status and password inputs
    const [open, setOpen] = useState(false);
    const [passwords, setPasswords] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });
// Function to handle closing the dialog and resetting password inputs
    const handleClose = () => {
        setOpen(false);
        setPasswords({
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
        });
    };

    // Function to handle changes in password inputs
    const handleChangePassword = (e) => {
        setPasswords((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

   // Function to handle form submission
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const { currentPassword, newPassword, confirmNewPassword } =
                passwords;

            // Check if new password matches the confirm password
            if (newPassword === confirmNewPassword) {
                // Send a POST request to change the password
                const response = await postRequest("/changepassword", {
                    email: localStorage.getItem("email"),
                    oldpw: currentPassword,
                    newpw: newPassword,
                });
                // If the request is successful, close the dialog
                if (response?.status === "success") {
                    handleClose();
                }
                // Display the response message
                alert(response?.message);
            } else {
                // If passwords don't match, display an alert
                alert("password does not match");
            }
        } catch (error) {
             // Log any errors that occur during the process
            console.error("Error:", error);
        }
    };
    // Render the component
    return (
        <div>
            <div className="mt-3">
                <Button
                    className="text-sm border-none"
                    onClick={() => setOpen(true)}
                >
                    Edit Password
                </Button>
            </div>
            <Dialog title="Change Password" open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit} className="w-70 space-y-5 mt-6">
                    <Input
                        id="currentPassword"
                        labelText="Current Password"
                        type="password"
                        className="mt-1"
                        placeholder="Enter your current password"
                        value={passwords.currentPassword}
                        onChange={handleChangePassword}
                    />
                    <Input
                        id="newPassword"
                        labelText="New Password"
                        type="password"
                        placeholder="Enter your new password"
                        value={passwords.newPassword}
                        onChange={handleChangePassword}
                    />
                    <Input
                        id="confirmNewPassword"
                        labelText="Confirm New Password"
                        type="password"
                        placeholder="Confirm your new password"
                        value={passwords.confirmNewPassword}
                        onChange={handleChangePassword}
                    />
                    <div className="text-right">
                        <Button type="submit" className="text-sm">
                            Submit
                        </Button>
                    </div>
                </form>
            </Dialog>
        </div>
    );
};
