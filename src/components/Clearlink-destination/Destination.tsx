import Sectionimg from "assets/Images/destination.png";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import "./destination.scss";

const Destination = () => {
	return (
		<div className="app__cta">
			<div className="cta__text">
				<p className="cta__header">
					{" "}
					Ready to clear the path to perfect communication?
				</p>
				<div className="cta__perks">
					<span>
						<MdOutlineCheckCircleOutline size={28} color="#175cd3" /> 30 days free trial
					</span>
					<span>
						<MdOutlineCheckCircleOutline size={28} color="#175cd3" /> Cancel at any time
					</span>
					<span>
						<MdOutlineCheckCircleOutline size={28} color="#175cd3" /> Access to all features
					</span>
					<span>
						<MdOutlineCheckCircleOutline size={28} color="#175cd3" /> Peronalized onboarding
					</span>
				</div>
				<div className="cta__btn">
					<button className="btn_one">Talk to sales</button>
					<button className="btn_two">Start your free trial</button>
				</div>
			</div>
			<div className="cta_img">
				<img src={Sectionimg} />
			</div>
		</div>
	);
};

export default Destination;
