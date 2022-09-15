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

    if(ans.liscence == "MIT Liscence"){
        template = replacePlaceholders(template, "liscence", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)")
        template = replacePlaceholders(template, "liscenceInformation", `<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
        <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
        <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>`)
    }

    return template;
}

const replacePlaceholders = (template, placeholder, value) => {

    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };


module.exports = render;