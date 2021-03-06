import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './contexts/AuthProvider';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/RrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Gallary from './components/Gallary/Gallary';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <PrivateRoute path='/gallary'>
              <Gallary />
            </PrivateRoute>
            <PrivateRoute path='/about-us'>
              <AboutUs />

            </PrivateRoute>

            <Route path='/signin'>
              <SignIn />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <PrivateRoute path='/service-details/:service'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>

          <Footer />

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
