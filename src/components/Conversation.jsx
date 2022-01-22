function Conversation({ conversation, user }) {
    return (
        <li className={`${conversation.userId === user.id ? 'outgoing' : ''}`}>
            <p>
                {conversation.messageText}
            </p>
        </li>
    )
}
export default Conversation