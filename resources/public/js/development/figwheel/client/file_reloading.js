// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31843_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31843_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31844 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31845 = null;
var count__31846 = (0);
var i__31847 = (0);
while(true){
if((i__31847 < count__31846)){
var n = cljs.core._nth.call(null,chunk__31845,i__31847);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31848 = seq__31844;
var G__31849 = chunk__31845;
var G__31850 = count__31846;
var G__31851 = (i__31847 + (1));
seq__31844 = G__31848;
chunk__31845 = G__31849;
count__31846 = G__31850;
i__31847 = G__31851;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31844);
if(temp__5457__auto__){
var seq__31844__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31844__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__31844__$1);
var G__31852 = cljs.core.chunk_rest.call(null,seq__31844__$1);
var G__31853 = c__4461__auto__;
var G__31854 = cljs.core.count.call(null,c__4461__auto__);
var G__31855 = (0);
seq__31844 = G__31852;
chunk__31845 = G__31853;
count__31846 = G__31854;
i__31847 = G__31855;
continue;
} else {
var n = cljs.core.first.call(null,seq__31844__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31856 = cljs.core.next.call(null,seq__31844__$1);
var G__31857 = null;
var G__31858 = (0);
var G__31859 = (0);
seq__31844 = G__31856;
chunk__31845 = G__31857;
count__31846 = G__31858;
i__31847 = G__31859;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__31860){
var vec__31861 = p__31860;
var _ = cljs.core.nth.call(null,vec__31861,(0),null);
var v = cljs.core.nth.call(null,vec__31861,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__31864){
var vec__31865 = p__31864;
var k = cljs.core.nth.call(null,vec__31865,(0),null);
var v = cljs.core.nth.call(null,vec__31865,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31877_31885 = cljs.core.seq.call(null,deps);
var chunk__31878_31886 = null;
var count__31879_31887 = (0);
var i__31880_31888 = (0);
while(true){
if((i__31880_31888 < count__31879_31887)){
var dep_31889 = cljs.core._nth.call(null,chunk__31878_31886,i__31880_31888);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_31889;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31889));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31889,(depth + (1)),state);
} else {
}


var G__31890 = seq__31877_31885;
var G__31891 = chunk__31878_31886;
var G__31892 = count__31879_31887;
var G__31893 = (i__31880_31888 + (1));
seq__31877_31885 = G__31890;
chunk__31878_31886 = G__31891;
count__31879_31887 = G__31892;
i__31880_31888 = G__31893;
continue;
} else {
var temp__5457__auto___31894 = cljs.core.seq.call(null,seq__31877_31885);
if(temp__5457__auto___31894){
var seq__31877_31895__$1 = temp__5457__auto___31894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31877_31895__$1)){
var c__4461__auto___31896 = cljs.core.chunk_first.call(null,seq__31877_31895__$1);
var G__31897 = cljs.core.chunk_rest.call(null,seq__31877_31895__$1);
var G__31898 = c__4461__auto___31896;
var G__31899 = cljs.core.count.call(null,c__4461__auto___31896);
var G__31900 = (0);
seq__31877_31885 = G__31897;
chunk__31878_31886 = G__31898;
count__31879_31887 = G__31899;
i__31880_31888 = G__31900;
continue;
} else {
var dep_31901 = cljs.core.first.call(null,seq__31877_31895__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_31901;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31901));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31901,(depth + (1)),state);
} else {
}


var G__31902 = cljs.core.next.call(null,seq__31877_31895__$1);
var G__31903 = null;
var G__31904 = (0);
var G__31905 = (0);
seq__31877_31885 = G__31902;
chunk__31878_31886 = G__31903;
count__31879_31887 = G__31904;
i__31880_31888 = G__31905;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31881){
var vec__31882 = p__31881;
var seq__31883 = cljs.core.seq.call(null,vec__31882);
var first__31884 = cljs.core.first.call(null,seq__31883);
var seq__31883__$1 = cljs.core.next.call(null,seq__31883);
var x = first__31884;
var xs = seq__31883__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31882,seq__31883,first__31884,seq__31883__$1,x,xs,get_deps__$1){
return (function (p1__31868_SHARP_){
return clojure.set.difference.call(null,p1__31868_SHARP_,x);
});})(vec__31882,seq__31883,first__31884,seq__31883__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31906 = cljs.core.seq.call(null,provides);
var chunk__31907 = null;
var count__31908 = (0);
var i__31909 = (0);
while(true){
if((i__31909 < count__31908)){
var prov = cljs.core._nth.call(null,chunk__31907,i__31909);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31910_31918 = cljs.core.seq.call(null,requires);
var chunk__31911_31919 = null;
var count__31912_31920 = (0);
var i__31913_31921 = (0);
while(true){
if((i__31913_31921 < count__31912_31920)){
var req_31922 = cljs.core._nth.call(null,chunk__31911_31919,i__31913_31921);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31922,prov);


var G__31923 = seq__31910_31918;
var G__31924 = chunk__31911_31919;
var G__31925 = count__31912_31920;
var G__31926 = (i__31913_31921 + (1));
seq__31910_31918 = G__31923;
chunk__31911_31919 = G__31924;
count__31912_31920 = G__31925;
i__31913_31921 = G__31926;
continue;
} else {
var temp__5457__auto___31927 = cljs.core.seq.call(null,seq__31910_31918);
if(temp__5457__auto___31927){
var seq__31910_31928__$1 = temp__5457__auto___31927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31910_31928__$1)){
var c__4461__auto___31929 = cljs.core.chunk_first.call(null,seq__31910_31928__$1);
var G__31930 = cljs.core.chunk_rest.call(null,seq__31910_31928__$1);
var G__31931 = c__4461__auto___31929;
var G__31932 = cljs.core.count.call(null,c__4461__auto___31929);
var G__31933 = (0);
seq__31910_31918 = G__31930;
chunk__31911_31919 = G__31931;
count__31912_31920 = G__31932;
i__31913_31921 = G__31933;
continue;
} else {
var req_31934 = cljs.core.first.call(null,seq__31910_31928__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31934,prov);


var G__31935 = cljs.core.next.call(null,seq__31910_31928__$1);
var G__31936 = null;
var G__31937 = (0);
var G__31938 = (0);
seq__31910_31918 = G__31935;
chunk__31911_31919 = G__31936;
count__31912_31920 = G__31937;
i__31913_31921 = G__31938;
continue;
}
} else {
}
}
break;
}


