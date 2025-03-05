import { z } from "@nuxt/content";
const profileSchema = z.object({
  uniqueId: z.string().min(2).max(100),
  name: z.string().min(2).max(100),
  email: z.string().email().min(2).max(100),
  avatar: z.string().url().min(2).max(100).optional(),
});

export { profileSchema };
