//First fetch
SELECT Students.FirstName, Students.LastName
FROM Students
INNER JOIN Exams
ON Students.StudentId = Exams.StudentId
WHERE Exams.Result < 3
GROUP BY Students.StudentId HAVING COUNT(Students.StudentId) > 2 

//Second fetch
SELECT Group
FROM (SELECT Students.Group
FROM Students
INNER JOIN Exams
ON Students.StudentId = Exams.StudentId
WHERE Exams.Result < 3
GROUP BY Students.StudentId HAVING COUNT(Students.StudentId) > 2)
GROUP BY Group HAVING COUNT(Group) > 10