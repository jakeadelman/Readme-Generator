const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");



const render= (ans)=>{
    let template = fs.readFileSync(path.resolve(templatesDir,"readme.md"),"utf8")
    template = replacePlaceholders(template,"title", ans.projectTitle)
    template = replacePlaceholders(template,"description", ans.description)
    template = replacePlaceholders(template,"installationInstructions", ans.installationInstructions)
    template = replacePlaceholders(template,"usageInformation", ans.usageInformation)
    template = replacePlaceholders(template,"contributionGuidelines", ans.contributionGuidelines)
    template = replacePlaceholders(template,"testInstructions", ans.testInstructions)
    return template;
}

const replacePlaceholders = (template, placeholder, value) => {

    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };


module.exports = render;