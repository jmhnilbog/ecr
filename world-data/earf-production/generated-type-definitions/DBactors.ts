// To parse this data:
//
//   import { Convert, The1X4Q0C9ZwrM3VjZl, The5BmlHKMGzxICGRZp, The74WAVDTssh4Wnov9, The7XE9Evf2KG85QxEw, A1Qez7JD6Vy1MrOO, AlFyYgeIWH8JB6Wi, CboJqy8BllPEdTQD, FQFMMXNwe5ORDVkx, FTz7F4OKXgFGgbbz, Gkf07Q8Arkhdtd8N, HBuv47TGK1DHYZ6I, Ka9XBKR0HEwWkMCT, L297NgtDAgGNc6Og, LZwSMvDFqse10X3H, M52CMS3FophPIPGw, MpR4ClJVuZzITfUy, RzCO3DVrmFLwg5Ye, V5Mz2SWYOGveX2DI, Wx7Tu49JRg99TjgZ, ZumJ7Pxm6HFfC8Wh, CMHK1DGWgwzAPHyx, DFDNBDueDBXV4Jho, DqngE4C3U65Nwj9O, FD7YLLZnmAFXZLvs, FasTJNaw9BURePRY, QAfhPxxtDQi5UlpY, SRiWhVrxtvAc8NXm, Shkc1RW0NcMg2YgG, Sw1P5DG1WvZdt7Dj, UgYS0IqeRvhgMvVZ, VUwktKEPBTR8MdPE, VwOLffqYjKtbQEYR, WajWoSw7QmERBT9E } from "./file";
//
//   const the1X4Q0C9ZwrM3VjZl = Convert.toThe1X4Q0C9ZwrM3VjZl(json);
//   const the5BmlHKMGzxICGRZp = Convert.toThe5BmlHKMGzxICGRZp(json);
//   const the74WAVDTssh4Wnov9 = Convert.toThe74WAVDTssh4Wnov9(json);
//   const the7XE9Evf2KG85QxEw = Convert.toThe7XE9Evf2KG85QxEw(json);
//   const a1Qez7JD6Vy1MrOO = Convert.toA1Qez7JD6Vy1MrOO(json);
//   const alFyYgeIWH8JB6Wi = Convert.toAlFyYgeIWH8JB6Wi(json);
//   const cboJqy8BllPEdTQD = Convert.toCboJqy8BllPEdTQD(json);
//   const fQFMMXNwe5ORDVkx = Convert.toFQFMMXNwe5ORDVkx(json);
//   const fTz7F4OKXgFGgbbz = Convert.toFTz7F4OKXgFGgbbz(json);
//   const gkf07Q8Arkhdtd8N = Convert.toGkf07Q8Arkhdtd8N(json);
//   const hBuv47TGK1DHYZ6I = Convert.toHBuv47TGK1DHYZ6I(json);
//   const ka9XBKR0HEwWkMCT = Convert.toKa9XBKR0HEwWkMCT(json);
//   const l297NgtDAgGNc6Og = Convert.toL297NgtDAgGNc6Og(json);
//   const lZwSMvDFqse10X3H = Convert.toLZwSMvDFqse10X3H(json);
//   const m52CMS3FophPIPGw = Convert.toM52CMS3FophPIPGw(json);
//   const mpR4ClJVuZzITfUy = Convert.toMpR4ClJVuZzITfUy(json);
//   const rzCO3DVrmFLwg5Ye = Convert.toRzCO3DVrmFLwg5Ye(json);
//   const v5Mz2SWYOGveX2DI = Convert.toV5Mz2SWYOGveX2DI(json);
//   const wx7Tu49JRg99TjgZ = Convert.toWx7Tu49JRg99TjgZ(json);
//   const zumJ7Pxm6HFfC8Wh = Convert.toZumJ7Pxm6HFfC8Wh(json);
//   const cMHK1DGWgwzAPHyx = Convert.toCMHK1DGWgwzAPHyx(json);
//   const dFDNBDueDBXV4Jho = Convert.toDFDNBDueDBXV4Jho(json);
//   const dqngE4C3U65Nwj9O = Convert.toDqngE4C3U65Nwj9O(json);
//   const fD7YLLZnmAFXZLvs = Convert.toFD7YLLZnmAFXZLvs(json);
//   const fasTJNaw9BURePRY = Convert.toFasTJNaw9BURePRY(json);
//   const qAfhPxxtDQi5UlpY = Convert.toQAfhPxxtDQi5UlpY(json);
//   const sRiWhVrxtvAc8NXm = Convert.toSRiWhVrxtvAc8NXm(json);
//   const shkc1RW0NcMg2YgG = Convert.toShkc1RW0NcMg2YgG(json);
//   const sw1P5DG1WvZdt7Dj = Convert.toSw1P5DG1WvZdt7Dj(json);
//   const ugYS0IqeRvhgMvVZ = Convert.toUgYS0IqeRvhgMvVZ(json);
//   const vUwktKEPBTR8MdPE = Convert.toVUwktKEPBTR8MdPE(json);
//   const vwOLffqYjKtbQEYR = Convert.toVwOLffqYjKtbQEYR(json);
//   const wajWoSw7QmERBT9E = Convert.toWajWoSw7QmERBT9E(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface The1X4Q0C9ZwrM3VjZl {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      The1X4Q0C9ZwrM3VjZlToken;
    items:      any[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The1X4Q0C9ZwrM3VjZlPermission;
    flags:      ActorDataClass;
}

export interface The1X4Q0C9ZwrM3VjZlData {
    abilities:  Abilities;
    attributes: PurpleAttributes;
    details:    PurpleDetails;
    saves:      Saves;
    currency:   Currency;
    config:     PurpleConfig;
    class:      PurpleClass;
}

export interface Abilities {
    str: Agl;
    agl: Agl;
    sta: Agl;
    per: Agl;
    int: Agl;
    lck: Agl;
}

export interface Agl {
    label: AglLabel;
    value: number;
    max:   number;
}

export enum AglLabel {
    DCCAbilityAgl = "DCC.AbilityAgl",
    DCCAbilityInt = "DCC.AbilityInt",
    DCCAbilityLck = "DCC.AbilityLck",
    DCCAbilityPer = "DCC.AbilityPer",
    DCCAbilitySta = "DCC.AbilitySta",
    DCCAbilityStr = "DCC.AbilityStr",
}

export interface PurpleAttributes {
    ac:         PurpleAC;
    actionDice: ActionDiceClass;
    critical:   Critical;
    fumble:     Fumble;
    hitDice:    HitDice;
    hp:         PurpleHP;
    init:       Init;
    speed:      Speed;
    special:    HitDice;
}

export interface PurpleAC {
    value:        number;
    checkPenalty: number;
    speedPenalty: number;
    fumbleDie?:   FumbleDieEnum;
}

export enum FumbleDieEnum {
    The1D4 = "1d4",
}

export interface ActionDiceClass {
    value:   ValueElement;
    options: ValueElement[];
}

export enum ValueElement {
    The1D16 = "1d16",
    The1D20 = "1d20",
}

export interface Critical {
    die:   FumbleDieEnum;
    table: Table;
}

export enum Table {
    I = "I",
    M = "M",
}

export interface Fumble {
    die: FumbleDieEnum;
}

export interface HitDice {
    value: string;
}

export interface PurpleHP {
    value:   number | null;
    min:     number;
    max:     number | null;
    temp:    number;
    tempmax: number;
}

export interface Init {
    die:   ValueElement;
    value: number;
}

export interface Speed {
    value:   string;
    base:    number;
    special: string;
    other?:  Other;
}

export enum Other {
    Climb5 = "Climb 5'",
    Creep1Hr = "Creep 1'/hr",
    Empty = "",
    Fly30 = "Fly 30'",
}

export interface PurpleClass {
    spellCheck:        number;
    spellCheckAbility: Ability;
}

export enum Ability {
    Agl = "agl",
    Int = "int",
    Per = "per",
    Str = "str",
}

export interface PurpleConfig {
    attackBonusMode:     AttackBonusMode;
    actionDice:          ActionDiceEnum;
    capLevel:            boolean;
    maxLevel:            number;
    rollAttackBonus:     boolean;
    computeAC:           boolean;
    baseACAbility:       Ability;
    computeSpeed:        boolean;
    computeCheckPenalty: boolean;
    sortInventory:       boolean;
    removeEmptyItems:    boolean;
    showSpells:          boolean;
    showSkills:          boolean;
    showMaxAbilities:    boolean;
    showBackstab:        boolean;
}

export enum ActionDiceEnum {
    The1D20 = "1d20",
    The2D16 = "2d16",
    The2D20 = "2d20",
    The6D20 = "6d20",
}

export enum AttackBonusMode {
    Flat = "flat",
}

export interface Currency {
    pp: string;
    ep: string;
    gp: string;
    sp: string;
    cp: string;
}

export interface PurpleDetails {
    level:       Level;
    alignment:   Alignment;
    attackBonus: string;
    languages:   string;
    occupation:  string;
    title:       string;
    notes:       HitDice;
}

export enum Alignment {
    C = "c",
    L = "l",
    N = "n",
}

export interface Level {
    value: number;
}

export interface Saves {
    frt: Frt;
    ref: Frt;
    wil: Frt;
}

export interface Frt {
    label: FrtLabel;
    value: number;
}

export enum FrtLabel {
    DCCSavesFortitude = "DCC.SavesFortitude",
    DCCSavesReflex = "DCC.SavesReflex",
    DCCSavesWill = "DCC.SavesWill",
}

export interface ActorDataClass {
}

export interface The1X4Q0C9ZwrM3VjZlPermission {
    default:           number;
    oVvfrcHQErm1ON0p?: number;
}

export interface The1X4Q0C9ZwrM3VjZlToken {
    _id:          ID;
    name:         string;
    displayName:  number;
    actorId:      string;
    actorLink:    boolean;
    actorData:    PurpleActorData;
    img:          string;
    tint:         null;
    width:        number;
    height:       number;
    scale:        number;
    mirrorX:      boolean;
    mirrorY:      boolean;
    x:            null;
    y:            null;
    elevation:    number;
    lockRotation: boolean;
    rotation:     number;
    effects:      any[];
    alpha:        number;
    hidden:       boolean;
    vision:       boolean;
    dimSight:     number;
    brightSight:  number;
    sightAngle:   number;
    light:        Light;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        PurpleFlags;
    tokenId:      null;
    randomImg:    boolean;
}

export enum ID {
    RDNsjFt79DL8Iz6V = "rDNsjFt79DL8Iz6V",
    The9EiY8ViFhUArGuLw = "9EiY8ViFhUArGuLw",
}

export interface PurpleActorData {
    data: PurpleData;
}

export interface PurpleData {
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    hp: FluffyHP;
}

export interface FluffyHP {
    value: number;
    max:   number;
}

export interface Bar {
    attribute: Attribute | null;
}

export enum Attribute {
    AbilitiesLckValue = "abilities.lck.value",
    AttributesACValue = "attributes.ac.value",
    AttributesHP = "attributes.hp",
    Empty = "",
}

export interface PurpleFlags {
    "token-attacher":       PurpleTokenAttacher;
    "monks-little-details": MonksLittleDetails;
}

export interface MonksLittleDetails {
    "token-highlight":   string;
    "bloodsplat-colour": BloodsplatColour;
}

export enum BloodsplatColour {
    C20000 = "#c20000",
    Ca0707 = "#ca0707",
    Empty = "",
}

export interface PurpleTokenAttacher {
    pos:               Pos;
    prototypeAttached: PurplePrototypeAttached;
    grid:              Grid;
}

export interface Grid {
    size: number;
    w:    number;
    h:    number;
}

export interface Pos {
    base_id:   string;
    xy:        Center;
    center:    Center;
    rotation:  number;
    hidden:    boolean;
    elevation: number;
}

export interface Center {
    x: number;
    y: number;
}

export interface PurplePrototypeAttached {
    Wall: PurpleWall[];
}

export interface PurpleWall {
    c:     number[];
    light: number;
    move:  number;
    sight: number;
    sound: number;
    dir:   number;
    door:  number;
    ds:    number;
    flags: FluffyFlags;
}

export interface FluffyFlags {
    "token-attacher": FluffyTokenAttacher;
}

export interface FluffyTokenAttacher {
    parent: ID;
    offset: PurpleOffset;
}

export interface PurpleOffset {
    x:         number;
    y:         number;
    rot:       number;
    centerX:   number;
    centerY:   number;
    offRot:    number;
    c:         number[];
    size:      PurpleSize;
    elevation: Elevation;
}

export interface Elevation {
    flags: ActorDataClass;
}

export interface PurpleSize {
    widthBase:  number;
    heightBase: number;
}

export interface Light {
    alpha:      number;
    angle:      number;
    bright:     number | number;
    color?:     null | string;
    coloration: number;
    dim:        number;
    gradual:    boolean;
    luminosity: number;
    saturation: number | number;
    contrast:   number | number;
    shadows:    number | number;
    animation:  Animation;
    darkness:   Darkness;
}

export interface Animation {
    speed:     number;
    intensity: number;
    reverse:   boolean;
    type?:     string;
}

export interface Darkness {
    min: number;
    max: number;
}

