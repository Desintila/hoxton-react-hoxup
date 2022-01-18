import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";


export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate replace to='/login' />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </>
  )
}
