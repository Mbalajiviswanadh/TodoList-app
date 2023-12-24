"use client";

import { useState } from 'react';
import ModalPopUp from '../Modal/ModalPopUp';
import './addtask.css'
import { RiAddLine } from "react-icons/ri";
import Form from '../Form/Form';
import FormInput from '../Inputs/FormInput';
import SubmitButton from '../Form/SubmitButton';
import { create } from '@/app/actions/todoActions';
const AddTask = () => {
  const [modalOpen, setModalOpen] =useState<boolean>(false);
  return (
    <div>
        <button onClick={()=>setModalOpen(true)} className='mt-8 btn btn-primary addbtn'>Add New Task <RiAddLine className='ml-1' size={20} /></button>

        <ModalPopUp modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Form action={create} className='m-auto'>
          <div className="flex">
            <FormInput
            name='input'
            type='text'
            placeholder='Add Todo..'

            />
            <div className="addbutton ml-10">
            <SubmitButton
            type='submit'
            text='Add'
            />
            </div>
           
          </div>
        </Form>
        </ModalPopUp>
    </div>
  )
}

export default AddTask
