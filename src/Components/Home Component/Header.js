import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className= 'App-header'>
      <div>
        <h1>Little Lemon</h1>
        <p>Our restaurant offers a variety of delicious dishes made only with the freshest ingredients.
        Our menu includes a selection of appetizers, entrees, and desserts.
        We also have a full bar with a variety of drinks to choose from.
        Whether you are dining in or ordering takeout, we are sure you will enjoy your meal.</p>
      <Link to="/reservations">
        <button className='reserve-button'>Make a Reservation</button>
      </Link>
      </div>
      <div>
        <img src="promo.jpg" alt="promo" className="promo-photo" />
      </div>
    </div>
  );
}

export default Header;