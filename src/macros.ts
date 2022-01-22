// create a torch token at 0,0

//let a = game.actors.getName('Torch-Sized Flame')
//let td = await a.getTokenData()
//let t = TokenDocument.create(td, { parent: canvas.scene })

// static create<T extends DocumentConstructor>(
//     this: T,
//     data:
//       | ConstructorDataType<InstanceType<T>['data']>
//       | (ConstructorDataType<InstanceType<T>['data']> & Record<string, unknown>),
//     context: DocumentModificationContext & { temporary: false }
//         ):

type X = DocumentModificationContext;
const LightMacro = () => {
    // for each selected token...
    canvas?.tokens?.controlled.forEach(async (token) => {
        // get the torch actor
        let a = (game as Game).actors?.getName('Torch-Sized Flame');

        if (!a) {
            return;
        }
        // get the associated token data
        let td = await a.getTokenData();
        // move it to the right spot
        td.update({ x: token.x, y: token.y });

        // create the torch
        let torchToken = await TokenDocument.create(td, {
            //@ts-ignore
            parent: canvas.scene,
        });

        // attach it to the selected token

        //console.log("selected token", token)
        //console.log("torchToken Document", torchTokenDocument);
        //console.log("torchToken", torchToken)

        //@ts-ignore
        await tokenAttacher.attachElementToToken(torchToken, token, true);
        //@ts-ignore
        await tokenAttacher.setElementsLockStatus(torchToken, false, true);
    });
};

// every 6 turns (1 hour)...
(() => {
    let interval = null;
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
    // @ts-ignore
    interval = game.Gametime.doEvery({ minute: 60 }, () => {
        console.log("I'd roll on  a table if I knew how");
    });
})();
