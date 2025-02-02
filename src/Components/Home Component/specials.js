import { Link } from "react-router-dom";

const Specials = () => {
    return (
        <div className="specials">
            <h1>Specials</h1>
                <div className="specials-cards">
                    <div className="specials-item">
                        <h2>Item 1</h2>
                        <p>This is the Specials component.</p>
                        <Link to="/menu">
                            <button className='specials-button'>More Info</button>
                        </Link>
                    </div>
                    <div className="specials-item">
                        <h2>Item 2</h2>
                        <p>This is the Specials component.</p>
                        <Link to="/menu">
                            <button className='specials-button'>More Info</button>
                        </Link>
                    </div>
                    <div className="specials-item">
                        <h2>Item 3</h2>
                        <p>This is the Specials component.</p>
                        <Link to="/menu">
                            <button className='specials-button'>More Info</button>
                        </Link>
                    </div>
                </div>
        </div>
    );
};

export default Specials;