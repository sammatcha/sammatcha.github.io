'use client';
import React, { useState } from "react";

const facts = [
    {id:0, title:'me', description:'I have rabbits and a 3 year old Shiba Inu', answer: true},
    {id:1, title:'Fact', description:'I have been stung by a scorpion', answer: true},
    {id:2, title:'Fact', description:'I have been lost on a trail in Hawaii for about 5 hours', answer: true},
    {id:3, title:'Fact', description:'I have never broken a bone', answer: false},

]



export default function FunFacts(){
    const [selectedId, setSelectedId] = useState<number|null>(null);
    
    const handleOnClick = (id:number) => {

        setSelectedId(id);
        console.log(id);
        
        setTimeout(() => {
            setSelectedId(null);
        }, 5000);
    }

    return(
        <>
            {facts.map((fact, id) => (
                <div onClick={() => handleOnClick(fact.id)} key = {fact.id}
                className={`px-5 py-3 border rounded-lg shadow-lg lg:hover:scale-105 cursor-help transform transition-transform ${id %2===0 ? "border-sky-900": "border-sky-500" }
                  ${selectedId === fact.id ? (fact.answer ? 'border-red-500': 'border-green-500') : ''}  `}
                >
                    
                    <div className="text-sm md:text-lg  ">
                    {fact.description}
                    </div>
                </div>
            ))}
          </>  
      
    )
}