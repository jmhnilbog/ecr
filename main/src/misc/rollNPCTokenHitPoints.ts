import { logger } from '../logger';

export const rollNPCTokenHitPoints = async (tokenDoc: TokenDocument) => {
    logger('rollNPCTokenHitPoints', tokenDoc);
    const actor = tokenDoc.actor;

    if (!actor) {
        logger('Ignoring actor-less token.');
        return;
    }

    if (actor.type !== 'NPC') {
        logger(`Ignoring actor type "${actor.type}" token.`);
        return;
    }

    const data = actor.data.data as DCCNPCActorData;

    const currentHp = data.attributes.hp;

    const shouldRoll = tokenDoc.isLinked
        ? currentHp.max !== null && currentHp.max !== 0
        : currentHp.max === null ||
          currentHp.max === 0 ||
          currentHp.value === currentHp.max;

    if (!shouldRoll) {
        logger(
            `Ignoring token. (isLinked: ${tokenDoc.isLinked}, hp: ${currentHp}).`
        );
        return;
    }

    const hitDice = data.attributes.hitDice.value;
    const maxHPRoll = new Roll(hitDice);
    const maxHPRollResult = await maxHPRoll.evaluate({
        async: true,
    });
    let maxHP = maxHPRollResult.total || 0;

    if (maxHP < 1) {
        logger(
            `Warning, maxHP roll was less than 0 (${maxHPRollResult.total}); using 1.`
        );
        maxHP = 1;
    }

    data.attributes.hp.value = maxHP;
    data.attributes.hp.max = maxHP;
    tokenDoc.update();
};

export default rollNPCTokenHitPoints;
