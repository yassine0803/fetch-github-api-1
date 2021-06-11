import { Container, CircularProgress, Grid } from "@material-ui/core";
import Repository from '../Repository/Repository';

const Repositories = ({repositories, loading, error, setCurrentPage}) => {
    
    window.onscroll = () =>{
        if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !loading){
            setCurrentPage(prevCurrenPage => prevCurrenPage + 1);
        }
    }
    return ( 
        <Container maxidth="lg">
            {repositories.length > 0 && repositories.map((repository)=>(
                <div key={repository.id}>
                    <Repository repository={repository} />
                </div>       
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