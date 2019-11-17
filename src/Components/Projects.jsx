import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CVImage from '../images/CV.png';
import RcubedImage from '../images/rcubed.png';
import VoteImage from '../images/Vote.png';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  project: {
    display: 'flex',
  },
  projectDetails: {
    flex: 1,
  },
  projectMedia: {
    width: 160,
  },
  projectMargins: {
    margin: '0 0 15px 0',
  },
  backgroundImage: {
    height: 'auto',
    width: '100%',
    opacity: '0.9',
    'margin-bottom': '20px',
    'min-height': '80vh',
    'box-shadow': '0 4px 8px 0 rgba(200,200,200,0.2)',
    transition: '0.3s',
    "&:hover": {
      'box-shadow': '0 8px 16px 0 rgba(200,200,200,0.5)',
    }
  },
  link: {
    'margin-top': '70px',
  }
}));

export default function Projects({tabValue}) {
  const classes = useStyles();
  const setDisplayedTab = (tabValue) => {
    switch (tabValue) {
      case 0:
          return (
            <Link href="https://cranky-mirzakhani-fb86d6.netlify.com/" className={classes.link}>
              <img
                className={classes.backgroundImage}
                src={RcubedImage}
                alt='background'
              />
            </Link>
          );
      case 1:
        return (
          <Link href="https://brave-bardeen-feb3a7.netlify.com/" className={classes.link}>
            <img
              className={classes.backgroundImage}
              src={VoteImage}
              alt='background'
            />
          </Link>
        );
      case 2:
        return (
          <div className={classes.link}>
            <img
              className={classes.backgroundImage}
              src={CVImage}
              alt='background'
            />
          </div>
        );
      default:
        break;
    }
  }
  
    return (
      <Grid container>
        <Grid container spacing={4}>
          {setDisplayedTab(tabValue)}
        </Grid>
      </Grid>
    )
  }