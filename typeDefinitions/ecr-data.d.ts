// To parse this data:
//
//   import { Convert, Actors, Folders, Items, Journal, Macros, Messages, Playlists, Scenes, Settings, Tables, Users } from "./file";
//
//   const actors = Convert.toActors(json);
//   const folders = Convert.toFolders(json);
//   const items = Convert.toItems(json);
//   const journal = Convert.toJournal(json);
//   const macros = Convert.toMacros(json);
//   const messages = Convert.toMessages(json);
//   const playlists = Convert.toPlaylists(json);
//   const scenes = Convert.toScenes(json);
//   const settings = Convert.toSettings(json);
//   const tables = Convert.toTables(json);
//   const users = Convert.toUsers(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

declare namespace ECRData {
    export interface Actors {
        _id: string;
        name: string;
        type: ActorsType;
        img: string;
        data: ActorsData;
        token: ActorsToken;
        items: ActorsItem[];
        effects: any[];
        folder: string;
        sort: number;
        permission: { [key: string]: number };
        flags: ActorsFlags;
    }

    export interface ActorsData {
        abilities: Abilities;
        attributes: PurpleAttributes;
        details: PurpleDetails;
        saves: Saves;
        currency: Currency;
        config: PurpleConfig;
        class: Class;
        skills?: Skills;
        inventory?: Inventory;
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
        max: number;
    }

    export enum AglLabel {
        DCCAbilityAgl = 'DCC.AbilityAgl',
        DCCAbilityInt = 'DCC.AbilityInt',
        DCCAbilityLck = 'DCC.AbilityLck',
        DCCAbilityPer = 'DCC.AbilityPer',
        DCCAbilitySta = 'DCC.AbilitySta',
        DCCAbilityStr = 'DCC.AbilityStr',
    }

    export interface PurpleAttributes {
        ac: AC;
        actionDice: ActionDiceClass;
        critical: Critical;
        fumble: Fumble;
        hitDice: HitDice;
        hp: PurpleHP;
        init: Init;
        speed: Speed;
        special?: HitDice;
    }

    export interface AC {
        value: number | string;
        checkPenalty: number;
        speedPenalty: number;
        fumbleDie?: FumbleDie;
    }

    export enum FumbleDie {
        The1D4 = '1d4',
        The1D6 = '1d6',
        The1D62 = '1d6+2',
    }

    export interface ActionDiceClass {
        value: ValueElement;
        options: ValueElement[];
    }

    export enum ValueElement {
        The1D16 = '1d16',
        The1D20 = '1d20',
    }

    export interface Critical {
        die: FumbleDie;
        table: Table;
    }

    export enum Table {
        I = 'I',
        M = 'M',
    }

    export interface Fumble {
        die: FumbleDie;
    }

    export interface HitDice {
        value: string;
    }

    export interface PurpleHP {
        value: number | null;
        min: number;
        max: number | null;
        temp: number;
        tempmax: number;
    }

    export interface Init {
        die: ValueElement;
        value: number;
    }

    export interface Speed {
        value: string;
        base: number;
        special: string;
        other?: Other;
    }

    export enum Other {
        Climb5 = "Climb 5'",
        Creep1Hr = "Creep 1'/hr",
        Empty = '',
        Fly30 = "Fly 30'",
    }

    export interface Class {
        spellCheck: number | string;
        spellCheckAbility: Ability;
        deity?: null | string;
        disapproval?: string;
        disapprovalTable?: string;
        luckDie?: string;
        backstab?: string;
        luckyWeapon?: null;
        patron?: null;
        familiar?: null;
        corruption?: any[];
        className?: string;
    }

    export enum Ability {
        Agl = 'agl',
        Int = 'int',
        Per = 'per',
        Str = 'str',
    }

    export interface PurpleConfig {
        attackBonusMode: AttackBonusMode;
        actionDice: ActionDiceEnum;
        capLevel: boolean;
        maxLevel: number;
        rollAttackBonus: boolean;
        computeAC: boolean;
        baseACAbility: Ability;
        computeSpeed: boolean;
        computeCheckPenalty: boolean;
        sortInventory: boolean;
        removeEmptyItems: boolean;
        showSpells: boolean;
        showSkills: boolean;
        showMaxAbilities: boolean;
        showBackstab: boolean;
    }

    export enum ActionDiceEnum {
        The1D20 = '1d20',
        The2D16 = '2d16',
        The2D20 = '2d20',
        The6D20 = '6d20',
    }

    export enum AttackBonusMode {
        Flat = 'flat',
    }

    export interface Currency {
        pp: string;
        ep: string;
        gp: string;
        sp: string;
        cp: string;
    }

    export interface PurpleDetails {
        level: Level;
        alignment: Alignment;
        attackBonus: string;
        languages: Languages;
        occupation: HitDice | string;
        title: HitDice | string;
        notes: HitDice | string;
        birthAugur?: string;
        critRange?: number;
        xp?: XP;
        sheetClass?: string;
    }

    export enum Alignment {
        C = 'c',
        L = 'l',
        N = 'n',
    }

    export enum Languages {
        Common = 'Common',
        CommonKoboldAlignment = 'Common, Kobold, Alignment',
        Empty = '',
    }

    export interface Level {
        value: number | null;
    }

    export interface XP {
        value: number;
        min: number;
        max: number;
    }

    export interface Inventory {
        weapons: any[];
        ammunition: any[];
        armor: any[];
        equipment: any[];
        mount: any[];
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
        DCCSavesFortitude = 'DCC.SavesFortitude',
        DCCSavesReflex = 'DCC.SavesReflex',
        DCCSavesWill = 'DCC.SavesWill',
    }

    export interface Skills {
        findSecretDoors: DivineAid;
        divineAid: DivineAid;
        turnUnholy: DivineAid;
        layOnHands: DivineAid;
        sneakSilently: CastSpellFromScroll;
        hideInShadows: CastSpellFromScroll;
        pickPockets: CastSpellFromScroll;
        climbSheerSurfaces: CastSpellFromScroll;
        pickLock: CastSpellFromScroll;
        findTrap: CastSpellFromScroll;
        disableTrap: CastSpellFromScroll;
        forgeDocument: CastSpellFromScroll;
        disguiseSelf: CastSpellFromScroll;
        readLanguages: CastSpellFromScroll;
        handlePoison: HandlePoison;
        castSpellFromScroll: CastSpellFromScroll;
        sneakAndHide: HandlePoison;
        shieldBash: CastSpellFromScroll;
    }

    export interface CastSpellFromScroll {
        label: string;
        ability: Ability;
        die?: Die;
        value: string;
        useDeed?: boolean;
    }

    export enum Die {
        The1D10 = '1d10',
        The1D14 = '1d14',
    }

    export interface DivineAid {
        label: DivineAidLabel;
        ability: Ability;
        value: number | string;
        useDisapprovalRange?: boolean;
    }

    export enum DivineAidLabel {
        DCCDivineAid = 'DCC.DivineAid',
        DCCHeightenedSenses = 'DCC.HeightenedSenses',
        DCCLayOnHands = 'DCC.LayOnHands',
        DCCTurnUnholy = 'DCC.TurnUnholy',
    }

    export interface HandlePoison {
        label: HandlePoisonLabel;
        value: string;
    }

    export enum HandlePoisonLabel {
        DCCHandlePoison = 'DCC.HandlePoison',
        DCCSneakAndHide = 'DCC.SneakAndHide',
    }

    export interface ActorsFlags {
        core?: PurpleCore;
        cf?: null;
    }

    export interface PurpleCore {
        sourceId?: string;
        sheetClass?: string;
    }

    export interface ActorsItem {
        name: string;
        type: ItemType;
        img: string;
        data: PurpleData;
        _id: string;
        effects: any[];
        folder: Folder | null;
        sort: number;
        permission: { [key: string]: number };
        flags: ItemFlags;
    }

    export interface PurpleData {
        description: PurpleDescription;
        source: string;
        quantity?: number;
        weight: number | null;
        equipped?: boolean;
        identified?: boolean;
        value: ValueClass;
        config?: FluffyConfig;
        actionDie?: ValueElement;
        toHit?: string;
        damage?: string;
        range?: PurpleRange;
        twoHanded?: boolean | number;
        melee?: boolean;
        shortRangeStrength?: number;
        subdual?: number;
        backstab?: boolean;
        backstabDamage?: null;
        doubleIfMounted?: number;
        critRange?: number;
        isCoins?: boolean;
    }

    export interface FluffyConfig {
        inheritActionDie: boolean;
        inheritCritRange: boolean;
    }

    export interface PurpleDescription {
        value: string;
        chat: string;
        unidentified: string;
        summary: string;
    }

    export enum PurpleRange {
        Empty = '',
        SetsOnFire = 'sets on fire',
    }

    export interface ValueClass {
        pp: number | string;
        ep: number | string;
        gp: number | string;
        sp: number | string;
        cp: number | string;
    }

    export interface ItemFlags {
        core?: FluffyCore;
        cf?: CF;
        'journal-links'?: PurpleJournalLinks;
        'gm-notes'?: GmNotes;
    }

    export interface CF {
        id: string;
        color: string;
    }

    export interface FluffyCore {
        sourceId: string;
    }

    export interface GmNotes {
        notes: string;
    }

    export interface PurpleJournalLinks {
        references: PermissionsClass;
    }

    export interface PermissionsClass {}

    export enum Folder {
        FbV8PVVN4IfjQF7L = 'fbV8PvVN4IfjQF7l',
        JqggWbIvMZYAT59N = 'JqggWbIvMZYAT59n',
        SesK7INkpwCgx4Q4 = 'SesK7iNkpwCgx4q4',
        TvBjfN2WxfymnOB5 = 'tvBjfN2WxfymnOB5',
        ZtHwgOhqF15NjNll = 'ztHwgOhqF15njNll',
    }

    export enum ItemType {
        Ammunition = 'ammunition',
        Armor = 'armor',
        Equipment = 'equipment',
        Treasure = 'treasure',
        Weapon = 'weapon',
    }

    export interface ActorsToken {
        _id?: string;
        name: string;
        displayName: number;
        actorId?: string;
        actorLink: boolean;
        actorData?: PurpleActorData;
        img: string;
        tint?: null | string;
        width: number;
        height: number;
        scale: number;
        mirrorX: boolean;
        mirrorY: boolean;
        x?: null;
        y?: null;
        elevation?: number | null;
        lockRotation: boolean;
        rotation: number;
        effects?: any[];
        alpha: number;
        hidden?: boolean;
        vision: boolean;
        dimSight: number;
        brightSight: number;
        sightAngle: number;
        light: ConfigClass;
        disposition: number;
        displayBars: number;
        bar1: Bar;
        bar2: Bar;
        flags: PurpleFlags;
        tokenId?: null;
        randomImg: boolean;
        dimLight?: number;
        brightLight?: number;
        lightAngle?: number;
        lightAlpha?: number;
        lightAnimation?: LightAnimation;
        lightColor?: null;
    }

    export interface PurpleActorData {
        data?: FluffyData;
        name?: string;
        itemUpdates?: PurpleItemUpdates;
    }

    export interface FluffyData {
        attributes: FluffyAttributes;
        details?: FluffyDetails;
    }

    export interface FluffyAttributes {
        hp: FluffyHP;
    }

    export interface FluffyHP {
        value: number;
        max: number;
    }

    export interface FluffyDetails {
        notes: HitDice;
    }

    export interface PurpleItemUpdates {
        gpnCqtrI765ghGos: GpnCqtrI765GhGos;
    }

    export interface GpnCqtrI765GhGos {
        name: string;
        data: GpnCqtrI765GhGosData;
    }

    export interface GpnCqtrI765GhGosData {
        toHit: string;
        damage: FumbleDie;
        description: FluffyDescription;
    }

    export interface FluffyDescription {
        summary: string;
    }

    export interface Bar {
        attribute: Attribute | null;
    }

    export enum Attribute {
        AbilitiesLckValue = 'abilities.lck.value',
        AttributesACValue = 'attributes.ac.value',
        AttributesHP = 'attributes.hp',
        Empty = '',
    }

    export interface PurpleFlags {
        'token-attacher'?: PurpleTokenAttacher;
        'monks-little-details'?: MonksLittleDetails;
        'token-independence'?: TokenIndependence;
        tagger?: Tagger;
    }

    export interface MonksLittleDetails {
        'token-highlight': string;
        'bloodsplat-colour': BloodsplatColour;
    }

    export enum BloodsplatColour {
        C01B1B = '#c01b1b',
        C20000 = '#c20000',
        Ca0707 = '#ca0707',
        E51F1F = '#e51f1f',
        Empty = '',
    }

    export interface Tagger {
        tags: string;
    }

    export interface PurpleTokenAttacher {
        pos: Pos;
        prototypeAttached?: PrototypeAttached;
        grid?: Grid;
    }

    export interface Grid {
        size: number;
        w: number;
        h: number;
    }

    export interface Pos {
        base_id: string;
        xy: Center;
        center: Center;
        rotation: number;
        hidden: boolean;
        elevation: number;
    }

    export interface Center {
        x: number;
        y: number;
    }

    export interface PrototypeAttached {
        Wall?: Wall[];
        AmbientLight?: AmbientLight[];
        Tile?: Tile[];
        Drawing?: Drawing[];
    }

    export interface AmbientLight {
        x: number | number;
        y: number | number;
        rotation: number;
        walls: boolean;
        vision: boolean;
        config: ConfigClass;
        hidden: boolean;
        flags: AmbientLightFlags;
    }

    export interface ConfigClass {
        alpha: number;
        angle: number;
        bright: number | number;
        coloration: number;
        dim: number;
        gradual: boolean;
        luminosity: number;
        saturation: number;
        contrast: number;
        shadows: number | number;
        animation: Animation;
        darkness: Darkness;
        color?: null | string;
    }

    export interface Animation {
        speed: number;
        intensity: number;
        reverse: boolean;
        type?: string;
    }

    export interface Darkness {
        min: number;
        max: number;
    }

    export interface AmbientLightFlags {
        'token-attacher': FluffyTokenAttacher;
        lightmask?: Lightmask;
    }

    export interface Lightmask {
        shape: Shape;
        customWallIDs: null | string;
        relative: boolean;
        customEdges?: CustomEdge[];
        rotation?: number;
    }

    export interface CustomEdge {
        c: number[];
        light: number;
        move: number;
        sight: number;
        sound: number;
        id: string;
    }

    export enum Shape {
        Circle = 'circle',
        None = 'none',
    }

    export interface FluffyTokenAttacher {
        parent: string;
        offset: PurpleOffset;
    }

    export interface PurpleOffset {
        x: number;
        y: number;
        rot: number;
        centerX: number;
        centerY: number;
        offRot: number;
        size: PurpleSize;
        elevation: Elevation;
    }

    export interface Elevation {
        flags: PermissionsClass;
    }

    export interface PurpleSize {
        config: SizeConfig;
        widthBase: number;
        heightBase: number;
    }

    export interface SizeConfig {
        dim: number;
        bright: number;
    }

    export interface Drawing {
        author: string;
        type: string;
        x: number;
        y: number;
        width: number;
        height: number;
        rotation: number;
        z: number;
        points: any[];
        bezierFactor: number;
        fillType: number;
        fillColor: string;
        fillAlpha: number;
        strokeWidth: number;
        strokeColor: string;
        strokeAlpha: number;
        texture: null;
        fontFamily: string;
        fontSize: number;
        textColor: TextColor;
        textAlpha: number;
        hidden: boolean;
        locked: boolean;
        flags: DrawingFlags;
    }

    export interface DrawingFlags {
        'better-text-drawings': BetterTextDrawings;
        'token-attacher': TentacledTokenAttacher;
    }

