(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    15: function(n, e, t) {
      n.exports = t(27);
    },
    21: function(n, e, t) {},
    27: function(n, e, t) {
      'use strict';
      t.r(e);
      var r = t(0),
        a = t.n(r),
        o = t(10),
        c = t.n(o),
        i = (t(21), t(5)),
        l = t(1),
        u = t(2),
        d = 'Image',
        f = [d, 'Icon'],
        s = {
          CreatorGradient: 'linear-gradient(52deg, #0270e1 20%, #009958 100%)',
          CreatorBlue: '#0270e1',
          CreatorGreen: '#009958',
          ListenerGradient: 'linear-gradient(52deg, #9f34a9 20%, #ff4600 100%)',
          ListenerPink: '#e8308d',
          ListenerPurple: '#6a12d2'
        },
        b = {
          stream: 'dashboxStream',
          listen: 'dashboxListen',
          notifications: 'dashboxNotifications',
          tags: 'dashboxTags'
        },
        m = t(13),
        p = t(3);
      function g() {
        var n = Object(l.a)([
          '\n      border-color: ',
          ';\n\n      &:hover {\n        border-color: ',
          ';\n      }\n    '
        ]);
        return (
          (g = function() {
            return n;
          }),
          n
        );
      }
      function v() {
        var n = Object(l.a)(['\n  ', ';\n']);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = Object(l.a)([
          '\n  border: 1px solid ',
          ';\n  display: inline-block;\n  padding: 0.5em 1em;\n  cursor: pointer;\n\n  &:hover {\n    border-color: ',
          ';\n  }\n'
        ]);
        return (
          (x = function() {
            return n;
          }),
          n
        );
      }
      var h = u.b.div(x(), '#CCCCCC', '#333333'),
        E = Object(u.b)(h)(v(), function(n) {
          return n.selected && Object(u.a)(g(), '#000000', '#000000');
        }),
        y = t(4);
      function j() {
        var n = Object(l.a)(['\n  margin-bottom: 0.3em;\n']);
        return (
          (j = function() {
            return n;
          }),
          n
        );
      }
      function k() {
        var n = Object(l.a)([
          '\n  border: 1px solid ',
          ';\n  display: inline-block;\n  padding: 0.5em;\n  width: 250px;\n  font-size: 0.9em;\n\n  &:focus {\n    outline: none;\n    border: 1px solid ',
          ';\n  }\n'
        ]);
        return (
          (k = function() {
            return n;
          }),
          n
        );
      }
      var C = u.b.input(k(), '#CCCCCC', '#333333'),
        O = u.b.div(j()),
        w = function(n) {
          var e = n.label,
            t = n.value,
            r = n.maxLength,
            o = n.onChange;
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              'label',
              null,
              a.a.createElement(O, null, e),
              a.a.createElement(C, {
                type: 'text',
                value: t,
                maxLength: r,
                onChange: o
              })
            )
          );
        };
      function T() {
        var n = Object(l.a)(['\n  margin-bottom: 1em;\n']);
        return (
          (T = function() {
            return n;
          }),
          n
        );
      }
      var L = u.b.div(T());
      function z(n, e, t, r) {
        return function(a) {
          e(
            Object(p.a)(
              {},
              n,
              Object(y.a)({}, t, r ? a.currentTarget[r] : a.currentTarget.value)
            )
          );
        };
      }
      var I = function(n) {
        var e = n.config,
          t = n.setConfig;
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            L,
            null,
            a.a.createElement(w, {
              label: 'Title',
              value: e.title,
              onChange: z(e, t, 'title')
            })
          ),
          a.a.createElement(
            L,
            null,
            a.a.createElement(w, {
              label: 'Description',
              value: e.description,
              onChange: z(e, t, 'description')
            })
          ),
          a.a.createElement(
            L,
            null,
            a.a.createElement(w, {
              label: 'CTA text',
              value: e.ctaText,
              onChange: z(e, t, 'ctaText')
            })
          ),
          a.a.createElement(
            L,
            null,
            a.a.createElement(w, {
              label: 'Tcode',
              value: e.tcode,
              onChange: z(e, t, 'tcode')
            })
          ),
          a.a.createElement(
            L,
            null,
            a.a.createElement(
              'label',
              null,
              a.a.createElement('input', {
                type: 'checkbox',
                checked: e.control,
                onChange: z(e, t, 'control', 'checked')
              }),
              'Control card'
            )
          )
        );
      };
      function Z() {
        var n = Object(l.a)(['\n  margin-bottom: 0.3em;\n']);
        return (
          (Z = function() {
            return n;
          }),
          n
        );
      }
      function S() {
        var n = Object(l.a)(['\n  margin-bottom: 1em;\n']);
        return (
          (S = function() {
            return n;
          }),
          n
        );
      }
      var G = u.b.div(S()),
        P = u.b.div(Z());
      function _(n, e, t) {
        return function() {
          t(Object(p.a)({}, e, { layout: n }));
        };
      }
      function B(n, e, t) {
        return function() {
          t(Object(p.a)({}, e, { background: n }));
        };
      }
      function F(n, e, t) {
        return function() {
          return e.adZones.indexOf(n) > -1
            ? t(
                Object(p.a)({}, e, {
                  adZones: e.adZones.filter(function(e) {
                    return e !== n;
                  })
                })
              )
            : t(
                Object(p.a)({}, e, {
                  adZones: [].concat(Object(m.a)(e.adZones), [n])
                })
              );
        };
      }
      var A = function(n) {
        var e = n.config,
          t = n.setConfig;
        return a.a.createElement(
          'div',
          null,
          a.a.createElement('h2', null, 'Editor'),
          a.a.createElement(P, null, 'Layout'),
          a.a.createElement(
            G,
            null,
            f.map(function(n) {
              return a.a.createElement(
                E,
                { key: n, selected: n === e.layout, onClick: _(n, e, t) },
                n
              );
            })
          ),
          a.a.createElement(P, null, 'Background'),
          a.a.createElement(
            G,
            null,
            Object.keys(s).map(function(n) {
              var r = s[n];
              return a.a.createElement(
                E,
                { key: n, selected: r === e.background, onClick: B(r, e, t) },
                n
              );
            })
          ),
          a.a.createElement(P, null, 'Ad zones'),
          a.a.createElement(
            G,
            null,
            Object.keys(b).map(function(n) {
              var r = b[n];
              return a.a.createElement(
                E,
                {
                  key: n,
                  selected: e.adZones.indexOf(r) > -1,
                  onClick: F(r, e, t)
                },
                n
              );
            })
          ),
          a.a.createElement(I, { config: e, setConfig: t })
        );
      };
      function J() {
        var n = Object(l.a)([
          '\n  object-fit: contain;\n  margin: auto;\n  width: 48px;\n'
        ]);
        return (
          (J = function() {
            return n;
          }),
          n
        );
      }
      function N() {
        var n = Object(l.a)([
          '\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  object-fit: cover;\n  width: 110px;\n'
        ]);
        return (
          (N = function() {
            return n;
          }),
          n
        );
      }
      function U() {
        var n = Object(l.a)([
          '\n  display: flex;\n  flex: 0 0 120px;\n  justify-content: flex-end;\n'
        ]);
        return (
          (U = function() {
            return n;
          }),
          n
        );
      }
      function V() {
        var n = Object(l.a)([
          "\n  // sc-button\n  display: inline-block;\n  position: relative;\n  margin: 0;\n  border: 1px solid #e5e5e5;\n  border-radius: 3px;\n  cursor: pointer;\n  font-family: 'Interstate', 'Lucida Grande', 'Lucida Sans Unicode',\n    'Lucida Sans', Garuda, Verdana, Tahoma, sans-serif;\n  font-weight: 100;\n  text-align: center;\n  box-sizing: border-box;\n\n  // sc-button-cta\n  background-color: #f50;\n  border-color: #f50;\n  color: #fff;\n\n  // sc-button-large\n  font-size: 16px;\n  line-height: 18px;\n  padding: 10px 15px;\n  height: 40px;\n\n  // sc-truncate\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  word-break: normal;\n"
        ]);
        return (
          (V = function() {
            return n;
          }),
          n
        );
      }
      function $() {
        var n = Object(l.a)([
          '\n  align-items: flex-end;\n  display: flex;\n  flex-grow: 1;\n  position: relative;\n  text-align: center;\n'
        ]);
        return (
          ($ = function() {
            return n;
          }),
          n
        );
      }
      function D() {
        var n = Object(l.a)([
          '\n  color: #ffffff;\n  font-family: Interstate;\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 1.19;\n  margin-bottom: 10px;\n  margin-top: 7px;\n'
        ]);
        return (
          (D = function() {
            return n;
          }),
          n
        );
      }
      function H() {
        var n = Object(l.a)([
          "\n  color: #ffffff;\n  font-size: 21px;\n  font-weight: 900;\n  line-height: 1.09;\n  text-transform: uppercase;\n  margin: 0;\n\n  // interstate-black\n  font-family: 'Interstate-Black', 'Interstate';\n"
        ]);
        return (
          (H = function() {
            return n;
          }),
          n
        );
      }
      function K() {
        var n = Object(l.a)([
          '\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 180px;\n  height: 100%;\n  padding-left: 18px;\n'
        ]);
        return (
          (K = function() {
            return n;
          }),
          n
        );
      }
      function M() {
        var n = Object(l.a)([
          '\n  background: #c6c6c6;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  justify-content: space-between;\n  opacity: 1;\n  padding: 20px 0 22px;\n  text-align: left;\n  transition: opacity 0.2s linear;\n  text-decoration: none;\n'
        ]);
        return (
          (M = function() {
            return n;
          }),
          n
        );
      }
      function q() {
        var n = Object(l.a)([
          '\n  height: 250px;\n  margin: 0 0 25px 0;\n  width: 300px;\n  overflow: hidden;\n'
        ]);
        return (
          (q = function() {
            return n;
          }),
          n
        );
      }
      var Q = u.b.div(q()),
        R = u.b.a(M()),
        W = u.b.div(K()),
        X = u.b.h2(H()),
        Y = u.b.p(D()),
        nn = u.b.div($()),
        en = u.b.div(V()),
        tn = u.b.div(U()),
        rn = u.b.img(N()),
        an = u.b.img(J()),
        on = function(n) {
          var e = n.config,
            t = e.layout,
            r = e.title,
            o = e.description,
            c = e.background,
            i = e.ctaText,
            l = t === d,
            u = l
              ? 'https://placekitten.com/110/220'
              : 'https://placekitten.com/108/110';
          return a.a.createElement(
            Q,
            null,
            a.a.createElement(
              R,
              { href: '#', style: { background: c } },
              a.a.createElement(
                W,
                null,
                a.a.createElement(
                  'div',
                  {
                    className:
                      "dashbox__content{{$unless body ' m-centerVertically'}}"
                  },
                  a.a.createElement(X, null, r),
                  a.a.createElement(Y, null, o)
                ),
                a.a.createElement(nn, null, a.a.createElement(en, null, i))
              ),
              a.a.createElement(
                tn,
                null,
                l
                  ? a.a.createElement(rn, { src: u, alt: '' })
                  : a.a.createElement(an, { src: u, alt: '' })
              )
            )
          );
        };
      function cn() {
        var n = Object(l.a)([
          '\n  position: relative;\n  width: 300px;\n  height: 250px;\n'
        ]);
        return (
          (cn = function() {
            return n;
          }),
          n
        );
      }
      var ln = u.b.div(cn()),
        un = function(n) {
          var e = n.config;
          return a.a.createElement(
            'div',
            null,
            a.a.createElement('h2', null, 'Preview'),
            a.a.createElement(
              ln,
              null,
              a.a.createElement('div', {
                dangerouslySetInnerHTML: {
                  __html:
                    '\n  <link\n    rel="stylesheet"\n    href="https://style.sndcdn.com/css/interstate-9a7e854c95d1b49e3807d5ea457e6e538034dc55.css"\n  />\n  <link\n    rel="stylesheet"\n    href="https://style.sndcdn.com/css/interstate-black-7f3b53f03ea97c0871dc7f62474617224e3aa7e1.css"\n  />\n'
                }
              }),
              a.a.createElement(on, { config: e })
            )
          );
        };
      function dn() {
        var n = Object(l.a)([
          '\n  background: rgba(255, 255, 255, 0.5);\n  height: 100%;\n  padding: 0 1em 0 0.5em;\n\n  &:hover {\n    cursor: pointer;\n    color: ',
          ';\n  }\n'
        ]);
        return (
          (dn = function() {
            return n;
          }),
          n
        );
      }
      function fn() {
        var n = Object(l.a)([
          '\n  position: relative;\n  border: 1px solid ',
          ";\n  display: inline-block;\n  padding: 0.5em;\n  width: 150px;\n  font-size: 0.9em;\n  background: #e6e6e6;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    cursor: text;\n  }\n\n  &:after {\n    content: '';\n    background: black;\n    width: 30px;\n    height: 100%;\n    right: 0;\n    position: absolute;\n  }\n"
        ]);
        return (
          (fn = function() {
            return n;
          }),
          n
        );
      }
      function sn() {
        var n = Object(l.a)([
          '\n  position: relative;\n  display: inline-block;\n'
        ]);
        return (
          (sn = function() {
            return n;
          }),
          n
        );
      }
      var bn = u.b.div(sn()),
        mn = u.b.input(fn(), '#CCCCCC'),
        pn = u.b.span(dn(), '#CC4400'),
        gn = function(n) {
          var e = document.createElement('textarea');
          (e.value = n),
            document.body.appendChild(e),
            e.select(),
            document.execCommand('copy'),
            document.body.removeChild(e);
        },
        vn = function(n) {
          var e = n.value,
            t = Object(r.useState)('copy'),
            o = Object(i.a)(t, 2),
            c = o[0],
            l = o[1];
          return a.a.createElement(
            bn,
            null,
            a.a.createElement(mn, {
              type: 'text',
              value: e,
              onChange: function() {}
            }),
            a.a.createElement(
              pn,
              {
                onClick: function() {
                  gn(e),
                    l('copied!'),
                    setTimeout(function() {
                      l('copy');
                    }, 1500);
                }
              },
              c
            )
          );
        };
      function xn() {
        var n = Object(l.a)(['\n  margin-bottom: 1em;\n']);
        return (
          (xn = function() {
            return n;
          }),
          n
        );
      }
      function hn() {
        var n = Object(l.a)(['\n  margin-bottom: 0.3em;\n']);
        return (
          (hn = function() {
            return n;
          }),
          n
        );
      }
      var En = u.b.div(hn()),
        yn = u.b.div(xn()),
        jn = function(n) {
          var e = (function(n) {
            return {
              adZone: n.adZones.join(','),
              background: n.background,
              contentCardId: '{{campaign.${api_id}}}',
              layout: n.layout === d ? 'dashbox-image' : 'dashbox-icon',
              tcode: n.tcode ? n.tcode : '',
              control: n.control ? 'true' : 'false'
            };
          })(n.config);
          return a.a.createElement(
            'div',
            null,
            a.a.createElement('h2', null, 'Export'),
            a.a.createElement(En, null, 'Key value pairs'),
            Object.keys(e).map(function(n) {
              return a.a.createElement(
                yn,
                { key: n },
                a.a.createElement(vn, { value: n }),
                a.a.createElement(vn, { value: e[n] })
              );
            })
          );
        };
      function kn() {
        var n = Object(l.a)(['\n  margin-right: 1em;\n  width: 400px;\n']);
        return (
          (kn = function() {
            return n;
          }),
          n
        );
      }
      function Cn() {
        var n = Object(l.a)([
          '\n  display: flex;\n  padding: 1em 4em;\n  max-width: 1248px;\n\n  @media (max-width: 1200px) {\n    padding: 1em;\n  }\n}'
        ]);
        return (
          (Cn = function() {
            return n;
          }),
          n
        );
      }
      var On = u.b.div(Cn()),
        wn = u.b.div(kn()),
        Tn = {
          adZones: [b.stream],
          layout: d,
          title: 'Spotlight your work with Pro',
          description:
            'Feature your best tracks and playlists with a Pro account',
          background: s.CreatorGradient,
          ctaText: 'Try Pro Unlimited',
          control: !1,
          tcode: 't1234'
        },
        Ln = function() {
          var n = Object(r.useState)(Tn),
            e = Object(i.a)(n, 2),
            t = e[0],
            o = e[1];
          return a.a.createElement(
            On,
            null,
            a.a.createElement(
              wn,
              null,
              a.a.createElement(A, { config: t, setConfig: o })
            ),
            a.a.createElement(wn, null, a.a.createElement(un, { config: t })),
            a.a.createElement(wn, null, a.a.createElement(jn, { config: t }))
          );
        };
      c.a.render(a.a.createElement(Ln, null), document.getElementById('root'));
    }
  },
  [[15, 1, 2]]
]);
//# sourceMappingURL=main.07cd003c.chunk.js.map
