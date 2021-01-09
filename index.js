// * Title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            message: "Project Title:",
            name: "title"
        },
        {
            type: "input",
            message: "Project Description:",
            name: "description"
        },
        {
            type: "input",
            message: "Project Installation Process:",
            name: "installation"
        },
    ]).then((response) => {
        let renderedElements = renderElementsCompiler(response);

        fs.writeFile("readme.md", renderedElements, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("readme.md generated");
            }
        });
        
    }).catch((error) => {
        console.log(error);
    });


// Render Elements Compiler
const renderElementsCompiler = (response) => {
    let renderElements = `# ${response.title}

<br>

## Description: <br>

        `;

    return renderElements;
}