import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Navbar, Home, Contact, Gallery,Error, Mininav, Media, Education, Skills, Experience } from './components'



function App() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <>
      <Navbar >
      </Navbar>
      {!isMobile ? <Media /> : ''}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/carrer" component={Mininav, Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/gallery" component={Gallery} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
