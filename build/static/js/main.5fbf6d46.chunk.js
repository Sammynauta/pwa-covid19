(this["webpackJsonpmeu-app-react"]=this["webpackJsonpmeu-app-react"]||[]).push([[0],{65:function(e,n,t){"use strict";t.r(n);var c,i=t(0),a=t.n(i),l=t(8),o=t.n(l),b=t(112),A=t(110),d=t(13),r=t(14),j=t.p+"static/media/covid.53cfdf15.jpg",s=Object(r.a)(c||(c=Object(d.a)(["\n  * {\n    outline: none;\n    box-sizing: border-box;\n  }\n  body {\n    line-height: normal;\n  }\n  html, body {\n    width: 100%;\n    min-height: 100%;\n    display: flex;\n    padding: 0;\n    margin: 0;\n  }\n  #root {\n    background: url(",");\n    height: 100%;\n    width: 100%;\n    background-size: cover;\n    background-position: center center;\n  }\n  .mb-2 {\n    margin-bottom: 16px;\n  }\n  .pt-2 {\n    padding-top: 16px;\n  }\n  .cursor {\n    cursor: pointer;\n  }\n"])),j),h=t(38),m={method:"get",mode:"cors",cache:"default"};var I,g,M,O,R,E={getCountry:function(e){return fetch("".concat("https://coronavirus-19-api.herokuapp.com/countries","/").concat(e),m).then((function(e){return e.json()}))}},v=t(101),p=t(105),G=t(106).a,Z=t(107).a,u=t(108).a,N=t(109).a,w=t(111).a,Y=t(113).a,D=Object(r.b)(u)(I||(I=Object(d.a)(["\n  font-weight: 500;\n  font-size: 1.5rem;\n"]))),x=Object(r.b)(u)(g||(g=Object(d.a)(["\n  font-weight: 400;\n  font-size: 2.5rem;\n"]))),T=Object(r.b)(p.a)(M||(M=Object(d.a)(["\n  border-left: 8px solid ",";\n"])),(function(e){return e.color||"#5d78ff"})),U=Object(r.b)(p.a)(O||(O=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 25px;\n"]))),k=r.b.div(R||(R=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  min-width: 150px;\n"]))),J=t(4);function Q(e){var n=e.value,t=e.label,c=e.color;return Object(J.jsx)(v.a,{children:Object(J.jsxs)(T,{color:c,children:[Object(J.jsx)(x,{children:n}),Object(J.jsx)(D,{children:t})]})})}var y=Object(i.memo)(Q);function B(e){var n=e.data,t=n.cases,c=n.todayDeaths,i=n.recovered,a=n.deaths,l=n.todayCases,o=function(e){return e||Object(J.jsx)(N,{variant:"text",width:182,height:60})};return Object(J.jsxs)(Z,{container:!0,spacing:4,children:[Object(J.jsx)(Z,{item:!0,xs:12,md:3,children:Object(J.jsx)(y,{value:o(t),label:"Total de casos",color:"#5d78ff"})}),Object(J.jsx)(Z,{item:!0,xs:12,md:3,children:Object(J.jsx)(y,{value:o(c),label:"\xd3bitos hoje",color:"#F7B829"})}),Object(J.jsx)(Z,{item:!0,xs:12,md:3,children:Object(J.jsx)(y,{value:o(l),label:"Casos hoje",color:"#000"})}),Object(J.jsx)(Z,{item:!0,xs:12,md:3,children:Object(J.jsx)(y,{value:o(a),label:"Total de mortos",color:"#E95078"})}),Object(J.jsx)(Z,{item:!0,xs:12,md:3,children:Object(J.jsx)(y,{value:o(i),label:"Total de recuperados",color:"#67C887"})})]})}var C=Object(i.memo)(B),z=(t.p,[{label:"Alemanha",value:"germany",flag:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAATCAIAAAB+9pigAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFOUQ3QkEyMEM3MjExRTZBMEM3REZDOUE4Q0JDQzQ1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFOUQ3QkEzMEM3MjExRTZBMEM3REZDOUE4Q0JDQzQ1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkU5RDdCQTAwQzcyMTFFNkEwQzdERkM5QThDQkNDNDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkU5RDdCQTEwQzcyMTFFNkEwQzdERkM5QThDQkNDNDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Esq07AAAAOklEQVR42mJgGAWjgFLAOJHWFryksQUsX2hsARPDULeA5R+tLeB1oXEq+n+dxj5g+D6aioa7BQABBgAQagaqDA5zXAAAAABJRU5ErkJggjk3MA=="},{label:"Brasil",value:"brazil",flag:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAWCAIAAAAuOwkTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJGRDJDMUU3MEMzNTExRTZBODhBRkNGOTRBQUQ0QTE1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJGRDJDMUU4MEMzNTExRTZBODhBRkNGOTRBQUQ0QTE1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkZEMkMxRTUwQzM1MTFFNkE4OEFGQ0Y5NEFBRDRBMTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkZEMkMxRTYwQzM1MTFFNkE4OEFGQ0Y5NEFBRDRBMTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ks31TAAAD9UlEQVR42rRVbUxbVRg+5557+30LK7RQVmi7IpS6xjEdcbgQxDkSo2bK/GGcS5Rf0yVmSxY/4kfiD2M0yzRb9If8Mc65GEKymUXjIEYlhmQQKQMGbKVsAra7dJRLW9rec8/x3Jo1OIeUzN2cH+ece8553vd93ud9IfiiGdzLj9vYccJp454AUAAw7zateEwrbKIt/08AlYOUe7lmbujhEBud7jlIIdss5ipchwPtIXR/iXwyMN3qktnxv23/eVY8dNk3mrACpAL4X+4g8HT1mj8xMvLq27XXTjdNuTj1h37vt73+X4aq5Zv6Vu/Cwbp5gaoDCStmEePWxODXJhM+5oh/Uh/Z6lz5vm/Loc92T0fsDDJvFfF6pROv9L6zO/ysI3540nvhRpmGwZHiPMDIYch9Gggf989UlOJTZ337jnYsxkwAZYGgAL0KBJKIi9/0BRpc0qPbovvtktuYGViypHJ6AIkWxjUBNN7gAVe0+4HJlnKZxTajlH7c91plndvfaHF7ygxG3dJyRk1hgDCg/MCY64W2UYtJaSxJ7a+U4ioKySJzfXXECgCQJZ/fmvwqOHXUNy8ilTLyEBiM7BqTnxL4lM7ABWodj7f4mtsqtj/kTCznpPklecHi98W3B2M0C0SB7K28udMqDyXNCytGjXlY4IBCniPv+2eOeOb1PAX4VpbrwZnvaNfXFwFahoijlAKes1eKO3c5nz9QL+/1fn4iMnjJ1tmRf4No4dlTkfi9bPj4TNW74RqFEQkpfytbmSIovEOWQoAoZ9UJCGFCOAgSi+lzZybO91xte8Lz5ntNNZlJkPmpoEWYHwjeFiIICOV6pfIeyVZnzPjEDMwfhwKISuL5UKPRQHAOY0zMJr1Ox+coIZREJhYnpnJHnrtUIU4BZj6nhbT3Rskzww2nZ51Eg6KrlMwWPB6Xze2DW18aqY1mBMh8y4Enm69sts4nZWARDSxKGKsKZrKGnIAsZTYLvW4jF7TbPIhlhc4R357B4JhsZk8V1PfPLNLYp8OJklOx8nKkbBPT5k1K1aal7r56Jcsx0SqYYJWIFoNRsGJFOXaw+5GmGLPjy1n7vpD/1wUb4NTbRPcvHWhskJQinI3af5MtDxqSrY3RHb4/+yccCUkEOR3I8dk02VwV7Trc09F+5XLM+OJo3bFwTVJF+bKxoVqEkUnAb2z5463ALE7yP170hJiYAQh6pPYdM4KIPxx3fTBdnVZ4wKt3VeyCpfLJhnCLa7mw3T8nvjruGymi2MGiOprGK+2sjn503zUI6OtX3V3XnYRhI3LX5Xp1w1F5ryXFppGkeV3D16umd7KEJV8kbcxfwsW3TH6DLZxstOn/JcAAwC6ySG0cQ4QAAAAASUVORK5CYIIxOTI1"},{label:"China",value:"china",flag:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAVCAIAAACor3u9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEyMTg0Q0ZCMEMzQjExRTY5NzBBRDExRDNGMEU2REU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEyMTg0Q0ZDMEMzQjExRTY5NzBBRDExRDNGMEU2REU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTIxODRDRjkwQzNCMTFFNjk3MEFEMTFEM0YwRTZERTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTIxODRDRkEwQzNCMTFFNjk3MEFEMTFEM0YwRTZERTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6IrcTAAAABbUlEQVR42uyTv0oDQRDGZ/ZP7hIjJiIWxoAQLNIo+Ay+gVjY2Vr7CL6A+hBWYmvtA9iKCFoKIZEYTcJdbnfG3aCJgYiwwULINLfsst/vvvlm8alegp+LEhQ5BgHBNXmVgc14jQpK+4mu0nhzJoBTjDm/bT7l2B2yUxcF5hSDGWL0pT7qCpUPEyBkCyDB6bbO8um9XNwd5Go2jKH8vxqIarZ0kOQ2SFdt5fw9uZOvF7FDovTseCcDoQcPChSHOHC9Th/l23Uk1wlWgDV0LmPbQ38ofK9ap4XujXYNDHQwHBe0baQGprcKIzZtxFE6CHHduh3bFAHj9HUDWRa5cbLwfFzsXEVqlZiGSQ+8g6W9NL9lOMMABzh6Bz5YQtR+ZtDNPnq6XiPzguBgFjnzbsLH1OXp1P0iGqoTOMzyUT/atNQRYeoTDqYdgiwTdQWngerfQp5aDKYpfNoY/pLVLwYlzFgC/rjmgDngHwA+BBgAlVyOVNh63ZsAAAAASUVORK5CYIIxMjc3"},{label:"Estados Unidos",value:"usa",flag:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAARCAIAAAAzPjmrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFCM0QxQTlGMEQyRDExRTZBOEJGRTZCOUM2NjUxNEM1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFCM0QxQUEwMEQyRDExRTZBOEJGRTZCOUM2NjUxNEM1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUIzRDFBOUQwRDJEMTFFNkE4QkZFNkI5QzY2NTE0QzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUIzRDFBOUUwRDJEMTFFNkE4QkZFNkI5QzY2NTE0QzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Osz06AAACAklEQVR42rSTO2/TUBiGfeyTNs7FtY/tJDaxkyZCpFwqMbGj0rFSESMDG7+AjbELf4C1P6FTFyRY6NIJqUMiRSIXx0l8i3NpokJjO3xUYmSoJZ/hO+cs73ue9/sOOjr6uJXCvn+tKKTft+t1td02Gw2t1TIaDR3O+sPyVrdz3P6OaLSh7r3Qq4MPqkowxsvlDbeTnU2XgpADPyJyvr8gQt7zr+Vs6uT9AYXQ/fUpnM2maYZZzFeg7rkzWeZte1osCdbYL5UEx5nyhGOi9Y3t0igOAZ7PVyy7zQs5151DSqbpaZpsGI6uFwam+0AVx5Plb8tsnnxF8Qx4PpfPs543LylkOJyALnSiWi31elalUhwMXEniSOX54afPkGeciCDo7XRKknbGo0m5LIF6pVrsdMa1GnjYml4wrdlt37h4/Q4MYhJw+YzjzhRFNE0XCHpd647A1rTCaOhJspBlKfK4DlNExetBJpOWRM6yfEUVIRPwMAxQl03TUVVpOJqkZK769g0MURwCQvIMQ8N7IfFW09jb06+uOvv7NahPn+22mv3dR3rY7X57eUzTdJx/8HM03UQbmkFhGGGGCYIQp5hg/a9iZh1GLIpI8IuKA0Dh4PQUtvDucvufukJoEWuE/hpYlz+oJBeKgjBRA/zlxWGyBIOz82QJ0gU5WYIz5UmiBn8EGAAtZN8UaBAz4gAAAABJRU5ErkJggjE0MjY="},{label:"It\xe1lia",value:"italy",flag:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAVCAIAAACor3u9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMyNkM1MjREMEM3RTExRTY5MjcxOTRFODNENTg4QTQ2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMyNkM1MjRFMEM3RTExRTY5MjcxOTRFODNENTg4QTQ2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzI2QzUyNEIwQzdFMTFFNjkyNzE5NEU4M0Q1ODhBNDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzI2QzUyNEMwQzdFMTFFNjkyNzE5NEU4M0Q1ODhBNDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Ab6oxAAAAPklEQVR42mJkmOTGgAv8/u6v7rTBu4EBN3hY2fB6xVpmbm5cCpgYaAxGLRi1YNSCUQtGLRi1YNQCogBAgAEAMJkJWvloa2UAAAAASUVORK5CYII5NzQ="}]),S=navigator.share;function W(e){var n=e.updateAt,t=e.onChange,c=e.data,i=e.country,a=(e.getCoviddata,c.cases,c.recovered),l=(c.deaths,c.todayCases,c.todayDeaths,"Pa\xeds: ".concat(i," - recuperados: ").concat(a)),o=Object(J.jsx)("div",{children:Object(J.jsx)(G,{variant:"contained",color:"primary",onClick:function(){navigator.share({title:"Dados do Covid19 - ".concat(i),text:l,url:"https://covid19dio.netlify.app/"})},children:"Compartilhar"})}),b=Object(J.jsx)("div",{children:Object(J.jsx)(G,{variant:"contained",color:"primary",onClick:function(){navigator.clipboard.writeText(l)},children:"Copiar"})});return Object(J.jsx)(v.a,{children:Object(J.jsxs)(U,{children:[Object(J.jsxs)("div",{children:[Object(J.jsx)(u,{variant:"h5",component:"span",color:"primary",children:"COVID19"}),Object(J.jsx)(u,{variant:"h6",component:"span",color:"primary",children:"Painel Coronav\xedrus"}),Object(J.jsxs)(u,{variant:"body2",component:"span",color:"primary",children:["Atualizado em: ",n]}),Object(J.jsx)("div",{className:"pt-2",children:Object(J.jsx)(w,{onChange:t,value:i,children:z.map((function(e,n){return Object(J.jsx)(Y,{value:e.value,children:Object(J.jsxs)(k,{children:[Object(J.jsx)("div",{children:e.label}),Object(J.jsx)("img",{src:e.flag,alt:"Pa\xeds-".concat(e.label)})]})},"country-".concat(n))}))})})]}),S?o:b]})})}var V,L=Object(i.memo)(W),F=r.b.div(V||(V=Object(d.a)(["\n  padding: 20px;\n  margin: 0 auto;\n  max-width: 1024px;\n"])));function f(){var e=Object(i.useState)({}),n=Object(h.a)(e,2),t=n[0],c=n[1],a=Object(i.useState)("brazil"),l=Object(h.a)(a,2),o=l[0],b=l[1],A=(new Date).toLocaleString(),d=Object(i.useCallback)((function(e){E.getCountry(e).then((function(e){return c(e)}))}),[]);Object(i.useEffect)((function(){d(o)}),[d,o]);return Object(J.jsxs)(F,{children:[Object(J.jsx)("div",{className:"mb-2",children:Object(J.jsx)(L,{data:t,updateAt:A,onChange:function(e){var n=e.target.value;b(n)},country:o,getCovidData:d})}),Object(J.jsx)(C,{data:t})]})}var X=Object(i.memo)(f);var H=function(){return Object(J.jsxs)(b.b,{injectFirst:!0,children:[Object(J.jsx)(A.a,{}),Object(J.jsx)(s,{}),Object(J.jsx)(X,{})]})},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(H,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");P?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(n,e)}))}}()}},[[65,1,2]]]);
//# sourceMappingURL=main.5fbf6d46.chunk.js.map