import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Ranking from '@material-ui/icons/FormatListNumbered';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Profile from '@material-ui/icons/AccountCircle';
import CameraIcon from '@material-ui/icons/CameraAlt';
import '../../css/normalizer.css'

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={`navigation ${classes.root}`}>
      <BottomNavigationAction label="رتبه" value="recents" icon={<Ranking />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="پروفایل" value="nearby" icon={<Profile />} />
      <Link to='/camera'>
        <BottomNavigationAction label="دوربین" value="folder" icon={<CameraIcon />} />
      </Link>
    </BottomNavigation>
  );
}