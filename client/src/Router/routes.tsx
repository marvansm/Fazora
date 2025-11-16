import { createRootRoute, createRoute } from "@tanstack/react-router";
import Home from "../Featured/Pages/Home";
import Layout from "../Layout";

export const rootRoute = createRootRoute({
  component: Layout,
});

export const HomeRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

export const routeTree = rootRoute.addChildren([HomeRouter]);
