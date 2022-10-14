import * as React from 'react';

import Greeting from '../components/Header/Header';
import Layout from '../components/Layout/Layout';

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Layout>
      <Greeting name="Megan" />
    </main>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
