import {useRef, useCallback} from 'react';
import { Container, CircularProgress, Grid } from "@material-ui/core";
import Repository from '../Repository/Repository';

const Repositories = ({repositories, loading, error, setCurrentPage, hasMore}) => {
    const observer = useRef();
    const lastRepotRef = useCallback(node =>{
        if(loading) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries =>{
        if(entries[0].isIntersecting && hasMore){
            setCurrentPage(prevCurrenPage => prevCurrenPage + 1);
        }
        }, [loading, hasMore])
        if(node) observer.current.observe(node)
    })
    return ( 
        <Container maxidth="lg">
            {repositories.length > 0 && repositories.map((repository, index)=>(
                repositories.length === index+ 1 
                    ?(
                        <div key={repository.id} ref={lastRepotRef}>
                            <Repository repository={repository} />
                        </div>
                    )
                    :(
                        <div key={repository.id}>
                            <Repository repository={repository} />
                        </div>
                    )
            )
            )}
            {error && <div>{error}</div>}
            {loading && 
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
            
                <Grid item xs={3}>
                    <CircularProgress />
                </Grid>   
          
          </Grid> }
        </Container> 
    );
}
 
export default Repositories;