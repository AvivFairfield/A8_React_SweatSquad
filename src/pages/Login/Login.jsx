import React, { useState } from "react";
import { Paper } from "../../components/Paper";
import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/SubmitButton";
import { Checkbox } from "../../components/Checkbox";
import { postRequest } from "../../api";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (id, value) => {
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const { email, password } = formState;
    if (!email || !password) return;

    try {
      const loginResponse = await postRequest("/login", {
        email: email,
        password: password,
      });

      if (loginResponse?.status === "success") {
        const userEmail = email;
        const userFirtname = loginResponse?.first_name;
        const userLastname = loginResponse?.last_name;

        localStorage.setItem("email", userEmail);
        localStorage.setItem("firstname", userFirtname);
        localStorage.setItem("lastname", userLastname);

        navigate("/");
      } else {
        alert(loginResponse?.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignup = () => {
    navigate("/register");
  };

  return (
    <div className="grid place-items-center py-5">
      <Paper>
        <div className="text-center mb-3 font-bold">
          <h2 className="text-lg">Sign In</h2>

          <p className="text-gray-500 text-sm">
            Enter your personal information
          </p>
        </div>

        <form onSubmit={handleSubmitForm}>
          <Input
            id="email"
            labelText="Email"
            type="email"
            placeholder="Enter Email"
            value={formState.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          <Input
            id="password"
            labelText="Password"
            type="password"
            placeholder="Enter Password"
            value={formState.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />

          <Checkbox
            id="rememberMe"
            labelText="Remember me"
            placeholder="Remember me"
          />

          <p className="text-sm text-sky-600 hover:text-sky-500 mb-3 cursor-pointer">
            Forgot password
          </p>

          <div className="text-center mt-2 flex flex-col gap-1">
            <SubmitButton type="submit">Sign In</SubmitButton>
            <p
              onClick={handleSignup}
              className="text-sm text-sky-600 hover:text-sky-500 cursor-pointer"
            >
              Don't have an account? sign up here
            </p>
          </div>
        </form>
      </Paper>
    </div>
  );
};