var G__31939 = seq__31906;
var G__31940 = chunk__31907;
var G__31941 = count__31908;
var G__31942 = (i__31909 + (1));
seq__31906 = G__31939;
chunk__31907 = G__31940;
count__31908 = G__31941;
i__31909 = G__31942;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31906);
if(temp__5457__auto__){
var seq__31906__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31906__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__31906__$1);
var G__31943 = cljs.core.chunk_rest.call(null,seq__31906__$1);
var G__31944 = c__4461__auto__;
var G__31945 = cljs.core.count.call(null,c__4461__auto__);
var G__31946 = (0);
seq__31906 = G__31943;
chunk__31907 = G__31944;
count__31908 = G__31945;
i__31909 = G__31946;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31906__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31914_31947 = cljs.core.seq.call(null,requires);
var chunk__31915_31948 = null;
var count__31916_31949 = (0);
var i__31917_31950 = (0);
while(true){
if((i__31917_31950 < count__31916_31949)){
var req_31951 = cljs.core._nth.call(null,chunk__31915_31948,i__31917_31950);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31951,prov);


var G__31952 = seq__31914_31947;
var G__31953 = chunk__31915_31948;
var G__31954 = count__31916_31949;
var G__31955 = (i__31917_31950 + (1));
seq__31914_31947 = G__31952;
chunk__31915_31948 = G__31953;
count__31916_31949 = G__31954;
i__31917_31950 = G__31955;
continue;
} else {
var temp__5457__auto___31956__$1 = cljs.core.seq.call(null,seq__31914_31947);
if(temp__5457__auto___31956__$1){
var seq__31914_31957__$1 = temp__5457__auto___31956__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31914_31957__$1)){
var c__4461__auto___31958 = cljs.core.chunk_first.call(null,seq__31914_31957__$1);
var G__31959 = cljs.core.chunk_rest.call(null,seq__31914_31957__$1);
var G__31960 = c__4461__auto___31958;
var G__31961 = cljs.core.count.call(null,c__4461__auto___31958);
var G__31962 = (0);
seq__31914_31947 = G__31959;
chunk__31915_31948 = G__31960;
count__31916_31949 = G__31961;
i__31917_31950 = G__31962;
continue;
} else {
var req_31963 = cljs.core.first.call(null,seq__31914_31957__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31963,prov);


var G__31964 = cljs.core.next.call(null,seq__31914_31957__$1);
var G__31965 = null;
var G__31966 = (0);
var G__31967 = (0);
seq__31914_31947 = G__31964;
chunk__31915_31948 = G__31965;
count__31916_31949 = G__31966;
i__31917_31950 = G__31967;
continue;
}
} else {
}
}
break;
}