export interface FasTJNaw9BURePRY {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      The5BmlHKMGzxICGRZpToken;
    items:      The5BmlHKMGzxICGRZpItem[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The1X4Q0C9ZwrM3VjZlPermission;
    flags:      ActorDataClass;
}

export interface The5BmlHKMGzxICGRZpItem {
    name:       string;
    type:       Type;
    img:        string;
    data:       FluffyData;
    _id:        string;
    effects:    any[];
    folder:     null;
    sort:       number;
    permission: PurplePermission;
    flags:      ActorDataClass;
}

export interface FluffyData {
    description:         PurpleDescription;
    source:              string;
    quantity?:           number;
    weight:              number | null;
    equipped?:           boolean;
    identified?:         boolean;
    value:               Currency;
    config?:             FluffyConfig;
    actionDie?:          ValueElement;
    toHit?:              string;
    damage?:             string;
    range?:              Range;
    twoHanded?:          boolean;
    melee?:              boolean;
    shortRangeStrength?: number;
    subdual?:            number;
    backstab?:           boolean;
    backstabDamage?:     null;
    doubleIfMounted?:    number;
    critRange?:          number;
    isCoins?:            boolean;
}

export interface FluffyConfig {
    inheritActionDie: boolean;
    inheritCritRange: boolean;
}

export interface PurpleDescription {
    value:        string;
    chat:         string;
    unidentified: string;
    summary:      string;
}

export enum Range {
    Empty = "",
    SetsOnFire = "sets on fire",
}

export interface PurplePermission {
    default: number;
}

export enum Type {
    Equipment = "equipment",
    Weapon = "weapon",
}

export interface The5BmlHKMGzxICGRZpToken {
    name:         string;
    img:          string;
    displayName:  number;
    actorLink:    boolean;
    width:        number;
    height:       number;
    scale:        number;
    mirrorX:      boolean;
    mirrorY:      boolean;
    lockRotation: boolean;
    rotation:     number;
    alpha:        number;
    vision:       boolean;
    dimSight:     number;
    brightSight:  number;
    sightAngle:   number;
    light:        Light;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        TentacledFlags;
    randomImg:    boolean;
    tint:         null | string;
    x:            null;
    y:            null;
    elevation:    null;
}

export interface TentacledFlags {
    "monks-little-details": MonksLittleDetails;
}

export interface The74WAVDTssh4Wnov9 {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The74WAVDTssh4Wnov9Data;
    token:      The74WAVDTssh4Wnov9Token;
    items:      any[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The74WAVDTssh4Wnov9Permission;
    flags:      The74WAVDTssh4Wnov9Flags;
}

export interface The74WAVDTssh4Wnov9Data {
    abilities:  Abilities;
    attributes: PurpleAttributes;
    details:    FluffyDetails;
    saves:      Saves;
    currency:   Currency;
    config:     PurpleConfig;
    class:      PurpleClass;
}

export interface FluffyDetails {
    level:       Level;
    alignment:   Alignment;
    attackBonus: string;
    languages:   string;
    occupation:  string;
    title:       string;
    notes:       string;
}

export interface The74WAVDTssh4Wnov9Flags {
    core: PurpleCore;
    cf?:  CF | null;
}

export interface CF {
    id:    string;
    color: string;
}

export interface PurpleCore {
    sourceId: string;
}

export interface The74WAVDTssh4Wnov9Permission {
    oVvfrcHQErm1ON0p: number;
}

export interface The74WAVDTssh4Wnov9Token {
    _id:          string;
    name:         string;
    displayName:  number;
    actorId:      string;
    actorLink:    boolean;
    actorData:    FluffyActorData;
    img:          string;
    tint:         null;
    width:        number;
    height:       number;
    scale:        number;
    mirrorX:      boolean;
    mirrorY:      boolean;
    x:            null;
    y:            null;
    elevation:    null;
    lockRotation: boolean;
    rotation:     number;
    effects:      any[];
    alpha:        number;
    hidden:       boolean;
    vision:       boolean;
    dimSight:     number;
    brightSight:  number;
    sightAngle:   number;
    light:        Light;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        StickyFlags;
    tokenId:      null;
    randomImg:    boolean;
}

export interface FluffyActorData {
    name: string;
}

export interface StickyFlags {
    "token-independence": TokenIndependence;
    "token-attacher":     TentacledTokenAttacher;
}

export interface TentacledTokenAttacher {
    pos:               Pos;
    prototypeAttached: FluffyPrototypeAttached;
    grid:              Grid;
}

export interface FluffyPrototypeAttached {
    AmbientLight: PurpleAmbientLight[];
}

export interface PurpleAmbientLight {
    x:        number;
    y:        number;
    rotation: number;
    walls:    boolean;
    vision:   boolean;
    config:   Light;
    hidden:   boolean;
    flags:    IndigoFlags;
}

export interface IndigoFlags {
    "token-attacher": StickyTokenAttacher;
}

export interface StickyTokenAttacher {
    parent: string;
    offset: FluffyOffset;
}

export interface FluffyOffset {
    x:         number;
    y:         number;
    rot:       number;
    centerX:   number;
    centerY:   number;
    offRot:    number;
    size:      FluffySize;
    elevation: Elevation;
}

export interface FluffySize {
    config:     SizeConfig;
    widthBase:  number;
    heightBase: number;
}

export interface SizeConfig {
    dim:    number;
    bright: number;
}

export interface TokenIndependence {
    ActorName: string;
}

export interface WajWoSw7QmERBT9E {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      The7XE9Evf2KG85QxEwToken;
    items:      The7XE9Evf2KG85QxEwItem[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The1X4Q0C9ZwrM3VjZlPermission;
    flags:      ActorDataClass;
}

export interface The7XE9Evf2KG85QxEwItem {
    name:       string;
    type:       Type;
    img:        Img;
    data:       TentacledData;
    _id:        string;
    effects:    any[];
    folder:     null;
    sort:       number;
    permission: PurplePermission;
    flags:      ActorDataClass;
}

export interface TentacledData {
    description:        PurpleDescription;
    source:             string;
    quantity:           number;
    weight:             number;
    equipped:           boolean;
    identified:         boolean;
    value:              ValueClass;
    config:             FluffyConfig;
    actionDie:          ValueElement;
    toHit:              string;
    damage:             string;
    range:              string;
    twoHanded:          boolean;
    melee:              boolean;
    shortRangeStrength: number;
    subdual:            number;
    backstab:           boolean;
    backstabDamage:     null;
    doubleIfMounted:    number;
    critRange:          number;
}

export interface ValueClass {
    pp: number;
    ep: number;
    gp: number;
    sp: number;
    cp: number;
}

export enum Img {
    SystemsDCCStylesImagesItemWebp = "systems/dcc/styles/images/item.webp",
    SystemsDCCStylesImagesWeaponWebp = "systems/dcc/styles/images/weapon.webp",
}

export interface The7XE9Evf2KG85QxEwToken {
    name:         string;
    img:          string;
    displayName:  number;
    actorLink:    boolean;
    width:        number;
    height:       number;
    scale:        number;
    mirrorX:      boolean;
    mirrorY:      boolean;
    lockRotation: boolean;
    rotation:     number;
    alpha:        number;
    vision:       boolean;
    dimSight:     number;
    brightSight:  number;
    sightAngle:   number;
    light:        Light;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        ActorDataClass;
    randomImg:    boolean;
}

export interface A1Qez7JD6Vy1MrOO {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      A1Qez7JD6Vy1MrOOToken;
    items:      any[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The1X4Q0C9ZwrM3VjZlPermission;
    flags:      ActorDataClass;
}

export interface A1Qez7JD6Vy1MrOOToken {
    _id:          string;
    name:         string;
    displayName:  number;
    actorId:      string;
    actorLink:    boolean;
    actorData:    TentacledActorData;
    img:          string;
    tint:         null;
    width:        number;
    height:       number;
    scale:        number;
    mirrorX:      boolean;
    mirrorY:      boolean;
    x:            null;
    y:            null;
    elevation:    number;
    lockRotation: boolean;
    rotation:     number;
    effects:      any[];
    alpha:        number;
    hidden:       boolean;
    vision:       boolean;
    dimSight:     number;
    brightSight:  number;
    sightAngle:   number;
    light:        Light;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        IndecentFlags;
    tokenId:      null;
    randomImg:    boolean;
}

export interface TentacledActorData {
    data: StickyData;
}

export interface StickyData {
    attributes: FluffyAttributes;
    details:    TentacledDetails;
}

export interface TentacledDetails {
    notes: HitDice;
}

export interface IndecentFlags {
    "token-independence":   TokenIndependence;
    "token-attacher":       IndigoTokenAttacher;
    "monks-little-details": MonksLittleDetails;
}

export interface IndigoTokenAttacher {
    pos:               Pos;
    prototypeAttached: TentacledPrototypeAttached;
    grid:              Grid;
}

export interface TentacledPrototypeAttached {
    Tile: PurpleTile[];
}

export interface PurpleTile {
    img:       string;
    width:     number;
    height:    number;
    x:         number;
    y:         number;
    z:         number;
    rotation:  number;
    alpha:     number;
    hidden:    boolean;
    locked:    boolean;
    overhead:  boolean;
    occlusion: Occlusion;
    video:     Video;
    flags:     HilariousFlags;
}

export interface HilariousFlags {
    "token-attacher": IndecentTokenAttacher;
}

export interface IndecentTokenAttacher {
    parent: string;
    offset: TentacledOffset;
}

export interface TentacledOffset {
    x:         number;
    y:         number;
    rot:       number;
    centerX:   number;
    centerY:   number;
    offRot:    number;
    size:      TentacledSize;
    elevation: Elevation;
    points?:   any[];
}

export interface TentacledSize {
    width:      number;
    height:     number;
    widthBase:  number;
    heightBase: number;
}

export interface Occlusion {
    mode:  number;
    alpha: number;
}

export interface Video {
    loop:     boolean;
    autoplay: boolean;
    volume:   number;
}

export interface AlFyYgeIWH8JB6Wi {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      AlFyYgeIWH8JB6WiToken;
    items:      any[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The1X4Q0C9ZwrM3VjZlPermission;
    flags:      AlFyYgeIWH8JB6WiFlags;
}

export interface AlFyYgeIWH8JB6WiFlags {
    core: PurpleCore;
}

export interface AlFyYgeIWH8JB6WiToken {
    _id:          string;
    name:         string;
    displayName:  number;
    actorId:      string;
    actorLink:    boolean;
    actorData:    TentacledActorData;
    img:          string;
    tint:         null;
    width:        number;
    height:       number;
    scale:        number;
    mirrorX:      boolean;
    mirrorY:      boolean;
    x:            null;
    y:            null;
    elevation:    number;
    lockRotation: boolean;
    rotation:     number;
    effects:      any[];
    alpha:        number;
    hidden:       boolean;
    vision:       boolean;
    dimSight:     number;
    brightSight:  number;
    sightAngle:   number;
    light:        Light;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        AmbitiousFlags;
    tokenId:      null;
    randomImg:    boolean;
}

export interface AmbitiousFlags {
    "token-independence":   TokenIndependence;
    "token-attacher":       HilariousTokenAttacher;
    "monks-little-details": MonksLittleDetails;
}

export interface HilariousTokenAttacher {
    pos:               Pos;
    prototypeAttached: StickyPrototypeAttached;
    grid:              Grid;
}

export interface StickyPrototypeAttached {
    AmbientLight: PurpleAmbientLight[];
    Tile:         PurpleTile[];
}

export interface VwOLffqYjKtbQEYR {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       CboJqy8BllPEdTQDData;
    token:      The7XE9Evf2KG85QxEwToken;
    items:      CboJqy8BllPEdTQDItem[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: { [key: string]: number };
    flags:      ActorDataClass;
}

export interface CboJqy8BllPEdTQDData {
    abilities:  Abilities;
    attributes: TentacledAttributes;
    details:    StickyDetails;
    saves:      Saves;
    currency:   Currency;
    config:     PurpleConfig;
    skills:     PurpleSkills;
    inventory:  Inventory;
    class:      FluffyClass;
}

export interface TentacledAttributes {
    ac:         FluffyAC;
    actionDice: ActionDiceClass;
    critical:   Critical;
    fumble:     Fumble;
    hitDice:    HitDice;
    hp:         PurpleHP;
    init:       Init;
    speed:      Speed;
}

export interface FluffyAC {
    value:        string;
    checkPenalty: number;
    speedPenalty: number;
}

export interface FluffyClass {
    spellCheck:        number;
    spellCheckAbility: Ability;
    deity:             null;
    disapproval:       string;
    disapprovalTable:  string;
    luckDie:           string;
    backstab:          string;
    luckyWeapon:       null;
    patron:            null;
    familiar:          null;
    corruption:        any[];
    className:         string;
}

export interface StickyDetails {
    level:       Level;
    alignment:   Alignment;
    attackBonus: string;
    languages:   string;
    occupation:  HitDice;
    title:       string;
    notes:       HitDice;
    birthAugur:  string;
    critRange:   number;
    xp:          XP;
    sheetClass:  string;
}

export interface XP {
    value: number;
    min:   number;
    max:   number;
}

export interface Inventory {
    weapons:    any[];
    ammunition: any[];
    armor:      any[];
    equipment:  any[];
    mount:      any[];
}

export interface PurpleSkills {
    findSecretDoors:     DivineAid;
    divineAid:           DivineAid;
    turnUnholy:          DivineAid;
    layOnHands:          DivineAid;
    sneakSilently:       CastSpellFromScroll;
    hideInShadows:       CastSpellFromScroll;
    pickPockets:         CastSpellFromScroll;
    climbSheerSurfaces:  CastSpellFromScroll;
    pickLock:            CastSpellFromScroll;
    findTrap:            CastSpellFromScroll;
    disableTrap:         CastSpellFromScroll;
    forgeDocument:       CastSpellFromScroll;
    disguiseSelf:        CastSpellFromScroll;
    readLanguages:       CastSpellFromScroll;
    handlePoison:        HandlePoison;
    castSpellFromScroll: CastSpellFromScroll;
    sneakAndHide:        HandlePoison;
    shieldBash:          CastSpellFromScroll;
}

export interface CastSpellFromScroll {
    label:                string;
    ability:              Ability;
    die?:                 CastSpellFromScrollDie;
    value:                string;
    useDeed?:             boolean;
    useDisapprovalRange?: boolean;
}

export enum CastSpellFromScrollDie {
    The1D10 = "1d10",
    The1D14 = "1d14",
}

export interface DivineAid {
    label:                string;
    ability:              Ability;
    value:                number;
    useDisapprovalRange?: boolean;
}

export interface HandlePoison {
    label: HandlePoisonLabel;
    value: string;
}

export enum HandlePoisonLabel {
    DCCHandlePoison = "DCC.HandlePoison",
    DCCSneakAndHide = "DCC.SneakAndHide",
}

export interface CboJqy8BllPEdTQDItem {
    name:       string;
    type:       Type;
    img:        Img;
    data:       IndigoData;
    _id:        string;
    effects:    any[];
    folder:     null;
    sort:       number;
    permission: PurplePermission;
    flags:      ActorDataClass;
}

export interface IndigoData {
    description:         PurpleDescription;
    source:              string;
    quantity:            number;
    weight:              number;
    equipped:            boolean;
    identified:          boolean;
    value:               ValueClass;
    config?:             FluffyConfig;
    actionDie?:          ValueElement;
    toHit?:              string;
    damage?:             string;
    range?:              string;
    twoHanded?:          number;
    melee?:              boolean;
    shortRangeStrength?: number;
    subdual?:            number;
    backstab?:           boolean;
    backstabDamage?:     null;
    doubleIfMounted?:    number;
    critRange?:          number;
}

export interface UgYS0IqeRvhgMvVZ {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      The5BmlHKMGzxICGRZpToken;
    items:      FQFMMXNwe5ORDVkxItem[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The1X4Q0C9ZwrM3VjZlPermission;
    flags:      ActorDataClass;
}

export interface FQFMMXNwe5ORDVkxItem {
    _id:        string;
    name:       string;
    type:       Type;
    img:        string;
    data:       FluffyData;
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The1X4Q0C9ZwrM3VjZlPermission;
    flags:      AlFyYgeIWH8JB6WiFlags;
}

export interface FTz7F4OKXgFGgbbz {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The74WAVDTssh4Wnov9Data;
    token:      FTz7F4OKXgFGgbbzToken;
    items:      any[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The74WAVDTssh4Wnov9Permission;
    flags:      The74WAVDTssh4Wnov9Flags;
}

export interface FTz7F4OKXgFGgbbzToken {
    _id:          string;
    name:         string;
    displayName:  number;
    actorId:      string;
    actorLink:    boolean;
    actorData:    ActorDataClass;
    img:          string;
    tint:         null;
    width:        number;
    height:       number;
    scale:        number;
    mirrorX:      boolean;
    mirrorY:      boolean;
    x:            null;
    y:            null;
    elevation:    number;
    lockRotation: boolean;
    rotation:     number;
    effects:      any[];
    alpha:        number;
    hidden:       boolean;
    vision:       boolean;
    dimSight:     number;
    brightSight:  number;
    sightAngle:   number;
    light:        Light;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        StickyFlags;
    tokenId:      null;
    randomImg:    boolean;
}

export interface FD7YLLZnmAFXZLvs {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      Gkf07Q8Arkhdtd8NToken;
    items:      any[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The1X4Q0C9ZwrM3VjZlPermission;
    flags:      ActorDataClass;
}

export interface Gkf07Q8Arkhdtd8NToken {
    _id:          string;
    name:         string;
    displayName:  number;
    actorId:      string;
    actorLink:    boolean;
    actorData:    ActorDataClass;
    img:          string;
    tint:         null;
    width:        number;
    height:       number;
    scale:        number;
    mirrorX:      boolean;
    mirrorY:      boolean;
    x:            null;
    y:            null;
    elevation:    number;
    lockRotation: boolean;
    rotation:     number;
    effects:      any[];
    alpha:        number;
    hidden:       boolean;
    vision:       boolean;
    dimSight:     number;
    brightSight:  number;
    sightAngle:   number;
    light:        Light;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        CunningFlags;
    tokenId:      null;
    randomImg:    boolean;
}

export interface CunningFlags {
    "monks-little-details": MonksLittleDetails;
    "token-attacher":       AmbitiousTokenAttacher;
}

export interface AmbitiousTokenAttacher {
    pos: Pos;
}

export interface Ka9XBKR0HEwWkMCT {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      The7XE9Evf2KG85QxEwToken;
    items:      Ka9XBKR0HEwWkMCTItem[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The1X4Q0C9ZwrM3VjZlPermission;
    flags:      ActorDataClass;
}

export interface Ka9XBKR0HEwWkMCTItem {
    name:       string;
    type:       Type;
    img:        string;
    data:       FluffyData;
    _id:        string;
    effects:    any[];
    folder:     null;
    sort:       number;
    permission: The1X4Q0C9ZwrM3VjZlPermission;
    flags:      ActorDataClass;
}

export interface DqngE4C3U65Nwj9O {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The74WAVDTssh4Wnov9Data;
    token:      L297NgtDAgGNc6OgToken;
    items:      any[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The74WAVDTssh4Wnov9Permission;
    flags:      The74WAVDTssh4Wnov9Flags;
}

export interface L297NgtDAgGNc6OgToken {
    _id:          string;
    name:         string;
    displayName:  number;
    actorId:      string;
    actorLink:    boolean;
    actorData:    ActorDataClass;
    img:          string;
    tint:         null;
    width:        number;
    height:       number;
    scale:        number;
    mirrorX:      boolean;
    mirrorY:      boolean;
    x:            null;
    y:            null;
    elevation:    null;
    lockRotation: boolean;
    rotation:     number;
    effects:      any[];
    alpha:        number;
    hidden:       boolean;
    vision:       boolean;
    dimSight:     number;
    brightSight:  number;
    sightAngle:   number;
    light:        Light;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        MagentaFlags;
    tokenId:      null;
    randomImg:    boolean;
}

export interface MagentaFlags {
    "token-independence": TokenIndependence;
    "token-attacher":     AmbitiousTokenAttacher;
}

export interface LZwSMvDFqse10X3H {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      L297NgtDAgGNc6OgToken;
    items:      any[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The74WAVDTssh4Wnov9Permission;
    flags:      The74WAVDTssh4Wnov9Flags;
}

export interface MpR4ClJVuZzITfUy {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      MpR4ClJVuZzITfUyToken;
    items:      any[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The1X4Q0C9ZwrM3VjZlPermission;
    flags:      ActorDataClass;
}

export interface MpR4ClJVuZzITfUyToken {
    _id:          string;
    name:         string;
    displayName:  number;
    actorId:      string;
    actorLink:    boolean;
    actorData:    ActorDataClass;
    img:          string;
    tint:         null;
    width:        number;
    height:       number;
    scale:        number;
    mirrorX:      boolean;
    mirrorY:      boolean;
    x:            null;
    y:            null;
    elevation:    number;
    lockRotation: boolean;
    rotation:     number;
    effects:      any[];
    alpha:        number;
    hidden:       boolean;
    vision:       boolean;
    dimSight:     number;
    brightSight:  number;
    sightAngle:   number;
    light:        Light;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        FriskyFlags;
    tokenId:      null;
    randomImg:    boolean;
}

export interface FriskyFlags {
    "monks-little-details": MonksLittleDetails;
    "token-attacher":       CunningTokenAttacher;
}

export interface CunningTokenAttacher {
    pos:               Pos;
    prototypeAttached: IndigoPrototypeAttached;
    grid:              Grid;
}

export interface IndigoPrototypeAttached {
    AmbientLight: FluffyAmbientLight[];
}

export interface FluffyAmbientLight {
    x:        number;
    y:        number;
    rotation: number;
    walls:    boolean;
    vision:   boolean;
    config:   Light;
    hidden:   boolean;
    flags:    MischievousFlags;
}

export interface MischievousFlags {
    lightmask:        Lightmask;
    "token-attacher": StickyTokenAttacher;
}

export interface Lightmask {
    shape:         string;
    customWallIDs: null;
    relative:      boolean;
    customEdges:   any[];
}

export interface V5Mz2SWYOGveX2DI {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      V5Mz2SWYOGveX2DIToken;
    items:      any[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The1X4Q0C9ZwrM3VjZlPermission;
    flags:      ActorDataClass;
}

export interface V5Mz2SWYOGveX2DIToken {
    _id:          ID;
    name:         string;
    displayName:  number;
    actorId:      string;
    actorLink:    boolean;
    actorData:    PurpleActorData;
    img:          string;
    tint:         null;
    width:        number;
    height:       number;
    scale:        number;
    mirrorX:      boolean;
    mirrorY:      boolean;
    x:            null;
    y:            null;
    elevation:    number;
    lockRotation: boolean;
    rotation:     number;
    effects:      any[];
    alpha:        number;
    hidden:       boolean;
    vision:       boolean;
    dimSight:     number;
    brightSight:  number;
    sightAngle:   number;
    light:        Light;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        BraggadociousFlags;
    tokenId:      null;
    randomImg:    boolean;
}

export interface BraggadociousFlags {
    "monks-little-details": MonksLittleDetails;
    "token-attacher":       MagentaTokenAttacher;
}

export interface MagentaTokenAttacher {
    pos:               Pos;
    prototypeAttached: IndecentPrototypeAttached;
    grid:              Grid;
}

export interface IndecentPrototypeAttached {
    Tile: FluffyTile[];
    Wall: PurpleWall[];
}

export interface FluffyTile {
    img:       string;
    width:     number;
    height:    number;
    x:         number;
    y:         number;
    z:         number;
    rotation:  number;
    alpha:     number;
    tint:      string;
    hidden:    boolean;
    locked:    boolean;
    overhead:  boolean;
    occlusion: Occlusion;
    video:     Video;
    flags:     Flags1;
}

export interface Flags1 {
    "monks-active-tiles": MonksActiveTiles;
    "token-attacher":     IndecentTokenAttacher;
}

export interface MonksActiveTiles {
    active:      boolean;
    restriction: string;
    controlled:  string;
    trigger:     string;
    pertoken:    boolean;
    minrequired: number;
    chance:      number;
    actions:     any[];
}

export interface ZumJ7Pxm6HFfC8Wh {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      ZumJ7Pxm6HFfC8WhToken;
    items:      ZumJ7Pxm6HFfC8WhItem[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The74WAVDTssh4Wnov9Permission;
    flags:      The74WAVDTssh4Wnov9Flags;
}

export interface ZumJ7Pxm6HFfC8WhItem {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       FluffyData;
    effects:    any[];
    folder:     null;
    sort:       number;
    permission: FluffyPermission;
    flags:      The74WAVDTssh4Wnov9Flags;
}

export interface FluffyPermission {
    default:          number;
    C3mdR4yXO0ayyVJB: number;
}

export interface ZumJ7Pxm6HFfC8WhToken {
    name:           string;
    img:            string;
    displayName:    number;
    actorLink:      boolean;
    width:          number;
    height:         number;
    scale:          number;
    mirrorX:        boolean;
    mirrorY:        boolean;
    lockRotation:   boolean;
    rotation:       number;
    alpha:          number;
    vision:         boolean;
    dimSight:       number;
    brightSight:    number;
    dimLight:       number;
    brightLight:    number;
    sightAngle:     number;
    lightAngle:     number;
    lightAlpha:     number;
    lightAnimation: LightAnimation;
    disposition:    number;
    displayBars:    number;
    bar1:           Bar;
    bar2:           Bar;
    flags:          ActorDataClass;
    randomImg:      boolean;
    tint:           null;
    lightColor:     null;
    x:              null;
    y:              null;
    elevation:      null;
    light:          Light;
    actorId?:       string;
}

export interface LightAnimation {
    speed:     number;
    intensity: number;
}

export interface CMHK1DGWgwzAPHyx {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      CMHK1DGWgwzAPHyxToken;
    items:      The7XE9Evf2KG85QxEwItem[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The74WAVDTssh4Wnov9Permission;
    flags:      The74WAVDTssh4Wnov9Flags;
}

export interface CMHK1DGWgwzAPHyxToken {
    _id:          string;
    name:         string;
    displayName:  number;
    actorId:      string;
    actorLink:    boolean;
    actorData:    StickyActorData;
    img:          string;
    tint:         null;
    width:        number;
    height:       number;
    scale:        number;
    mirrorX:      boolean;
    mirrorY:      boolean;
    x:            null;
    y:            null;
    elevation:    null;
    lockRotation: boolean;
    rotation:     number;
    effects:      any[];
    alpha:        number;
    hidden:       boolean;
    vision:       boolean;
    dimSight:     number;
    brightSight:  number;
    sightAngle:   number;
    light:        Light;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        Flags2;
    tokenId:      null;
    randomImg:    boolean;
}

export interface StickyActorData {
    itemUpdates: ItemUpdates;
}

export interface ItemUpdates {
    gpnCqtrI765ghGos: GpnCqtrI765GhGos;
}

export interface GpnCqtrI765GhGos {
    name: string;
    data: GpnCqtrI765GhGosData;
}

export interface GpnCqtrI765GhGosData {
    toHit:       string;
    damage:      string;
    description: FluffyDescription;
}

export interface FluffyDescription {
    summary: string;
}

export interface Flags2 {
    "token-independence":   TokenIndependence;
    "monks-little-details": MonksLittleDetails;
}

export interface DFDNBDueDBXV4Jho {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       DFDNBDueDBXV4JhoData;
    token:      The5BmlHKMGzxICGRZpToken;
    items:      any[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: { [key: string]: number };
    flags:      DFDNBDueDBXV4JhoFlags;
}

export interface DFDNBDueDBXV4JhoData {
    abilities:  Abilities;
    attributes: StickyAttributes;
    details:    IndigoDetails;
    saves:      Saves;
    currency:   Currency;
    config:     PurpleConfig;
    skills:     FluffySkills;
    inventory:  Inventory;
    class:      TentacledClass;
}

export interface StickyAttributes {
    ac:         PurpleAC;
    actionDice: ActionDiceClass;
    critical:   Critical;
    fumble:     Fumble;
    hitDice:    HitDice;
    hp:         PurpleHP;
    init:       Init;
    speed:      Speed;
}

export interface TentacledClass {
    spellCheck:        string;
    spellCheckAbility: Ability;
    deity:             string;
    disapproval:       string;
    disapprovalTable:  string;
    luckDie:           string;
    backstab:          string;
    luckyWeapon:       null;
    patron:            null;
    familiar:          null;
    corruption:        any[];
    className:         string;
}

export interface IndigoDetails {
    level:       Level;
    alignment:   Alignment;
    attackBonus: string;
    languages:   string;
    occupation:  HitDice;
    title:       HitDice;
    notes:       HitDice;
    birthAugur:  string;
    critRange:   number;
    xp:          XP;
    sheetClass:  string;
}

export interface FluffySkills {
    findSecretDoors:     CastSpellFromScroll;
    divineAid:           CastSpellFromScroll;
    turnUnholy:          CastSpellFromScroll;
    layOnHands:          CastSpellFromScroll;
    sneakSilently:       CastSpellFromScroll;
    hideInShadows:       CastSpellFromScroll;
    pickPockets:         CastSpellFromScroll;
    climbSheerSurfaces:  CastSpellFromScroll;
    pickLock:            CastSpellFromScroll;
    findTrap:            CastSpellFromScroll;
    disableTrap:         CastSpellFromScroll;
    forgeDocument:       CastSpellFromScroll;
    disguiseSelf:        CastSpellFromScroll;
    readLanguages:       CastSpellFromScroll;
    handlePoison:        HandlePoison;
    castSpellFromScroll: CastSpellFromScroll;
    sneakAndHide:        HandlePoison;
    shieldBash:          CastSpellFromScroll;
}

export interface DFDNBDueDBXV4JhoFlags {
    core: FluffyCore;
}

export interface FluffyCore {
    sheetClass: string;
}

export interface QAfhPxxtDQi5UlpY {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      QAfhPxxtDQi5UlpYToken;
    items:      any[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The74WAVDTssh4Wnov9Permission;
    flags:      AlFyYgeIWH8JB6WiFlags;
}

export interface QAfhPxxtDQi5UlpYToken {
    _id:            string;
    name:           string;
    displayName:    number;
    actorId:        string;
    actorLink:      boolean;
    actorData:      PurpleActorData;
    img:            string;
    tint:           null;
    width:          number;
    height:         number;
    scale:          number;
    mirrorX:        boolean;
    mirrorY:        boolean;
    x:              null;
    y:              null;
    elevation:      null;
    lockRotation:   boolean;
    rotation:       number;
    effects:        any[];
    alpha:          number;
    hidden:         boolean;
    vision:         boolean;
    dimSight:       number;
    brightSight:    number;
    dimLight:       number;
    brightLight:    number;
    sightAngle:     number;
    lightAngle:     number;
    lightColor:     null;
    lightAlpha:     number;
    lightAnimation: LightAnimation;
    disposition:    number;
    displayBars:    number;
    bar1:           Bar;
    bar2:           Bar;
    flags:          Flags3;
    tokenId:        null;
    randomImg:      boolean;
    light:          Light;
}

export interface Flags3 {
    "token-attacher": FriskyTokenAttacher;
    tagger:           Tagger;
}

export interface Tagger {
    tags: string;
}

export interface FriskyTokenAttacher {
    pos:               Pos;
    prototypeAttached: HilariousPrototypeAttached;
    grid:              Grid;
}

export interface HilariousPrototypeAttached {
    Wall:    FluffyWall[];
    Drawing: Drawing[];
}

export interface Drawing {
    author:       string;
    type:         string;
    x:            number;
    y:            number;
    width:        number;
    height:       number;
    rotation:     number;
    z:            number;
    points:       any[];
    bezierFactor: number;
    fillType:     number;
    fillColor:    string;
    fillAlpha:    number;
    strokeWidth:  number;
    strokeColor:  string;
    strokeAlpha:  number;
    texture:      null;
    fontFamily:   string;
    fontSize:     number;
    textColor:    string;
    textAlpha:    number;
    hidden:       boolean;
    locked:       boolean;
    flags:        DrawingFlags;
}

export interface DrawingFlags {
    "better-text-drawings": BetterTextDrawings;
    "token-attacher":       IndecentTokenAttacher;
}

export interface BetterTextDrawings {
    textAlignment:   string;
    textStrokeWidth: number;
    textStrokeColor: string;
}

export interface FluffyWall {
    c:     number[];
    move:  number;
    sense: number;
    sound: number;
    dir:   number;
    door:  number;
    ds:    number;
    flags: Flags4;
}

export interface Flags4 {
    "token-attacher": MischievousTokenAttacher;
}

export interface MischievousTokenAttacher {
    parent:   string;
    offset:   PurpleOffset;
    unlocked: boolean;
}

export interface SRiWhVrxtvAc8NXm {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      The5BmlHKMGzxICGRZpToken;
    items:      The7XE9Evf2KG85QxEwItem[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The1X4Q0C9ZwrM3VjZlPermission;
    flags:      ActorDataClass;
}

export interface Shkc1RW0NcMg2YgG {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      ZumJ7Pxm6HFfC8WhToken;
    items:      The7XE9Evf2KG85QxEwItem[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The74WAVDTssh4Wnov9Permission;
    flags:      The74WAVDTssh4Wnov9Flags;
}

export interface Sw1P5DG1WvZdt7Dj {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      ZumJ7Pxm6HFfC8WhToken;
    items:      Sw1P5DG1WvZdt7DjItem[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The74WAVDTssh4Wnov9Permission;
    flags:      The74WAVDTssh4Wnov9Flags;
}

export interface Sw1P5DG1WvZdt7DjItem {
    _id:        string;
    name:       string;
    type:       Type;
    data:       FluffyData;
    sort:       number;
    flags:      Flags5;
    img:        string;
    effects:    any[];
    folder:     null;
    permission: PurplePermission;
}

export interface Flags5 {
    "journal-links"?: JournalLinks;
    core?:            PurpleCore;
}

export interface JournalLinks {
    references: ActorDataClass;
}

export interface VUwktKEPBTR8MdPE {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       The1X4Q0C9ZwrM3VjZlData;
    token:      ZumJ7Pxm6HFfC8WhToken;
    items:      The5BmlHKMGzxICGRZpItem[];
    effects:    any[];
    folder:     string;
    sort:       number;
    permission: The74WAVDTssh4Wnov9Permission;
    flags:      The74WAVDTssh4Wnov9Flags;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toThe1X4Q0C9ZwrM3VjZl(json: string): The1X4Q0C9ZwrM3VjZl {
        return cast(JSON.parse(json), r("The1X4Q0C9ZwrM3VjZl"));
    }

