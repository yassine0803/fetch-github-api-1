import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetchRepositories = (currentPage) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [repositories, setRepositories] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    const url = process.env.REACT_APP_API_URL+'/search/repositories';

    const params ={
        q: 'created:>=2021-05-05', 
        page: currentPage,
        sort: 'stars',
        order: 'desc',
    }

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel;
        axios({
            method: 'GET',
            url: url,
            params: params,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res =>{
            let newData = [...repositories, ...res.data.items];
            console.log(newData);
            setRepositories(newData);
            setHasMore(res.data.items.length > 0);
            setLoading(false);
        }).catch(e =>{
            if(axios.isCancel(e)) return;
            setError(true);
        })

        return () => cancel()
    }, [currentPage])
    
    return {loading, error, repositories, hasMore};

}

export default useFetchRepositories;