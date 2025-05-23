// Routers/AppRouter.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import Forum from "../pages/Forum";
import { ForumPage } from "../pages/ForumPage";
import LoginRegisterPage from "../pages/LoginRegisterPage";


export default function AppRouter() {
   return (
     <Router>
       <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/Login" element={<LoginRegisterPage/>}/>
            <Route path="/Forum" element={<ForumPage/>}/>
            
            {/* <Route path="/Forum" element={<Forum/>}/> */}
       </Routes>
     </Router>
   );
}

//להחליף לuse router