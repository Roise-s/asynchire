type Question = {
  id: number;
  text: string;
  timeLimit: number; // seconds
};

export const QUESTIONS: Question[] = [
  { id: 1, text: "Explain what happens when a device cannot obtain an IP address on a network.", timeLimit: 300 },
  { id: 2, text: "A user reports no internet access, but the network cable is connected. How would you troubleshoot this?", timeLimit: 300 },
  { id: 3, text: "What is the purpose of a default gateway, and what happens if it is misconfigured?", timeLimit: 300 },
  { id: 4, text: "Describe how you would identify whether a problem is caused by hardware or software.", timeLimit: 300 },
  { id: 5, text: "A network printer is reachable by some users but not others. What steps would you take?", timeLimit: 300 },
  { id: 6, text: "What does it mean when a device can ping an IP address but not a domain name?", timeLimit: 300 },
  { id: 7, text: "Explain how you would troubleshoot a slow network connection in an office.", timeLimit: 300 },
  { id: 8, text: "A switch port shows activity lights, but the connected device has no connectivity. What could be wrong?", timeLimit: 300 },
  { id: 9, text: "How would you handle a situation where multiple users suddenly lose network access?", timeLimit: 300 },
  { id: 10, text: "Explain the difference between a crossover cable and a straight-through cable.", timeLimit: 300 },
  { id: 11, text: "A user’s Wi-Fi keeps disconnecting. What possible causes would you investigate?", timeLimit: 300 },
  { id: 12, text: "How would you confirm that a network issue is not caused by the ISP?", timeLimit: 300 },
  { id: 13, text: "What steps would you take if a newly installed device cannot communicate with the network?", timeLimit: 300 },
  { id: 14, text: "Describe how you would document and report a resolved network issue.", timeLimit: 300 },
  { id: 15, text: "If you are unsure how to solve a network problem, what is your approach?", timeLimit: 300 },
];
