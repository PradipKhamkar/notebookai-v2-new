// infograph.schema.ts
import { z } from "zod";
import { titleSchema } from "./content.schema.js";

/* ----------------------------- Icons (must match ICONS map) ----------------------------- */

export const ICON_KEYS = [
  // base
  "rocket", "globe", "trending", "award", "target", "pin",
  "book", "idea", "clock", "compare", "activity", "alert",
  // navigation & layout
  "home", "menu", "search", "filter", "list", "grid",
  // data & analytics
  "chart", "bar-chart", "pie-chart", "stats", "percent", "hash",
  // communication
  "message", "mail", "bell", "share", "link", "users", "user",
  // content & media
  "image", "video", "mic", "headphones", "music", "file", "folder",
  // actions & status
  "check", "close", "plus", "minus", "edit", "trash", "download", "upload",
  "lock", "unlock", "eye", "star", "heart", "flag", "tag",
  // tech & science
  "cpu", "code", "terminal", "database", "cloud", "wifi", "layers",
  "atom", "flask", "dna", "microscope", "calculator", "math",
  // nature & world
  "sun", "moon", "leaf", "tree", "zap", "fire", "water",
  // money & time
  "dollar", "coin", "calendar", "timer", "hourglass", "map",
  // education
  "graduation", "school", "backpack", "bookmarked", "notebook", "pen", "ruler",
  // health & medical
  "stethoscope", "pill", "heartbeat", "pulse", "syringe", "brain", "bone",
  // transport
  "car", "plane", "train", "bike", "ship", "bus", "truck",
  // building & place
  "building", "landmark", "store", "factory", "hotel",
  // settings & system
  "settings", "settings-alt", "sliders", "toggle", "wrench", "gauge", "power", "refresh",
  // social & emotion
  "thumbs-up", "thumbs-down", "smile", "frown", "party", "trophy", "medal",
  // weather
  "wind", "snow", "umbrella", "rain", "lightning", "thermometer",
  // security
  "shield", "shield-check", "key", "fingerprint",
  // productivity & workflow
  "inbox", "send", "bookmark", "clipboard", "briefcase", "package",
  "boxes", "git-branch", "git-merge", "network", "workflow",
  // shapes & misc
  "circle", "triangle", "square", "pentagon", "hexagon",
  "infinity", "sigma", "binary", "scan", "qr"
] as const;

// const IconSchema = z
//    .enum(ICON_KEYS)
//    .describe("Icon that best represents the content. Choose only from the allowed list.");

const IconSchema = z
  .string()
  .describe(
    `Icon that best represents the content. Allowed values: ${ICON_KEYS.join(", ")}`
  )
  .transform((val): (typeof ICON_KEYS)[number] => {
    // Check if the returned string is a valid icon key
    const isValid = ICON_KEYS.includes(val as (typeof ICON_KEYS)[number]);
    
    // If valid, return it; otherwise, fall back safely
    return isValid ? (val as (typeof ICON_KEYS)[number]) : 'book';
  });
  
/* ----------------------------- Building blocks ----------------------------- */

const StudyCardSchema = z.object({
   icon: IconSchema,
   title: z.string().describe("Short title, max ~4 words."),
   text: z.string().describe("One concise sentence (max ~20 words)."),
});

const TimelineEventSchema = z.object({
   date: z.string().describe("Date or period, e.g. 'July 16' or '1969'."),
   title: z.string().describe("Short event title, max ~4 words."),
   description: z.string().describe("One sentence describing the event."),
});

const ComparisonItemSchema = z.object({
   feature: z.string().describe("The aspect being compared, e.g. 'Lunar Strategy'."),
   itemA: z.string().describe("Value for the first item. Keep it short."),
   itemB: z.string().describe("Value for the second item. Keep it short."),
});

const StatSchema = z.object({
   icon: IconSchema,
   value: z.string().describe("Headline number or figure, e.g. '363 ft' or '$25B'."),
   caption: z.string().describe("One short sentence explaining the figure."),
});

/* ----------------------------- UI Blocks ----------------------------- */

const TextBlockSchema = z.object({
   type: z.literal("text"),
   text: z.string().describe("A explanatory paragraph"),
});

const KeyPointBlockSchema = z.object({
   type: z.literal("key-point"),
   text: z.string().describe("The single most important takeaway of this page."),
});

const ExamBlockSchema = z.object({
   type: z.literal("exam"),
   text: z.string().describe("A fact, trap, or tip likely to appear in exams."),
});

const RememberBlockSchema = z.object({
   type: z.literal("remember"),
   text: z.string().describe("A memorable fact, quote, or mnemonic worth remembering."),
});

const GridBlockSchema = z.object({
   type: z.literal("grid"),
   cards: z.array(StudyCardSchema).describe(""),
});

const TimelineBlockSchema = z.object({
   type: z.literal("timeline"),
   events: z.array(TimelineEventSchema).describe("chronological order."),
});

const ComparisonBlockSchema = z.object({
   type: z.literal("comparison"),
   comparisons: z.array(ComparisonItemSchema).describe("comparison rows."),
});

const StatBlocksSchema = z.object({
   type: z.literal("stat-blocks"),
   stats: z.array(StatSchema).describe("statistics."),
});

export const UIBlockSchema = z.discriminatedUnion("type", [
   TextBlockSchema,
   KeyPointBlockSchema,
   ExamBlockSchema,
   RememberBlockSchema,
   GridBlockSchema,
   TimelineBlockSchema,
   ComparisonBlockSchema,
   StatBlocksSchema,
]);

const StudyPageSchema = z.object({
   chapter: z.string().describe("Chapter label, e.g. 'The Space Race'."),
   heading: z.string().describe("Catchy page heading, max ~6 words."),
   intro: z.string().describe("introduction to this page."),
   blocks: z.array(UIBlockSchema).describe(""),
});

 export const StudyOverviewSchema  = z.object({
   title: titleSchema,
   data:  z.array(StudyPageSchema).describe("In logical learning order."),
});

export type StudyOverview = z.infer<typeof StudyOverviewSchema>;
export type StudyPage = z.infer<typeof StudyPageSchema>;
export type UIBlock = z.infer<typeof UIBlockSchema>;
export type GridBlock = Extract<UIBlock, { type: "grid" }>;
export type TimelineBlock = Extract<UIBlock, { type: "timeline" }>;
export type ComparisonBlock = Extract<UIBlock, { type: "comparison" }>;
export type StatBlockType = Extract<UIBlock, { type: "stat-blocks" }>;
export type KeyPointBlock = Extract<UIBlock, { type: "key-point" }>;
export type TextBlockType = Extract<UIBlock, { type: "text" }>;
export type ExamBlockType = Extract<UIBlock, { type: "exam" }>;
export type RememberBlockType = Extract<UIBlock, { type: "remember" }>;

export default { StudyOverviewSchema}