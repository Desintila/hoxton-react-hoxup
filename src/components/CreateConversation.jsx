function CreateConversation({ user, createConversation }) {

    return (
        <li><button className="chat-button" onClick={() => createConversation(user.id)}>
            <img
                className="avatar"
                height="50"
                width="50"
                alt=""
                src={user.avatar}
            />
            <div>
                <h3>{user.firstName}</h3>
            </div>
        </button>
        </li>
    )
}

export default CreateConversation