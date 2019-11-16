import React from 'react';
import {makeStyles, createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
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
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'center',
    overflowX: 'auto',
  },
  landingText: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  toolbarLink: {
    padding: '8px 35px 8px 35px',
    flexShrink: 0,
  },
  rightUserIcon: {
    position: 'absolute',
    right: '5px',
  },
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
    'min-height': '80vh',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  landingGrid: {
    margin: 'auto',
    'max-width': '500px',
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  politicsContent: {
    'margin-top': '70px',
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  landingPadding: {
    'padding-left': '70px',
    'padding-right': '70px',
  },
  rightSection: {
    backgroundColor: '#F9F9F9',
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  sources: {
    marginTop: theme.spacing(3),    
    marginBottom: theme.spacing(3),    
  },
  footer: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(2, 0),
  },
}));

const sections = [
  {
    label: 'Home',
    pathname: '/'
  },
  {
    label: 'Web',
    pathname: '/parlamantarians'
  },
  {
    label: 'Design',
    pathname: '/'
  },
  {
    label: 'Mobile',
    pathname: '/objectives'
  },
  {
    label: 'Plus d\'infos',
    pathname: '/infos'
  },
];

export default function Layout() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

   return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container spacing={4} maxWidth='xl' className={classes.landingPadding}>
        <Toolbar component='nav' variant='regular' disableGutters={true} className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              color='inherit'
              noWrap
              key={section.label}
              variant='body2'
              href='#'
              className={classes.toolbarLink}
            >
              {section.label.toUpperCase()}
            </Link>
          ))}
          <div className={classes.rightUserIcon}>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
        </Toolbar>
        <main>
          <Grid container>
            <Container spacing={4} maxWidth='lg'>
              <Grid item md={12} className={classes.politicsContent}>
                <Projects/>
              </Grid>
            </Container>
          </Grid>
        </main>
      </Container>
      
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth='lg'>
        <Typography variant='h6' gutterBottom className={classes.sidebarSection}>
          Social
        </Typography>
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
