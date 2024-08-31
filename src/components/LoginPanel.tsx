import * as React from 'react';

export interface LoginPanelProps {
    userName?: string;
    password?: string;
}

interface LoginPanelState {
    userName: string;
    password: string;
}

export default class LoginPanel extends React.Component<LoginPanelProps, LoginPanelState> {
    constructor(props: LoginPanelProps) {
        super(props);

        this.state = { 
            userName: props.userName || '', 
            password: props.password || '' 
        };

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ userName: event.target.value });
        
        console.log(`username change: ${event.target.value}`);
    }

    handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ password: event.target.value });

        console.log(`password change: ${event.target.value}`);
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        fetch('/login', { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: this.state.userName,
                password: this.state.password
            })
        }).then(response => {
            console.log(`response: ${response.status}`);
        }).catch(err => {
            console.log(`error: ${err}`);
        });
    }

    render() {
        return (
            <div id="sideNav" className="login_sidenav">
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <a href="#" className="closebtn">&times;</a>
                        <div className="row">Please Login :</div>
                        <div className="row">
                            <input
                                className="sidenav-input"
                                type="text"
                                placeholder="Username"
                                value={ this.state.userName }
                                onChange={ this.handleUserNameChange }
                            />
                        </div>
                        <div className="row">
                            <input
                                className="sidenav-input"
                                type="password"
                                placeholder="Password"
                                value={ this.state.password }
                                onChange={ this.handlePasswordChange }
                            />
                        </div>
                        <div className="row">
                            <input 
                                type="submit" 
                                value="Login" 
                                className="btn btn-primary btn-lg" 
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
