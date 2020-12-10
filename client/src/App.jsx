import React, {useState} from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Movies from "./components/routes/movies";
import Details from "./components/routes/movies.details";
import New from "./components/routes/movie.form";
import Home from "./components/Home";
import { lightTheme, darkTheme } from "./components/styles/Themes";
import { GlobalStyle } from "./components/styles/globalStyles";
import {SwitchB} from './components/styles/styles'

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle/>
      <BrowserRouter>
        <Switch>
          <Route path="/movies/new" component={New} />
          <Route exact path="/" component={Home} />
          <Route exact path="/movies/:id" component={Details} />
          <Route path="/movies" component={Movies} />
        </Switch>
      </BrowserRouter>
      <SwitchB onClick={themeToggle}>Switch Theme</SwitchB>
      </ThemeProvider>
    );
  
}

export default App;
