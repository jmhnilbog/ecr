const render = require("./convertMarkdown.js");

const fs = require('fs');
const path = require('path');
const Stream = require('stream');

const mkdirp = require('mkdirp');
const glob = require('glob');
const ndJsonFe = require('ndjson-fe');

glob('world-data/earf-production/*', (err, dirs) => {
    dirs.forEach(dir => {

        const dbName = path.basename(dir);

        let ndJsonData = ""
        glob(`${dir}/*.json`, (e, filepaths) => {

            filepaths.forEach(filepath => {
                const data = JSON.parse(fs.readFileSync(filepath, 'utf-8'))



                // convert anything that might be markdown

                const content = data?.content
                if (content) {
                    const converted = render(content);
                    if (converted.includes('<div class="ecr')) {
                        data.content = converted;
                    } else {
                        data.content = `<div class="ecr ecr-${dbName}
">\n${converted}\n</div>`;
                    }
                }


                const notes = data?.data?.details?.notes?.value;
                if (notes) {
                    const converted = render(notes);
                    if (converted.includes('<div class="ecr')) {
                        data.data.details.notes.value = converted;
                    } else {
                        data.data.details.notes.value = `<div class="ecr ecr-${dbName}
">\n${converted}\n</div>`;
                    }
                }

                const items = data?.items;
                if (items) {
                    items.forEach(item => {
                        const d = item?.data?.description?.value;
                        const converted = render(d);
                        if (converted.includes('<div class="ecr')) {
                            item.data.description.value = converted;
                        } else {
                            item.data.description.value = `<div class="ecr ecr-items">\n${converted}\n</div>`;
                        }
                    })
                }

                const item = data?.data?.description?.value;
                if (item) {
                    const converted = render(item);
                    if (converted.includes('<div class="ecr')) {
                        data.data.description.value = converted;
                    } else {
                        data.data.description.value = `<div class="ecr ecr-${dbName}
">\n${converted}\n</div>`;
                    }
                }

                const flags = data?.flags || {};
                const gmNotes = flags['gm-notes']?.notes;
                if (gmNotes) {
                    const converted = render(gmNotes);
                    if (converted.includes('<div class="ecr')) {
                        data.flags['gm-notes'].notes = converted;
                    } else {
                        data.flags['gm-notes'].notes = `<div class="ecr ecr-${dbName}
">\n${converted}\n</div>`;
                    }
                }

                const writeDir = `world-data/earf-development/${dir}`;
                mkdirp.sync(writeDir);

                const jsonString = JSON.stringify(data, null, '\t');

                fs.writeFileSync(`${writeDir}/${path.basename(filepath)}`, jsonString)

                ndJsonData += JSON.stringify(data) + "\n"
            })
            fs.writeFileSync(`../foundrydata/Data/worlds/earf-development/data/${dbName}.db`, ndJsonData);

        })

    })
})

// 