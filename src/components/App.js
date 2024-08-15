import { useEffect, useState } from 'react'
import '../assets/styles/global.css'
import { Header } from './Header'
import { ListUsers } from './ListUsers'
function App() {
	const [dataUsers, setDataUsers] = useState([])

	useEffect(() => {
		fetch('https://api.github.com/users')
			.then(res => res.json())
			.then(arr => {
				setDataUsers(arr)
			})
	}, [])

	return (
		<div className='wrapper'>
			<Header />
			<section>
				<div className='container-fluid '>
					<div className='row g-2 text-white'>
						{dataUsers.length ? (
							dataUsers.map(data => (
								<ListUsers key={data.id} data={data} resp={data.repos_url} />
							))
						) : (
							<p>Пользователей нет</p>
						)}
					</div>
				</div>
			</section>
		</div>
	)
}

export default App
