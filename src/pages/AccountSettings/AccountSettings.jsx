import React from "react";

import { Paper } from "../../components/Paper";

import { UserMeasurements } from "./UserMeasurements";
import { ChangePassword } from "./ChangePassword";

export const AccountSettings = () => {
	const firstName = localStorage.getItem("firstname");
	const lastName = localStorage.getItem("lastname");
	const email = localStorage.getItem("email");

	return (
		<div className="grid place-items-center py-5">
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
