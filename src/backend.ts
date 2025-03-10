import PocketBase from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-typegen";

export const pb = new PocketBase(
  import.meta.env.PUBLIC_POKEAPI
) as TypedPocketBase;
