(self.webpackChunkkara=self.webpackChunkkara||[]).push([[781],{1781:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var n=a(7294),l=a(548),r=a(9603);const o=JSON.parse('{"zalgoUp":["̀","́","̂","̃","̄","̅","̆","̇","̈","̉","̊","̋","̌","̍","̎","̏","̐","̑","̒","̓","̔","̕","̚","̛","̽","̾","̿","̀","́","͂","̓","̈́","͆","͊","͋","͌","͐","͑","͒","͗","͘","͛","͝","͞","͠","͡","ͣ","ͤ","ͥ","ͦ","ͧ","ͨ","ͩ","ͪ","ͫ","ͬ","ͭ","ͮ","ͯ"],"zalgoDown":["̖","̗","̘","̙","̜","̝","̞","̟","̠","̡","̢","̣","̤","̥","̦","̧","̨","̩","̪","̫","̬","̭","̮","̯","̰","̱","̲","̳","̹","̺","̻","̼","ͅ","͇","͈","͉","͍","͎","͓","͔","͕","͖","͙","͚","͜","͟","͢"],"zalgoMiddle":["̕","̛","̀","́","͘","̡","̢","̧","̨","̴","̵","̶","͏","͜","͝","͞","͟","͠","͢","̸","̷","͡","҉"]}');var c=function(){return(c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},g=["poggers","that was very cash money of you","big chungus","yea boiii","very interestingn't"];const u=function(){var e=(0,n.useState)(""),t=e[0],a=e[1],u=(0,n.useState)({text:(0,r.T)(g)[0],zalgoLevel:5,zalgoUp:!1,zalgoMiddle:!0,zalgoDown:!0}),i=u[0],h=u[1];(0,n.useEffect)((function(){for(var e="",t=i.text,n=i.zalgoLevel,l=0,c=t.trim();l<c.length;l++){for(var g=c[l],u=0,h=Object.keys(o);u<h.length;u++){var m=h[u];if(i[m])for(var s=o[m],d=0;d<n;d++)e+=(0,r.T)(s)[0]}e+=g}a(e)}),[i]);var m=function(e){var t=e.target;h((function(e){var a;return c(c({},e),((a={})[t.name]="checkbox"===t.type?t.checked:t.value.trimStart(),a))}))},s=i.text,d=i.zalgoLevel,p=i.zalgoDown,v=i.zalgoMiddle,f=i.zalgoUp;return n.createElement("div",{className:"p-3"},n.createElement("h1",null,"Zalgo Text Generator"),n.createElement("hr",null),n.createElement("p",{className:"rounded bg-light border border-dark py-5 px-3 zalgo-text"},t),n.createElement(l.Z,null,n.createElement(l.Z.Group,null,n.createElement(l.Z.Control,{value:s,onChange:m,as:"textarea",name:"text",rows:4,placeholder:"Some text..."})),n.createElement(l.Z.Group,null,n.createElement(l.Z.Label,null,"Zalgo Level:"),n.createElement(l.Z.Control,{type:"range",name:"zalgoLevel",maxLength:100,onChange:m,style:{width:200},value:d,min:1,max:20})),n.createElement(l.Z.Group,null,n.createElement(l.Z.Check,{onChange:m,label:"Zalgo going up",checked:f,name:"zalgoUp"}),n.createElement(l.Z.Check,{onChange:m,label:"Zalgo in the middle",checked:v,name:"zalgoMiddle"}),n.createElement(l.Z.Check,{onChange:m,label:"Zalgo going down",checked:p,name:"zalgoDown"}))))}},9603:(e,t,a)=>{"use strict";function n(e,t,a,n,l){var r=n;do{e.font=(r-=5)+"px "+a}while(e.measureText(t).width>l);return r}a.d(t,{v:()=>n,T:()=>l});var l=function(e){return e.sort((function(){return Math.random()-.5}))}}}]);