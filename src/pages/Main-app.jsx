function MainApp() {
    return (
        <div className="main-wrapper">

            <aside>

                <header className="panel">
                    <img
                        className="avatar"
                        width="50"
                        height="50"
                        src="https://robohash.org/2"
                        alt=""
                    />
                    <h3>Tin Man</h3>
                </header>


                <form className="aside__search-container">
                    <input
                        type="search"
                        name="messagesSearch"
                        placeholder="Search chats"
                        value=""
                    />
                </form>


            </aside>

            <main className="conversation">

                <header className="panel"></header>


                <ul className="conversation__messages"></ul>


                <footer>
                    <form className="panel conversation__message-box">
                        <input
                            type="text"
                            placeholder="Type a message"
                            rows={1}
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
        </div>
    )
}
export default MainApp