import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CameraPreview: React.FC = () => {
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

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
      <h2>Camera Check</h2>
      <p>Use this preview to check your position and lighting.</p>

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

      {!started && (
        <button onClick={startCamera}>
          Turn On Camera
        </button>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {started && (
        <button onClick={handleNext} style={{ marginTop: 12 }}>
          Camera Looks Good – Continue
        </button>
      )}
    </div>
  );
};

export default CameraPreview;
