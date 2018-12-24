// Compiled by ClojureScript 1.10.439 {}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
Processing.disableInit();
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(Processing.prototype.PConstants["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(Processing.prototype.PConstants["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(Processing.prototype.PConstants["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var el = applet.quil_canvas;
el.setAttribute("width",width);

el.setAttribute("height",height);

applet.width = window.parseInt(goog.style.getComputedStyle(el,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(el,"height"));
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__1410 = arguments.length;
switch (G__1410) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)),quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__1412 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__1413 = null;
var count__1414 = (0);
var i__1415 = (0);
while(true){
if((i__1415 < count__1414)){
var vec__1416 = cljs.core._nth.call(null,chunk__1413,i__1415);
var processing_name = cljs.core.nth.call(null,vec__1416,(0),null);
var quil_name = cljs.core.nth.call(null,vec__1416,(1),null);
var temp__5457__auto___1426 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5457__auto___1426)){
var handler_1427 = temp__5457__auto___1426;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__1412,chunk__1413,count__1414,i__1415,handler_1427,temp__5457__auto___1426,vec__1416,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR__orig_val__1419 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__1420 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__1420;

try{return handler_1427.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__1419;
}});})(seq__1412,chunk__1413,count__1414,i__1415,handler_1427,temp__5457__auto___1426,vec__1416,processing_name,quil_name))
);
} else {
}


var G__1428 = seq__1412;
var G__1429 = chunk__1413;
var G__1430 = count__1414;
var G__1431 = (i__1415 + (1));
seq__1412 = G__1428;
chunk__1413 = G__1429;
count__1414 = G__1430;
i__1415 = G__1431;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__1412);
if(temp__5457__auto__){
var seq__1412__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1412__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__1412__$1);
var G__1432 = cljs.core.chunk_rest.call(null,seq__1412__$1);
var G__1433 = c__4461__auto__;
var G__1434 = cljs.core.count.call(null,c__4461__auto__);
var G__1435 = (0);
seq__1412 = G__1432;
chunk__1413 = G__1433;
count__1414 = G__1434;
i__1415 = G__1435;
continue;
} else {
var vec__1421 = cljs.core.first.call(null,seq__1412__$1);
var processing_name = cljs.core.nth.call(null,vec__1421,(0),null);
var quil_name = cljs.core.nth.call(null,vec__1421,(1),null);
var temp__5457__auto___1436__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5457__auto___1436__$1)){
var handler_1437 = temp__5457__auto___1436__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__1412,chunk__1413,count__1414,i__1415,handler_1437,temp__5457__auto___1436__$1,vec__1421,processing_name,quil_name,seq__1412__$1,temp__5457__auto__){
return (function (){
var _STAR_applet_STAR__orig_val__1424 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__1425 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__1425;

try{return handler_1437.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__1424;
}});})(seq__1412,chunk__1413,count__1414,i__1415,handler_1437,temp__5457__auto___1436__$1,vec__1421,processing_name,quil_name,seq__1412__$1,temp__5457__auto__))
);
} else {
}


var G__1438 = cljs.core.next.call(null,seq__1412__$1);
var G__1439 = null;
var G__1440 = (0);
var G__1441 = (0);
seq__1412 = G__1438;
chunk__1413 = G__1439;
count__1414 = G__1440;
i__1415 = G__1441;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.in_fullscreen_QMARK_ = (function quil$sketch$in_fullscreen_QMARK_(){
var or__4047__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return document.mozFullScreenElement;
}
});
/**
 * Adds fullscreen support for provided Processing object.
 *   Fullscreen is enabled when user presses F11. We turn
 *   sketch <canvas> element to fullscreen storing old size
 *   in an atom. When user cancels fullscreen (F11 or Esc)
 *   we resize sketch to the old size.
 */
