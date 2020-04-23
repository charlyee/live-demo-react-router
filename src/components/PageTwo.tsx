import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavigationButtons from './coreComponents/NavigationButtons';

export interface IPageTwoProps {
}

export default class PageTwo extends React.Component<IPageTwoProps> {
    public render() {
        return (
            <div>
                Page Two
                <NavigationButtons linkTo="/" content="HOME PAGE" />
            </div>
        );
    }
}