    export interface BetterTextDrawings {
        textAlignment: string;
        textStrokeWidth: number;
        textStrokeColor: string;
    }

    export interface TentacledTokenAttacher {
        parent: string;
        offset: FluffyOffset;
    }

    export interface FluffyOffset {
        x: number;
        y: number;
        rot: number;
        centerX: number;
        centerY: number;
        offRot: number;
        points?: any[];
        size: FluffySize;
        elevation: Elevation;
    }

    export interface FluffySize {
        width: number;
        height: number;
        widthBase: number;
        heightBase: number;
    }

    export enum TextColor {
        Ffffff = '#FFFFFF',
    }

    export interface Tile {
        img: string;
        width: number;
        height: number;
        x: number;
        y: number;
        z: number;
        rotation: number;
        alpha: number;
        hidden: boolean;
        locked: boolean;
        overhead: boolean;
        occlusion: Occlusion;
        video: Video;
        flags: TileFlags;
        tint?: string;
    }

    export interface TileFlags {
        'token-attacher'?: TentacledTokenAttacher;
        'monks-active-tiles'?: MonksActiveTiles;
    }

    export interface MonksActiveTiles {
        active: boolean;
        restriction: string;
        controlled: string;
        trigger: string;
        pertoken: boolean;
        minrequired: number;
        chance: number;
        actions: any[];
    }

    export interface Occlusion {
        mode: number;
        alpha: number;
    }

    export interface Video {
        loop: boolean;
        autoplay: boolean;
        volume: number;
    }

    export interface Wall {
        c: number[];
        light?: number;
        move: number;
        sight?: number;
        sound: number;
        dir: number;
        door: number;
        ds: number;
        flags: WallFlags;
        sense?: number;
    }

    export interface WallFlags {
        'token-attacher': StickyTokenAttacher;
    }

    export interface StickyTokenAttacher {
        parent: PurpleParent;
        offset: TentacledOffset;
        unlocked?: boolean;
    }

    export interface TentacledOffset {
        x: number;
        y: number;
        rot: number;
        centerX: number;
        centerY: number;
        offRot: number;
        c: number[];
        size: TentacledSize;
        elevation: Elevation;
    }

    export interface TentacledSize {
        widthBase: number;
        heightBase: number;
    }

    export enum PurpleParent {
        RDNsjFt79DL8Iz6V = 'rDNsjFt79DL8Iz6V',
        The4DCg5YMxlWswzgzb = '4dCg5yMxlWswzgzb',
        The9EiY8ViFhUArGuLw = '9EiY8ViFhUArGuLw',
    }

    export interface TokenIndependence {
        ActorName: ActorName;
    }

    export enum ActorName {
        BeastmanChampion = 'Beastman Champion',
        FireplaceSizedFlame = 'Fireplace-Sized Flame',
        Flame = 'Flame',
        TorchSizedUniversalFlame = 'Torch-Sized Universal Flame',
    }

    export interface LightAnimation {
        speed: number;
        intensity: number;
    }

    export enum ActorsType {
        Npc = 'NPC',
        Player = 'Player',
    }

    export interface Folders {
        name: string;
        type: CollectionEnum;
        parent: null | string;
        sorting: Sorting;
        sort: number;
        color?: null | string;
        flags: FoldersFlags;
        _id: string;
    }

    export interface FoldersFlags {
        textColour?: string;
    }

    export enum Sorting {
        A = 'a',
    }

    export enum CollectionEnum {
        Actor = 'Actor',
        Item = 'Item',
        JournalEntry = 'JournalEntry',
        Macro = 'Macro',
        RollTable = 'RollTable',
        Scene = 'Scene',
    }

    export interface Items {
        _id: string;
        name: string;
        type: ItemType;
        img: string;
        data: ItemsData;
        effects: any[];
        folder: Folder;
        sort: number;
        permission: Permission;
        flags: ItemFlags;
    }

    export interface ItemsData {
        description: PurpleDescription;
        source: string;
        quantity?: number;
        weight: number | null;
        equipped?: boolean;
        identified?: boolean;
        value: Currency;
        acBonus?: number;
        checkPenalty?: number;
        speed?: string;
        fumbleDie?: string;
        config?: FluffyConfig;
        actionDie?: ActionDie;
        toHit?: string;
        damage?: string;
        range?: FluffyRange;
        twoHanded?: boolean;
        melee?: boolean;
        shortRangeStrength?: boolean | number;
        subdual?: boolean | number;
        backstab?: boolean;
        backstabDamage?: null;
        doubleIfMounted?: boolean | number;
        critRange?: number;
        isCoins?: boolean;
    }

    export enum ActionDie {
        Empty = '',
        The1D20 = '1d20',
    }

    export enum FluffyRange {
        Empty = '',
        Range = '-',
        The70140210 = '70/140/210',
    }

    export interface Permission {
        default?: number;
        oVvfrcHQErm1ON0p: number;
    }

    export interface Journal {
        name: string;
        content: string;
        folder: string;
        sort: number;
        permission: Permission;
        flags: JournalFlags;
        _id: string;
        img?: null | string;
    }

    export interface JournalFlags {
        'gm-notes'?: GmNotes;
        'monks-enhanced-journal'?: PurpleMonksEnhancedJournal;
    }

    export interface PurpleMonksEnhancedJournal {
        type?: string;
        scrollPos: string;
        _lasttab?: string;
    }

    export interface Macros {
        _id: string;
        name: string;
        type: MacrosType;
        author: Author;
        img: string;
        scope: Scope;
        command: string;
        folder: null | string;
        sort: number;
        permission: Permission;
        flags: MacrosFlags;
    }

    export enum Author {
        OVvfrcHQErm1ON0P = 'oVvfrcHQErm1ON0p',
    }

    export interface MacrosFlags {
        core?: FluffyCore;
        'combat-utility-belt'?: CombatUtilityBelt;
    }

    export interface CombatUtilityBelt {
        macroTrigger: string;
    }

    export enum Scope {
        Global = 'global',
    }

    export enum MacrosType {
        Chat = 'chat',
        Script = 'script',
    }

    export interface Messages {
        _id: string;
        type: number;
        user: Author;
        timestamp: number;
        content: string;
        speaker: Speaker;
        whisper: any[];
        blind: boolean;
        sound: string;
        emote: boolean;
        flags: MessagesFlags;
        flavor?: string;
        roll?: string;
    }

    export interface MessagesFlags {
        core: TentacledCore;
    }

    export interface TentacledCore {
        canPopout: boolean;
        RollTable?: string;
    }

    export interface Speaker {
        scene: null;
        actor: null | string;
        token: null;
        alias: string;
    }

    export interface Playlists {
        _id: string;
        name: string;
        description: string;
        sounds: PlaylistsSound[];
        mode: number;
        playing: boolean;
        folder: null;
        sorting: string;
        sort: number;
        permission: Permission;
        flags: PermissionsClass;
        seed?: number;
    }

    export interface PlaylistsSound {
        _id: string;
        name: string;
        description: string;
        path: string;
        playing: boolean;
        pausedTime: number | null;
        repeat: boolean;
        volume: number;
        sort: number;
        flags: PermissionsClass;
        lvolume?: number;
    }

    export interface Scenes {
        _id: string;
        name: string;
        active: boolean;
        navigation: boolean;
        navOrder: number;
        navName: string;
        img: null | string;
        foreground: null;
        thumb?: string;
        width: number;
        height: number;
        padding: number;
        initial: Initial | null;
        backgroundColor: string;
        gridType: number;
        grid: number;
        shiftX: number;
        shiftY: number;
        gridColor: string;
        gridAlpha: number;
        gridDistance: number;
        gridUnits: string;
        tokenVision: boolean;
        fogExploration: boolean;
        fogReset: number;
        globalLight: boolean;
        globalLightThreshold: null;
        darkness: number;
        drawings: DrawingElement[];
        tokens: TokenElement[];
        lights: LightElement[];
        notes: Note[];
        sounds: ScenesSound[];
        templates: any[];
        tiles: TileElement[];
        walls: WallElement[];
        playlist: null;
        playlistSound: null;
        journal: null | string;
        weather: string;
        folder: string;
        sort: number;
        permission: Permission;
        flags: ScenesFlags;
    }

    export interface DrawingElement {
        _id: string;
        author: Author;
        type: string;
        x: number;
        y: number;
        width: number;
        height: number;
        rotation: number;
        z: number;
        points: any[];
        bezierFactor: number;
        fillType: number;
        fillColor: null;
        fillAlpha: number;
        strokeWidth: number;
        strokeColor: null;
        strokeAlpha: number;
        text: string;
        fontFamily: DrawingFontFamily;
        fontSize: number;
        textColor: TextColor;
        textAlpha: number;
        hidden: boolean;
        locked: boolean;
        flags: DrawingFlagsClass;
        texture: null;
    }

    export interface DrawingFlagsClass {
        'better-text-drawings': BetterTextDrawings;
    }

    export enum DrawingFontFamily {
        EBGaramond = 'EB Garamond',
    }

    export interface ScenesFlags {
        'token-attacher': PermissionsClass;
        core?: FluffyCore;
        htmltoscene?: Htmltoscene;
        pinfix: PurplePinfix;
        smalltime?: Smalltime;
        falemos?: Falemos;
        fxmaster?: Fxmaster;
        weatherblock?: Weatherblock;
        'blood-n-guts'?: BloodNGuts;
        'calendar-weather'?: CalendarWeather;
    }

    export interface BloodNGuts {
        visible: boolean;
        history: History;
    }

    export interface History {
        events: Event[];
        pointer: number;
    }

    export interface Event {
        name: Name;
        alpha: number;
        styleData: StyleData;
        drips: Drip[];
        offset: Center;
        height: number;
        width: number;
        id: string;
        tokenId?: string;
        x?: number;
        y?: number;
        zIndex?: number;
        z?: number;
        _id?: string;
        scale?: number;
        rotation?: number;
        hidden?: boolean;
        locked?: boolean;
        author?: string;
    }

    export interface Drip {
        x: number;
        y: number;
        angle: number;
        width: number;
        height: number;
        glyph: string;
    }

    export enum Name {
        FloorSplat = 'Floor Splat',
        TokenSplat = 'Token Splat',
        TrailSplat = 'Trail Splat',
    }

    export interface StyleData {
        fontFamily: StyleDataFontFamily;
        fontSize: number;
        fill: Fill;
        align: Align;
    }

    export enum Align {
        Center = 'center',
    }

    export enum Fill {
        The8A0707 = '#8A0707',
    }

    export enum StyleDataFontFamily {
        Sigali = 'Sigali',
        Splatter = 'splatter',
        WCRhesusABta = 'WC Rhesus A Bta',
    }

    export interface CalendarWeather {
        showFX: boolean;
        doNightCycle: boolean;
    }

    export interface Falemos {
        config: FalemosConfig;
    }

    export interface FalemosConfig {
        hide: Hide;
        enable?: boolean;
        ALH5lul2TfXBAtai?: Alh5Lul2TfXbAtai;
        uirzB3HdEWNhsGpF?: Alh5Lul2TfXbAtai;
        vl6WCsThhjIY4Hj3?: Alh5Lul2TfXbAtai;
        bQonQoqY8mo5ZcsQ?: Alh5Lul2TfXbAtai;
        MovL8pmQ9lKDVWBx?: Alh5Lul2TfXbAtai;
    }

    export interface Alh5Lul2TfXbAtai {
        x: number | null;
        y: number | null;
        width: null;
        overlayImg: string;
        overlayLeft: null;
        overlayRight: null;
        overlayTop: null;
        overlayBottom: null;
        geometry: string;
        filter: string;
        cameraName: null;
        cameraNameOffsetX: null;
        cameraNameOffsetY: null;
        cameraNameFontSize: null;
        cameraNameColor: string;
        cameraNameFont: string;
        fit: string;
    }

    export interface Hide {
        mode: string;
        navigation?: boolean;
        controls?: boolean;
        players?: boolean;
        sidebar?: boolean;
        hotbar?: boolean;
    }

    export interface Fxmaster {
        filters: PermissionsClass;
        effects?: PermissionsClass;
        invert?: boolean;
        filteredLayers?: FilteredLayers;
    }

    export interface FilteredLayers {
        background: boolean;
        foreground: boolean;
        drawings: boolean;
        tokens: boolean;
    }

    export interface Htmltoscene {
        enable: boolean;
        fileLoc: string;
        minUI: boolean;
        keepTop: boolean;
        spaceRight: boolean;
        rightDisabled: boolean;
        hidePaused: boolean;
        hideSmallTime: boolean;
    }

    export interface PurplePinfix {
        enable: boolean;
        pinLocker: boolean;
        aboveFog: boolean;
        zoomFloor: number;
        zoomCeil: number;
        minScale: number;
        maxScale: number;
        hudScale: number;
    }

    export interface Smalltime {
        'darkness-link': boolean;
        'player-vis': string;
    }

    export interface Weatherblock {
        invertMask: boolean;
    }

    export interface Initial {
        x: number;
        y: number;
        scale: number;
    }

    export interface LightElement {
        _id: string;
        x: number;
        y: number;
        rotation: number;
        dim?: number;
        bright?: number;
        angle?: number;
        tintAlpha?: number;
        lightAnimation?: Animation;
        darknessThreshold?: number;
        darkness?: Darkness;
        hidden: boolean;
        flags: LightFlags;
        tintColor?: string;
        config: ConfigClass;
        walls: boolean;
        vision: boolean;
        id?: string;
    }

    export interface LightFlags {
        'df-active-lights'?: DfActiveLights;
        lightmask?: Lightmask;
        'token-attacher'?: FluffyTokenAttacher;
    }

    export interface DfActiveLights {
        anims: null;
    }

    export interface Note {
        _id: string;
        entryId: null | string;
        x: number;
        y: number;
        icon: string;
        iconSize: number;
        iconTint: null;
        fontFamily: DrawingFontFamily;
        fontSize: number;
        textAnchor: number;
        textColor: TextColor | null;
        flags: NoteFlags;
    }

    export interface NoteFlags {
        'backgroundless-pins'?: BackgroundlessPins;
        pinfix?: FluffyPinfix;
    }

    export interface BackgroundlessPins {
        hasBackground: boolean;
    }

    export interface FluffyPinfix {
        showName: boolean;
        minZoomLevel: number;
        maxZoomLevel: number;
    }

    export interface ScenesSound {
        _id: string;
        x: number;
        y: number;
        radius: number;
        path: string;
        repeat: boolean;
        volume: number;
        walls: boolean;
        easing: boolean;
        hidden: boolean;
        darkness: Darkness;
        flags: FluffyFlags;
    }

    export interface FluffyFlags {
        lightmask: Lightmask;
    }

    export interface TileElement {
        _id: string;
        img: string;
        width: number;
        height: number;
        x: number;
        y: number;
        z: number;
        rotation: number;
        alpha: number;
        tint?: null;
        hidden: boolean;
        locked: boolean;
        overhead: boolean;
        occlusion: Occlusion;
        video: Video;
        flags: TileFlags;
    }

    export interface TokenElement {
        _id: string;
        name: string;
        displayName: number;
        actorId: string;
        actorLink: boolean;
        actorData: FluffyActorData;
        img: string;
        tint?: null | string;
        width: number;
        height: number;
        scale: number;
        mirrorX: boolean;
        mirrorY: boolean;
        x: number;
        y: number;
        elevation: number;
        lockRotation: boolean;
        rotation: number;
        effects: any[];
        alpha: number;
        hidden: boolean;
        vision: boolean;
        dimSight: number;
        brightSight: number;
        sightAngle: number;
        light: ConfigClass;
        disposition: number;
        displayBars: number;
        bar1: Bar;
        bar2: Bar;
        flags: TentacledFlags;
        alternateImages?: string;
    }

