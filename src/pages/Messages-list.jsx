import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Conversation from "../components/Conversation"
import MessageForm from "../components/MessageForm"

function MessagesList({ user }) {
    const params = useParams()

    const [currentConversation, setCurrentConversation] = useState(null)

    useEffect(() => {
        if (params.conversationId) {
            fetch(`http://localhost:4000/conversations/${params.conversationId}?_embed=messages`)
                .then(resp => resp.json())
                .then(conversation => setCurrentConversation(conversation))
        }
    }, [params.conversationId])

    function createMessage(message) {
        return fetch('http://localhost:4000/messages', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                userId: user.id,
                messageText: message,
                conversationId: Number(params.conversationId)
            })
        }).then(resp => resp.json())
            .then(newMessage => {
                const copy = JSON.parse(JSON.stringify(currentConversation))
                copy.messages.push(newMessage)
                setCurrentConversation(copy)
            })
    }

    if (currentConversation === null) return <h1>Loading</h1>

    return (

        <main className="conversation">

            <header className="panel"></header>


            <ul className="conversation__messages">
                {
                    currentConversation.messages.map(conversation => (
                        <Conversation key={conversation.id} conversation={conversation} user={user} />
                    ))
                }
            </ul>

            <footer>

                <MessageForm createMessage={createMessage} />

            </footer>
        </main>
    )
}

export default MessagesList