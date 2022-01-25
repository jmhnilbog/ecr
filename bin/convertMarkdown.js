const MarkdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItContainer = require('markdown-it-container');
const markdownItDefList = require('markdown-it-deflist');
const md = MarkdownIt({
    html: true,
    linkify: true,
});
// md.renderer.rules['heading_open'] = function (tokens, idx, _options, _env) {
//     const token = tokens[idx], nextToken = tokens[idx + 1], link = nextToken.content; //.replace(/\s/g, '_');
//     return `<${token.tag} name='${token.markup}${link}'>`;
// };
const containerOpts = {
    validate: () => true,
    render: (tokens, idx, options, _env, self) => {
        const m = tokens[idx].info.trim().match(/^(.*)$/);
        if (tokens[idx].nesting === 1 && m && m[1]) {
            tokens[idx].attrPush(['class', m[1]]);
        }
        return self.renderToken(tokens, idx, options);
    },
};
md.use(markdownItContainer, 'any', containerOpts);
md.use(markdownItDefList);
md.use(markdownItAttrs);
// module.exports = (...args) => `\n<div class="ecr ecr-wrapper ecr-markeddown">\n${md.render(...args)}\n</div>`;
module.exports = (...args) => md.render(...args);