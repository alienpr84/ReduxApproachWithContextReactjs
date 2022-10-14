import Aside from './aside';
import Footer from './footer';
import Header from './header';
import Main from './main';

function Layout({children}) {
	return (
		<div>
			<Header />
			<Aside />
			<Main>{children}</Main>
			<Footer />
		</div>
	);
}

function withLayout(ComponentPage) {
	const page = () => (
		<Layout>
			<ComponentPage />
		</Layout>
	);

	return page;
}

export default withLayout;
export { Layout };
