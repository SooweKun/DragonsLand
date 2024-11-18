/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutmainImport } from './routes/_layoutmain'
import { Route as mainIndexImport } from './routes/(main)/index'
import { Route as LayoutmainGrimuarIndexImport } from './routes/_layoutmain/grimuar/index'
import { Route as LayoutmainDragonIndexImport } from './routes/_layoutmain/dragon/index'
import { Route as LayoutmainContactIndexImport } from './routes/_layoutmain/contact/index'
import { Route as LayoutmainAboutIndexImport } from './routes/_layoutmain/about/index'

// Create/Update Routes

const LayoutmainRoute = LayoutmainImport.update({
  id: '/_layoutmain',
  getParentRoute: () => rootRoute,
} as any)

const mainIndexRoute = mainIndexImport.update({
  id: '/(main)/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LayoutmainGrimuarIndexRoute = LayoutmainGrimuarIndexImport.update({
  id: '/grimuar/',
  path: '/grimuar/',
  getParentRoute: () => LayoutmainRoute,
} as any)

const LayoutmainDragonIndexRoute = LayoutmainDragonIndexImport.update({
  id: '/dragon/',
  path: '/dragon/',
  getParentRoute: () => LayoutmainRoute,
} as any)

const LayoutmainContactIndexRoute = LayoutmainContactIndexImport.update({
  id: '/contact/',
  path: '/contact/',
  getParentRoute: () => LayoutmainRoute,
} as any)

const LayoutmainAboutIndexRoute = LayoutmainAboutIndexImport.update({
  id: '/about/',
  path: '/about/',
  getParentRoute: () => LayoutmainRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layoutmain': {
      id: '/_layoutmain'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutmainImport
      parentRoute: typeof rootRoute
    }
    '/(main)/': {
      id: '/(main)/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof mainIndexImport
      parentRoute: typeof rootRoute
    }
    '/_layoutmain/about/': {
      id: '/_layoutmain/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof LayoutmainAboutIndexImport
      parentRoute: typeof LayoutmainImport
    }
    '/_layoutmain/contact/': {
      id: '/_layoutmain/contact/'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof LayoutmainContactIndexImport
      parentRoute: typeof LayoutmainImport
    }
    '/_layoutmain/dragon/': {
      id: '/_layoutmain/dragon/'
      path: '/dragon'
      fullPath: '/dragon'
      preLoaderRoute: typeof LayoutmainDragonIndexImport
      parentRoute: typeof LayoutmainImport
    }
    '/_layoutmain/grimuar/': {
      id: '/_layoutmain/grimuar/'
      path: '/grimuar'
      fullPath: '/grimuar'
      preLoaderRoute: typeof LayoutmainGrimuarIndexImport
      parentRoute: typeof LayoutmainImport
    }
  }
}

// Create and export the route tree

interface LayoutmainRouteChildren {
  LayoutmainAboutIndexRoute: typeof LayoutmainAboutIndexRoute
  LayoutmainContactIndexRoute: typeof LayoutmainContactIndexRoute
  LayoutmainDragonIndexRoute: typeof LayoutmainDragonIndexRoute
  LayoutmainGrimuarIndexRoute: typeof LayoutmainGrimuarIndexRoute
}

const LayoutmainRouteChildren: LayoutmainRouteChildren = {
  LayoutmainAboutIndexRoute: LayoutmainAboutIndexRoute,
  LayoutmainContactIndexRoute: LayoutmainContactIndexRoute,
  LayoutmainDragonIndexRoute: LayoutmainDragonIndexRoute,
  LayoutmainGrimuarIndexRoute: LayoutmainGrimuarIndexRoute,
}

const LayoutmainRouteWithChildren = LayoutmainRoute._addFileChildren(
  LayoutmainRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof LayoutmainRouteWithChildren
  '/': typeof mainIndexRoute
  '/about': typeof LayoutmainAboutIndexRoute
  '/contact': typeof LayoutmainContactIndexRoute
  '/dragon': typeof LayoutmainDragonIndexRoute
  '/grimuar': typeof LayoutmainGrimuarIndexRoute
}

export interface FileRoutesByTo {
  '': typeof LayoutmainRouteWithChildren
  '/': typeof mainIndexRoute
  '/about': typeof LayoutmainAboutIndexRoute
  '/contact': typeof LayoutmainContactIndexRoute
  '/dragon': typeof LayoutmainDragonIndexRoute
  '/grimuar': typeof LayoutmainGrimuarIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layoutmain': typeof LayoutmainRouteWithChildren
  '/(main)/': typeof mainIndexRoute
  '/_layoutmain/about/': typeof LayoutmainAboutIndexRoute
  '/_layoutmain/contact/': typeof LayoutmainContactIndexRoute
  '/_layoutmain/dragon/': typeof LayoutmainDragonIndexRoute
  '/_layoutmain/grimuar/': typeof LayoutmainGrimuarIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/' | '/about' | '/contact' | '/dragon' | '/grimuar'
  fileRoutesByTo: FileRoutesByTo
  to: '' | '/' | '/about' | '/contact' | '/dragon' | '/grimuar'
  id:
    | '__root__'
    | '/_layoutmain'
    | '/(main)/'
    | '/_layoutmain/about/'
    | '/_layoutmain/contact/'
    | '/_layoutmain/dragon/'
    | '/_layoutmain/grimuar/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutmainRoute: typeof LayoutmainRouteWithChildren
  mainIndexRoute: typeof mainIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  LayoutmainRoute: LayoutmainRouteWithChildren,
  mainIndexRoute: mainIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/_layoutmain",
        "/(main)/"
      ]
    },
    "/_layoutmain": {
      "filePath": "_layoutmain.jsx",
      "children": [
        "/_layoutmain/about/",
        "/_layoutmain/contact/",
        "/_layoutmain/dragon/",
        "/_layoutmain/grimuar/"
      ]
    },
    "/(main)/": {
      "filePath": "(main)/index.jsx"
    },
    "/_layoutmain/about/": {
      "filePath": "_layoutmain/about/index.jsx",
      "parent": "/_layoutmain"
    },
    "/_layoutmain/contact/": {
      "filePath": "_layoutmain/contact/index.jsx",
      "parent": "/_layoutmain"
    },
    "/_layoutmain/dragon/": {
      "filePath": "_layoutmain/dragon/index.jsx",
      "parent": "/_layoutmain"
    },
    "/_layoutmain/grimuar/": {
      "filePath": "_layoutmain/grimuar/index.jsx",
      "parent": "/_layoutmain"
    }
  }
}
ROUTE_MANIFEST_END */