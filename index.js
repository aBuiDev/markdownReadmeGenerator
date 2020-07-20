const inquirer = require("inquirer");
const fs = require("fs");

console.log("\nWelcome to aBuiDev's CLI README Generator v0.0.1 2020\n");

inquirer
    .prompt([
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
            message: "\nINSTALLATION:\nOutline an installation procedure.\nOtherwise, leave empty if none and press ENTER",
            name: "installationInput"
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
            message: "\nCONTRIBUTORS:\nName other contributors.\nOtherwise, leave empty if none and press ENTER",
            name: "contributorInput"
        },
        {
            type: "checkbox",
            message: "\nTESTS:\nSelect CLI to handle your program's tests.",
            choices: [
                {
                    name: "npm run test",
                    checked: true
                },
                {
                    name: "None",
                },
            ],
            name: "testInput"
        },
        {
            type: "input",
            message: "\nQUESTIONS:\nOutline an installation procedure.\nOtherwise, leave empty if none and press ENTER",
            name: "installationInput"
        },

    ])
    .then(function (data) {

        console.log(data);
        const readmeName = data.titleInput.toLowerCase() + ".md";
        fs.writeFile(readmeName, "Title:" + "\n" + JSON.stringify(data.titleInput), function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Title successfully added to " + readmeName);

            fs.appendFile(readmeName, "\n\n" + "Description:" + "\n" + JSON.stringify(data.descriptionInput), function (error) {
                if (error) {
                    return console.log(error);
                }
                console.log("Description successfully added to " + readmeName);
            });

            fs.appendFile(readmeName, "\n\n" + "Table of Contents:" + "\n" + "1. Installation" + "\n" + "2. Usage" + "\n" + "3. License" + "\n" + "4. Contributing" + "\n" + "5. Tests" + "\n" + "6. Questions", function (error) {
                if (error) {
                    return console.log(error);
                }
            });

            fs.appendFile(readmeName, "\n\n" + "Installation:" + "\n" + JSON.stringify(data.installationInput), function (error) {
                if (error) {
                    return console.log(error);
                }
                console.log("Installation Information successfully added to " + readmeName);
            });

            fs.appendFile(readmeName, "\n\n" + "Usage:" + "\n" + JSON.stringify(data.usageInput), function (error) {
                if (error) {
                    return console.log(error);
                }
                console.log("Usage Information successfully added to " + readmeName);
            });

            fs.appendFile(readmeName, "\n\n" + "License:" + "\n" + JSON.stringify(data.licenseInput), function (error) {

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

                if (error) {
                    return console.log(error);
                }
                console.log("License Information successfully added to " + readmeName);
                console.log(JSON.stringify(data.licenseInput));
            });

            fs.appendFile(readmeName, "\n\n" + "Usage:" + "\n" + JSON.stringify(data.contributorInput), function (error) {
                if (error) {
                    return console.log(error);
                }
                console.log("Contributor Information successfully added to " + readmeName);
            });

            fs.appendFile(readmeName, "\n\n" + "Usage:" + "\n" + JSON.stringify(data.contributorInput), function (error) {
                if (error) {
                    return console.log(error);
                }
                console.log("Contributor Information successfully added to " + readmeName);
            });

        });



    })
    .catch(function (error) {
        if (error) {
            return console.log(error);
        }
    });

