import Card from "components/Card/Card";
import curlyarrow from "assets/Images/curly-arrow.png";
import { IoVideocamOutline } from "react-icons/io5";
import {
	NoiseCancellingIcon,
	ScheduleIcon,
	BankSecurityIcon,
} from "assets/custom-icons";
import { uspData } from "assets/mocked-data/mockedData";
import { USPdata } from "types";
import "./usp.scss";

const ClearlinkUSP = () => {
	const uspIcons = [
		IoVideocamOutline,
		NoiseCancellingIcon,
		ScheduleIcon,
		BankSecurityIcon,
	];

	return (
		<div className="wcl-container">
			<div className="usp-Header-container">
				<div className="usp-Subheading">The ClearLink Advantage</div>
				<div className="usp-Header">Why choose ClearLink?</div>
				<div className="usp-HeaderSub">
					In a world where connection is everything, ClearLink takes the lead.
					Our
					<br /> cutting-edge video conferencing app offers:
				</div>
			</div>
			<div className="usp-Body">
				<div className="usp-container">
					{uspData.map((item: USPdata, i: number) => {
						return (
							<Card Icon={uspIcons[i]} title={item.title} text={item.text} />
						);
					})}
				</div>
				<div className="usp-Image">
					<img src={curlyarrow} className="handArrow" alt="curlyarrow" />
				</div>
			</div>
		</div>
	);
};

export default ClearlinkUSP;
