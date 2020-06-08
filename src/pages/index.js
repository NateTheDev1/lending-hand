import React from 'react';

//Components
import HeaderNav from '../components/Header';

import Layout from '../components/layout';
import Home from '../components/Home';
import About from '../components/About';
import Download from '../components/Download';
import Contact from '../components/Contact';

const IndexPage = () => (
  <Layout>
    <HeaderNav />
    <Home />
    <About />
    <Download />
    <Contact />
  </Layout>
);

export default IndexPage;
