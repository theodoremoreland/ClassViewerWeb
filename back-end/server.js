// Express
import Express from 'express';
import fs from 'fs';

const app = Express();
const port = 3001;

app.get("/courses", (req, res) => {
    const rawdata = fs.readFileSync('./data/mock/courses.json');
    const courses = JSON.parse(rawdata);
    res.send(courses);
});

app.listen(port, () => console.log(`Listening @ http://localhost:${port}`));