import "./App.css"

export default function Box(props){
    const styles = {border: "1px solid black " , width:"100px" , height : "100px", borderRadius : "6px",backgroundColor : props.on ? "pink":"gray"}
    return (
        <div
         className="myBox" 
         style={styles}
         onClick={()=>props.handleClick(props.id)}
         ></div>
    )
}