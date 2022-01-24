// We don't have types for DCC system yet, but this is true enough for now.

type DCCWeapon = {
    name: string;
    type: 'weapon';
    img: string;
    data: {
        description: {
            value: string;
            chat: string;
            unidentified: string;
            summary: string;
        };
        source: string;
        quantity: number;
        weight: number;
        equipped: boolean;
        identified: boolean;
        value: {
            pp: number;
            ep: number;
            gp: number;
            sp: number;
            cp: number;
        };
        config: {
            inheritActionDie: boolean;
            inheritCritRange: boolean;
        };
        actionDie: string;
        toHit: string;
        damage: string;
        range: string;
        twoHanded: boolean;
        melee: boolean;
        shortRangeStrength: number;
        subdual: number;
        backstab: boolean;
        backstabDamage: null | string;
        doubleIfMounted: number;
        critRange: number;
    };
    _id: string;
    effects: any[];
    folder: null | 'string';
    sort: number;
    permission: {
        default: number;
    };
    flags: {};
};

type DCCItem = DCCWeapon;

type DCCNPCActor = {
    _id: string;
    name: string;
    type: 'NPC';
    img: string;
    data: DCCNPCActorData;
    token: {
        name: string;
        img: string;
        displayName: number | string;
        actorLink: boolean;
        width: number;
        height: number;
        scale: number;
        mirrorX: boolean;
        mirrorY: boolean;
        lockRotation: boolean;
        rotation: number;
        alpha: number;
        vision: boolean;
        dimSight: number;
        brightSight: number;
        sightAngle: number;
        light: {
            alpha: number;
            angle: number;
            bright: number;
            color: null | string;
            coloration: number;
            dim: number;
            gradual: boolean;
            luminosity: number;
            saturation: number;
            contrast: number;
            shadows: number;
            animation: {
                speed: number;
                intensity: number;
                reverse: boolean;
            };
            darkness: {
                min: number;
                max: number;
            };
        };
        disposition: -1 | 0 | 1;
        displayBars: number;
        bar1: {
            attribute: string | null;
        };
        bar2: {
            attribute: null;
        };
        flags: {};
        randomImg: boolean;
    };
    items: DCCItem[];
    effects: any[];
    folder?: string;
    sort: number;
    permission: {
        default: number;
    };
    flags: any;
};

type DCCAbilityName = keyof DCCNPCActorData['abilities'];
type DCCAbility = {
    label: string;
    value: number;
    max: number;
};
type DCCNPCActorData = {
    abilities: {
        str: DCCAbility;
        agl: DCCAbility;
        sta: DCCAbility;
        per: DCCAbility;
        int: DCCAbility;
        lck: DCCAbility;
    };
    attributes: {
        ac: {
            value: number;
            checkPenalty: number;
            speedPenalty: number;
        };
        actionDice: {
            value: string;
            options: string[];
        };
        critical: {
            die: string;
            table: string;
        };
        fumble: {
            die: string;
        };
        hitDice: {
            value: string;
        };
        hp: {
            max: number | null;
            value: number | null;
            min: number | null;
            temp: number | null;
            tempmax: number | null;
        };
        init: {
            die: string;
            value: number;
        };
        speed: {
            value: string;
            base: number;
            special: string;
            other: string;
        };
        special: {
            value: string;
        };
    };
    details: {
        level: {
            value: number;
        };
        alignment: string;
        attackBonus: string;
        languages: string;
        occupation: string;
        title: string;
        notes: {
            value: string;
        };
    };
    saves: {
        frt: {
            label: string;
            value: number;
        };
        ref: {
            label: string;
            value: number;
        };
        wil: {
            label: string;
            value: number;
        };
    };
    currency: {
        pp: string;
        ep: string;
        gp: string;
        sp: string;
        cp: string;
    };
    config: {
        attackBonusMode: string;
        actionDice: string;
        capLevel: false;
        maxLevel: number;
        rollAttackBonus: false;
        computeAC: false;
        baseACAbility: DCCAbilityName;
        computeSpeed: false;
        computeCheckPenalty: false;
        sortInventory: true;
        removeEmptyItems: true;
        showSpells: false;
        showSkills: false;
        showMaxAbilities: true;
        showBackstab: false;
    };
    class: {
        spellCheck: number;
        spellCheckAbility: DCCAbilityName;
    };
};

interface DiceChain {
    getPrimaryDie: (formula: string) => string;
    getPrimaryDieFaces: (formula: string) => number;
    rankDiceExpression: (formula: string) => number;
    countDice: (formula: string) => number;
    bumpDie: (formula: string, step: string) => string;
}

interface Game {
    dcc: {
        DiceChain: DiceChain;
    };
}
