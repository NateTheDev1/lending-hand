import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import styled from 'styled-components';
import { GlobalStyle } from '../styles';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Lending Hand Offical Landing Page' },
            { name: 'keywords', content: 'Lending Hand, Yakware LLC' },
          ]}>
          <html lang="en" />
        </Helmet>
        <GlobalStyle />

        <>{children}</>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
