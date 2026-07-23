import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import "./styles/App.css";
import { NotFound } from "./pages/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
