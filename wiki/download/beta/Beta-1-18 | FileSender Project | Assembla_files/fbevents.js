/**
* Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
*
* As with any software that integrates with the Facebook platform, your use of
* this software is subject to the Facebook Platform Policy
* [http://developers.facebook.com/policy/]. This copyright notice shall be
* included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

fbq.version="2.7.21";
fbq.pendingConfigs=["global_config"];
(function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){var g=a.fbq;g.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var o=a.postMessage||function(){};if(!g){o({action:'FB_LOG',logType:'Facebook Pixel Error',logMessage:'Pixel code is not installed correctly on this page'},'*');if('error' in console)console.error('Facebook Pixel Error: Pixel code is not installed correctly on this page');return false}return true}())return;'use strict';if(!g.__fbeventsModules){g.__fbeventsModules={};g.__fbeventsResolvedModules={};g.getFbeventsModules=function(o){if(!g.__fbeventsResolvedModules[o])g.__fbeventsResolvedModules[o]=g.__fbeventsModules[o]();return g.__fbeventsResolvedModules[o]};g.fbIsModuleLoaded=function(o){return !!g.__fbeventsModules[o]};g.ensureModuleRegistered=function(o,p){if(!g.fbIsModuleLoaded(o))g.__fbeventsModules[o]=p;}}g.ensureModuleRegistered('SignalsFBEventsPlugin',function(){return function(o,p,q,r){var s={exports:{}},t=s.exports;(function(){'use strict';function u(v){this.plugin=v;this.__fbEventsPlugin=1;return this}s.exports=u})();return s.exports}(a,b,c,d)});g.ensureModuleRegistered('undefined',function(){return undefined});'use strict';var h=g.getFbeventsModules('SignalsFBEventsPlugin'),i={AUTO_CONFIG_OPT_OUT:1<<0,AUTO_CONFIG:1<<1,CONFIG_LOADING:1<<2,SUPPORTS_DEFINE_PROPERTY:1<<3,SUPPORTS_SEND_BEACON:1<<4,HAS_INVALIDATED_PII:1<<5},j=false;function k(){try{Object.defineProperty({},'test',{})}catch(o){return false}return true}function l(){return !!(a.navigator&&a.navigator.sendBeacon)}function m(o,p){return o?p:0}var n=new h(function(o,p){if(j)return;var q={};o.on('pii_invalidated',function(r){if(r!=null)q[typeof r==='string'?r:r.id]=true;});o.on('getCustomParameters',function(r){if(r!=null){var s=p.optIns,t=m(s.isOptedOut(r.id,'AutomaticSetup'),i.AUTO_CONFIG_OPT_OUT),u=m(s.isOptedIn(r.id,'AutomaticSetup'),i.AUTO_CONFIG),v=m(o.disableConfigLoading!==true,i.CONFIG_LOADING),w=m(k(),i.SUPPORTS_DEFINE_PROPERTY),x=m(l(),i.SUPPORTS_SEND_BEACON),y=m(r!=null&&q[r.id],i.HAS_INVALIDATED_PII),z=t|u|v|w|x|y;return {o:z}}return {}});j=true});n.OPTIONS=i;e.exports=n;if(g.registerPlugin)g.registerPlugin('fbevents.plugins.opttracking',e.exports);g.ensureModuleRegistered('fbevents.plugins.opttracking',function(){return e.exports})})();return e.exports})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){var g=a.fbq;g.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var qb=a.postMessage||function(){};if(!g){qb({action:'FB_LOG',logType:'Facebook Pixel Error',logMessage:'Pixel code is not installed correctly on this page'},'*');if('error' in console)console.error('Facebook Pixel Error: Pixel code is not installed correctly on this page');return false}return true}())return;'use strict';var h=function(){function qb(rb,sb){var tb=[],ub=true,vb=false,wb=undefined;try{for(var xb=rb[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),yb;!(ub=(yb=xb.next()).done);ub=true){tb.push(yb.value);if(sb&&tb.length===sb)break;}}catch(zb){vb=true;wb=zb}finally{try{if(!ub&&xb['return'])xb['return']();}finally{if(vb)throw wb;}}return tb}return function(rb,sb){if(Array.isArray(rb)){return rb}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator') in Object(rb)){return qb(rb,sb)}else throw new TypeError('Invalid attempt to destructure non-iterable instance');}}(),i=typeof Symbol==='function'&&typeof (typeof Symbol==='function'?Symbol.iterator:'@@iterator')==='symbol'?function(qb){return typeof qb}:function(qb){return qb&&typeof Symbol==='function'&&qb.constructor===Symbol&&qb!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?'symbol':typeof qb};function j(qb){if(Array.isArray(qb)){for(var rb=0,sb=Array(qb.length);rb<qb.length;rb++)sb[rb]=qb[rb];return sb}else return Array.from(qb);}if(!g.__fbeventsModules){g.__fbeventsModules={};g.__fbeventsResolvedModules={};g.getFbeventsModules=function(qb){if(!g.__fbeventsResolvedModules[qb])g.__fbeventsResolvedModules[qb]=g.__fbeventsModules[qb]();return g.__fbeventsResolvedModules[qb]};g.fbIsModuleLoaded=function(qb){return !!g.__fbeventsModules[qb]};g.ensureModuleRegistered=function(qb,rb){if(!g.fbIsModuleLoaded(qb))g.__fbeventsModules[qb]=rb;}}g.ensureModuleRegistered('SignalsParamList',function(){return function(qb,rb,sb,tb){var ub={exports:{}},vb=ub.exports;(function(){'use strict';var wb='deep',xb='shallow';function yb(bc){if(typeof JSON==='undefined'||JSON===null||!JSON.stringify){return Object.prototype.toString.call(bc)}else return JSON.stringify(bc);}function zb(bc){if(bc===null||bc===undefined)return true;var cc=typeof bc==='undefined'?'undefined':i(bc);return cc==='number'||cc==='boolean'||cc==='string'}function ac(bc){this._params=[];this._piiTranslator=bc}ac.ERROR_PII_WITH_NO_TRANSLATOR='Provide a PII Translation function in order to append PII data to the '+'ParamList.';ac.prototype.addRange=function(bc){var cc=this;bc.each(function(dc,ec){return cc.append(dc,ec)})};ac.prototype.containsKey=function(bc){for(var cc=0;cc<this._params.length;cc++)if(this._params[cc].name===bc)return true;return false};ac.prototype.get=function(bc){var cc=bc;for(var dc=0;dc<this._params.length;dc++)if(this._params[dc].name===cc)return this._params[dc].value;return null};ac.prototype.append=function(bc,cc,dc){this._append(encodeURIComponent(bc),cc,wb,dc);return this};ac.prototype.appendHash=function(bc,cc){for(var dc in bc)if(Object.prototype.hasOwnProperty.call(bc,dc))this._append(dc,bc[dc],wb,cc);return this};ac.fromHash=function(bc,cc){return new ac(cc).appendHash(bc)};ac.prototype._append=function(bc,cc,dc,ec){if(zb(cc)){this._appendPrimitive(bc,cc,ec)}else if(dc===wb){this._appendObject(bc,cc,ec)}else this._appendPrimitive(bc,yb(cc),ec);};ac.prototype._translateValue=function(bc,cc,dc){if(typeof cc==='boolean')return cc?'true':'false';if(!dc)return ''+cc;if(!this._piiTranslator)throw new Error(ac.ERROR_PII_WITH_NO_TRANSLATOR);return this._piiTranslator(bc,''+cc)};ac.prototype._appendPrimitive=function(bc,cc,dc){if(cc!=null){var ec=this._translateValue(bc,cc,dc);if(ec!=null)this._params.push({name:bc,value:ec});}};ac.prototype._appendObject=function(bc,cc,dc){var ec=null;for(var fc in cc)if(Object.prototype.hasOwnProperty.call(cc,fc)){var gc=bc+'['+encodeURIComponent(fc)+']';try{this._append(gc,cc[fc],xb,dc)}catch(hc){if(ec==null)ec=hc;}}if(ec!=null)throw ec;};ac.prototype.each=function(bc){for(var cc=0;cc<this._params.length;cc++){var dc=this._params[cc],ec=dc.name,fc=dc.value;bc(ec,fc)}};ac.prototype.toQueryString=function(){var bc=[];this.each(function(cc,dc){bc.push(cc+'='+encodeURIComponent(dc))});return bc.join('&')};ub.exports=ac})();return ub.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsUtils',function(){return function(qb,rb,sb,tb){var ub={exports:{}},vb=ub.exports;(function(){'use strict';var wb='console',xb='error',yb='Facebook Pixel Error',zb='Facebook Pixel Warning',ac='warn',bc=g.getFbeventsModules('SignalsParamList'),cc=Object.prototype.toString,dc=!('addEventListener' in rb),ec=function fd(){},fc=qb[wb]||{},gc=qb.postMessage||ec;function hc(fd){return Array.isArray?Array.isArray(fd):cc.call(fd)==='[object Array]'}function ic(fd){return typeof fd==='number'||typeof fd==='string'&&/^\d+$/.test(fd)}var jc={};function kc(fd){if(Object.prototype.hasOwnProperty.call(jc,fd.message)===false){jc[fd.message]=true;lc(fd)}}function lc(fd){try{gc({action:'FB_LOG',logType:yb,logMessage:fd.toString()},'*')}catch(id){}try{var gd=Math.random();if(gd<.01){var hd=new bc(null);hd.append('p','pixel');hd.append('v',qb.fbq&&qb.fbq.version?qb.fbq.version:'unknown');hd.append('e',fd.toString());if(fd instanceof Error){hd.append('f',fd.fileName);hd.append('s',fd.stackTrace||fd.stack)}cd(hd,'https://connect.facebook.net/log/error')}}catch(id){}if(xb in fc)fc[xb](yb+': '+fd.toString());}function mc(fd,gd){for(var hd=arguments.length,id=Array(hd>2?hd-2:0),jd=2;jd<hd;jd++)id[jd-2]=arguments[jd];if(!fd){var kd=0;throw new Error(gd.replace(/%s/g,function(ld){return id[kd++]}))}}function nc(fd){gc({action:'FB_LOG',logType:zb,logMessage:fd},'*');if(ac in fc)fc[ac](zb+': '+fd);}function oc(fd,gd,hd){gd=dc?'on'+gd:gd;var id=dc?fd.attachEvent:fd.addEventListener,jd=dc?fd.detachEvent:fd.removeEventListener,kd=function ld(){if(jd)jd.call(fd,gd,ld,false);hd()};if(id)id.call(fd,gd,kd,false);}function pc(fd,gd,hd){var id=fd[gd],jd=ad(hd);fd[gd]=function(){var kd=id.apply(this,arguments);jd.apply(this,arguments);return kd}}var qc=Object.prototype.hasOwnProperty,rc=!{toString:null}.propertyIsEnumerable('toString'),sc=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'],tc=sc.length;function uc(fd){if(Object.keys)return Object.keys(fd);if((typeof fd==='undefined'?'undefined':i(fd))!=='object'&&(typeof fd!=='function'||fd===null))throw new TypeError('Object.keys called on non-object');var gd=[];for(var hd in fd)if(qc.call(fd,hd))gd.push(hd);if(rc)for(var id=0;id<tc;id++)if(qc.call(fd,sc[id]))gd.push(sc[id]);return gd}function vc(fd,gd){if(Array.prototype.map)return Array.prototype.map.call(fd,gd);var hd=void 0,id=void 0;if(fd==null)throw new TypeError(' array is null or not defined');var jd=Object(fd),kd=jd.length>>>0;if(typeof gd!=='function')throw new TypeError(gd+' is not a function');hd=new Array(kd);id=0;while(id<kd){var ld,md;if(id in jd){ld=jd[id];md=gd.call(null,ld,id,jd);hd[id]=md}id++}return hd}function wc(fd){if(this==null)throw new TypeError('Array.prototype.some called on null or undefined');if(typeof fd!=='function')throw new TypeError();var gd=Object(this),hd=gd.length>>>0,id=arguments.length>=2?arguments[1]:void 0;for(var jd=0;jd<hd;jd++)if(jd in gd&&fd.call(id,gd[jd],jd,gd))return true;return false}function xc(fd){return uc(fd).length===0}function yc(fd){if(this===void 0||this===null)throw new TypeError();var gd=Object(this),hd=gd.length>>>0;if(typeof fd!=='function')throw new TypeError();var id=[],jd=arguments.length>=2?arguments[1]:void 0;for(var kd=0;kd<hd;kd++)if(kd in gd){var ld=gd[kd];if(fd.call(jd,ld,kd,gd))id.push(ld);}return id}function zc(fd){this.items=fd==null?[]:fd}zc.prototype.has=function(fd){return wc.call(this.items,function(gd){return gd===fd})};zc.prototype.add=function(fd){this.items.push(fd)};function ad(fd){if(typeof fd!=='function')return fd;return function(){try{return fd.apply(this,arguments)}catch(gd){ed.logError(gd)}return undefined}}function bd(fd,gd){var hd=fd.toQueryString(),id=gd+'?'+hd;if(id.length<2048){var jd=new Image();jd.src=id;return true}return false}function cd(fd,gd){var hd='fb'+Math.random().toString().replace('.',''),id=rb.createElement('form');id.method='post';id.action=gd;id.target=hd;id.acceptCharset='utf-8';id.style.display='none';var jd=!!(qb.attachEvent&&!qb.addEventListener),kd=jd?'<iframe name="'+hd+'">':'iframe',ld=rb.createElement(kd);ld.src='javascript:false';ld.id=hd;ld.name=hd;id.appendChild(ld);oc(ld,'load',function(){fd.each(function(md,nd){var od=rb.createElement('input');od.name=md;od.value=nd;id.appendChild(od)});oc(ld,'load',function(){if(id.parentNode)id.parentNode.removeChild(id);});id.submit()});rb.body.appendChild(id);return true}function dd(fd,gd){if(qb.navigator&&qb.navigator.sendBeacon){var hd=fd.toQueryString();qb.navigator.sendBeacon(gd,new Blob([hd],{type:'application/x-www-form-urlencoded'}));return true}return false}var ed={injectMethod:pc,invariant:mc,isArray:hc,isEmptyObject:xc,isNumber:ic,keys:uc,listenOnce:oc,logError:lc,logErrorOnce:kc,logWarning:nc,makeSafe:ad,map:vc,sendGET:bd,sendPOST:cd,sendBeacon:dd,FBSet:zc,each:function fd(gd,hd){vc.call(this,gd,hd)},some:function fd(gd,hd){return wc.call(gd,hd)},filter:function fd(gd,hd){return yc.call(gd,hd)}};ub.exports=ed})();return ub.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsEvents',function(){return function(qb,rb,sb,tb){var ub={exports:{}},vb=ub.exports;(function(){'use strict';var wb=g.getFbeventsModules('SignalsFBEventsUtils'),xb=wb.logError,yb=wb.keys,zb=0;function ac(){this._listeners={}}ac.prototype.on=function(gc,hc){var ic=this,jc=zb++;if(!this._listeners[gc])this._listeners[gc]={};this._listeners[gc][jc.toString()]=hc;return function(){ic._unsubscribe(gc,jc.toString())}};ac.prototype.once=function(gc,hc){var ic=this,jc=arguments,kc=this.on(gc,function(){kc();return hc.apply(ic,jc)});return kc};ac.prototype.trigger=function(gc){var hc=this;for(var ic=arguments.length,jc=Array(ic>1?ic-1:0),kc=1;kc<ic;kc++)jc[kc-1]=arguments[kc];if(!this._listeners[gc])return [];return yb(this._listeners[gc]).map(function(lc){try{if(!hc._listeners[gc][lc])return [];return hc._listeners[gc][lc].apply(null,jc)}catch(mc){xb(mc)}return null})};ac.prototype._unsubscribe=function(gc,hc){var ic=this._listeners[gc];if(ic&&ic[hc]){delete ic[hc];if(yb(ic).length===0)delete this._listeners[gc];}};function bc(){return new ac()}var cc=new ac(),dc=cc.on.bind(cc),ec=cc.once.bind(cc),fc=cc.trigger.bind(cc);ub.exports={on:dc,once:ec,trigger:fc,instance:cc,spawn:bc,PixelEvents:ac}})();return ub.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsQE',function(){return function(qb,rb,sb,tb){var ub={exports:{}},vb=ub.exports;(function(){'use strict';var wb=g.getFbeventsModules('SignalsFBEventsUtils'),xb=wb.invariant,yb=function bc(){return Math.random()};function zb(bc){var cc=yb();for(var dc=0;dc<bc.length;dc++){var ec=bc[dc],fc=ec.passRate,gc=h(ec.range,2),hc=gc[0],ic=gc[1];fc>0&&fc<1||xb(0);if(cc>=hc&&cc<ic){var jc=yb()<fc;return {name:ec.name,isInExperimentGroup:jc,code:ec.code+(jc?'1':'0')}}}return null}function ac(bc){this._groups=bc;this._result=null;this._hasRolled=false}ac.prototype={get:function bc(cc){if(!this._hasRolled){var dc=zb(this._groups);if(dc!=null)this._result=dc;this._hasRolled=true}if(!cc)return this._result;if(this._result!=null&&this._result.name===cc)return this._result;return null}};ub.exports=ac})();return ub.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsExperiments',function(){return function(qb,rb,sb,tb){var ub={exports:{}},vb=ub.exports;(function(){'use strict';var wb=g.getFbeventsModules('SignalsFBEventsQE');function xb(){wb.call(this,[{name:'beacon',range:[0,.02],code:'b',passRate:.5}])}xb.prototype=wb.prototype;xb.instance=new xb();ub.exports=xb})();return ub.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsPixelEndpoint',function(){return function(qb,rb,sb,tb){var ub={exports:{}},vb=ub.exports;(function(){'use strict';var wb=g.getFbeventsModules('SignalsEvents'),xb=g.getFbeventsModules('SignalsFBEventsExperiments'),yb=g.getFbeventsModules('SignalsFBEventsUtils'),zb=yb.sendGET,ac=yb.sendPOST,bc=yb.sendBeacon,cc=g.getFbeventsModules('SignalsParamList'),dc=wb.trigger,ec={ENDPOINT:'https://www.facebook.com/tr/'},fc=sb.href,gc=qb.top!==qb,hc=rb.referrer;function ic(lc,mc,nc,oc){lc.append('id',mc);lc.append('ev',nc);lc.append('dl',fc);lc.append('rl',hc);lc.append('if',gc);lc.append('ts',new Date().valueOf());lc.append('cd',oc);return lc}function jc(lc,mc,nc,oc,pc){var qc=new cc(pc);ic(qc,lc,mc,nc);if(oc)qc.addRange(oc);var rc=false,sc=new xb().get('beacon');if(sc!=null){rc=sc.isInExperimentGroup;qc.append('exp',sc.code)}if(rc&&bc(qc,ec.ENDPOINT)){dc('fired','BEACON',qc);return}if(zb(qc,ec.ENDPOINT)){dc('fired','GET',qc);return}if(ac(qc,ec.ENDPOINT)){dc('fired','POST',qc);return}throw new Error('No working send method found for this fire.')}function kc(lc,mc,nc,oc,pc){if(qb.navigator&&qb.navigator.sendBeacon){var qc=new cc(pc);ic(qc,lc,mc,nc);if(oc)qc.addRange(oc);bc(qc,ec.ENDPOINT)}}ub.exports={CONFIG:ec,sendEvent:jc,sendBeaconPII:kc}})();return ub.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsEventValidation',function(){return function(qb,rb,sb,tb){var ub={exports:{}},vb=ub.exports;(function(){'use strict';var wb=/^[+-]?\d+(\.\d+)?$/,xb='number',yb='currency_code',zb={AED:1,ARS:1,AUD:1,BOB:1,BRL:1,CAD:1,CHF:1,CLP:1,CNY:1,COP:1,CRC:1,CZK:1,DKK:1,EUR:1,GBP:1,GTQ:1,HKD:1,HNL:1,HUF:1,IDR:1,ILS:1,INR:1,ISK:1,JPY:1,KRW:1,MOP:1,MXN:1,MYR:1,NIO:1,NOK:1,NZD:1,PEN:1,PHP:1,PLN:1,PYG:1,QAR:1,RON:1,RUB:1,SAR:1,SEK:1,SGD:1,THB:1,TRY:1,TWD:1,USD:1,UYU:1,VEF:1,VND:1,ZAR:1},ac={value:{type:xb,isRequired:true},currency:{type:yb,isRequired:true}},bc={PageView:{},ViewContent:{},Search:{},AddToCart:{},AddToWishlist:{},InitiateCheckout:{},PixelInitialized:{},AddPaymentInfo:{},Purchase:{validationSchema:ac},Lead:{},CompleteRegistration:{},CustomEvent:{validationSchema:{event:{isRequired:true}}}},cc={agent:true},dc=Object.prototype.hasOwnProperty;function ec(hc,ic,jc){this.error=null;this.warnings=[];this.eventName=hc;this.params=ic||{};this.metadata=jc}ec.prototype.validateMetadata=function(){if(this.metadata){var hc=this.metadata.toLowerCase(),ic=cc[hc];if(!ic)return this._error('Unsupported metadata argument: '+hc);}return this};ec.prototype.validateEvent=function(){var hc=this.eventName;if(!hc)return this;var ic=bc[hc];if(!ic){this.warnings.push("You are sending a non-standard event '"+hc+"'. The "+'preferred way to send events is using trackCustom. See '+'https://www.facebookmarketingdevelopers.com/pixels/up#sec-custom '+'for more information');return this}var jc=ic.validationSchema;for(var kc in jc)if(dc.call(jc,kc)){var lc=jc[kc];if(lc){if(lc.isRequired&&!dc.call(this.params,kc))return this._error('Required parameter "'+kc+'" is missing for event "'+hc+'"');if(lc.type&&typeof lc.type==='string')if(!this._validateParam(kc,lc.type))return this._error('Parameter "'+kc+'" is invalid for event "'+hc+'"');}}return this};ec.prototype._validateParam=function(hc,ic){var jc=this.params[hc];switch(ic){case xb:var kc=(typeof jc==='string'||typeof jc==='number')&&wb.test(''+jc);if(kc&&Number(jc)<0)this.warnings.push('Parameter "'+hc+'" is negative for event "'+(this.eventName?this.eventName:'null')+'"');return kc;case yb:return typeof jc==='string'&&!!zb[jc.toUpperCase()];}return true};ec.prototype._error=function(hc){this.error=hc;return this};function fc(hc){return new ec(null,null,hc).validateMetadata()}function gc(hc,ic){return new ec(hc,ic).validateEvent()}ub.exports={validateMetadata:fc,validateEvent:gc,Validator:ec}})();return ub.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsOptIn',function(){return function(qb,rb,sb,tb){var ub={exports:{}},vb=ub.exports;(function(){'use strict';var wb=g.getFbeventsModules('SignalsFBEventsUtils'),xb=wb.each,yb=wb.filter,zb=wb.invariant,ac=wb.keys,bc=wb.some;function cc(ec){xb(ac(ec),function(fc){return zb(bc(ec[fc],function(gc){return Object.prototype.hasOwnProperty.call(ec,gc)})===false,'Circular subOpts are not allowed.  %s depends on another subOpt',fc)})}function dc(ec){this._opts={};this._subOpts=ec||{};cc(this._subOpts)}dc.prototype._getOpts=function(ec){return [].concat(j(Object.prototype.hasOwnProperty.call(this._subOpts,ec)?this._subOpts[ec]:[]),[ec])};dc.prototype._setOpt=function(ec,fc,gc){if(!this._opts[fc])this._opts[fc]={};this._opts[fc][ec]=gc};dc.prototype.optIn=function(ec,fc){var gc=this,hc=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;xb(this._getOpts(fc),function(ic){var jc=hc==true&&gc.isOptedOut(ec,fc);if(!jc)gc._setOpt(ec,ic,true);});return this};dc.prototype.optOut=function(ec,fc){var gc=this;xb(this._getOpts(fc),function(hc){return gc._setOpt(ec,hc,false)});return this};dc.prototype.isOptedIn=function(ec,fc){return this._opts[fc]&&this._opts[fc][ec]===true};dc.prototype.isOptedOut=function(ec,fc){return this._opts[fc]&&this._opts[fc][ec]===false};dc.prototype.listPixelIds=function(ec){var fc=this;return this._opts[ec]?yb(ac(this._opts[ec]),function(gc){return fc._opts[ec][gc]}):[]};ub.exports=dc})();return ub.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsPluginPath',function(){return function(qb,rb,sb,tb){var ub={exports:{}},vb=ub.exports;(function(){'use strict';var wb=/([/]en_US)?[/](fbevents|signals)([.]js|[/])/;function xb(){var ac=null,bc=null,cc=rb.getElementsByTagName('script');for(var dc=0;dc<cc.length&&!ac;dc++){var ec=cc[dc].src.split(wb);if(ec.length>1){ac=ec[0];bc=cc[dc]}}return {baseURL:ac,scriptElement:bc}}var yb=null;function zb(){if(!yb)yb=xb();return yb}ub.exports={get:zb}})();return ub.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsFireLock',function(){return function(qb,rb,sb,tb){var ub={exports:{}},vb=ub.exports;(function(){'use strict';var wb=g.getFbeventsModules('SignalsFBEventsUtils'),xb=wb.each,yb=wb.keys;function zb(){this._locks={};this._callbacks=[]}zb.prototype={lock:function ac(bc){this._locks[bc]=true},release:function ac(bc){if(Object.prototype.hasOwnProperty.call(this._locks,bc)){delete this._locks[bc];if(yb(this._locks).length===0)xb(this._callbacks,function(cc){return cc(bc)});}},onUnlocked:function ac(bc){this._callbacks.push(bc)},isLocked:function ac(){return yb(this._locks).length>0}};zb.global=new zb();zb.global.lockPlugin=function(ac){this.lock('plugin:'+ac)};zb.global.releasePlugin=function(ac){this.release('plugin:'+ac)};zb.global.lockConfig=function(ac){this.lock('config:'+ac)};zb.global.releaseConfig=function(ac){this.release('config:'+ac)};ub.exports=zb})();return ub.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsConstants',function(){return function(qb,rb,sb,tb){var ub={exports:{}},vb=ub.exports;(function(){'use strict';ub.exports={ERRORS:{PREFIX:function wb(xb,yb){if(xb!=null){return '[ID:'+(typeof xb==='string'?xb:xb.id)+'] '+yb}else return yb;},PII_INVALID:function wb(xb,yb){return 'An invalid '+xb+" was specified for '"+yb+"'. This data will not be sent with any events for this Pixel."}}}})();return ub.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsFBQ',function(){return function(qb,rb,sb,tb){var ub={exports:{}},vb=ub.exports;(function(){'use strict';var wb=g.getFbeventsModules('SignalsFBEventsOptIn'),xb=g.getFbeventsModules('SignalsParamList'),yb=g.getFbeventsModules('SignalsPixelEndpoint'),zb=g.getFbeventsModules('SignalsFBEventsPluginPath'),ac=g.getFbeventsModules('SignalsFBEventsUtils'),bc=g.getFbeventsModules('SignalsEventValidation'),cc=g.getFbeventsModules('SignalsFBEventsFireLock'),dc=g.getFbeventsModules('SignalsFBEventsConstants'),ec=dc.ERRORS,fc=ac.each,gc=ac.invariant,hc=ac.keys,ic=ac.logError,jc=ac.logErrorOnce,kc=ac.map,lc=ac.some,mc={Dwell:true,InferredEvents:true,Microdata:true,FPCookie:true,Sessions:true,TimeSpent:true,Interaction:true},nc=['InferredEvents','Microdata'],oc={AutomaticSetup:nc},pc={Dwell:['dwell'],FPCookie:['fpcookie'],InferredEvents:['inferredevents','identity'],Microdata:['microdata','identity'],Sessions:['sessions'],TimeSpent:['timespent'],Interaction:['interaction','timespent']};function qc(uc){return !!(mc[uc]||oc[uc])}function rc(uc,vc){var wc=zb.get();wc.baseURL&&wc.scriptElement||gc(0);var xc=wc.baseURL+'/signals/config/'+uc+'?v='+vc,yc=rb.createElement('script');yc.src=xc;yc.async=true;if(wc.scriptElement&&wc.scriptElement.parentNode)wc.scriptElement.parentNode.insertBefore(yc,wc.scriptElement);}var sc={VALID_FEATURES:mc,optIn:function uc(vc,wc){var xc=this,yc=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;typeof wc==='string'&&qc(wc)||gc(0);if(qc(wc)){this.optIns.optIn(vc,wc,yc);fc([wc].concat(j(oc[wc]||[])),function(zc){if(pc[zc])fc(pc[zc],function(ad){return xc.fbq.loadPlugin(ad)});})}return this},optOut:function uc(vc,wc){this.optIns.optOut(vc,wc);return this},trackSingleCustom:function uc(vc,wc,xc){var yc=typeof vc==='string'?vc:vc.id,zc=this.getDefaultSendData(yc,wc);zc.customData=xc;this.fire(zc,false);return this},enqueue:function uc(){for(var vc=arguments.length,wc=Array(vc),xc=0;xc<vc;xc++)wc[xc]=arguments[xc];this.queue.append(wc);return this},_validateSend:function uc(vc,wc){vc.eventName&&vc.eventName.length||gc(0);vc.pixelId&&vc.pixelId.length||gc(0);if(vc.set)fc(kc(hc(vc.set),function(yc){return bc.validateMetadata(yc)}),function(yc){if(yc.error)throw new Error(yc.error);if(yc.warnings.length)fc(yc.warnings,ac.logWarning);});if(wc){var xc=bc.validateEvent(vc.eventName,vc.customData||{});if(xc.error)throw new Error(xc.error);if(xc.warnings&&xc.warnings.length)fc(xc.warnings,ac.logWarning);}return this},fire:function uc(vc){var wc=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;this._validateSend(vc,wc);if(vc.userData&&hc(vc.userData).length>0&&!this.fbq.loadPlugin('identity')){this.enqueue('fire',vc);return this}var xc=new xb(this.fbq.piiTranslator);try{xc.append('ud',vc.userData,true)}catch(zc){this.fbq.trigger('pii_invalidated',vc.pixelId,zc.message);jc(new Error(ec.PREFIX(vc.pixelId,zc.message)))}xc.append('v',this.fbq.version);vc.set&&vc.set.agent&&xc.append('a',vc.set.agent);var yc=this.fbq.trigger('getCustomParameters',{id:vc.pixelId});fc(yc,function(zc){return fc(hc(zc),function(ad){if(xc.containsKey(ad)){ic(new Error('Custom parameter '+ad+' has already been specified.'))}else xc.append(ad,zc[ad]);})});yb.sendEvent(vc.pixelId,vc.eventName,vc.customData,xc);return this},callMethod:function uc(vc){var wc=vc[0],xc=Array.prototype.slice.call(vc,1);if(typeof this[wc]==='function'){try{this[wc].apply(this,xc)}catch(yc){ic(yc)}}else ic(new Error('Invalid FBQ method '+wc));},getDefaultSendData:function uc(vc,wc){var xc=this.getPixel(vc),yc={pixelId:vc,eventName:wc};if(xc){if(xc.userData)yc.userData=xc.userData;if(xc.agent){yc.set={agent:xc.agent}}else if(this.fbq.agent)yc.set={agent:this.fbq.agent};}return yc},getOptedInPixels:function uc(vc){var wc=this;return this.optIns.listPixelIds(vc).map(function(xc){return wc.pixelsByID[xc]})},ensurePixel:function uc(vc){Object.prototype.hasOwnProperty.call(this.pixelsByID,vc)||gc(0)},getPixel:function uc(vc){this.ensurePixel(vc);return this.pixelsByID[vc]},loadConfig:function uc(vc){if(this.fbq.disableConfigLoading||Object.prototype.hasOwnProperty.call(this.configsLoaded,vc))return;this.locks.lockConfig(vc);if(!this.fbq.pendingConfigs||lc(this.fbq.pendingConfigs,function(wc){return wc===vc})==false)rc(vc,this.VERSION);},configLoaded:function uc(vc){this.configsLoaded[vc]=true;this.locks.releaseConfig(vc);this.fbq.trigger('configLoaded',vc)}};function tc(uc,vc){var wc=this;this.VERSION=uc.version;this.pixelsByID=vc;this.fbq=uc;this.optIns=new wb(oc);this.configsLoaded={};this.locks=cc.global;fc(uc.pendingConfigs||[],function(xc){return wc.locks.lockConfig(xc)})}tc.prototype=sc;ub.exports=tc})();return ub.exports}(a,b,c,d)});g.ensureModuleRegistered('undefined',function(){return undefined});'use strict';var g=a.fbq;g.execStart=a.performance&&typeof a.performance.now==='function'?a.performance.now():null;var k=g.getFbeventsModules('SignalsParamList'),l=g.getFbeventsModules('SignalsPixelEndpoint'),m=g.getFbeventsModules('SignalsEvents'),n=g.getFbeventsModules('SignalsFBEventsUtils'),o=g.getFbeventsModules('SignalsEventValidation'),p=g.getFbeventsModules('SignalsFBEventsFBQ'),q=g.getFbeventsModules('SignalsFBEventsPluginPath'),r=g.getFbeventsModules('SignalsFBEventsFireLock'),s=g.getFbeventsModules('SignalsFBEventsConstants'),t=s.ERRORS,u=m.on,v=m.once,w=m.trigger,x=n.each,y=n.FBSet,z=n.invariant,aa=n.isArray,ba=n.isEmptyObject,ca=n.isNumber,da=n.keys,ea=n.logError,fa=n.logErrorOnce,ga=n.makeSafe,ha=r.global;function ia(qb){return g.getFbeventsModules(qb)}function ja(qb){return g.fbIsModuleLoaded(qb)}var ka={},la=-1,ma=Array.prototype.slice,na=Object.prototype.hasOwnProperty,oa=c.href,pa=false,qa=false,ra=[],sa={},ta=b.referrer,ua={PageView:new y(),PixelInitialized:new y()},va=new p(g,sa);function wa(qb){for(var rb in qb)if(na.call(qb,rb))this[rb]=qb[rb];return this}function xa(qb){try{if(ha.isLocked()){g.queue.push(arguments);return}var rb=ma.call(arguments),sb=rb.length===1&&aa(rb[0]);if(sb)rb=rb[0];if(typeof rb[0]!=='string')ea(new Error('The first argument to fbq must be a method name.'));if(qb.slice(0,6)==='report'){var tb=qb.slice(6);if(tb==='CustomEvent'){tb=(rb[1]||{}).event||tb;rb=['trackCustom',tb].concat(rb.slice(1))}else rb=['track',tb].concat(rb.slice(1));}qb=rb.shift();switch(qb){case 'addPixelId':pa=true;za.apply(this,rb);break;case 'init':qa=true;za.apply(this,rb);break;case 'set':ya.apply(this,rb);break;case 'track':if(ca(rb[0])){eb.apply(this,rb);break}if(sb){db.apply(this,rb);break}cb.apply(this,rb);break;case 'trackCustom':db.apply(this,rb);break;case 'send':fb.apply(this,rb);break;case 'on':u.apply(null,rb);break;case 'loadPlugin':kb(rb[0]);break;default:va.callMethod(arguments);break;}}catch(ub){ea(ub)}}function ya(qb){for(var rb=arguments.length,sb=Array(rb>1?rb-1:0),tb=1;tb<rb;tb++)sb[tb-1]=arguments[tb];switch(qb){case 'endpoint':var ub=sb[0];typeof ub==='string'||z(0);l.CONFIG.ENDPOINT=ub;break;case 'autoConfig':{var vb=sb[0],wb=sb[1],xb=vb===true||vb==='true'?'optIn':'optOut';typeof wb==='string'||z(0);va.callMethod([xb,wb,'AutomaticSetup']);break}default:{var yb=sb[0],zb=sb[1];typeof qb==='string'||z(0);typeof yb==='string'||z(0);typeof zb==='string'||z(0);bb(qb,yb,zb);break}}}g._initHandlers=[];g._initsDone={};function za(qb,rb,sb){la=la===-1?Date.now():la;if(na.call(sa,qb)){if(rb&&ba(sa[qb].userData)){sa[qb].userData=rb;kb('identity')}else n.logError(new Error('Duplicate Pixel ID: '+qb));return}var tb={agent:sb?sb.agent:null,id:qb,userData:rb||{},eventCount:0};ra.push(tb);sa[qb]=tb;if(rb!=null)kb('identity');ab();va.loadConfig(qb)}function ab(){g._initHandlers.forEach(function(qb,rb){if(!g._initsDone[rb])g._initsDone[rb]={};ra.forEach(function(sb){if(!g._initsDone[rb][sb.id]){g._initsDone[rb][sb.id]=true;qb(sb)}})})}function bb(qb,rb,sb){var tb=o.validateMetadata(qb);if(tb.error)n.logError(tb.error);if(tb.warnings)for(var ub=0;ub<tb.warnings.length;ub++)n.logWarning(tb.warnings[ub]);if(na.call(sa,sb)){for(var vb=0,wb=ra.length;vb<wb;vb++)if(ra[vb].id===sb){ra[vb][qb]=rb;break}}else n.logWarning('Trying to set argument '+rb+(' for uninitialized pixel ID '+sb));}function cb(qb,rb){rb=rb||{};var sb=o.validateEvent(qb,rb);if(sb.error)n.logError(sb.error);if(sb.warnings)for(var tb=0;tb<sb.warnings.length;tb++)n.logWarning(sb.warnings[tb]);if(qb==='CustomEvent'&&typeof rb.event==='string')qb=rb.event;db.call(this,qb,rb)}function db(qb,rb){for(var sb=0,tb=ra.length;sb<tb;sb++){var ub=ra[sb];if(!(qb==='PageView'&&this.allowDuplicatePageViews)&&Object.prototype.hasOwnProperty.call(ua,qb)&&ua[qb].has(ub.id))continue;hb(ub,qb,rb);if(Object.prototype.hasOwnProperty.call(ua,qb))ua[qb].add(ub.id);}}function eb(qb,rb){hb(null,qb,rb)}function fb(qb,rb){for(var sb=0,tb=ra.length;sb<tb;sb++)hb(ra[sb],qb,rb);}function gb(qb){var rb=new k(g.piiTranslator);try{rb.append('ud',qb&&qb.userData||{},true)}catch(tb){w('pii_invalidated',qb,tb.message);fa(new Error(t.PREFIX(qb,tb.message)))}rb.append('v',g.version);rb.append('a',qb&&qb.agent?qb.agent:g.agent);if(qb){rb.append('ec',qb.eventCount);qb.eventCount++}var sb=w('getCustomParameters',qb);x(sb,function(tb){return x(da(tb),function(ub){if(rb.containsKey(ub)){ea(new Error('Custom parameter '+ub+' has already been specified.'))}else rb.append(ub,tb[ub]);})});rb.append('it',la);return rb}function hb(qb,rb,sb){l.sendEvent(qb?qb.id:null,rb,sb,gb(qb))}function ib(){while(g.queue.length&&!ha.isLocked()){var qb=g.queue.shift();xa.apply(g,qb)}}function jb(qb){return 'fbevents.plugins.'+qb}function kb(qb){if(/^[a-zA-Z]\w+$/.test(qb)===false){ea(new Error("'"+qb+"' is an invalid plugin name."));return true}var rb=jb(qb);if(ka[rb])return true;if(ja(rb)){lb(rb,ia(rb));return true}var sb=q.get();if(sb.baseURL&&sb.scriptElement){var tb=sb.baseURL+'/signals/plugins/'+qb+'.js?v='+g.version;if(!ka[rb]){ha.lockPlugin(rb);var ub=b.createElement('script');ub.src=tb;ub.async=true;if(sb.scriptElement&&sb.scriptElement.parentNode)sb.scriptElement.parentNode.insertBefore(ub,sb.scriptElement);}}return false}function lb(qb,rb){if(Object.prototype.hasOwnProperty.call(ka,qb))return;if(na.call(rb,'__fbEventsPlugin')&&rb.__fbEventsPlugin===1){ka[qb]=rb;ka[qb].plugin(g,va);w('pluginLoaded',qb)}ha.releasePlugin(qb)}ha.onUnlocked(function(){ib()});if(g.pixelId){pa=true;za(g.pixelId)}if(pa&&qa||a.fbq!==a._fbq)n.logWarning('Multiple pixels with conflicting versions were detected on this page');if(ra.length>1)n.logWarning('Multiple different pixels were detected on this page');function mb(){if(g.disablePushState===true)return;if(!d.pushState||!d.replaceState)return;var qb=ga(function(){ta=oa;oa=c.href;if(oa===ta)return;var rb=new wa({allowDuplicatePageViews:true});xa.call(rb,'trackCustom','PageView')});n.injectMethod(d,'pushState',qb);n.injectMethod(d,'replaceState',qb);a.addEventListener('popstate',qb,false)}v('fired',function(){return mb()});function nb(qb){g._initHandlers.push(qb);ab()}function ob(){return {pixelInitializationTime:la,pixels:ra}}function pb(qb){qb.instance=va;qb.callMethod=xa;qb.loadPlugin=kb;qb.registerPlugin=lb;qb._initHandlers=[];qb._initsDone={};qb.on=u;qb.once=v;qb.send=fb;qb.trigger=w;qb.getEventCustomParameters=gb;qb.addInitHandler=nb;qb.getState=ob;qb.init=za;qb.set=ya}pb(a.fbq);ib();e.exports={addInitHandler:function qb(rb){g._initHandlers.push(rb);ab()},doExport:pb,getState:ob,getEventCustomParameters:gb,sendEvent:hb,loadPlugin:kb};w('execEnd');w('initialized',g);if(g.registerPlugin)g.registerPlugin('fbevents',e.exports);g.ensureModuleRegistered('fbevents',function(){return e.exports})})();return e.exports})(window,document,location,history);
fbq.registerPlugin("global_config", {__fbEventsPlugin: 1, plugin: function(fbq, instance) { fbq.loadPlugin("opttracking");instance.configLoaded("global_config"); }});