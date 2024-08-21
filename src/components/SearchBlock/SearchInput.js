import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserInfoContext } from '../App'
export function SearchInput() {
	const { searchValue, setSearchValue } = useContext(UserInfoContext)

	return (
		<>
			<form className='d-flex' role='search'>
				<input
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					className='form-control me-2'
					type='search'
					placeholder='Поиск пользователя'
					aria-label='Search'
				/>
				<Link to={`/search/${searchValue}`} className='btn' type='submit'>
					Найти
				</Link>
			</form>
		</>
	)
}
