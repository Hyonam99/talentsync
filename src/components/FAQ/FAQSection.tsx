import "./faq.scss";
import { data } from "assets/mocked-data/mockedData";
import Accordion from "components/Accordion/Accordion";

const FAQSection = () => {

	return (
		<div className="app__faqs">
			<div className="faqs__one">
				<p className="support">Support</p>
				<p className="faqs__header">FAQs</p>
				<p className="faqs__txt">
					Everything you need to know about the product and billing. Can’t find
					the answer you’re looking for? Please chat to our friendly team.
				</p>
			</div>
			<div className="faqs__two">
				{data.map((eachItem, i: number) => {
					return (
						<Accordion index={i} data={eachItem}/>
					);
				})}
			</div>
		</div>
	);
};

export default FAQSection;
