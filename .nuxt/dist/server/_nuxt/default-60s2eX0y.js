import { _ as __nuxt_component_0$1 } from "./nuxt-link-BOFn79JG.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "relative z-50 w-full flex-none text-sm font-semibold leading-6 bg-gradient-to-bl to-slate-900 from-gray-800 text-white" }, _attrs))}><div class="relative flex items-center py-6 px-8"><div class="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex-none font-bold text-2xl"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Workshop frontend.mu</span>`);
      } else {
        return [
          createVNode("span", null, "Workshop frontend.mu")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased text-gray-600 min-h-full flex flex-col [overflow-anchor:none]" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]"><div class="relative mx-auto mt-20 w-full container px-4 sm:px-6 lg:px-8 max-w-5xl">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-60s2eX0y.js.map
