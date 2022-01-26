// To parse this data:
//
//   import { Convert, The4AqdgBmbkOW8F02Y, Eaiy2WkXOgkKFrea, IkZhQNQv0XoAFGEv, RjAoR4OLKDUuMSeh } from "./file";
//
//   const the4AqdgBmbkOW8F02Y = Convert.toThe4AqdgBmbkOW8F02Y(json);
//   const eaiy2WkXOgkKFrea = Convert.toEaiy2WkXOgkKFrea(json);
//   const ikZhQNQv0XoAFGEv = Convert.toIkZhQNQv0XoAFGEv(json);
//   const rjAoR4OLKDUuMSeh = Convert.toRjAoR4OLKDUuMSeh(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface The4AqdgBmbkOW8F02Y {
    _id:                  string;
    name:                 string;
    active:               boolean;
    navigation:           boolean;
    navOrder:             number;
    navName:              string;
    img:                  string;
    foreground:           null;
    thumb:                string;
    width:                number;
    height:               number;
    padding:              number;
    initial:              Initial;
    backgroundColor:      string;
    gridType:             number;
    grid:                 number;
    shiftX:               number;
    shiftY:               number;
    gridColor:            string;
    gridAlpha:            number;
    gridDistance:         number;
    gridUnits:            string;
    tokenVision:          boolean;
    fogExploration:       boolean;
    fogReset:             number;
    globalLight:          boolean;
    globalLightThreshold: null;
    darkness:             number;
    drawings:             any[];
    tokens:               The4AqdgBmbkOW8F02YToken[];
    lights:               The4AqdgBmbkOW8F02YLight[];
    notes:                Note[];
    sounds:               Sound[];
    templates:            any[];
    tiles:                The4AqdgBmbkOW8F02YTile[];
    walls:                The4AqdgBmbkOW8F02YWall[];
    playlist:             null;
    playlistSound:        null;
    journal:              string;
    weather:              string;
    folder:               string;
    sort:                 number;
    permission:           Permission;
    flags:                The4AqdgBmbkOW8F02YFlags;
}

export interface The4AqdgBmbkOW8F02YFlags {
    "token-attacher": TokenAttacher;
    core:             Core;
    htmltoscene:      Htmltoscene;
    pinfix:           PurplePinfix;
    smalltime:        Smalltime;
}

export interface Core {
    sourceId: string;
}

export interface Htmltoscene {
    enable:        boolean;
    fileLoc:       string;
    minUI:         boolean;
    keepTop:       boolean;
    spaceRight:    boolean;
    rightDisabled: boolean;
    hidePaused:    boolean;
    hideSmallTime: boolean;
}

export interface PurplePinfix {
    enable:    boolean;
    pinLocker: boolean;
    aboveFog:  boolean;
    zoomFloor: number;
    zoomCeil:  number;
    minScale:  number;
    maxScale:  number;
    hudScale:  number;
}

export interface Smalltime {
    "darkness-link": boolean;
    "player-vis":    string;
}

export interface TokenAttacher {
}

export interface Initial {
    x:     number;
    y:     number;
    scale: number;
}

export interface The4AqdgBmbkOW8F02YLight {
    _id:                string;
    x:                  number;
    y:                  number;
    rotation:           number;
    dim?:               number;
    bright?:            number;
    angle?:             number;
    tintAlpha?:         number;
    lightAnimation?:    Animation;
    darknessThreshold?: number;
    darkness?:          Darkness;
    hidden:             boolean;
    flags:              PurpleFlags;
    tintColor?:         string;
    config:             LightClass;
    walls:              boolean;
    vision:             boolean;
    id?:                string;
}

