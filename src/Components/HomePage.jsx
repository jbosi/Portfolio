import React from 'react';
import {makeStyles, createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Projects from './Projects';
// import theme from './../theme'

let theme = createMuiTheme();

const useStyles = makeStyles(theme => ({
  iconsContainer: {
    display: 'flex',
    'justify-content': 'space-evenly',
    width: '300px',
    margin: 'auto',
  },
  iconsSocial: {
    'font-size': '40px',
    color: '#6AADEF',
    '&:hover': {
      color: '#1F87EE',
    },
  },
  backgroundImage: {
    height: 'auto',
    width: '100%',
    opacity: '0.7',
    // 'min-height': '80vh',
  },

}));

export default function Layout() {
  const classes = useStyles();
  const [tabValue, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container spacing={4} maxWidth='xl' className={classes.landingPadding}>
      <Tabs
          value={tabValue}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Home" />
          <Tab label="Web" />
          {/* <Tab label="Design" /> */}
          <Tab label="Plus d\'infos" />
        </Tabs>
        <main>
          <Grid container>
            <Container spacing={4} maxWidth='lg'>
              <Grid item md={12} className={classes.politicsContent}>
                <Projects tabValue={tabValue}/>
              </Grid>
            </Container>
          </Grid>
        </main>
      </Container>
      
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth='lg'>
        <div className={classes.iconsContainer}>
          <FacebookIcon className={classes.iconsSocial}/>
          <GitHubIcon className={classes.iconsSocial} href='https://github.com/jbosi'/>
          <LinkedInIcon className={classes.iconsSocial}/>
        </div>
        <Divider className={classes.sources}/>
        <Typography>
        </Typography>
        </Container>
      </footer>
      {/* End footer */}
    </MuiThemeProvider>
);
}
