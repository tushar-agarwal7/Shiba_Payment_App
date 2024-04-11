interface SelectProps{
  onSelect:(value:string)=>void;
  options:{
    key:string,
    value:string,
  }[];
}

export const Select=({options,onSelect}:SelectProps)=>{
  return (
    <div>
      <select onChange={(e)=>{
        onSelect(e.target.value)
      }}>
        {options.map(option=><option value={option.key}>{option.value}</option>)}
      </select>
    </div>
  )
}