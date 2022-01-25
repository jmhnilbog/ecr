// To parse this data:
//
//   import { Convert, The517VLHkllaRh09GO, IsgopEru0XjL8NVj, NHVLMTlVPQ69EQ7T, OVvfrcHQErm1ON0P, ZfuJfnXSegVCSBmP } from "./file";
//
//   const the517VLHkllaRh09GO = Convert.toThe517VLHkllaRh09GO(json);
//   const isgopEru0XjL8NVj = Convert.toIsgopEru0XjL8NVj(json);
//   const nHVLMTlVPQ69EQ7T = Convert.toNHVLMTlVPQ69EQ7T(json);
//   const oVvfrcHQErm1ON0P = Convert.toOVvfrcHQErm1ON0P(json);
//   const zfuJfnXSegVCSBmP = Convert.toZfuJfnXSegVCSBmP(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ZfuJfnXSegVCSBmP {
    _id:          string;
    character:    null;
    color:        string;
    hotbar:       HotbarClass;
    name:         string;
    password:     string;
    passwordSalt: string;
    permissions:  HotbarClass;
    role:         number;
    flags:        HotbarClass;
}

export interface HotbarClass {
}

export interface OVvfrcHQErm1ON0P {
    _id:          string;
    character:    null;
    color:        string;
    hotbar:       { [key: string]: string };
    name:         string;
    password:     string;
    passwordSalt: string;
    permissions:  HotbarClass;
    role:         number;
    flags:        PurpleFlags;
}

export interface PurpleFlags {
    dcc:                      DCC;
    "dcc-core-book":          DCCCoreBook;
    "token-attacher":         PurpleTokenAttacher;
    "monks-enhanced-journal": MonksEnhancedJournal;
}

export interface DCC {
    lastSeenSystemVersion: string;
}

export interface DCCCoreBook {
    lastSeenVersion: string;
}

export interface MonksEnhancedJournal {
    tabs:            Tab[];
    _recentlyViewed: RecentlyViewed[];
}

export interface RecentlyViewed {
    id:    string;
    uuid:  string;
    name:  string;
    type?: string;
}

export interface Tab {
    id:       string;
    text:     string;
    active:   boolean;
    history:  string[];
    entityId: string;
}

export interface PurpleTokenAttacher {
    copyPrototypeMap: CopyPrototypeMap;
}

export interface CopyPrototypeMap {
    map:  Map;
    grid: Grid;
}

export interface Grid {
    size: number;
    w:    number;
    h:    number;
}

export interface Map {
    Token: Token;
}

export interface Token {
    lRxLWWvV8wdC31Eo: LRxLWWvV8WdC31Eo;
}

export interface LRxLWWvV8WdC31Eo {
    AmbientLight: AmbientLight[];
}

export interface AmbientLight {
    x:        number;
    y:        number;
    rotation: number;
    walls:    boolean;
    vision:   boolean;
    config:   AmbientLightConfig;
    hidden:   boolean;
    flags:    AmbientLightFlags;
}

export interface AmbientLightConfig {
    alpha:      number;
    angle:      number;
    bright:     number;
    coloration: number;
    dim:        number;
    gradual:    boolean;
    luminosity: number;
    saturation: number;
    contrast:   number;
    shadows:    number;
    animation:  Animation;
    darkness:   Darkness;
    color:      string;
}

export interface Animation {
    speed:     number;
    intensity: number;
    reverse:   boolean;
    type:      string;
}

export interface Darkness {
    min: number;
    max: number;
}

export interface AmbientLightFlags {
    lightmask:        Lightmask;
    "token-attacher": FluffyTokenAttacher;
}

export interface Lightmask {
    shape:         string;
    customWallIDs: null;
    relative:      boolean;
    customEdges:   any[];
}

export interface FluffyTokenAttacher {
    parent: string;
    offset: Offset;
}

export interface Offset {
    x:         number;
    y:         number;
    rot:       number;
    centerX:   number;
    centerY:   number;
    offRot:    number;
    size:      Size;
    elevation: Elevation;
}

export interface Elevation {
    flags: HotbarClass;
}

export interface Size {
    config:     SizeConfig;
    widthBase:  number;
    heightBase: number;
}

export interface SizeConfig {
    dim:    number;
    bright: number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toThe517VLHkllaRh09GO(json: string): ZfuJfnXSegVCSBmP {
        return cast(JSON.parse(json), r("ZfuJfnXSegVCSBmP"));
    }

