import SideChat from "./Side-chat"
import MessagesList from "./Messages-list"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function MainApp({ user, users }) {
    const navigate = useNavigate()

    const [conversations, setConversations] = useState([])

    const params = useParams()

    useEffect(() => {
        if (user === null) return
        fetch(`http://localhost:4000/conversations?userId=${user.id}`)
            .then(resp => resp.json()
                .then(conversations => setConversations(conversations)))
    }, [user])


    useEffect(() => {
        if (user === null)
            navigate('/')
    }, [user, navigate])

    function createConversation(participantId) {
        return fetch('http://localhost:4000/conversations', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                userId: user.id,
                participantId: participantId


            })
        }).then(resp => resp.json()).then(newConversation => {
            setConversations([...conversations, newConversation])
        })
    }


    if (user === null) return <h1>Not signed in</h1>

    return (
        <div className="main-wrapper">

            <aside>

                <header className="panel">
                    <img
                        className="avatar"
                        width="50"
                        height="50"
                        src={user.avatar}
                        alt=""
                    />
                    <h3>{user.firstName} {user.lastName}</h3>
                </header>


                <form className="aside__search-container">
                    <input
                        type="search"
                        name="messagesSearch"
                        placeholder="Search chats"

                    />
                </form>
                <SideChat users={users} user={user} conversations={conversations} createConversation={createConversation} />

            </aside>
            {params.conversationId ? (

                <MessagesList user={user} />

            ) : null}
        </div>
    )
}
export default MainApp