    public static the1X4Q0C9ZwrM3VjZlToJson(value: The1X4Q0C9ZwrM3VjZl): string {
        return JSON.stringify(uncast(value, r("The1X4Q0C9ZwrM3VjZl")), null, 2);
    }

    public static toThe5BmlHKMGzxICGRZp(json: string): FasTJNaw9BURePRY {
        return cast(JSON.parse(json), r("FasTJNaw9BURePRY"));
    }

    public static the5BmlHKMGzxICGRZpToJson(value: FasTJNaw9BURePRY): string {
        return JSON.stringify(uncast(value, r("FasTJNaw9BURePRY")), null, 2);
    }

    public static toThe74WAVDTssh4Wnov9(json: string): The74WAVDTssh4Wnov9 {
        return cast(JSON.parse(json), r("The74WAVDTssh4Wnov9"));
    }

    public static the74WAVDTssh4Wnov9ToJson(value: The74WAVDTssh4Wnov9): string {
        return JSON.stringify(uncast(value, r("The74WAVDTssh4Wnov9")), null, 2);
    }

    public static toThe7XE9Evf2KG85QxEw(json: string): WajWoSw7QmERBT9E {
        return cast(JSON.parse(json), r("WajWoSw7QmERBT9E"));
    }

    public static the7XE9Evf2KG85QxEwToJson(value: WajWoSw7QmERBT9E): string {
        return JSON.stringify(uncast(value, r("WajWoSw7QmERBT9E")), null, 2);
    }

