import { server } from '@/config/index'

import OnlineProgram from '@/components/pages/OnlineProgram'

const programsIndustryOnlineProgram = ({ program }) => {
	return <OnlineProgram program={program} />
}

export const getStaticProps = async context => {
	const res = await fetch(
		`${server}/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses`
	)
	const { data } = await res.json()

	const programs = data.filter(
		item =>
			item.url === context.params.url &&
			item.mbaFormat === 'online' &&
			item.mbaTypeOfProgram === 'industry'
	)

	const program = programs[0]

	return {
		props: {
			program,
		},
	}
}

export const getStaticPaths = async context => {
	const res = await fetch(
		`${server}/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses`
	)
	const programs = await res.json()

	const urls = programs.data
		.map(program => {
			if (
				program.mbaFormat === 'online' &&
				program.mbaTypeOfProgram === 'industry'
			) {
				return { id: program._id, url: program.url && program.url }
			}
		})
		.filter(program => program !== undefined)

	const paths = urls.map(item => ({
		params: { url: item.url.toString() },
	}))

	return {
		paths,
		fallback: false,
	}
}

export default programsIndustryOnlineProgram
