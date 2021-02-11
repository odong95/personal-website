import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from 'components/home/Home';
import { Projects } from 'components/projects/Projects';
import { Contact } from 'components/contact/Contact';
import { NavBar } from 'components/navigation/NavBar';
import { Heading } from 'components/common/heading/Heading';
import { Footer } from 'components/common/footer/Footer';
const NotFound = () => <Heading title="Page not found (404)" />

const AppRouter = () => (
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
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>
)


export { AppRouter }