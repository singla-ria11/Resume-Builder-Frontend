import { Lock, Mail, User2Icon } from "lucide-react";
import React from "react";
import { useSearchParams } from "react-router-dom";

const Login = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const authState = searchParams.get("state") || "login";

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const inputWrapper =
    "flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2";
  const inputClass = "border-none outline-none ring-0";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {authState === "login" ? "Login" : "Sign up"}
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Please {authState} to continue
        </p>
        {authState !== "login" && (
          <div className={inputWrapper}>
            <User2Icon size={16} color="#6B7280" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={inputClass}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className={inputWrapper}>
          <Mail size={13} color="#6B7280" />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className={inputClass}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={inputWrapper}>
          <Lock size={13} color="#6B7280" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={inputClass}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-4 text-left text-green-500">
          <button className="text-sm" type="reset">
            Forget password?
          </button>
        </div>
        <button
          type="submit"
          className="mt-2 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-70 transition-opacity"
        >
          {authState === "login" ? "Login" : "Sign up"}
        </button>
        <p
          onClick={() => {
            setSearchParams({
              state: authState === "login" ? "register" : "login",
            });
          }}
          className="text-gray-500 text-sm mt-3 mb-11"
        >
          {authState === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <a href="#" className="text-green-500 hover:underline">
            click here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
