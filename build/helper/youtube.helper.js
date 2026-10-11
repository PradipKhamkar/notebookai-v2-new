async function getYouTubeTitle(videoUrl) {
    try {
        const oembedUrl = `https://www.youtube.com/oembed?url=${videoUrl}&format=json`;
        const response = await fetch(oembedUrl);
        if (!response.ok)
            return null;
        const data = await response.json();
        return data.title;
    }
    catch (error) {
        console.error("Failed to fetch YouTube title:", error);
        return null;
    }
}
;
export default { getYouTubeTitle };
//# sourceMappingURL=youtube.helper.js.map