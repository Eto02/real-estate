import axios from "axios";
import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myAxios from "../lib/axiosConfig";
interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [erorr, setErorr] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const nav = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setErorr("");
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const data: RegisterFormData = {
      username,
      email,
      password,
    };

    try {
      await myAxios.post("/api/auth/register", data);
      nav("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        let errorMessage: string = error.response?.data?.errors;
        if (typeof errorMessage !== "string")
          errorMessage = error.response?.data?.errors[0]?.message;
        setErorr(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex">
      <div className="basis-3/5 h-screen flex items-center justify-center">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input
            className="p-2 border-1 border-solid border-gray-400 rounded"
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            className="p-2 border-1 border-solid border-gray-400 rounded"
            name="email"
            type="text"
            placeholder="Email"
          />
          <input
            className="p-2 border-1 border-solid border-gray-400 rounded"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button
            disabled={isLoading}
            className="p-3 rounded border-0 bg-[teal] text-white font-bold cursor-pointer"
          >
            Register
          </button>
          {erorr && <span className="text-red-500/50">{erorr}</span>}
          <Link className="text-sm text-gray-border-gray-400 " to="/login">
            Do you have an account?
          </Link>
        </form>
      </div>
      <div className="hidden lg:block lg:basis-2/5 bg-[#84DCC6] relative">
        <img className="absolute w-[115%] right-0 " src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Register;
