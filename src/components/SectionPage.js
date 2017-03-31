'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import WebMenu
 from './menu';
import CVSections from '../data/CVSections';

export default class SectionPage extends React.Component{

  render(){
    const id = this.props.params.id;
    console.log("PROPS"+this.props);
  const menu = CVSections.filter(menu => menu.id === id)[0];
  if(!menu){
    return <NotFoundPage/>;
  }
    return(
      <div className="sectionPages">
      <WebMenu {...this.props.WebMenu} CVSections = {CVSections}/>
      </div>
    );
  }
}
