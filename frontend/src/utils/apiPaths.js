const BASE_URL =
  `${import.meta.env.VITE_API_BASE_URL}/api` || "http://localhost:9000/api";

console.log("BaseURL --->  ", BASE_URL);

export const API_PATHS = {
  AUTH: {
    LOGIN: `${BASE_URL}/auth/login`,
    SIGNUP: `${BASE_URL}/auth/signup`,
  },
  SESSION: {
    CREATE: `${BASE_URL}/sessions/create`,
    GET_ALL: `${BASE_URL}/sessions/my-sessions`,
    //! BUG FIX: was missing GET_ONE — InterviewPrep was incorrectly appending
    //! /:id to GET_ALL (/my-sessions/:id), which hits the wrong route.
    //! Correct route for a single session is /sessions/:id (GET_ONE below).
    GET_ONE: `${BASE_URL}/sessions`, // usage: GET_ONE/:id
    DELETE: `${BASE_URL}/sessions`, // usage: DELETE/:id
  },
  AI: {
    //! BUG FIX: backend registers /ai/generate-questions, not /ai/generate
    GENERATE_QUESTIONS: `${BASE_URL}/ai/generate-questions`,
    EXPLAIN: `${BASE_URL}/ai/generate-explanation`,
  },
};
