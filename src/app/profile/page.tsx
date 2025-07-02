"use client";

import axios from "axios";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const router = useRouter();
    const LogOut = async () => {
        try {
            await axios.get("/api/users/logout");
            router.push("/login");
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl mb-2">Profile Page</h1>
                <button
                    className="px-2 py-1 bg-red-500 text-lg font-bold rounded-2xl hover:bg-red-600 "
                    onClick={LogOut}>
                    Log Out
                </button>
            </div>
        </div>
    );
}
