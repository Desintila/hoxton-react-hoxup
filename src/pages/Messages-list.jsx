import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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



    if (currentConversation === null) return <h1>Loading</h1>

    return (
        <ul className="conversation__messages">
            {
                currentConversation.messages.map(conversation => (
                    <li className={`${conversation.userId === user.id ? 'outgoing' : ''}`}>
                        <p>
                            {conversation.messageText}
                        </p>
                    </li>
                ))
            }
        </ul>

    )
}
export default MessagesList