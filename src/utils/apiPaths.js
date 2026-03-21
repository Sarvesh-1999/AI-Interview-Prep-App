const BASE_URL = "http://localhost:5000/api";

export const API_PATHS = {
  AUTH: {
    LOGIN: `${BASE_URL}/auth/login`,
    SIGNUP: `${BASE_URL}/auth/signup`,
  },
  SESSION: {
    CREATE: `${BASE_URL}/sessions`,
    GET_ALL: `${BASE_URL}/sessions`,
  },
  AI: {
    GENERATE: `${BASE_URL}/ai/generate`,
    EXPLAIN: `${BASE_URL}/ai/explain`,
  },
};