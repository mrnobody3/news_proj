import React, { useEffect } from "react"
import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
import { useAppDispatch } from "./hooks/useReduxWithType"
import Providers from "./providers/Providers"
import { current } from "./redux/auth/authOperations"
import AppRoutes from "./routes"

const AppComponents: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(current())
  }, [dispatch])

  return (
    <>
      <Header />
      <main>
        <AppRoutes />
        <ToastContainer />
      </main>
    </>
  )
}

function App() {
  return (
    <Providers>
      <AppComponents />
    </Providers>
  )
}

export default App
