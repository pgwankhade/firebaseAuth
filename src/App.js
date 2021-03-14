import './App.css';
import SignIn from './components/SignIn'
import Register from './components/Register'
import ProfilePage from './components/ProfilePage'
import EditPage from './components/EditPage'
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux'
function App() {

  const select = useSelector(state=>state.registration.loggedIn)
  
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          return true ? <Component {...props} /> : <Redirect to="/login" />
        }}
      />
    );
  };
  return (
    <div>
      <HashRouter>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <SignIn {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/editpage" name="Register Page" render={props => <EditPage {...props}/>}/>
              <PrivateRoute exact path="/" component={ProfilePage} />
            </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
