export default async function createUser(formData: FormData) {
	const request = await fetch(`${process.env.BACKEND_URL}/api/v1/users`, {
			method: 'POST',
			body: formData,	
	});

	if(request.status === 200) {
		try {
			const result = await request.json();	
			return result;
		} catch(e) {
			console.log('Error !', e);
		}
	} else if(request.status === 422) {
		const result = await request.json();
		return result;
	} else if(request.status === 500) {
		const result = await request.json();
		return result;
	} else {
		return {
			error: 'Something went wrong'
		}
	}
}