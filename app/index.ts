import app from "./app.ts";
import { connectDatabase } from "./config/database.ts";
import envConfig from "./config/env.ts";

async function bootstrap(): Promise<void> {

        // Start HTTP server
        connectDatabase().then(() => {
                app.listen(envConfig.PORT, () => {
                        console.log(`🚀 Server running on http://localhost:${envConfig.PORT}`);
                        // console.log(`📦 Environment: ${env.ccc}`);
                });
        }).catch((error) => {
                throw error
        });
}

bootstrap().catch((error) => {
        console.error("❌ Failed to start server:", error);
        process.exit(1);
});
