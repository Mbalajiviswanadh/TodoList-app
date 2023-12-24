"use client"
import { deleteTodo } from "@/app/actions/todoActions"
import { todotype } from "@/types/todotype"
import Form from "../Form/Form"
import FormInput from "../Inputs/FormInput"
import SubmitButton from "../Form/SubmitButton"
import { MdOutlineDelete } from "react-icons/md";


const DeleteTodo = ({todo}:{todo:todotype}) => {
  return (
    <>
      <Form action={deleteTodo}>
        <FormInput
        type="hidden"
        name="inputId"
        value={todo.id}
        />

        <SubmitButton actionButton text={<MdOutlineDelete  size={20}/>} type="submit"/>
      </Form>
    </>
  )
}

export default DeleteTodo
