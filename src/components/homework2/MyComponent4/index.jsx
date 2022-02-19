
const MyComponent4 = (props)=> {
    console.log(props);
    return (
    <div>
        {props.property==="true" && <h1> Property is false! </h1>}
        {props.name && <h3> Hello {props.name} </h3>}
    </div>
    );
}
export default MyComponent4;