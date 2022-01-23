import SideChat from "./Side-chat"
import MessagesList from "./Messages-list"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"

function MainApp({ user, users, setUser, setUsers }) {
    const navigate = useNavigate()

    const [conversations, setConversations] = useState([])
    const [search, setSearch] = useState('')

    const params = useParams()

    useEffect(() => {
        if (user === null) return
        fetch(`http://localhost:4000/conversations?userId=${user.id}`)
            .then(resp => resp.json()
                .then(conversations => setConversations(conversations)))
    }, [user])


    useEffect(() => {
        if (user === null)
            navigate('/')
    }, [user, navigate])

    function createConversation(participantId) {
        return fetch('http://localhost:4000/conversations', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                userId: user.id,
                participantId: participantId


            })
        }).then(resp => resp.json()).then(newConversation => {
            setConversations([...conversations, newConversation])
        })
    }



    let filteredUsers = users
    filteredUsers = filteredUsers.filter(function (user) {
        return user.firstName.toLowerCase().includes(search.toLowerCase())
    })

    if (user === null) return <h1>Not signed in</h1>

    return (
        <div className="main-wrapper">

            <aside>

                <Header user={user} setUser={setUser} users={users} setUsers={setUsers} />


                <form className="aside__search-container">
                    <input
                        type="search"
                        name="messagesSearch"
                        placeholder="Search chats"
                        onChange={event => setSearch(event.target.value)}
                    />
                </form>
                <SideChat users={users} user={user} conversations={conversations} createConversation={createConversation} filteredUsers={filteredUsers} />

            </aside>
            {params.conversationId ? (

                <MessagesList user={user} />

            ) : null}
        </div>
    )
}
export default MainApp