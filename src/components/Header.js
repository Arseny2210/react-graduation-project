import { Link } from 'react-router-dom'
export function Header() {
	// Сделать Header для каждой страницы
	return (
		<header>
			<nav className='navbar'>
				<div className='container-fluid justify-content-center justify-content-sm-between'>
					<Link to={'/'} className='navbar-brand'>
						ПОЛЬЗОВАТЕЛИ ГИТХАБ
					</Link>
					<form className='d-flex' role='search'>
						<input
							className='form-control me-2'
							type='search'
							placeholder='Поиск пользователя'
							aria-label='Search'
						/>
						<button className='btn' type='submit'>
							Найти
						</button>
					</form>
				</div>
			</nav>
		</header>
	)
}
