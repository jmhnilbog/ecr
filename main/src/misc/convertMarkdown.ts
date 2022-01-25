import MarkdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItContainer from 'markdown-it-container';
import markdownItDefList from 'markdown-it-deflist';

const md = MarkdownIt({
    html: true,
    linkify: true,
});
export const markdownIt = md;

md.renderer.rules['heading_open'] = function (tokens, idx, _options, _env) {
    const token = tokens[idx],
        nextToken = tokens[idx + 1],
        link = nextToken.content; //.replace(/\s/g, '_');
    return `<${token.tag} name='${token.markup}${link}'>`;
};
type ContainerOpts = Parameters<typeof markdownItContainer>[2];

const containerOpts: ContainerOpts = {
    validate: () => true,
    render: (tokens, idx, options, _env, self) => {
        const m = tokens[idx].info.trim().match(/^(.*)$/);
        if (tokens[idx].nesting === 1 && m && m[1]) {
            tokens[idx].attrPush(['class', m[1]]);
        }
        return self.renderToken(tokens, idx, options);
    },
};

markdownIt.use(markdownItContainer, 'any', containerOpts);
markdownIt.use(markdownItDefList);
markdownIt.use(markdownItAttrs);

export default markdownIt.render;
