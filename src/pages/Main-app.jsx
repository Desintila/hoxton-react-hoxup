import SideChat from "./Side-chat"
import MessagesList from "./Messages-list"

function MainApp({ user, users }) {
    return (
        <div className="main-wrapper">

            <aside>

                <header className="panel">
                    <img
                        className="avatar"
                        width="50"
                        height="50"
                        src={user.avatar}
                        alt=""
                    />
                    <h3>{user.firstName} {user.lastName}</h3>
                </header>


                <form className="aside__search-container">
                    <input
                        type="search"
                        name="messagesSearch"
                        placeholder="Search chats"
                        value=""
                    />
                </form>
                <SideChat users={users} user={user} />

            </aside>
            <main className="conversation">

                <header className="panel"></header>


                <MessagesList />


                <footer>
                    <form className="panel conversation__message-box">
                        <input
                            type="text"
                            placeholder="Type a message"

                            value=""
                        /><button type="submit">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                                ></path>
                            </svg>
                        </button>
                    </form>
                </footer>
            </main>
            )
        </div>
    )
}
export default MainApp