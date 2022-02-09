import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css"; 
import FavoritesContext from "../../store/favorite-context";

function MainNavigation() {
  const favoritesCntx = useContext(FavoritesContext);
  return (
    <header className={ classes.header }>
      <div className={classes.logo}>MeetUp App</div>
      <nav>
        <ul>
          <li>
              <Link to="/">All MeetUps</Link>
          </li>
          <li>
             <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
          <Link to="/favorites">My Favorites<span className={classes.badge}>{favoritesCntx.totalFavorites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