    public static toA1Qez7JD6Vy1MrOO(json: string): A1Qez7JD6Vy1MrOO {
        return cast(JSON.parse(json), r("A1Qez7JD6Vy1MrOO"));
    }

    public static a1Qez7JD6Vy1MrOOToJson(value: A1Qez7JD6Vy1MrOO): string {
        return JSON.stringify(uncast(value, r("A1Qez7JD6Vy1MrOO")), null, 2);
    }

    public static toAlFyYgeIWH8JB6Wi(json: string): AlFyYgeIWH8JB6Wi {
        return cast(JSON.parse(json), r("AlFyYgeIWH8JB6Wi"));
    }

    public static alFyYgeIWH8JB6WiToJson(value: AlFyYgeIWH8JB6Wi): string {
        return JSON.stringify(uncast(value, r("AlFyYgeIWH8JB6Wi")), null, 2);
    }

    public static toCboJqy8BllPEdTQD(json: string): VwOLffqYjKtbQEYR {
        return cast(JSON.parse(json), r("VwOLffqYjKtbQEYR"));
    }

    public static cboJqy8BllPEdTQDToJson(value: VwOLffqYjKtbQEYR): string {
        return JSON.stringify(uncast(value, r("VwOLffqYjKtbQEYR")), null, 2);
    }

    public static toFQFMMXNwe5ORDVkx(json: string): UgYS0IqeRvhgMvVZ {
        return cast(JSON.parse(json), r("UgYS0IqeRvhgMvVZ"));
    }

    public static fQFMMXNwe5ORDVkxToJson(value: UgYS0IqeRvhgMvVZ): string {
        return JSON.stringify(uncast(value, r("UgYS0IqeRvhgMvVZ")), null, 2);
    }

    public static toFTz7F4OKXgFGgbbz(json: string): FTz7F4OKXgFGgbbz {
        return cast(JSON.parse(json), r("FTz7F4OKXgFGgbbz"));
    }

    public static fTz7F4OKXgFGgbbzToJson(value: FTz7F4OKXgFGgbbz): string {
        return JSON.stringify(uncast(value, r("FTz7F4OKXgFGgbbz")), null, 2);
    }

    public static toGkf07Q8Arkhdtd8N(json: string): FD7YLLZnmAFXZLvs {
        return cast(JSON.parse(json), r("FD7YLLZnmAFXZLvs"));
    }

    public static gkf07Q8Arkhdtd8NToJson(value: FD7YLLZnmAFXZLvs): string {
        return JSON.stringify(uncast(value, r("FD7YLLZnmAFXZLvs")), null, 2);
    }

    public static toHBuv47TGK1DHYZ6I(json: string): VwOLffqYjKtbQEYR {
        return cast(JSON.parse(json), r("VwOLffqYjKtbQEYR"));
    }

    public static hBuv47TGK1DHYZ6IToJson(value: VwOLffqYjKtbQEYR): string {
        return JSON.stringify(uncast(value, r("VwOLffqYjKtbQEYR")), null, 2);
    }

    public static toKa9XBKR0HEwWkMCT(json: string): Ka9XBKR0HEwWkMCT {
        return cast(JSON.parse(json), r("Ka9XBKR0HEwWkMCT"));
    }

    public static ka9XBKR0HEwWkMCTToJson(value: Ka9XBKR0HEwWkMCT): string {
        return JSON.stringify(uncast(value, r("Ka9XBKR0HEwWkMCT")), null, 2);
    }

    public static toL297NgtDAgGNc6Og(json: string): DqngE4C3U65Nwj9O {
        return cast(JSON.parse(json), r("DqngE4C3U65Nwj9O"));
    }

    public static l297NgtDAgGNc6OgToJson(value: DqngE4C3U65Nwj9O): string {
        return JSON.stringify(uncast(value, r("DqngE4C3U65Nwj9O")), null, 2);
    }

    public static toLZwSMvDFqse10X3H(json: string): LZwSMvDFqse10X3H {
        return cast(JSON.parse(json), r("LZwSMvDFqse10X3H"));
    }

    public static lZwSMvDFqse10X3HToJson(value: LZwSMvDFqse10X3H): string {
        return JSON.stringify(uncast(value, r("LZwSMvDFqse10X3H")), null, 2);
    }

    public static toM52CMS3FophPIPGw(json: string): FasTJNaw9BURePRY {
        return cast(JSON.parse(json), r("FasTJNaw9BURePRY"));
    }

    public static m52CMS3FophPIPGwToJson(value: FasTJNaw9BURePRY): string {
        return JSON.stringify(uncast(value, r("FasTJNaw9BURePRY")), null, 2);
    }

    public static toMpR4ClJVuZzITfUy(json: string): MpR4ClJVuZzITfUy {
        return cast(JSON.parse(json), r("MpR4ClJVuZzITfUy"));
    }

    public static mpR4ClJVuZzITfUyToJson(value: MpR4ClJVuZzITfUy): string {
        return JSON.stringify(uncast(value, r("MpR4ClJVuZzITfUy")), null, 2);
    }

    public static toRzCO3DVrmFLwg5Ye(json: string): WajWoSw7QmERBT9E {
        return cast(JSON.parse(json), r("WajWoSw7QmERBT9E"));
    }

    public static rzCO3DVrmFLwg5YeToJson(value: WajWoSw7QmERBT9E): string {
        return JSON.stringify(uncast(value, r("WajWoSw7QmERBT9E")), null, 2);
    }

    public static toV5Mz2SWYOGveX2DI(json: string): V5Mz2SWYOGveX2DI {
        return cast(JSON.parse(json), r("V5Mz2SWYOGveX2DI"));
    }

    public static v5Mz2SWYOGveX2DIToJson(value: V5Mz2SWYOGveX2DI): string {
        return JSON.stringify(uncast(value, r("V5Mz2SWYOGveX2DI")), null, 2);
    }

    public static toWx7Tu49JRg99TjgZ(json: string): VwOLffqYjKtbQEYR {
        return cast(JSON.parse(json), r("VwOLffqYjKtbQEYR"));
    }

    public static wx7Tu49JRg99TjgZToJson(value: VwOLffqYjKtbQEYR): string {
        return JSON.stringify(uncast(value, r("VwOLffqYjKtbQEYR")), null, 2);
    }

    public static toZumJ7Pxm6HFfC8Wh(json: string): ZumJ7Pxm6HFfC8Wh {
        return cast(JSON.parse(json), r("ZumJ7Pxm6HFfC8Wh"));
    }

    public static zumJ7Pxm6HFfC8WhToJson(value: ZumJ7Pxm6HFfC8Wh): string {
        return JSON.stringify(uncast(value, r("ZumJ7Pxm6HFfC8Wh")), null, 2);
    }

    public static toCMHK1DGWgwzAPHyx(json: string): CMHK1DGWgwzAPHyx {
        return cast(JSON.parse(json), r("CMHK1DGWgwzAPHyx"));
    }

    public static cMHK1DGWgwzAPHyxToJson(value: CMHK1DGWgwzAPHyx): string {
        return JSON.stringify(uncast(value, r("CMHK1DGWgwzAPHyx")), null, 2);
    }

    public static toDFDNBDueDBXV4Jho(json: string): DFDNBDueDBXV4Jho {
        return cast(JSON.parse(json), r("DFDNBDueDBXV4Jho"));
    }

    public static dFDNBDueDBXV4JhoToJson(value: DFDNBDueDBXV4Jho): string {
        return JSON.stringify(uncast(value, r("DFDNBDueDBXV4Jho")), null, 2);
    }

    public static toDqngE4C3U65Nwj9O(json: string): DqngE4C3U65Nwj9O {
        return cast(JSON.parse(json), r("DqngE4C3U65Nwj9O"));
    }

    public static dqngE4C3U65Nwj9OToJson(value: DqngE4C3U65Nwj9O): string {
        return JSON.stringify(uncast(value, r("DqngE4C3U65Nwj9O")), null, 2);
    }

    public static toFD7YLLZnmAFXZLvs(json: string): FD7YLLZnmAFXZLvs {
        return cast(JSON.parse(json), r("FD7YLLZnmAFXZLvs"));
    }

    public static fD7YLLZnmAFXZLvsToJson(value: FD7YLLZnmAFXZLvs): string {
        return JSON.stringify(uncast(value, r("FD7YLLZnmAFXZLvs")), null, 2);
    }

    public static toFasTJNaw9BURePRY(json: string): FasTJNaw9BURePRY {
        return cast(JSON.parse(json), r("FasTJNaw9BURePRY"));
    }

    public static fasTJNaw9BURePRYToJson(value: FasTJNaw9BURePRY): string {
        return JSON.stringify(uncast(value, r("FasTJNaw9BURePRY")), null, 2);
    }

    public static toQAfhPxxtDQi5UlpY(json: string): QAfhPxxtDQi5UlpY {
        return cast(JSON.parse(json), r("QAfhPxxtDQi5UlpY"));
    }

    public static qAfhPxxtDQi5UlpYToJson(value: QAfhPxxtDQi5UlpY): string {
        return JSON.stringify(uncast(value, r("QAfhPxxtDQi5UlpY")), null, 2);
    }

    public static toSRiWhVrxtvAc8NXm(json: string): SRiWhVrxtvAc8NXm {
        return cast(JSON.parse(json), r("SRiWhVrxtvAc8NXm"));
    }

    public static sRiWhVrxtvAc8NXmToJson(value: SRiWhVrxtvAc8NXm): string {
        return JSON.stringify(uncast(value, r("SRiWhVrxtvAc8NXm")), null, 2);
    }

    public static toShkc1RW0NcMg2YgG(json: string): Shkc1RW0NcMg2YgG {
        return cast(JSON.parse(json), r("Shkc1RW0NcMg2YgG"));
    }

    public static shkc1RW0NcMg2YgGToJson(value: Shkc1RW0NcMg2YgG): string {
        return JSON.stringify(uncast(value, r("Shkc1RW0NcMg2YgG")), null, 2);
    }

    public static toSw1P5DG1WvZdt7Dj(json: string): Sw1P5DG1WvZdt7Dj {
        return cast(JSON.parse(json), r("Sw1P5DG1WvZdt7Dj"));
    }

    public static sw1P5DG1WvZdt7DjToJson(value: Sw1P5DG1WvZdt7Dj): string {
        return JSON.stringify(uncast(value, r("Sw1P5DG1WvZdt7Dj")), null, 2);
    }

    public static toUgYS0IqeRvhgMvVZ(json: string): UgYS0IqeRvhgMvVZ {
        return cast(JSON.parse(json), r("UgYS0IqeRvhgMvVZ"));
    }

    public static ugYS0IqeRvhgMvVZToJson(value: UgYS0IqeRvhgMvVZ): string {
        return JSON.stringify(uncast(value, r("UgYS0IqeRvhgMvVZ")), null, 2);
    }

    public static toVUwktKEPBTR8MdPE(json: string): VUwktKEPBTR8MdPE {
        return cast(JSON.parse(json), r("VUwktKEPBTR8MdPE"));
    }

    public static vUwktKEPBTR8MdPEToJson(value: VUwktKEPBTR8MdPE): string {
        return JSON.stringify(uncast(value, r("VUwktKEPBTR8MdPE")), null, 2);
    }

    public static toVwOLffqYjKtbQEYR(json: string): VwOLffqYjKtbQEYR {
        return cast(JSON.parse(json), r("VwOLffqYjKtbQEYR"));
    }

    public static vwOLffqYjKtbQEYRToJson(value: VwOLffqYjKtbQEYR): string {
        return JSON.stringify(uncast(value, r("VwOLffqYjKtbQEYR")), null, 2);
    }

    public static toWajWoSw7QmERBT9E(json: string): WajWoSw7QmERBT9E {
        return cast(JSON.parse(json), r("WajWoSw7QmERBT9E"));
    }

