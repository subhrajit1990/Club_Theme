
import React from 'react';
import { Link } from 'react-router'

export default class WebMenu extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <nav className="menu-section">
      {this.props.CVSections.map(menuSections =>{
        return <Link key={menuSections.id} to={`/sections/${menuSections.id}`} activeClassName="active">
{menuSections.name}
            </Link>;
      })}
      </nav>
    );
  }
}

WebMenu.defaultProps = {
  WebMenu: 'null',
};
