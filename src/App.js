// src/App.jsx
import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import CreateAccount from './components/CreateAccount';
import LoginScreen from './components/LoginScreen';
import AccountSettings from './components/AccountSettings';
import Navigation from './components/Navigation';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleNext = () => {
    if (currentScreen < 4) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const handlePrev = () => {
    if (currentScreen > 1) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const handleScreenChange = (screenNumber) => {
    setCurrentScreen(screenNumber);
  };

  const handleCreateAccount = () => {
    setCurrentScreen(2);
  };

  const handleLogin = () => {
    setCurrentScreen(3);
  };

  // Handle home icon click
  const handleHome = () => {
    if (currentScreen !== 1) {
      setCurrentScreen(1);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return (
          <WelcomeScreen
            onCreateAccount={handleCreateAccount}
            onLogin={handleLogin}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 2:
        return <CreateAccount onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <LoginScreen onNext={handleNext} onPrev={handlePrev} />;
      case 4:
        return <AccountSettings onPrev={handlePrev} />;
      default:
        return <WelcomeScreen onCreateAccount={handleCreateAccount} onLogin={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {renderScreen()}
      <Navigation
        currentScreen={currentScreen}
        onPrev={handlePrev}
        onNext={handleNext}
        onScreenChange={handleScreenChange}
        onHome={handleHome}
      />
    </div>
  );
}

export default App;