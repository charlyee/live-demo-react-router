import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export interface INavigationButtonsProps {
    linkTo: string;
    content: string;
    color?: string;
}

export default class NavigationButtons extends React.Component<INavigationButtonsProps> {
    public render() {
        let { linkTo, content, color } = this.props;

        return (
            <React.Fragment>
                <Button
                    as={Link}
                    to={linkTo}
                    content={content}
                    color="green"
                />
            </React.Fragment>
        );
    }
}
