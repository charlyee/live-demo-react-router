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
                <NavigationButtons linkTo="/pageOne" content="anythn98d3hj0dn8329ihnd0382hnf032
                0f43hjf034hnbf340hf430f34h3f40sad0as9udj-a-sa
                da9-sdjas9djas-9dja  dasdas
                -9dua09s-djhas09dhj09shj0" />
            </div>
        );
    }
}
