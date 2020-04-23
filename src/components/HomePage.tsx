import * as React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export interface IHomePageProps {
}

export default class HomePage extends React.Component<IHomePageProps> {
    public render() {
        return (
            <div>
                <Grid>
                    <Grid.Row>


                        Home Page
                        </Grid.Row>
                    <Grid.Row>
                        <Button
                            as={Link}
                            to={`/pageOne`}
                            content="GoToPageOne"
                            color="facebook"
                        />
                        <Button
                            as={Link}
                            to={`/pageTwo`}
                            content="GoToPageTwo"
                            color="green"
                        />
                        <Button
                            as={Link}
                            to={`/pageThree`}
                            content="GoToPageThree"
                            color="linkedin"
                        />
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
