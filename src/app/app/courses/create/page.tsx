import InputField from "@/components/input/view";

export default function CourseCreatePage() {
	return (
		<>
			<header>
				<h1>Create a course</h1>
				<p>Create a new course for the faculty</p>
			</header>
			<form>
				<InputField type="text" name="name" label="Course Name" />
			</form>
		</>
	)
}