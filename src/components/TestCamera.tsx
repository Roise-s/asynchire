import Header from "./Header"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const TestCamera = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const navigate = useNavigate();

    const [started, setStarted] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const startCamera = async (): Promise<void> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setStarted(true);
      setError(null);
    } catch {
      setError("Camera access was denied or no camera was found.");
    }
  };

  const stopCamera = (): void => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  const handleNext = (): void => {
    stopCamera();
    navigate("/Information-You-Should-Know");
  };

  const handleNextt = (): void => {
    stopCamera();
    navigate("/Information-You-Should-Know");
    !started
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <section className="bg-gray-900 h-screen">
        <Header />
        <div className="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="hidden lg:mt-0 pr-6 lg:col-span-5 lg:flex">
                <div
                    style={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    backgroundColor: "#000",
                    borderRadius: 8,
                    overflow: "hidden",
                    marginBottom: 16,
                    }}
                >
                    <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            </div>            
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-5xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Test your camera before you start your interview</h1>
                <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">This is a quick camera check so you can adjust your position and lighting. Nothing is being recorded at this stage, and you’re free to move on when you’re ready.</p>
                {!started && (
                    <button onClick={startCamera} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                        Test Camera
                    </button>
                )}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {started && (
                    <button onClick={handleNext} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#1d4ed8] hover:bg-[#1e40af] focus:ring-4 focus:ring-[#1e3a8a]">
                        Camera Looks Good – Continue
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                )}
                {started && (
                    <button onClick={handleNextt} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#1d4ed8] hover:bg-[#1e40af] focus:ring-4 focus:ring-[#1e3a8a]">
                        Go Back to Camera Check
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                )}
            </div>
        </div>
    </section>
  )
}

export default TestCamera
