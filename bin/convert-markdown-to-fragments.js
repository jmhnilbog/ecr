const render = require("./convertMarkdown.js");

const fs = require('fs');

const glob = require('glob');

glob('documents/journal-entries/markdown/**/*.md', (err, paths) => {
    paths.forEach(path => {
        const md = fs.readFileSync(path, 'utf-8');

        const changedPath = path.replace('/markdown/', '/html-fragments/').replace('.md', '.html');

        fs.writeFileSync(changedPath, render(md));
    })
})