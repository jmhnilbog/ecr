// To parse this data:
//
//   import { Convert, AEHrHASDqzYUdnHF, IbjwAhu054XPAFcx } from "./file";
//
//   const aEHrHASDqzYUdnHF = Convert.toAEHrHASDqzYUdnHF(json);
//   const ibjwAhu054XPAFcx = Convert.toIbjwAhu054XPAFcx(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface AEHrHASDqzYUdnHF {
    _id:       string;
    type:      number;
    user:      string;
    timestamp: number;
    content:   string;
    speaker:   Speaker;
    whisper:   any[];
    blind:     boolean;
    sound:     string;
    emote:     boolean;
    flags:     AEHrHASDqzYUdnHFFlags;
}

export interface AEHrHASDqzYUdnHFFlags {
    core: PurpleCore;
}

export interface PurpleCore {
    canPopout: boolean;
}

export interface Speaker {
    scene: null;
    actor: null | string;
    token: null;
    alias: string;
}

export interface IbjwAhu054XPAFcx {
    _id:       string;
    type:      number;
    user:      string;
    timestamp: number;
    flavor:    string;
    content:   string;
    speaker:   Speaker;
    whisper:   any[];
    blind:     boolean;
    roll:      string;
    sound:     string;
    emote:     boolean;
    flags:     IbjwAhu054XPAFcxFlags;
}

export interface IbjwAhu054XPAFcxFlags {
    core: FluffyCore;
}

export interface FluffyCore {
    RollTable: string;
    canPopout: boolean;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toAEHrHASDqzYUdnHF(json: string): AEHrHASDqzYUdnHF {
        return cast(JSON.parse(json), r("AEHrHASDqzYUdnHF"));
    }

    public static aEHrHASDqzYUdnHFToJson(value: AEHrHASDqzYUdnHF): string {
        return JSON.stringify(uncast(value, r("AEHrHASDqzYUdnHF")), null, 2);
    }

    public static toIbjwAhu054XPAFcx(json: string): IbjwAhu054XPAFcx {
        return cast(JSON.parse(json), r("IbjwAhu054XPAFcx"));
    }

    public static ibjwAhu054XPAFcxToJson(value: IbjwAhu054XPAFcx): string {
        return JSON.stringify(uncast(value, r("IbjwAhu054XPAFcx")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "AEHrHASDqzYUdnHF": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "type", js: "type", typ: 0 },
        { json: "user", js: "user", typ: "" },
        { json: "timestamp", js: "timestamp", typ: 0 },
        { json: "content", js: "content", typ: "" },
        { json: "speaker", js: "speaker", typ: r("Speaker") },
        { json: "whisper", js: "whisper", typ: a("any") },
        { json: "blind", js: "blind", typ: true },
        { json: "sound", js: "sound", typ: "" },
        { json: "emote", js: "emote", typ: true },
        { json: "flags", js: "flags", typ: r("AEHrHASDqzYUdnHFFlags") },
    ], false),
    "AEHrHASDqzYUdnHFFlags": o([
        { json: "core", js: "core", typ: r("PurpleCore") },
    ], false),
    "PurpleCore": o([
        { json: "canPopout", js: "canPopout", typ: true },
    ], false),
    "Speaker": o([
        { json: "scene", js: "scene", typ: null },
        { json: "actor", js: "actor", typ: u(null, "") },
        { json: "token", js: "token", typ: null },
        { json: "alias", js: "alias", typ: "" },
    ], false),
    "IbjwAhu054XPAFcx": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "type", js: "type", typ: 0 },
        { json: "user", js: "user", typ: "" },
        { json: "timestamp", js: "timestamp", typ: 0 },
        { json: "flavor", js: "flavor", typ: "" },
        { json: "content", js: "content", typ: "" },
        { json: "speaker", js: "speaker", typ: r("Speaker") },
        { json: "whisper", js: "whisper", typ: a("any") },
        { json: "blind", js: "blind", typ: true },
        { json: "roll", js: "roll", typ: "" },
        { json: "sound", js: "sound", typ: "" },
        { json: "emote", js: "emote", typ: true },
        { json: "flags", js: "flags", typ: r("IbjwAhu054XPAFcxFlags") },
    ], false),
    "IbjwAhu054XPAFcxFlags": o([
        { json: "core", js: "core", typ: r("FluffyCore") },
    ], false),
    "FluffyCore": o([
        { json: "RollTable", js: "RollTable", typ: "" },
        { json: "canPopout", js: "canPopout", typ: true },
    ], false),
};
