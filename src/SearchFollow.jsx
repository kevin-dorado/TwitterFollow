
import { Search } from 'lucide-react';
import { TwitterFolowCard } from './TwitterFollowcard';


let arrayUser=[]

const searchUser = ()=>{

const  user =  document.getElementById("search").value  

if(user!="") {

    arrayUser.push(user)
    localStorage.setItem("user",JSON.stringify(arrayUser))


}

}

export function SearchFollow(){
    
    return(
        <>
            <div className='flex justify-center items-center  '>
            <input id='search' className="  h-7 rounded-l-md   mt-2 m-1 mr-0 bg-slate-500  focus:outline-none  text-gray-50 pl-1"  placeholder="Buscar" type="text"  />

            <button onClick={searchUser} className=' h-7 flex justify-center items-center bg bg-slate-600 rounded-r-md mt-1 p-1 mr-3 border-none hover:bg-slate-800'> <Search color='white' size={18}/> </button>


            
            </div>

        
            
        </>
       
    
    )   
}