import { Navigate, Route, Routes } from "react-router-dom";

import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/articles" />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="*" element={<Navigate to="/articles" replace />} />
      </Routes>
    </div>
  );
}

export default App;
