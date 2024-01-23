import {
	ClearlinkUSP,
	Destination,
	FAQSection,
	FeaturedCompanies,
	Footer,
	Hero,
	Navbar,
	Shopify,
} from "components/exports";
import "./App.scss";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<FeaturedCompanies />
			<ClearlinkUSP />
			<Shopify />
			<FAQSection />
			<Destination />
			<Footer />
		</>
	);
};

export default App;
