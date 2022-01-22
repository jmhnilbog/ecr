declare module 'sass-glob-importer';

interface DiceChain {
    getPrimaryDie: (formula) => string;
    getPrimaryDieFaces: (formula) => number;
    rankDiceExpression: (formula) => number;
    countDice: (formula) => number;
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