export interface LightClass {
    dim:        number;
    bright:     number;
    angle:      number;
    color?:     null | string;
    alpha:      number;
    animation:  Animation;
    darkness:   Darkness;
    coloration: number;
    gradual:    boolean;
    luminosity: number;
    saturation: number | number;
    contrast:   number | number;
    shadows:    number | number;
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

export interface PurpleFlags {
    "df-active-lights"?: DfActiveLights;
    lightmask?:          Lightmask;
}

export interface DfActiveLights {
    anims: null;
}

export interface Lightmask {
    shape:         Shape;
    customWallIDs: null | string;
    relative:      boolean;
    customEdges?:  CustomEdge[];
    rotation?:     number;
}

export interface CustomEdge {
    c:     number[];
    light: number;
    move:  number;
    sight: number;
    sound: number;
    id:    string;
}

export enum Shape {
    Circle = "circle",
    None = "none",
}

export interface Note {
    _id:        string;
    entryId:    null | string;
    x:          number | number;
    y:          number | number;
    icon:       string;
    iconSize:   number;
    iconTint:   null;
    fontFamily: NoteFontFamily;
    fontSize:   number;
    textAnchor: number;
    textColor:  TextColor | null;
    flags:      NoteFlags;
}

export interface NoteFlags {
    "backgroundless-pins"?: BackgroundlessPins;
    pinfix?:                FluffyPinfix;
}

export interface BackgroundlessPins {
    hasBackground: boolean;
}

export interface FluffyPinfix {
    showName:     boolean;
    minZoomLevel: number;
    maxZoomLevel: number;
}

export enum NoteFontFamily {
    EBGaramond = "EB Garamond",
}

export enum TextColor {
    Ffffff = "#FFFFFF",
}

export interface Permission {
    oVvfrcHQErm1ON0p: number;
    default:          number;
}

export interface Sound {
    _id:      string;
    x:        number | number;
    y:        number | number;
    radius:   number | number;
    path:     string;
    repeat:   boolean;
    volume:   number;
    walls:    boolean;
    easing:   boolean;
    hidden:   boolean;
    darkness: Darkness;
    flags:    SoundFlags;
}

export interface SoundFlags {
    lightmask: Lightmask;
}

export interface The4AqdgBmbkOW8F02YTile {
    _id:       string;
    img:       string;
    width:     number | number;
    height:    number | number;
    x:         number;
    y:         number;
    z:         number;
    rotation:  number;
    alpha:     number;
    tint?:     null;
    hidden:    boolean;
    locked:    boolean;
    overhead:  boolean;
    occlusion: Occlusion;
    video:     Video;
    flags:     FluffyFlags;
}

export interface FluffyFlags {
    "monks-active-tiles"?: MonksActiveTiles;
    "token-attacher"?:     PurpleTokenAttacher;
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

export interface PurpleTokenAttacher {
    parent: string;
    offset: PurpleOffset;
}

export interface PurpleOffset {
    x:         number;
    y:         number;
    rot:       number;
    centerX:   number;
    centerY:   number;
    offRot:    number;
    size:      PurpleSize;
    elevation: Elevation;
}

export interface Elevation {
    flags: TokenAttacher;
}

export interface PurpleSize {
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

export interface The4AqdgBmbkOW8F02YToken {
    _id:          string;
    name:         TokenName;
    displayName:  number;
    actorId:      ActorID;
    actorLink:    boolean;
    actorData:    PurpleActorData;
    img:          string;
    tint:         null;
    width:        number;
    height:       number;
    scale:        number;
    mirrorX:      boolean;
    mirrorY:      boolean;
    x:            number;
    y:            number;
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
    light:        LightClass;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        TentacledFlags;
}

export interface PurpleActorData {
    data?: PurpleData;
}

export interface PurpleData {
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    hp: HP;
}

export interface HP {
    value: number;
    max:   number;
}

export enum ActorID {
    DqngE4C3U65Nwj9O = "dqngE4C3U65Nwj9o",
    Gkf07Q8Arkhdtd8N = "Gkf07Q8arkhdtd8N",
    M52CMS3FophPIPGw = "M52CMS3FophPIPGw",
    The1X4Q0C9ZwrM3VjZl = "1X4q0C9ZwrM3vjZl",
}

export interface Bar {
    attribute: Attribute;
}

export enum Attribute {
    AbilitiesLckValue = "abilities.lck.value",
    AttributesACValue = "attributes.ac.value",
    AttributesHP = "attributes.hp",
    Empty = "",
}

export interface TentacledFlags {
    "token-independence"?:   TokenIndependence;
    "token-attacher":        FluffyTokenAttacher;
    "df-qol"?:               DfQol;
    "monks-little-details"?: MonksLittleDetails;
}

export interface DfQol {
    locked: boolean;
}

export interface MonksLittleDetails {
    "token-highlight":   string;
    "bloodsplat-colour": BloodsplatColour;
}

export enum BloodsplatColour {
    C01B1B = "#c01b1b",
    E51F1F = "#e51f1f",
    Empty = "",
}

export interface FluffyTokenAttacher {
    pos:       Pos;
    attached?: PurpleAttached;
}

export interface PurpleAttached {
    Tile?: string[];
    Wall:  string[];
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

export interface TokenIndependence {
    ActorName: ActorName;
}

export enum ActorName {
    BeastmanChampion = "Beastman Champion",
    Flame = "Flame",
    TorchSizedUniversalFlame = "Torch-Sized Universal Flame",
}

export enum TokenName {
    ObscuringVines = "Obscuring Vines",
    Sword = "Sword",
    TorchSizedFlame = "Torch-Sized Flame",
    Transparent = "Transparent",
}

export interface The4AqdgBmbkOW8F02YWall {
    _id:   string;
    c:     number[];
    move:  number;
    sound: number;
    dir:   number;
    door:  number;
    ds:    number;
    flags: StickyFlags;
    light: number;
    sight: number;
}

export interface StickyFlags {
    "token-attacher"?: TentacledTokenAttacher;
}

export interface TentacledTokenAttacher {
    parent: Parent;
    offset: FluffyOffset;
}

export interface FluffyOffset {
    x:         number;
    y:         number;
    rot:       number;
    centerX:   number;
    centerY:   number;
    offRot:    number;
    c:         number[];
    size:      FluffySize;
    elevation: Elevation;
}

export interface FluffySize {
    widthBase:  number;
    heightBase: number;
}

export enum Parent {
    E4Xs2WZBQzOMOUKW = "E4Xs2WZBQzOMOUKW",
    GvuNStnAonXBQ6CD = "gvuNStnAonXBQ6cD",
    HecbNYqcR3M4KIE7 = "HecbNYqcR3m4KIE7",
    KaEKAyUXdgOrJrmR = "KaEKAyUXdgOrJrmR",
    QjWhMLCZDG3Ckmfp = "qjWhMLCZDG3Ckmfp",
    RDNsjFt79DL8Iz6V = "rDNsjFt79DL8Iz6V",
    The4Zchdz1JfzYVMDM3 = "4Zchdz1jfzYVMDM3",
    The9EiY8ViFhUArGuLw = "9EiY8ViFhUArGuLw",
    UQFZ5IgGy9CZiuDB = "uQFZ5IgGy9CZiuDb",
    WqY356CKleUNikxl = "wqY356cKleUNikxl",
}

export interface Eaiy2WkXOgkKFrea {
    _id:                  string;
    name:                 string;
    active:               boolean;
    navigation:           boolean;
    navOrder:             number;
    navName:              string;
    img:                  string;
    foreground:           null;
    thumb:                string;
    width:                number;
    height:               number;
    padding:              number;
    initial:              Initial;
    backgroundColor:      string;
    gridType:             number;
    grid:                 number;
    shiftX:               number;
    shiftY:               number;
    gridColor:            string;
    gridAlpha:            number;
    gridDistance:         number;
    gridUnits:            string;
    tokenVision:          boolean;
    fogExploration:       boolean;
    fogReset:             number;
    globalLight:          boolean;
    globalLightThreshold: null;
    darkness:             number;
    drawings:             any[];
    tokens:               Eaiy2WkXOgkKFreaToken[];
    lights:               Eaiy2WkXOgkKFreaLight[];
    notes:                Note[];
    sounds:               Sound[];
    templates:            any[];
    tiles:                Eaiy2WkXOgkKFreaTile[];
    walls:                any[];
    playlist:             null;
    playlistSound:        null;
    journal:              string;
    weather:              string;
    folder:               string;
    sort:                 number;
    permission:           Permission;
    flags:                Eaiy2WkXOgkKFreaFlags;
}

export interface Eaiy2WkXOgkKFreaFlags {
    falemos:          PurpleFalemos;
    fxmaster:         PurpleFxmaster;
    "token-attacher": TokenAttacher;
    smalltime:        Smalltime;
    core:             Core;
    htmltoscene:      Htmltoscene;
    pinfix:           PurplePinfix;
    weatherblock:     Weatherblock;
}

export interface PurpleFalemos {
    config: PurpleConfig;
}

export interface PurpleConfig {
    hide: PurpleHide;
}

export interface PurpleHide {
    mode: string;
}

export interface PurpleFxmaster {
    filters:        TokenAttacher;
    effects:        TokenAttacher;
    invert:         boolean;
    filteredLayers: FilteredLayers;
}

export interface FilteredLayers {
    background: boolean;
    foreground: boolean;
    drawings:   boolean;
    tokens:     boolean;
}

export interface Weatherblock {
    invertMask: boolean;
}

export interface Eaiy2WkXOgkKFreaLight {
    _id:                string;
    x:                  number | number;
    y:                  number | number;
    rotation:           number;
    dim?:               number;
    bright?:            number;
    angle?:             number;
    tintAlpha?:         number;
    lightAnimation?:    Animation;
    darknessThreshold?: number;
    darkness?:          Darkness;
    hidden:             boolean;
    flags:              IndigoFlags;
    tintColor?:         string;
    config:             LightClass;
    walls:              boolean;
    vision:             boolean;
}

export interface IndigoFlags {
    lightmask?:        Lightmask;
    "token-attacher"?: StickyTokenAttacher;
}

export interface StickyTokenAttacher {
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
}

export interface TentacledSize {
    config:     SizeConfig;
    widthBase:  number;
    heightBase: number;
}

export interface SizeConfig {
    dim:    number;
    bright: number;
}

export interface Eaiy2WkXOgkKFreaTile {
    _id:       string;
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
    flags:     IndecentFlags;
}

export interface IndecentFlags {
    "token-attacher": PurpleTokenAttacher;
}

export interface Eaiy2WkXOgkKFreaToken {
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
    x:            number;
    y:            number;
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
    light:        LightClass;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        HilariousFlags;
}

export interface FluffyActorData {
    data?: FluffyData;
    name?: string;
}

export interface FluffyData {
    attributes: PurpleAttributes;
    details:    Details;
}

export interface Details {
    notes: Notes;
}

export interface Notes {
    value: null | string;
}

export interface HilariousFlags {
    "monks-little-details"?: MonksLittleDetails;
    "token-attacher":        IndigoTokenAttacher;
    "token-independence"?:   TokenIndependence;
    "df-qol"?:               DfQol;
}

export interface IndigoTokenAttacher {
    pos:       Pos;
    attached?: FluffyAttached;
}

export interface FluffyAttached {
    AmbientLight?: string[];
    Tile?:         string[];
}

export interface IkZhQNQv0XoAFGEv {
    _id:                  string;
    name:                 string;
    active:               boolean;
    navigation:           boolean;
    navOrder:             number;
    navName:              string;
    img:                  string;
    foreground:           null;
    thumb:                string;
    width:                number;
    height:               number;
    padding:              number;
    initial:              Initial;
    backgroundColor:      string;
    gridType:             number;
    grid:                 number;
    shiftX:               number;
    shiftY:               number;
    gridColor:            string;
    gridAlpha:            number;
    gridDistance:         number;
    gridUnits:            string;
    tokenVision:          boolean;
    fogExploration:       boolean;
    fogReset:             number;
    globalLight:          boolean;
    globalLightThreshold: null;
    darkness:             number;
    drawings:             any[];
    tokens:               IkZhQNQv0XoAFGEvToken[];
    lights:               Eaiy2WkXOgkKFreaLight[];
    notes:                Note[];
    sounds:               Sound[];
    templates:            any[];
    tiles:                The4AqdgBmbkOW8F02YTile[];
    walls:                IkZhQNQv0XoAFGEvWall[];
    playlist:             null;
    playlistSound:        null;
    journal:              string;
    weather:              string;
    folder:               string;
    sort:                 number;
    permission:           Permission;
    flags:                IkZhQNQv0XoAFGEvFlags;
}

export interface IkZhQNQv0XoAFGEvFlags {
    falemos:            FluffyFalemos;
    "token-attacher":   TokenAttacher;
    "blood-n-guts":     BloodNGuts;
    fxmaster:           FluffyFxmaster;
    smalltime:          Smalltime;
    "calendar-weather": CalendarWeather;
    core:               Core;
    pinfix:             PurplePinfix;
    weatherblock:       Weatherblock;
}

export interface BloodNGuts {
    visible: boolean;
    history: History;
}

export interface History {
    events:  Event[];
    pointer: number;
}

export interface Event {
    name:      EventName;
    alpha:     number;
    styleData: StyleData;
    drips:     Drip[];
    offset:    Center;
    height:    number;
    width:     number;
    id:        string;
    tokenId?:  string;
    x?:        number;
    y?:        number;
    zIndex?:   number;
    z?:        number;
    _id?:      string;
    scale?:    number;
    rotation?: number;
    hidden?:   boolean;
    locked?:   boolean;
    author?:   string;
}

export interface Drip {
    x:      number;
    y:      number;
    angle:  number;
    width:  number;
    height: number;
    glyph:  string;
}

export enum EventName {
    FloorSplat = "Floor Splat",
    TokenSplat = "Token Splat",
    TrailSplat = "Trail Splat",
}

export interface StyleData {
    fontFamily: StyleDataFontFamily;
    fontSize:   number;
    fill:       Fill;
    align:      Align;
}

export enum Align {
    Center = "center",
}

export enum Fill {
    The8A0707 = "#8A0707",
}

export enum StyleDataFontFamily {
    Sigali = "Sigali",
    Splatter = "splatter",
    WCRhesusABta = "WC Rhesus A Bta",
}

export interface CalendarWeather {
    showFX:       boolean;
    doNightCycle: boolean;
}

export interface FluffyFalemos {
    config: FluffyConfig;
}

export interface FluffyConfig {
    hide:             FluffyHide;
    enable:           boolean;
    ALH5lul2TfXBAtai: Alh5Lul2TfXbAtai;
    uirzB3HdEWNhsGpF: Alh5Lul2TfXbAtai;
    vl6WCsThhjIY4Hj3: Alh5Lul2TfXbAtai;
    bQonQoqY8mo5ZcsQ: Alh5Lul2TfXbAtai;
    MovL8pmQ9lKDVWBx: Alh5Lul2TfXbAtai;
}

export interface Alh5Lul2TfXbAtai {
    x:                  number | null;
    y:                  number | null;
    width:              null;
    overlayImg:         string;
    overlayLeft:        null;
    overlayRight:       null;
    overlayTop:         null;
    overlayBottom:      null;
    geometry:           string;
    filter:             string;
    cameraName:         null;
    cameraNameOffsetX:  null;
    cameraNameOffsetY:  null;
    cameraNameFontSize: null;
    cameraNameColor:    string;
    cameraNameFont:     string;
    fit:                string;
}

export interface FluffyHide {
    mode:       string;
    navigation: boolean;
    controls:   boolean;
    players:    boolean;
    sidebar:    boolean;
    hotbar:     boolean;
}

export interface FluffyFxmaster {
    filters: TokenAttacher;
}

export interface IkZhQNQv0XoAFGEvToken {
    _id:              string;
    name:             string;
    displayName:      number;
    actorId:          string;
    actorLink:        boolean;
    actorData:        TentacledActorData;
    img:              string;
    tint?:            null | string;
    width:            number;
    height:           number;
    scale:            number;
    mirrorX:          boolean;
    mirrorY:          boolean;
    x:                number;
    y:                number;
    elevation:        number;
    lockRotation:     boolean;
    rotation:         number;
    effects:          any[];
    alpha:            number;
    hidden:           boolean;
    vision:           boolean;
    dimSight:         number;
    brightSight:      number;
    sightAngle:       number;
    light:            LightClass;
    disposition:      number;
    displayBars:      number;
    bar1:             Bar;
    bar2:             Bar;
    flags:            HilariousFlags;
    alternateImages?: string;
}

export interface TentacledActorData {
    data?:        TentacledData;
    name?:        string;
    itemUpdates?: ItemUpdates;
    items?:       Item[];
}

export interface TentacledData {
    attributes?: FluffyAttributes;
    details?:    Details;
}

export interface FluffyAttributes {
    hp:    HP;
    init?: Notes;
}

export interface ItemUpdates {
    puz9h9sp2808upmw?: A20Ii4Av55Ae5A3C;
    gpnCqtrI765ghGos?: A20Ii4Av55Ae5A3C;
    e1d4o06ng5glpxeb?: E1D4O06Ng5Glpxeb;
    a20ii4av55ae5a3c?: A20Ii4Av55Ae5A3C;
    lsn51lrncweutumk?: E1D4O06Ng5Glpxeb;
    xZaVgFzzudbWuK4R?: A20Ii4Av55Ae5A3C;
    lvjntk1zzjpgs53u?: A20Ii4Av55Ae5A3C;
}

export interface A20Ii4Av55Ae5A3C {
    name: string;
    data: A20Ii4Av55Ae5A3CData;
}

export interface A20Ii4Av55Ae5A3CData {
    toHit:       string;
    damage:      Damage;
    description: PurpleDescription;
}

export enum Damage {
    The1D4 = "1d4",
    The1D6 = "1d6",
    The1D62 = "1d6+2",
}

export interface PurpleDescription {
    summary: string;
}

export interface E1D4O06Ng5Glpxeb {
    name: string;
    data: E1D4O06Ng5GlpxebData;
}

export interface E1D4O06Ng5GlpxebData {
    toHit:  string;
    damage: string;
    range:  string;
}

export interface Item {
    _id:        string;
    name:       string;
    type:       string;
    img:        string;
    data:       ItemData;
    effects:    any[];
    folder:     null;
    sort:       number;
    permission: { [key: string]: number };
    flags:      ItemFlags;
}

export interface ItemData {
    description:         FluffyDescription;
    source:              string;
    value:               Value;
    isCoins?:            boolean;
    weight:              number | null;
    quantity?:           number;
    equipped?:           boolean;
    identified?:         boolean;
    config?:             DataConfig;
    actionDie?:          string;
    toHit?:              string;
    damage?:             Damage;
    range?:              string;
    twoHanded?:          boolean;
    melee?:              boolean;
    shortRangeStrength?: boolean;
    subdual?:            boolean;
    backstab?:           boolean;
    backstabDamage?:     null;
    doubleIfMounted?:    boolean;
    critRange?:          number;
}

export interface DataConfig {
    inheritActionDie: boolean;
    inheritCritRange: boolean;
}

export interface FluffyDescription {
    value:        string;
    chat:         string;
    unidentified: string;
    summary:      string;
}

export interface Value {
    pp: number | string;
    ep: number | string;
    gp: number | string;
    sp: number | string;
    cp: number | string;
}

export interface ItemFlags {
    "journal-links"?: JournalLinks;
    "gm-notes"?:      GmNotes;
    core:             Core;
}

export interface GmNotes {
    notes: string;
}

export interface JournalLinks {
    references: TokenAttacher;
}

export interface IkZhQNQv0XoAFGEvWall {
    _id:   string;
    flags: AmbitiousFlags;
    c:     number[];
    move:  number;
    dir:   number;
    door:  number;
    ds:    number;
    sound: number;
    light: number;
    sight: number;
}

export interface AmbitiousFlags {
    smartdoors?: Smartdoors;
}

export interface Smartdoors {
    synchronizationGroup?: string;
}

export interface RjAoR4OLKDUuMSeh {
    _id:                  string;
    name:                 string;
    active:               boolean;
    navigation:           boolean;
    navOrder:             number;
    navName:              string;
    img:                  null;
    foreground:           null;
    width:                number;
    height:               number;
    padding:              number;
    initial:              null;
    backgroundColor:      string;
    gridType:             number;
    grid:                 number;
    shiftX:               number;
    shiftY:               number;
    gridColor:            string;
    gridAlpha:            number;
    gridDistance:         number;
    gridUnits:            string;
    tokenVision:          boolean;
    fogExploration:       boolean;
    fogReset:             number;
    globalLight:          boolean;
    globalLightThreshold: null;
    darkness:             number;
    drawings:             Drawing[];
    tokens:               RjAoR4OLKDUuMSehToken[];
    lights:               any[];
    notes:                any[];
    sounds:               any[];
    templates:            any[];
    tiles:                RjAoR4OLKDUuMSehTile[];
    walls:                RjAoR4OLKDUuMSehWall[];
    playlist:             null;
    playlistSound:        null;
    journal:              null;
    weather:              string;
    folder:               string;
    sort:                 number;
    permission:           Permission;
    flags:                RjAoR4OLKDUuMSehFlags;
}

export interface Drawing {
    _id:          string;
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
    fillColor:    null;
    fillAlpha:    number;
    strokeWidth:  number;
    strokeColor:  null;
    strokeAlpha:  number;
    text:         string;
    fontFamily:   NoteFontFamily;
    fontSize:     number;
    textColor:    TextColor;
    textAlpha:    number;
    hidden:       boolean;
    locked:       boolean;
    flags:        DrawingFlags;
    texture:      null;
}

export interface DrawingFlags {
    "better-text-drawings": BetterTextDrawings;
}

export interface BetterTextDrawings {
    textAlignment:   string;
    textStrokeWidth: number;
    textStrokeColor: string;
}

export interface RjAoR4OLKDUuMSehFlags {
    weatherblock:     Weatherblock;
    pinfix:           PurplePinfix;
    "token-attacher": TokenAttacher;
}

export interface RjAoR4OLKDUuMSehTile {
    _id:       string;
    img:       string;
    width:     number;
    height:    number;
    x:         number;
    y:         number;
    z:         number;
    rotation:  number;
    alpha:     number;
    tint:      null;
    hidden:    boolean;
    locked:    boolean;
    overhead:  boolean;
    occlusion: Occlusion;
    video:     Video;
    flags:     TokenAttacher;
}

export interface RjAoR4OLKDUuMSehToken {
    _id:          string;
    name:         string;
    displayName:  number;
    actorId:      string;
    actorLink:    boolean;
    actorData:    TokenAttacher;
    img:          string;
    width:        number;
    height:       number;
    scale:        number;
    mirrorX:      boolean;
    mirrorY:      boolean;
    x:            number;
    y:            number;
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
    light:        LightClass;
    disposition:  number;
    displayBars:  number;
    bar1:         Bar;
    bar2:         Bar;
    flags:        CunningFlags;
    tint?:        null;
}

export interface CunningFlags {
    "token-attacher":        IndecentTokenAttacher;
    "monks-little-details"?: MonksLittleDetails;
}

export interface IndecentTokenAttacher {
    pos: Pos;
}

export interface RjAoR4OLKDUuMSehWall {
    _id:   string;
    c:     number[];
    light: number;
    move:  number;
    sight: number;
    sound: number;
    dir:   number;
    door:  number;
    ds:    number;
    flags: TokenAttacher;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toThe4AqdgBmbkOW8F02Y(json: string): The4AqdgBmbkOW8F02Y {
        return cast(JSON.parse(json), r("The4AqdgBmbkOW8F02Y"));
    }

