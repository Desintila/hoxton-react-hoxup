import { useState } from "react"
import { useNavigate } from "react-router-dom"
import NewChat from "./StartChat"

function SideChat({ users, user, conversations, createConversation }) {
    const [show, setShow] = useState(false)

    function handleOnClick() {
        setShow(true)
    }
    const navigate = useNavigate()
    return (
        <ul>

            <li>
                <button className="chat-button" onClick={() => handleOnClick()}>
                    <div><h3>+ Start a new Chat</h3></div>
                </button>

                <NewChat show={show} setShow={setShow} users={users} user={user} conversations={conversations} createConversation={createConversation} />
            </li>

            {
                conversations.map(conversation => {

                    const talkingToId = user.id === conversation.userId ? conversation.participantId : conversation.userId
                    const talkingToUser = users.find(user => user.id === talkingToId)

                    return (

                        < li key={conversation.id} >
                            <button className="chat-button" onClick={() => navigate(`/logged-in/${conversation.id}`)}>
                                <img
                                    className="avatar"
                                    height="50"
                                    width="50"
                                    alt=""
                                    src={talkingToUser.avatar}
                                />
                                <div>
                                    <h3>{talkingToUser.firstName}  {talkingToUser.lastName}</h3>
                                    <p>Last message</p>
                                </div>
                            </button>
                        </li>

                    )
                })
            }
        </ul >

    )
}
export default SideChat