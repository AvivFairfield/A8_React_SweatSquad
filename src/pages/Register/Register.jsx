import React, { useState } from "react";
import { Paper } from "../../components/Paper";
import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/SubmitButton";
import { postRequest } from "../../api";
import { useNavigate } from "react-router-dom";
import { Radio } from "../../components/Radio";

export const Register = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    fullname: "",
    email: "",
    password: "",
    birthdate: "",
    weight: "",
    goal: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const { birthdate, email, fullname, gender, goal, password, weight } =
      formState;

    if (
      !email ||
      !password ||
      !fullname ||
      !birthdate ||
      !weight ||
      !goal ||
      !gender
    ) {
      return;
    }

    try {
      const registerResponse = await postRequest("/registeruser", {
        email,
        password,
        fullname,
        birthdate,
        weight,
        goal,
        gender,
      });

      if (registerResponse?.status === "success") {
        console.log("Success:", registerResponse);
        const userEmail = email;
        const userFirtname = registerResponse?.first_name;
        const userLastname = registerResponse?.last_name;

        localStorage.setItem("email", userEmail);
        localStorage.setItem("firstname", userFirtname);
        localStorage.setItem("lastname", userLastname);

        navigate("/");
      } else {
        alert(registerResponse?.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleGenderChange = (value) => {
    setFormState((prev) => ({
      ...prev,
      gender: value,
    }));
  };

  return (
    <div className="grid place-items-center py-5">
      <Paper>
        <div className="text-center mb-6 font-bold">
          <h2 className="text-lg">Sign Up</h2>
        </div>

        <form onSubmit={handleSubmitForm}>
          <div className="flex items-end space-x-4">
            <Input
              id="fullname"
              labelText="Full name"
              placeholder="Enter Full Name"
              value={formState.fullname}
              onChange={handleInputChange}
            />
            <Input
              id="email"
              labelText="Email"
              type="email"
              placeholder="Enter Email"
              value={formState.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-end space-x-4">
            <Input
              id="password"
              labelText="Password"
              type="password"
              placeholder="Enter Password"
              value={formState.password}
              onChange={handleInputChange}
            />
            <Input
              id="birthdate"
              labelText="Birthdate"
              type="datetime-local"
              placeholder="Enter Birthdate"
              value={formState.birthdate}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-end space-x-4">
            <Input
              id="weight"
              labelText="Weight (Kg)"
              type="number"
              placeholder="Enter Weight"
              value={formState.weight}
              onChange={handleInputChange}
            />
            <Input
              id="goal"
              labelText="Goal (Kg)"
              type="number"
              placeholder="Enter Goal"
              value={formState.goal}
              onChange={handleInputChange}
            />
          </div>

          <div className="text-center">
            <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
              Gender
            </label>
            <div className="flex gap-5 mx-auto my-0 justify-center">
              <Radio
                id="male"
                labelText="Male"
                checked={formState.gender === "male"}
                onChange={() => handleGenderChange("male")}
              />
              <Radio
                id="female"
                labelText="Female"
                checked={formState.gender === "female"}
                onChange={() => handleGenderChange("female")}
              />
            </div>
          </div>

          <div className="text-center mt-1">
            <SubmitButton type="submit">Sign In</SubmitButton>
            <p
              onClick={() => navigate("/login")}
              className="text-sm text-sky-600 hover:text-sky-500 cursor-pointer"
            >
              Already have an account? sign in here
            </p>
          </div>
        </form>
      </Paper>
    </div>
  );
};
