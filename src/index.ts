console.log('LOADING ECR INDEX');

import { TemplatePreloader } from './module/helper/TemplatePreloader';
import { rollNPCTokenHitPoints } from './hookHandlers';
import { logger } from './logger';

import './MEME';
import './styles/ecr-markdown.scss';

Hooks.once('init', async () => {
    logger('Init hook called.');
});

Hooks.once('ready', async () => {
    logger('Ready hook called.');

    if (!(game instanceof Game)) {
        return;
    }
    // tell moulinette where the assets may be found

    // @ts-ignore
    if (game.moulinette) {
        const sources = [
            {
                type: 'images',
                publisher: 'Various',
                pack: 'Various',
                source: 'data',
                path: 'modules/ecr/images/unknown',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: '0-level',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/0-level',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'A Trip to Dolm',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/a-trip-to-dolm',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Demonic Runes',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/demonic-runes',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Elzemon and the Blood-Drinking Box',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/elzemon-and-the-blood-drinking-box',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Heraldry',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/heraldry',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Mama Hungry',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/mama-hungry',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Party Poopers',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/party-poopers',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Sailors on the Starless Sea',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/sailors-on-the-starless-sea',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Utility',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/utility',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Where the White Things Are',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/where-the-white-things-are',
            },
        ];
        // @ts-ignore
        game.moulinette.sources.push(...sources);

        logger('Sources updated');
    }
});

Hooks.on('createToken', rollNPCTokenHitPoints);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();

        if (module.hot.status() === 'apply') {
            for (const template in _templateCache) {
                if (
                    Object.prototype.hasOwnProperty.call(
                        _templateCache,
                        template
                    )
                ) {
                    delete _templateCache[template];
                }
            }

            TemplatePreloader.preloadHandlebarsTemplates().then(() => {
                for (const application in ui.windows) {
                    if (
                        Object.prototype.hasOwnProperty.call(
                            ui.windows,
                            application
                        )
                    ) {
                        ui.windows[application].render(true);
                    }
                }
            });
        }
    }
}
