const sendButton = document.getElementById('sendform');
sendButton.addEventListener('click', function(event) {
  event.preventDefault();
  const getvalue = document.getElementById('form-comment').value;

  const toto = document.getElementById("toto");
  let output = ` <div style=" height: 15% ;width: 100%;justify-self: flex-start; display: flex;">

<div>
    <img style="height: 40px; width: 40px; border-radius: 5px; margin-right:10px; margin-top: 5px;"
        src="https://coderthemes.com/adminto/layouts/assets/images/users/user-1.jpg" alt="">
</div>

<div style="height: 300px; width: 91%;">
    <h5>
        <a style="color: #323a46;text-decoration: none; font-size: 11pt; margin-top: 0;" href="#"
            class="text-dark">Nicolai Larson</a>
        <small style="font-size: 7pt;">2 minutes ago</small>
    </h5>
    <p style="margin-top: 5px; margin-bottom: 1rem; display: block;">
      ${getvalue}
    </p>
    <div style="margin-top: 10px; ">
        <a href="" style="margin-right: 5px;"><i style="color: #323a46;"
                class="glyphicon glyphicon-thumbs-up"></i></a>
        <a href="" style="margin-right: 5px;"><i style="color: #323a46;"
                class="glyphicon glyphicon-thumbs-down"></i></a>
        <a href="" style="color: #323a46;">Reply</a>
    </div>
</div>
</div>`;
toto.insertAdjacentHTML("afterbegin", output);
});

"use strict";

