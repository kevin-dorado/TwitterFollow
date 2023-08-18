import { useState } from "react"
export function TwitterFolowCard({userName,}){
    const [isFollowing, setIsFollowing]= useState(false)
    const imgAvatar = `https://unavatar.io/${userName}`

    

    const text = isFollowing ? "Siguiendo"  : "Seguir"

    
    const handleClick = () => {
            setIsFollowing(!isFollowing)
    }

    return(
    
    <article >         
        <div className="flex p-1 w-full flex-1 justify-between">
            <div className="flex">
                <img className="rounded-full w-10 h-10 mt-1 ml-1" 
                    src={imgAvatar} 
                />  
            <div className="flex flex-col ml-2">
                <p className="text-gray-50 ">{userName}</p>
                <p className="text-gray-500 ">@{userName}</p>
            </div>
            </div>
        
            <button onClick={handleClick} className={`${isFollowing ? "bg-slate-800 hover:bg-slate-500 rounded-xl m-2 flex px-3 items-center text-white font-semibold " :"bg-slate-100 hover:bg-slate-300 rounded-xl m-2 flex px-3 items-center text-black"}`}>{text}</button>
        </div>
    </article>
    )
}