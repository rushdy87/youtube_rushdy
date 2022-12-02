import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handelSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <Paper
      component="form"
      onSubmit={handelSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search.."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

/**
 * Paper
 * A Popper can be used to display some content on top of another. It's an alternative to react-popper.

 */
