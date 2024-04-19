// Import React and necessary modules
import React from "react";

import { Paper } from "../../components/Paper";// Import Paper component

import { UserMeasurements } from "./UserMeasurements";// Import UserMeasurements component
import { ChangePassword } from "./ChangePassword";// Import ChangePassword component
import { ThemeToggleButton } from "../../components/ThemeToggleButton/ThemeToggleButton";// Import ThemeToggleButton component

// Define the AccountSettings component as a functional component
export const AccountSettings = () => {
    // Retrieve user information from localStorage
    const firstName = localStorage.getItem("firstname");
    const lastName = localStorage.getItem("lastname");
    const email = localStorage.getItem("email");
    // Render the component
    return (
        <div className="grid place-items-center py-5">
            <ThemeToggleButton />
            <h1 className="text-2xl font-bold text-center text-white mb-6">
                Account settings
            </h1>
            <Paper className="bg-white lg:w-7/12 m-3 flex gap-4">
                <h2 className="text-lg font-semibold">General Information</h2>

                <div>
                    <h4 className="text-sm font-bold">Full name</h4>
                    <p id="fullname" className="mt-1 text-sm">
                        {firstName} {lastName}
                    </p>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-sm font-bold">Account Details</h4>
                    <p className="text-sm mt-1">{email}</p>

                    <ChangePassword />
                </div>

                <UserMeasurements />
            </Paper>
        </div>
    );
};
