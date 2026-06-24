import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { Inner } from './pages/Inner';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/inner'
					element={<Inner />}
				/>
				<Route
					path='*'
					element={<Home />}
				/>
			</Routes>
		</BrowserRouter>
	);
};