    public static the4AqdgBmbkOW8F02YToJson(value: The4AqdgBmbkOW8F02Y): string {
        return JSON.stringify(uncast(value, r("The4AqdgBmbkOW8F02Y")), null, 2);
    }

    public static toEaiy2WkXOgkKFrea(json: string): Eaiy2WkXOgkKFrea {
        return cast(JSON.parse(json), r("Eaiy2WkXOgkKFrea"));
    }

    public static eaiy2WkXOgkKFreaToJson(value: Eaiy2WkXOgkKFrea): string {
        return JSON.stringify(uncast(value, r("Eaiy2WkXOgkKFrea")), null, 2);
    }

    public static toIkZhQNQv0XoAFGEv(json: string): IkZhQNQv0XoAFGEv {
        return cast(JSON.parse(json), r("IkZhQNQv0XoAFGEv"));
    }

    public static ikZhQNQv0XoAFGEvToJson(value: IkZhQNQv0XoAFGEv): string {
        return JSON.stringify(uncast(value, r("IkZhQNQv0XoAFGEv")), null, 2);
    }

    public static toRjAoR4OLKDUuMSeh(json: string): RjAoR4OLKDUuMSeh {
        return cast(JSON.parse(json), r("RjAoR4OLKDUuMSeh"));
    }

