import { ReactNode } from "react";

export default function Button( {children} : {children: ReactNode} ) {
    return(
        <button className="w-1/2 h-32 bg-blue-500 hover:bg-blue-700 text-white font-bold 
        py-2 px-4 border border-blue-700 rounded">
            {children}
        </button>
    )
}