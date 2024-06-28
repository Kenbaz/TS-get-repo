import { useState, useEffect } from "react";

interface UseFetchResult<Type> {
    data: Type | null;
    error: string | null;
    isLoading: boolean;
}

// const authToken = import.meta.env.VITE_REACT_APP_APIKEY;

function useFetch<Type = unknown>(url: string): UseFetchResult<Type> {
    const [data, setData] = useState<Type | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        fetch(url
        //     {
        //     headers: {
        //         'Authorization': `Bearer ${authToken}`
        //     }
        // }
        ).then((res) => {
            if (!res.ok) {
                throw new Error("Error fetching data");
            }
            return res.json();
        }).then((data: Type) => {
            setData(data);
            setError(null);
            setIsLoading(false);
        }).catch((err: unknown) => {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occured")
            }
            setIsLoading(false);
        });
    }, [url]);

    return { data, error, isLoading };
}

export default useFetch;