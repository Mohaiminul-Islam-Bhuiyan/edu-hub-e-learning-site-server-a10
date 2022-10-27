const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 5000;

const allCourses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('courses api is running')
})

app.get('/courses', (req, res)=> {
    res.send(allCourses)
})

app.get('/courses/:id', (req, res)=>{
    const id = req.params.id 
    const selectedCourse = allCourses.find(n => n.id == id)
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('courses api is running on ', port)
})