const http = require('http');
const fs = require('fs');

let homeContent2 = "";
let projectContent2 = "";
let registrationContent2 = "";

const port = require("minimist")(process.argv.slice(2))

fs.readFile('home.html', (err, home) => {
    if (err) {
        throw err;
    }
    homeContent2 = home;
});

fs.readFile('project.html', (err, project) => {
    if (err) {
        throw err;
    }
    projectContent2 = project;
});


fs.readFile('registration.html', (err, registration) => {
    if (err) {
        throw err;
    }
    registrationContent2 = registration;
});

const server = http.createServer((request, response) => {
        let url = request.url;
        response.writeHeader(200, { 'Content-Type': 'text/html' })
        switch (url) {
        case '/project':
            response.write(projectContent2);
            response.end();
            break;
        case '/registration':
            response.write(registrationContent2);
            response.end();
            break;
        default:
            response.write(homeContent2);
            response.end();
            break;

        }
});
server.listen(port.port);