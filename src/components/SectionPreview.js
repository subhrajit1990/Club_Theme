'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class SectionPreview extends React.Component {
  render() {
    return (
     <Link to={`/sections/${this.props.id}`}>
        <div className="section-preview">

          <h2 className="name">{this.props.name}</h2>

        </div>
     </Link>
    );
  }
}
