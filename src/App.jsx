import React, { Suspense } from "react";
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import LoadingScreen from './components/LoadingScreen';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components for better performance
const Header = React.lazy(() => import("./components/Header"));
const Hero = React.lazy(() => import("./components/Hero"));
const TokenInfo = React.lazy(() => import("./components/TokenInfo"));
const About = React.lazy(() => import("./components/About"));
const Timeline = React.lazy(() => import("./components/Timeline"));
const ClaimComponent = React.lazy(() => import("./components/ClaimComponent"));
const Teams = React.lazy(() => import("./components/Teams"));
const Footer = React.lazy(() => import("./components/Footer"));
const Newsletter = React.lazy(() => import("./components/Newsletter"));

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

const App = () => {
  return (
    <ErrorBoundary>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Suspense fallback={<LoadingScreen />}>
          <Header />
          <Hero />
          <About />
          <Timeline />
          <TokenInfo />
          <ClaimComponent />
          <Teams />
          <Newsletter />
          <Footer />
        </Suspense>
      </Web3ReactProvider>
    </ErrorBoundary>
  );
};

export default App;
