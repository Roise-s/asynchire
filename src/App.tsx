import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import IsSet from "./components/IsSet";
import TestCamera from "./components/TestCamera";
import Recording from "./components/Recording";
import Tnk from "./components/Tnk";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/id:22554reamohetsentetshe" element={<TestCamera />} />
        <Route path="/id:22554reamohetsentetshe-recording" element={<Recording />} />
        <Route path="/Information-You-Should-Know" element={<IsSet />} />
        <Route path="/submitted" element={<Tnk />} />
      </Routes>
    </>
  )
}

export default App
