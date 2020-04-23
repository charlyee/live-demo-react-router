import * as React from 'react';

export interface IAnotherComponentProps {
}

export default class AnotherComponent extends React.Component<IAnotherComponentProps> {
  public render() {
    return (
      <div>
        Another COmponent is here!
      </div>
    );
  }
}
