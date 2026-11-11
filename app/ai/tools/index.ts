
import flashcardTool from "./artifacts/flashcard.tool.js";
import mindmapTool from "./artifacts/mindmap.tool.js";
import noteTool from "./artifacts/note.tool.js";
import quizTool from "./artifacts/quiz.tool.js";
import sourceTool from "./source.tool.js";


const toolRegistry = {
        search_into_source: sourceTool.searchSource,
        create_quiz: quizTool.createQuiz,
        create_flashcards: flashcardTool.createFlashcards,
        create_mindmap: mindmapTool.createMindmapTool,
        create_note: noteTool.createNoteTool
}

export type ToolName = keyof typeof toolRegistry;

const getTool = (names: ToolName[]) => {
        const tools: Partial<typeof toolRegistry> = {};

        for (const name of names) {
                if (!(name in toolRegistry)) {
                        throw new Error(`Tool not found: ${name}`);
                }
                // @ts-ignore: keeps each key mapped to its own tool
                tools[name] = toolRegistry[name];
        }

        return tools;
};

export const buildToolsContext = (
        tools: Record<string, any>,
        ctx: any
): Record<string, any> => {
        return Object.fromEntries(
                Object.keys(tools).map(name => [name, ctx])
        );
};

export default { toolRegistry, buildToolsContext, getTool }