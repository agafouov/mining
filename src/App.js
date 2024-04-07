import { Routes, Route } from "react-router-dom";
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import Main from "./pages/Main";

function App() {
  return (
    <>
    <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
      <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
    </TonConnectUIProvider>
    
    </>
  );
}

export default App;
