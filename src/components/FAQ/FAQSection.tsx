import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import "./faq.scss";

const FAQSection = () => {
	const data = [
		{
			question: "How many participants can join a ClearLink video conference?",
			answer:
				"ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
		},
		{
			question: "Can I use ClearLink on multiple devices? ",
			answer:
				"ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
		},
		{
			question:
				"Is ClearLink compatible with other video conferencing platforms?",
			answer:
				"ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
		},
		{
			question:
				"How does ClearLink ensure the security of my video conferences?",
			answer:
				"ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
		},
		{
			question: "Do I need to download any software to use ClearLink? ",
			answer:
				"ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
		},
		{
			question: "What kind of customer support does ClearLink provide?",
			answer:
				"ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
		},
	];

	const [selected, setSelected] = useState<number | null>(null);

	const toggle = (i: number) => {
		if (selected === i) {
			return setSelected(null);
		}

		setSelected(i);
	};

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
				{data.map((dat, i: number) => {
					return (
						<div className={selected === i ? "item" : "faqs__box"}>
							<div onClick={() => toggle(i)} className="accordion-content-wrapper">
								<h3>{dat.question}</h3>
								<p className={selected === i ? "show" : "content"}>
									{dat.answer}
								</p>
							</div>
							<div className="accordion-btn">
								<button onClick={() => toggle(i)}>
									{selected === i ? <AiOutlineMinusCircle size={24}/> : <AiOutlinePlusCircle size={24}/>}
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FAQSection;
