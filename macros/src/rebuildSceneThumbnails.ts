(async () => {
    for (const scene of (game as Game)?.scenes as Scenes) {
        const t = await scene.createThumbnail({ img: scene.img || undefined });
        if (t?.thumb) {
            console.log(`Regenerated thumbnail for ${scene.name}`);
            await scene.update({ thumb: t.thumb });
        }
    }
})();
