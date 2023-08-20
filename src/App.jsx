

import React from "react"
import { TwitterFolowCard } from "./TwitterFollowcard"
import { SearchFollow } from "./searchFollow"


const Showuser=()=>{
  const users = JSON.parse(localStorage.getItem("user"))
  if (users) {
    return(
      users.map((user) => {
        return <TwitterFolowCard userName={user} name={`@${user}`} />;
      })
    )
  }
}


/* app */
export const App = () => {
return (

<div className="flex items-center justify-center min-h-screen  bg-sky-200" >
  <article className="bg-slate-700  m-3 rounded-md  w-96 drop-shadow-lg">
  
    <div className="py-2 flex  flex-1 justify-between ">
      <h2 className="text-gray-50  m-2 font-medium" > A quien seguir</h2>
      <SearchFollow />
    </div>
    <div>
      <TwitterFolowCard userName="elonmusk" name="@elnaves" /> 
      <TwitterFolowCard userName="valordolarblue" /> 
      <TwitterFolowCard userName="nicolasamoroso" /> 
      {Showuser()} 
    </div>
 
  </article>
</div>
)
}