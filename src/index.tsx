import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { paths } from './shared/constants/constants.routes';

import { StyledContainer, GlobalStyles } from './index.style';

ReactDOM.render(
  <Router>
    <GlobalStyles />
    <StyledContainer>
      <Route exact path={paths.home}>
        <Suspense fallback={<div>Full page loader...</div>}>
          <div>Home page</div>
        </Suspense>
      </Route>
    </StyledContainer>
  </Router>,
  document.getElementById('react-root'),
);
