import React from 'react';

import Buttons from './Buttons';
import Pages from './Pages';

function Dashboard(props) {
  return (
    <div id="dashboard">
      <Buttons />
      <Pages />
    </div>
  );
}

export default Dashboard;