import * as React from "react";

interface IPersonItemView {
    personName: string;
}

export class PersonItemView extends React.Component<IPersonItemView, {}> {
    constructor(props: IPersonItemView) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.location.reload();
    }

    render() {
        return (
            <button onClick={ this.handleClick }>{ this.props.personName }</button>
        )
    }
}