interface inputProps {
  name:string;
  type : string;
  placeholder?: string;
  value?: string ;
}

const FormInput = ({name, type, placeholder, value}:inputProps) => {
  return (
    <>
      <input
      className="input input-bordered input-primary w-full max-w-xs"
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      />
    </>
  )
}

export default FormInput
