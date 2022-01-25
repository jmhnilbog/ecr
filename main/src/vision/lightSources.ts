// How different lights flicker, or don't.
export const lightAnimation = {
    none: {
        type: '',
    },
    'open flame': {
        type: 'torch',
        speed: 2,
        intensity: 2,
    },
    'enclosed flame': {
        type: 'torch',
        speed: 4,
        intensity: 1,
    },
} as const;

// The colors of various lighting types.
export const lightColors = {
    torchlight: '#9c6d0c',
};

// in minutes
export const lightDuration = {
    candle: 360,
    torch: 60,
    'oil lamp': 180,
    'bullseye lantern': 120,
};

export const lightSource = {
    none: {
        dim: 0,
        bright: 0,
        lightAnimation: lightAnimation.none,
    },
    candle: {
        dim: 20,
        bright: 5,
        color: lightColors.torchlight,
        alpha: 0.15,
        angle: 360,
        lightAnimation: lightAnimation['open flame'],
    },
    torch: {
        dim: 35,
        bright: 25,
        color: lightColors.torchlight,
        alpha: 0.15,
        angle: 360,
        lightAnimation: lightAnimation['open flame'],
    },
    'oil lamp': {
        dim: 45,
        bright: 15,
        color: lightColors.torchlight,
        alpha: 0.15,
        angle: 360,
        lightAnimation: lightAnimation['enclosed flame'],
    },
    'bullseye lantern': {
        dim: 120,
        bright: 60,
        color: lightColors.torchlight,
        alpha: 0.15,
        angle: 52.5,
        lightAnimation: lightAnimation['enclosed flame'],
    },
} as const;

export default {
    lightAnimation,
    lightColors,
    lightDuration,
    lightSource,
};
