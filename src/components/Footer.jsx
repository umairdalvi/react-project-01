import Button from "./Button"
import HeaderLogo from "./HeaderLogo"

const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="footer-content flex justify-between">
                    <div className="footer-left">
                        <div className="footer-logo-wrapper">
                            <HeaderLogo />
                        </div>
                        <div className="foter-dsc-wrapper">
                            <p className="footer-dsc">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Sed, delectus.</p>
                        </div>
                        <div className="newsletter-input">
                            <div className="footer-input-group flex justify-between align-center">
                                <input type="email" placeholder="Email Address " />
                                <Button
                                    text='Subscribe'
                                    style='slim'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-nav-wrapper flex justify-between">
                            <ul className="footer-nav">
                                <p className="footer-nav-title">Company</p>
                                <li className="footer-nav-item">
                                    <a href="#" className="footer-nav-link">Home</a>
                                </li>
                                <li className="footer-nav-item">
                                    <a href="#" className="footer-nav-link">Services</a>
                                </li>
                                <li className="footer-nav-item">
                                    <a href="#" className="footer-nav-link">Projects</a>
                                </li>
                                <li className="footer-nav-item">
                                    <a href="#" className="footer-nav-link">Blog</a>
                                </li>
                            </ul>
                            <ul className="footer-nav">
                                <p className="footer-nav-title">Support</p>
                                <li className="footer-nav-item">
                                    <a href="#" className="footer-nav-link">Help Center</a>
                                </li>
                                <li className="footer-nav-item">
                                    <a href="#" className="footer-nav-link">Terms of Service</a>
                                </li>
                                <li className="footer-nav-item">
                                    <a href="#" className="footer-nav-link">Legal</a>
                                </li>
                                <li className="footer-nav-item">
                                    <a href="#" className="footer-nav-link">Privacy Policy</a>
                                </li>
                            </ul>
                            <ul className="footer-nav">
                                <p className="footer-nav-title">Contact</p>
                                <li className="footer-nav-item">
                                    <a href="mailto:email@example.com" className="footer-nav-link">email@example.com</a>
                                </li>
                                <li className="footer-nav-item">
                                    <a href="tel:+15262200459" className="footer-nav-link">+1 526 220 0459</a>
                                </li>
                                <li className="footer-nav-item">
                                    <a href="tel:+15262200444" className="footer-nav-link">+1 526 220 0444</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-socials"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer