// TODO Refactor requests into seperate files.
import Express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = Express();
const port = 3001;

app.use(cors());

// TODO should require authorization.
app.get("/courses", (req, res) => {
    const rawdata = fs.readFileSync('./data/mock/courses.json');
    const courses = JSON.parse(rawdata);
    res.send(courses);
});

// Requires a course_id as a query parameter.
app.get("/cohorts", (req, res) => {
    const rawdata = fs.readFileSync('./data/mock/cohorts.json');
    const allCohorts = JSON.parse(rawdata);
    const filteredCohorts = allCohorts.filter(cohort => `${cohort.course_id}` === req.query.course_id);
    res.send(filteredCohorts);
});

// Requires a cohort_id as a query parameter.
app.get("/units", (req, res) => {
    const rawdata = fs.readFileSync('./data/mock/units.json');
    const allUnits = JSON.parse(rawdata);
    const filteredUnits = allUnits.filter(unit => `${unit.cohort_id}` === req.query.cohort_id);
    res.send(filteredUnits);
});

// Requires a unit_id as a query parameter.
app.get("/students", (req, res) => {
    const studentData = fs.readFileSync('./data/mock/students.json');
    const unitData = fs.readFileSync('./data/mock/units.json');
    const allStudents = JSON.parse(studentData);
    const allUnits = JSON.parse(unitData);
    const userSelectedUnit = allUnits.reduce((prev, curr) => {
        if (curr.id.toString() === req.unit_id) {
            return unit;
        };

        return curr;
    }, {});
    const listOfStudentIDsEnrolledInUnit = userSelectedUnit.enrolled_students || [];
    const filteredStudents = allStudents.filter(student => listOfStudentIDsEnrolledInUnit.includes(student.id));

    res.send(filteredStudents);
});

app.listen(port, () => console.log(`Listening @ http://localhost:${port}`));