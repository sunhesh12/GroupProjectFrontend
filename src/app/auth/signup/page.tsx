import signup from '@/actions/signup';
export default function SignUpPage() {
	return (
		<>
			<form action={signup}>
				<input type="email" name="email" id="email" placeholder="Email" />
				<input type="text" name="full_name" placeholder="Full name" />	
				<input type="password" name="password" id="password" />
				<input type="number" name="age" min="16" max="100" placeholder="Age" />
				<input type="tel" name="mobile_no" placeholder="Mobile number" />
				<input type="text" name="address" placeholder="Address" />
				<select name="course_id" defaultValue={"se"}>
					<option value="1">Information systems</option>
					<option value="2">Software Engineering</option>
					<option value="3">Computer Science</option>
				</select>
				<button type="submit">Submit</button>
			</form>
		</>
	)
}