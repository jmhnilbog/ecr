declare module 'sass-glob-importer';

// We don't have types for DCC system yet, but this is true enough for now.
type DCCNPCActorData = {
    attributes: {
        hp: {
            max: number | null;
            value: number | null;
        };
        hitDice: {
            value: string;
        };
    };
};

interface DiceChain {
    getPrimaryDie: (formula: string) => string;
    getPrimaryDieFaces: (formula: string) => number;
    rankDiceExpression: (formula: string) => number;
    countDice: (formula: string) => number;
    bumpDie: (formula: string, step: string) => string;
}

interface SimpleCalendarUnit {
    second?: number;
    minute?: number;
    hour?: number;
    day?: number;
    week?: number;
    month?: number;
    year?: number;
}

interface Game {
    dcc: {
        DiceChain: DiceChain;
    };
    Gametime: {
        doEvery: (t: SimpleCalendarUnit, cb: () => void) => NodeJS.Timeout;
    };
}
