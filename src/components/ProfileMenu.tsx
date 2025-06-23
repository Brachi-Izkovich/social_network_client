// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// interface ProfileMenuProps {
//   userName: string;
// }

// const ProfileMenu: React.FC<ProfileMenuProps> = ({ userName }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showTooltip, setShowTooltip] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleNavigate = (path: string) => {
//     navigate(path);
//     setMenuOpen(false);
//   };

//   return (
//     <div className="relative inline-block text-left" ref={menuRef}>
//       <div
//         className="w-16 h-16 rounded-full bg-yellow-400 text-white flex items-center justify-center cursor-pointer text-xl font-bold"
//         onClick={() => setMenuOpen(!menuOpen)}
//         onMouseEnter={() => setShowTooltip(true)}
//         onMouseLeave={() => setShowTooltip(false)}
//       >
//         {userName.charAt(0).toUpperCase()}
//         {showTooltip && (
//           <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded shadow">
//             {userName}
//           </div>
//         )}
//       </div>

//       {menuOpen && (
//         <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-10">
//           <button
//             className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//             onClick={() => handleNavigate('/profile')}
//           >
//             My profile
//           </button>
//           <button
//             className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//             onClick={() => handleNavigate('/messages')}
//           >
//             Messages
//           </button>
//           <button
//             className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//             onClick={() => handleNavigate('/settings')}
//           >
//             Settings
//           </button>
//           <button
//             className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//             onClick={() => handleNavigate('/logout')}
//           >
//             Log out
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileMenu;

//2
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../types/user.types';

interface ProfileMenuProps {
  user: UserType;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <div
        className="w-16 h-16 rounded-full bg-yellow-400 text-white flex items-center justify-center cursor-pointer text-xl font-bold"
        onClick={toggleMenu}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {user.name.charAt(0).toUpperCase()}
        {showTooltip && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded shadow">
            {user.name}
          </div>
        )}
      </div>

      {menuOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-10">
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleNavigate('/profile')}
          >
            My profile
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleNavigate('/messages')}
          >
            Messages
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleNavigate('/settings')}
          >
            Settings
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleNavigate('/logout')}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
