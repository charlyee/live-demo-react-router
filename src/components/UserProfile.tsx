import * as React from 'react';

export interface IUserProfileProps {
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
