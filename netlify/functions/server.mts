// @ts-ignore
import * as build from "../../build/server/index.js";

export default async function handler(request: Request) {
  // @ts-ignore
  const { createRequestHandler } = await import("@react-router/node");
  const handleRequest = createRequestHandler({ build });
  return handleRequest(request);
}
