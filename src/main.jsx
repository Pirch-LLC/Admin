import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeflex/themes/primeone-light.css";
import "primeicons/primeicons.css";
import { store } from "./store/index.js";
import { Provider } from "react-redux";
import ToastContainer from "./shared/ToastContainer.jsx";
import { CustomDataWarningDialog } from "./shared/component/CustomDialog.jsx";
import { PrimeReactProvider } from "primereact/api";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <StrictMode> */}
    <ToastContainer />
    <CustomDataWarningDialog />
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
    {/* </StrictMode> */}
  </Provider>
);
