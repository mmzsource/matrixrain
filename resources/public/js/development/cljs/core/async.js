// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28495 = arguments.length;
switch (G__28495) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28496 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28496 = (function (f,blockable,meta28497){
this.f = f;
this.blockable = blockable;
this.meta28497 = meta28497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28498,meta28497__$1){
var self__ = this;
var _28498__$1 = this;
return (new cljs.core.async.t_cljs$core$async28496(self__.f,self__.blockable,meta28497__$1));
});

cljs.core.async.t_cljs$core$async28496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28498){
var self__ = this;
var _28498__$1 = this;
return self__.meta28497;
});

cljs.core.async.t_cljs$core$async28496.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28496.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28496.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28496.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28497","meta28497",1806249472,null)], null);
});

cljs.core.async.t_cljs$core$async28496.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28496";

cljs.core.async.t_cljs$core$async28496.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28496");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28496.
 */
cljs.core.async.__GT_t_cljs$core$async28496 = (function cljs$core$async$__GT_t_cljs$core$async28496(f__$1,blockable__$1,meta28497){
return (new cljs.core.async.t_cljs$core$async28496(f__$1,blockable__$1,meta28497));
});

}

return (new cljs.core.async.t_cljs$core$async28496(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28502 = arguments.length;
switch (G__28502) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28505 = arguments.length;
switch (G__28505) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28508 = arguments.length;
switch (G__28508) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28510 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28510);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28510,ret){
return (function (){
return fn1.call(null,val_28510);
});})(val_28510,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28512 = arguments.length;
switch (G__28512) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___28514 = n;
var x_28515 = (0);
while(true){
if((x_28515 < n__4518__auto___28514)){
(a[x_28515] = (0));

var G__28516 = (x_28515 + (1));
x_28515 = G__28516;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28517 = (i + (1));
i = G__28517;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28518 = (function (flag,meta28519){
this.flag = flag;
this.meta28519 = meta28519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28520,meta28519__$1){
var self__ = this;
var _28520__$1 = this;
return (new cljs.core.async.t_cljs$core$async28518(self__.flag,meta28519__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28520){
var self__ = this;
var _28520__$1 = this;
return self__.meta28519;
});})(flag))
;

cljs.core.async.t_cljs$core$async28518.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28518.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28518.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28519","meta28519",1568721855,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28518";

cljs.core.async.t_cljs$core$async28518.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28518");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28518.
 */
cljs.core.async.__GT_t_cljs$core$async28518 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28518(flag__$1,meta28519){
return (new cljs.core.async.t_cljs$core$async28518(flag__$1,meta28519));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28518(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28521 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28521 = (function (flag,cb,meta28522){
this.flag = flag;
this.cb = cb;
this.meta28522 = meta28522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28523,meta28522__$1){
var self__ = this;
var _28523__$1 = this;
return (new cljs.core.async.t_cljs$core$async28521(self__.flag,self__.cb,meta28522__$1));
});

cljs.core.async.t_cljs$core$async28521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28523){
var self__ = this;
var _28523__$1 = this;
return self__.meta28522;
});

cljs.core.async.t_cljs$core$async28521.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28521.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28522","meta28522",-74709071,null)], null);
});

cljs.core.async.t_cljs$core$async28521.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28521";

cljs.core.async.t_cljs$core$async28521.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28521");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28521.
 */
cljs.core.async.__GT_t_cljs$core$async28521 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28521(flag__$1,cb__$1,meta28522){
return (new cljs.core.async.t_cljs$core$async28521(flag__$1,cb__$1,meta28522));
});

}

