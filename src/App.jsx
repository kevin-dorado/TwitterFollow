

import React from "react"
import { TwitterFolowCard } from "./TwitterFollowcard"

export  function App() {




return (

<>
<article className="bg-slate-700  m-3 rounded-md  w-96">
  <div className="my-2 flex">
    <h2 className="text-gray-50  m-2" > A quien seguir</h2>
  </div>
  <TwitterFolowCard userName="elonmusk" name="@elnaves" isFollowing={true}/> 
  <TwitterFolowCard userName="kikobeats" name="@elcubo"isFollowing={false}/> 
  <TwitterFolowCard userName="x" name="@x"isFollowing={false}/> 
  </article>
</>




)




}