import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function SearchUserBlock({ data, resp }) {
	const [repozitores, setRepozitores] = useState([])
	const [dataPage, setDataPage] = useState([])

	const { login } = useParams()

	useEffect(() => {
		fetch(`https://api.github.com/search/` + login, {
			method: 'GET',
			headers: {
				Authorization: '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',
			},
		})
			.then(res => res.json())
			.then(arr => {
				setDataPage(arr)
			})
	}, [])

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

	console.log(dataPage)

	return (
		<>
			<div className='col-12 col-sm-6 col-lg-4'>
				<div className='p-3 d-flex felx-row align-items-center pl-2'>
					<div className='img-wrap'>
						<img
							src={dataPage.avatar_url}
							width='109px'
							height='165px'
							alt=''
						/>
					</div>
					<div className='info-wrap'>
						<div>
							<a href='#'>{dataPage.login}</a> {repozitores.length} репозиториев
						</div>
						<div>
							<a href={dataPage.organizations_url}>Название организации</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
