const getSessionTitleAndWelcomeMsg = `
Analyze the uploaded source and generate:
1. A short, friendly welcome message (1–2 sentences) that mentions the main topic and invites the student to learn.
2. A concise session title (3–6 words) based on the source content.

Keep the tone warm, natural, and encouraging. Avoid generic greetings.

Student Info whose chat now:
name - {{student_name}}
`

export default { getSessionTitleAndWelcomeMsg }