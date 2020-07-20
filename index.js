const inquirer = require("inquirer");
const fs = require("fs");

console.log("\nWelcome to aBuiDev's CLI README Generator v0.0.1 2020\n");

inquirer
    .prompt([
        {
            type: "checkbox",
            message: "\nLICENSE:\nChoose from one of the licenses below:",
            choices: [
                "Apache 2.0 License",
                "Mozilla Public License 2.0",
                "BSD 3-Clause License",
                "GNU GPL v3",
                "The MIT License"
            ],
            name: "licenseInput"
        },
        {
            type: "input",
            message: "TITLE:\nWhat is the title of your project?",
            name: "titleInput",
        },
        {
            type: "input",
            message: "\nDESCRIPTION:\nOutline a succinct description of your project.",
            name: "descriptionInput"
        },
        {
            type: "input",
            message: "\nINSTALLATION:\nOutline an installation procedure.",
            name: "installationInput"
        },
        {
            type: "input",
            message: "\nCONTRIBUTORS:\nName other contributors.",
            name: "contributorInput"
        },
        {
            type: "checkbox",
            message: "\nUSAGE:\nCLI to initialise your program",
            choices: [
                {
                    name: "node index.js",
                    checked: true
                }
            ],
            name: "usageInput"
        },
        {
            type: "checkbox",
            message: "\nTESTS:\nSelect CLI to handle your program's tests.",
            choices: [
                "npm run test",
                "None"
            ],
            name: "testInput"
        },
        {
            type: "input",
            message: "\nGitHub:\nInput your GitHub username.",
            name: "githubInput"
        },
        {
            type: "input",
            message: "\nEMAIL:\nType in your email here.",
            name: "emailInput"
        },

    ])
    .then(function (data) {

        console.log(data);
        const readmeName = data.titleInput.toLowerCase() + ".md";
        const apache = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        const mozilla = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        const bds = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        const gnu = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

        if (JSON.stringify(data.licenseInput) === '["Apache 2.0 License"]') {
            fs.appendFile(readmeName, "\n\n" + apache, function (error) {
                if (error) {
                    return console.log(error);
                }
            });
        } else if (JSON.stringify(data.licenseInput) === '["Mozilla Public License 2.0"]') {
            fs.appendFile(readmeName, "\n\n" + mozilla, function (error) {
                if (error) {
                    return console.log(error);
                }
            });
        } else if (JSON.stringify(data.licenseInput) === '["BSD 3-Clause License"]') {
            fs.appendFile(readmeName, "\n\n" + bds, function (error) {
                if (error) {
                    return console.log(error);
                }
            });
        } else if (JSON.stringify(data.licenseInput) === '["GNU GPL v3"]') {
            fs.appendFile(readmeName, "\n\n" + gnu, function (error) {
                if (error) {
                    return console.log(error);
                }
            });
        } else if (JSON.stringify(data.licenseInput) === '["The MIT License"]') {
            fs.appendFile(readmeName, "\n\n" + mit, function (error) {
                if (error) {
                    return console.log(error);
                }
            });
        }

        fs.appendFile(readmeName, "\n\n" + "## Title:" + "\n" + JSON.stringify(data.titleInput), function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Title successfully added to " + readmeName);
        });

        fs.appendFile(readmeName, "\n\n" + "## Description:" + "\n\t" + JSON.stringify(data.descriptionInput), function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Description successfully added to " + readmeName);
        });

        fs.appendFile(readmeName, "\n\n" + "## Table of Contents:" + "\n\t" + "* Installation" + "\n\t" + "* Usage" + "\n\t" + "* License" + "\n\t" + "* Contributing" + "\n\t" + "* Tests" + "\n\t" + "* Questions", function (error) {
            if (error) {
                return console.log(error);
            }
        });

        fs.appendFile(readmeName, "\n\n" + "## Installation:" + "\n\t" + JSON.stringify(data.installationInput), function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Installation Information successfully added to " + readmeName);
        });

        fs.appendFile(readmeName, "\n\n" + "## Usage:" + "\n\t" + JSON.stringify(data.usageInput), function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Usage Information successfully added to " + readmeName);
        });

        fs.appendFile(readmeName, "\n\n" + "## Contributors:" + "\n\t" + JSON.stringify(data.contributorInput), function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Contributor Information successfully added to " + readmeName);
        });

        fs.appendFile(readmeName, "\n\n" + "## Tests:" + "\n\t" + JSON.stringify(data.testInput), function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Test Information successfully added to " + readmeName);
        });

        fs.appendFile(readmeName, "\n\n" + "## Questions:" + "\n\t" + "If you require further information on this app, you can view my GitHub profile or email me." + "\n\n\t" + "GitHub Unsername: " + JSON.stringify(data.githubInput) + "\n\n\t" + "Email Contact: " + JSON.stringify(data.emailInput), function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Contact/Questions Information successfully added to " + readmeName);
        });

        fs.appendFile(readmeName, "\n\n" + "## License:" + "\n\t" + JSON.stringify(data.licenseInput), function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("License Information successfully added to " + readmeName);
        });

    })

    .catch(function (error) {
        if (error) {
            return console.log(error);
        }
    });

