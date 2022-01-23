import { useState } from "react"
import Settings from "./Setttings"

function Header({ user, setUser, users, setUsers }) {

    const [show, setShow] = useState(false)

    function handleOnClick() {
        setShow(true)
    }
    return (
        <header className="panel">
            <img
                className="avatar"
                width="50"
                height="50"
                src={user.avatar}
                alt=""
            />
            <h3>{user.firstName} {user.lastName}</h3>
            <button className="settings" onClick={() => handleOnClick()}><img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png" alt="" /></button>
            <Settings show={show} setShow={setShow} setUser={setUser} users={users} setUsers={setUsers} user={user} />
        </header>
    )
}
export default Header