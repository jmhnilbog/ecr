// To parse this data:
//
//   import { Convert, The0SsWA4Q9N4AIL75Y, FhuhzcREbg7GTT1K, HH2IP44J6QvUsGSS, K7IUI2ZVg7OATHIO, LMfsPQUhadITB3HI, ODuGlf9KYtG4Yxk2, U8POYaC6Td9YvEGv, F9XbP66Rh0CDSUKi, K6Ww7VWIJq9Q0BmL, MAKPFzNnSVZBlQbd, Nkmx8ZsltP2JfOV6, RQURZa8FCeWZrCjZ, UA0GxOZElwbGxjYf, Vs3XcYCxNLEBbF4V, YO78L1AWrbI0PGYp } from "./file";
//
//   const the0SsWA4Q9N4AIL75Y = Convert.toThe0SsWA4Q9N4AIL75Y(json);
//   const fhuhzcREbg7GTT1K = Convert.toFhuhzcREbg7GTT1K(json);
//   const hH2IP44J6QvUsGSS = Convert.toHH2IP44J6QvUsGSS(json);
//   const k7IUI2ZVg7OATHIO = Convert.toK7IUI2ZVg7OATHIO(json);
//   const lMfsPQUhadITB3HI = Convert.toLMfsPQUhadITB3HI(json);
//   const oDuGlf9KYtG4Yxk2 = Convert.toODuGlf9KYtG4Yxk2(json);
//   const u8POYaC6Td9YvEGv = Convert.toU8POYaC6Td9YvEGv(json);
//   const f9XbP66Rh0CDSUKi = Convert.toF9XbP66Rh0CDSUKi(json);
//   const k6Ww7VWIJq9Q0BmL = Convert.toK6Ww7VWIJq9Q0BmL(json);
//   const mAKPFzNnSVZBlQbd = Convert.toMAKPFzNnSVZBlQbd(json);
//   const nkmx8ZsltP2JfOV6 = Convert.toNkmx8ZsltP2JfOV6(json);
//   const rQURZa8FCeWZrCjZ = Convert.toRQURZa8FCeWZrCjZ(json);
//   const uA0GxOZElwbGxjYf = Convert.toUA0GxOZElwbGxjYf(json);
//   const vs3XcYCxNLEBbF4V = Convert.toVs3XcYCxNLEBbF4V(json);
//   const yO78L1AWrbI0PGYp = Convert.toYO78L1AWrbI0PGYp(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface YO78L1AWrbI0PGYp {
    _id:         string;
    name:        string;
    img:         string;
    description: string;
    results:     The0SsWA4Q9N4AIL75YResult[];
    formula:     string;
    replacement: boolean;
    displayRoll: boolean;
    folder:      string;
    sort:        number;
    permission:  The0SsWA4Q9N4AIL75YPermission;
    flags:       The0SsWA4Q9N4AIL75YFlags;
}

export interface The0SsWA4Q9N4AIL75YFlags {
    cf:   null;
    core: Core;
}

export interface Core {
    sourceId: string;
}

export interface The0SsWA4Q9N4AIL75YPermission {
    oVvfrcHQErm1ON0p: number;
}

export interface The0SsWA4Q9N4AIL75YResult {
    _id:    string;
    flags:  FhuhzcREbg7GTT1KFlags;
    type:   number;
    text:   string;
    img:    Img;
    weight: number;
    range:  number[];
    drawn:  boolean;
}

export interface FhuhzcREbg7GTT1KFlags {
}

export enum Img {
    IconsSVGD20BlackSVG = "icons/svg/d20-black.svg",
    IconsSVGD20GreySVG = "icons/svg/d20-grey.svg",
}

export interface UA0GxOZElwbGxjYf {
    _id:         string;
    name:        string;
    img:         string;
    description: string;
    results:     FhuhzcREbg7GTT1KResult[];
    formula:     string;
    replacement: boolean;
    displayRoll: boolean;
    folder:      string;
    sort:        number;
    permission:  FhuhzcREbg7GTT1KPermission;
    flags:       FhuhzcREbg7GTT1KFlags;
}

export interface FhuhzcREbg7GTT1KPermission {
    default:          number;
    oVvfrcHQErm1ON0p: number;
}

export interface FhuhzcREbg7GTT1KResult {
    _id:         string;
    type:        number;
    text:        string;
    img:         Img;
    collection?: null | string;
    resultId?:   null | string;
    weight:      number;
    range:       number[];
    drawn:       boolean;
    flags:       FhuhzcREbg7GTT1KFlags;
    rangeL?:     number;
    rangeH?:     number;
}

