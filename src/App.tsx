import "@elastic/eui/dist/eui_theme_light.css";
import { EuiProvider } from "@elastic/eui";
import { Router } from "./routes";
import { Suspense } from "react";

const MyApp = () => (
  <EuiProvider colorMode="light">
    <Suspense fallback="loading...">
      <Router />
    </Suspense>
  </EuiProvider>
);
export default MyApp;
