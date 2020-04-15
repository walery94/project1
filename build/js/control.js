$(function() {
  function t(t) {
    1 > t ? ($(".controls-block").hide(), $(".scheme-svg__wc").hide(), ($(".controls-block__icon--wifi").hasClass(h) && 1 > t || 0 > t) && $(".scheme-svg__item--floor, .js-scheme-svg-item").not('[data-type="atm"], [data-type="taxi"], [data-type="contact"]').removeAttr("style")) : ($(window).resize(function() {
      $(".controls-block").css($(window).width() < 767 ? {
        display: "none"
      } : {
        display: "flex"
      })
    }), $(".controls-block").css($(window).width() < 767 ? {
      display: "none"
    } : {
      display: "flex"
    }), $(".controls-block__icon--wifi").hasClass(h) && t >= 1 && $(".scheme-svg__item--floor, .js-scheme-svg-item").not('[data-type="atm"], [data-type="taxi"], [data-type="contact"]').css({
      fill: "#68d3ec"
    }), $(".controls-block__icon--wc").hasClass(h) && t >= 1 && $(".scheme-svg__wc").show()), 2 == t ? $(".controls-block__icon--atm").hide() : $(".controls-block__icon--atm").show()
  }

  function e(t) {
    return 2 === t.interaction.downEvent.button ? !1 : void 0
  }
  var o, s, a = 1,
    c = 1,
    i = $("#scheme-container");
  (MODERNIZR_MQ_SM || $(window).width() < 850) && (a = 1, o = 1, s = 6, c = 2, i.attr("data-scale", 2).css({
    transform: "matrix(2, 0, 0, 2, 0, 0)"
  }), $("#scheme-control-zoom-out").removeAttr("disabled"), i.bind("touchmove", !1)), MODERNIZR_MQ_MD && (o = .5, s = 2);
  var n = $("#scheme-svg"),
    l = $(".js-scheme-svg-floor"),
    r = $("#scheme-control-zoom-out"),
    d = $("#scheme-control-zoom-in");
  $("#mobile-menu").addClass("mobile-menu--scheme"), $("#scheme-floors-select").on("change", function() {
    var e = $(this).find("option:selected").attr("name");
    return $(".js-scheme-floor-nav").addClass("button--tertiary-icon"), $('.js-scheme-floor-nav[data-floor="' + e + '"').removeClass("button--tertiary-icon").addClass("button--flover-active"), 2 == e ? ($('#scheme-controls-select [value="atm"]').remove(), $(".select2-selection.icons").find(".mdi-credit-card").attr("class", " mdi mdi-wifi")) : $('#scheme-controls-select [value="atm"]').length || $('#scheme-controls-select [value="outdoor"]').after('<option data-icon="credit-card" value="atm"></option>'), $(".scheme__control--controls-dropdown").css(1 > e ? {
      display: "none"
    } : {
      display: "block"
    }), t(e), Modernizr.touchevents && ($("#scheme-popup").css("display", "none"), $(".js-scheme-svg-item").attr("class", schemeSvgItemClasses)), l.not("#scheme-svg-floor-" + e).css("visibility", "hidden"), n.find("#scheme-svg-floor-" + e).css("visibility", "visible"), !1
  }), $(document).on("reinitSvg", function() {
    n = $("#scheme-svg"), l = $(".js-scheme-svg-floor")
  });
  var m = $("#scheme-floors-nav").find(".js-scheme-floor-nav"),
    h = "controls-block__icon--isActive";
  $("#scheme-controls-select").on("change", function() {
    var t = $(this).find("option:selected").attr("value"),
      e = $(".scheme-floors-dropdown").find(".select2-selection__rendered").html();
    "wifi" == t && e > 0 ? $(".scheme-svg__item--floor, .js-scheme-svg-item").not('[data-type="atm"], [data-type="taxi"], [data-type="contact"]').css({
      fill: "#68d3ec"
    }) : $(".scheme-svg__item--floor, .js-scheme-svg-item").not('[data-type="atm"], [data-type="taxi"], [data-type="contact"]').removeAttr("style"), "outdoor" == t ? $(".scheme-svg__item--legend_outdoor").show() : $(".scheme-svg__item--legend_outdoor").hide(), $('[data-type="atm"]').find("path").css("atm" == t ? {
      fill: "#1AB6DB"
    } : {
      fill: "#fff"
    }), $('[data-type="wc"]').css("wc" == t ? {
      fill: "#1AB6DB"
    } : {
      fill: "#fff"
    })
  }), $(".controls-block__icon--wifi").on("click", function() {
    $(this).toggleClass(h), $(this).hasClass(h) ? $(".scheme-svg__item--floor, .js-scheme-svg-item").not('[data-type="atm"], [data-type="taxi"], [data-type="contact"]').css({
      fill: "#68d3ec"
    }) : $(".scheme-svg__item--floor, .js-scheme-svg-item").not('[data-type="atm"], [data-type="taxi"], [data-type="contact"]').removeAttr("style")
  }), $(".controls-block__icon--legends_outdoor").on("click", function() {
    $(this).toggleClass(h), $(this).hasClass(h) ? $(".scheme-svg__item--legend_outdoor").show() : $(".scheme-svg__item--legend_outdoor").hide()
  }), $(".controls-block__icon--atm").on("click", function() {
    $(this).toggleClass(h), $('[data-type="atm"]').find("path").css($(this).hasClass(h) ? {
      fill: "#1AB6DB"
    } : {
      fill: "#fff"
    })
  }), $(".controls-block__icon--wc").on("click", function() {
    $(this).toggleClass(h), $('[data-type="wc"]').css($(this).hasClass(h) ? {
      fill: "#1AB6DB"
    } : {
      fill: "#fff"
    })
  }), $(".scheme__control--search-mobile").on("click", function() {
    var t = $(".scheme__control--search");
    t.is(":visible") ? ($(this).removeClass("active"), t.removeClass("visible"), $(".scheme__control--menu, .scheme__control--search-mobile, .scheme .taxi-btn").css({
      top: "2rem"
    })) : ($(this).addClass("active"), t.addClass("visible"), t.slideDown(200), $(".scheme__control--menu, .scheme__control--search-mobile, .scheme .taxi-btn").css({
      top: "9rem"
    }))
  }), m.on("click", function() {
    var e = $(this),
      o = e.data("floor");
    return $("#scheme-floors-select").val(o).trigger("change"), t(o), m.not(e).removeClass("button--flover-active").addClass("button--tertiary-icon"), e.removeClass("button--tertiary-icon").addClass("button--flover-active"), $("#scheme-popup").css("display", "none"), l.not("#scheme-svg-floor-" + o).css("visibility", "hidden"), n.find("#scheme-svg-floor-" + o).css("visibility", "visible"), !1
  }), r.on("click", function() {
    var t = parseFloat(i.attr("data-scale"));
    return a >= t ? !1 : (i.attr("data-scale", t - o), i.css({
      transform: "matrix(" + (t - o) + ", 0, 0, " + (t - o) + ", 0, 0)"
    }), a + o >= t && $(this).attr("disabled", "disabled"), s >= t && d.removeAttr("disabled"), c = t - o, i.attr({
      "data-x": "0",
      "data-y": "0"
    }), !1)
  }), d.on("click", function() {
    var t = parseFloat(i.attr("data-scale"));
    return t >= s ? !1 : (i.attr("data-scale", t + o), i.css({
      transform: "matrix(" + (t + o) + ", 0, 0, " + (t + o) + ", 0, 0)"
    }), t >= s - o && $(this).attr("disabled", "disabled"), t >= a && r.removeAttr("disabled"), c = t + o, i.attr({
      "data-x": "0",
      "data-y": "0"
    }), !1)
  }), $("#scheme-control-close").on("click", function() {
    var t = document.referrer;
    return window.location.href = t ? t : "/", !1
  }), interact(i[0]).draggable({
    inertia: !0,
    restrict: {
      restriction: function(t, e, o) {
        var s = o.getBoundingClientRect(),
          a = s.width,
          c = s.height,
          i = $(window).width(),
          n = $(window).height(),
          l = {
            top: 0 > n - c ? n - c : 0,
            left: 0 > i - a ? i - a : 0,
            width: a > i ? Math.max(2 * a - i, i) : i,
            height: c > n ? Math.max(2 * c - n, n) : n
          };
        return {
          left: l.left,
          right: l.left + l.width,
          top: l.top,
          bottom: l.top + l.height
        }
      },
      endOnly: !0,
      elementRect: {
        top: 0,
        left: 0,
        bottom: 1,
        right: 1
      }
    },
    autoScroll: !0,
    onstart: function(t) {
      e(t)
    },
    onmove: function(t) {
      var o = t.target,
        s = (parseFloat(o.getAttribute("data-x")) || 0) + t.dx,
        a = (parseFloat(o.getAttribute("data-y")) || 0) + t.dy;
      o.style.webkitTransform = o.style.transform = "matrix(" + c + ", 0, 0, " + c + ", " + s + ", " + a + ")", o.setAttribute("data-x", s), o.setAttribute("data-y", a), e(t)
    }
  })
});
