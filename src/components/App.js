import '../assets/styles/global.css'

import { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { User } from '../pages/User'
import { Header } from './Header'

export const UserInfoContext = createContext()

function App() {
	const [dataUsers, setDataUsers] = useState([])

	useEffect(() => {
		const headers = {
			Authorization:
				'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',
		}
		fetch('https://api.github.com/users', {
			method: 'GET',
			headers: {
				Authorization: { headers },
			},
		})
			.then(res => res.json())
			.then(arr => {
				setDataUsers(arr)
			})
	}, [])

	return (
		<div className='wrapper'>
			<UserInfoContext.Provider value={{ dataUsers }}>
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
			</UserInfoContext.Provider>
		</div>
	)
}
export default App
