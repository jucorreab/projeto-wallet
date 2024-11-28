import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "styled-components";
import THEME from "./theme";
import "./styles.css";

import Login from "./views/login";
import Register from "./views/register";
import Home from "./views/home";
import TransactionDetails from "./views/transactionDetails";
import RecoverPassword from "./views/recoverPassword";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <ThemeProvider theme={THEME}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detalhesDaTransação" element={<TransactionDetails />} />
        <Route path="/recuperarSenha" element={<RecoverPassword />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
