$(function() {
  function e() {
    $('.js-scheme-svg-item[data-id="' + B + '"]').attr("class", function(e, t) {
      return t.replace("is-active", "")
    }), $(".scheme-svg__item--legend").show(), $(".darkened").remove(), t()
  }

  function t() {
    $("#scheme-popup").on("mouseenter", function() {
      $('.js-scheme-svg-item[data-id="' + g + '"]').attr("class", schemeSvgItemClasses + " is-active"), i()
    }).on("mouseleave", function() {
      l()
    }), $(".js-scheme-svg-item").on("mouseenter", function() {
      var e = $(this),
        t = e.data("id"),
        s = _.find(gon.schemeItems, function(e) {
          return e.id === t
        });
      s && (i(s, this), g = t)
    }).on("mouseleave", function() {
      $("#scheme-popup").is(":hover") || l(this)
    })
  }

  function s(e, t) {
    var s = [];
    return _.each(gon.schemeItems, function(a) {
      if (!e || a.type == e) {
        if (t)
          if (e && "Restaurant" == e) {
            if (t && !a.rest_type.includes(t)) return
          } else if (e && "Shop" == e) {
          if (t && !a.shop_type.includes(t)) return
        } else if (t && !a.second_type.includes(t)) return;
        _.each(a.entities, function(e) {
          var t = e.title + " " + a.floor + " \u044d\u0442.";
          s.push({
            label: t,
            value: e.title,
            floor: a.floor,
            id: a.id,
            entities: a.entities,
            icon: a.icon,
            tags: [t, _.values(a.entities[0].second_title), _.values(a.entities[0].phrases), a.search_phrases].flat().join(" ")
          })
        })
      }
    }), s
  }

  function a(e, t) {
    $(".scheme-svg__item").attr("class", function(e, t) {
      return t.replace("is-selected", "")
    }), $(".js-scheme-floor-nav").find("span.dot").hide();
    var s = new RegExp($.ui.autocomplete.escapeRegex(t), "i");
    e = $.grep(e, function(e) {
      return s.test(e.tags || e.label || e.value || e)
    }), e.sort(function(e, t) {
      return e.label.toLowerCase() < t.label.toLowerCase() ? -1 : e.label.toLowerCase() > t.label.toLowerCase() ? 1 : 0
    }), t.length > 0 && e.sort(function(e, s) {
      return e.label.substring(0, t.length).toLowerCase() == t.toLowerCase() && s.label.substring(0, t.length).toLowerCase() != t.toLowerCase() ? -1 : e.label.substring(0, t.length).toLowerCase() != t.toLowerCase() && s.label.substring(0, t.length).toLowerCase() == t.toLowerCase() ? 1 : 0
    });
    var a = R.attr("data-step");
    if (t.length > 0 || b.hasClass("filtered") && b.attr("data-filter").length > 0 && ("final" == a || "sub_final" == a)) {
      var i = e.map(function(e) {
        return e.floor
      }).filter(r);
      b.attr("data-floors", i.join(",")), i.forEach(function(e) {
        $(".js-scheme-floor-nav[data-floor='" + e + "']").find("span.dot").show()
      });
      var l = e.map(function(e) {
        return e.id
      }).filter(r);
      l.forEach(function(e) {
        $(".scheme-svg__item[data-id='" + e + "']").attr("class", function(e, t) {
          return t + " is-selected"
        })
      })
    } else t.length < 1 && (e = [], b.autocomplete("close"));
    return e
  }

  function i(e, t) {
    var s = $("#scheme-popup"), headerHeight, header;
    t && (m = parseInt(t.getBoundingClientRect().top + 5), p = parseInt(t.getBoundingClientRect().left + (t.getBoundingClientRect().right - t.getBoundingClientRect().left) / 2)), v && v.includes(e.id) && _.each(v, function(e) {
      $('.js-scheme-svg-item[data-id="' + e + '"]').attr("class", function(e, t) {
        return t + " is-active";
      })
    }), s.is(":hover") || ($(".scheme-popup__list").empty(), e && _.each(e.entities, function(e) {
      n(e)
      var header = document.querySelector('.wrapper-menu');
      if(!header) {
        headerHeight = 0 ;
      }
      else {
        headerHeight = parseInt(header.getBoundingClientRect().height);
      }
      m -= headerHeight;
    })), s.css({
      display: "block",
      top: m - 15 + "px",
      left: p + "px"
    }), "free_bus" == $("#scheme-popup").attr("data-title") && $("#scheme-popup").css({
      display: "block",
      top: m + 45 + "px",
      left: p + 205 + "px"
    }), $(t).attr("class", function(e, t) {
      return t + " is-active"
    })
  }

  function l() {
    $("#scheme-popup").css("display", "none"), $(".js-scheme-svg-item").attr("class", function(e, t) {
      return t.replace("is-active", "")
    })
  }

  function o(e) {
    var t = $("#scheme-floors-select"),
      s = $('.js-scheme-floor-nav[data-floor="' + e.floor + '"]'),
      a = $('.js-scheme-svg-item[data-id="' + e.id + '"]');
    t.val(e.floor), t.change(), s.click(), a.attr("class", function(e, t) {
      return t + " is-active"
    }), Modernizr.touchevents ? i(e) : i(e, a[0])
  }

  function n(e) {
    var t = $(".scheme-popup__list");
    $(".scheme-popup").attr("data-title", "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u0430\u0432\u0442\u043e\u0431\u0443\u0441\u044b" == e.title ? "free_bus" : "");
    var s = "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443";
    "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u0430\u0432\u0442\u043e\u0431\u0443\u0441\u044b" == e.title && (s = "\u041a\u0430\u043a \u0434\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u043c \u0430\u0432\u0442\u043e\u0431\u0443\u0441\u0435"), t.append("<li><div class='scheme-popup__box'><h5 class='scheme-popup__title'>" + e.title + "</h5><img width='40' height='40' alt='' class='scheme-popup__logo' src='../../img/shop-mobile-cropp@1x.png'></div><div class='scheme-popup__info'></div></li>"), e.url && t.find(".scheme-popup__info").append("<a class='scheme-popup__goto' href='" + e.url + "' target='_blank'><span>" + s + "</span><i class='mdi mdi-arrow-right'></i></a>")
  }

  function r(e, t, s) {
    return s.indexOf(e) === t
  }

  function c(e) {
    I.toggleClass("show", e), x.toggleClass("filtered", e), w.toggleClass("show--sm", e), M.toggleClass("show", e), d(!e)
  }

  function d(e) {
    e ? (j.addClass("filter-hidden search-hidden"), w.addClass("rotate"), M.css("height", "auto")) : (j.removeClass("filter-hidden search-hidden"), w.removeClass("rotate"), M.css("height", "auto"))
  }

  function h() {
    R.attr("data-step", "main"), I.find(".sub-menu").hide(), y.attr("data-filter", ""), y.attr("data-tab", ""), I.find(".scheme__filter_item").show(), y.attr("placeholder", "\u041f\u043e\u0438\u0441\u043a \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u043e\u0432 \u0438 \u0443\u0441\u043b\u0443\u0433"), $(".search_autocomplete").removeClass("filtered"), S.html("")
  }

  function f(e, t) {
    y.attr("data-filter", e), y.attr("data-tab", t)
  }

  function u() {
    $(".scheme-svg__item").attr("class", function(e, t) {
      return t.replace("is-selected", "")
    }), $(".js-scheme-floor-nav").find("span.dot").hide(), y.attr("data-floors", ""), $("#scheme-popup").css("display", "none"), $(".js-scheme-svg-item").attr("class", function(e, t) {
      return t.replace("is-active", "")
    })
  }
  var m, p, g = gon.id,
    v = gon.atm_ids,
    C = s(null, null),
    b = $(".js-scheme-search"),
    w = $(".button.hide-filter"),
    j = $("#scheme_filters"),
    k = $(".js-scheme-search"),
    y = $(".scheme-search__input"),
    I = $(".scheme__filter"),
    L = $(".scheme-search__filter"),
    R = $(".scheme-search__filter--back"),
    x = $(".scheme-popup"),
    S = $(".scheme__filter_item--current_category"),
    w = $(".button.hide-filter"),
    M = $(".scheme__filter--block"),
    j = $("#scheme_filters"),
    E = $(".scheme-search__submit"),
    O = !1;
  if (Modernizr.touchevents) interact(".js-scheme-svg-item").on("tap", function(e) {
    var t = $(e.currentTarget),
      s = t.data("id"),
      a = _.find(gon.schemeItems, function(e) {
        return e.id === s
      });
    $(".js-scheme-svg-item").not(t).attr("class", schemeSvgItemClasses), t.attr("class", function(e, t) {
      return t + " is-active"
    }), a ? i(a) : l()
  }), $("#scheme-popup-close").on("click", function() {
    return l(), $(".js-scheme-svg-item").attr("class", schemeSvgItemClasses), !1
  });
  else {
    var T = location.href.split("="),
      B = T[T.length - 1];
    if (location.href.indexOf("id"), location.href.indexOf("id") > -1) {
      var N = $('.js-scheme-svg-item[data-id="' + B + '"]'),
        z = $("<rect />");
      z.attr("x", "-200%"), z.attr("y", 0), z.attr("width", "500%"), z.attr("height", "500%"), z.attr("opacity", .4), z.attr("class", "darkened");
      var D = N.closest("g");
      if (2004 == N.attr("data-id")) {
        var D = N.closest("g:first");
        $(".darkened").remove()
      }
      N.appendTo(D), N.attr("class", function(e, t) {
        return t + " is-active"
      }), N.before(z), $(".scheme-svg__item--legend").hide(), $("#scheme-svg").html($("#scheme-svg").html()), $(document).trigger("reinitSvg"), 2004 == N.attr("data-id") && ($(".darkened:last").remove(), $(".darkened:last").remove()), $(document).click(function(t) {
        $(t.target).closest('.js-scheme-svg-item[data-id="' + B + '"]').length || e()
      }), $(".button--tertiary-icon").on("mouseup", function() {
        e()
      })
    } else t()
  }
  if (b.autocomplete({
      appendTo: "#scheme_filters",
      minLength: 0,
      source: function(e, t) {
        C = b.attr("data-filter") && b.attr("data-tab") ? s(b.attr("data-filter"), b.attr("data-tab")) : s(b.attr("data-filter"), null), t(a(C, e.term))
      },
      focus: function(e) {
        $(e.target).addClass("is-open")
      },
      select: function(e, t) {
        if (t.item) {
          if ($(".js-scheme-floor-nav").find("span.dot").hide(), b.val(t.item.value).trigger("change"), b.autocomplete("search"), b.attr("data-floors", ""), $(".js-scheme-svg-item").attr("class", schemeSvgItemClasses), o(t.item), MODERNIZR_MQ_SM) {
            j.toggleClass("search-hidden", !0);
            var s = R.attr("data-step");
            ("main" == s || "sub" == s) && j.toggleClass("filter-hidden", !0), w.addClass("rotate")
          } else k.autocomplete("close"), c(!1), d(!0), y.toggleClass("filtered", !1), h(), L.find("i.mdi").toggleClass("mdi-filter", !0).toggleClass("mdi-filter-remove", !1);
          return !1
        }
      },
      create: function() {},
      open: function(e) {
        $(e.target).addClass("is-open"), $(".scheme__filter--block").toggleClass("show", !0), b.hasClass("filtered") && $("#scheme_filters").addClass("filter-hidden")
      },
      close: function(e) {
        $(e.target).removeClass("is-open"), b.hasClass("filtered") ? w.hasClass("rotate") || $("#scheme_filters").removeClass("filter-hidden") : $(".scheme__filter--block").toggleClass("show", !1)
      }
    })
  )
  $("#scheme-floors-select").on("select2:closing", function() {
    $("#select2-scheme-floors-select-results li").each(function() {
      if ($(this).find(".dot").remove(), b.val().length > 0 || b.hasClass("filtered") && b.attr("data-filter").length > 0) {
        var e = C.map(function(e) {
          return e.floor
        }).filter(r);
        b.attr("data-floors", e.join(",")), e.forEach(function(e) {
          $(".js-scheme-floor-nav[data-floor='" + e + "']").find("span.dot").show()
        });
        var t = C.map(function(e) {
          return e.id
        }).filter(r);
        t.forEach(function(e) {
          $(".scheme-svg__item[data-id='" + e + "']").attr("class", function(e, t) {
            return t + " is-selected"
          })
        })
      }
    })
  }), L.click(function() {
    y.hasClass("filtered") ? (k.autocomplete("close"), c(!1), u(), d(!0)) : (u(), y.attr("placeholder", "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e").attr("value", ""), y.val("").trigger("change"), c(!0)), y.toggleClass("filtered"), h(), $(this).find("i.mdi").toggleClass("mdi-filter").toggleClass("mdi-filter-remove")
  }), R.click(function() {
    var e = $(this).attr("data-step");
    "final" == e || "sub" == e ? (I.addClass("show"), u(), h()) : "sub_final" == $(this).attr("data-step") && ($(".search_autocomplete").removeClass("filtered"), u(), $(this).attr("data-step", "sub"), y.attr("data-tab", ""), I.toggleClass("show"), y.attr("placeholder", $(this).attr("data-back"))), k.autocomplete("close"), y.val(""), d(!1)
  }), I.find(" > li").click(function() {
    var e = $(this).attr("data-title");
    $(this).hasClass("scheme__filter--default") ? (R.attr("data-step", "final"), I.toggleClass("show"), f($(this).attr("data-tag"), null), k.autocomplete("search"), $(".search_autocomplete").addClass("filtered")) : $(this).hasClass("scheme__filter--with_sub") && (R.attr("data-step", "sub"), $(this).parent().find(".scheme__filter_item").hide(), $(this).parent().find(".sub-menu[data-sub='" + $(this).attr("data-tag") + "']").show(), f($(this).attr("data-tag"), null)), R.attr("data-back", e), y.attr("placeholder", e), S.html($(this).html())
  }), I.find(".sub-menu > li").click(function() {
    var e = $(this).attr("data-sub-tag"),
      t = $(this).attr("data-title");
    R.attr("data-step", "sub_final"), f(y.attr("tag-filter"), e), I.toggleClass("show"), k.autocomplete("search"), y.attr("placeholder", t), $(".search_autocomplete").addClass("filtered"), S.html($(this).html())
  }), w.click(function() {
    d(w.hasClass("rotate") ? !1 : !0)
  }), $("#scheme-floors-select").on("select2:opening", function() {
    var e = [],
      t = setInterval(function() {
        if ($("#select2-scheme-floors-select-results li").length) {
          clearInterval(t);
          var s = 3;
          0 != y.attr("data-floors").length && (e = y.attr("data-floors").split(","), $("#select2-scheme-floors-select-results li").each(function(t) {
            e.includes(s.toString()) && ($(this).append("<span class='dot' style='display: block'></span>"), $(this).attr("data-floor", s)), 5 == t ? s = 3 : s--
          }))
        }
      }, 100)
  }), k.focus(function() {
    E.find(".mdi").removeClass("mdi-magnify").addClass("mdi-close")
  }).focusout(function() {
    $(this).val().length < 1 && (u(), E.find(".mdi").addClass("mdi-magnify").removeClass("mdi-close"))
  }).on("input", function() {
    $(this).val().length < 1 ? (u(), k.autocomplete("close")) : (console.log("<1"), MODERNIZR_MQ_SM || d(!1))
  }), E.on("mouseup", function() {
    O ? k.focus() : k.hasClass("filtered") && ["final", "sub_final"].includes(R.attr("data-step")) && k.autocomplete("search")
  }), E.on("mousedown", function() {
    O = !1, $(this).find(".mdi").hasClass("mdi-close") ? (u(), $(this).find(".mdi").addClass("mdi-magnify").removeClass("mdi-close"), k.val().length > 0 && k.val("").change()) : $(this).find(".mdi").hasClass("mdi-magnify") && (O = !0)
  })
});
