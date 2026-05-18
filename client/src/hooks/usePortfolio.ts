//------------------------------------------------------
// Portfolio hook
//------------------------------------------------------
import { useState, useEffect } from "react";
import { getPortfolio } from "../services/api";
import { PortfolioData } from "../../../shared/types";

// Data type for holding portfolio data from the portfolio API
interface UsePortfolioReturn {
    data: PortfolioData | null;
    loading: boolean;
    error: string | null;
}

/**
 * useEffect - runs after DOM has been created; updates when values change
 * In this case - waiting for API response data, so will wait for data to come in before running this hook runs
 * Typical uses:
 *  - Fetching data from API (this specific use case)
 *  - Manually chaning the DOM (i.e. setting doc title)
 *  - Setting up subscriptions to websocket or timers
 */
export const usePortfolio = (): UsePortfolioReturn => {
    const [data, setData] = useState<PortfolioData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Async fetch of data from portfolio API (this call is rate-limited to 24 hrs client side)
        getPortfolio()
        .then((res) => setData(res.data))
        .catch(() => setError("Failed to load portfolio data"))
        .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
};