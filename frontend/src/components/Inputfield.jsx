


const Inputfield=({
    label,
    type,
    id,
    name,
    ...props
})=>{

    return(
<div className="form-group mt-2">
    <label
    htmlFor={id}>
        
    {label}
    </label>
    <input
    type={type}
    className="form-control"
    required
    autoComplete="off"
    id={id}
    name={name}
    {...props}
    />
</div>
    )
}
export default Inputfield;