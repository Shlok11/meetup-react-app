import { useContext } from "react";
import FavoritesContext from "../store/favorite-context";
import MeetupList from "../components/Meetups/Meetuplists";

function FavoritesPage() {
  const favoritesCntx = useContext(FavoritesContext);
  // let content;
  // if (favoritesCntx.totalFavorites === 0) {
  //   content = <h3>You got no favorites!!</h3>;
  // } else {
  //   <MeetupList meetups={favoritesCntx.favorites} />;
  // }
  return (
    <section>
      <h1>My Favorites</h1>
      <MeetupList meetups={favoritesCntx.favorites} />
    </section>
  );
}
export default FavoritesPage;
