export const getAssetUrl = (assetName) => {
    return new URL(`../assets/${assetName}`, import.meta.url).href;
};