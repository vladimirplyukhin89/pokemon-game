import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import HomePage from './routes/Home/HomePage';
import GamePage from './routes/Game/GamePage';
import ContactPage from './routes/Contact/ContactPage';
import AboutPage from './routes/About/AboutPage';
import NotFound from './routes/NotFound/NotFound';
import MenuHeader from './components/MenuHeader/MenuHeader';
import Footer from './components/FooterBlock/Footer';

import classes from './app.module.css';
import cn from 'classnames';

const App = () => {
  const match = useRouteMatch('/');

  return (
    <Switch>
      <Route path='/404' component={NotFound} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(classes.wrap, {
            [classes.isHomePage]: match.isExact
          })}>
            <Switch>
              <Route path='/home' exact component={HomePage} />
              <Route path='/game' component={GamePage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/contact' component={ContactPage} />
              <Route render={() => (
                <Redirect to='/404' />
              )} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>

  )
};

export default App;