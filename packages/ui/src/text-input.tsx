interface TextInputProps{
  label:string,
  placeholder:string,
  onChange: (value: string) => void;

}

export const TextInput = ({label,placeholder,onChange}:TextInputProps ) => {
  return (
    <div className="flex">
<label htmlFor="box" className="text-xl">{label}</label>
<input id="box" type="text" className="border border-slate-400 ml-2" placeholder={placeholder}  onChange={(e)=>{
  onChange(e.target.value)
}}  /> 
    </div>
  );
};
