import { type SchemaTypeDefinition } from "sanity";

import { courseType } from "./courseType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [courseType],
};
