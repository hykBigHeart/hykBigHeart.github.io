"use strict";
(self.blocksyJsonP = self.blocksyJsonP || []).push([
    [815], {
        2815: function(n, t, e) {
            e.r(t);
            var i = e(2194),
                o = e.n(i);
            window.WP_Grid_Builder && WP_Grid_Builder.on("init", (function(n) {
                Object.values(window.WP_Grid_Builder.instances).map((function(n) {
                    n.facets && n.facets.on("render", (function(n) {
                        return setTimeout((function() {
                            return ctEvents.trigger("blocksy:frontend:init")
                        }))
                    }))
                }))
            })), o() && (window.wpcFilterFront && o()(document).on("ready", (function(n) {
                ctEvents.trigger("blocksy:frontend:init")
            })), document.addEventListener("wpfAjaxSuccess", (function(n) {
                ctEvents.trigger("blocksy:frontend:init")
            })), document.addEventListener("facetwp-loaded", (function() {
                ctEvents.trigger("blocksy:frontend:init")
            })), o()((function() {
                setTimeout((function() {
                    ctEvents.trigger("blocksy:frontend:init")
                }), 100)
            })), ["berocket_ajax_filtering_end", "preload", "jet-filter-content-rendered", "yith_infs_added_elem", "yith-wcan-ajax-filtered", "sf:ajaxfinish", "ddwcpoRenderVariation"].map((function(n) {
                o()(document).on(n, (function() {
                    setTimeout((function() {
                        ctEvents.trigger("blocksy:frontend:init")
                    }), 100)
                }))
            })))
        }
    }
]);