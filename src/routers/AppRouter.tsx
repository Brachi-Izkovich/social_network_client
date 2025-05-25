// Routers/AppRouter.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import Forum from "../pages/Forum";
// import { ForumPage } from "../pages/ForumPage";
import LoginRegisterPage from "../pages/LoginRegisterPage";
import NewPostPage from "../pages/NewPostPage";
import ProfilePage from "../pages/ProfilePage";
import TopicPage from "../pages/TopicPage";
import ForumPage from "../pages/ForumPage";



export default function AppRouter() {
   return (
     <Router>
       <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/Login" element={<LoginRegisterPage/>}/>
            {/* <Route path="/Forum" element={<ForumPage/>}/> */}
            <Route path="/NewPost" element={<NewPostPage/>}/>
            <Route path="/Profile" element={<ProfilePage/>}/>
            <Route path="/Topic" element={<TopicPage/>}/>
            <Route path="/Forum" element={<ForumPage/>}/>

            {/* <Route path="/Forum" element={<Forum/>}/> */}
       </Routes>
     </Router>
   );
}

//להחליף לuse router