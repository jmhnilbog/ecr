// To parse this data:
//
//   import { Convert, The3KprDZmBw8Q1EuUQ, AO7YaDR04G0WYoSC, M08VQv0534LADcvO, OB0DGZG8D3CuQvoX, S0TuA6KGAbhWPWsz, SyBBUk37ZkrGLMto, VdcuBR0UBx7MIICo, Xhf7MS9T3QAy0Z1S, EcrqoizA8FTnL04G, Nyz2Ct97NTKjToK7, Rw0LL8Ze1R9GGGkF, UMM7M68CEBWNbxgk } from "./file";
//
//   const the3KprDZmBw8Q1EuUQ = Convert.toThe3KprDZmBw8Q1EuUQ(json);
//   const aO7YaDR04G0WYoSC = Convert.toAO7YaDR04G0WYoSC(json);
//   const m08VQv0534LADcvO = Convert.toM08VQv0534LADcvO(json);
//   const oB0DGZG8D3CuQvoX = Convert.toOB0DGZG8D3CuQvoX(json);
//   const s0TuA6KGAbhWPWsz = Convert.toS0TuA6KGAbhWPWsz(json);
//   const syBBUk37ZkrGLMto = Convert.toSyBBUk37ZkrGLMto(json);
//   const vdcuBR0UBx7MIICo = Convert.toVdcuBR0UBx7MIICo(json);
//   const xhf7MS9T3QAy0Z1S = Convert.toXhf7MS9T3QAy0Z1S(json);
//   const ecrqoizA8FTnL04G = Convert.toEcrqoizA8FTnL04G(json);
//   const nyz2Ct97NTKjToK7 = Convert.toNyz2Ct97NTKjToK7(json);
//   const rw0LL8Ze1R9GGGkF = Convert.toRw0LL8Ze1R9GGGkF(json);
//   const uMM7M68CEBWNbxgk = Convert.toUMM7M68CEBWNbxgk(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface UMM7M68CEBWNbxgk {
    _id:        string;
    name:       string;
    type:       string;
    author:     string;
    img:        string;
    scope:      string;
    command:    string;
    folder:     null | string;
    sort:       number;
    permission: The3KprDZmBw8Q1EuUQPermission;
    flags:      The3KprDZmBw8Q1EuUQFlags;
}

export interface The3KprDZmBw8Q1EuUQFlags {
    core:                  Core;
    "combat-utility-belt": CombatUtilityBelt;
}

export interface CombatUtilityBelt {
    macroTrigger: string;
}

export interface Core {
    sourceId: string;
}

export interface The3KprDZmBw8Q1EuUQPermission {
    oVvfrcHQErm1ON0p: number;
}

export interface Rw0LL8Ze1R9GGGkF {
    _id:        string;
    name:       string;
    type:       string;
    author:     string;
    img:        string;
    scope:      string;
    command:    string;
    folder:     null | string;
    sort:       number;
    permission: AO7YaDR04G0WYoSCPermission;
    flags:      AO7YaDR04G0WYoSCFlags;
}

export interface AO7YaDR04G0WYoSCFlags {
}

export interface AO7YaDR04G0WYoSCPermission {
    default:          number;
    oVvfrcHQErm1ON0p: number;
}

export interface SyBBUk37ZkrGLMto {
    name:       string;
    type:       string;
    author:     string;
    img:        string;
    scope:      string;
    command:    string;
    folder:     null | string;
    sort:       number;
    permission: The3KprDZmBw8Q1EuUQPermission;
    flags:      S0TuA6KGAbhWPWszFlags;
    _id:        string;
}

export interface S0TuA6KGAbhWPWszFlags {
    core: Core;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toThe3KprDZmBw8Q1EuUQ(json: string): UMM7M68CEBWNbxgk {
        return cast(JSON.parse(json), r("UMM7M68CEBWNbxgk"));
    }

    public static the3KprDZmBw8Q1EuUQToJson(value: UMM7M68CEBWNbxgk): string {
        return JSON.stringify(uncast(value, r("UMM7M68CEBWNbxgk")), null, 2);
    }

    public static toAO7YaDR04G0WYoSC(json: string): Rw0LL8Ze1R9GGGkF {
        return cast(JSON.parse(json), r("Rw0LL8Ze1R9GGGkF"));
    }

    public static aO7YaDR04G0WYoSCToJson(value: Rw0LL8Ze1R9GGGkF): string {
        return JSON.stringify(uncast(value, r("Rw0LL8Ze1R9GGGkF")), null, 2);
    }

    public static toM08VQv0534LADcvO(json: string): Rw0LL8Ze1R9GGGkF {
        return cast(JSON.parse(json), r("Rw0LL8Ze1R9GGGkF"));
    }

    public static m08VQv0534LADcvOToJson(value: Rw0LL8Ze1R9GGGkF): string {
        return JSON.stringify(uncast(value, r("Rw0LL8Ze1R9GGGkF")), null, 2);
    }

    public static toOB0DGZG8D3CuQvoX(json: string): UMM7M68CEBWNbxgk {
        return cast(JSON.parse(json), r("UMM7M68CEBWNbxgk"));
    }

    public static oB0DGZG8D3CuQvoXToJson(value: UMM7M68CEBWNbxgk): string {
        return JSON.stringify(uncast(value, r("UMM7M68CEBWNbxgk")), null, 2);
    }

    public static toS0TuA6KGAbhWPWsz(json: string): SyBBUk37ZkrGLMto {
        return cast(JSON.parse(json), r("SyBBUk37ZkrGLMto"));
    }

