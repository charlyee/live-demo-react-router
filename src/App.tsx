import * as React from 'react';
import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>

        {/*                   /PageOne                       */}

          <Route path='/' component={HomePage} />
          <Route path='/pageOne' component={PageOne} />
          <Route path='/pageTwo' component={PageTwo} />
          <Route path='/pageThree' component={PageThree} />
          <Route component={NotFoundPage} />

      </Fragment>
    );
  }
}
