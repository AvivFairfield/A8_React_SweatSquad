import React, { useState } from "react";
import { Dialog } from "../../components/Dialog";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { postRequest } from "../../api";

export const ChangePassword = () => {
  const [open, setOpen] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleClose = () => {
    setOpen(false);
    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  const handleChangePassword = (e) => {
    setPasswords((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { currentPassword, newPassword, confirmNewPassword } = passwords;

      if (newPassword === confirmNewPassword) {
        const response = await postRequest("/changepassword", {
          email: localStorage.getItem("email"),
          oldpw: currentPassword,
          newpw: newPassword,
        });

        if (response?.status === "success") {
          handleClose();
        }

        alert(response?.message);
      } else {
        alert("password does not match");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="mt-3">
        <Button className="text-sm border-none" onClick={() => setOpen(true)}>
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
