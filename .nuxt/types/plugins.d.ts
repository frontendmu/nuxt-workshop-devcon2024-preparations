// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type IsAny<T> = 0 extends 1 & T ? true : false
type InjectionType<A extends Plugin> = IsAny<A> extends true ? unknown : A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.12.3_@parcel+watcher@2.4.1_@types+node@20.14.10_ioredis@5.4.1_magicast@0.3.4_rollup@4._rycpt3xj4kr5wwdxzdxdo5qws4/node_modules/nuxt/dist/app/plugins/payload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.12.3_@parcel+watcher@2.4.1_@types+node@20.14.10_ioredis@5.4.1_magicast@0.3.4_rollup@4._rycpt3xj4kr5wwdxzdxdo5qws4/node_modules/nuxt/dist/app/plugins/navigation-repaint.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.12.3_@parcel+watcher@2.4.1_@types+node@20.14.10_ioredis@5.4.1_magicast@0.3.4_rollup@4._rycpt3xj4kr5wwdxzdxdo5qws4/node_modules/nuxt/dist/app/plugins/check-outdated-build.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.12.3_@parcel+watcher@2.4.1_@types+node@20.14.10_ioredis@5.4.1_magicast@0.3.4_rollup@4._rycpt3xj4kr5wwdxzdxdo5qws4/node_modules/nuxt/dist/app/plugins/revive-payload.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.12.3_@parcel+watcher@2.4.1_@types+node@20.14.10_ioredis@5.4.1_magicast@0.3.4_rollup@4._rycpt3xj4kr5wwdxzdxdo5qws4/node_modules/nuxt/dist/app/plugins/revive-payload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.12.3_@parcel+watcher@2.4.1_@types+node@20.14.10_ioredis@5.4.1_magicast@0.3.4_rollup@4._rycpt3xj4kr5wwdxzdxdo5qws4/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.12.3_@parcel+watcher@2.4.1_@types+node@20.14.10_ioredis@5.4.1_magicast@0.3.4_rollup@4._rycpt3xj4kr5wwdxzdxdo5qws4/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.12.3_@parcel+watcher@2.4.1_@types+node@20.14.10_ioredis@5.4.1_magicast@0.3.4_rollup@4._rycpt3xj4kr5wwdxzdxdo5qws4/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.12.3_@parcel+watcher@2.4.1_@types+node@20.14.10_ioredis@5.4.1_magicast@0.3.4_rollup@4._rycpt3xj4kr5wwdxzdxdo5qws4/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.12.3_@parcel+watcher@2.4.1_@types+node@20.14.10_ioredis@5.4.1_magicast@0.3.4_rollup@4._rycpt3xj4kr5wwdxzdxdo5qws4/node_modules/nuxt/dist/pages/runtime/plugins/prerender.server").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:payload' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'nuxt:global-components' | 'nuxt:prefetch'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
