import { useEffect, useState } from "react";

interface FetchType<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

const UseFetch = <T,>(fetchProps: () => Promise<T>): FetchType<T> => {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                setError(null)

                const result = await fetchProps()
                setData(result)
            } catch (error) {
                setError((error as Error).message)
            } finally {
                setLoading(true)
            }
        }

        fetchData()
    }, [fetchProps])





    return { data, error, loading }
}

export default UseFetch