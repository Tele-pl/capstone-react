const Footer = () => {
    return (
        <footer className="App-footer">
            <div className="footer-content">
                <img src="little-lemon-logo.svg" alt="Logo" />
                <p>&copy; {new Date().getFullYear()} Hue. All rights reserved.</p>
            </div>
            <div>
                <nav className="footer-nav">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/menu">Menu</a>
                    <a href="/reservations">Reservations</a>
                    <a href="/order-online">Order Online</a>
                    <a href="/login">Login</a>
                    <a href="/site-map">Site Map</a>
                </nav>
            </div>
            <div>
                <nav className="footer-social">
                    <a href="https://facebook.com">
                        <img src="facebook-logo.svg" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com">
                        <img src="x-logo.png" alt="X Social Platform" />
                    </a>
                    <a href="https://instagram.com">
                        <img src="insta-logo.svg" alt="Instagram" />
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;