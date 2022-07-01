import React from 'react'



import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import { useSelector } from 'react-redux';



import './App.scss';// all shared styles in this file



const App = () => {

// to get the state from STORE
  const { isValid } = useSelector(state => state.isValid);


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