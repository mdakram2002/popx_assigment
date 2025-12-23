import { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";

const AccountSettings = ({ onPrev }) => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(
    "https://randomuser.me/api/portraits/women/44.jpg"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 min-h-[500px] sm:min-h-[600px] flex flex-col">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-2xl font-bold text-gray-800">Account Settings</h1>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-12 h-12 sm:w-12 sm:h-12 rounded-full object-cover"
            />

            {/* Camera button - fixed for mobile */}
            <button
              onClick={() => fileInputRef.current.click()}
              className="absolute -bottom-1 -right-1 bg-purple-600 lg:p-1.5 p-0.5 sm:p-1 rounded-full border-[2px] border-white hover:bg-purple-700 transition-colors"
            >
              <FaCamera className="text-white text-xs sm:text-[8px]" />
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Marry Doe</h2>
            <p className="text-xs sm:text-sm text-gray-600">Premium Account</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6 sm:mb-8 flex-1">
          <div className="text-gray-600 text-sm sm:text-base leading-relaxed">
            <p className="mb-2">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat.Sed Diam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;