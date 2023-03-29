// intro to props, here it's taking 2 props
export default function SayMessage(props) {
    return (
        <>
            <p>{props.msg}{props.exclamation}</p>
        </>
    )
}

SayMessage.defaultProps = {
    msg : "Hello World!"
}