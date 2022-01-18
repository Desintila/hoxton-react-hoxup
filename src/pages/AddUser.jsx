function AddUser({ show, setShow, createUser, users, setUsers }) {

    if (!show) {
        return null
    }
    return (
        <section className="add-modal">
            <div className="modal">

                <button className="close-button" onClick={() => setShow(false)}>X</button>

                <h1>Enter your details</h1>

                <form onSubmit={(event) => {
                    event.preventDefault()
                    createUser(event.target.firstname.value, event.target.lastname.value, event.target.phone.value)
                        .then(function (user) {
                            const copy = JSON.parse(JSON.stringify(users))
                            copy.push(user)
                            setUsers(copy)
                        })
                    event.target.reset()
                }}>

                    <label>
                        First name
                        <input type='text' className="firstname" name='firstname' />
                    </label>

                    <label>
                        Last name
                        <input type='text' className="lastname" name='lastname' />
                    </label>

                    <label>
                        Phone number
                        <input type='number' className="phone" name='phone' />
                    </label>

                    <input type='submit' className="submit" value={'CREATE USER'} />

                </form>
            </div>

        </section>
    )
}
export default AddUser