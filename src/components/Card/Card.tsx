import { CardProps } from "types";
import "./card.scss";

const Card = (props: CardProps) => {
	const { Icon, title, text } = props
	return (
		<div className="card">
			<div className="card-icon">
				{<Icon size={22}/>}
			</div>
			<div className="card-title">{title}</div>
			<div className="card-subtitle">
				{text}
			</div>
		</div>
	);
};

export default Card;
