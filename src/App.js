import React from 'react';
import './app.scss';
import { Button, Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

export default function App() {
  return (
    <>
      <Theme theme="g100">
        <TutorialHeader />
      </Theme>
      <Content>
        <Button>Button</Button>

        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/repos" element={<RepoPage />} />
        </Routes>
      </Content>
    </>
  );
}
