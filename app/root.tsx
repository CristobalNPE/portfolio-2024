import {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteLoaderData,
} from "@remix-run/react";
import { SpeedInsights } from "@vercel/speed-insights/remix";
import {
  PreventFlashOnWrongTheme,
  Theme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { cn } from "./lib/utils";
import { themeSessionResolver } from "./sessions.server";
import fontStyleSheetUrl from "./styles/font.css?url";
import tailwindStyleSheetUrl from "./styles/tailwind.css?url";
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStyleSheetUrl },
    { rel: "stylesheet", href: fontStyleSheetUrl },
    {
      rel: "preload",
      href: "/fonts/CommitMono-400-Regular.otf",
      as: "font",
      type: "font/otf",
    },
    {
      rel: "preload",
      href: "/fonts/CommitMono-600-Regular.otf",
      as: "font",
      type: "font/otf",
    },
    {
      rel: "preload",
      href: "/fonts/CommitMono-700-Regular.otf",
      as: "font",
      type: "font/otf",
    },
  ].filter(Boolean);
};

export const meta: MetaFunction = () => {
  return [
    { title: "Cristóbal Pulgar Estay | Portafolio" },
    { name: "description", content: `Portafolio de Cristóbal Pulgar Estay` },
  ];
};

function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData<typeof loader>("root");
  const [theme] = useTheme();

  return (
    <html
      lang="en"
      data-theme={theme}
      className={cn(
        theme,
        "min-h-dvh place-items-center grid overflow-x-hidden selection:text-foreground selection:bg-primary"
      )}
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
        <SpeedInsights />
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
