import {Card, CardContent, Typography, Chip, Link} from "@material-ui/core";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutline';
import moment from 'moment';

import useStyle from './Styles';

const Repository = ({repository}) => {
    const classes = useStyle();
    return ( 
        <Card className={classes.root} >
            <img
                className={classes.cover}
                src={repository.owner.avatar_url}
                title="repository owner avatar"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" color="primary">
                        <Link href={repository.html_url} target="_blank" rel="noreferrer" color="inherit">
                            {repository.name}
                        </Link>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {repository.description}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <div>
                        <Chip 
                            className={classes.chip}
                            avatar={<StarBorderIcon /> } 
                            label={` stars: ${repository.stargazers_count}`} 
                            variant="outlined"
                        />
                        <Chip 
                            className={classes.chip}
                            avatar={<ErrorOutlineOutlinedIcon /> } 
                            label={` Issues: ${repository.open_issues_count}`} 
                            variant="outlined" 
                        />
                    </div>
                    <Typography className={classes.sabmittedDate}>
                        Submitted { moment(repository.created_at).fromNow() } By 
                        <Link color="secondary" href={repository.owner.html_url} target="_blank" rel="noreferrer" >
                         &nbsp;{ repository.owner.login }
                        </Link>
                    </Typography>
                </div>
            </div>
        </Card> 
    );
}
 
export default Repository;