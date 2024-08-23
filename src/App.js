import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import useScrollToTop from './components/useScrollToTop';
import { AuthProvider } from './context/AuthContext';
import { HelmetProvider } from 'react-helmet-async';

// Common Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import PrivateRoute from './components/common/PrivateRoute';

// General Pages
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import PostDetails from './components/pages/PostDetails';
import DestinationBlogs from './components/pages/DestinationBlogs';
import Destinations from './components/pages/Destinations';
import Forums from './components/pages/Forums';
import ForumTopics from './components/pages/ForumTopics';
import TopicDetails from './components/pages/TopicDetails';
import Activities from './components/pages/Activities';
import ActivitiesListing from './components/pages/ActivitiesListing';
import ActivityDetails from './components/pages/ActivityDetails';
import Demo from './components/pages/Demo';

// User Panel Pages
import UserDetails from './components/userpanelpages/UserDetails';
import Profile from './components/userpanelpages/Profile';
import Coins from './components/userpanelpages/Coins';
import CreatePost from './components/userpanelpages/CreatePost';
import AllPosts from './components/userpanelpages/AllPosts';
import Bookmark from './components/userpanelpages/Bookmark';
import BookmarkLists from './components/userpanelpages/BookmarkLists';
import EditPost from './components/userpanelpages/EditPost';
import CreateTopics from './components/userpanelpages/CreateTopics';
import AllTopics from './components/userpanelpages/AllTopics';
import AllActivities from './components/userpanelpages/AllActivities';
import CreateActivity from './components/userpanelpages/CreateActivity';

// Auth Pages
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';

// Email Verification Pages
import EmailVerification from './components/auth/EmailVerification'; // New Component
import ResendVerification from './components/auth/ResendVerification'; // New Component

// Component to handle conditional rendering of Header and Footer
const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/forgotpassword' && location.pathname !== '/resetpassword' && location.pathname !== '/verify/:id' && location.pathname !== '/resend-verification' && (
        <Header />
      )}

      {children}

      {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/forgotpassword' && location.pathname !== '/resetpassword' && location.pathname !== '/verify/:id' && location.pathname !== '/resend-verification' && (
        <Footer />
      )}
    </>
  );
};

function App() {
  useScrollToTop();
  return (
    <AuthProvider>
      <HelmetProvider>
        <Routes>
          {/* General Routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
          <Route path="/demo" element={<Layout><Demo /></Layout>} />
          <Route path="/blog/:slug" element={<Layout><PostDetails /></Layout>} />
          <Route path="/destinations" element={<Layout><Destinations /></Layout>} />
          <Route path="/destinations/:slug" element={<Layout><DestinationBlogs /></Layout>} />
          <Route path="/forums" element={<Layout><Forums /></Layout>} />
          <Route path="/forum-topics" element={<Layout><ForumTopics /></Layout>} />
          <Route path="/topic-details" element={<Layout><TopicDetails /></Layout>} />
          <Route path="/activities" element={<Layout><Activities /></Layout>} />
          <Route path="/activities-listing" element={<Layout><ActivitiesListing /></Layout>} />
          <Route path="/activity-details" element={<Layout><ActivityDetails /></Layout>} />

          {/* User Panel Routes */}
          <Route path="/userdetails" element={<Layout><UserDetails /></Layout>} />
          <Route path="/profile" element={<PrivateRoute element={<Layout><Profile /></Layout>} />} />
          <Route path="/coins" element={<PrivateRoute element={<Layout><Coins /></Layout>} />} />
          <Route path="/create-post" element={<PrivateRoute element={<Layout><CreatePost /></Layout>} />} />
          <Route path="/all-posts" element={<PrivateRoute element={<Layout><AllPosts /></Layout>} />} />
          <Route path="/create-topics" element={<PrivateRoute element={<Layout><CreateTopics /></Layout>} />} />
          <Route path="/all-topics" element={<PrivateRoute element={<Layout><AllTopics /></Layout>} />} />
          <Route path="/bookmark-lists" element={<PrivateRoute element={<Layout><BookmarkLists /></Layout>} />} />
          <Route path="/bookmark" element={<PrivateRoute element={<Layout><Bookmark /></Layout>} />} />
          <Route path="/edit-post/:postId" element={<PrivateRoute element={<Layout><EditPost /></Layout>} />} />
          <Route path="/all-activities" element={<PrivateRoute element={<Layout><AllActivities /></Layout>} />} />
          <Route path="/create-activity" element={<PrivateRoute element={<Layout><CreateActivity /></Layout>} />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />

          {/* Email Verification Routes */}
          <Route path="/verify/:id" element={<EmailVerification />} />
          <Route path="/resend-verification" element={<ResendVerification />} />
        </Routes>
      </HelmetProvider>
    </AuthProvider>
  );
}

export default function AppWrapper() {
  return (
    <Router basename="/gmbgit">
      <App />
    </Router>
  );
}
