export const visionTypes = {
    human: {
        description: `Normal human sight without a light source.`,
        data: {
            vision: true,
            dimSight: 1.5,
            brightSight: 0,
        },
    },
    'under-sight': {
        description: `A strange manner of sight without light.`,
        data: {
            vision: true,
            dimSight: 60,
            brightSight: 45,
        },
    },
    unsighted: {
        description: `A lack of vision.`,
        data: {
            vision: false,
            dimSight: 0,
            brightSight: 0,
        },
    },
} as const;

export default visionTypes;
