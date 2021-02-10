import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from 'components/home/Home';
import { Projects } from 'components/projects/Projects';
import { NavBar } from 'components/navigation/NavBar';
import { Footer } from 'components/common/footer/Footer';
const NotFound = () => <h2 className="container mx-auto text-4xl text-gray-700 text-secondary tracking-widest m-6" >Page not found (404)</h2>

const AppRouter = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
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