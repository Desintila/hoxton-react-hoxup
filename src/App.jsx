import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import MainApp from "./pages/Main-app";


export default function App() {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])


  return (
    <>
      <Routes>
        <Route index element={<Navigate replace to='/login' />} />
        <Route path='/login' element={<Login setUser={setUser} users={users} setUsers={setUsers} />} />
        <Route path='/logged-in' element={<MainApp user={user} users={users} setUser={setUser} setUsers={setUsers} />} />
        <Route path='/logged-in/:conversationId' element={<MainApp user={user} users={users} setUser={setUser} setUsers={setUsers} />} />
      </Routes>

    </>
  )
}
