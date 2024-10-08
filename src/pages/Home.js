import { useContext } from 'react'
import { UserInfoContext } from '../components/App'
import { ListUsers } from '../components/ListUsersBlock/ListUsers'

export function Home() {
	const { dataUsers } = useContext(UserInfoContext)

	return (
		<>
			<div className='row g-2 text-white'>
				{dataUsers.length ? (
					dataUsers.map(data => <ListUsers key={data.id} data={data} />)
				) : (
					<p>Пользователей нет</p>
				)}
			</div>
		</>
	)
}
