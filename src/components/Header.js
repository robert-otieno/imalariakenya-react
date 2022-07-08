// import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { alpha, styled } from '@mui/material/styles';

const Header = () => {
  return (
    <Root>
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          IMalariaKenya
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" className={classes.title}>
            Where to?
          </Typography>
          {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
    </Root>
  );
};

const PREFIX = 'Header';

const classes = {
  toolbar: `${PREFIX}-toolbar`,
  title: `${PREFIX}-title`,
  search: `${PREFIX}-search`,
  searchIcon: `${PREFIX}-searchIcon`,
  inputRoot: `${PREFIX}-inputRoot`,
  inputInput: `${PREFIX}-inputInput`,
}

const Root = styled("div")(( {theme} ) => ({

  [`& .${classes.toolbar}`]: {
    display: "flex",
    justifyContent: "space-between",
  },
  [`& .${classes.title}`]: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  [`& .${classes.search}`]: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(3), width: "auto" },
  },
  [`& .${classes.searchIcon}`]: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  [`& .${classes.inputRoot}`]: {
    color: "inherit",
  },
  [`& .${classes.inputInput}`]: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" },
  },
}));

export default Header;
