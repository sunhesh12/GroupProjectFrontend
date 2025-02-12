// To generate the necessary full route
function toRoute(segment: string) {
	const prefix = `${process.env.BACKEND_URL}/api/v1`;
	return `${prefix}/${segment}`;
}



const routes = {
	users: {
		create: toRoute("users"),
	}
}

export default routes;