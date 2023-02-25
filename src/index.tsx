import { ThemeProvider } from "@mui/material/styles"
import React from "react"
import ReactDOM from "react-dom/client"
import { I18nextProvider } from "react-i18next"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { persistor, store } from "./redux/store"
import { theme } from "./styles/theme"
import i18n from "./i18n"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <BrowserRouter basename='/news_proj'>
              <App />
            </BrowserRouter>
          </Provider>
        </PersistGate>
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
