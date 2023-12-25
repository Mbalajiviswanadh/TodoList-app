interface ModalProps{
    modalOpen:boolean;
    setModalOpen:(open :boolean)=> boolean|void;
    children: React.ReactNode
}

const ModalPopUp: React.FC<ModalProps> = ({modalOpen ,setModalOpen,children}) => {
  return (
    <div>
    <dialog  className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button onClick={()=>setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg">Add your TO-DO!</h3>
        <div  className="mt-5">
        {children}
        </div>
      </div>
    </dialog>
    </div>
  )
}

export default ModalPopUp
