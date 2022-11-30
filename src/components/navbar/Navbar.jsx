import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../../utils/constants';
import { SearchBar } from '..';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;

/**
 * Stack
 * The Stack component manages layout of immediate children along the vertical or
 * horizontal axis with optional spacing and/or dividers between each child.
 *
 * <Link>
 * A <Link> is an element that lets the user navigate to another page by clicking
 * or tapping on it. In react-router-dom, a <Link> renders an accessible <a> element
 * with a real href that points to the resource it's linking to. This means that things
 * like right-clicking a <Link> work as you'd expect. You can use <Link reloadDocument>
 * to skip client side routing and let the browser handle the transition normally
 * (as if it were an <a href>).
 */
