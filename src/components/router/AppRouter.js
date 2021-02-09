import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from 'components/home/Home';
import { Projects } from 'components/projects/Projects';
import { NavBar } from 'components/navigation/NavBar';
import { Footer } from 'components/common/footer/Footer';
const NotFound = () => <h2>Page not found.</h2>

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export { AppRouter }