quil.sketch.add_fullscreen_support = (function quil$sketch$add_fullscreen_support(applet){
var old_size = cljs.core.atom.call(null,null);
var adjust_canvas_size = ((function (old_size){
return (function (){
if(cljs.core.truth_(quil.sketch.in_fullscreen_QMARK_.call(null))){
cljs.core.reset_BANG_.call(null,old_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [applet.width,applet.height], null));

return quil.sketch.set_size.call(null,applet,window.screen.width,window.screen.height);
} else {
return cljs.core.apply.call(null,quil.sketch.set_size,applet,cljs.core.deref.call(null,old_size));
}
});})(old_size))
;
goog.events.listen(window,goog.events.EventType.KEYDOWN,((function (old_size,adjust_canvas_size){
return (function (event){
if(((cljs.core._EQ_.call(null,event.key,"F11")) && (cljs.core.not.call(null,quil.sketch.in_fullscreen_QMARK_.call(null))))){
event.preventDefault();

var canvas = applet.quil_canvas;
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return console.warn("Fullscreen mode is not supported in current browser.");

}
}
} else {
return null;
}
});})(old_size,adjust_canvas_size))
);

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

return goog.events.listen(document,"fullscreenerror",((function (old_size,adjust_canvas_size){
return (function (p1__1442_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__1442_SHARP_);
});})(old_size,adjust_canvas_size))
);
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__1443_SHARP_){
return p1__1443_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts))){
new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts))){
return new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
return new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts).call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"setup","setup",1987730512),setup,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),mouse_wheel);
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers.call(null,prc,opts__$1);

prc.quil = cljs.core.atom.call(null,null);

return prc.quil_internal_state = cljs.core.atom.call(null,quil.util.initial_internal_state);
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_.call(null,features,new cljs.core.Keyword(null,"global-key-events","global-key-events",335064944))){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5457__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5457__auto__)){
var proc_obj = temp__5457__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4647__auto__ = [];
var len__4641__auto___1445 = arguments.length;
var i__4642__auto___1446 = (0);
while(true){
if((i__4642__auto___1446 < len__4641__auto___1445)){
args__4647__auto__.push((arguments[i__4642__auto___1446]));

var G__1447 = (i__4642__auto___1446 + (1));
i__4642__auto___1446 = G__1447;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));
var renderer = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.call(null,renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch.call(null,host_elem);

var proc_obj = (new Processing(host_elem,quil.sketch.make_sketch.call(null,opts_map)));
host_elem.processing_obj = proc_obj;

proc_obj.quil_canvas = host_elem;

quil.sketch.add_fullscreen_support.call(null,proc_obj);

return proc_obj;
} else {
return console.error((cljs.core.truth_(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.sketch.sketch.cljs$lang$applyTo = (function (seq1444){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1444));
});

quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__1452 = quil.sketch.empty_body_QMARK_.call(null);
var seq__1448_1453 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__1449_1454 = null;
var count__1450_1455 = (0);
var i__1451_1456 = (0);
while(true){
if((i__1451_1456 < count__1450_1455)){
var sk_1457 = cljs.core._nth.call(null,chunk__1449_1454,i__1451_1456);
if(add_elem_QMARK__1452){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_1457));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_1457).call(null);


var G__1458 = seq__1448_1453;
var G__1459 = chunk__1449_1454;
var G__1460 = count__1450_1455;
var G__1461 = (i__1451_1456 + (1));
seq__1448_1453 = G__1458;
chunk__1449_1454 = G__1459;
count__1450_1455 = G__1460;
i__1451_1456 = G__1461;
continue;
} else {
var temp__5457__auto___1462 = cljs.core.seq.call(null,seq__1448_1453);
if(temp__5457__auto___1462){
var seq__1448_1463__$1 = temp__5457__auto___1462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1448_1463__$1)){
var c__4461__auto___1464 = cljs.core.chunk_first.call(null,seq__1448_1463__$1);
var G__1465 = cljs.core.chunk_rest.call(null,seq__1448_1463__$1);
var G__1466 = c__4461__auto___1464;
var G__1467 = cljs.core.count.call(null,c__4461__auto___1464);
var G__1468 = (0);
seq__1448_1453 = G__1465;
chunk__1449_1454 = G__1466;
count__1450_1455 = G__1467;
i__1451_1456 = G__1468;
continue;
} else {
var sk_1469 = cljs.core.first.call(null,seq__1448_1463__$1);
if(add_elem_QMARK__1452){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_1469));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_1469).call(null);


var G__1470 = cljs.core.next.call(null,seq__1448_1463__$1);
var G__1471 = null;
var G__1472 = (0);
var G__1473 = (0);
seq__1448_1453 = G__1470;
chunk__1449_1454 = G__1471;
count__1450_1455 = G__1472;
i__1451_1456 = G__1473;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.call(null,document.readyState,"complete")){
return quil.sketch.init_sketches.call(null);
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map
