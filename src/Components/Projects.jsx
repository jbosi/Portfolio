import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
}));


export default function Projects() {
  const classes = useStyles();
  
    return (
      <Grid container>
        <Grid container spacing={4}>
          <img
            className={classes.backgroundImage}
            src={CVImage}
            alt='background'
          />
        <Link href="https://cranky-mirzakhani-fb86d6.netlify.com/" variant="body2" className={classes.link}>
          <img
            className={classes.backgroundImage}
            src={RcubedImage}
            alt='background'
          />
        </Link>
        <Link href="#" variant="body2" className={classes.link}>
          <img
            className={classes.backgroundImage}
            src={VoteImage}
            alt='background'
          />
        </Link>
        </Grid>
      </Grid>
    )
  }