import { useContext } from 'react'
import { UserInfoContext } from '../App'

export function NotFoundBlock() {
	const { searchValue } = useContext(UserInfoContext)
	return (
		<section>
			<div className='container-fluid'>
				<h1 className='text-white fw-bold my-5'>
					НИЧЕГО НЕ НАЙДЕНО ПО ЗАПРОСУ "{searchValue.toUpperCase()}"
				</h1>
			</div>
		</section>
	)
}
