import '../assets/styles/global.css'

import { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Search } from '../pages/Search'
import { User } from '../pages/User'
import { Header } from './Header'

export const UserInfoContext = createContext()

function App() {
	const [dataUsers, setDataUsers] = useState([])
	const [searchValue, setSearchValue] = useState('')
	useEffect(() => {
		fetch(`https://api.github.com/users`, {
			method: 'GET',
			headers: {
				Authorization: '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',
			},
		})
			.then(res => res.json())
			.then(arr => {
				setDataUsers(arr)
			})
			.catch(err => alert('ошибка запроса на сервер, попобуйте позднее'))
	}, [])

	return (
		<div className='wrapper'>
			<UserInfoContext.Provider
				value={{ dataUsers, searchValue, setSearchValue }}
			>
				<Header />
				<section>
					<div className='container-fluid '>
						<Routes>
							<Route path='/' element={<Home searchValue={searchValue} />} />
							<Route path='/user/:id' element={<User />} />
							<Route path='/search/:login' element={<Search />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</div>
				</section>
			</UserInfoContext.Provider>
		</div>
	)
}
export default App
