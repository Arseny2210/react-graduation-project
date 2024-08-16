import { useEffect, useState } from 'react'
import { ListUsers } from '../components/ListUsersBlock/ListUsers'

export function Home() {
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
		<div className='row g-2 text-white'>
			{dataUsers.length ? (
				dataUsers.map(data => (
					<ListUsers
						key={data.id}
						data={data}
						resp={data.repos_url}
						// orgName={data.organizations_url}
					/>
				))
			) : (
				<p>Пользователей нет</p>
			)}
		</div>
	)
}
