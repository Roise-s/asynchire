# AsyncHire Data Models

This document outlines the data structure for AsyncHire, the async video interview platform. It describes the main collections, fields, and relationships.

---

## 1. Users (Employers)

**Purpose:** Store employer information and access credentials.

**Fields:**
- `name` – string, employer or company name
- `email` – string, unique
- `password` – string (hashed if using password login)
- `createdAt` – date
- `interviews` – array of interview IDs (references `Interviews` collection)

---

## 2. Interviews

**Purpose:** Represents an interview created by an employer.

**Fields:**
- `title` – string, e.g., "Frontend Developer Interview"
- `description` – string, optional
- `employerId` – reference to `Users`
- `questions` – array of question objects (or references to `Questions` collection)
- `createdAt` – date
- `link` – string, unique shareable URL

---

## 3. Questions

**Purpose:** Store individual questions for an interview.

**Fields:**
- `interviewId` – reference to `Interviews`
- `text` – string, the question
- `timeLimit` – number, optional (seconds per video answer)

---

## 4. Submissions

**Purpose:** Store candidate answers for an interview.

**Fields:**
- `interviewId` – reference to `Interviews`
- `candidateName` – string
- `candidateEmail` – string
- `answers` – array of objects:
  - `questionId` – reference to `Questions`
  - `videoUrl` – string (Cloudinary / S3 link)
- `submittedAt` – date

---

## Relationships

- **User → Interviews**: 1-to-many  
- **Interview → Questions**: 1-to-many  
- **Interview → Submissions**: 1-to-many  
- **Submission → Questions**: 1-to-many (stores candidate’s answer per question)

---

## Notes / Future Enhancements

- Add **roles** for multi-admin employers  
- Add **status** for submissions (pending, reviewed)  
- Include **analytics**: video length, completion rate, etc.  
