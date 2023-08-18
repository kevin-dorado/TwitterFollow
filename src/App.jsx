

import React from "react"
import { TwitterFolowCard } from "./TwitterFollowcard"
import { SearchFollow } from "./SearchFollow"

export const App = () => {

return (

<div className="flex items-center justify-center min-h-screen  bg-sky-200" >
<article className="bg-slate-700  m-3 rounded-md  w-96 drop-shadow-lg">
 
  <div className="py-2 flex  flex-1 justify-between ">
    <h2 className="text-gray-50  m-2 font-medium" > A quien seguir</h2>
    <SearchFollow />
  </div>
  <TwitterFolowCard userName="elonmusk" name="@elnaves" isFollowing={true}/> 
  <TwitterFolowCard userName="kikobeats" name="@elcubo"isFollowing={false}/> 
  <TwitterFolowCard userName="x" name="@x"isFollowing={false}/> 
  <TwitterFolowCard userName="valordolarblue" name="@ValorDolarBlue"isFollowing={false}/> 
  <TwitterFolowCard userName="nicolasamoroso" name="@niconiconii"isFollowing={false}/> 
  
  </article>
</div>




)




}