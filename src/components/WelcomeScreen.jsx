// WelcomeScreen.jsx - Fixed mobile height
const WelcomeScreen = ({ onCreateAccount, onLogin, onNext, onPrev }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        {/* Content */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Welcome to PopX</h1>
          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3 sm:space-y-4">
          <button
            onClick={onCreateAccount}
            className="w-full bg-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-200 text-sm sm:text-base"
          >
            Create Account
          </button>
          <button
            onClick={onLogin}
            className="w-full bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg hover:bg-gray-300 transition duration-200 text-sm sm:text-base"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;