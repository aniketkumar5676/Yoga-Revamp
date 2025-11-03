import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MentorsPage from './pages/MentorsPage';
import MentorDetailsPage from './pages/MentorDetailsPage';
import ShopPage from './pages/ShopPage';
import HomeYogaPage from './pages/HomeYogaPage';
import OnlineYogaPage from './pages/OnlineYogaPage';
import CorporateYogaPage from './pages/CorporateYogaPage';
import TherapyYogaPage from './pages/TherapyYogaPage';
import MeditationPage from './pages/MeditationPage';
import RetreatPage from './pages/RetreatPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import TopBar from './components/TopBar';
import FloatingButtons from './components/FloatingButtons';

// A component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <TopBar />
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/mentors/:mentorId" element={<MentorDetailsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />
          
          {/* Program Pages */}
          <Route path="/home-yoga" element={<HomeYogaPage />} />
          <Route path="/online-yoga" element={<OnlineYogaPage />} />
          <Route path="/corporate-yoga" element={<CorporateYogaPage />} />
          <Route path="/therapy-yoga" element={<TherapyYogaPage />} />
          <Route path="/meditation" element={<MeditationPage />} />
          <Route path="/retreat" element={<RetreatPage />} />
          
          {/* The program data also includes 'yoga-camp'. 
              Since there is no page for it, there is no route for it.
          */}
        </Routes>
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
};

export default App;