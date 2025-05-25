// // דף שמציג רשימת נושאים
// 1
// // ForumPage.jsx
// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Avatar,
//   List,
//   ListItem,
//   ListItemText,
//   Paper,
//   Grid,
//   Tooltip,
//   Fade
// } from '@mui/material';
// import { styled } from '@mui/system';

// const HoverBox = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: 70,
//   left: 20,
//   backgroundColor: '#fff',
//   boxShadow: theme?.shadows?.[3],
//   borderRadius: theme.shape.borderRadius,
//   padding: theme.spacing(1),
//   zIndex: 10,
//   display: 'none',
// }));

// const ProfileWrapper = styled(Box)(({ theme }) => ({
//   position: 'relative',
//   '&:hover .hover-menu': {
//     display: 'block',
//   },
// }));

// export default function ForumPage() {
//   // משתנים דינמיים
//   const posts = [
//     { id: 1, user: 'Brach45', letter: 'B', time: 'לפני 9 שעות', date: '24/4/25', text: 'נִישֵׁם יָקוּם כִּי יָשִׁיר חוֹרִי כֻּלָּם' },
//     { id: 2, user: 'min118', letter: 'M', time: 'לפני יום', date: '24/4/25', text: 'עַל גַּלְעֵין תָּרַח מִמּוֹת חוֹר הַתַּעֲנוּגָה' },
//     { id: 3, user: 'sshaw', letter: 'S', time: 'לפני שעתיים', date: '24/4/25', text: 'הַצֵּץ אֶת אֲחִי אֵרוֹ דּוֹר לְעִזָּאָה' },
//     // תוסיף עוד פוסטים כאן
//   ];

//   return (
//     <Box sx={{ display: 'flex', bgcolor: '#f5f5f5', minHeight: '100vh', p: 3 }}>
//       {/* תפריט צד שמאל */}
//       <Box sx={{ width: 200, position: 'relative' }}>
//         <ProfileWrapper>
//           <Tooltip title="Open profile" arrow placement="right">
//             <Avatar sx={{ bgcolor: 'gold', width: 56, height: 56, fontSize: 24 }}>B</Avatar>
//           </Tooltip>
//           <HoverBox className="hover-menu">
//             <List>
//               <ListItem button><ListItemText primary="My profile" /></ListItem>
//               <ListItem button><ListItemText primary="Messages" /></ListItem>
//               <ListItem button><ListItemText primary="Settings" /></ListItem>
//               <ListItem button><ListItemText primary="Log out" /></ListItem>
//             </List>
//           </HoverBox>
//         </ProfileWrapper>
//       </Box>

//       {/* תוכן מרכזי */}
//       <Box sx={{ flexGrow: 1, pl: 5 }}>
//         <Typography variant="h3" gutterBottom>
//           Music forum
//         </Typography>
//         <Grid container spacing={2}>
//           {posts.map(post => (
//             <Grid item xs={12} key={post.id}>
//               <Paper elevation={3} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
//                 <Avatar sx={{ bgcolor: 'gold', mr: 2 }}>{post.letter}</Avatar>
//                 <Box>
//                   <Typography variant="subtitle1">{post.user}</Typography>
//                   <Typography variant="body2">{post.text}</Typography>
//                   <Typography variant="caption" sx={{ color: 'gray' }}>
//                     {post.time} • {post.date}
//                   </Typography>
//                 </Box>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// }




// 2
// ForumPage.jsx
// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Avatar,
//   List,
//   ListItem,
//   ListItemText,
//   Paper,
//   Grid,
//   Tooltip,
//   ClickAwayListener,
// } from '@mui/material';
// import { styled } from '@mui/system';

// const HoverBox = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: 70,
//   left: 20,
//   backgroundColor: '#fff',
//   boxShadow: theme?.shadows?.[3] || '0px 3px 6px rgba(0,0,0,0.1)',
//   borderRadius: theme.shape.borderRadius,
//   padding: theme.spacing(1),
//   zIndex: 10,
// }));

// export default function ForumPage() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleAvatarClick = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   const handleClickAway = () => {
//     setMenuOpen(false);
//   };

//   const posts = [
//     { id: 1, user: 'Brach45', letter: 'B', time: 'לפני 9 שעות', date: '24/4/25', text: 'נִישֵׁם יָקוּם כִּי יָשִׁיר חוֹרִי כֻּלָּם' },
//     { id: 2, user: 'min118', letter: 'M', time: 'לפני יום', date: '24/4/25', text: 'עַל גַּלְעֵין תָּרַח מִמּוֹת חוֹר הַתַּעֲנוּגָה' },
//     { id: 3, user: 'sshaw', letter: 'S', time: 'לפני שעתיים', date: '24/4/25', text: 'הַצֵּץ אֶת אֲחִי אֵרוֹ דּוֹר לְעִזָּאָה' },
//   ];

