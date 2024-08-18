import React, { useEffect, useState } from 'react'
import { Loader } from './Loader'
export function MainInfoUserPage({ dataUserPage }) {
	const [UserRepoz, setUserRepoz] = useState()
	const [loading, setLoading] = useState(false)

	//  забираю ссылку на репозитории чела
	useEffect(() => {
		setLoading(true)
		const timer = setTimeout(() => {
			fetch(dataUserPage, {
				method: 'GET',
				headers: {
					Authorization:
						'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',
				},
			})
				.then(res => res.json())
				.then(repozUrl => setUserRepoz(repozUrl))
			setLoading(false)
		}, 1500)
		return () => clearTimeout(timer)
	}, [dataUserPage])

	console.log(window.location.href)
	return (
		<>
			{loading ? <Loader /> : null}
			<div className='main-info-block'>
				<div className='d-flex justify-content-sm-around flex-wrap'>
					{UserRepoz
						? UserRepoz.map(Repoz => (
								<div key={Repoz.id} className='block-info'>
									<div className='wrap-section-info'>
										<a href='#'>{Repoz.name ? Repoz.name : 'Нет названия'}</a>
										<p>
											{Repoz.description ? Repoz.description : 'Нет описания'}
										</p>
									</div>
								</div>
						  ))
						: ''}
				</div>
			</div>
		</>
	)
}
