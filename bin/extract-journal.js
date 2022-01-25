const render = require("./convertMarkdown.js");

const fs = require('fs');

exports.process = async (document) => {

    const processed = {
        name: document.name,
        content: document.content,
        rendered: render(document.content)
    }

    fs.writeFileSync(`./documents/journal-entries/markdown/${document.name}.md`, `<div class="ecr ecr-wrapper ecr-markeddown">\n${processed.content}\n</div>`);
    fs.writeFileSync(`./documents/journal-entries/html/${document.name}.html`, `<html><head><link href="../../../dist/styles/main.css" rel="stylesheet" type="text/css" media="all"></head><body>\n${processed.rendered}\n</body></html>`);
    fs.writeFileSync(`./documents/journal-entries/html-fragments/${document.name}.html`, `{processed.rendered}`);

    return {
        name: document.name,
        //content: render(document.content)
        content: document.content
    }
    // // filter
    // if (item.content === 'my_require') {
    //     return item;
    // } else if (item instanceof Array) {
    //     // Return multiple items
    //     item.forEach(it => {
    //         if (it.target === 'my_require') {
    //             this.push(it);
    //         }
    //     });
    // }
}

// Optional
exports.finalize = async function (items) {
    // sort
    return this.sort(items, 'age')
}

exports.before = async function (cliArg1, cliArg2) {
    // const anotherLogs = await this.readJSONLinesFile('./another.log')
    // const userMap = this.keyBy(anotherLogs, 'user.name')
    // await startServer()
}

exports.after = async function (items) {
    // await shutdownServer()
}