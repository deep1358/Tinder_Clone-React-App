import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import "./ChatScreen.css"

const ChatScreen = () => {

    const [input, setInput] = React.useState("")

    const handleClick = (e) => {
        e.preventDefault()
        setMsgs([...msgs, { message: input }])
        setInput('')
    }

    const [msgs, setMsgs] = React.useState([
        {
            name: "Emma",
            image: "data:image/png;base64,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",
            message: "Hii"
        },
        {
            name: "Emma",
            image: "data:image/png;base64,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",
            message: "Hello"
        },
        {
            message: "Hii"
        }
    ])

    return (
        <div className="chatscreen">
            <p>YOU MATCHED WITH EMMA ON 11/10/2000</p>
            {msgs.map(message => (
                message.name ? (
                    <div className="chatscreen_message">
                        <Avatar
                            className="chatscreen_image"
                            alt={message.name}
                            src={message.image} />
                        <p className="chatscreen_text">{message.message}</p>
                    </div>
                ) : (
                        <div className="chatscreen_message">
                            <p className="chatscreen_textUser">{message.message}</p>
                        </div>
                    )
            ))}
            <div>
                <form className="chatscreen_input">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a Message" className="chatscreen_inputfield" />
                    <button
                        type="submit"
                        onClick={handleClick}
                        className="chatscreen_inputbutton">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
