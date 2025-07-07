import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginRegisterPage from "../pages/LoginRegisterPage";
import NewPostPage from "../pages/NewPostPage";
import ProfilePage from "../pages/ProfilePage";
import TopicPage from "../pages/TopicPage";
import ForumPage from "../pages/ForumPage";
import CategoryPage from '../pages/CategoryPage';



export default function AppRouter() {
   return (
     <Router>
       <Routes>
            <Route path="/Home" element={<HomePage />}/>
            <Route path="/Login" element={<LoginRegisterPage/>}/>
            <Route path="/NewPost" element={<NewPostPage/>}/>
            {/* <Route path="/Profile" element={<ProfilePage/>}/> */}
            <Route path="/Topic" element={<TopicPage/>}/>
            <Route path="/Forum" element={<ForumPage/>}/>
            <Route path="/Categories" element={<CategoryPage />} />
            
       </Routes>
     </Router>
   );
}

//להחליף לuse router