export interface ODuGlf9KYtG4Yxk2 {
    _id:         string;
    name:        string;
    img:         Img;
    description: string;
    results:     FhuhzcREbg7GTT1KResult[];
    formula:     string;
    replacement: boolean;
    displayRoll: boolean;
    folder:      string;
    sort:        number;
    permission:  The0SsWA4Q9N4AIL75YPermission;
    flags:       ODuGlf9KYtG4Yxk2Flags;
}

export interface ODuGlf9KYtG4Yxk2Flags {
    "better-rolltables": PurpleBetterRolltables;
    cf:                  null;
    core:                Core;
}

export interface PurpleBetterRolltables {
    "table-type":            string;
    "table-currency-string": string;
    "loot-amount-key":       string;
    "loot-actor-name":       string;
}

export interface U8POYaC6Td9YvEGv {
    _id:         string;
    name:        string;
    img:         Img;
    description: string;
    results:     FhuhzcREbg7GTT1KResult[];
    formula:     string;
    replacement: boolean;
    displayRoll: boolean;
    folder:      string;
    sort:        number;
    permission:  The0SsWA4Q9N4AIL75YPermission;
    flags:       The0SsWA4Q9N4AIL75YFlags;
}

export interface K6Ww7VWIJq9Q0BmL {
    _id:         string;
    name:        string;
    img:         string;
    description: string;
    results:     K6Ww7VWIJq9Q0BmLResult[];
    formula:     string;
    replacement: boolean;
    displayRoll: boolean;
    folder:      string;
    sort:        number;
    permission:  The0SsWA4Q9N4AIL75YPermission;
    flags:       ODuGlf9KYtG4Yxk2Flags;
}

export interface K6Ww7VWIJq9Q0BmLResult {
    _id:        string;
    flags:      PurpleFlags;
    type:       number;
    text:       string;
    img:        Img;
    weight:     number;
    range:      number[];
    drawn:      boolean;
    rangeL:     number;
    rangeH:     number;
    collection: null | string;
    resultId:   null | string;
}

export interface PurpleFlags {
    "better-rolltables"?: FluffyBetterRolltables;
}

export interface FluffyBetterRolltables {
    "brt-result-formula": BrtResultFormula;
}

export interface BrtResultFormula {
    formula: string;
}

export interface RQURZa8FCeWZrCjZ {
    _id:         string;
    name:        string;
    img:         string;
    description: string;
    results:     FhuhzcREbg7GTT1KResult[];
    formula:     string;
    replacement: boolean;
    displayRoll: boolean;
    folder:      string;
    sort:        number;
    permission:  The0SsWA4Q9N4AIL75YPermission;
    flags:       RQURZa8FCeWZrCjZFlags;
}

export interface RQURZa8FCeWZrCjZFlags {
    "journal-links": JournalLinks;
    cf:              null;
    core:            Core;
}

export interface JournalLinks {
    referencedBy: ReferencedBy;
}

export interface ReferencedBy {
    JournalEntry: string[];
}

export interface Vs3XcYCxNLEBbF4V {
    _id:         string;
    name:        string;
    img:         Img;
    description: string;
    results:     K6Ww7VWIJq9Q0BmLResult[];
    formula:     string;
    replacement: boolean;
    displayRoll: boolean;
    folder:      string;
    sort:        number;
    permission:  The0SsWA4Q9N4AIL75YPermission;
    flags:       ODuGlf9KYtG4Yxk2Flags;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toThe0SsWA4Q9N4AIL75Y(json: string): YO78L1AWrbI0PGYp {
        return cast(JSON.parse(json), r("YO78L1AWrbI0PGYp"));
    }

    public static the0SsWA4Q9N4AIL75YToJson(value: YO78L1AWrbI0PGYp): string {
        return JSON.stringify(uncast(value, r("YO78L1AWrbI0PGYp")), null, 2);
    }

    public static toFhuhzcREbg7GTT1K(json: string): UA0GxOZElwbGxjYf {
        return cast(JSON.parse(json), r("UA0GxOZElwbGxjYf"));
    }

    public static fhuhzcREbg7GTT1KToJson(value: UA0GxOZElwbGxjYf): string {
        return JSON.stringify(uncast(value, r("UA0GxOZElwbGxjYf")), null, 2);
    }

    public static toHH2IP44J6QvUsGSS(json: string): YO78L1AWrbI0PGYp {
        return cast(JSON.parse(json), r("YO78L1AWrbI0PGYp"));
    }

