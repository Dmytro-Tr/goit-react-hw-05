import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<h1>Hello</h1>}
        />
        <Route
          path="/about"
          element={<h2>About</h2>}
        />
      </Routes>
    </>
  );
}

export default App;
