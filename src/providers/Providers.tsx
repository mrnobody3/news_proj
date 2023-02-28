import { ThemeProvider } from "@mui/material/styles"
import React, { ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import { PersistGate } from "redux-persist/integration/react"
import i18n from "../i18n"
import "../index.css"
import { persistor, store } from "../redux/store"
import { theme } from "../styles/theme"

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>
              <BrowserRouter basename='/news_proj'>{children}</BrowserRouter>
            </Provider>
          </PersistGate>
        </ThemeProvider>
      </I18nextProvider>
    </React.StrictMode>
  )
}

export default Providers
