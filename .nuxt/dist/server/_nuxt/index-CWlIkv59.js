import { defineComponent, h, inject, computed, unref, ref, provide, Suspense, nextTick, mergeProps, Transition, useSSRContext, useSlots, resolveComponent, withCtx, createTextVNode, createVNode } from "vue";
import { u as useNuxtApp, P as PageRouteSymbol, a as useRoute, b as useRoute$1, c as appLayoutTransition, d as _wrapIf, L as LayoutMetaSymbol, _ as _export_sfc } from "../server.mjs";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "node:fs";
import "node:path";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "radix3";
import "devalue";
const layouts = {
  default: () => import("./default-60s2eX0y.js").then((m) => m.default || m)
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BlockHeader",
  __ssrInlineRender: true,
  props: {
    title: {},
    category: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">${ssrInterpolate(_ctx.title)}</h1><nav aria-label="Breadcrumbs" class="order-first flex space-x-2 text-sm font-semibold"><a class="text-slate-500 hover:text-slate-600">Workshop</a>`);
      if (_ctx.category) {
        _push(`<div aria-hidden="true" class="select-none text-slate-400">/</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.category) {
        _push(`<a class="text-slate-500 hover:text-slate-600">${ssrInterpolate(_ctx.category || "")}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlockHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Block",
  __ssrInlineRender: true,
  props: {
    title: {},
    category: {}
  },
  setup(__props) {
    const tabs = ["preview", "code"];
    const tab = ref("preview");
    useSlots();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockHeader = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BlockHeader, {
        title: _ctx.title,
        category: _ctx.category
      }, null, _parent));
      _push(`<div class="grid grid-cols-[1fr,auto] items-center"><div class="flex min-w-0"><h2 class="truncate text-base font-medium leading-7 text-slate-900"><a>${ssrInterpolate(_ctx.title || "block name")}</a></h2></div><div class="ml-6 flex items-center"><div class="flex space-x-1 rounded-lg bg-slate-100 p-0.5" role="tablist" aria-orientation="horizontal"><!--[-->`);
      ssrRenderList(tabs, (item) => {
        _push(`<button class="${ssrRenderClass([{ "bg-white shadow": unref(tab) === item }, "flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3"])}" role="tab" type="button" aria-selected="true" tabindex="0">`);
        if (item === "preview") {
          _push(`<svg class="h-5 w-5 flex-none stroke-sky-500" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10Z"></path><circle cx="10" cy="10" r="2.25"></circle></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (item === "code") {
          _push(`<svg class="h-5 w-5 flex-none stroke-slate-600" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="m13.75 6.75 3.5 3.25-3.5 3.25M6.25 13.25 2.75 10l3.5-3.25"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="capitalize sr-only lg:not-sr-only lg:ml-2 text-slate-900">${ssrInterpolate(item)}</span></button>`);
      });
      _push(`<!--]--></div></div></div><div class="mt-6 w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10">`);
      if (unref(tab) === "preview") {
        _push(`<div class="flex items-center justify-center bg-white p-8">`);
        ssrRenderSlot(_ctx.$slots, "preview", {}, () => {
          _push(`preview`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(tab) === "code") {
        _push(`<div class="prose bg-gray-200 flex p-8"><pre><code class="language-html">`);
        ssrRenderSlot(_ctx.$slots, "code", {}, () => {
          _push(`code`);
        }, _push, _parent);
        _push(`</code>
</pre></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Block.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_IconCandle = resolveComponent("IconCandle");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-between bg-blue-950 text-white p-4 rounded-md w-full" }, _attrs))}><div class="flex justify-between w-full"><div class="text-xl font-bold">Flic en Flac</div><div class="w-6">`);
  _push(ssrRenderComponent(_component_IconCandle, null, null, _parent));
  _push(`</div></div><div class="flex justify-between items-end"><div class="space-y-2"><p class="font-light max-w-3xl"> Poste De Police, Loday Lane, Flic En Flac Road, Residence Des Peupliers Et Residence Gold Coast </p><div class="text-sm">8 HOURS AGO FROM 08:30 TO 15:30</div></div><p class="max-w-[150px] text-right">Power will resume in 34m 6s</p></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card-one.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_IconBulb = resolveComponent("IconBulb");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between space-y-2 border-[1px] border-white bg-sky-950 text-white p-4 rounded-md w-full" }, _attrs))}><div class="flex flex-col justify-between gap-2"><div class="flex items-center gap-2 w-full"><div class="text-xl font-bold">Flic en Flac</div><div class="w-4">`);
  _push(ssrRenderComponent(_component_IconBulb, null, null, _parent));
  _push(`</div></div><p class="font-light max-w-xl"> Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit Bois, Chemin Balance, Morc. Caunhye </p></div><div class="flex flex-col justify-between gap-2"><p class="text-right">Power will resume in 34m 6s</p><div class="flex flex-col items-end"><div class="text-sm">8 HOURS AGO</div><div class="text-sm font-light text-right">FROM 08:30 TO 15:30</div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card-two.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_IconBulb = resolveComponent("IconBulb");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white px-4 py-5 sm:px-6 space-y-4 rounded-md" }, _attrs))}><div class="flex justify-between text-black"><div class="flex space-x-3"><div class="flex items-center justify-center w-6">`);
  _push(ssrRenderComponent(_component_IconBulb, null, null, _parent));
  _push(`</div><div class="min-w-0 flex-1"><p class="text-sm font-semibold text-gray-900">Flic en Flacq</p><p class="text-sm text-gray-500"> 8 hours ago, From 08:30 to 15:30 </p></div></div><p>Power will resume in 34m 6s</p></div><p class="text-gray-500"> Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe, Morc. Sohawon, Morc. </p></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card-three.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_IconBulb = resolveComponent("IconBulb");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-700 border-[1px] border-gray-400 px-4 py-5 sm:px-6 space-y-4 rounded-md" }, _attrs))}><div class="flex justify-between"><div class="flex justify-between w-full"><div class="min-w-0 flex-1"><p class="text-lg font-semibold text-white">Flic en Flacq</p><p class="text-sm text-gray-400"> 8 hours ago, From 08:30 to 15:30 </p><p class="text-white text-sm">Power will resume in 34m 6s</p></div><div class="flex items-center justify-center w-6">`);
  _push(ssrRenderComponent(_component_IconBulb, null, null, _parent));
  _push(`</div></div></div><p class="text-gray-300 font-light"> Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe, Morc. Sohawon, Morc. </p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card-four.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_Block = _sfc_main$5;
  const _component_CardOne = __nuxt_component_2;
  const _component_CardTwo = __nuxt_component_3;
  const _component_CardThree = __nuxt_component_4;
  const _component_CardFour = __nuxt_component_5;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-10 space-y-24 pb-px"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Block, {
          title: "Card One",
          category: "card"
        }, {
          code: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` &lt;div class=&quot;flex flex-col justify-between bg-blue-950 text-white p-4 rounded-md w-full&quot; &gt; &lt;div class=&quot;flex justify-between w-full&quot;&gt; &lt;div class=&quot;text-xl font-bold&quot;&gt;Flic en Flac&lt;/div&gt; &lt;div class=&quot;w-6&quot;&gt; &lt;IconCandle /&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class=&quot;flex justify-between items-end&quot;&gt; &lt;div class=&quot;space-y-2&quot;&gt; &lt;p class=&quot;font-light max-w-3xl&quot;&gt; Poste De Police, Loday Lane, Flic En Flac Road, Residence Des Peupliers Et Residence Gold Coast &lt;/p&gt; &lt;div class=&quot;text-sm&quot;&gt;8 HOURS AGO FROM 08:30 TO 15:30&lt;/div&gt; &lt;/div&gt; &lt;p class=&quot;max-w-[150px] text-right&quot;&gt;Power will resume in 34m 6s&lt;/p&gt; &lt;/div&gt; &lt;/div&gt; `);
            } else {
              return [
                createTextVNode(' <div class="flex flex-col justify-between bg-blue-950 text-white p-4 rounded-md w-full" > <div class="flex justify-between w-full"> <div class="text-xl font-bold">Flic en Flac</div> <div class="w-6"> <IconCandle /> </div> </div> <div class="flex justify-between items-end"> <div class="space-y-2"> <p class="font-light max-w-3xl"> Poste De Police, Loday Lane, Flic En Flac Road, Residence Des Peupliers Et Residence Gold Coast </p> <div class="text-sm">8 HOURS AGO FROM 08:30 TO 15:30</div> </div> <p class="max-w-[150px] text-right">Power will resume in 34m 6s</p> </div> </div> ')
              ];
            }
          }),
          preview: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CardOne, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CardOne)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Block, {
          title: "Card two",
          category: "card"
        }, {
          code: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` &lt;div class=&quot;bg-white px-4 py-5 sm:px-6 space-y-4 rounded-md&quot;&gt; &lt;div class=&quot;flex justify-between text-black&quot;&gt; &lt;div class=&quot;flex space-x-3&quot;&gt; &lt;div class=&quot;flex items-center justify-center w-6&quot;&gt; &lt;IconBulb /&gt; &lt;/div&gt; &lt;div class=&quot;min-w-0 flex-1&quot;&gt; &lt;p class=&quot;text-sm font-semibold text-gray-900&quot;&gt;Flic en Flacq&lt;/p&gt; &lt;p class=&quot;text-sm text-gray-500&quot;&gt; 8 hours ago, From 08:30 to 15:30 &lt;/p&gt; &lt;/div&gt; &lt;/div&gt; &lt;p&gt;Power will resume in 34m 6s&lt;/p&gt; &lt;/div&gt; &lt;p class=&quot;text-gray-500&quot;&gt; Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe, Morc. Sohawon, Morc. &lt;/p&gt; &lt;/div&gt; `);
            } else {
              return [
                createTextVNode(' <div class="bg-white px-4 py-5 sm:px-6 space-y-4 rounded-md"> <div class="flex justify-between text-black"> <div class="flex space-x-3"> <div class="flex items-center justify-center w-6"> <IconBulb /> </div> <div class="min-w-0 flex-1"> <p class="text-sm font-semibold text-gray-900">Flic en Flacq</p> <p class="text-sm text-gray-500"> 8 hours ago, From 08:30 to 15:30 </p> </div> </div> <p>Power will resume in 34m 6s</p> </div> <p class="text-gray-500"> Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe, Morc. Sohawon, Morc. </p> </div> ')
              ];
            }
          }),
          preview: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CardTwo, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CardTwo)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Block, {
          title: "Card three",
          category: "card"
        }, {
          code: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` &lt;div class=&quot;bg-white px-4 py-5 sm:px-6 space-y-4 rounded-md&quot;&gt; &lt;div class=&quot;flex justify-between text-black&quot;&gt; &lt;div class=&quot;flex space-x-3&quot;&gt; &lt;div class=&quot;flex items-center justify-center w-6&quot;&gt; &lt;IconBulb /&gt; &lt;/div&gt; &lt;div class=&quot;min-w-0 flex-1&quot;&gt; &lt;p class=&quot;text-sm font-semibold text-gray-900&quot;&gt;Flic en Flacq&lt;/p&gt; &lt;p class=&quot;text-sm text-gray-500&quot;&gt; 8 hours ago, From 08:30 to 15:30 &lt;/p&gt; &lt;/div&gt; &lt;/div&gt; &lt;p&gt;Power will resume in 34m 6s&lt;/p&gt; &lt;/div&gt; &lt;p class=&quot;text-gray-500&quot;&gt; Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe, Morc. Sohawon, Morc. &lt;/p&gt; &lt;/div&gt; `);
            } else {
              return [
                createTextVNode(' <div class="bg-white px-4 py-5 sm:px-6 space-y-4 rounded-md"> <div class="flex justify-between text-black"> <div class="flex space-x-3"> <div class="flex items-center justify-center w-6"> <IconBulb /> </div> <div class="min-w-0 flex-1"> <p class="text-sm font-semibold text-gray-900">Flic en Flacq</p> <p class="text-sm text-gray-500"> 8 hours ago, From 08:30 to 15:30 </p> </div> </div> <p>Power will resume in 34m 6s</p> </div> <p class="text-gray-500"> Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe, Morc. Sohawon, Morc. </p> </div> ')
              ];
            }
          }),
          preview: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CardThree, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CardThree)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Block, {
          title: "Card four",
          category: "card"
        }, {
          code: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` &lt;div class=&quot;bg-gray-700 border-[1px] border-gray-400 px-4 py-5 sm:px-6 space-y-4 rounded-md&quot; &gt; &lt;div class=&quot;flex justify-between&quot;&gt; &lt;div class=&quot;flex justify-between w-full&quot;&gt; &lt;div class=&quot;min-w-0 flex-1&quot;&gt; &lt;p class=&quot;text-lg font-semibold text-white&quot;&gt;Flic en Flacq&lt;/p&gt; &lt;p class=&quot;text-sm text-gray-400&quot;&gt; 8 hours ago, From 08:30 to 15:30 &lt;/p&gt; &lt;p class=&quot;text-white text-sm&quot;&gt;Power will resume in 34m 6s&lt;/p&gt; &lt;/div&gt; &lt;div class=&quot;flex items-center justify-center w-6&quot;&gt; &lt;IconBulb /&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;p class=&quot;text-gray-300 font-light&quot;&gt; Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe, Morc. Sohawon, Morc. &lt;/p&gt; &lt;/div&gt; `);
            } else {
              return [
                createTextVNode(' <div class="bg-gray-700 border-[1px] border-gray-400 px-4 py-5 sm:px-6 space-y-4 rounded-md" > <div class="flex justify-between"> <div class="flex justify-between w-full"> <div class="min-w-0 flex-1"> <p class="text-lg font-semibold text-white">Flic en Flacq</p> <p class="text-sm text-gray-400"> 8 hours ago, From 08:30 to 15:30 </p> <p class="text-white text-sm">Power will resume in 34m 6s</p> </div> <div class="flex items-center justify-center w-6"> <IconBulb /> </div> </div> </div> <p class="text-gray-300 font-light"> Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe, Morc. Sohawon, Morc. </p> </div> ')
              ];
            }
          }),
          preview: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CardFour, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CardFour)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "mt-10 space-y-24 pb-px" }, [
            createVNode(_component_Block, {
              title: "Card One",
              category: "card"
            }, {
              code: withCtx(() => [
                createTextVNode(' <div class="flex flex-col justify-between bg-blue-950 text-white p-4 rounded-md w-full" > <div class="flex justify-between w-full"> <div class="text-xl font-bold">Flic en Flac</div> <div class="w-6"> <IconCandle /> </div> </div> <div class="flex justify-between items-end"> <div class="space-y-2"> <p class="font-light max-w-3xl"> Poste De Police, Loday Lane, Flic En Flac Road, Residence Des Peupliers Et Residence Gold Coast </p> <div class="text-sm">8 HOURS AGO FROM 08:30 TO 15:30</div> </div> <p class="max-w-[150px] text-right">Power will resume in 34m 6s</p> </div> </div> ')
              ]),
              preview: withCtx(() => [
                createVNode(_component_CardOne)
              ]),
              _: 1
            }),
            createVNode(_component_Block, {
              title: "Card two",
              category: "card"
            }, {
              code: withCtx(() => [
                createTextVNode(' <div class="bg-white px-4 py-5 sm:px-6 space-y-4 rounded-md"> <div class="flex justify-between text-black"> <div class="flex space-x-3"> <div class="flex items-center justify-center w-6"> <IconBulb /> </div> <div class="min-w-0 flex-1"> <p class="text-sm font-semibold text-gray-900">Flic en Flacq</p> <p class="text-sm text-gray-500"> 8 hours ago, From 08:30 to 15:30 </p> </div> </div> <p>Power will resume in 34m 6s</p> </div> <p class="text-gray-500"> Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe, Morc. Sohawon, Morc. </p> </div> ')
              ]),
              preview: withCtx(() => [
                createVNode(_component_CardTwo)
              ]),
              _: 1
            }),
            createVNode(_component_Block, {
              title: "Card three",
              category: "card"
            }, {
              code: withCtx(() => [
                createTextVNode(' <div class="bg-white px-4 py-5 sm:px-6 space-y-4 rounded-md"> <div class="flex justify-between text-black"> <div class="flex space-x-3"> <div class="flex items-center justify-center w-6"> <IconBulb /> </div> <div class="min-w-0 flex-1"> <p class="text-sm font-semibold text-gray-900">Flic en Flacq</p> <p class="text-sm text-gray-500"> 8 hours ago, From 08:30 to 15:30 </p> </div> </div> <p>Power will resume in 34m 6s</p> </div> <p class="text-gray-500"> Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe, Morc. Sohawon, Morc. </p> </div> ')
              ]),
              preview: withCtx(() => [
                createVNode(_component_CardThree)
              ]),
              _: 1
            }),
            createVNode(_component_Block, {
              title: "Card four",
              category: "card"
            }, {
              code: withCtx(() => [
                createTextVNode(' <div class="bg-gray-700 border-[1px] border-gray-400 px-4 py-5 sm:px-6 space-y-4 rounded-md" > <div class="flex justify-between"> <div class="flex justify-between w-full"> <div class="min-w-0 flex-1"> <p class="text-lg font-semibold text-white">Flic en Flacq</p> <p class="text-sm text-gray-400"> 8 hours ago, From 08:30 to 15:30 </p> <p class="text-white text-sm">Power will resume in 34m 6s</p> </div> <div class="flex items-center justify-center w-6"> <IconBulb /> </div> </div> </div> <p class="text-gray-300 font-light"> Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe, Morc. Sohawon, Morc. </p> </div> ')
              ]),
              preview: withCtx(() => [
                createVNode(_component_CardFour)
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-CWlIkv59.js.map
