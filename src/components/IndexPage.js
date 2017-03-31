'use strict';

import React from 'react';
import SectionPreview from './SectionPreview';
import CVSections from '../data/CVSections';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="menu-selector">

 {CVSections.map(CVSectionsData => <SectionPreview key={CVSectionsData.id} {...CVSectionsData} />)}
        </div>
      </div>
    );
  }
}
