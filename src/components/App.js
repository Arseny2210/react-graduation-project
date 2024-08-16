import '../assets/styles/global.css'

import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { User } from '../pages/User'
import { Header } from './Header'

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<section>
				<div className='container-fluid '>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/user/:id' element={<User />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</section>
		</div>
	)
}
// 123123123
export default App