    public static wajWoSw7QmERBT9EToJson(value: WajWoSw7QmERBT9E): string {
        return JSON.stringify(uncast(value, r("WajWoSw7QmERBT9E")), null, 2);
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
    "The1X4Q0C9ZwrM3VjZl": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("The1X4Q0C9ZwrM3VjZlToken") },
        { json: "items", js: "items", typ: a("any") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The1X4Q0C9ZwrM3VjZlPermission") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "The1X4Q0C9ZwrM3VjZlData": o([
        { json: "abilities", js: "abilities", typ: r("Abilities") },
        { json: "attributes", js: "attributes", typ: r("PurpleAttributes") },
        { json: "details", js: "details", typ: r("PurpleDetails") },
        { json: "saves", js: "saves", typ: r("Saves") },
        { json: "currency", js: "currency", typ: r("Currency") },
        { json: "config", js: "config", typ: r("PurpleConfig") },
        { json: "class", js: "class", typ: r("PurpleClass") },
    ], false),
    "Abilities": o([
        { json: "str", js: "str", typ: r("Agl") },
        { json: "agl", js: "agl", typ: r("Agl") },
        { json: "sta", js: "sta", typ: r("Agl") },
        { json: "per", js: "per", typ: r("Agl") },
        { json: "int", js: "int", typ: r("Agl") },
        { json: "lck", js: "lck", typ: r("Agl") },
    ], false),
    "Agl": o([
        { json: "label", js: "label", typ: r("AglLabel") },
        { json: "value", js: "value", typ: 0 },
        { json: "max", js: "max", typ: 0 },
    ], false),
    "PurpleAttributes": o([
        { json: "ac", js: "ac", typ: r("PurpleAC") },
        { json: "actionDice", js: "actionDice", typ: r("ActionDiceClass") },
        { json: "critical", js: "critical", typ: r("Critical") },
        { json: "fumble", js: "fumble", typ: r("Fumble") },
        { json: "hitDice", js: "hitDice", typ: r("HitDice") },
        { json: "hp", js: "hp", typ: r("PurpleHP") },
        { json: "init", js: "init", typ: r("Init") },
        { json: "speed", js: "speed", typ: r("Speed") },
        { json: "special", js: "special", typ: r("HitDice") },
    ], false),
    "PurpleAC": o([
        { json: "value", js: "value", typ: 0 },
        { json: "checkPenalty", js: "checkPenalty", typ: 0 },
        { json: "speedPenalty", js: "speedPenalty", typ: 0 },
        { json: "fumbleDie", js: "fumbleDie", typ: u(undefined, r("FumbleDieEnum")) },
    ], false),
    "ActionDiceClass": o([
        { json: "value", js: "value", typ: r("ValueElement") },
        { json: "options", js: "options", typ: a(r("ValueElement")) },
    ], false),
    "Critical": o([
        { json: "die", js: "die", typ: r("FumbleDieEnum") },
        { json: "table", js: "table", typ: r("Table") },
    ], false),
    "Fumble": o([
        { json: "die", js: "die", typ: r("FumbleDieEnum") },
    ], false),
    "HitDice": o([
        { json: "value", js: "value", typ: "" },
    ], false),
    "PurpleHP": o([
        { json: "value", js: "value", typ: u(0, null) },
        { json: "min", js: "min", typ: 0 },
        { json: "max", js: "max", typ: u(0, null) },
        { json: "temp", js: "temp", typ: 0 },
        { json: "tempmax", js: "tempmax", typ: 0 },
    ], false),
    "Init": o([
        { json: "die", js: "die", typ: r("ValueElement") },
        { json: "value", js: "value", typ: 0 },
    ], false),
    "Speed": o([
        { json: "value", js: "value", typ: "" },
        { json: "base", js: "base", typ: 0 },
        { json: "special", js: "special", typ: "" },
        { json: "other", js: "other", typ: u(undefined, r("Other")) },
    ], false),
    "PurpleClass": o([
        { json: "spellCheck", js: "spellCheck", typ: 0 },
        { json: "spellCheckAbility", js: "spellCheckAbility", typ: r("Ability") },
    ], false),
    "PurpleConfig": o([
        { json: "attackBonusMode", js: "attackBonusMode", typ: r("AttackBonusMode") },
        { json: "actionDice", js: "actionDice", typ: r("ActionDiceEnum") },
        { json: "capLevel", js: "capLevel", typ: true },
        { json: "maxLevel", js: "maxLevel", typ: 0 },
        { json: "rollAttackBonus", js: "rollAttackBonus", typ: true },
        { json: "computeAC", js: "computeAC", typ: true },
        { json: "baseACAbility", js: "baseACAbility", typ: r("Ability") },
        { json: "computeSpeed", js: "computeSpeed", typ: true },
        { json: "computeCheckPenalty", js: "computeCheckPenalty", typ: true },
        { json: "sortInventory", js: "sortInventory", typ: true },
        { json: "removeEmptyItems", js: "removeEmptyItems", typ: true },
        { json: "showSpells", js: "showSpells", typ: true },
        { json: "showSkills", js: "showSkills", typ: true },
        { json: "showMaxAbilities", js: "showMaxAbilities", typ: true },
        { json: "showBackstab", js: "showBackstab", typ: true },
    ], false),
    "Currency": o([
        { json: "pp", js: "pp", typ: "" },
        { json: "ep", js: "ep", typ: "" },
        { json: "gp", js: "gp", typ: "" },
        { json: "sp", js: "sp", typ: "" },
        { json: "cp", js: "cp", typ: "" },
    ], false),
    "PurpleDetails": o([
        { json: "level", js: "level", typ: r("Level") },
        { json: "alignment", js: "alignment", typ: r("Alignment") },
        { json: "attackBonus", js: "attackBonus", typ: "" },
        { json: "languages", js: "languages", typ: "" },
        { json: "occupation", js: "occupation", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "notes", js: "notes", typ: r("HitDice") },
    ], false),
    "Level": o([
        { json: "value", js: "value", typ: 0 },
    ], false),
    "Saves": o([
        { json: "frt", js: "frt", typ: r("Frt") },
        { json: "ref", js: "ref", typ: r("Frt") },
        { json: "wil", js: "wil", typ: r("Frt") },
    ], false),
    "Frt": o([
        { json: "label", js: "label", typ: r("FrtLabel") },
        { json: "value", js: "value", typ: 0 },
    ], false),
    "ActorDataClass": o([
    ], false),
    "The1X4Q0C9ZwrM3VjZlPermission": o([
        { json: "default", js: "default", typ: 0 },
        { json: "oVvfrcHQErm1ON0p", js: "oVvfrcHQErm1ON0p", typ: u(undefined, 0) },
    ], false),
    "The1X4Q0C9ZwrM3VjZlToken": o([
        { json: "_id", js: "_id", typ: r("ID") },
        { json: "name", js: "name", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorId", js: "actorId", typ: "" },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "actorData", js: "actorData", typ: r("PurpleActorData") },
        { json: "img", js: "img", typ: "" },
        { json: "tint", js: "tint", typ: null },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "scale", js: "scale", typ: 0 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: null },
        { json: "y", js: "y", typ: null },
        { json: "elevation", js: "elevation", typ: 0 },
        { json: "lockRotation", js: "lockRotation", typ: true },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "alpha", js: "alpha", typ: 0 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "dimSight", js: "dimSight", typ: 0 },
        { json: "brightSight", js: "brightSight", typ: 0 },
        { json: "sightAngle", js: "sightAngle", typ: 0 },
        { json: "light", js: "light", typ: r("Light") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("PurpleFlags") },
        { json: "tokenId", js: "tokenId", typ: null },
        { json: "randomImg", js: "randomImg", typ: true },
    ], false),
    "PurpleActorData": o([
        { json: "data", js: "data", typ: r("PurpleData") },
    ], false),
    "PurpleData": o([
        { json: "attributes", js: "attributes", typ: r("FluffyAttributes") },
    ], false),
    "FluffyAttributes": o([
        { json: "hp", js: "hp", typ: r("FluffyHP") },
    ], false),
    "FluffyHP": o([
        { json: "value", js: "value", typ: 0 },
        { json: "max", js: "max", typ: 0 },
    ], false),
    "Bar": o([
        { json: "attribute", js: "attribute", typ: u(r("Attribute"), null) },
    ], false),
    "PurpleFlags": o([
        { json: "token-attacher", js: "token-attacher", typ: r("PurpleTokenAttacher") },
        { json: "monks-little-details", js: "monks-little-details", typ: r("MonksLittleDetails") },
    ], false),
    "MonksLittleDetails": o([
        { json: "token-highlight", js: "token-highlight", typ: "" },
        { json: "bloodsplat-colour", js: "bloodsplat-colour", typ: r("BloodsplatColour") },
    ], false),
    "PurpleTokenAttacher": o([
        { json: "pos", js: "pos", typ: r("Pos") },
        { json: "prototypeAttached", js: "prototypeAttached", typ: r("PurplePrototypeAttached") },
        { json: "grid", js: "grid", typ: r("Grid") },
    ], false),
    "Grid": o([
        { json: "size", js: "size", typ: 0 },
        { json: "w", js: "w", typ: 0 },
        { json: "h", js: "h", typ: 0 },
    ], false),
    "Pos": o([
        { json: "base_id", js: "base_id", typ: "" },
        { json: "xy", js: "xy", typ: r("Center") },
        { json: "center", js: "center", typ: r("Center") },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "elevation", js: "elevation", typ: 0 },
    ], false),
    "Center": o([
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
    ], false),
    "PurplePrototypeAttached": o([
        { json: "Wall", js: "Wall", typ: a(r("PurpleWall")) },
    ], false),
    "PurpleWall": o([
        { json: "c", js: "c", typ: a(3.14) },
        { json: "light", js: "light", typ: 0 },
        { json: "move", js: "move", typ: 0 },
        { json: "sight", js: "sight", typ: 0 },
        { json: "sound", js: "sound", typ: 0 },
        { json: "dir", js: "dir", typ: 0 },
        { json: "door", js: "door", typ: 0 },
        { json: "ds", js: "ds", typ: 0 },
        { json: "flags", js: "flags", typ: r("FluffyFlags") },
    ], false),
    "FluffyFlags": o([
        { json: "token-attacher", js: "token-attacher", typ: r("FluffyTokenAttacher") },
    ], false),
    "FluffyTokenAttacher": o([
        { json: "parent", js: "parent", typ: r("ID") },
        { json: "offset", js: "offset", typ: r("PurpleOffset") },
    ], false),
    "PurpleOffset": o([
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
        { json: "rot", js: "rot", typ: 0 },
        { json: "centerX", js: "centerX", typ: 3.14 },
        { json: "centerY", js: "centerY", typ: 3.14 },
        { json: "offRot", js: "offRot", typ: 0 },
        { json: "c", js: "c", typ: a(3.14) },
        { json: "size", js: "size", typ: r("PurpleSize") },
        { json: "elevation", js: "elevation", typ: r("Elevation") },
    ], false),
    "Elevation": o([
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "PurpleSize": o([
        { json: "widthBase", js: "widthBase", typ: 0 },
        { json: "heightBase", js: "heightBase", typ: 0 },
    ], false),
    "Light": o([
        { json: "alpha", js: "alpha", typ: 3.14 },
        { json: "angle", js: "angle", typ: 0 },
        { json: "bright", js: "bright", typ: u(3.14, 0) },
        { json: "color", js: "color", typ: u(undefined, u(null, "")) },
        { json: "coloration", js: "coloration", typ: 0 },
        { json: "dim", js: "dim", typ: 0 },
        { json: "gradual", js: "gradual", typ: true },
        { json: "luminosity", js: "luminosity", typ: 3.14 },
        { json: "saturation", js: "saturation", typ: u(3.14, 0) },
        { json: "contrast", js: "contrast", typ: u(3.14, 0) },
        { json: "shadows", js: "shadows", typ: u(3.14, 0) },
        { json: "animation", js: "animation", typ: r("Animation") },
        { json: "darkness", js: "darkness", typ: r("Darkness") },
    ], false),
    "Animation": o([
        { json: "speed", js: "speed", typ: 0 },
        { json: "intensity", js: "intensity", typ: 0 },
        { json: "reverse", js: "reverse", typ: true },
        { json: "type", js: "type", typ: u(undefined, "") },
    ], false),
    "Darkness": o([
        { json: "min", js: "min", typ: 3.14 },
        { json: "max", js: "max", typ: 0 },
    ], false),
    "FasTJNaw9BURePRY": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("The5BmlHKMGzxICGRZpToken") },
        { json: "items", js: "items", typ: a(r("The5BmlHKMGzxICGRZpItem")) },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The1X4Q0C9ZwrM3VjZlPermission") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "The5BmlHKMGzxICGRZpItem": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("FluffyData") },
        { json: "_id", js: "_id", typ: "" },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: null },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("PurplePermission") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "FluffyData": o([
        { json: "description", js: "description", typ: r("PurpleDescription") },
        { json: "source", js: "source", typ: "" },
        { json: "quantity", js: "quantity", typ: u(undefined, 0) },
        { json: "weight", js: "weight", typ: u(0, null) },
        { json: "equipped", js: "equipped", typ: u(undefined, true) },
        { json: "identified", js: "identified", typ: u(undefined, true) },
        { json: "value", js: "value", typ: r("Currency") },
        { json: "config", js: "config", typ: u(undefined, r("FluffyConfig")) },
        { json: "actionDie", js: "actionDie", typ: u(undefined, r("ValueElement")) },
        { json: "toHit", js: "toHit", typ: u(undefined, "") },
        { json: "damage", js: "damage", typ: u(undefined, "") },
        { json: "range", js: "range", typ: u(undefined, r("Range")) },
        { json: "twoHanded", js: "twoHanded", typ: u(undefined, true) },
        { json: "melee", js: "melee", typ: u(undefined, true) },
        { json: "shortRangeStrength", js: "shortRangeStrength", typ: u(undefined, 0) },
        { json: "subdual", js: "subdual", typ: u(undefined, 0) },
        { json: "backstab", js: "backstab", typ: u(undefined, true) },
        { json: "backstabDamage", js: "backstabDamage", typ: u(undefined, null) },
        { json: "doubleIfMounted", js: "doubleIfMounted", typ: u(undefined, 0) },
        { json: "critRange", js: "critRange", typ: u(undefined, 0) },
        { json: "isCoins", js: "isCoins", typ: u(undefined, true) },
    ], false),
    "FluffyConfig": o([
        { json: "inheritActionDie", js: "inheritActionDie", typ: true },
        { json: "inheritCritRange", js: "inheritCritRange", typ: true },
    ], false),
    "PurpleDescription": o([
        { json: "value", js: "value", typ: "" },
        { json: "chat", js: "chat", typ: "" },
        { json: "unidentified", js: "unidentified", typ: "" },
        { json: "summary", js: "summary", typ: "" },
    ], false),
    "PurplePermission": o([
        { json: "default", js: "default", typ: 0 },
    ], false),
    "The5BmlHKMGzxICGRZpToken": o([
        { json: "name", js: "name", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "scale", js: "scale", typ: 3.14 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "lockRotation", js: "lockRotation", typ: true },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "alpha", js: "alpha", typ: 0 },
        { json: "vision", js: "vision", typ: true },
        { json: "dimSight", js: "dimSight", typ: 0 },
        { json: "brightSight", js: "brightSight", typ: 0 },
        { json: "sightAngle", js: "sightAngle", typ: 0 },
        { json: "light", js: "light", typ: r("Light") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("TentacledFlags") },
        { json: "randomImg", js: "randomImg", typ: true },
        { json: "tint", js: "tint", typ: u(null, "") },
        { json: "x", js: "x", typ: null },
        { json: "y", js: "y", typ: null },
        { json: "elevation", js: "elevation", typ: null },
    ], false),
    "TentacledFlags": o([
        { json: "monks-little-details", js: "monks-little-details", typ: r("MonksLittleDetails") },
    ], false),
    "The74WAVDTssh4Wnov9": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The74WAVDTssh4Wnov9Data") },
        { json: "token", js: "token", typ: r("The74WAVDTssh4Wnov9Token") },
        { json: "items", js: "items", typ: a("any") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The74WAVDTssh4Wnov9Permission") },
        { json: "flags", js: "flags", typ: r("The74WAVDTssh4Wnov9Flags") },
    ], false),
    "The74WAVDTssh4Wnov9Data": o([
        { json: "abilities", js: "abilities", typ: r("Abilities") },
        { json: "attributes", js: "attributes", typ: r("PurpleAttributes") },
        { json: "details", js: "details", typ: r("FluffyDetails") },
        { json: "saves", js: "saves", typ: r("Saves") },
        { json: "currency", js: "currency", typ: r("Currency") },
        { json: "config", js: "config", typ: r("PurpleConfig") },
        { json: "class", js: "class", typ: r("PurpleClass") },
    ], false),
    "FluffyDetails": o([
        { json: "level", js: "level", typ: r("Level") },
        { json: "alignment", js: "alignment", typ: r("Alignment") },
        { json: "attackBonus", js: "attackBonus", typ: "" },
        { json: "languages", js: "languages", typ: "" },
        { json: "occupation", js: "occupation", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "notes", js: "notes", typ: "" },
    ], false),
    "The74WAVDTssh4Wnov9Flags": o([
        { json: "core", js: "core", typ: r("PurpleCore") },
        { json: "cf", js: "cf", typ: u(undefined, u(r("CF"), null)) },
    ], false),
    "CF": o([
        { json: "id", js: "id", typ: "" },
        { json: "color", js: "color", typ: "" },
    ], false),
    "PurpleCore": o([
        { json: "sourceId", js: "sourceId", typ: "" },
    ], false),
    "The74WAVDTssh4Wnov9Permission": o([
        { json: "oVvfrcHQErm1ON0p", js: "oVvfrcHQErm1ON0p", typ: 0 },
    ], false),
    "The74WAVDTssh4Wnov9Token": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorId", js: "actorId", typ: "" },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "actorData", js: "actorData", typ: r("FluffyActorData") },
        { json: "img", js: "img", typ: "" },
        { json: "tint", js: "tint", typ: null },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "scale", js: "scale", typ: 0 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: null },
        { json: "y", js: "y", typ: null },
        { json: "elevation", js: "elevation", typ: null },
        { json: "lockRotation", js: "lockRotation", typ: true },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "alpha", js: "alpha", typ: 3.14 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "dimSight", js: "dimSight", typ: 0 },
        { json: "brightSight", js: "brightSight", typ: 0 },
        { json: "sightAngle", js: "sightAngle", typ: 0 },
        { json: "light", js: "light", typ: r("Light") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("StickyFlags") },
        { json: "tokenId", js: "tokenId", typ: null },
        { json: "randomImg", js: "randomImg", typ: true },
    ], false),
    "FluffyActorData": o([
        { json: "name", js: "name", typ: "" },
    ], false),
    "StickyFlags": o([
        { json: "token-independence", js: "token-independence", typ: r("TokenIndependence") },
        { json: "token-attacher", js: "token-attacher", typ: r("TentacledTokenAttacher") },
    ], false),
    "TentacledTokenAttacher": o([
        { json: "pos", js: "pos", typ: r("Pos") },
        { json: "prototypeAttached", js: "prototypeAttached", typ: r("FluffyPrototypeAttached") },
        { json: "grid", js: "grid", typ: r("Grid") },
    ], false),
    "FluffyPrototypeAttached": o([
        { json: "AmbientLight", js: "AmbientLight", typ: a(r("PurpleAmbientLight")) },
    ], false),
    "PurpleAmbientLight": o([
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "walls", js: "walls", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "config", js: "config", typ: r("Light") },
        { json: "hidden", js: "hidden", typ: true },
        { json: "flags", js: "flags", typ: r("IndigoFlags") },
    ], false),
    "IndigoFlags": o([
        { json: "token-attacher", js: "token-attacher", typ: r("StickyTokenAttacher") },
    ], false),
    "StickyTokenAttacher": o([
        { json: "parent", js: "parent", typ: "" },
        { json: "offset", js: "offset", typ: r("FluffyOffset") },
    ], false),
    "FluffyOffset": o([
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
        { json: "rot", js: "rot", typ: 0 },
        { json: "centerX", js: "centerX", typ: 3.14 },
        { json: "centerY", js: "centerY", typ: 3.14 },
        { json: "offRot", js: "offRot", typ: 0 },
        { json: "size", js: "size", typ: r("FluffySize") },
        { json: "elevation", js: "elevation", typ: r("Elevation") },
    ], false),
    "FluffySize": o([
        { json: "config", js: "config", typ: r("SizeConfig") },
        { json: "widthBase", js: "widthBase", typ: 0 },
        { json: "heightBase", js: "heightBase", typ: 0 },
    ], false),
    "SizeConfig": o([
        { json: "dim", js: "dim", typ: 0 },
        { json: "bright", js: "bright", typ: 0 },
    ], false),
    "TokenIndependence": o([
        { json: "ActorName", js: "ActorName", typ: "" },
    ], false),
    "WajWoSw7QmERBT9E": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("The7XE9Evf2KG85QxEwToken") },
        { json: "items", js: "items", typ: a(r("The7XE9Evf2KG85QxEwItem")) },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The1X4Q0C9ZwrM3VjZlPermission") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "The7XE9Evf2KG85QxEwItem": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "img", js: "img", typ: r("Img") },
        { json: "data", js: "data", typ: r("TentacledData") },
        { json: "_id", js: "_id", typ: "" },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: null },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("PurplePermission") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "TentacledData": o([
        { json: "description", js: "description", typ: r("PurpleDescription") },
        { json: "source", js: "source", typ: "" },
        { json: "quantity", js: "quantity", typ: 0 },
        { json: "weight", js: "weight", typ: 0 },
        { json: "equipped", js: "equipped", typ: true },
        { json: "identified", js: "identified", typ: true },
        { json: "value", js: "value", typ: r("ValueClass") },
        { json: "config", js: "config", typ: r("FluffyConfig") },
        { json: "actionDie", js: "actionDie", typ: r("ValueElement") },
        { json: "toHit", js: "toHit", typ: "" },
        { json: "damage", js: "damage", typ: "" },
        { json: "range", js: "range", typ: "" },
        { json: "twoHanded", js: "twoHanded", typ: true },
        { json: "melee", js: "melee", typ: true },
        { json: "shortRangeStrength", js: "shortRangeStrength", typ: 0 },
        { json: "subdual", js: "subdual", typ: 0 },
        { json: "backstab", js: "backstab", typ: true },
        { json: "backstabDamage", js: "backstabDamage", typ: null },
        { json: "doubleIfMounted", js: "doubleIfMounted", typ: 0 },
        { json: "critRange", js: "critRange", typ: 0 },
    ], false),
    "ValueClass": o([
        { json: "pp", js: "pp", typ: 0 },
        { json: "ep", js: "ep", typ: 0 },
        { json: "gp", js: "gp", typ: 0 },
        { json: "sp", js: "sp", typ: 0 },
        { json: "cp", js: "cp", typ: 0 },
    ], false),
    "The7XE9Evf2KG85QxEwToken": o([
        { json: "name", js: "name", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "scale", js: "scale", typ: 0 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "lockRotation", js: "lockRotation", typ: true },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "alpha", js: "alpha", typ: 0 },
        { json: "vision", js: "vision", typ: true },
        { json: "dimSight", js: "dimSight", typ: 0 },
        { json: "brightSight", js: "brightSight", typ: 0 },
        { json: "sightAngle", js: "sightAngle", typ: 0 },
        { json: "light", js: "light", typ: r("Light") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
        { json: "randomImg", js: "randomImg", typ: true },
    ], false),
    "A1Qez7JD6Vy1MrOO": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("A1Qez7JD6Vy1MrOOToken") },
        { json: "items", js: "items", typ: a("any") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The1X4Q0C9ZwrM3VjZlPermission") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "A1Qez7JD6Vy1MrOOToken": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorId", js: "actorId", typ: "" },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "actorData", js: "actorData", typ: r("TentacledActorData") },
        { json: "img", js: "img", typ: "" },
        { json: "tint", js: "tint", typ: null },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "scale", js: "scale", typ: 0 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: null },
        { json: "y", js: "y", typ: null },
        { json: "elevation", js: "elevation", typ: 0 },
        { json: "lockRotation", js: "lockRotation", typ: true },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "alpha", js: "alpha", typ: 0 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "dimSight", js: "dimSight", typ: 0 },
        { json: "brightSight", js: "brightSight", typ: 0 },
        { json: "sightAngle", js: "sightAngle", typ: 0 },
        { json: "light", js: "light", typ: r("Light") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("IndecentFlags") },
        { json: "tokenId", js: "tokenId", typ: null },
        { json: "randomImg", js: "randomImg", typ: true },
    ], false),
    "TentacledActorData": o([
        { json: "data", js: "data", typ: r("StickyData") },
    ], false),
    "StickyData": o([
        { json: "attributes", js: "attributes", typ: r("FluffyAttributes") },
        { json: "details", js: "details", typ: r("TentacledDetails") },
    ], false),
    "TentacledDetails": o([
        { json: "notes", js: "notes", typ: r("HitDice") },
    ], false),
    "IndecentFlags": o([
        { json: "token-independence", js: "token-independence", typ: r("TokenIndependence") },
        { json: "token-attacher", js: "token-attacher", typ: r("IndigoTokenAttacher") },
        { json: "monks-little-details", js: "monks-little-details", typ: r("MonksLittleDetails") },
    ], false),
    "IndigoTokenAttacher": o([
        { json: "pos", js: "pos", typ: r("Pos") },
        { json: "prototypeAttached", js: "prototypeAttached", typ: r("TentacledPrototypeAttached") },
        { json: "grid", js: "grid", typ: r("Grid") },
    ], false),
    "TentacledPrototypeAttached": o([
        { json: "Tile", js: "Tile", typ: a(r("PurpleTile")) },
    ], false),
    "PurpleTile": o([
        { json: "img", js: "img", typ: "" },
        { json: "width", js: "width", typ: 3.14 },
        { json: "height", js: "height", typ: 3.14 },
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
        { json: "z", js: "z", typ: 0 },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "alpha", js: "alpha", typ: 0 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "locked", js: "locked", typ: true },
        { json: "overhead", js: "overhead", typ: true },
        { json: "occlusion", js: "occlusion", typ: r("Occlusion") },
        { json: "video", js: "video", typ: r("Video") },
        { json: "flags", js: "flags", typ: r("HilariousFlags") },
    ], false),
    "HilariousFlags": o([
        { json: "token-attacher", js: "token-attacher", typ: r("IndecentTokenAttacher") },
    ], false),
    "IndecentTokenAttacher": o([
        { json: "parent", js: "parent", typ: "" },
        { json: "offset", js: "offset", typ: r("TentacledOffset") },
    ], false),
    "TentacledOffset": o([
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
        { json: "rot", js: "rot", typ: 0 },
        { json: "centerX", js: "centerX", typ: 3.14 },
        { json: "centerY", js: "centerY", typ: 3.14 },
        { json: "offRot", js: "offRot", typ: 0 },
        { json: "size", js: "size", typ: r("TentacledSize") },
        { json: "elevation", js: "elevation", typ: r("Elevation") },
        { json: "points", js: "points", typ: u(undefined, a("any")) },
    ], false),
    "TentacledSize": o([
        { json: "width", js: "width", typ: 3.14 },
        { json: "height", js: "height", typ: 3.14 },
        { json: "widthBase", js: "widthBase", typ: 0 },
        { json: "heightBase", js: "heightBase", typ: 0 },
    ], false),
    "Occlusion": o([
        { json: "mode", js: "mode", typ: 0 },
        { json: "alpha", js: "alpha", typ: 0 },
    ], false),
    "Video": o([
        { json: "loop", js: "loop", typ: true },
        { json: "autoplay", js: "autoplay", typ: true },
        { json: "volume", js: "volume", typ: 0 },
    ], false),
    "AlFyYgeIWH8JB6Wi": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("AlFyYgeIWH8JB6WiToken") },
        { json: "items", js: "items", typ: a("any") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The1X4Q0C9ZwrM3VjZlPermission") },
        { json: "flags", js: "flags", typ: r("AlFyYgeIWH8JB6WiFlags") },
    ], false),
    "AlFyYgeIWH8JB6WiFlags": o([
        { json: "core", js: "core", typ: r("PurpleCore") },
    ], false),
    "AlFyYgeIWH8JB6WiToken": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorId", js: "actorId", typ: "" },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "actorData", js: "actorData", typ: r("TentacledActorData") },
        { json: "img", js: "img", typ: "" },
        { json: "tint", js: "tint", typ: null },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "scale", js: "scale", typ: 0 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: null },
        { json: "y", js: "y", typ: null },
        { json: "elevation", js: "elevation", typ: 0 },
        { json: "lockRotation", js: "lockRotation", typ: true },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "alpha", js: "alpha", typ: 3.14 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "dimSight", js: "dimSight", typ: 0 },
        { json: "brightSight", js: "brightSight", typ: 0 },
        { json: "sightAngle", js: "sightAngle", typ: 0 },
        { json: "light", js: "light", typ: r("Light") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("AmbitiousFlags") },
        { json: "tokenId", js: "tokenId", typ: null },
        { json: "randomImg", js: "randomImg", typ: true },
    ], false),
    "AmbitiousFlags": o([
        { json: "token-independence", js: "token-independence", typ: r("TokenIndependence") },
        { json: "token-attacher", js: "token-attacher", typ: r("HilariousTokenAttacher") },
        { json: "monks-little-details", js: "monks-little-details", typ: r("MonksLittleDetails") },
    ], false),
    "HilariousTokenAttacher": o([
        { json: "pos", js: "pos", typ: r("Pos") },
        { json: "prototypeAttached", js: "prototypeAttached", typ: r("StickyPrototypeAttached") },
        { json: "grid", js: "grid", typ: r("Grid") },
    ], false),
    "StickyPrototypeAttached": o([
        { json: "AmbientLight", js: "AmbientLight", typ: a(r("PurpleAmbientLight")) },
        { json: "Tile", js: "Tile", typ: a(r("PurpleTile")) },
    ], false),
    "VwOLffqYjKtbQEYR": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("CboJqy8BllPEdTQDData") },
        { json: "token", js: "token", typ: r("The7XE9Evf2KG85QxEwToken") },
        { json: "items", js: "items", typ: a(r("CboJqy8BllPEdTQDItem")) },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: m(0) },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "CboJqy8BllPEdTQDData": o([
        { json: "abilities", js: "abilities", typ: r("Abilities") },
        { json: "attributes", js: "attributes", typ: r("TentacledAttributes") },
        { json: "details", js: "details", typ: r("StickyDetails") },
        { json: "saves", js: "saves", typ: r("Saves") },
        { json: "currency", js: "currency", typ: r("Currency") },
        { json: "config", js: "config", typ: r("PurpleConfig") },
        { json: "skills", js: "skills", typ: r("PurpleSkills") },
        { json: "inventory", js: "inventory", typ: r("Inventory") },
        { json: "class", js: "class", typ: r("FluffyClass") },
    ], false),
    "TentacledAttributes": o([
        { json: "ac", js: "ac", typ: r("FluffyAC") },
        { json: "actionDice", js: "actionDice", typ: r("ActionDiceClass") },
        { json: "critical", js: "critical", typ: r("Critical") },
        { json: "fumble", js: "fumble", typ: r("Fumble") },
        { json: "hitDice", js: "hitDice", typ: r("HitDice") },
        { json: "hp", js: "hp", typ: r("PurpleHP") },
        { json: "init", js: "init", typ: r("Init") },
        { json: "speed", js: "speed", typ: r("Speed") },
    ], false),
    "FluffyAC": o([
        { json: "value", js: "value", typ: "" },
        { json: "checkPenalty", js: "checkPenalty", typ: 0 },
        { json: "speedPenalty", js: "speedPenalty", typ: 0 },
    ], false),
    "FluffyClass": o([
        { json: "spellCheck", js: "spellCheck", typ: 0 },
        { json: "spellCheckAbility", js: "spellCheckAbility", typ: r("Ability") },
        { json: "deity", js: "deity", typ: null },
        { json: "disapproval", js: "disapproval", typ: "" },
        { json: "disapprovalTable", js: "disapprovalTable", typ: "" },
        { json: "luckDie", js: "luckDie", typ: "" },
        { json: "backstab", js: "backstab", typ: "" },
        { json: "luckyWeapon", js: "luckyWeapon", typ: null },
        { json: "patron", js: "patron", typ: null },
        { json: "familiar", js: "familiar", typ: null },
        { json: "corruption", js: "corruption", typ: a("any") },
        { json: "className", js: "className", typ: "" },
    ], false),
    "StickyDetails": o([
        { json: "level", js: "level", typ: r("Level") },
        { json: "alignment", js: "alignment", typ: r("Alignment") },
        { json: "attackBonus", js: "attackBonus", typ: "" },
        { json: "languages", js: "languages", typ: "" },
        { json: "occupation", js: "occupation", typ: r("HitDice") },
        { json: "title", js: "title", typ: "" },
        { json: "notes", js: "notes", typ: r("HitDice") },
        { json: "birthAugur", js: "birthAugur", typ: "" },
        { json: "critRange", js: "critRange", typ: 0 },
        { json: "xp", js: "xp", typ: r("XP") },
        { json: "sheetClass", js: "sheetClass", typ: "" },
    ], false),
    "XP": o([
        { json: "value", js: "value", typ: 0 },
        { json: "min", js: "min", typ: 0 },
        { json: "max", js: "max", typ: 0 },
    ], false),
    "Inventory": o([
        { json: "weapons", js: "weapons", typ: a("any") },
        { json: "ammunition", js: "ammunition", typ: a("any") },
        { json: "armor", js: "armor", typ: a("any") },
        { json: "equipment", js: "equipment", typ: a("any") },
        { json: "mount", js: "mount", typ: a("any") },
    ], false),
    "PurpleSkills": o([
        { json: "findSecretDoors", js: "findSecretDoors", typ: r("DivineAid") },
        { json: "divineAid", js: "divineAid", typ: r("DivineAid") },
        { json: "turnUnholy", js: "turnUnholy", typ: r("DivineAid") },
        { json: "layOnHands", js: "layOnHands", typ: r("DivineAid") },
        { json: "sneakSilently", js: "sneakSilently", typ: r("CastSpellFromScroll") },
        { json: "hideInShadows", js: "hideInShadows", typ: r("CastSpellFromScroll") },
        { json: "pickPockets", js: "pickPockets", typ: r("CastSpellFromScroll") },
        { json: "climbSheerSurfaces", js: "climbSheerSurfaces", typ: r("CastSpellFromScroll") },
        { json: "pickLock", js: "pickLock", typ: r("CastSpellFromScroll") },
        { json: "findTrap", js: "findTrap", typ: r("CastSpellFromScroll") },
        { json: "disableTrap", js: "disableTrap", typ: r("CastSpellFromScroll") },
        { json: "forgeDocument", js: "forgeDocument", typ: r("CastSpellFromScroll") },
        { json: "disguiseSelf", js: "disguiseSelf", typ: r("CastSpellFromScroll") },
        { json: "readLanguages", js: "readLanguages", typ: r("CastSpellFromScroll") },
        { json: "handlePoison", js: "handlePoison", typ: r("HandlePoison") },
        { json: "castSpellFromScroll", js: "castSpellFromScroll", typ: r("CastSpellFromScroll") },
        { json: "sneakAndHide", js: "sneakAndHide", typ: r("HandlePoison") },
        { json: "shieldBash", js: "shieldBash", typ: r("CastSpellFromScroll") },
    ], false),
    "CastSpellFromScroll": o([
        { json: "label", js: "label", typ: "" },
        { json: "ability", js: "ability", typ: r("Ability") },
        { json: "die", js: "die", typ: u(undefined, r("CastSpellFromScrollDie")) },
        { json: "value", js: "value", typ: "" },
        { json: "useDeed", js: "useDeed", typ: u(undefined, true) },
        { json: "useDisapprovalRange", js: "useDisapprovalRange", typ: u(undefined, true) },
    ], false),
    "DivineAid": o([
        { json: "label", js: "label", typ: "" },
        { json: "ability", js: "ability", typ: r("Ability") },
        { json: "value", js: "value", typ: 0 },
        { json: "useDisapprovalRange", js: "useDisapprovalRange", typ: u(undefined, true) },
    ], false),
    "HandlePoison": o([
        { json: "label", js: "label", typ: r("HandlePoisonLabel") },
        { json: "value", js: "value", typ: "" },
    ], false),
    "CboJqy8BllPEdTQDItem": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "img", js: "img", typ: r("Img") },
        { json: "data", js: "data", typ: r("IndigoData") },
        { json: "_id", js: "_id", typ: "" },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: null },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("PurplePermission") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "IndigoData": o([
        { json: "description", js: "description", typ: r("PurpleDescription") },
        { json: "source", js: "source", typ: "" },
        { json: "quantity", js: "quantity", typ: 0 },
        { json: "weight", js: "weight", typ: 0 },
        { json: "equipped", js: "equipped", typ: true },
        { json: "identified", js: "identified", typ: true },
        { json: "value", js: "value", typ: r("ValueClass") },
        { json: "config", js: "config", typ: u(undefined, r("FluffyConfig")) },
        { json: "actionDie", js: "actionDie", typ: u(undefined, r("ValueElement")) },
        { json: "toHit", js: "toHit", typ: u(undefined, "") },
        { json: "damage", js: "damage", typ: u(undefined, "") },
        { json: "range", js: "range", typ: u(undefined, "") },
        { json: "twoHanded", js: "twoHanded", typ: u(undefined, 0) },
        { json: "melee", js: "melee", typ: u(undefined, true) },
        { json: "shortRangeStrength", js: "shortRangeStrength", typ: u(undefined, 0) },
        { json: "subdual", js: "subdual", typ: u(undefined, 0) },
        { json: "backstab", js: "backstab", typ: u(undefined, true) },
        { json: "backstabDamage", js: "backstabDamage", typ: u(undefined, null) },
        { json: "doubleIfMounted", js: "doubleIfMounted", typ: u(undefined, 0) },
        { json: "critRange", js: "critRange", typ: u(undefined, 0) },
    ], false),
    "UgYS0IqeRvhgMvVZ": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("The5BmlHKMGzxICGRZpToken") },
        { json: "items", js: "items", typ: a(r("FQFMMXNwe5ORDVkxItem")) },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The1X4Q0C9ZwrM3VjZlPermission") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "FQFMMXNwe5ORDVkxItem": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("FluffyData") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The1X4Q0C9ZwrM3VjZlPermission") },
        { json: "flags", js: "flags", typ: r("AlFyYgeIWH8JB6WiFlags") },
    ], false),
    "FTz7F4OKXgFGgbbz": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The74WAVDTssh4Wnov9Data") },
        { json: "token", js: "token", typ: r("FTz7F4OKXgFGgbbzToken") },
        { json: "items", js: "items", typ: a("any") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The74WAVDTssh4Wnov9Permission") },
        { json: "flags", js: "flags", typ: r("The74WAVDTssh4Wnov9Flags") },
    ], false),
    "FTz7F4OKXgFGgbbzToken": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorId", js: "actorId", typ: "" },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "actorData", js: "actorData", typ: r("ActorDataClass") },
        { json: "img", js: "img", typ: "" },
        { json: "tint", js: "tint", typ: null },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "scale", js: "scale", typ: 0 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: null },
        { json: "y", js: "y", typ: null },
        { json: "elevation", js: "elevation", typ: 0 },
        { json: "lockRotation", js: "lockRotation", typ: true },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "alpha", js: "alpha", typ: 3.14 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "dimSight", js: "dimSight", typ: 0 },
        { json: "brightSight", js: "brightSight", typ: 0 },
        { json: "sightAngle", js: "sightAngle", typ: 0 },
        { json: "light", js: "light", typ: r("Light") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("StickyFlags") },
        { json: "tokenId", js: "tokenId", typ: null },
        { json: "randomImg", js: "randomImg", typ: true },
    ], false),
    "FD7YLLZnmAFXZLvs": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("Gkf07Q8Arkhdtd8NToken") },
        { json: "items", js: "items", typ: a("any") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The1X4Q0C9ZwrM3VjZlPermission") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "Gkf07Q8Arkhdtd8NToken": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorId", js: "actorId", typ: "" },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "actorData", js: "actorData", typ: r("ActorDataClass") },
        { json: "img", js: "img", typ: "" },
        { json: "tint", js: "tint", typ: null },
        { json: "width", js: "width", typ: 3.14 },
        { json: "height", js: "height", typ: 3.14 },
        { json: "scale", js: "scale", typ: 0 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: null },
        { json: "y", js: "y", typ: null },
        { json: "elevation", js: "elevation", typ: 0 },
        { json: "lockRotation", js: "lockRotation", typ: true },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "alpha", js: "alpha", typ: 0 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "dimSight", js: "dimSight", typ: 0 },
        { json: "brightSight", js: "brightSight", typ: 0 },
        { json: "sightAngle", js: "sightAngle", typ: 0 },
        { json: "light", js: "light", typ: r("Light") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("CunningFlags") },
        { json: "tokenId", js: "tokenId", typ: null },
        { json: "randomImg", js: "randomImg", typ: true },
    ], false),
    "CunningFlags": o([
        { json: "monks-little-details", js: "monks-little-details", typ: r("MonksLittleDetails") },
        { json: "token-attacher", js: "token-attacher", typ: r("AmbitiousTokenAttacher") },
    ], false),
    "AmbitiousTokenAttacher": o([
        { json: "pos", js: "pos", typ: r("Pos") },
    ], false),
    "Ka9XBKR0HEwWkMCT": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("The7XE9Evf2KG85QxEwToken") },
        { json: "items", js: "items", typ: a(r("Ka9XBKR0HEwWkMCTItem")) },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The1X4Q0C9ZwrM3VjZlPermission") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "Ka9XBKR0HEwWkMCTItem": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("FluffyData") },
        { json: "_id", js: "_id", typ: "" },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: null },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The1X4Q0C9ZwrM3VjZlPermission") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "DqngE4C3U65Nwj9O": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The74WAVDTssh4Wnov9Data") },
        { json: "token", js: "token", typ: r("L297NgtDAgGNc6OgToken") },
        { json: "items", js: "items", typ: a("any") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The74WAVDTssh4Wnov9Permission") },
        { json: "flags", js: "flags", typ: r("The74WAVDTssh4Wnov9Flags") },
    ], false),
    "L297NgtDAgGNc6OgToken": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorId", js: "actorId", typ: "" },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "actorData", js: "actorData", typ: r("ActorDataClass") },
        { json: "img", js: "img", typ: "" },
        { json: "tint", js: "tint", typ: null },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "scale", js: "scale", typ: 0 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: null },
        { json: "y", js: "y", typ: null },
        { json: "elevation", js: "elevation", typ: null },
        { json: "lockRotation", js: "lockRotation", typ: true },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "alpha", js: "alpha", typ: 3.14 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "dimSight", js: "dimSight", typ: 0 },
        { json: "brightSight", js: "brightSight", typ: 0 },
        { json: "sightAngle", js: "sightAngle", typ: 0 },
        { json: "light", js: "light", typ: r("Light") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("MagentaFlags") },
        { json: "tokenId", js: "tokenId", typ: null },
        { json: "randomImg", js: "randomImg", typ: true },
    ], false),
    "MagentaFlags": o([
        { json: "token-independence", js: "token-independence", typ: r("TokenIndependence") },
        { json: "token-attacher", js: "token-attacher", typ: r("AmbitiousTokenAttacher") },
    ], false),
    "LZwSMvDFqse10X3H": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("L297NgtDAgGNc6OgToken") },
        { json: "items", js: "items", typ: a("any") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The74WAVDTssh4Wnov9Permission") },
        { json: "flags", js: "flags", typ: r("The74WAVDTssh4Wnov9Flags") },
    ], false),
    "MpR4ClJVuZzITfUy": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("MpR4ClJVuZzITfUyToken") },
        { json: "items", js: "items", typ: a("any") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The1X4Q0C9ZwrM3VjZlPermission") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "MpR4ClJVuZzITfUyToken": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorId", js: "actorId", typ: "" },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "actorData", js: "actorData", typ: r("ActorDataClass") },
        { json: "img", js: "img", typ: "" },
        { json: "tint", js: "tint", typ: null },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "scale", js: "scale", typ: 3.14 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: null },
        { json: "y", js: "y", typ: null },
        { json: "elevation", js: "elevation", typ: 0 },
        { json: "lockRotation", js: "lockRotation", typ: true },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "alpha", js: "alpha", typ: 0 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "dimSight", js: "dimSight", typ: 0 },
        { json: "brightSight", js: "brightSight", typ: 0 },
        { json: "sightAngle", js: "sightAngle", typ: 0 },
        { json: "light", js: "light", typ: r("Light") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("FriskyFlags") },
        { json: "tokenId", js: "tokenId", typ: null },
        { json: "randomImg", js: "randomImg", typ: true },
    ], false),
    "FriskyFlags": o([
        { json: "monks-little-details", js: "monks-little-details", typ: r("MonksLittleDetails") },
        { json: "token-attacher", js: "token-attacher", typ: r("CunningTokenAttacher") },
    ], false),
    "CunningTokenAttacher": o([
        { json: "pos", js: "pos", typ: r("Pos") },
        { json: "prototypeAttached", js: "prototypeAttached", typ: r("IndigoPrototypeAttached") },
        { json: "grid", js: "grid", typ: r("Grid") },
    ], false),
    "IndigoPrototypeAttached": o([
        { json: "AmbientLight", js: "AmbientLight", typ: a(r("FluffyAmbientLight")) },
    ], false),
    "FluffyAmbientLight": o([
        { json: "x", js: "x", typ: 0 },
        { json: "y", js: "y", typ: 0 },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "walls", js: "walls", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "config", js: "config", typ: r("Light") },
        { json: "hidden", js: "hidden", typ: true },
        { json: "flags", js: "flags", typ: r("MischievousFlags") },
    ], false),
    "MischievousFlags": o([
        { json: "lightmask", js: "lightmask", typ: r("Lightmask") },
        { json: "token-attacher", js: "token-attacher", typ: r("StickyTokenAttacher") },
    ], false),
    "Lightmask": o([
        { json: "shape", js: "shape", typ: "" },
        { json: "customWallIDs", js: "customWallIDs", typ: null },
        { json: "relative", js: "relative", typ: true },
        { json: "customEdges", js: "customEdges", typ: a("any") },
    ], false),
    "V5Mz2SWYOGveX2DI": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("V5Mz2SWYOGveX2DIToken") },
        { json: "items", js: "items", typ: a("any") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The1X4Q0C9ZwrM3VjZlPermission") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "V5Mz2SWYOGveX2DIToken": o([
        { json: "_id", js: "_id", typ: r("ID") },
        { json: "name", js: "name", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorId", js: "actorId", typ: "" },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "actorData", js: "actorData", typ: r("PurpleActorData") },
        { json: "img", js: "img", typ: "" },
        { json: "tint", js: "tint", typ: null },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "scale", js: "scale", typ: 0 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: null },
        { json: "y", js: "y", typ: null },
        { json: "elevation", js: "elevation", typ: 0 },
        { json: "lockRotation", js: "lockRotation", typ: true },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "alpha", js: "alpha", typ: 0 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "dimSight", js: "dimSight", typ: 0 },
        { json: "brightSight", js: "brightSight", typ: 0 },
        { json: "sightAngle", js: "sightAngle", typ: 0 },
        { json: "light", js: "light", typ: r("Light") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("BraggadociousFlags") },
        { json: "tokenId", js: "tokenId", typ: null },
        { json: "randomImg", js: "randomImg", typ: true },
    ], false),
    "BraggadociousFlags": o([
        { json: "monks-little-details", js: "monks-little-details", typ: r("MonksLittleDetails") },
        { json: "token-attacher", js: "token-attacher", typ: r("MagentaTokenAttacher") },
    ], false),
    "MagentaTokenAttacher": o([
        { json: "pos", js: "pos", typ: r("Pos") },
        { json: "prototypeAttached", js: "prototypeAttached", typ: r("IndecentPrototypeAttached") },
        { json: "grid", js: "grid", typ: r("Grid") },
    ], false),
    "IndecentPrototypeAttached": o([
        { json: "Tile", js: "Tile", typ: a(r("FluffyTile")) },
        { json: "Wall", js: "Wall", typ: a(r("PurpleWall")) },
    ], false),
    "FluffyTile": o([
        { json: "img", js: "img", typ: "" },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
        { json: "z", js: "z", typ: 0 },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "alpha", js: "alpha", typ: 0 },
        { json: "tint", js: "tint", typ: "" },
        { json: "hidden", js: "hidden", typ: true },
        { json: "locked", js: "locked", typ: true },
        { json: "overhead", js: "overhead", typ: true },
        { json: "occlusion", js: "occlusion", typ: r("Occlusion") },
        { json: "video", js: "video", typ: r("Video") },
        { json: "flags", js: "flags", typ: r("Flags1") },
    ], false),
    "Flags1": o([
        { json: "monks-active-tiles", js: "monks-active-tiles", typ: r("MonksActiveTiles") },
        { json: "token-attacher", js: "token-attacher", typ: r("IndecentTokenAttacher") },
    ], false),
    "MonksActiveTiles": o([
        { json: "active", js: "active", typ: true },
        { json: "restriction", js: "restriction", typ: "" },
        { json: "controlled", js: "controlled", typ: "" },
        { json: "trigger", js: "trigger", typ: "" },
        { json: "pertoken", js: "pertoken", typ: true },
        { json: "minrequired", js: "minrequired", typ: 0 },
        { json: "chance", js: "chance", typ: 0 },
        { json: "actions", js: "actions", typ: a("any") },
    ], false),
    "ZumJ7Pxm6HFfC8Wh": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("ZumJ7Pxm6HFfC8WhToken") },
        { json: "items", js: "items", typ: a(r("ZumJ7Pxm6HFfC8WhItem")) },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The74WAVDTssh4Wnov9Permission") },
        { json: "flags", js: "flags", typ: r("The74WAVDTssh4Wnov9Flags") },
    ], false),
    "ZumJ7Pxm6HFfC8WhItem": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("FluffyData") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: null },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("FluffyPermission") },
        { json: "flags", js: "flags", typ: r("The74WAVDTssh4Wnov9Flags") },
    ], false),
    "FluffyPermission": o([
        { json: "default", js: "default", typ: 0 },
        { json: "C3mdR4yXO0ayyVJB", js: "C3mdR4yXO0ayyVJB", typ: 0 },
    ], false),
    "ZumJ7Pxm6HFfC8WhToken": o([
        { json: "name", js: "name", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "scale", js: "scale", typ: 0 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "lockRotation", js: "lockRotation", typ: true },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "alpha", js: "alpha", typ: 0 },
        { json: "vision", js: "vision", typ: true },
        { json: "dimSight", js: "dimSight", typ: 0 },
        { json: "brightSight", js: "brightSight", typ: 0 },
        { json: "dimLight", js: "dimLight", typ: 0 },
        { json: "brightLight", js: "brightLight", typ: 0 },
        { json: "sightAngle", js: "sightAngle", typ: 0 },
        { json: "lightAngle", js: "lightAngle", typ: 0 },
        { json: "lightAlpha", js: "lightAlpha", typ: 3.14 },
        { json: "lightAnimation", js: "lightAnimation", typ: r("LightAnimation") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
        { json: "randomImg", js: "randomImg", typ: true },
        { json: "tint", js: "tint", typ: null },
        { json: "lightColor", js: "lightColor", typ: null },
        { json: "x", js: "x", typ: null },
        { json: "y", js: "y", typ: null },
        { json: "elevation", js: "elevation", typ: null },
        { json: "light", js: "light", typ: r("Light") },
        { json: "actorId", js: "actorId", typ: u(undefined, "") },
    ], false),
    "LightAnimation": o([
        { json: "speed", js: "speed", typ: 0 },
        { json: "intensity", js: "intensity", typ: 0 },
    ], false),
    "CMHK1DGWgwzAPHyx": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("CMHK1DGWgwzAPHyxToken") },
        { json: "items", js: "items", typ: a(r("The7XE9Evf2KG85QxEwItem")) },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The74WAVDTssh4Wnov9Permission") },
        { json: "flags", js: "flags", typ: r("The74WAVDTssh4Wnov9Flags") },
    ], false),
    "CMHK1DGWgwzAPHyxToken": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorId", js: "actorId", typ: "" },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "actorData", js: "actorData", typ: r("StickyActorData") },
        { json: "img", js: "img", typ: "" },
        { json: "tint", js: "tint", typ: null },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "scale", js: "scale", typ: 3.14 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: null },
        { json: "y", js: "y", typ: null },
        { json: "elevation", js: "elevation", typ: null },
        { json: "lockRotation", js: "lockRotation", typ: true },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "alpha", js: "alpha", typ: 0 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "dimSight", js: "dimSight", typ: 0 },
        { json: "brightSight", js: "brightSight", typ: 0 },
        { json: "sightAngle", js: "sightAngle", typ: 0 },
        { json: "light", js: "light", typ: r("Light") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("Flags2") },
        { json: "tokenId", js: "tokenId", typ: null },
        { json: "randomImg", js: "randomImg", typ: true },
    ], false),
    "StickyActorData": o([
        { json: "itemUpdates", js: "itemUpdates", typ: r("ItemUpdates") },
    ], false),
    "ItemUpdates": o([
        { json: "gpnCqtrI765ghGos", js: "gpnCqtrI765ghGos", typ: r("GpnCqtrI765GhGos") },
    ], false),
    "GpnCqtrI765GhGos": o([
        { json: "name", js: "name", typ: "" },
        { json: "data", js: "data", typ: r("GpnCqtrI765GhGosData") },
    ], false),
    "GpnCqtrI765GhGosData": o([
        { json: "toHit", js: "toHit", typ: "" },
        { json: "damage", js: "damage", typ: "" },
        { json: "description", js: "description", typ: r("FluffyDescription") },
    ], false),
    "FluffyDescription": o([
        { json: "summary", js: "summary", typ: "" },
    ], false),
    "Flags2": o([
        { json: "token-independence", js: "token-independence", typ: r("TokenIndependence") },
        { json: "monks-little-details", js: "monks-little-details", typ: r("MonksLittleDetails") },
    ], false),
    "DFDNBDueDBXV4Jho": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("DFDNBDueDBXV4JhoData") },
        { json: "token", js: "token", typ: r("The5BmlHKMGzxICGRZpToken") },
        { json: "items", js: "items", typ: a("any") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: m(0) },
        { json: "flags", js: "flags", typ: r("DFDNBDueDBXV4JhoFlags") },
    ], false),
    "DFDNBDueDBXV4JhoData": o([
        { json: "abilities", js: "abilities", typ: r("Abilities") },
        { json: "attributes", js: "attributes", typ: r("StickyAttributes") },
        { json: "details", js: "details", typ: r("IndigoDetails") },
        { json: "saves", js: "saves", typ: r("Saves") },
        { json: "currency", js: "currency", typ: r("Currency") },
        { json: "config", js: "config", typ: r("PurpleConfig") },
        { json: "skills", js: "skills", typ: r("FluffySkills") },
        { json: "inventory", js: "inventory", typ: r("Inventory") },
        { json: "class", js: "class", typ: r("TentacledClass") },
    ], false),
    "StickyAttributes": o([
        { json: "ac", js: "ac", typ: r("PurpleAC") },
        { json: "actionDice", js: "actionDice", typ: r("ActionDiceClass") },
        { json: "critical", js: "critical", typ: r("Critical") },
        { json: "fumble", js: "fumble", typ: r("Fumble") },
        { json: "hitDice", js: "hitDice", typ: r("HitDice") },
        { json: "hp", js: "hp", typ: r("PurpleHP") },
        { json: "init", js: "init", typ: r("Init") },
        { json: "speed", js: "speed", typ: r("Speed") },
    ], false),
    "TentacledClass": o([
        { json: "spellCheck", js: "spellCheck", typ: "" },
        { json: "spellCheckAbility", js: "spellCheckAbility", typ: r("Ability") },
        { json: "deity", js: "deity", typ: "" },
        { json: "disapproval", js: "disapproval", typ: "" },
        { json: "disapprovalTable", js: "disapprovalTable", typ: "" },
        { json: "luckDie", js: "luckDie", typ: "" },
        { json: "backstab", js: "backstab", typ: "" },
        { json: "luckyWeapon", js: "luckyWeapon", typ: null },
        { json: "patron", js: "patron", typ: null },
        { json: "familiar", js: "familiar", typ: null },
        { json: "corruption", js: "corruption", typ: a("any") },
        { json: "className", js: "className", typ: "" },
    ], false),
    "IndigoDetails": o([
        { json: "level", js: "level", typ: r("Level") },
        { json: "alignment", js: "alignment", typ: r("Alignment") },
        { json: "attackBonus", js: "attackBonus", typ: "" },
        { json: "languages", js: "languages", typ: "" },
        { json: "occupation", js: "occupation", typ: r("HitDice") },
        { json: "title", js: "title", typ: r("HitDice") },
        { json: "notes", js: "notes", typ: r("HitDice") },
        { json: "birthAugur", js: "birthAugur", typ: "" },
        { json: "critRange", js: "critRange", typ: 0 },
        { json: "xp", js: "xp", typ: r("XP") },
        { json: "sheetClass", js: "sheetClass", typ: "" },
    ], false),
    "FluffySkills": o([
        { json: "findSecretDoors", js: "findSecretDoors", typ: r("CastSpellFromScroll") },
        { json: "divineAid", js: "divineAid", typ: r("CastSpellFromScroll") },
        { json: "turnUnholy", js: "turnUnholy", typ: r("CastSpellFromScroll") },
        { json: "layOnHands", js: "layOnHands", typ: r("CastSpellFromScroll") },
        { json: "sneakSilently", js: "sneakSilently", typ: r("CastSpellFromScroll") },
        { json: "hideInShadows", js: "hideInShadows", typ: r("CastSpellFromScroll") },
        { json: "pickPockets", js: "pickPockets", typ: r("CastSpellFromScroll") },
        { json: "climbSheerSurfaces", js: "climbSheerSurfaces", typ: r("CastSpellFromScroll") },
        { json: "pickLock", js: "pickLock", typ: r("CastSpellFromScroll") },
        { json: "findTrap", js: "findTrap", typ: r("CastSpellFromScroll") },
        { json: "disableTrap", js: "disableTrap", typ: r("CastSpellFromScroll") },
        { json: "forgeDocument", js: "forgeDocument", typ: r("CastSpellFromScroll") },
        { json: "disguiseSelf", js: "disguiseSelf", typ: r("CastSpellFromScroll") },
        { json: "readLanguages", js: "readLanguages", typ: r("CastSpellFromScroll") },
        { json: "handlePoison", js: "handlePoison", typ: r("HandlePoison") },
        { json: "castSpellFromScroll", js: "castSpellFromScroll", typ: r("CastSpellFromScroll") },
        { json: "sneakAndHide", js: "sneakAndHide", typ: r("HandlePoison") },
        { json: "shieldBash", js: "shieldBash", typ: r("CastSpellFromScroll") },
    ], false),
    "DFDNBDueDBXV4JhoFlags": o([
        { json: "core", js: "core", typ: r("FluffyCore") },
    ], false),
    "FluffyCore": o([
        { json: "sheetClass", js: "sheetClass", typ: "" },
    ], false),
    "QAfhPxxtDQi5UlpY": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("QAfhPxxtDQi5UlpYToken") },
        { json: "items", js: "items", typ: a("any") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The74WAVDTssh4Wnov9Permission") },
        { json: "flags", js: "flags", typ: r("AlFyYgeIWH8JB6WiFlags") },
    ], false),
    "QAfhPxxtDQi5UlpYToken": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorId", js: "actorId", typ: "" },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "actorData", js: "actorData", typ: r("PurpleActorData") },
        { json: "img", js: "img", typ: "" },
        { json: "tint", js: "tint", typ: null },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "scale", js: "scale", typ: 0 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: null },
        { json: "y", js: "y", typ: null },
        { json: "elevation", js: "elevation", typ: null },
        { json: "lockRotation", js: "lockRotation", typ: true },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "alpha", js: "alpha", typ: 3.14 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "dimSight", js: "dimSight", typ: 0 },
        { json: "brightSight", js: "brightSight", typ: 0 },
        { json: "dimLight", js: "dimLight", typ: 0 },
        { json: "brightLight", js: "brightLight", typ: 0 },
        { json: "sightAngle", js: "sightAngle", typ: 0 },
        { json: "lightAngle", js: "lightAngle", typ: 0 },
        { json: "lightColor", js: "lightColor", typ: null },
        { json: "lightAlpha", js: "lightAlpha", typ: 3.14 },
        { json: "lightAnimation", js: "lightAnimation", typ: r("LightAnimation") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("Flags3") },
        { json: "tokenId", js: "tokenId", typ: null },
        { json: "randomImg", js: "randomImg", typ: true },
        { json: "light", js: "light", typ: r("Light") },
    ], false),
    "Flags3": o([
        { json: "token-attacher", js: "token-attacher", typ: r("FriskyTokenAttacher") },
        { json: "tagger", js: "tagger", typ: r("Tagger") },
    ], false),
    "Tagger": o([
        { json: "tags", js: "tags", typ: "" },
    ], false),
    "FriskyTokenAttacher": o([
        { json: "pos", js: "pos", typ: r("Pos") },
        { json: "prototypeAttached", js: "prototypeAttached", typ: r("HilariousPrototypeAttached") },
        { json: "grid", js: "grid", typ: r("Grid") },
    ], false),
    "HilariousPrototypeAttached": o([
        { json: "Wall", js: "Wall", typ: a(r("FluffyWall")) },
        { json: "Drawing", js: "Drawing", typ: a(r("Drawing")) },
    ], false),
    "Drawing": o([
        { json: "author", js: "author", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "x", js: "x", typ: 0 },
        { json: "y", js: "y", typ: 0 },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "z", js: "z", typ: 0 },
        { json: "points", js: "points", typ: a("any") },
        { json: "bezierFactor", js: "bezierFactor", typ: 0 },
        { json: "fillType", js: "fillType", typ: 0 },
        { json: "fillColor", js: "fillColor", typ: "" },
        { json: "fillAlpha", js: "fillAlpha", typ: 0 },
        { json: "strokeWidth", js: "strokeWidth", typ: 0 },
        { json: "strokeColor", js: "strokeColor", typ: "" },
        { json: "strokeAlpha", js: "strokeAlpha", typ: 0 },
        { json: "texture", js: "texture", typ: null },
        { json: "fontFamily", js: "fontFamily", typ: "" },
        { json: "fontSize", js: "fontSize", typ: 0 },
        { json: "textColor", js: "textColor", typ: "" },
        { json: "textAlpha", js: "textAlpha", typ: 0 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "locked", js: "locked", typ: true },
        { json: "flags", js: "flags", typ: r("DrawingFlags") },
    ], false),
    "DrawingFlags": o([
        { json: "better-text-drawings", js: "better-text-drawings", typ: r("BetterTextDrawings") },
        { json: "token-attacher", js: "token-attacher", typ: r("IndecentTokenAttacher") },
    ], false),
    "BetterTextDrawings": o([
        { json: "textAlignment", js: "textAlignment", typ: "" },
        { json: "textStrokeWidth", js: "textStrokeWidth", typ: 0 },
        { json: "textStrokeColor", js: "textStrokeColor", typ: "" },
    ], false),
    "FluffyWall": o([
        { json: "c", js: "c", typ: a(0) },
        { json: "move", js: "move", typ: 0 },
        { json: "sense", js: "sense", typ: 0 },
        { json: "sound", js: "sound", typ: 0 },
        { json: "dir", js: "dir", typ: 0 },
        { json: "door", js: "door", typ: 0 },
        { json: "ds", js: "ds", typ: 0 },
        { json: "flags", js: "flags", typ: r("Flags4") },
    ], false),
    "Flags4": o([
        { json: "token-attacher", js: "token-attacher", typ: r("MischievousTokenAttacher") },
    ], false),
    "MischievousTokenAttacher": o([
        { json: "parent", js: "parent", typ: "" },
        { json: "offset", js: "offset", typ: r("PurpleOffset") },
        { json: "unlocked", js: "unlocked", typ: true },
    ], false),
    "SRiWhVrxtvAc8NXm": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("The5BmlHKMGzxICGRZpToken") },
        { json: "items", js: "items", typ: a(r("The7XE9Evf2KG85QxEwItem")) },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The1X4Q0C9ZwrM3VjZlPermission") },
        { json: "flags", js: "flags", typ: r("ActorDataClass") },
    ], false),
    "Shkc1RW0NcMg2YgG": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("ZumJ7Pxm6HFfC8WhToken") },
        { json: "items", js: "items", typ: a(r("The7XE9Evf2KG85QxEwItem")) },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The74WAVDTssh4Wnov9Permission") },
        { json: "flags", js: "flags", typ: r("The74WAVDTssh4Wnov9Flags") },
    ], false),
    "Sw1P5DG1WvZdt7Dj": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("ZumJ7Pxm6HFfC8WhToken") },
        { json: "items", js: "items", typ: a(r("Sw1P5DG1WvZdt7DjItem")) },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The74WAVDTssh4Wnov9Permission") },
        { json: "flags", js: "flags", typ: r("The74WAVDTssh4Wnov9Flags") },
    ], false),
    "Sw1P5DG1WvZdt7DjItem": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "data", js: "data", typ: r("FluffyData") },
        { json: "sort", js: "sort", typ: 0 },
        { json: "flags", js: "flags", typ: r("Flags5") },
        { json: "img", js: "img", typ: "" },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: null },
        { json: "permission", js: "permission", typ: r("PurplePermission") },
    ], false),
    "Flags5": o([
        { json: "journal-links", js: "journal-links", typ: u(undefined, r("JournalLinks")) },
        { json: "core", js: "core", typ: u(undefined, r("PurpleCore")) },
    ], false),
    "JournalLinks": o([
        { json: "references", js: "references", typ: r("ActorDataClass") },
    ], false),
    "VUwktKEPBTR8MdPE": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("The1X4Q0C9ZwrM3VjZlData") },
        { json: "token", js: "token", typ: r("ZumJ7Pxm6HFfC8WhToken") },
        { json: "items", js: "items", typ: a(r("The5BmlHKMGzxICGRZpItem")) },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("The74WAVDTssh4Wnov9Permission") },
        { json: "flags", js: "flags", typ: r("The74WAVDTssh4Wnov9Flags") },
    ], false),
    "AglLabel": [
        "DCC.AbilityAgl",
        "DCC.AbilityInt",
        "DCC.AbilityLck",
        "DCC.AbilityPer",
        "DCC.AbilitySta",
        "DCC.AbilityStr",
    ],
    "FumbleDieEnum": [
        "1d4",
    ],
    "ValueElement": [
        "1d16",
        "1d20",
    ],
    "Table": [
        "I",
        "M",
    ],
    "Other": [
        "Climb 5'",
        "Creep 1'/hr",
        "",
        "Fly 30'",
    ],
    "Ability": [
        "agl",
        "int",
        "per",
        "str",
    ],
    "ActionDiceEnum": [
        "1d20",
        "2d16",
        "2d20",
        "6d20",
    ],
    "AttackBonusMode": [
        "flat",
    ],
    "Alignment": [
        "c",
        "l",
        "n",
    ],
    "FrtLabel": [
        "DCC.SavesFortitude",
        "DCC.SavesReflex",
        "DCC.SavesWill",
    ],
    "ID": [
        "rDNsjFt79DL8Iz6V",
        "9EiY8ViFhUArGuLw",
    ],
    "Attribute": [
        "abilities.lck.value",
        "attributes.ac.value",
        "attributes.hp",
        "",
    ],
    "BloodsplatColour": [
        "#c20000",
        "#ca0707",
        "",
    ],
    "Range": [
        "",
        "sets on fire",
    ],
    "Type": [
        "equipment",
        "weapon",
    ],
    "Img": [
        "systems/dcc/styles/images/item.webp",
        "systems/dcc/styles/images/weapon.webp",
    ],
    "CastSpellFromScrollDie": [
        "1d10",
        "1d14",
    ],
    "HandlePoisonLabel": [
        "DCC.HandlePoison",
        "DCC.SneakAndHide",
    ],
};
