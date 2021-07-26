import React from 'react';
import Typography from '@material-ui/core/Typography';
import WorkdetailsRoll from '../../components/WorkdetailsRoll/WorkdetailsRoll'

import Layout from '../../components/Layout';

export default function WorkdetailsIndexPage() {
  return (
    <Layout>
      <Typography variant="h1">Work Details</Typography>
      <WorkdetailsRoll />
      <section className="section">
        <div className="container"></div>
      </section>
    </Layout>
  );
}