//   return (
//     <Box sx={{ display: 'flex', bgcolor: '#f5f5f5', minHeight: '100vh', p: 3 }}>
//       {/* תפריט צד שמאל */}
//       <Box sx={{ width: 200, position: 'relative' }}>
//         <ClickAwayListener onClickAway={handleClickAway}>
//           <Box sx={{ position: 'relative' }}>
//             <Tooltip title="Open profile" arrow placement="right">
//               <Avatar
//                 sx={{ bgcolor: 'gold', width: 56, height: 56, fontSize: 24, cursor: 'pointer' }}
//                 onClick={handleAvatarClick}
//               >
//                 B
//               </Avatar>
//             </Tooltip>
//             {menuOpen && (
//               <HoverBox>
//                 <List>
//                   <ListItem button><ListItemText primary="My profile" /></ListItem>
//                   <ListItem button><ListItemText primary="Messages" /></ListItem>
//                   <ListItem button><ListItemText primary="Settings" /></ListItem>
//                   <ListItem button><ListItemText primary="Log out" /></ListItem>
//                 </List>
//               </HoverBox>
//             )}
//           </Box>
//         </ClickAwayListener>
//       </Box>

//       {/* תוכן מרכזי */}
//       <Box sx={{ flexGrow: 1, pl: 5 }}>
//         <Typography variant="h3" gutterBottom>
//           Music forum
//         </Typography>
//         <Grid container spacing={2}>
//           {posts.map((post) => (
//             <Grid item xs={12} key={post.id}>
//               <Paper elevation={3} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
//                 <Avatar sx={{ bgcolor: 'gold', mr: 2 }}>{post.letter}</Avatar>
//                 <Box>
//                   <Typography variant="subtitle1">{post.user}</Typography>
//                   <Typography variant="body2">{post.text}</Typography>
//                   <Typography variant="caption" sx={{ color: 'gray' }}>
//                     {post.time} • {post.date}
//                   </Typography>
//                 </Box>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// }


//3
// ForumPage.jsx
// import React from 'react';
// import {
//   Box,
//   Typography,
//   Avatar,
//   List,
//   ListItem,
//   ListItemText,
//   Paper,
//   Grid,
//   Tooltip,
//   ListItemButton,
// } from '@mui/material';
// import { styled } from '@mui/system';
// import { useNavigate } from 'react-router-dom';

// const HoverBox = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: 70,
//   left: 20,
//   backgroundColor: '#fff',
//   boxShadow: theme?.shadows?.[3] || '0px 2px 4px rgba(0,0,0,0.2)',
//   borderRadius: theme.shape?.borderRadius || 4,
//   padding: theme.spacing?.(1) || 8,
//   zIndex: 10,
//   display: 'none',
// }));

// const ProfileWrapper = styled(Box)(() => ({
//   position: 'relative',
// }));

// const ForumCard = styled(Paper)(() => ({
//   padding: 16,
//   display: 'flex',
//   alignItems: 'center',
//   width: '100%',
//   transition: 'transform 0.2s ease-in-out',
//   cursor: 'pointer',
//   '&:hover': {
//     transform: 'scale(1.02)',
//   },
// }));

// export default function ForumPage() {
//   const navigate = useNavigate();

//   const posts = [
//     { id: 1, user: 'Brach45', letter: 'B', time: 'לפני 9 שעות', date: '24/4/25', text: 'נִישֵׁם יָקוּם כִּי יָשִׁיר חוֹרִי כֻּלָּם' },
//     { id: 2, user: 'min118', letter: 'M', time: 'לפני יום', date: '24/4/25', text: 'עַל גַּלְעֵין תָּרַח מִמּוֹת חוֹר הַתַּעֲנוּגָה' },
//     { id: 3, user: 'sshaw', letter: 'S', time: 'לפני שעתיים', date: '24/4/25', text: 'הַצֵּץ אֶת אֲחִי אֵרוֹ דּוֹר לְעִזָּאָה' },
//   ];

//   const handleCardClick = (id) => {
//     navigate(`/posts/${id}`);
//   };

