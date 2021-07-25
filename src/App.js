import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';
import Food from './pages/food/Food';
import Vegetarian from './pages/vegetarian/Vegetarian';
import Vegan from './pages/vegan/Vegan';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import User from "./pages/user/User";
import Password from "./pages/password/Password";
import Secret from './pages/secret/Secret';
import UpdateUser from "./pages/updateUser/UpdateUser";


function App() {
    return (
        <>
            <Nav/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/food'>
                    <Food/>
                </Route>
                <Route path='/vegetarian'>
                    <Vegetarian/>
                </Route>
                <Route path='/vegan'>
                    <Vegan/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/register'>
                    <Register/>
                </Route>

                <PrivateRoute path='/user'>
                    <User/>
                </PrivateRoute>
                <Route path='/password'>
                    <Password/>
                </Route>
                <PrivateRoute path='/secret'>
                    <Secret/>
                </PrivateRoute>
                <PrivateRoute path='/update-user'>
                    <UpdateUser/>
                </PrivateRoute>
            </Switch>
        </>
    );
}

export default App;