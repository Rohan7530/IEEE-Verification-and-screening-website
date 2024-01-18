// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import ParticipantPage from './components/ParticipantPage';
import ReviewerLanding from './components/ReviewerLanding';
import { RecommendationForm } from './components/RecommendationForm';
import Timeline from './components/Timeline';
import AdminLanding from './components/AdminLanding';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={AuthPage} />
          <Route path="/participant" component={ParticipantPage} />
          <Route path="/review" component={ReviewerLanding} />
          <Route path="/recommendation-form" component={RecommendationForm} />
          <Route path="/admin-landing" component={AdminLanding} />
          <Route path="/timeline" component={Timeline} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

