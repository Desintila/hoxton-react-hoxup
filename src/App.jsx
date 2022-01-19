import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import MainApp from "./pages/Main-app";


export default function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <Routes>
        <Route index element={<Navigate replace to='/login' />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/logged-in' element={<MainApp user={user} />} />
      </Routes>

    </>
  )
}
