import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://still-parrot-24002.upstash.io",
  token: process.env.REDIS_KEY!,
});
