import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import * as Layout from "@/components/layouts/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout.Header />
    <App />
    <Layout.Footer />
  </StrictMode>
);
