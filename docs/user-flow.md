# AsyncHire User Flow

AsyncHire is a simple async video interview platform for employers and candidates. This document outlines the step-by-step flow for both user types.

---

## Employer Flow

**Goal:** Create an interview, send it to candidates, and review submissions.

1. **Sign Up / Login**
   - Email + password or magic link.
   - Redirect to employer dashboard.

2. **Dashboard**
   - View past interviews (title, creation date, number of submissions).
   - Button: "Create New Interview".

3. **Create Interview**
   - Input: Interview title / role.
   - Input: Description (optional).
   - Input: 3–5 questions (text only).
   - Option: Time limit per question (optional).
   - Button: "Generate Interview Link".

4. **Share Interview**
   - Copy link to clipboard.
   - Optionally send via email (v1 can skip email functionality).

5. **View Submissions**
   - List of candidates (name, email, submission date).
   - Click candidate → view all video answers in order.

---

## Candidate Flow

**Goal:** Record and submit video answers to the interview.

1. **Open Interview Link**
   - No login required.
   - Display interview title, description, and instructions.

2. **Instructions / Consent**
   - Brief information about recording process.
   - Button: "Start Interview".

3. **Answer Questions**
   - Show one question at a time.
   - Record video using MediaRecorder API.
   - Buttons: "Record / Stop / Preview / Re-record".
   - After confirming, move to next question.

4. **Submit Interview**
   - Optionally review all recorded answers.
   - Click "Submit Interview".
   - Display a thank-you confirmation message.

---

## Notes / Optional UX Enhancements

- Show progress indicator (e.g., "Question 2 of 4").
- Limit each video to a set duration for consistency.
- Auto-save recording locally until submission to prevent data loss.
- Employer dashboard filters by role, date, or other metadata.