    public static the517VLHkllaRh09GOToJson(value: ZfuJfnXSegVCSBmP): string {
        return JSON.stringify(uncast(value, r("ZfuJfnXSegVCSBmP")), null, 2);
    }

    public static toIsgopEru0XjL8NVj(json: string): ZfuJfnXSegVCSBmP {
        return cast(JSON.parse(json), r("ZfuJfnXSegVCSBmP"));
    }

    public static isgopEru0XjL8NVjToJson(value: ZfuJfnXSegVCSBmP): string {
        return JSON.stringify(uncast(value, r("ZfuJfnXSegVCSBmP")), null, 2);
    }

    public static toNHVLMTlVPQ69EQ7T(json: string): ZfuJfnXSegVCSBmP {
        return cast(JSON.parse(json), r("ZfuJfnXSegVCSBmP"));
    }

    public static nHVLMTlVPQ69EQ7TToJson(value: ZfuJfnXSegVCSBmP): string {
        return JSON.stringify(uncast(value, r("ZfuJfnXSegVCSBmP")), null, 2);
    }

    public static toOVvfrcHQErm1ON0P(json: string): OVvfrcHQErm1ON0P {
        return cast(JSON.parse(json), r("OVvfrcHQErm1ON0P"));
    }

    public static oVvfrcHQErm1ON0PToJson(value: OVvfrcHQErm1ON0P): string {
        return JSON.stringify(uncast(value, r("OVvfrcHQErm1ON0P")), null, 2);
    }

    public static toZfuJfnXSegVCSBmP(json: string): ZfuJfnXSegVCSBmP {
        return cast(JSON.parse(json), r("ZfuJfnXSegVCSBmP"));
    }

