import Button from "./Button"
import HeaderLogo from "./HeaderLogo"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <div className="header container flex align-center justify-between">
            <div className="header-left flex align-center justify-between">
                <HeaderLogo />
                <Navbar />
            </div>
            <div className="header-right flex align-center">
                <Button
                    text="Buy Now"
                    icon={<i className="ri-shopping-cart-2-line me-10"></i>}
                    style="slim"
                    color="primary"
                />

                <i className="ri-menu-line menu-icon"></i>
            </div>
        </div>
    )
}

export default Header