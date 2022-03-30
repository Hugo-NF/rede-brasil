import AppBar from '../../components/AppBar';
import withRoot from '../../modules/withRoot';
import ProductCTA from '../ProductCTA';
import ProductCategories from '../ProductCategories';
import ProductSmokingHero from '../ProductSmokingHero';
import AppFooter from '../AppFooter';
import ProductHero from '../ProductHero';
import ProductValues from '../ProductValues';
import ProductHowItWorks from '../ProductHowItWorks';

function Landing() {
	return (
		<>
			<AppBar />
			<ProductHero />
			<ProductValues />
			<ProductCategories />
			<ProductHowItWorks />
			<ProductCTA />
			<ProductSmokingHero />
			<AppFooter />
		</>
	);
}

export default withRoot(Landing);