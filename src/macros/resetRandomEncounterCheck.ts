(() => {
    if (!(game instanceof Game)) {
        return;
    }
    let interval: NodeJS.Timeout | number | null = null;
    if (interval !== null) {
        console.log('Clearing previously set random encounter checks.');
        clearInterval(interval);
        interval = null;
    }

    // TODO: get the current random encounter check interval from a flag
    const randomEncounterTimeInterval = { minute: 60 };

    console.log(
        'Setting random encounter checks every...',
        randomEncounterTimeInterval
    );

    interval = game.Gametime.doEvery(randomEncounterTimeInterval, async () => {
        console.log('Time for a random encounter check.');
        if (!(game instanceof Game)) {
            return;
        }
        // TODO: get the current die formula from a flag
        const dieFormula = '1d6';
        // TODO: get the current table for checking against from a flag

        const tableName = `${game.scenes?.current?.name}: Random Encounter Check`;
        const table = game.tables?.getName(tableName);
        if (!table) {
            console.log(
                "Can't roll random encounter; no table found named",
                tableName
            );
            return;
        }

        // @ts-ignore
        const result = await table.draw({
            roll: new Roll(dieFormula),
        });

        console.log('Check result:', result);
    });
})();
