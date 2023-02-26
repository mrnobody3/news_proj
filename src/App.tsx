import React, { useEffect } from "react"
import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
import { useAppDispatch } from "./hooks/useReduxWithType"
import { current } from "./redux/auth/authOperations"
import AppRoutes from "./routes"

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(current())
  }, [dispatch])

  return (
    <>
      <Header />
      <AppRoutes />
      <ToastContainer />
    </>
  )
}

export default App
