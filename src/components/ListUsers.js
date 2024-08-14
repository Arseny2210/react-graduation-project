export function ListUsers({ data }) {
	console.log(data)
	return (
		<div className='col-12 col-sm-6 col-lg-4'>
			<div className='p-3 d-flex felx-row align-items-center pl-2'>
				<div className='img-wrap'>
					<img src={data.avatar_url} width='109px' height='165px' alt='' />
				</div>
				<div className='info-wrap'>
					<div>
						<a href='#'>{data.login}</a>, 15 репозиториев
					</div>
					<div>
						<a href={data.organizations_url}>Название организации</a>
					</div>
				</div>
			</div>
		</div>
	)
}
