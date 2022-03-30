SELECT students_activated_courses.student_mail, courses.course, courses.course_category, courses.price
FROM courses
INNER JOIN students_activated_courses ON courses.course = students_activated_courses.course;