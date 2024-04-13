interface SelectProps{
  onSelect:(value:string)=>void;
  options:{
    key:string,
    value:string,
  }[];
}

export const Select=({options,onSelect}:SelectProps)=>{
  return (
    <div className="relative inline-flex ">
    <select
      className="block appearance-none w-40 bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      onChange={(e) => {
        onSelect(e.target.value);
      }}
    >
      {options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
  
  )
}