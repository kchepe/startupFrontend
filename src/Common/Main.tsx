import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "64px",
    width: "100%",
    padding: "0px 40px",
  },
}));

const Main = (props: any) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <>
      <main className={classes.root}>{children}</main>
    </>
  );
};

export default Main;
