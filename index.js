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
        {
            type: "input",
            message: "Project Contributors:",
            name: "contributors"
        },
        {
            type: "input",
            message: "Project Tests:",
            name: "tests"
        },
        {
            type: "list",
            message: "Select License:",
            choices: [
                "Apache 2.0 License",
                "Boost Software License 1.0",
                "BSD 3-Clause License",
                "Attribution 4.0 International",
                "Eclipse Public License 1.0",
                "GNU GPL v3",
                "IBM Public License Version 1.0",
                "ISC License (ISC)",
                "The MIT License",
                "Mozilla Public License 2.0",
                "Attribution License (BY)",
                "The Perl License",
                "SIL Open Font License 1.1",
                "The Unlicense",
                "The Do What the Fuck You Want to Public License",
            ],
            name: "license"
        },
    ]).then((response) => {

        let license = licenseCompiler(response);

        let renderedElements = renderElementsCompiler(response, license);

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

// License Compiler
const licenseCompiler = (response) => {
    let licenseSelect;
    switch(response.licence) {
        case "Apache 2.0 License":
            licenseSelect = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "Boost Software License 1.0":
            licenseSelect = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            break;
        case "BSD 3-Clause License":
            licenseSelect = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
        case "Attribution 4.0 International":
            licenseSelect = "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
            break;
        case "Eclipse Public License 1.0":
            licenseSelect = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
            break;
        case "GNU GPL v3":
            licenseSelect = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case "IBM Public License Version 1.0":
            licenseSelect = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case "ISC License (ISC)":
            licenseSelect = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
            break;
        case "The MIT License":
            licenseSelect = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "Mozilla Public License 2.0":
            licenseSelect = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;
        case "Attribution License (BY)":
            licenseSelect = "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
            break;
        case "The Perl License":
            licenseSelect = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
            break;
        case "SIL Open Font License 1.1":
            licenseSelect = "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
            break;
        case "The Unlicense":
            licenseSelect = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
            break;
        case "The Do What the Fuck You Want to Public License":
            licenseSelect = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
            break;
        default:
            licenseSelect = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    return licenseSelect;
}


// Render Elements Compiler
const renderElementsCompiler = (response, license) => {
    let renderElements = `
${license}

# ${response.title}

<br>

* **[Description](Description:)**
* **[Installation](Installation:)**
* **[Usage](Usage)**
* **[Contributing](Contributing)**
* **[Tests](Tests)**
* **[Questions](Questions)**

<br>
<br>
<br>

## Description:
${response.description}

#

<br>
<br>
<br>

## Installation:
${response.installation}

#

<br>
<br>
<br>

## Usage
${response.usage}

#

<br>
<br>
<br>

## Contributing
${response.contributing}

#

<br>
<br>
<br>

## Tests
${response.tests}

#

<br>
<br>
<br>

## Questions
If you have any questions about this project, please contact me via LinkedIn [here](https://www.linkedin.com/in/andrew-bui-9929202a/). You can access my portfolio [here](https://abuidev.netlify.app/).

#
        `;

    return renderElements;
}