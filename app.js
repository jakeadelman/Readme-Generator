const inquirer = require("inquirer")
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "readme.MD");

const render = require("./lib/renderer.js");

const questions = [
    {
        type:"input",
        name:"projectTitle",
        message:"Enter a descriptive project title"
    },
    {
        type:"input",
        name:"description",
        message:"Enter a project description"
    },
    {
        type:"input",
        name:"installationInstructions",
        message:"Enter the installation instructions"
    },
    {
        type:"input",
        name:"usageInformation",
        message:"Enter the usage information"
    },
    {
        type:"input",
        name:"contributionGuidelines",
        message:"Enter the contribution guidelines"
    },
    {
        type:"input",
        name:"testInstructions",
        message:"Enter the test instructions"
    },
    {
        type:"list",
        name:"liscence",
        Choices:["MIT Liscence", "Apache Liscense 2.0","GPL Liscence"]
    },
    {
        type:"input",
        name:"githubUsername",
        message:"Enter your github username"
    },
    {
        type:"input",
        name:"emailAddress",
        message:"Enter your email address"
    }
]

const generateReadme = ()=>{
    inquirer.prompt(questions)
        .then((ans)=>{
            fs.writeFile(outputPath, render(ans),(err)=>{
                if(err){
                    throw err;
                }
                console.log("Success, the file has been generated!")
            })
        })
}
generateReadme();