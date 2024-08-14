export function Header() {
	return (
		<header>
			<nav className='navbar'>
				<div className='container-fluid justify-content-center justify-content-sm-between'>
					<a className='navbar-brand'>ПОЛЬЗОВАТЕЛИ ГИТХАБ</a>
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
