import { IoIosArrowDown } from "react-icons/io";
import "./navbar.scss";

const Navbar = () => {
	return (
		<header className="header">
			<nav className="header-content">
				<div className="logo">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="28"
						viewBox="0 0 26 28"
						fill="none"
					>
						<path
							d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z"
							fill="#1570EF"
						/>
						<path
							d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z"
							fill="#53B1FD"
						/>
					</svg>
					<div className="logo-name">ClearLink</div>
				</div>
				<div className="nav-list">
					<div className="nav-item">
						<div className="nav-item-title">Product</div>
						<IoIosArrowDown />
					</div>
					<div className="nav-item">
						<div className="nav-item-title">Solutions</div>
						<IoIosArrowDown />
					</div>
					<div className="nav-item">
						<div className="nav-item-title">Resources</div>
						<IoIosArrowDown />
					</div>
					<div className="nav-item-title">Pricing</div>
				</div>
				<div className="nav-button">
					<button className="talkToSales">Talk to Sales</button>
					<button className="signuP">Sign up for Free</button>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
