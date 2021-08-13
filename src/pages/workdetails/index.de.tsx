import React from 'react';
import WorkdetailsRoll from '../../components/WorkdetailsRoll/WorkdetailsRoll';

import Layout from '../../components/Layout';

export default function WorkdetailsIndexPage() {
  console.log(location);
  return (
    <Layout location={location}>
      <WorkdetailsRoll />
    </Layout>
  );
}
