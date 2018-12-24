// Compiled by ClojureScript 1.10.439 {}
goog.provide('matrixrain.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
matrixrain.core.textsize = (10);
matrixrain.core.symbols = "\u65E5\u4E8C\u30B1\u30C1\u30E4\u30DB\u30BD\u30CD\u30EA\u30D2\u30F2\u30BB\u30E1\u30CB\u30A4\u30D8\u30E0\u30EC\u30ED\u30EF\u30B9\u30A8\u30F3\u30CF\u30E2\u30AD\u30E8\u30AB\u30CA\u30A6\u30A2\u30CE\u30AF\u30C8\u30D5\u30B5\u30B7\u30AA\u30DF\u30CC\u30C4\u30DE\u30EB\u30C6\u30E6\u30E9\u30BF\u30B3\uFF10\uFF17\uFF18\uFF3A\uFF1A\u30FB\uFF0E\uFF1D\uFF0A\uFF0B\uFF0D\uFF1C\uFF1E";
matrixrain.core.create_grid = (function matrixrain$core$create_grid(rows,cols){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,cols,cljs.core.repeatedly.call(null,(rows * cols),(function (){
return cljs.core.rand_nth.call(null,matrixrain.core.symbols);
})))));
});
matrixrain.core.rowcount = (function matrixrain$core$rowcount(grid){
return cljs.core.count.call(null,grid);
});
matrixrain.core.colcount = (function matrixrain$core$colcount(grid){
return cljs.core.count.call(null,cljs.core.first.call(null,grid));
});
matrixrain.core.update_grid = (function matrixrain$core$update_grid(grid){
var rowsrange = cljs.core.range.call(null,matrixrain.core.rowcount.call(null,grid));
var colsrange = cljs.core.range.call(null,matrixrain.core.colcount.call(null,grid));
var cnt = (10);
var grd = grid;
while(true){
if((cnt === (0))){
return grd;
} else {
var G__1827 = (cnt - (1));
var G__1828 = cljs.core.assoc_in.call(null,grd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_nth.call(null,rowsrange),cljs.core.rand_nth.call(null,colsrange)], null),cljs.core.rand_nth.call(null,matrixrain.core.symbols));
cnt = G__1827;
grd = G__1828;
continue;
}
break;
}
});
matrixrain.core.get_item_at = (function matrixrain$core$get_item_at(grid,row,col){
return cljs.core.get_in.call(null,grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
});
matrixrain.core.setup = (function matrixrain$core$setup(){
quil.core.frame_rate.call(null,(5));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),matrixrain.core.create_grid.call(null,((quil.core.height.call(null) / matrixrain.core.textsize) | (0)),((quil.core.width.call(null) / matrixrain.core.textsize) | (0)))], null);
});
matrixrain.core.update_state = (function matrixrain$core$update_state(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"grid","grid",402978600),matrixrain.core.update_grid.call(null,new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(state)));
});
matrixrain.core.draw_state = (function matrixrain$core$draw_state(state){
quil.core.background.call(null,(0));

quil.core.fill.call(null,(255));

quil.core.text_size.call(null,matrixrain.core.textsize);

var grid = new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.dorun.call(null,(function (){var iter__4434__auto__ = ((function (grid){
return (function matrixrain$core$draw_state_$_iter__1829(s__1830){
return (new cljs.core.LazySeq(null,((function (grid){
return (function (){
var s__1830__$1 = s__1830;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__1830__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var row = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4430__auto__ = ((function (s__1830__$1,row,xs__6012__auto__,temp__5457__auto__,grid){
return (function matrixrain$core$draw_state_$_iter__1829_$_iter__1831(s__1832){
return (new cljs.core.LazySeq(null,((function (s__1830__$1,row,xs__6012__auto__,temp__5457__auto__,grid){
return (function (){
var s__1832__$1 = s__1832;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__1832__$1);
if(temp__5457__auto____$1){
var s__1832__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1832__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__1832__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__1834 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__1833 = (0);
while(true){
if((i__1833 < size__4433__auto__)){
var col = cljs.core._nth.call(null,c__4432__auto__,i__1833);
cljs.core.chunk_append.call(null,b__1834,(function (){
quil.core.fill.call(null,(0),(255),(0));

return quil.core.text.call(null,cljs.core.get_in.call(null,grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)),(col * matrixrain.core.textsize),((row + (1)) * matrixrain.core.textsize));
})()
);

var G__1835 = (i__1833 + (1));
i__1833 = G__1835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1834),matrixrain$core$draw_state_$_iter__1829_$_iter__1831.call(null,cljs.core.chunk_rest.call(null,s__1832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1834),null);
}
} else {
var col = cljs.core.first.call(null,s__1832__$2);
return cljs.core.cons.call(null,(function (){
quil.core.fill.call(null,(0),(255),(0));

return quil.core.text.call(null,cljs.core.get_in.call(null,grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)),(col * matrixrain.core.textsize),((row + (1)) * matrixrain.core.textsize));
})()
,matrixrain$core$draw_state_$_iter__1829_$_iter__1831.call(null,cljs.core.rest.call(null,s__1832__$2)));
}
} else {
return null;
}
break;
}
});})(s__1830__$1,row,xs__6012__auto__,temp__5457__auto__,grid))
,null,null));
});})(s__1830__$1,row,xs__6012__auto__,temp__5457__auto__,grid))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,cljs.core.range.call(null,matrixrain.core.colcount.call(null,grid))));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,matrixrain$core$draw_state_$_iter__1829.call(null,cljs.core.rest.call(null,s__1830__$1)));
} else {
var G__1836 = cljs.core.rest.call(null,s__1830__$1);
s__1830__$1 = G__1836;
continue;
}
} else {
return null;
}
break;
}
});})(grid))
,null,null));
});})(grid))
;
return iter__4434__auto__.call(null,cljs.core.range.call(null,matrixrain.core.rowcount.call(null,grid)));
})());
});
matrixrain.core.run_sketch = (function matrixrain$core$run_sketch(){
matrixrain.core.matrixrain = (function matrixrain$core$run_sketch_$_matrixrain(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"matrixrain",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,matrixrain.core.update_state))?(function() { 
var G__1837__delegate = function (args){
return cljs.core.apply.call(null,matrixrain.core.update_state,args);
};
var G__1837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1838__i = 0, G__1838__a = new Array(arguments.length -  0);
while (G__1838__i < G__1838__a.length) {G__1838__a[G__1838__i] = arguments[G__1838__i + 0]; ++G__1838__i;}
  args = new cljs.core.IndexedSeq(G__1838__a,0,null);
} 
return G__1837__delegate.call(this,args);};
G__1837.cljs$lang$maxFixedArity = 0;
G__1837.cljs$lang$applyTo = (function (arglist__1839){
var args = cljs.core.seq(arglist__1839);
return G__1837__delegate(args);
});
G__1837.cljs$core$IFn$_invoke$arity$variadic = G__1837__delegate;
return G__1837;
})()
:matrixrain.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,matrixrain.core.setup))?(function() { 
var G__1840__delegate = function (args){
return cljs.core.apply.call(null,matrixrain.core.setup,args);
};
var G__1840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1841__i = 0, G__1841__a = new Array(arguments.length -  0);
while (G__1841__i < G__1841__a.length) {G__1841__a[G__1841__i] = arguments[G__1841__i + 0]; ++G__1841__i;}
  args = new cljs.core.IndexedSeq(G__1841__a,0,null);
} 
return G__1840__delegate.call(this,args);};
G__1840.cljs$lang$maxFixedArity = 0;
G__1840.cljs$lang$applyTo = (function (arglist__1842){
var args = cljs.core.seq(arglist__1842);
return G__1840__delegate(args);
});
G__1840.cljs$core$IFn$_invoke$arity$variadic = G__1840__delegate;
return G__1840;
})()
:matrixrain.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,matrixrain.core.draw_state))?(function() { 
var G__1843__delegate = function (args){
return cljs.core.apply.call(null,matrixrain.core.draw_state,args);
};
var G__1843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1844__i = 0, G__1844__a = new Array(arguments.length -  0);
while (G__1844__i < G__1844__a.length) {G__1844__a[G__1844__i] = arguments[G__1844__i + 0]; ++G__1844__i;}
  args = new cljs.core.IndexedSeq(G__1844__a,0,null);
} 
return G__1843__delegate.call(this,args);};
G__1843.cljs$lang$maxFixedArity = 0;
G__1843.cljs$lang$applyTo = (function (arglist__1845){
var args = cljs.core.seq(arglist__1845);
return G__1843__delegate(args);
});
G__1843.cljs$core$IFn$_invoke$arity$variadic = G__1843__delegate;
return G__1843;
})()
:matrixrain.core.draw_state));
});
goog.exportSymbol('matrixrain.core.matrixrain', matrixrain.core.matrixrain);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__1329__1330__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__1329__1330__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),matrixrain.core.matrixrain,new cljs.core.Keyword(null,"host-id","host-id",742376279),"matrixrain"], null));
}
});
goog.exportSymbol('matrixrain.core.run_sketch', matrixrain.core.run_sketch);
matrixrain.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map
