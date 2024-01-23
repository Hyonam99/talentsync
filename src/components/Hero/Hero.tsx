import avatargroup from "assets/Images/Avatar group.png";
import { LiaRobotSolid } from "react-icons/lia";
import { BsMic } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import { SlScreenDesktop } from "react-icons/sl";
import { BsChatText } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { TbSettings } from "react-icons/tb";
import { StarReviews } from "assets/custom-icons";
import "./hero.scss";

const Hero = () => {
	return (
		<div className="hero">
			<div className="Hero-title-container">
				<h2 className="Hero-title">
					Uniting the world,
					<br />
					one video call at a time
				</h2>
				<p className="hero-subtitle">
					Experience the future of communication with ClearLink -<br /> where
					crystal-clear video conferencing meets
					<br /> unparalleled simplicity.
				</p>
				<div className="hero-button">
					<button className="startYourTrial">Start your free trial</button>
					<div className="Ai-assistant">
						<LiaRobotSolid size={24} />
						Discover AI assistant
					</div>
				</div>
				<div className="user-review">
					<div className="avatar_group">
						<img src={avatargroup} alt="avatargroup" />
					</div>
					<div className="reviews">
						<div className="star-row">
							<StarReviews />
							<span className="star-number">5.0</span>
						</div>
						<div className="review-content">from 3,000+ reviews</div>
					</div>
				</div>
			</div>
			<div className="Hero-image-display">
				<div className="image-grid">
					<div className="grid">
						<div className="grid-01"></div>
						<div className="grid-02"></div>
						<div className="grid-03"></div>
						<div className="grid-04"></div>
						<div className="grid-05"></div>
						<div className="grid-06"></div>
					</div>
				</div>
				<div className="grid-icons">
					<div className="icon-container">
						<BsMic size={22} />
					</div>
					<div className="icon-container">
						<IoVideocamOutline size={21} />
					</div>
					<div className="icon-container">
						<SlScreenDesktop size={21} />
					</div>
					<div className="icon-container">
						<BsEmojiSmile size={21} />
					</div>
					<div className="icon-container">
						<BsChatText size={21} />
					</div>
					<div className="icon-container">
						<TbSettings size={21} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
