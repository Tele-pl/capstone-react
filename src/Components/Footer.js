const Footer = () => {
    return (
        <footer className="App-footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <nav className="footer-nav">
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy Policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;