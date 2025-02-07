import Button from "@/components/button/view"
export default function CoursesPage() {
	return (
		<>
			<h1>All the courses</h1>
			<Button isLink={true} href="/app/courses/create">Create a course</Button>
		</>
	)
}