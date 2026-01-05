import reactRouterNode from "@react-router/node";
const { createRequestHandler } = reactRouterNode;
// @ts-ignore
import * as build from "../../build/server/index.js";

export default createRequestHandler({ build });
