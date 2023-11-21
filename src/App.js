import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/faisal-baqir/*" element={<Main />} />
        <Route path="*" element={<Navigate to="/faisal-baqir/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
