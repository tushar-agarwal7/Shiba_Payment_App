interface TextInputProps{
  label:string,
  placeholder:string,
  onChange: (value: string) => void;

}

export const TextInput = ({label,placeholder,onChange}:TextInputProps ) => {
  return (
    <div className="flex items-center">
    <label htmlFor="box" className="text-xl">{label}</label>
    <input
      id="box"
      type="text"
      className="border border-slate-400 ml-2 px-4 py-2 rounded-md focus:outline-none  w-1/2 focus:border-blue-500"
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  </div>
  
  );
};
