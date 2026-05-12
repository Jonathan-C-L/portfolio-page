import { useState, useEffect } from "react";
import { getPortfolio } from "../services/api";
import { PortfolioData } from "../types";

interface UsePortfolioReturn {
    data: PortfolioData | null;
    loading: boolean;
    error: string | null;
}

export const usePortfolio = (): UsePortfolioReturn => {
    const [data, setData] = useState<PortfolioData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getPortfolio()
        .then((res) => setData(res.Data))
        .catch(() => setError("Failed to load portfolio data"))
        .finally(() => setLoading(false));
    });

    return { data, loading, error };
};