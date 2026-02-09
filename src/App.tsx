import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import IsSet from "./components/IsSet";
import CameraPreview from "./pages/CameraPreview";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/id:22554reamohetsentetshe" element={<CameraPreview />} />
        <Route path="/Information-You-Should-Know" element={<IsSet />} />
      </Routes>
    </>
  )
}

export default App