    public static hH2IP44J6QvUsGSSToJson(value: YO78L1AWrbI0PGYp): string {
        return JSON.stringify(uncast(value, r("YO78L1AWrbI0PGYp")), null, 2);
    }

    public static toK7IUI2ZVg7OATHIO(json: string): YO78L1AWrbI0PGYp {
        return cast(JSON.parse(json), r("YO78L1AWrbI0PGYp"));
    }

    public static k7IUI2ZVg7OATHIOToJson(value: YO78L1AWrbI0PGYp): string {
        return JSON.stringify(uncast(value, r("YO78L1AWrbI0PGYp")), null, 2);
    }

    public static toLMfsPQUhadITB3HI(json: string): YO78L1AWrbI0PGYp {
        return cast(JSON.parse(json), r("YO78L1AWrbI0PGYp"));
    }

    public static lMfsPQUhadITB3HIToJson(value: YO78L1AWrbI0PGYp): string {
        return JSON.stringify(uncast(value, r("YO78L1AWrbI0PGYp")), null, 2);
    }

    public static toODuGlf9KYtG4Yxk2(json: string): ODuGlf9KYtG4Yxk2 {
        return cast(JSON.parse(json), r("ODuGlf9KYtG4Yxk2"));
    }

    public static oDuGlf9KYtG4Yxk2ToJson(value: ODuGlf9KYtG4Yxk2): string {
        return JSON.stringify(uncast(value, r("ODuGlf9KYtG4Yxk2")), null, 2);
    }

    public static toU8POYaC6Td9YvEGv(json: string): U8POYaC6Td9YvEGv {
        return cast(JSON.parse(json), r("U8POYaC6Td9YvEGv"));
    }

    public static u8POYaC6Td9YvEGvToJson(value: U8POYaC6Td9YvEGv): string {
        return JSON.stringify(uncast(value, r("U8POYaC6Td9YvEGv")), null, 2);
    }

    public static toF9XbP66Rh0CDSUKi(json: string): YO78L1AWrbI0PGYp {
        return cast(JSON.parse(json), r("YO78L1AWrbI0PGYp"));
    }

    public static f9XbP66Rh0CDSUKiToJson(value: YO78L1AWrbI0PGYp): string {
        return JSON.stringify(uncast(value, r("YO78L1AWrbI0PGYp")), null, 2);
    }

    public static toK6Ww7VWIJq9Q0BmL(json: string): K6Ww7VWIJq9Q0BmL {
        return cast(JSON.parse(json), r("K6Ww7VWIJq9Q0BmL"));
    }

    public static k6Ww7VWIJq9Q0BmLToJson(value: K6Ww7VWIJq9Q0BmL): string {
        return JSON.stringify(uncast(value, r("K6Ww7VWIJq9Q0BmL")), null, 2);
    }

    public static toMAKPFzNnSVZBlQbd(json: string): YO78L1AWrbI0PGYp {
        return cast(JSON.parse(json), r("YO78L1AWrbI0PGYp"));
    }

    public static mAKPFzNnSVZBlQbdToJson(value: YO78L1AWrbI0PGYp): string {
        return JSON.stringify(uncast(value, r("YO78L1AWrbI0PGYp")), null, 2);
    }

    public static toNkmx8ZsltP2JfOV6(json: string): YO78L1AWrbI0PGYp {
        return cast(JSON.parse(json), r("YO78L1AWrbI0PGYp"));
    }

    public static nkmx8ZsltP2JfOV6ToJson(value: YO78L1AWrbI0PGYp): string {
        return JSON.stringify(uncast(value, r("YO78L1AWrbI0PGYp")), null, 2);
    }

    public static toRQURZa8FCeWZrCjZ(json: string): RQURZa8FCeWZrCjZ {
        return cast(JSON.parse(json), r("RQURZa8FCeWZrCjZ"));
    }

    public static rQURZa8FCeWZrCjZToJson(value: RQURZa8FCeWZrCjZ): string {
        return JSON.stringify(uncast(value, r("RQURZa8FCeWZrCjZ")), null, 2);
    }

    public static toUA0GxOZElwbGxjYf(json: string): UA0GxOZElwbGxjYf {
        return cast(JSON.parse(json), r("UA0GxOZElwbGxjYf"));
    }

    public static uA0GxOZElwbGxjYfToJson(value: UA0GxOZElwbGxjYf): string {
        return JSON.stringify(uncast(value, r("UA0GxOZElwbGxjYf")), null, 2);
    }

