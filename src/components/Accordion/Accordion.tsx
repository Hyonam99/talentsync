import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import {type FAQdata } from "assets/mocked-data/mockedData";
import "./accordion.scss";

const Accordion = ({ index, data }: {index: number, data: FAQdata}) => {
	const [selected, setSelected] = useState<number | null>(null);

	const toggle = (i: number) => {
		if (selected === i) {
			return setSelected(null);
		}

		setSelected(i);
	};

	return (
		<div className={selected === index ? "item" : "faqs__box"}>
			<div onClick={() => toggle(index)} className="accordion-content-wrapper">
				<h3>{data.question}</h3>
				<p className={selected === index ? "show" : "content"}>{data.answer}</p>
			</div>
			<div className="accordion-btn">
				<button onClick={() => toggle(index)}>
					{selected === index ? (
						<AiOutlineMinusCircle size={24} />
					) : (
						<AiOutlinePlusCircle size={24} />
					)}
				</button>
			</div>
		</div>
	);
};

export default Accordion;
