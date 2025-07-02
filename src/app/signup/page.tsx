"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignUpPage() {
    const router = useRouter();
    const [user, setuser] = React.useState({
        username: "",
        email: "",
        password: "",
    });
    const [isLoading, setLoading] = useState(false);

    const SignUp = async () => {
        try {
            setLoading(true);
            const res = await axios.post("/api/users/signup", user);
            console.log("SignUp successfull ", res.data);
            router.push("/login");
        } catch (error: any) {
            console.log("Sign up failed", error.message);
            console.log("Details:", error.response?.data);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-screen min-w-full flex justify-center items-center ">
                <div className="bg-gray-950 w-[350px] rounded-2xl overflow-hidden   ">
                    <h1 className="bg-gray-900 px-1 py-4 text-center text-xl font-bold">
                        Sign Up{isLoading ? "(Loading)" : ""}
                    </h1>
                    <div className="px-2  flex flex-col gap-3 pt-10 pb-2 items-center">
                        <div className="flex border-gray-900 border-[1px] rounded-2xl w-full overflow-hidden">
                            <label
                                htmlFor="username"
                                className="border-r-[1px] p-2  border-gray-900 min-w-[100px] text-center ">
                                Username :
                            </label>
                            <input
                                type="text"
                                name=""
                                id="username"
                                value={user.username}
                                onChange={(e) => setuser({ ...user, username: e.target.value })}
                                placeholder="Enter your user name"
                                className="p-2 grow-1 focus:outline-none "
                            />
                        </div>
                        <div className="flex border-gray-900 border-[1px] rounded-2xl w-full overflow-hidden">
                            <label
                                htmlFor="email"
                                className="border-r-[1px] p-2  border-gray-900 min-w-[100px] text-center ">
                                Email :
                            </label>
                            <input
                                type="text"
                                name=""
                                id="email"
                                value={user.email}
                                onChange={(e) => setuser({ ...user, email: e.target.value })}
                                placeholder="Enter your Email"
                                className="p-2 grow-1 focus:outline-none "
                            />
                        </div>
                        <div className="flex border-gray-900 border-[1px] rounded-2xl w-full overflow-hidden">
                            <label
                                htmlFor="password"
                                className="border-r-[1px] p-2  border-gray-900 min-w-[100px] text-center ">
                                Password :
                            </label>
                            <input
                                type="password"
                                name=""
                                id="password"
                                value={user.password}
                                onChange={(e) => setuser({ ...user, password: e.target.value })}
                                placeholder="Enter a password"
                                className="p-2 grow-1 focus:outline-none "
                            />
                        </div>
                        <button
                            className="p-2 py-1 bg-blue-400 text-lg font-bold w-[90px] rounded-2xl mt-4 "
                            onClick={SignUp}>
                            Sign Up
                        </button>
                        <Link href="./login" className="text-blue-400">
                            Click here to login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
