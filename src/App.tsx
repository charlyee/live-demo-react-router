import * as React from 'react';
import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <Switch>
          <Route path='/pageOne' component={PageOne}/>
          <Route path='/pageTwo' component={PageTwo}/>
          <Route path='/pageThree' component={PageThree}/>
        </Switch>
      </Fragment>
    );
  }
}
