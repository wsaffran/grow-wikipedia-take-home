import { Navigate, Route, Routes } from "react-router-dom";

import ArticleDetailPage from "./components/ArticleDetail/ArticleDetailPage";
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/articles" />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/article/:id" element={<ArticleDetailPage />} />
        <Route path="*" element={<Navigate to="/articles" replace />} />
      </Routes>
    </div>
  );
}

export default App;
