import { IconType } from "react-icons"

export interface CardProps {
	Icon: IconType
	title: string
	text: string
}

export type FAQdata = {
    question: string
    answer: string
}

export type USPdata = {
    title: string,
    text: string
}
