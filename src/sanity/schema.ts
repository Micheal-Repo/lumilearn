import {type SchemaTypeDefinition} from "sanity"

import {courseType} from "./schemaTypes/courseType"

export const schema:{types:SchemaTypeDefinition[]} = {
  types :[courseType]
}