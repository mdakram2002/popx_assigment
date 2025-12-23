import { FaHome } from 'react-icons/fa';

const Navigation = ({ currentScreen, onPrev, onNext, onScreenChange, onHome }) => {
  const handleDotClick = (screenNumber) => {
    onScreenChange(screenNumber);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4 px-6 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {/* Previous Button - Left Arrow */}
        <button
          onClick={onPrev}
          disabled={currentScreen === 1}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
            currentScreen === 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'
          }`}
          aria-label="Previous"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Center: Screen Indicator */}
        <div className="flex items-center space-x-4">
          {/* Screen number indicator */}
          <div className="text-sm font-medium text-gray-700">
            {currentScreen} of 4
          </div>

          {/* Home Icon */}
          <button
            onClick={currentScreen !== 1 ? onHome : undefined}
            className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
              currentScreen === 1
                ? 'text-gray-300 cursor-default'
                : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 cursor-pointer'
            }`}
            aria-label="Go to Home page"
            title={currentScreen === 1 ? "You are on home page" : "Go to Home page"}
            disabled={currentScreen === 1}
          >
            <FaHome className="w-5 h-5" />
          </button>
        </div>

        {/* Next Button - Right Arrow */}
        <button
          onClick={onNext}
          disabled={currentScreen === 4}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
            currentScreen === 4
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'
          }`}
          aria-label="Next"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress Dots - Separate line at the bottom */}
      {/* <div className="flex items-center justify-center max-w-md mx-auto mt-2">
        <div className="flex items-center justify-center space-x-2">
          {[1, 2, 3, 4].map((dot) => (
            <button
              key={dot}
              onClick={() => handleDotClick(dot)}
              className={`w-2 h-2 rounded-full transition-all ${
                dot === currentScreen
                  ? 'bg-purple-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to screen ${dot}`}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Navigation;