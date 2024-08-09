import { LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteLoaderData,
} from "@remix-run/react";
import {
  PreventFlashOnWrongTheme,
  Theme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { cn } from "./lib/utils";
import { themeSessionResolver } from "./sessions.server";
import "./tailwind.css";

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}
function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData<typeof loader>("root");
  const [theme] = useTheme();

  return (
    <html
      lang="en"
      data-theme={theme}
      className={cn(theme, "min-h-dvh sm:h-dvh overflow-x-hidden")}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        className="bg-gradient-to-br from-secondary/50 via-background to-primary/10 h-full text-foreground"
        suppressHydrationWarning
      >
        {children}
        <ScrollRestoration />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data?.theme)} />
        <Scripts />
      </body>
    </html>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider
      specifiedTheme={data?.theme as Theme}
      themeAction="/action/set-theme"
    >
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
}

export function ErrorBoundary() {
  return (
    <Providers>
      <div>Error 📛📛📛</div>
      {/* <DefaultErrorBoundary /> */}
    </Providers>
  );
}

export function HydrateFallback() {
  return (
    <Providers>
      <h1>Loading...</h1>
    </Providers>
  );
}
