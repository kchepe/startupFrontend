import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "15px",
    borderRadius: "15px",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h1>Dashboard</h1>
        </Grid>
        <Grid item xs={12} container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={6} className={classes.paper}>
              <span>
                <b>Number of Axie Scholar</b>
              </span>
              <h1 style={{ fontSize: "2.5em" }}>756</h1>
              <span>2% than Last week</span>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={6} className={classes.paper}>
              <span>
                <b>Sales</b>
              </span>
              <h1 style={{ fontSize: "2.5em" }}>$160,000</h1>
              <span>2% than Last week</span>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={6} className={classes.paper}>
              <span>
                <b>Sample Data</b>
              </span>
              <h1 style={{ fontSize: "2.5em" }}>1,234</h1>
              <span>2% than Last week</span>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
