import ShowImg from "./ShowImg"

// intro to props, here it's taking 2 props
export default function SayMessage(props) {
    return (
        <>
            <p>{props.msg}{props.exclamation}</p>
            <ShowImg />
        </>
    )
}

// handles the solution that occurs with missing properties
SayMessage.defaultProps = {
    msg : "Hello World!",
    exclamation: "!"
}