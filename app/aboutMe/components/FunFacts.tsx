import React from "react";

const facts = [
    {id:0, title:'me', description:'I have rabbits and a 3 year old Shiba Inu'},
    {id:1, title:'Fact', description:'I have been stung by a scorpion'},
    {id:2, title:'Fact', description:'I have been lost on a trail in Hawaii for about 5 hours'},
]
export default function FunFacts(){
    return(
        <>
            {facts.map((fact, id) => (
                <div  key = {fact.id}
                className={`p-6 border rounded-lg shadow-lg lg:hover:scale-105 ransform transition-transform ${id %2===0 ? "border-sky-900": "border-sky-500" }`}
                >
                    
                    <div className="text-sm md:text-xl  ">
                    {fact.description}
                    </div>
                </div>
            ))}
          </>  
      
    )
}