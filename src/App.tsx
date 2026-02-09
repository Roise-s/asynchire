import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Live from "./pages/Live";
import IsSet from "./components/IsSet";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/id:22554reamohetsentetshe" element={<Live />} />
        <Route path="/set" element={<IsSet />} />
      </Routes>
    </>
  )
}

export default App
