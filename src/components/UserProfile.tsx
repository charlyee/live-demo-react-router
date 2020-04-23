import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IRouteParams {
    id: string;
}

export interface IUserProfileProps extends RouteComponentProps<IRouteParams> {

}

export default class UserProfile extends React.Component<IUserProfileProps> {
    public render() {
        const { match: { params: { id } } } = this.props;

        // const { match } = this.props;

        // const { params } = match;

        // const { id } = params;

        // Location of id param: this.props.match.params.id;

        // this.props.match.params.id;

        // console.log(id);

        // let var2 = id+2;


        // this.props.userList 

        // let userToDisplayProfile = userList.filter(individualUser => {
        //     return individualUser.id === id
        // })[0]; //undefined??? null???



        return (
            <div>
                User PRofile and ID Passed in the URL is {id}
            </div>
        );
    }
}
