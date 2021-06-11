import {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';

const useFetchRepositories = (currentPage) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [repositories, setRepositories] = useState([]);

    

    const getDateBefore30Days = ()=>{
        let date = new Date();
        date.setDate(date.getDate() - 30);
        date = moment(date).format("YYYY-MM-DD");
        return date;
    }

    const rmvRepo =(data) =>{
        let newData = data;
        if(repositories.length){
            newData = data.filter( (ele, ind) => ind === data.findIndex( elem => elem.jobid === ele.jobid && elem.id === ele.id))
        }
        return newData;
    }
    //remove duplicates repos
    const removeDuplicate = (data)=>{
        let newData = [];
        if(repositories.length){
            repositories.forEach((repo)=>{
               newData = data.filter((element)=> element.id !== repo.id);
               console.log(newData);
            })
        }else{
            newData = data;
        }
        return [...newData, ...repositories];
    }

    const url = process.env.REACT_APP_API_URL+'/search/repositories';

    const params ={
        q: 'created:>='+getDateBefore30Days(), 
        page: currentPage,
        sort: 'stars',
        order: 'desc',
    }

    //fetch repositories
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
            const newData = rmvRepo([...repositories, ...res.data.items]);
            const test = removeDuplicate(res.data.items);
            console.log('test', test);
            setRepositories(test);
            setLoading(false);
        }).catch(e =>{
            if(axios.isCancel(e)) return;
            setError(true);
        })

        return () => cancel()
    }, [currentPage])
    
    return {loading, error, repositories};

}

export default useFetchRepositories;