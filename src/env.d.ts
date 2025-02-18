// https://docs.astro.build/en/guides/middleware/#middleware-types
import type { TypedPocketBase, UsersResponse } from "./pocketbase-typegen";
declare global {
  namespace App {
    interface Locals {
      pb: TypedPocketBase;
      user?: UsersResponse;
    }
  }
}
