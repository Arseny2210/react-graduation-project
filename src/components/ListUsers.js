import { useEffect, useState } from 'react'

export function ListUsers({ data, resp }) {
	const [reposUrl, setReposUrl] = useState([])

	useEffect(() => {
		fetch(resp)
			.then(res => res.json())
			.then(repos => {
				setReposUrl(repos)
			})
	}, [])
	return (
		<div className='col-12 col-sm-6 col-lg-4'>
			<div className='p-3 d-flex felx-row align-items-center pl-2'>
				<div className='img-wrap'>
					<img src={data.avatar_url} width='109px' height='165px' alt='' />
				</div>
				<div className='info-wrap'>
					<div>
						<a href='#'>{data.login}</a>,{' '}
						{reposUrl.length ? 0 : reposUrl.length} репозиториев
					</div>
					<div>
						<a href={data.organizations_url}>Название организации</a>
					</div>
				</div>
			</div>
		</div>
	)
}
