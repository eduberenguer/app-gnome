import React from 'react';
import { Route, Redirect, Switch} from 'react-router-dom'
import './styles/index.scss'
import {logic} from './logic'
import Landing from './pages/Landing'
import Home from './pages/Home'
import User from './pages/User'
import {NotFound} from './pages/NotFound'

const PATH = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      gnome: sessionStorage.getItem('gnome') || '',
      gnomes: [],
      errorMessage: ''
    }
  }
  componentDidMount() {
     logic.retrieveGnomes(PATH)
        .then(res => {this.setState({gnomes: res.Brastlewark})})
         .then(() => localStorage.setItem('gnomes', JSON.stringify(this.state.gnomes)))
  }
  isLoggedIn = () => !!this.state.gnome

  refreshSession = (gnome) => {this.setState({gnome})}

  handleLogout = () => {
    sessionStorage.clear()
    this.setState({gnome: ''})
  }
  render(){
    const { gnomes, errorMessage } = this.state
    return (
        <Switch>
            <Route exact path='/' render = {() => this.isLoggedIn() ? <Redirect to='/home'/> : <Landing refreshSession={this.refreshSession} gnomes={gnomes} errorMessage={errorMessage} />} />
            <Route exact path='/home' render = {() => !this.isLoggedIn() ? <Redirect to='/'/> : <Home handleLogout={this.handleLogout}/>} />
            <Route exact path='/user' render = {() => !this.isLoggedIn() ? <Redirect to='/'/> : <User />} />
            <Route component={NotFound} />
        </Switch>
    )
  }
}

export default App;
