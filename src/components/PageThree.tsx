import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export interface IPageThreeProps {
}

export default class PageThree extends React.Component<IPageThreeProps> {
    public render() {
        return (
            <div>
                Page Three
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
