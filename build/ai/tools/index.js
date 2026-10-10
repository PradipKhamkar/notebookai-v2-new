import sourceTool from "./source.tool.js";
const toolRegistry = {
    search_into_source: sourceTool.searchSource
};
const getTool = (names) => {
    const tools = {};
    for (const name of names) {
        if (!(name in toolRegistry)) {
            throw new Error(`Tool not found: ${name}`);
        }
        // @ts-ignore: keeps each key mapped to its own tool
        tools[name] = toolRegistry[name];
    }
    return tools;
};
export const buildToolsContext = (tools, ctx) => {
    return Object.fromEntries(Object.keys(tools).map(name => [name, ctx]));
};
export default { toolRegistry, buildToolsContext, getTool };
//# sourceMappingURL=index.js.map