import React, { useState } from "react";
import Frame from "../../assets/Frame.png";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", email);
    console.log("Password:", password);
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const existingUsernames = existingUsers.map((user) => user.username);
    if (!existingUsernames.includes(email)) {
      const newUser = { username: email, password, isAuthenticated };
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
    } else {
      console.log("Username already exists");
    }
  };
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 ">
        <div className="md:col-span-1">
          <img className="frame" src={Frame} alt="Example" />
        </div>
        {/* Second Column - Login Page */}
        <div class="relative flex flex-col items-center justify-center h-screen overflow-hidden">
          <div class="w-full p-6 bg-white  border-gray-600 rounded-md shadow-md lg:max-w-lg">
            <h1 class="text-3xl font-semibold text-center text-gray-700">
              login/ registration
            </h1>
            <form class="space-y-4">
              <div>
                <label class="label">
                  <span class="text-base label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  class="w-full input input-bordered"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  class="w-full input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button class="btn btn-neutral w-full" onClick={handleLogin}>
                  Sign In
                </button>
              </div>
              <div className="text-xs text-gray-600">
                <span> Already have an account? </span>
                <a
                  href="#"
                  class="text-xs text-gray-600 hover:underline hover:text-blue-600"
                >
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
