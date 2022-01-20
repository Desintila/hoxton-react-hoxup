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
    }, [])


    useEffect(() => {
        if (user === null)
            navigate('/')
    }, [])

    function createConversation(participantId) {
        return fetch('http://localhost:4000/conversations', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                participantId: participantId,
                userId: user.id
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
                        value=""
                    />
                </form>
                <SideChat users={users} user={user} conversations={conversations} createConversation={createConversation} />

            </aside>
            {params.conversationId ? (
                <main className="conversation">

                    <header className="panel"></header>


                    <MessagesList />


                    <footer>
                        <form className="panel conversation__message-box">
                            <input
                                type="text"
                                placeholder="Type a message"

                                value=""
                            /><button type="submit">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                                    ></path>
                                </svg>
                            </button>
                        </form>
                    </footer>
                </main>
            ) : null}
        </div>
    )
}
export default MainApp