    export interface FluffyActorData {
        data?: TentacledData;
        name?: string;
        itemUpdates?: FluffyItemUpdates;
        items?: ActorDataItem[];
    }

    export interface TentacledData {
        attributes?: TentacledAttributes;
        details?: FluffyDetails;
    }

    export interface TentacledAttributes {
        hp: FluffyHP;
        init?: Level;
    }

    export interface FluffyItemUpdates {
        puz9h9sp2808upmw?: GpnCqtrI765GhGos;
        gpnCqtrI765ghGos?: GpnCqtrI765GhGos;
        e1d4o06ng5glpxeb?: E1D4O06Ng5Glpxeb;
        a20ii4av55ae5a3c?: GpnCqtrI765GhGos;
        lsn51lrncweutumk?: E1D4O06Ng5Glpxeb;
        xZaVgFzzudbWuK4R?: GpnCqtrI765GhGos;
        lvjntk1zzjpgs53u?: GpnCqtrI765GhGos;
    }

    export interface E1D4O06Ng5Glpxeb {
        name: string;
        data: E1D4O06Ng5GlpxebData;
    }

    export interface E1D4O06Ng5GlpxebData {
        toHit: string;
        damage: string;
        range: string;
    }

    export interface ActorDataItem {
        _id: string;
        name: string;
        type: ItemType;
        img: string;
        data: StickyData;
        effects: any[];
        folder: null;
        sort: number;
        permission: { [key: string]: number };
        flags: ItemFlags;
    }

    export interface StickyData {
        description: PurpleDescription;
        source: string;
        value: ValueClass;
        isCoins?: boolean;
        weight: number | null;
        quantity?: number;
        equipped?: boolean;
        identified?: boolean;
        config?: FluffyConfig;
        actionDie?: string;
        toHit?: string;
        damage?: FumbleDie;
        range?: string;
        twoHanded?: boolean;
        melee?: boolean;
        shortRangeStrength?: boolean;
        subdual?: boolean;
        backstab?: boolean;
        backstabDamage?: null;
        doubleIfMounted?: boolean;
        critRange?: number;
    }

    export interface TentacledFlags {
        'token-independence'?: TokenIndependence;
        'token-attacher': IndigoTokenAttacher;
        'df-qol'?: DfQol;
        'monks-little-details'?: MonksLittleDetails;
    }

    export interface DfQol {
        locked: boolean;
    }

    export interface IndigoTokenAttacher {
        pos: Pos;
        attached?: Attached;
    }

    export interface Attached {
        Tile?: string[];
        Wall?: string[];
        AmbientLight?: string[];
    }

    export interface WallElement {
        _id: string;
        c: number[];
        move: number;
        sound: number;
        dir: number;
        door: number;
        ds: number;
        flags: WallFlagsClass;
        light: number;
        sight: number;
    }

    export interface WallFlagsClass {
        'token-attacher'?: IndecentTokenAttacher;
        smartdoors?: Smartdoors;
    }

    export interface Smartdoors {
        synchronizationGroup?: string;
    }

    export interface IndecentTokenAttacher {
        parent: FluffyParent;
        offset: TentacledOffset;
    }

    export enum FluffyParent {
        E4Xs2WZBQzOMOUKW = 'E4Xs2WZBQzOMOUKW',
        GvuNStnAonXBQ6CD = 'gvuNStnAonXBQ6cD',
        HecbNYqcR3M4KIE7 = 'HecbNYqcR3m4KIE7',
        KaEKAyUXdgOrJrmR = 'KaEKAyUXdgOrJrmR',
        QjWhMLCZDG3Ckmfp = 'qjWhMLCZDG3Ckmfp',
        RDNsjFt79DL8Iz6V = 'rDNsjFt79DL8Iz6V',
        The4Zchdz1JfzYVMDM3 = '4Zchdz1jfzYVMDM3',
        The9EiY8ViFhUArGuLw = '9EiY8ViFhUArGuLw',
        UQFZ5IgGy9CZiuDB = 'uQFZ5IgGy9CZiuDb',
        WqY356CKleUNikxl = 'wqY356cKleUNikxl',
    }

    export interface Settings {
        key: string;
        value: string;
        _id: string;
    }

    export interface Tables {
        _id: string;
        name: string;
        img: string;
        description: string;
        results: Result[];
        formula: string;
        replacement: boolean;
        displayRoll: boolean;
        folder: string;
        sort: number;
        permission: Permission;
        flags: TablesFlags;
    }

    export interface TablesFlags {
        cf?: null;
        core?: FluffyCore;
        'better-rolltables'?: PurpleBetterRolltables;
        'journal-links'?: FluffyJournalLinks;
    }

    export interface PurpleBetterRolltables {
        'table-type': string;
        'table-currency-string': string;
        'loot-amount-key': string;
        'loot-actor-name': string;
    }

    export interface FluffyJournalLinks {
        referencedBy: ReferencedBy;
    }

    export interface ReferencedBy {
        JournalEntry: string[];
    }

    export interface Result {
        _id: string;
        flags: ResultFlags;
        type: number;
        text: string;
        img: Img;
        weight: number;
        range: number[];
        drawn: boolean;
        collection?: CollectionEnum | null;
        resultId?: null | string;
        rangeL?: number;
        rangeH?: number;
    }

    export interface ResultFlags {
        'better-rolltables'?: FluffyBetterRolltables;
    }

    export interface FluffyBetterRolltables {
        'brt-result-formula': BrtResultFormula;
    }

    export interface BrtResultFormula {
        formula: string;
    }

    export enum Img {
        IconsSVGD20BlackSVG = 'icons/svg/d20-black.svg',
        IconsSVGD20GreySVG = 'icons/svg/d20-grey.svg',
    }

    export interface Users {
        _id: string;
        character: null;
        color: string;
        hotbar: { [key: string]: string };
        name: string;
        password: string;
        passwordSalt: string;
        permissions: PermissionsClass;
        role: number;
        flags: StickyFlags;
    }

    export interface StickyFlags {
        dcc?: DCC;
        'dcc-core-book'?: DCCCoreBook;
        'token-attacher'?: HilariousTokenAttacher;
        'monks-enhanced-journal'?: FluffyMonksEnhancedJournal;
    }

    export interface DCC {
        lastSeenSystemVersion: string;
    }

    export interface DCCCoreBook {
        lastSeenVersion: string;
    }

    export interface FluffyMonksEnhancedJournal {
        tabs: Tab[];
        _recentlyViewed: RecentlyViewed[];
    }

    export interface RecentlyViewed {
        id: string;
        uuid: string;
        name: string;
        type?: string;
    }

    export interface Tab {
        id: string;
        text: string;
        active: boolean;
        history: string[];
        entityId: string;
    }

    export interface HilariousTokenAttacher {
        copyPrototypeMap: CopyPrototypeMap;
    }

