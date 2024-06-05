import React from "react";

const facts = [
    {id:0, text:'I have a dog and rabbits'},
    {id:1, text:'I have been stung by a scorpion'},
    {id:2, text:'I enjoy reading, traveling, and gaming'},
    {id:3, text:'I have been lost on a trail in Hawaii for 5 hours'},
]
export default function FunFacts(){
    return(
       <div className="mt-6 ">
            <div className="grid grid-cols-2 ">
            {facts.map((fact) => (
                <li  key = {fact.id}
                className="px-4 py-4 list-disc"
                >
                    {fact.text}
                </li>
            ))}
            </div>
      </div>
    )
}