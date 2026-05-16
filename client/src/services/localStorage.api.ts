// Variables to limit portfolio API calls to once per day
const CACHE_KEY: string = "get_portfolio";      // Key for localStorage 
const CACHE_TTL: number = 24 * 60 * 60 * 1000;  // 24 hours in ms

interface PortfolioTimeout<T> {
    data: T;
    timestamp: number;
}

export const getPortfolioTimeout = <T>(): T | null => {
    try{
        const cached = localStorage.getItem(CACHE_KEY);

        if (!cached) return null;

        // Destructure cached data
        const { data, timestamp }: PortfolioTimeout<T> = JSON.parse(cached);
        
        // Check if the 24 hour timeout has expired 
        const isExpired = Date.now() - timestamp > CACHE_TTL;

        // Remove previously cached data
        if (isExpired){
            localStorage.removeItem(CACHE_KEY);
            return null;
        }

        return data;
    } catch {
        localStorage.removeItem(CACHE_KEY);
        return null;
    }
};

export const setPortfolioTimeout = <T>(data: T): void => {
    const entry: PortfolioTimeout<T> = {
        data,
        timestamp: Date.now()
    }

    localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
};

