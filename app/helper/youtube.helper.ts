// utils/getYouTubeMetadata.ts
async function getYouTubeTitle(videoUrl: string): Promise<string | null> {
        try {
                const oembedUrl = `https://www.youtube.com/oembed?url=${videoUrl}&format=json`;
                const response = await fetch(oembedUrl);

                if (!response.ok) return null;

                const data = await response.json() as { title: string };
                return data.title; // Returns exact YouTube video title
        } catch (error) {
                console.error("Failed to fetch YouTube title:", error);
                return null;
        }
};
export default { getYouTubeTitle }