var G__31968 = cljs.core.next.call(null,seq__31906__$1);
var G__31969 = null;
var G__31970 = (0);
var G__31971 = (0);
seq__31906 = G__31968;
chunk__31907 = G__31969;
count__31908 = G__31970;
i__31909 = G__31971;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31972_31976 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31973_31977 = null;
var count__31974_31978 = (0);
var i__31975_31979 = (0);
while(true){
if((i__31975_31979 < count__31974_31978)){
var ns_31980 = cljs.core._nth.call(null,chunk__31973_31977,i__31975_31979);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31980);


var G__31981 = seq__31972_31976;
var G__31982 = chunk__31973_31977;
var G__31983 = count__31974_31978;
var G__31984 = (i__31975_31979 + (1));
seq__31972_31976 = G__31981;
chunk__31973_31977 = G__31982;
count__31974_31978 = G__31983;
i__31975_31979 = G__31984;
continue;
} else {
var temp__5457__auto___31985 = cljs.core.seq.call(null,seq__31972_31976);
if(temp__5457__auto___31985){
var seq__31972_31986__$1 = temp__5457__auto___31985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31972_31986__$1)){
var c__4461__auto___31987 = cljs.core.chunk_first.call(null,seq__31972_31986__$1);
var G__31988 = cljs.core.chunk_rest.call(null,seq__31972_31986__$1);
var G__31989 = c__4461__auto___31987;
var G__31990 = cljs.core.count.call(null,c__4461__auto___31987);
var G__31991 = (0);
seq__31972_31976 = G__31988;
chunk__31973_31977 = G__31989;
count__31974_31978 = G__31990;
i__31975_31979 = G__31991;
continue;
} else {
var ns_31992 = cljs.core.first.call(null,seq__31972_31986__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31992);


var G__31993 = cljs.core.next.call(null,seq__31972_31986__$1);
var G__31994 = null;
var G__31995 = (0);
var G__31996 = (0);
seq__31972_31976 = G__31993;
chunk__31973_31977 = G__31994;
count__31974_31978 = G__31995;
i__31975_31979 = G__31996;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31997__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31998__i = 0, G__31998__a = new Array(arguments.length -  0);
while (G__31998__i < G__31998__a.length) {G__31998__a[G__31998__i] = arguments[G__31998__i + 0]; ++G__31998__i;}
  args = new cljs.core.IndexedSeq(G__31998__a,0,null);
} 
return G__31997__delegate.call(this,args);};
G__31997.cljs$lang$maxFixedArity = 0;
G__31997.cljs$lang$applyTo = (function (arglist__31999){
var args = cljs.core.seq(arglist__31999);
return G__31997__delegate(args);
});
G__31997.cljs$core$IFn$_invoke$arity$variadic = G__31997__delegate;
return G__31997;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32000_SHARP_,p2__32001_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32000_SHARP_)),p2__32001_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32002_SHARP_,p2__32003_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32002_SHARP_),p2__32003_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32004 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32004.addCallback(((function (G__32004){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32004))
);

G__32004.addErrback(((function (G__32004){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32004))
);

return G__32004;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32005){if((e32005 instanceof Error)){
var e = e32005;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32005;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32006){if((e32006 instanceof Error)){
var e = e32006;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32006;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32007 = cljs.core._EQ_;
var expr__32008 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32007.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32008))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32007.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32008))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32007.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32008))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32007,expr__32008){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32007,expr__32008))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32010,callback){
var map__32011 = p__32010;
var map__32011__$1 = (((((!((map__32011 == null))))?(((((map__32011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32011):map__32011);
var file_msg = map__32011__$1;
var request_url = cljs.core.get.call(null,map__32011__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32011,map__32011__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32011,map__32011__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto__){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto__){
return (function (state_32049){
var state_val_32050 = (state_32049[(1)]);
if((state_val_32050 === (7))){
var inst_32045 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
var statearr_32051_32077 = state_32049__$1;
(statearr_32051_32077[(2)] = inst_32045);

(statearr_32051_32077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (1))){
var state_32049__$1 = state_32049;
var statearr_32052_32078 = state_32049__$1;
(statearr_32052_32078[(2)] = null);

(statearr_32052_32078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (4))){
var inst_32015 = (state_32049[(7)]);
var inst_32015__$1 = (state_32049[(2)]);
var state_32049__$1 = (function (){var statearr_32053 = state_32049;
(statearr_32053[(7)] = inst_32015__$1);

return statearr_32053;
})();
if(cljs.core.truth_(inst_32015__$1)){
var statearr_32054_32079 = state_32049__$1;
(statearr_32054_32079[(1)] = (5));

} else {
var statearr_32055_32080 = state_32049__$1;
(statearr_32055_32080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (15))){
var inst_32030 = (state_32049[(8)]);
var inst_32028 = (state_32049[(9)]);
var inst_32032 = inst_32030.call(null,inst_32028);
var state_32049__$1 = state_32049;
var statearr_32056_32081 = state_32049__$1;
(statearr_32056_32081[(2)] = inst_32032);

(statearr_32056_32081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (13))){
var inst_32039 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
var statearr_32057_32082 = state_32049__$1;
(statearr_32057_32082[(2)] = inst_32039);

(statearr_32057_32082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (6))){
var state_32049__$1 = state_32049;
var statearr_32058_32083 = state_32049__$1;
(statearr_32058_32083[(2)] = null);

(statearr_32058_32083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (17))){
var inst_32036 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
var statearr_32059_32084 = state_32049__$1;
(statearr_32059_32084[(2)] = inst_32036);

(statearr_32059_32084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (3))){
var inst_32047 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32049__$1,inst_32047);
} else {
if((state_val_32050 === (12))){
var state_32049__$1 = state_32049;
var statearr_32060_32085 = state_32049__$1;
(statearr_32060_32085[(2)] = null);

(statearr_32060_32085[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (2))){
var state_32049__$1 = state_32049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32049__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32050 === (11))){
var inst_32020 = (state_32049[(10)]);
var inst_32026 = figwheel.client.file_reloading.blocking_load.call(null,inst_32020);
var state_32049__$1 = state_32049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32049__$1,(14),inst_32026);
} else {
if((state_val_32050 === (9))){
var inst_32020 = (state_32049[(10)]);
var state_32049__$1 = state_32049;
if(cljs.core.truth_(inst_32020)){
var statearr_32061_32086 = state_32049__$1;
(statearr_32061_32086[(1)] = (11));

} else {
var statearr_32062_32087 = state_32049__$1;
(statearr_32062_32087[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (5))){
var inst_32021 = (state_32049[(11)]);
var inst_32015 = (state_32049[(7)]);
var inst_32020 = cljs.core.nth.call(null,inst_32015,(0),null);
var inst_32021__$1 = cljs.core.nth.call(null,inst_32015,(1),null);
var state_32049__$1 = (function (){var statearr_32063 = state_32049;
(statearr_32063[(10)] = inst_32020);

(statearr_32063[(11)] = inst_32021__$1);

return statearr_32063;
})();
if(cljs.core.truth_(inst_32021__$1)){
var statearr_32064_32088 = state_32049__$1;
(statearr_32064_32088[(1)] = (8));

} else {
var statearr_32065_32089 = state_32049__$1;
(statearr_32065_32089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (14))){
var inst_32020 = (state_32049[(10)]);
var inst_32030 = (state_32049[(8)]);
var inst_32028 = (state_32049[(2)]);
var inst_32029 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32030__$1 = cljs.core.get.call(null,inst_32029,inst_32020);
var state_32049__$1 = (function (){var statearr_32066 = state_32049;
(statearr_32066[(8)] = inst_32030__$1);

(statearr_32066[(9)] = inst_32028);

return statearr_32066;
})();
if(cljs.core.truth_(inst_32030__$1)){
var statearr_32067_32090 = state_32049__$1;
(statearr_32067_32090[(1)] = (15));

} else {
var statearr_32068_32091 = state_32049__$1;
(statearr_32068_32091[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (16))){
var inst_32028 = (state_32049[(9)]);
var inst_32034 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32028);
var state_32049__$1 = state_32049;
var statearr_32069_32092 = state_32049__$1;
(statearr_32069_32092[(2)] = inst_32034);

(statearr_32069_32092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (10))){
var inst_32041 = (state_32049[(2)]);
var state_32049__$1 = (function (){var statearr_32070 = state_32049;
(statearr_32070[(12)] = inst_32041);

return statearr_32070;
})();
var statearr_32071_32093 = state_32049__$1;
(statearr_32071_32093[(2)] = null);

(statearr_32071_32093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (8))){
var inst_32021 = (state_32049[(11)]);
var inst_32023 = eval(inst_32021);
var state_32049__$1 = state_32049;
var statearr_32072_32094 = state_32049__$1;
(statearr_32072_32094[(2)] = inst_32023);

(statearr_32072_32094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28435__auto__))
;
return ((function (switch__28340__auto__,c__28435__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28341__auto__ = null;
var figwheel$client$file_reloading$state_machine__28341__auto____0 = (function (){
var statearr_32073 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32073[(0)] = figwheel$client$file_reloading$state_machine__28341__auto__);

(statearr_32073[(1)] = (1));

return statearr_32073;
});
var figwheel$client$file_reloading$state_machine__28341__auto____1 = (function (state_32049){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_32049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e32074){if((e32074 instanceof Object)){
var ex__28344__auto__ = e32074;
var statearr_32075_32095 = state_32049;
(statearr_32075_32095[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32096 = state_32049;
state_32049 = G__32096;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28341__auto__ = function(state_32049){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28341__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28341__auto____1.call(this,state_32049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28341__auto____0;
figwheel$client$file_reloading$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28341__auto____1;
return figwheel$client$file_reloading$state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto__))
})();
var state__28437__auto__ = (function (){var statearr_32076 = f__28436__auto__.call(null);
(statearr_32076[(6)] = c__28435__auto__);

return statearr_32076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto__))
);

return c__28435__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32098 = arguments.length;
switch (G__32098) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32100,callback){
var map__32101 = p__32100;
var map__32101__$1 = (((((!((map__32101 == null))))?(((((map__32101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32101):map__32101);
var file_msg = map__32101__$1;
var namespace = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32101,map__32101__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32101,map__32101__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32103){
var map__32104 = p__32103;
var map__32104__$1 = (((((!((map__32104 == null))))?(((((map__32104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32104):map__32104);
var file_msg = map__32104__$1;
var namespace = cljs.core.get.call(null,map__32104__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32106){
var map__32107 = p__32106;
var map__32107__$1 = (((((!((map__32107 == null))))?(((((map__32107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32107):map__32107);
var file_msg = map__32107__$1;
var namespace = cljs.core.get.call(null,map__32107__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32109,callback){
var map__32110 = p__32109;
var map__32110__$1 = (((((!((map__32110 == null))))?(((((map__32110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32110):map__32110);
var file_msg = map__32110__$1;
var request_url = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28435__auto___32160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___32160,out){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___32160,out){
return (function (state_32145){
var state_val_32146 = (state_32145[(1)]);
if((state_val_32146 === (1))){
var inst_32119 = cljs.core.seq.call(null,files);
var inst_32120 = cljs.core.first.call(null,inst_32119);
var inst_32121 = cljs.core.next.call(null,inst_32119);
var inst_32122 = files;
var state_32145__$1 = (function (){var statearr_32147 = state_32145;
(statearr_32147[(7)] = inst_32121);

(statearr_32147[(8)] = inst_32122);

(statearr_32147[(9)] = inst_32120);

return statearr_32147;
})();
var statearr_32148_32161 = state_32145__$1;
(statearr_32148_32161[(2)] = null);

(statearr_32148_32161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (2))){
var inst_32122 = (state_32145[(8)]);
var inst_32128 = (state_32145[(10)]);
var inst_32127 = cljs.core.seq.call(null,inst_32122);
var inst_32128__$1 = cljs.core.first.call(null,inst_32127);
var inst_32129 = cljs.core.next.call(null,inst_32127);
var inst_32130 = (inst_32128__$1 == null);
var inst_32131 = cljs.core.not.call(null,inst_32130);
var state_32145__$1 = (function (){var statearr_32149 = state_32145;
(statearr_32149[(11)] = inst_32129);

(statearr_32149[(10)] = inst_32128__$1);

return statearr_32149;
})();
if(inst_32131){
var statearr_32150_32162 = state_32145__$1;
(statearr_32150_32162[(1)] = (4));

} else {
var statearr_32151_32163 = state_32145__$1;
(statearr_32151_32163[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (3))){
var inst_32143 = (state_32145[(2)]);
var state_32145__$1 = state_32145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32145__$1,inst_32143);
} else {
if((state_val_32146 === (4))){
var inst_32128 = (state_32145[(10)]);
var inst_32133 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32128);
var state_32145__$1 = state_32145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32145__$1,(7),inst_32133);
} else {
if((state_val_32146 === (5))){
var inst_32139 = cljs.core.async.close_BANG_.call(null,out);
var state_32145__$1 = state_32145;
var statearr_32152_32164 = state_32145__$1;
(statearr_32152_32164[(2)] = inst_32139);

(statearr_32152_32164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (6))){
var inst_32141 = (state_32145[(2)]);
var state_32145__$1 = state_32145;
var statearr_32153_32165 = state_32145__$1;
(statearr_32153_32165[(2)] = inst_32141);

(statearr_32153_32165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (7))){
var inst_32129 = (state_32145[(11)]);
var inst_32135 = (state_32145[(2)]);
var inst_32136 = cljs.core.async.put_BANG_.call(null,out,inst_32135);
var inst_32122 = inst_32129;
var state_32145__$1 = (function (){var statearr_32154 = state_32145;
(statearr_32154[(12)] = inst_32136);

(statearr_32154[(8)] = inst_32122);

return statearr_32154;
})();
var statearr_32155_32166 = state_32145__$1;
(statearr_32155_32166[(2)] = null);

(statearr_32155_32166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28435__auto___32160,out))
;
return ((function (switch__28340__auto__,c__28435__auto___32160,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28341__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28341__auto____0 = (function (){
var statearr_32156 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32156[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28341__auto__);

(statearr_32156[(1)] = (1));

return statearr_32156;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28341__auto____1 = (function (state_32145){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_32145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e32157){if((e32157 instanceof Object)){
var ex__28344__auto__ = e32157;
var statearr_32158_32167 = state_32145;
(statearr_32158_32167[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32168 = state_32145;
state_32145 = G__32168;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28341__auto__ = function(state_32145){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28341__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28341__auto____1.call(this,state_32145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28341__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28341__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___32160,out))
})();
var state__28437__auto__ = (function (){var statearr_32159 = f__28436__auto__.call(null);
(statearr_32159[(6)] = c__28435__auto___32160);

return statearr_32159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___32160,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32169,opts){
var map__32170 = p__32169;
var map__32170__$1 = (((((!((map__32170 == null))))?(((((map__32170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32170):map__32170);
var eval_body = cljs.core.get.call(null,map__32170__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32170__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32172){var e = e32172;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32173_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32173_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32174){
var vec__32175 = p__32174;
var k = cljs.core.nth.call(null,vec__32175,(0),null);
var v = cljs.core.nth.call(null,vec__32175,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32178){
var vec__32179 = p__32178;
var k = cljs.core.nth.call(null,vec__32179,(0),null);
var v = cljs.core.nth.call(null,vec__32179,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32185,p__32186){
var map__32187 = p__32185;
var map__32187__$1 = (((((!((map__32187 == null))))?(((((map__32187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32187):map__32187);
var opts = map__32187__$1;
var before_jsload = cljs.core.get.call(null,map__32187__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32187__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32187__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32188 = p__32186;
var map__32188__$1 = (((((!((map__32188 == null))))?(((((map__32188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32188):map__32188);
var msg = map__32188__$1;
var files = cljs.core.get.call(null,map__32188__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32188__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32188__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32342){
var state_val_32343 = (state_32342[(1)]);
if((state_val_32343 === (7))){
var inst_32204 = (state_32342[(7)]);
var inst_32202 = (state_32342[(8)]);
var inst_32205 = (state_32342[(9)]);
var inst_32203 = (state_32342[(10)]);
var inst_32210 = cljs.core._nth.call(null,inst_32203,inst_32205);
var inst_32211 = figwheel.client.file_reloading.eval_body.call(null,inst_32210,opts);
var inst_32212 = (inst_32205 + (1));
var tmp32344 = inst_32204;
var tmp32345 = inst_32202;
var tmp32346 = inst_32203;
var inst_32202__$1 = tmp32345;
var inst_32203__$1 = tmp32346;
var inst_32204__$1 = tmp32344;
var inst_32205__$1 = inst_32212;
var state_32342__$1 = (function (){var statearr_32347 = state_32342;
(statearr_32347[(7)] = inst_32204__$1);

(statearr_32347[(8)] = inst_32202__$1);

(statearr_32347[(9)] = inst_32205__$1);

(statearr_32347[(11)] = inst_32211);

(statearr_32347[(10)] = inst_32203__$1);

return statearr_32347;
})();
var statearr_32348_32431 = state_32342__$1;
(statearr_32348_32431[(2)] = null);

(statearr_32348_32431[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (20))){
var inst_32245 = (state_32342[(12)]);
var inst_32253 = figwheel.client.file_reloading.sort_files.call(null,inst_32245);
var state_32342__$1 = state_32342;
var statearr_32349_32432 = state_32342__$1;
(statearr_32349_32432[(2)] = inst_32253);

(statearr_32349_32432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (27))){
var state_32342__$1 = state_32342;
var statearr_32350_32433 = state_32342__$1;
(statearr_32350_32433[(2)] = null);

(statearr_32350_32433[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (1))){
var inst_32194 = (state_32342[(13)]);
var inst_32191 = before_jsload.call(null,files);
var inst_32192 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32193 = (function (){return ((function (inst_32194,inst_32191,inst_32192,state_val_32343,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32182_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32182_SHARP_);
});
;})(inst_32194,inst_32191,inst_32192,state_val_32343,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32194__$1 = cljs.core.filter.call(null,inst_32193,files);
var inst_32195 = cljs.core.not_empty.call(null,inst_32194__$1);
var state_32342__$1 = (function (){var statearr_32351 = state_32342;
(statearr_32351[(14)] = inst_32191);

(statearr_32351[(15)] = inst_32192);

(statearr_32351[(13)] = inst_32194__$1);

return statearr_32351;
})();
if(cljs.core.truth_(inst_32195)){
var statearr_32352_32434 = state_32342__$1;
(statearr_32352_32434[(1)] = (2));

} else {
var statearr_32353_32435 = state_32342__$1;
(statearr_32353_32435[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (24))){
var state_32342__$1 = state_32342;
var statearr_32354_32436 = state_32342__$1;
(statearr_32354_32436[(2)] = null);

(statearr_32354_32436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (39))){
var inst_32295 = (state_32342[(16)]);
var state_32342__$1 = state_32342;
var statearr_32355_32437 = state_32342__$1;
(statearr_32355_32437[(2)] = inst_32295);

(statearr_32355_32437[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (46))){
var inst_32337 = (state_32342[(2)]);
var state_32342__$1 = state_32342;
var statearr_32356_32438 = state_32342__$1;
(statearr_32356_32438[(2)] = inst_32337);

(statearr_32356_32438[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (4))){
var inst_32239 = (state_32342[(2)]);
var inst_32240 = cljs.core.List.EMPTY;
var inst_32241 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32240);
var inst_32242 = (function (){return ((function (inst_32239,inst_32240,inst_32241,state_val_32343,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32183_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32183_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32183_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32183_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_32239,inst_32240,inst_32241,state_val_32343,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32243 = cljs.core.filter.call(null,inst_32242,files);
var inst_32244 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32245 = cljs.core.concat.call(null,inst_32243,inst_32244);
var state_32342__$1 = (function (){var statearr_32357 = state_32342;
(statearr_32357[(12)] = inst_32245);

(statearr_32357[(17)] = inst_32241);

(statearr_32357[(18)] = inst_32239);

return statearr_32357;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32358_32439 = state_32342__$1;
(statearr_32358_32439[(1)] = (16));

} else {
var statearr_32359_32440 = state_32342__$1;
(statearr_32359_32440[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (15))){
var inst_32229 = (state_32342[(2)]);
var state_32342__$1 = state_32342;
var statearr_32360_32441 = state_32342__$1;
(statearr_32360_32441[(2)] = inst_32229);

(statearr_32360_32441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (21))){
var inst_32255 = (state_32342[(19)]);
var inst_32255__$1 = (state_32342[(2)]);
var inst_32256 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32255__$1);
var state_32342__$1 = (function (){var statearr_32361 = state_32342;
(statearr_32361[(19)] = inst_32255__$1);

return statearr_32361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32342__$1,(22),inst_32256);
} else {
if((state_val_32343 === (31))){
var inst_32340 = (state_32342[(2)]);
var state_32342__$1 = state_32342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32342__$1,inst_32340);
} else {
if((state_val_32343 === (32))){
var inst_32295 = (state_32342[(16)]);
var inst_32300 = inst_32295.cljs$lang$protocol_mask$partition0$;
var inst_32301 = (inst_32300 & (64));
var inst_32302 = inst_32295.cljs$core$ISeq$;
var inst_32303 = (cljs.core.PROTOCOL_SENTINEL === inst_32302);
var inst_32304 = ((inst_32301) || (inst_32303));
var state_32342__$1 = state_32342;
if(cljs.core.truth_(inst_32304)){
var statearr_32362_32442 = state_32342__$1;
(statearr_32362_32442[(1)] = (35));

} else {
var statearr_32363_32443 = state_32342__$1;
(statearr_32363_32443[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (40))){
var inst_32317 = (state_32342[(20)]);
var inst_32316 = (state_32342[(2)]);
var inst_32317__$1 = cljs.core.get.call(null,inst_32316,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32318 = cljs.core.get.call(null,inst_32316,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32319 = cljs.core.not_empty.call(null,inst_32317__$1);
var state_32342__$1 = (function (){var statearr_32364 = state_32342;
(statearr_32364[(20)] = inst_32317__$1);

(statearr_32364[(21)] = inst_32318);

return statearr_32364;
})();
if(cljs.core.truth_(inst_32319)){
var statearr_32365_32444 = state_32342__$1;
(statearr_32365_32444[(1)] = (41));

} else {
var statearr_32366_32445 = state_32342__$1;
(statearr_32366_32445[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (33))){
var state_32342__$1 = state_32342;
var statearr_32367_32446 = state_32342__$1;
(statearr_32367_32446[(2)] = false);

(statearr_32367_32446[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (13))){
var inst_32215 = (state_32342[(22)]);
var inst_32219 = cljs.core.chunk_first.call(null,inst_32215);
var inst_32220 = cljs.core.chunk_rest.call(null,inst_32215);
var inst_32221 = cljs.core.count.call(null,inst_32219);
var inst_32202 = inst_32220;
var inst_32203 = inst_32219;
var inst_32204 = inst_32221;
var inst_32205 = (0);
var state_32342__$1 = (function (){var statearr_32368 = state_32342;
(statearr_32368[(7)] = inst_32204);

(statearr_32368[(8)] = inst_32202);

(statearr_32368[(9)] = inst_32205);

(statearr_32368[(10)] = inst_32203);

return statearr_32368;
})();
var statearr_32369_32447 = state_32342__$1;
(statearr_32369_32447[(2)] = null);

(statearr_32369_32447[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (22))){
var inst_32258 = (state_32342[(23)]);
var inst_32255 = (state_32342[(19)]);
var inst_32263 = (state_32342[(24)]);
var inst_32259 = (state_32342[(25)]);
var inst_32258__$1 = (state_32342[(2)]);
var inst_32259__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32258__$1);
var inst_32260 = (function (){var all_files = inst_32255;
var res_SINGLEQUOTE_ = inst_32258__$1;
var res = inst_32259__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32258,inst_32255,inst_32263,inst_32259,inst_32258__$1,inst_32259__$1,state_val_32343,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32184_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32184_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32258,inst_32255,inst_32263,inst_32259,inst_32258__$1,inst_32259__$1,state_val_32343,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32261 = cljs.core.filter.call(null,inst_32260,inst_32258__$1);
var inst_32262 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32263__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32262);
var inst_32264 = cljs.core.not_empty.call(null,inst_32263__$1);
var state_32342__$1 = (function (){var statearr_32370 = state_32342;
(statearr_32370[(23)] = inst_32258__$1);

(statearr_32370[(24)] = inst_32263__$1);

(statearr_32370[(25)] = inst_32259__$1);

(statearr_32370[(26)] = inst_32261);

return statearr_32370;
})();
if(cljs.core.truth_(inst_32264)){
var statearr_32371_32448 = state_32342__$1;
(statearr_32371_32448[(1)] = (23));

} else {
var statearr_32372_32449 = state_32342__$1;
(statearr_32372_32449[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (36))){
var state_32342__$1 = state_32342;
var statearr_32373_32450 = state_32342__$1;
(statearr_32373_32450[(2)] = false);

(statearr_32373_32450[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (41))){
var inst_32317 = (state_32342[(20)]);
var inst_32321 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32322 = cljs.core.map.call(null,inst_32321,inst_32317);
var inst_32323 = cljs.core.pr_str.call(null,inst_32322);
var inst_32324 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32323)].join('');
var inst_32325 = figwheel.client.utils.log.call(null,inst_32324);
var state_32342__$1 = state_32342;
var statearr_32374_32451 = state_32342__$1;
(statearr_32374_32451[(2)] = inst_32325);

(statearr_32374_32451[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (43))){
var inst_32318 = (state_32342[(21)]);
var inst_32328 = (state_32342[(2)]);
var inst_32329 = cljs.core.not_empty.call(null,inst_32318);
var state_32342__$1 = (function (){var statearr_32375 = state_32342;
(statearr_32375[(27)] = inst_32328);

return statearr_32375;
})();
if(cljs.core.truth_(inst_32329)){
var statearr_32376_32452 = state_32342__$1;
(statearr_32376_32452[(1)] = (44));

} else {
var statearr_32377_32453 = state_32342__$1;
(statearr_32377_32453[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (29))){
var inst_32295 = (state_32342[(16)]);
var inst_32258 = (state_32342[(23)]);
var inst_32255 = (state_32342[(19)]);
var inst_32263 = (state_32342[(24)]);
var inst_32259 = (state_32342[(25)]);
var inst_32261 = (state_32342[(26)]);
var inst_32291 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32294 = (function (){var all_files = inst_32255;
var res_SINGLEQUOTE_ = inst_32258;
var res = inst_32259;
var files_not_loaded = inst_32261;
var dependencies_that_loaded = inst_32263;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32295,inst_32258,inst_32255,inst_32263,inst_32259,inst_32261,inst_32291,state_val_32343,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32293){
var map__32378 = p__32293;
var map__32378__$1 = (((((!((map__32378 == null))))?(((((map__32378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32378):map__32378);
var namespace = cljs.core.get.call(null,map__32378__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32295,inst_32258,inst_32255,inst_32263,inst_32259,inst_32261,inst_32291,state_val_32343,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32295__$1 = cljs.core.group_by.call(null,inst_32294,inst_32261);
var inst_32297 = (inst_32295__$1 == null);
var inst_32298 = cljs.core.not.call(null,inst_32297);
var state_32342__$1 = (function (){var statearr_32380 = state_32342;
(statearr_32380[(16)] = inst_32295__$1);

(statearr_32380[(28)] = inst_32291);

return statearr_32380;
})();
if(inst_32298){
var statearr_32381_32454 = state_32342__$1;
(statearr_32381_32454[(1)] = (32));

} else {
var statearr_32382_32455 = state_32342__$1;
(statearr_32382_32455[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (44))){
var inst_32318 = (state_32342[(21)]);
var inst_32331 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32318);
var inst_32332 = cljs.core.pr_str.call(null,inst_32331);
var inst_32333 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32332)].join('');
var inst_32334 = figwheel.client.utils.log.call(null,inst_32333);
var state_32342__$1 = state_32342;
var statearr_32383_32456 = state_32342__$1;
(statearr_32383_32456[(2)] = inst_32334);

(statearr_32383_32456[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (6))){
var inst_32236 = (state_32342[(2)]);
var state_32342__$1 = state_32342;
var statearr_32384_32457 = state_32342__$1;
(statearr_32384_32457[(2)] = inst_32236);

(statearr_32384_32457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (28))){
var inst_32261 = (state_32342[(26)]);
var inst_32288 = (state_32342[(2)]);
var inst_32289 = cljs.core.not_empty.call(null,inst_32261);
var state_32342__$1 = (function (){var statearr_32385 = state_32342;
(statearr_32385[(29)] = inst_32288);

return statearr_32385;
})();
if(cljs.core.truth_(inst_32289)){
var statearr_32386_32458 = state_32342__$1;
(statearr_32386_32458[(1)] = (29));

} else {
var statearr_32387_32459 = state_32342__$1;
(statearr_32387_32459[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (25))){
var inst_32259 = (state_32342[(25)]);
var inst_32275 = (state_32342[(2)]);
var inst_32276 = cljs.core.not_empty.call(null,inst_32259);
var state_32342__$1 = (function (){var statearr_32388 = state_32342;
(statearr_32388[(30)] = inst_32275);

return statearr_32388;
})();
if(cljs.core.truth_(inst_32276)){
var statearr_32389_32460 = state_32342__$1;
(statearr_32389_32460[(1)] = (26));

} else {
var statearr_32390_32461 = state_32342__$1;
(statearr_32390_32461[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (34))){
var inst_32311 = (state_32342[(2)]);
var state_32342__$1 = state_32342;
if(cljs.core.truth_(inst_32311)){
var statearr_32391_32462 = state_32342__$1;
(statearr_32391_32462[(1)] = (38));

} else {
var statearr_32392_32463 = state_32342__$1;
(statearr_32392_32463[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (17))){
var state_32342__$1 = state_32342;
var statearr_32393_32464 = state_32342__$1;
(statearr_32393_32464[(2)] = recompile_dependents);

(statearr_32393_32464[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (3))){
var state_32342__$1 = state_32342;
var statearr_32394_32465 = state_32342__$1;
(statearr_32394_32465[(2)] = null);

(statearr_32394_32465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (12))){
var inst_32232 = (state_32342[(2)]);
var state_32342__$1 = state_32342;
var statearr_32395_32466 = state_32342__$1;
(statearr_32395_32466[(2)] = inst_32232);

(statearr_32395_32466[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (2))){
var inst_32194 = (state_32342[(13)]);
var inst_32201 = cljs.core.seq.call(null,inst_32194);
var inst_32202 = inst_32201;
var inst_32203 = null;
var inst_32204 = (0);
var inst_32205 = (0);
var state_32342__$1 = (function (){var statearr_32396 = state_32342;
(statearr_32396[(7)] = inst_32204);

(statearr_32396[(8)] = inst_32202);

(statearr_32396[(9)] = inst_32205);

(statearr_32396[(10)] = inst_32203);

return statearr_32396;
})();
var statearr_32397_32467 = state_32342__$1;
(statearr_32397_32467[(2)] = null);

(statearr_32397_32467[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (23))){
var inst_32258 = (state_32342[(23)]);
var inst_32255 = (state_32342[(19)]);
var inst_32263 = (state_32342[(24)]);
var inst_32259 = (state_32342[(25)]);
var inst_32261 = (state_32342[(26)]);
var inst_32266 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32268 = (function (){var all_files = inst_32255;
var res_SINGLEQUOTE_ = inst_32258;
var res = inst_32259;
var files_not_loaded = inst_32261;
var dependencies_that_loaded = inst_32263;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32258,inst_32255,inst_32263,inst_32259,inst_32261,inst_32266,state_val_32343,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32267){
var map__32398 = p__32267;
var map__32398__$1 = (((((!((map__32398 == null))))?(((((map__32398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32398):map__32398);
var request_url = cljs.core.get.call(null,map__32398__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32258,inst_32255,inst_32263,inst_32259,inst_32261,inst_32266,state_val_32343,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32269 = cljs.core.reverse.call(null,inst_32263);
var inst_32270 = cljs.core.map.call(null,inst_32268,inst_32269);
var inst_32271 = cljs.core.pr_str.call(null,inst_32270);
var inst_32272 = figwheel.client.utils.log.call(null,inst_32271);
var state_32342__$1 = (function (){var statearr_32400 = state_32342;
(statearr_32400[(31)] = inst_32266);

return statearr_32400;
})();
var statearr_32401_32468 = state_32342__$1;
(statearr_32401_32468[(2)] = inst_32272);

(statearr_32401_32468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (35))){
var state_32342__$1 = state_32342;
var statearr_32402_32469 = state_32342__$1;
(statearr_32402_32469[(2)] = true);

(statearr_32402_32469[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (19))){
var inst_32245 = (state_32342[(12)]);
var inst_32251 = figwheel.client.file_reloading.expand_files.call(null,inst_32245);
var state_32342__$1 = state_32342;
var statearr_32403_32470 = state_32342__$1;
(statearr_32403_32470[(2)] = inst_32251);

(statearr_32403_32470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (11))){
var state_32342__$1 = state_32342;
var statearr_32404_32471 = state_32342__$1;
(statearr_32404_32471[(2)] = null);

(statearr_32404_32471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (9))){
var inst_32234 = (state_32342[(2)]);
var state_32342__$1 = state_32342;
var statearr_32405_32472 = state_32342__$1;
(statearr_32405_32472[(2)] = inst_32234);

(statearr_32405_32472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (5))){
var inst_32204 = (state_32342[(7)]);
var inst_32205 = (state_32342[(9)]);
var inst_32207 = (inst_32205 < inst_32204);
var inst_32208 = inst_32207;
var state_32342__$1 = state_32342;
if(cljs.core.truth_(inst_32208)){
var statearr_32406_32473 = state_32342__$1;
(statearr_32406_32473[(1)] = (7));

} else {
var statearr_32407_32474 = state_32342__$1;
(statearr_32407_32474[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (14))){
var inst_32215 = (state_32342[(22)]);
var inst_32224 = cljs.core.first.call(null,inst_32215);
var inst_32225 = figwheel.client.file_reloading.eval_body.call(null,inst_32224,opts);
var inst_32226 = cljs.core.next.call(null,inst_32215);
var inst_32202 = inst_32226;
var inst_32203 = null;
var inst_32204 = (0);
var inst_32205 = (0);
var state_32342__$1 = (function (){var statearr_32408 = state_32342;
(statearr_32408[(7)] = inst_32204);

(statearr_32408[(8)] = inst_32202);

(statearr_32408[(9)] = inst_32205);

(statearr_32408[(10)] = inst_32203);

(statearr_32408[(32)] = inst_32225);

return statearr_32408;
})();
var statearr_32409_32475 = state_32342__$1;
(statearr_32409_32475[(2)] = null);

(statearr_32409_32475[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (45))){
var state_32342__$1 = state_32342;
var statearr_32410_32476 = state_32342__$1;
(statearr_32410_32476[(2)] = null);

(statearr_32410_32476[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (26))){
var inst_32258 = (state_32342[(23)]);
var inst_32255 = (state_32342[(19)]);
var inst_32263 = (state_32342[(24)]);
var inst_32259 = (state_32342[(25)]);
var inst_32261 = (state_32342[(26)]);
var inst_32278 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32280 = (function (){var all_files = inst_32255;
var res_SINGLEQUOTE_ = inst_32258;
var res = inst_32259;
var files_not_loaded = inst_32261;
var dependencies_that_loaded = inst_32263;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32258,inst_32255,inst_32263,inst_32259,inst_32261,inst_32278,state_val_32343,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32279){
var map__32411 = p__32279;
var map__32411__$1 = (((((!((map__32411 == null))))?(((((map__32411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32411):map__32411);
var namespace = cljs.core.get.call(null,map__32411__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32411__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32258,inst_32255,inst_32263,inst_32259,inst_32261,inst_32278,state_val_32343,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32281 = cljs.core.map.call(null,inst_32280,inst_32259);
var inst_32282 = cljs.core.pr_str.call(null,inst_32281);
var inst_32283 = figwheel.client.utils.log.call(null,inst_32282);
var inst_32284 = (function (){var all_files = inst_32255;
var res_SINGLEQUOTE_ = inst_32258;
var res = inst_32259;
var files_not_loaded = inst_32261;
var dependencies_that_loaded = inst_32263;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32258,inst_32255,inst_32263,inst_32259,inst_32261,inst_32278,inst_32280,inst_32281,inst_32282,inst_32283,state_val_32343,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32258,inst_32255,inst_32263,inst_32259,inst_32261,inst_32278,inst_32280,inst_32281,inst_32282,inst_32283,state_val_32343,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32285 = setTimeout(inst_32284,(10));
var state_32342__$1 = (function (){var statearr_32413 = state_32342;
(statearr_32413[(33)] = inst_32283);

(statearr_32413[(34)] = inst_32278);

return statearr_32413;
})();
var statearr_32414_32477 = state_32342__$1;
(statearr_32414_32477[(2)] = inst_32285);

(statearr_32414_32477[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (16))){
var state_32342__$1 = state_32342;
var statearr_32415_32478 = state_32342__$1;
(statearr_32415_32478[(2)] = reload_dependents);

(statearr_32415_32478[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (38))){
var inst_32295 = (state_32342[(16)]);
var inst_32313 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32295);
var state_32342__$1 = state_32342;
var statearr_32416_32479 = state_32342__$1;
(statearr_32416_32479[(2)] = inst_32313);

(statearr_32416_32479[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (30))){
var state_32342__$1 = state_32342;
var statearr_32417_32480 = state_32342__$1;
(statearr_32417_32480[(2)] = null);

(statearr_32417_32480[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (10))){
var inst_32215 = (state_32342[(22)]);
var inst_32217 = cljs.core.chunked_seq_QMARK_.call(null,inst_32215);
var state_32342__$1 = state_32342;
if(inst_32217){
var statearr_32418_32481 = state_32342__$1;
(statearr_32418_32481[(1)] = (13));

} else {
var statearr_32419_32482 = state_32342__$1;
(statearr_32419_32482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (18))){
var inst_32249 = (state_32342[(2)]);
var state_32342__$1 = state_32342;
if(cljs.core.truth_(inst_32249)){
var statearr_32420_32483 = state_32342__$1;
(statearr_32420_32483[(1)] = (19));

} else {
var statearr_32421_32484 = state_32342__$1;
(statearr_32421_32484[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (42))){
var state_32342__$1 = state_32342;
var statearr_32422_32485 = state_32342__$1;
(statearr_32422_32485[(2)] = null);

(statearr_32422_32485[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (37))){
var inst_32308 = (state_32342[(2)]);
var state_32342__$1 = state_32342;
var statearr_32423_32486 = state_32342__$1;
(statearr_32423_32486[(2)] = inst_32308);

(statearr_32423_32486[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (8))){
var inst_32215 = (state_32342[(22)]);
var inst_32202 = (state_32342[(8)]);
var inst_32215__$1 = cljs.core.seq.call(null,inst_32202);
var state_32342__$1 = (function (){var statearr_32424 = state_32342;
(statearr_32424[(22)] = inst_32215__$1);

return statearr_32424;
})();
if(inst_32215__$1){
var statearr_32425_32487 = state_32342__$1;
(statearr_32425_32487[(1)] = (10));

} else {
var statearr_32426_32488 = state_32342__$1;
(statearr_32426_32488[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28340__auto__,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28341__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28341__auto____0 = (function (){
var statearr_32427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32427[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28341__auto__);

(statearr_32427[(1)] = (1));

return statearr_32427;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28341__auto____1 = (function (state_32342){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_32342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e32428){if((e32428 instanceof Object)){
var ex__28344__auto__ = e32428;
var statearr_32429_32489 = state_32342;
(statearr_32429_32489[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32490 = state_32342;
state_32342 = G__32490;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28341__auto__ = function(state_32342){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28341__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28341__auto____1.call(this,state_32342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28341__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28341__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28437__auto__ = (function (){var statearr_32430 = f__28436__auto__.call(null);
(statearr_32430[(6)] = c__28435__auto__);

return statearr_32430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto__,map__32187,map__32187__$1,opts,before_jsload,on_jsload,reload_dependents,map__32188,map__32188__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28435__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32493,link){
var map__32494 = p__32493;
var map__32494__$1 = (((((!((map__32494 == null))))?(((((map__32494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32494):map__32494);
var file = cljs.core.get.call(null,map__32494__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__32494,map__32494__$1,file){
return (function (p1__32491_SHARP_,p2__32492_SHARP_){
if(cljs.core._EQ_.call(null,p1__32491_SHARP_,p2__32492_SHARP_)){
return p1__32491_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__32494,map__32494__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32497){
var map__32498 = p__32497;
var map__32498__$1 = (((((!((map__32498 == null))))?(((((map__32498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32498):map__32498);
var match_length = cljs.core.get.call(null,map__32498__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32498__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32496_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32496_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32500_SHARP_,p2__32501_SHARP_){
return cljs.core.assoc.call(null,p1__32500_SHARP_,cljs.core.get.call(null,p2__32501_SHARP_,key),p2__32501_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_32502 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32502);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32502);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32503,p__32504){
var map__32505 = p__32503;
var map__32505__$1 = (((((!((map__32505 == null))))?(((((map__32505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32505):map__32505);
var on_cssload = cljs.core.get.call(null,map__32505__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32506 = p__32504;
var map__32506__$1 = (((((!((map__32506 == null))))?(((((map__32506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32506):map__32506);
var files_msg = map__32506__$1;
var files = cljs.core.get.call(null,map__32506__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1544906676949
