(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[2],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(7),c=r.n(n),a=r(15),o=r(12),s=r(125),i=r(18),u=r(8);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:""},p=d(d({},f),{},{email:"",phone:""}),b=function(e){return Object(u.mapValues)(e,(function(e){return Object(i.decodeEntities)(e)}))},m={cartCoupons:[],cartItems:[],cartItemsCount:0,cartItemsWeight:0,cartNeedsPayment:!0,cartNeedsShipping:!0,cartItemErrors:[],cartTotals:{},cartIsLoading:!0,cartErrors:[],billingAddress:p,shippingAddress:f,shippingRates:[],shippingRatesLoading:!1,cartHasCalculatedShipping:!1,receiveCart:function(){}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{shouldSelect:!0},t=Object(s.a)(),r=t.isEditor,n=t.previewData,c=(null==n?void 0:n.previewCart)||{},i=e.shouldSelect,u=Object(o.useSelect)((function(e,t){var n=t.dispatch;if(!i)return m;if(r)return{cartCoupons:c.coupons,cartItems:c.items,cartItemsCount:c.items_count,cartItemsWeight:c.items_weight,cartNeedsPayment:c.needs_payment,cartNeedsShipping:c.needs_shipping,cartItemErrors:[],cartTotals:c.totals,cartIsLoading:!1,cartErrors:[],billingAddress:p,shippingAddress:f,shippingRates:c.shipping_rates,shippingRatesLoading:!1,cartHasCalculatedShipping:c.has_calculated_shipping,receiveCart:"function"==typeof(null==c?void 0:c.receiveCart)?c.receiveCart:function(){}};var o=e(a.CART_STORE_KEY),s=o.getCartData(),u=o.getCartErrors(),l=o.getCartTotals(),d=!o.hasFinishedResolution("getCartData"),v=o.isCustomerDataUpdating(),h=n(a.CART_STORE_KEY).receiveCart,g=b(s.billingAddress),O=s.needsShipping?b(s.shippingAddress):g;return{cartCoupons:s.coupons,cartItems:s.items||[],cartItemsCount:s.itemsCount,cartItemsWeight:s.itemsWeight,cartNeedsPayment:s.needsPayment,cartNeedsShipping:s.needsShipping,cartItemErrors:s.errors||[],cartTotals:l,cartIsLoading:d,cartErrors:u,billingAddress:g,shippingAddress:O,shippingRates:s.shippingRates||[],shippingRatesLoading:v,cartHasCalculatedShipping:s.hasCalculatedShipping,receiveCart:h}}),[i]);return u}},118:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(7),c=r.n(n),a=r(8);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i="add_event_callback",u="remove_event_callback",l={addEventCallback:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{id:Object(a.uniqueId)(),type:i,eventType:e,callback:t,priority:r}},removeEventCallback:function(e,t){return{id:t,type:u,eventType:e}}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.eventType,a=t.id,o=t.callback,l=t.priority,d=new Map(e[n]);switch(r){case i:return d.set(a,{priority:l,callback:o}),s(s({},e),{},c()({},n,d));case u:return d.delete(a),s(s({},e),{},c()({},n,d))}return e}},154:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(62),c=(r(3),r(158),function(e){var t=e.errorMessage,r=void 0===t?"":t,c=e.propertyName,a=void 0===c?"":c,o=e.elementId,s=void 0===o?"":o,i=Object(n.b)(),u=i.getValidationError,l=i.getValidationErrorId;if(!r){var d=u(a)||{};if(!d.message||d.hidden)return null;r=d.message}return React.createElement("div",{className:"wc-block-components-validation-error",role:"alert"},React.createElement("p",{id:l(s)},r))})},158:function(e,t){},159:function(e,t){},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e,t){var r=[];return Object.keys(e).forEach((function(n){if(void 0!==t[n])switch(e[n].type){case"boolean":r[n]="false"!==t[n]&&!1!==t[n];break;case"number":r[n]=parseInt(t[n],10);break;case"array":case"object":r[n]=JSON.parse(t[n]);break;default:r[n]=t[n]}else r[n]=e[n].default})),r}},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=function(e,t){return!!e.type&&e.type===t},c={SUCCESS:"success",FAIL:"failure",ERROR:"error"},a={PAYMENTS:"wc/payment-area",EXPRESS_PAYMENTS:"wc/express-payment-area"},o=function(e){return n(e,c.SUCCESS)},s=function(e){return n(e,c.ERROR)},i=function(e){return n(e,c.FAIL)},u=function(e){return void 0===e.retry||!0===e.retry},l=function(){return{responseTypes:c,noticeContexts:a,shouldRetry:u,isSuccessResponse:o,isErrorResponse:s,isFailResponse:i}}},202:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(118),c=function(e,t){return function(r){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=n.a.addEventCallback(e,r,c);return t(a),function(){t(n.a.removeEventCallback(e,a.id))}}}},203:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return p}));var n=r(27),c=r.n(n),a=r(29),o=r.n(a),s=r(48),i=r.n(s);function u(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e,t){return e[t]?Array.from(e[t].values()).sort((function(e,t){return e.priority-t.priority})):[]},f=function(){var e=i()(c.a.mark((function e(t,r,n){var a,s,i,l,f,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=d(t,r),s=[],i=u(a),e.prev=3,i.s();case 5:if((l=i.n()).done){e.next=19;break}return f=l.value,e.prev=7,e.next=10,Promise.resolve(f.callback(n));case 10:p=e.sent,"object"===o()(p)&&s.push(p),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.error(e.t0);case 17:e.next=5;break;case 19:e.next=24;break;case 21:e.prev=21,e.t1=e.catch(3),i.e(e.t1);case 24:return e.prev=24,i.f(),e.finish(24);case 27:return e.abrupt("return",!s.length||s);case 28:case"end":return e.stop()}}),e,null,[[3,21,24,27],[7,14]])})));return function(t,r,n){return e.apply(this,arguments)}}(),p=function(){var e=i()(c.a.mark((function e(t,r,n){var a,s,i,l,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=d(t,r),s=u(a),e.prev=2,s.s();case 4:if((i=s.n()).done){e.next=23;break}return l=i.value,e.prev=6,e.next=9,Promise.resolve(l.callback(n));case 9:if(f=e.sent,"object"===o()(f)){e.next=12;break}return e.abrupt("continue",21);case 12:if(void 0!==f.type){e.next=14;break}throw new Error("If you want to abort event emitter processing, your observer must return an object with a type property");case 14:return e.abrupt("return",f);case 17:return e.prev=17,e.t0=e.catch(6),console.error(e.t0),e.abrupt("return",{type:"error"});case 21:e.next=4;break;case 23:e.next=28;break;case 25:e.prev=25,e.t1=e.catch(2),s.e(e.t1);case 28:return e.prev=28,s.f(),e.finish(28);case 31:return e.abrupt("return",!0);case 32:case"end":return e.stop()}}),e,null,[[2,25,28,31],[6,17]])})));return function(t,r,n){return e.apply(this,arguments)}}()},285:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return o}));var n=window.Event||null,c=function(e,t){var r=t.bubbles,c=void 0!==r&&r,a=t.cancelable,o=void 0!==a&&a,s=t.element;if(s||(s=document.body),"function"==typeof n){var i=new n(e,{bubbles:c,cancelable:o});s.dispatchEvent(i)}else{var u=document.createEvent("Event");u.initEvent(e,c,o),s.dispatchEvent(u)}},a=function(){c("wc_fragment_refresh",{bubbles:!0,cancelable:!0})},o=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("function"!=typeof jQuery)return function(){};var a=function(){c(t,{bubbles:r,cancelable:n})};return jQuery(document).on(e,a),function(){return jQuery(document).off(e,a)}}},286:function(e,t,r){"use strict";var n=r(28),c=React.createElement(n.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},React.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),React.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}));t.a=c},292:function(e,t,r){"use strict";var n=r(11),c=r.n(n),a=r(188);t.a=function(e){return function(t){return function(r){var n=Object(a.a)(e,r);return React.createElement(t,c()({},r,n))}}}},299:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(10),c=r.n(n),a=r(0),o=r(12),s=r(116),i=r(15),u=r(18),l=r(112),d=function(e,t){var r=e.find((function(e){return e.id===t}));return r?r.quantity:0},f=function(e){var t=Object(o.useDispatch)(i.CART_STORE_KEY).addItemToCart,r=Object(s.a)(),n=r.cartItems,f=r.cartIsLoading,p=Object(l.a)(),b=p.addErrorNotice,m=p.removeNotice,v=Object(a.useState)(!1),h=c()(v,2),g=h[0],O=h[1],y=Object(a.useRef)(d(n,e));return Object(a.useEffect)((function(){var t=d(n,e);t!==y.current&&(y.current=t)}),[n,e]),{cartQuantity:Number.isFinite(y.current)?y.current:0,addingToCart:g,cartIsLoading:f,addToCart:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;O(!0),t(e,r).then((function(e){!0===e&&m("add-to-cart")})).catch((function(e){b(Object(u.decodeEntities)(e.message),{context:"wc/all-products",id:"add-to-cart",isDismissible:!0})})).finally((function(){O(!1)}))}}}},305:function(e,t){},306:function(e,t){},315:function(e,t,r){"use strict";r.r(t);var n=r(292),c=(r(3),r(5)),a=r.n(c),o=r(62),s=r(10),i=r.n(s),u=r(0),l=r(1),d=r(38),f=r(112),p=r(201),b=function(e){return e.is_purchasable||!1},m="pristine",v="idle",h="disabled",g="processing",O="before_processing",y="after_processing",j={status:m,hasError:!1,quantity:1,processingResponse:null,requestParams:{}},E="set_pristine",w="set_idle",P="set_disabled",k="set_processing",_="set_before_processing",R="set_after_processing",C="set_processing_response",S="set_has_error",A="set_no_error",x="set_quantity",D="set_request_params",T=E,I=w,N=P,q=k,V=_,F=R,Q=C,W=S,B=A,L=x,M=D,H=function(){return{type:T}},Y=function(){return{type:I}},U=function(){return{type:N}},J=function(){return{type:q}},K=function(){return{type:V}},z=function(){return{type:F}},G=function(e){return{type:Q,data:e}},X=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=e?W:B;return{type:t}},$=function(e){return{type:L,quantity:e}},Z=function(e){return{type:M,data:e}},ee=r(7),te=r.n(ee);function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(Object(r),!0).forEach((function(t){te()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce=E,ae=w,oe=P,se=k,ie=_,ue=R,le=C,de=S,fe=A,pe=x,be=D,me=m,ve=v,he=h,ge=g,Oe=O,ye=y,je=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,r=arguments.length>1?arguments[1]:void 0,n=r.quantity,c=r.type,a=r.data;switch(c){case ce:e=j;break;case ae:e=t.status!==ve?ne(ne({},t),{},{status:ve}):t;break;case oe:e=t.status!==he?ne(ne({},t),{},{status:he}):t;break;case pe:e=n!==t.quantity?ne(ne({},t),{},{quantity:n}):t;break;case be:e=ne(ne({},t),{},{requestParams:ne(ne({},t.requestParams),a)});break;case le:e=ne(ne({},t),{},{processingResponse:a});break;case se:e=!1===(e=t.status!==ge?ne(ne({},t),{},{status:ge,hasError:!1}):t).hasError?e:ne(ne({},e),{},{hasError:!1});break;case ie:e=t.status!==Oe?ne(ne({},t),{},{status:Oe,hasError:!1}):t;break;case ue:e=t.status!==ye?ne(ne({},t),{},{status:ye}):t;break;case de:e=t.hasError?t:ne(ne({},t),{},{hasError:!0}),e=t.status===ge||t.status===Oe?ne(ne({},e),{},{status:ve}):e;break;case fe:e=t.hasError?ne(ne({},t),{},{hasError:!1}):t}return e!==t&&c!==ce&&e.status===me&&(e.status=ve),e},Ee=r(118),we=r(202),Pe="add_to_cart_before_processing",ke="add_to_cart_after_processing_with_success",_e="add_to_cart_after_processing_with_error",Re=function(e){return{onAddToCartAfterProcessingWithSuccess:Object(we.a)(ke,e),onAddToCartProcessingWithError:Object(we.a)(_e,e),onAddToCartBeforeProcessing:Object(we.a)(Pe,e)}},Ce=r(203),Se=Object(u.createContext)({product:{},productType:"simple",productIsPurchasable:!0,productHasOptions:!1,supportsFormElements:!0,showFormElements:!1,quantity:0,minQuantity:1,maxQuantity:99,requestParams:{},isIdle:!1,isDisabled:!1,isProcessing:!1,isBeforeProcessing:!1,isAfterProcessing:!1,hasError:!1,eventRegistration:{onAddToCartAfterProcessingWithSuccess:function(e){},onAddToCartAfterProcessingWithError:function(e){},onAddToCartBeforeProcessing:function(e){}},dispatchActions:{resetForm:function(){},submitForm:function(){},setQuantity:function(e){},setHasError:function(e){},setAfterProcessing:function(e){},setRequestParams:function(e){}}}),Ae=function(){return Object(u.useContext)(Se)},xe=function(e){var t=e.children,r=e.product,n=e.showFormElements,c=Object(u.useReducer)(je,j),a=i()(c,2),s=a[0],m=a[1],E=Object(u.useReducer)(Ee.b,{}),w=i()(E,2),P=w[0],k=w[1],_=Object(d.a)(P),R=Object(f.a)(),C=R.addErrorNotice,S=R.removeNotices,A=Object(o.b)().setValidationErrors,x=Object(p.a)(),D=x.isSuccessResponse,T=x.isErrorResponse,I=x.isFailResponse,N=Object(u.useMemo)((function(){return{onAddToCartAfterProcessingWithSuccess:Re(k).onAddToCartAfterProcessingWithSuccess,onAddToCartAfterProcessingWithError:Re(k).onAddToCartAfterProcessingWithError,onAddToCartBeforeProcessing:Re(k).onAddToCartBeforeProcessing}}),[k]),q=Object(u.useMemo)((function(){return{resetForm:function(){m(H())},submitForm:function(){m(K())},setQuantity:function(e){m($(e))},setHasError:function(e){m(X(e))},setRequestParams:function(e){m(Z(e))},setAfterProcessing:function(e){m(G(e)),m(z())}}}),[]);Object(u.useEffect)((function(){var e=s.status,t=!r.id||!b(r);e!==h||t?e!==h&&t&&m(U()):m(Y())}),[s.status,r,m]),Object(u.useEffect)((function(){s.status===O&&(S("error"),Object(Ce.a)(_,Pe,{}).then((function(e){!0!==e?(Array.isArray(e)&&e.forEach((function(e){var t=e.errorMessage,r=e.validationErrors;t&&C(t),r&&A(r)})),m(Y())):m(J())})))}),[s.status,A,C,S,m,_]),Object(u.useEffect)((function(){if(s.status===y){var e={processingResponse:s.processingResponse},t=function(e){if(e.message){var t=e.messageContext?{context:e.messageContext}:void 0;C(e.message,t)}};if(s.hasError)return void Object(Ce.b)(_,_e,e).then((function(r){if(T(r)||I(r))t(r);else{var n,c=(null===(n=e.processingResponse)||void 0===n?void 0:n.message)||Object(l.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block");C(c,{id:"add-to-cart"})}m(Y())}));Object(Ce.b)(_,ke,e).then((function(e){T(e)||I(e)?(t(e),m(X(!0))):m(Y())}))}}),[s.status,s.hasError,s.processingResponse,q,C,T,I,D,_]);var V=function(e){return["simple","variable"].includes(e.type||"simple")}(r),F={product:r,productType:r.type||"simple",productIsPurchasable:b(r),productHasOptions:r.has_options||!1,supportsFormElements:V,showFormElements:n&&V,quantity:s.quantity,minQuantity:1,maxQuantity:r.quantity_limit||99,requestParams:s.requestParams,isIdle:s.status===v,isDisabled:s.status===h,isProcessing:s.status===g,isBeforeProcessing:s.status===O,isAfterProcessing:s.status===y,hasError:s.hasError,eventRegistration:N,dispatchActions:q};return React.createElement(Se.Provider,{value:F},t)},De=r(50),Te=r.n(De),Ie=r(116),Ne=r(18),qe=r(285);function Ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Fe=function(){var e=Ae(),t=e.dispatchActions,r=e.product,n=e.quantity,c=e.eventRegistration,a=e.hasError,s=e.isProcessing,d=e.requestParams,p=Object(o.b)(),b=p.hasValidationErrors,m=p.showAllValidationErrors,v=Object(f.a)(),h=v.addErrorNotice,g=v.removeNotice,O=Object(Ie.a)().receiveCart,y=Object(u.useState)(!1),j=i()(y,2),E=j[0],w=j[1],P=!a&&s,k=Object(u.useCallback)((function(){return!b||(m(),{type:"error"})}),[b,m]);Object(u.useEffect)((function(){var e=c.onAddToCartBeforeProcessing(k,0);return function(){e()}}),[c,k]);var _=Object(u.useCallback)((function(){w(!0),g("add-to-cart");var e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(r),!0).forEach((function(t){te()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({id:r.id||0,quantity:n},d);Te()({path:"/wc/store/cart/add-item",method:"POST",data:e,cache:"no-store",parse:!1}).then((function(e){Te.a.setNonce(e.headers),e.json().then((function(r){e.ok?O(r):(r.body&&r.body.message?h(Object(Ne.decodeEntities)(r.body.message),{id:"add-to-cart"}):h(Object(l.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block"),{id:"add-to-cart"}),t.setHasError()),t.setAfterProcessing(r),w(!1),Object(qe.c)()}))})).catch((function(e){e.json().then((function(e){var r;null!==(r=e.data)&&void 0!==r&&r.cart&&O(e.data.cart),t.setHasError(),t.setAfterProcessing(e),w(!1)}))}))}),[r,h,g,O,t,n,d]);return Object(u.useEffect)((function(){P&&!E&&_()}),[P,_,E]),null},Qe=function(e){var t=e.children,r=e.product,n=e.showFormElements;return React.createElement(o.a,null,React.createElement(xe,{product:r,showFormElements:n},t,React.createElement(Fe,null)))},We=r(73),Be=r(8),Le=r(198),Me=(r(305),r(79)),He=r(134),Ye=r(286),Ue=r(299),Je=function(e){var t=e.className,r=e.href,n=e.text;return React.createElement(Me.a,{className:t,href:r,rel:"nofollow"},n)},Ke=function(e){var t=e.className,r=e.quantityInCart,n=e.isProcessing,c=e.isDisabled,a=e.isDone,o=e.onClick;return React.createElement(Me.a,{className:t,disabled:c,showSpinner:n,onClick:o},a&&r>0?Object(l.sprintf)(Object(l._n)("%d in cart","%d in cart",r,"woo-gutenberg-products-block"),r):Object(l.__)("Add to cart","woo-gutenberg-products-block"),!!a&&React.createElement(He.a,{srcElement:Ye.a,alt:Object(l.__)("Done","woo-gutenberg-products-block")}))},ze=function(){var e=Ae(),t=e.showFormElements,r=e.productIsPurchasable,n=e.productHasOptions,c=e.product,a=e.productType,o=e.isDisabled,s=e.isProcessing,d=e.eventRegistration,f=e.hasError,p=e.dispatchActions,b=Object(Ue.a)(c.id||0).cartQuantity,m=Object(u.useState)(!1),v=i()(m,2),h=v[0],g=v[1],O=c.add_to_cart||{url:"",text:""};return Object(u.useEffect)((function(){var e=d.onAddToCartAfterProcessingWithSuccess((function(){return f||g(!0),!0}),0);return function(){e()}}),[d,f]),(t||!n&&"simple"===a)&&r?React.createElement(Ke,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:b,isDisabled:o,isProcessing:s,isDone:h,onClick:function(){return p.submitForm()}}):React.createElement(Je,{className:"wc-block-components-product-add-to-cart-button",href:O.url,text:O.text||Object(l.__)("View Product","woo-gutenberg-products-block")})},Ge=function(e){var t=e.disabled,r=e.min,n=e.max,c=e.value,a=e.onChange;return React.createElement("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:c,min:r,max:n,hidden:1===n,disabled:t,onChange:function(e){a(e.target.value)}})},Xe=function(e){var t=e.reason,r=void 0===t?Object(l.__)("Sorry, this product cannot be purchased.","woo-gutenberg-products-block"):t;return React.createElement("div",{className:"wc-block-components-product-add-to-cart-unavailable"},r)},$e=function(){var e=Ae(),t=e.product,r=e.quantity,n=e.minQuantity,c=e.maxQuantity,a=e.dispatchActions,o=e.isDisabled;return t.id&&!t.is_purchasable?React.createElement(Xe,null):t.id&&!t.is_in_stock?React.createElement(Xe,{reason:Object(l.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):React.createElement(React.Fragment,null,React.createElement(Ge,{value:r,min:n,max:c,disabled:o,onChange:a.setQuantity}),React.createElement(ze,null))},Ze=(r(306),r(45)),et=r.n(Ze),tt=r(200),rt=r(2),nt=r(154),ct={value:"",label:Object(l.__)("Select an option","woo-gutenberg-products-block")},at=function(e){var t=e.attributeName,r=e.options,n=void 0===r?[]:r,c=e.value,s=void 0===c?"":c,i=e.onChange,u=void 0===i?function(){}:i,d=e.errorMessage,f=void 0===d?Object(l.__)("Please select a value.","woo-gutenberg-products-block"):d,p=Object(o.b)(),b=p.getValidationError,m=p.setValidationErrors,v=p.clearValidationError,h=t,g=b(h)||{};return Object(rt.useEffect)((function(){s?v(h):m(te()({},h,{message:f,hidden:!0}))}),[s,h,f,v,m]),Object(rt.useEffect)((function(){return function(){v(h)}}),[h,v]),React.createElement("div",{className:"wc-block-components-product-add-to-cart-attribute-picker__container"},React.createElement(tt.SelectControl,{label:Object(Ne.decodeEntities)(t),value:s||"",options:[ct].concat(et()(n)),onChange:u,required:!0,className:a()("wc-block-components-product-add-to-cart-attribute-picker__select",{"has-error":g.message&&!g.hidden})}),React.createElement(nt.a,{propertyName:h,elementId:h}))};function ot(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function st(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ot(Object(r),!0).forEach((function(t){te()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ot(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var it=function(e,t,r){var n=Object.values(t).map((function(e){return e.id}));if(Object.values(r).every((function(e){return""===e})))return n;var c=Object.keys(e);return n.filter((function(e){return c.every((function(n){var c=r[n]||"",a=t["id:"+e].attributes[n];return""===c||(null===a||a===c)}))}))},ut=function(e,t,r){var n={},c=Object.keys(e),a=Object.values(r).filter(Boolean).length>0;return c.forEach((function(c){var o=e[c],s=st(st({},r),{},te()({},c,null)),i=a?it(e,t,s):null,u=null!==i?i.map((function(e){return t["id:"+e].attributes[c]})):null;n[c]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object.values(e).map((function(e){var r=e.name,n=e.slug;return null===t||t.includes(null)||t.includes(n)?{value:n,label:Object(Ne.decodeEntities)(r)}:null})).filter(Boolean)}(o.terms,u)})),n};function lt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function dt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?lt(Object(r),!0).forEach((function(t){te()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):lt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ft=function(e){var t=e.attributes,r=e.variationAttributes,n=e.setRequestParams,c=Object(d.a)(t),a=Object(d.a)(r),o=Object(u.useState)(0),s=i()(o,2),l=s[0],f=s[1],p=Object(u.useState)({}),b=i()(p,2),m=b[0],v=b[1],h=Object(u.useMemo)((function(){return ut(c,a,m)}),[m,c,a]);return Object(u.useEffect)((function(){Object.values(m).filter((function(e){return""!==e})).length===Object.keys(c).length?f(function(e,t,r){return it(e,t,r)[0]||0}(c,a,m)):l>0&&f(0)}),[m,l,c,a]),Object(u.useEffect)((function(){n({id:l,variation:Object.keys(m).map((function(e){return{attribute:e,value:m[e]}}))})}),[n,l,m]),React.createElement("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},Object.keys(c).map((function(e){return React.createElement(at,{key:e,attributeName:e,options:h[e],value:m[e],onChange:function(t){v(dt(dt({},m),{},te()({},e,t)))}})})))},pt=function(e){var t=e.product,r=e.dispatchers,n=function(e){return e?Object(Be.keyBy)(Object.values(e).filter((function(e){return e.has_variations})),"name"):{}}(t.attributes),c=function(e){if(!e)return{};var t={};return e.forEach((function(e){var r=e.id,n=e.attributes;t["id:".concat(r)]={id:r,attributes:n.reduce((function(e,t){var r=t.name,n=t.value;return e[r]=n,e}),{})}})),t}(t.variations);return 0===Object.keys(n).length||0===c.length?null:React.createElement(ft,{attributes:n,variationAttributes:c,setRequestParams:r.setRequestParams})},bt=function(){var e=Ae(),t=e.product,r=e.quantity,n=e.minQuantity,c=e.maxQuantity,a=e.dispatchActions,o=e.isDisabled;return t.id&&!t.is_purchasable?React.createElement(Xe,null):t.id&&!t.is_in_stock?React.createElement(Xe,{reason:Object(l.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):React.createElement(React.Fragment,null,React.createElement(pt,{product:t,dispatchers:a}),React.createElement(Ge,{value:r,min:n,max:c,disabled:o,onChange:a.setQuantity}),React.createElement(ze,null))},mt=function(){return React.createElement(ze,null)},vt=function(){return React.createElement(tt.Placeholder,{className:"wc-block-components-product-add-to-cart-group-list"},"This is a placeholder for the grouped products form element.")},ht=function(){return React.createElement(vt,null)},gt=function(){var e=Ae(),t=e.showFormElements,r=e.productType;return t?"variable"===r?React.createElement(bt,null):"grouped"===r?React.createElement(ht,null):"external"===r?React.createElement(mt,null):"simple"===r||"variation"===r?React.createElement($e,null):null:React.createElement(ze,null)},Ot=Object(Le.withProductDataContext)((function(e){var t=e.className,r=e.showFormElements,n=Object(We.useProductDataContext)().product,c=a()(t,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":Object(Be.isEmpty)(n)});return React.createElement(Qe,{product:n,showFormElements:r},React.createElement("div",{className:c},React.createElement(gt,null)))})),yt={showFormElements:{type:"boolean",default:!1},productId:{type:"number",default:0}};t.default=Object(n.a)(yt)(Ot)},38:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),c=r(25),a=r.n(c),o=function(e){var t=Object(n.useRef)();return a()(e,t.current)||(t.current=e),t.current}},45:function(e,t,r){var n=r(92),c=r(93),a=r(59),o=r(94);e.exports=function(e){return n(e)||c(e)||a(e)||o()}},48:function(e,t){function r(e,t,r,n,c,a,o){try{var s=e[a](o),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(n,c)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var o=e.apply(t,n);function s(e){r(o,c,a,s,i,"next",e)}function i(e){r(o,c,a,s,i,"throw",e)}s(void 0)}))}}},62:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return m}));var n=r(7),c=r.n(n),a=r(10),o=r.n(a),s=r(0),i=r(8),u=r(25),l=r.n(u);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=Object(s.createContext)({getValidationError:function(){return""},setValidationErrors:function(e){},clearValidationError:function(e){},clearAllValidationErrors:function(){},hideValidationError:function(){},showValidationError:function(){},showAllValidationErrors:function(){},hasValidationErrors:!1,getValidationErrorId:function(e){return e}}),b=function(){return Object(s.useContext)(p)},m=function(e){var t=e.children,r=Object(s.useState)({}),n=o()(r,2),a=n[0],u=n[1],d=Object(s.useCallback)((function(e){return a[e]}),[a]),b=Object(s.useCallback)((function(e){var t=a[e];return!t||t.hidden?"":"validate-error-".concat(e)}),[a]),m=Object(s.useCallback)((function(e){u((function(t){return t[e]?Object(i.omit)(t,[e]):t}))}),[]),v=Object(s.useCallback)((function(){u({})}),[]),h=Object(s.useCallback)((function(e){e&&u((function(t){return e=Object(i.pickBy)(e,(function(e,r){return"string"==typeof e.message&&(!t.hasOwnProperty(r)||!l()(t[r],e))})),0===Object.values(e).length?t:f(f({},t),e)}))}),[]),g=Object(s.useCallback)((function(e,t){u((function(r){if(!r.hasOwnProperty(e))return r;var n=f(f({},r[e]),t);return l()(r[e],n)?r:f(f({},r),{},c()({},e,n))}))}),[]),O={getValidationError:d,setValidationErrors:h,clearValidationError:m,clearAllValidationErrors:v,hideValidationError:Object(s.useCallback)((function(e){g(e,{hidden:!0})}),[g]),showValidationError:Object(s.useCallback)((function(e){g(e,{hidden:!1})}),[g]),showAllValidationErrors:Object(s.useCallback)((function(){u((function(e){var t={};return Object.keys(e).forEach((function(r){e[r].hidden&&(t[r]=f(f({},e[r]),{},{hidden:!1}))})),0===Object.values(t).length?e:f(f({},e),t)}))}),[]),hasValidationErrors:Object.keys(a).length>0,getValidationErrorId:b};return React.createElement(p.Provider,{value:O},t)}},79:function(e,t,r){"use strict";var n=r(11),c=r.n(n),a=r(14),o=r.n(a),s=r(64),i=(r(3),r(5)),u=r.n(i);r(159);t.a=function(e){var t=e.className,r=e.showSpinner,n=void 0!==r&&r,a=e.children,i=o()(e,["className","showSpinner","children"]),l=u()("wc-block-components-button",t,{"wc-block-components-button--loading":n});return React.createElement(s.a,c()({className:l},i),n&&React.createElement("span",{className:"wc-block-components-button__spinner","aria-hidden":"true"}),React.createElement("span",{className:"wc-block-components-button__text"},a))}},92:function(e,t,r){var n=r(60);e.exports=function(e){if(Array.isArray(e))return n(e)}},93:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},94:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);