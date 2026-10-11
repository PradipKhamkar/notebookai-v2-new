import app from "./app.js";
import { connectDatabase } from "./config/database.js";
import envConfig from "./config/env.js";
async function bootstrap() {
    connectDatabase().then(() => {
        app.listen(envConfig.PORT, () => {
            console.log(`🚀 Server running on http://localhost:${envConfig.PORT}`);
        });
    }).catch((error) => {
        throw error;
    });
}
bootstrap().catch((error) => {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map