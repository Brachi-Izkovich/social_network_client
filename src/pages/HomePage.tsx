// דף הבית

import { HomeSection } from "../sections/HomeSection";
import ProfileMenu from "../components/ProfileMenu";
import CategoryList from "../components/CategoryList";

export default function HomePage() {
  // דוגמה: שליפת שם משתמש מה-token או sessionStorage
  const userName = sessionStorage.getItem('userName') || 'משתמש';
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #e3f2fd 0%, #fffde7 100%)' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '18px 0 0 32px' }}>
        <ProfileMenu userName={userName} />
      </div>
      <HomeSection />
      <CategoryList />
    </div>
  );
}