//   return (
//     <Box sx={{ display: 'flex', bgcolor: '#f5f5f5', minHeight: '100vh', p: 3 }}>
//       {/* תפריט צד שמאל */}
//       <Box sx={{ width: 200, position: 'relative' }}>
//         <ProfileWrapper>
//           <Tooltip title="Open profile" arrow placement="right">
//             <Avatar
//               sx={{ bgcolor: 'gold', width: 56, height: 56, fontSize: 24 }}
//               onClick={(e) => {
//                 const menu = document.getElementById('hover-box');
//                 if (menu) menu.style.display = 'block';
//                 e.stopPropagation();
//               }}
//             >
//               B
//             </Avatar>
//           </Tooltip>
//           <HoverBox id="hover-box" onClick={(e) => e.stopPropagation()}>
//             <List>
//               <ListItem button><ListItemText primary="My profile" /></ListItem>
//               <ListItem button><ListItemText primary="Messages" /></ListItem>
//               <ListItem button><ListItemText primary="Settings" /></ListItem>
//               <ListItem button><ListItemText primary="Log out" /></ListItem>
//             </List>
//           </HoverBox>
//         </ProfileWrapper>
//       </Box>

//       {/* תוכן מרכזי */}
//       <Box sx={{ flexGrow: 1, pl: 5 }}>
//         <Typography variant="h3" gutterBottom>
//           Music forum
//         </Typography>
//         <Grid container spacing={2}>
//           {posts.map(post => (
//             <Grid item xs={12} key={post.id}>
//               <ForumCard onClick={() => handleCardClick(post.id)}>
//                 <Avatar sx={{ bgcolor: 'gold', mr: 2 }}>{post.letter}</Avatar>
//                 <Box>
//                   <Typography variant="subtitle1">{post.user}</Typography>
//                   <Typography variant="body2">{post.text}</Typography>
//                   <Typography variant="caption" sx={{ color: 'gray' }}>
//                     {post.time} • {post.date}
//                   </Typography>
//                 </Box>
//               </ForumCard>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// // סגירת התפריט בלחיצה על המסך
// if (typeof window !== 'undefined') {
//   window.addEventListener('click', () => {
//     const menu = document.getElementById('hover-box');
//     if (menu) menu.style.display = 'none';
//   });
// }




//4
// ForumPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
  Tooltip,
  ClickAwayListener
} from '@mui/material';
import { styled } from '@mui/system';

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

const ForumCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

export default function ForumPage() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleCardClick = (postId) => {
    console.log("Navigating to post:", postId);
    // ניתוב בהמשך
  };

  const toggleMenu = () => {
    setOpenMenu(prev => !prev);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const posts = [
    { id: 1, user: 'Brach45', letter: 'B', time: 'לפני 9 שעות', date: '24/4/25', text: 'נִישֵׁם יָקוּם כִּי יָשִׁיר חוֹרִי כֻּלָּם' },
    { id: 2, user: 'min118', letter: 'M', time: 'לפני יום', date: '24/4/25', text: 'עַל גַּלְעֵין תָּרַח מִמּוֹת חוֹר הַתַּעֲנוּגָה' },
    { id: 3, user: 'sshaw', letter: 'S', time: 'לפני שעתיים', date: '24/4/25', text: 'הַצֵּץ אֶת אֲחִי אֵרוֹ דּוֹר לְעִזָּאָה' },
  ];


  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <Box sx={{ display: 'flex', bgcolor: '#f5f5f5', minHeight: '100vh', p: 3 }}>
        {/* תפריט צד שמאל */}
        <Box sx={{ width: 200, position: 'relative' }}>
          <ProfileWrapper>
            <Tooltip title="Open profile" arrow placement="right">
              <Avatar
                onClick={toggleMenu}
                sx={{ bgcolor: 'gold', width: 56, height: 56, fontSize: 24, cursor: 'pointer' }}
              >
                B
              </Avatar>
            </Tooltip>
            {openMenu && (
              <HoverBox>
                <List>
                  <ListItem button><ListItemText primary="My profile" /></ListItem>
                  <ListItem button><ListItemText primary="Messages" /></ListItem>
                  <ListItem button><ListItemText primary="Settings" /></ListItem>
                  <ListItem button><ListItemText primary="Log out" /></ListItem>
                </List>
              </HoverBox>
            )}
          </ProfileWrapper>
        </Box>

        {/* תוכן מרכזי */}
        <Box sx={{ flexGrow: 1, pl: 5 }}>
          <Typography variant="h3" gutterBottom>
            Music forum
          </Typography>
          <Grid container direction="column" spacing={2}>
            {posts.map(post => (
              <Grid item key={post.id}>
                <ForumCard
                  onClick={() => handleCardClick(post.id)}
                  sx={{ width: '100%', maxWidth: '900px', mx: 'auto' }}
                >
                  <Avatar sx={{ bgcolor: 'gold', mr: 2 }}>{post.letter}</Avatar>
                  <Box>
                    <Typography variant="subtitle1">{post.user}</Typography>
                    <Typography variant="body2">{post.text}</Typography>
                    <Typography variant="caption" sx={{ color: 'gray' }}>
                      {post.time} • {post.date}
                    </Typography>
                  </Box>
                </ForumCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </ClickAwayListener>
  );
}
