import * as React from 'react';

export interface INotFoundPageProps {
}

export default class NotFoundPage extends React.Component<INotFoundPageProps> {
    public render() {
        return (
            <div>
                Invalid URL Specified
            </div>
        );
    }
}