    export interface CopyPrototypeMap {
        map: Map;
        grid: Grid;
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
}

// // Converts JSON strings to/from your types
// // and asserts the results of JSON.parse at runtime
// export class Convert {
//     public static toActors(json: string): Actors {
//         return cast(JSON.parse(json), r("Actors"));
//     }

//     public static actorsToJson(value: Actors): string {
//         return JSON.stringify(uncast(value, r("Actors")), null, 2);
//     }

//     public static toFolders(json: string): Folders {
//         return cast(JSON.parse(json), r("Folders"));
//     }

//     public static foldersToJson(value: Folders): string {
//         return JSON.stringify(uncast(value, r("Folders")), null, 2);
//     }

//     public static toItems(json: string): Items {
//         return cast(JSON.parse(json), r("Items"));
//     }

//     public static itemsToJson(value: Items): string {
//         return JSON.stringify(uncast(value, r("Items")), null, 2);
//     }

//     public static toJournal(json: string): Journal {
//         return cast(JSON.parse(json), r("Journal"));
//     }

//     public static journalToJson(value: Journal): string {
//         return JSON.stringify(uncast(value, r("Journal")), null, 2);
//     }

//     public static toMacros(json: string): Macros {
//         return cast(JSON.parse(json), r("Macros"));
//     }

//     public static macrosToJson(value: Macros): string {
//         return JSON.stringify(uncast(value, r("Macros")), null, 2);
//     }

//     public static toMessages(json: string): Messages {
//         return cast(JSON.parse(json), r("Messages"));
//     }

//     public static messagesToJson(value: Messages): string {
//         return JSON.stringify(uncast(value, r("Messages")), null, 2);
//     }

//     public static toPlaylists(json: string): Playlists {
//         return cast(JSON.parse(json), r("Playlists"));
//     }

//     public static playlistsToJson(value: Playlists): string {
//         return JSON.stringify(uncast(value, r("Playlists")), null, 2);
//     }

//     public static toScenes(json: string): Scenes {
//         return cast(JSON.parse(json), r("Scenes"));
//     }

//     public static scenesToJson(value: Scenes): string {
//         return JSON.stringify(uncast(value, r("Scenes")), null, 2);
//     }

//     public static toSettings(json: string): Settings {
//         return cast(JSON.parse(json), r("Settings"));
//     }

//     public static settingsToJson(value: Settings): string {
//         return JSON.stringify(uncast(value, r("Settings")), null, 2);
//     }

//     public static toTables(json: string): Tables {
//         return cast(JSON.parse(json), r("Tables"));
//     }

//     public static tablesToJson(value: Tables): string {
//         return JSON.stringify(uncast(value, r("Tables")), null, 2);
//     }

//     public static toUsers(json: string): Users {
//         return cast(JSON.parse(json), r("Users"));
//     }

//     public static usersToJson(value: Users): string {
//         return JSON.stringify(uncast(value, r("Users")), null, 2);
//     }
// }

// function invalidValue(typ: any, val: any, key: any = ''): never {
//     if (key) {
//         throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
//     }
//     throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
// }

// function jsonToJSProps(typ: any): any {
//     if (typ.jsonToJS === undefined) {
//         const map: any = {};
//         typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
//         typ.jsonToJS = map;
//     }
//     return typ.jsonToJS;
// }

// function jsToJSONProps(typ: any): any {
//     if (typ.jsToJSON === undefined) {
//         const map: any = {};
//         typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
//         typ.jsToJSON = map;
//     }
//     return typ.jsToJSON;
// }

// function transform(val: any, typ: any, getProps: any, key: any = ''): any {
//     function transformPrimitive(typ: string, val: any): any {
//         if (typeof typ === typeof val) return val;
//         return invalidValue(typ, val, key);
//     }

//     function transformUnion(typs: any[], val: any): any {
//         // val must validate against one typ in typs
//         const l = typs.length;
//         for (let i = 0; i < l; i++) {
//             const typ = typs[i];
//             try {
//                 return transform(val, typ, getProps);
//             } catch (_) {}
//         }
//         return invalidValue(typs, val);
//     }

//     function transformEnum(cases: string[], val: any): any {
//         if (cases.indexOf(val) !== -1) return val;
//         return invalidValue(cases, val);
//     }

//     function transformArray(typ: any, val: any): any {
//         // val must be an array with no invalid elements
//         if (!Array.isArray(val)) return invalidValue("array", val);
//         return val.map(el => transform(el, typ, getProps));
//     }

//     function transformDate(val: any): any {
//         if (val === null) {
//             return null;
//         }
//         const d = new Date(val);
//         if (isNaN(d.valueOf())) {
//             return invalidValue("Date", val);
//         }
//         return d;
//     }

//     function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
//         if (val === null || typeof val !== "object" || Array.isArray(val)) {
//             return invalidValue("object", val);
//         }
//         const result: any = {};
//         Object.getOwnPropertyNames(props).forEach(key => {
//             const prop = props[key];
//             const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
//             result[prop.key] = transform(v, prop.typ, getProps, prop.key);
//         });
//         Object.getOwnPropertyNames(val).forEach(key => {
//             if (!Object.prototype.hasOwnProperty.call(props, key)) {
//                 result[key] = transform(val[key], additional, getProps, key);
//             }
//         });
//         return result;
//     }

//     if (typ === "any") return val;
//     if (typ === null) {
//         if (val === null) return val;
//         return invalidValue(typ, val);
//     }
//     if (typ === false) return invalidValue(typ, val);
//     while (typeof typ === "object" && typ.ref !== undefined) {
//         typ = typeMap[typ.ref];
//     }
//     if (Array.isArray(typ)) return transformEnum(typ, val);
//     if (typeof typ === "object") {
//         return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
//             : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
//             : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
//             : invalidValue(typ, val);
//     }
//     // Numbers can be parsed by Date but shouldn't be.
//     if (typ === Date && typeof val !== "number") return transformDate(val);
//     return transformPrimitive(typ, val);
// }

// function cast<T>(val: any, typ: any): T {
//     return transform(val, typ, jsonToJSProps);
// }

// function uncast<T>(val: T, typ: any): any {
//     return transform(val, typ, jsToJSONProps);
// }

// function a(typ: any) {
//     return { arrayItems: typ };
// }

// function u(...typs: any[]) {
//     return { unionMembers: typs };
// }

// function o(props: any[], additional: any) {
//     return { props, additional };
// }

// function m(additional: any) {
//     return { props: [], additional };
// }

// function r(name: string) {
//     return { ref: name };
// }

// const typeMap: any = {
//     "Actors": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "name", js: "name", typ: "" },
//         { json: "type", js: "type", typ: r("ActorsType") },
//         { json: "img", js: "img", typ: "" },
//         { json: "data", js: "data", typ: r("ActorsData") },
//         { json: "token", js: "token", typ: r("ActorsToken") },
//         { json: "items", js: "items", typ: a(r("ActorsItem")) },
//         { json: "effects", js: "effects", typ: a("any") },
//         { json: "folder", js: "folder", typ: "" },
//         { json: "sort", js: "sort", typ: 0 },
//         { json: "permission", js: "permission", typ: m(0) },
//         { json: "flags", js: "flags", typ: r("ActorsFlags") },
//     ], false),
//     "ActorsData": o([
//         { json: "abilities", js: "abilities", typ: r("Abilities") },
//         { json: "attributes", js: "attributes", typ: r("PurpleAttributes") },
//         { json: "details", js: "details", typ: r("PurpleDetails") },
//         { json: "saves", js: "saves", typ: r("Saves") },
//         { json: "currency", js: "currency", typ: r("Currency") },
//         { json: "config", js: "config", typ: r("PurpleConfig") },
//         { json: "class", js: "class", typ: r("Class") },
//         { json: "skills", js: "skills", typ: u(undefined, r("Skills")) },
//         { json: "inventory", js: "inventory", typ: u(undefined, r("Inventory")) },
//     ], false),
//     "Abilities": o([
//         { json: "str", js: "str", typ: r("Agl") },
//         { json: "agl", js: "agl", typ: r("Agl") },
//         { json: "sta", js: "sta", typ: r("Agl") },
//         { json: "per", js: "per", typ: r("Agl") },
//         { json: "int", js: "int", typ: r("Agl") },
//         { json: "lck", js: "lck", typ: r("Agl") },
//     ], false),
//     "Agl": o([
//         { json: "label", js: "label", typ: r("AglLabel") },
//         { json: "value", js: "value", typ: 0 },
//         { json: "max", js: "max", typ: 0 },
//     ], false),
//     "PurpleAttributes": o([
//         { json: "ac", js: "ac", typ: r("AC") },
//         { json: "actionDice", js: "actionDice", typ: r("ActionDiceClass") },
//         { json: "critical", js: "critical", typ: r("Critical") },
//         { json: "fumble", js: "fumble", typ: r("Fumble") },
//         { json: "hitDice", js: "hitDice", typ: r("HitDice") },
//         { json: "hp", js: "hp", typ: r("PurpleHP") },
//         { json: "init", js: "init", typ: r("Init") },
//         { json: "speed", js: "speed", typ: r("Speed") },
//         { json: "special", js: "special", typ: u(undefined, r("HitDice")) },
//     ], false),
//     "AC": o([
//         { json: "value", js: "value", typ: u(0, "") },
//         { json: "checkPenalty", js: "checkPenalty", typ: 0 },
//         { json: "speedPenalty", js: "speedPenalty", typ: 0 },
//         { json: "fumbleDie", js: "fumbleDie", typ: u(undefined, r("FumbleDie")) },
//     ], false),
//     "ActionDiceClass": o([
//         { json: "value", js: "value", typ: r("ValueElement") },
//         { json: "options", js: "options", typ: a(r("ValueElement")) },
//     ], false),
//     "Critical": o([
//         { json: "die", js: "die", typ: r("FumbleDie") },
//         { json: "table", js: "table", typ: r("Table") },
//     ], false),
//     "Fumble": o([
//         { json: "die", js: "die", typ: r("FumbleDie") },
//     ], false),
//     "HitDice": o([
//         { json: "value", js: "value", typ: "" },
//     ], false),
//     "PurpleHP": o([
//         { json: "value", js: "value", typ: u(0, null) },
//         { json: "min", js: "min", typ: 0 },
//         { json: "max", js: "max", typ: u(0, null) },
//         { json: "temp", js: "temp", typ: 0 },
//         { json: "tempmax", js: "tempmax", typ: 0 },
//     ], false),
//     "Init": o([
//         { json: "die", js: "die", typ: r("ValueElement") },
//         { json: "value", js: "value", typ: 0 },
//     ], false),
//     "Speed": o([
//         { json: "value", js: "value", typ: "" },
//         { json: "base", js: "base", typ: 0 },
//         { json: "special", js: "special", typ: "" },
//         { json: "other", js: "other", typ: u(undefined, r("Other")) },
//     ], false),
//     "Class": o([
//         { json: "spellCheck", js: "spellCheck", typ: u(0, "") },
//         { json: "spellCheckAbility", js: "spellCheckAbility", typ: r("Ability") },
//         { json: "deity", js: "deity", typ: u(undefined, u(null, "")) },
//         { json: "disapproval", js: "disapproval", typ: u(undefined, "") },
//         { json: "disapprovalTable", js: "disapprovalTable", typ: u(undefined, "") },
//         { json: "luckDie", js: "luckDie", typ: u(undefined, "") },
//         { json: "backstab", js: "backstab", typ: u(undefined, "") },
//         { json: "luckyWeapon", js: "luckyWeapon", typ: u(undefined, null) },
//         { json: "patron", js: "patron", typ: u(undefined, null) },
//         { json: "familiar", js: "familiar", typ: u(undefined, null) },
//         { json: "corruption", js: "corruption", typ: u(undefined, a("any")) },
//         { json: "className", js: "className", typ: u(undefined, "") },
//     ], false),
//     "PurpleConfig": o([
//         { json: "attackBonusMode", js: "attackBonusMode", typ: r("AttackBonusMode") },
//         { json: "actionDice", js: "actionDice", typ: r("ActionDiceEnum") },
//         { json: "capLevel", js: "capLevel", typ: true },
//         { json: "maxLevel", js: "maxLevel", typ: 0 },
//         { json: "rollAttackBonus", js: "rollAttackBonus", typ: true },
//         { json: "computeAC", js: "computeAC", typ: true },
//         { json: "baseACAbility", js: "baseACAbility", typ: r("Ability") },
//         { json: "computeSpeed", js: "computeSpeed", typ: true },
//         { json: "computeCheckPenalty", js: "computeCheckPenalty", typ: true },
//         { json: "sortInventory", js: "sortInventory", typ: true },
//         { json: "removeEmptyItems", js: "removeEmptyItems", typ: true },
//         { json: "showSpells", js: "showSpells", typ: true },
//         { json: "showSkills", js: "showSkills", typ: true },
//         { json: "showMaxAbilities", js: "showMaxAbilities", typ: true },
//         { json: "showBackstab", js: "showBackstab", typ: true },
//     ], false),
//     "Currency": o([
//         { json: "pp", js: "pp", typ: "" },
//         { json: "ep", js: "ep", typ: "" },
//         { json: "gp", js: "gp", typ: "" },
//         { json: "sp", js: "sp", typ: "" },
//         { json: "cp", js: "cp", typ: "" },
//     ], false),
//     "PurpleDetails": o([
//         { json: "level", js: "level", typ: r("Level") },
//         { json: "alignment", js: "alignment", typ: r("Alignment") },
//         { json: "attackBonus", js: "attackBonus", typ: "" },
//         { json: "languages", js: "languages", typ: r("Languages") },
//         { json: "occupation", js: "occupation", typ: u(r("HitDice"), "") },
//         { json: "title", js: "title", typ: u(r("HitDice"), "") },
//         { json: "notes", js: "notes", typ: u(r("HitDice"), "") },
//         { json: "birthAugur", js: "birthAugur", typ: u(undefined, "") },
//         { json: "critRange", js: "critRange", typ: u(undefined, 0) },
//         { json: "xp", js: "xp", typ: u(undefined, r("XP")) },
//         { json: "sheetClass", js: "sheetClass", typ: u(undefined, "") },
//     ], false),
//     "Level": o([
//         { json: "value", js: "value", typ: u(0, null) },
//     ], false),
//     "XP": o([
//         { json: "value", js: "value", typ: 0 },
//         { json: "min", js: "min", typ: 0 },
//         { json: "max", js: "max", typ: 0 },
//     ], false),
//     "Inventory": o([
//         { json: "weapons", js: "weapons", typ: a("any") },
//         { json: "ammunition", js: "ammunition", typ: a("any") },
//         { json: "armor", js: "armor", typ: a("any") },
//         { json: "equipment", js: "equipment", typ: a("any") },
//         { json: "mount", js: "mount", typ: a("any") },
//     ], false),
//     "Saves": o([
//         { json: "frt", js: "frt", typ: r("Frt") },
//         { json: "ref", js: "ref", typ: r("Frt") },
//         { json: "wil", js: "wil", typ: r("Frt") },
//     ], false),
//     "Frt": o([
//         { json: "label", js: "label", typ: r("FrtLabel") },
//         { json: "value", js: "value", typ: 0 },
//     ], false),
//     "Skills": o([
//         { json: "findSecretDoors", js: "findSecretDoors", typ: r("DivineAid") },
//         { json: "divineAid", js: "divineAid", typ: r("DivineAid") },
//         { json: "turnUnholy", js: "turnUnholy", typ: r("DivineAid") },
//         { json: "layOnHands", js: "layOnHands", typ: r("DivineAid") },
//         { json: "sneakSilently", js: "sneakSilently", typ: r("CastSpellFromScroll") },
//         { json: "hideInShadows", js: "hideInShadows", typ: r("CastSpellFromScroll") },
//         { json: "pickPockets", js: "pickPockets", typ: r("CastSpellFromScroll") },
//         { json: "climbSheerSurfaces", js: "climbSheerSurfaces", typ: r("CastSpellFromScroll") },
//         { json: "pickLock", js: "pickLock", typ: r("CastSpellFromScroll") },
//         { json: "findTrap", js: "findTrap", typ: r("CastSpellFromScroll") },
//         { json: "disableTrap", js: "disableTrap", typ: r("CastSpellFromScroll") },
//         { json: "forgeDocument", js: "forgeDocument", typ: r("CastSpellFromScroll") },
//         { json: "disguiseSelf", js: "disguiseSelf", typ: r("CastSpellFromScroll") },
//         { json: "readLanguages", js: "readLanguages", typ: r("CastSpellFromScroll") },
//         { json: "handlePoison", js: "handlePoison", typ: r("HandlePoison") },
//         { json: "castSpellFromScroll", js: "castSpellFromScroll", typ: r("CastSpellFromScroll") },
//         { json: "sneakAndHide", js: "sneakAndHide", typ: r("HandlePoison") },
//         { json: "shieldBash", js: "shieldBash", typ: r("CastSpellFromScroll") },
//     ], false),
//     "CastSpellFromScroll": o([
//         { json: "label", js: "label", typ: "" },
//         { json: "ability", js: "ability", typ: r("Ability") },
//         { json: "die", js: "die", typ: u(undefined, r("Die")) },
//         { json: "value", js: "value", typ: "" },
//         { json: "useDeed", js: "useDeed", typ: u(undefined, true) },
//     ], false),
//     "DivineAid": o([
//         { json: "label", js: "label", typ: r("DivineAidLabel") },
//         { json: "ability", js: "ability", typ: r("Ability") },
//         { json: "value", js: "value", typ: u(0, "") },
//         { json: "useDisapprovalRange", js: "useDisapprovalRange", typ: u(undefined, true) },
//     ], false),
//     "HandlePoison": o([
//         { json: "label", js: "label", typ: r("HandlePoisonLabel") },
//         { json: "value", js: "value", typ: "" },
//     ], false),
//     "ActorsFlags": o([
//         { json: "core", js: "core", typ: u(undefined, r("PurpleCore")) },
//         { json: "cf", js: "cf", typ: u(undefined, null) },
//     ], false),
//     "PurpleCore": o([
//         { json: "sourceId", js: "sourceId", typ: u(undefined, "") },
//         { json: "sheetClass", js: "sheetClass", typ: u(undefined, "") },
//     ], false),
//     "ActorsItem": o([
//         { json: "name", js: "name", typ: "" },
//         { json: "type", js: "type", typ: r("ItemType") },
//         { json: "img", js: "img", typ: "" },
//         { json: "data", js: "data", typ: r("PurpleData") },
//         { json: "_id", js: "_id", typ: "" },
//         { json: "effects", js: "effects", typ: a("any") },
//         { json: "folder", js: "folder", typ: u(r("Folder"), null) },
//         { json: "sort", js: "sort", typ: 0 },
//         { json: "permission", js: "permission", typ: m(0) },
//         { json: "flags", js: "flags", typ: r("ItemFlags") },
//     ], false),
//     "PurpleData": o([
//         { json: "description", js: "description", typ: r("PurpleDescription") },
//         { json: "source", js: "source", typ: "" },
//         { json: "quantity", js: "quantity", typ: u(undefined, 0) },
//         { json: "weight", js: "weight", typ: u(0, null) },
//         { json: "equipped", js: "equipped", typ: u(undefined, true) },
//         { json: "identified", js: "identified", typ: u(undefined, true) },
//         { json: "value", js: "value", typ: r("ValueClass") },
//         { json: "config", js: "config", typ: u(undefined, r("FluffyConfig")) },
//         { json: "actionDie", js: "actionDie", typ: u(undefined, r("ValueElement")) },
//         { json: "toHit", js: "toHit", typ: u(undefined, "") },
//         { json: "damage", js: "damage", typ: u(undefined, "") },
//         { json: "range", js: "range", typ: u(undefined, r("PurpleRange")) },
//         { json: "twoHanded", js: "twoHanded", typ: u(undefined, u(true, 0)) },
//         { json: "melee", js: "melee", typ: u(undefined, true) },
//         { json: "shortRangeStrength", js: "shortRangeStrength", typ: u(undefined, 0) },
//         { json: "subdual", js: "subdual", typ: u(undefined, 0) },
//         { json: "backstab", js: "backstab", typ: u(undefined, true) },
//         { json: "backstabDamage", js: "backstabDamage", typ: u(undefined, null) },
//         { json: "doubleIfMounted", js: "doubleIfMounted", typ: u(undefined, 0) },
//         { json: "critRange", js: "critRange", typ: u(undefined, 0) },
//         { json: "isCoins", js: "isCoins", typ: u(undefined, true) },
//     ], false),
//     "FluffyConfig": o([
//         { json: "inheritActionDie", js: "inheritActionDie", typ: true },
//         { json: "inheritCritRange", js: "inheritCritRange", typ: true },
//     ], false),
//     "PurpleDescription": o([
//         { json: "value", js: "value", typ: "" },
//         { json: "chat", js: "chat", typ: "" },
//         { json: "unidentified", js: "unidentified", typ: "" },
//         { json: "summary", js: "summary", typ: "" },
//     ], false),
//     "ValueClass": o([
//         { json: "pp", js: "pp", typ: u(0, "") },
//         { json: "ep", js: "ep", typ: u(0, "") },
//         { json: "gp", js: "gp", typ: u(0, "") },
//         { json: "sp", js: "sp", typ: u(0, "") },
//         { json: "cp", js: "cp", typ: u(0, "") },
//     ], false),
//     "ItemFlags": o([
//         { json: "core", js: "core", typ: u(undefined, r("FluffyCore")) },
//         { json: "cf", js: "cf", typ: u(undefined, r("CF")) },
//         { json: "journal-links", js: "journal-links", typ: u(undefined, r("PurpleJournalLinks")) },
//         { json: "gm-notes", js: "gm-notes", typ: u(undefined, r("GmNotes")) },
//     ], false),
//     "CF": o([
//         { json: "id", js: "id", typ: "" },
//         { json: "color", js: "color", typ: "" },
//     ], false),
//     "FluffyCore": o([
//         { json: "sourceId", js: "sourceId", typ: "" },
//     ], false),
//     "GmNotes": o([
//         { json: "notes", js: "notes", typ: "" },
//     ], false),
//     "PurpleJournalLinks": o([
//         { json: "references", js: "references", typ: r("PermissionsClass") },
//     ], false),
//     "PermissionsClass": o([
//     ], false),
//     "ActorsToken": o([
//         { json: "_id", js: "_id", typ: u(undefined, "") },
//         { json: "name", js: "name", typ: "" },
//         { json: "displayName", js: "displayName", typ: 0 },
//         { json: "actorId", js: "actorId", typ: u(undefined, "") },
//         { json: "actorLink", js: "actorLink", typ: true },
//         { json: "actorData", js: "actorData", typ: u(undefined, r("PurpleActorData")) },
//         { json: "img", js: "img", typ: "" },
//         { json: "tint", js: "tint", typ: u(undefined, u(null, "")) },
//         { json: "width", js: "width", typ: 3.14 },
//         { json: "height", js: "height", typ: 3.14 },
//         { json: "scale", js: "scale", typ: 3.14 },
//         { json: "mirrorX", js: "mirrorX", typ: true },
//         { json: "mirrorY", js: "mirrorY", typ: true },
//         { json: "x", js: "x", typ: u(undefined, null) },
//         { json: "y", js: "y", typ: u(undefined, null) },
//         { json: "elevation", js: "elevation", typ: u(undefined, u(0, null)) },
//         { json: "lockRotation", js: "lockRotation", typ: true },
//         { json: "rotation", js: "rotation", typ: 0 },
//         { json: "effects", js: "effects", typ: u(undefined, a("any")) },
//         { json: "alpha", js: "alpha", typ: 3.14 },
//         { json: "hidden", js: "hidden", typ: u(undefined, true) },
//         { json: "vision", js: "vision", typ: true },
//         { json: "dimSight", js: "dimSight", typ: 0 },
//         { json: "brightSight", js: "brightSight", typ: 0 },
//         { json: "sightAngle", js: "sightAngle", typ: 0 },
//         { json: "light", js: "light", typ: r("ConfigClass") },
//         { json: "disposition", js: "disposition", typ: 0 },
//         { json: "displayBars", js: "displayBars", typ: 0 },
//         { json: "bar1", js: "bar1", typ: r("Bar") },
//         { json: "bar2", js: "bar2", typ: r("Bar") },
//         { json: "flags", js: "flags", typ: r("PurpleFlags") },
//         { json: "tokenId", js: "tokenId", typ: u(undefined, null) },
//         { json: "randomImg", js: "randomImg", typ: true },
//         { json: "dimLight", js: "dimLight", typ: u(undefined, 0) },
//         { json: "brightLight", js: "brightLight", typ: u(undefined, 0) },
//         { json: "lightAngle", js: "lightAngle", typ: u(undefined, 0) },
//         { json: "lightAlpha", js: "lightAlpha", typ: u(undefined, 3.14) },
//         { json: "lightAnimation", js: "lightAnimation", typ: u(undefined, r("LightAnimation")) },
//         { json: "lightColor", js: "lightColor", typ: u(undefined, null) },
//     ], false),
//     "PurpleActorData": o([
//         { json: "data", js: "data", typ: u(undefined, r("FluffyData")) },
//         { json: "name", js: "name", typ: u(undefined, "") },
//         { json: "itemUpdates", js: "itemUpdates", typ: u(undefined, r("PurpleItemUpdates")) },
//     ], false),
//     "FluffyData": o([
//         { json: "attributes", js: "attributes", typ: r("FluffyAttributes") },
//         { json: "details", js: "details", typ: u(undefined, r("FluffyDetails")) },
//     ], false),
//     "FluffyAttributes": o([
//         { json: "hp", js: "hp", typ: r("FluffyHP") },
//     ], false),
//     "FluffyHP": o([
//         { json: "value", js: "value", typ: 0 },
//         { json: "max", js: "max", typ: 0 },
//     ], false),
//     "FluffyDetails": o([
//         { json: "notes", js: "notes", typ: r("HitDice") },
//     ], false),
//     "PurpleItemUpdates": o([
//         { json: "gpnCqtrI765ghGos", js: "gpnCqtrI765ghGos", typ: r("GpnCqtrI765GhGos") },
//     ], false),
//     "GpnCqtrI765GhGos": o([
//         { json: "name", js: "name", typ: "" },
//         { json: "data", js: "data", typ: r("GpnCqtrI765GhGosData") },
//     ], false),
//     "GpnCqtrI765GhGosData": o([
//         { json: "toHit", js: "toHit", typ: "" },
//         { json: "damage", js: "damage", typ: r("FumbleDie") },
//         { json: "description", js: "description", typ: r("FluffyDescription") },
//     ], false),
//     "FluffyDescription": o([
//         { json: "summary", js: "summary", typ: "" },
//     ], false),
//     "Bar": o([
//         { json: "attribute", js: "attribute", typ: u(r("Attribute"), null) },
//     ], false),
//     "PurpleFlags": o([
//         { json: "token-attacher", js: "token-attacher", typ: u(undefined, r("PurpleTokenAttacher")) },
//         { json: "monks-little-details", js: "monks-little-details", typ: u(undefined, r("MonksLittleDetails")) },
//         { json: "token-independence", js: "token-independence", typ: u(undefined, r("TokenIndependence")) },
//         { json: "tagger", js: "tagger", typ: u(undefined, r("Tagger")) },
//     ], false),
//     "MonksLittleDetails": o([
//         { json: "token-highlight", js: "token-highlight", typ: "" },
//         { json: "bloodsplat-colour", js: "bloodsplat-colour", typ: r("BloodsplatColour") },
//     ], false),
//     "Tagger": o([
//         { json: "tags", js: "tags", typ: "" },
//     ], false),
//     "PurpleTokenAttacher": o([
//         { json: "pos", js: "pos", typ: r("Pos") },
//         { json: "prototypeAttached", js: "prototypeAttached", typ: u(undefined, r("PrototypeAttached")) },
//         { json: "grid", js: "grid", typ: u(undefined, r("Grid")) },
//     ], false),
//     "Grid": o([
//         { json: "size", js: "size", typ: 0 },
//         { json: "w", js: "w", typ: 0 },
//         { json: "h", js: "h", typ: 0 },
//     ], false),
//     "Pos": o([
//         { json: "base_id", js: "base_id", typ: "" },
//         { json: "xy", js: "xy", typ: r("Center") },
//         { json: "center", js: "center", typ: r("Center") },
//         { json: "rotation", js: "rotation", typ: 0 },
//         { json: "hidden", js: "hidden", typ: true },
//         { json: "elevation", js: "elevation", typ: 0 },
//     ], false),
//     "Center": o([
//         { json: "x", js: "x", typ: 3.14 },
//         { json: "y", js: "y", typ: 3.14 },
//     ], false),
//     "PrototypeAttached": o([
//         { json: "Wall", js: "Wall", typ: u(undefined, a(r("Wall"))) },
//         { json: "AmbientLight", js: "AmbientLight", typ: u(undefined, a(r("AmbientLight"))) },
//         { json: "Tile", js: "Tile", typ: u(undefined, a(r("Tile"))) },
//         { json: "Drawing", js: "Drawing", typ: u(undefined, a(r("Drawing"))) },
//     ], false),
//     "AmbientLight": o([
//         { json: "x", js: "x", typ: u(3.14, 0) },
//         { json: "y", js: "y", typ: u(3.14, 0) },
//         { json: "rotation", js: "rotation", typ: 0 },
//         { json: "walls", js: "walls", typ: true },
//         { json: "vision", js: "vision", typ: true },
//         { json: "config", js: "config", typ: r("ConfigClass") },
//         { json: "hidden", js: "hidden", typ: true },
//         { json: "flags", js: "flags", typ: r("AmbientLightFlags") },
//     ], false),
//     "ConfigClass": o([
//         { json: "alpha", js: "alpha", typ: 3.14 },
//         { json: "angle", js: "angle", typ: 0 },
//         { json: "bright", js: "bright", typ: u(3.14, 0) },
//         { json: "coloration", js: "coloration", typ: 0 },
//         { json: "dim", js: "dim", typ: 0 },
//         { json: "gradual", js: "gradual", typ: true },
//         { json: "luminosity", js: "luminosity", typ: 3.14 },
//         { json: "saturation", js: "saturation", typ: 3.14 },
//         { json: "contrast", js: "contrast", typ: 3.14 },
//         { json: "shadows", js: "shadows", typ: u(3.14, 0) },
//         { json: "animation", js: "animation", typ: r("Animation") },
//         { json: "darkness", js: "darkness", typ: r("Darkness") },
//         { json: "color", js: "color", typ: u(undefined, u(null, "")) },
//     ], false),
//     "Animation": o([
//         { json: "speed", js: "speed", typ: 0 },
//         { json: "intensity", js: "intensity", typ: 0 },
//         { json: "reverse", js: "reverse", typ: true },
//         { json: "type", js: "type", typ: u(undefined, "") },
//     ], false),
//     "Darkness": o([
//         { json: "min", js: "min", typ: 3.14 },
//         { json: "max", js: "max", typ: 3.14 },
//     ], false),
//     "AmbientLightFlags": o([
//         { json: "token-attacher", js: "token-attacher", typ: r("FluffyTokenAttacher") },
//         { json: "lightmask", js: "lightmask", typ: u(undefined, r("Lightmask")) },
//     ], false),
//     "Lightmask": o([
//         { json: "shape", js: "shape", typ: r("Shape") },
//         { json: "customWallIDs", js: "customWallIDs", typ: u(null, "") },
//         { json: "relative", js: "relative", typ: true },
//         { json: "customEdges", js: "customEdges", typ: u(undefined, a(r("CustomEdge"))) },
//         { json: "rotation", js: "rotation", typ: u(undefined, 0) },
//     ], false),
//     "CustomEdge": o([
//         { json: "c", js: "c", typ: a(3.14) },
//         { json: "light", js: "light", typ: 0 },
//         { json: "move", js: "move", typ: 0 },
//         { json: "sight", js: "sight", typ: 0 },
//         { json: "sound", js: "sound", typ: 0 },
//         { json: "id", js: "id", typ: "" },
//     ], false),
//     "FluffyTokenAttacher": o([
//         { json: "parent", js: "parent", typ: "" },
//         { json: "offset", js: "offset", typ: r("PurpleOffset") },
//     ], false),
//     "PurpleOffset": o([
//         { json: "x", js: "x", typ: 3.14 },
//         { json: "y", js: "y", typ: 3.14 },
//         { json: "rot", js: "rot", typ: 0 },
//         { json: "centerX", js: "centerX", typ: 3.14 },
//         { json: "centerY", js: "centerY", typ: 3.14 },
//         { json: "offRot", js: "offRot", typ: 0 },
//         { json: "size", js: "size", typ: r("PurpleSize") },
//         { json: "elevation", js: "elevation", typ: r("Elevation") },
//     ], false),
//     "Elevation": o([
//         { json: "flags", js: "flags", typ: r("PermissionsClass") },
//     ], false),
//     "PurpleSize": o([
//         { json: "config", js: "config", typ: r("SizeConfig") },
//         { json: "widthBase", js: "widthBase", typ: 0 },
//         { json: "heightBase", js: "heightBase", typ: 0 },
//     ], false),
//     "SizeConfig": o([
//         { json: "dim", js: "dim", typ: 0 },
//         { json: "bright", js: "bright", typ: 0 },
//     ], false),
//     "Drawing": o([
//         { json: "author", js: "author", typ: "" },
//         { json: "type", js: "type", typ: "" },
//         { json: "x", js: "x", typ: 0 },
//         { json: "y", js: "y", typ: 0 },
//         { json: "width", js: "width", typ: 0 },
//         { json: "height", js: "height", typ: 0 },
//         { json: "rotation", js: "rotation", typ: 0 },
//         { json: "z", js: "z", typ: 0 },
//         { json: "points", js: "points", typ: a("any") },
//         { json: "bezierFactor", js: "bezierFactor", typ: 0 },
//         { json: "fillType", js: "fillType", typ: 0 },
//         { json: "fillColor", js: "fillColor", typ: "" },
//         { json: "fillAlpha", js: "fillAlpha", typ: 0 },
//         { json: "strokeWidth", js: "strokeWidth", typ: 0 },
//         { json: "strokeColor", js: "strokeColor", typ: "" },
//         { json: "strokeAlpha", js: "strokeAlpha", typ: 0 },
//         { json: "texture", js: "texture", typ: null },
//         { json: "fontFamily", js: "fontFamily", typ: "" },
//         { json: "fontSize", js: "fontSize", typ: 0 },
//         { json: "textColor", js: "textColor", typ: r("TextColor") },
//         { json: "textAlpha", js: "textAlpha", typ: 0 },
//         { json: "hidden", js: "hidden", typ: true },
//         { json: "locked", js: "locked", typ: true },
//         { json: "flags", js: "flags", typ: r("DrawingFlags") },
//     ], false),
//     "DrawingFlags": o([
//         { json: "better-text-drawings", js: "better-text-drawings", typ: r("BetterTextDrawings") },
//         { json: "token-attacher", js: "token-attacher", typ: r("TentacledTokenAttacher") },
//     ], false),
//     "BetterTextDrawings": o([
//         { json: "textAlignment", js: "textAlignment", typ: "" },
//         { json: "textStrokeWidth", js: "textStrokeWidth", typ: 0 },
//         { json: "textStrokeColor", js: "textStrokeColor", typ: "" },
//     ], false),
//     "TentacledTokenAttacher": o([
//         { json: "parent", js: "parent", typ: "" },
//         { json: "offset", js: "offset", typ: r("FluffyOffset") },
//     ], false),
//     "FluffyOffset": o([
//         { json: "x", js: "x", typ: 3.14 },
//         { json: "y", js: "y", typ: 3.14 },
//         { json: "rot", js: "rot", typ: 0 },
//         { json: "centerX", js: "centerX", typ: 3.14 },
//         { json: "centerY", js: "centerY", typ: 3.14 },
//         { json: "offRot", js: "offRot", typ: 0 },
//         { json: "points", js: "points", typ: u(undefined, a("any")) },
//         { json: "size", js: "size", typ: r("FluffySize") },
//         { json: "elevation", js: "elevation", typ: r("Elevation") },
//     ], false),
//     "FluffySize": o([
//         { json: "width", js: "width", typ: 3.14 },
//         { json: "height", js: "height", typ: 3.14 },
//         { json: "widthBase", js: "widthBase", typ: 0 },
//         { json: "heightBase", js: "heightBase", typ: 0 },
//     ], false),
//     "Tile": o([
//         { json: "img", js: "img", typ: "" },
//         { json: "width", js: "width", typ: 3.14 },
//         { json: "height", js: "height", typ: 3.14 },
//         { json: "x", js: "x", typ: 3.14 },
//         { json: "y", js: "y", typ: 3.14 },
//         { json: "z", js: "z", typ: 0 },
//         { json: "rotation", js: "rotation", typ: 0 },
//         { json: "alpha", js: "alpha", typ: 0 },
//         { json: "hidden", js: "hidden", typ: true },
//         { json: "locked", js: "locked", typ: true },
//         { json: "overhead", js: "overhead", typ: true },
//         { json: "occlusion", js: "occlusion", typ: r("Occlusion") },
//         { json: "video", js: "video", typ: r("Video") },
//         { json: "flags", js: "flags", typ: r("TileFlags") },
//         { json: "tint", js: "tint", typ: u(undefined, "") },
//     ], false),
//     "TileFlags": o([
//         { json: "token-attacher", js: "token-attacher", typ: u(undefined, r("TentacledTokenAttacher")) },
//         { json: "monks-active-tiles", js: "monks-active-tiles", typ: u(undefined, r("MonksActiveTiles")) },
//     ], false),
//     "MonksActiveTiles": o([
//         { json: "active", js: "active", typ: true },
//         { json: "restriction", js: "restriction", typ: "" },
//         { json: "controlled", js: "controlled", typ: "" },
//         { json: "trigger", js: "trigger", typ: "" },
//         { json: "pertoken", js: "pertoken", typ: true },
//         { json: "minrequired", js: "minrequired", typ: 0 },
//         { json: "chance", js: "chance", typ: 0 },
//         { json: "actions", js: "actions", typ: a("any") },
//     ], false),
//     "Occlusion": o([
//         { json: "mode", js: "mode", typ: 0 },
//         { json: "alpha", js: "alpha", typ: 0 },
//     ], false),
//     "Video": o([
//         { json: "loop", js: "loop", typ: true },
//         { json: "autoplay", js: "autoplay", typ: true },
//         { json: "volume", js: "volume", typ: 0 },
//     ], false),
//     "Wall": o([
//         { json: "c", js: "c", typ: a(3.14) },
//         { json: "light", js: "light", typ: u(undefined, 0) },
//         { json: "move", js: "move", typ: 0 },
//         { json: "sight", js: "sight", typ: u(undefined, 0) },
//         { json: "sound", js: "sound", typ: 0 },
//         { json: "dir", js: "dir", typ: 0 },
//         { json: "door", js: "door", typ: 0 },
//         { json: "ds", js: "ds", typ: 0 },
//         { json: "flags", js: "flags", typ: r("WallFlags") },
//         { json: "sense", js: "sense", typ: u(undefined, 0) },
//     ], false),
//     "WallFlags": o([
//         { json: "token-attacher", js: "token-attacher", typ: r("StickyTokenAttacher") },
//     ], false),
//     "StickyTokenAttacher": o([
//         { json: "parent", js: "parent", typ: r("PurpleParent") },
//         { json: "offset", js: "offset", typ: r("TentacledOffset") },
//         { json: "unlocked", js: "unlocked", typ: u(undefined, true) },
//     ], false),
//     "TentacledOffset": o([
//         { json: "x", js: "x", typ: 3.14 },
//         { json: "y", js: "y", typ: 3.14 },
//         { json: "rot", js: "rot", typ: 0 },
//         { json: "centerX", js: "centerX", typ: 3.14 },
//         { json: "centerY", js: "centerY", typ: 3.14 },
//         { json: "offRot", js: "offRot", typ: 0 },
//         { json: "c", js: "c", typ: a(3.14) },
//         { json: "size", js: "size", typ: r("TentacledSize") },
//         { json: "elevation", js: "elevation", typ: r("Elevation") },
//     ], false),
//     "TentacledSize": o([
//         { json: "widthBase", js: "widthBase", typ: 3.14 },
//         { json: "heightBase", js: "heightBase", typ: 3.14 },
//     ], false),
//     "TokenIndependence": o([
//         { json: "ActorName", js: "ActorName", typ: r("ActorName") },
//     ], false),
//     "LightAnimation": o([
//         { json: "speed", js: "speed", typ: 0 },
//         { json: "intensity", js: "intensity", typ: 0 },
//     ], false),
//     "Folders": o([
//         { json: "name", js: "name", typ: "" },
//         { json: "type", js: "type", typ: r("CollectionEnum") },
//         { json: "parent", js: "parent", typ: u(null, "") },
//         { json: "sorting", js: "sorting", typ: r("Sorting") },
//         { json: "sort", js: "sort", typ: 0 },
//         { json: "color", js: "color", typ: u(undefined, u(null, "")) },
//         { json: "flags", js: "flags", typ: r("FoldersFlags") },
//         { json: "_id", js: "_id", typ: "" },
//     ], false),
//     "FoldersFlags": o([
//         { json: "textColour", js: "textColour", typ: u(undefined, "") },
//     ], false),
//     "Items": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "name", js: "name", typ: "" },
//         { json: "type", js: "type", typ: r("ItemType") },
//         { json: "img", js: "img", typ: "" },
//         { json: "data", js: "data", typ: r("ItemsData") },
//         { json: "effects", js: "effects", typ: a("any") },
//         { json: "folder", js: "folder", typ: r("Folder") },
//         { json: "sort", js: "sort", typ: 0 },
//         { json: "permission", js: "permission", typ: r("Permission") },
//         { json: "flags", js: "flags", typ: r("ItemFlags") },
//     ], false),
//     "ItemsData": o([
//         { json: "description", js: "description", typ: r("PurpleDescription") },
//         { json: "source", js: "source", typ: "" },
//         { json: "quantity", js: "quantity", typ: u(undefined, 0) },
//         { json: "weight", js: "weight", typ: u(3.14, null) },
//         { json: "equipped", js: "equipped", typ: u(undefined, true) },
//         { json: "identified", js: "identified", typ: u(undefined, true) },
//         { json: "value", js: "value", typ: r("Currency") },
//         { json: "acBonus", js: "acBonus", typ: u(undefined, 0) },
//         { json: "checkPenalty", js: "checkPenalty", typ: u(undefined, 0) },
//         { json: "speed", js: "speed", typ: u(undefined, "") },
//         { json: "fumbleDie", js: "fumbleDie", typ: u(undefined, "") },
//         { json: "config", js: "config", typ: u(undefined, r("FluffyConfig")) },
//         { json: "actionDie", js: "actionDie", typ: u(undefined, r("ActionDie")) },
//         { json: "toHit", js: "toHit", typ: u(undefined, "") },
//         { json: "damage", js: "damage", typ: u(undefined, "") },
//         { json: "range", js: "range", typ: u(undefined, r("FluffyRange")) },
//         { json: "twoHanded", js: "twoHanded", typ: u(undefined, true) },
//         { json: "melee", js: "melee", typ: u(undefined, true) },
//         { json: "shortRangeStrength", js: "shortRangeStrength", typ: u(undefined, u(true, 0)) },
//         { json: "subdual", js: "subdual", typ: u(undefined, u(true, 0)) },
//         { json: "backstab", js: "backstab", typ: u(undefined, true) },
//         { json: "backstabDamage", js: "backstabDamage", typ: u(undefined, null) },
//         { json: "doubleIfMounted", js: "doubleIfMounted", typ: u(undefined, u(true, 0)) },
//         { json: "critRange", js: "critRange", typ: u(undefined, 0) },
//         { json: "isCoins", js: "isCoins", typ: u(undefined, true) },
//     ], false),
//     "Permission": o([
//         { json: "default", js: "default", typ: u(undefined, 0) },
//         { json: "oVvfrcHQErm1ON0p", js: "oVvfrcHQErm1ON0p", typ: 0 },
//     ], false),
//     "Journal": o([
//         { json: "name", js: "name", typ: "" },
//         { json: "content", js: "content", typ: "" },
//         { json: "folder", js: "folder", typ: "" },
//         { json: "sort", js: "sort", typ: 0 },
//         { json: "permission", js: "permission", typ: r("Permission") },
//         { json: "flags", js: "flags", typ: r("JournalFlags") },
//         { json: "_id", js: "_id", typ: "" },
//         { json: "img", js: "img", typ: u(undefined, u(null, "")) },
//     ], false),
//     "JournalFlags": o([
//         { json: "gm-notes", js: "gm-notes", typ: u(undefined, r("GmNotes")) },
//         { json: "monks-enhanced-journal", js: "monks-enhanced-journal", typ: u(undefined, r("PurpleMonksEnhancedJournal")) },
//     ], false),
//     "PurpleMonksEnhancedJournal": o([
//         { json: "type", js: "type", typ: u(undefined, "") },
//         { json: "scrollPos", js: "scrollPos", typ: "" },
//         { json: "_lasttab", js: "_lasttab", typ: u(undefined, "") },
//     ], false),
//     "Macros": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "name", js: "name", typ: "" },
//         { json: "type", js: "type", typ: r("MacrosType") },
//         { json: "author", js: "author", typ: r("Author") },
//         { json: "img", js: "img", typ: "" },
//         { json: "scope", js: "scope", typ: r("Scope") },
//         { json: "command", js: "command", typ: "" },
//         { json: "folder", js: "folder", typ: u(null, "") },
//         { json: "sort", js: "sort", typ: 0 },
//         { json: "permission", js: "permission", typ: r("Permission") },
//         { json: "flags", js: "flags", typ: r("MacrosFlags") },
//     ], false),
//     "MacrosFlags": o([
//         { json: "core", js: "core", typ: u(undefined, r("FluffyCore")) },
//         { json: "combat-utility-belt", js: "combat-utility-belt", typ: u(undefined, r("CombatUtilityBelt")) },
//     ], false),
//     "CombatUtilityBelt": o([
//         { json: "macroTrigger", js: "macroTrigger", typ: "" },
//     ], false),
//     "Messages": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "type", js: "type", typ: 0 },
//         { json: "user", js: "user", typ: r("Author") },
//         { json: "timestamp", js: "timestamp", typ: 0 },
//         { json: "content", js: "content", typ: "" },
//         { json: "speaker", js: "speaker", typ: r("Speaker") },
//         { json: "whisper", js: "whisper", typ: a("any") },
//         { json: "blind", js: "blind", typ: true },
//         { json: "sound", js: "sound", typ: "" },
//         { json: "emote", js: "emote", typ: true },
//         { json: "flags", js: "flags", typ: r("MessagesFlags") },
//         { json: "flavor", js: "flavor", typ: u(undefined, "") },
//         { json: "roll", js: "roll", typ: u(undefined, "") },
//     ], false),
//     "MessagesFlags": o([
//         { json: "core", js: "core", typ: r("TentacledCore") },
//     ], false),
//     "TentacledCore": o([
//         { json: "canPopout", js: "canPopout", typ: true },
//         { json: "RollTable", js: "RollTable", typ: u(undefined, "") },
//     ], false),
//     "Speaker": o([
//         { json: "scene", js: "scene", typ: null },
//         { json: "actor", js: "actor", typ: u(null, "") },
//         { json: "token", js: "token", typ: null },
//         { json: "alias", js: "alias", typ: "" },
//     ], false),
//     "Playlists": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "name", js: "name", typ: "" },
//         { json: "description", js: "description", typ: "" },
//         { json: "sounds", js: "sounds", typ: a(r("PlaylistsSound")) },
//         { json: "mode", js: "mode", typ: 0 },
//         { json: "playing", js: "playing", typ: true },
//         { json: "folder", js: "folder", typ: null },
//         { json: "sorting", js: "sorting", typ: "" },
//         { json: "sort", js: "sort", typ: 0 },
//         { json: "permission", js: "permission", typ: r("Permission") },
//         { json: "flags", js: "flags", typ: r("PermissionsClass") },
//         { json: "seed", js: "seed", typ: u(undefined, 0) },
//     ], false),
//     "PlaylistsSound": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "name", js: "name", typ: "" },
//         { json: "description", js: "description", typ: "" },
//         { json: "path", js: "path", typ: "" },
//         { json: "playing", js: "playing", typ: true },
//         { json: "pausedTime", js: "pausedTime", typ: u(3.14, null) },
//         { json: "repeat", js: "repeat", typ: true },
//         { json: "volume", js: "volume", typ: 3.14 },
//         { json: "sort", js: "sort", typ: 0 },
//         { json: "flags", js: "flags", typ: r("PermissionsClass") },
//         { json: "lvolume", js: "lvolume", typ: u(undefined, 3.14) },
//     ], false),
//     "Scenes": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "name", js: "name", typ: "" },
//         { json: "active", js: "active", typ: true },
//         { json: "navigation", js: "navigation", typ: true },
//         { json: "navOrder", js: "navOrder", typ: 0 },
//         { json: "navName", js: "navName", typ: "" },
//         { json: "img", js: "img", typ: u(null, "") },
//         { json: "foreground", js: "foreground", typ: null },
//         { json: "thumb", js: "thumb", typ: u(undefined, "") },
//         { json: "width", js: "width", typ: 0 },
//         { json: "height", js: "height", typ: 0 },
//         { json: "padding", js: "padding", typ: 3.14 },
//         { json: "initial", js: "initial", typ: u(r("Initial"), null) },
//         { json: "backgroundColor", js: "backgroundColor", typ: "" },
//         { json: "gridType", js: "gridType", typ: 0 },
//         { json: "grid", js: "grid", typ: 0 },
//         { json: "shiftX", js: "shiftX", typ: 0 },
//         { json: "shiftY", js: "shiftY", typ: 0 },
//         { json: "gridColor", js: "gridColor", typ: "" },
//         { json: "gridAlpha", js: "gridAlpha", typ: 0 },
//         { json: "gridDistance", js: "gridDistance", typ: 0 },
//         { json: "gridUnits", js: "gridUnits", typ: "" },
//         { json: "tokenVision", js: "tokenVision", typ: true },
//         { json: "fogExploration", js: "fogExploration", typ: true },
//         { json: "fogReset", js: "fogReset", typ: 0 },
//         { json: "globalLight", js: "globalLight", typ: true },
//         { json: "globalLightThreshold", js: "globalLightThreshold", typ: null },
//         { json: "darkness", js: "darkness", typ: 0 },
//         { json: "drawings", js: "drawings", typ: a(r("DrawingElement")) },
//         { json: "tokens", js: "tokens", typ: a(r("TokenElement")) },
//         { json: "lights", js: "lights", typ: a(r("LightElement")) },
//         { json: "notes", js: "notes", typ: a(r("Note")) },
//         { json: "sounds", js: "sounds", typ: a(r("ScenesSound")) },
//         { json: "templates", js: "templates", typ: a("any") },
//         { json: "tiles", js: "tiles", typ: a(r("TileElement")) },
//         { json: "walls", js: "walls", typ: a(r("WallElement")) },
//         { json: "playlist", js: "playlist", typ: null },
//         { json: "playlistSound", js: "playlistSound", typ: null },
//         { json: "journal", js: "journal", typ: u(null, "") },
//         { json: "weather", js: "weather", typ: "" },
//         { json: "folder", js: "folder", typ: "" },
//         { json: "sort", js: "sort", typ: 0 },
//         { json: "permission", js: "permission", typ: r("Permission") },
//         { json: "flags", js: "flags", typ: r("ScenesFlags") },
//     ], false),
//     "DrawingElement": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "author", js: "author", typ: r("Author") },
//         { json: "type", js: "type", typ: "" },
//         { json: "x", js: "x", typ: 3.14 },
//         { json: "y", js: "y", typ: 3.14 },
//         { json: "width", js: "width", typ: 0 },
//         { json: "height", js: "height", typ: 0 },
//         { json: "rotation", js: "rotation", typ: 0 },
//         { json: "z", js: "z", typ: 0 },
//         { json: "points", js: "points", typ: a("any") },
//         { json: "bezierFactor", js: "bezierFactor", typ: 0 },
//         { json: "fillType", js: "fillType", typ: 0 },
//         { json: "fillColor", js: "fillColor", typ: null },
//         { json: "fillAlpha", js: "fillAlpha", typ: 0 },
//         { json: "strokeWidth", js: "strokeWidth", typ: 0 },
//         { json: "strokeColor", js: "strokeColor", typ: null },
//         { json: "strokeAlpha", js: "strokeAlpha", typ: 0 },
//         { json: "text", js: "text", typ: "" },
//         { json: "fontFamily", js: "fontFamily", typ: r("DrawingFontFamily") },
//         { json: "fontSize", js: "fontSize", typ: 0 },
//         { json: "textColor", js: "textColor", typ: r("TextColor") },
//         { json: "textAlpha", js: "textAlpha", typ: 0 },
//         { json: "hidden", js: "hidden", typ: true },
//         { json: "locked", js: "locked", typ: true },
//         { json: "flags", js: "flags", typ: r("DrawingFlagsClass") },
//         { json: "texture", js: "texture", typ: null },
//     ], false),
//     "DrawingFlagsClass": o([
//         { json: "better-text-drawings", js: "better-text-drawings", typ: r("BetterTextDrawings") },
//     ], false),
//     "ScenesFlags": o([
//         { json: "token-attacher", js: "token-attacher", typ: r("PermissionsClass") },
//         { json: "core", js: "core", typ: u(undefined, r("FluffyCore")) },
//         { json: "htmltoscene", js: "htmltoscene", typ: u(undefined, r("Htmltoscene")) },
//         { json: "pinfix", js: "pinfix", typ: r("PurplePinfix") },
//         { json: "smalltime", js: "smalltime", typ: u(undefined, r("Smalltime")) },
//         { json: "falemos", js: "falemos", typ: u(undefined, r("Falemos")) },
//         { json: "fxmaster", js: "fxmaster", typ: u(undefined, r("Fxmaster")) },
//         { json: "weatherblock", js: "weatherblock", typ: u(undefined, r("Weatherblock")) },
//         { json: "blood-n-guts", js: "blood-n-guts", typ: u(undefined, r("BloodNGuts")) },
//         { json: "calendar-weather", js: "calendar-weather", typ: u(undefined, r("CalendarWeather")) },
//     ], false),
//     "BloodNGuts": o([
//         { json: "visible", js: "visible", typ: true },
//         { json: "history", js: "history", typ: r("History") },
//     ], false),
//     "History": o([
//         { json: "events", js: "events", typ: a(r("Event")) },
//         { json: "pointer", js: "pointer", typ: 0 },
//     ], false),
//     "Event": o([
//         { json: "name", js: "name", typ: r("Name") },
//         { json: "alpha", js: "alpha", typ: 3.14 },
//         { json: "styleData", js: "styleData", typ: r("StyleData") },
//         { json: "drips", js: "drips", typ: a(r("Drip")) },
//         { json: "offset", js: "offset", typ: r("Center") },
//         { json: "height", js: "height", typ: 0 },
//         { json: "width", js: "width", typ: 3.14 },
//         { json: "id", js: "id", typ: "" },
//         { json: "tokenId", js: "tokenId", typ: u(undefined, "") },
//         { json: "x", js: "x", typ: u(undefined, 3.14) },
//         { json: "y", js: "y", typ: u(undefined, 3.14) },
//         { json: "zIndex", js: "zIndex", typ: u(undefined, 0) },
//         { json: "z", js: "z", typ: u(undefined, 0) },
//         { json: "_id", js: "_id", typ: u(undefined, "") },
//         { json: "scale", js: "scale", typ: u(undefined, 0) },
//         { json: "rotation", js: "rotation", typ: u(undefined, 0) },
//         { json: "hidden", js: "hidden", typ: u(undefined, true) },
//         { json: "locked", js: "locked", typ: u(undefined, true) },
//         { json: "author", js: "author", typ: u(undefined, "") },
//     ], false),
//     "Drip": o([
//         { json: "x", js: "x", typ: 3.14 },
//         { json: "y", js: "y", typ: 3.14 },
//         { json: "angle", js: "angle", typ: 0 },
//         { json: "width", js: "width", typ: 3.14 },
//         { json: "height", js: "height", typ: 0 },
//         { json: "glyph", js: "glyph", typ: "" },
//     ], false),
//     "StyleData": o([
//         { json: "fontFamily", js: "fontFamily", typ: r("StyleDataFontFamily") },
//         { json: "fontSize", js: "fontSize", typ: 0 },
//         { json: "fill", js: "fill", typ: r("Fill") },
//         { json: "align", js: "align", typ: r("Align") },
//     ], false),
//     "CalendarWeather": o([
//         { json: "showFX", js: "showFX", typ: true },
//         { json: "doNightCycle", js: "doNightCycle", typ: true },
//     ], false),
//     "Falemos": o([
//         { json: "config", js: "config", typ: r("FalemosConfig") },
//     ], false),
//     "FalemosConfig": o([
//         { json: "hide", js: "hide", typ: r("Hide") },
//         { json: "enable", js: "enable", typ: u(undefined, true) },
//         { json: "ALH5lul2TfXBAtai", js: "ALH5lul2TfXBAtai", typ: u(undefined, r("Alh5Lul2TfXbAtai")) },
//         { json: "uirzB3HdEWNhsGpF", js: "uirzB3HdEWNhsGpF", typ: u(undefined, r("Alh5Lul2TfXbAtai")) },
//         { json: "vl6WCsThhjIY4Hj3", js: "vl6WCsThhjIY4Hj3", typ: u(undefined, r("Alh5Lul2TfXbAtai")) },
//         { json: "bQonQoqY8mo5ZcsQ", js: "bQonQoqY8mo5ZcsQ", typ: u(undefined, r("Alh5Lul2TfXbAtai")) },
//         { json: "MovL8pmQ9lKDVWBx", js: "MovL8pmQ9lKDVWBx", typ: u(undefined, r("Alh5Lul2TfXbAtai")) },
//     ], false),
//     "Alh5Lul2TfXbAtai": o([
//         { json: "x", js: "x", typ: u(0, null) },
//         { json: "y", js: "y", typ: u(0, null) },
//         { json: "width", js: "width", typ: null },
//         { json: "overlayImg", js: "overlayImg", typ: "" },
//         { json: "overlayLeft", js: "overlayLeft", typ: null },
//         { json: "overlayRight", js: "overlayRight", typ: null },
//         { json: "overlayTop", js: "overlayTop", typ: null },
//         { json: "overlayBottom", js: "overlayBottom", typ: null },
//         { json: "geometry", js: "geometry", typ: "" },
//         { json: "filter", js: "filter", typ: "" },
//         { json: "cameraName", js: "cameraName", typ: null },
//         { json: "cameraNameOffsetX", js: "cameraNameOffsetX", typ: null },
//         { json: "cameraNameOffsetY", js: "cameraNameOffsetY", typ: null },
//         { json: "cameraNameFontSize", js: "cameraNameFontSize", typ: null },
//         { json: "cameraNameColor", js: "cameraNameColor", typ: "" },
//         { json: "cameraNameFont", js: "cameraNameFont", typ: "" },
//         { json: "fit", js: "fit", typ: "" },
//     ], false),
//     "Hide": o([
//         { json: "mode", js: "mode", typ: "" },
//         { json: "navigation", js: "navigation", typ: u(undefined, true) },
//         { json: "controls", js: "controls", typ: u(undefined, true) },
//         { json: "players", js: "players", typ: u(undefined, true) },
//         { json: "sidebar", js: "sidebar", typ: u(undefined, true) },
//         { json: "hotbar", js: "hotbar", typ: u(undefined, true) },
//     ], false),
//     "Fxmaster": o([
//         { json: "filters", js: "filters", typ: r("PermissionsClass") },
//         { json: "effects", js: "effects", typ: u(undefined, r("PermissionsClass")) },
//         { json: "invert", js: "invert", typ: u(undefined, true) },
//         { json: "filteredLayers", js: "filteredLayers", typ: u(undefined, r("FilteredLayers")) },
//     ], false),
//     "FilteredLayers": o([
//         { json: "background", js: "background", typ: true },
//         { json: "foreground", js: "foreground", typ: true },
//         { json: "drawings", js: "drawings", typ: true },
//         { json: "tokens", js: "tokens", typ: true },
//     ], false),
//     "Htmltoscene": o([
//         { json: "enable", js: "enable", typ: true },
//         { json: "fileLoc", js: "fileLoc", typ: "" },
//         { json: "minUI", js: "minUI", typ: true },
//         { json: "keepTop", js: "keepTop", typ: true },
//         { json: "spaceRight", js: "spaceRight", typ: true },
//         { json: "rightDisabled", js: "rightDisabled", typ: true },
//         { json: "hidePaused", js: "hidePaused", typ: true },
//         { json: "hideSmallTime", js: "hideSmallTime", typ: true },
//     ], false),
//     "PurplePinfix": o([
//         { json: "enable", js: "enable", typ: true },
//         { json: "pinLocker", js: "pinLocker", typ: true },
//         { json: "aboveFog", js: "aboveFog", typ: true },
//         { json: "zoomFloor", js: "zoomFloor", typ: 3.14 },
//         { json: "zoomCeil", js: "zoomCeil", typ: 0 },
//         { json: "minScale", js: "minScale", typ: 0 },
//         { json: "maxScale", js: "maxScale", typ: 0 },
//         { json: "hudScale", js: "hudScale", typ: 0 },
//     ], false),
//     "Smalltime": o([
//         { json: "darkness-link", js: "darkness-link", typ: true },
//         { json: "player-vis", js: "player-vis", typ: "" },
//     ], false),
//     "Weatherblock": o([
//         { json: "invertMask", js: "invertMask", typ: true },
//     ], false),
//     "Initial": o([
//         { json: "x", js: "x", typ: 0 },
//         { json: "y", js: "y", typ: 0 },
//         { json: "scale", js: "scale", typ: 3.14 },
//     ], false),
//     "LightElement": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "x", js: "x", typ: 3.14 },
//         { json: "y", js: "y", typ: 3.14 },
//         { json: "rotation", js: "rotation", typ: 0 },
//         { json: "dim", js: "dim", typ: u(undefined, 0) },
//         { json: "bright", js: "bright", typ: u(undefined, 0) },
//         { json: "angle", js: "angle", typ: u(undefined, 0) },
//         { json: "tintAlpha", js: "tintAlpha", typ: u(undefined, 3.14) },
//         { json: "lightAnimation", js: "lightAnimation", typ: u(undefined, r("Animation")) },
//         { json: "darknessThreshold", js: "darknessThreshold", typ: u(undefined, 0) },
//         { json: "darkness", js: "darkness", typ: u(undefined, r("Darkness")) },
//         { json: "hidden", js: "hidden", typ: true },
//         { json: "flags", js: "flags", typ: r("LightFlags") },
//         { json: "tintColor", js: "tintColor", typ: u(undefined, "") },
//         { json: "config", js: "config", typ: r("ConfigClass") },
//         { json: "walls", js: "walls", typ: true },
//         { json: "vision", js: "vision", typ: true },
//         { json: "id", js: "id", typ: u(undefined, "") },
//     ], false),
//     "LightFlags": o([
//         { json: "df-active-lights", js: "df-active-lights", typ: u(undefined, r("DfActiveLights")) },
//         { json: "lightmask", js: "lightmask", typ: u(undefined, r("Lightmask")) },
//         { json: "token-attacher", js: "token-attacher", typ: u(undefined, r("FluffyTokenAttacher")) },
//     ], false),
//     "DfActiveLights": o([
//         { json: "anims", js: "anims", typ: null },
//     ], false),
//     "Note": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "entryId", js: "entryId", typ: u(null, "") },
//         { json: "x", js: "x", typ: 3.14 },
//         { json: "y", js: "y", typ: 3.14 },
//         { json: "icon", js: "icon", typ: "" },
//         { json: "iconSize", js: "iconSize", typ: 0 },
//         { json: "iconTint", js: "iconTint", typ: null },
//         { json: "fontFamily", js: "fontFamily", typ: r("DrawingFontFamily") },
//         { json: "fontSize", js: "fontSize", typ: 0 },
//         { json: "textAnchor", js: "textAnchor", typ: 0 },
//         { json: "textColor", js: "textColor", typ: u(r("TextColor"), null) },
//         { json: "flags", js: "flags", typ: r("NoteFlags") },
//     ], false),
//     "NoteFlags": o([
//         { json: "backgroundless-pins", js: "backgroundless-pins", typ: u(undefined, r("BackgroundlessPins")) },
//         { json: "pinfix", js: "pinfix", typ: u(undefined, r("FluffyPinfix")) },
//     ], false),
//     "BackgroundlessPins": o([
//         { json: "hasBackground", js: "hasBackground", typ: true },
//     ], false),
//     "FluffyPinfix": o([
//         { json: "showName", js: "showName", typ: true },
//         { json: "minZoomLevel", js: "minZoomLevel", typ: 3.14 },
//         { json: "maxZoomLevel", js: "maxZoomLevel", typ: 0 },
//     ], false),
//     "ScenesSound": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "x", js: "x", typ: 3.14 },
//         { json: "y", js: "y", typ: 3.14 },
//         { json: "radius", js: "radius", typ: 3.14 },
//         { json: "path", js: "path", typ: "" },
//         { json: "repeat", js: "repeat", typ: true },
//         { json: "volume", js: "volume", typ: 3.14 },
//         { json: "walls", js: "walls", typ: true },
//         { json: "easing", js: "easing", typ: true },
//         { json: "hidden", js: "hidden", typ: true },
//         { json: "darkness", js: "darkness", typ: r("Darkness") },
//         { json: "flags", js: "flags", typ: r("FluffyFlags") },
//     ], false),
//     "FluffyFlags": o([
//         { json: "lightmask", js: "lightmask", typ: r("Lightmask") },
//     ], false),
//     "TileElement": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "img", js: "img", typ: "" },
//         { json: "width", js: "width", typ: 3.14 },
//         { json: "height", js: "height", typ: 3.14 },
//         { json: "x", js: "x", typ: 3.14 },
//         { json: "y", js: "y", typ: 3.14 },
//         { json: "z", js: "z", typ: 0 },
//         { json: "rotation", js: "rotation", typ: 0 },
//         { json: "alpha", js: "alpha", typ: 0 },
//         { json: "tint", js: "tint", typ: u(undefined, null) },
//         { json: "hidden", js: "hidden", typ: true },
//         { json: "locked", js: "locked", typ: true },
//         { json: "overhead", js: "overhead", typ: true },
//         { json: "occlusion", js: "occlusion", typ: r("Occlusion") },
//         { json: "video", js: "video", typ: r("Video") },
//         { json: "flags", js: "flags", typ: r("TileFlags") },
//     ], false),
//     "TokenElement": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "name", js: "name", typ: "" },
//         { json: "displayName", js: "displayName", typ: 0 },
//         { json: "actorId", js: "actorId", typ: "" },
//         { json: "actorLink", js: "actorLink", typ: true },
//         { json: "actorData", js: "actorData", typ: r("FluffyActorData") },
//         { json: "img", js: "img", typ: "" },
//         { json: "tint", js: "tint", typ: u(undefined, u(null, "")) },
//         { json: "width", js: "width", typ: 3.14 },
//         { json: "height", js: "height", typ: 3.14 },
//         { json: "scale", js: "scale", typ: 3.14 },
//         { json: "mirrorX", js: "mirrorX", typ: true },
//         { json: "mirrorY", js: "mirrorY", typ: true },
//         { json: "x", js: "x", typ: 3.14 },
//         { json: "y", js: "y", typ: 3.14 },
//         { json: "elevation", js: "elevation", typ: 0 },
//         { json: "lockRotation", js: "lockRotation", typ: true },
//         { json: "rotation", js: "rotation", typ: 0 },
//         { json: "effects", js: "effects", typ: a("any") },
//         { json: "alpha", js: "alpha", typ: 3.14 },
//         { json: "hidden", js: "hidden", typ: true },
//         { json: "vision", js: "vision", typ: true },
//         { json: "dimSight", js: "dimSight", typ: 0 },
//         { json: "brightSight", js: "brightSight", typ: 0 },
//         { json: "sightAngle", js: "sightAngle", typ: 0 },
//         { json: "light", js: "light", typ: r("ConfigClass") },
//         { json: "disposition", js: "disposition", typ: 0 },
//         { json: "displayBars", js: "displayBars", typ: 0 },
//         { json: "bar1", js: "bar1", typ: r("Bar") },
//         { json: "bar2", js: "bar2", typ: r("Bar") },
//         { json: "flags", js: "flags", typ: r("TentacledFlags") },
//         { json: "alternateImages", js: "alternateImages", typ: u(undefined, "") },
//     ], false),
//     "FluffyActorData": o([
//         { json: "data", js: "data", typ: u(undefined, r("TentacledData")) },
//         { json: "name", js: "name", typ: u(undefined, "") },
//         { json: "itemUpdates", js: "itemUpdates", typ: u(undefined, r("FluffyItemUpdates")) },
//         { json: "items", js: "items", typ: u(undefined, a(r("ActorDataItem"))) },
//     ], false),
//     "TentacledData": o([
//         { json: "attributes", js: "attributes", typ: u(undefined, r("TentacledAttributes")) },
//         { json: "details", js: "details", typ: u(undefined, r("FluffyDetails")) },
//     ], false),
//     "TentacledAttributes": o([
//         { json: "hp", js: "hp", typ: r("FluffyHP") },
//         { json: "init", js: "init", typ: u(undefined, r("Level")) },
//     ], false),
//     "FluffyItemUpdates": o([
//         { json: "puz9h9sp2808upmw", js: "puz9h9sp2808upmw", typ: u(undefined, r("GpnCqtrI765GhGos")) },
//         { json: "gpnCqtrI765ghGos", js: "gpnCqtrI765ghGos", typ: u(undefined, r("GpnCqtrI765GhGos")) },
//         { json: "e1d4o06ng5glpxeb", js: "e1d4o06ng5glpxeb", typ: u(undefined, r("E1D4O06Ng5Glpxeb")) },
//         { json: "a20ii4av55ae5a3c", js: "a20ii4av55ae5a3c", typ: u(undefined, r("GpnCqtrI765GhGos")) },
//         { json: "lsn51lrncweutumk", js: "lsn51lrncweutumk", typ: u(undefined, r("E1D4O06Ng5Glpxeb")) },
//         { json: "xZaVgFzzudbWuK4R", js: "xZaVgFzzudbWuK4R", typ: u(undefined, r("GpnCqtrI765GhGos")) },
//         { json: "lvjntk1zzjpgs53u", js: "lvjntk1zzjpgs53u", typ: u(undefined, r("GpnCqtrI765GhGos")) },
//     ], false),
//     "E1D4O06Ng5Glpxeb": o([
//         { json: "name", js: "name", typ: "" },
//         { json: "data", js: "data", typ: r("E1D4O06Ng5GlpxebData") },
//     ], false),
//     "E1D4O06Ng5GlpxebData": o([
//         { json: "toHit", js: "toHit", typ: "" },
//         { json: "damage", js: "damage", typ: "" },
//         { json: "range", js: "range", typ: "" },
//     ], false),
//     "ActorDataItem": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "name", js: "name", typ: "" },
//         { json: "type", js: "type", typ: r("ItemType") },
//         { json: "img", js: "img", typ: "" },
//         { json: "data", js: "data", typ: r("StickyData") },
//         { json: "effects", js: "effects", typ: a("any") },
//         { json: "folder", js: "folder", typ: null },
//         { json: "sort", js: "sort", typ: 0 },
//         { json: "permission", js: "permission", typ: m(0) },
//         { json: "flags", js: "flags", typ: r("ItemFlags") },
//     ], false),
//     "StickyData": o([
//         { json: "description", js: "description", typ: r("PurpleDescription") },
//         { json: "source", js: "source", typ: "" },
//         { json: "value", js: "value", typ: r("ValueClass") },
//         { json: "isCoins", js: "isCoins", typ: u(undefined, true) },
//         { json: "weight", js: "weight", typ: u(0, null) },
//         { json: "quantity", js: "quantity", typ: u(undefined, 0) },
//         { json: "equipped", js: "equipped", typ: u(undefined, true) },
//         { json: "identified", js: "identified", typ: u(undefined, true) },
//         { json: "config", js: "config", typ: u(undefined, r("FluffyConfig")) },
//         { json: "actionDie", js: "actionDie", typ: u(undefined, "") },
//         { json: "toHit", js: "toHit", typ: u(undefined, "") },
//         { json: "damage", js: "damage", typ: u(undefined, r("FumbleDie")) },
//         { json: "range", js: "range", typ: u(undefined, "") },
//         { json: "twoHanded", js: "twoHanded", typ: u(undefined, true) },
//         { json: "melee", js: "melee", typ: u(undefined, true) },
//         { json: "shortRangeStrength", js: "shortRangeStrength", typ: u(undefined, true) },
//         { json: "subdual", js: "subdual", typ: u(undefined, true) },
//         { json: "backstab", js: "backstab", typ: u(undefined, true) },
//         { json: "backstabDamage", js: "backstabDamage", typ: u(undefined, null) },
//         { json: "doubleIfMounted", js: "doubleIfMounted", typ: u(undefined, true) },
//         { json: "critRange", js: "critRange", typ: u(undefined, 0) },
//     ], false),
//     "TentacledFlags": o([
//         { json: "token-independence", js: "token-independence", typ: u(undefined, r("TokenIndependence")) },
//         { json: "token-attacher", js: "token-attacher", typ: r("IndigoTokenAttacher") },
//         { json: "df-qol", js: "df-qol", typ: u(undefined, r("DfQol")) },
//         { json: "monks-little-details", js: "monks-little-details", typ: u(undefined, r("MonksLittleDetails")) },
//     ], false),
//     "DfQol": o([
//         { json: "locked", js: "locked", typ: true },
//     ], false),
//     "IndigoTokenAttacher": o([
//         { json: "pos", js: "pos", typ: r("Pos") },
//         { json: "attached", js: "attached", typ: u(undefined, r("Attached")) },
//     ], false),
//     "Attached": o([
//         { json: "Tile", js: "Tile", typ: u(undefined, a("")) },
//         { json: "Wall", js: "Wall", typ: u(undefined, a("")) },
//         { json: "AmbientLight", js: "AmbientLight", typ: u(undefined, a("")) },
//     ], false),
//     "WallElement": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "c", js: "c", typ: a(3.14) },
//         { json: "move", js: "move", typ: 0 },
//         { json: "sound", js: "sound", typ: 0 },
//         { json: "dir", js: "dir", typ: 0 },
//         { json: "door", js: "door", typ: 0 },
//         { json: "ds", js: "ds", typ: 0 },
//         { json: "flags", js: "flags", typ: r("WallFlagsClass") },
//         { json: "light", js: "light", typ: 0 },
//         { json: "sight", js: "sight", typ: 0 },
//     ], false),
//     "WallFlagsClass": o([
//         { json: "token-attacher", js: "token-attacher", typ: u(undefined, r("IndecentTokenAttacher")) },
//         { json: "smartdoors", js: "smartdoors", typ: u(undefined, r("Smartdoors")) },
//     ], false),
//     "Smartdoors": o([
//         { json: "synchronizationGroup", js: "synchronizationGroup", typ: u(undefined, "") },
//     ], false),
//     "IndecentTokenAttacher": o([
//         { json: "parent", js: "parent", typ: r("FluffyParent") },
//         { json: "offset", js: "offset", typ: r("TentacledOffset") },
//     ], false),
//     "Settings": o([
//         { json: "key", js: "key", typ: "" },
//         { json: "value", js: "value", typ: "" },
//         { json: "_id", js: "_id", typ: "" },
//     ], false),
//     "Tables": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "name", js: "name", typ: "" },
//         { json: "img", js: "img", typ: "" },
//         { json: "description", js: "description", typ: "" },
//         { json: "results", js: "results", typ: a(r("Result")) },
//         { json: "formula", js: "formula", typ: "" },
//         { json: "replacement", js: "replacement", typ: true },
//         { json: "displayRoll", js: "displayRoll", typ: true },
//         { json: "folder", js: "folder", typ: "" },
//         { json: "sort", js: "sort", typ: 0 },
//         { json: "permission", js: "permission", typ: r("Permission") },
//         { json: "flags", js: "flags", typ: r("TablesFlags") },
//     ], false),
//     "TablesFlags": o([
//         { json: "cf", js: "cf", typ: u(undefined, null) },
//         { json: "core", js: "core", typ: u(undefined, r("FluffyCore")) },
//         { json: "better-rolltables", js: "better-rolltables", typ: u(undefined, r("PurpleBetterRolltables")) },
//         { json: "journal-links", js: "journal-links", typ: u(undefined, r("FluffyJournalLinks")) },
//     ], false),
//     "PurpleBetterRolltables": o([
//         { json: "table-type", js: "table-type", typ: "" },
//         { json: "table-currency-string", js: "table-currency-string", typ: "" },
//         { json: "loot-amount-key", js: "loot-amount-key", typ: "" },
//         { json: "loot-actor-name", js: "loot-actor-name", typ: "" },
//     ], false),
//     "FluffyJournalLinks": o([
//         { json: "referencedBy", js: "referencedBy", typ: r("ReferencedBy") },
//     ], false),
//     "ReferencedBy": o([
//         { json: "JournalEntry", js: "JournalEntry", typ: a("") },
//     ], false),
//     "Result": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "flags", js: "flags", typ: r("ResultFlags") },
//         { json: "type", js: "type", typ: 0 },
//         { json: "text", js: "text", typ: "" },
//         { json: "img", js: "img", typ: r("Img") },
//         { json: "weight", js: "weight", typ: 0 },
//         { json: "range", js: "range", typ: a(0) },
//         { json: "drawn", js: "drawn", typ: true },
//         { json: "collection", js: "collection", typ: u(undefined, u(r("CollectionEnum"), null)) },
//         { json: "resultId", js: "resultId", typ: u(undefined, u(null, "")) },
//         { json: "rangeL", js: "rangeL", typ: u(undefined, 0) },
//         { json: "rangeH", js: "rangeH", typ: u(undefined, 0) },
//     ], false),
//     "ResultFlags": o([
//         { json: "better-rolltables", js: "better-rolltables", typ: u(undefined, r("FluffyBetterRolltables")) },
//     ], false),
//     "FluffyBetterRolltables": o([
//         { json: "brt-result-formula", js: "brt-result-formula", typ: r("BrtResultFormula") },
//     ], false),
//     "BrtResultFormula": o([
//         { json: "formula", js: "formula", typ: "" },
//     ], false),
//     "Users": o([
//         { json: "_id", js: "_id", typ: "" },
//         { json: "character", js: "character", typ: null },
//         { json: "color", js: "color", typ: "" },
//         { json: "hotbar", js: "hotbar", typ: m("") },
//         { json: "name", js: "name", typ: "" },
//         { json: "password", js: "password", typ: "" },
//         { json: "passwordSalt", js: "passwordSalt", typ: "" },
//         { json: "permissions", js: "permissions", typ: r("PermissionsClass") },
//         { json: "role", js: "role", typ: 0 },
//         { json: "flags", js: "flags", typ: r("StickyFlags") },
//     ], false),
//     "StickyFlags": o([
//         { json: "dcc", js: "dcc", typ: u(undefined, r("DCC")) },
//         { json: "dcc-core-book", js: "dcc-core-book", typ: u(undefined, r("DCCCoreBook")) },
//         { json: "token-attacher", js: "token-attacher", typ: u(undefined, r("HilariousTokenAttacher")) },
//         { json: "monks-enhanced-journal", js: "monks-enhanced-journal", typ: u(undefined, r("FluffyMonksEnhancedJournal")) },
//     ], false),
//     "DCC": o([
//         { json: "lastSeenSystemVersion", js: "lastSeenSystemVersion", typ: "" },
//     ], false),
//     "DCCCoreBook": o([
//         { json: "lastSeenVersion", js: "lastSeenVersion", typ: "" },
//     ], false),
//     "FluffyMonksEnhancedJournal": o([
//         { json: "tabs", js: "tabs", typ: a(r("Tab")) },
//         { json: "_recentlyViewed", js: "_recentlyViewed", typ: a(r("RecentlyViewed")) },
//     ], false),
//     "RecentlyViewed": o([
//         { json: "id", js: "id", typ: "" },
//         { json: "uuid", js: "uuid", typ: "" },
//         { json: "name", js: "name", typ: "" },
//         { json: "type", js: "type", typ: u(undefined, "") },
//     ], false),
//     "Tab": o([
//         { json: "id", js: "id", typ: "" },
//         { json: "text", js: "text", typ: "" },
//         { json: "active", js: "active", typ: true },
//         { json: "history", js: "history", typ: a("") },
//         { json: "entityId", js: "entityId", typ: "" },
//     ], false),
//     "HilariousTokenAttacher": o([
//         { json: "copyPrototypeMap", js: "copyPrototypeMap", typ: r("CopyPrototypeMap") },
//     ], false),
//     "CopyPrototypeMap": o([
//         { json: "map", js: "map", typ: r("Map") },
//         { json: "grid", js: "grid", typ: r("Grid") },
//     ], false),
//     "Map": o([
//         { json: "Token", js: "Token", typ: r("Token") },
//     ], false),
//     "Token": o([
//         { json: "lRxLWWvV8wdC31Eo", js: "lRxLWWvV8wdC31Eo", typ: r("LRxLWWvV8WdC31Eo") },
//     ], false),
//     "LRxLWWvV8WdC31Eo": o([
//         { json: "AmbientLight", js: "AmbientLight", typ: a(r("AmbientLight")) },
//     ], false),
//     "AglLabel": [
//         "DCC.AbilityAgl",
//         "DCC.AbilityInt",
//         "DCC.AbilityLck",
//         "DCC.AbilityPer",
//         "DCC.AbilitySta",
//         "DCC.AbilityStr",
//     ],
//     "FumbleDie": [
//         "1d4",
//         "1d6",
//         "1d6+2",
//     ],
//     "ValueElement": [
//         "1d16",
//         "1d20",
//     ],
//     "Table": [
//         "I",
//         "M",
//     ],
//     "Other": [
//         "Climb 5'",
//         "Creep 1'/hr",
//         "",
//         "Fly 30'",
//     ],
//     "Ability": [
//         "agl",
//         "int",
//         "per",
//         "str",
//     ],
//     "ActionDiceEnum": [
//         "1d20",
//         "2d16",
//         "2d20",
//         "6d20",
//     ],
//     "AttackBonusMode": [
//         "flat",
//     ],
//     "Alignment": [
//         "c",
//         "l",
//         "n",
//     ],
//     "Languages": [
//         "Common",
//         "Common, Kobold, Alignment",
//         "",
//     ],
//     "FrtLabel": [
//         "DCC.SavesFortitude",
//         "DCC.SavesReflex",
//         "DCC.SavesWill",
//     ],
//     "Die": [
//         "1d10",
//         "1d14",
//     ],
//     "DivineAidLabel": [
//         "DCC.DivineAid",
//         "DCC.HeightenedSenses",
//         "DCC.LayOnHands",
//         "DCC.TurnUnholy",
//     ],
//     "HandlePoisonLabel": [
//         "DCC.HandlePoison",
//         "DCC.SneakAndHide",
//     ],
//     "PurpleRange": [
//         "",
//         "sets on fire",
//     ],
//     "Folder": [
//         "fbV8PvVN4IfjQF7l",
//         "JqggWbIvMZYAT59n",
//         "SesK7iNkpwCgx4q4",
//         "tvBjfN2WxfymnOB5",
//         "ztHwgOhqF15njNll",
//     ],
//     "ItemType": [
//         "ammunition",
//         "armor",
//         "equipment",
//         "treasure",
//         "weapon",
//     ],
//     "Attribute": [
//         "abilities.lck.value",
//         "attributes.ac.value",
//         "attributes.hp",
//         "",
//     ],
//     "BloodsplatColour": [
//         "#c01b1b",
//         "#c20000",
//         "#ca0707",
//         "#e51f1f",
//         "",
//     ],
//     "Shape": [
//         "circle",
//         "none",
//     ],
//     "TextColor": [
//         "#FFFFFF",
//     ],
//     "PurpleParent": [
//         "rDNsjFt79DL8Iz6V",
//         "4dCg5yMxlWswzgzb",
//         "9EiY8ViFhUArGuLw",
//     ],
//     "ActorName": [
//         "Beastman Champion",
//         "Fireplace-Sized Flame",
//         "Flame",
//         "Torch-Sized Universal Flame",
//     ],
//     "ActorsType": [
//         "NPC",
//         "Player",
//     ],
//     "Sorting": [
//         "a",
//     ],
//     "CollectionEnum": [
//         "Actor",
//         "Item",
//         "JournalEntry",
//         "Macro",
//         "RollTable",
//         "Scene",
//     ],
//     "ActionDie": [
//         "",
//         "1d20",
//     ],
//     "FluffyRange": [
//         "",
//         "-",
//         "70/140/210",
//     ],
//     "Author": [
//         "oVvfrcHQErm1ON0p",
//     ],
//     "Scope": [
//         "global",
//     ],
//     "MacrosType": [
//         "chat",
//         "script",
//     ],
//     "DrawingFontFamily": [
//         "EB Garamond",
//     ],
//     "Name": [
//         "Floor Splat",
//         "Token Splat",
//         "Trail Splat",
//     ],
//     "Align": [
//         "center",
//     ],
//     "Fill": [
//         "#8A0707",
//     ],
//     "StyleDataFontFamily": [
//         "Sigali",
//         "splatter",
//         "WC Rhesus A Bta",
//     ],
//     "FluffyParent": [
//         "E4Xs2WZBQzOMOUKW",
//         "gvuNStnAonXBQ6cD",
//         "HecbNYqcR3m4KIE7",
//         "KaEKAyUXdgOrJrmR",
//         "qjWhMLCZDG3Ckmfp",
//         "rDNsjFt79DL8Iz6V",
//         "4Zchdz1jfzYVMDM3",
//         "9EiY8ViFhUArGuLw",
//         "uQFZ5IgGy9CZiuDb",
//         "wqY356cKleUNikxl",
//     ],
//     "Img": [
//         "icons/svg/d20-black.svg",
//         "icons/svg/d20-grey.svg",
//     ],
// };
