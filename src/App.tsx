import { EuiProvider } from "@elastic/eui";
import { Router } from "./routes";
import { Suspense } from "react";

import "@elastic/eui/dist/eui_theme_light.css";
import "@elastic/charts/dist/theme_light.css";

const MyApp = () => (
  <EuiProvider colorMode="light">
    <Suspense fallback="loading...">
      <Router />
    </Suspense>
  </EuiProvider>
);
export default MyApp;
