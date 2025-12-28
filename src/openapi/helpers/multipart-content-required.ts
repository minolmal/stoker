import type { ZodSchema } from "./types.js";

import multipartContent from "./multipart-content.js";

const multipartContentRequired = <
  T extends ZodSchema,
>(schema: T,
  description: string,
) => {
  return {
    ...multipartContent(schema, description),
    required: true,
  };
};

export default multipartContentRequired;
