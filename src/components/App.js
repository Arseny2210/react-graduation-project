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
		const key = {
			Authorization: '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',
		}
		fetch('https://api.github.com/users', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${key}`,
			},
		})
			.then(res => res.json())
			.then(data => {
				const dataUsers = data.map(user => {
					return user.url
				})
				return dataUsers
			})
			.then(dataUsers => {
				return Promise.all(
					dataUsers.map(async url => {
						return await fetch(url, {
							method: 'GET',
							headers: {
								Authorization: `Bearer ${key}`,
							},
						}).then(res => res.json())
					})
				)
			})
			.then(data => setDataUsers(data))
			.catch(err => alert('ошибка запроса на сервер, попобуйте позднее'))
	}, [])

	console.log(dataUsers)

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
