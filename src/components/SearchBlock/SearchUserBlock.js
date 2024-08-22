import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export function SearchUserBlock({ data, resp }) {
	const [repozitores, setRepozitores] = useState([])

	useEffect(() => {
		fetch(resp, {
			method: 'GET',
			headers: {
				Authorization:
					'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',
			},
		})
			.then(res => res.json())
			.then(repos => {
				setRepozitores(repos)
			})
	}, [])
	console.log(resp)
	return (
		<>
			<div className='col-12 col-sm-6 col-lg-4'>
				<div className='p-3 d-flex felx-row align-items-center pl-2'>
					<div className='img-wrap'>
						<img src={data.avatar_url} width='109px' height='165px' alt='' />
					</div>
					<div className='info-wrap'>
						<div>
							<Link href='#' to={`/user/${data.id}`}>
								{data.login}
							</Link>{' '}
							{repozitores.length} репозиториев
						</div>
						<div>
							<a href={data.organizations_url}>Название организации</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
