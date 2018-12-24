// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33316){
var map__33317 = p__33316;
var map__33317__$1 = (((((!((map__33317 == null))))?(((((map__33317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33317):map__33317);
var m = map__33317__$1;
var n = cljs.core.get.call(null,map__33317__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33317__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33319_33341 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33320_33342 = null;
var count__33321_33343 = (0);
var i__33322_33344 = (0);
while(true){
if((i__33322_33344 < count__33321_33343)){
var f_33345 = cljs.core._nth.call(null,chunk__33320_33342,i__33322_33344);
cljs.core.println.call(null,"  ",f_33345);


var G__33346 = seq__33319_33341;
var G__33347 = chunk__33320_33342;
var G__33348 = count__33321_33343;
var G__33349 = (i__33322_33344 + (1));
seq__33319_33341 = G__33346;
chunk__33320_33342 = G__33347;
count__33321_33343 = G__33348;
i__33322_33344 = G__33349;
continue;
} else {
var temp__5457__auto___33350 = cljs.core.seq.call(null,seq__33319_33341);
if(temp__5457__auto___33350){
var seq__33319_33351__$1 = temp__5457__auto___33350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33319_33351__$1)){
var c__4461__auto___33352 = cljs.core.chunk_first.call(null,seq__33319_33351__$1);
var G__33353 = cljs.core.chunk_rest.call(null,seq__33319_33351__$1);
var G__33354 = c__4461__auto___33352;
var G__33355 = cljs.core.count.call(null,c__4461__auto___33352);
var G__33356 = (0);
seq__33319_33341 = G__33353;
chunk__33320_33342 = G__33354;
count__33321_33343 = G__33355;
i__33322_33344 = G__33356;
continue;
} else {
var f_33357 = cljs.core.first.call(null,seq__33319_33351__$1);
cljs.core.println.call(null,"  ",f_33357);


var G__33358 = cljs.core.next.call(null,seq__33319_33351__$1);
var G__33359 = null;
var G__33360 = (0);
var G__33361 = (0);
seq__33319_33341 = G__33358;
chunk__33320_33342 = G__33359;
count__33321_33343 = G__33360;
i__33322_33344 = G__33361;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33362 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33362);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33362)))?cljs.core.second.call(null,arglists_33362):arglists_33362));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33323_33363 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33324_33364 = null;
var count__33325_33365 = (0);
var i__33326_33366 = (0);
while(true){
if((i__33326_33366 < count__33325_33365)){
var vec__33327_33367 = cljs.core._nth.call(null,chunk__33324_33364,i__33326_33366);
var name_33368 = cljs.core.nth.call(null,vec__33327_33367,(0),null);
var map__33330_33369 = cljs.core.nth.call(null,vec__33327_33367,(1),null);
var map__33330_33370__$1 = (((((!((map__33330_33369 == null))))?(((((map__33330_33369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33330_33369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33330_33369):map__33330_33369);
var doc_33371 = cljs.core.get.call(null,map__33330_33370__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33372 = cljs.core.get.call(null,map__33330_33370__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33368);

cljs.core.println.call(null," ",arglists_33372);

if(cljs.core.truth_(doc_33371)){
cljs.core.println.call(null," ",doc_33371);
} else {
}


var G__33373 = seq__33323_33363;
var G__33374 = chunk__33324_33364;
var G__33375 = count__33325_33365;
var G__33376 = (i__33326_33366 + (1));
seq__33323_33363 = G__33373;
chunk__33324_33364 = G__33374;
count__33325_33365 = G__33375;
i__33326_33366 = G__33376;
continue;
} else {
var temp__5457__auto___33377 = cljs.core.seq.call(null,seq__33323_33363);
if(temp__5457__auto___33377){
var seq__33323_33378__$1 = temp__5457__auto___33377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33323_33378__$1)){
var c__4461__auto___33379 = cljs.core.chunk_first.call(null,seq__33323_33378__$1);
var G__33380 = cljs.core.chunk_rest.call(null,seq__33323_33378__$1);
var G__33381 = c__4461__auto___33379;
var G__33382 = cljs.core.count.call(null,c__4461__auto___33379);
var G__33383 = (0);
seq__33323_33363 = G__33380;
chunk__33324_33364 = G__33381;
count__33325_33365 = G__33382;
i__33326_33366 = G__33383;
continue;
} else {
var vec__33332_33384 = cljs.core.first.call(null,seq__33323_33378__$1);
var name_33385 = cljs.core.nth.call(null,vec__33332_33384,(0),null);
var map__33335_33386 = cljs.core.nth.call(null,vec__33332_33384,(1),null);
var map__33335_33387__$1 = (((((!((map__33335_33386 == null))))?(((((map__33335_33386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33335_33386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33335_33386):map__33335_33386);
var doc_33388 = cljs.core.get.call(null,map__33335_33387__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33389 = cljs.core.get.call(null,map__33335_33387__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33385);

cljs.core.println.call(null," ",arglists_33389);

if(cljs.core.truth_(doc_33388)){
cljs.core.println.call(null," ",doc_33388);
} else {
}


var G__33390 = cljs.core.next.call(null,seq__33323_33378__$1);
var G__33391 = null;
var G__33392 = (0);
var G__33393 = (0);
seq__33323_33363 = G__33390;
chunk__33324_33364 = G__33391;
count__33325_33365 = G__33392;
i__33326_33366 = G__33393;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__33337 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33338 = null;
var count__33339 = (0);
var i__33340 = (0);
while(true){
if((i__33340 < count__33339)){
var role = cljs.core._nth.call(null,chunk__33338,i__33340);
var temp__5457__auto___33394__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33394__$1)){
var spec_33395 = temp__5457__auto___33394__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33395));
} else {
}


var G__33396 = seq__33337;
var G__33397 = chunk__33338;
var G__33398 = count__33339;
var G__33399 = (i__33340 + (1));
seq__33337 = G__33396;
chunk__33338 = G__33397;
count__33339 = G__33398;
i__33340 = G__33399;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__33337);
if(temp__5457__auto____$1){
var seq__33337__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33337__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__33337__$1);
var G__33400 = cljs.core.chunk_rest.call(null,seq__33337__$1);
var G__33401 = c__4461__auto__;
var G__33402 = cljs.core.count.call(null,c__4461__auto__);
var G__33403 = (0);
seq__33337 = G__33400;
chunk__33338 = G__33401;
count__33339 = G__33402;
i__33340 = G__33403;
continue;
} else {
var role = cljs.core.first.call(null,seq__33337__$1);
var temp__5457__auto___33404__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33404__$2)){
var spec_33405 = temp__5457__auto___33404__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33405));
} else {
}


var G__33406 = cljs.core.next.call(null,seq__33337__$1);
var G__33407 = null;
var G__33408 = (0);
var G__33409 = (0);
seq__33337 = G__33406;
chunk__33338 = G__33407;
count__33339 = G__33408;
i__33340 = G__33409;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1544906677984
