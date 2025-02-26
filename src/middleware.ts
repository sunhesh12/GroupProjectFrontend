import {auth} from "@/utils/auth";

export default auth((req) => {
	if(!req.auth && req.nextUrl.pathname.split('/')[1] === 'app') {
		console.log('User is not authenticated');
		const newUrl = new URL("/auth/signin", req.nextUrl.origin);
		return Response.redirect(newUrl);
	}
});