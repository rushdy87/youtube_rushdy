import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from '../../components';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;

/**
 * A <BrowserRouter> stores the current location in the browser's address bar using clean
 * URLs and navigates using the browser's built-in history stack.
 *
 * <Routes>
 * Rendered anywhere in the app, <Routes> will match a set of child routes from the current location.
 *
 * <Route />
 * Routes are perhaps the most important part of a React Router app. They couple URL segments to
 * components, data loading and data mutations. Through route nesting, complex application layouts
 * and data dependencies become simple and declarative.
 *
 * Box: The Box component serves as a wrapper component for most of the CSS utility needs.
 *
 * The sx prop The sx prop is a shortcut for defining custom styles that has access to the theme.
 */
