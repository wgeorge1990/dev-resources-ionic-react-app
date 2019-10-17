import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, withIonLifeCycle, setupConfig } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import { AppPage } from './declarations';

import Menu from './components/Menu';
import Home from './pages/Home';
import List from './pages/List';
import { home, list } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
// import { statement } from '@babel/template';

const appPages = [
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title: 'Resources',
    url: '/home/list',
    icon: list
  }
];

class App extends React.Component{
  state = {
    resources: []
  }

  fetchResources = () => {
    fetch("http://localhost:3000/resources")
      .then(res => res.json()
        .then(data => this.setState({ resources: data })))
  }

 async componentDidMount() {
    this.fetchResources()
  }

   onFormSubmit = (e, url, category, description) => {
    let newResource = {
      "url": url,
      "category": category,
      "description": description
    }
    fetch('http://localhost:3000/resources', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(newResource)
    }).then(res => res.json()).then(data => {
      let newState = [...this.state.resources, data]
      console.log(newState)
      return (
        this.setState({ resources: newState })
      )
    })
  }

  render() {
    return (
      <IonApp>
        <IonReactRouter >
          <IonSplitPane contentId="main">
            <Menu appPages={appPages} />
            <IonRouterOutlet id="main">
              <Route
                path="/home"
                render={() => {
                  return (
                    <Home
                      resources={this.state.resources}
                      onFormSubmit={this.onFormSubmit}/> 
                  )
                }}
                exact={true} />
              <Route
                path="/home/list"
                render={props => { return <List resources={this.state.resources} /> }}
                exact={true} />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    )
  }
}
  
export default withIonLifeCycle(App);
