// import json-server
const jsonServer = require('json-server');

// create server using create() method
const employeeServer = jsonServer.create()

// create a path/route to db.json file
const router= jsonServer.router('db.json')

// create a middle ware used to convert JSON data to JS object
const middleware= jsonServer.defaults();

// add middleware and router to mediaPlayerServer

employeeServer.use(middleware);
employeeServer.use(router)

const PORT = 4000;

// run the mediaPlayerServer
employeeServer.listen(PORT,()=>{
    console.log(`employeeServer server running on PORT ${PORT}`)
})