import React, { useContext } from 'react'
import { UserInfoContext } from '../components/App'
import { SearchUserBlock } from '../components/SearchBlock/SearchUserBlock'

export function Search() {
	const { dataUsers, searchValue } = useContext(UserInfoContext)

	const searchUser = dataUsers
		.filter(dataUser => {
			if (dataUser.login.toLowerCase().includes(searchValue.toLowerCase())) {
				return true
			} else {
				return false
			}
		})
		.map(data => (
			<SearchUserBlock key={data.id} data={data} resp={data.repos_url} />
		))

	return (
		<>
			<section>
				<div className='container-fluid'>
					<h1 className='text-white fw-bold mb-5'>
						{searchUser == 0
							? `НИЧЕГО НЕ НАЙДЕНО ПО ЗАПРОСУ "${searchValue.toUpperCase()}`
							: `ПОЛЬЗОВАТЕЛИ ПО ЗАПРОСУ "${searchValue.toUpperCase()}`}
						"
					</h1>
					<div className='row g-2 text-white'>
						{dataUsers.length ? searchUser : 'Пользователи не пришли с бд'}
					</div>
				</div>
			</section>
		</>
	)
}
