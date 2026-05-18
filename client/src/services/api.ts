//------------------------------------------------------
// Portfolio API connection
//------------------------------------------------------
import axios from "axios";
import { API_BASE_PATH } from '../../../shared/constants';
import { getPortfolioTimeout, setPortfolioTimeout } from './localStorage.api';

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL ?? "http://localhost:3000"}${API_BASE_PATH}`
});

// Exporting function
export const getPortfolio = async () => {
    const cached = getPortfolioTimeout();

    // If there is something in the cache, use that information
    if (cached) return { data: cached };

    // Capturing data from portfolio API every 24 hours
    const { data } = await api.get("/portfolio");
    setPortfolioTimeout(data.data);
    return { data: data.data };
};

// Exporting api object
export default api;