return (new cljs.core.async.t_cljs$core$async28521(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28524_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28524_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28525_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28525_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28526 = (i + (1));
i = G__28526;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28532 = arguments.length;
var i__4642__auto___28533 = (0);
while(true){
if((i__4642__auto___28533 < len__4641__auto___28532)){
args__4647__auto__.push((arguments[i__4642__auto___28533]));

var G__28534 = (i__4642__auto___28533 + (1));
i__4642__auto___28533 = G__28534;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28529){
var map__28530 = p__28529;
var map__28530__$1 = (((((!((map__28530 == null))))?(((((map__28530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28530):map__28530);
var opts = map__28530__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28527){
var G__28528 = cljs.core.first.call(null,seq28527);
var seq28527__$1 = cljs.core.next.call(null,seq28527);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28528,seq28527__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28536 = arguments.length;
switch (G__28536) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28435__auto___28582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___28582){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___28582){
return (function (state_28560){
var state_val_28561 = (state_28560[(1)]);
if((state_val_28561 === (7))){
var inst_28556 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28562_28583 = state_28560__$1;
(statearr_28562_28583[(2)] = inst_28556);

(statearr_28562_28583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (1))){
var state_28560__$1 = state_28560;
var statearr_28563_28584 = state_28560__$1;
(statearr_28563_28584[(2)] = null);

(statearr_28563_28584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (4))){
var inst_28539 = (state_28560[(7)]);
var inst_28539__$1 = (state_28560[(2)]);
var inst_28540 = (inst_28539__$1 == null);
var state_28560__$1 = (function (){var statearr_28564 = state_28560;
(statearr_28564[(7)] = inst_28539__$1);

return statearr_28564;
})();
if(cljs.core.truth_(inst_28540)){
var statearr_28565_28585 = state_28560__$1;
(statearr_28565_28585[(1)] = (5));

} else {
var statearr_28566_28586 = state_28560__$1;
(statearr_28566_28586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (13))){
var state_28560__$1 = state_28560;
var statearr_28567_28587 = state_28560__$1;
(statearr_28567_28587[(2)] = null);

(statearr_28567_28587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (6))){
var inst_28539 = (state_28560[(7)]);
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28560__$1,(11),to,inst_28539);
} else {
if((state_val_28561 === (3))){
var inst_28558 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28560__$1,inst_28558);
} else {
if((state_val_28561 === (12))){
var state_28560__$1 = state_28560;
var statearr_28568_28588 = state_28560__$1;
(statearr_28568_28588[(2)] = null);

(statearr_28568_28588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (2))){
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28560__$1,(4),from);
} else {
if((state_val_28561 === (11))){
var inst_28549 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
if(cljs.core.truth_(inst_28549)){
var statearr_28569_28589 = state_28560__$1;
(statearr_28569_28589[(1)] = (12));

} else {
var statearr_28570_28590 = state_28560__$1;
(statearr_28570_28590[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (9))){
var state_28560__$1 = state_28560;
var statearr_28571_28591 = state_28560__$1;
(statearr_28571_28591[(2)] = null);

(statearr_28571_28591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (5))){
var state_28560__$1 = state_28560;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28572_28592 = state_28560__$1;
(statearr_28572_28592[(1)] = (8));

} else {
var statearr_28573_28593 = state_28560__$1;
(statearr_28573_28593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (14))){
var inst_28554 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28574_28594 = state_28560__$1;
(statearr_28574_28594[(2)] = inst_28554);

(statearr_28574_28594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (10))){
var inst_28546 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28575_28595 = state_28560__$1;
(statearr_28575_28595[(2)] = inst_28546);

(statearr_28575_28595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (8))){
var inst_28543 = cljs.core.async.close_BANG_.call(null,to);
var state_28560__$1 = state_28560;
var statearr_28576_28596 = state_28560__$1;
(statearr_28576_28596[(2)] = inst_28543);

(statearr_28576_28596[(1)] = (10));


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
});})(c__28435__auto___28582))
;
return ((function (switch__28340__auto__,c__28435__auto___28582){
return (function() {
var cljs$core$async$state_machine__28341__auto__ = null;
var cljs$core$async$state_machine__28341__auto____0 = (function (){
var statearr_28577 = [null,null,null,null,null,null,null,null];
(statearr_28577[(0)] = cljs$core$async$state_machine__28341__auto__);

(statearr_28577[(1)] = (1));

return statearr_28577;
});
var cljs$core$async$state_machine__28341__auto____1 = (function (state_28560){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_28560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e28578){if((e28578 instanceof Object)){
var ex__28344__auto__ = e28578;
var statearr_28579_28597 = state_28560;
(statearr_28579_28597[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28598 = state_28560;
state_28560 = G__28598;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$state_machine__28341__auto__ = function(state_28560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28341__auto____1.call(this,state_28560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28341__auto____0;
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28341__auto____1;
return cljs$core$async$state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___28582))
})();
var state__28437__auto__ = (function (){var statearr_28580 = f__28436__auto__.call(null);
(statearr_28580[(6)] = c__28435__auto___28582);

return statearr_28580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___28582))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28599){
var vec__28600 = p__28599;
var v = cljs.core.nth.call(null,vec__28600,(0),null);
var p = cljs.core.nth.call(null,vec__28600,(1),null);
var job = vec__28600;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28435__auto___28771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___28771,res,vec__28600,v,p,job,jobs,results){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___28771,res,vec__28600,v,p,job,jobs,results){
return (function (state_28607){
var state_val_28608 = (state_28607[(1)]);
if((state_val_28608 === (1))){
var state_28607__$1 = state_28607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28607__$1,(2),res,v);
} else {
if((state_val_28608 === (2))){
var inst_28604 = (state_28607[(2)]);
var inst_28605 = cljs.core.async.close_BANG_.call(null,res);
var state_28607__$1 = (function (){var statearr_28609 = state_28607;
(statearr_28609[(7)] = inst_28604);

return statearr_28609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28607__$1,inst_28605);
} else {
return null;
}
}
});})(c__28435__auto___28771,res,vec__28600,v,p,job,jobs,results))
;
return ((function (switch__28340__auto__,c__28435__auto___28771,res,vec__28600,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0 = (function (){
var statearr_28610 = [null,null,null,null,null,null,null,null];
(statearr_28610[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__);

(statearr_28610[(1)] = (1));

return statearr_28610;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1 = (function (state_28607){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_28607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e28611){if((e28611 instanceof Object)){
var ex__28344__auto__ = e28611;
var statearr_28612_28772 = state_28607;
(statearr_28612_28772[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28773 = state_28607;
state_28607 = G__28773;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__ = function(state_28607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1.call(this,state_28607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___28771,res,vec__28600,v,p,job,jobs,results))
})();
var state__28437__auto__ = (function (){var statearr_28613 = f__28436__auto__.call(null);
(statearr_28613[(6)] = c__28435__auto___28771);

return statearr_28613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___28771,res,vec__28600,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28614){
var vec__28615 = p__28614;
var v = cljs.core.nth.call(null,vec__28615,(0),null);
var p = cljs.core.nth.call(null,vec__28615,(1),null);
var job = vec__28615;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___28774 = n;
var __28775 = (0);
while(true){
if((__28775 < n__4518__auto___28774)){
var G__28618_28776 = type;
var G__28618_28777__$1 = (((G__28618_28776 instanceof cljs.core.Keyword))?G__28618_28776.fqn:null);
switch (G__28618_28777__$1) {
case "compute":
var c__28435__auto___28779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28775,c__28435__auto___28779,G__28618_28776,G__28618_28777__$1,n__4518__auto___28774,jobs,results,process,async){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (__28775,c__28435__auto___28779,G__28618_28776,G__28618_28777__$1,n__4518__auto___28774,jobs,results,process,async){
return (function (state_28631){
var state_val_28632 = (state_28631[(1)]);
if((state_val_28632 === (1))){
var state_28631__$1 = state_28631;
var statearr_28633_28780 = state_28631__$1;
(statearr_28633_28780[(2)] = null);

(statearr_28633_28780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28632 === (2))){
var state_28631__$1 = state_28631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28631__$1,(4),jobs);
} else {
if((state_val_28632 === (3))){
var inst_28629 = (state_28631[(2)]);
var state_28631__$1 = state_28631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28631__$1,inst_28629);
} else {
if((state_val_28632 === (4))){
var inst_28621 = (state_28631[(2)]);
var inst_28622 = process.call(null,inst_28621);
var state_28631__$1 = state_28631;
if(cljs.core.truth_(inst_28622)){
var statearr_28634_28781 = state_28631__$1;
(statearr_28634_28781[(1)] = (5));

} else {
var statearr_28635_28782 = state_28631__$1;
(statearr_28635_28782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28632 === (5))){
var state_28631__$1 = state_28631;
var statearr_28636_28783 = state_28631__$1;
(statearr_28636_28783[(2)] = null);

(statearr_28636_28783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28632 === (6))){
var state_28631__$1 = state_28631;
var statearr_28637_28784 = state_28631__$1;
(statearr_28637_28784[(2)] = null);

(statearr_28637_28784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28632 === (7))){
var inst_28627 = (state_28631[(2)]);
var state_28631__$1 = state_28631;
var statearr_28638_28785 = state_28631__$1;
(statearr_28638_28785[(2)] = inst_28627);

(statearr_28638_28785[(1)] = (3));


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
});})(__28775,c__28435__auto___28779,G__28618_28776,G__28618_28777__$1,n__4518__auto___28774,jobs,results,process,async))
;
return ((function (__28775,switch__28340__auto__,c__28435__auto___28779,G__28618_28776,G__28618_28777__$1,n__4518__auto___28774,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0 = (function (){
var statearr_28639 = [null,null,null,null,null,null,null];
(statearr_28639[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__);

(statearr_28639[(1)] = (1));

return statearr_28639;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1 = (function (state_28631){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_28631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e28640){if((e28640 instanceof Object)){
var ex__28344__auto__ = e28640;
var statearr_28641_28786 = state_28631;
(statearr_28641_28786[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28787 = state_28631;
state_28631 = G__28787;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__ = function(state_28631){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1.call(this,state_28631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__;
})()
;})(__28775,switch__28340__auto__,c__28435__auto___28779,G__28618_28776,G__28618_28777__$1,n__4518__auto___28774,jobs,results,process,async))
})();
var state__28437__auto__ = (function (){var statearr_28642 = f__28436__auto__.call(null);
(statearr_28642[(6)] = c__28435__auto___28779);

return statearr_28642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(__28775,c__28435__auto___28779,G__28618_28776,G__28618_28777__$1,n__4518__auto___28774,jobs,results,process,async))
);


break;
case "async":
var c__28435__auto___28788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28775,c__28435__auto___28788,G__28618_28776,G__28618_28777__$1,n__4518__auto___28774,jobs,results,process,async){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (__28775,c__28435__auto___28788,G__28618_28776,G__28618_28777__$1,n__4518__auto___28774,jobs,results,process,async){
return (function (state_28655){
var state_val_28656 = (state_28655[(1)]);
if((state_val_28656 === (1))){
var state_28655__$1 = state_28655;
var statearr_28657_28789 = state_28655__$1;
(statearr_28657_28789[(2)] = null);

(statearr_28657_28789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28656 === (2))){
var state_28655__$1 = state_28655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28655__$1,(4),jobs);
} else {
if((state_val_28656 === (3))){
var inst_28653 = (state_28655[(2)]);
var state_28655__$1 = state_28655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28655__$1,inst_28653);
} else {
if((state_val_28656 === (4))){
var inst_28645 = (state_28655[(2)]);
var inst_28646 = async.call(null,inst_28645);
var state_28655__$1 = state_28655;
if(cljs.core.truth_(inst_28646)){
var statearr_28658_28790 = state_28655__$1;
(statearr_28658_28790[(1)] = (5));

} else {
var statearr_28659_28791 = state_28655__$1;
(statearr_28659_28791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28656 === (5))){
var state_28655__$1 = state_28655;
var statearr_28660_28792 = state_28655__$1;
(statearr_28660_28792[(2)] = null);

(statearr_28660_28792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28656 === (6))){
var state_28655__$1 = state_28655;
var statearr_28661_28793 = state_28655__$1;
(statearr_28661_28793[(2)] = null);

(statearr_28661_28793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28656 === (7))){
var inst_28651 = (state_28655[(2)]);
var state_28655__$1 = state_28655;
var statearr_28662_28794 = state_28655__$1;
(statearr_28662_28794[(2)] = inst_28651);

(statearr_28662_28794[(1)] = (3));


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
});})(__28775,c__28435__auto___28788,G__28618_28776,G__28618_28777__$1,n__4518__auto___28774,jobs,results,process,async))
;
return ((function (__28775,switch__28340__auto__,c__28435__auto___28788,G__28618_28776,G__28618_28777__$1,n__4518__auto___28774,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0 = (function (){
var statearr_28663 = [null,null,null,null,null,null,null];
(statearr_28663[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__);

(statearr_28663[(1)] = (1));

return statearr_28663;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1 = (function (state_28655){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_28655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e28664){if((e28664 instanceof Object)){
var ex__28344__auto__ = e28664;
var statearr_28665_28795 = state_28655;
(statearr_28665_28795[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28796 = state_28655;
state_28655 = G__28796;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__ = function(state_28655){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1.call(this,state_28655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__;
})()
;})(__28775,switch__28340__auto__,c__28435__auto___28788,G__28618_28776,G__28618_28777__$1,n__4518__auto___28774,jobs,results,process,async))
})();
var state__28437__auto__ = (function (){var statearr_28666 = f__28436__auto__.call(null);
(statearr_28666[(6)] = c__28435__auto___28788);

return statearr_28666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(__28775,c__28435__auto___28788,G__28618_28776,G__28618_28777__$1,n__4518__auto___28774,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28618_28777__$1)].join('')));

}

var G__28797 = (__28775 + (1));
__28775 = G__28797;
continue;
} else {
}
break;
}

var c__28435__auto___28798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___28798,jobs,results,process,async){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___28798,jobs,results,process,async){
return (function (state_28688){
var state_val_28689 = (state_28688[(1)]);
if((state_val_28689 === (1))){
var state_28688__$1 = state_28688;
var statearr_28690_28799 = state_28688__$1;
(statearr_28690_28799[(2)] = null);

(statearr_28690_28799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28689 === (2))){
var state_28688__$1 = state_28688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28688__$1,(4),from);
} else {
if((state_val_28689 === (3))){
var inst_28686 = (state_28688[(2)]);
var state_28688__$1 = state_28688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28688__$1,inst_28686);
} else {
if((state_val_28689 === (4))){
var inst_28669 = (state_28688[(7)]);
var inst_28669__$1 = (state_28688[(2)]);
var inst_28670 = (inst_28669__$1 == null);
var state_28688__$1 = (function (){var statearr_28691 = state_28688;
(statearr_28691[(7)] = inst_28669__$1);

return statearr_28691;
})();
if(cljs.core.truth_(inst_28670)){
var statearr_28692_28800 = state_28688__$1;
(statearr_28692_28800[(1)] = (5));

} else {
var statearr_28693_28801 = state_28688__$1;
(statearr_28693_28801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28689 === (5))){
var inst_28672 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28688__$1 = state_28688;
var statearr_28694_28802 = state_28688__$1;
(statearr_28694_28802[(2)] = inst_28672);

(statearr_28694_28802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28689 === (6))){
var inst_28674 = (state_28688[(8)]);
var inst_28669 = (state_28688[(7)]);
var inst_28674__$1 = cljs.core.async.chan.call(null,(1));
var inst_28675 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28676 = [inst_28669,inst_28674__$1];
var inst_28677 = (new cljs.core.PersistentVector(null,2,(5),inst_28675,inst_28676,null));
var state_28688__$1 = (function (){var statearr_28695 = state_28688;
(statearr_28695[(8)] = inst_28674__$1);

return statearr_28695;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28688__$1,(8),jobs,inst_28677);
} else {
if((state_val_28689 === (7))){
var inst_28684 = (state_28688[(2)]);
var state_28688__$1 = state_28688;
var statearr_28696_28803 = state_28688__$1;
(statearr_28696_28803[(2)] = inst_28684);

(statearr_28696_28803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28689 === (8))){
var inst_28674 = (state_28688[(8)]);
var inst_28679 = (state_28688[(2)]);
var state_28688__$1 = (function (){var statearr_28697 = state_28688;
(statearr_28697[(9)] = inst_28679);

return statearr_28697;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28688__$1,(9),results,inst_28674);
} else {
if((state_val_28689 === (9))){
var inst_28681 = (state_28688[(2)]);
var state_28688__$1 = (function (){var statearr_28698 = state_28688;
(statearr_28698[(10)] = inst_28681);

return statearr_28698;
})();
var statearr_28699_28804 = state_28688__$1;
(statearr_28699_28804[(2)] = null);

(statearr_28699_28804[(1)] = (2));


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
});})(c__28435__auto___28798,jobs,results,process,async))
;
return ((function (switch__28340__auto__,c__28435__auto___28798,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0 = (function (){
var statearr_28700 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__);

(statearr_28700[(1)] = (1));

return statearr_28700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1 = (function (state_28688){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_28688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e28701){if((e28701 instanceof Object)){
var ex__28344__auto__ = e28701;
var statearr_28702_28805 = state_28688;
(statearr_28702_28805[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28806 = state_28688;
state_28688 = G__28806;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__ = function(state_28688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1.call(this,state_28688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___28798,jobs,results,process,async))
})();
var state__28437__auto__ = (function (){var statearr_28703 = f__28436__auto__.call(null);
(statearr_28703[(6)] = c__28435__auto___28798);

return statearr_28703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___28798,jobs,results,process,async))
);


var c__28435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto__,jobs,results,process,async){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto__,jobs,results,process,async){
return (function (state_28741){
var state_val_28742 = (state_28741[(1)]);
if((state_val_28742 === (7))){
var inst_28737 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28743_28807 = state_28741__$1;
(statearr_28743_28807[(2)] = inst_28737);

(statearr_28743_28807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (20))){
var state_28741__$1 = state_28741;
var statearr_28744_28808 = state_28741__$1;
(statearr_28744_28808[(2)] = null);

(statearr_28744_28808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (1))){
var state_28741__$1 = state_28741;
var statearr_28745_28809 = state_28741__$1;
(statearr_28745_28809[(2)] = null);

(statearr_28745_28809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (4))){
var inst_28706 = (state_28741[(7)]);
var inst_28706__$1 = (state_28741[(2)]);
var inst_28707 = (inst_28706__$1 == null);
var state_28741__$1 = (function (){var statearr_28746 = state_28741;
(statearr_28746[(7)] = inst_28706__$1);

return statearr_28746;
})();
if(cljs.core.truth_(inst_28707)){
var statearr_28747_28810 = state_28741__$1;
(statearr_28747_28810[(1)] = (5));

} else {
var statearr_28748_28811 = state_28741__$1;
(statearr_28748_28811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (15))){
var inst_28719 = (state_28741[(8)]);
var state_28741__$1 = state_28741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28741__$1,(18),to,inst_28719);
} else {
if((state_val_28742 === (21))){
var inst_28732 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28749_28812 = state_28741__$1;
(statearr_28749_28812[(2)] = inst_28732);

(statearr_28749_28812[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (13))){
var inst_28734 = (state_28741[(2)]);
var state_28741__$1 = (function (){var statearr_28750 = state_28741;
(statearr_28750[(9)] = inst_28734);

return statearr_28750;
})();
var statearr_28751_28813 = state_28741__$1;
(statearr_28751_28813[(2)] = null);

(statearr_28751_28813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (6))){
var inst_28706 = (state_28741[(7)]);
var state_28741__$1 = state_28741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28741__$1,(11),inst_28706);
} else {
if((state_val_28742 === (17))){
var inst_28727 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
if(cljs.core.truth_(inst_28727)){
var statearr_28752_28814 = state_28741__$1;
(statearr_28752_28814[(1)] = (19));

} else {
var statearr_28753_28815 = state_28741__$1;
(statearr_28753_28815[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (3))){
var inst_28739 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28741__$1,inst_28739);
} else {
if((state_val_28742 === (12))){
var inst_28716 = (state_28741[(10)]);
var state_28741__$1 = state_28741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28741__$1,(14),inst_28716);
} else {
if((state_val_28742 === (2))){
var state_28741__$1 = state_28741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28741__$1,(4),results);
} else {
if((state_val_28742 === (19))){
var state_28741__$1 = state_28741;
var statearr_28754_28816 = state_28741__$1;
(statearr_28754_28816[(2)] = null);

(statearr_28754_28816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (11))){
var inst_28716 = (state_28741[(2)]);
var state_28741__$1 = (function (){var statearr_28755 = state_28741;
(statearr_28755[(10)] = inst_28716);

return statearr_28755;
})();
var statearr_28756_28817 = state_28741__$1;
(statearr_28756_28817[(2)] = null);

(statearr_28756_28817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (9))){
var state_28741__$1 = state_28741;
var statearr_28757_28818 = state_28741__$1;
(statearr_28757_28818[(2)] = null);

(statearr_28757_28818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (5))){
var state_28741__$1 = state_28741;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28758_28819 = state_28741__$1;
(statearr_28758_28819[(1)] = (8));

} else {
var statearr_28759_28820 = state_28741__$1;
(statearr_28759_28820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (14))){
var inst_28721 = (state_28741[(11)]);
var inst_28719 = (state_28741[(8)]);
var inst_28719__$1 = (state_28741[(2)]);
var inst_28720 = (inst_28719__$1 == null);
var inst_28721__$1 = cljs.core.not.call(null,inst_28720);
var state_28741__$1 = (function (){var statearr_28760 = state_28741;
(statearr_28760[(11)] = inst_28721__$1);

(statearr_28760[(8)] = inst_28719__$1);

return statearr_28760;
})();
if(inst_28721__$1){
var statearr_28761_28821 = state_28741__$1;
(statearr_28761_28821[(1)] = (15));

} else {
var statearr_28762_28822 = state_28741__$1;
(statearr_28762_28822[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (16))){
var inst_28721 = (state_28741[(11)]);
var state_28741__$1 = state_28741;
var statearr_28763_28823 = state_28741__$1;
(statearr_28763_28823[(2)] = inst_28721);

(statearr_28763_28823[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (10))){
var inst_28713 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28764_28824 = state_28741__$1;
(statearr_28764_28824[(2)] = inst_28713);

(statearr_28764_28824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (18))){
var inst_28724 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28765_28825 = state_28741__$1;
(statearr_28765_28825[(2)] = inst_28724);

(statearr_28765_28825[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (8))){
var inst_28710 = cljs.core.async.close_BANG_.call(null,to);
var state_28741__$1 = state_28741;
var statearr_28766_28826 = state_28741__$1;
(statearr_28766_28826[(2)] = inst_28710);

(statearr_28766_28826[(1)] = (10));


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
});})(c__28435__auto__,jobs,results,process,async))
;
return ((function (switch__28340__auto__,c__28435__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0 = (function (){
var statearr_28767 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__);

(statearr_28767[(1)] = (1));

return statearr_28767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1 = (function (state_28741){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_28741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e28768){if((e28768 instanceof Object)){
var ex__28344__auto__ = e28768;
var statearr_28769_28827 = state_28741;
(statearr_28769_28827[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28828 = state_28741;
state_28741 = G__28828;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__ = function(state_28741){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1.call(this,state_28741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto__,jobs,results,process,async))
})();
var state__28437__auto__ = (function (){var statearr_28770 = f__28436__auto__.call(null);
(statearr_28770[(6)] = c__28435__auto__);

return statearr_28770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto__,jobs,results,process,async))
);

return c__28435__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28830 = arguments.length;
switch (G__28830) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28833 = arguments.length;
switch (G__28833) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28836 = arguments.length;
switch (G__28836) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28435__auto___28885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___28885,tc,fc){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___28885,tc,fc){
return (function (state_28862){
var state_val_28863 = (state_28862[(1)]);
if((state_val_28863 === (7))){
var inst_28858 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
var statearr_28864_28886 = state_28862__$1;
(statearr_28864_28886[(2)] = inst_28858);

(statearr_28864_28886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (1))){
var state_28862__$1 = state_28862;
var statearr_28865_28887 = state_28862__$1;
(statearr_28865_28887[(2)] = null);

(statearr_28865_28887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (4))){
var inst_28839 = (state_28862[(7)]);
var inst_28839__$1 = (state_28862[(2)]);
var inst_28840 = (inst_28839__$1 == null);
var state_28862__$1 = (function (){var statearr_28866 = state_28862;
(statearr_28866[(7)] = inst_28839__$1);

return statearr_28866;
})();
if(cljs.core.truth_(inst_28840)){
var statearr_28867_28888 = state_28862__$1;
(statearr_28867_28888[(1)] = (5));

} else {
var statearr_28868_28889 = state_28862__$1;
(statearr_28868_28889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (13))){
var state_28862__$1 = state_28862;
var statearr_28869_28890 = state_28862__$1;
(statearr_28869_28890[(2)] = null);

(statearr_28869_28890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (6))){
var inst_28839 = (state_28862[(7)]);
var inst_28845 = p.call(null,inst_28839);
var state_28862__$1 = state_28862;
if(cljs.core.truth_(inst_28845)){
var statearr_28870_28891 = state_28862__$1;
(statearr_28870_28891[(1)] = (9));

} else {
var statearr_28871_28892 = state_28862__$1;
(statearr_28871_28892[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (3))){
var inst_28860 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28862__$1,inst_28860);
} else {
if((state_val_28863 === (12))){
var state_28862__$1 = state_28862;
var statearr_28872_28893 = state_28862__$1;
(statearr_28872_28893[(2)] = null);

(statearr_28872_28893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (2))){
var state_28862__$1 = state_28862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28862__$1,(4),ch);
} else {
if((state_val_28863 === (11))){
var inst_28839 = (state_28862[(7)]);
var inst_28849 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28862__$1,(8),inst_28849,inst_28839);
} else {
if((state_val_28863 === (9))){
var state_28862__$1 = state_28862;
var statearr_28873_28894 = state_28862__$1;
(statearr_28873_28894[(2)] = tc);

(statearr_28873_28894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (5))){
var inst_28842 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28843 = cljs.core.async.close_BANG_.call(null,fc);
var state_28862__$1 = (function (){var statearr_28874 = state_28862;
(statearr_28874[(8)] = inst_28842);

return statearr_28874;
})();
var statearr_28875_28895 = state_28862__$1;
(statearr_28875_28895[(2)] = inst_28843);

(statearr_28875_28895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (14))){
var inst_28856 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
var statearr_28876_28896 = state_28862__$1;
(statearr_28876_28896[(2)] = inst_28856);

(statearr_28876_28896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (10))){
var state_28862__$1 = state_28862;
var statearr_28877_28897 = state_28862__$1;
(statearr_28877_28897[(2)] = fc);

(statearr_28877_28897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (8))){
var inst_28851 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
if(cljs.core.truth_(inst_28851)){
var statearr_28878_28898 = state_28862__$1;
(statearr_28878_28898[(1)] = (12));

} else {
var statearr_28879_28899 = state_28862__$1;
(statearr_28879_28899[(1)] = (13));

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
});})(c__28435__auto___28885,tc,fc))
;
return ((function (switch__28340__auto__,c__28435__auto___28885,tc,fc){
return (function() {
var cljs$core$async$state_machine__28341__auto__ = null;
var cljs$core$async$state_machine__28341__auto____0 = (function (){
var statearr_28880 = [null,null,null,null,null,null,null,null,null];
(statearr_28880[(0)] = cljs$core$async$state_machine__28341__auto__);

(statearr_28880[(1)] = (1));

return statearr_28880;
});
var cljs$core$async$state_machine__28341__auto____1 = (function (state_28862){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_28862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e28881){if((e28881 instanceof Object)){
var ex__28344__auto__ = e28881;
var statearr_28882_28900 = state_28862;
(statearr_28882_28900[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28901 = state_28862;
state_28862 = G__28901;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$state_machine__28341__auto__ = function(state_28862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28341__auto____1.call(this,state_28862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28341__auto____0;
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28341__auto____1;
return cljs$core$async$state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___28885,tc,fc))
})();
var state__28437__auto__ = (function (){var statearr_28883 = f__28436__auto__.call(null);
(statearr_28883[(6)] = c__28435__auto___28885);

return statearr_28883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___28885,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto__){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto__){
return (function (state_28922){
var state_val_28923 = (state_28922[(1)]);
if((state_val_28923 === (7))){
var inst_28918 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_28924_28942 = state_28922__$1;
(statearr_28924_28942[(2)] = inst_28918);

(statearr_28924_28942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (1))){
var inst_28902 = init;
var state_28922__$1 = (function (){var statearr_28925 = state_28922;
(statearr_28925[(7)] = inst_28902);

return statearr_28925;
})();
var statearr_28926_28943 = state_28922__$1;
(statearr_28926_28943[(2)] = null);

(statearr_28926_28943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (4))){
var inst_28905 = (state_28922[(8)]);
var inst_28905__$1 = (state_28922[(2)]);
var inst_28906 = (inst_28905__$1 == null);
var state_28922__$1 = (function (){var statearr_28927 = state_28922;
(statearr_28927[(8)] = inst_28905__$1);

return statearr_28927;
})();
if(cljs.core.truth_(inst_28906)){
var statearr_28928_28944 = state_28922__$1;
(statearr_28928_28944[(1)] = (5));

} else {
var statearr_28929_28945 = state_28922__$1;
(statearr_28929_28945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (6))){
var inst_28905 = (state_28922[(8)]);
var inst_28902 = (state_28922[(7)]);
var inst_28909 = (state_28922[(9)]);
var inst_28909__$1 = f.call(null,inst_28902,inst_28905);
var inst_28910 = cljs.core.reduced_QMARK_.call(null,inst_28909__$1);
var state_28922__$1 = (function (){var statearr_28930 = state_28922;
(statearr_28930[(9)] = inst_28909__$1);

return statearr_28930;
})();
if(inst_28910){
var statearr_28931_28946 = state_28922__$1;
(statearr_28931_28946[(1)] = (8));

} else {
var statearr_28932_28947 = state_28922__$1;
(statearr_28932_28947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (3))){
var inst_28920 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28922__$1,inst_28920);
} else {
if((state_val_28923 === (2))){
var state_28922__$1 = state_28922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28922__$1,(4),ch);
} else {
if((state_val_28923 === (9))){
var inst_28909 = (state_28922[(9)]);
var inst_28902 = inst_28909;
var state_28922__$1 = (function (){var statearr_28933 = state_28922;
(statearr_28933[(7)] = inst_28902);

return statearr_28933;
})();
var statearr_28934_28948 = state_28922__$1;
(statearr_28934_28948[(2)] = null);

(statearr_28934_28948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (5))){
var inst_28902 = (state_28922[(7)]);
var state_28922__$1 = state_28922;
var statearr_28935_28949 = state_28922__$1;
(statearr_28935_28949[(2)] = inst_28902);

(statearr_28935_28949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (10))){
var inst_28916 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_28936_28950 = state_28922__$1;
(statearr_28936_28950[(2)] = inst_28916);

(statearr_28936_28950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (8))){
var inst_28909 = (state_28922[(9)]);
var inst_28912 = cljs.core.deref.call(null,inst_28909);
var state_28922__$1 = state_28922;
var statearr_28937_28951 = state_28922__$1;
(statearr_28937_28951[(2)] = inst_28912);

(statearr_28937_28951[(1)] = (10));


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
});})(c__28435__auto__))
;
return ((function (switch__28340__auto__,c__28435__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28341__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28341__auto____0 = (function (){
var statearr_28938 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28938[(0)] = cljs$core$async$reduce_$_state_machine__28341__auto__);

(statearr_28938[(1)] = (1));

return statearr_28938;
});
var cljs$core$async$reduce_$_state_machine__28341__auto____1 = (function (state_28922){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_28922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e28939){if((e28939 instanceof Object)){
var ex__28344__auto__ = e28939;
var statearr_28940_28952 = state_28922;
(statearr_28940_28952[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28953 = state_28922;
state_28922 = G__28953;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28341__auto__ = function(state_28922){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28341__auto____1.call(this,state_28922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28341__auto____0;
cljs$core$async$reduce_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28341__auto____1;
return cljs$core$async$reduce_$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto__))
})();
var state__28437__auto__ = (function (){var statearr_28941 = f__28436__auto__.call(null);
(statearr_28941[(6)] = c__28435__auto__);

return statearr_28941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto__))
);

return c__28435__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto__,f__$1){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto__,f__$1){
return (function (state_28959){
var state_val_28960 = (state_28959[(1)]);
if((state_val_28960 === (1))){
var inst_28954 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28959__$1 = state_28959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28959__$1,(2),inst_28954);
} else {
if((state_val_28960 === (2))){
var inst_28956 = (state_28959[(2)]);
var inst_28957 = f__$1.call(null,inst_28956);
var state_28959__$1 = state_28959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28959__$1,inst_28957);
} else {
return null;
}
}
});})(c__28435__auto__,f__$1))
;
return ((function (switch__28340__auto__,c__28435__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28341__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28341__auto____0 = (function (){
var statearr_28961 = [null,null,null,null,null,null,null];
(statearr_28961[(0)] = cljs$core$async$transduce_$_state_machine__28341__auto__);

(statearr_28961[(1)] = (1));

return statearr_28961;
});
var cljs$core$async$transduce_$_state_machine__28341__auto____1 = (function (state_28959){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_28959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e28962){if((e28962 instanceof Object)){
var ex__28344__auto__ = e28962;
var statearr_28963_28965 = state_28959;
(statearr_28963_28965[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28966 = state_28959;
state_28959 = G__28966;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28341__auto__ = function(state_28959){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28341__auto____1.call(this,state_28959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28341__auto____0;
cljs$core$async$transduce_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28341__auto____1;
return cljs$core$async$transduce_$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto__,f__$1))
})();
var state__28437__auto__ = (function (){var statearr_28964 = f__28436__auto__.call(null);
(statearr_28964[(6)] = c__28435__auto__);

return statearr_28964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto__,f__$1))
);

return c__28435__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28968 = arguments.length;
switch (G__28968) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto__){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto__){
return (function (state_28993){
var state_val_28994 = (state_28993[(1)]);
if((state_val_28994 === (7))){
var inst_28975 = (state_28993[(2)]);
var state_28993__$1 = state_28993;
var statearr_28995_29016 = state_28993__$1;
(statearr_28995_29016[(2)] = inst_28975);

(statearr_28995_29016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (1))){
var inst_28969 = cljs.core.seq.call(null,coll);
var inst_28970 = inst_28969;
var state_28993__$1 = (function (){var statearr_28996 = state_28993;
(statearr_28996[(7)] = inst_28970);

return statearr_28996;
})();
var statearr_28997_29017 = state_28993__$1;
(statearr_28997_29017[(2)] = null);

(statearr_28997_29017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (4))){
var inst_28970 = (state_28993[(7)]);
var inst_28973 = cljs.core.first.call(null,inst_28970);
var state_28993__$1 = state_28993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28993__$1,(7),ch,inst_28973);
} else {
if((state_val_28994 === (13))){
var inst_28987 = (state_28993[(2)]);
var state_28993__$1 = state_28993;
var statearr_28998_29018 = state_28993__$1;
(statearr_28998_29018[(2)] = inst_28987);

(statearr_28998_29018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (6))){
var inst_28978 = (state_28993[(2)]);
var state_28993__$1 = state_28993;
if(cljs.core.truth_(inst_28978)){
var statearr_28999_29019 = state_28993__$1;
(statearr_28999_29019[(1)] = (8));

} else {
var statearr_29000_29020 = state_28993__$1;
(statearr_29000_29020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (3))){
var inst_28991 = (state_28993[(2)]);
var state_28993__$1 = state_28993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28993__$1,inst_28991);
} else {
if((state_val_28994 === (12))){
var state_28993__$1 = state_28993;
var statearr_29001_29021 = state_28993__$1;
(statearr_29001_29021[(2)] = null);

(statearr_29001_29021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (2))){
var inst_28970 = (state_28993[(7)]);
var state_28993__$1 = state_28993;
if(cljs.core.truth_(inst_28970)){
var statearr_29002_29022 = state_28993__$1;
(statearr_29002_29022[(1)] = (4));

} else {
var statearr_29003_29023 = state_28993__$1;
(statearr_29003_29023[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (11))){
var inst_28984 = cljs.core.async.close_BANG_.call(null,ch);
var state_28993__$1 = state_28993;
var statearr_29004_29024 = state_28993__$1;
(statearr_29004_29024[(2)] = inst_28984);

(statearr_29004_29024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (9))){
var state_28993__$1 = state_28993;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29005_29025 = state_28993__$1;
(statearr_29005_29025[(1)] = (11));

} else {
var statearr_29006_29026 = state_28993__$1;
(statearr_29006_29026[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (5))){
var inst_28970 = (state_28993[(7)]);
var state_28993__$1 = state_28993;
var statearr_29007_29027 = state_28993__$1;
(statearr_29007_29027[(2)] = inst_28970);

(statearr_29007_29027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (10))){
var inst_28989 = (state_28993[(2)]);
var state_28993__$1 = state_28993;
var statearr_29008_29028 = state_28993__$1;
(statearr_29008_29028[(2)] = inst_28989);

(statearr_29008_29028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (8))){
var inst_28970 = (state_28993[(7)]);
var inst_28980 = cljs.core.next.call(null,inst_28970);
var inst_28970__$1 = inst_28980;
var state_28993__$1 = (function (){var statearr_29009 = state_28993;
(statearr_29009[(7)] = inst_28970__$1);

return statearr_29009;
})();
var statearr_29010_29029 = state_28993__$1;
(statearr_29010_29029[(2)] = null);

(statearr_29010_29029[(1)] = (2));


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
});})(c__28435__auto__))
;
return ((function (switch__28340__auto__,c__28435__auto__){
return (function() {
var cljs$core$async$state_machine__28341__auto__ = null;
var cljs$core$async$state_machine__28341__auto____0 = (function (){
var statearr_29011 = [null,null,null,null,null,null,null,null];
(statearr_29011[(0)] = cljs$core$async$state_machine__28341__auto__);

(statearr_29011[(1)] = (1));

return statearr_29011;
});
var cljs$core$async$state_machine__28341__auto____1 = (function (state_28993){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_28993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e29012){if((e29012 instanceof Object)){
var ex__28344__auto__ = e29012;
var statearr_29013_29030 = state_28993;
(statearr_29013_29030[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29031 = state_28993;
state_28993 = G__29031;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$state_machine__28341__auto__ = function(state_28993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28341__auto____1.call(this,state_28993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28341__auto____0;
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28341__auto____1;
return cljs$core$async$state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto__))
})();
var state__28437__auto__ = (function (){var statearr_29014 = f__28436__auto__.call(null);
(statearr_29014[(6)] = c__28435__auto__);

return statearr_29014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto__))
);

return c__28435__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29032 = (function (ch,cs,meta29033){
this.ch = ch;
this.cs = cs;
this.meta29033 = meta29033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29034,meta29033__$1){
var self__ = this;
var _29034__$1 = this;
return (new cljs.core.async.t_cljs$core$async29032(self__.ch,self__.cs,meta29033__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29034){
var self__ = this;
var _29034__$1 = this;
return self__.meta29033;
});})(cs))
;

cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29032.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29033","meta29033",1638078860,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29032.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29032";

cljs.core.async.t_cljs$core$async29032.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29032");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29032.
 */
cljs.core.async.__GT_t_cljs$core$async29032 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29032(ch__$1,cs__$1,meta29033){
return (new cljs.core.async.t_cljs$core$async29032(ch__$1,cs__$1,meta29033));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29032(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28435__auto___29254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___29254,cs,m,dchan,dctr,done){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___29254,cs,m,dchan,dctr,done){
return (function (state_29169){
var state_val_29170 = (state_29169[(1)]);
if((state_val_29170 === (7))){
var inst_29165 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29171_29255 = state_29169__$1;
(statearr_29171_29255[(2)] = inst_29165);

(statearr_29171_29255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (20))){
var inst_29068 = (state_29169[(7)]);
var inst_29080 = cljs.core.first.call(null,inst_29068);
var inst_29081 = cljs.core.nth.call(null,inst_29080,(0),null);
var inst_29082 = cljs.core.nth.call(null,inst_29080,(1),null);
var state_29169__$1 = (function (){var statearr_29172 = state_29169;
(statearr_29172[(8)] = inst_29081);

return statearr_29172;
})();
if(cljs.core.truth_(inst_29082)){
var statearr_29173_29256 = state_29169__$1;
(statearr_29173_29256[(1)] = (22));

} else {
var statearr_29174_29257 = state_29169__$1;
(statearr_29174_29257[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (27))){
var inst_29037 = (state_29169[(9)]);
var inst_29110 = (state_29169[(10)]);
var inst_29112 = (state_29169[(11)]);
var inst_29117 = (state_29169[(12)]);
var inst_29117__$1 = cljs.core._nth.call(null,inst_29110,inst_29112);
var inst_29118 = cljs.core.async.put_BANG_.call(null,inst_29117__$1,inst_29037,done);
var state_29169__$1 = (function (){var statearr_29175 = state_29169;
(statearr_29175[(12)] = inst_29117__$1);

return statearr_29175;
})();
if(cljs.core.truth_(inst_29118)){
var statearr_29176_29258 = state_29169__$1;
(statearr_29176_29258[(1)] = (30));

} else {
var statearr_29177_29259 = state_29169__$1;
(statearr_29177_29259[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (1))){
var state_29169__$1 = state_29169;
var statearr_29178_29260 = state_29169__$1;
(statearr_29178_29260[(2)] = null);

(statearr_29178_29260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (24))){
var inst_29068 = (state_29169[(7)]);
var inst_29087 = (state_29169[(2)]);
var inst_29088 = cljs.core.next.call(null,inst_29068);
var inst_29046 = inst_29088;
var inst_29047 = null;
var inst_29048 = (0);
var inst_29049 = (0);
var state_29169__$1 = (function (){var statearr_29179 = state_29169;
(statearr_29179[(13)] = inst_29046);

(statearr_29179[(14)] = inst_29087);

(statearr_29179[(15)] = inst_29049);

(statearr_29179[(16)] = inst_29047);

(statearr_29179[(17)] = inst_29048);

return statearr_29179;
})();
var statearr_29180_29261 = state_29169__$1;
(statearr_29180_29261[(2)] = null);

(statearr_29180_29261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (39))){
var state_29169__$1 = state_29169;
var statearr_29184_29262 = state_29169__$1;
(statearr_29184_29262[(2)] = null);

(statearr_29184_29262[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (4))){
var inst_29037 = (state_29169[(9)]);
var inst_29037__$1 = (state_29169[(2)]);
var inst_29038 = (inst_29037__$1 == null);
var state_29169__$1 = (function (){var statearr_29185 = state_29169;
(statearr_29185[(9)] = inst_29037__$1);

return statearr_29185;
})();
if(cljs.core.truth_(inst_29038)){
var statearr_29186_29263 = state_29169__$1;
(statearr_29186_29263[(1)] = (5));

} else {
var statearr_29187_29264 = state_29169__$1;
(statearr_29187_29264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (15))){
var inst_29046 = (state_29169[(13)]);
var inst_29049 = (state_29169[(15)]);
var inst_29047 = (state_29169[(16)]);
var inst_29048 = (state_29169[(17)]);
var inst_29064 = (state_29169[(2)]);
var inst_29065 = (inst_29049 + (1));
var tmp29181 = inst_29046;
var tmp29182 = inst_29047;
var tmp29183 = inst_29048;
var inst_29046__$1 = tmp29181;
var inst_29047__$1 = tmp29182;
var inst_29048__$1 = tmp29183;
var inst_29049__$1 = inst_29065;
var state_29169__$1 = (function (){var statearr_29188 = state_29169;
(statearr_29188[(18)] = inst_29064);

(statearr_29188[(13)] = inst_29046__$1);

(statearr_29188[(15)] = inst_29049__$1);

(statearr_29188[(16)] = inst_29047__$1);

(statearr_29188[(17)] = inst_29048__$1);

return statearr_29188;
})();
var statearr_29189_29265 = state_29169__$1;
(statearr_29189_29265[(2)] = null);

(statearr_29189_29265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (21))){
var inst_29091 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29193_29266 = state_29169__$1;
(statearr_29193_29266[(2)] = inst_29091);

(statearr_29193_29266[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (31))){
var inst_29117 = (state_29169[(12)]);
var inst_29121 = done.call(null,null);
var inst_29122 = cljs.core.async.untap_STAR_.call(null,m,inst_29117);
var state_29169__$1 = (function (){var statearr_29194 = state_29169;
(statearr_29194[(19)] = inst_29121);

return statearr_29194;
})();
var statearr_29195_29267 = state_29169__$1;
(statearr_29195_29267[(2)] = inst_29122);

(statearr_29195_29267[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (32))){
var inst_29109 = (state_29169[(20)]);
var inst_29110 = (state_29169[(10)]);
var inst_29112 = (state_29169[(11)]);
var inst_29111 = (state_29169[(21)]);
var inst_29124 = (state_29169[(2)]);
var inst_29125 = (inst_29112 + (1));
var tmp29190 = inst_29109;
var tmp29191 = inst_29110;
var tmp29192 = inst_29111;
var inst_29109__$1 = tmp29190;
var inst_29110__$1 = tmp29191;
var inst_29111__$1 = tmp29192;
var inst_29112__$1 = inst_29125;
var state_29169__$1 = (function (){var statearr_29196 = state_29169;
(statearr_29196[(20)] = inst_29109__$1);

(statearr_29196[(10)] = inst_29110__$1);

(statearr_29196[(11)] = inst_29112__$1);

(statearr_29196[(21)] = inst_29111__$1);

(statearr_29196[(22)] = inst_29124);

return statearr_29196;
})();
var statearr_29197_29268 = state_29169__$1;
(statearr_29197_29268[(2)] = null);

(statearr_29197_29268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (40))){
var inst_29137 = (state_29169[(23)]);
var inst_29141 = done.call(null,null);
var inst_29142 = cljs.core.async.untap_STAR_.call(null,m,inst_29137);
var state_29169__$1 = (function (){var statearr_29198 = state_29169;
(statearr_29198[(24)] = inst_29141);

return statearr_29198;
})();
var statearr_29199_29269 = state_29169__$1;
(statearr_29199_29269[(2)] = inst_29142);

(statearr_29199_29269[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (33))){
var inst_29128 = (state_29169[(25)]);
var inst_29130 = cljs.core.chunked_seq_QMARK_.call(null,inst_29128);
var state_29169__$1 = state_29169;
if(inst_29130){
var statearr_29200_29270 = state_29169__$1;
(statearr_29200_29270[(1)] = (36));

} else {
var statearr_29201_29271 = state_29169__$1;
(statearr_29201_29271[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (13))){
var inst_29058 = (state_29169[(26)]);
var inst_29061 = cljs.core.async.close_BANG_.call(null,inst_29058);
var state_29169__$1 = state_29169;
var statearr_29202_29272 = state_29169__$1;
(statearr_29202_29272[(2)] = inst_29061);

(statearr_29202_29272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (22))){
var inst_29081 = (state_29169[(8)]);
var inst_29084 = cljs.core.async.close_BANG_.call(null,inst_29081);
var state_29169__$1 = state_29169;
var statearr_29203_29273 = state_29169__$1;
(statearr_29203_29273[(2)] = inst_29084);

(statearr_29203_29273[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (36))){
var inst_29128 = (state_29169[(25)]);
var inst_29132 = cljs.core.chunk_first.call(null,inst_29128);
var inst_29133 = cljs.core.chunk_rest.call(null,inst_29128);
var inst_29134 = cljs.core.count.call(null,inst_29132);
var inst_29109 = inst_29133;
var inst_29110 = inst_29132;
var inst_29111 = inst_29134;
var inst_29112 = (0);
var state_29169__$1 = (function (){var statearr_29204 = state_29169;
(statearr_29204[(20)] = inst_29109);

(statearr_29204[(10)] = inst_29110);

(statearr_29204[(11)] = inst_29112);

(statearr_29204[(21)] = inst_29111);

return statearr_29204;
})();
var statearr_29205_29274 = state_29169__$1;
(statearr_29205_29274[(2)] = null);

(statearr_29205_29274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (41))){
var inst_29128 = (state_29169[(25)]);
var inst_29144 = (state_29169[(2)]);
var inst_29145 = cljs.core.next.call(null,inst_29128);
var inst_29109 = inst_29145;
var inst_29110 = null;
var inst_29111 = (0);
var inst_29112 = (0);
var state_29169__$1 = (function (){var statearr_29206 = state_29169;
(statearr_29206[(20)] = inst_29109);

(statearr_29206[(10)] = inst_29110);

(statearr_29206[(11)] = inst_29112);

(statearr_29206[(21)] = inst_29111);

(statearr_29206[(27)] = inst_29144);

return statearr_29206;
})();
var statearr_29207_29275 = state_29169__$1;
(statearr_29207_29275[(2)] = null);

(statearr_29207_29275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (43))){
var state_29169__$1 = state_29169;
var statearr_29208_29276 = state_29169__$1;
(statearr_29208_29276[(2)] = null);

(statearr_29208_29276[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (29))){
var inst_29153 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29209_29277 = state_29169__$1;
(statearr_29209_29277[(2)] = inst_29153);

(statearr_29209_29277[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (44))){
var inst_29162 = (state_29169[(2)]);
var state_29169__$1 = (function (){var statearr_29210 = state_29169;
(statearr_29210[(28)] = inst_29162);

return statearr_29210;
})();
var statearr_29211_29278 = state_29169__$1;
(statearr_29211_29278[(2)] = null);

(statearr_29211_29278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (6))){
var inst_29101 = (state_29169[(29)]);
var inst_29100 = cljs.core.deref.call(null,cs);
var inst_29101__$1 = cljs.core.keys.call(null,inst_29100);
var inst_29102 = cljs.core.count.call(null,inst_29101__$1);
var inst_29103 = cljs.core.reset_BANG_.call(null,dctr,inst_29102);
var inst_29108 = cljs.core.seq.call(null,inst_29101__$1);
var inst_29109 = inst_29108;
var inst_29110 = null;
var inst_29111 = (0);
var inst_29112 = (0);
var state_29169__$1 = (function (){var statearr_29212 = state_29169;
(statearr_29212[(20)] = inst_29109);

(statearr_29212[(10)] = inst_29110);

(statearr_29212[(11)] = inst_29112);

(statearr_29212[(29)] = inst_29101__$1);

(statearr_29212[(21)] = inst_29111);

(statearr_29212[(30)] = inst_29103);

return statearr_29212;
})();
var statearr_29213_29279 = state_29169__$1;
(statearr_29213_29279[(2)] = null);

(statearr_29213_29279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (28))){
var inst_29109 = (state_29169[(20)]);
var inst_29128 = (state_29169[(25)]);
var inst_29128__$1 = cljs.core.seq.call(null,inst_29109);
var state_29169__$1 = (function (){var statearr_29214 = state_29169;
(statearr_29214[(25)] = inst_29128__$1);

return statearr_29214;
})();
if(inst_29128__$1){
var statearr_29215_29280 = state_29169__$1;
(statearr_29215_29280[(1)] = (33));

} else {
var statearr_29216_29281 = state_29169__$1;
(statearr_29216_29281[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (25))){
var inst_29112 = (state_29169[(11)]);
var inst_29111 = (state_29169[(21)]);
var inst_29114 = (inst_29112 < inst_29111);
var inst_29115 = inst_29114;
var state_29169__$1 = state_29169;
if(cljs.core.truth_(inst_29115)){
var statearr_29217_29282 = state_29169__$1;
(statearr_29217_29282[(1)] = (27));

} else {
var statearr_29218_29283 = state_29169__$1;
(statearr_29218_29283[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (34))){
var state_29169__$1 = state_29169;
var statearr_29219_29284 = state_29169__$1;
(statearr_29219_29284[(2)] = null);

(statearr_29219_29284[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (17))){
var state_29169__$1 = state_29169;
var statearr_29220_29285 = state_29169__$1;
(statearr_29220_29285[(2)] = null);

(statearr_29220_29285[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (3))){
var inst_29167 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29169__$1,inst_29167);
} else {
if((state_val_29170 === (12))){
var inst_29096 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29221_29286 = state_29169__$1;
(statearr_29221_29286[(2)] = inst_29096);

(statearr_29221_29286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (2))){
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29169__$1,(4),ch);
} else {
if((state_val_29170 === (23))){
var state_29169__$1 = state_29169;
var statearr_29222_29287 = state_29169__$1;
(statearr_29222_29287[(2)] = null);

(statearr_29222_29287[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (35))){
var inst_29151 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29223_29288 = state_29169__$1;
(statearr_29223_29288[(2)] = inst_29151);

(statearr_29223_29288[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (19))){
var inst_29068 = (state_29169[(7)]);
var inst_29072 = cljs.core.chunk_first.call(null,inst_29068);
var inst_29073 = cljs.core.chunk_rest.call(null,inst_29068);
var inst_29074 = cljs.core.count.call(null,inst_29072);
var inst_29046 = inst_29073;
var inst_29047 = inst_29072;
var inst_29048 = inst_29074;
var inst_29049 = (0);
var state_29169__$1 = (function (){var statearr_29224 = state_29169;
(statearr_29224[(13)] = inst_29046);

(statearr_29224[(15)] = inst_29049);

(statearr_29224[(16)] = inst_29047);

(statearr_29224[(17)] = inst_29048);

return statearr_29224;
})();
var statearr_29225_29289 = state_29169__$1;
(statearr_29225_29289[(2)] = null);

(statearr_29225_29289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (11))){
var inst_29046 = (state_29169[(13)]);
var inst_29068 = (state_29169[(7)]);
var inst_29068__$1 = cljs.core.seq.call(null,inst_29046);
var state_29169__$1 = (function (){var statearr_29226 = state_29169;
(statearr_29226[(7)] = inst_29068__$1);

return statearr_29226;
})();
if(inst_29068__$1){
var statearr_29227_29290 = state_29169__$1;
(statearr_29227_29290[(1)] = (16));

} else {
var statearr_29228_29291 = state_29169__$1;
(statearr_29228_29291[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (9))){
var inst_29098 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29229_29292 = state_29169__$1;
(statearr_29229_29292[(2)] = inst_29098);

(statearr_29229_29292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (5))){
var inst_29044 = cljs.core.deref.call(null,cs);
var inst_29045 = cljs.core.seq.call(null,inst_29044);
var inst_29046 = inst_29045;
var inst_29047 = null;
var inst_29048 = (0);
var inst_29049 = (0);
var state_29169__$1 = (function (){var statearr_29230 = state_29169;
(statearr_29230[(13)] = inst_29046);

(statearr_29230[(15)] = inst_29049);

(statearr_29230[(16)] = inst_29047);

(statearr_29230[(17)] = inst_29048);

return statearr_29230;
})();
var statearr_29231_29293 = state_29169__$1;
(statearr_29231_29293[(2)] = null);

(statearr_29231_29293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (14))){
var state_29169__$1 = state_29169;
var statearr_29232_29294 = state_29169__$1;
(statearr_29232_29294[(2)] = null);

(statearr_29232_29294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (45))){
var inst_29159 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29233_29295 = state_29169__$1;
(statearr_29233_29295[(2)] = inst_29159);

(statearr_29233_29295[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (26))){
var inst_29101 = (state_29169[(29)]);
var inst_29155 = (state_29169[(2)]);
var inst_29156 = cljs.core.seq.call(null,inst_29101);
var state_29169__$1 = (function (){var statearr_29234 = state_29169;
(statearr_29234[(31)] = inst_29155);

return statearr_29234;
})();
if(inst_29156){
var statearr_29235_29296 = state_29169__$1;
(statearr_29235_29296[(1)] = (42));

} else {
var statearr_29236_29297 = state_29169__$1;
(statearr_29236_29297[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (16))){
var inst_29068 = (state_29169[(7)]);
var inst_29070 = cljs.core.chunked_seq_QMARK_.call(null,inst_29068);
var state_29169__$1 = state_29169;
if(inst_29070){
var statearr_29237_29298 = state_29169__$1;
(statearr_29237_29298[(1)] = (19));

} else {
var statearr_29238_29299 = state_29169__$1;
(statearr_29238_29299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (38))){
var inst_29148 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29239_29300 = state_29169__$1;
(statearr_29239_29300[(2)] = inst_29148);

(statearr_29239_29300[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (30))){
var state_29169__$1 = state_29169;
var statearr_29240_29301 = state_29169__$1;
(statearr_29240_29301[(2)] = null);

(statearr_29240_29301[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (10))){
var inst_29049 = (state_29169[(15)]);
var inst_29047 = (state_29169[(16)]);
var inst_29057 = cljs.core._nth.call(null,inst_29047,inst_29049);
var inst_29058 = cljs.core.nth.call(null,inst_29057,(0),null);
var inst_29059 = cljs.core.nth.call(null,inst_29057,(1),null);
var state_29169__$1 = (function (){var statearr_29241 = state_29169;
(statearr_29241[(26)] = inst_29058);

return statearr_29241;
})();
if(cljs.core.truth_(inst_29059)){
var statearr_29242_29302 = state_29169__$1;
(statearr_29242_29302[(1)] = (13));

} else {
var statearr_29243_29303 = state_29169__$1;
(statearr_29243_29303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (18))){
var inst_29094 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29244_29304 = state_29169__$1;
(statearr_29244_29304[(2)] = inst_29094);

(statearr_29244_29304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (42))){
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29169__$1,(45),dchan);
} else {
if((state_val_29170 === (37))){
var inst_29037 = (state_29169[(9)]);
var inst_29128 = (state_29169[(25)]);
var inst_29137 = (state_29169[(23)]);
var inst_29137__$1 = cljs.core.first.call(null,inst_29128);
var inst_29138 = cljs.core.async.put_BANG_.call(null,inst_29137__$1,inst_29037,done);
var state_29169__$1 = (function (){var statearr_29245 = state_29169;
(statearr_29245[(23)] = inst_29137__$1);

return statearr_29245;
})();
if(cljs.core.truth_(inst_29138)){
var statearr_29246_29305 = state_29169__$1;
(statearr_29246_29305[(1)] = (39));

} else {
var statearr_29247_29306 = state_29169__$1;
(statearr_29247_29306[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (8))){
var inst_29049 = (state_29169[(15)]);
var inst_29048 = (state_29169[(17)]);
var inst_29051 = (inst_29049 < inst_29048);
var inst_29052 = inst_29051;
var state_29169__$1 = state_29169;
if(cljs.core.truth_(inst_29052)){
var statearr_29248_29307 = state_29169__$1;
(statearr_29248_29307[(1)] = (10));

} else {
var statearr_29249_29308 = state_29169__$1;
(statearr_29249_29308[(1)] = (11));

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
});})(c__28435__auto___29254,cs,m,dchan,dctr,done))
;
return ((function (switch__28340__auto__,c__28435__auto___29254,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28341__auto__ = null;
var cljs$core$async$mult_$_state_machine__28341__auto____0 = (function (){
var statearr_29250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29250[(0)] = cljs$core$async$mult_$_state_machine__28341__auto__);

(statearr_29250[(1)] = (1));

return statearr_29250;
});
var cljs$core$async$mult_$_state_machine__28341__auto____1 = (function (state_29169){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_29169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e29251){if((e29251 instanceof Object)){
var ex__28344__auto__ = e29251;
var statearr_29252_29309 = state_29169;
(statearr_29252_29309[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29310 = state_29169;
state_29169 = G__29310;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28341__auto__ = function(state_29169){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28341__auto____1.call(this,state_29169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28341__auto____0;
cljs$core$async$mult_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28341__auto____1;
return cljs$core$async$mult_$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___29254,cs,m,dchan,dctr,done))
})();
var state__28437__auto__ = (function (){var statearr_29253 = f__28436__auto__.call(null);
(statearr_29253[(6)] = c__28435__auto___29254);

return statearr_29253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___29254,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29312 = arguments.length;
switch (G__29312) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29324 = arguments.length;
var i__4642__auto___29325 = (0);
while(true){
if((i__4642__auto___29325 < len__4641__auto___29324)){
args__4647__auto__.push((arguments[i__4642__auto___29325]));

var G__29326 = (i__4642__auto___29325 + (1));
i__4642__auto___29325 = G__29326;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29318){
var map__29319 = p__29318;
var map__29319__$1 = (((((!((map__29319 == null))))?(((((map__29319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29319):map__29319);
var opts = map__29319__$1;
var statearr_29321_29327 = state;
(statearr_29321_29327[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__29319,map__29319__$1,opts){
return (function (val){
var statearr_29322_29328 = state;
(statearr_29322_29328[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29319,map__29319__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_29323_29329 = state;
(statearr_29323_29329[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29314){
var G__29315 = cljs.core.first.call(null,seq29314);
var seq29314__$1 = cljs.core.next.call(null,seq29314);
var G__29316 = cljs.core.first.call(null,seq29314__$1);
var seq29314__$2 = cljs.core.next.call(null,seq29314__$1);
var G__29317 = cljs.core.first.call(null,seq29314__$2);
var seq29314__$3 = cljs.core.next.call(null,seq29314__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29315,G__29316,G__29317,seq29314__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29330 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29331){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29331 = meta29331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29332,meta29331__$1){
var self__ = this;
var _29332__$1 = this;
return (new cljs.core.async.t_cljs$core$async29330(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29331__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29332){
var self__ = this;
var _29332__$1 = this;
return self__.meta29331;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29330.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29331","meta29331",1122943608,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29330";

cljs.core.async.t_cljs$core$async29330.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29330");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29330.
 */
cljs.core.async.__GT_t_cljs$core$async29330 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29330(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29331){
return (new cljs.core.async.t_cljs$core$async29330(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29331));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29330(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28435__auto___29494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___29494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___29494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29434){
var state_val_29435 = (state_29434[(1)]);
if((state_val_29435 === (7))){
var inst_29349 = (state_29434[(2)]);
var state_29434__$1 = state_29434;
var statearr_29436_29495 = state_29434__$1;
(statearr_29436_29495[(2)] = inst_29349);

(statearr_29436_29495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (20))){
var inst_29361 = (state_29434[(7)]);
var state_29434__$1 = state_29434;
var statearr_29437_29496 = state_29434__$1;
(statearr_29437_29496[(2)] = inst_29361);

(statearr_29437_29496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (27))){
var state_29434__$1 = state_29434;
var statearr_29438_29497 = state_29434__$1;
(statearr_29438_29497[(2)] = null);

(statearr_29438_29497[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (1))){
var inst_29336 = (state_29434[(8)]);
var inst_29336__$1 = calc_state.call(null);
var inst_29338 = (inst_29336__$1 == null);
var inst_29339 = cljs.core.not.call(null,inst_29338);
var state_29434__$1 = (function (){var statearr_29439 = state_29434;
(statearr_29439[(8)] = inst_29336__$1);

return statearr_29439;
})();
if(inst_29339){
var statearr_29440_29498 = state_29434__$1;
(statearr_29440_29498[(1)] = (2));

} else {
var statearr_29441_29499 = state_29434__$1;
(statearr_29441_29499[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (24))){
var inst_29408 = (state_29434[(9)]);
var inst_29394 = (state_29434[(10)]);
var inst_29385 = (state_29434[(11)]);
var inst_29408__$1 = inst_29385.call(null,inst_29394);
var state_29434__$1 = (function (){var statearr_29442 = state_29434;
(statearr_29442[(9)] = inst_29408__$1);

return statearr_29442;
})();
if(cljs.core.truth_(inst_29408__$1)){
var statearr_29443_29500 = state_29434__$1;
(statearr_29443_29500[(1)] = (29));

} else {
var statearr_29444_29501 = state_29434__$1;
(statearr_29444_29501[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (4))){
var inst_29352 = (state_29434[(2)]);
var state_29434__$1 = state_29434;
if(cljs.core.truth_(inst_29352)){
var statearr_29445_29502 = state_29434__$1;
(statearr_29445_29502[(1)] = (8));

} else {
var statearr_29446_29503 = state_29434__$1;
(statearr_29446_29503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (15))){
var inst_29379 = (state_29434[(2)]);
var state_29434__$1 = state_29434;
if(cljs.core.truth_(inst_29379)){
var statearr_29447_29504 = state_29434__$1;
(statearr_29447_29504[(1)] = (19));

} else {
var statearr_29448_29505 = state_29434__$1;
(statearr_29448_29505[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (21))){
var inst_29384 = (state_29434[(12)]);
var inst_29384__$1 = (state_29434[(2)]);
var inst_29385 = cljs.core.get.call(null,inst_29384__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29386 = cljs.core.get.call(null,inst_29384__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29387 = cljs.core.get.call(null,inst_29384__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29434__$1 = (function (){var statearr_29449 = state_29434;
(statearr_29449[(13)] = inst_29386);

(statearr_29449[(12)] = inst_29384__$1);

(statearr_29449[(11)] = inst_29385);

return statearr_29449;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29434__$1,(22),inst_29387);
} else {
if((state_val_29435 === (31))){
var inst_29416 = (state_29434[(2)]);
var state_29434__$1 = state_29434;
if(cljs.core.truth_(inst_29416)){
var statearr_29450_29506 = state_29434__$1;
(statearr_29450_29506[(1)] = (32));

} else {
var statearr_29451_29507 = state_29434__$1;
(statearr_29451_29507[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (32))){
var inst_29393 = (state_29434[(14)]);
var state_29434__$1 = state_29434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29434__$1,(35),out,inst_29393);
} else {
if((state_val_29435 === (33))){
var inst_29384 = (state_29434[(12)]);
var inst_29361 = inst_29384;
var state_29434__$1 = (function (){var statearr_29452 = state_29434;
(statearr_29452[(7)] = inst_29361);

return statearr_29452;
})();
var statearr_29453_29508 = state_29434__$1;
(statearr_29453_29508[(2)] = null);

(statearr_29453_29508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (13))){
var inst_29361 = (state_29434[(7)]);
var inst_29368 = inst_29361.cljs$lang$protocol_mask$partition0$;
var inst_29369 = (inst_29368 & (64));
var inst_29370 = inst_29361.cljs$core$ISeq$;
var inst_29371 = (cljs.core.PROTOCOL_SENTINEL === inst_29370);
var inst_29372 = ((inst_29369) || (inst_29371));
var state_29434__$1 = state_29434;
if(cljs.core.truth_(inst_29372)){
var statearr_29454_29509 = state_29434__$1;
(statearr_29454_29509[(1)] = (16));

} else {
var statearr_29455_29510 = state_29434__$1;
(statearr_29455_29510[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (22))){
var inst_29393 = (state_29434[(14)]);
var inst_29394 = (state_29434[(10)]);
var inst_29392 = (state_29434[(2)]);
var inst_29393__$1 = cljs.core.nth.call(null,inst_29392,(0),null);
var inst_29394__$1 = cljs.core.nth.call(null,inst_29392,(1),null);
var inst_29395 = (inst_29393__$1 == null);
var inst_29396 = cljs.core._EQ_.call(null,inst_29394__$1,change);
var inst_29397 = ((inst_29395) || (inst_29396));
var state_29434__$1 = (function (){var statearr_29456 = state_29434;
(statearr_29456[(14)] = inst_29393__$1);

(statearr_29456[(10)] = inst_29394__$1);

return statearr_29456;
})();
if(cljs.core.truth_(inst_29397)){
var statearr_29457_29511 = state_29434__$1;
(statearr_29457_29511[(1)] = (23));

} else {
var statearr_29458_29512 = state_29434__$1;
(statearr_29458_29512[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (36))){
var inst_29384 = (state_29434[(12)]);
var inst_29361 = inst_29384;
var state_29434__$1 = (function (){var statearr_29459 = state_29434;
(statearr_29459[(7)] = inst_29361);

return statearr_29459;
})();
var statearr_29460_29513 = state_29434__$1;
(statearr_29460_29513[(2)] = null);

(statearr_29460_29513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (29))){
var inst_29408 = (state_29434[(9)]);
var state_29434__$1 = state_29434;
var statearr_29461_29514 = state_29434__$1;
(statearr_29461_29514[(2)] = inst_29408);

(statearr_29461_29514[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (6))){
var state_29434__$1 = state_29434;
var statearr_29462_29515 = state_29434__$1;
(statearr_29462_29515[(2)] = false);

(statearr_29462_29515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (28))){
var inst_29404 = (state_29434[(2)]);
var inst_29405 = calc_state.call(null);
var inst_29361 = inst_29405;
var state_29434__$1 = (function (){var statearr_29463 = state_29434;
(statearr_29463[(15)] = inst_29404);

(statearr_29463[(7)] = inst_29361);

return statearr_29463;
})();
var statearr_29464_29516 = state_29434__$1;
(statearr_29464_29516[(2)] = null);

(statearr_29464_29516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (25))){
var inst_29430 = (state_29434[(2)]);
var state_29434__$1 = state_29434;
var statearr_29465_29517 = state_29434__$1;
(statearr_29465_29517[(2)] = inst_29430);

(statearr_29465_29517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (34))){
var inst_29428 = (state_29434[(2)]);
var state_29434__$1 = state_29434;
var statearr_29466_29518 = state_29434__$1;
(statearr_29466_29518[(2)] = inst_29428);

(statearr_29466_29518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (17))){
var state_29434__$1 = state_29434;
var statearr_29467_29519 = state_29434__$1;
(statearr_29467_29519[(2)] = false);

(statearr_29467_29519[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (3))){
var state_29434__$1 = state_29434;
var statearr_29468_29520 = state_29434__$1;
(statearr_29468_29520[(2)] = false);

(statearr_29468_29520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (12))){
var inst_29432 = (state_29434[(2)]);
var state_29434__$1 = state_29434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29434__$1,inst_29432);
} else {
if((state_val_29435 === (2))){
var inst_29336 = (state_29434[(8)]);
var inst_29341 = inst_29336.cljs$lang$protocol_mask$partition0$;
var inst_29342 = (inst_29341 & (64));
var inst_29343 = inst_29336.cljs$core$ISeq$;
var inst_29344 = (cljs.core.PROTOCOL_SENTINEL === inst_29343);
var inst_29345 = ((inst_29342) || (inst_29344));
var state_29434__$1 = state_29434;
if(cljs.core.truth_(inst_29345)){
var statearr_29469_29521 = state_29434__$1;
(statearr_29469_29521[(1)] = (5));

} else {
var statearr_29470_29522 = state_29434__$1;
(statearr_29470_29522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (23))){
var inst_29393 = (state_29434[(14)]);
var inst_29399 = (inst_29393 == null);
var state_29434__$1 = state_29434;
if(cljs.core.truth_(inst_29399)){
var statearr_29471_29523 = state_29434__$1;
(statearr_29471_29523[(1)] = (26));

} else {
var statearr_29472_29524 = state_29434__$1;
(statearr_29472_29524[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (35))){
var inst_29419 = (state_29434[(2)]);
var state_29434__$1 = state_29434;
if(cljs.core.truth_(inst_29419)){
var statearr_29473_29525 = state_29434__$1;
(statearr_29473_29525[(1)] = (36));

} else {
var statearr_29474_29526 = state_29434__$1;
(statearr_29474_29526[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (19))){
var inst_29361 = (state_29434[(7)]);
var inst_29381 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29361);
var state_29434__$1 = state_29434;
var statearr_29475_29527 = state_29434__$1;
(statearr_29475_29527[(2)] = inst_29381);

(statearr_29475_29527[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (11))){
var inst_29361 = (state_29434[(7)]);
var inst_29365 = (inst_29361 == null);
var inst_29366 = cljs.core.not.call(null,inst_29365);
var state_29434__$1 = state_29434;
if(inst_29366){
var statearr_29476_29528 = state_29434__$1;
(statearr_29476_29528[(1)] = (13));

} else {
var statearr_29477_29529 = state_29434__$1;
(statearr_29477_29529[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (9))){
var inst_29336 = (state_29434[(8)]);
var state_29434__$1 = state_29434;
var statearr_29478_29530 = state_29434__$1;
(statearr_29478_29530[(2)] = inst_29336);

(statearr_29478_29530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (5))){
var state_29434__$1 = state_29434;
var statearr_29479_29531 = state_29434__$1;
(statearr_29479_29531[(2)] = true);

(statearr_29479_29531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (14))){
var state_29434__$1 = state_29434;
var statearr_29480_29532 = state_29434__$1;
(statearr_29480_29532[(2)] = false);

(statearr_29480_29532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (26))){
var inst_29394 = (state_29434[(10)]);
var inst_29401 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29394);
var state_29434__$1 = state_29434;
var statearr_29481_29533 = state_29434__$1;
(statearr_29481_29533[(2)] = inst_29401);

(statearr_29481_29533[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (16))){
var state_29434__$1 = state_29434;
var statearr_29482_29534 = state_29434__$1;
(statearr_29482_29534[(2)] = true);

(statearr_29482_29534[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (38))){
var inst_29424 = (state_29434[(2)]);
var state_29434__$1 = state_29434;
var statearr_29483_29535 = state_29434__$1;
(statearr_29483_29535[(2)] = inst_29424);

(statearr_29483_29535[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (30))){
var inst_29386 = (state_29434[(13)]);
var inst_29394 = (state_29434[(10)]);
var inst_29385 = (state_29434[(11)]);
var inst_29411 = cljs.core.empty_QMARK_.call(null,inst_29385);
var inst_29412 = inst_29386.call(null,inst_29394);
var inst_29413 = cljs.core.not.call(null,inst_29412);
var inst_29414 = ((inst_29411) && (inst_29413));
var state_29434__$1 = state_29434;
var statearr_29484_29536 = state_29434__$1;
(statearr_29484_29536[(2)] = inst_29414);

(statearr_29484_29536[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (10))){
var inst_29336 = (state_29434[(8)]);
var inst_29357 = (state_29434[(2)]);
var inst_29358 = cljs.core.get.call(null,inst_29357,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29359 = cljs.core.get.call(null,inst_29357,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29360 = cljs.core.get.call(null,inst_29357,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29361 = inst_29336;
var state_29434__$1 = (function (){var statearr_29485 = state_29434;
(statearr_29485[(16)] = inst_29359);

(statearr_29485[(17)] = inst_29358);

(statearr_29485[(7)] = inst_29361);

(statearr_29485[(18)] = inst_29360);

return statearr_29485;
})();
var statearr_29486_29537 = state_29434__$1;
(statearr_29486_29537[(2)] = null);

(statearr_29486_29537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (18))){
var inst_29376 = (state_29434[(2)]);
var state_29434__$1 = state_29434;
var statearr_29487_29538 = state_29434__$1;
(statearr_29487_29538[(2)] = inst_29376);

(statearr_29487_29538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (37))){
var state_29434__$1 = state_29434;
var statearr_29488_29539 = state_29434__$1;
(statearr_29488_29539[(2)] = null);

(statearr_29488_29539[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29435 === (8))){
var inst_29336 = (state_29434[(8)]);
var inst_29354 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29336);
var state_29434__$1 = state_29434;
var statearr_29489_29540 = state_29434__$1;
(statearr_29489_29540[(2)] = inst_29354);

(statearr_29489_29540[(1)] = (10));


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
});})(c__28435__auto___29494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28340__auto__,c__28435__auto___29494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28341__auto__ = null;
var cljs$core$async$mix_$_state_machine__28341__auto____0 = (function (){
var statearr_29490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29490[(0)] = cljs$core$async$mix_$_state_machine__28341__auto__);

(statearr_29490[(1)] = (1));

return statearr_29490;
});
var cljs$core$async$mix_$_state_machine__28341__auto____1 = (function (state_29434){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_29434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e29491){if((e29491 instanceof Object)){
var ex__28344__auto__ = e29491;
var statearr_29492_29541 = state_29434;
(statearr_29492_29541[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29542 = state_29434;
state_29434 = G__29542;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28341__auto__ = function(state_29434){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28341__auto____1.call(this,state_29434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28341__auto____0;
cljs$core$async$mix_$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28341__auto____1;
return cljs$core$async$mix_$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___29494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28437__auto__ = (function (){var statearr_29493 = f__28436__auto__.call(null);
(statearr_29493[(6)] = c__28435__auto___29494);

return statearr_29493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___29494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29544 = arguments.length;
switch (G__29544) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29548 = arguments.length;
switch (G__29548) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__29546_SHARP_){
if(cljs.core.truth_(p1__29546_SHARP_.call(null,topic))){
return p1__29546_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29546_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29549 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29550){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29550 = meta29550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29551,meta29550__$1){
var self__ = this;
var _29551__$1 = this;
return (new cljs.core.async.t_cljs$core$async29549(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29550__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29551){
var self__ = this;
var _29551__$1 = this;
return self__.meta29550;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29549.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29550","meta29550",821529584,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29549";

cljs.core.async.t_cljs$core$async29549.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29549");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29549.
 */
cljs.core.async.__GT_t_cljs$core$async29549 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29549(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29550){
return (new cljs.core.async.t_cljs$core$async29549(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29550));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29549(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28435__auto___29669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___29669,mults,ensure_mult,p){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___29669,mults,ensure_mult,p){
return (function (state_29623){
var state_val_29624 = (state_29623[(1)]);
if((state_val_29624 === (7))){
var inst_29619 = (state_29623[(2)]);
var state_29623__$1 = state_29623;
var statearr_29625_29670 = state_29623__$1;
(statearr_29625_29670[(2)] = inst_29619);

(statearr_29625_29670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (20))){
var state_29623__$1 = state_29623;
var statearr_29626_29671 = state_29623__$1;
(statearr_29626_29671[(2)] = null);

(statearr_29626_29671[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (1))){
var state_29623__$1 = state_29623;
var statearr_29627_29672 = state_29623__$1;
(statearr_29627_29672[(2)] = null);

(statearr_29627_29672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (24))){
var inst_29602 = (state_29623[(7)]);
var inst_29611 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29602);
var state_29623__$1 = state_29623;
var statearr_29628_29673 = state_29623__$1;
(statearr_29628_29673[(2)] = inst_29611);

(statearr_29628_29673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (4))){
var inst_29554 = (state_29623[(8)]);
var inst_29554__$1 = (state_29623[(2)]);
var inst_29555 = (inst_29554__$1 == null);
var state_29623__$1 = (function (){var statearr_29629 = state_29623;
(statearr_29629[(8)] = inst_29554__$1);

return statearr_29629;
})();
if(cljs.core.truth_(inst_29555)){
var statearr_29630_29674 = state_29623__$1;
(statearr_29630_29674[(1)] = (5));

} else {
var statearr_29631_29675 = state_29623__$1;
(statearr_29631_29675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (15))){
var inst_29596 = (state_29623[(2)]);
var state_29623__$1 = state_29623;
var statearr_29632_29676 = state_29623__$1;
(statearr_29632_29676[(2)] = inst_29596);

(statearr_29632_29676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (21))){
var inst_29616 = (state_29623[(2)]);
var state_29623__$1 = (function (){var statearr_29633 = state_29623;
(statearr_29633[(9)] = inst_29616);

return statearr_29633;
})();
var statearr_29634_29677 = state_29623__$1;
(statearr_29634_29677[(2)] = null);

(statearr_29634_29677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (13))){
var inst_29578 = (state_29623[(10)]);
var inst_29580 = cljs.core.chunked_seq_QMARK_.call(null,inst_29578);
var state_29623__$1 = state_29623;
if(inst_29580){
var statearr_29635_29678 = state_29623__$1;
(statearr_29635_29678[(1)] = (16));

} else {
var statearr_29636_29679 = state_29623__$1;
(statearr_29636_29679[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (22))){
var inst_29608 = (state_29623[(2)]);
var state_29623__$1 = state_29623;
if(cljs.core.truth_(inst_29608)){
var statearr_29637_29680 = state_29623__$1;
(statearr_29637_29680[(1)] = (23));

} else {
var statearr_29638_29681 = state_29623__$1;
(statearr_29638_29681[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (6))){
var inst_29554 = (state_29623[(8)]);
var inst_29604 = (state_29623[(11)]);
var inst_29602 = (state_29623[(7)]);
var inst_29602__$1 = topic_fn.call(null,inst_29554);
var inst_29603 = cljs.core.deref.call(null,mults);
var inst_29604__$1 = cljs.core.get.call(null,inst_29603,inst_29602__$1);
var state_29623__$1 = (function (){var statearr_29639 = state_29623;
(statearr_29639[(11)] = inst_29604__$1);

(statearr_29639[(7)] = inst_29602__$1);

return statearr_29639;
})();
if(cljs.core.truth_(inst_29604__$1)){
var statearr_29640_29682 = state_29623__$1;
(statearr_29640_29682[(1)] = (19));

} else {
var statearr_29641_29683 = state_29623__$1;
(statearr_29641_29683[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (25))){
var inst_29613 = (state_29623[(2)]);
var state_29623__$1 = state_29623;
var statearr_29642_29684 = state_29623__$1;
(statearr_29642_29684[(2)] = inst_29613);

(statearr_29642_29684[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (17))){
var inst_29578 = (state_29623[(10)]);
var inst_29587 = cljs.core.first.call(null,inst_29578);
var inst_29588 = cljs.core.async.muxch_STAR_.call(null,inst_29587);
var inst_29589 = cljs.core.async.close_BANG_.call(null,inst_29588);
var inst_29590 = cljs.core.next.call(null,inst_29578);
var inst_29564 = inst_29590;
var inst_29565 = null;
var inst_29566 = (0);
var inst_29567 = (0);
var state_29623__$1 = (function (){var statearr_29643 = state_29623;
(statearr_29643[(12)] = inst_29564);

(statearr_29643[(13)] = inst_29565);

(statearr_29643[(14)] = inst_29567);

(statearr_29643[(15)] = inst_29589);

(statearr_29643[(16)] = inst_29566);

return statearr_29643;
})();
var statearr_29644_29685 = state_29623__$1;
(statearr_29644_29685[(2)] = null);

(statearr_29644_29685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (3))){
var inst_29621 = (state_29623[(2)]);
var state_29623__$1 = state_29623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29623__$1,inst_29621);
} else {
if((state_val_29624 === (12))){
var inst_29598 = (state_29623[(2)]);
var state_29623__$1 = state_29623;
var statearr_29645_29686 = state_29623__$1;
(statearr_29645_29686[(2)] = inst_29598);

(statearr_29645_29686[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (2))){
var state_29623__$1 = state_29623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29623__$1,(4),ch);
} else {
if((state_val_29624 === (23))){
var state_29623__$1 = state_29623;
var statearr_29646_29687 = state_29623__$1;
(statearr_29646_29687[(2)] = null);

(statearr_29646_29687[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (19))){
var inst_29554 = (state_29623[(8)]);
var inst_29604 = (state_29623[(11)]);
var inst_29606 = cljs.core.async.muxch_STAR_.call(null,inst_29604);
var state_29623__$1 = state_29623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29623__$1,(22),inst_29606,inst_29554);
} else {
if((state_val_29624 === (11))){
var inst_29564 = (state_29623[(12)]);
var inst_29578 = (state_29623[(10)]);
var inst_29578__$1 = cljs.core.seq.call(null,inst_29564);
var state_29623__$1 = (function (){var statearr_29647 = state_29623;
(statearr_29647[(10)] = inst_29578__$1);

return statearr_29647;
})();
if(inst_29578__$1){
var statearr_29648_29688 = state_29623__$1;
(statearr_29648_29688[(1)] = (13));

} else {
var statearr_29649_29689 = state_29623__$1;
(statearr_29649_29689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (9))){
var inst_29600 = (state_29623[(2)]);
var state_29623__$1 = state_29623;
var statearr_29650_29690 = state_29623__$1;
(statearr_29650_29690[(2)] = inst_29600);

(statearr_29650_29690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (5))){
var inst_29561 = cljs.core.deref.call(null,mults);
var inst_29562 = cljs.core.vals.call(null,inst_29561);
var inst_29563 = cljs.core.seq.call(null,inst_29562);
var inst_29564 = inst_29563;
var inst_29565 = null;
var inst_29566 = (0);
var inst_29567 = (0);
var state_29623__$1 = (function (){var statearr_29651 = state_29623;
(statearr_29651[(12)] = inst_29564);

(statearr_29651[(13)] = inst_29565);

(statearr_29651[(14)] = inst_29567);

(statearr_29651[(16)] = inst_29566);

return statearr_29651;
})();
var statearr_29652_29691 = state_29623__$1;
(statearr_29652_29691[(2)] = null);

(statearr_29652_29691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (14))){
var state_29623__$1 = state_29623;
var statearr_29656_29692 = state_29623__$1;
(statearr_29656_29692[(2)] = null);

(statearr_29656_29692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (16))){
var inst_29578 = (state_29623[(10)]);
var inst_29582 = cljs.core.chunk_first.call(null,inst_29578);
var inst_29583 = cljs.core.chunk_rest.call(null,inst_29578);
var inst_29584 = cljs.core.count.call(null,inst_29582);
var inst_29564 = inst_29583;
var inst_29565 = inst_29582;
var inst_29566 = inst_29584;
var inst_29567 = (0);
var state_29623__$1 = (function (){var statearr_29657 = state_29623;
(statearr_29657[(12)] = inst_29564);

(statearr_29657[(13)] = inst_29565);

(statearr_29657[(14)] = inst_29567);

(statearr_29657[(16)] = inst_29566);

return statearr_29657;
})();
var statearr_29658_29693 = state_29623__$1;
(statearr_29658_29693[(2)] = null);

(statearr_29658_29693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (10))){
var inst_29564 = (state_29623[(12)]);
var inst_29565 = (state_29623[(13)]);
var inst_29567 = (state_29623[(14)]);
var inst_29566 = (state_29623[(16)]);
var inst_29572 = cljs.core._nth.call(null,inst_29565,inst_29567);
var inst_29573 = cljs.core.async.muxch_STAR_.call(null,inst_29572);
var inst_29574 = cljs.core.async.close_BANG_.call(null,inst_29573);
var inst_29575 = (inst_29567 + (1));
var tmp29653 = inst_29564;
var tmp29654 = inst_29565;
var tmp29655 = inst_29566;
var inst_29564__$1 = tmp29653;
var inst_29565__$1 = tmp29654;
var inst_29566__$1 = tmp29655;
var inst_29567__$1 = inst_29575;
var state_29623__$1 = (function (){var statearr_29659 = state_29623;
(statearr_29659[(12)] = inst_29564__$1);

(statearr_29659[(13)] = inst_29565__$1);

(statearr_29659[(14)] = inst_29567__$1);

(statearr_29659[(17)] = inst_29574);

(statearr_29659[(16)] = inst_29566__$1);

return statearr_29659;
})();
var statearr_29660_29694 = state_29623__$1;
(statearr_29660_29694[(2)] = null);

(statearr_29660_29694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (18))){
var inst_29593 = (state_29623[(2)]);
var state_29623__$1 = state_29623;
var statearr_29661_29695 = state_29623__$1;
(statearr_29661_29695[(2)] = inst_29593);

(statearr_29661_29695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29624 === (8))){
var inst_29567 = (state_29623[(14)]);
var inst_29566 = (state_29623[(16)]);
var inst_29569 = (inst_29567 < inst_29566);
var inst_29570 = inst_29569;
var state_29623__$1 = state_29623;
if(cljs.core.truth_(inst_29570)){
var statearr_29662_29696 = state_29623__$1;
(statearr_29662_29696[(1)] = (10));

} else {
var statearr_29663_29697 = state_29623__$1;
(statearr_29663_29697[(1)] = (11));

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
});})(c__28435__auto___29669,mults,ensure_mult,p))
;
return ((function (switch__28340__auto__,c__28435__auto___29669,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28341__auto__ = null;
var cljs$core$async$state_machine__28341__auto____0 = (function (){
var statearr_29664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29664[(0)] = cljs$core$async$state_machine__28341__auto__);

(statearr_29664[(1)] = (1));

return statearr_29664;
});
var cljs$core$async$state_machine__28341__auto____1 = (function (state_29623){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_29623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e29665){if((e29665 instanceof Object)){
var ex__28344__auto__ = e29665;
var statearr_29666_29698 = state_29623;
(statearr_29666_29698[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29699 = state_29623;
state_29623 = G__29699;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$state_machine__28341__auto__ = function(state_29623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28341__auto____1.call(this,state_29623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28341__auto____0;
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28341__auto____1;
return cljs$core$async$state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___29669,mults,ensure_mult,p))
})();
var state__28437__auto__ = (function (){var statearr_29667 = f__28436__auto__.call(null);
(statearr_29667[(6)] = c__28435__auto___29669);

return statearr_29667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___29669,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29701 = arguments.length;
switch (G__29701) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29704 = arguments.length;
switch (G__29704) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29707 = arguments.length;
switch (G__29707) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28435__auto___29774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___29774,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___29774,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29746){
var state_val_29747 = (state_29746[(1)]);
if((state_val_29747 === (7))){
var state_29746__$1 = state_29746;
var statearr_29748_29775 = state_29746__$1;
(statearr_29748_29775[(2)] = null);

(statearr_29748_29775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (1))){
var state_29746__$1 = state_29746;
var statearr_29749_29776 = state_29746__$1;
(statearr_29749_29776[(2)] = null);

(statearr_29749_29776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (4))){
var inst_29710 = (state_29746[(7)]);
var inst_29712 = (inst_29710 < cnt);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29712)){
var statearr_29750_29777 = state_29746__$1;
(statearr_29750_29777[(1)] = (6));

} else {
var statearr_29751_29778 = state_29746__$1;
(statearr_29751_29778[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (15))){
var inst_29742 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29752_29779 = state_29746__$1;
(statearr_29752_29779[(2)] = inst_29742);

(statearr_29752_29779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (13))){
var inst_29735 = cljs.core.async.close_BANG_.call(null,out);
var state_29746__$1 = state_29746;
var statearr_29753_29780 = state_29746__$1;
(statearr_29753_29780[(2)] = inst_29735);

(statearr_29753_29780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (6))){
var state_29746__$1 = state_29746;
var statearr_29754_29781 = state_29746__$1;
(statearr_29754_29781[(2)] = null);

(statearr_29754_29781[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (3))){
var inst_29744 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29746__$1,inst_29744);
} else {
if((state_val_29747 === (12))){
var inst_29732 = (state_29746[(8)]);
var inst_29732__$1 = (state_29746[(2)]);
var inst_29733 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29732__$1);
var state_29746__$1 = (function (){var statearr_29755 = state_29746;
(statearr_29755[(8)] = inst_29732__$1);

return statearr_29755;
})();
if(cljs.core.truth_(inst_29733)){
var statearr_29756_29782 = state_29746__$1;
(statearr_29756_29782[(1)] = (13));

} else {
var statearr_29757_29783 = state_29746__$1;
(statearr_29757_29783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (2))){
var inst_29709 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29710 = (0);
var state_29746__$1 = (function (){var statearr_29758 = state_29746;
(statearr_29758[(7)] = inst_29710);

(statearr_29758[(9)] = inst_29709);

return statearr_29758;
})();
var statearr_29759_29784 = state_29746__$1;
(statearr_29759_29784[(2)] = null);

(statearr_29759_29784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (11))){
var inst_29710 = (state_29746[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29746,(10),Object,null,(9));
var inst_29719 = chs__$1.call(null,inst_29710);
var inst_29720 = done.call(null,inst_29710);
var inst_29721 = cljs.core.async.take_BANG_.call(null,inst_29719,inst_29720);
var state_29746__$1 = state_29746;
var statearr_29760_29785 = state_29746__$1;
(statearr_29760_29785[(2)] = inst_29721);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29746__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (9))){
var inst_29710 = (state_29746[(7)]);
var inst_29723 = (state_29746[(2)]);
var inst_29724 = (inst_29710 + (1));
var inst_29710__$1 = inst_29724;
var state_29746__$1 = (function (){var statearr_29761 = state_29746;
(statearr_29761[(10)] = inst_29723);

(statearr_29761[(7)] = inst_29710__$1);

return statearr_29761;
})();
var statearr_29762_29786 = state_29746__$1;
(statearr_29762_29786[(2)] = null);

(statearr_29762_29786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (5))){
var inst_29730 = (state_29746[(2)]);
var state_29746__$1 = (function (){var statearr_29763 = state_29746;
(statearr_29763[(11)] = inst_29730);

return statearr_29763;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(12),dchan);
} else {
if((state_val_29747 === (14))){
var inst_29732 = (state_29746[(8)]);
var inst_29737 = cljs.core.apply.call(null,f,inst_29732);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29746__$1,(16),out,inst_29737);
} else {
if((state_val_29747 === (16))){
var inst_29739 = (state_29746[(2)]);
var state_29746__$1 = (function (){var statearr_29764 = state_29746;
(statearr_29764[(12)] = inst_29739);

return statearr_29764;
})();
var statearr_29765_29787 = state_29746__$1;
(statearr_29765_29787[(2)] = null);

(statearr_29765_29787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (10))){
var inst_29714 = (state_29746[(2)]);
var inst_29715 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29746__$1 = (function (){var statearr_29766 = state_29746;
(statearr_29766[(13)] = inst_29714);

return statearr_29766;
})();
var statearr_29767_29788 = state_29746__$1;
(statearr_29767_29788[(2)] = inst_29715);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29746__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (8))){
var inst_29728 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29768_29789 = state_29746__$1;
(statearr_29768_29789[(2)] = inst_29728);

(statearr_29768_29789[(1)] = (5));


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
});})(c__28435__auto___29774,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28340__auto__,c__28435__auto___29774,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28341__auto__ = null;
var cljs$core$async$state_machine__28341__auto____0 = (function (){
var statearr_29769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29769[(0)] = cljs$core$async$state_machine__28341__auto__);

(statearr_29769[(1)] = (1));

return statearr_29769;
});
var cljs$core$async$state_machine__28341__auto____1 = (function (state_29746){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_29746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e29770){if((e29770 instanceof Object)){
var ex__28344__auto__ = e29770;
var statearr_29771_29790 = state_29746;
(statearr_29771_29790[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29791 = state_29746;
state_29746 = G__29791;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$state_machine__28341__auto__ = function(state_29746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28341__auto____1.call(this,state_29746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28341__auto____0;
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28341__auto____1;
return cljs$core$async$state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___29774,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28437__auto__ = (function (){var statearr_29772 = f__28436__auto__.call(null);
(statearr_29772[(6)] = c__28435__auto___29774);

return statearr_29772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___29774,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29794 = arguments.length;
switch (G__29794) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28435__auto___29848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___29848,out){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___29848,out){
return (function (state_29826){
var state_val_29827 = (state_29826[(1)]);
if((state_val_29827 === (7))){
var inst_29805 = (state_29826[(7)]);
var inst_29806 = (state_29826[(8)]);
var inst_29805__$1 = (state_29826[(2)]);
var inst_29806__$1 = cljs.core.nth.call(null,inst_29805__$1,(0),null);
var inst_29807 = cljs.core.nth.call(null,inst_29805__$1,(1),null);
var inst_29808 = (inst_29806__$1 == null);
var state_29826__$1 = (function (){var statearr_29828 = state_29826;
(statearr_29828[(7)] = inst_29805__$1);

(statearr_29828[(9)] = inst_29807);

(statearr_29828[(8)] = inst_29806__$1);

return statearr_29828;
})();
if(cljs.core.truth_(inst_29808)){
var statearr_29829_29849 = state_29826__$1;
(statearr_29829_29849[(1)] = (8));

} else {
var statearr_29830_29850 = state_29826__$1;
(statearr_29830_29850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (1))){
var inst_29795 = cljs.core.vec.call(null,chs);
var inst_29796 = inst_29795;
var state_29826__$1 = (function (){var statearr_29831 = state_29826;
(statearr_29831[(10)] = inst_29796);

return statearr_29831;
})();
var statearr_29832_29851 = state_29826__$1;
(statearr_29832_29851[(2)] = null);

(statearr_29832_29851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (4))){
var inst_29796 = (state_29826[(10)]);
var state_29826__$1 = state_29826;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29826__$1,(7),inst_29796);
} else {
if((state_val_29827 === (6))){
var inst_29822 = (state_29826[(2)]);
var state_29826__$1 = state_29826;
var statearr_29833_29852 = state_29826__$1;
(statearr_29833_29852[(2)] = inst_29822);

(statearr_29833_29852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (3))){
var inst_29824 = (state_29826[(2)]);
var state_29826__$1 = state_29826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29826__$1,inst_29824);
} else {
if((state_val_29827 === (2))){
var inst_29796 = (state_29826[(10)]);
var inst_29798 = cljs.core.count.call(null,inst_29796);
var inst_29799 = (inst_29798 > (0));
var state_29826__$1 = state_29826;
if(cljs.core.truth_(inst_29799)){
var statearr_29835_29853 = state_29826__$1;
(statearr_29835_29853[(1)] = (4));

} else {
var statearr_29836_29854 = state_29826__$1;
(statearr_29836_29854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (11))){
var inst_29796 = (state_29826[(10)]);
var inst_29815 = (state_29826[(2)]);
var tmp29834 = inst_29796;
var inst_29796__$1 = tmp29834;
var state_29826__$1 = (function (){var statearr_29837 = state_29826;
(statearr_29837[(10)] = inst_29796__$1);

(statearr_29837[(11)] = inst_29815);

return statearr_29837;
})();
var statearr_29838_29855 = state_29826__$1;
(statearr_29838_29855[(2)] = null);

(statearr_29838_29855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (9))){
var inst_29806 = (state_29826[(8)]);
var state_29826__$1 = state_29826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29826__$1,(11),out,inst_29806);
} else {
if((state_val_29827 === (5))){
var inst_29820 = cljs.core.async.close_BANG_.call(null,out);
var state_29826__$1 = state_29826;
var statearr_29839_29856 = state_29826__$1;
(statearr_29839_29856[(2)] = inst_29820);

(statearr_29839_29856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (10))){
var inst_29818 = (state_29826[(2)]);
var state_29826__$1 = state_29826;
var statearr_29840_29857 = state_29826__$1;
(statearr_29840_29857[(2)] = inst_29818);

(statearr_29840_29857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (8))){
var inst_29805 = (state_29826[(7)]);
var inst_29796 = (state_29826[(10)]);
var inst_29807 = (state_29826[(9)]);
var inst_29806 = (state_29826[(8)]);
var inst_29810 = (function (){var cs = inst_29796;
var vec__29801 = inst_29805;
var v = inst_29806;
var c = inst_29807;
return ((function (cs,vec__29801,v,c,inst_29805,inst_29796,inst_29807,inst_29806,state_val_29827,c__28435__auto___29848,out){
return (function (p1__29792_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29792_SHARP_);
});
;})(cs,vec__29801,v,c,inst_29805,inst_29796,inst_29807,inst_29806,state_val_29827,c__28435__auto___29848,out))
})();
var inst_29811 = cljs.core.filterv.call(null,inst_29810,inst_29796);
var inst_29796__$1 = inst_29811;
var state_29826__$1 = (function (){var statearr_29841 = state_29826;
(statearr_29841[(10)] = inst_29796__$1);

return statearr_29841;
})();
var statearr_29842_29858 = state_29826__$1;
(statearr_29842_29858[(2)] = null);

(statearr_29842_29858[(1)] = (2));


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
});})(c__28435__auto___29848,out))
;
return ((function (switch__28340__auto__,c__28435__auto___29848,out){
return (function() {
var cljs$core$async$state_machine__28341__auto__ = null;
var cljs$core$async$state_machine__28341__auto____0 = (function (){
var statearr_29843 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29843[(0)] = cljs$core$async$state_machine__28341__auto__);

(statearr_29843[(1)] = (1));

return statearr_29843;
});
var cljs$core$async$state_machine__28341__auto____1 = (function (state_29826){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_29826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e29844){if((e29844 instanceof Object)){
var ex__28344__auto__ = e29844;
var statearr_29845_29859 = state_29826;
(statearr_29845_29859[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29860 = state_29826;
state_29826 = G__29860;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$state_machine__28341__auto__ = function(state_29826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28341__auto____1.call(this,state_29826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28341__auto____0;
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28341__auto____1;
return cljs$core$async$state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___29848,out))
})();
var state__28437__auto__ = (function (){var statearr_29846 = f__28436__auto__.call(null);
(statearr_29846[(6)] = c__28435__auto___29848);

return statearr_29846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___29848,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29862 = arguments.length;
switch (G__29862) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28435__auto___29907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___29907,out){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___29907,out){
return (function (state_29886){
var state_val_29887 = (state_29886[(1)]);
if((state_val_29887 === (7))){
var inst_29868 = (state_29886[(7)]);
var inst_29868__$1 = (state_29886[(2)]);
var inst_29869 = (inst_29868__$1 == null);
var inst_29870 = cljs.core.not.call(null,inst_29869);
var state_29886__$1 = (function (){var statearr_29888 = state_29886;
(statearr_29888[(7)] = inst_29868__$1);

return statearr_29888;
})();
if(inst_29870){
var statearr_29889_29908 = state_29886__$1;
(statearr_29889_29908[(1)] = (8));

} else {
var statearr_29890_29909 = state_29886__$1;
(statearr_29890_29909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (1))){
var inst_29863 = (0);
var state_29886__$1 = (function (){var statearr_29891 = state_29886;
(statearr_29891[(8)] = inst_29863);

return statearr_29891;
})();
var statearr_29892_29910 = state_29886__$1;
(statearr_29892_29910[(2)] = null);

(statearr_29892_29910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (4))){
var state_29886__$1 = state_29886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29886__$1,(7),ch);
} else {
if((state_val_29887 === (6))){
var inst_29881 = (state_29886[(2)]);
var state_29886__$1 = state_29886;
var statearr_29893_29911 = state_29886__$1;
(statearr_29893_29911[(2)] = inst_29881);

(statearr_29893_29911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (3))){
var inst_29883 = (state_29886[(2)]);
var inst_29884 = cljs.core.async.close_BANG_.call(null,out);
var state_29886__$1 = (function (){var statearr_29894 = state_29886;
(statearr_29894[(9)] = inst_29883);

return statearr_29894;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29886__$1,inst_29884);
} else {
if((state_val_29887 === (2))){
var inst_29863 = (state_29886[(8)]);
var inst_29865 = (inst_29863 < n);
var state_29886__$1 = state_29886;
if(cljs.core.truth_(inst_29865)){
var statearr_29895_29912 = state_29886__$1;
(statearr_29895_29912[(1)] = (4));

} else {
var statearr_29896_29913 = state_29886__$1;
(statearr_29896_29913[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (11))){
var inst_29863 = (state_29886[(8)]);
var inst_29873 = (state_29886[(2)]);
var inst_29874 = (inst_29863 + (1));
var inst_29863__$1 = inst_29874;
var state_29886__$1 = (function (){var statearr_29897 = state_29886;
(statearr_29897[(8)] = inst_29863__$1);

(statearr_29897[(10)] = inst_29873);

return statearr_29897;
})();
var statearr_29898_29914 = state_29886__$1;
(statearr_29898_29914[(2)] = null);

(statearr_29898_29914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (9))){
var state_29886__$1 = state_29886;
var statearr_29899_29915 = state_29886__$1;
(statearr_29899_29915[(2)] = null);

(statearr_29899_29915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (5))){
var state_29886__$1 = state_29886;
var statearr_29900_29916 = state_29886__$1;
(statearr_29900_29916[(2)] = null);

(statearr_29900_29916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (10))){
var inst_29878 = (state_29886[(2)]);
var state_29886__$1 = state_29886;
var statearr_29901_29917 = state_29886__$1;
(statearr_29901_29917[(2)] = inst_29878);

(statearr_29901_29917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (8))){
var inst_29868 = (state_29886[(7)]);
var state_29886__$1 = state_29886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29886__$1,(11),out,inst_29868);
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
});})(c__28435__auto___29907,out))
;
return ((function (switch__28340__auto__,c__28435__auto___29907,out){
return (function() {
var cljs$core$async$state_machine__28341__auto__ = null;
var cljs$core$async$state_machine__28341__auto____0 = (function (){
var statearr_29902 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29902[(0)] = cljs$core$async$state_machine__28341__auto__);

(statearr_29902[(1)] = (1));

return statearr_29902;
});
var cljs$core$async$state_machine__28341__auto____1 = (function (state_29886){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_29886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e29903){if((e29903 instanceof Object)){
var ex__28344__auto__ = e29903;
var statearr_29904_29918 = state_29886;
(statearr_29904_29918[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29919 = state_29886;
state_29886 = G__29919;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$state_machine__28341__auto__ = function(state_29886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28341__auto____1.call(this,state_29886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28341__auto____0;
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28341__auto____1;
return cljs$core$async$state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___29907,out))
})();
var state__28437__auto__ = (function (){var statearr_29905 = f__28436__auto__.call(null);
(statearr_29905[(6)] = c__28435__auto___29907);

return statearr_29905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___29907,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29921 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29921 = (function (f,ch,meta29922){
this.f = f;
this.ch = ch;
this.meta29922 = meta29922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29923,meta29922__$1){
var self__ = this;
var _29923__$1 = this;
return (new cljs.core.async.t_cljs$core$async29921(self__.f,self__.ch,meta29922__$1));
});

cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29923){
var self__ = this;
var _29923__$1 = this;
return self__.meta29922;
});

cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29924 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29924 = (function (f,ch,meta29922,_,fn1,meta29925){
this.f = f;
this.ch = ch;
this.meta29922 = meta29922;
this._ = _;
this.fn1 = fn1;
this.meta29925 = meta29925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29926,meta29925__$1){
var self__ = this;
var _29926__$1 = this;
return (new cljs.core.async.t_cljs$core$async29924(self__.f,self__.ch,self__.meta29922,self__._,self__.fn1,meta29925__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29926){
var self__ = this;
var _29926__$1 = this;
return self__.meta29925;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29924.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29924.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29920_SHARP_){
return f1.call(null,(((p1__29920_SHARP_ == null))?null:self__.f.call(null,p1__29920_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29924.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29922","meta29922",1538810842,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29921","cljs.core.async/t_cljs$core$async29921",405011918,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29925","meta29925",931805341,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29924";

cljs.core.async.t_cljs$core$async29924.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29924");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29924.
 */
cljs.core.async.__GT_t_cljs$core$async29924 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29924(f__$1,ch__$1,meta29922__$1,___$2,fn1__$1,meta29925){
return (new cljs.core.async.t_cljs$core$async29924(f__$1,ch__$1,meta29922__$1,___$2,fn1__$1,meta29925));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29924(self__.f,self__.ch,self__.meta29922,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29922","meta29922",1538810842,null)], null);
});

cljs.core.async.t_cljs$core$async29921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29921";

cljs.core.async.t_cljs$core$async29921.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29921");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29921.
 */
cljs.core.async.__GT_t_cljs$core$async29921 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29921(f__$1,ch__$1,meta29922){
return (new cljs.core.async.t_cljs$core$async29921(f__$1,ch__$1,meta29922));
});

}

return (new cljs.core.async.t_cljs$core$async29921(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29927 = (function (f,ch,meta29928){
this.f = f;
this.ch = ch;
this.meta29928 = meta29928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29929,meta29928__$1){
var self__ = this;
var _29929__$1 = this;
return (new cljs.core.async.t_cljs$core$async29927(self__.f,self__.ch,meta29928__$1));
});

cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29929){
var self__ = this;
var _29929__$1 = this;
return self__.meta29928;
});

cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29928","meta29928",1917296574,null)], null);
});

cljs.core.async.t_cljs$core$async29927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29927";

cljs.core.async.t_cljs$core$async29927.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29927");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29927.
 */
cljs.core.async.__GT_t_cljs$core$async29927 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29927(f__$1,ch__$1,meta29928){
return (new cljs.core.async.t_cljs$core$async29927(f__$1,ch__$1,meta29928));
});

}

return (new cljs.core.async.t_cljs$core$async29927(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29930 = (function (p,ch,meta29931){
this.p = p;
this.ch = ch;
this.meta29931 = meta29931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29932,meta29931__$1){
var self__ = this;
var _29932__$1 = this;
return (new cljs.core.async.t_cljs$core$async29930(self__.p,self__.ch,meta29931__$1));
});

cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29932){
var self__ = this;
var _29932__$1 = this;
return self__.meta29931;
});

cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29931","meta29931",-407197029,null)], null);
});

cljs.core.async.t_cljs$core$async29930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29930";

cljs.core.async.t_cljs$core$async29930.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29930");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29930.
 */
cljs.core.async.__GT_t_cljs$core$async29930 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29930(p__$1,ch__$1,meta29931){
return (new cljs.core.async.t_cljs$core$async29930(p__$1,ch__$1,meta29931));
});

}

return (new cljs.core.async.t_cljs$core$async29930(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29934 = arguments.length;
switch (G__29934) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28435__auto___29974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___29974,out){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___29974,out){
return (function (state_29955){
var state_val_29956 = (state_29955[(1)]);
if((state_val_29956 === (7))){
var inst_29951 = (state_29955[(2)]);
var state_29955__$1 = state_29955;
var statearr_29957_29975 = state_29955__$1;
(statearr_29957_29975[(2)] = inst_29951);

(statearr_29957_29975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (1))){
var state_29955__$1 = state_29955;
var statearr_29958_29976 = state_29955__$1;
(statearr_29958_29976[(2)] = null);

(statearr_29958_29976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (4))){
var inst_29937 = (state_29955[(7)]);
var inst_29937__$1 = (state_29955[(2)]);
var inst_29938 = (inst_29937__$1 == null);
var state_29955__$1 = (function (){var statearr_29959 = state_29955;
(statearr_29959[(7)] = inst_29937__$1);

return statearr_29959;
})();
if(cljs.core.truth_(inst_29938)){
var statearr_29960_29977 = state_29955__$1;
(statearr_29960_29977[(1)] = (5));

} else {
var statearr_29961_29978 = state_29955__$1;
(statearr_29961_29978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (6))){
var inst_29937 = (state_29955[(7)]);
var inst_29942 = p.call(null,inst_29937);
var state_29955__$1 = state_29955;
if(cljs.core.truth_(inst_29942)){
var statearr_29962_29979 = state_29955__$1;
(statearr_29962_29979[(1)] = (8));

} else {
var statearr_29963_29980 = state_29955__$1;
(statearr_29963_29980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (3))){
var inst_29953 = (state_29955[(2)]);
var state_29955__$1 = state_29955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29955__$1,inst_29953);
} else {
if((state_val_29956 === (2))){
var state_29955__$1 = state_29955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29955__$1,(4),ch);
} else {
if((state_val_29956 === (11))){
var inst_29945 = (state_29955[(2)]);
var state_29955__$1 = state_29955;
var statearr_29964_29981 = state_29955__$1;
(statearr_29964_29981[(2)] = inst_29945);

(statearr_29964_29981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (9))){
var state_29955__$1 = state_29955;
var statearr_29965_29982 = state_29955__$1;
(statearr_29965_29982[(2)] = null);

(statearr_29965_29982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (5))){
var inst_29940 = cljs.core.async.close_BANG_.call(null,out);
var state_29955__$1 = state_29955;
var statearr_29966_29983 = state_29955__$1;
(statearr_29966_29983[(2)] = inst_29940);

(statearr_29966_29983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (10))){
var inst_29948 = (state_29955[(2)]);
var state_29955__$1 = (function (){var statearr_29967 = state_29955;
(statearr_29967[(8)] = inst_29948);

return statearr_29967;
})();
var statearr_29968_29984 = state_29955__$1;
(statearr_29968_29984[(2)] = null);

(statearr_29968_29984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (8))){
var inst_29937 = (state_29955[(7)]);
var state_29955__$1 = state_29955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29955__$1,(11),out,inst_29937);
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
});})(c__28435__auto___29974,out))
;
return ((function (switch__28340__auto__,c__28435__auto___29974,out){
return (function() {
var cljs$core$async$state_machine__28341__auto__ = null;
var cljs$core$async$state_machine__28341__auto____0 = (function (){
var statearr_29969 = [null,null,null,null,null,null,null,null,null];
(statearr_29969[(0)] = cljs$core$async$state_machine__28341__auto__);

(statearr_29969[(1)] = (1));

return statearr_29969;
});
var cljs$core$async$state_machine__28341__auto____1 = (function (state_29955){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_29955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e29970){if((e29970 instanceof Object)){
var ex__28344__auto__ = e29970;
var statearr_29971_29985 = state_29955;
(statearr_29971_29985[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29986 = state_29955;
state_29955 = G__29986;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$state_machine__28341__auto__ = function(state_29955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28341__auto____1.call(this,state_29955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28341__auto____0;
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28341__auto____1;
return cljs$core$async$state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___29974,out))
})();
var state__28437__auto__ = (function (){var statearr_29972 = f__28436__auto__.call(null);
(statearr_29972[(6)] = c__28435__auto___29974);

return statearr_29972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___29974,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29988 = arguments.length;
switch (G__29988) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto__){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto__){
return (function (state_30051){
var state_val_30052 = (state_30051[(1)]);
if((state_val_30052 === (7))){
var inst_30047 = (state_30051[(2)]);
var state_30051__$1 = state_30051;
var statearr_30053_30091 = state_30051__$1;
(statearr_30053_30091[(2)] = inst_30047);

(statearr_30053_30091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (20))){
var inst_30017 = (state_30051[(7)]);
var inst_30028 = (state_30051[(2)]);
var inst_30029 = cljs.core.next.call(null,inst_30017);
var inst_30003 = inst_30029;
var inst_30004 = null;
var inst_30005 = (0);
var inst_30006 = (0);
var state_30051__$1 = (function (){var statearr_30054 = state_30051;
(statearr_30054[(8)] = inst_30004);

(statearr_30054[(9)] = inst_30028);

(statearr_30054[(10)] = inst_30006);

(statearr_30054[(11)] = inst_30005);

(statearr_30054[(12)] = inst_30003);

return statearr_30054;
})();
var statearr_30055_30092 = state_30051__$1;
(statearr_30055_30092[(2)] = null);

(statearr_30055_30092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (1))){
var state_30051__$1 = state_30051;
var statearr_30056_30093 = state_30051__$1;
(statearr_30056_30093[(2)] = null);

(statearr_30056_30093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (4))){
var inst_29992 = (state_30051[(13)]);
var inst_29992__$1 = (state_30051[(2)]);
var inst_29993 = (inst_29992__$1 == null);
var state_30051__$1 = (function (){var statearr_30057 = state_30051;
(statearr_30057[(13)] = inst_29992__$1);

return statearr_30057;
})();
if(cljs.core.truth_(inst_29993)){
var statearr_30058_30094 = state_30051__$1;
(statearr_30058_30094[(1)] = (5));

} else {
var statearr_30059_30095 = state_30051__$1;
(statearr_30059_30095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (15))){
var state_30051__$1 = state_30051;
var statearr_30063_30096 = state_30051__$1;
(statearr_30063_30096[(2)] = null);

(statearr_30063_30096[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (21))){
var state_30051__$1 = state_30051;
var statearr_30064_30097 = state_30051__$1;
(statearr_30064_30097[(2)] = null);

(statearr_30064_30097[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (13))){
var inst_30004 = (state_30051[(8)]);
var inst_30006 = (state_30051[(10)]);
var inst_30005 = (state_30051[(11)]);
var inst_30003 = (state_30051[(12)]);
var inst_30013 = (state_30051[(2)]);
var inst_30014 = (inst_30006 + (1));
var tmp30060 = inst_30004;
var tmp30061 = inst_30005;
var tmp30062 = inst_30003;
var inst_30003__$1 = tmp30062;
var inst_30004__$1 = tmp30060;
var inst_30005__$1 = tmp30061;
var inst_30006__$1 = inst_30014;
var state_30051__$1 = (function (){var statearr_30065 = state_30051;
(statearr_30065[(8)] = inst_30004__$1);

(statearr_30065[(10)] = inst_30006__$1);

(statearr_30065[(11)] = inst_30005__$1);

(statearr_30065[(12)] = inst_30003__$1);

(statearr_30065[(14)] = inst_30013);

return statearr_30065;
})();
var statearr_30066_30098 = state_30051__$1;
(statearr_30066_30098[(2)] = null);

(statearr_30066_30098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (22))){
var state_30051__$1 = state_30051;
var statearr_30067_30099 = state_30051__$1;
(statearr_30067_30099[(2)] = null);

(statearr_30067_30099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (6))){
var inst_29992 = (state_30051[(13)]);
var inst_30001 = f.call(null,inst_29992);
var inst_30002 = cljs.core.seq.call(null,inst_30001);
var inst_30003 = inst_30002;
var inst_30004 = null;
var inst_30005 = (0);
var inst_30006 = (0);
var state_30051__$1 = (function (){var statearr_30068 = state_30051;
(statearr_30068[(8)] = inst_30004);

(statearr_30068[(10)] = inst_30006);

(statearr_30068[(11)] = inst_30005);

(statearr_30068[(12)] = inst_30003);

return statearr_30068;
})();
var statearr_30069_30100 = state_30051__$1;
(statearr_30069_30100[(2)] = null);

(statearr_30069_30100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (17))){
var inst_30017 = (state_30051[(7)]);
var inst_30021 = cljs.core.chunk_first.call(null,inst_30017);
var inst_30022 = cljs.core.chunk_rest.call(null,inst_30017);
var inst_30023 = cljs.core.count.call(null,inst_30021);
var inst_30003 = inst_30022;
var inst_30004 = inst_30021;
var inst_30005 = inst_30023;
var inst_30006 = (0);
var state_30051__$1 = (function (){var statearr_30070 = state_30051;
(statearr_30070[(8)] = inst_30004);

(statearr_30070[(10)] = inst_30006);

(statearr_30070[(11)] = inst_30005);

(statearr_30070[(12)] = inst_30003);

return statearr_30070;
})();
var statearr_30071_30101 = state_30051__$1;
(statearr_30071_30101[(2)] = null);

(statearr_30071_30101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (3))){
var inst_30049 = (state_30051[(2)]);
var state_30051__$1 = state_30051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30051__$1,inst_30049);
} else {
if((state_val_30052 === (12))){
var inst_30037 = (state_30051[(2)]);
var state_30051__$1 = state_30051;
var statearr_30072_30102 = state_30051__$1;
(statearr_30072_30102[(2)] = inst_30037);

(statearr_30072_30102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (2))){
var state_30051__$1 = state_30051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30051__$1,(4),in$);
} else {
if((state_val_30052 === (23))){
var inst_30045 = (state_30051[(2)]);
var state_30051__$1 = state_30051;
var statearr_30073_30103 = state_30051__$1;
(statearr_30073_30103[(2)] = inst_30045);

(statearr_30073_30103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (19))){
var inst_30032 = (state_30051[(2)]);
var state_30051__$1 = state_30051;
var statearr_30074_30104 = state_30051__$1;
(statearr_30074_30104[(2)] = inst_30032);

(statearr_30074_30104[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (11))){
var inst_30017 = (state_30051[(7)]);
var inst_30003 = (state_30051[(12)]);
var inst_30017__$1 = cljs.core.seq.call(null,inst_30003);
var state_30051__$1 = (function (){var statearr_30075 = state_30051;
(statearr_30075[(7)] = inst_30017__$1);

return statearr_30075;
})();
if(inst_30017__$1){
var statearr_30076_30105 = state_30051__$1;
(statearr_30076_30105[(1)] = (14));

} else {
var statearr_30077_30106 = state_30051__$1;
(statearr_30077_30106[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (9))){
var inst_30039 = (state_30051[(2)]);
var inst_30040 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30051__$1 = (function (){var statearr_30078 = state_30051;
(statearr_30078[(15)] = inst_30039);

return statearr_30078;
})();
if(cljs.core.truth_(inst_30040)){
var statearr_30079_30107 = state_30051__$1;
(statearr_30079_30107[(1)] = (21));

} else {
var statearr_30080_30108 = state_30051__$1;
(statearr_30080_30108[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (5))){
var inst_29995 = cljs.core.async.close_BANG_.call(null,out);
var state_30051__$1 = state_30051;
var statearr_30081_30109 = state_30051__$1;
(statearr_30081_30109[(2)] = inst_29995);

(statearr_30081_30109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (14))){
var inst_30017 = (state_30051[(7)]);
var inst_30019 = cljs.core.chunked_seq_QMARK_.call(null,inst_30017);
var state_30051__$1 = state_30051;
if(inst_30019){
var statearr_30082_30110 = state_30051__$1;
(statearr_30082_30110[(1)] = (17));

} else {
var statearr_30083_30111 = state_30051__$1;
(statearr_30083_30111[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (16))){
var inst_30035 = (state_30051[(2)]);
var state_30051__$1 = state_30051;
var statearr_30084_30112 = state_30051__$1;
(statearr_30084_30112[(2)] = inst_30035);

(statearr_30084_30112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (10))){
var inst_30004 = (state_30051[(8)]);
var inst_30006 = (state_30051[(10)]);
var inst_30011 = cljs.core._nth.call(null,inst_30004,inst_30006);
var state_30051__$1 = state_30051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30051__$1,(13),out,inst_30011);
} else {
if((state_val_30052 === (18))){
var inst_30017 = (state_30051[(7)]);
var inst_30026 = cljs.core.first.call(null,inst_30017);
var state_30051__$1 = state_30051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30051__$1,(20),out,inst_30026);
} else {
if((state_val_30052 === (8))){
var inst_30006 = (state_30051[(10)]);
var inst_30005 = (state_30051[(11)]);
var inst_30008 = (inst_30006 < inst_30005);
var inst_30009 = inst_30008;
var state_30051__$1 = state_30051;
if(cljs.core.truth_(inst_30009)){
var statearr_30085_30113 = state_30051__$1;
(statearr_30085_30113[(1)] = (10));

} else {
var statearr_30086_30114 = state_30051__$1;
(statearr_30086_30114[(1)] = (11));

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
});})(c__28435__auto__))
;
return ((function (switch__28340__auto__,c__28435__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28341__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28341__auto____0 = (function (){
var statearr_30087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30087[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28341__auto__);

(statearr_30087[(1)] = (1));

return statearr_30087;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28341__auto____1 = (function (state_30051){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_30051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e30088){if((e30088 instanceof Object)){
var ex__28344__auto__ = e30088;
var statearr_30089_30115 = state_30051;
(statearr_30089_30115[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30116 = state_30051;
state_30051 = G__30116;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28341__auto__ = function(state_30051){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28341__auto____1.call(this,state_30051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28341__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28341__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto__))
})();
var state__28437__auto__ = (function (){var statearr_30090 = f__28436__auto__.call(null);
(statearr_30090[(6)] = c__28435__auto__);

return statearr_30090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto__))
);

return c__28435__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30118 = arguments.length;
switch (G__30118) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30121 = arguments.length;
switch (G__30121) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30124 = arguments.length;
switch (G__30124) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28435__auto___30171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___30171,out){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___30171,out){
return (function (state_30148){
var state_val_30149 = (state_30148[(1)]);
if((state_val_30149 === (7))){
var inst_30143 = (state_30148[(2)]);
var state_30148__$1 = state_30148;
var statearr_30150_30172 = state_30148__$1;
(statearr_30150_30172[(2)] = inst_30143);

(statearr_30150_30172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (1))){
var inst_30125 = null;
var state_30148__$1 = (function (){var statearr_30151 = state_30148;
(statearr_30151[(7)] = inst_30125);

return statearr_30151;
})();
var statearr_30152_30173 = state_30148__$1;
(statearr_30152_30173[(2)] = null);

(statearr_30152_30173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (4))){
var inst_30128 = (state_30148[(8)]);
var inst_30128__$1 = (state_30148[(2)]);
var inst_30129 = (inst_30128__$1 == null);
var inst_30130 = cljs.core.not.call(null,inst_30129);
var state_30148__$1 = (function (){var statearr_30153 = state_30148;
(statearr_30153[(8)] = inst_30128__$1);

return statearr_30153;
})();
if(inst_30130){
var statearr_30154_30174 = state_30148__$1;
(statearr_30154_30174[(1)] = (5));

} else {
var statearr_30155_30175 = state_30148__$1;
(statearr_30155_30175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (6))){
var state_30148__$1 = state_30148;
var statearr_30156_30176 = state_30148__$1;
(statearr_30156_30176[(2)] = null);

(statearr_30156_30176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (3))){
var inst_30145 = (state_30148[(2)]);
var inst_30146 = cljs.core.async.close_BANG_.call(null,out);
var state_30148__$1 = (function (){var statearr_30157 = state_30148;
(statearr_30157[(9)] = inst_30145);

return statearr_30157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30148__$1,inst_30146);
} else {
if((state_val_30149 === (2))){
var state_30148__$1 = state_30148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30148__$1,(4),ch);
} else {
if((state_val_30149 === (11))){
var inst_30128 = (state_30148[(8)]);
var inst_30137 = (state_30148[(2)]);
var inst_30125 = inst_30128;
var state_30148__$1 = (function (){var statearr_30158 = state_30148;
(statearr_30158[(10)] = inst_30137);

(statearr_30158[(7)] = inst_30125);

return statearr_30158;
})();
var statearr_30159_30177 = state_30148__$1;
(statearr_30159_30177[(2)] = null);

(statearr_30159_30177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (9))){
var inst_30128 = (state_30148[(8)]);
var state_30148__$1 = state_30148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30148__$1,(11),out,inst_30128);
} else {
if((state_val_30149 === (5))){
var inst_30128 = (state_30148[(8)]);
var inst_30125 = (state_30148[(7)]);
var inst_30132 = cljs.core._EQ_.call(null,inst_30128,inst_30125);
var state_30148__$1 = state_30148;
if(inst_30132){
var statearr_30161_30178 = state_30148__$1;
(statearr_30161_30178[(1)] = (8));

} else {
var statearr_30162_30179 = state_30148__$1;
(statearr_30162_30179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (10))){
var inst_30140 = (state_30148[(2)]);
var state_30148__$1 = state_30148;
var statearr_30163_30180 = state_30148__$1;
(statearr_30163_30180[(2)] = inst_30140);

(statearr_30163_30180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (8))){
var inst_30125 = (state_30148[(7)]);
var tmp30160 = inst_30125;
var inst_30125__$1 = tmp30160;
var state_30148__$1 = (function (){var statearr_30164 = state_30148;
(statearr_30164[(7)] = inst_30125__$1);

return statearr_30164;
})();
var statearr_30165_30181 = state_30148__$1;
(statearr_30165_30181[(2)] = null);

(statearr_30165_30181[(1)] = (2));


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
});})(c__28435__auto___30171,out))
;
return ((function (switch__28340__auto__,c__28435__auto___30171,out){
return (function() {
var cljs$core$async$state_machine__28341__auto__ = null;
var cljs$core$async$state_machine__28341__auto____0 = (function (){
var statearr_30166 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30166[(0)] = cljs$core$async$state_machine__28341__auto__);

(statearr_30166[(1)] = (1));

return statearr_30166;
});
var cljs$core$async$state_machine__28341__auto____1 = (function (state_30148){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_30148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e30167){if((e30167 instanceof Object)){
var ex__28344__auto__ = e30167;
var statearr_30168_30182 = state_30148;
(statearr_30168_30182[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30183 = state_30148;
state_30148 = G__30183;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$state_machine__28341__auto__ = function(state_30148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28341__auto____1.call(this,state_30148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28341__auto____0;
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28341__auto____1;
return cljs$core$async$state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___30171,out))
})();
var state__28437__auto__ = (function (){var statearr_30169 = f__28436__auto__.call(null);
(statearr_30169[(6)] = c__28435__auto___30171);

return statearr_30169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___30171,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30185 = arguments.length;
switch (G__30185) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28435__auto___30251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___30251,out){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___30251,out){
return (function (state_30223){
var state_val_30224 = (state_30223[(1)]);
if((state_val_30224 === (7))){
var inst_30219 = (state_30223[(2)]);
var state_30223__$1 = state_30223;
var statearr_30225_30252 = state_30223__$1;
(statearr_30225_30252[(2)] = inst_30219);

(statearr_30225_30252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30224 === (1))){
var inst_30186 = (new Array(n));
var inst_30187 = inst_30186;
var inst_30188 = (0);
var state_30223__$1 = (function (){var statearr_30226 = state_30223;
(statearr_30226[(7)] = inst_30187);

(statearr_30226[(8)] = inst_30188);

return statearr_30226;
})();
var statearr_30227_30253 = state_30223__$1;
(statearr_30227_30253[(2)] = null);

(statearr_30227_30253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30224 === (4))){
var inst_30191 = (state_30223[(9)]);
var inst_30191__$1 = (state_30223[(2)]);
var inst_30192 = (inst_30191__$1 == null);
var inst_30193 = cljs.core.not.call(null,inst_30192);
var state_30223__$1 = (function (){var statearr_30228 = state_30223;
(statearr_30228[(9)] = inst_30191__$1);

return statearr_30228;
})();
if(inst_30193){
var statearr_30229_30254 = state_30223__$1;
(statearr_30229_30254[(1)] = (5));

} else {
var statearr_30230_30255 = state_30223__$1;
(statearr_30230_30255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30224 === (15))){
var inst_30213 = (state_30223[(2)]);
var state_30223__$1 = state_30223;
var statearr_30231_30256 = state_30223__$1;
(statearr_30231_30256[(2)] = inst_30213);

(statearr_30231_30256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30224 === (13))){
var state_30223__$1 = state_30223;
var statearr_30232_30257 = state_30223__$1;
(statearr_30232_30257[(2)] = null);

(statearr_30232_30257[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30224 === (6))){
var inst_30188 = (state_30223[(8)]);
var inst_30209 = (inst_30188 > (0));
var state_30223__$1 = state_30223;
if(cljs.core.truth_(inst_30209)){
var statearr_30233_30258 = state_30223__$1;
(statearr_30233_30258[(1)] = (12));

} else {
var statearr_30234_30259 = state_30223__$1;
(statearr_30234_30259[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30224 === (3))){
var inst_30221 = (state_30223[(2)]);
var state_30223__$1 = state_30223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30223__$1,inst_30221);
} else {
if((state_val_30224 === (12))){
var inst_30187 = (state_30223[(7)]);
var inst_30211 = cljs.core.vec.call(null,inst_30187);
var state_30223__$1 = state_30223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30223__$1,(15),out,inst_30211);
} else {
if((state_val_30224 === (2))){
var state_30223__$1 = state_30223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30223__$1,(4),ch);
} else {
if((state_val_30224 === (11))){
var inst_30203 = (state_30223[(2)]);
var inst_30204 = (new Array(n));
var inst_30187 = inst_30204;
var inst_30188 = (0);
var state_30223__$1 = (function (){var statearr_30235 = state_30223;
(statearr_30235[(7)] = inst_30187);

(statearr_30235[(8)] = inst_30188);

(statearr_30235[(10)] = inst_30203);

return statearr_30235;
})();
var statearr_30236_30260 = state_30223__$1;
(statearr_30236_30260[(2)] = null);

(statearr_30236_30260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30224 === (9))){
var inst_30187 = (state_30223[(7)]);
var inst_30201 = cljs.core.vec.call(null,inst_30187);
var state_30223__$1 = state_30223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30223__$1,(11),out,inst_30201);
} else {
if((state_val_30224 === (5))){
var inst_30191 = (state_30223[(9)]);
var inst_30187 = (state_30223[(7)]);
var inst_30188 = (state_30223[(8)]);
var inst_30196 = (state_30223[(11)]);
var inst_30195 = (inst_30187[inst_30188] = inst_30191);
var inst_30196__$1 = (inst_30188 + (1));
var inst_30197 = (inst_30196__$1 < n);
var state_30223__$1 = (function (){var statearr_30237 = state_30223;
(statearr_30237[(11)] = inst_30196__$1);

(statearr_30237[(12)] = inst_30195);

return statearr_30237;
})();
if(cljs.core.truth_(inst_30197)){
var statearr_30238_30261 = state_30223__$1;
(statearr_30238_30261[(1)] = (8));

} else {
var statearr_30239_30262 = state_30223__$1;
(statearr_30239_30262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30224 === (14))){
var inst_30216 = (state_30223[(2)]);
var inst_30217 = cljs.core.async.close_BANG_.call(null,out);
var state_30223__$1 = (function (){var statearr_30241 = state_30223;
(statearr_30241[(13)] = inst_30216);

return statearr_30241;
})();
var statearr_30242_30263 = state_30223__$1;
(statearr_30242_30263[(2)] = inst_30217);

(statearr_30242_30263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30224 === (10))){
var inst_30207 = (state_30223[(2)]);
var state_30223__$1 = state_30223;
var statearr_30243_30264 = state_30223__$1;
(statearr_30243_30264[(2)] = inst_30207);

(statearr_30243_30264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30224 === (8))){
var inst_30187 = (state_30223[(7)]);
var inst_30196 = (state_30223[(11)]);
var tmp30240 = inst_30187;
var inst_30187__$1 = tmp30240;
var inst_30188 = inst_30196;
var state_30223__$1 = (function (){var statearr_30244 = state_30223;
(statearr_30244[(7)] = inst_30187__$1);

(statearr_30244[(8)] = inst_30188);

return statearr_30244;
})();
var statearr_30245_30265 = state_30223__$1;
(statearr_30245_30265[(2)] = null);

(statearr_30245_30265[(1)] = (2));


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
});})(c__28435__auto___30251,out))
;
return ((function (switch__28340__auto__,c__28435__auto___30251,out){
return (function() {
var cljs$core$async$state_machine__28341__auto__ = null;
var cljs$core$async$state_machine__28341__auto____0 = (function (){
var statearr_30246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30246[(0)] = cljs$core$async$state_machine__28341__auto__);

(statearr_30246[(1)] = (1));

return statearr_30246;
});
var cljs$core$async$state_machine__28341__auto____1 = (function (state_30223){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_30223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e30247){if((e30247 instanceof Object)){
var ex__28344__auto__ = e30247;
var statearr_30248_30266 = state_30223;
(statearr_30248_30266[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30267 = state_30223;
state_30223 = G__30267;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$state_machine__28341__auto__ = function(state_30223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28341__auto____1.call(this,state_30223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28341__auto____0;
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28341__auto____1;
return cljs$core$async$state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___30251,out))
})();
var state__28437__auto__ = (function (){var statearr_30249 = f__28436__auto__.call(null);
(statearr_30249[(6)] = c__28435__auto___30251);

return statearr_30249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___30251,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30269 = arguments.length;
switch (G__30269) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28435__auto___30339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28435__auto___30339,out){
return (function (){
var f__28436__auto__ = (function (){var switch__28340__auto__ = ((function (c__28435__auto___30339,out){
return (function (state_30311){
var state_val_30312 = (state_30311[(1)]);
if((state_val_30312 === (7))){
var inst_30307 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
var statearr_30313_30340 = state_30311__$1;
(statearr_30313_30340[(2)] = inst_30307);

(statearr_30313_30340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (1))){
var inst_30270 = [];
var inst_30271 = inst_30270;
var inst_30272 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30311__$1 = (function (){var statearr_30314 = state_30311;
(statearr_30314[(7)] = inst_30272);

(statearr_30314[(8)] = inst_30271);

return statearr_30314;
})();
var statearr_30315_30341 = state_30311__$1;
(statearr_30315_30341[(2)] = null);

(statearr_30315_30341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (4))){
var inst_30275 = (state_30311[(9)]);
var inst_30275__$1 = (state_30311[(2)]);
var inst_30276 = (inst_30275__$1 == null);
var inst_30277 = cljs.core.not.call(null,inst_30276);
var state_30311__$1 = (function (){var statearr_30316 = state_30311;
(statearr_30316[(9)] = inst_30275__$1);

return statearr_30316;
})();
if(inst_30277){
var statearr_30317_30342 = state_30311__$1;
(statearr_30317_30342[(1)] = (5));

} else {
var statearr_30318_30343 = state_30311__$1;
(statearr_30318_30343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (15))){
var inst_30301 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
var statearr_30319_30344 = state_30311__$1;
(statearr_30319_30344[(2)] = inst_30301);

(statearr_30319_30344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (13))){
var state_30311__$1 = state_30311;
var statearr_30320_30345 = state_30311__$1;
(statearr_30320_30345[(2)] = null);

(statearr_30320_30345[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (6))){
var inst_30271 = (state_30311[(8)]);
var inst_30296 = inst_30271.length;
var inst_30297 = (inst_30296 > (0));
var state_30311__$1 = state_30311;
if(cljs.core.truth_(inst_30297)){
var statearr_30321_30346 = state_30311__$1;
(statearr_30321_30346[(1)] = (12));

} else {
var statearr_30322_30347 = state_30311__$1;
(statearr_30322_30347[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (3))){
var inst_30309 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30311__$1,inst_30309);
} else {
if((state_val_30312 === (12))){
var inst_30271 = (state_30311[(8)]);
var inst_30299 = cljs.core.vec.call(null,inst_30271);
var state_30311__$1 = state_30311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30311__$1,(15),out,inst_30299);
} else {
if((state_val_30312 === (2))){
var state_30311__$1 = state_30311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30311__$1,(4),ch);
} else {
if((state_val_30312 === (11))){
var inst_30279 = (state_30311[(10)]);
var inst_30275 = (state_30311[(9)]);
var inst_30289 = (state_30311[(2)]);
var inst_30290 = [];
var inst_30291 = inst_30290.push(inst_30275);
var inst_30271 = inst_30290;
var inst_30272 = inst_30279;
var state_30311__$1 = (function (){var statearr_30323 = state_30311;
(statearr_30323[(7)] = inst_30272);

(statearr_30323[(8)] = inst_30271);

(statearr_30323[(11)] = inst_30289);

(statearr_30323[(12)] = inst_30291);

return statearr_30323;
})();
var statearr_30324_30348 = state_30311__$1;
(statearr_30324_30348[(2)] = null);

(statearr_30324_30348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (9))){
var inst_30271 = (state_30311[(8)]);
var inst_30287 = cljs.core.vec.call(null,inst_30271);
var state_30311__$1 = state_30311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30311__$1,(11),out,inst_30287);
} else {
if((state_val_30312 === (5))){
var inst_30279 = (state_30311[(10)]);
var inst_30272 = (state_30311[(7)]);
var inst_30275 = (state_30311[(9)]);
var inst_30279__$1 = f.call(null,inst_30275);
var inst_30280 = cljs.core._EQ_.call(null,inst_30279__$1,inst_30272);
var inst_30281 = cljs.core.keyword_identical_QMARK_.call(null,inst_30272,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30282 = ((inst_30280) || (inst_30281));
var state_30311__$1 = (function (){var statearr_30325 = state_30311;
(statearr_30325[(10)] = inst_30279__$1);

return statearr_30325;
})();
if(cljs.core.truth_(inst_30282)){
var statearr_30326_30349 = state_30311__$1;
(statearr_30326_30349[(1)] = (8));

} else {
var statearr_30327_30350 = state_30311__$1;
(statearr_30327_30350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (14))){
var inst_30304 = (state_30311[(2)]);
var inst_30305 = cljs.core.async.close_BANG_.call(null,out);
var state_30311__$1 = (function (){var statearr_30329 = state_30311;
(statearr_30329[(13)] = inst_30304);

return statearr_30329;
})();
var statearr_30330_30351 = state_30311__$1;
(statearr_30330_30351[(2)] = inst_30305);

(statearr_30330_30351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (10))){
var inst_30294 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
var statearr_30331_30352 = state_30311__$1;
(statearr_30331_30352[(2)] = inst_30294);

(statearr_30331_30352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (8))){
var inst_30279 = (state_30311[(10)]);
var inst_30275 = (state_30311[(9)]);
var inst_30271 = (state_30311[(8)]);
var inst_30284 = inst_30271.push(inst_30275);
var tmp30328 = inst_30271;
var inst_30271__$1 = tmp30328;
var inst_30272 = inst_30279;
var state_30311__$1 = (function (){var statearr_30332 = state_30311;
(statearr_30332[(7)] = inst_30272);

(statearr_30332[(8)] = inst_30271__$1);

(statearr_30332[(14)] = inst_30284);

return statearr_30332;
})();
var statearr_30333_30353 = state_30311__$1;
(statearr_30333_30353[(2)] = null);

(statearr_30333_30353[(1)] = (2));


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
});})(c__28435__auto___30339,out))
;
return ((function (switch__28340__auto__,c__28435__auto___30339,out){
return (function() {
var cljs$core$async$state_machine__28341__auto__ = null;
var cljs$core$async$state_machine__28341__auto____0 = (function (){
var statearr_30334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30334[(0)] = cljs$core$async$state_machine__28341__auto__);

(statearr_30334[(1)] = (1));

return statearr_30334;
});
var cljs$core$async$state_machine__28341__auto____1 = (function (state_30311){
while(true){
var ret_value__28342__auto__ = (function (){try{while(true){
var result__28343__auto__ = switch__28340__auto__.call(null,state_30311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28343__auto__;
}
break;
}
}catch (e30335){if((e30335 instanceof Object)){
var ex__28344__auto__ = e30335;
var statearr_30336_30354 = state_30311;
(statearr_30336_30354[(5)] = ex__28344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30355 = state_30311;
state_30311 = G__30355;
continue;
} else {
return ret_value__28342__auto__;
}
break;
}
});
cljs$core$async$state_machine__28341__auto__ = function(state_30311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28341__auto____1.call(this,state_30311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28341__auto____0;
cljs$core$async$state_machine__28341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28341__auto____1;
return cljs$core$async$state_machine__28341__auto__;
})()
;})(switch__28340__auto__,c__28435__auto___30339,out))
})();
var state__28437__auto__ = (function (){var statearr_30337 = f__28436__auto__.call(null);
(statearr_30337[(6)] = c__28435__auto___30339);

return statearr_30337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28437__auto__);
});})(c__28435__auto___30339,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1544906675140