    public static rjAoR4OLKDUuMSehToJson(value: RjAoR4OLKDUuMSeh): string {
        return JSON.stringify(uncast(value, r("RjAoR4OLKDUuMSeh")), null, 2);
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
    "The4AqdgBmbkOW8F02Y": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "active", js: "active", typ: true },
        { json: "navigation", js: "navigation", typ: true },
        { json: "navOrder", js: "navOrder", typ: 0 },
        { json: "navName", js: "navName", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "foreground", js: "foreground", typ: null },
        { json: "thumb", js: "thumb", typ: "" },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "padding", js: "padding", typ: 3.14 },
        { json: "initial", js: "initial", typ: r("Initial") },
        { json: "backgroundColor", js: "backgroundColor", typ: "" },
        { json: "gridType", js: "gridType", typ: 0 },
        { json: "grid", js: "grid", typ: 0 },
        { json: "shiftX", js: "shiftX", typ: 0 },
        { json: "shiftY", js: "shiftY", typ: 0 },
        { json: "gridColor", js: "gridColor", typ: "" },
        { json: "gridAlpha", js: "gridAlpha", typ: 0 },
        { json: "gridDistance", js: "gridDistance", typ: 0 },
        { json: "gridUnits", js: "gridUnits", typ: "" },
        { json: "tokenVision", js: "tokenVision", typ: true },
        { json: "fogExploration", js: "fogExploration", typ: true },
        { json: "fogReset", js: "fogReset", typ: 0 },
        { json: "globalLight", js: "globalLight", typ: true },
        { json: "globalLightThreshold", js: "globalLightThreshold", typ: null },
        { json: "darkness", js: "darkness", typ: 0 },
        { json: "drawings", js: "drawings", typ: a("any") },
        { json: "tokens", js: "tokens", typ: a(r("The4AqdgBmbkOW8F02YToken")) },
        { json: "lights", js: "lights", typ: a(r("The4AqdgBmbkOW8F02YLight")) },
        { json: "notes", js: "notes", typ: a(r("Note")) },
        { json: "sounds", js: "sounds", typ: a(r("Sound")) },
        { json: "templates", js: "templates", typ: a("any") },
        { json: "tiles", js: "tiles", typ: a(r("The4AqdgBmbkOW8F02YTile")) },
        { json: "walls", js: "walls", typ: a(r("The4AqdgBmbkOW8F02YWall")) },
        { json: "playlist", js: "playlist", typ: null },
        { json: "playlistSound", js: "playlistSound", typ: null },
        { json: "journal", js: "journal", typ: "" },
        { json: "weather", js: "weather", typ: "" },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("Permission") },
        { json: "flags", js: "flags", typ: r("The4AqdgBmbkOW8F02YFlags") },
    ], false),
    "The4AqdgBmbkOW8F02YFlags": o([
        { json: "token-attacher", js: "token-attacher", typ: r("TokenAttacher") },
        { json: "core", js: "core", typ: r("Core") },
        { json: "htmltoscene", js: "htmltoscene", typ: r("Htmltoscene") },
        { json: "pinfix", js: "pinfix", typ: r("PurplePinfix") },
        { json: "smalltime", js: "smalltime", typ: r("Smalltime") },
    ], false),
    "Core": o([
        { json: "sourceId", js: "sourceId", typ: "" },
    ], false),
    "Htmltoscene": o([
        { json: "enable", js: "enable", typ: true },
        { json: "fileLoc", js: "fileLoc", typ: "" },
        { json: "minUI", js: "minUI", typ: true },
        { json: "keepTop", js: "keepTop", typ: true },
        { json: "spaceRight", js: "spaceRight", typ: true },
        { json: "rightDisabled", js: "rightDisabled", typ: true },
        { json: "hidePaused", js: "hidePaused", typ: true },
        { json: "hideSmallTime", js: "hideSmallTime", typ: true },
    ], false),
    "PurplePinfix": o([
        { json: "enable", js: "enable", typ: true },
        { json: "pinLocker", js: "pinLocker", typ: true },
        { json: "aboveFog", js: "aboveFog", typ: true },
        { json: "zoomFloor", js: "zoomFloor", typ: 3.14 },
        { json: "zoomCeil", js: "zoomCeil", typ: 0 },
        { json: "minScale", js: "minScale", typ: 0 },
        { json: "maxScale", js: "maxScale", typ: 0 },
        { json: "hudScale", js: "hudScale", typ: 0 },
    ], false),
    "Smalltime": o([
        { json: "darkness-link", js: "darkness-link", typ: true },
        { json: "player-vis", js: "player-vis", typ: "" },
    ], false),
    "TokenAttacher": o([
    ], false),
    "Initial": o([
        { json: "x", js: "x", typ: 0 },
        { json: "y", js: "y", typ: 0 },
        { json: "scale", js: "scale", typ: 3.14 },
    ], false),
    "The4AqdgBmbkOW8F02YLight": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "dim", js: "dim", typ: u(undefined, 0) },
        { json: "bright", js: "bright", typ: u(undefined, 0) },
        { json: "angle", js: "angle", typ: u(undefined, 0) },
        { json: "tintAlpha", js: "tintAlpha", typ: u(undefined, 3.14) },
        { json: "lightAnimation", js: "lightAnimation", typ: u(undefined, r("Animation")) },
        { json: "darknessThreshold", js: "darknessThreshold", typ: u(undefined, 0) },
        { json: "darkness", js: "darkness", typ: u(undefined, r("Darkness")) },
        { json: "hidden", js: "hidden", typ: true },
        { json: "flags", js: "flags", typ: r("PurpleFlags") },
        { json: "tintColor", js: "tintColor", typ: u(undefined, "") },
        { json: "config", js: "config", typ: r("LightClass") },
        { json: "walls", js: "walls", typ: true },
        { json: "vision", js: "vision", typ: true },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], false),
    "LightClass": o([
        { json: "dim", js: "dim", typ: 0 },
        { json: "bright", js: "bright", typ: 0 },
        { json: "angle", js: "angle", typ: 0 },
        { json: "color", js: "color", typ: u(undefined, u(null, "")) },
        { json: "alpha", js: "alpha", typ: 3.14 },
        { json: "animation", js: "animation", typ: r("Animation") },
        { json: "darkness", js: "darkness", typ: r("Darkness") },
        { json: "coloration", js: "coloration", typ: 0 },
        { json: "gradual", js: "gradual", typ: true },
        { json: "luminosity", js: "luminosity", typ: 3.14 },
        { json: "saturation", js: "saturation", typ: u(3.14, 0) },
        { json: "contrast", js: "contrast", typ: u(3.14, 0) },
        { json: "shadows", js: "shadows", typ: u(3.14, 0) },
    ], false),
    "Animation": o([
        { json: "speed", js: "speed", typ: 0 },
        { json: "intensity", js: "intensity", typ: 0 },
        { json: "reverse", js: "reverse", typ: true },
        { json: "type", js: "type", typ: u(undefined, "") },
    ], false),
    "Darkness": o([
        { json: "min", js: "min", typ: 3.14 },
        { json: "max", js: "max", typ: 3.14 },
    ], false),
    "PurpleFlags": o([
        { json: "df-active-lights", js: "df-active-lights", typ: u(undefined, r("DfActiveLights")) },
        { json: "lightmask", js: "lightmask", typ: u(undefined, r("Lightmask")) },
    ], false),
    "DfActiveLights": o([
        { json: "anims", js: "anims", typ: null },
    ], false),
    "Lightmask": o([
        { json: "shape", js: "shape", typ: r("Shape") },
        { json: "customWallIDs", js: "customWallIDs", typ: u(null, "") },
        { json: "relative", js: "relative", typ: true },
        { json: "customEdges", js: "customEdges", typ: u(undefined, a(r("CustomEdge"))) },
        { json: "rotation", js: "rotation", typ: u(undefined, 0) },
    ], false),
    "CustomEdge": o([
        { json: "c", js: "c", typ: a(3.14) },
        { json: "light", js: "light", typ: 0 },
        { json: "move", js: "move", typ: 0 },
        { json: "sight", js: "sight", typ: 0 },
        { json: "sound", js: "sound", typ: 0 },
        { json: "id", js: "id", typ: "" },
    ], false),
    "Note": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "entryId", js: "entryId", typ: u(null, "") },
        { json: "x", js: "x", typ: u(3.14, 0) },
        { json: "y", js: "y", typ: u(3.14, 0) },
        { json: "icon", js: "icon", typ: "" },
        { json: "iconSize", js: "iconSize", typ: 0 },
        { json: "iconTint", js: "iconTint", typ: null },
        { json: "fontFamily", js: "fontFamily", typ: r("NoteFontFamily") },
        { json: "fontSize", js: "fontSize", typ: 0 },
        { json: "textAnchor", js: "textAnchor", typ: 0 },
        { json: "textColor", js: "textColor", typ: u(r("TextColor"), null) },
        { json: "flags", js: "flags", typ: r("NoteFlags") },
    ], false),
    "NoteFlags": o([
        { json: "backgroundless-pins", js: "backgroundless-pins", typ: u(undefined, r("BackgroundlessPins")) },
        { json: "pinfix", js: "pinfix", typ: u(undefined, r("FluffyPinfix")) },
    ], false),
    "BackgroundlessPins": o([
        { json: "hasBackground", js: "hasBackground", typ: true },
    ], false),
    "FluffyPinfix": o([
        { json: "showName", js: "showName", typ: true },
        { json: "minZoomLevel", js: "minZoomLevel", typ: 3.14 },
        { json: "maxZoomLevel", js: "maxZoomLevel", typ: 0 },
    ], false),
    "Permission": o([
        { json: "oVvfrcHQErm1ON0p", js: "oVvfrcHQErm1ON0p", typ: 0 },
        { json: "default", js: "default", typ: 0 },
    ], false),
    "Sound": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "x", js: "x", typ: u(3.14, 0) },
        { json: "y", js: "y", typ: u(3.14, 0) },
        { json: "radius", js: "radius", typ: u(3.14, 0) },
        { json: "path", js: "path", typ: "" },
        { json: "repeat", js: "repeat", typ: true },
        { json: "volume", js: "volume", typ: 3.14 },
        { json: "walls", js: "walls", typ: true },
        { json: "easing", js: "easing", typ: true },
        { json: "hidden", js: "hidden", typ: true },
        { json: "darkness", js: "darkness", typ: r("Darkness") },
        { json: "flags", js: "flags", typ: r("SoundFlags") },
    ], false),
    "SoundFlags": o([
        { json: "lightmask", js: "lightmask", typ: r("Lightmask") },
    ], false),
    "The4AqdgBmbkOW8F02YTile": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "width", js: "width", typ: u(3.14, 0) },
        { json: "height", js: "height", typ: u(3.14, 0) },
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
        { json: "z", js: "z", typ: 0 },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "alpha", js: "alpha", typ: 0 },
        { json: "tint", js: "tint", typ: u(undefined, null) },
        { json: "hidden", js: "hidden", typ: true },
        { json: "locked", js: "locked", typ: true },
        { json: "overhead", js: "overhead", typ: true },
        { json: "occlusion", js: "occlusion", typ: r("Occlusion") },
        { json: "video", js: "video", typ: r("Video") },
        { json: "flags", js: "flags", typ: r("FluffyFlags") },
    ], false),
    "FluffyFlags": o([
        { json: "monks-active-tiles", js: "monks-active-tiles", typ: u(undefined, r("MonksActiveTiles")) },
        { json: "token-attacher", js: "token-attacher", typ: u(undefined, r("PurpleTokenAttacher")) },
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
    "PurpleTokenAttacher": o([
        { json: "parent", js: "parent", typ: "" },
        { json: "offset", js: "offset", typ: r("PurpleOffset") },
    ], false),
    "PurpleOffset": o([
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
        { json: "rot", js: "rot", typ: 0 },
        { json: "centerX", js: "centerX", typ: 3.14 },
        { json: "centerY", js: "centerY", typ: 3.14 },
        { json: "offRot", js: "offRot", typ: 0 },
        { json: "size", js: "size", typ: r("PurpleSize") },
        { json: "elevation", js: "elevation", typ: r("Elevation") },
    ], false),
    "Elevation": o([
        { json: "flags", js: "flags", typ: r("TokenAttacher") },
    ], false),
    "PurpleSize": o([
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
    "The4AqdgBmbkOW8F02YToken": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: r("TokenName") },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorId", js: "actorId", typ: r("ActorID") },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "actorData", js: "actorData", typ: r("PurpleActorData") },
        { json: "img", js: "img", typ: "" },
        { json: "tint", js: "tint", typ: null },
        { json: "width", js: "width", typ: 3.14 },
        { json: "height", js: "height", typ: 3.14 },
        { json: "scale", js: "scale", typ: 0 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
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
        { json: "light", js: "light", typ: r("LightClass") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("TentacledFlags") },
    ], false),
    "PurpleActorData": o([
        { json: "data", js: "data", typ: u(undefined, r("PurpleData")) },
    ], false),
    "PurpleData": o([
        { json: "attributes", js: "attributes", typ: r("PurpleAttributes") },
    ], false),
    "PurpleAttributes": o([
        { json: "hp", js: "hp", typ: r("HP") },
    ], false),
    "HP": o([
        { json: "value", js: "value", typ: 0 },
        { json: "max", js: "max", typ: 0 },
    ], false),
    "Bar": o([
        { json: "attribute", js: "attribute", typ: r("Attribute") },
    ], false),
    "TentacledFlags": o([
        { json: "token-independence", js: "token-independence", typ: u(undefined, r("TokenIndependence")) },
        { json: "token-attacher", js: "token-attacher", typ: r("FluffyTokenAttacher") },
        { json: "df-qol", js: "df-qol", typ: u(undefined, r("DfQol")) },
        { json: "monks-little-details", js: "monks-little-details", typ: u(undefined, r("MonksLittleDetails")) },
    ], false),
    "DfQol": o([
        { json: "locked", js: "locked", typ: true },
    ], false),
    "MonksLittleDetails": o([
        { json: "token-highlight", js: "token-highlight", typ: "" },
        { json: "bloodsplat-colour", js: "bloodsplat-colour", typ: r("BloodsplatColour") },
    ], false),
    "FluffyTokenAttacher": o([
        { json: "pos", js: "pos", typ: r("Pos") },
        { json: "attached", js: "attached", typ: u(undefined, r("PurpleAttached")) },
    ], false),
    "PurpleAttached": o([
        { json: "Tile", js: "Tile", typ: u(undefined, a("")) },
        { json: "Wall", js: "Wall", typ: a("") },
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
    "TokenIndependence": o([
        { json: "ActorName", js: "ActorName", typ: r("ActorName") },
    ], false),
    "The4AqdgBmbkOW8F02YWall": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "c", js: "c", typ: a(3.14) },
        { json: "move", js: "move", typ: 0 },
        { json: "sound", js: "sound", typ: 0 },
        { json: "dir", js: "dir", typ: 0 },
        { json: "door", js: "door", typ: 0 },
        { json: "ds", js: "ds", typ: 0 },
        { json: "flags", js: "flags", typ: r("StickyFlags") },
        { json: "light", js: "light", typ: 0 },
        { json: "sight", js: "sight", typ: 0 },
    ], false),
    "StickyFlags": o([
        { json: "token-attacher", js: "token-attacher", typ: u(undefined, r("TentacledTokenAttacher")) },
    ], false),
    "TentacledTokenAttacher": o([
        { json: "parent", js: "parent", typ: r("Parent") },
        { json: "offset", js: "offset", typ: r("FluffyOffset") },
    ], false),
    "FluffyOffset": o([
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
        { json: "rot", js: "rot", typ: 0 },
        { json: "centerX", js: "centerX", typ: 3.14 },
        { json: "centerY", js: "centerY", typ: 3.14 },
        { json: "offRot", js: "offRot", typ: 0 },
        { json: "c", js: "c", typ: a(3.14) },
        { json: "size", js: "size", typ: r("FluffySize") },
        { json: "elevation", js: "elevation", typ: r("Elevation") },
    ], false),
    "FluffySize": o([
        { json: "widthBase", js: "widthBase", typ: 3.14 },
        { json: "heightBase", js: "heightBase", typ: 3.14 },
    ], false),
    "Eaiy2WkXOgkKFrea": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "active", js: "active", typ: true },
        { json: "navigation", js: "navigation", typ: true },
        { json: "navOrder", js: "navOrder", typ: 0 },
        { json: "navName", js: "navName", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "foreground", js: "foreground", typ: null },
        { json: "thumb", js: "thumb", typ: "" },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "padding", js: "padding", typ: 3.14 },
        { json: "initial", js: "initial", typ: r("Initial") },
        { json: "backgroundColor", js: "backgroundColor", typ: "" },
        { json: "gridType", js: "gridType", typ: 0 },
        { json: "grid", js: "grid", typ: 0 },
        { json: "shiftX", js: "shiftX", typ: 0 },
        { json: "shiftY", js: "shiftY", typ: 0 },
        { json: "gridColor", js: "gridColor", typ: "" },
        { json: "gridAlpha", js: "gridAlpha", typ: 0 },
        { json: "gridDistance", js: "gridDistance", typ: 0 },
        { json: "gridUnits", js: "gridUnits", typ: "" },
        { json: "tokenVision", js: "tokenVision", typ: true },
        { json: "fogExploration", js: "fogExploration", typ: true },
        { json: "fogReset", js: "fogReset", typ: 0 },
        { json: "globalLight", js: "globalLight", typ: true },
        { json: "globalLightThreshold", js: "globalLightThreshold", typ: null },
        { json: "darkness", js: "darkness", typ: 0 },
        { json: "drawings", js: "drawings", typ: a("any") },
        { json: "tokens", js: "tokens", typ: a(r("Eaiy2WkXOgkKFreaToken")) },
        { json: "lights", js: "lights", typ: a(r("Eaiy2WkXOgkKFreaLight")) },
        { json: "notes", js: "notes", typ: a(r("Note")) },
        { json: "sounds", js: "sounds", typ: a(r("Sound")) },
        { json: "templates", js: "templates", typ: a("any") },
        { json: "tiles", js: "tiles", typ: a(r("Eaiy2WkXOgkKFreaTile")) },
        { json: "walls", js: "walls", typ: a("any") },
        { json: "playlist", js: "playlist", typ: null },
        { json: "playlistSound", js: "playlistSound", typ: null },
        { json: "journal", js: "journal", typ: "" },
        { json: "weather", js: "weather", typ: "" },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("Permission") },
        { json: "flags", js: "flags", typ: r("Eaiy2WkXOgkKFreaFlags") },
    ], false),
    "Eaiy2WkXOgkKFreaFlags": o([
        { json: "falemos", js: "falemos", typ: r("PurpleFalemos") },
        { json: "fxmaster", js: "fxmaster", typ: r("PurpleFxmaster") },
        { json: "token-attacher", js: "token-attacher", typ: r("TokenAttacher") },
        { json: "smalltime", js: "smalltime", typ: r("Smalltime") },
        { json: "core", js: "core", typ: r("Core") },
        { json: "htmltoscene", js: "htmltoscene", typ: r("Htmltoscene") },
        { json: "pinfix", js: "pinfix", typ: r("PurplePinfix") },
        { json: "weatherblock", js: "weatherblock", typ: r("Weatherblock") },
    ], false),
    "PurpleFalemos": o([
        { json: "config", js: "config", typ: r("PurpleConfig") },
    ], false),
    "PurpleConfig": o([
        { json: "hide", js: "hide", typ: r("PurpleHide") },
    ], false),
    "PurpleHide": o([
        { json: "mode", js: "mode", typ: "" },
    ], false),
    "PurpleFxmaster": o([
        { json: "filters", js: "filters", typ: r("TokenAttacher") },
        { json: "effects", js: "effects", typ: r("TokenAttacher") },
        { json: "invert", js: "invert", typ: true },
        { json: "filteredLayers", js: "filteredLayers", typ: r("FilteredLayers") },
    ], false),
    "FilteredLayers": o([
        { json: "background", js: "background", typ: true },
        { json: "foreground", js: "foreground", typ: true },
        { json: "drawings", js: "drawings", typ: true },
        { json: "tokens", js: "tokens", typ: true },
    ], false),
    "Weatherblock": o([
        { json: "invertMask", js: "invertMask", typ: true },
    ], false),
    "Eaiy2WkXOgkKFreaLight": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "x", js: "x", typ: u(3.14, 0) },
        { json: "y", js: "y", typ: u(3.14, 0) },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "dim", js: "dim", typ: u(undefined, 0) },
        { json: "bright", js: "bright", typ: u(undefined, 0) },
        { json: "angle", js: "angle", typ: u(undefined, 0) },
        { json: "tintAlpha", js: "tintAlpha", typ: u(undefined, 3.14) },
        { json: "lightAnimation", js: "lightAnimation", typ: u(undefined, r("Animation")) },
        { json: "darknessThreshold", js: "darknessThreshold", typ: u(undefined, 0) },
        { json: "darkness", js: "darkness", typ: u(undefined, r("Darkness")) },
        { json: "hidden", js: "hidden", typ: true },
        { json: "flags", js: "flags", typ: r("IndigoFlags") },
        { json: "tintColor", js: "tintColor", typ: u(undefined, "") },
        { json: "config", js: "config", typ: r("LightClass") },
        { json: "walls", js: "walls", typ: true },
        { json: "vision", js: "vision", typ: true },
    ], false),
    "IndigoFlags": o([
        { json: "lightmask", js: "lightmask", typ: u(undefined, r("Lightmask")) },
        { json: "token-attacher", js: "token-attacher", typ: u(undefined, r("StickyTokenAttacher")) },
    ], false),
    "StickyTokenAttacher": o([
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
    ], false),
    "TentacledSize": o([
        { json: "config", js: "config", typ: r("SizeConfig") },
        { json: "widthBase", js: "widthBase", typ: 0 },
        { json: "heightBase", js: "heightBase", typ: 0 },
    ], false),
    "SizeConfig": o([
        { json: "dim", js: "dim", typ: 0 },
        { json: "bright", js: "bright", typ: 0 },
    ], false),
    "Eaiy2WkXOgkKFreaTile": o([
        { json: "_id", js: "_id", typ: "" },
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
        { json: "flags", js: "flags", typ: r("IndecentFlags") },
    ], false),
    "IndecentFlags": o([
        { json: "token-attacher", js: "token-attacher", typ: r("PurpleTokenAttacher") },
    ], false),
    "Eaiy2WkXOgkKFreaToken": o([
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
        { json: "scale", js: "scale", typ: 3.14 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
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
        { json: "light", js: "light", typ: r("LightClass") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("HilariousFlags") },
    ], false),
    "FluffyActorData": o([
        { json: "data", js: "data", typ: u(undefined, r("FluffyData")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], false),
    "FluffyData": o([
        { json: "attributes", js: "attributes", typ: r("PurpleAttributes") },
        { json: "details", js: "details", typ: r("Details") },
    ], false),
    "Details": o([
        { json: "notes", js: "notes", typ: r("Notes") },
    ], false),
    "Notes": o([
        { json: "value", js: "value", typ: u(null, "") },
    ], false),
    "HilariousFlags": o([
        { json: "monks-little-details", js: "monks-little-details", typ: u(undefined, r("MonksLittleDetails")) },
        { json: "token-attacher", js: "token-attacher", typ: r("IndigoTokenAttacher") },
        { json: "token-independence", js: "token-independence", typ: u(undefined, r("TokenIndependence")) },
        { json: "df-qol", js: "df-qol", typ: u(undefined, r("DfQol")) },
    ], false),
    "IndigoTokenAttacher": o([
        { json: "pos", js: "pos", typ: r("Pos") },
        { json: "attached", js: "attached", typ: u(undefined, r("FluffyAttached")) },
    ], false),
    "FluffyAttached": o([
        { json: "AmbientLight", js: "AmbientLight", typ: u(undefined, a("")) },
        { json: "Tile", js: "Tile", typ: u(undefined, a("")) },
    ], false),
    "IkZhQNQv0XoAFGEv": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "active", js: "active", typ: true },
        { json: "navigation", js: "navigation", typ: true },
        { json: "navOrder", js: "navOrder", typ: 0 },
        { json: "navName", js: "navName", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "foreground", js: "foreground", typ: null },
        { json: "thumb", js: "thumb", typ: "" },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "padding", js: "padding", typ: 3.14 },
        { json: "initial", js: "initial", typ: r("Initial") },
        { json: "backgroundColor", js: "backgroundColor", typ: "" },
        { json: "gridType", js: "gridType", typ: 0 },
        { json: "grid", js: "grid", typ: 0 },
        { json: "shiftX", js: "shiftX", typ: 0 },
        { json: "shiftY", js: "shiftY", typ: 0 },
        { json: "gridColor", js: "gridColor", typ: "" },
        { json: "gridAlpha", js: "gridAlpha", typ: 0 },
        { json: "gridDistance", js: "gridDistance", typ: 0 },
        { json: "gridUnits", js: "gridUnits", typ: "" },
        { json: "tokenVision", js: "tokenVision", typ: true },
        { json: "fogExploration", js: "fogExploration", typ: true },
        { json: "fogReset", js: "fogReset", typ: 0 },
        { json: "globalLight", js: "globalLight", typ: true },
        { json: "globalLightThreshold", js: "globalLightThreshold", typ: null },
        { json: "darkness", js: "darkness", typ: 0 },
        { json: "drawings", js: "drawings", typ: a("any") },
        { json: "tokens", js: "tokens", typ: a(r("IkZhQNQv0XoAFGEvToken")) },
        { json: "lights", js: "lights", typ: a(r("Eaiy2WkXOgkKFreaLight")) },
        { json: "notes", js: "notes", typ: a(r("Note")) },
        { json: "sounds", js: "sounds", typ: a(r("Sound")) },
        { json: "templates", js: "templates", typ: a("any") },
        { json: "tiles", js: "tiles", typ: a(r("The4AqdgBmbkOW8F02YTile")) },
        { json: "walls", js: "walls", typ: a(r("IkZhQNQv0XoAFGEvWall")) },
        { json: "playlist", js: "playlist", typ: null },
        { json: "playlistSound", js: "playlistSound", typ: null },
        { json: "journal", js: "journal", typ: "" },
        { json: "weather", js: "weather", typ: "" },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("Permission") },
        { json: "flags", js: "flags", typ: r("IkZhQNQv0XoAFGEvFlags") },
    ], false),
    "IkZhQNQv0XoAFGEvFlags": o([
        { json: "falemos", js: "falemos", typ: r("FluffyFalemos") },
        { json: "token-attacher", js: "token-attacher", typ: r("TokenAttacher") },
        { json: "blood-n-guts", js: "blood-n-guts", typ: r("BloodNGuts") },
        { json: "fxmaster", js: "fxmaster", typ: r("FluffyFxmaster") },
        { json: "smalltime", js: "smalltime", typ: r("Smalltime") },
        { json: "calendar-weather", js: "calendar-weather", typ: r("CalendarWeather") },
        { json: "core", js: "core", typ: r("Core") },
        { json: "pinfix", js: "pinfix", typ: r("PurplePinfix") },
        { json: "weatherblock", js: "weatherblock", typ: r("Weatherblock") },
    ], false),
    "BloodNGuts": o([
        { json: "visible", js: "visible", typ: true },
        { json: "history", js: "history", typ: r("History") },
    ], false),
    "History": o([
        { json: "events", js: "events", typ: a(r("Event")) },
        { json: "pointer", js: "pointer", typ: 0 },
    ], false),
    "Event": o([
        { json: "name", js: "name", typ: r("EventName") },
        { json: "alpha", js: "alpha", typ: 3.14 },
        { json: "styleData", js: "styleData", typ: r("StyleData") },
        { json: "drips", js: "drips", typ: a(r("Drip")) },
        { json: "offset", js: "offset", typ: r("Center") },
        { json: "height", js: "height", typ: 0 },
        { json: "width", js: "width", typ: 3.14 },
        { json: "id", js: "id", typ: "" },
        { json: "tokenId", js: "tokenId", typ: u(undefined, "") },
        { json: "x", js: "x", typ: u(undefined, 3.14) },
        { json: "y", js: "y", typ: u(undefined, 3.14) },
        { json: "zIndex", js: "zIndex", typ: u(undefined, 0) },
        { json: "z", js: "z", typ: u(undefined, 0) },
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "scale", js: "scale", typ: u(undefined, 0) },
        { json: "rotation", js: "rotation", typ: u(undefined, 0) },
        { json: "hidden", js: "hidden", typ: u(undefined, true) },
        { json: "locked", js: "locked", typ: u(undefined, true) },
        { json: "author", js: "author", typ: u(undefined, "") },
    ], false),
    "Drip": o([
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
        { json: "angle", js: "angle", typ: 0 },
        { json: "width", js: "width", typ: 3.14 },
        { json: "height", js: "height", typ: 0 },
        { json: "glyph", js: "glyph", typ: "" },
    ], false),
    "StyleData": o([
        { json: "fontFamily", js: "fontFamily", typ: r("StyleDataFontFamily") },
        { json: "fontSize", js: "fontSize", typ: 0 },
        { json: "fill", js: "fill", typ: r("Fill") },
        { json: "align", js: "align", typ: r("Align") },
    ], false),
    "CalendarWeather": o([
        { json: "showFX", js: "showFX", typ: true },
        { json: "doNightCycle", js: "doNightCycle", typ: true },
    ], false),
    "FluffyFalemos": o([
        { json: "config", js: "config", typ: r("FluffyConfig") },
    ], false),
    "FluffyConfig": o([
        { json: "hide", js: "hide", typ: r("FluffyHide") },
        { json: "enable", js: "enable", typ: true },
        { json: "ALH5lul2TfXBAtai", js: "ALH5lul2TfXBAtai", typ: r("Alh5Lul2TfXbAtai") },
        { json: "uirzB3HdEWNhsGpF", js: "uirzB3HdEWNhsGpF", typ: r("Alh5Lul2TfXbAtai") },
        { json: "vl6WCsThhjIY4Hj3", js: "vl6WCsThhjIY4Hj3", typ: r("Alh5Lul2TfXbAtai") },
        { json: "bQonQoqY8mo5ZcsQ", js: "bQonQoqY8mo5ZcsQ", typ: r("Alh5Lul2TfXbAtai") },
        { json: "MovL8pmQ9lKDVWBx", js: "MovL8pmQ9lKDVWBx", typ: r("Alh5Lul2TfXbAtai") },
    ], false),
    "Alh5Lul2TfXbAtai": o([
        { json: "x", js: "x", typ: u(0, null) },
        { json: "y", js: "y", typ: u(0, null) },
        { json: "width", js: "width", typ: null },
        { json: "overlayImg", js: "overlayImg", typ: "" },
        { json: "overlayLeft", js: "overlayLeft", typ: null },
        { json: "overlayRight", js: "overlayRight", typ: null },
        { json: "overlayTop", js: "overlayTop", typ: null },
        { json: "overlayBottom", js: "overlayBottom", typ: null },
        { json: "geometry", js: "geometry", typ: "" },
        { json: "filter", js: "filter", typ: "" },
        { json: "cameraName", js: "cameraName", typ: null },
        { json: "cameraNameOffsetX", js: "cameraNameOffsetX", typ: null },
        { json: "cameraNameOffsetY", js: "cameraNameOffsetY", typ: null },
        { json: "cameraNameFontSize", js: "cameraNameFontSize", typ: null },
        { json: "cameraNameColor", js: "cameraNameColor", typ: "" },
        { json: "cameraNameFont", js: "cameraNameFont", typ: "" },
        { json: "fit", js: "fit", typ: "" },
    ], false),
    "FluffyHide": o([
        { json: "mode", js: "mode", typ: "" },
        { json: "navigation", js: "navigation", typ: true },
        { json: "controls", js: "controls", typ: true },
        { json: "players", js: "players", typ: true },
        { json: "sidebar", js: "sidebar", typ: true },
        { json: "hotbar", js: "hotbar", typ: true },
    ], false),
    "FluffyFxmaster": o([
        { json: "filters", js: "filters", typ: r("TokenAttacher") },
    ], false),
    "IkZhQNQv0XoAFGEvToken": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorId", js: "actorId", typ: "" },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "actorData", js: "actorData", typ: r("TentacledActorData") },
        { json: "img", js: "img", typ: "" },
        { json: "tint", js: "tint", typ: u(undefined, u(null, "")) },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "scale", js: "scale", typ: 3.14 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
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
        { json: "light", js: "light", typ: r("LightClass") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("HilariousFlags") },
        { json: "alternateImages", js: "alternateImages", typ: u(undefined, "") },
    ], false),
    "TentacledActorData": o([
        { json: "data", js: "data", typ: u(undefined, r("TentacledData")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "itemUpdates", js: "itemUpdates", typ: u(undefined, r("ItemUpdates")) },
        { json: "items", js: "items", typ: u(undefined, a(r("Item"))) },
    ], false),
    "TentacledData": o([
        { json: "attributes", js: "attributes", typ: u(undefined, r("FluffyAttributes")) },
        { json: "details", js: "details", typ: u(undefined, r("Details")) },
    ], false),
    "FluffyAttributes": o([
        { json: "hp", js: "hp", typ: r("HP") },
        { json: "init", js: "init", typ: u(undefined, r("Notes")) },
    ], false),
    "ItemUpdates": o([
        { json: "puz9h9sp2808upmw", js: "puz9h9sp2808upmw", typ: u(undefined, r("A20Ii4Av55Ae5A3C")) },
        { json: "gpnCqtrI765ghGos", js: "gpnCqtrI765ghGos", typ: u(undefined, r("A20Ii4Av55Ae5A3C")) },
        { json: "e1d4o06ng5glpxeb", js: "e1d4o06ng5glpxeb", typ: u(undefined, r("E1D4O06Ng5Glpxeb")) },
        { json: "a20ii4av55ae5a3c", js: "a20ii4av55ae5a3c", typ: u(undefined, r("A20Ii4Av55Ae5A3C")) },
        { json: "lsn51lrncweutumk", js: "lsn51lrncweutumk", typ: u(undefined, r("E1D4O06Ng5Glpxeb")) },
        { json: "xZaVgFzzudbWuK4R", js: "xZaVgFzzudbWuK4R", typ: u(undefined, r("A20Ii4Av55Ae5A3C")) },
        { json: "lvjntk1zzjpgs53u", js: "lvjntk1zzjpgs53u", typ: u(undefined, r("A20Ii4Av55Ae5A3C")) },
    ], false),
    "A20Ii4Av55Ae5A3C": o([
        { json: "name", js: "name", typ: "" },
        { json: "data", js: "data", typ: r("A20Ii4Av55Ae5A3CData") },
    ], false),
    "A20Ii4Av55Ae5A3CData": o([
        { json: "toHit", js: "toHit", typ: "" },
        { json: "damage", js: "damage", typ: r("Damage") },
        { json: "description", js: "description", typ: r("PurpleDescription") },
    ], false),
    "PurpleDescription": o([
        { json: "summary", js: "summary", typ: "" },
    ], false),
    "E1D4O06Ng5Glpxeb": o([
        { json: "name", js: "name", typ: "" },
        { json: "data", js: "data", typ: r("E1D4O06Ng5GlpxebData") },
    ], false),
    "E1D4O06Ng5GlpxebData": o([
        { json: "toHit", js: "toHit", typ: "" },
        { json: "damage", js: "damage", typ: "" },
        { json: "range", js: "range", typ: "" },
    ], false),
    "Item": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "data", js: "data", typ: r("ItemData") },
        { json: "effects", js: "effects", typ: a("any") },
        { json: "folder", js: "folder", typ: null },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: m(0) },
        { json: "flags", js: "flags", typ: r("ItemFlags") },
    ], false),
    "ItemData": o([
        { json: "description", js: "description", typ: r("FluffyDescription") },
        { json: "source", js: "source", typ: "" },
        { json: "value", js: "value", typ: r("Value") },
        { json: "isCoins", js: "isCoins", typ: u(undefined, true) },
        { json: "weight", js: "weight", typ: u(0, null) },
        { json: "quantity", js: "quantity", typ: u(undefined, 0) },
        { json: "equipped", js: "equipped", typ: u(undefined, true) },
        { json: "identified", js: "identified", typ: u(undefined, true) },
        { json: "config", js: "config", typ: u(undefined, r("DataConfig")) },
        { json: "actionDie", js: "actionDie", typ: u(undefined, "") },
        { json: "toHit", js: "toHit", typ: u(undefined, "") },
        { json: "damage", js: "damage", typ: u(undefined, r("Damage")) },
        { json: "range", js: "range", typ: u(undefined, "") },
        { json: "twoHanded", js: "twoHanded", typ: u(undefined, true) },
        { json: "melee", js: "melee", typ: u(undefined, true) },
        { json: "shortRangeStrength", js: "shortRangeStrength", typ: u(undefined, true) },
        { json: "subdual", js: "subdual", typ: u(undefined, true) },
        { json: "backstab", js: "backstab", typ: u(undefined, true) },
        { json: "backstabDamage", js: "backstabDamage", typ: u(undefined, null) },
        { json: "doubleIfMounted", js: "doubleIfMounted", typ: u(undefined, true) },
        { json: "critRange", js: "critRange", typ: u(undefined, 0) },
    ], false),
    "DataConfig": o([
        { json: "inheritActionDie", js: "inheritActionDie", typ: true },
        { json: "inheritCritRange", js: "inheritCritRange", typ: true },
    ], false),
    "FluffyDescription": o([
        { json: "value", js: "value", typ: "" },
        { json: "chat", js: "chat", typ: "" },
        { json: "unidentified", js: "unidentified", typ: "" },
        { json: "summary", js: "summary", typ: "" },
    ], false),
    "Value": o([
        { json: "pp", js: "pp", typ: u(0, "") },
        { json: "ep", js: "ep", typ: u(0, "") },
        { json: "gp", js: "gp", typ: u(0, "") },
        { json: "sp", js: "sp", typ: u(0, "") },
        { json: "cp", js: "cp", typ: u(0, "") },
    ], false),
    "ItemFlags": o([
        { json: "journal-links", js: "journal-links", typ: u(undefined, r("JournalLinks")) },
        { json: "gm-notes", js: "gm-notes", typ: u(undefined, r("GmNotes")) },
        { json: "core", js: "core", typ: r("Core") },
    ], false),
    "GmNotes": o([
        { json: "notes", js: "notes", typ: "" },
    ], false),
    "JournalLinks": o([
        { json: "references", js: "references", typ: r("TokenAttacher") },
    ], false),
    "IkZhQNQv0XoAFGEvWall": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "flags", js: "flags", typ: r("AmbitiousFlags") },
        { json: "c", js: "c", typ: a(3.14) },
        { json: "move", js: "move", typ: 0 },
        { json: "dir", js: "dir", typ: 0 },
        { json: "door", js: "door", typ: 0 },
        { json: "ds", js: "ds", typ: 0 },
        { json: "sound", js: "sound", typ: 0 },
        { json: "light", js: "light", typ: 0 },
        { json: "sight", js: "sight", typ: 0 },
    ], false),
    "AmbitiousFlags": o([
        { json: "smartdoors", js: "smartdoors", typ: u(undefined, r("Smartdoors")) },
    ], false),
    "Smartdoors": o([
        { json: "synchronizationGroup", js: "synchronizationGroup", typ: u(undefined, "") },
    ], false),
    "RjAoR4OLKDUuMSeh": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "active", js: "active", typ: true },
        { json: "navigation", js: "navigation", typ: true },
        { json: "navOrder", js: "navOrder", typ: 0 },
        { json: "navName", js: "navName", typ: "" },
        { json: "img", js: "img", typ: null },
        { json: "foreground", js: "foreground", typ: null },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "padding", js: "padding", typ: 3.14 },
        { json: "initial", js: "initial", typ: null },
        { json: "backgroundColor", js: "backgroundColor", typ: "" },
        { json: "gridType", js: "gridType", typ: 0 },
        { json: "grid", js: "grid", typ: 0 },
        { json: "shiftX", js: "shiftX", typ: 0 },
        { json: "shiftY", js: "shiftY", typ: 0 },
        { json: "gridColor", js: "gridColor", typ: "" },
        { json: "gridAlpha", js: "gridAlpha", typ: 0 },
        { json: "gridDistance", js: "gridDistance", typ: 0 },
        { json: "gridUnits", js: "gridUnits", typ: "" },
        { json: "tokenVision", js: "tokenVision", typ: true },
        { json: "fogExploration", js: "fogExploration", typ: true },
        { json: "fogReset", js: "fogReset", typ: 0 },
        { json: "globalLight", js: "globalLight", typ: true },
        { json: "globalLightThreshold", js: "globalLightThreshold", typ: null },
        { json: "darkness", js: "darkness", typ: 0 },
        { json: "drawings", js: "drawings", typ: a(r("Drawing")) },
        { json: "tokens", js: "tokens", typ: a(r("RjAoR4OLKDUuMSehToken")) },
        { json: "lights", js: "lights", typ: a("any") },
        { json: "notes", js: "notes", typ: a("any") },
        { json: "sounds", js: "sounds", typ: a("any") },
        { json: "templates", js: "templates", typ: a("any") },
        { json: "tiles", js: "tiles", typ: a(r("RjAoR4OLKDUuMSehTile")) },
        { json: "walls", js: "walls", typ: a(r("RjAoR4OLKDUuMSehWall")) },
        { json: "playlist", js: "playlist", typ: null },
        { json: "playlistSound", js: "playlistSound", typ: null },
        { json: "journal", js: "journal", typ: null },
        { json: "weather", js: "weather", typ: "" },
        { json: "folder", js: "folder", typ: "" },
        { json: "sort", js: "sort", typ: 0 },
        { json: "permission", js: "permission", typ: r("Permission") },
        { json: "flags", js: "flags", typ: r("RjAoR4OLKDUuMSehFlags") },
    ], false),
    "Drawing": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "author", js: "author", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "z", js: "z", typ: 0 },
        { json: "points", js: "points", typ: a("any") },
        { json: "bezierFactor", js: "bezierFactor", typ: 0 },
        { json: "fillType", js: "fillType", typ: 0 },
        { json: "fillColor", js: "fillColor", typ: null },
        { json: "fillAlpha", js: "fillAlpha", typ: 0 },
        { json: "strokeWidth", js: "strokeWidth", typ: 0 },
        { json: "strokeColor", js: "strokeColor", typ: null },
        { json: "strokeAlpha", js: "strokeAlpha", typ: 0 },
        { json: "text", js: "text", typ: "" },
        { json: "fontFamily", js: "fontFamily", typ: r("NoteFontFamily") },
        { json: "fontSize", js: "fontSize", typ: 0 },
        { json: "textColor", js: "textColor", typ: r("TextColor") },
        { json: "textAlpha", js: "textAlpha", typ: 0 },
        { json: "hidden", js: "hidden", typ: true },
        { json: "locked", js: "locked", typ: true },
        { json: "flags", js: "flags", typ: r("DrawingFlags") },
        { json: "texture", js: "texture", typ: null },
    ], false),
    "DrawingFlags": o([
        { json: "better-text-drawings", js: "better-text-drawings", typ: r("BetterTextDrawings") },
    ], false),
    "BetterTextDrawings": o([
        { json: "textAlignment", js: "textAlignment", typ: "" },
        { json: "textStrokeWidth", js: "textStrokeWidth", typ: 0 },
        { json: "textStrokeColor", js: "textStrokeColor", typ: "" },
    ], false),
    "RjAoR4OLKDUuMSehFlags": o([
        { json: "weatherblock", js: "weatherblock", typ: r("Weatherblock") },
        { json: "pinfix", js: "pinfix", typ: r("PurplePinfix") },
        { json: "token-attacher", js: "token-attacher", typ: r("TokenAttacher") },
    ], false),
    "RjAoR4OLKDUuMSehTile": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "img", js: "img", typ: "" },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "x", js: "x", typ: 0 },
        { json: "y", js: "y", typ: 0 },
        { json: "z", js: "z", typ: 0 },
        { json: "rotation", js: "rotation", typ: 0 },
        { json: "alpha", js: "alpha", typ: 0 },
        { json: "tint", js: "tint", typ: null },
        { json: "hidden", js: "hidden", typ: true },
        { json: "locked", js: "locked", typ: true },
        { json: "overhead", js: "overhead", typ: true },
        { json: "occlusion", js: "occlusion", typ: r("Occlusion") },
        { json: "video", js: "video", typ: r("Video") },
        { json: "flags", js: "flags", typ: r("TokenAttacher") },
    ], false),
    "RjAoR4OLKDUuMSehToken": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "displayName", js: "displayName", typ: 0 },
        { json: "actorId", js: "actorId", typ: "" },
        { json: "actorLink", js: "actorLink", typ: true },
        { json: "actorData", js: "actorData", typ: r("TokenAttacher") },
        { json: "img", js: "img", typ: "" },
        { json: "width", js: "width", typ: 3.14 },
        { json: "height", js: "height", typ: 3.14 },
        { json: "scale", js: "scale", typ: 0 },
        { json: "mirrorX", js: "mirrorX", typ: true },
        { json: "mirrorY", js: "mirrorY", typ: true },
        { json: "x", js: "x", typ: 3.14 },
        { json: "y", js: "y", typ: 3.14 },
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
        { json: "light", js: "light", typ: r("LightClass") },
        { json: "disposition", js: "disposition", typ: 0 },
        { json: "displayBars", js: "displayBars", typ: 0 },
        { json: "bar1", js: "bar1", typ: r("Bar") },
        { json: "bar2", js: "bar2", typ: r("Bar") },
        { json: "flags", js: "flags", typ: r("CunningFlags") },
        { json: "tint", js: "tint", typ: u(undefined, null) },
    ], false),
    "CunningFlags": o([
        { json: "token-attacher", js: "token-attacher", typ: r("IndecentTokenAttacher") },
        { json: "monks-little-details", js: "monks-little-details", typ: u(undefined, r("MonksLittleDetails")) },
    ], false),
    "IndecentTokenAttacher": o([
        { json: "pos", js: "pos", typ: r("Pos") },
    ], false),
    "RjAoR4OLKDUuMSehWall": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "c", js: "c", typ: a(0) },
        { json: "light", js: "light", typ: 0 },
        { json: "move", js: "move", typ: 0 },
        { json: "sight", js: "sight", typ: 0 },
        { json: "sound", js: "sound", typ: 0 },
        { json: "dir", js: "dir", typ: 0 },
        { json: "door", js: "door", typ: 0 },
        { json: "ds", js: "ds", typ: 0 },
        { json: "flags", js: "flags", typ: r("TokenAttacher") },
    ], false),
    "Shape": [
        "circle",
        "none",
    ],
    "NoteFontFamily": [
        "EB Garamond",
    ],
    "TextColor": [
        "#FFFFFF",
    ],
    "ActorID": [
        "dqngE4C3U65Nwj9o",
        "Gkf07Q8arkhdtd8N",
        "M52CMS3FophPIPGw",
        "1X4q0C9ZwrM3vjZl",
    ],
    "Attribute": [
        "abilities.lck.value",
        "attributes.ac.value",
        "attributes.hp",
        "",
    ],
    "BloodsplatColour": [
        "#c01b1b",
        "#e51f1f",
        "",
    ],
    "ActorName": [
        "Beastman Champion",
        "Flame",
        "Torch-Sized Universal Flame",
    ],
    "TokenName": [
        "Obscuring Vines",
        "Sword",
        "Torch-Sized Flame",
        "Transparent",
    ],
    "Parent": [
        "E4Xs2WZBQzOMOUKW",
        "gvuNStnAonXBQ6cD",
        "HecbNYqcR3m4KIE7",
        "KaEKAyUXdgOrJrmR",
        "qjWhMLCZDG3Ckmfp",
        "rDNsjFt79DL8Iz6V",
        "4Zchdz1jfzYVMDM3",
        "9EiY8ViFhUArGuLw",
        "uQFZ5IgGy9CZiuDb",
        "wqY356cKleUNikxl",
    ],
    "EventName": [
        "Floor Splat",
        "Token Splat",
        "Trail Splat",
    ],
    "Align": [
        "center",
    ],
    "Fill": [
        "#8A0707",
    ],
    "StyleDataFontFamily": [
        "Sigali",
        "splatter",
        "WC Rhesus A Bta",
    ],
    "Damage": [
        "1d4",
        "1d6",
        "1d6+2",
    ],
};
