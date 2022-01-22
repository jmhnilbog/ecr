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