    public static zfuJfnXSegVCSBmPToJson(value: ZfuJfnXSegVCSBmP): string {
        return JSON.stringify(uncast(value, r("ZfuJfnXSegVCSBmP")), null, 2);
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
    "ZfuJfnXSegVCSBmP": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "character", js: "character", typ: null },
        { json: "color", js: "color", typ: "" },
        { json: "hotbar", js: "hotbar", typ: r("HotbarClass") },
        { json: "name", js: "name", typ: "" },
        { json: "password", js: "password", typ: "" },
        { json: "passwordSalt", js: "passwordSalt", typ: "" },
        { json: "permissions", js: "permissions", typ: r("HotbarClass") },
        { json: "role", js: "role", typ: 0 },
        { json: "flags", js: "flags", typ: r("HotbarClass") },
    ], false),
    "HotbarClass": o([
    ], false),
    "OVvfrcHQErm1ON0P": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "character", js: "character", typ: null },
        { json: "color", js: "color", typ: "" },
        { json: "hotbar", js: "hotbar", typ: m("") },
        { json: "name", js: "name", typ: "" },
        { json: "password", js: "password", typ: "" },
        { json: "passwordSalt", js: "passwordSalt", typ: "" },
        { json: "permissions", js: "permissions", typ: r("HotbarClass") },
        { json: "role", js: "role", typ: 0 },
        { json: "flags", js: "flags", typ: r("PurpleFlags") },
    ], false),
    "PurpleFlags": o([
        { json: "dcc", js: "dcc", typ: r("DCC") },
        { json: "dcc-core-book", js: "dcc-core-book", typ: r("DCCCoreBook") },
        { json: "token-attacher", js: "token-attacher", typ: r("PurpleTokenAttacher") },
        { json: "monks-enhanced-journal", js: "monks-enhanced-journal", typ: r("MonksEnhancedJournal") },
    ], false),
    "DCC": o([
        { json: "lastSeenSystemVersion", js: "lastSeenSystemVersion", typ: "" },
    ], false),
    "DCCCoreBook": o([
        { json: "lastSeenVersion", js: "lastSeenVersion", typ: "" },
    ], false),
    "MonksEnhancedJournal": o([
        { json: "tabs", js: "tabs", typ: a(r("Tab")) },
        { json: "_recentlyViewed", js: "_recentlyViewed", typ: a(r("RecentlyViewed")) },
    ], false),
    "RecentlyViewed": o([
        { json: "id", js: "id", typ: "" },
        { json: "uuid", js: "uuid", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: u(undefined, "") },
    ], false),
    "Tab": o([
        { json: "id", js: "id", typ: "" },
        { json: "text", js: "text", typ: "" },
        { json: "active", js: "active", typ: true },
        { json: "history", js: "history", typ: a("") },
        { json: "entityId", js: "entityId", typ: "" },
    ], false),
    "PurpleTokenAttacher": o([
        { json: "copyPrototypeMap", js: "copyPrototypeMap", typ: r("CopyPrototypeMap") },
    ], false),
    "CopyPrototypeMap": o([
        { json: "map", js: "map", typ: r("Map") },
        { json: "grid", js: "grid", typ: r("Grid") },
    ], false),
    "Grid": o([
        { json: "size", js: "size", typ: 0 },
        { json: "w", js: "w", typ: 0 },
        { json: "h", js: "h", typ: 0 },
    ], false),
    "Map": o([
        { json: "Token", js: "Token", typ: r("Token") },
    ], false),
    "Token": o([
        { json: "lRxLWWvV8wdC31Eo", js: "lRxLWWvV8wdC31Eo", typ: r("LRxLWWvV8WdC31Eo") },
    ], false),
    "LRxLWWvV8WdC31Eo": o([
        { json: "AmbientLight", js: "AmbientLight", typ: a(r("AmbientLight")) },
    ], false),
    "AmbientLight": o([
        { json: "x", js: "x", typ: 0 },
        { json: "y", js: "y", typ: 0 },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "walls", js: "walls", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "config", js: "config", typ: r("AmbientLightConfig") },
        { json: "hidden", js: "hidden", typ: true },
        { json: "flags", js: "flags", typ: r("AmbientLightFlags") },
    ], false),
    "AmbientLightConfig": o([
        { json: "alpha", js: "alpha", typ: 3.14 },
        { json: "angle", js: "angle", typ: 0 },
        { json: "bright", js: "bright", typ: 0 },
        { json: "coloration", js: "coloration", typ: 0 },
        { json: "dim", js: "dim", typ: 0 },
        { json: "gradual", js: "gradual", typ: true },
        { json: "luminosity", js: "luminosity", typ: 3.14 },
        { json: "saturation", js: "saturation", typ: 3.14 },
        { json: "contrast", js: "contrast", typ: 3.14 },
        { json: "shadows", js: "shadows", typ: 0 },
        { json: "animation", js: "animation", typ: r("Animation") },
        { json: "darkness", js: "darkness", typ: r("Darkness") },
        { json: "color", js: "color", typ: "" },
    ], false),
    "Animation": o([
        { json: "speed", js: "speed", typ: 0 },
        { json: "intensity", js: "intensity", typ: 0 },
        { json: "reverse", js: "reverse", typ: true },
        { json: "type", js: "type", typ: "" },
    ], false),
    "Darkness": o([
        { json: "min", js: "min", typ: 0 },
        { json: "max", js: "max", typ: 0 },
    ], false),
    "AmbientLightFlags": o([
        { json: "lightmask", js: "lightmask", typ: r("Lightmask") },
        { json: "token-attacher", js: "token-attacher", typ: r("FluffyTokenAttacher") },
    ], false),
    "Lightmask": o([
        { json: "shape", js: "shape", typ: "" },
        { json: "customWallIDs", js: "customWallIDs", typ: null },
        { json: "relative", js: "relative", typ: true },
        { json: "customEdges", js: "customEdges", typ: a("any") },
    ], false),
    "FluffyTokenAttacher": o([
        { json: "parent", js: "parent", typ: "" },
        { json: "offset", js: "offset", typ: r("Offset") },
    ], false),
    "Offset": o([
        { json: "x", js: "x", typ: 0 },
        { json: "y", js: "y", typ: 0 },
        { json: "rot", js: "rot", typ: 0 },
        { json: "centerX", js: "centerX", typ: 0 },
        { json: "centerY", js: "centerY", typ: 0 },
        { json: "offRot", js: "offRot", typ: 0 },
        { json: "size", js: "size", typ: r("Size") },
        { json: "elevation", js: "elevation", typ: r("Elevation") },
    ], false),
    "Elevation": o([
        { json: "flags", js: "flags", typ: r("HotbarClass") },
    ], false),
    "Size": o([
        { json: "config", js: "config", typ: r("SizeConfig") },
        { json: "widthBase", js: "widthBase", typ: 0 },
        { json: "heightBase", js: "heightBase", typ: 0 },
    ], false),
    "SizeConfig": o([
        { json: "dim", js: "dim", typ: 0 },
        { json: "bright", js: "bright", typ: 0 },
    ], false),
};
