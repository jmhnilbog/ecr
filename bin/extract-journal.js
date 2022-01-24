

exports.process = async (document) => {
    return {
        name: document.name,
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