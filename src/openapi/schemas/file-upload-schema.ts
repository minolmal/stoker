import { z } from "@hono/zod-openapi";

const FileUploadSchema = z.object({
  file: z.file().openapi({
    example: "test.png",
    type: "object",
  }),
});

export default FileUploadSchema;
