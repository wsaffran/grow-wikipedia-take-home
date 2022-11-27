import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/articles" />} />
        <Route path="/articles" element={null} />
        <Route path="*" element={<Navigate to="/articles" replace />} />
      </Routes>
    </div>
  );
}

export default App;
