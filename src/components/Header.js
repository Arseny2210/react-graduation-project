import { Link } from 'react-router-dom'
import { SearchInput } from './SearchBlock/SearchInput'

export function Header() {
	return (
		<header>
			<nav className='navbar'>
				<div className='container-fluid justify-content-center justify-content-sm-between'>
					<Link to={'/'} className='navbar-brand'>
						ПОЛЬЗОВАТЕЛИ ГИТХАБ
					</Link>
					<SearchInput />
				</div>
			</nav>
		</header>
	)
}
