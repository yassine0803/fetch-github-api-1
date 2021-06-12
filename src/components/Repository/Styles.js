import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 20,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    border: 'primary',
    display: 'flex',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    alignItems: 'center',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  chip: {
    marginRight: 4,
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      display: 'flex',
      marginTop: 20,
      flexDirection: 'column',
    },
    cover: {
      width: '100%',
    },
    controls: {
      border: 'primary',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
    },
    sabmittedDate:{
      marginTop: 10
    }
  },
  
}));