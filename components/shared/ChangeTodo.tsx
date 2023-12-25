
import { todo } from "node:test"
import Form from "../Form/Form"
import SubmitButton from "../Form/SubmitButton"
import FormInput from "../Inputs/FormInput"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { changeStatus } from "@/app/actions/todoActions";
import { todotype } from "@/types/todotype";

const ChangeTodo = ({todo} : {todo:todotype}) => {


  return (
    <>
    <Form action={changeStatus}>
        <FormInput
        name="inputId"
        value={todo.id}
        type="hidden"
        />
        <SubmitButton actionButton  text={<IoIosCheckmarkCircleOutline size={18} />} />
    </Form>
    </>
  )
}

export default ChangeTodo
