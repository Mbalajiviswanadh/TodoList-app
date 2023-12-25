// <<<<<<< HEAD
// "use client";
// import clsx from "clsx";
// import { ReactNode } from "react";
// import './submit.css'

// interface buttonProps{
//     type?: "button" | "submit" | "reset"
//     text : string | ReactNode
//     onClick? :()=> void
//     actionButton?: boolean
// }
// const SubmitButton = ({type,text,onClick,actionButton}:buttonProps) => {
//   return (
//    <>
//    <button
//    onClick={onClick}
//    type={type}
//    className={clsx(
//     actionButton && ' rounded-full p-2 text-white', " btn btn-primary submitbtn"
//    )}
//    >
//     {text}
//    </button>
//    </>
//   )
// }

// export default SubmitButton
// =======
"use client";
import clsx from "clsx";
import { ReactNode } from "react";
import './submit.css'

interface buttonProps{
    type?: "button" | "submit" | "reset"
    text : string | ReactNode
    onClick? :()=> void
    actionButton?: boolean
}
const SubmitButton = ({type,text,onClick,actionButton}:buttonProps) => {
  return (
   <>
   <button
   onClick={onClick}
   type={type}
   className={clsx(
    actionButton && ' rounded-full p-2 text-white', " btn btn-primary submitbtn"
   )}
   >
    {text}
   </button>
   </>
  )
}

export default SubmitButton
