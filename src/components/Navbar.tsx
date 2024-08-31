import * as React from "react";

export interface IMenuItem {
  ButtonName: string;
}

export interface INavBarProps {
  menuItems?: IMenuItem[];
}

export interface INavBarState {
  menuItems: IMenuItem[];
}

export default class Navbar extends React.Component<INavBarProps, INavBarState> {
  constructor(props: INavBarProps) {
    super(props);

    this.state = {
      menuItems: props.menuItems || [],
    };
  }

  componentDidMount() {
    fetch('/menuitems.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ menuItems: data.menuItems });
      })
      .catch((err) => {
        console.log(`error: ${err}`);
      });
  }

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-dark bg-dark">
          <a className="navbar-brand">PERSONAS</a>
          <ul className="navbar-nav">
            { this.state.menuItems.map((item, i) => (
              <li key={ i } className="nav-item">
                <a href="#" className="nav-link">
                  { item.ButtonName }
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
