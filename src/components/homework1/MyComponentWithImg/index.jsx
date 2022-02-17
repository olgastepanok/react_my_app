import meerkat from "../../../assets/img/meerkat.jpg";
const MyComponentWithImg = (props)=> {
    return (
    <div>
        <h1> Hello {props.name} </h1>
        <img src={meerkat} alt="meerkat"/>
    </div>
    );
}
export default MyComponentWithImg;