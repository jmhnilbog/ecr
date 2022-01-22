const sight = {
    'no change': {},
    human: {
        vision: true,
        dimSight: 1.5,
        brightSight: 0,
    },
    'under-sight': {
        vision: true,
        dimSight: 60,
        brightSight: 45,
    },
    unsighted: {
        vision: false,
        dimSight: 0,
        brightSight: 0,
    },
} as const;

const lightAnimation = {
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

const lightColors = {
    torchlight: '#9c6d0c',
};

const lightSource = {
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

const sightOptions = Object.keys(sight).map((key) => {
    return `<option value="${key}">${key}</option>`;
});

const lightSourceOptions = Object.keys(lightSource).map((key) => {
    return `<option value="${key}">${key}</option>`;
});

let applyChanges = false;
new Dialog({
    title: `Token Vision Configuration`,
    content: `
    <form>
      <div class="form-group">
        <label>Vision Type:</label>
        <select id="vision-type" name="vision-type">
          ${sightOptions}
        </select>
      </div>
      <div class="form-group">
        <label>Light Source:</label>
        <select id="light-source" name="light-source">
          ${lightSourceOptions}
        </select>
      </div>
    </form>
    `,
    buttons: {
        yes: {
            icon: "<i class='fas fa-check'></i>",
            label: `Apply Changes`,
            callback: () => (applyChanges = true),
        },
        no: {
            icon: "<i class='fas fa-times'></i>",
            label: `Cancel Changes`,
        },
    },
    default: 'yes',
    close: (html) => {
        if (applyChanges) {
            const el = html as JQuery<HTMLSelectElement>;
            for (let token of canvas?.tokens?.controlled || []) {
                const chosenSight =
                    sight[
                        el
                            .find('[name="vision-type"]')
                            .val() as keyof typeof sight
                    ];

                const chosenLight =
                    lightSource[
                        el
                            .find('[name="light-source"]')
                            .val() as keyof typeof lightSource
                    ];

                // Update Token
                console.log(token);
                token.document.update({
                    ...chosenSight,
                    light: {
                        ...chosenLight,
                    },
                });
            }
        }
    },
}).render(true);
