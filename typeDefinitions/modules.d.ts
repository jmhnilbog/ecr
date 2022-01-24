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
    Gametime: {
        doEvery: (t: SimpleCalendarUnit, cb: () => void) => NodeJS.Timeout;
    };
}
