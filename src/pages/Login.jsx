import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import User from "../components/User"
import AddUser from "./AddUser"

function Login({ setUser }) {
    const [users, setUsers] = useState([])

    const [show, setShow] = useState(false)

    useEffect(() => {
        fetch('http://localhost:4000/users')
            .then(resp => resp.json())
            .then(usersFromServer => setUsers(usersFromServer))
    }, [])


    function handleOnClick() {
        setShow(true)
    }


    const navigate = useNavigate()

    function getUser(user) {
        setUser(user)
        navigate('/logged-in')
    }



    function createUser(firstName, lastName, phoneNumber) {
        return fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                avatar: `https://avatars.dicebear.com/api/avataaars/${firstName}${lastName}.svg`
            })
        }).then(resp => resp.json())
    }

    return (
        <div className="main-wrapper login">
            <section className="login-section">
                <h2>Choose your user!</h2>
                <ul>
                    {
                        users.map(user =>
                            <User user={user} getUser={getUser} />
                        )
                    }

                    <li>
                        <button className="user-selection" onClick={() =>
                            handleOnClick()
                        }>
                            <h3 >+ Add a new user</h3></button>
                        <AddUser show={show} setShow={setShow} createUser={createUser} users={users} setUsers={setUsers} />
                    </li>

                </ul>
            </section>
        </div>
    )
}
export default Login