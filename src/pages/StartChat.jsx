import CreateConversation from "../components/CreateConversation"

function NewChat({ show, setShow, users, user, createConversation, conversations }) {
    if (!show) {
        return null
    }


    function filterUser() {
        let filteredUsers = users

        filteredUsers = filteredUsers.filter(filterUser => {
            return filterUser !== user
        })
        filteredUsers = filteredUsers.filter(user => {
            for (const conversation of conversations) {
                if (conversation.userId === user.id)
                    return false
                else if (conversation.participantId === user.id)
                    return false

            }
            return true
        })
        return filteredUsers
    }

    return (
        <section className="add-modal">
            <div className="modal">
                <button className="close-button" onClick={() => setShow(false)}>X</button>
                <h1>Pick a user to talk to</h1>
                <ul>{
                    filterUser().map(user => (
                        <CreateConversation key={user.id} user={user} createConversation={createConversation} />
                    ))}


                </ul>
            </div>
        </section>
    )
}
export default NewChat