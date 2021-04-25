import { server } from '@/config/index'

import BlendedProgram from '@/components/pages/BlendedProgram'

const programsIndustryBlendedProgram = ({ program }) => {
	return <BlendedProgram program={program} />
}

export const getStaticProps = async context => {
	const res = await fetch(
		`${server}/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses`
	)
	const { data } = await res.json()

	const programs = data.filter(
		item =>
			item.url === context.params.url &&
			item.mbaFormat === 'blended' &&
			item.mbaTypeOfProgram === 'industry'
	)

	const program = programs[0]

	return {
		props: {
			program,
		},
	}
}

export const getStaticPaths = async () => {
	const res = await fetch(
		`${server}/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses`
	)
	const programs = await res.json()

	const urls = programs.data
		.map(program => {
			if (
				program.mbaFormat === 'blended' &&
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
		fallback: true,
	}
}

export default programsIndustryBlendedProgram
