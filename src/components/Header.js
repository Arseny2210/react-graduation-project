import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { UserInfoContext } from './App'
import { SearchInput } from './SearchBlock/SearchInput'

export function Header() {
	const { pathname } = useLocation()
	const { dataUsers, searchValue, setsearchValue } = useContext(UserInfoContext)
	const [user, setUser] = useState(dataUsers)
	const [info, setInfo] = useState('')

	useEffect(() => {
		dataUsers.map(user => {
			if (pathname.substring(6) == user.id) {
				setUser(user)
			}
		})
	}, [pathname, dataUsers])
	useEffect(() => {
		if (pathname == `/search/${searchValue}`) {
			setInfo(
				<Link to={'/'} className='navbar-brand'>
					ПОЛЬЗОВАТЕЛИ ГИТХАБ // поиск
				</Link>
			)
		} else if (pathname == `/`) {
			setInfo(
				<Link to={'/'} className='navbar-brand'>
					ПОЛЬЗОВАТЕЛИ ГИТХАБ
				</Link>
			)
		} else {
			setInfo(
				<Link to={'/'} className='navbar-brand'>
					ПОЛЬЗОВАТЕЛИ ГИТХАБ // {user.login}
				</Link>
			)
		}
	}, [pathname, dataUsers, user])

	if (!user) {
		return 'Загрузка...'
	}
	return (
		<header>
			<nav className='navbar'>
				<div className='container-fluid justify-content-center justify-content-sm-between'>
					{info}
					<SearchInput />
				</div>
			</nav>
		</header>
	)
}
