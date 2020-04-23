import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IRouteParams {
    id: string;
}

export interface IUserProfileProps extends RouteComponentProps<IRouteParams> {

}

export default class UserProfile extends React.Component<IUserProfileProps> {
    public render() {
        return (
            <div>
                User PRofile and ID Passed in the URL is 0
            </div>
        );
    }
}
