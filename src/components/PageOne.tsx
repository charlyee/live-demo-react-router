import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export interface IPageOneProps {
}

export default class PageOne extends React.Component<IPageOneProps> {
    public render() {
        return (
            <div>
                Page One
                <Button
                    as={Link}
                    to={`/`}
                    content="GoToHomePage"
                    color="red"
                />
            </div>
        );
    }
}