function _classCallCheck(t, e) {
	if (!(t instanceof e))
		throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(t, e) {
	for (var n = 0; n < e.length; n++) {
		var a = e[n];
		a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
	}
}

function _createClass(t, e, n) {
	return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t
}
var LeftSidebar = function() {
		function t() {
			_classCallCheck(this, t), this.body = $("body"), this.window = $(window)
		}
		return _createClass(t, [{
			key: "initMenu",
			value: function() {
				var n, a, e, i, o, r = this;
				$(".button-menu-mobile").on("click", function(t) {
					t.preventDefault(), r.body.toggleClass("sidebar-enable")
				}), $("#side-menu").length && ((i = $("#side-menu li .collapse")).on({
					"show.bs.collapse": function(t) {
						t = $(t.target).parents(".collapse.show");
						$("#side-menu .collapse.show").not(t).collapse("hide")
					}
				}), $("#side-menu a").each(function() {
					var t = window.location.href.split(/[?#]/)[0];
					this.href == t && ($(this).addClass("active"), $(this).parent().addClass("menuitem-active"), $(this).parent().parent().parent().addClass("show"), $(this).parent().parent().parent().parent().addClass("menuitem-active"), "sidebar-menu" !== (t = $(this).parent().parent().parent().parent().parent().parent()).attr("id") && t.addClass("show"), $(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active"), "wrapper" !== (t = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent()).attr("id") && t.addClass("show"), (t = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent()).is("body") || t.addClass("menuitem-active"))
				})), $("#two-col-sidenav-main").length && (n = $("#two-col-sidenav-main .nav-link"), a = $(".twocolumn-menu-item"), e = $(".twocolumn-menu-item .nav-second-level"), (i = $("#two-col-menu li .collapse")).on({
					"show.bs.collapse": function() {
						var t = $(this).closest(e).closest(e).find(i);
						(t.length ? t : i).not($(this)).collapse("hide")
					}
				}), n.on("click", function(t) {
					var e = $($(this).attr("href"));
					return !e.length || (t.preventDefault(), n.removeClass("active"), $(this).addClass("active"), a.removeClass("d-block"), e.addClass("d-block"), $.LayoutThemeApp.leftSidebar.changeSize("default"), !1)
				}), o = window.location.href, n.each(function() {
					this.href === o && $(this).addClass("active")
				}), $("#two-col-menu a").each(function() {
					var t, e, n;
					this.href == o && ($(this).addClass("active"), $(this).parent().addClass("menuitem-active"), $(this).parent().parent().parent().addClass("show"), $(this).parent().parent().parent().parent().addClass("menuitem-active"), "sidebar-menu" !== (t = $(this).parent().parent().parent().parent().parent().parent()).attr("id") && t.addClass("show"), $(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active"), "wrapper" !== (t = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent()).attr("id") && t.addClass("show"), (t = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent()).is("body") || t.addClass("menuitem-active"), e = null, n = "#" + $(this).parents(".twocolumn-menu-item").attr("id"), $("#two-col-sidenav-main .nav-link").each(function() {
						$(this).attr("href") === n && (e = $(this))
					}), e && e.trigger("click"))
				}))
			}
		}, {
			key: "init",
			value: function() {
				this.initMenu()
			}
		}]), t
	}(),
	Topbar = function() {
		function t() {
			_classCallCheck(this, t), this.body = $("body"), this.window = $(window)
		}
		return _createClass(t, [{
			key: "toggleRightSideBar",
			value: function() {
				document.body.classList.contains("right-bar-enabled") ? document.body.classList.remove("right-bar-enabled") : document.body.classList.add("right-bar-enabled")
			}
		}, {
			key: "initMenu",
			value: function() {
				var t = this;
				null !== (e = document.querySelector(".right-bar-toggle")) && void 0 !== e && e.addEventListener("click", function() {
					t.toggleRightSideBar()
				}), $("#top-search").on("click", function(t) {
					$("#search-dropdown").addClass("d-block")
				}), $(".topbar-dropdown").on("show.bs.dropdown", function() {
					$("#search-dropdown").removeClass("d-block")
				}), $(".navbar-nav a").each(function() {
					var t, e = window.location.href.split(/[?#]/)[0];
					this.href == e && ($(this).addClass("active"), $(this).parent().addClass("active"), $(this).parent().parent().addClass("active"), $(this).parent().parent().parent().addClass("active"), $(this).parent().parent().parent().parent().addClass("active"), $(this).parent().parent().parent().parent().hasClass("mega-dropdown-menu") ? ($(this).parent().parent().parent().parent().parent().addClass("active"), $(this).parent().parent().parent().parent().parent().parent().addClass("active")) : (t = $(this).parent().parent()[0].querySelector(".dropdown-item")) && (e = window.location.href.split(/[?#]/)[0], t.href != e && !t.classList.contains("dropdown-toggle") || t.classList.add("active")), (t = $(this).parent().parent().parent().parent().addClass("active").prev()).hasClass("nav-link") && t.addClass("active"))
				}), $(".navbar-toggle").on("click", function(t) {
					$(this).toggleClass("open"), $("#navigation").slideToggle(400)
				});
				var e = document.querySelectorAll("ul.navbar-nav .dropdown .dropdown-toggle"),
					a = !1;
				e.forEach(function(n) {
					n.addEventListener("click", function(t) {
						var e;
						n.parentElement.classList.contains("nav-item") || (a = !0, n.parentElement.parentElement.classList.add("show"), (e = n.parentElement.parentElement.parentElement.querySelector(".nav-link")).ariaExpanded = !0, e.classList.add("show"), bootstrap.Dropdown.getInstance(n).show())
					}), n.addEventListener("hide.bs.dropdown", function(t) {
						a && (t.preventDefault(), t.stopPropagation(), a = !1)
					})
				})
			}
		}, {
			key: "init",
			value: function() {
				this.initMenu()
			}
		}]), t
	}(),
	RightSidebar = function() {
		function t() {
			_classCallCheck(this, t), this.body = $("body"), this.window = $(window)
		}
		return _createClass(t, [{
			key: "init",
			value: function() {
				$(document).on("click", "body", function(t) {
					1 !== $(t.target).closest("#top-search").length && $("#search-dropdown").removeClass("d-block"), 0 < $(t.target).closest(".right-bar-toggle, .right-bar").length || 0 < $(t.target).closest(".left-side-menu, .side-nav").length || $(t.target).hasClass("button-menu-mobile") || 0 < $(t.target).closest(".button-menu-mobile").length || ($("body").removeClass("right-bar-enabled"), $("body").removeClass("sidebar-enable"))
				})
			}
		}]), t
	}(),
	ThemeCustomizer = function() {
		function t() {
			_classCallCheck(this, t), this.body = document.body, this.defaultConfig = {
				leftbar: {
					color: "light",
					size: "default",
					position: "fixed"
				},
				layout: {
					color: "light",
					size: "fluid",
					mode: "default"
				},
				topbar: {
					color: "light"
				},
				sidebar: {
					user: !0
				}
			}
		}
		return _createClass(t, [{
			key: "initConfig",
			value: function() {
				var t, e = JSON.parse(JSON.stringify(this.defaultConfig));
				e.leftbar.color = null !== (t = this.body.getAttribute("data-leftbar-color")) && void 0 !== t ? t : this.defaultConfig.leftbar.color, e.leftbar.size = null !== (t = this.body.getAttribute("data-leftbar-size")) && void 0 !== t ? t : this.defaultConfig.leftbar.size, e.leftbar.position = null !== (t = this.body.getAttribute("data-leftbar-position")) && void 0 !== t ? t : this.defaultConfig.leftbar.position, e.layout.color = null !== (t = this.body.getAttribute("data-layout-color")) && void 0 !== t ? t : this.defaultConfig.layout.color, e.layout.size = null !== (t = this.body.getAttribute("data-layout-size")) && void 0 !== t ? t : this.defaultConfig.layout.size, e.layout.mode = null !== (t = this.body.getAttribute("data-layout-mode")) && void 0 !== t ? t : this.defaultConfig.layout.mode, e.topbar.color = null !== (t = this.body.getAttribute("data-topbar-color")) && void 0 !== t ? t : this.defaultConfig.topbar.color, e.sidebar.user = null !== (t = this.body.getAttribute("data-sidebar-user")) && void 0 !== t ? t : this.defaultConfig.sidebar.user, this.defaultConfig = JSON.parse(JSON.stringify(e)), this.config = e, this.setSwitchFromConfig()
			}
		}, {
			key: "changeLeftbarColor",
			value: function(t) {
				this.config.leftbar.color = t, this.body.setAttribute("data-leftbar-color", t), this.setSwitchFromConfig()
			}
		}, {
			key: "changeLeftbarPosition",
			value: function(t) {
				this.config.leftbar.position = t, this.body.setAttribute("data-leftbar-position", t), this.setSwitchFromConfig()
			}
		}, {
			key: "changeLeftbarSize",
			value: function(t) {
				this.config.leftbar.size = t, this.body.setAttribute("data-leftbar-size", t), this.setSwitchFromConfig()
			}
		}, {
			key: "changeLayoutMode",
			value: function(t) {
				this.config.layout.mode = t, this.body.setAttribute("data-layout-mode", t), this.setSwitchFromConfig()
			}
		}, {
			key: "changeLayoutColor",
			value: function(t) {
				this.config.layout.color = t, this.body.setAttribute("data-layout-color", t), this.setSwitchFromConfig()
			}
		}, {
			key: "changeLayoutSize",
			value: function(t) {
				this.config.layout.size = t, this.body.setAttribute("data-layout-size", t), this.setSwitchFromConfig()
			}
		}, {
			key: "changeTopbarColor",
			value: function(t) {
				this.config.topbar.color = t, this.body.setAttribute("data-topbar-color", t), this.setSwitchFromConfig()
			}
		}, {
			key: "changeSidebarUser",
			value: function(t) {
				(this.config.sidebar.user = t) ? this.body.setAttribute("data-sidebar-user", t): this.body.removeAttribute("data-sidebar-user"), this.setSwitchFromConfig()
			}
		}, {
			key: "resetTheme",
			value: function() {
				this.config = JSON.parse(JSON.stringify(this.defaultConfig)), this.changeLeftbarColor(this.config.leftbar.color), this.changeLeftbarPosition(this.config.leftbar.position), this.changeLeftbarSize(this.config.leftbar.size), this.changeLayoutColor(this.config.layout.color), this.changeLayoutSize(this.config.layout.size), this.changeLayoutMode(this.config.layout.mode), this.changeTopbarColor(this.config.topbar.color), this.changeSidebarUser(this.config.sidebar.user)
			}
		}, {
			key: "initSwitchListener",
			value: function() {
				var t, n = this;
				document.querySelectorAll("input[name=leftbar-color]").forEach(function(e) {
					e.addEventListener("change", function(t) {
						n.changeLeftbarColor(e.value)
					})
				}), document.querySelectorAll("input[name=leftbar-size]").forEach(function(e) {
					e.addEventListener("change", function(t) {
						n.changeLeftbarSize(e.value)
					})
				}), document.querySelectorAll("input[name=leftbar-position]").forEach(function(e) {
					e.addEventListener("change", function(t) {
						n.changeLeftbarPosition(e.value)
					})
				}), document.querySelectorAll("input[name=layout-color]").forEach(function(e) {
					e.addEventListener("change", function(t) {
						n.changeLayoutColor(e.value)
					})
				}), document.querySelectorAll("input[name=layout-size]").forEach(function(e) {
					e.addEventListener("change", function(t) {
						n.changeLayoutSize(e.value)
					})
				}), document.querySelectorAll("input[name=layout-mode]").forEach(function(e) {
					e.addEventListener("change", function(t) {
						n.changeLayoutMode(e.value)
					})
				}), document.querySelectorAll("input[name=topbar-color]").forEach(function(e) {
					e.addEventListener("change", function(t) {
						n.changeTopbarColor(e.value)
					})
				}), document.querySelectorAll("input[name=sidebar-user]").forEach(function(e) {
					e.addEventListener("change", function(t) {
						n.changeSidebarUser(e.checked)
					})
				}), null !== (t = document.querySelector("#resetBtn")) && void 0 !== t && t.addEventListener("click", function(t) {
					n.resetTheme()
				}), null !== (t = document.querySelector(".button-menu-mobile")) && void 0 !== t && t.addEventListener("click", function() {})
			}
		}, {
			key: "setSwitchFromConfig",
			value: function() {
				document.querySelectorAll(".right-bar input[type=checkbox]").forEach(function(t) {
					t.checked = !1
				});
				var t, e, n, a, i, o, r, s, l = this.config;
				l && (t = document.querySelector("input[type=checkbox][name=leftbar-color][value=" + l.leftbar.color + "]"), e = document.querySelector("input[type=checkbox][name=leftbar-size][value=" + l.leftbar.size + "]"), n = document.querySelector("input[type=checkbox][name=leftbar-position][value=" + l.leftbar.position + "]"), a = document.querySelector("input[type=checkbox][name=layout-color][value=" + l.layout.color + "]"), i = document.querySelector("input[type=checkbox][name=layout-size][value=" + l.layout.size + "]"), o = document.querySelector("input[type=checkbox][name=layout-mode][value=" + l.layout.type + "]"), r = document.querySelector("input[type=checkbox][name=topbar-color][value=" + l.topbar.color + "]"), s = document.querySelector("input[type=checkbox][name=sidebar-user]"), t && (t.checked = !0), e && (e.checked = !0), n && (n.checked = !0), a && (a.checked = !0), i && (i.checked = !0), o && (o.checked = !0), r && (r.checked = !0), s && "true" === l.sidebar.user.toString() && (s.checked = !0))
			}
		}, {
			key: "init",
			value: function() {
				this.initConfig(), this.initSwitchListener()
			}
		}]), t
	}(),
	Layout = function() {
		function t() {
			_classCallCheck(this, t)
		}
		return _createClass(t, [{
			key: "init",
			value: function() {
				this.themeCustomizer = new ThemeCustomizer, this.themeCustomizer.init(), this.leftSidebar = new LeftSidebar, this.topbar = new Topbar, this.rightSidebar = new RightSidebar(this), this.rightSidebar.init(), this.topbar.init(), this.leftSidebar.init()
			}
		}]), t
	}();
window.addEventListener("DOMContentLoaded", function(t) {
		(new Layout).init()
	}),
	function(o) {
		function t() {}
		t.prototype.initTooltipPlugin = function() {
			o.fn.tooltip && o('[data-bs-toggle="tooltip"]').tooltip()
		}, t.prototype.initPopoverPlugin = function() {
			o.fn.popover && o('[data-bs-toggle="popover"]').popover()
		}, t.prototype.initToastPlugin = function() {
			o.fn.toast && o('[data-bs-toggle="toast"]').toast()
		}, t.prototype.initFormValidation = function() {
			o(".needs-validation").on("submit", function(t) {
				return o(this).addClass("was-validated"), !1 !== o(this)[0].checkValidity() || (t.preventDefault(), t.stopPropagation(), !1)
			})
		}, t.prototype.initCounterUp = function() {
			var n = o(this).attr("data-delay") ? o(this).attr("data-delay") : 100,
				a = o(this).attr("data-time") ? o(this).attr("data-time") : 1200;
			o('[data-plugin="counterup"]').each(function(t, e) {
				o(this).counterUp({
					delay: n,
					time: a
				})
			})
		}, t.prototype.initPeityCharts = function() {
			o('[data-plugin="peity-pie"]').each(function(t, e) {
				var n = o(this).attr("data-colors") ? o(this).attr("data-colors").split(",") : [],
					a = o(this).attr("data-width") ? o(this).attr("data-width") : 20,
					i = o(this).attr("data-height") ? o(this).attr("data-height") : 20;
				o(this).peity("pie", {
					fill: n,
					width: a,
					height: i
				})
			}), o('[data-plugin="peity-donut"]').each(function(t, e) {
				var n = o(this).attr("data-colors") ? o(this).attr("data-colors").split(",") : [],
					a = o(this).attr("data-width") ? o(this).attr("data-width") : 20,
					i = o(this).attr("data-height") ? o(this).attr("data-height") : 20;
				o(this).peity("donut", {
					fill: n,
					width: a,
					height: i
				})
			}), o('[data-plugin="peity-donut-alt"]').each(function(t, e) {
				o(this).peity("donut")
			}), o('[data-plugin="peity-line"]').each(function(t, e) {
				o(this).peity("line", o(this).data())
			}), o('[data-plugin="peity-bar"]').each(function(t, e) {
				var n = o(this).attr("data-colors") ? o(this).attr("data-colors").split(",") : [],
					a = o(this).attr("data-width") ? o(this).attr("data-width") : 20,
					i = o(this).attr("data-height") ? o(this).attr("data-height") : 20;
				o(this).peity("bar", {
					fill: n,
					width: a,
					height: i
				})
			})
		}, t.prototype.initKnob = function() {
			o('[data-plugin="knob"]').each(function(t, e) {
				o(this).knob()
			})
		}, t.prototype.initTippyTooltips = function() {
			0 < o('[data-plugin="tippy"]').length && tippy('[data-plugin="tippy"]')
		}, t.prototype.initShowPassword = function() {
			o("[data-password]").on("click", function() {
				"false" == o(this).attr("data-password") ? (o(this).siblings("input").attr("type", "text"), o(this).attr("data-password", "true"), o(this).addClass("show-password")) : (o(this).siblings("input").attr("type", "password"), o(this).attr("data-password", "false"), o(this).removeClass("show-password"))
			})
		}, t.prototype.initMultiDropdown = function() {
			o(".dropdown-menu a.dropdown-toggle").on("click", function(t) {
				return o(this).next().hasClass("show") || o(this).parents(".dropdown-menu").first().find(".show").removeClass("show"), o(this).next(".dropdown-menu").toggleClass("show"), !1
			})
		}, t.prototype.init = function() {
			this.initTooltipPlugin(), this.initPopoverPlugin(), this.initToastPlugin(), this.initFormValidation(), this.initCounterUp(), this.initPeityCharts(), this.initKnob(), this.initTippyTooltips(), this.initShowPassword(), this.initMultiDropdown()
		}, o.Components = new t, o.Components.Constructor = t
	}(window.jQuery),
	function(a) {
		function t() {
			this.$body = a("body"), this.$portletIdentifier = ".card", this.$portletCloser = '.card a[data-toggle="remove"]', this.$portletRefresher = '.card a[data-toggle="reload"]'
		}
		t.prototype.init = function() {
			var n = this;
			a(document).on("click", this.$portletCloser, function(t) {
				t.preventDefault();
				var e = a(this).closest(n.$portletIdentifier),
					t = e.parent();
				e.remove(), 0 == t.children().length && t.remove()
			}), a(document).on("click", this.$portletRefresher, function(t) {
				t.preventDefault();
				t = a(this).closest(n.$portletIdentifier);
				t.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');
				var e = t.find(".card-disabled");
				setTimeout(function() {
					e.fadeOut("fast", function() {
						e.remove()
					})
				}, 500 + 5 * Math.random() * 300)
			})
		}, a.Portlet = new t, a.Portlet.Constructor = t
	}(window.jQuery),
	function(n) {
		function t() {
			this.$body = n("body"), this.$window = n(window)
		}
		t.prototype.initControls = function() {
			function t() {
				document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || n("body").removeClass("fullscreen-enable")
			}
			setTimeout(function() {
				document.body.classList.remove("loading")
			}, 350), n(window).on("load", function() {
				n("#status").fadeOut(), n("#preloader").delay(350).fadeOut("slow")
			}), n('[data-toggle="fullscreen"]').on("click", function(t) {
				t.preventDefault(), n("body").toggleClass("fullscreen-enable"), document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
			}), document.addEventListener("fullscreenchange", t), document.addEventListener("webkitfullscreenchange", t), document.addEventListener("mozfullscreenchange", t)
		}, t.prototype.init = function() {
			n.Portlet.init(), n.Components.init(), this.initControls();
			[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(t) {
				return new bootstrap.Popover(t)
			}), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(t) {
				return new bootstrap.Tooltip(t)
			}), [].slice.call(document.querySelectorAll(".toast")).map(function(t) {
				return new bootstrap.Toast(t)
			});
			var t = document.getElementById("toastPlacement");
			t && document.getElementById("selectToastPlacement").addEventListener("change", function() {
				t.dataset.originalClass || (t.dataset.originalClass = t.className), t.className = t.dataset.originalClass + " " + this.value
			});
			var a = document.getElementById("liveAlertPlaceholder"),
				e = document.getElementById("liveAlertBtn");
			e && e.addEventListener("click", function() {
				var t, e, n;
				t = "Nice, you triggered this alert message!", e = "primary", (n = document.createElement("div")).innerHTML = '<div class="alert alert-' + e + ' alert-dismissible" role="alert">' + t + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>', a.append(n)
			}), document.getElementById("app-style").href.includes("rtl.min.css") && (document.getElementsByTagName("html")[0].dir = "rtl")
		}, n.App = new t, n.App.Constructor = t
	}(window.jQuery), window.jQuery.App.init(), Waves.init(), feather.replace();

function createCommentBox() {
	var cardDiv = document.createElement("div");
	cardDiv.className = "card";
	
	var form = document.createElement("form");
	form.method = "post";
	form.className = "card-body";
	
	var span = document.createElement("span");
	span.className = "input-icon icon-end";
	
	var textarea = document.createElement("textarea");
	textarea.rows = "3";
	textarea.className = "form-control";
	textarea.placeholder = "Post a new message";
	
	var div = document.createElement("div");
	div.className = "pt-1 float-end";
	
	var link = document.createElement("a");
	link.href = "";
	link.className = "btn btn-primary btn-sm waves-effect waves-light";
	link.innerHTML = "Send";
	
	var ul = document.createElement("ul");
	ul.className = "nav nav-pills profile-pills mt-1";
	
	var icons = ["fa fa-user", "fa fa-location-arrow", "fa fa-camera", "far fa-smile"];
	
	for (var i = 0; i < icons.length; i++) {
		var li = document.createElement("li");
		li.className = "mx-3";
		
		var a = document.createElement("a");
		a.href = "#";
		
		var icon = document.createElement("i");
		icon.className = icons[i];
		
		a.appendChild(icon);
		li.appendChild(a);
		ul.appendChild(li);
	}
	
	form.appendChild(span);
	span.appendChild(textarea);
	div.appendChild(link);
	form.appendChild(div);
	form.appendChild(ul);
	cardDiv.appendChild(form);
	
}
//# sourceMappingURL=app.min.js.map