import type { ZodSchema } from "./types.js";

const multipartContent = <
  T extends ZodSchema,
>(schema: T,
  description: string,
) => {
  return {
    content: {
      "mulitpart/form-data": {
        schema,
      },
    },
    description,
  };
};

export default multipartContent;
