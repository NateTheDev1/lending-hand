import React from 'react';

//Components
import HeaderNav from '../components/Header';

import Layout from '../components/layout';
import Home from '../components/Home';
import About from '../components/About';

const IndexPage = () => (
  <Layout>
    <HeaderNav />
    <Home />
    <About />
    <h1>Under</h1>
  </Layout>
);

export default IndexPage;
