import { useState } from "react"
import NewChat from "./StartChat"

function SideChat({ users, user }) {
    const [show, setShow] = useState(false)

    function handleOnClick() {
        setShow(true)
    }

    return (
        <ul>

            <li>
                <button className="chat-button" onClick={() => handleOnClick()}>
                    <div><h3>+ Start a new Chat</h3></div>
                </button>

                <NewChat show={show} setShow={setShow} users={users} user={user} />
            </li>

            <li>
                <button className="chat-button">
                    <img
                        className="avatar"
                        height="50"
                        width="50"
                        alt=""
                        src="https://robohash.org/2"
                    />
                    <div>
                        <h3>Tin Man</h3>
                        <p>Last message</p>
                    </div>
                </button>
            </li>
        </ul>

    )
}
export default SideChat