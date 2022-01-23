import { useNavigate } from "react-router-dom"

function Settings({ show, setShow, user, setUser, users, setUsers }) {
    const navigate = useNavigate()
    if (!show) {
        return null
    }
    function logout() {
        setUser(null)
    }
    function deleteAccount(id) {
        return fetch(`http://localhost:4000/users/${id}`, {
            method: 'DELETE'
        })
    }

    function removeAccount(user) {
        let update = JSON.parse(JSON.stringify(users))
        deleteAccount(user.id)
        update = update.filter(Post => Post.id !== user.id)
        setUsers(update)
        navigate('/')
    }
    return (
        <section className="add-modal">
            <div className="modal">
                <button className="close-button" onClick={() => setShow(false)}>X</button>
                <h2 onClick={() => logout()}>Logout</h2>
                <h2 style={{ color: 'red' }} onClick={() => removeAccount(user)}>Delete account</h2>
            </div>
        </section>
    )
}
export default Settings