function NewChat({ show, setShow, users, user }) {
    if (!show) {
        return null
    }


    function filterUser() {
        let filteredUsers = users

        filteredUsers = filteredUsers.filter(filterUser => {
            return filterUser !== user
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
                        <li><button className="chat-button">
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
                    ))}


                </ul>
            </div>
        </section>
    )
}
export default NewChat