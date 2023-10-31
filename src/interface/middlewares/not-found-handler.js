import { notFound } from '@hapi/boom'

export default (request, response) => {
	const {
		output: { payload },
	} = notFound()

	response.status(404).json({
		success: false,
		message: payload.message,
	})
}
