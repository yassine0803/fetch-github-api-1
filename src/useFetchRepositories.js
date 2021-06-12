import {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';

const useFetchRepositories = (currentPage) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [repositories, setRepositories] = useState([]);
    let cancel;

    const url = process.env.REACT_APP_API_URL+'/search/repositories';
    
    //get date before 30 day
    const getDateBefore30Days = ()=>{
        let date = new Date();
        date.setDate(date.getDate() - 30);
        date = moment(date).format("YYYY-MM-DD");
        return date;
    }

    //remove duplicates repos
    const removeDuplicate = (data)=>{
        let newData = [...repositories, ...data];
        newData = Array.from(new Set(newData.map(JSON.stringify))).map(JSON.parse);
        setRepositories(newData);
        setLoading(false);
    }

    
    //set query params
    const params ={
        q: 'created:>='+getDateBefore30Days(), 
        page: currentPage,
        sort: 'stars',
        order: 'desc',
    }

    //fetch repositories
    const fetchData = () =>{
        setLoading(true);
        setError(false);
        axios({
            method: 'GET',
            url: url,
            params: params,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res =>{
            removeDuplicate(res.data.items); 
        }).catch(e =>{
            if(axios.isCancel(e)) return;
            setError(true);
        })
    }
    
    useEffect(() => {
        fetchData();
        return () => cancel()
    }, [currentPage])
    
    return {loading, error, repositories};

}

export default useFetchRepositories;