// // דף פרופיל
// // src/pages/ProfilePage.tsx
// import React from 'react';
// import Header from '../components/Header';
// import ProfileMenu from '../components/ProfileMenu';
// import { UserType } from '../types/user.types';
// import { RoleUserType } from '../types/enums/roleUserEnum.types';

// const mockUser: UserType = {
//     name: 'Brachi45',
//     email: 'b@gmail.com',
//     role: RoleUserType.Admin, 
//     countMessages: 2300,
//     imageProfileUrl: '../../public/logo192',
//     password: '1234',
//     id: 1
// };

// const ProfilePage: React.FC = () => {
//   return (
//     <div dir="rtl" style={{ fontFamily: 'sans-serif' }}>
//       <Header />

//       <div style={{ display: 'flex', marginTop: '20px' }}>
//         {/* תפריט צד שמאלי */}
//         <div style={{ width: '100px', padding: '20px' }}>
//           <ProfileMenu user={mockUser} />
//           <div style={{ marginTop: '20px' }}>
//             <button style={buttonStyle}>פרופיל</button>
//             <button style={buttonStyle}>הודעות שלי</button>
//             <button style={buttonStyle}>התראות</button>
//           </div>
//         </div>

//         {/* גוף הדף */}
//         <div style={{ flexGrow: 1, textAlign: 'center', padding: '20px' }}>
//           <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>פרופיל</h2>

//           <div style={{ fontSize: '18px', lineHeight: '2' }}>
//             <div>שם משתמש: {mockUser.name}</div>
//             <div>מייל: {mockUser.email}</div>
//             <div>רמת משתמש: {mockUser.role}</div>
//             <div>מספר ההודעות שכתבתי: {mockUser.countMessages}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const buttonStyle: React.CSSProperties = {
//   display: 'block',
//   width: '100%',
//   marginBottom: '10px',
//   padding: '10px',
//   backgroundColor: 'white',
//   border: '1px solid gray',
//   borderRadius: '4px',
//   cursor: 'pointer'
// };

// export default ProfilePage;



//2
// src/components/ProfileMenu.tsx
import React, { useState } from 'react';
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  ClickAwayListener,
  Box
} from '@mui/material';
import { styled } from '@mui/system';
import { UserType } from '../types/user.types';

const HoverBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 70,
  left: 20,
  backgroundColor: '#fff',
  boxShadow: theme?.shadows?.[3] ?? '0px 3px 6px rgba(0,0,0,0.1)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  zIndex: 10,
}));

const ProfileWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block'
}));

interface ProfileMenuProps {
  user: UserType;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ user }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(prev => !prev);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <ClickAwayListener onClickAway={handleCloseMenu}>
      <ProfileWrapper>
        <Tooltip title="Open profile" arrow placement="right">
          <Avatar
            onClick={handleToggleMenu}
            src={user.imageProfileUrl}
            sx={{ width: 56, height: 56, cursor: 'pointer' }}
          >
            {!user.imageProfileUrl && user.name.charAt(0)}
          </Avatar>
        </Tooltip>
        {openMenu && (
          <HoverBox>
            <List>
              <ListItem button><ListItemText primary="פרופיל" /></ListItem>
              <ListItem button><ListItemText primary="הודעות שלי" /></ListItem>
              <ListItem button><ListItemText primary="הגדרות" /></ListItem>
              <ListItem button><ListItemText primary="התנתקות" /></ListItem>
            </List>
          </HoverBox>
        )}
      </ProfileWrapper>
    </ClickAwayListener>
  );
};

export default ProfileMenu;
