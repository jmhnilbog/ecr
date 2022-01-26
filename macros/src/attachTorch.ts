// const LightMacro = () => {
//     // for each selected token...
//     canvas.tokens.controlled.forEach(async (token) => {
//         // get the torch actor
//         let a = game.actors.getName('Torch-Sized Flame');

//         if (!a) {
//             return;
//         }
//         // get the associated token data
//         let td = await a.getTokenData();
//         // move it to the right spot
//         td.update({ x: token.x, y: token.y });

//         // create the torch
//         let torchToken = await TokenDocument.create(td, {
//             //@ts-ignore
//             parent: canvas.scene,
//         });

//         // attach it to the selected token

//         //console.log("selected token", token)
//         //console.log("torchToken Document", torchTokenDocument);
//         console.log('torchToken', torchToken);

//         //@ts-ignore
//         await tokenAttacher.attachElementToToken(torchToken, token, true);
//         //@ts-ignore
//         await tokenAttacher.setElementsLockStatus(torchToken, false, true);
//     });
// };

// LightMacro();
