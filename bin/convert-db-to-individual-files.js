const fs = require('fs');
const path = require('path');
const Stream = require('stream');

const mkdirp = require('mkdirp');
const glob = require('glob');
const ndJsonFe = require('ndjson-fe');

console.log(process.argv);

const pathToWorld = process.argv[2];
const worldName = path.basename(pathToWorld);

glob(`${pathToWorld}/data/*.db`, (err, paths) => {
    paths.forEach(p => {
        const dbName = path.basename(p, ".db");
        const dir = `world-data/${worldName}/${dbName}`;
        mkdirp.sync(dir);

        const feed = ndJsonFe();
        feed.on('next', (obj) => {
            const id = obj._id || obj._id;
            if (!id) {
                console.log("No ID found?");
                return;
            }
            fs.writeFileSync(`${dir}/${id}.json`, JSON.stringify(obj, null, "\t"))
        })
        console.log(p)

        const reader = fs.createReadStream(p);
        reader.pipe(feed);
        // fs.createReadStream(p)
        //     .pipe(writer)
        // .on('data', (obj) => {
        //     const id = obj._id || obj._id;
        //     if (!id) {
        //         console.log("No ID found?");
        //         return;
        //     }
        //     fs.writeFileSync(`${dir}/${id}.json`, JSON.stringify(obj, null, "\t"))
        // })
    })
})
