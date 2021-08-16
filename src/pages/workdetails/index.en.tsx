import React from 'react';
import WorkdetailsRoll from '../../components/WorkdetailsRoll/WorkdetailsRoll';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default function WorkdetailsIndexPage({ location }) {
  return (
    <Layout location={location}>
      <SEO location={location} description="Works Page" />
      <WorkdetailsRoll location={location} />
    </Layout>
  );
}
