const RelevantContent = () => {
	return (
		<section className='actual-section'>
			<div className='section-pl'>
				<h2>Только актуальный контент</h2>
			</div>
			<div className='actual-content'>
				<div className='actual-content-top'>
					<div className='desc'>
						Moscow Business Academy записывает контент очных лекций, поэтому это
						хорошая возможность <strong className='red'>получить MBA </strong>не
						посящая наши кампусы.
					</div>
					<div className='right-image'>
						<img
							className='lazyload'
							data-src='/assets/images/actual_pic_2.jpg'
							alt=''
						/>
					</div>
				</div>
				<div className='actual-bottom-image'>
					<img
						className='lazyload'
						data-src='/assets/images/actual_pic_1.jpg'
						alt=''
					/>
				</div>
			</div>
			<div className='section-pl'>
				<ul className='actual-content-list'>
					<li>
						<div className='number'>2021 год</div>
						<p>Новейшая программа 2021 года</p>
					</li>
					<li>
						<div className='number'>150 экспертов</div>
						<p>150+ международных экспертов</p>
					</li>
					<li>
						<div className='number'>ТОП 3</div>
						<p>Входим в топ 3 бзнес-школ РФ по актуальности контента</p>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default RelevantContent
