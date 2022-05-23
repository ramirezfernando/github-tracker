import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useFetch = (user) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        axios.get('https://api.github.com/users/'+user).then((response) => {
            setData(response.data);
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        })
    }, ['https://api.github.com/users/'+user]);

    const refetch = () => {
        setLoading(true);
        axios.get('https://api.github.com/users/'+user).then((response) => {
            setData(response.data);
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        })
    }
    return {data, loading, error, refetch}
}

export default useFetch;