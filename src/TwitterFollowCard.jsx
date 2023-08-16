export function TwitterFolowCard({userName,name}){
    const imgAvatar = `https://unavatar.io/${userName}`

    return(

    <article > 
      
            
        <div class="flex p-1 w-full flex-1 justify-between">
            <div className="flex">
                <img className="rounded-full w-10 h-10 mt-1 ml-1" 
                    src={imgAvatar} 
                />  
            <div className="flex flex-col ml-2">
                <p className="text-gray-50 ">{userName}</p>
                <p className="text-gray-500 ">{name}</p>
            </div>
            </div>
        
            <button className="bg-slate-100 hover:bg-slate-300 rounded-xl m-2 flex px-3 items-center text-black">Seguir</button>
        </div>
    </article>
    )
}