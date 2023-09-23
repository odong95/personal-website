import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';
import { Home } from 'components/home/Home';
import { Projects } from 'components/projects/Projects';
import { Interests } from 'components/interests/Interests';
import { Resume } from 'components/resume/Resume';
import { Contact } from 'components/contact/Contact';
import { NavBar } from 'components/navigation/NavBar';
import { Heading } from 'components/common/heading/Heading';
import { Footer } from 'components/common/footer/Footer';
import { useLetterboxdFetch } from "../interests/Letterboxd";


const NotFound = () => <Heading title="Page not found (404)" />

const AppRouter = () => {
  const { lbData, error } = useLetterboxdFetch();

  return (
    <Router>
      <ScrollToTop>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/interests">
            <Interests lbData={lbData} error={error} />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  )
}

export { AppRouter }