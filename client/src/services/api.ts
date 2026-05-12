import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000/api/v1"
});

// Exporting function
export const getPortfolio = async () => {
    // Capturing data from portfolio API
    const {data} = await api.get("/portfolio");
    return data;
};

// Exporting api object
export default api;
