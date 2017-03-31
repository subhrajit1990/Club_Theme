'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import NotFoundPage from './components/NotFoundPage';
import SectionPage from './components/SectionPage';
const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="/sections/:id" component={SectionPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
