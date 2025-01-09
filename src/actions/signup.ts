'use server';

import createUser from '@/utils/create-user';
import {z} from 'zod';

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

	const formSchema = z.object({
		'email': z.string().email().nonempty(),
		'full_name': z.string().nonempty(),
		'age': z.number().int().min(16).max(100).nonnegative(),
		'mobile_no': z.string().nonempty(),
		'address': z.string().nonempty(),
		'course_id': z.string().nonempty(),
		'password': z.string().nonempty(),
		'confirm_password': z.string().nonempty(),
	}).refine(data => data.password === data.confirm_password, {
		message: 'Passwords do not match',
		path: ['confirm_password'],
	});

	// Checking for form validation error
	const parsedForm = formSchema.safeParse(formValues);

	if(!parsedForm.success) {
		console.log(parsedForm.error);
	} else {
		formData.set('status', '1');
		const result = await createUser(formData);	
		console.log(result);
	}

}