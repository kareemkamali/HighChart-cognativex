import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';// all shared styles in this file
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import { useSelector } from 'react-redux';
const App = () => {
  const { isValid } = useSelector(state => state.isValid);// to get the state from STORE
  return (
    //div app contain all pages same background
    <div className='app'>
      {/* switch to organize the routes */}
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        {/* to protect dashboard Route */}
        {isValid && <Route path='/dashboard'>
          <DashboardPage />
        </Route>}
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default App