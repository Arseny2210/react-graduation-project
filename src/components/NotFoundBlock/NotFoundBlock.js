import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { UserInfoContext } from '../App'

export function NotFoundBlock() {
	const { searchValue } = useContext(UserInfoContext)
	const { pathname } = useLocation()
	return (
		<section>
			<div className='container-fluid'>
				<h1 className='text-white fw-bold my-5'>
					СТРАНИЦА ПО ЗАПРОСУ "{pathname.substring(1)}" НЕ НАЙДЕНА
				</h1>
			</div>
		</section>
	)
}
