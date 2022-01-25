// import type lightSources from '../main/src/vision/lightSources';
// import type visionTypes from '../main/src/vision/visionTypes';

interface Game {
    ECR: {
        rollNPCTokenHitPoints: (tokenDoc: TokenDocument) => {};
        lightSources: any;
        visionTypes: any;
    };
}
