/******/!function(s){function t(n){if(e[n])return e[n].exports;var a=e[n]={exports:{},id:n,loaded:!1};return s[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}// webpackBootstrap
/******/
var e={};return t.m=s,t.c=e,t.p="",t(0)}([function(s,t,e){"use strict";var n=e(1);e(2),angular.module("beats",["components","ui.router","hljs"]).config(n.routerConfig)},function(s,t){"use strict";function e(s,t){"ngInject";s.state("home",{url:"/",component:"homeComponent"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=e},function(s,t,e){"use strict";function n(s){return s&&s.__esModule?s:{"default":s}}var a=e(3),o=n(a),i=e(5),l=n(i),r=e(6),c=n(r),d=e(7),p=n(d),u=e(9),m=n(u);angular.module("components",[]).component("homeComponent",o["default"]).component("cardComponent",l["default"]).component("formsComponent",c["default"]).component("tabsComponent",p["default"]).component("buttonsComponent",m["default"])},function(s,t,e){"use strict";function n(s){return s&&s.__esModule?s:{"default":s}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(4),o=n(a),i={templateUrl:"app/components/home/home.html",controllerAs:"$home",controller:o["default"]};t["default"]=i},function(s,t){"use strict";function e(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function s(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}return function(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}}(),a=function(){function s(){"ngInject";e(this,s),this.index=0}return n(s,[{key:"openTab",value:function(s){this.index=s}}]),s}();t["default"]=a},function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={templateUrl:"app/components/card/card.html",controller:angular.noop};t["default"]=e},function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={templateUrl:"app/components/forms/forms.html",controller:angular.noop};t["default"]=e},function(s,t,e){"use strict";function n(s){return s&&s.__esModule?s:{"default":s}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(8),o=n(a),i={templateUrl:"app/components/tabs/tabs.html",controllerAs:"$tabs",controller:o["default"]};t["default"]=i},function(s,t){"use strict";function e(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function a(){"ngInject";e(this,a)};t["default"]=n},function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={templateUrl:"app/components/buttons/buttons.html",controller:angular.noop};t["default"]=e}]),angular.module("beats").run(["$templateCache",function(s){s.put("app/components/buttons/buttons.html",'<div class="container box-shadow"><button class=primary type=submit><span class=text>Submit</span></button> <button class=secondary type=reset><span class=text>Reset</span></button> <button type=button><span class=text>Cancel</span></button></div><div class="container box-shadow"><div class=btn-group><button class=primary type=submit><span class=text>Submit</span></button> <button class=secondary type=reset><span class=text>Reset</span></button> <button type=button><span class=text>Cancel</span></button></div></div><div class="container box-shadow"><button class=primary type=submit><span class=text>Like </span><span class=icon ng-include="\'../../../assets/icons/thumbs-up.svg\'"></span></button> <button class=primary type=submit><span class=icon ng-include="\'../../../assets/icons/chevron-down.svg\'"></span> <span class=text>Submit</span></button> <button class=primary type=submit><span class=icon ng-include="\'../../../assets/icons/chevron-down.svg\'"></span> <span class=text>Submit</span> <span class=icon ng-include="\'../../../assets/icons/bar-chart.svg\'"></span></button></div><div class="container box-shadow"><div class=btn-group><button class=primary type=submit><span class=text>Like </span><span class=icon ng-include="\'../../../assets/icons/thumbs-up.svg\'"></span></button> <button class=primary type=submit><span class=icon ng-include="\'../../../assets/icons/chevron-down.svg\'"></span> <span class=text>Submit</span></button> <button class=primary type=submit><span class=icon ng-include="\'../../../assets/icons/chevron-down.svg\'"></span> <span class=text>Submit</span> <span class=icon ng-include="\'../../../assets/icons/bar-chart.svg\'"></span></button></div></div><div class="container box-shadow"><button class=primary type=submit><span class=icon ng-include="\'../../../assets/icons/thumbs-up.svg\'"></span></button> <button class=secondary type=submit><span class=icon ng-include="\'../../../assets/icons/thumbs-down.svg\'"></span></button> <button class=primary type=submit><span class=icon ng-include="\'../../../assets/icons/trash.svg\'"></span></button></div><div class="container box-shadow"><div class=btn-group><button class=primary type=submit disabled><span class=icon ng-include="\'../../../assets/icons/thumbs-up.svg\'"></span></button> <button class=secondary type=submit><span class=icon ng-include="\'../../../assets/icons/thumbs-down.svg\'"></span></button> <button class=primary type=submit><span class=icon ng-include="\'../../../assets/icons/trash.svg\'"></span></button></div></div><div class="container box-shadow"><div class=btn-group><button class=primary type=submit>1</button> <button class=primary type=submit>2</button> <button class=primary type=submit>3</button> <button class=primary type=submit>4</button> <button class=primary type=submit>5</button> <button class=primary type=submit>6</button></div></div>'),s.put("app/components/card/card.html","<div class=flex><div class=card><img src=../../../assets/images/wine-bg.jpg><div class=body><div class=title>Meeting</div><div class=subtitle>19 September, 2018</div><div class=text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div></div></div><div class=card><img src=../../../assets/images/wedding-bg.jpg><div class=body><div class=title>Meeting</div><div class=subtitle>19 September, 2018</div><div class=text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div></div></div><div class=card><img src=../../../assets/images/coffee-bg.jpg><div class=body><div class=title>Coffee Time</div><div class=subtitle>Good Morning</div><div class=text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div></div></div></div><div class=flex><div class=card><div class=body><div class=title>Meeting</div><div class=subtitle>19 September, 2018</div></div><img src=../../../assets/images/wine-bg.jpg><div class=body><div class=text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div><button><span class=icon ng-include=\"'../../../assets/icons/thumbs-up.svg'\"></span></button> <button><span class=icon ng-include=\"'../../../assets/icons/thumbs-down.svg'\"></span></button> <button class=right><span class=icon ng-include=\"'../../../assets/icons/more-horizontal.svg'\"></span></button></div></div><div class=card><div class=body><div class=title>Meeting</div><div class=subtitle>19 September, 2018</div></div><img src=../../../assets/images/wedding-bg.jpg><div class=body><div class=text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div><button><span class=icon ng-include=\"'../../../assets/icons/thumbs-up.svg'\"></span></button> <button><span class=icon ng-include=\"'../../../assets/icons/thumbs-down.svg'\"></span></button> <button class=right><span class=icon ng-include=\"'../../../assets/icons/more-horizontal.svg'\"></span></button></div></div><div class=card><div class=body><div class=title>Coffee Time</div><div class=subtitle>Good Morning</div></div><img src=../../../assets/images/coffee-bg.jpg><div class=body><div class=text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div><button><span class=icon ng-include=\"'../../../assets/icons/thumbs-up.svg'\"></span></button> <button><span class=icon ng-include=\"'../../../assets/icons/thumbs-down.svg'\"></span></button> <button class=right><span class=icon ng-include=\"'../../../assets/icons/more-horizontal.svg'\"></span></button></div></div></div><div class=flex><div class=card><div class=body><div class=title>Meeting</div><div class=subtitle>19 September, 2018</div></div><img src=../../../assets/images/wine-bg.jpg><div class=body><button><span class=icon ng-include=\"'../../../assets/icons/thumbs-up.svg'\"></span></button> <button><span class=icon ng-include=\"'../../../assets/icons/thumbs-down.svg'\"></span></button> <button class=right><span class=icon ng-include=\"'../../../assets/icons/more-horizontal.svg'\"></span></button></div></div><div class=card><div class=body><div class=title>Meeting</div><div class=subtitle>19 September, 2018</div></div><img src=../../../assets/images/wedding-bg.jpg><div class=body><button><span class=icon ng-include=\"'../../../assets/icons/thumbs-up.svg'\"></span></button> <button><span class=icon ng-include=\"'../../../assets/icons/thumbs-down.svg'\"></span></button> <button class=right><span class=icon ng-include=\"'../../../assets/icons/more-horizontal.svg'\"></span></button></div></div><div class=card><div class=body><div class=title>Coffee Time</div><div class=subtitle>Good Morning</div></div><img src=../../../assets/images/coffee-bg.jpg><div class=body><button><span class=icon ng-include=\"'../../../assets/icons/thumbs-up.svg'\"></span></button> <button><span class=icon ng-include=\"'../../../assets/icons/thumbs-down.svg'\"></span></button> <button class=right><span class=icon ng-include=\"'../../../assets/icons/more-horizontal.svg'\"></span></button></div></div></div><div class=card><div class=body><div class=title>Invitation Card</div><div class=subtitle>Josh webs Jemmu, Mountain View, California</div><div class=text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div><button class=primary type=submit><span class=text>Submit</span></button> <button class=\"secondary right\" type=reset><span class=text>Reset</span></button></div></div><!-- \nhttps://dribbble.com/shots/2121350-Delivery-Card-UX-UI-App-Interface\n\nhttps://dribbble.com/shots/2466585-Daily-UI-challenge-037-Weather -->"),s.put("app/components/home/home.html",'<div><h1 class=beats-header><span ng-include="\'../../../assets/icons/beats.svg\'"></span> Beats.css <span class=version>v1.0 - pre-alpha</span></h1><div class="tabs beats-subheader"><ul class=links><li class=link ng-click=$home.openTab(0) ng-class="{ active : $home.index == 0 }">Form</li><li class=link ng-click=$home.openTab(1) ng-class="{ active : $home.index == 1 }">Tabs</li><li class=link ng-click=$home.openTab(2) ng-class="{ active : $home.index == 2 }">Card</li><li class=link ng-click=$home.openTab(3) ng-class="{ active : $home.index == 3 }">Buttons</li></ul></div><div class=beats-body><div class=tabs><div class=content><forms-component ng-show="$home.index == 0"></forms-component><tabs-component ng-show="$home.index == 1"></tabs-component><card-component ng-show="$home.index == 2"></card-component><buttons-component ng-show="$home.index == 3"></buttons-component></div></div></div></div>'),s.put("app/components/forms/forms.html",'<form class="container box-shadow"><div class=form-group><label for=email>Email address</label><input type=email id=email placeholder="Enter email" required><div class="msg color-info">We\'ll never share your email with anyone else.</div></div><pre hljs>\n    <div class=form-group>\n      <label for=email>Email address</label>\n      <input type=email id=email placeholder="Enter email" required>\n      <div class="msg color-info">We\'ll never share your email with anyone else.</div>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><label for=password>Password</label><input type=password id=password placeholder="Enter password"></div><pre hljs>\n    <div class=form-group>\n      <label for=password>Password</label>\n      <input type=password id=password placeholder="Enter password">\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><label for=age>Age group</label><select id=age><option>0 - 20 Years</option><option>20 - 40 Years</option><option>40 - 60 Years</option><option>60 - 80 Years</option><option>> 100 Years</option></select></div><pre hljs>\n    <div class=form-group>\n      <label for=age>Age group</label>\n      <select id=age>\n        <option>0 - 20 Years</option>\n        <option>20 - 40 Years</option>\n        <option>40 - 60 Years</option>\n        <option>60 - 80 Years</option>\n        <option>> 100 Years</option>\n      </select>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><label for=age>Multi age group</label><select multiple id=age><option>0 - 20 Years</option><option>20 - 40 Years</option><option>40 - 60 Years</option><option>60 - 80 Years</option><option>> 100 Years</option></select><div class="msg color-error">Make sure that age is correct.</div></div><pre hljs>\n    <div class=form-group>\n      <label for=age>Multi age group</label>\n      <select multiple id=age>\n        <option>0 - 20 Years</option>\n        <option>20 - 40 Years</option>\n        <option>40 - 60 Years</option>\n        <option>60 - 80 Years</option>\n        <option>> 100 Years</option>\n      </select>\n      <div class="msg color-error">Make sure that age is correct.</div>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><label for=age>Age group</label><select id=age class=material><option>0 - 20 Years</option><option>20 - 40 Years</option><option>40 - 60 Years</option><option>60 - 80 Years</option><option>> 100 Years</option></select></div><pre hljs>\n    <div class=form-group>\n      <label for=age>Age group</label>\n      <select id=age class=material>\n        <option>0 - 20 Years</option>\n        <option>20 - 40 Years</option>\n        <option>40 - 60 Years</option>\n        <option>60 - 80 Years</option>\n        <option>> 100 Years</option>\n      </select>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><label for=textarea>Example Textarea</label><textarea id=textarea></textarea></div><pre hljs>\n    <div class=form-group>\n      <label for=textarea>Example Textarea</label>\n      <textarea id=textarea></textarea>\n    </div>\n  </pre></form><form class="container box-shadow"><div class="form-group inline"><label for=range>Range Picker</label><input type=range id=range></div><pre hljs>\n    <div class="form-group inline">\n      <label for=range>Range Picker</label>\n      <input type=range id=range>\n    </div>\n  </pre></form><form class="container box-shadow"><div class="form-group inline"><label for=question>Faviourite Question ?</label><input type=text id=question placeholder="Enter question"></div><pre hljs>\n    <div class="form-group inline">\n      <label for=question>Faviourite Question ?</label>\n      <input type=text id=question placeholder="Enter question">\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><input type=checkbox id=checkbox><label for=checkbox>Agree with terms and conditions ?</label></div><pre hljs>\n    <div class=form-group>\n      <input type=checkbox id=checkbox>\n      <label for=checkbox>Agree with terms and conditions ?</label>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><input type=radio name=radio id=radio1><label for=radio1>Agree with terms and conditions ?</label></div><pre hljs>\n    <div class=form-group>\n      <input type=radio name=radio id=radio1>\n      <label for=radio1>Agree with terms and conditions ?</label>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><input type=radio name=radio id=radio2><label for=radio2>Agree with terms and conditions ?</label></div><pre hljs>\n    <div class=form-group>\n      <input type=radio name=radio id=radio2>\n      <label for=radio2>Agree with terms and conditions ?</label>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><label for=email>Email address</label><input class=material type=email id=email placeholder="Enter email" required></div><pre hljs>\n    <div class=form-group>\n      <label for=email>Email address</label>\n      <input class=material type=email id=email placeholder="Enter email" required>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><label for=email>Email address</label><input type=email id=email placeholder="Enter email" required></div><pre hljs>\n    <div class=form-group>\n      <label for=email>Email address</label>\n      <input type=email id=email placeholder="Enter email" required>\n    </div>\n  </pre></form><form class="container box-shadow"><button class=primary type=submit>Submit</button> <button class=secondary type=reset>Reset</button> <button class=right type=button>Cancel</button><pre hljs>\n    <button class=primary type=submit>\n      Submit\n    </button>\n\n    <button class=secondary type=reset>\n      Reset\n    </button>\n\n    <button class=right type=button>\n      Cancel\n    </button>\n  </pre></form>'),s.put("app/components/tabs/tabs.html",'<form class="container box-shadow"><div class=tabs><ul class=links><li class="link active">Tab 1</li><li class=link>Tab 2</li><li class=link>Tab 3</li></ul><div class=content></div></div><div hljs><div class=tabs><ul class=links><li class="link active">Tab 1</li><li class=link>Tab 2</li><li class=link>Tab 3</li></ul><div class=content><!-- Use JS Logics to hide and show specific tabs --><div class="tab tab1"></div><div class="tab tab2"></div><div class="tab tab3"></div></div></div></div></form>'),s.put("app/components/stamp/stamp.html","https://dribbble.com/shots/3946629-Birds-Stamps-collection https://dribbble.com/shots/2532114-Onboarding-Illustrations https://dribbble.com/shots/2466585-Daily-UI-challenge-037-Weather https://dribbble.com/shots/2121350-Delivery-Card-UX-UI-App-Interface https://dribbble.com/search?q=card")}]);
//# sourceMappingURL=../maps/scripts/app-8a8018ccaf.js.map