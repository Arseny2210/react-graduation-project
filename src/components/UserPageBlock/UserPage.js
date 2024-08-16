import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './UserPageBlock.css'

export function UserPage() {
	const [user, setUser] = useState()

	const { id } = useParams()

	useEffect(() => {
		const headers = {
			Authorization:
				'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',
		}
		fetch('https://api.github.com/users/' + id, {
			method: 'GET',
			headers: {
				Authorization: { headers },
			},
		})
			.then(res => res.json())
			.then(dataUser => setUser(dataUser))
	}, [id])
	if (!user) {
		return 'Загрузка...'
	}
	return (
		<>
			<section>
				<div className='container-fluid'>
					<div className='row p-3 d-flex felx-row align-items-center justify-content-center justify-content-sm-around'>
						<div className='col-12 col-sm-3 text-center'>
							<div className='wrap-img'>
								<img src='img/1.png' width='250px' height='378px' alt='' />
							</div>
						</div>
						<div className='col-12 col-sm-9 ps-5 wrap-info text-start'>
							<div>
								CHRIS WANSTRATH, <a href='#'>defunct {id}</a>
							</div>
							<div>
								<span>21.3k</span> подписчиков · <span>210</span> подписок ·
								<span>http://chriswanstrath.com/</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className='container-fluid'>
					<div className='main-text row justify-content-sm-between text-center'>
						<div className='col text-lg-start'>
							<h1>РЕПОЗИТОРИИ</h1>
						</div>
						<div className='col text-lg-end'>
							<a href=''>все репозитории</a>
						</div>
					</div>
					<div className='main-info-block'>
						<div className='d-flex justify-content-sm-around flex-wrap'>
							<div className='block-info'>
								<div className='wrap-section-info'>
									<a href=''>body_matcher</a>
									<p>Simplify your view testing. Forget assert_select.</p>
								</div>
							</div>
							<div className='block-info'>
								<div className='wrap-section-info'>
									<a href=''>body_matcher</a>
									<p>Simplify your view testing. Forget assert_select.</p>
								</div>
							</div>
							<div className='block-info'>
								<div className='wrap-section-info'>
									<a href=''>body_matcher</a>
									<p>Simplify your view testing. Forget assert_select.</p>
								</div>
							</div>
							<div className='block-info'>
								<div className='wrap-section-info'>
									<a href=''>body_matcher</a>
									<p>Simplify your view testing. Forget assert_select.</p>
								</div>
							</div>
							<div className='block-info'>
								<div className='wrap-section-info'>
									<a href=''>body_matcher</a>
									<p>Simplify your view testing. Forget assert_select.</p>
								</div>
							</div>
							<div className='block-info'>
								<div className='wrap-section-info'>
									<a href=''>body_matcher</a>
									<p>Simplify your view testing. Forget assert_select.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