    public static toVs3XcYCxNLEBbF4V(json: string): Vs3XcYCxNLEBbF4V {
        return cast(JSON.parse(json), r("Vs3XcYCxNLEBbF4V"));
    }

    public static vs3XcYCxNLEBbF4VToJson(value: Vs3XcYCxNLEBbF4V): string {
        return JSON.stringify(uncast(value, r("Vs3XcYCxNLEBbF4V")), null, 2);
    }

    public static toYO78L1AWrbI0PGYp(json: string): YO78L1AWrbI0PGYp {
        return cast(JSON.parse(json), r("YO78L1AWrbI0PGYp"));
    }

    public static yO78L1AWrbI0PGYpToJson(value: YO78L1AWrbI0PGYp): string {
        return JSON.stringify(uncast(value, r("YO78L1AWrbI0PGYp")), null, 2);
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
    "YO78L1AWrbI0PGYp": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "results", js: "results", typ: a(r("The0SsWA4Q9N4AIL75YResult")) },
        { json: "formula", js: "formula", typ: "" },
        { json: "replacement", js: "replacement", typ: true },
        { json: "displayRoll", js: "displayRoll", typ: true },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The0SsWA4Q9N4AIL75YPermission") },
        { json: "flags", js: "flags", typ: r("The0SsWA4Q9N4AIL75YFlags") },
    ], false),
    "The0SsWA4Q9N4AIL75YFlags": o([
        { json: "cf", js: "cf", typ: null },
        { json: "core", js: "core", typ: r("Core") },
    ], false),
    "Core": o([
        { json: "sourceId", js: "sourceId", typ: "" },
    ], false),
    "The0SsWA4Q9N4AIL75YPermission": o([
        { json: "oVvfrcHQErm1ON0p", js: "oVvfrcHQErm1ON0p", typ: 0 },
    ], false),
    "The0SsWA4Q9N4AIL75YResult": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "flags", js: "flags", typ: r("FhuhzcREbg7GTT1KFlags") },
        { json: "type", js: "type", typ: 0 },
        { json: "text", js: "text", typ: "" },
        { json: "img", js: "img", typ: r("Img") },
        { json: "weight", js: "weight", typ: 0 },
        { json: "range", js: "range", typ: a(0) },
        { json: "drawn", js: "drawn", typ: true },
    ], false),
    "FhuhzcREbg7GTT1KFlags": o([
    ], false),
    "UA0GxOZElwbGxjYf": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "results", js: "results", typ: a(r("FhuhzcREbg7GTT1KResult")) },
        { json: "formula", js: "formula", typ: "" },
        { json: "replacement", js: "replacement", typ: true },
        { json: "displayRoll", js: "displayRoll", typ: true },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("FhuhzcREbg7GTT1KPermission") },
        { json: "flags", js: "flags", typ: r("FhuhzcREbg7GTT1KFlags") },
    ], false),
    "FhuhzcREbg7GTT1KPermission": o([
        { json: "default", js: "default", typ: 0 },
        { json: "oVvfrcHQErm1ON0p", js: "oVvfrcHQErm1ON0p", typ: 0 },
    ], false),
    "FhuhzcREbg7GTT1KResult": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "type", js: "type", typ: 0 },
        { json: "text", js: "text", typ: "" },
        { json: "img", js: "img", typ: r("Img") },
        { json: "collection", js: "collection", typ: u(undefined, u(null, "")) },
        { json: "resultId", js: "resultId", typ: u(undefined, u(null, "")) },
        { json: "weight", js: "weight", typ: 0 },
        { json: "range", js: "range", typ: a(0) },
        { json: "drawn", js: "drawn", typ: true },
        { json: "flags", js: "flags", typ: r("FhuhzcREbg7GTT1KFlags") },
        { json: "rangeL", js: "rangeL", typ: u(undefined, 0) },
        { json: "rangeH", js: "rangeH", typ: u(undefined, 0) },
    ], false),
    "ODuGlf9KYtG4Yxk2": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "img", js: "img", typ: r("Img") },
        { json: "description", js: "description", typ: "" },
        { json: "results", js: "results", typ: a(r("FhuhzcREbg7GTT1KResult")) },
        { json: "formula", js: "formula", typ: "" },
        { json: "replacement", js: "replacement", typ: true },
        { json: "displayRoll", js: "displayRoll", typ: true },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The0SsWA4Q9N4AIL75YPermission") },
        { json: "flags", js: "flags", typ: r("ODuGlf9KYtG4Yxk2Flags") },
    ], false),
    "ODuGlf9KYtG4Yxk2Flags": o([
        { json: "better-rolltables", js: "better-rolltables", typ: r("PurpleBetterRolltables") },
        { json: "cf", js: "cf", typ: null },
        { json: "core", js: "core", typ: r("Core") },
    ], false),
    "PurpleBetterRolltables": o([
        { json: "table-type", js: "table-type", typ: "" },
        { json: "table-currency-string", js: "table-currency-string", typ: "" },
        { json: "loot-amount-key", js: "loot-amount-key", typ: "" },
        { json: "loot-actor-name", js: "loot-actor-name", typ: "" },
    ], false),
    "U8POYaC6Td9YvEGv": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "img", js: "img", typ: r("Img") },
        { json: "description", js: "description", typ: "" },
        { json: "results", js: "results", typ: a(r("FhuhzcREbg7GTT1KResult")) },
        { json: "formula", js: "formula", typ: "" },
        { json: "replacement", js: "replacement", typ: true },
        { json: "displayRoll", js: "displayRoll", typ: true },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The0SsWA4Q9N4AIL75YPermission") },
        { json: "flags", js: "flags", typ: r("The0SsWA4Q9N4AIL75YFlags") },
    ], false),
    "K6Ww7VWIJq9Q0BmL": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "results", js: "results", typ: a(r("K6Ww7VWIJq9Q0BmLResult")) },
        { json: "formula", js: "formula", typ: "" },
        { json: "replacement", js: "replacement", typ: true },
        { json: "displayRoll", js: "displayRoll", typ: true },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The0SsWA4Q9N4AIL75YPermission") },
        { json: "flags", js: "flags", typ: r("ODuGlf9KYtG4Yxk2Flags") },
    ], false),
    "K6Ww7VWIJq9Q0BmLResult": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "flags", js: "flags", typ: r("PurpleFlags") },
        { json: "type", js: "type", typ: 0 },
        { json: "text", js: "text", typ: "" },
        { json: "img", js: "img", typ: r("Img") },
        { json: "weight", js: "weight", typ: 0 },
        { json: "range", js: "range", typ: a(0) },
        { json: "drawn", js: "drawn", typ: true },
        { json: "rangeL", js: "rangeL", typ: 0 },
        { json: "rangeH", js: "rangeH", typ: 0 },
        { json: "collection", js: "collection", typ: u(null, "") },
        { json: "resultId", js: "resultId", typ: u(null, "") },
    ], false),
    "PurpleFlags": o([
        { json: "better-rolltables", js: "better-rolltables", typ: u(undefined, r("FluffyBetterRolltables")) },
    ], false),
    "FluffyBetterRolltables": o([
        { json: "brt-result-formula", js: "brt-result-formula", typ: r("BrtResultFormula") },
    ], false),
    "BrtResultFormula": o([
        { json: "formula", js: "formula", typ: "" },
    ], false),
    "RQURZa8FCeWZrCjZ": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "results", js: "results", typ: a(r("FhuhzcREbg7GTT1KResult")) },
        { json: "formula", js: "formula", typ: "" },
        { json: "replacement", js: "replacement", typ: true },
        { json: "displayRoll", js: "displayRoll", typ: true },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The0SsWA4Q9N4AIL75YPermission") },
        { json: "flags", js: "flags", typ: r("RQURZa8FCeWZrCjZFlags") },
    ], false),
    "RQURZa8FCeWZrCjZFlags": o([
        { json: "journal-links", js: "journal-links", typ: r("JournalLinks") },
        { json: "cf", js: "cf", typ: null },
        { json: "core", js: "core", typ: r("Core") },
    ], false),
    "JournalLinks": o([
        { json: "referencedBy", js: "referencedBy", typ: r("ReferencedBy") },
    ], false),
    "ReferencedBy": o([
        { json: "JournalEntry", js: "JournalEntry", typ: a("") },
    ], false),
    "Vs3XcYCxNLEBbF4V": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "img", js: "img", typ: r("Img") },
        { json: "description", js: "description", typ: "" },
        { json: "results", js: "results", typ: a(r("K6Ww7VWIJq9Q0BmLResult")) },
        { json: "formula", js: "formula", typ: "" },
        { json: "replacement", js: "replacement", typ: true },
        { json: "displayRoll", js: "displayRoll", typ: true },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The0SsWA4Q9N4AIL75YPermission") },
        { json: "flags", js: "flags", typ: r("ODuGlf9KYtG4Yxk2Flags") },
    ], false),
    "Img": [
        "icons/svg/d20-black.svg",
        "icons/svg/d20-grey.svg",
    ],
};
