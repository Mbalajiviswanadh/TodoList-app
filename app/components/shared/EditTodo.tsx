"use client"
import { edit } from "@/app/actions/todoActions"
import SubmitButton from "../Form/SubmitButton"
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import Form from "../Form/Form";
import FormInput from "../Inputs/FormInput";
import { todotype } from "@/types/todotype";


const EditTodo = ({todo}:{todo:todotype}) => {
    const[editTodo,setEditTodo]=useState(false)

    const handleEdit=()=>{
        if(todo.isCompleted===true){
            return;
        }
        setEditTodo(!editTodo);
    };

    const handleSubmit=()=>{
        if(todo.isCompleted===true){
            return;
        }
        setEditTodo(false)
    };
  return (
    <>
    <div className="flex justify-end">
        <SubmitButton
        onClick={handleEdit}
        text={<MdEdit size={15}/>}
        actionButton
        />

        {editTodo?(
           
            <Form
            action={edit}
            onSubmit={handleSubmit}
            >
            <FormInput
            name="inputId"
            value={todo.id}
            type="hidden"
            />
            
            <div className="flex ml-5 justify-end">
            <FormInput
            type="text"
            name="newTitle"
            placeholder="Edit Todo..."
            />
            <div className="editsave ml-5">
            <SubmitButton  type="submit" text="save"/>
            </div>
            </div>

            </Form>
        ):null}
      
    </div>
    </>
  );
}

export default EditTodo
