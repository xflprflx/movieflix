import NavBar from "components/NavBar";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MoviesReview from "pages/MoviesReview";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "util/auth";

const Routes = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route path="/" exact>
          {isAuthenticated() ? <Redirect to="/movies"/> : <Home />}
        </Route>
        {!isAuthenticated() ? <Redirect to="/"/> :
        <>
        <Route path="/movies" exact>
          <Movies/>
        </Route>
        <Route path="/movies/:movieId">
          <MoviesReview/>
        </Route>
        </>
      }
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
