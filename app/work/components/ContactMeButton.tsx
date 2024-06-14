'use client'
import React from "react"

export default function ContactMeButton(){
    return(
        <div>
            {/* TODO: LINK TO CONTACT FORM AT BOTTOM? */}
            <div className="border rounded-md max-w-[6rem] px-1 py-2 hover:bg-slightGreyBlue cursor-crosshair" onClick ={() => console.log('button clicked')}>Contact Me</div>
        </div>
    )
}