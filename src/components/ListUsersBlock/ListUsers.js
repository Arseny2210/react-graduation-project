import { Link } from 'react-router-dom'
export function ListUsers({ data }) {
	return (
		<div className='col-12 col-sm-6 col-lg-4'>
			<div className='p-3 d-flex felx-row align-items-center pl-2'>
				<div className='img-wrap'>
					<img src={data.avatar_url} width='109px' height='165px' alt='' />
				</div>
				<div className='info-wrap'>
					<div>
						<Link to={`/user/${data.id}`}>{data.login}</Link>{' '}
						{data.public_repos} репозиториев
					</div>

					<div>
						<p>{data.company} </p>
					</div>
				</div>
			</div>
		</div>
	)
}
