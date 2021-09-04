import React, { Component } from "react";
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import NFTCard from "../components/NFTCard"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);


const Home = ({...props}) => {
const classes = useStyles();
// const [spacing, setSpacing] = React.useState<GridSpacing>(2);

    return(
   <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {[ 1, 2,3,4].map((value) => (
            <Grid key={value} item>
              <NFTCard  />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    )
}
export default Home;