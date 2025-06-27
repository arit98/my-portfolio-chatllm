import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		GOOGLE_GENERATIVE_AI_API_KEY : z.string(),
	},

	client: {},

	runtimeEnv: {
		GOOGLE_GENERATIVE_AI_API_KEY : localStorage.getItem("API_KEY"),
	},
});
