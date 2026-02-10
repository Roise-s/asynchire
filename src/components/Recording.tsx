import { useEffect, useRef, useState } from "react";
import { QUESTIONS } from "./QuestionData";

const InterviewRecorder: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(QUESTIONS[0].timeLimit);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  // Start camera + recording once
  const startInterview = async (): Promise<void> => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    streamRef.current = stream;

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }

    const recorder = new MediaRecorder(stream, {
      mimeType: "video/webm",
    });

    recorder.ondataavailable = (event: BlobEvent) => {
      if (event.data.size > 0) {
        recordedChunksRef.current.push(event.data);
      }
    };

    recorder.start();
    mediaRecorderRef.current = recorder;
    setIsRecording(true);
  };

  // Timer logic
  useEffect(() => {
    if (!isRecording) return;

    if (timeLeft === 0) {
      goToNextQuestion();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isRecording]);

  // Advance question (manual or auto)
  const goToNextQuestion = (): void => {
    if (currentQuestionIndex === QUESTIONS.length - 1) {
      finishInterview();
      return;
    }

    setCurrentQuestionIndex(prev => prev + 1);
    setTimeLeft(QUESTIONS[currentQuestionIndex + 1].timeLimit);
  };

  // End recording
  const finishInterview = (): void => {
    mediaRecorderRef.current?.stop();

    streamRef.current?.getTracks().forEach(track => track.stop());

    const videoBlob = new Blob(recordedChunksRef.current, {
      type: "video/webm",
    });

    // This is where upload logic will go later
    console.log("Final video blob:", videoBlob);

    setIsRecording(false);
  };

  useEffect(() => {
    startInterview();
  }, []);

  const question = QUESTIONS[currentQuestionIndex];

  return (
    <section className="py-8 antialiased bg-gray-900 h-screen md:py-16 justify-center items-center flex">
        <div className="mx-auto grid max-w-7xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
            <div className="hidden w-150 mr-10 md:col-span-5 md:mt-0 md:flex">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    style={{ width: "100%", borderRadius: 8 }}
                />
            </div>
            <div className="content-center pl-40 justify-self-start md:col-span-7 md:text-start">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:max-w-2xl md:text-5xl xl:text-6xl">
                    Question {currentQuestionIndex + 1} of {QUESTIONS.length}
                </h1>
                <p className="max-w-2xl text-gray-400 md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl">
                    {question.text}
                </p>
                <p className="max-w-2xl text-gray-400 md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl">
                    Time remaining: {Math.floor(timeLeft / 60)}:
                    {String(timeLeft % 60).padStart(2, "0")}
                </p>
                <button onClick={goToNextQuestion} className="inline-block rounded-lg px-6 py-3.5 text-center font-medium text-white focus:outline-none focus:ring-4 bg-[#2563eb] hover:bg-[#1d4ed8] focus:ring-[#1e40af]">
                    Next Question
                </button>
            </div>
        </div>
    </section>
  );
};

export default InterviewRecorder;
