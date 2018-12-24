// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e33604){if((e33604 instanceof Error)){
var e = e33604;
return "Error: Unable to stringify";
} else {
throw e33604;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__33607 = arguments.length;
switch (G__33607) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__33605_SHARP_){
if(typeof p1__33605_SHARP_ === 'string'){
return p1__33605_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__33605_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33610 = arguments.length;
var i__4642__auto___33611 = (0);
while(true){
if((i__4642__auto___33611 < len__4641__auto___33610)){
args__4647__auto__.push((arguments[i__4642__auto___33611]));

var G__33612 = (i__4642__auto___33611 + (1));
i__4642__auto___33611 = G__33612;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq33609){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33609));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33614 = arguments.length;
var i__4642__auto___33615 = (0);
while(true){
if((i__4642__auto___33615 < len__4641__auto___33614)){
args__4647__auto__.push((arguments[i__4642__auto___33615]));

var G__33616 = (i__4642__auto___33615 + (1));
i__4642__auto___33615 = G__33616;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq33613){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33613));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33617){
var map__33618 = p__33617;
var map__33618__$1 = (((((!((map__33618 == null))))?(((((map__33618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33618):map__33618);
var message = cljs.core.get.call(null,map__33618__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33618__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28435__auto___33697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___33697,ch){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___33697,ch){
return (function (state_33669){
var state_val_33670 = (state_33669[(1)]);
if((state_val_33670 === (7))){
var inst_33665 = (state_33669[(2)]);
var state_33669__$1 = state_33669;
var statearr_33671_33698 = state_33669__$1;
(statearr_33671_33698[(2)] = inst_33665);

(statearr_33671_33698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33670 === (1))){
var state_33669__$1 = state_33669;
var statearr_33672_33699 = state_33669__$1;
(statearr_33672_33699[(2)] = null);

(statearr_33672_33699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33670 === (4))){
var inst_33622 = (state_33669[(7)]);
var inst_33622__$1 = (state_33669[(2)]);
var state_33669__$1 = (function (){var statearr_33673 = state_33669;
(statearr_33673[(7)] = inst_33622__$1);

return statearr_33673;
})();
if(cljs.core.truth_(inst_33622__$1)){
var statearr_33674_33700 = state_33669__$1;
(statearr_33674_33700[(1)] = (5));

} else {
var statearr_33675_33701 = state_33669__$1;
(statearr_33675_33701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33670 === (15))){
var inst_33629 = (state_33669[(8)]);
var inst_33644 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33629);
var inst_33645 = cljs.core.first.call(null,inst_33644);
var inst_33646 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33645);
var inst_33647 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33646)].join('');
var inst_33648 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33647);
var state_33669__$1 = state_33669;
var statearr_33676_33702 = state_33669__$1;
(statearr_33676_33702[(2)] = inst_33648);

(statearr_33676_33702[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33670 === (13))){
var inst_33653 = (state_33669[(2)]);
var state_33669__$1 = state_33669;
var statearr_33677_33703 = state_33669__$1;
(statearr_33677_33703[(2)] = inst_33653);

(statearr_33677_33703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33670 === (6))){
var state_33669__$1 = state_33669;
var statearr_33678_33704 = state_33669__$1;
(statearr_33678_33704[(2)] = null);

(statearr_33678_33704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33670 === (17))){
var inst_33651 = (state_33669[(2)]);
var state_33669__$1 = state_33669;
var statearr_33679_33705 = state_33669__$1;
(statearr_33679_33705[(2)] = inst_33651);

(statearr_33679_33705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33670 === (3))){
var inst_33667 = (state_33669[(2)]);
var state_33669__$1 = state_33669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33669__$1,inst_33667);
} else {
if((state_val_33670 === (12))){
var inst_33628 = (state_33669[(9)]);
var inst_33642 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33628,opts);
var state_33669__$1 = state_33669;
if(inst_33642){
var statearr_33680_33706 = state_33669__$1;
(statearr_33680_33706[(1)] = (15));

} else {
var statearr_33681_33707 = state_33669__$1;
(statearr_33681_33707[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33670 === (2))){
var state_33669__$1 = state_33669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33669__$1,(4),ch);
} else {
if((state_val_33670 === (11))){
var inst_33629 = (state_33669[(8)]);
var inst_33634 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33635 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33629);
var inst_33636 = cljs.core.async.timeout.call(null,(1000));
var inst_33637 = [inst_33635,inst_33636];
var inst_33638 = (new cljs.core.PersistentVector(null,2,(5),inst_33634,inst_33637,null));
var state_33669__$1 = state_33669;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33669__$1,(14),inst_33638);
} else {
if((state_val_33670 === (9))){
var inst_33629 = (state_33669[(8)]);
var inst_33655 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33656 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33629);
var inst_33657 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33656);
var inst_33658 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33657)].join('');
var inst_33659 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33658);
var state_33669__$1 = (function (){var statearr_33682 = state_33669;
(statearr_33682[(10)] = inst_33655);

return statearr_33682;
})();
var statearr_33683_33708 = state_33669__$1;
(statearr_33683_33708[(2)] = inst_33659);

(statearr_33683_33708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33670 === (5))){
var inst_33622 = (state_33669[(7)]);
var inst_33624 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33625 = (new cljs.core.PersistentArrayMap(null,2,inst_33624,null));
var inst_33626 = (new cljs.core.PersistentHashSet(null,inst_33625,null));
var inst_33627 = figwheel.client.focus_msgs.call(null,inst_33626,inst_33622);
var inst_33628 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33627);
var inst_33629 = cljs.core.first.call(null,inst_33627);
var inst_33630 = figwheel.client.autoload_QMARK_.call(null);
var state_33669__$1 = (function (){var statearr_33684 = state_33669;
(statearr_33684[(8)] = inst_33629);

(statearr_33684[(9)] = inst_33628);

return statearr_33684;
})();
if(cljs.core.truth_(inst_33630)){
var statearr_33685_33709 = state_33669__$1;
(statearr_33685_33709[(1)] = (8));

} else {
var statearr_33686_33710 = state_33669__$1;
(statearr_33686_33710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33670 === (14))){
var inst_33640 = (state_33669[(2)]);
var state_33669__$1 = state_33669;
var statearr_33687_33711 = state_33669__$1;
(statearr_33687_33711[(2)] = inst_33640);

(statearr_33687_33711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33670 === (16))){
var state_33669__$1 = state_33669;
var statearr_33688_33712 = state_33669__$1;
(statearr_33688_33712[(2)] = null);

(statearr_33688_33712[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33670 === (10))){
var inst_33661 = (state_33669[(2)]);
var state_33669__$1 = (function (){var statearr_33689 = state_33669;
(statearr_33689[(11)] = inst_33661);

return statearr_33689;
})();
var statearr_33690_33713 = state_33669__$1;
(statearr_33690_33713[(2)] = null);

(statearr_33690_33713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33670 === (8))){
var inst_33628 = (state_33669[(9)]);
var inst_33632 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33628,opts);
var state_33669__$1 = state_33669;
if(cljs.core.truth_(inst_33632)){
var statearr_33691_33714 = state_33669__$1;
(statearr_33691_33714[(1)] = (11));

} else {
var statearr_33692_33715 = state_33669__$1;
(statearr_33692_33715[(1)] = (12));

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
});})(c__28435__auto___33697,ch))
;
return ((function (switch__28340__auto__,c__28435__auto___33697,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28341__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28341__auto____0 = (function (){
var statearr_33693 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33693[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28341__auto__);

(statearr_33693[(1)] = (1));

return statearr_33693;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28341__auto____1 = (function (state_33669){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_33669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e33694){if((e33694 instanceof Object)){
var ex__28344__auto__ = e33694;
var statearr_33695_33716 = state_33669;
(statearr_33695_33716[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33717 = state_33669;
state_33669 = G__33717;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28341__auto__ = function(state_33669){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28341__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28341__auto____1.call(this,state_33669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28341__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28341__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___33697,ch))
})();
var state__28437__auto__ = (function (){var statearr_33696 = f__28436__auto__.call(null);
(statearr_33696[(6)] = c__28435__auto___33697);

return statearr_33696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___33697,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33718_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33718_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33724 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33724){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33720 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33721 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33722 = true;
var _STAR_print_fn_STAR__temp_val__33723 = ((function (_STAR_print_newline_STAR__orig_val__33720,_STAR_print_fn_STAR__orig_val__33721,_STAR_print_newline_STAR__temp_val__33722,sb,base_path_33724){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__33720,_STAR_print_fn_STAR__orig_val__33721,_STAR_print_newline_STAR__temp_val__33722,sb,base_path_33724))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33722;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33723;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33721;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33720;
}}catch (e33719){if((e33719 instanceof Error)){
var e = e33719;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33724], null));
} else {
var e = e33719;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33724))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33725){
var map__33726 = p__33725;
var map__33726__$1 = (((((!((map__33726 == null))))?(((((map__33726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33726):map__33726);
var opts = map__33726__$1;
var build_id = cljs.core.get.call(null,map__33726__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33726,map__33726__$1,opts,build_id){
return (function (p__33728){
var vec__33729 = p__33728;
var seq__33730 = cljs.core.seq.call(null,vec__33729);
var first__33731 = cljs.core.first.call(null,seq__33730);
var seq__33730__$1 = cljs.core.next.call(null,seq__33730);
var map__33732 = first__33731;
var map__33732__$1 = (((((!((map__33732 == null))))?(((((map__33732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33732):map__33732);
var msg = map__33732__$1;
var msg_name = cljs.core.get.call(null,map__33732__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33730__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33729,seq__33730,first__33731,seq__33730__$1,map__33732,map__33732__$1,msg,msg_name,_,map__33726,map__33726__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33729,seq__33730,first__33731,seq__33730__$1,map__33732,map__33732__$1,msg,msg_name,_,map__33726,map__33726__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33726,map__33726__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33734){
var vec__33735 = p__33734;
var seq__33736 = cljs.core.seq.call(null,vec__33735);
var first__33737 = cljs.core.first.call(null,seq__33736);
var seq__33736__$1 = cljs.core.next.call(null,seq__33736);
var map__33738 = first__33737;
var map__33738__$1 = (((((!((map__33738 == null))))?(((((map__33738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33738):map__33738);
var msg = map__33738__$1;
var msg_name = cljs.core.get.call(null,map__33738__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33736__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33740){
var map__33741 = p__33740;
var map__33741__$1 = (((((!((map__33741 == null))))?(((((map__33741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33741):map__33741);
var on_compile_warning = cljs.core.get.call(null,map__33741__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33741__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33741,map__33741__$1,on_compile_warning,on_compile_fail){
return (function (p__33743){
var vec__33744 = p__33743;
var seq__33745 = cljs.core.seq.call(null,vec__33744);
var first__33746 = cljs.core.first.call(null,seq__33745);
var seq__33745__$1 = cljs.core.next.call(null,seq__33745);
var map__33747 = first__33746;
var map__33747__$1 = (((((!((map__33747 == null))))?(((((map__33747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33747):map__33747);
var msg = map__33747__$1;
var msg_name = cljs.core.get.call(null,map__33747__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33745__$1;
var pred__33749 = cljs.core._EQ_;
var expr__33750 = msg_name;
if(cljs.core.truth_(pred__33749.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33750))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33749.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33750))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33741,map__33741__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto__,msg_hist,msg_names,msg){
return (function (state_33839){
var state_val_33840 = (state_33839[(1)]);
if((state_val_33840 === (7))){
var inst_33759 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
if(cljs.core.truth_(inst_33759)){
var statearr_33841_33888 = state_33839__$1;
(statearr_33841_33888[(1)] = (8));

} else {
var statearr_33842_33889 = state_33839__$1;
(statearr_33842_33889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (20))){
var inst_33833 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33843_33890 = state_33839__$1;
(statearr_33843_33890[(2)] = inst_33833);

(statearr_33843_33890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (27))){
var inst_33829 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33844_33891 = state_33839__$1;
(statearr_33844_33891[(2)] = inst_33829);

(statearr_33844_33891[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (1))){
var inst_33752 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33839__$1 = state_33839;
if(cljs.core.truth_(inst_33752)){
var statearr_33845_33892 = state_33839__$1;
(statearr_33845_33892[(1)] = (2));

} else {
var statearr_33846_33893 = state_33839__$1;
(statearr_33846_33893[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (24))){
var inst_33831 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33847_33894 = state_33839__$1;
(statearr_33847_33894[(2)] = inst_33831);

(statearr_33847_33894[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (4))){
var inst_33837 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33839__$1,inst_33837);
} else {
if((state_val_33840 === (15))){
var inst_33835 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33848_33895 = state_33839__$1;
(statearr_33848_33895[(2)] = inst_33835);

(statearr_33848_33895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (21))){
var inst_33788 = (state_33839[(2)]);
var inst_33789 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33790 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33789);
var state_33839__$1 = (function (){var statearr_33849 = state_33839;
(statearr_33849[(7)] = inst_33788);

return statearr_33849;
})();
var statearr_33850_33896 = state_33839__$1;
(statearr_33850_33896[(2)] = inst_33790);

(statearr_33850_33896[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (31))){
var inst_33818 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33839__$1 = state_33839;
if(inst_33818){
var statearr_33851_33897 = state_33839__$1;
(statearr_33851_33897[(1)] = (34));

} else {
var statearr_33852_33898 = state_33839__$1;
(statearr_33852_33898[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (32))){
var inst_33827 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33853_33899 = state_33839__$1;
(statearr_33853_33899[(2)] = inst_33827);

(statearr_33853_33899[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (33))){
var inst_33814 = (state_33839[(2)]);
var inst_33815 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33816 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33815);
var state_33839__$1 = (function (){var statearr_33854 = state_33839;
(statearr_33854[(8)] = inst_33814);

return statearr_33854;
})();
var statearr_33855_33900 = state_33839__$1;
(statearr_33855_33900[(2)] = inst_33816);

(statearr_33855_33900[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (13))){
var inst_33773 = figwheel.client.heads_up.clear.call(null);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33839__$1,(16),inst_33773);
} else {
if((state_val_33840 === (22))){
var inst_33794 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33795 = figwheel.client.heads_up.append_warning_message.call(null,inst_33794);
var state_33839__$1 = state_33839;
var statearr_33856_33901 = state_33839__$1;
(statearr_33856_33901[(2)] = inst_33795);

(statearr_33856_33901[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (36))){
var inst_33825 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33857_33902 = state_33839__$1;
(statearr_33857_33902[(2)] = inst_33825);

(statearr_33857_33902[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (29))){
var inst_33805 = (state_33839[(2)]);
var inst_33806 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33807 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33806);
var state_33839__$1 = (function (){var statearr_33858 = state_33839;
(statearr_33858[(9)] = inst_33805);

return statearr_33858;
})();
var statearr_33859_33903 = state_33839__$1;
(statearr_33859_33903[(2)] = inst_33807);

(statearr_33859_33903[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (6))){
var inst_33754 = (state_33839[(10)]);
var state_33839__$1 = state_33839;
var statearr_33860_33904 = state_33839__$1;
(statearr_33860_33904[(2)] = inst_33754);

(statearr_33860_33904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (28))){
var inst_33801 = (state_33839[(2)]);
var inst_33802 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33803 = figwheel.client.heads_up.display_warning.call(null,inst_33802);
var state_33839__$1 = (function (){var statearr_33861 = state_33839;
(statearr_33861[(11)] = inst_33801);

return statearr_33861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33839__$1,(29),inst_33803);
} else {
if((state_val_33840 === (25))){
var inst_33799 = figwheel.client.heads_up.clear.call(null);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33839__$1,(28),inst_33799);
} else {
if((state_val_33840 === (34))){
var inst_33820 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33839__$1,(37),inst_33820);
} else {
if((state_val_33840 === (17))){
var inst_33779 = (state_33839[(2)]);
var inst_33780 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33781 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33780);
var state_33839__$1 = (function (){var statearr_33862 = state_33839;
(statearr_33862[(12)] = inst_33779);

return statearr_33862;
})();
var statearr_33863_33905 = state_33839__$1;
(statearr_33863_33905[(2)] = inst_33781);

(statearr_33863_33905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (3))){
var inst_33771 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33839__$1 = state_33839;
if(inst_33771){
var statearr_33864_33906 = state_33839__$1;
(statearr_33864_33906[(1)] = (13));

} else {
var statearr_33865_33907 = state_33839__$1;
(statearr_33865_33907[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (12))){
var inst_33767 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33866_33908 = state_33839__$1;
(statearr_33866_33908[(2)] = inst_33767);

(statearr_33866_33908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (2))){
var inst_33754 = (state_33839[(10)]);
var inst_33754__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33839__$1 = (function (){var statearr_33867 = state_33839;
(statearr_33867[(10)] = inst_33754__$1);

return statearr_33867;
})();
if(cljs.core.truth_(inst_33754__$1)){
var statearr_33868_33909 = state_33839__$1;
(statearr_33868_33909[(1)] = (5));

} else {
var statearr_33869_33910 = state_33839__$1;
(statearr_33869_33910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (23))){
var inst_33797 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33839__$1 = state_33839;
if(inst_33797){
var statearr_33870_33911 = state_33839__$1;
(statearr_33870_33911[(1)] = (25));

} else {
var statearr_33871_33912 = state_33839__$1;
(statearr_33871_33912[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (35))){
var state_33839__$1 = state_33839;
var statearr_33872_33913 = state_33839__$1;
(statearr_33872_33913[(2)] = null);

(statearr_33872_33913[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (19))){
var inst_33792 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33839__$1 = state_33839;
if(inst_33792){
var statearr_33873_33914 = state_33839__$1;
(statearr_33873_33914[(1)] = (22));

} else {
var statearr_33874_33915 = state_33839__$1;
(statearr_33874_33915[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (11))){
var inst_33763 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33875_33916 = state_33839__$1;
(statearr_33875_33916[(2)] = inst_33763);

(statearr_33875_33916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (9))){
var inst_33765 = figwheel.client.heads_up.clear.call(null);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33839__$1,(12),inst_33765);
} else {
if((state_val_33840 === (5))){
var inst_33756 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33839__$1 = state_33839;
var statearr_33876_33917 = state_33839__$1;
(statearr_33876_33917[(2)] = inst_33756);

(statearr_33876_33917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (14))){
var inst_33783 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33839__$1 = state_33839;
if(inst_33783){
var statearr_33877_33918 = state_33839__$1;
(statearr_33877_33918[(1)] = (18));

} else {
var statearr_33878_33919 = state_33839__$1;
(statearr_33878_33919[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (26))){
var inst_33809 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33839__$1 = state_33839;
if(inst_33809){
var statearr_33879_33920 = state_33839__$1;
(statearr_33879_33920[(1)] = (30));

} else {
var statearr_33880_33921 = state_33839__$1;
(statearr_33880_33921[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (16))){
var inst_33775 = (state_33839[(2)]);
var inst_33776 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33777 = figwheel.client.heads_up.display_exception.call(null,inst_33776);
var state_33839__$1 = (function (){var statearr_33881 = state_33839;
(statearr_33881[(13)] = inst_33775);

return statearr_33881;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33839__$1,(17),inst_33777);
} else {
if((state_val_33840 === (30))){
var inst_33811 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33812 = figwheel.client.heads_up.display_warning.call(null,inst_33811);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33839__$1,(33),inst_33812);
} else {
if((state_val_33840 === (10))){
var inst_33769 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33882_33922 = state_33839__$1;
(statearr_33882_33922[(2)] = inst_33769);

(statearr_33882_33922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (18))){
var inst_33785 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33786 = figwheel.client.heads_up.display_exception.call(null,inst_33785);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33839__$1,(21),inst_33786);
} else {
if((state_val_33840 === (37))){
var inst_33822 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33883_33923 = state_33839__$1;
(statearr_33883_33923[(2)] = inst_33822);

(statearr_33883_33923[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (8))){
var inst_33761 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33839__$1,(11),inst_33761);
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
});})(c__28435__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28340__auto__,c__28435__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28341__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28341__auto____0 = (function (){
var statearr_33884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33884[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28341__auto__);

(statearr_33884[(1)] = (1));

return statearr_33884;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28341__auto____1 = (function (state_33839){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_33839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e33885){if((e33885 instanceof Object)){
var ex__28344__auto__ = e33885;
var statearr_33886_33924 = state_33839;
(statearr_33886_33924[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33925 = state_33839;
state_33839 = G__33925;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28341__auto__ = function(state_33839){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28341__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28341__auto____1.call(this,state_33839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28341__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28341__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto__,msg_hist,msg_names,msg))
})();
var state__28437__auto__ = (function (){var statearr_33887 = f__28436__auto__.call(null);
(statearr_33887[(6)] = c__28435__auto__);

return statearr_33887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto__,msg_hist,msg_names,msg))
);

return c__28435__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28435__auto___33954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___33954,ch){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___33954,ch){
return (function (state_33940){
var state_val_33941 = (state_33940[(1)]);
if((state_val_33941 === (1))){
var state_33940__$1 = state_33940;
var statearr_33942_33955 = state_33940__$1;
(statearr_33942_33955[(2)] = null);

(statearr_33942_33955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (2))){
var state_33940__$1 = state_33940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33940__$1,(4),ch);
} else {
if((state_val_33941 === (3))){
var inst_33938 = (state_33940[(2)]);
var state_33940__$1 = state_33940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33940__$1,inst_33938);
} else {
if((state_val_33941 === (4))){
var inst_33928 = (state_33940[(7)]);
var inst_33928__$1 = (state_33940[(2)]);
var state_33940__$1 = (function (){var statearr_33943 = state_33940;
(statearr_33943[(7)] = inst_33928__$1);

return statearr_33943;
})();
if(cljs.core.truth_(inst_33928__$1)){
var statearr_33944_33956 = state_33940__$1;
(statearr_33944_33956[(1)] = (5));

} else {
var statearr_33945_33957 = state_33940__$1;
(statearr_33945_33957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (5))){
var inst_33928 = (state_33940[(7)]);
var inst_33930 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33928);
var state_33940__$1 = state_33940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33940__$1,(8),inst_33930);
} else {
if((state_val_33941 === (6))){
var state_33940__$1 = state_33940;
var statearr_33946_33958 = state_33940__$1;
(statearr_33946_33958[(2)] = null);

(statearr_33946_33958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (7))){
var inst_33936 = (state_33940[(2)]);
var state_33940__$1 = state_33940;
var statearr_33947_33959 = state_33940__$1;
(statearr_33947_33959[(2)] = inst_33936);

(statearr_33947_33959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (8))){
var inst_33932 = (state_33940[(2)]);
var state_33940__$1 = (function (){var statearr_33948 = state_33940;
(statearr_33948[(8)] = inst_33932);

return statearr_33948;
})();
var statearr_33949_33960 = state_33940__$1;
(statearr_33949_33960[(2)] = null);

(statearr_33949_33960[(1)] = (2));


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
});})(c__28435__auto___33954,ch))
;
return ((function (switch__28340__auto__,c__28435__auto___33954,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28341__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28341__auto____0 = (function (){
var statearr_33950 = [null,null,null,null,null,null,null,null,null];
(statearr_33950[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28341__auto__);

(statearr_33950[(1)] = (1));

return statearr_33950;
});
var figwheel$client$heads_up_plugin_$_state_machine__28341__auto____1 = (function (state_33940){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_33940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e33951){if((e33951 instanceof Object)){
var ex__28344__auto__ = e33951;
var statearr_33952_33961 = state_33940;
(statearr_33952_33961[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33962 = state_33940;
state_33940 = G__33962;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28341__auto__ = function(state_33940){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28341__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28341__auto____1.call(this,state_33940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28341__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28341__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___33954,ch))
})();
var state__28437__auto__ = (function (){var statearr_33953 = f__28436__auto__.call(null);
(statearr_33953[(6)] = c__28435__auto___33954);

return statearr_33953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___33954,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto__){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto__){
return (function (state_33968){
var state_val_33969 = (state_33968[(1)]);
if((state_val_33969 === (1))){
var inst_33963 = cljs.core.async.timeout.call(null,(3000));
var state_33968__$1 = state_33968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33968__$1,(2),inst_33963);
} else {
if((state_val_33969 === (2))){
var inst_33965 = (state_33968[(2)]);
var inst_33966 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33968__$1 = (function (){var statearr_33970 = state_33968;
(statearr_33970[(7)] = inst_33965);

return statearr_33970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33968__$1,inst_33966);
} else {
return null;
}
}
});})(c__28435__auto__))
;
return ((function (switch__28340__auto__,c__28435__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28341__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28341__auto____0 = (function (){
var statearr_33971 = [null,null,null,null,null,null,null,null];
(statearr_33971[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28341__auto__);

(statearr_33971[(1)] = (1));

return statearr_33971;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28341__auto____1 = (function (state_33968){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_33968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e33972){if((e33972 instanceof Object)){
var ex__28344__auto__ = e33972;
var statearr_33973_33975 = state_33968;
(statearr_33973_33975[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33976 = state_33968;
state_33968 = G__33976;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28341__auto__ = function(state_33968){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28341__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28341__auto____1.call(this,state_33968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28341__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28341__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto__))
})();
var state__28437__auto__ = (function (){var statearr_33974 = f__28436__auto__.call(null);
(statearr_33974[(6)] = c__28435__auto__);

return statearr_33974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto__))
);

return c__28435__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto__,figwheel_version,temp__5457__auto__){
return (function (state_33983){
var state_val_33984 = (state_33983[(1)]);
if((state_val_33984 === (1))){
var inst_33977 = cljs.core.async.timeout.call(null,(2000));
var state_33983__$1 = state_33983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33983__$1,(2),inst_33977);
} else {
if((state_val_33984 === (2))){
var inst_33979 = (state_33983[(2)]);
var inst_33980 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_33981 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33980);
var state_33983__$1 = (function (){var statearr_33985 = state_33983;
(statearr_33985[(7)] = inst_33979);

return statearr_33985;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33983__$1,inst_33981);
} else {
return null;
}
}
});})(c__28435__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__28340__auto__,c__28435__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28341__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28341__auto____0 = (function (){
var statearr_33986 = [null,null,null,null,null,null,null,null];
(statearr_33986[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28341__auto__);

(statearr_33986[(1)] = (1));

return statearr_33986;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28341__auto____1 = (function (state_33983){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_33983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e33987){if((e33987 instanceof Object)){
var ex__28344__auto__ = e33987;
var statearr_33988_33990 = state_33983;
(statearr_33988_33990[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33991 = state_33983;
state_33983 = G__33991;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28341__auto__ = function(state_33983){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28341__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28341__auto____1.call(this,state_33983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28341__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28341__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto__,figwheel_version,temp__5457__auto__))
})();
var state__28437__auto__ = (function (){var statearr_33989 = f__28436__auto__.call(null);
(statearr_33989[(6)] = c__28435__auto__);

return statearr_33989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto__,figwheel_version,temp__5457__auto__))
);

return c__28435__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33992){
var map__33993 = p__33992;
var map__33993__$1 = (((((!((map__33993 == null))))?(((((map__33993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33993):map__33993);
var file = cljs.core.get.call(null,map__33993__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33993__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33993__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33995 = "";
var G__33995__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33995),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33995);
var G__33995__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33995__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33995__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33995__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33995__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33996){
var map__33997 = p__33996;
var map__33997__$1 = (((((!((map__33997 == null))))?(((((map__33997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33997):map__33997);
var ed = map__33997__$1;
var formatted_exception = cljs.core.get.call(null,map__33997__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33997__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33997__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33999_34003 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34000_34004 = null;
var count__34001_34005 = (0);
var i__34002_34006 = (0);
while(true){
if((i__34002_34006 < count__34001_34005)){
var msg_34007 = cljs.core._nth.call(null,chunk__34000_34004,i__34002_34006);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34007);


var G__34008 = seq__33999_34003;
var G__34009 = chunk__34000_34004;
var G__34010 = count__34001_34005;
var G__34011 = (i__34002_34006 + (1));
seq__33999_34003 = G__34008;
chunk__34000_34004 = G__34009;
count__34001_34005 = G__34010;
i__34002_34006 = G__34011;
continue;
} else {
var temp__5457__auto___34012 = cljs.core.seq.call(null,seq__33999_34003);
if(temp__5457__auto___34012){
var seq__33999_34013__$1 = temp__5457__auto___34012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33999_34013__$1)){
var c__4461__auto___34014 = cljs.core.chunk_first.call(null,seq__33999_34013__$1);
var G__34015 = cljs.core.chunk_rest.call(null,seq__33999_34013__$1);
var G__34016 = c__4461__auto___34014;
var G__34017 = cljs.core.count.call(null,c__4461__auto___34014);
var G__34018 = (0);
seq__33999_34003 = G__34015;
chunk__34000_34004 = G__34016;
count__34001_34005 = G__34017;
i__34002_34006 = G__34018;
continue;
} else {
var msg_34019 = cljs.core.first.call(null,seq__33999_34013__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34019);


var G__34020 = cljs.core.next.call(null,seq__33999_34013__$1);
var G__34021 = null;
var G__34022 = (0);
var G__34023 = (0);
seq__33999_34003 = G__34020;
chunk__34000_34004 = G__34021;
count__34001_34005 = G__34022;
i__34002_34006 = G__34023;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34024){
var map__34025 = p__34024;
var map__34025__$1 = (((((!((map__34025 == null))))?(((((map__34025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34025):map__34025);
var w = map__34025__$1;
var message = cljs.core.get.call(null,map__34025__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34027 = cljs.core.seq.call(null,plugins);
var chunk__34028 = null;
var count__34029 = (0);
var i__34030 = (0);
while(true){
if((i__34030 < count__34029)){
var vec__34031 = cljs.core._nth.call(null,chunk__34028,i__34030);
var k = cljs.core.nth.call(null,vec__34031,(0),null);
var plugin = cljs.core.nth.call(null,vec__34031,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34037 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34027,chunk__34028,count__34029,i__34030,pl_34037,vec__34031,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34037.call(null,msg_hist);
});})(seq__34027,chunk__34028,count__34029,i__34030,pl_34037,vec__34031,k,plugin))
);
} else {
}


var G__34038 = seq__34027;
var G__34039 = chunk__34028;
var G__34040 = count__34029;
var G__34041 = (i__34030 + (1));
seq__34027 = G__34038;
chunk__34028 = G__34039;
count__34029 = G__34040;
i__34030 = G__34041;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34027);
if(temp__5457__auto__){
var seq__34027__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34027__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34027__$1);
var G__34042 = cljs.core.chunk_rest.call(null,seq__34027__$1);
var G__34043 = c__4461__auto__;
var G__34044 = cljs.core.count.call(null,c__4461__auto__);
var G__34045 = (0);
seq__34027 = G__34042;
chunk__34028 = G__34043;
count__34029 = G__34044;
i__34030 = G__34045;
continue;
} else {
var vec__34034 = cljs.core.first.call(null,seq__34027__$1);
var k = cljs.core.nth.call(null,vec__34034,(0),null);
var plugin = cljs.core.nth.call(null,vec__34034,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34046 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34027,chunk__34028,count__34029,i__34030,pl_34046,vec__34034,k,plugin,seq__34027__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34046.call(null,msg_hist);
});})(seq__34027,chunk__34028,count__34029,i__34030,pl_34046,vec__34034,k,plugin,seq__34027__$1,temp__5457__auto__))
);
} else {
}


var G__34047 = cljs.core.next.call(null,seq__34027__$1);
var G__34048 = null;
var G__34049 = (0);
var G__34050 = (0);
seq__34027 = G__34047;
chunk__34028 = G__34048;
count__34029 = G__34049;
i__34030 = G__34050;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__34052 = arguments.length;
switch (G__34052) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__34053_34058 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34054_34059 = null;
var count__34055_34060 = (0);
var i__34056_34061 = (0);
while(true){
if((i__34056_34061 < count__34055_34060)){
var msg_34062 = cljs.core._nth.call(null,chunk__34054_34059,i__34056_34061);
figwheel.client.socket.handle_incoming_message.call(null,msg_34062);


var G__34063 = seq__34053_34058;
var G__34064 = chunk__34054_34059;
var G__34065 = count__34055_34060;
var G__34066 = (i__34056_34061 + (1));
seq__34053_34058 = G__34063;
chunk__34054_34059 = G__34064;
count__34055_34060 = G__34065;
i__34056_34061 = G__34066;
continue;
} else {
var temp__5457__auto___34067 = cljs.core.seq.call(null,seq__34053_34058);
if(temp__5457__auto___34067){
var seq__34053_34068__$1 = temp__5457__auto___34067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34053_34068__$1)){
var c__4461__auto___34069 = cljs.core.chunk_first.call(null,seq__34053_34068__$1);
var G__34070 = cljs.core.chunk_rest.call(null,seq__34053_34068__$1);
var G__34071 = c__4461__auto___34069;
var G__34072 = cljs.core.count.call(null,c__4461__auto___34069);
var G__34073 = (0);
seq__34053_34058 = G__34070;
chunk__34054_34059 = G__34071;
count__34055_34060 = G__34072;
i__34056_34061 = G__34073;
continue;
} else {
var msg_34074 = cljs.core.first.call(null,seq__34053_34068__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34074);


var G__34075 = cljs.core.next.call(null,seq__34053_34068__$1);
var G__34076 = null;
var G__34077 = (0);
var G__34078 = (0);
seq__34053_34058 = G__34075;
chunk__34054_34059 = G__34076;
count__34055_34060 = G__34077;
i__34056_34061 = G__34078;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34083 = arguments.length;
var i__4642__auto___34084 = (0);
while(true){
if((i__4642__auto___34084 < len__4641__auto___34083)){
args__4647__auto__.push((arguments[i__4642__auto___34084]));

var G__34085 = (i__4642__auto___34084 + (1));
i__4642__auto___34084 = G__34085;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34080){
var map__34081 = p__34080;
var map__34081__$1 = (((((!((map__34081 == null))))?(((((map__34081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34081):map__34081);
var opts = map__34081__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34079){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34079));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34086){if((e34086 instanceof Error)){
var e = e34086;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34086;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__34087){
var map__34088 = p__34087;
var map__34088__$1 = (((((!((map__34088 == null))))?(((((map__34088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34088):map__34088);
var msg_name = cljs.core.get.call(null,map__34088__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1544906678316