    public static s0TuA6KGAbhWPWszToJson(value: SyBBUk37ZkrGLMto): string {
        return JSON.stringify(uncast(value, r("SyBBUk37ZkrGLMto")), null, 2);
    }

    public static toSyBBUk37ZkrGLMto(json: string): SyBBUk37ZkrGLMto {
        return cast(JSON.parse(json), r("SyBBUk37ZkrGLMto"));
    }

    public static syBBUk37ZkrGLMtoToJson(value: SyBBUk37ZkrGLMto): string {
        return JSON.stringify(uncast(value, r("SyBBUk37ZkrGLMto")), null, 2);
    }

    public static toVdcuBR0UBx7MIICo(json: string): UMM7M68CEBWNbxgk {
        return cast(JSON.parse(json), r("UMM7M68CEBWNbxgk"));
    }

    public static vdcuBR0UBx7MIICoToJson(value: UMM7M68CEBWNbxgk): string {
        return JSON.stringify(uncast(value, r("UMM7M68CEBWNbxgk")), null, 2);
    }

    public static toXhf7MS9T3QAy0Z1S(json: string): Rw0LL8Ze1R9GGGkF {
        return cast(JSON.parse(json), r("Rw0LL8Ze1R9GGGkF"));
    }

    public static xhf7MS9T3QAy0Z1SToJson(value: Rw0LL8Ze1R9GGGkF): string {
        return JSON.stringify(uncast(value, r("Rw0LL8Ze1R9GGGkF")), null, 2);
    }

    public static toEcrqoizA8FTnL04G(json: string): Rw0LL8Ze1R9GGGkF {
        return cast(JSON.parse(json), r("Rw0LL8Ze1R9GGGkF"));
    }

    public static ecrqoizA8FTnL04GToJson(value: Rw0LL8Ze1R9GGGkF): string {
        return JSON.stringify(uncast(value, r("Rw0LL8Ze1R9GGGkF")), null, 2);
    }

    public static toNyz2Ct97NTKjToK7(json: string): UMM7M68CEBWNbxgk {
        return cast(JSON.parse(json), r("UMM7M68CEBWNbxgk"));
    }

    public static nyz2Ct97NTKjToK7ToJson(value: UMM7M68CEBWNbxgk): string {
        return JSON.stringify(uncast(value, r("UMM7M68CEBWNbxgk")), null, 2);
    }

    public static toRw0LL8Ze1R9GGGkF(json: string): Rw0LL8Ze1R9GGGkF {
        return cast(JSON.parse(json), r("Rw0LL8Ze1R9GGGkF"));
    }

    public static rw0LL8Ze1R9GGGkFToJson(value: Rw0LL8Ze1R9GGGkF): string {
        return JSON.stringify(uncast(value, r("Rw0LL8Ze1R9GGGkF")), null, 2);
    }

    public static toUMM7M68CEBWNbxgk(json: string): UMM7M68CEBWNbxgk {
        return cast(JSON.parse(json), r("UMM7M68CEBWNbxgk"));
    }

    public static uMM7M68CEBWNbxgkToJson(value: UMM7M68CEBWNbxgk): string {
        return JSON.stringify(uncast(value, r("UMM7M68CEBWNbxgk")), null, 2);
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
    "UMM7M68CEBWNbxgk": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "author", js: "author", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "scope", js: "scope", typ: "" },
        { json: "command", js: "command", typ: "" },
        { json: "folder", js: "folder", typ: u(null, "") },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The3KprDZmBw8Q1EuUQPermission") },
        { json: "flags", js: "flags", typ: r("The3KprDZmBw8Q1EuUQFlags") },
    ], false),
    "The3KprDZmBw8Q1EuUQFlags": o([
        { json: "core", js: "core", typ: r("Core") },
        { json: "combat-utility-belt", js: "combat-utility-belt", typ: r("CombatUtilityBelt") },
    ], false),
    "CombatUtilityBelt": o([
        { json: "macroTrigger", js: "macroTrigger", typ: "" },
    ], false),
    "Core": o([
        { json: "sourceId", js: "sourceId", typ: "" },
    ], false),
    "The3KprDZmBw8Q1EuUQPermission": o([
        { json: "oVvfrcHQErm1ON0p", js: "oVvfrcHQErm1ON0p", typ: 0 },
    ], false),
    "Rw0LL8Ze1R9GGGkF": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "author", js: "author", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "scope", js: "scope", typ: "" },
        { json: "command", js: "command", typ: "" },
        { json: "folder", js: "folder", typ: u(null, "") },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("AO7YaDR04G0WYoSCPermission") },
        { json: "flags", js: "flags", typ: r("AO7YaDR04G0WYoSCFlags") },
    ], false),
    "AO7YaDR04G0WYoSCFlags": o([
    ], false),
    "AO7YaDR04G0WYoSCPermission": o([
        { json: "default", js: "default", typ: 0 },
        { json: "oVvfrcHQErm1ON0p", js: "oVvfrcHQErm1ON0p", typ: 0 },
    ], false),
    "SyBBUk37ZkrGLMto": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "author", js: "author", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "scope", js: "scope", typ: "" },
        { json: "command", js: "command", typ: "" },
        { json: "folder", js: "folder", typ: u(null, "") },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The3KprDZmBw8Q1EuUQPermission") },
        { json: "flags", js: "flags", typ: r("S0TuA6KGAbhWPWszFlags") },
        { json: "_id", js: "_id", typ: "" },
    ], false),
    "S0TuA6KGAbhWPWszFlags": o([
        { json: "core", js: "core", typ: r("Core") },
    ], false),
};
