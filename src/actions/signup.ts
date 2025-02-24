'use server';

import { user } from '@/utils/backend';
import {signInSchema} from '@/utils/schema';

export default async function signup(formData: FormData) {
	const formValues = {
		'email': formData.get('email')?.toString(),
		'full_name': formData.get('full_name')?.toString(),
		'age': formData.get('age') !== null ? Number(formData.get('age')) : null,
		'mobile_no': formData.get('mobile_no')?.toString(),
		'address': formData.get('address')?.toString(),
		'password': formData.get('password')?.toString(),
		'confirm_password': formData.get('confirm_password')?.toString(),
		'course_id': formData.get('course_id')?.toString(),
	};

	// Checking for form validation error
	const parsedForm = signInSchema.safeParse(formValues);
	
	if(!parsedForm.success) {
		console.log(parsedForm.error);
	} else {
		const result = await user.auth.signup(formData);	
		console.log(result);
	}

}