// @ts-ignore
import * as build from "../../build/server/index.js";

export default async function handler(request: Request) {
  // @ts-ignore
  const reactRouterNode = await import("@react-router/node");
  const createRequestHandler = reactRouterNode.default?.createRequestHandler || reactRouterNode.createRequestHandler;
  const handleRequest = createRequestHandler({ build });
  return handleRequest(request);
}
