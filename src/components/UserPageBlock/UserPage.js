import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserInfoContext } from '../App'
import { MainInfoUserPage } from './MainInfoUserPage'
import './UserPageBlock.css'

export function UserPage() {
	const [user, setUser] = useState()
	const [dataUserPage, setDataUserPage] = useState([])
	const { id } = useParams()

	const { dataUsers } = useContext(UserInfoContext)
	// переход на юезра с главной страницы
	useEffect(() => {
		const key = {
			Authorization: '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',
		}
		fetch('https://api.github.com/users/' + id, {
			method: 'GET',
			headers: {
				Authorization: `${key}`,
			},
		})
			.then(res => res.json())
			.then(dataUser => setUser(dataUser))
	}, [id])

	// прохожусь map'ом по всем юзерам из контекста и сравниваю id
	useEffect(() => {
		dataUsers.map(user => {
			if (id == user.id) {
				setDataUserPage(user)
			}
		})
	}, [dataUsers])

	if (!user) {
		return 'Загрузка...'
	}
	if (!dataUserPage) {
		return 'Загрузка...'
	}
	console.log(dataUserPage)
	return (
		<>
			<section>
				<div className='container-fluid'>
					<div className='row p-3 d-flex felx-row align-items-center justify-content-center justify-content-sm-around'>
						<div className='col-12 col-sm-3 text-center'>
							<div className='wrap-img'>
								<img
									src={dataUserPage.avatar_url}
									width='250px'
									height='378px'
									alt=''
								/>
							</div>
						</div>
						<div className='col-12 col-sm-9 ps-5 wrap-info text-start'>
							<div>
								{dataUserPage.name ? dataUserPage.name : 'Нет имени'},
								<a href='#'>
									&ensp;
									{dataUserPage.login ? dataUserPage.login : 'Нет логина'}
								</a>
							</div>
							<div>
								<span>
									{dataUserPage.followers ? dataUserPage.followers : '0'}
								</span>{' '}
								подписчиков ·{' '}
								<span>
									{dataUserPage.following ? dataUserPage.following : '0'}
								</span>{' '}
								подписок · <a href={dataUserPage.blog}>{dataUserPage.blog}</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='container-fluid'>
					<div className='main-text row justify-content-sm-between text-center mb-4'>
						<div className='col text-lg-start'>
							<h1>РЕПОЗИТОРИИ</h1>
						</div>
						<div className='col text-lg-end'>
							<a href='#'>все репозитории</a>
						</div>
					</div>
					<MainInfoUserPage dataUserPage={dataUserPage.repos_url} />
				</div>
			</section>
		</>
		// 123123
	)
}
