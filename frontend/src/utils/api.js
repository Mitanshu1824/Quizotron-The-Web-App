export const API_URL = "https://quizotron-the-web-app-backend.onrender.com/api";

// Helper function for GET requests
export const getRequest = async (endpoint) => {
  const res = await fetch(`${API_URL}${endpoint}`);
  return await res.json();
};

// Helper function for POST requests
export const postRequest = async (endpoint, body) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token") 
        ? `Bearer ${localStorage.getItem("token")}` 
        : ""
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};
