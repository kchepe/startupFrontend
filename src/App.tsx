import React from "react";
import AppBarComponent from "./Common/AppBarComponent";
import Routes from "./Routes/Routes";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ display: "flex" }}>
        <AppBarComponent />
        <Routes />
      </div>
    </ThemeProvider>
  );
};

export default App;
