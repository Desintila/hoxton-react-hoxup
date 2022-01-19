function User({ user, getUser }) {
    return (
        <li key={user.id} onClick={() => getUser(user)} >

            <button className="user-selection" >
                <img
                    className="avatar"
                    width="50"
                    height="50"
                    src={user.avatar}
                    alt=""
                />
                <h3>{user.firstName}  {user.lastName}</h3>
            </button>
        </li>
    )
}
export default User