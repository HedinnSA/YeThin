"use client";

import { testConnection } from "@/db/actions";

export default function LinkButton(){
    async function handleClick(){
        const result = await testConnection();
        console.log(result);
    }

    return (
        <button onClick={handleClick} className="w-1/2 h-32 bg-blue-500 hover:bg-blue-700 text-white font-bold 
        py-2 px-4 border border-blue-700 rounded">
            Test DB Connection
        </button>
    )
}