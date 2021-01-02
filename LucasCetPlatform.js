(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		$elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}


var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}


// DECODER

var _File_decoder = _Json_decodePrim(function(value) {
	// NOTE: checks if `File` exists in case this is run on node
	return (typeof File !== 'undefined' && value instanceof File)
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FILE', value);
});


// METADATA

function _File_name(file) { return file.name; }
function _File_mime(file) { return file.type; }
function _File_size(file) { return file.size; }

function _File_lastModified(file)
{
	return $elm$time$Time$millisToPosix(file.lastModified);
}


// DOWNLOAD

var _File_downloadNode;

function _File_getDownloadNode()
{
	return _File_downloadNode || (_File_downloadNode = document.createElement('a'));
}

var _File_download = F3(function(name, mime, content)
{
	return _Scheduler_binding(function(callback)
	{
		var blob = new Blob([content], {type: mime});

		// for IE10+
		if (navigator.msSaveOrOpenBlob)
		{
			navigator.msSaveOrOpenBlob(blob, name);
			return;
		}

		// for HTML5
		var node = _File_getDownloadNode();
		var objectUrl = URL.createObjectURL(blob);
		node.href = objectUrl;
		node.download = name;
		_File_click(node);
		URL.revokeObjectURL(objectUrl);
	});
});

function _File_downloadUrl(href)
{
	return _Scheduler_binding(function(callback)
	{
		var node = _File_getDownloadNode();
		node.href = href;
		node.download = '';
		node.origin === location.origin || (node.target = '_blank');
		_File_click(node);
	});
}


// IE COMPATIBILITY

function _File_makeBytesSafeForInternetExplorer(bytes)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/10
	// all other browsers can just run `new Blob([bytes])` directly with no problem
	//
	return new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}

function _File_click(node)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/11
	// all other browsers have MouseEvent and do not need this conditional stuff
	//
	if (typeof MouseEvent === 'function')
	{
		node.dispatchEvent(new MouseEvent('click'));
	}
	else
	{
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		document.body.appendChild(node);
		node.dispatchEvent(event);
		document.body.removeChild(node);
	}
}


// UPLOAD

var _File_node;

function _File_uploadOne(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			callback(_Scheduler_succeed(event.target.files[0]));
		});
		_File_click(_File_node);
	});
}

function _File_uploadOneOrMore(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.multiple = true;
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			var elmFiles = _List_fromArray(event.target.files);
			callback(_Scheduler_succeed(_Utils_Tuple2(elmFiles.a, elmFiles.b)));
		});
		_File_click(_File_node);
	});
}


// CONTENT

function _File_toString(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsText(blob);
		return function() { reader.abort(); };
	});
}

function _File_toBytes(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(new DataView(reader.result)));
		});
		reader.readAsArrayBuffer(blob);
		return function() { reader.abort(); };
	});
}

function _File_toUrl(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsDataURL(blob);
		return function() { reader.abort(); };
	});
}

var $author$project$LucasCetPlatform$ChangeUrl = function (a) {
	return {$: 'ChangeUrl', a: a};
};
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $author$project$LucasCetPlatform$RequestUrl = function (a) {
	return {$: 'RequestUrl', a: a};
};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$application = _Browser_application;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$LucasCetPlatform$ActivateApplication = function (a) {
	return {$: 'ActivateApplication', a: a};
};
var $author$project$LucasCetPlatform$AppMenuHandler = function (a) {
	return {$: 'AppMenuHandler', a: a};
};
var $author$project$LucasCetPlatform$AppSubstancePicked = function (a) {
	return {$: 'AppSubstancePicked', a: a};
};
var $author$project$LucasCetPlatform$CancelSelection = F2(
	function (a, b) {
		return {$: 'CancelSelection', a: a, b: b};
	});
var $author$project$LucasCetPlatform$CleanDico = {$: 'CleanDico'};
var $author$project$LucasCetPlatform$Closit = {$: 'Closit'};
var $author$project$LucasCetPlatform$ConfirmMessage = function (a) {
	return {$: 'ConfirmMessage', a: a};
};
var $author$project$LucasCetPlatform$ContainerPicker = F2(
	function (a, b) {
		return {$: 'ContainerPicker', a: a, b: b};
	});
var $author$project$LucasCetPlatform$CreerMotrice = {$: 'CreerMotrice'};
var $author$project$LucasCetPlatform$CreerNouvelleApplication = function (a) {
	return {$: 'CreerNouvelleApplication', a: a};
};
var $author$project$LucasCetPlatform$CreerPotentielle = {$: 'CreerPotentielle'};
var $author$project$LucasCetPlatform$CreerRelation = {$: 'CreerRelation'};
var $author$project$LucasCetPlatform$DeploySelectedSubstance = function (a) {
	return {$: 'DeploySelectedSubstance', a: a};
};
var $author$project$LucasCetPlatform$EditApplication = F2(
	function (a, b) {
		return {$: 'EditApplication', a: a, b: b};
	});
var $author$project$LucasCetPlatform$EnregistrerSubstance = {$: 'EnregistrerSubstance'};
var $author$project$LucasCetPlatform$ImagesPicked = function (a) {
	return {$: 'ImagesPicked', a: a};
};
var $author$project$LucasCetPlatform$InitialiserApplication = function (a) {
	return {$: 'InitialiserApplication', a: a};
};
var $author$project$LucasCetPlatform$LoadNextImagesSet = {$: 'LoadNextImagesSet'};
var $author$project$LucasCetPlatform$LoadNextSubstanceSet = {$: 'LoadNextSubstanceSet'};
var $author$project$LucasCetPlatform$LoadNextVideosSet = {$: 'LoadNextVideosSet'};
var $author$project$LucasCetPlatform$LoadPreviousImagesSet = {$: 'LoadPreviousImagesSet'};
var $author$project$LucasCetPlatform$LoadPreviousSubstanceSet = {$: 'LoadPreviousSubstanceSet'};
var $author$project$LucasCetPlatform$LoadPreviousVideosSet = {$: 'LoadPreviousVideosSet'};
var $author$project$LucasCetPlatform$LoginAndGetUser = function (a) {
	return {$: 'LoginAndGetUser', a: a};
};
var $author$project$LucasCetPlatform$LoginDisplay = {$: 'LoginDisplay'};
var $author$project$LucasCetPlatform$MessageAcquisition = F2(
	function (a, b) {
		return {$: 'MessageAcquisition', a: a, b: b};
	});
var $author$project$LucasCetPlatform$None = {$: 'None'};
var $author$project$LucasCetPlatform$RecordInFile = {$: 'RecordInFile'};
var $author$project$LucasCetPlatform$Reseteur = {$: 'Reseteur'};
var $author$project$LucasCetPlatform$SelectImage = {$: 'SelectImage'};
var $author$project$LucasCetPlatform$SelectSequence = F2(
	function (a, b) {
		return {$: 'SelectSequence', a: a, b: b};
	});
var $author$project$LucasCetPlatform$SelectSubstance = {$: 'SelectSubstance'};
var $author$project$LucasCetPlatform$SelectVideo = {$: 'SelectVideo'};
var $author$project$LucasCetPlatform$SenderOfData = F2(
	function (a, b) {
		return {$: 'SenderOfData', a: a, b: b};
	});
var $author$project$LucasCetPlatform$SetModTitle = function (a) {
	return {$: 'SetModTitle', a: a};
};
var $author$project$LucasCetPlatform$SetTitle = function (a) {
	return {$: 'SetTitle', a: a};
};
var $author$project$LucasCetPlatform$ShareAllUserChecked = function (a) {
	return {$: 'ShareAllUserChecked', a: a};
};
var $author$project$LucasCetPlatform$SubstanceChosen = function (a) {
	return {$: 'SubstanceChosen', a: a};
};
var $author$project$LucasCetPlatform$SubstancePicked = function (a) {
	return {$: 'SubstancePicked', a: a};
};
var $author$project$LucasCetPlatform$SubstancePicker = F2(
	function (a, b) {
		return {$: 'SubstancePicker', a: a, b: b};
	});
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $author$project$LucasCetPlatform$VideosPicked = function (a) {
	return {$: 'VideosPicked', a: a};
};
var $author$project$LucasCetPlatform$ZoomCancel = {$: 'ZoomCancel'};
var $author$project$LucasCetPlatform$ZoomRecord = {$: 'ZoomRecord'};
var $author$project$LucasCetPlatform$UserInfo = F4(
	function (userId, login, uploadImageId, uploadVideoId) {
		return {login: login, uploadImageId: uploadImageId, uploadVideoId: uploadVideoId, userId: userId};
	});
var $elm$json$Json$Decode$map4 = _Json_map4;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$LucasCetPlatform$decodeUserId = A5(
	$elm$json$Json$Decode$map4,
	$author$project$LucasCetPlatform$UserInfo,
	A2($elm$json$Json$Decode$field, 'userId', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'login', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'uploadImageId', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'uploadVideoId', $elm$json$Json$Decode$string));
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var $elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var $elm$http$Http$Timeout_ = {$: 'Timeout_'};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 'BadBody', a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 'BadUrl_':
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 'Timeout_':
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 'NetworkError_':
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 'BadStatus_':
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.statusCode));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.tracker;
							if (_v4.$ === 'Nothing') {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					headers: r.headers,
					method: r.method,
					timeout: r.timeout,
					tracker: r.tracker,
					url: r.url
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{allowCookiesFromOtherDomains: false, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var $elm$http$Http$get = function (r) {
	return $elm$http$Http$request(
		{body: $elm$http$Http$emptyBody, expect: r.expect, headers: _List_Nil, method: 'GET', timeout: $elm$core$Maybe$Nothing, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $author$project$ApplicationCreator$Absent = {$: 'Absent'};
var $author$project$ApplicationCreator$initApp = F7(
	function (createApplication, chooseImg, declareTitle, chooseSequence, userIdValue, editApplication, appStarter) {
		return {
			activeApplicationId: '',
			activeModule: $author$project$ApplicationCreator$Absent,
			appState: {activeApplication: $elm$core$Maybe$Nothing, remainingApplication: $elm$core$Maybe$Nothing},
			createNewApp: createApplication,
			editNewApp: editApplication,
			enterTitle: declareTitle,
			initializeApp: appStarter,
			selectImage: chooseImg,
			selectSequence: chooseSequence,
			title: $elm$core$Maybe$Nothing,
			userId: userIdValue
		};
	});
var $author$project$Graphic_Element$Vide = {$: 'Vide'};
var $author$project$Graphic_Element$initElement = function (createPotMsg) {
	return function (createMotMsg) {
		return function (createRelMsg) {
			return function (chooseImg) {
				return function (chooseVid) {
					return function (setTitle) {
						return function (chooseSubstance) {
							return function (deploySelectedSubstance) {
								return function (sendSubstance) {
									return function (userIdValue) {
										return {activeCanvas: $author$project$Graphic_Element$Vide, createMotrice: createMotMsg, createPotential: createPotMsg, createRelation: createRelMsg, deploySubstance: deploySelectedSubstance, enterTitle: setTitle, recordSubstance: sendSubstance, selectImage: chooseImg, selectSubstance: chooseSubstance, selectVideo: chooseVid, userId: userIdValue};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $author$project$Graphic_Downloader$initGraphic = F5(
	function (userInfo, graphicInfo, clickAction, nextPage, prevPage) {
		return {chooseNextPage: $elm$core$Maybe$Nothing, choosePreviousPage: $elm$core$Maybe$Nothing, currentPage: 0, filePrefix: '', graphicPages: $elm$core$Maybe$Nothing, graphicType: graphicInfo, nextMsg: nextPage, prevMsg: prevPage, selectGraphicAction: clickAction, suiteToken: $elm$core$Maybe$Nothing, userId: userInfo};
	});
var $author$project$ApplicationPlayer$NoStatus = {$: 'NoStatus'};
var $author$project$ApplicationPlayer$initPlayer = function (activator) {
	return function (userData) {
		return function (messenger) {
			return function (cancelMsg) {
				return function (gesteSender) {
					return function (dataSender) {
						return function (subPicker) {
							return function (zoomKiller) {
								return function (elemPicker) {
									return function (resetor) {
										return function (fermeur) {
											return function (recorder) {
												return function (saveMime) {
													return function (appMenuEvent) {
														return function (allSharedSelected) {
															return {activateApp: activator, activeAppList: $elm$core$Maybe$Nothing, appMenu: $elm$core$Maybe$Nothing, cancelSelection: cancelMsg, cancelZoom: zoomKiller, chosenApp: $elm$core$Maybe$Nothing, dataToSend: dataSender, deactivate: resetor, deployAppMenu: appMenuEvent, deployOrigin: $elm$core$Maybe$Nothing, deployedContainer: $elm$core$Maybe$Nothing, deployedSubstance: $elm$core$Maybe$Nothing, deploymentList: $elm$core$Maybe$Nothing, interfaceList: $elm$core$Maybe$Nothing, listSubDeployed: $elm$core$Maybe$Nothing, originElement: $elm$core$Maybe$Nothing, record2File: false, recordChosen: recorder, recordZoom: false, selectedAppId: '', selectedElementMenu: $elm$core$Maybe$Nothing, selectedSubstanceMenu: $elm$core$Maybe$Nothing, sendElemSelected: elemPicker, sendGeste: gesteSender, sendMsgAcquisition: messenger, sendSubSelected: subPicker, shareAllUserChecked: allSharedSelected, shareState: $author$project$ApplicationPlayer$NoStatus, startSavingMime: saveMime, subContainerList: $elm$core$Maybe$Nothing, subInactiveList: $elm$core$Maybe$Nothing, subInterList: $elm$core$Maybe$Nothing, unDeploy: fermeur, userId: userData, viewPortInfo: $elm$core$Maybe$Nothing, zoomedSubtance: $elm$core$Maybe$Nothing};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $author$project$SubstancePlayer$initSelectElement = F7(
	function (userIdValue, substancePicked, substanceChosen, sequencePicked, prevPage, nextPage, efface) {
		return {backendCall: '', chooseNextPage: $elm$core$Maybe$Nothing, choosePreviousPage: $elm$core$Maybe$Nothing, chosenSubstance: substanceChosen, currentPage: 0, deleteAll: efface, elementPages: $elm$core$Maybe$Nothing, nextMsg: nextPage, prevMsg: prevPage, selectAppSubstanceAction: sequencePicked, selectElementAction: substancePicked, selectedSubstanceId: '', suiteToken: $elm$core$Maybe$Nothing, userId: userIdValue};
	});
var $elm$browser$Browser$Navigation$load = _Browser_load;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var $elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 'Nothing') {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + $elm$core$String$fromInt(port_));
		}
	});
var $elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 'Nothing') {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$url$Url$toString = function (url) {
	var http = function () {
		var _v0 = url.protocol;
		if (_v0.$ === 'Http') {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.fragment,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.query,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.port_,
					_Utils_ap(http, url.host)),
				url.path)));
};
var $author$project$LucasCetPlatform$init = F3(
	function (jsData, url, key) {
		return _Utils_Tuple2(
			{
				appEditor: A7($author$project$ApplicationCreator$initApp, $author$project$LucasCetPlatform$CreerNouvelleApplication, $author$project$LucasCetPlatform$SelectImage, $author$project$LucasCetPlatform$SetModTitle, $author$project$LucasCetPlatform$SelectSequence, '0', $author$project$LucasCetPlatform$EditApplication, $author$project$LucasCetPlatform$InitialiserApplication),
				backendCall: '',
				chatMsg: $elm$core$Maybe$Nothing,
				displayMode: $author$project$LucasCetPlatform$LoginDisplay,
				dloadValue: 0,
				errorMsg: $elm$http$Http$Timeout,
				externals: $author$project$LucasCetPlatform$None,
				failFileList: _List_Nil,
				friends: $elm$core$Maybe$Nothing,
				imgChoices: A5($author$project$Graphic_Downloader$initGraphic, '0', 'image', $author$project$LucasCetPlatform$ImagesPicked, $author$project$LucasCetPlatform$LoadNextImagesSet, $author$project$LucasCetPlatform$LoadPreviousImagesSet),
				navKey: key,
				player: $author$project$ApplicationPlayer$initPlayer($author$project$LucasCetPlatform$ActivateApplication)('0')($author$project$LucasCetPlatform$MessageAcquisition)($author$project$LucasCetPlatform$CancelSelection)($author$project$LucasCetPlatform$ConfirmMessage)($author$project$LucasCetPlatform$SenderOfData)($author$project$LucasCetPlatform$SubstancePicker)($author$project$LucasCetPlatform$ZoomCancel)($author$project$LucasCetPlatform$ContainerPicker)($author$project$LucasCetPlatform$Reseteur)($author$project$LucasCetPlatform$Closit)($author$project$LucasCetPlatform$ZoomRecord)($author$project$LucasCetPlatform$RecordInFile)($author$project$LucasCetPlatform$AppMenuHandler)($author$project$LucasCetPlatform$ShareAllUserChecked),
				subChoices: A7($author$project$SubstancePlayer$initSelectElement, '0', $author$project$LucasCetPlatform$SubstancePicked, $author$project$LucasCetPlatform$SubstanceChosen, $author$project$LucasCetPlatform$AppSubstancePicked, $author$project$LucasCetPlatform$LoadPreviousSubstanceSet, $author$project$LucasCetPlatform$LoadNextSubstanceSet, $author$project$LucasCetPlatform$CleanDico),
				subEditor: $author$project$Graphic_Element$initElement($author$project$LucasCetPlatform$CreerPotentielle)($author$project$LucasCetPlatform$CreerMotrice)($author$project$LucasCetPlatform$CreerRelation)($author$project$LucasCetPlatform$SelectImage)($author$project$LucasCetPlatform$SelectVideo)($author$project$LucasCetPlatform$SetTitle)($author$project$LucasCetPlatform$SelectSubstance)($author$project$LucasCetPlatform$DeploySelectedSubstance)($author$project$LucasCetPlatform$EnregistrerSubstance)('0'),
				successFileList: _List_Nil,
				totalFileList: _List_Nil,
				uploadValue: 0,
				userInfo: jsData,
				vidChoices: A5($author$project$Graphic_Downloader$initGraphic, '0', 'video', $author$project$LucasCetPlatform$VideosPicked, $author$project$LucasCetPlatform$LoadNextVideosSet, $author$project$LucasCetPlatform$LoadPreviousVideosSet)
			},
			function () {
				var infos = jsData;
				var _v0 = url.path;
				if (_v0 === '/user') {
					return $elm$browser$Browser$Navigation$load(
						$elm$url$Url$toString(url));
				} else {
					var somethingElse = _v0;
					if (infos.$ === 'Nothing') {
						var _v2 = url.fragment;
						if (_v2.$ === 'Nothing') {
							return $elm$core$Platform$Cmd$none;
						} else {
							var frag = _v2.a;
							if (frag === '_=_') {
								return $elm$http$Http$get(
									{
										expect: A2($elm$http$Http$expectJson, $author$project$LucasCetPlatform$LoginAndGetUser, $author$project$LucasCetPlatform$decodeUserId),
										url: '/user'
									});
							} else {
								var otherwise = frag;
								return $elm$core$Platform$Cmd$none;
							}
						}
					} else {
						return A2(
							$elm$browser$Browser$Navigation$pushUrl,
							key,
							$elm$url$Url$toString(url));
					}
				}
			}());
	});
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $author$project$LucasCetPlatform$Progression = function (a) {
	return {$: 'Progression', a: a};
};
var $author$project$LucasCetPlatform$Stream = function (a) {
	return {$: 'Stream', a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$LucasCetPlatform$getStream = _Platform_incomingPort('getStream', $elm$json$Json$Decode$value);
var $elm$http$Http$track = F2(
	function (tracker, toMsg) {
		return $elm$http$Http$subscription(
			A2($elm$http$Http$MySub, tracker, toMsg));
	});
var $author$project$LucasCetPlatform$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				$author$project$LucasCetPlatform$getStream($author$project$LucasCetPlatform$Stream),
				A2($elm$http$Http$track, 'media.pdf', $author$project$LucasCetPlatform$Progression)
			]));
};
var $author$project$LucasCetPlatform$AppDetailsLoaded = function (a) {
	return {$: 'AppDetailsLoaded', a: a};
};
var $author$project$LucasCetPlatform$AppInfoListe = function (a) {
	return {$: 'AppInfoListe', a: a};
};
var $author$project$LucasCetPlatform$ApplicationModule = {$: 'ApplicationModule'};
var $author$project$LucasCetPlatform$Chat = function (a) {
	return {$: 'Chat', a: a};
};
var $author$project$LucasCetPlatform$ChatDisplay = {$: 'ChatDisplay'};
var $author$project$LucasCetPlatform$ChatMessages = {$: 'ChatMessages'};
var $author$project$LucasCetPlatform$ChatModel = function (a) {
	return {$: 'ChatModel', a: a};
};
var $author$project$LucasCetPlatform$DicoSubstance = {$: 'DicoSubstance'};
var $author$project$LucasCetPlatform$FileSuccess = function (a) {
	return {$: 'FileSuccess', a: a};
};
var $author$project$LucasCetPlatform$FileTelecharge = F2(
	function (a, b) {
		return {$: 'FileTelecharge', a: a, b: b};
	});
var $author$project$LucasCetPlatform$GotFriends = function (a) {
	return {$: 'GotFriends', a: a};
};
var $author$project$LucasCetPlatform$GotImagesList = function (a) {
	return {$: 'GotImagesList', a: a};
};
var $author$project$LucasCetPlatform$GotMail = function (a) {
	return {$: 'GotMail', a: a};
};
var $author$project$LucasCetPlatform$GotScreenSize = function (a) {
	return {$: 'GotScreenSize', a: a};
};
var $author$project$LucasCetPlatform$GotSequenceList = function (a) {
	return {$: 'GotSequenceList', a: a};
};
var $author$project$LucasCetPlatform$GotSubstanceList = function (a) {
	return {$: 'GotSubstanceList', a: a};
};
var $author$project$LucasCetPlatform$GotVideosList = function (a) {
	return {$: 'GotVideosList', a: a};
};
var $author$project$LucasCetPlatform$IconePicked = function (a) {
	return {$: 'IconePicked', a: a};
};
var $author$project$LucasCetPlatform$Model = function (userInfo) {
	return function (errorMsg) {
		return function (navKey) {
			return function (chatMsg) {
				return function (friends) {
					return function (displayMode) {
						return function (imgChoices) {
							return function (vidChoices) {
								return function (subChoices) {
									return function (subEditor) {
										return function (appEditor) {
											return function (player) {
												return function (dloadValue) {
													return function (uploadValue) {
														return function (backendCall) {
															return function (successFileList) {
																return function (failFileList) {
																	return function (totalFileList) {
																		return function (externals) {
																			return {appEditor: appEditor, backendCall: backendCall, chatMsg: chatMsg, displayMode: displayMode, dloadValue: dloadValue, errorMsg: errorMsg, externals: externals, failFileList: failFileList, friends: friends, imgChoices: imgChoices, navKey: navKey, player: player, subChoices: subChoices, subEditor: subEditor, successFileList: successFileList, totalFileList: totalFileList, uploadValue: uploadValue, userInfo: userInfo, vidChoices: vidChoices};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $author$project$ApplicationPlayer$NotShared = {$: 'NotShared'};
var $author$project$LucasCetPlatform$PlayApplication = {$: 'PlayApplication'};
var $author$project$LucasCetPlatform$SelectMedia = {$: 'SelectMedia'};
var $author$project$LucasCetPlatform$SelectNewMedia = function (a) {
	return {$: 'SelectNewMedia', a: a};
};
var $author$project$LucasCetPlatform$SubstanceDone = function (a) {
	return {$: 'SubstanceDone', a: a};
};
var $author$project$LucasCetPlatform$TableSubstance = {$: 'TableSubstance'};
var $author$project$LucasCetPlatform$UploadFile = {$: 'UploadFile'};
var $author$project$LucasCetPlatform$ViewSubstance = {$: 'ViewSubstance'};
var $elm$url$Url$Builder$toQueryPair = function (_v0) {
	var key = _v0.a;
	var value = _v0.b;
	return key + ('=' + value);
};
var $elm$url$Url$Builder$toQuery = function (parameters) {
	if (!parameters.b) {
		return '';
	} else {
		return '?' + A2(
			$elm$core$String$join,
			'&',
			A2($elm$core$List$map, $elm$url$Url$Builder$toQueryPair, parameters));
	}
};
var $elm$url$Url$Builder$absolute = F2(
	function (pathSegments, parameters) {
		return '/' + (A2($elm$core$String$join, '/', pathSegments) + $elm$url$Url$Builder$toQuery(parameters));
	});
var $author$project$ApplicationCreator$addAppState = F2(
	function (eleMsgAppEdited, listeAppInfo) {
		return _Utils_update(
			eleMsgAppEdited,
			{appState: listeAppInfo});
	});
var $author$project$ApplicationCreator$Didactique = function (a) {
	return {$: 'Didactique', a: a};
};
var $author$project$ApplicationCreator$Locataire = function (a) {
	return {$: 'Locataire', a: a};
};
var $author$project$ApplicationCreator$Proprietaire = function (a) {
	return {$: 'Proprietaire', a: a};
};
var $author$project$ApplicationCreator$addAppSubstance = F2(
	function (eleMsgAppEdited, substance) {
		var _v0 = eleMsgAppEdited.activeModule;
		switch (_v0.$) {
			case 'Absent':
				return eleMsgAppEdited;
			case 'Didactique':
				var dida = _v0.a;
				return _Utils_update(
					eleMsgAppEdited,
					{
						activeModule: $author$project$ApplicationCreator$Didactique(
							$elm$core$Maybe$Just(substance))
					});
			case 'Proprietaire':
				return _Utils_update(
					eleMsgAppEdited,
					{
						activeModule: $author$project$ApplicationCreator$Proprietaire(
							$elm$core$Maybe$Just(substance))
					});
			default:
				return _Utils_update(
					eleMsgAppEdited,
					{
						activeModule: $author$project$ApplicationCreator$Locataire(
							$elm$core$Maybe$Just(substance))
					});
		}
	});
var $author$project$ApplicationPlayer$addApplicationMenu = F3(
	function (appMsgPlayApp, appInfo, appShareStatus) {
		return _Utils_update(
			appMsgPlayApp,
			{shareState: appShareStatus});
	});
var $author$project$ApplicationPlayer$addContainer = F3(
	function (appMsgPlayApp, substanceContainer, menuList) {
		return _Utils_update(
			appMsgPlayApp,
			{
				selectedElementMenu: $elm$core$Maybe$Just(menuList),
				selectedSubstanceMenu: $elm$core$Maybe$Nothing
			});
	});
var $author$project$ApplicationPlayer$idInterface = F2(
	function (interfaceInteractive, interfaceInteractive2) {
		return _Utils_eq(interfaceInteractive.gesteAssocie.idGeste, interfaceInteractive2.gesteAssocie.idGeste);
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm_community$list_extra$List$Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			$elm$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var $elm_community$list_extra$List$Extra$setIf = F3(
	function (predicate, replacement, list) {
		return A3(
			$elm_community$list_extra$List$Extra$updateIf,
			predicate,
			$elm$core$Basics$always(replacement),
			list);
	});
var $author$project$ApplicationPlayer$addDataToGeste = F3(
	function (appMsgPlayApp, data, inputList) {
		var gesteActif = inputList.gesteAssocie;
		var _v0 = appMsgPlayApp.interfaceList;
		if (_v0.$ === 'Just') {
			var interList = _v0.a;
			var filtreCourant = inputList.gesteAssocie.filtre;
			return _Utils_update(
				appMsgPlayApp,
				{
					interfaceList: $elm$core$Maybe$Just(
						A3(
							$elm_community$list_extra$List$Extra$setIf,
							$author$project$ApplicationPlayer$idInterface(inputList),
							_Utils_update(
								inputList,
								{
									gesteAssocie: _Utils_update(
										gesteActif,
										{
											filtre: _Utils_update(
												filtreCourant,
												{
													idSubstance: $elm$core$Maybe$Just(
														_List_fromArray(
															[data]))
												})
										})
								}),
							interList))
				});
		} else {
			return appMsgPlayApp;
		}
	});
var $author$project$ApplicationPlayer$addMenu2App = F3(
	function (appMsgPlayApp, appInfo, appMenu) {
		if (appMenu.$ === 'Just') {
			var newMenu = appMenu.a;
			return _Utils_update(
				appMsgPlayApp,
				{
					appMenu: $elm$core$Maybe$Just(newMenu),
					selectedAppId: newMenu.a,
					shareState: appInfo.status
				});
		} else {
			return _Utils_update(
				appMsgPlayApp,
				{appMenu: $elm$core$Maybe$Nothing, selectedAppId: '', shareState: $author$project$ApplicationPlayer$NoStatus});
		}
	});
var $author$project$ApplicationCreator$addMetaSubstance = F3(
	function (eleMsgAppEdited, substance, pingResult) {
		var _v0 = eleMsgAppEdited.activeModule;
		switch (_v0.$) {
			case 'Absent':
				return $elm$core$Platform$Cmd$none;
			case 'Didactique':
				return $elm$core$Platform$Cmd$none;
			case 'Proprietaire':
				return $elm$core$Platform$Cmd$none;
			default:
				return $elm$core$Platform$Cmd$none;
		}
	});
var $author$project$Graphic_Downloader$addNewPage = F2(
	function (graphicList, graphicData) {
		var _v0 = graphicData.graphicPages;
		if (_v0.$ === 'Just') {
			var lesPages = _v0.a;
			return _Utils_update(
				graphicData,
				{
					filePrefix: graphicList.prefix,
					graphicPages: $elm$core$Maybe$Just(
						_Utils_ap(
							lesPages,
							_List_fromArray(
								[graphicList.graphics]))),
					suiteToken: graphicList.suiteToken
				});
		} else {
			return _Utils_update(
				graphicData,
				{
					filePrefix: graphicList.prefix,
					graphicPages: $elm$core$Maybe$Just(
						_List_fromArray(
							[graphicList.graphics])),
					suiteToken: graphicList.suiteToken
				});
		}
	});
var $author$project$SubstancePlayer$addNewPage = F2(
	function (subList, subData) {
		var _v0 = subData.elementPages;
		if (_v0.$ === 'Just') {
			var lesPages = _v0.a;
			return _Utils_update(
				subData,
				{
					elementPages: $elm$core$Maybe$Just(
						_Utils_ap(
							lesPages,
							_List_fromArray(
								[subList.substances]))),
					suiteToken: subList.suiteToken
				});
		} else {
			return _Utils_update(
				subData,
				{
					elementPages: $elm$core$Maybe$Just(
						_List_fromArray(
							[subList.substances])),
					suiteToken: subList.suiteToken
				});
		}
	});
var $author$project$ApplicationPlayer$addPlayState = F2(
	function (appMsgPlayApp, appInfoList) {
		return _Utils_update(
			appMsgPlayApp,
			{activeAppList: appInfoList});
	});
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 'Attr', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Button = {$: 'Button'};
var $mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 'Describe', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 'Unkeyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsEl = {$: 'AsEl'};
var $mdgriffith$elm_ui$Internal$Model$asEl = $mdgriffith$elm_ui$Internal$Model$AsEl;
var $mdgriffith$elm_ui$Internal$Style$classes = {above: 'a', active: 'atv', alignBottom: 'ab', alignCenterX: 'cx', alignCenterY: 'cy', alignContainerBottom: 'acb', alignContainerCenterX: 'accx', alignContainerCenterY: 'accy', alignContainerRight: 'acr', alignLeft: 'al', alignRight: 'ar', alignTop: 'at', alignedHorizontally: 'ah', alignedVertically: 'av', any: 's', behind: 'bh', below: 'b', bold: 'w7', borderDashed: 'bd', borderDotted: 'bdt', borderNone: 'bn', borderSolid: 'bs', capturePointerEvents: 'cpe', clip: 'cp', clipX: 'cpx', clipY: 'cpy', column: 'c', container: 'ctr', contentBottom: 'cb', contentCenterX: 'ccx', contentCenterY: 'ccy', contentLeft: 'cl', contentRight: 'cr', contentTop: 'ct', cursorPointer: 'cptr', cursorText: 'ctxt', focus: 'fcs', focusedWithin: 'focus-within', fullSize: 'fs', grid: 'g', hasBehind: 'hbh', heightContent: 'hc', heightExact: 'he', heightFill: 'hf', heightFillPortion: 'hfp', hover: 'hv', imageContainer: 'ic', inFront: 'fr', inputLabel: 'lbl', inputMultiline: 'iml', inputMultilineFiller: 'imlf', inputMultilineParent: 'imlp', inputMultilineWrapper: 'implw', inputText: 'it', italic: 'i', link: 'lnk', nearby: 'nb', noTextSelection: 'notxt', onLeft: 'ol', onRight: 'or', opaque: 'oq', overflowHidden: 'oh', page: 'pg', paragraph: 'p', passPointerEvents: 'ppe', root: 'ui', row: 'r', scrollbars: 'sb', scrollbarsX: 'sbx', scrollbarsY: 'sby', seButton: 'sbt', single: 'e', sizeByCapital: 'cap', spaceEvenly: 'sev', strike: 'sk', text: 't', textCenter: 'tc', textExtraBold: 'w8', textExtraLight: 'w2', textHeavy: 'w9', textJustify: 'tj', textJustifyAll: 'tja', textLeft: 'tl', textLight: 'w3', textMedium: 'w5', textNormalWeight: 'w4', textRight: 'tr', textSemiBold: 'w6', textThin: 'w1', textUnitalicized: 'tun', transition: 'ts', transparent: 'clr', underline: 'u', widthContent: 'wc', widthExact: 'we', widthFill: 'wf', widthFillPortion: 'wfp', wrapped: 'wrp'};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 'Generic'};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 'NoNearbyChildren'};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.column);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.grid);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.page);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.row);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context.$) {
		case 'AsRow':
			return $mdgriffith$elm_ui$Internal$Model$rowClass;
		case 'AsColumn':
			return $mdgriffith$elm_ui$Internal$Model$columnClass;
		case 'AsEl':
			return $mdgriffith$elm_ui$Internal$Model$singleClass;
		case 'AsGrid':
			return $mdgriffith$elm_ui$Internal$Model$gridClass;
		case 'AsParagraph':
			return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return $mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 'Keyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 'NoStyleSheet'};
var $mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 'Styled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 'Unstyled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AsParagraph = {$: 'AsParagraph'};
var $mdgriffith$elm_ui$Internal$Model$asParagraph = $mdgriffith$elm_ui$Internal$Model$AsParagraph;
var $mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 'Flag', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 'Second', a: a};
};
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 'Px':
			var px = x.a;
			return $elm$core$String$fromInt(px) + 'px';
		case 'Content':
			return 'auto';
		case 'Fill':
			var i = x.a;
			return $elm$core$String$fromInt(i) + 'fr';
		case 'Min':
			var min = x.a;
			var len = x.b;
			return 'min' + ($elm$core$String$fromInt(min) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + ($elm$core$String$fromInt(max) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$core$Basics$round = _Basics_round;
var $mdgriffith$elm_ui$Internal$Model$floatClass = function (x) {
	return $elm$core$String$fromInt(
		$elm$core$Basics$round(x * 255));
};
var $mdgriffith$elm_ui$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'mv-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(x) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(y) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(z))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			return $elm$core$Maybe$Just(
				'tfrm-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $mdgriffith$elm_ui$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 'Shadows':
			var name = style.a;
			return name;
		case 'Transparency':
			var name = style.a;
			var o = style.b;
			return name;
		case 'Style':
			var _class = style.a;
			return _class;
		case 'FontFamily':
			var name = style.a;
			return name;
		case 'FontSize':
			var i = style.a;
			return 'font-size-' + $elm$core$String$fromInt(i);
		case 'Single':
			var _class = style.a;
			return _class;
		case 'Colored':
			var _class = style.a;
			return _class;
		case 'SpacingStyle':
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 'PaddingStyle':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'BorderWidth':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'GridTemplateStyle':
			var template = style.a;
			return 'grid-rows-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
		case 'GridPosition':
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.row) + ('-' + ($elm$core$String$fromInt(pos.col) + ('-' + ($elm$core$String$fromInt(pos.width) + ('-' + $elm$core$String$fromInt(pos.height)))))));
		case 'PseudoSelector':
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector.$) {
					case 'Focus':
						return 'fs';
					case 'Hover':
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (sty) {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
						if (_v1 === '') {
							return '';
						} else {
							var styleName = _v1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$mdgriffith$elm_ui$Internal$Model$transformClass(x));
	}
};
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = $mdgriffith$elm_ui$Internal$Model$getStyleName(style);
		return A2($elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2($elm$core$Set$insert, styleName, cache),
			A2($elm$core$List$cons, style, existing));
	});
var $mdgriffith$elm_ui$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 'Property', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 'Style', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$dot = function (c) {
	return '.' + c;
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $mdgriffith$elm_ui$Internal$Model$formatColor = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return 'rgba(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255))) + (',' + ($elm$core$String$fromFloat(alpha) + ')')))));
};
var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.inset ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.blur) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.size) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.color))
				])));
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function (focus) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin) + ':focus-within',
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus .focusable, ') + (($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + '.focusable:focus, ') + ('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ' .focusable-thumb'))),
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Style$AllChildren = F2(
	function (a, b) {
		return {$: 'AllChildren', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 'Child', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 'Descriptor', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Left = {$: 'Left'};
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 'Prop', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Right = {$: 'Right'};
var $mdgriffith$elm_ui$Internal$Style$Self = function (a) {
	return {$: 'Self', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 'Supports', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Content = function (a) {
	return {$: 'Content', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Bottom = {$: 'Bottom'};
var $mdgriffith$elm_ui$Internal$Style$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Internal$Style$CenterY = {$: 'CenterY'};
var $mdgriffith$elm_ui$Internal$Style$Top = {$: 'Top'};
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[$mdgriffith$elm_ui$Internal$Style$Top, $mdgriffith$elm_ui$Internal$Style$Bottom, $mdgriffith$elm_ui$Internal$Style$Right, $mdgriffith$elm_ui$Internal$Style$Left, $mdgriffith$elm_ui$Internal$Style$CenterX, $mdgriffith$elm_ui$Internal$Style$CenterY]);
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _v0 = values(alignment);
		var content = _v0.a;
		var indiv = _v0.b;
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$contentName(
					$mdgriffith$elm_ui$Internal$Style$Content(alignment)),
				content),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						indiv)
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.seButton),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		$mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment.$) {
				case 'Top':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 'Bottom':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 'Right':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 'Left':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 'CenterX':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						values(alignment))
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$Above = {$: 'Above'};
var $mdgriffith$elm_ui$Internal$Style$Behind = {$: 'Behind'};
var $mdgriffith$elm_ui$Internal$Style$Below = {$: 'Below'};
var $mdgriffith$elm_ui$Internal$Style$OnLeft = {$: 'OnLeft'};
var $mdgriffith$elm_ui$Internal$Style$OnRight = {$: 'OnRight'};
var $mdgriffith$elm_ui$Internal$Style$Within = {$: 'Within'};
var $mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = $mdgriffith$elm_ui$Internal$Style$Above;
	var _v0 = function () {
		switch (loc.$) {
			case 'Above':
				return _Utils_Tuple0;
			case 'Below':
				return _Utils_Tuple0;
			case 'OnRight':
				return _Utils_Tuple0;
			case 'OnLeft':
				return _Utils_Tuple0;
			case 'Within':
				return _Utils_Tuple0;
			default:
				return _Utils_Tuple0;
		}
	}();
	return _List_fromArray(
		[$mdgriffith$elm_ui$Internal$Style$Above, $mdgriffith$elm_ui$Internal$Style$Below, $mdgriffith$elm_ui$Internal$Style$OnRight, $mdgriffith$elm_ui$Internal$Style$OnLeft, $mdgriffith$elm_ui$Internal$Style$Within, $mdgriffith$elm_ui$Internal$Style$Behind]);
}();
var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		_Utils_ap(
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.imageContainer))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-height', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.root),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				$mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc.$) {
							case 'Above':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
												])),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Below':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 'OnRight':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'OnLeft':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'right', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Within':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'resize', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-size', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-family', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.wrapped),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.noTextSelection),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorPointer),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.passPointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.capturePointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transparent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.opaque),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transition),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Prop,
						'transition',
						A2(
							$elm$core$String$join,
							', ',
							A2(
								$elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbars),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clip),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderNone),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDashed),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDotted),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderSolid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'inherit')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.link),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'baseline')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0px'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', 'min-content'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 'Bottom':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 'Right':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 'Left':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 'CenterX':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.page),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Left)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Right)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultiline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineWrapper),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineParent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineFiller),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-wrap', 'break-word'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::after',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::before',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textThin),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textNormalWeight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textMedium),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textSemiBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textHeavy),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.italic),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textUnitalicized),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustify),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustifyAll),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textCenter),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textRight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLeft),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var $mdgriffith$elm_ui$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.border-' + $elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'border-width',
							$elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 6)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 8, 32)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.p-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'padding',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('zero'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('onum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('liga'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('dlig'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('ordn'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('tnum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('afrc'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('frac')
		]));
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $mdgriffith$elm_ui$Internal$Style$Intermediate = function (a) {
	return {$: 'Intermediate', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			{closing: closing, others: _List_Nil, props: _List_Nil, selector: selector});
	});
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_v0, rulesToRender) {
		var parent = _v0.a;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 'Prop':
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								props: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.props)
							});
					case 'Supports':
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Style$Intermediate(
										{closing: '\n}', others: _List_Nil, props: props, selector: '@supports (' + (prop + (':' + (value + (') {' + parent.selector))))}),
									rendered.others)
							});
					case 'Adjacent':
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' + ' + selector), ''),
										adjRules),
									rendered.others)
							});
					case 'Child':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' > ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'AllChildren':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'Descriptor':
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.selector, descriptor),
											''),
										descriptorRules),
									rendered.others)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector, ''),
										batched),
									rendered.others)
							});
				}
			});
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender));
	});
var $mdgriffith$elm_ui$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var x = _v3.a;
					var y = _v3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _v2 = rule.props;
		if (!_v2.b) {
			return '';
		} else {
			return rule.selector + ('{' + (renderValues(rule.props) + (rule.closing + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0.a;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.others)));
	};
	return $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			renderIntermediate,
			A3(
				$elm$core$List$foldr,
				F2(
					function (_v1, existing) {
						var name = _v1.a;
						var styleRules = _v1.b;
						return A2(
							$elm$core$List$cons,
							A2(
								$mdgriffith$elm_ui$Internal$Style$renderRules,
								A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
	$mdgriffith$elm_ui$Internal$Style$overrides,
	$mdgriffith$elm_ui$Internal$Style$renderCompact(
		_Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)));
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _v0 = opts.mode;
	switch (_v0.$) {
		case 'Layout':
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'div',
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$elm$virtual_dom$VirtualDom$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								$elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
							]))
					]));
		case 'NoStaticStyleSheet':
			return $elm$virtual_dom$VirtualDom$text('');
		default:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'elm-ui-static-rules',
				_List_fromArray(
					[
						A2(
						$elm$virtual_dom$VirtualDom$property,
						'rules',
						$elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules))
					]),
				_List_Nil);
	}
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 'Serif':
			return 'serif';
		case 'SansSerif':
			return 'sans-serif';
		case 'Monospace':
			return 'monospace';
		case 'Typeface':
			var name = font.a;
			return '\"' + (name + '\"');
		case 'ImportFont':
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.name;
			return '\"' + (name + '\"');
	}
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return name === 'smcp';
		case 'VariantOff':
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.variants);
	} else {
		return false;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(
	function (force, _v0, existing) {
		var key = _v0.a;
		var val = _v0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
	function (options, maybePseudo, selector, props) {
		if (maybePseudo.$ === 'Nothing') {
			return _List_fromArray(
				[
					selector + ('{' + (A3(
					$elm$core$List$foldl,
					$mdgriffith$elm_ui$Internal$Model$renderProps(false),
					'',
					props) + '\n}'))
				]);
		} else {
			var pseudo = maybePseudo.a;
			switch (pseudo.$) {
				case 'Hover':
					var _v2 = options.hover;
					switch (_v2.$) {
						case 'NoHover':
							return _List_Nil;
						case 'ForceHover':
							return _List_fromArray(
								[
									selector + ('-hv {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(true),
									'',
									props) + '\n}'))
								]);
						default:
							return _List_fromArray(
								[
									selector + ('-hv:hover {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(false),
									'',
									props) + '\n}'))
								]);
					}
				case 'Focus':
					var renderedProps = A3(
						$elm$core$List$foldl,
						$mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[
							selector + ('-fs:focus {' + (renderedProps + '\n}')),
							('.' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (':focus ' + (selector + '-fs  {')))) + (renderedProps + '\n}'),
							(selector + '-fs:focus-within {') + (renderedProps + '\n}'),
							('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' .focusable-thumb' + (selector + '-fs {')))) + (renderedProps + '\n}')
						]);
				default:
					return _List_fromArray(
						[
							selector + ('-act:active {' + (A3(
							$elm$core$List$foldl,
							$mdgriffith$elm_ui$Internal$Model$renderProps(false),
							'',
							props) + '\n}'))
						]);
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return '\"' + (name + '\"');
		case 'VariantOff':
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + $elm$core$String$fromInt(index)));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.variants)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'translate3d(' + ($elm$core$String$fromFloat(x) + ('px, ' + ($elm$core$String$fromFloat(y) + ('px, ' + ($elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + ($elm$core$String$fromFloat(tx) + ('px, ' + ($elm$core$String$fromFloat(ty) + ('px, ' + ($elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + ($elm$core$String$fromFloat(sx) + (', ' + ($elm$core$String$fromFloat(sy) + (', ' + ($elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + ($elm$core$String$fromFloat(ox) + (', ' + ($elm$core$String$fromFloat(oy) + (', ' + ($elm$core$String$fromFloat(oz) + (', ' + ($elm$core$String$fromFloat(angle) + 'rad)')))))));
			return $elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
	function (options, rule, maybePseudo) {
		switch (rule.$) {
			case 'Style':
				var selector = rule.a;
				var props = rule.b;
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 'Shadows':
				var name = rule.a;
				var prop = rule.b;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, 'box-shadow', prop)
						]));
			case 'Transparency':
				var name = rule.a;
				var transparency = rule.b;
				var opacity = A2(
					$elm$core$Basics$max,
					0,
					A2($elm$core$Basics$min, 1, 1 - transparency));
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'opacity',
							$elm$core$String$fromFloat(opacity))
						]));
			case 'FontSize':
				var i = rule.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			case 'FontFamily':
				var name = rule.a;
				var typefaces = rule.b;
				var features = A2(
					$elm$core$String$join,
					', ',
					A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces));
				var families = _List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-family',
						A2(
							$elm$core$String$join,
							', ',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces))),
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'font-feature-settings', features),
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-variant',
						A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
					]);
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, '.' + name, families);
			case 'Single':
				var _class = rule.a;
				var prop = rule.b;
				var val = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, prop, val)
						]));
			case 'Colored':
				var _class = rule.a;
				var prop = rule.b;
				var color = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							prop,
							$mdgriffith$elm_ui$Internal$Model$formatColor(color))
						]));
			case 'SpacingStyle':
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = $elm$core$String$fromInt(y) + 'px';
				var xPx = $elm$core$String$fromInt(x) + 'px';
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.single;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.row;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.wrapped + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.page;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.column;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.any;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (row + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (wrappedRow + (' > ' + any)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (column + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_Utils_ap(_class, paragraph),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							'textarea' + (any + _class),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)')),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'height',
									'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::after'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-top',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::before'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-bottom',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								]))
						]));
			case 'PaddingStyle':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'padding',
							$elm$core$String$fromFloat(top) + ('px ' + ($elm$core$String$fromFloat(right) + ('px ' + ($elm$core$String$fromFloat(bottom) + ('px ' + ($elm$core$String$fromFloat(left) + 'px')))))))
						]));
			case 'BorderWidth':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'border-width',
							$elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 'GridTemplateStyle':
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 'Px':
									var px = x.a;
									return $elm$core$String$fromInt(px) + 'px';
								case 'Content':
									var _v2 = _Utils_Tuple2(minimum, maximum);
									if (_v2.a.$ === 'Nothing') {
										if (_v2.b.$ === 'Nothing') {
											var _v3 = _v2.a;
											var _v4 = _v2.b;
											return 'max-content';
										} else {
											var _v6 = _v2.a;
											var maxSize = _v2.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v2.b.$ === 'Nothing') {
											var minSize = _v2.a.a;
											var _v5 = _v2.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _v2.a.a;
											var maxSize = _v2.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Fill':
									var i = x.a;
									var _v7 = _Utils_Tuple2(minimum, maximum);
									if (_v7.a.$ === 'Nothing') {
										if (_v7.b.$ === 'Nothing') {
											var _v8 = _v7.a;
											var _v9 = _v7.b;
											return $elm$core$String$fromInt(i) + 'fr';
										} else {
											var _v11 = _v7.a;
											var maxSize = _v7.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v7.b.$ === 'Nothing') {
											var minSize = _v7.a.a;
											var _v10 = _v7.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _v7.a.a;
											var maxSize = _v7.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Min':
									var m = x.a;
									var len = x.b;
									var $temp$minimum = $elm$core$Maybe$Just(m),
										$temp$maximum = maximum,
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
								default:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = minimum,
										$temp$maximum = $elm$core$Maybe$Just(m),
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
							}
						}
					});
				var toGridLength = function (x) {
					return A3(toGridLengthHelper, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x);
				};
				var xSpacing = toGridLength(template.spacing.a);
				var ySpacing = toGridLength(template.spacing.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.rows)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.spacing.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.spacing.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.columns)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 'GridPosition':
				var position = rule.a;
				var msPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.row) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.height) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.col) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.width) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.row) + (' / ' + ($elm$core$String$fromInt(position.row + position.height) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.col) + (' / ' + ($elm$core$String$fromInt(position.col + position.width) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.row) + ('-' + ($elm$core$String$fromInt(position.col) + ('-' + ($elm$core$String$fromInt(position.width) + ('-' + $elm$core$String$fromInt(position.height)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 'PseudoSelector':
				var _class = rule.a;
				var styles = rule.b;
				var renderPseudoRule = function (style) {
					return A3(
						$mdgriffith$elm_ui$Internal$Model$renderStyleRule,
						options,
						style,
						$elm$core$Maybe$Just(_class));
				};
				return A2($elm$core$List$concatMap, renderPseudoRule, styles);
			default:
				var transform = rule.a;
				var val = $mdgriffith$elm_ui$Internal$Model$transformValue(transform);
				var _class = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				var _v12 = _Utils_Tuple2(_class, val);
				if ((_v12.a.$ === 'Just') && (_v12.b.$ === 'Just')) {
					var cls = _v12.a.a;
					var v = _v12.b.a;
					return A4(
						$mdgriffith$elm_ui$Internal$Model$renderStyle,
						options,
						maybePseudo,
						'.' + cls,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Model$Property, 'transform', v)
							]));
				} else {
					return _List_Nil;
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
	function (options, stylesheet) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$map,
				function (style) {
					var styled = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing);
					return _Utils_Tuple2(
						$mdgriffith$elm_ui$Internal$Model$getStyleName(style),
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled));
				},
				stylesheet));
	});
var $mdgriffith$elm_ui$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_v0) {
			var name = _v0.a;
			var val = _v0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, renderPair, rules)) + '}'));
	});
var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(
	function (name, modifier, _v0) {
		var parentAdj = _v0.a;
		var textAdjustment = _v0.b;
		return _List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))), textAdjustment)
			]);
	});
var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _v0, otherFontName) {
		var full = _v0.a;
		var capital = _v0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_Utils_ap(
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.fullSize, full)));
	});
var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {height: height / size, size: size, vertical: vertical};
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.capital, adjustment.baseline, adjustment.descender, adjustment.lowercase]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.descender,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.baseline,
		$elm$core$List$minimum(
			A2(
				$elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.capital,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		capital: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		full: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				$elm$core$String$fromFloat(converted.height)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.vertical) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.size) + 'em')
			]));
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 'Nothing') {
					if (face.$ === 'FontWith') {
						var _with = face.a;
						var _v2 = _with.adjustment;
						if (_v2.$ === 'Nothing') {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.full;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.capital;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		$elm$core$Maybe$Nothing,
		typefaces);
};
var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 'ImportFont') {
			var url = font.b;
			return $elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_v2) {
		var name = _v2.a;
		var typefaces = _v2.b;
		var imports = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2($elm$core$List$map, $elm$core$Tuple$first, rules);
	var fontAdjustments = function (_v1) {
		var name = _v1.a;
		var typefaces = _v1.b;
		var _v0 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
		if (_v0.$ === 'Nothing') {
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _v0.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontImports, rules)),
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontAdjustments, rules)));
};
var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 'FontFamily') {
		var name = rule.a;
		var typefaces = rule.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var combine = F2(
			function (style, rendered) {
				return {
					rules: _Utils_ap(
						rendered.rules,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					topLevel: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 'Nothing') {
							return rendered.topLevel;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.topLevel);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{rules: _List_Nil, topLevel: _List_Nil},
			stylesheet);
		var topLevel = _v0.topLevel;
		var rules = _v0.rules;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.mode;
		switch (_v0.$) {
			case 'Layout':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			case 'NoStaticStyleSheet':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			default:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'elm-ui-rules',
					_List_fromArray(
						[
							A2(
							$elm$virtual_dom$VirtualDom$property,
							'rules',
							A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet))
						]),
					_List_Nil);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'static-stylesheet',
				$mdgriffith$elm_ui$Internal$Model$staticRoot(opts)),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
				children)) : A2(
			$elm$core$List$cons,
			_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
			children);
	});
var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2($elm$core$List$cons, dynamicStyleSheet, children)) : A2($elm$core$List$cons, dynamicStyleSheet, children);
	});
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$core$Basics$not = _Basics_not;
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$core$Bitwise$and = _Bitwise_and;
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _v0) {
		var fieldOne = _v0.a;
		var fieldTwo = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var $elm$html$Html$s = _VirtualDom_node('s');
var $elm$html$Html$u = _VirtualDom_node('u');
var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 'Keyed') {
					var keyed = children.a;
					return A3(
						$elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return keyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return $elm$html$Html$div;
								case 'p':
									return $elm$html$Html$p;
								default:
									return $elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return unkeyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 'Generic':
					return A2(createNode, 'div', attributes);
				case 'NodeName':
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						$elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single))
									]))
							]));
			}
		}();
		switch (parentContext.$) {
			case 'AsRow':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX])))
						]),
					_List_fromArray(
						[html])) : html));
			case 'AsColumn':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthContent + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightContent)))));
var $mdgriffith$elm_ui$Internal$Model$textElement = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFill + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightFill)))));
var $mdgriffith$elm_ui$Internal$Model$textElementFill = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_v8, _v9) {
				var key = _v8.a;
				var child = _v8.b;
				var htmls = _v9.a;
				var existingStyles = _v9.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _v6) {
				var htmls = _v6.a;
				var existingStyles = _v6.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 'Keyed') {
			var keyedChildren = children.a;
			var _v1 = A3(
				$elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _v1.a;
			var styles = _v1.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children))),
						styles: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _v3 = A3(
				$elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _v3.a;
			var styles = _v3.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children))),
						styles: allStyles
					});
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 'Single', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 'Transform', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 'ChildrenBehind', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 'ChildrenBehindAndInFront', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 'ChildrenInFront', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					function () {
						switch (location.$) {
							case 'Above':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.above]));
							case 'Below':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.below]));
							case 'OnRight':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onRight]));
							case 'OnLeft':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onLeft]));
							case 'InFront':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.inFront]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.behind]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 'Empty':
							return $elm$virtual_dom$VirtualDom$text('');
						case 'Text':
							var str = elem.a;
							return $mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 'Unstyled':
							var html = elem.a;
							return html($mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 'NoNearbyChildren':
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenBehind':
				var existingBehind = existing.a;
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2($elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenInFront':
				var existingInFront = existing.a;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						A2($elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						A2($elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2($elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 'Embedded', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 'NodeName', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 'Generic':
				return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 'NodeName':
				var name = old.a;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align.$) {
		case 'Left':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'Right':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align.$) {
		case 'Top':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 'FullTransform', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 'Moved', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 'Untransformed':
				switch (component.$) {
					case 'MoveX':
						var x = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 'MoveY':
						var y = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 'MoveZ':
						var z = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 'Moved':
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 'MoveY':
						var newY = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 'MoveZ':
						var newZ = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 'MoveY':
						var newY = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 'MoveZ':
						var newZ = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 'MoveXYZ':
						var newMove = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 'Rotate':
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
var $mdgriffith$elm_ui$Internal$Flag$merge = F2(
	function (_v0, _v1) {
		var one = _v0.a;
		var two = _v0.b;
		var three = _v1.a;
		var four = _v1.b;
		return A2($mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
	});
var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var $mdgriffith$elm_ui$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 'Px':
			var px = h.a;
			var val = $elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightContent,
				_List_Nil);
		case 'Fill':
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-height',
				$elm$core$String$fromInt(minSize) + 'px !important');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-height',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
var $mdgriffith$elm_ui$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 'Px':
			var px = w.a;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + $elm$core$String$fromInt(px),
						'width',
						$elm$core$String$fromInt(px) + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthContent,
				_List_Nil);
		case 'Fill':
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-width',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-width',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
var $elm$core$Basics$ge = _Utils_ge;
var $mdgriffith$elm_ui$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
			if (style.$ === 'Single') {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 'FontSize':
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 'PaddingStyle':
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _v1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				if (_v1.$ === 'Nothing') {
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: styles
					};
				} else {
					var _class = _v1.a;
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 'NoAttribute':
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Class':
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 'Attr':
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2($elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'StyleClass':
						var flag = attribute.a;
						var style = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag, style)) {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2($elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 'TransformComponent':
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
							$temp$transform = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Width':
						var width = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 'Px':
									var px = width.a;
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3(
											$mdgriffith$elm_ui$Internal$Model$Single,
											'width-px-' + $elm$core$String$fromInt(px),
											'width',
											$elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthContent),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$widthContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'width-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v4 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width);
									var addToFlags = _v4.a;
									var newClass = _v4.b;
									var newStyles = _v4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Height':
						var height = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 'Px':
									var px = height.a;
									var val = $elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + (name + (' ' + classes))),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightContent + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$heightContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightFill + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'height-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v6 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height);
									var addToFlags = _v6.a;
									var newClass = _v6.b;
									var newStyles = _v6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Describe':
						var description = attribute.a;
						switch (description.$) {
							case 'Main':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Navigation':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'ContentInfo':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Complementary':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Heading':
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											$mdgriffith$elm_ui$Internal$Model$addNodeName,
											'h' + $elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 'Paragraph':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Button':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Label':
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'LivePolite':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 'Nearby':
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 'Empty':
									return styles;
								case 'Text':
									var str = elem.a;
									return styles;
								case 'Unstyled':
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.styles);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'AlignX':
						var x = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x.$) {
									case 'CenterX':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 'Right':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y.$) {
									case 'CenterY':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 'Bottom':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 'Untransformed'};
var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
var $mdgriffith$elm_ui$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			$mdgriffith$elm_ui$Internal$Model$createElement,
			context,
			children,
			A8(
				$mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
				$mdgriffith$elm_ui$Internal$Model$contextClasses(context),
				node,
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				$mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
				$elm$core$List$reverse(attributes)));
	});
var $mdgriffith$elm_ui$Element$Input$enter = 'Enter';
var $mdgriffith$elm_ui$Internal$Model$NoAttribute = {$: 'NoAttribute'};
var $mdgriffith$elm_ui$Element$Input$hasFocusStyle = function (attr) {
	if (((attr.$ === 'StyleClass') && (attr.b.$ === 'PseudoSelector')) && (attr.b.a.$ === 'Focus')) {
		var _v1 = attr.b;
		var _v2 = _v1.a;
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Element$Input$focusDefault = function (attrs) {
	return A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass('focusable');
};
var $mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 'Height', a: a};
};
var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $mdgriffith$elm_ui$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onClick);
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $mdgriffith$elm_ui$Element$Input$onKeyLookup = function (lookup) {
	var decode = function (code) {
		var _v0 = lookup(code);
		if (_v0.$ === 'Nothing') {
			return $elm$json$Json$Decode$fail('No key matched');
		} else {
			var msg = _v0.a;
			return $elm$json$Json$Decode$succeed(msg);
		}
	};
	var isKey = A2(
		$elm$json$Json$Decode$andThen,
		decode,
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		A2(
			$elm$html$Html$Events$preventDefaultOn,
			'keydown',
			A2(
				$elm$json$Json$Decode$map,
				function (fired) {
					return _Utils_Tuple2(fired, true);
				},
				isKey)));
};
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$cursor = $mdgriffith$elm_ui$Internal$Flag$flag(21);
var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.cursorPointer);
var $mdgriffith$elm_ui$Internal$Model$Content = {$: 'Content'};
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Element$Input$space = ' ';
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $mdgriffith$elm_ui$Internal$Model$Width = function (a) {
	return {$: 'Width', a: a};
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Element$Input$button = F2(
	function (attrs, _v0) {
		var onPress = _v0.onPress;
		var label = _v0.label;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.seButton + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.noTextSelection)))))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$pointer,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$Input$focusDefault(attrs),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Button),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											$elm$html$Html$Attributes$tabindex(0)),
										function () {
											if (onPress.$ === 'Nothing') {
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Internal$Model$Attr(
														$elm$html$Html$Attributes$disabled(true)),
													attrs);
											} else {
												var msg = onPress.a;
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Element$Events$onClick(msg),
													A2(
														$elm$core$List$cons,
														$mdgriffith$elm_ui$Element$Input$onKeyLookup(
															function (code) {
																return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(msg) : (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(msg) : $elm$core$Maybe$Nothing);
															}),
														attrs));
											}
										}()))))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 'Colored', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 'StyleClass', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return $mdgriffith$elm_ui$Internal$Model$floatClass(red) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(green) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var $mdgriffith$elm_ui$Element$Background$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$bgColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'background-color',
			clr));
};
var $mdgriffith$elm_ui$Internal$Flag$borderColor = $mdgriffith$elm_ui$Internal$Flag$flag(28);
var $mdgriffith$elm_ui$Element$Border$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'border-color',
			clr));
};
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 'PaddingStyle', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Element$padding = function (x) {
	var f = x;
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			'p-' + $elm$core$String$fromInt(x),
			f,
			f,
			f,
			f));
};
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 'Rgba', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Element$rgb255 = F3(
	function (red, green, blue) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, 1);
	});
var $mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 'BorderWidth', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Element$Border$width = function (v) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + $elm$core$String$fromInt(v),
			v,
			v,
			v,
			v));
};
var $author$project$ApplicationPlayer$childrenContainer = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229)),
		$mdgriffith$elm_ui$Element$padding(20),
		$mdgriffith$elm_ui$Element$Border$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229)),
		$mdgriffith$elm_ui$Element$Border$width(2)
	]);
var $mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 'AlignY', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Top = {$: 'Top'};
var $mdgriffith$elm_ui$Element$alignTop = $mdgriffith$elm_ui$Internal$Model$AlignY($mdgriffith$elm_ui$Internal$Model$Top);
var $mdgriffith$elm_ui$Internal$Flag$fontAlignment = $mdgriffith$elm_ui$Internal$Flag$flag(12);
var $mdgriffith$elm_ui$Element$Font$center = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontAlignment, $mdgriffith$elm_ui$Internal$Style$classes.textCenter);
var $mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 'AlignX', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$CenterX);
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
var $mdgriffith$elm_ui$Element$Font$color = function (fontColor) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var $mdgriffith$elm_ui$Internal$Model$MoveX = function (a) {
	return {$: 'MoveX', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$TransformComponent = F2(
	function (a, b) {
		return {$: 'TransformComponent', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$moveX = $mdgriffith$elm_ui$Internal$Flag$flag(25);
var $mdgriffith$elm_ui$Element$moveLeft = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveX,
		$mdgriffith$elm_ui$Internal$Model$MoveX(-x));
};
var $mdgriffith$elm_ui$Internal$Model$MoveY = function (a) {
	return {$: 'MoveY', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$moveY = $mdgriffith$elm_ui$Internal$Flag$flag(26);
var $mdgriffith$elm_ui$Element$moveUp = function (y) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveY,
		$mdgriffith$elm_ui$Internal$Model$MoveY(-y));
};
var $mdgriffith$elm_ui$Internal$Model$Px = function (a) {
	return {$: 'Px', a: a};
};
var $mdgriffith$elm_ui$Element$px = $mdgriffith$elm_ui$Internal$Model$Px;
var $mdgriffith$elm_ui$Internal$Flag$borderRound = $mdgriffith$elm_ui$Internal$Flag$flag(17);
var $mdgriffith$elm_ui$Element$Border$rounded = function (radius) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + $elm$core$String$fromInt(radius),
			'border-radius',
			$elm$core$String$fromInt(radius) + 'px'));
};
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 'FontSize', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $mdgriffith$elm_ui$Element$Font$size = function (i) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontSize,
		$mdgriffith$elm_ui$Internal$Model$FontSize(i));
};
var $author$project$ApplicationPlayer$closerAttribute = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$alignTop,
		$mdgriffith$elm_ui$Element$centerX,
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229)),
		$mdgriffith$elm_ui$Element$Border$rounded(20),
		$mdgriffith$elm_ui$Element$Font$size(28),
		$mdgriffith$elm_ui$Element$Font$center,
		$mdgriffith$elm_ui$Element$Font$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 101, 101, 101)),
		$mdgriffith$elm_ui$Element$moveLeft(5),
		$mdgriffith$elm_ui$Element$moveUp(2),
		$mdgriffith$elm_ui$Element$width(
		$mdgriffith$elm_ui$Element$px(35))
	]);
var $mdgriffith$elm_ui$Internal$Model$AsColumn = {$: 'AsColumn'};
var $mdgriffith$elm_ui$Internal$Model$asColumn = $mdgriffith$elm_ui$Internal$Model$AsColumn;
var $mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentTop + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentLeft)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Internal$Model$CenterY = {$: 'CenterY'};
var $mdgriffith$elm_ui$Element$centerY = $mdgriffith$elm_ui$Internal$Model$AlignY($mdgriffith$elm_ui$Internal$Model$CenterY);
var $elm$html$Html$Attributes$controls = $elm$html$Html$Attributes$boolProperty('controls');
var $mdgriffith$elm_ui$Element$el = F2(
	function (attrs, child) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var $elm$html$Html$Attributes$height = function (n) {
	return A2(
		_VirtualDom_attribute,
		'height',
		$elm$core$String$fromInt(n));
};
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $mdgriffith$elm_ui$Element$html = $mdgriffith$elm_ui$Internal$Model$unstyled;
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $elm$html$Html$video = _VirtualDom_node('video');
var $elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		$elm$core$String$fromInt(n));
};
var $author$project$SubstancePlayer$decorateVideo = F3(
	function (videoLink, maxWidth, maxHeight) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
			$mdgriffith$elm_ui$Element$html(
				A2(
					$elm$html$Html$video,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src(videoLink),
							$elm$html$Html$Attributes$controls(true),
							$elm$html$Html$Attributes$width(maxWidth),
							$elm$html$Html$Attributes$height(maxHeight)
						]),
					_List_Nil)));
	});
var $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty('alt');
var $mdgriffith$elm_ui$Element$image = F2(
	function (attrs, _v0) {
		var src = _v0.src;
		var description = _v0.description;
		var imageAttributes = A2(
			$elm$core$List$filter,
			function (a) {
				switch (a.$) {
					case 'Width':
						return true;
					case 'Height':
						return true;
					default:
						return false;
				}
			},
			attrs);
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.imageContainer),
				attrs),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[
						A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asEl,
						$mdgriffith$elm_ui$Internal$Model$NodeName('img'),
						_Utils_ap(
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Internal$Model$Attr(
									$elm$html$Html$Attributes$src(src)),
									$mdgriffith$elm_ui$Internal$Model$Attr(
									$elm$html$Html$Attributes$alt(description))
								]),
							imageAttributes),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil))
					])));
	});
var $elm$html$Html$Events$onMouseEnter = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseenter',
		$elm$json$Json$Decode$succeed(msg));
};
var $mdgriffith$elm_ui$Element$Events$onMouseEnter = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onMouseEnter);
var $mdgriffith$elm_ui$Internal$Model$Paragraph = {$: 'Paragraph'};
var $mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 'Fill', a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 'SpacingStyle', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y)));
	});
var $mdgriffith$elm_ui$Element$spacing = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$spacing,
		A3(
			$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
			A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
			x,
			x));
};
var $mdgriffith$elm_ui$Element$paragraph = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asParagraph,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Paragraph),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$spacing(5),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 'FontFamily', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $elm$core$String$toLower = _String_toLower;
var $elm$core$String$words = _String_words;
var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 'Serif':
						return 'serif';
					case 'SansSerif':
						return 'sans-serif';
					case 'Monospace':
						return 'monospace';
					case 'Typeface':
						var name = font.a;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					case 'ImportFont':
						var name = font.a;
						var url = font.b;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					default:
						var name = font.a.name;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
				}
			}());
	});
var $mdgriffith$elm_ui$Element$Font$family = function (families) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontFamily,
		A2(
			$mdgriffith$elm_ui$Internal$Model$FontFamily,
			A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'ff-', families),
			families));
};
var $mdgriffith$elm_ui$Element$paddingXY = F2(
	function (x, y) {
		if (_Utils_eq(x, y)) {
			var f = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + $elm$core$String$fromInt(x),
					f,
					f,
					f,
					f));
		} else {
			var yFloat = y;
			var xFloat = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
					yFloat,
					xFloat,
					yFloat,
					xFloat));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 'SansSerif'};
var $mdgriffith$elm_ui$Element$Font$sansSerif = $mdgriffith$elm_ui$Internal$Model$SansSerif;
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 'Typeface', a: a};
};
var $mdgriffith$elm_ui$Element$Font$typeface = $mdgriffith$elm_ui$Internal$Model$Typeface;
var $author$project$SubstancePlayer$selectedSubstanceTextAttribute = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Element$paddingXY, 0, 10),
		$mdgriffith$elm_ui$Element$Font$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 226, 89, 55)),
		$mdgriffith$elm_ui$Element$Font$size(14),
		$mdgriffith$elm_ui$Element$Font$family(
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$typeface('Lucida Grande'),
				$mdgriffith$elm_ui$Element$Font$sansSerif
			])),
		$mdgriffith$elm_ui$Element$Font$center
	]);
var $mdgriffith$elm_ui$Internal$Model$Hover = {$: 'Hover'};
var $mdgriffith$elm_ui$Internal$Model$PseudoSelector = F2(
	function (a, b) {
		return {$: 'PseudoSelector', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$hover = $mdgriffith$elm_ui$Internal$Flag$flag(33);
var $mdgriffith$elm_ui$Internal$Model$Nearby = F2(
	function (a, b) {
		return {$: 'Nearby', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Empty = {$: 'Empty'};
var $mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 'Text', a: a};
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $mdgriffith$elm_ui$Internal$Model$map = F2(
	function (fn, el) {
		switch (el.$) {
			case 'Styled':
				var styled = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: F2(
							function (add, context) {
								return A2(
									$elm$virtual_dom$VirtualDom$map,
									fn,
									A2(styled.html, add, context));
							}),
						styles: styled.styles
					});
			case 'Unstyled':
				var html = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A2(
						$elm$core$Basics$composeL,
						$elm$virtual_dom$VirtualDom$map(fn),
						html));
			case 'Text':
				var str = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Text(str);
			default:
				return $mdgriffith$elm_ui$Internal$Model$Empty;
		}
	});
var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var $mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle = F2(
	function (fn, attr) {
		switch (attr.$) {
			case 'NoAttribute':
				return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
			case 'Describe':
				var description = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Describe(description);
			case 'AlignX':
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignX(x);
			case 'AlignY':
				var y = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignY(y);
			case 'Width':
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Width(x);
			case 'Height':
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Height(x);
			case 'Class':
				var x = attr.a;
				var y = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Class, x, y);
			case 'StyleClass':
				var flag = attr.a;
				var style = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$StyleClass, flag, style);
			case 'Nearby':
				var location = attr.a;
				var elem = attr.b;
				return A2(
					$mdgriffith$elm_ui$Internal$Model$Nearby,
					location,
					A2($mdgriffith$elm_ui$Internal$Model$map, fn, elem));
			case 'Attr':
				var htmlAttr = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Attr(
					A2($elm$virtual_dom$VirtualDom$mapAttribute, fn, htmlAttr));
			default:
				var fl = attr.a;
				var trans = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$TransformComponent, fl, trans);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$removeNever = function (style) {
	return A2($mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle, $elm$core$Basics$never, style);
};
var $mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper = F2(
	function (attr, _v0) {
		var styles = _v0.a;
		var trans = _v0.b;
		var _v1 = $mdgriffith$elm_ui$Internal$Model$removeNever(attr);
		switch (_v1.$) {
			case 'StyleClass':
				var style = _v1.b;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, style, styles),
					trans);
			case 'TransformComponent':
				var flag = _v1.a;
				var component = _v1.b;
				return _Utils_Tuple2(
					styles,
					A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, trans, component));
			default:
				return _Utils_Tuple2(styles, trans);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$unwrapDecorations = function (attrs) {
	var _v0 = A3(
		$elm$core$List$foldl,
		$mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper,
		_Utils_Tuple2(_List_Nil, $mdgriffith$elm_ui$Internal$Model$Untransformed),
		attrs);
	var styles = _v0.a;
	var transform = _v0.b;
	return A2(
		$elm$core$List$cons,
		$mdgriffith$elm_ui$Internal$Model$Transform(transform),
		styles);
};
var $mdgriffith$elm_ui$Element$mouseOver = function (decs) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$hover,
		A2(
			$mdgriffith$elm_ui$Internal$Model$PseudoSelector,
			$mdgriffith$elm_ui$Internal$Model$Hover,
			$mdgriffith$elm_ui$Internal$Model$unwrapDecorations(decs)));
};
var $author$project$SubstancePlayer$substanceAttribute = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$centerX,
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255)),
		$mdgriffith$elm_ui$Element$alignTop,
		$mdgriffith$elm_ui$Element$padding(10),
		$mdgriffith$elm_ui$Element$mouseOver(
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Background$color(
				A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229))
			]))
	]);
var $author$project$SubstancePlayer$substanceImageAttribute = function (dimension) {
	return _List_fromArray(
		[
			$mdgriffith$elm_ui$Element$width(
			$mdgriffith$elm_ui$Element$px(
				$elm$core$Basics$round(dimension.a))),
			$mdgriffith$elm_ui$Element$height(
			$mdgriffith$elm_ui$Element$px(
				$elm$core$Basics$round(dimension.b))),
			$mdgriffith$elm_ui$Element$centerX,
			$mdgriffith$elm_ui$Element$alignTop
		]);
};
var $author$project$SubstancePlayer$substanceTextAttribute = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Element$paddingXY, 0, 10),
		$mdgriffith$elm_ui$Element$Font$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 0)),
		$mdgriffith$elm_ui$Element$Font$size(14),
		$mdgriffith$elm_ui$Element$Font$family(
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$typeface('Lucida Grande'),
				$mdgriffith$elm_ui$Element$Font$sansSerif
			])),
		$mdgriffith$elm_ui$Element$Font$center
	]);
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $author$project$SubstancePlayer$displaySubstanceWithMenu = F5(
	function (substance, subClicker, selectedMenu, deployedSubstanceDisplay, dimension) {
		if (deployedSubstanceDisplay.$ === 'Just') {
			var eleMsgDeployedSubstance = deployedSubstanceDisplay.a;
			if (selectedMenu.$ === 'Just') {
				var activeMenu = selectedMenu.a;
				switch (substance.$) {
					case 'Relation':
						var substanceRelation = substance.a;
						return _Utils_eq(substanceRelation.subId, eleMsgDeployedSubstance.subId) ? eleMsgDeployedSubstance.deployment : (_Utils_eq(substanceRelation.subId, activeMenu.a) ? A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap($author$project$SubstancePlayer$substanceAttribute, activeMenu.b),
							_List_fromArray(
								[
									A3($author$project$SubstancePlayer$decorateVideo, substanceRelation.media, 200, 150),
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$selectedSubstanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceRelation.name)
										]))
								])) : A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap(
								$author$project$SubstancePlayer$substanceAttribute,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseEnter(
										subClicker(substance))
									])),
							_List_fromArray(
								[
									A3($author$project$SubstancePlayer$decorateVideo, substanceRelation.media, 185, 140),
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$substanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceRelation.name)
										]))
								])));
					case 'Dynamic':
						var substanceDynamic = substance.a;
						return _Utils_eq(substanceDynamic.subId, eleMsgDeployedSubstance.subId) ? eleMsgDeployedSubstance.deployment : (_Utils_eq(substanceDynamic.subId, activeMenu.a) ? A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap($author$project$SubstancePlayer$substanceAttribute, activeMenu.b),
							_List_fromArray(
								[
									A3($author$project$SubstancePlayer$decorateVideo, substanceDynamic.video, 200, 150),
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$selectedSubstanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceDynamic.name)
										]))
								])) : A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap(
								$author$project$SubstancePlayer$substanceAttribute,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseEnter(
										subClicker(substance))
									])),
							_List_fromArray(
								[
									A3($author$project$SubstancePlayer$decorateVideo, substanceDynamic.video, 185, 140),
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$substanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceDynamic.name)
										]))
								])));
					default:
						var substancePotential = substance.a;
						return _Utils_eq(substancePotential.subId, activeMenu.a) ? A2(
							$mdgriffith$elm_ui$Element$image,
							_Utils_ap(
								$author$project$SubstancePlayer$substanceImageAttribute(dimension),
								activeMenu.b),
							{description: 'Potential', src: substancePotential.image}) : A2(
							$mdgriffith$elm_ui$Element$image,
							_Utils_ap(
								$author$project$SubstancePlayer$substanceImageAttribute(dimension),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseEnter(
										subClicker(substance))
									])),
							{description: 'Potential', src: substancePotential.image});
				}
			} else {
				switch (substance.$) {
					case 'Relation':
						var substanceRelation = substance.a;
						return _Utils_eq(substanceRelation.subId, eleMsgDeployedSubstance.subId) ? eleMsgDeployedSubstance.deployment : A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap(
								$author$project$SubstancePlayer$substanceAttribute,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseEnter(
										subClicker(substance))
									])),
							_List_fromArray(
								[
									A3($author$project$SubstancePlayer$decorateVideo, substanceRelation.media, 185, 140),
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$substanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceRelation.name)
										]))
								]));
					case 'Dynamic':
						var substanceDynamic = substance.a;
						return _Utils_eq(substanceDynamic.subId, eleMsgDeployedSubstance.subId) ? eleMsgDeployedSubstance.deployment : A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap(
								$author$project$SubstancePlayer$substanceAttribute,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseEnter(
										subClicker(substance))
									])),
							_List_fromArray(
								[
									A3($author$project$SubstancePlayer$decorateVideo, substanceDynamic.video, 185, 140),
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$substanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceDynamic.name)
										]))
								]));
					default:
						var substancePotential = substance.a;
						return A2(
							$mdgriffith$elm_ui$Element$image,
							_Utils_ap(
								$author$project$SubstancePlayer$substanceImageAttribute(dimension),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseEnter(
										subClicker(substance))
									])),
							{description: 'Potential', src: substancePotential.image});
				}
			}
		} else {
			if (selectedMenu.$ === 'Just') {
				var activeMenu = selectedMenu.a;
				switch (substance.$) {
					case 'Relation':
						var substanceRelation = substance.a;
						return _Utils_eq(substanceRelation.subId, activeMenu.a) ? A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap($author$project$SubstancePlayer$substanceAttribute, activeMenu.b),
							_List_fromArray(
								[
									A3($author$project$SubstancePlayer$decorateVideo, substanceRelation.media, 200, 150),
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$selectedSubstanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceRelation.name)
										]))
								])) : A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap(
								$author$project$SubstancePlayer$substanceAttribute,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseEnter(
										subClicker(substance))
									])),
							_List_fromArray(
								[
									A3($author$project$SubstancePlayer$decorateVideo, substanceRelation.media, 185, 140),
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$substanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceRelation.name)
										]))
								]));
					case 'Dynamic':
						var substanceDynamic = substance.a;
						return _Utils_eq(substanceDynamic.subId, activeMenu.a) ? A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap($author$project$SubstancePlayer$substanceAttribute, activeMenu.b),
							_List_fromArray(
								[
									A3($author$project$SubstancePlayer$decorateVideo, substanceDynamic.video, 200, 150),
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$selectedSubstanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceDynamic.name)
										]))
								])) : A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap(
								$author$project$SubstancePlayer$substanceAttribute,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseEnter(
										subClicker(substance))
									])),
							_List_fromArray(
								[
									A3($author$project$SubstancePlayer$decorateVideo, substanceDynamic.video, 185, 140),
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$substanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceDynamic.name)
										]))
								]));
					default:
						var substancePotential = substance.a;
						return _Utils_eq(substancePotential.subId, activeMenu.a) ? A2(
							$mdgriffith$elm_ui$Element$image,
							_Utils_ap(
								$author$project$SubstancePlayer$substanceImageAttribute(dimension),
								activeMenu.b),
							{description: 'Potential', src: substancePotential.image}) : A2(
							$mdgriffith$elm_ui$Element$image,
							_Utils_ap(
								$author$project$SubstancePlayer$substanceImageAttribute(dimension),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseEnter(
										subClicker(substance))
									])),
							{description: 'Potential', src: substancePotential.image});
				}
			} else {
				switch (substance.$) {
					case 'Relation':
						var substanceRelation = substance.a;
						return A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap(
								$author$project$SubstancePlayer$substanceAttribute,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseEnter(
										subClicker(substance))
									])),
							_List_fromArray(
								[
									A3($author$project$SubstancePlayer$decorateVideo, substanceRelation.media, 185, 140),
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$substanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceRelation.name)
										]))
								]));
					case 'Dynamic':
						var substanceDynamic = substance.a;
						return A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap(
								$author$project$SubstancePlayer$substanceAttribute,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseEnter(
										subClicker(substance))
									])),
							_List_fromArray(
								[
									A3($author$project$SubstancePlayer$decorateVideo, substanceDynamic.video, 185, 140),
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$substanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceDynamic.name)
										]))
								]));
					default:
						var substancePotential = substance.a;
						return A2(
							$mdgriffith$elm_ui$Element$image,
							_Utils_ap(
								$author$project$SubstancePlayer$substanceImageAttribute(dimension),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseEnter(
										subClicker(substance))
									])),
							{description: 'Potential', src: substancePotential.image});
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AsRow = {$: 'AsRow'};
var $mdgriffith$elm_ui$Internal$Model$asRow = $mdgriffith$elm_ui$Internal$Model$AsRow;
var $mdgriffith$elm_ui$Element$row = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asRow,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $author$project$SubstancePlayer$rowPlainSubstanceAttribute = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$spacing(30),
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229)),
		$mdgriffith$elm_ui$Element$padding(20)
	]);
var $author$project$SubstancePlayer$displayInactiveSubstanceList = F4(
	function (substanceList, clickEventHandler, selectedMenu, deployedSubstance) {
		return A2(
			$mdgriffith$elm_ui$Element$row,
			$author$project$SubstancePlayer$rowPlainSubstanceAttribute,
			A2(
				$elm$core$List$map,
				function (a) {
					return A5(
						$author$project$SubstancePlayer$displaySubstanceWithMenu,
						a,
						clickEventHandler,
						selectedMenu,
						deployedSubstance,
						_Utils_Tuple2(185, 140));
				},
				substanceList));
	});
var $author$project$ApplicationPlayer$displayInactiveSubElement = F2(
	function (appMsgPlayApp, substanceInactive) {
		var _v0 = substanceInactive.substanceDisplay;
		if (_v0.$ === 'Just') {
			var substanceGraphElList = _v0.a;
			return A2(
				$mdgriffith$elm_ui$Element$column,
				_List_Nil,
				_List_fromArray(
					[
						A4(
						$author$project$SubstancePlayer$displayInactiveSubstanceList,
						substanceGraphElList,
						appMsgPlayApp.sendSubSelected(substanceInactive),
						appMsgPlayApp.selectedSubstanceMenu,
						appMsgPlayApp.deployedSubstance)
					]));
		} else {
			return $mdgriffith$elm_ui$Element$text('');
		}
	});
var $mdgriffith$elm_ui$Internal$Model$OnRight = {$: 'OnRight'};
var $mdgriffith$elm_ui$Element$createNearby = F2(
	function (loc, element) {
		if (element.$ === 'Empty') {
			return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
		} else {
			return A2($mdgriffith$elm_ui$Internal$Model$Nearby, loc, element);
		}
	});
var $mdgriffith$elm_ui$Element$onRight = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$OnRight, element);
};
var $mdgriffith$elm_ui$Element$fillPortion = $mdgriffith$elm_ui$Internal$Model$Fill;
var $mdgriffith$elm_ui$Internal$Flag$bgGradient = $mdgriffith$elm_ui$Internal$Flag$flag(10);
var $mdgriffith$elm_ui$Element$Background$gradient = function (_v0) {
	var angle = _v0.angle;
	var steps = _v0.steps;
	if (!steps.b) {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	} else {
		if (!steps.b.b) {
			var clr = steps.a;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$bgColor,
				A3(
					$mdgriffith$elm_ui$Internal$Model$Colored,
					'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
					'background-color',
					clr));
		} else {
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$bgGradient,
				A3(
					$mdgriffith$elm_ui$Internal$Model$Single,
					'bg-grad-' + A2(
						$elm$core$String$join,
						'-',
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$floatClass(angle),
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$formatColorClass, steps))),
					'background-image',
					'linear-gradient(' + (A2(
						$elm$core$String$join,
						', ',
						A2(
							$elm$core$List$cons,
							$elm$core$String$fromFloat(angle) + 'rad',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$formatColor, steps))) + ')')));
		}
	}
};
var $mdgriffith$elm_ui$Element$spaceEvenly = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$spacing, $mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly);
var $author$project$SubstancePlayer$gradientEffect = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$padding(3),
		$mdgriffith$elm_ui$Element$spaceEvenly,
		$mdgriffith$elm_ui$Element$Background$gradient(
		{
			angle: 0,
			steps: _List_fromArray(
				[
					A3($mdgriffith$elm_ui$Element$rgb255, 150, 150, 150),
					A3($mdgriffith$elm_ui$Element$rgb255, 205, 205, 205)
				])
		})
	]);
var $author$project$SubstancePlayer$activateLienSubstance = F4(
	function (substanceLiee, subClicker, subMenu, dimension) {
		switch (substanceLiee.$) {
			case 'SubLiee':
				var principale = substanceLiee.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$alignTop,
							$mdgriffith$elm_ui$Element$width(
							$mdgriffith$elm_ui$Element$fillPortion(1)),
							$mdgriffith$elm_ui$Element$Events$onClick(
							subClicker(principale))
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$column,
							$author$project$SubstancePlayer$gradientEffect,
							_List_fromArray(
								[
									A5($author$project$SubstancePlayer$displaySubstanceWithMenu, principale, subClicker, subMenu, $elm$core$Maybe$Nothing, dimension)
								]))
						]));
			case 'Error':
				var err = substanceLiee.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$paragraph,
							_List_Nil,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$text(err)
								]))
						]));
			default:
				var str = substanceLiee.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$paragraph,
							_List_Nil,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$text('Error LCA-4S Can\'t link substance:' + str)
								]))
						]));
		}
	});
var $author$project$SubstancePlayer$Error = function (a) {
	return {$: 'Error', a: a};
};
var $author$project$SubstancePlayer$SubLiee = function (a) {
	return {$: 'SubLiee', a: a};
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$SubstancePlayer$testSubstance = F2(
	function (substance, idSub) {
		switch (substance.$) {
			case 'Relation':
				var substanceRelation = substance.a;
				return _Utils_eq(substanceRelation.subId, idSub);
			case 'Dynamic':
				var substanceDynamic = substance.a;
				return _Utils_eq(substanceDynamic.subId, idSub);
			default:
				var substancePotential = substance.a;
				return _Utils_eq(substancePotential.subId, idSub);
		}
	});
var $author$project$SubstancePlayer$findSubstance = F2(
	function (substanceLiee, substanceList) {
		switch (substanceLiee.$) {
			case 'Lien':
				var idSub = substanceLiee.a;
				var substanceRes = $elm$core$List$head(
					A2(
						$elm$core$List$filter,
						function (sub) {
							return A2($author$project$SubstancePlayer$testSubstance, sub, idSub);
						},
						substanceList));
				if (substanceRes.$ === 'Just') {
					var value = substanceRes.a;
					return $author$project$SubstancePlayer$SubLiee(value);
				} else {
					return $author$project$SubstancePlayer$Error('Error LCA-1D ecode error in finding:' + idSub);
				}
			case 'SubLiee':
				var substance = substanceLiee.a;
				return $author$project$SubstancePlayer$SubLiee(substance);
			default:
				var msg = substanceLiee.a;
				return $author$project$SubstancePlayer$Error(msg);
		}
	});
var $author$project$SubstancePlayer$xplodSub = F4(
	function (substanceList, substance, subClicker, subMenu) {
		switch (substance.$) {
			case 'Relation':
				var substanceRelation = substance.a;
				return {
					deployment: A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$alignTop]),
						_List_fromArray(
							[
								A5(
								$author$project$SubstancePlayer$displaySubstanceWithMenu,
								substance,
								subClicker,
								subMenu,
								$elm$core$Maybe$Nothing,
								_Utils_Tuple2(200, 150)),
								A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[$mdgriffith$elm_ui$Element$centerX]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$image,
										_List_fromArray(
											[$mdgriffith$elm_ui$Element$centerX]),
										{description: 'Ouverture de Substance', src: 'img/Icons/triangle-relation.png'}),
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_Nil,
										_List_fromArray(
											[
												A4(
												$author$project$SubstancePlayer$activateLienSubstance,
												A2($author$project$SubstancePlayer$findSubstance, substanceRelation.substance1, substanceList),
												subClicker,
												subMenu,
												_Utils_Tuple2(185, 140)),
												A4(
												$author$project$SubstancePlayer$activateLienSubstance,
												A2($author$project$SubstancePlayer$findSubstance, substanceRelation.substance2, substanceList),
												subClicker,
												subMenu,
												_Utils_Tuple2(185, 140))
											]))
									]))
							])),
					subId: substanceRelation.subId
				};
			case 'Dynamic':
				var substanceDynamic = substance.a;
				return {
					deployment: A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$alignTop]),
						_List_fromArray(
							[
								A5(
								$author$project$SubstancePlayer$displaySubstanceWithMenu,
								substance,
								subClicker,
								subMenu,
								$elm$core$Maybe$Nothing,
								_Utils_Tuple2(200, 150)),
								A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[$mdgriffith$elm_ui$Element$centerX]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$image,
										_List_fromArray(
											[$mdgriffith$elm_ui$Element$centerX]),
										{description: 'Ouverture de Substance', src: 'img/Icons/triangle-relation.png'}),
										A4(
										$author$project$SubstancePlayer$activateLienSubstance,
										A2($author$project$SubstancePlayer$findSubstance, substanceDynamic.principal, substanceList),
										subClicker,
										subMenu,
										_Utils_Tuple2(185, 140))
									]))
							])),
					subId: substanceDynamic.subId
				};
			default:
				var substancePotential = substance.a;
				return {
					deployment: A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$alignTop]),
						_List_fromArray(
							[
								A5(
								$author$project$SubstancePlayer$displaySubstanceWithMenu,
								substance,
								subClicker,
								subMenu,
								$elm$core$Maybe$Nothing,
								_Utils_Tuple2(200, 150))
							])),
					subId: substancePotential.subId
				};
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $mdgriffith$elm_ui$Element$spacingXY = F2(
	function (x, y) {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$spacing,
			A3(
				$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
				A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, y),
				x,
				y));
	});
var $author$project$SubstancePlayer$rowAttribute = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229)),
		$mdgriffith$elm_ui$Element$padding(20),
		A2($mdgriffith$elm_ui$Element$spacingXY, 30, 0)
	]);
var $author$project$SubstancePlayer$deployLienSubstance = F5(
	function (deploymentList, childrenList, substanceLiee, subClicker, subMenu) {
		switch (substanceLiee.$) {
			case 'Lien':
				var idLien = substanceLiee.a;
				var _v2 = $elm$core$List$head(
					A2(
						$elm$core$List$filter,
						function (sub) {
							return A2($author$project$SubstancePlayer$testSubstance, sub, idLien);
						},
						childrenList));
				if (_v2.$ === 'Just') {
					var substance = _v2.a;
					return A2($elm$core$List$member, idLien, deploymentList) ? A5($author$project$SubstancePlayer$xplodChild, deploymentList, childrenList, substance, subClicker, subMenu) : A5(
						$author$project$SubstancePlayer$displaySubstanceWithMenu,
						substance,
						subClicker,
						$elm$core$Maybe$Just(subMenu),
						$elm$core$Maybe$Nothing,
						_Utils_Tuple2(200, 150));
				} else {
					return $mdgriffith$elm_ui$Element$text('Erreur d\'affichage');
				}
			case 'SubLiee':
				var substanceRez = substanceLiee.a;
				switch (substanceRez.$) {
					case 'Relation':
						var subRel = substanceRez.a;
						return A2($elm$core$List$member, subRel.subId, deploymentList) ? A5($author$project$SubstancePlayer$xplodChild, deploymentList, childrenList, substanceRez, subClicker, subMenu) : A5(
							$author$project$SubstancePlayer$displaySubstanceWithMenu,
							substanceRez,
							subClicker,
							$elm$core$Maybe$Just(subMenu),
							$elm$core$Maybe$Nothing,
							_Utils_Tuple2(200, 150));
					case 'Dynamic':
						var subDyn = substanceRez.a;
						return A2($elm$core$List$member, subDyn.subId, deploymentList) ? A5($author$project$SubstancePlayer$xplodChild, deploymentList, childrenList, substanceRez, subClicker, subMenu) : A5(
							$author$project$SubstancePlayer$displaySubstanceWithMenu,
							substanceRez,
							subClicker,
							$elm$core$Maybe$Just(subMenu),
							$elm$core$Maybe$Nothing,
							_Utils_Tuple2(200, 150));
					default:
						var subPot = substanceRez.a;
						return A5(
							$author$project$SubstancePlayer$displaySubstanceWithMenu,
							substanceRez,
							subClicker,
							$elm$core$Maybe$Just(subMenu),
							$elm$core$Maybe$Nothing,
							_Utils_Tuple2(200, 150));
				}
			default:
				var message = substanceLiee.a;
				return $mdgriffith$elm_ui$Element$text(message);
		}
	});
var $author$project$SubstancePlayer$xplodChild = F5(
	function (deploymentList, childrenList, originSubstance, subClicker, subMenu) {
		switch (originSubstance.$) {
			case 'Relation':
				var substanceRelation = originSubstance.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					$author$project$SubstancePlayer$substanceAttribute,
					_List_fromArray(
						[
							A5(
							$author$project$SubstancePlayer$displaySubstanceWithMenu,
							originSubstance,
							subClicker,
							$elm$core$Maybe$Just(subMenu),
							$elm$core$Maybe$Nothing,
							_Utils_Tuple2(200, 150)),
							A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$centerX]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$image,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$centerX]),
									{description: 'Ouverture de Substance', src: 'img/Icons/triangle-relation.png'}),
									A2(
									$mdgriffith$elm_ui$Element$row,
									$author$project$SubstancePlayer$rowAttribute,
									_List_fromArray(
										[
											A5($author$project$SubstancePlayer$deployLienSubstance, deploymentList, childrenList, substanceRelation.substance1, subClicker, subMenu),
											A5($author$project$SubstancePlayer$deployLienSubstance, deploymentList, childrenList, substanceRelation.substance2, subClicker, subMenu)
										]))
								]))
						]));
			case 'Dynamic':
				var substanceDynamic = originSubstance.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					$author$project$SubstancePlayer$substanceAttribute,
					_List_fromArray(
						[
							A5(
							$author$project$SubstancePlayer$displaySubstanceWithMenu,
							originSubstance,
							subClicker,
							$elm$core$Maybe$Just(subMenu),
							$elm$core$Maybe$Nothing,
							_Utils_Tuple2(200, 150)),
							A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$centerX]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$image,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$centerX]),
									{description: 'Ouverture de Substance', src: 'img/Icons/triangle-relation.png'}),
									A5($author$project$SubstancePlayer$deployLienSubstance, deploymentList, childrenList, substanceDynamic.principal, subClicker, subMenu)
								]))
						]));
			default:
				var substancePotential = originSubstance.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					$author$project$SubstancePlayer$substanceAttribute,
					_List_fromArray(
						[
							A5(
							$author$project$SubstancePlayer$displaySubstanceWithMenu,
							originSubstance,
							subClicker,
							$elm$core$Maybe$Just(subMenu),
							$elm$core$Maybe$Nothing,
							_Utils_Tuple2(200, 150))
						]));
		}
	});
var $author$project$SubstancePlayer$xplodSubWithChild = F5(
	function (deploymentList, childrenList, originSubstance, subClicker, subMenu) {
		if (originSubstance.$ === 'Just') {
			var substance = originSubstance.a;
			switch (substance.$) {
				case 'Relation':
					var substanceRelation = substance.a;
					return {
						deployment: A2(
							$mdgriffith$elm_ui$Element$column,
							$author$project$SubstancePlayer$substanceAttribute,
							_List_fromArray(
								[
									A5(
									$author$project$SubstancePlayer$displaySubstanceWithMenu,
									substance,
									subClicker,
									$elm$core$Maybe$Just(subMenu),
									$elm$core$Maybe$Nothing,
									_Utils_Tuple2(200, 150)),
									A2(
									$mdgriffith$elm_ui$Element$column,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$centerX]),
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$image,
											_List_fromArray(
												[$mdgriffith$elm_ui$Element$centerX]),
											{description: 'Ouverture de Substance', src: 'img/Icons/triangle-relation.png'}),
											A2(
											$mdgriffith$elm_ui$Element$row,
											$author$project$SubstancePlayer$rowAttribute,
											_List_fromArray(
												[
													A5($author$project$SubstancePlayer$deployLienSubstance, deploymentList, childrenList, substanceRelation.substance1, subClicker, subMenu),
													A5($author$project$SubstancePlayer$deployLienSubstance, deploymentList, childrenList, substanceRelation.substance2, subClicker, subMenu)
												]))
										]))
								])),
						subId: substanceRelation.subId
					};
				case 'Dynamic':
					var substanceDynamic = substance.a;
					return {
						deployment: A2(
							$mdgriffith$elm_ui$Element$column,
							$author$project$SubstancePlayer$substanceAttribute,
							_List_fromArray(
								[
									A5(
									$author$project$SubstancePlayer$displaySubstanceWithMenu,
									substance,
									subClicker,
									$elm$core$Maybe$Just(subMenu),
									$elm$core$Maybe$Nothing,
									_Utils_Tuple2(200, 150)),
									A2(
									$mdgriffith$elm_ui$Element$column,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$centerX]),
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$image,
											_List_fromArray(
												[$mdgriffith$elm_ui$Element$centerX]),
											{description: 'Ouverture de Substance', src: 'img/Icons/triangle-relation.png'}),
											A5($author$project$SubstancePlayer$deployLienSubstance, deploymentList, childrenList, substanceDynamic.principal, subClicker, subMenu)
										]))
								])),
						subId: substanceDynamic.subId
					};
				default:
					var substancePotential = substance.a;
					return {
						deployment: A2(
							$mdgriffith$elm_ui$Element$column,
							$author$project$SubstancePlayer$substanceAttribute,
							_List_fromArray(
								[
									A5(
									$author$project$SubstancePlayer$displaySubstanceWithMenu,
									substance,
									subClicker,
									$elm$core$Maybe$Just(subMenu),
									$elm$core$Maybe$Nothing,
									_Utils_Tuple2(200, 150))
								])),
						subId: substancePotential.subId
					};
			}
		} else {
			return {
				deployment: $mdgriffith$elm_ui$Element$text(''),
				subId: ''
			};
		}
	});
var $author$project$ApplicationPlayer$addSubstance = F3(
	function (appMsgPlayApp, substanceInactive, menuList) {
		var _v0 = appMsgPlayApp.originElement;
		if (_v0.$ === 'Just') {
			var subContainer = _v0.a;
			var _v1 = appMsgPlayApp.deployOrigin;
			if (_v1.$ === 'Just') {
				var substance = _v1.a;
				var _v2 = appMsgPlayApp.deploymentList;
				if (_v2.$ === 'Just') {
					var deployList = _v2.a;
					var appDeploy = _Utils_update(
						appMsgPlayApp,
						{
							deployedSubstance: $elm$core$Maybe$Just(
								A5(
									$author$project$SubstancePlayer$xplodSubWithChild,
									deployList,
									A2($elm$core$Maybe$withDefault, _List_Nil, substanceInactive.childrenSubstance),
									appMsgPlayApp.deployOrigin,
									appMsgPlayApp.sendSubSelected(substanceInactive),
									menuList)),
							selectedSubstanceMenu: $elm$core$Maybe$Just(menuList)
						});
					return _Utils_update(
						appMsgPlayApp,
						{
							deployedContainer: $elm$core$Maybe$Just(
								{
									deployment: A2(
										$mdgriffith$elm_ui$Element$row,
										_Utils_ap(
											$author$project$ApplicationPlayer$childrenContainer,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$onRight(
													A2(
														$mdgriffith$elm_ui$Element$Input$button,
														$author$project$ApplicationPlayer$closerAttribute,
														{
															label: $mdgriffith$elm_ui$Element$text('X'),
															onPress: $elm$core$Maybe$Just(appMsgPlayApp.unDeploy)
														}))
												])),
										_List_fromArray(
											[
												A2($author$project$ApplicationPlayer$displayInactiveSubElement, appDeploy, substanceInactive)
											])),
									subId: subContainer.valeur
								}),
							deployedSubstance: $elm$core$Maybe$Just(
								A5(
									$author$project$SubstancePlayer$xplodSubWithChild,
									deployList,
									A2($elm$core$Maybe$withDefault, _List_Nil, substanceInactive.childrenSubstance),
									appMsgPlayApp.deployOrigin,
									appMsgPlayApp.sendSubSelected(substanceInactive),
									menuList)),
							selectedElementMenu: $elm$core$Maybe$Nothing,
							selectedSubstanceMenu: $elm$core$Maybe$Just(menuList)
						});
				} else {
					var appList = _Utils_update(
						appMsgPlayApp,
						{
							deployedSubstance: $elm$core$Maybe$Just(
								A4(
									$author$project$SubstancePlayer$xplodSub,
									A2($elm$core$Maybe$withDefault, _List_Nil, substanceInactive.childrenSubstance),
									substance,
									appMsgPlayApp.sendSubSelected(substanceInactive),
									$elm$core$Maybe$Just(menuList))),
							selectedSubstanceMenu: $elm$core$Maybe$Just(menuList)
						});
					return _Utils_update(
						appMsgPlayApp,
						{
							deployedContainer: $elm$core$Maybe$Just(
								{
									deployment: A2(
										$mdgriffith$elm_ui$Element$row,
										_Utils_ap(
											$author$project$ApplicationPlayer$childrenContainer,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$onRight(
													A2(
														$mdgriffith$elm_ui$Element$Input$button,
														$author$project$ApplicationPlayer$closerAttribute,
														{
															label: $mdgriffith$elm_ui$Element$text('X'),
															onPress: $elm$core$Maybe$Just(appMsgPlayApp.unDeploy)
														}))
												])),
										_List_fromArray(
											[
												A2($author$project$ApplicationPlayer$displayInactiveSubElement, appList, substanceInactive)
											])),
									subId: subContainer.valeur
								}),
							deployedSubstance: $elm$core$Maybe$Just(
								A4(
									$author$project$SubstancePlayer$xplodSub,
									A2($elm$core$Maybe$withDefault, _List_Nil, substanceInactive.childrenSubstance),
									substance,
									appMsgPlayApp.sendSubSelected(substanceInactive),
									$elm$core$Maybe$Just(menuList))),
							selectedElementMenu: $elm$core$Maybe$Nothing,
							selectedSubstanceMenu: $elm$core$Maybe$Just(menuList)
						});
				}
			} else {
				var appPlay = _Utils_update(
					appMsgPlayApp,
					{
						selectedSubstanceMenu: $elm$core$Maybe$Just(menuList)
					});
				return _Utils_update(
					appMsgPlayApp,
					{
						deployedContainer: $elm$core$Maybe$Just(
							{
								deployment: A2(
									$mdgriffith$elm_ui$Element$row,
									_Utils_ap(
										$author$project$ApplicationPlayer$childrenContainer,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$onRight(
												A2(
													$mdgriffith$elm_ui$Element$Input$button,
													$author$project$ApplicationPlayer$closerAttribute,
													{
														label: $mdgriffith$elm_ui$Element$text('X'),
														onPress: $elm$core$Maybe$Just(appMsgPlayApp.unDeploy)
													}))
											])),
									_List_fromArray(
										[
											A2($author$project$ApplicationPlayer$displayInactiveSubElement, appPlay, substanceInactive)
										])),
								subId: subContainer.valeur
							}),
						selectedElementMenu: $elm$core$Maybe$Nothing,
						selectedSubstanceMenu: $elm$core$Maybe$Just(menuList)
					});
			}
		} else {
			var _v3 = appMsgPlayApp.deployOrigin;
			if (_v3.$ === 'Just') {
				var substance = _v3.a;
				var _v4 = appMsgPlayApp.deploymentList;
				if (_v4.$ === 'Just') {
					var deployList = _v4.a;
					return _Utils_update(
						appMsgPlayApp,
						{
							deployedSubstance: $elm$core$Maybe$Just(
								A5(
									$author$project$SubstancePlayer$xplodSubWithChild,
									deployList,
									A2($elm$core$Maybe$withDefault, _List_Nil, substanceInactive.childrenSubstance),
									appMsgPlayApp.deployOrigin,
									appMsgPlayApp.sendSubSelected(substanceInactive),
									menuList)),
							selectedElementMenu: $elm$core$Maybe$Nothing,
							selectedSubstanceMenu: $elm$core$Maybe$Just(menuList)
						});
				} else {
					return _Utils_update(
						appMsgPlayApp,
						{
							deployedSubstance: $elm$core$Maybe$Just(
								A4(
									$author$project$SubstancePlayer$xplodSub,
									A2($elm$core$Maybe$withDefault, _List_Nil, substanceInactive.childrenSubstance),
									substance,
									appMsgPlayApp.sendSubSelected(substanceInactive),
									$elm$core$Maybe$Just(menuList))),
							selectedElementMenu: $elm$core$Maybe$Nothing,
							selectedSubstanceMenu: $elm$core$Maybe$Just(menuList)
						});
				}
			} else {
				return _Utils_update(
					appMsgPlayApp,
					{
						selectedElementMenu: $elm$core$Maybe$Nothing,
						selectedSubstanceMenu: $elm$core$Maybe$Just(menuList)
					});
			}
		}
	});
var $author$project$Graphic_Element$Motrice = function (a) {
	return {$: 'Motrice', a: a};
};
var $author$project$Graphic_Element$Relationnelle = function (a) {
	return {$: 'Relationnelle', a: a};
};
var $elm_community$maybe_extra$Maybe$Extra$isNothing = function (m) {
	if (m.$ === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var $author$project$Graphic_Element$addSubstance = F2(
	function (eleMsgElementEdited, substance) {
		var _v0 = eleMsgElementEdited.activeCanvas;
		switch (_v0.$) {
			case 'Vide':
				return eleMsgElementEdited;
			case 'Potentiel':
				return eleMsgElementEdited;
			case 'Motrice':
				var motCan = _v0.a;
				return _Utils_update(
					eleMsgElementEdited,
					{
						activeCanvas: $author$project$Graphic_Element$Motrice(
							_Utils_update(
								motCan,
								{
									principale: $elm$core$Maybe$Just(substance)
								}))
					});
			default:
				var relCan = _v0.a;
				return $elm_community$maybe_extra$Maybe$Extra$isNothing(relCan.premiere) ? _Utils_update(
					eleMsgElementEdited,
					{
						activeCanvas: $author$project$Graphic_Element$Relationnelle(
							_Utils_update(
								relCan,
								{
									premiere: $elm$core$Maybe$Just(substance)
								}))
					}) : _Utils_update(
					eleMsgElementEdited,
					{
						activeCanvas: $author$project$Graphic_Element$Relationnelle(
							_Utils_update(
								relCan,
								{
									seconde: $elm$core$Maybe$Just(substance)
								}))
					});
		}
	});
var $author$project$Graphic_Element$Potentiel = function (a) {
	return {$: 'Potentiel', a: a};
};
var $author$project$Graphic_Element$ajouterTitre = F2(
	function (eleMsgElementEdited, titre) {
		var _v0 = eleMsgElementEdited.activeCanvas;
		switch (_v0.$) {
			case 'Vide':
				return eleMsgElementEdited;
			case 'Potentiel':
				var potCan = _v0.a;
				return _Utils_update(
					eleMsgElementEdited,
					{
						activeCanvas: $author$project$Graphic_Element$Potentiel(
							{
								imageUrl: potCan.imageUrl,
								title: $elm$core$Maybe$Just(titre),
								userId: eleMsgElementEdited.userId
							})
					});
			case 'Motrice':
				var motCan = _v0.a;
				return _Utils_update(
					eleMsgElementEdited,
					{
						activeCanvas: $author$project$Graphic_Element$Motrice(
							_Utils_update(
								motCan,
								{
									title: $elm$core$Maybe$Just(titre)
								}))
					});
			default:
				var relCan = _v0.a;
				return _Utils_update(
					eleMsgElementEdited,
					{
						activeCanvas: $author$project$Graphic_Element$Relationnelle(
							_Utils_update(
								relCan,
								{
									title: $elm$core$Maybe$Just(titre)
								}))
					});
		}
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $author$project$ApplicationPlayer$FiltreIDSubstance = {$: 'FiltreIDSubstance'};
var $author$project$ApplicationPlayer$idInterSubItem = F2(
	function (substanceInteractive, substanceInteractive2) {
		return _Utils_eq(substanceInteractive.gesteAssocie.idGeste, substanceInteractive2.gesteAssocie.idGeste);
	});
var $elm_community$list_extra$List$Extra$remove = F2(
	function (x, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var y = xs.a;
			var ys = xs.b;
			return _Utils_eq(x, y) ? ys : A2(
				$elm$core$List$cons,
				y,
				A2($elm_community$list_extra$List$Extra$remove, x, ys));
		}
	});
var $author$project$ApplicationPlayer$cancelSubstanceSelection = F3(
	function (appMsgPlayApp, interSubstance, subId) {
		var _v0 = appMsgPlayApp.subInterList;
		if (_v0.$ === 'Nothing') {
			return appMsgPlayApp;
		} else {
			var interSubList = _v0.a;
			var filtreCourant = interSubstance.gesteAssocie.filtre;
			var _v1 = interSubstance.gesteAssocie.typeResultat;
			switch (_v1.$) {
				case 'PotentielleSub':
					return appMsgPlayApp;
				case 'DynamiqueSub':
					return appMsgPlayApp;
				case 'RelationSub':
					return appMsgPlayApp;
				case 'BinaryFile':
					return appMsgPlayApp;
				case 'DataString':
					return appMsgPlayApp;
				case 'DateTime':
					return appMsgPlayApp;
				case 'Duree':
					return appMsgPlayApp;
				case 'SubstanceElement':
					var gesteActif = interSubstance.gesteAssocie;
					return _Utils_update(
						appMsgPlayApp,
						{
							subInterList: $elm$core$Maybe$Just(
								A3(
									$elm_community$list_extra$List$Extra$setIf,
									$author$project$ApplicationPlayer$idInterSubItem(interSubstance),
									_Utils_update(
										interSubstance,
										{
											gesteAssocie: _Utils_update(
												gesteActif,
												{
													filtre: _Utils_update(
														filtreCourant,
														{idSubstance: $elm$core$Maybe$Nothing})
												})
										}),
									interSubList))
						});
				default:
					var gesteActif = interSubstance.gesteAssocie;
					var _v2 = filtreCourant.idSubstance;
					if (_v2.$ === 'Nothing') {
						return appMsgPlayApp;
					} else {
						var idList = _v2.a;
						return _Utils_update(
							appMsgPlayApp,
							{
								subInterList: $elm$core$Maybe$Just(
									A3(
										$elm_community$list_extra$List$Extra$setIf,
										$author$project$ApplicationPlayer$idInterSubItem(interSubstance),
										_Utils_update(
											interSubstance,
											{
												gesteAssocie: _Utils_update(
													gesteActif,
													{
														filtre: _Utils_update(
															filtreCourant,
															{
																idSubstance: $elm$core$Maybe$Just(
																	A2($elm_community$list_extra$List$Extra$remove, subId, idList)),
																listeFiltres: $elm$core$Maybe$Just(
																	_List_fromArray(
																		[$author$project$ApplicationPlayer$FiltreIDSubstance]))
															})
													})
											}),
										interSubList))
							});
					}
			}
		}
	});
var $author$project$ApplicationPlayer$cancelZoom = function (appMsgPlayApp) {
	return _Utils_update(
		appMsgPlayApp,
		{recordZoom: false, zoomedSubtance: $elm$core$Maybe$Nothing});
};
var $author$project$Graphic_Downloader$changeClickAction = F2(
	function (dataMsgGraphicData, clickAction) {
		return _Utils_update(
			dataMsgGraphicData,
			{selectGraphicAction: clickAction});
	});
var $author$project$ApplicationPlayer$closePlayer = function (appMsgPlayApp) {
	return _Utils_update(
		appMsgPlayApp,
		{chosenApp: $elm$core$Maybe$Nothing, deployOrigin: $elm$core$Maybe$Nothing, originElement: $elm$core$Maybe$Nothing, subInactiveList: $elm$core$Maybe$Nothing});
};
var $author$project$Graphic_Element$createSubstancePotentielle = function (eleMsgElementEdited) {
	return _Utils_update(
		eleMsgElementEdited,
		{
			activeCanvas: $author$project$Graphic_Element$Potentiel(
				{imageUrl: $elm$core$Maybe$Nothing, title: $elm$core$Maybe$Nothing, userId: eleMsgElementEdited.userId})
		});
};
var $author$project$ApplicationCreator$creerApplication = F2(
	function (eleMsgAppEdited, canvasApplication) {
		return _Utils_update(
			eleMsgAppEdited,
			{activeModule: canvasApplication});
	});
var $author$project$Graphic_Element$creerSubstanceMotrice = function (eleMsgElementEdited) {
	return _Utils_update(
		eleMsgElementEdited,
		{
			activeCanvas: $author$project$Graphic_Element$Motrice(
				{principale: $elm$core$Maybe$Nothing, title: $elm$core$Maybe$Nothing, userId: eleMsgElementEdited.userId, videoUrl: $elm$core$Maybe$Nothing})
		});
};
var $author$project$Graphic_Element$creerSubstanceRelation = function (eleMsgElementEdited) {
	return _Utils_update(
		eleMsgElementEdited,
		{
			activeCanvas: $author$project$Graphic_Element$Relationnelle(
				{premiere: $elm$core$Maybe$Nothing, seconde: $elm$core$Maybe$Nothing, title: $elm$core$Maybe$Nothing, userId: eleMsgElementEdited.userId, videoUrl: $elm$core$Maybe$Nothing})
		});
};
var $author$project$ApplicationCreator$ListeAppInfo = F2(
	function (activeApplication, remainingApplication) {
		return {activeApplication: activeApplication, remainingApplication: remainingApplication};
	});
var $author$project$ApplicationPlayer$AppInfo = F6(
	function (appId, iconUrl, title, creatorId, appType, status) {
		return {appId: appId, appType: appType, creatorId: creatorId, iconUrl: iconUrl, status: status, title: title};
	});
var $author$project$ApplicationPlayer$DidactiqueModule = {$: 'DidactiqueModule'};
var $author$project$ApplicationPlayer$FournisseurModule = {$: 'FournisseurModule'};
var $author$project$ApplicationPlayer$LocataireModule = {$: 'LocataireModule'};
var $author$project$ApplicationPlayer$ProprietaireModule = {$: 'ProprietaireModule'};
var $author$project$ApplicationPlayer$decodeAppType = A2(
	$elm$json$Json$Decode$andThen,
	function (string) {
		switch (string) {
			case 'didactique':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$DidactiqueModule);
			case 'proprietaire':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$ProprietaireModule);
			case 'locataire':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$LocataireModule);
			case 'fournisseur':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$FournisseurModule);
			default:
				return $elm$json$Json$Decode$fail('Invalid AppType');
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$ApplicationPlayer$Global = {$: 'Global'};
var $author$project$ApplicationPlayer$decodeShareStatus = A2(
	$elm$json$Json$Decode$andThen,
	function (string) {
		switch (string) {
			case 'NoStatus':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$NoStatus);
			case 'NotShared':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$NotShared);
			case 'Global':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$Global);
			default:
				return $elm$json$Json$Decode$fail('Invalid AppShareStatus');
		}
	},
	$elm$json$Json$Decode$string);
var $elm$json$Json$Decode$map6 = _Json_map6;
var $author$project$ApplicationPlayer$decodeAppInfo = A7(
	$elm$json$Json$Decode$map6,
	$author$project$ApplicationPlayer$AppInfo,
	A2($elm$json$Json$Decode$field, 'appId', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'iconUrl', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'creatorId', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'appType', $author$project$ApplicationPlayer$decodeAppType),
	A2($elm$json$Json$Decode$field, 'status', $author$project$ApplicationPlayer$decodeShareStatus));
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $author$project$ApplicationCreator$decodeAppState = A3(
	$elm$json$Json$Decode$map2,
	$author$project$ApplicationCreator$ListeAppInfo,
	A2(
		$elm$json$Json$Decode$field,
		'activeApplication',
		$elm$json$Json$Decode$maybe(
			$elm$json$Json$Decode$list($author$project$ApplicationPlayer$decodeAppInfo))),
	A2(
		$elm$json$Json$Decode$field,
		'remainingApplication',
		$elm$json$Json$Decode$maybe(
			$elm$json$Json$Decode$list($author$project$ApplicationPlayer$decodeAppType))));
var $author$project$Chat_Creator$ChatData = F3(
	function (completedWidgets, groupWidgets, contactId) {
		return {completedWidgets: completedWidgets, contactId: contactId, groupWidgets: groupWidgets};
	});
var $author$project$Chat_Creator$Coordinate = F2(
	function (clientX, clientY) {
		return {clientX: clientX, clientY: clientY};
	});
var $author$project$Chat_Creator$GroupWidget = F5(
	function (displayUrl, widgetId, position, constituant, answer) {
		return {answer: answer, constituant: constituant, displayUrl: displayUrl, position: position, widgetId: widgetId};
	});
var $author$project$Chat_Creator$Image = {$: 'Image'};
var $author$project$Chat_Creator$ToolWidget = F4(
	function (displayUrl, position, widgetId, parentId) {
		return {displayUrl: displayUrl, parentId: parentId, position: position, widgetId: widgetId};
	});
var $author$project$Chat_Creator$Video = {$: 'Video'};
var $author$project$Chat_Creator$VisualWidget = F5(
	function (displayUrl, tools, position, widgetId, category) {
		return {category: category, displayUrl: displayUrl, position: position, tools: tools, widgetId: widgetId};
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$json$Json$Decode$nullable = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder)
			]));
};
var $author$project$LucasCetPlatform$decodeChatData = $elm$json$Json$Decode$nullable(
	$elm$json$Json$Decode$list(
		A4(
			$elm$json$Json$Decode$map3,
			$author$project$Chat_Creator$ChatData,
			A2(
				$elm$json$Json$Decode$field,
				'completedWidgets',
				$elm$json$Json$Decode$list(
					A6(
						$elm$json$Json$Decode$map5,
						$author$project$Chat_Creator$VisualWidget,
						A2($elm$json$Json$Decode$field, 'displayUrl', $elm$json$Json$Decode$string),
						A2(
							$elm$json$Json$Decode$field,
							'tools',
							$elm$json$Json$Decode$list(
								A5(
									$elm$json$Json$Decode$map4,
									$author$project$Chat_Creator$ToolWidget,
									A2($elm$json$Json$Decode$field, 'displayUrl', $elm$json$Json$Decode$string),
									A2(
										$elm$json$Json$Decode$field,
										'position',
										A3(
											$elm$json$Json$Decode$map2,
											$author$project$Chat_Creator$Coordinate,
											A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
											A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float))),
									A2($elm$json$Json$Decode$field, 'widgetId', $elm$json$Json$Decode$int),
									A2($elm$json$Json$Decode$field, 'parentId', $elm$json$Json$Decode$int)))),
						A2(
							$elm$json$Json$Decode$field,
							'position',
							A3(
								$elm$json$Json$Decode$map2,
								$author$project$Chat_Creator$Coordinate,
								A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
								A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float))),
						A2($elm$json$Json$Decode$field, 'widgetId', $elm$json$Json$Decode$int),
						A2(
							$elm$json$Json$Decode$field,
							'category',
							A2(
								$elm$json$Json$Decode$andThen,
								function (string) {
									switch (string) {
										case 'Image':
											return $elm$json$Json$Decode$succeed($author$project$Chat_Creator$Image);
										case 'Video':
											return $elm$json$Json$Decode$succeed($author$project$Chat_Creator$Video);
										default:
											return $elm$json$Json$Decode$fail('Invalid WidgetNature');
									}
								},
								$elm$json$Json$Decode$string))))),
			A2(
				$elm$json$Json$Decode$field,
				'groupWidgets',
				$elm$json$Json$Decode$list(
					A6(
						$elm$json$Json$Decode$map5,
						$author$project$Chat_Creator$GroupWidget,
						A2($elm$json$Json$Decode$field, 'displayUrl', $elm$json$Json$Decode$string),
						A2($elm$json$Json$Decode$field, 'widgetId', $elm$json$Json$Decode$int),
						A2(
							$elm$json$Json$Decode$field,
							'position',
							A3(
								$elm$json$Json$Decode$map2,
								$author$project$Chat_Creator$Coordinate,
								A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
								A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float))),
						A2(
							$elm$json$Json$Decode$field,
							'constituant',
							$elm$json$Json$Decode$list(
								A6(
									$elm$json$Json$Decode$map5,
									$author$project$Chat_Creator$VisualWidget,
									A2($elm$json$Json$Decode$field, 'displayUrl', $elm$json$Json$Decode$string),
									A2(
										$elm$json$Json$Decode$field,
										'tools',
										$elm$json$Json$Decode$list(
											A5(
												$elm$json$Json$Decode$map4,
												$author$project$Chat_Creator$ToolWidget,
												A2($elm$json$Json$Decode$field, 'displayUrl', $elm$json$Json$Decode$string),
												A2(
													$elm$json$Json$Decode$field,
													'position',
													A3(
														$elm$json$Json$Decode$map2,
														$author$project$Chat_Creator$Coordinate,
														A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
														A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float))),
												A2($elm$json$Json$Decode$field, 'widgetId', $elm$json$Json$Decode$int),
												A2($elm$json$Json$Decode$field, 'parentId', $elm$json$Json$Decode$int)))),
									A2(
										$elm$json$Json$Decode$field,
										'position',
										A3(
											$elm$json$Json$Decode$map2,
											$author$project$Chat_Creator$Coordinate,
											A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
											A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float))),
									A2($elm$json$Json$Decode$field, 'widgetId', $elm$json$Json$Decode$int),
									A2(
										$elm$json$Json$Decode$field,
										'category',
										A2(
											$elm$json$Json$Decode$andThen,
											function (string) {
												switch (string) {
													case 'Image':
														return $elm$json$Json$Decode$succeed($author$project$Chat_Creator$Image);
													case 'Video':
														return $elm$json$Json$Decode$succeed($author$project$Chat_Creator$Video);
													default:
														return $elm$json$Json$Decode$fail('Invalid WidgetNature');
												}
											},
											$elm$json$Json$Decode$string))))),
						A2($elm$json$Json$Decode$field, 'answer', $elm$json$Json$Decode$int)))),
			A2($elm$json$Json$Decode$field, 'contactId', $elm$json$Json$Decode$string))));
var $author$project$LucasCetPlatform$FriendInfo = F2(
	function (userId, login) {
		return {login: login, userId: userId};
	});
var $author$project$LucasCetPlatform$decodeFriendsData = $elm$json$Json$Decode$list(
	A3(
		$elm$json$Json$Decode$map2,
		$author$project$LucasCetPlatform$FriendInfo,
		A2($elm$json$Json$Decode$field, 'userId', $elm$json$Json$Decode$string),
		A2($elm$json$Json$Decode$field, 'login', $elm$json$Json$Decode$string)));
var $author$project$Graphic_Element$definirMedia = F2(
	function (eleMsgElementEdited, mediaUrl) {
		var _v0 = eleMsgElementEdited.activeCanvas;
		switch (_v0.$) {
			case 'Vide':
				return eleMsgElementEdited;
			case 'Potentiel':
				var potCan = _v0.a;
				return _Utils_update(
					eleMsgElementEdited,
					{
						activeCanvas: $author$project$Graphic_Element$Potentiel(
							{
								imageUrl: $elm$core$Maybe$Just(mediaUrl),
								title: potCan.title,
								userId: eleMsgElementEdited.userId
							})
					});
			case 'Motrice':
				var motCan = _v0.a;
				return _Utils_update(
					eleMsgElementEdited,
					{
						activeCanvas: $author$project$Graphic_Element$Motrice(
							_Utils_update(
								motCan,
								{
									videoUrl: $elm$core$Maybe$Just(mediaUrl)
								}))
					});
			default:
				var relCan = _v0.a;
				return _Utils_update(
					eleMsgElementEdited,
					{
						activeCanvas: $author$project$Graphic_Element$Relationnelle(
							_Utils_update(
								relCan,
								{
									videoUrl: $elm$core$Maybe$Just(mediaUrl)
								}))
					});
		}
	});
var $author$project$ApplicationPlayer$deployContainer = F2(
	function (appMsgPlayApp, elemGraph) {
		return _Utils_update(
			appMsgPlayApp,
			{
				originElement: $elm$core$Maybe$Just(elemGraph)
			});
	});
var $author$project$SubstancePlayer$extractIdList = F5(
	function (childrenList, originList, rezList, substanceLiee, idSubstance) {
		switch (substanceLiee.$) {
			case 'Lien':
				var idLien = substanceLiee.a;
				if (_Utils_eq(idLien, idSubstance)) {
					return A2($elm$core$List$cons, idLien, rezList);
				} else {
					if (A2($elm$core$List$member, idLien, originList)) {
						var _v6 = $elm$core$List$head(
							A2(
								$elm$core$List$filter,
								function (sub) {
									return A2($author$project$SubstancePlayer$testSubstance, sub, idLien);
								},
								childrenList));
						if (_v6.$ === 'Just') {
							var subChild = _v6.a;
							return A5(
								$author$project$SubstancePlayer$setDeploymentList,
								childrenList,
								$elm$core$Maybe$Just(originList),
								rezList,
								$elm$core$Maybe$Just(subChild),
								idSubstance);
						} else {
							return _List_Nil;
						}
					} else {
						return _List_Nil;
					}
				}
			case 'SubLiee':
				var substance = substanceLiee.a;
				return A5(
					$author$project$SubstancePlayer$setDeploymentList,
					childrenList,
					$elm$core$Maybe$Just(originList),
					rezList,
					$elm$core$Maybe$Just(substance),
					idSubstance);
			default:
				var string = substanceLiee.a;
				return rezList;
		}
	});
var $author$project$SubstancePlayer$setDeploymentList = F5(
	function (childrenList, originList, resultList, originSubtance, idSubstance) {
		if (originList.$ === 'Just') {
			var deployedSubstanceList = originList.a;
			if (originSubtance.$ === 'Just') {
				var substance = originSubtance.a;
				switch (substance.$) {
					case 'Relation':
						var substanceRelation = substance.a;
						if (_Utils_eq(substanceRelation.subId, idSubstance)) {
							return A2($elm$core$List$cons, idSubstance, resultList);
						} else {
							var firstList = A5(
								$author$project$SubstancePlayer$extractIdList,
								childrenList,
								deployedSubstanceList,
								A2($elm$core$List$cons, substanceRelation.subId, resultList),
								substanceRelation.substance1,
								idSubstance);
							if (!firstList.b) {
								return A5(
									$author$project$SubstancePlayer$extractIdList,
									childrenList,
									deployedSubstanceList,
									A2($elm$core$List$cons, substanceRelation.subId, resultList),
									substanceRelation.substance2,
									idSubstance);
							} else {
								var x = firstList.a;
								var xs = firstList.b;
								var secondList = A5(
									$author$project$SubstancePlayer$extractIdList,
									childrenList,
									deployedSubstanceList,
									A2($elm$core$List$cons, substanceRelation.subId, resultList),
									substanceRelation.substance2,
									idSubstance);
								if (!secondList.b) {
									return firstList;
								} else {
									var a = secondList.a;
									var ab = secondList.b;
									return A2($elm$core$List$member, idSubstance, firstList) ? firstList : secondList;
								}
							}
						}
					case 'Dynamic':
						var substanceDynamic = substance.a;
						return _Utils_eq(substanceDynamic.subId, idSubstance) ? A2($elm$core$List$cons, idSubstance, resultList) : _Utils_ap(
							A5(
								$author$project$SubstancePlayer$extractIdList,
								childrenList,
								deployedSubstanceList,
								A2($elm$core$List$cons, substanceDynamic.subId, resultList),
								substanceDynamic.principal,
								idSubstance),
							resultList);
					default:
						var subPot = substance.a;
						return _List_Nil;
				}
			} else {
				return _List_Nil;
			}
		} else {
			return _List_Nil;
		}
	});
var $author$project$ApplicationPlayer$deploySubstance = F4(
	function (appMsgPlayApp, substanceInactive, substance, menuList) {
		var _v0 = appMsgPlayApp.originElement;
		if (_v0.$ === 'Just') {
			var subContainer = _v0.a;
			var _v1 = substanceInactive.substanceDisplay;
			if (_v1.$ === 'Just') {
				var substanceList = _v1.a;
				var _v2 = substanceInactive.childrenSubstance;
				if (_v2.$ === 'Just') {
					var childrenList = _v2.a;
					var newDeployment = A5($author$project$SubstancePlayer$setDeploymentList, childrenList, appMsgPlayApp.deploymentList, _List_Nil, appMsgPlayApp.deployOrigin, menuList.a);
					if (A2($elm$core$List$member, substance, substanceList)) {
						var appData = _Utils_update(
							appMsgPlayApp,
							{
								deployOrigin: $elm$core$Maybe$Just(substance),
								deployedSubstance: $elm$core$Maybe$Just(
									A4(
										$author$project$SubstancePlayer$xplodSub,
										childrenList,
										substance,
										appMsgPlayApp.sendSubSelected(substanceInactive),
										$elm$core$Maybe$Just(menuList)))
							});
						return _Utils_update(
							appMsgPlayApp,
							{
								deployOrigin: $elm$core$Maybe$Just(substance),
								deployedContainer: $elm$core$Maybe$Just(
									{
										deployment: A2(
											$mdgriffith$elm_ui$Element$row,
											_Utils_ap(
												$author$project$ApplicationPlayer$childrenContainer,
												_List_fromArray(
													[
														$mdgriffith$elm_ui$Element$onRight(
														A2(
															$mdgriffith$elm_ui$Element$Input$button,
															$author$project$ApplicationPlayer$closerAttribute,
															{
																label: $mdgriffith$elm_ui$Element$text('X'),
																onPress: $elm$core$Maybe$Just(appMsgPlayApp.unDeploy)
															}))
													])),
											_List_fromArray(
												[
													A2($author$project$ApplicationPlayer$displayInactiveSubElement, appData, substanceInactive)
												])),
										subId: subContainer.valeur
									}),
								deployedSubstance: $elm$core$Maybe$Just(
									A5(
										$author$project$SubstancePlayer$xplodSubWithChild,
										newDeployment,
										childrenList,
										appMsgPlayApp.deployOrigin,
										appMsgPlayApp.sendSubSelected(substanceInactive),
										menuList)),
								deploymentList: $elm$core$Maybe$Just(newDeployment)
							});
					} else {
						if ($elm$core$List$length(newDeployment) > 0) {
							var appDetail = _Utils_update(
								appMsgPlayApp,
								{
									deployedSubstance: $elm$core$Maybe$Just(
										A5(
											$author$project$SubstancePlayer$xplodSubWithChild,
											newDeployment,
											childrenList,
											appMsgPlayApp.deployOrigin,
											appMsgPlayApp.sendSubSelected(substanceInactive),
											menuList)),
									deploymentList: $elm$core$Maybe$Just(newDeployment)
								});
							return _Utils_update(
								appMsgPlayApp,
								{
									deployedContainer: $elm$core$Maybe$Just(
										{
											deployment: A2(
												$mdgriffith$elm_ui$Element$row,
												_Utils_ap(
													$author$project$ApplicationPlayer$childrenContainer,
													_List_fromArray(
														[
															$mdgriffith$elm_ui$Element$onRight(
															A2(
																$mdgriffith$elm_ui$Element$Input$button,
																$author$project$ApplicationPlayer$closerAttribute,
																{
																	label: $mdgriffith$elm_ui$Element$text('X'),
																	onPress: $elm$core$Maybe$Just(appMsgPlayApp.unDeploy)
																}))
														])),
												_List_fromArray(
													[
														A2($author$project$ApplicationPlayer$displayInactiveSubElement, appDetail, substanceInactive)
													])),
											subId: subContainer.valeur
										}),
									deployedSubstance: $elm$core$Maybe$Just(
										A5(
											$author$project$SubstancePlayer$xplodSubWithChild,
											newDeployment,
											childrenList,
											appMsgPlayApp.deployOrigin,
											appMsgPlayApp.sendSubSelected(substanceInactive),
											menuList)),
									deploymentList: $elm$core$Maybe$Just(newDeployment)
								});
						} else {
							var appElem = _Utils_update(
								appMsgPlayApp,
								{
									deployedSubstance: $elm$core$Maybe$Just(
										A5(
											$author$project$SubstancePlayer$xplodSubWithChild,
											_List_fromArray(
												[menuList.a]),
											childrenList,
											appMsgPlayApp.deployOrigin,
											appMsgPlayApp.sendSubSelected(substanceInactive),
											menuList)),
									deploymentList: $elm$core$Maybe$Just(
										_List_fromArray(
											[menuList.a]))
								});
							return _Utils_update(
								appMsgPlayApp,
								{
									deployedContainer: $elm$core$Maybe$Just(
										{
											deployment: A2(
												$mdgriffith$elm_ui$Element$row,
												_Utils_ap(
													$author$project$ApplicationPlayer$childrenContainer,
													_List_fromArray(
														[
															$mdgriffith$elm_ui$Element$onRight(
															A2(
																$mdgriffith$elm_ui$Element$Input$button,
																$author$project$ApplicationPlayer$closerAttribute,
																{
																	label: $mdgriffith$elm_ui$Element$text('X'),
																	onPress: $elm$core$Maybe$Just(appMsgPlayApp.unDeploy)
																}))
														])),
												_List_fromArray(
													[
														A2($author$project$ApplicationPlayer$displayInactiveSubElement, appElem, substanceInactive)
													])),
											subId: subContainer.valeur
										}),
									deployedSubstance: $elm$core$Maybe$Just(
										A5(
											$author$project$SubstancePlayer$xplodSubWithChild,
											_List_fromArray(
												[menuList.a]),
											childrenList,
											appMsgPlayApp.deployOrigin,
											appMsgPlayApp.sendSubSelected(substanceInactive),
											menuList)),
									deploymentList: $elm$core$Maybe$Just(
										_List_fromArray(
											[menuList.a]))
								});
						}
					}
				} else {
					return appMsgPlayApp;
				}
			} else {
				return appMsgPlayApp;
			}
		} else {
			var _v3 = substanceInactive.substanceDisplay;
			if (_v3.$ === 'Just') {
				var substanceList = _v3.a;
				var _v4 = substanceInactive.childrenSubstance;
				if (_v4.$ === 'Just') {
					var childrenList = _v4.a;
					var newDeployment = A5($author$project$SubstancePlayer$setDeploymentList, childrenList, appMsgPlayApp.deploymentList, _List_Nil, appMsgPlayApp.deployOrigin, menuList.a);
					return A2($elm$core$List$member, substance, substanceList) ? _Utils_update(
						appMsgPlayApp,
						{
							deployOrigin: $elm$core$Maybe$Just(substance),
							deployedSubstance: $elm$core$Maybe$Just(
								A4(
									$author$project$SubstancePlayer$xplodSub,
									childrenList,
									substance,
									appMsgPlayApp.sendSubSelected(substanceInactive),
									$elm$core$Maybe$Just(menuList)))
						}) : (($elm$core$List$length(newDeployment) > 0) ? _Utils_update(
						appMsgPlayApp,
						{
							deployedSubstance: $elm$core$Maybe$Just(
								A5(
									$author$project$SubstancePlayer$xplodSubWithChild,
									newDeployment,
									childrenList,
									appMsgPlayApp.deployOrigin,
									appMsgPlayApp.sendSubSelected(substanceInactive),
									menuList)),
							deploymentList: $elm$core$Maybe$Just(newDeployment)
						}) : _Utils_update(
						appMsgPlayApp,
						{
							deployedSubstance: $elm$core$Maybe$Just(
								A5(
									$author$project$SubstancePlayer$xplodSubWithChild,
									_List_fromArray(
										[menuList.a]),
									childrenList,
									appMsgPlayApp.deployOrigin,
									appMsgPlayApp.sendSubSelected(substanceInactive),
									menuList)),
							deploymentList: $elm$core$Maybe$Just(
								_List_fromArray(
									[menuList.a]))
						}));
				} else {
					return appMsgPlayApp;
				}
			} else {
				return appMsgPlayApp;
			}
		}
	});
var $author$project$ApplicationCreator$editSelectedApplication = F3(
	function (eleMsgAppEdited, canvasApplication, appInfo) {
		return _Utils_update(
			eleMsgAppEdited,
			{activeApplicationId: appInfo.appId, activeModule: canvasApplication});
	});
var $elm$http$Http$expectBytesResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'arraybuffer',
			_Http_toDataView,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$http$Http$expectWhatever = function (toMsg) {
	return A2(
		$elm$http$Http$expectBytesResponse,
		toMsg,
		$elm$http$Http$resolve(
			function (_v0) {
				return $elm$core$Result$Ok(_Utils_Tuple0);
			}));
};
var $author$project$LucasCetPlatform$evaluateFiles = F3(
	function (successList, failList, totalList) {
		return (_Utils_cmp(
			$elm$core$List$length(successList) + $elm$core$List$length(failList),
			$elm$core$List$length(totalList) - 1) > -1) ? $elm$http$Http$get(
			{
				expect: $elm$http$Http$expectWhatever($author$project$LucasCetPlatform$FileSuccess),
				url: '/completeUpload'
			}) : $elm$core$Platform$Cmd$none;
	});
var $author$project$ApplicationPlayer$Container = function (a) {
	return {$: 'Container', a: a};
};
var $author$project$ApplicationPlayer$InterfaceElement = function (a) {
	return {$: 'InterfaceElement', a: a};
};
var $author$project$ApplicationPlayer$SubstanceInactiveElement = function (a) {
	return {$: 'SubstanceInactiveElement', a: a};
};
var $author$project$ApplicationPlayer$SubstanceInteractiveElement = function (a) {
	return {$: 'SubstanceInteractiveElement', a: a};
};
var $author$project$ApplicationPlayer$InterfaceInteractive = F3(
	function (metaData, interfaceElement, gesteAssocie) {
		return {gesteAssocie: gesteAssocie, interfaceElement: interfaceElement, metaData: metaData};
	});
var $author$project$ApplicationPlayer$ElementGraphique = F2(
	function (visuel, valeur) {
		return {valeur: valeur, visuel: visuel};
	});
var $author$project$ApplicationPlayer$Bouton = {$: 'Bouton'};
var $author$project$ApplicationPlayer$Date = {$: 'Date'};
var $author$project$ApplicationPlayer$Image = {$: 'Image'};
var $author$project$ApplicationPlayer$Text = {$: 'Text'};
var $author$project$ApplicationPlayer$Video = {$: 'Video'};
var $author$project$ApplicationPlayer$decodeTypeMultimedia = A2(
	$elm$json$Json$Decode$andThen,
	function (string) {
		switch (string) {
			case 'Bouton':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$Bouton);
			case 'Image':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$Image);
			case 'Video':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$Video);
			case 'Date':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$Date);
			case 'Text':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$Text);
			default:
				return $elm$json$Json$Decode$fail('Invalid TypeMultimedia');
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$ApplicationPlayer$decodeElementGraphique = A3(
	$elm$json$Json$Decode$map2,
	$author$project$ApplicationPlayer$ElementGraphique,
	A2($elm$json$Json$Decode$field, 'visuel', $author$project$ApplicationPlayer$decodeTypeMultimedia),
	A2($elm$json$Json$Decode$field, 'valeur', $elm$json$Json$Decode$string));
var $author$project$ApplicationPlayer$Geste = F8(
	function (idGeste, idFonctionAcquisition, idApplication, typeResultat, valeurDepart, filtre, catGeste, metaData) {
		return {catGeste: catGeste, filtre: filtre, idApplication: idApplication, idFonctionAcquisition: idFonctionAcquisition, idGeste: idGeste, metaData: metaData, typeResultat: typeResultat, valeurDepart: valeurDepart};
	});
var $author$project$ApplicationPlayer$FiltreSubstance = F3(
	function (metaData, idSubstance, listeFiltres) {
		return {idSubstance: idSubstance, listeFiltres: listeFiltres, metaData: metaData};
	});
var $author$project$ApplicationPlayer$FiltreDateTime = {$: 'FiltreDateTime'};
var $author$project$ApplicationPlayer$FiltreDynamique = {$: 'FiltreDynamique'};
var $author$project$ApplicationPlayer$FiltreMetaData = {$: 'FiltreMetaData'};
var $author$project$ApplicationPlayer$FiltrePotentielle = {$: 'FiltrePotentielle'};
var $author$project$ApplicationPlayer$FiltrePremiere = {$: 'FiltrePremiere'};
var $author$project$ApplicationPlayer$FiltrePrincipale = {$: 'FiltrePrincipale'};
var $author$project$ApplicationPlayer$FiltreRelation = {$: 'FiltreRelation'};
var $author$project$ApplicationPlayer$FiltreSeconde = {$: 'FiltreSeconde'};
var $author$project$ApplicationPlayer$decodeTypeSubstanceFiltre = A2(
	$elm$json$Json$Decode$andThen,
	function (_int) {
		switch (_int) {
			case 1:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$FiltrePotentielle);
			case 2:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$FiltreDynamique);
			case 3:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$FiltreRelation);
			case 4:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$FiltrePrincipale);
			case 5:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$FiltrePremiere);
			case 6:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$FiltreSeconde);
			case 7:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$FiltreIDSubstance);
			case 8:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$FiltreMetaData);
			case 9:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$FiltreDateTime);
			default:
				return $elm$json$Json$Decode$fail('Invalid TypeFiltreSubstance');
		}
	},
	$elm$json$Json$Decode$int);
var $author$project$ApplicationPlayer$decodeFiltreSubstance = A4(
	$elm$json$Json$Decode$map3,
	$author$project$ApplicationPlayer$FiltreSubstance,
	A2(
		$elm$json$Json$Decode$field,
		'metaData',
		$elm$json$Json$Decode$maybe(
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string))),
	A2(
		$elm$json$Json$Decode$field,
		'idSubstance',
		$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)),
	A2(
		$elm$json$Json$Decode$field,
		'listeFiltres',
		$elm$json$Json$Decode$maybe(
			$elm$json$Json$Decode$list($author$project$ApplicationPlayer$decodeTypeSubstanceFiltre))));
var $author$project$ApplicationPlayer$Harmonique = {$: 'Harmonique'};
var $author$project$ApplicationPlayer$Integratif = {$: 'Integratif'};
var $author$project$ApplicationPlayer$Significatif = {$: 'Significatif'};
var $author$project$ApplicationPlayer$decodeTypeGeste = A2(
	$elm$json$Json$Decode$andThen,
	function (string) {
		switch (string) {
			case 'Significatif':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$Significatif);
			case 'Integratif':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$Integratif);
			case 'Harmonique':
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$Harmonique);
			default:
				return $elm$json$Json$Decode$fail('Invalid TypeGeste');
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$ApplicationPlayer$BinaryFile = {$: 'BinaryFile'};
var $author$project$ApplicationPlayer$DataString = {$: 'DataString'};
var $author$project$ApplicationPlayer$DateTime = {$: 'DateTime'};
var $author$project$ApplicationPlayer$Duree = {$: 'Duree'};
var $author$project$ApplicationPlayer$DynamiqueSub = {$: 'DynamiqueSub'};
var $author$project$ApplicationPlayer$ListeSubstanceElement = {$: 'ListeSubstanceElement'};
var $author$project$ApplicationPlayer$PotentielleSub = {$: 'PotentielleSub'};
var $author$project$ApplicationPlayer$RelationSub = {$: 'RelationSub'};
var $author$project$ApplicationPlayer$SubstanceElement = {$: 'SubstanceElement'};
var $author$project$ApplicationPlayer$decodeTypeResultat = A2(
	$elm$json$Json$Decode$andThen,
	function (_int) {
		switch (_int) {
			case 1:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$PotentielleSub);
			case 2:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$DynamiqueSub);
			case 3:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$RelationSub);
			case 4:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$SubstanceElement);
			case 5:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$ListeSubstanceElement);
			case 6:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$BinaryFile);
			case 7:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$DataString);
			case 8:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$DateTime);
			case 9:
				return $elm$json$Json$Decode$succeed($author$project$ApplicationPlayer$Duree);
			default:
				return $elm$json$Json$Decode$fail('Invalid TypeResultat');
		}
	},
	$elm$json$Json$Decode$int);
var $elm$json$Json$Decode$map8 = _Json_map8;
var $author$project$ApplicationPlayer$decodeGeste = A9(
	$elm$json$Json$Decode$map8,
	$author$project$ApplicationPlayer$Geste,
	A2($elm$json$Json$Decode$field, 'idGeste', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'idFonctionAcquisition', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'idApplication', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'typeResultat', $author$project$ApplicationPlayer$decodeTypeResultat),
	A2(
		$elm$json$Json$Decode$field,
		'valeurDepart',
		$elm$json$Json$Decode$maybe(
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string))),
	A2($elm$json$Json$Decode$field, 'filtre', $author$project$ApplicationPlayer$decodeFiltreSubstance),
	A2($elm$json$Json$Decode$field, 'catGeste', $author$project$ApplicationPlayer$decodeTypeGeste),
	A2($elm$json$Json$Decode$field, 'metaData', $elm$json$Json$Decode$string));
var $author$project$ApplicationPlayer$decodeInterfaceInteractive = A4(
	$elm$json$Json$Decode$map3,
	$author$project$ApplicationPlayer$InterfaceInteractive,
	A2($elm$json$Json$Decode$field, 'metaData', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'interfaceElement',
		$elm$json$Json$Decode$maybe(
			$elm$json$Json$Decode$list($author$project$ApplicationPlayer$decodeElementGraphique))),
	A2($elm$json$Json$Decode$field, 'gesteAssocie', $author$project$ApplicationPlayer$decodeGeste));
var $author$project$ApplicationPlayer$SubstanceContainer = F5(
	function (metaData, interfaceElement, gesteAssocie, autoDeploy, zoomable) {
		return {autoDeploy: autoDeploy, gesteAssocie: gesteAssocie, interfaceElement: interfaceElement, metaData: metaData, zoomable: zoomable};
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $author$project$ApplicationPlayer$decodeSubstanceContainer = A6(
	$elm$json$Json$Decode$map5,
	$author$project$ApplicationPlayer$SubstanceContainer,
	A2($elm$json$Json$Decode$field, 'metaData', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'interfaceElement',
		$elm$json$Json$Decode$maybe(
			$elm$json$Json$Decode$list($author$project$ApplicationPlayer$decodeElementGraphique))),
	A2($elm$json$Json$Decode$field, 'gesteAssocie', $author$project$ApplicationPlayer$decodeGeste),
	A2($elm$json$Json$Decode$field, 'autoDeploy', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'zoomable', $elm$json$Json$Decode$bool));
var $author$project$ApplicationPlayer$SubstanceInactive = F5(
	function (metaData, substanceDisplay, childrenSubstance, autoDeploy, zoomable) {
		return {autoDeploy: autoDeploy, childrenSubstance: childrenSubstance, metaData: metaData, substanceDisplay: substanceDisplay, zoomable: zoomable};
	});
var $author$project$SubstancePlayer$Dynamic = function (a) {
	return {$: 'Dynamic', a: a};
};
var $author$project$SubstancePlayer$Potential = function (a) {
	return {$: 'Potential', a: a};
};
var $author$project$SubstancePlayer$Relation = function (a) {
	return {$: 'Relation', a: a};
};
var $author$project$SubstancePlayer$Lien = function (a) {
	return {$: 'Lien', a: a};
};
var $author$project$SubstancePlayer$SubstanceDynamic = F4(
	function (subId, video, name, principal) {
		return {name: name, principal: principal, subId: subId, video: video};
	});
var $author$project$SubstancePlayer$decodeDynamic = A5(
	$elm$json$Json$Decode$map4,
	$author$project$SubstancePlayer$SubstanceDynamic,
	A2($elm$json$Json$Decode$field, 'subId', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'media', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$map,
		$author$project$SubstancePlayer$Lien,
		A2($elm$json$Json$Decode$field, 'principale', $elm$json$Json$Decode$string)));
var $author$project$SubstancePlayer$SubstancePotential = F3(
	function (subId, image, name) {
		return {image: image, name: name, subId: subId};
	});
var $author$project$SubstancePlayer$decodePotential = A4(
	$elm$json$Json$Decode$map3,
	$author$project$SubstancePlayer$SubstancePotential,
	A2($elm$json$Json$Decode$field, 'subId', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'media', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string));
var $author$project$SubstancePlayer$SubstanceRelation = F5(
	function (subId, media, name, substance1, substance2) {
		return {media: media, name: name, subId: subId, substance1: substance1, substance2: substance2};
	});
var $author$project$SubstancePlayer$decodeRelation = A6(
	$elm$json$Json$Decode$map5,
	$author$project$SubstancePlayer$SubstanceRelation,
	A2($elm$json$Json$Decode$field, 'subId', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'media', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$map,
		$author$project$SubstancePlayer$Lien,
		A2($elm$json$Json$Decode$field, 'firstSubstance', $elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$map,
		$author$project$SubstancePlayer$Lien,
		A2($elm$json$Json$Decode$field, 'secondSubstance', $elm$json$Json$Decode$string)));
var $author$project$SubstancePlayer$decodeSubstance = A2(
	$elm$json$Json$Decode$andThen,
	function (str) {
		switch (str) {
			case 'relation':
				return A2($elm$json$Json$Decode$map, $author$project$SubstancePlayer$Relation, $author$project$SubstancePlayer$decodeRelation);
			case 'dynamic':
				return A2($elm$json$Json$Decode$map, $author$project$SubstancePlayer$Dynamic, $author$project$SubstancePlayer$decodeDynamic);
			case 'potential':
				return A2($elm$json$Json$Decode$map, $author$project$SubstancePlayer$Potential, $author$project$SubstancePlayer$decodePotential);
			default:
				var somethingElse = str;
				return $elm$json$Json$Decode$fail('Unknown media type' + somethingElse);
		}
	},
	A2($elm$json$Json$Decode$field, 'subType', $elm$json$Json$Decode$string));
var $author$project$ApplicationPlayer$decodeSubstanceInactive = A6(
	$elm$json$Json$Decode$map5,
	$author$project$ApplicationPlayer$SubstanceInactive,
	A2($elm$json$Json$Decode$field, 'metaData', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'substanceDisplay',
		$elm$json$Json$Decode$maybe(
			$elm$json$Json$Decode$list($author$project$SubstancePlayer$decodeSubstance))),
	A2(
		$elm$json$Json$Decode$field,
		'childrenSubstance',
		$elm$json$Json$Decode$maybe(
			$elm$json$Json$Decode$list($author$project$SubstancePlayer$decodeSubstance))),
	A2($elm$json$Json$Decode$field, 'autoDeploy', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'zoomable', $elm$json$Json$Decode$bool));
var $author$project$ApplicationPlayer$SubstanceInteractive = F3(
	function (metaData, substanceDisplay, gesteAssocie) {
		return {gesteAssocie: gesteAssocie, metaData: metaData, substanceDisplay: substanceDisplay};
	});
var $author$project$ApplicationPlayer$decodeSubstancesInteractives = A4(
	$elm$json$Json$Decode$map3,
	$author$project$ApplicationPlayer$SubstanceInteractive,
	A2($elm$json$Json$Decode$field, 'metaData', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'substanceDisplay',
		$elm$json$Json$Decode$maybe(
			$elm$json$Json$Decode$list($author$project$SubstancePlayer$decodeSubstance))),
	A2($elm$json$Json$Decode$field, 'gesteAssocie', $author$project$ApplicationPlayer$decodeGeste));
var $author$project$ApplicationPlayer$decodeListeElementInteractif = $elm$json$Json$Decode$list(
	A2(
		$elm$json$Json$Decode$andThen,
		function (string) {
			switch (string) {
				case 'interactive':
					return A2($elm$json$Json$Decode$map, $author$project$ApplicationPlayer$SubstanceInteractiveElement, $author$project$ApplicationPlayer$decodeSubstancesInteractives);
				case 'interface':
					return A2($elm$json$Json$Decode$map, $author$project$ApplicationPlayer$InterfaceElement, $author$project$ApplicationPlayer$decodeInterfaceInteractive);
				case 'inactive':
					return A2($elm$json$Json$Decode$map, $author$project$ApplicationPlayer$SubstanceInactiveElement, $author$project$ApplicationPlayer$decodeSubstanceInactive);
				case 'container':
					return A2($elm$json$Json$Decode$map, $author$project$ApplicationPlayer$Container, $author$project$ApplicationPlayer$decodeSubstanceContainer);
				default:
					return $elm$json$Json$Decode$fail('Invalid ElementInteractif');
			}
		},
		A2($elm$json$Json$Decode$field, 'typeData', $elm$json$Json$Decode$string)));
var $elm$url$Url$Builder$QueryParameter = F2(
	function (a, b) {
		return {$: 'QueryParameter', a: a, b: b};
	});
var $elm$url$Url$percentEncode = _Url_percentEncode;
var $elm$url$Url$Builder$string = F2(
	function (key, value) {
		return A2(
			$elm$url$Url$Builder$QueryParameter,
			$elm$url$Url$percentEncode(key),
			$elm$url$Url$percentEncode(value));
	});
var $author$project$ApplicationPlayer$executeLaunchApp = F3(
	function (eleMsgAppEdited, appId, results) {
		var appExecPath = A2(
			$elm$url$Url$Builder$absolute,
			_List_fromArray(
				['activateLucasApplication']),
			_List_fromArray(
				[
					A2($elm$url$Url$Builder$string, 'appId', appId),
					A2($elm$url$Url$Builder$string, 'userId', eleMsgAppEdited.userId)
				]));
		return $elm$http$Http$get(
			{
				expect: A2($elm$http$Http$expectJson, results, $author$project$ApplicationPlayer$decodeListeElementInteractif),
				url: appExecPath
			});
	});
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$Graphic_Element$encodeMotrice = function (v) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'UserID',
				$elm$json$Json$Encode$string(v.userId)),
				_Utils_Tuple2(
				'Video',
				function () {
					var _v0 = v.videoUrl;
					if (_v0.$ === 'Just') {
						var vid = _v0.a;
						return $elm$json$Json$Encode$string(vid);
					} else {
						return $elm$json$Json$Encode$null;
					}
				}()),
				_Utils_Tuple2(
				'Name',
				function () {
					var _v1 = v.title;
					if (_v1.$ === 'Just') {
						var titre = _v1.a;
						return $elm$json$Json$Encode$string(titre);
					} else {
						return $elm$json$Json$Encode$null;
					}
				}()),
				_Utils_Tuple2(
				'Principale',
				function () {
					var _v2 = v.principale;
					if (_v2.$ === 'Just') {
						var princ = _v2.a;
						switch (princ.$) {
							case 'Relation':
								var rel = princ.a;
								return $elm$json$Json$Encode$string(rel.subId);
							case 'Dynamic':
								var dyna = princ.a;
								return $elm$json$Json$Encode$string(dyna.subId);
							default:
								var pot = princ.a;
								return $elm$json$Json$Encode$string(pot.subId);
						}
					} else {
						return $elm$json$Json$Encode$null;
					}
				}())
			]));
};
var $author$project$Graphic_Element$encodePotentielle = function (v) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'UserID',
				$elm$json$Json$Encode$string(v.userId)),
				_Utils_Tuple2(
				'Image',
				function () {
					var _v0 = v.imageUrl;
					if (_v0.$ === 'Just') {
						var img = _v0.a;
						return $elm$json$Json$Encode$string(img);
					} else {
						return $elm$json$Json$Encode$null;
					}
				}()),
				_Utils_Tuple2(
				'Name',
				function () {
					var _v1 = v.title;
					if (_v1.$ === 'Just') {
						var title = _v1.a;
						return $elm$json$Json$Encode$string(title);
					} else {
						return $elm$json$Json$Encode$null;
					}
				}())
			]));
};
var $author$project$Graphic_Element$encodeRelation = function (v) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'UserId',
				$elm$json$Json$Encode$string(v.userId)),
				_Utils_Tuple2(
				'Video',
				function () {
					var _v0 = v.videoUrl;
					if (_v0.$ === 'Just') {
						var url = _v0.a;
						return $elm$json$Json$Encode$string(url);
					} else {
						return $elm$json$Json$Encode$null;
					}
				}()),
				_Utils_Tuple2(
				'Name',
				function () {
					var _v1 = v.title;
					if (_v1.$ === 'Just') {
						var title = _v1.a;
						return $elm$json$Json$Encode$string(title);
					} else {
						return $elm$json$Json$Encode$null;
					}
				}()),
				_Utils_Tuple2(
				'Premiere',
				function () {
					var _v2 = v.premiere;
					if (_v2.$ === 'Just') {
						var substance = _v2.a;
						switch (substance.$) {
							case 'Relation':
								var rel = substance.a;
								return $elm$json$Json$Encode$string(rel.subId);
							case 'Dynamic':
								var dyna = substance.a;
								return $elm$json$Json$Encode$string(dyna.subId);
							default:
								var pot = substance.a;
								return $elm$json$Json$Encode$string(pot.subId);
						}
					} else {
						return $elm$json$Json$Encode$null;
					}
				}()),
				_Utils_Tuple2(
				'Seconde',
				function () {
					var _v4 = v.seconde;
					if (_v4.$ === 'Just') {
						var secondeSubstance = _v4.a;
						switch (secondeSubstance.$) {
							case 'Relation':
								var rel = secondeSubstance.a;
								return $elm$json$Json$Encode$string(rel.subId);
							case 'Dynamic':
								var dyna = secondeSubstance.a;
								return $elm$json$Json$Encode$string(dyna.subId);
							default:
								var pot = secondeSubstance.a;
								return $elm$json$Json$Encode$string(pot.subId);
						}
					} else {
						return $elm$json$Json$Encode$null;
					}
				}())
			]));
};
var $elm$http$Http$jsonBody = function (value) {
	return A2(
		_Http_pair,
		'application/json',
		A2($elm$json$Json$Encode$encode, 0, value));
};
var $elm$http$Http$post = function (r) {
	return $elm$http$Http$request(
		{body: r.body, expect: r.expect, headers: _List_Nil, method: 'POST', timeout: $elm$core$Maybe$Nothing, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $author$project$Graphic_Element$expedieSubstance = F2(
	function (eleMsgElementEdited, retourAppel) {
		var _v0 = eleMsgElementEdited.activeCanvas;
		switch (_v0.$) {
			case 'Vide':
				return $elm$core$Platform$Cmd$none;
			case 'Potentiel':
				var potSub = _v0.a;
				return $elm$http$Http$post(
					{
						body: $elm$http$Http$jsonBody(
							$author$project$Graphic_Element$encodePotentielle(potSub)),
						expect: $elm$http$Http$expectWhatever(retourAppel),
						url: 'createPotentielle'
					});
			case 'Motrice':
				var motSub = _v0.a;
				return $elm$http$Http$post(
					{
						body: $elm$http$Http$jsonBody(
							$author$project$Graphic_Element$encodeMotrice(motSub)),
						expect: $elm$http$Http$expectWhatever(retourAppel),
						url: 'createMotrice'
					});
			default:
				var relSub = _v0.a;
				return $elm$http$Http$post(
					{
						body: $elm$http$Http$jsonBody(
							$author$project$Graphic_Element$encodeRelation(relSub)),
						expect: $elm$http$Http$expectWhatever(retourAppel),
						url: 'createRelation'
					});
		}
	});
var $elm$http$Http$fileBody = _Http_pair('');
var $elm$browser$Browser$Dom$getViewport = _Browser_withWindow(_Browser_getViewport);
var $author$project$Chat_Creator$Group = function (a) {
	return {$: 'Group', a: a};
};
var $author$project$Chat_Creator$ImagePicked = function (a) {
	return {$: 'ImagePicked', a: a};
};
var $author$project$Chat_Creator$LoadNextImgSet = {$: 'LoadNextImgSet'};
var $author$project$Chat_Creator$LoadNextVideoSet = {$: 'LoadNextVideoSet'};
var $author$project$Chat_Creator$LoadPreviousImgSet = {$: 'LoadPreviousImgSet'};
var $author$project$Chat_Creator$LoadPreviousVideoSet = {$: 'LoadPreviousVideoSet'};
var $author$project$Chat_Creator$NothingSoFar = {$: 'NothingSoFar'};
var $author$project$Chat_Creator$Tool = function (a) {
	return {$: 'Tool', a: a};
};
var $author$project$Chat_Creator$VideoPicked = function (a) {
	return {$: 'VideoPicked', a: a};
};
var $author$project$Chat_Creator$Visual = {$: 'Visual'};
var $author$project$Chat_Creator$Widget = F4(
	function (widgetIcon, displayUrl, widgetId, category) {
		return {category: category, displayUrl: displayUrl, widgetIcon: widgetIcon, widgetId: widgetId};
	});
var $author$project$Chat_Creator$initialize = F2(
	function (userIdValue, messageChat) {
		return {
			chatInfo: messageChat,
			dragStatus: $author$project$Chat_Creator$NothingSoFar,
			draggedWidget: $elm$core$Maybe$Nothing,
			imgChoices: A5($author$project$Graphic_Downloader$initGraphic, userIdValue, 'image', $author$project$Chat_Creator$ImagePicked, $author$project$Chat_Creator$LoadNextImgSet, $author$project$Chat_Creator$LoadPreviousImgSet),
			nbAdjustment: -1,
			selectedWidget: $elm$core$Maybe$Nothing,
			userId: userIdValue,
			videoChoices: A5($author$project$Graphic_Downloader$initGraphic, userIdValue, 'video', $author$project$Chat_Creator$VideoPicked, $author$project$Chat_Creator$LoadNextVideoSet, $author$project$Chat_Creator$LoadPreviousVideoSet),
			widgetBlueprints: _List_fromArray(
				[
					A4($author$project$Chat_Creator$Widget, '/../img/Icons/video.png', 'rien', 'idVideo', $author$project$Chat_Creator$Visual),
					A4(
					$author$project$Chat_Creator$Widget,
					'/../img/Icons/tool.jpg',
					'/../img/Tools/encercle.jpg',
					'idCercle',
					$author$project$Chat_Creator$Tool(
						A2($author$project$Chat_Creator$Coordinate, 0, 0))),
					A4(
					$author$project$Chat_Creator$Widget,
					'/../img/Icons/question.jpg',
					'/../img/Tools/question_dessin.jpg',
					'idQuestion',
					$author$project$Chat_Creator$Tool(
						A2($author$project$Chat_Creator$Coordinate, 0, 0))),
					A4(
					$author$project$Chat_Creator$Widget,
					'/../img/Icons/radio.png',
					'/../img/Icons/radio.png',
					'idGroup',
					$author$project$Chat_Creator$Group($elm$core$Maybe$Nothing))
				])
		};
	});
var $author$project$ApplicationCreator$initializeApplicationModule = F3(
	function (eleMsgAppEdited, canvasApplication, pingResult) {
		switch (canvasApplication.$) {
			case 'Absent':
				return $elm$core$Platform$Cmd$none;
			case 'Didactique':
				var dida = canvasApplication.a;
				if (dida.$ === 'Nothing') {
					return $elm$core$Platform$Cmd$none;
				} else {
					var substance = dida.a;
					switch (substance.$) {
						case 'Relation':
							var substanceRelation = substance.a;
							return $elm$core$Platform$Cmd$none;
						case 'Dynamic':
							var substanceDynamic = substance.a;
							return $elm$core$Platform$Cmd$none;
						default:
							var substancePotential = substance.a;
							var metaPath = A2(
								$elm$url$Url$Builder$absolute,
								_List_fromArray(
									['createNewApp']),
								_List_fromArray(
									[
										A2($elm$url$Url$Builder$string, 'userId', eleMsgAppEdited.userId),
										A2($elm$url$Url$Builder$string, 'subId', substancePotential.subId),
										A2($elm$url$Url$Builder$string, 'appType', 'didactique'),
										A2($elm$url$Url$Builder$string, 'appId', substancePotential.subId),
										A2(
										$elm$url$Url$Builder$string,
										'title',
										A2($elm$core$Maybe$withDefault, 'Application Didactique', eleMsgAppEdited.title))
									]));
							return $elm$http$Http$get(
								{
									expect: $elm$http$Http$expectWhatever(pingResult),
									url: metaPath
								});
					}
				}
			case 'Proprietaire':
				var maySub = canvasApplication.a;
				if (maySub.$ === 'Nothing') {
					return $elm$core$Platform$Cmd$none;
				} else {
					var substance = maySub.a;
					switch (substance.$) {
						case 'Relation':
							var substanceRelation = substance.a;
							return $elm$core$Platform$Cmd$none;
						case 'Dynamic':
							var substanceDynamic = substance.a;
							return $elm$core$Platform$Cmd$none;
						default:
							var substancePotential = substance.a;
							var metaPath = A2(
								$elm$url$Url$Builder$absolute,
								_List_fromArray(
									['createNewApp']),
								_List_fromArray(
									[
										A2($elm$url$Url$Builder$string, 'userId', eleMsgAppEdited.userId),
										A2($elm$url$Url$Builder$string, 'subId', substancePotential.subId),
										A2($elm$url$Url$Builder$string, 'appType', 'proprietaire'),
										A2($elm$url$Url$Builder$string, 'appId', substancePotential.subId)
									]));
							return $elm$http$Http$get(
								{
									expect: $elm$http$Http$expectWhatever(pingResult),
									url: metaPath
								});
					}
				}
			default:
				var maySub = canvasApplication.a;
				if (maySub.$ === 'Nothing') {
					return $elm$core$Platform$Cmd$none;
				} else {
					var substance = maySub.a;
					switch (substance.$) {
						case 'Relation':
							var substanceRelation = substance.a;
							return $elm$core$Platform$Cmd$none;
						case 'Dynamic':
							var substanceDynamic = substance.a;
							return $elm$core$Platform$Cmd$none;
						default:
							var substancePotential = substance.a;
							var metaPath = A2(
								$elm$url$Url$Builder$absolute,
								_List_fromArray(
									['createNewApp']),
								_List_fromArray(
									[
										A2($elm$url$Url$Builder$string, 'userId', eleMsgAppEdited.userId),
										A2($elm$url$Url$Builder$string, 'subId', substancePotential.subId),
										A2($elm$url$Url$Builder$string, 'appType', 'locataire'),
										A2($elm$url$Url$Builder$string, 'appId', substancePotential.subId)
									]));
							return $elm$http$Http$get(
								{
									expect: $elm$http$Http$expectWhatever(pingResult),
									url: metaPath
								});
					}
				}
		}
	});
var $author$project$ApplicationPlayer$siftContainer = function (elementInteractif) {
	switch (elementInteractif.$) {
		case 'SubstanceInteractiveElement':
			var substanceInteractive = elementInteractif.a;
			return $elm$core$Maybe$Nothing;
		case 'InterfaceElement':
			var interfaceInteractive = elementInteractif.a;
			return $elm$core$Maybe$Nothing;
		case 'SubstanceInactiveElement':
			var subInactive = elementInteractif.a;
			return $elm$core$Maybe$Nothing;
		default:
			var subContainer = elementInteractif.a;
			return $elm$core$Maybe$Just(subContainer);
	}
};
var $author$project$ApplicationPlayer$siftInactive = function (elementInteractif) {
	switch (elementInteractif.$) {
		case 'SubstanceInteractiveElement':
			var substanceInteractive = elementInteractif.a;
			return $elm$core$Maybe$Nothing;
		case 'InterfaceElement':
			var interfaceInteractive = elementInteractif.a;
			return $elm$core$Maybe$Nothing;
		case 'SubstanceInactiveElement':
			var subInactive = elementInteractif.a;
			return $elm$core$Maybe$Just(subInactive);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$ApplicationPlayer$siftInterface = function (elementInteractif) {
	switch (elementInteractif.$) {
		case 'SubstanceInteractiveElement':
			var substanceInteractive = elementInteractif.a;
			return $elm$core$Maybe$Nothing;
		case 'InterfaceElement':
			var interfaceInteractive = elementInteractif.a;
			return $elm$core$Maybe$Just(interfaceInteractive);
		case 'SubstanceInactiveElement':
			return $elm$core$Maybe$Nothing;
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$ApplicationPlayer$siftSubInter = function (elementInteractif) {
	switch (elementInteractif.$) {
		case 'SubstanceInteractiveElement':
			var substanceInteractive = elementInteractif.a;
			return $elm$core$Maybe$Just(substanceInteractive);
		case 'InterfaceElement':
			var interfaceInteractive = elementInteractif.a;
			return $elm$core$Maybe$Nothing;
		case 'SubstanceInactiveElement':
			return $elm$core$Maybe$Nothing;
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$ApplicationPlayer$loadUpData = F2(
	function (appMsgPlayApp, substanceInteractiveList) {
		var _v0 = appMsgPlayApp.originElement;
		if (_v0.$ === 'Just') {
			var deployedElement = _v0.a;
			var sequenceList = A2($elm$core$List$filterMap, $author$project$ApplicationPlayer$siftInactive, substanceInteractiveList);
			return _Utils_update(
				appMsgPlayApp,
				{
					deployedContainer: $elm$core$Maybe$Just(
						{
							deployment: A2(
								$mdgriffith$elm_ui$Element$row,
								_Utils_ap(
									$author$project$ApplicationPlayer$childrenContainer,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$onRight(
											A2(
												$mdgriffith$elm_ui$Element$Input$button,
												$author$project$ApplicationPlayer$closerAttribute,
												{
													label: $mdgriffith$elm_ui$Element$text('X'),
													onPress: $elm$core$Maybe$Just(appMsgPlayApp.unDeploy)
												}))
										])),
								A2(
									$elm$core$List$map,
									function (a) {
										return A2($author$project$ApplicationPlayer$displayInactiveSubElement, appMsgPlayApp, a);
									},
									sequenceList)),
							subId: deployedElement.valeur
						}),
					subInactiveList: $elm$core$Maybe$Just(sequenceList)
				});
		} else {
			var listSequences = A2($elm$core$List$filterMap, $author$project$ApplicationPlayer$siftContainer, substanceInteractiveList);
			return ($elm$core$List$length(listSequences) > 0) ? _Utils_update(
				appMsgPlayApp,
				{
					interfaceList: $elm$core$Maybe$Just(
						A2($elm$core$List$filterMap, $author$project$ApplicationPlayer$siftInterface, substanceInteractiveList)),
					subContainerList: $elm$core$Maybe$Just(listSequences),
					subInactiveList: $elm$core$Maybe$Nothing,
					subInterList: $elm$core$Maybe$Just(
						A2($elm$core$List$filterMap, $author$project$ApplicationPlayer$siftSubInter, substanceInteractiveList))
				}) : _Utils_update(
				appMsgPlayApp,
				{
					interfaceList: $elm$core$Maybe$Just(
						A2($elm$core$List$filterMap, $author$project$ApplicationPlayer$siftInterface, substanceInteractiveList)),
					subContainerList: $elm$core$Maybe$Nothing,
					subInactiveList: $elm$core$Maybe$Nothing,
					subInterList: $elm$core$Maybe$Just(
						A2($elm$core$List$filterMap, $author$project$ApplicationPlayer$siftSubInter, substanceInteractiveList))
				});
		}
	});
var $author$project$LucasCetPlatform$ShareApplication = function (a) {
	return {$: 'ShareApplication', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$InFront = {$: 'InFront'};
var $mdgriffith$elm_ui$Element$inFront = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$InFront, element);
};
var $author$project$LucasCetPlatform$menuApplication = F2(
	function (appInfoPlay, userInfoMaybe) {
		if (userInfoMaybe.$ === 'Just') {
			var userInfo = userInfoMaybe.a;
			return (_Utils_eq(appInfoPlay.appType, $author$project$ApplicationPlayer$DidactiqueModule) && _Utils_eq(appInfoPlay.creatorId, userInfo.userId)) ? $elm$core$Maybe$Just(
				_Utils_Tuple2(
					appInfoPlay.appId,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$inFront(
							A2(
								$mdgriffith$elm_ui$Element$Input$button,
								_List_Nil,
								{
									label: A2(
										$mdgriffith$elm_ui$Element$image,
										_List_Nil,
										{description: 'Partage Application', src: 'img/Icons/share-icon1.png'}),
									onPress: $elm$core$Maybe$Just(
										$author$project$LucasCetPlatform$ShareApplication(appInfoPlay))
								}))
						]))) : $elm$core$Maybe$Nothing;
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$LucasCetPlatform$DeploySequence = F2(
	function (a, b) {
		return {$: 'DeploySequence', a: a, b: b};
	});
var $author$project$LucasCetPlatform$deployElementMenu = F2(
	function (substanceContainer, elementGraphique) {
		var nouGeste = substanceContainer.gesteAssocie;
		if (substanceContainer.autoDeploy) {
			var gesteUpdate = _Utils_update(
				nouGeste,
				{metaData: elementGraphique.valeur});
			return substanceContainer.zoomable ? _List_fromArray(
				[
					$mdgriffith$elm_ui$Element$inFront(
					A2(
						$mdgriffith$elm_ui$Element$row,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Input$button,
								_List_Nil,
								{
									label: A2(
										$mdgriffith$elm_ui$Element$image,
										_List_Nil,
										{description: 'Deploiement', src: 'img/Icons/icon-relation.png'}),
									onPress: $elm$core$Maybe$Just(
										A2($author$project$LucasCetPlatform$DeploySequence, elementGraphique, gesteUpdate))
								}),
								A2(
								$mdgriffith$elm_ui$Element$Input$button,
								_List_Nil,
								{
									label: A2(
										$mdgriffith$elm_ui$Element$image,
										_List_Nil,
										{description: 'Zoom', src: 'img/Icons/icon-zoom.png'}),
									onPress: $elm$core$Maybe$Nothing
								})
							])))
				]) : _List_fromArray(
				[
					$mdgriffith$elm_ui$Element$inFront(
					A2(
						$mdgriffith$elm_ui$Element$row,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Input$button,
								_List_Nil,
								{
									label: A2(
										$mdgriffith$elm_ui$Element$image,
										_List_Nil,
										{description: 'Deploiement', src: 'img/Icons/icon-relation.png'}),
									onPress: $elm$core$Maybe$Just(
										A2($author$project$LucasCetPlatform$DeploySequence, elementGraphique, gesteUpdate))
								})
							])))
				]);
		} else {
			return _List_Nil;
		}
	});
var $author$project$LucasCetPlatform$menuContainer = F2(
	function (substanceContainerPlay, elementGraphiquePlay) {
		var _v0 = elementGraphiquePlay.visuel;
		if (_v0.$ === 'Video') {
			return _Utils_Tuple2(
				elementGraphiquePlay.valeur,
				A2($author$project$LucasCetPlatform$deployElementMenu, substanceContainerPlay, elementGraphiquePlay));
		} else {
			return _Utils_Tuple2('', _List_Nil);
		}
	});
var $author$project$LucasCetPlatform$DeploySubstance = F2(
	function (a, b) {
		return {$: 'DeploySubstance', a: a, b: b};
	});
var $author$project$LucasCetPlatform$ZoomSubstance = function (a) {
	return {$: 'ZoomSubstance', a: a};
};
var $author$project$LucasCetPlatform$deployMenu = F2(
	function (substanceInactivePlay, substance) {
		return substanceInactivePlay.autoDeploy ? (substanceInactivePlay.zoomable ? _List_fromArray(
			[
				$mdgriffith$elm_ui$Element$inFront(
				A2(
					$mdgriffith$elm_ui$Element$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$Input$button,
							_List_Nil,
							{
								label: A2(
									$mdgriffith$elm_ui$Element$image,
									_List_Nil,
									{description: 'Deploiement', src: 'img/Icons/icon-relation.png'}),
								onPress: $elm$core$Maybe$Just(
									A2($author$project$LucasCetPlatform$DeploySubstance, substanceInactivePlay, substance))
							}),
							A2(
							$mdgriffith$elm_ui$Element$Input$button,
							_List_Nil,
							{
								label: A2(
									$mdgriffith$elm_ui$Element$image,
									_List_Nil,
									{description: 'Zoom', src: 'img/Icons/icon-zoom.png'}),
								onPress: $elm$core$Maybe$Just(
									$author$project$LucasCetPlatform$ZoomSubstance(substance))
							})
						])))
			]) : _List_fromArray(
			[
				$mdgriffith$elm_ui$Element$inFront(
				A2(
					$mdgriffith$elm_ui$Element$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$Input$button,
							_List_Nil,
							{
								label: A2(
									$mdgriffith$elm_ui$Element$image,
									_List_Nil,
									{description: 'Deploiement', src: 'img/Icons/icon-relation.png'}),
								onPress: $elm$core$Maybe$Just(
									A2($author$project$LucasCetPlatform$DeploySubstance, substanceInactivePlay, substance))
							})
						])))
			])) : _List_Nil;
	});
var $author$project$LucasCetPlatform$menuDevelopper = F2(
	function (substanceInactivePlay, selectedSubstance) {
		switch (selectedSubstance.$) {
			case 'Relation':
				var subRel = selectedSubstance.a;
				return _Utils_Tuple2(
					subRel.subId,
					A2($author$project$LucasCetPlatform$deployMenu, substanceInactivePlay, selectedSubstance));
			case 'Dynamic':
				var subDym = selectedSubstance.a;
				return _Utils_Tuple2(
					subDym.subId,
					A2($author$project$LucasCetPlatform$deployMenu, substanceInactivePlay, selectedSubstance));
			default:
				var subPot = selectedSubstance.a;
				return substanceInactivePlay.zoomable ? _Utils_Tuple2(
					subPot.subId,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$inFront(
							A2(
								$mdgriffith$elm_ui$Element$Input$button,
								_List_Nil,
								{
									label: A2(
										$mdgriffith$elm_ui$Element$image,
										_List_Nil,
										{description: 'Zoom', src: 'img/Icons/icon-zoom.png'}),
									onPress: $elm$core$Maybe$Nothing
								}))
						])) : _Utils_Tuple2(subPot.subId, _List_Nil);
		}
	});
var $author$project$SubstancePlayer$modifySubstanceMedia = F3(
	function (eleMsgSelectElement, mediaUrl, secondaireSubs) {
		var urlPath = A2(
			$elm$url$Url$Builder$absolute,
			_List_fromArray(
				['updateSubstanceMedia']),
			_List_fromArray(
				[
					A2($elm$url$Url$Builder$string, 'subId', eleMsgSelectElement.selectedSubstanceId),
					A2($elm$url$Url$Builder$string, 'mediaUrl', mediaUrl),
					A2($elm$url$Url$Builder$string, 'userId', eleMsgSelectElement.userId)
				]));
		return $elm$http$Http$get(
			{
				expect: $elm$http$Http$expectWhatever(secondaireSubs),
				url: urlPath
			});
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$file$File$name = _File_name;
var $author$project$Graphic_Downloader$GraphicList = F3(
	function (prefix, suiteToken, graphics) {
		return {graphics: graphics, prefix: prefix, suiteToken: suiteToken};
	});
var $author$project$Graphic_Downloader$decodeGraphicList = A4(
	$elm$json$Json$Decode$map3,
	$author$project$Graphic_Downloader$GraphicList,
	A2($elm$json$Json$Decode$field, 'bucketName', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'nextContinuationToken',
		$elm$json$Json$Decode$nullable($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'objectSummaries',
		$elm$json$Json$Decode$list(
			A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string))));
var $author$project$Graphic_Downloader$nextGraphicList = F2(
	function (graphicData, msgFun) {
		var _v0 = graphicData.suiteToken;
		if (_v0.$ === 'Just') {
			var token = _v0.a;
			var pagePath = A2(
				$elm$url$Url$Builder$absolute,
				_List_fromArray(
					['downloadGraphicPage']),
				_List_fromArray(
					[
						A2($elm$url$Url$Builder$string, 'keyName', graphicData.userId + ('/' + graphicData.graphicType)),
						A2($elm$url$Url$Builder$string, 'tokenSuite', token)
					]));
			return $elm$http$Http$get(
				{
					expect: A2($elm$http$Http$expectJson, msgFun, $author$project$Graphic_Downloader$decodeGraphicList),
					url: pagePath
				});
		} else {
			var pagePath = A2(
				$elm$url$Url$Builder$absolute,
				_List_fromArray(
					['downloadGraphicPage']),
				_List_fromArray(
					[
						A2($elm$url$Url$Builder$string, 'keyName', graphicData.userId + ('/' + graphicData.graphicType))
					]));
			return $elm$http$Http$get(
				{
					expect: A2($elm$http$Http$expectJson, msgFun, $author$project$Graphic_Downloader$decodeGraphicList),
					url: pagePath
				});
		}
	});
var $author$project$SubstancePlayer$SeqPage = function (a) {
	return {$: 'SeqPage', a: a};
};
var $author$project$SubstancePlayer$SubPage = function (a) {
	return {$: 'SubPage', a: a};
};
var $author$project$SubstancePlayer$SubstanceList = F2(
	function (suiteToken, substances) {
		return {substances: substances, suiteToken: suiteToken};
	});
var $author$project$SubstancePlayer$decodeSubstanceList = A2(
	$elm$json$Json$Decode$andThen,
	function (string) {
		switch (string) {
			case 'SubPage':
				return A3(
					$elm$json$Json$Decode$map2,
					$author$project$SubstancePlayer$SubstanceList,
					$elm$json$Json$Decode$maybe(
						A2($elm$json$Json$Decode$field, 'nextContinuationToken', $elm$json$Json$Decode$string)),
					A2(
						$elm$json$Json$Decode$field,
						'objectSummaries',
						A2(
							$elm$json$Json$Decode$map,
							$author$project$SubstancePlayer$SubPage,
							$elm$json$Json$Decode$list(
								A2($elm$json$Json$Decode$field, 'key', $author$project$SubstancePlayer$decodeSubstance)))));
			case 'SeqPage':
				return A3(
					$elm$json$Json$Decode$map2,
					$author$project$SubstancePlayer$SubstanceList,
					$elm$json$Json$Decode$maybe(
						A2($elm$json$Json$Decode$field, 'nextContinuationToken', $elm$json$Json$Decode$string)),
					A2(
						$elm$json$Json$Decode$field,
						'objectSummaries',
						A2(
							$elm$json$Json$Decode$map,
							$author$project$SubstancePlayer$SeqPage,
							$elm$json$Json$Decode$list(
								A2($elm$json$Json$Decode$field, 'key', $author$project$SubstancePlayer$decodeSubstance)))));
			default:
				return $elm$json$Json$Decode$fail('Invalid Page');
		}
	},
	A2($elm$json$Json$Decode$field, 'pageType', $elm$json$Json$Decode$string));
var $author$project$SubstancePlayer$nextGraphicList = F3(
	function (graphicData, msgFun, backendCall) {
		var _v0 = graphicData.suiteToken;
		if (_v0.$ === 'Just') {
			var token = _v0.a;
			var pagePath = A2(
				$elm$url$Url$Builder$absolute,
				_List_fromArray(
					[backendCall]),
				_List_fromArray(
					[
						A2($elm$url$Url$Builder$string, 'UserID', graphicData.userId),
						A2($elm$url$Url$Builder$string, 'tokenSuite', token)
					]));
			return $elm$http$Http$get(
				{
					expect: A2($elm$http$Http$expectJson, msgFun, $author$project$SubstancePlayer$decodeSubstanceList),
					url: pagePath
				});
		} else {
			var _v1 = graphicData.elementPages;
			if (_v1.$ === 'Nothing') {
				var pagePath = A2(
					$elm$url$Url$Builder$absolute,
					_List_fromArray(
						[backendCall]),
					_List_fromArray(
						[
							A2($elm$url$Url$Builder$string, 'UserID', graphicData.userId)
						]));
				return $elm$http$Http$get(
					{
						expect: A2($elm$http$Http$expectJson, msgFun, $author$project$SubstancePlayer$decodeSubstanceList),
						url: pagePath
					});
			} else {
				return $elm$core$Platform$Cmd$none;
			}
		}
	});
var $author$project$Graphic_Downloader$obtainGraphicList = F2(
	function (graphicData, msgGet) {
		var pagePath = A2(
			$elm$url$Url$Builder$absolute,
			_List_fromArray(
				['downloadGraphicPage']),
			_List_fromArray(
				[
					A2($elm$url$Url$Builder$string, 'keyName', graphicData.userId + ('/' + graphicData.graphicType))
				]));
		return $elm$http$Http$get(
			{
				expect: A2($elm$http$Http$expectJson, msgGet, $author$project$Graphic_Downloader$decodeGraphicList),
				url: pagePath
			});
	});
var $author$project$SubstancePlayer$obtainGraphicList = F3(
	function (graphicData, msgGet, backendCall) {
		var pagePath = A2(
			$elm$url$Url$Builder$absolute,
			_List_fromArray(
				[backendCall]),
			_List_fromArray(
				[
					A2($elm$url$Url$Builder$string, 'UserID', graphicData.userId)
				]));
		return $elm$http$Http$get(
			{
				expect: A2($elm$http$Http$expectJson, msgGet, $author$project$SubstancePlayer$decodeSubstanceList),
				url: pagePath
			});
	});
var $author$project$ApplicationCreator$obtainMetaSearchResult = F5(
	function (graphicData, meta, appId, msgGet, backendCall) {
		var pagePath = (meta !== '') ? ((appId !== '') ? A2(
			$elm$url$Url$Builder$absolute,
			_List_fromArray(
				[backendCall]),
			_List_fromArray(
				[
					A2($elm$url$Url$Builder$string, 'UserID', graphicData.userId),
					A2($elm$url$Url$Builder$string, 'metaData', meta),
					A2($elm$url$Url$Builder$string, 'appId', appId)
				])) : A2(
			$elm$url$Url$Builder$absolute,
			_List_fromArray(
				[backendCall]),
			_List_fromArray(
				[
					A2($elm$url$Url$Builder$string, 'UserID', graphicData.userId),
					A2($elm$url$Url$Builder$string, 'metaData', meta)
				]))) : ((appId !== '') ? A2(
			$elm$url$Url$Builder$absolute,
			_List_fromArray(
				[backendCall]),
			_List_fromArray(
				[
					A2($elm$url$Url$Builder$string, 'UserID', graphicData.userId),
					A2($elm$url$Url$Builder$string, 'appId', appId)
				])) : A2(
			$elm$url$Url$Builder$absolute,
			_List_fromArray(
				[backendCall]),
			_List_fromArray(
				[
					A2($elm$url$Url$Builder$string, 'UserID', graphicData.userId)
				])));
		return $elm$http$Http$get(
			{
				expect: A2($elm$http$Http$expectJson, msgGet, $author$project$SubstancePlayer$decodeSubstanceList),
				url: pagePath
			});
	});
var $author$project$SubstancePlayer$recordSubstance = F2(
	function (eleMsgSelectElement, substance) {
		switch (substance.$) {
			case 'Relation':
				var substanceRelation = substance.a;
				return _Utils_update(
					eleMsgSelectElement,
					{selectedSubstanceId: substanceRelation.subId});
			case 'Dynamic':
				var substanceDynamic = substance.a;
				return _Utils_update(
					eleMsgSelectElement,
					{selectedSubstanceId: substanceDynamic.subId});
			default:
				var substancePotential = substance.a;
				return _Utils_update(
					eleMsgSelectElement,
					{selectedSubstanceId: substancePotential.subId});
		}
	});
var $author$project$ApplicationPlayer$recordZoomedSubstance = function (appMsgPlayApp) {
	return _Utils_update(
		appMsgPlayApp,
		{recordZoom: !appMsgPlayApp.recordZoom});
};
var $author$project$ApplicationCreator$resetApplication = function (eleMsgAppEdited) {
	return _Utils_update(
		eleMsgAppEdited,
		{activeModule: $author$project$ApplicationCreator$Absent});
};
var $author$project$ApplicationPlayer$resetDeployment = function (appMsgPlayApp) {
	return _Utils_update(
		appMsgPlayApp,
		{deployOrigin: $elm$core$Maybe$Nothing, deployedContainer: $elm$core$Maybe$Nothing, deployedSubstance: $elm$core$Maybe$Nothing, deploymentList: $elm$core$Maybe$Nothing});
};
var $author$project$ApplicationPlayer$resetMenu = function (appMsgPlayApp) {
	return _Utils_update(
		appMsgPlayApp,
		{appMenu: $elm$core$Maybe$Nothing, selectedElementMenu: $elm$core$Maybe$Nothing, selectedSubstanceMenu: $elm$core$Maybe$Nothing});
};
var $author$project$SubstancePlayer$resetPaging = function (eleMsgSelectElement) {
	return _Utils_update(
		eleMsgSelectElement,
		{currentPage: 0, elementPages: $elm$core$Maybe$Nothing});
};
var $author$project$ApplicationPlayer$resetPlayer = function (appMsgPlayApp) {
	return _Utils_update(
		appMsgPlayApp,
		{deployOrigin: $elm$core$Maybe$Nothing, originElement: $elm$core$Maybe$Nothing, shareState: $author$project$ApplicationPlayer$NoStatus, subInactiveList: $elm$core$Maybe$Nothing});
};
var $author$project$Graphic_Element$resetSubstance = function (eleMsgElementEdited) {
	return _Utils_update(
		eleMsgElementEdited,
		{activeCanvas: $author$project$Graphic_Element$Vide});
};
var $author$project$ApplicationPlayer$sendAppState = F3(
	function (appMsgPlayApp, isGlobalChecked, sentWhatev) {
		var appStatusPath = A2(
			$elm$url$Url$Builder$absolute,
			_List_fromArray(
				['setApplicationStatus']),
			_List_fromArray(
				[
					A2($elm$url$Url$Builder$string, 'appId', appMsgPlayApp.selectedAppId),
					A2(
					$elm$url$Url$Builder$string,
					'global',
					isGlobalChecked ? 'true' : 'false')
				]));
		return $elm$http$Http$get(
			{
				expect: $elm$http$Http$expectWhatever(sentWhatev),
				url: appStatusPath
			});
	});
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$ApplicationPlayer$encodeGeste = function (v) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'IDGeste',
				$elm$json$Json$Encode$string(v.idGeste)),
				_Utils_Tuple2(
				'IDFonctionAcquisition',
				$elm$json$Json$Encode$string(v.idFonctionAcquisition)),
				_Utils_Tuple2(
				'IDApplication',
				$elm$json$Json$Encode$string(v.idApplication)),
				_Utils_Tuple2(
				'TypeResultat',
				function () {
					var _v0 = v.typeResultat;
					switch (_v0.$) {
						case 'PotentielleSub':
							return $elm$json$Json$Encode$int(1);
						case 'DynamiqueSub':
							return $elm$json$Json$Encode$int(2);
						case 'RelationSub':
							return $elm$json$Json$Encode$int(3);
						case 'SubstanceElement':
							return $elm$json$Json$Encode$int(4);
						case 'ListeSubstanceElement':
							return $elm$json$Json$Encode$int(5);
						case 'BinaryFile':
							return $elm$json$Json$Encode$int(6);
						case 'DataString':
							return $elm$json$Json$Encode$int(7);
						case 'DateTime':
							return $elm$json$Json$Encode$int(8);
						default:
							return $elm$json$Json$Encode$int(9);
					}
				}()),
				_Utils_Tuple2(
				'ValeurDepart',
				function () {
					var _v1 = v.valeurDepart;
					if (_v1.$ === 'Just') {
						var val = _v1.a;
						return A2(
							$elm$json$Json$Encode$list,
							function (valeur) {
								return $elm$json$Json$Encode$string(valeur);
							},
							val);
					} else {
						return $elm$json$Json$Encode$null;
					}
				}()),
				_Utils_Tuple2(
				'Filtre',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'MetaData',
							function () {
								var _v2 = v.filtre.metaData;
								if (_v2.$ === 'Just') {
									var meta = _v2.a;
									return A2(
										$elm$json$Json$Encode$list,
										function (data) {
											return $elm$json$Json$Encode$string(data);
										},
										meta);
								} else {
									return $elm$json$Json$Encode$null;
								}
							}()),
							_Utils_Tuple2(
							'ValueData',
							function () {
								var _v3 = v.filtre.idSubstance;
								if (_v3.$ === 'Just') {
									var idSub = _v3.a;
									return A2(
										$elm$json$Json$Encode$list,
										function (subId) {
											return $elm$json$Json$Encode$string(subId);
										},
										idSub);
								} else {
									return $elm$json$Json$Encode$null;
								}
							}()),
							_Utils_Tuple2(
							'ListeFiltres',
							function () {
								var _v4 = v.filtre.listeFiltres;
								if (_v4.$ === 'Just') {
									var filtre = _v4.a;
									return A2(
										$elm$json$Json$Encode$list,
										function (vF) {
											switch (vF.$) {
												case 'FiltrePotentielle':
													return $elm$json$Json$Encode$int(1);
												case 'FiltreDynamique':
													return $elm$json$Json$Encode$int(2);
												case 'FiltreRelation':
													return $elm$json$Json$Encode$int(3);
												case 'FiltrePrincipale':
													return $elm$json$Json$Encode$int(4);
												case 'FiltrePremiere':
													return $elm$json$Json$Encode$int(5);
												case 'FiltreSeconde':
													return $elm$json$Json$Encode$int(6);
												case 'FiltreIDSubstance':
													return $elm$json$Json$Encode$int(7);
												case 'FiltreMetaData':
													return $elm$json$Json$Encode$int(8);
												default:
													return $elm$json$Json$Encode$int(9);
											}
										},
										filtre);
								} else {
									return $elm$json$Json$Encode$null;
								}
							}())
						]))),
				_Utils_Tuple2(
				'CatGeste',
				function () {
					var _v6 = v.catGeste;
					switch (_v6.$) {
						case 'Significatif':
							return $elm$json$Json$Encode$string('Significatif');
						case 'Integratif':
							return $elm$json$Json$Encode$string('Integratif');
						default:
							return $elm$json$Json$Encode$string('Harmonique');
					}
				}()),
				_Utils_Tuple2(
				'MetaData',
				$elm$json$Json$Encode$string(v.metaData))
			]));
};
var $author$project$ApplicationPlayer$sendGeste = F3(
	function (appMsgPlayApp, gesteSignificatif, results) {
		var _v0 = appMsgPlayApp.chosenApp;
		if (_v0.$ === 'Nothing') {
			return $elm$core$Platform$Cmd$none;
		} else {
			var chosen = _v0.a;
			var gestePath = A2(
				$elm$url$Url$Builder$absolute,
				_List_fromArray(
					['gesteHandler']),
				_List_fromArray(
					[
						A2($elm$url$Url$Builder$string, 'appId', chosen.appId)
					]));
			return $elm$http$Http$post(
				{
					body: $elm$http$Http$jsonBody(
						$author$project$ApplicationPlayer$encodeGeste(gesteSignificatif)),
					expect: A2($elm$http$Http$expectJson, results, $author$project$ApplicationPlayer$decodeListeElementInteractif),
					url: gestePath
				});
		}
	});
var $author$project$LucasCetPlatform$FileCode = F2(
	function (a, b) {
		return {$: 'FileCode', a: a, b: b};
	});
var $elm$http$Http$expectString = function (toMsg) {
	return A2(
		$elm$http$Http$expectStringResponse,
		toMsg,
		$elm$http$Http$resolve($elm$core$Result$Ok));
};
var $elm$file$File$mime = _File_mime;
var $elm$file$File$size = _File_size;
var $author$project$LucasCetPlatform$sendMediaElement = F2(
	function (file, userInfo) {
		if ($elm$file$File$size(file) > 33554432) {
			var pagePath = A2(
				$elm$core$String$contains,
				'image',
				$elm$file$File$mime(file)) ? A2(
				$elm$url$Url$Builder$absolute,
				_List_fromArray(
					['getMediaCode']),
				_List_fromArray(
					[
						A2(
						$elm$url$Url$Builder$string,
						'objectKey',
						_Utils_ap(
							userInfo.uploadImageId,
							$elm$file$File$name(file))),
						A2(
						$elm$url$Url$Builder$string,
						'contentType',
						$elm$file$File$mime(file))
					])) : A2(
				$elm$url$Url$Builder$absolute,
				_List_fromArray(
					['getMediaCode']),
				_List_fromArray(
					[
						A2(
						$elm$url$Url$Builder$string,
						'objectKey',
						_Utils_ap(
							userInfo.uploadVideoId,
							$elm$file$File$name(file))),
						A2(
						$elm$url$Url$Builder$string,
						'contentType',
						$elm$file$File$mime(file))
					]));
			return $elm$http$Http$get(
				{
					expect: $elm$http$Http$expectString(
						$author$project$LucasCetPlatform$FileCode(file)),
					url: pagePath
				});
		} else {
			var pagePath = A2(
				$elm$core$String$contains,
				'image',
				$elm$file$File$mime(file)) ? A2(
				$elm$url$Url$Builder$absolute,
				_List_fromArray(
					['uploadGraphic']),
				_List_fromArray(
					[
						A2(
						$elm$url$Url$Builder$string,
						'objectKey',
						_Utils_ap(
							userInfo.uploadImageId,
							$elm$file$File$name(file)))
					])) : A2(
				$elm$url$Url$Builder$absolute,
				_List_fromArray(
					['uploadGraphic']),
				_List_fromArray(
					[
						A2(
						$elm$url$Url$Builder$string,
						'objectKey',
						_Utils_ap(
							userInfo.uploadVideoId,
							$elm$file$File$name(file)))
					]));
			return $elm$http$Http$post(
				{
					body: $elm$http$Http$fileBody(file),
					expect: $elm$http$Http$expectWhatever(
						$author$project$LucasCetPlatform$FileTelecharge(
							$elm$file$File$name(file))),
					url: pagePath
				});
		}
	});
var $author$project$LucasCetPlatform$sendVid = _Platform_outgoingPort('sendVid', $elm$core$Basics$identity);
var $author$project$ApplicationPlayer$setChosenApp = F2(
	function (appMsgPlayApp, appInfo) {
		return _Utils_update(
			appMsgPlayApp,
			{
				chosenApp: $elm$core$Maybe$Just(appInfo)
			});
	});
var $author$project$ApplicationCreator$setTitle = F2(
	function (eleMsgAppEdited, title) {
		return _Utils_update(
			eleMsgAppEdited,
			{
				title: $elm$core$Maybe$Just(title)
			});
	});
var $author$project$ApplicationPlayer$startSavingMime = function (appMsgPlayApp) {
	return _Utils_update(
		appMsgPlayApp,
		{record2File: !appMsgPlayApp.record2File});
};
var $author$project$ApplicationPlayer$substanceClicked = F3(
	function (appMsgPlayApp, interSubstance, subId) {
		var _v0 = appMsgPlayApp.subInterList;
		if (_v0.$ === 'Nothing') {
			return appMsgPlayApp;
		} else {
			var interSubList = _v0.a;
			var filtreCourant = interSubstance.gesteAssocie.filtre;
			var _v1 = interSubstance.gesteAssocie.typeResultat;
			switch (_v1.$) {
				case 'PotentielleSub':
					return appMsgPlayApp;
				case 'DynamiqueSub':
					return appMsgPlayApp;
				case 'RelationSub':
					return appMsgPlayApp;
				case 'BinaryFile':
					return appMsgPlayApp;
				case 'DataString':
					return appMsgPlayApp;
				case 'DateTime':
					return appMsgPlayApp;
				case 'Duree':
					return appMsgPlayApp;
				case 'SubstanceElement':
					var gesteActif = interSubstance.gesteAssocie;
					return _Utils_update(
						appMsgPlayApp,
						{
							subInterList: $elm$core$Maybe$Just(
								A3(
									$elm_community$list_extra$List$Extra$setIf,
									$author$project$ApplicationPlayer$idInterSubItem(interSubstance),
									_Utils_update(
										interSubstance,
										{
											gesteAssocie: _Utils_update(
												gesteActif,
												{
													filtre: _Utils_update(
														filtreCourant,
														{
															idSubstance: $elm$core$Maybe$Just(
																_List_fromArray(
																	[subId]))
														})
												})
										}),
									interSubList))
						});
				default:
					var gesteActif = interSubstance.gesteAssocie;
					var _v2 = filtreCourant.idSubstance;
					if (_v2.$ === 'Nothing') {
						return _Utils_update(
							appMsgPlayApp,
							{
								subInterList: $elm$core$Maybe$Just(
									A3(
										$elm_community$list_extra$List$Extra$setIf,
										$author$project$ApplicationPlayer$idInterSubItem(interSubstance),
										_Utils_update(
											interSubstance,
											{
												gesteAssocie: _Utils_update(
													gesteActif,
													{
														filtre: _Utils_update(
															filtreCourant,
															{
																idSubstance: $elm$core$Maybe$Just(
																	_List_fromArray(
																		[subId]))
															})
													})
											}),
										interSubList))
							});
					} else {
						var idList = _v2.a;
						return _Utils_update(
							appMsgPlayApp,
							{
								subInterList: $elm$core$Maybe$Just(
									A3(
										$elm_community$list_extra$List$Extra$setIf,
										$author$project$ApplicationPlayer$idInterSubItem(interSubstance),
										_Utils_update(
											interSubstance,
											{
												gesteAssocie: _Utils_update(
													gesteActif,
													{
														filtre: _Utils_update(
															filtreCourant,
															{
																idSubstance: $elm$core$Maybe$Just(
																	A2($elm$core$List$cons, subId, idList)),
																listeFiltres: $elm$core$Maybe$Just(
																	_List_fromArray(
																		[$author$project$ApplicationPlayer$FiltreIDSubstance]))
															})
													})
											}),
										interSubList))
							});
					}
			}
		}
	});
var $author$project$Chat_Creator$GotElement = function (a) {
	return {$: 'GotElement', a: a};
};
var $author$project$Chat_Creator$GotElementContainer = function (a) {
	return {$: 'GotElementContainer', a: a};
};
var $author$project$Chat_Creator$GotImageList = function (a) {
	return {$: 'GotImageList', a: a};
};
var $author$project$Chat_Creator$GotVideoList = function (a) {
	return {$: 'GotVideoList', a: a};
};
var $author$project$Chat_Creator$SubstanceSearch = function (a) {
	return {$: 'SubstanceSearch', a: a};
};
var $author$project$Chat_Creator$createGroupWidget = F3(
	function (widget, selectedWidgets, widgetId) {
		return A5(
			$author$project$Chat_Creator$GroupWidget,
			widget.displayUrl,
			widgetId,
			A2($author$project$Chat_Creator$Coordinate, 0, 0),
			selectedWidgets,
			0);
	});
var $author$project$Chat_Creator$createSubstanceWidget = F4(
	function (point, src, widgetId, nature) {
		return A5($author$project$Chat_Creator$VisualWidget, src, _List_Nil, point, widgetId, nature);
	});
var $author$project$Chat_Creator$createToolWidget = F4(
	function (src, point, elem, widget) {
		return _Utils_update(
			widget,
			{
				tools: A2(
					$elm$core$List$cons,
					A4(
						$author$project$Chat_Creator$ToolWidget,
						src,
						_Utils_update(
							point,
							{clientX: (point.clientX - widget.position.clientX) - (elem.clientX / 2), clientY: (point.clientY - widget.position.clientY) - (elem.clientY / 2)}),
						$elm$core$List$length(widget.tools),
						widget.widgetId),
					widget.tools)
			});
	});
var $elm$browser$Browser$Dom$getElement = _Browser_getElement;
var $elm_community$list_extra$List$Extra$notMember = function (x) {
	return A2(
		$elm$core$Basics$composeL,
		$elm$core$Basics$not,
		$elm$core$List$member(x));
};
var $author$project$Chat_Creator$PostDone = function (a) {
	return {$: 'PostDone', a: a};
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $author$project$Chat_Creator$encodeChat = function (data) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'completedWidgets',
				A2(
					$elm$json$Json$Encode$list,
					function (vWidget) {
						return $elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'displayUrl',
									$elm$json$Json$Encode$string(vWidget.displayUrl)),
									_Utils_Tuple2(
									'tools',
									A2(
										$elm$json$Json$Encode$list,
										function (v) {
											return $elm$json$Json$Encode$object(
												_List_fromArray(
													[
														_Utils_Tuple2(
														'displayUrl',
														$elm$json$Json$Encode$string(v.displayUrl)),
														_Utils_Tuple2(
														'position',
														$elm$json$Json$Encode$object(
															_List_fromArray(
																[
																	_Utils_Tuple2(
																	'clientX',
																	$elm$json$Json$Encode$float(v.position.clientX)),
																	_Utils_Tuple2(
																	'clientY',
																	$elm$json$Json$Encode$float(v.position.clientY))
																]))),
														_Utils_Tuple2(
														'widgetId',
														$elm$json$Json$Encode$int(v.widgetId)),
														_Utils_Tuple2(
														'parentId',
														$elm$json$Json$Encode$int(v.parentId))
													]));
										},
										vWidget.tools)),
									_Utils_Tuple2(
									'position',
									$elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'clientX',
												$elm$json$Json$Encode$float(vWidget.position.clientX)),
												_Utils_Tuple2(
												'clientY',
												$elm$json$Json$Encode$float(vWidget.position.clientY))
											]))),
									_Utils_Tuple2(
									'widgetId',
									$elm$json$Json$Encode$int(vWidget.widgetId)),
									_Utils_Tuple2(
									'category',
									function () {
										var _v0 = vWidget.category;
										if (_v0.$ === 'Image') {
											return $elm$json$Json$Encode$string('Image');
										} else {
											return $elm$json$Json$Encode$string('Video');
										}
									}())
								]));
					},
					data.completedWidgets)),
				_Utils_Tuple2(
				'groupWidgets',
				A2(
					$elm$json$Json$Encode$list,
					function (group) {
						return $elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'displayUrl',
									$elm$json$Json$Encode$string(group.displayUrl)),
									_Utils_Tuple2(
									'widgetId',
									$elm$json$Json$Encode$int(group.widgetId)),
									_Utils_Tuple2(
									'position',
									$elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'clientX',
												$elm$json$Json$Encode$float(group.position.clientX)),
												_Utils_Tuple2(
												'clientY',
												$elm$json$Json$Encode$float(group.position.clientY))
											]))),
									_Utils_Tuple2(
									'constituant',
									A2(
										$elm$json$Json$Encode$list,
										function (widget) {
											return $elm$json$Json$Encode$object(
												_List_fromArray(
													[
														_Utils_Tuple2(
														'displayUrl',
														$elm$json$Json$Encode$string(widget.displayUrl)),
														_Utils_Tuple2(
														'tools',
														A2(
															$elm$json$Json$Encode$list,
															function (v) {
																return $elm$json$Json$Encode$object(
																	_List_fromArray(
																		[
																			_Utils_Tuple2(
																			'displayUrl',
																			$elm$json$Json$Encode$string(v.displayUrl)),
																			_Utils_Tuple2(
																			'position',
																			$elm$json$Json$Encode$object(
																				_List_fromArray(
																					[
																						_Utils_Tuple2(
																						'clientX',
																						$elm$json$Json$Encode$float(v.position.clientX)),
																						_Utils_Tuple2(
																						'clientY',
																						$elm$json$Json$Encode$float(v.position.clientY))
																					]))),
																			_Utils_Tuple2(
																			'widgetId',
																			$elm$json$Json$Encode$int(v.widgetId)),
																			_Utils_Tuple2(
																			'parentId',
																			$elm$json$Json$Encode$int(v.parentId))
																		]));
															},
															widget.tools)),
														_Utils_Tuple2(
														'position',
														$elm$json$Json$Encode$object(
															_List_fromArray(
																[
																	_Utils_Tuple2(
																	'clientX',
																	$elm$json$Json$Encode$float(widget.position.clientX)),
																	_Utils_Tuple2(
																	'clientY',
																	$elm$json$Json$Encode$float(widget.position.clientY))
																]))),
														_Utils_Tuple2(
														'widgetId',
														$elm$json$Json$Encode$int(widget.widgetId)),
														_Utils_Tuple2(
														'category',
														function () {
															var _v1 = widget.category;
															if (_v1.$ === 'Image') {
																return $elm$json$Json$Encode$string('Image');
															} else {
																return $elm$json$Json$Encode$string('Video');
															}
														}())
													]));
										},
										group.constituant)),
									_Utils_Tuple2(
									'answer',
									$elm$json$Json$Encode$int(group.answer))
								]));
					},
					data.groupWidgets)),
				_Utils_Tuple2(
				'contactId',
				$elm$json$Json$Encode$string(data.contactId))
			]));
};
var $elm$http$Http$Header = F2(
	function (a, b) {
		return {$: 'Header', a: a, b: b};
	});
var $elm$http$Http$header = $elm$http$Http$Header;
var $author$project$Chat_Creator$saveChat = F2(
	function (recipient, myId) {
		var chatUpload = A2(
			$elm$url$Url$Builder$absolute,
			_List_fromArray(
				['uploadChatMsg']),
			_List_fromArray(
				[
					A2($elm$url$Url$Builder$string, 'recipientId', recipient.contactId),
					A2($elm$url$Url$Builder$string, 'userId', myId)
				]));
		return $elm$http$Http$request(
			{
				body: $elm$http$Http$jsonBody(
					$author$project$Chat_Creator$encodeChat(
						_Utils_update(
							recipient,
							{contactId: myId}))),
				expect: $elm$http$Http$expectWhatever($author$project$Chat_Creator$PostDone),
				headers: _List_fromArray(
					[
						A2($elm$http$Http$header, 'Accept', '*/*'),
						A2($elm$http$Http$header, 'Accept-Encoding', 'gzip, deflate, br')
					]),
				method: 'POST',
				timeout: $elm$core$Maybe$Nothing,
				tracker: $elm$core$Maybe$Nothing,
				url: chatUpload
			});
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $elm_community$list_extra$List$Extra$updateAt = F3(
	function (index, fn, list) {
		if (index < 0) {
			return list;
		} else {
			var tail = A2($elm$core$List$drop, index, list);
			var head = A2($elm$core$List$take, index, list);
			if (tail.b) {
				var x = tail.a;
				var xs = tail.b;
				return _Utils_ap(
					head,
					A2(
						$elm$core$List$cons,
						fn(x),
						xs));
			} else {
				return list;
			}
		}
	});
var $author$project$Graphic_Downloader$updateGraphicData = function (graphicData) {
	var _v0 = graphicData.graphicPages;
	if (_v0.$ === 'Just') {
		var lesPages = _v0.a;
		var _v1 = graphicData.suiteToken;
		if (_v1.$ === 'Nothing') {
			return _Utils_update(
				graphicData,
				{
					chooseNextPage: (_Utils_cmp(
						graphicData.currentPage,
						$elm$core$List$length(lesPages)) < 0) ? $elm$core$Maybe$Just(graphicData.nextMsg) : $elm$core$Maybe$Nothing,
					choosePreviousPage: (graphicData.currentPage > 0) ? $elm$core$Maybe$Just(graphicData.prevMsg) : $elm$core$Maybe$Nothing
				});
		} else {
			return _Utils_update(
				graphicData,
				{
					chooseNextPage: $elm$core$Maybe$Just(graphicData.nextMsg),
					choosePreviousPage: (graphicData.currentPage > 0) ? $elm$core$Maybe$Just(graphicData.prevMsg) : $elm$core$Maybe$Nothing
				});
		}
	} else {
		return graphicData;
	}
};
var $author$project$Chat_Creator$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'LoadNextImgSet':
				var _v1 = model.imgChoices.graphicPages;
				if (_v1.$ === 'Just') {
					var pages = _v1.a;
					var choices = model.imgChoices;
					return (_Utils_cmp(
						model.imgChoices.currentPage + 2,
						$elm$core$List$length(pages)) > 0) ? _Utils_Tuple2(
						_Utils_update(
							model,
							{
								imgChoices: _Utils_update(
									choices,
									{currentPage: choices.currentPage + 1})
							}),
						A2($author$project$Graphic_Downloader$obtainGraphicList, model.imgChoices, $author$project$Chat_Creator$GotImageList)) : _Utils_Tuple2(
						_Utils_update(
							model,
							{
								imgChoices: $author$project$Graphic_Downloader$updateGraphicData(
									_Utils_update(
										choices,
										{currentPage: choices.currentPage + 1}))
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'LoadNextVideoSet':
				var _v2 = model.videoChoices.graphicPages;
				if (_v2.$ === 'Just') {
					var pages = _v2.a;
					var choices = model.videoChoices;
					return (_Utils_cmp(
						model.videoChoices.currentPage + 2,
						$elm$core$List$length(pages)) > 0) ? _Utils_Tuple2(
						_Utils_update(
							model,
							{
								videoChoices: _Utils_update(
									choices,
									{currentPage: choices.currentPage + 1})
							}),
						A2($author$project$Graphic_Downloader$nextGraphicList, model.videoChoices, $author$project$Chat_Creator$GotVideoList)) : _Utils_Tuple2(
						_Utils_update(
							model,
							{
								videoChoices: $author$project$Graphic_Downloader$updateGraphicData(
									_Utils_update(
										choices,
										{currentPage: choices.currentPage + 1}))
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'LoadPreviousImgSet':
				var choices = model.imgChoices;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							imgChoices: $author$project$Graphic_Downloader$updateGraphicData(
								_Utils_update(
									choices,
									{currentPage: choices.currentPage - 1}))
						}),
					$elm$core$Platform$Cmd$none);
			case 'LoadPreviousVideoSet':
				var choices = model.videoChoices;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							videoChoices: $author$project$Graphic_Downloader$updateGraphicData(
								_Utils_update(
									choices,
									{currentPage: choices.currentPage - 1}))
						}),
					$elm$core$Platform$Cmd$none);
			case 'GotImageList':
				if (msg.a.$ === 'Ok') {
					var imagesPackage = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								imgChoices: $author$project$Graphic_Downloader$updateGraphicData(
									A2($author$project$Graphic_Downloader$addNewPage, imagesPackage, model.imgChoices))
							}),
						A2($author$project$Graphic_Downloader$obtainGraphicList, model.videoChoices, $author$project$Chat_Creator$GotVideoList));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'GotVideoList':
				if (msg.a.$ === 'Ok') {
					var videoPackage = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								videoChoices: $author$project$Graphic_Downloader$updateGraphicData(
									A2($author$project$Graphic_Downloader$addNewPage, videoPackage, model.videoChoices))
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'ShowWidgets':
				if (msg.a.$ === 'Ok') {
					var lstWidgets = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{widgetBlueprints: lstWidgets}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'StartDrag':
				var widget = msg.a;
				var _v3 = widget.category;
				if (_v3.$ === 'Tool') {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								draggedWidget: $elm$core$Maybe$Just(widget)
							}),
						A2(
							$elm$core$Task$attempt,
							$author$project$Chat_Creator$GotElement,
							$elm$browser$Browser$Dom$getElement(widget.widgetId)));
				} else {
					return (model.nbAdjustment >= 0) ? _Utils_Tuple2(
						_Utils_update(
							model,
							{
								draggedWidget: $elm$core$Maybe$Just(widget)
							}),
						$elm$core$Platform$Cmd$none) : _Utils_Tuple2(
						_Utils_update(
							model,
							{
								draggedWidget: $elm$core$Maybe$Just(widget)
							}),
						A2(
							$elm$core$Task$attempt,
							$author$project$Chat_Creator$GotElementContainer,
							$elm$browser$Browser$Dom$getElement('mainContainer')));
				}
			case 'DropWidgetOnWidget':
				var parentWidget = msg.a;
				var clientPoint = msg.b;
				var _v4 = model.draggedWidget;
				if (_v4.$ === 'Nothing') {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					var widget = _v4.a;
					var minfo = model.chatInfo;
					var _v5 = widget.category;
					if (_v5.$ === 'Tool') {
						var elem = _v5.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									chatInfo: _Utils_update(
										minfo,
										{
											completedWidgets: A3(
												$elm_community$list_extra$List$Extra$updateAt,
												parentWidget.widgetId,
												function (a) {
													return A4(
														$author$project$Chat_Creator$createToolWidget,
														widget.displayUrl,
														A2($author$project$Chat_Creator$Coordinate, clientPoint.clientX, clientPoint.clientY - model.nbAdjustment),
														elem,
														a);
												},
												model.chatInfo.completedWidgets)
										}),
									dragStatus: $author$project$Chat_Creator$NothingSoFar,
									draggedWidget: $elm$core$Maybe$Nothing
								}),
							$elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				}
			case 'DropWidgetOnCanvas':
				var clientPoint = msg.a;
				var _v6 = model.draggedWidget;
				if (_v6.$ === 'Nothing') {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					var widget = _v6.a;
					var _v7 = widget.category;
					switch (_v7.$) {
						case 'Visual':
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										dragStatus: $author$project$Chat_Creator$SubstanceSearch(clientPoint)
									}),
								A2($author$project$Graphic_Downloader$obtainGraphicList, model.imgChoices, $author$project$Chat_Creator$GotImageList));
						case 'Group':
							var value = _v7.a;
							var minfo = model.chatInfo;
							if (value.$ === 'Just') {
								var gridget = value.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											chatInfo: _Utils_update(
												minfo,
												{
													groupWidgets: A2(
														$elm$core$List$cons,
														_Utils_update(
															gridget,
															{
																position: A2($author$project$Chat_Creator$Coordinate, clientPoint.clientX, clientPoint.clientY - model.nbAdjustment)
															}),
														model.chatInfo.groupWidgets)
												}),
											draggedWidget: $elm$core$Maybe$Nothing
										}),
									$elm$core$Platform$Cmd$none);
							} else {
								return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
							}
						default:
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				}
			case 'ImagePicked':
				var src = msg.a;
				var _v9 = model.draggedWidget;
				if (_v9.$ === 'Nothing') {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					var widget = _v9.a;
					var minfo = model.chatInfo;
					var _v10 = model.dragStatus;
					if (_v10.$ === 'SubstanceSearch') {
						var clientPoint = _v10.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									chatInfo: _Utils_update(
										minfo,
										{
											completedWidgets: A2(
												$elm$core$List$cons,
												A4(
													$author$project$Chat_Creator$createSubstanceWidget,
													A2($author$project$Chat_Creator$Coordinate, clientPoint.clientX, clientPoint.clientY - model.nbAdjustment),
													src,
													$elm$core$List$length(model.chatInfo.completedWidgets),
													$author$project$Chat_Creator$Image),
												model.chatInfo.completedWidgets)
										}),
									dragStatus: $author$project$Chat_Creator$NothingSoFar,
									draggedWidget: $elm$core$Maybe$Nothing
								}),
							$elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				}
			case 'VideoPicked':
				var src = msg.a;
				var _v11 = model.draggedWidget;
				if (_v11.$ === 'Nothing') {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					var widget = _v11.a;
					var minfo = model.chatInfo;
					var _v12 = model.dragStatus;
					if (_v12.$ === 'SubstanceSearch') {
						var clientPoint = _v12.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									chatInfo: _Utils_update(
										minfo,
										{
											completedWidgets: A2(
												$elm$core$List$cons,
												A4(
													$author$project$Chat_Creator$createSubstanceWidget,
													A2($author$project$Chat_Creator$Coordinate, clientPoint.clientX, clientPoint.clientY - model.nbAdjustment),
													src,
													$elm$core$List$length(model.chatInfo.completedWidgets),
													$author$project$Chat_Creator$Video),
												model.chatInfo.completedWidgets)
										}),
									dragStatus: $author$project$Chat_Creator$NothingSoFar,
									draggedWidget: $elm$core$Maybe$Nothing
								}),
							$elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				}
			case 'RienFaire':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'UpdateSelection':
				var widget2Add = msg.a;
				var _v13 = model.selectedWidget;
				if (_v13.$ === 'Just') {
					var selection = _v13.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								selectedWidget: $elm$core$Maybe$Just(
									A2($elm$core$List$cons, widget2Add, selection))
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								selectedWidget: $elm$core$Maybe$Just(
									_List_fromArray(
										[widget2Add]))
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'ToggleGroup':
				var widget = msg.a;
				var _v14 = widget.category;
				switch (_v14.$) {
					case 'Visual':
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					case 'Tool':
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					default:
						var minfo = model.chatInfo;
						var _v15 = model.selectedWidget;
						if (_v15.$ === 'Nothing') {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						} else {
							var selectedWidgets = _v15.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										chatInfo: _Utils_update(
											minfo,
											{
												completedWidgets: A2(
													$elm$core$List$filter,
													function (a) {
														return A2($elm_community$list_extra$List$Extra$notMember, a, selectedWidgets);
													},
													model.chatInfo.completedWidgets)
											}),
										draggedWidget: $elm$core$Maybe$Just(
											_Utils_update(
												widget,
												{
													category: $author$project$Chat_Creator$Group(
														$elm$core$Maybe$Just(
															A3(
																$author$project$Chat_Creator$createGroupWidget,
																widget,
																selectedWidgets,
																$elm$core$List$length(model.chatInfo.groupWidgets))))
												})),
										selectedWidget: $elm$core$Maybe$Nothing
									}),
								$elm$core$Platform$Cmd$none);
						}
				}
			case 'GotElement':
				if (msg.a.$ === 'Err') {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					var elem = msg.a.a;
					var _v16 = model.draggedWidget;
					if (_v16.$ === 'Nothing') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var widget = _v16.a;
						var _v17 = widget.category;
						if (_v17.$ === 'Tool') {
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										draggedWidget: $elm$core$Maybe$Just(
											_Utils_update(
												widget,
												{
													category: $author$project$Chat_Creator$Tool(
														A2($author$project$Chat_Creator$Coordinate, elem.element.width, elem.element.height))
												}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						}
					}
				}
			case 'GotElementContainer':
				if (msg.a.$ === 'Err') {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					var elem = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{nbAdjustment: elem.element.y}),
						$elm$core$Platform$Cmd$none);
				}
			case 'GotAnswer':
				var widget = msg.a;
				var val = msg.b;
				var minfo = model.chatInfo;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							chatInfo: _Utils_update(
								minfo,
								{
									groupWidgets: A3(
										$elm_community$list_extra$List$Extra$updateAt,
										widget.widgetId,
										$elm$core$Basics$always(
											_Utils_update(
												widget,
												{answer: val})),
										model.chatInfo.groupWidgets)
								})
						}),
					$elm$core$Platform$Cmd$none);
			case 'SaveChatInfo':
				return _Utils_Tuple2(
					model,
					A2($author$project$Chat_Creator$saveChat, model.chatInfo, model.userId));
			default:
				if (msg.a.$ === 'Err') {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
		}
	});
var $author$project$ApplicationPlayer$updateAppState = F2(
	function (appMsgPlayApp, check4All) {
		return _Utils_update(
			appMsgPlayApp,
			{shareState: $author$project$ApplicationPlayer$Global});
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $author$project$LucasCetPlatform$updateChatWith = F4(
	function (toModel, toMsg, model, _v0) {
		var subModel = _v0.a;
		var subCmd = _v0.b;
		return _Utils_Tuple2(
			toModel(
				$author$project$LucasCetPlatform$ChatModel(subModel)),
			A2($elm$core$Platform$Cmd$map, toMsg, subCmd));
	});
var $author$project$SubstancePlayer$updateGraphicData = function (subData) {
	var _v0 = subData.elementPages;
	if (_v0.$ === 'Just') {
		var lesPages = _v0.a;
		var _v1 = subData.suiteToken;
		if (_v1.$ === 'Nothing') {
			return _Utils_update(
				subData,
				{
					chooseNextPage: (_Utils_cmp(
						subData.currentPage + 1,
						$elm$core$List$length(lesPages)) < 0) ? $elm$core$Maybe$Just(subData.nextMsg) : $elm$core$Maybe$Nothing,
					choosePreviousPage: (subData.currentPage > 0) ? $elm$core$Maybe$Just(subData.prevMsg) : $elm$core$Maybe$Nothing
				});
		} else {
			return _Utils_update(
				subData,
				{
					chooseNextPage: $elm$core$Maybe$Just(subData.nextMsg),
					choosePreviousPage: (subData.currentPage > 0) ? $elm$core$Maybe$Just(subData.prevMsg) : $elm$core$Maybe$Nothing
				});
		}
	} else {
		return subData;
	}
};
var $author$project$ApplicationPlayer$updateViewport = F2(
	function (appMsgPlayApp, viewport) {
		return _Utils_update(
			appMsgPlayApp,
			{
				viewPortInfo: $elm$core$Maybe$Just(viewport)
			});
	});
var $author$project$ApplicationPlayer$zoomSubstance = F2(
	function (appMsgPlayApp, substanceSub) {
		return _Utils_update(
			appMsgPlayApp,
			{
				zoomedSubtance: $elm$core$Maybe$Just(substanceSub)
			});
	});
var $author$project$LucasCetPlatform$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'Start':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'RequestUrl':
				var request = msg.a;
				if (request.$ === 'Internal') {
					var url = request.a;
					var _v2 = url.path;
					switch (_v2) {
						case '/login/facebook':
							return _Utils_Tuple2(
								model,
								$elm$browser$Browser$Navigation$load(
									$elm$url$Url$toString(url)));
						case 'github/login':
							return _Utils_Tuple2(
								model,
								$elm$browser$Browser$Navigation$load(
									$elm$url$Url$toString(url)));
						default:
							var somethingElse = _v2;
							var _v3 = model.userInfo;
							if (_v3.$ === 'Nothing') {
								return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
							} else {
								return _Utils_Tuple2(
									model,
									A2(
										$elm$browser$Browser$Navigation$pushUrl,
										model.navKey,
										$elm$url$Url$toString(url)));
							}
					}
				} else {
					var url = request.a;
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'ChangeUrl':
				var url = msg.a;
				var _v4 = url.path;
				switch (_v4) {
					case '/chat':
						var _v5 = model.friends;
						if (_v5.$ === 'Just') {
							var lstFriends = _v5.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{displayMode: $author$project$LucasCetPlatform$ChatMessages}),
								$elm$core$Platform$Cmd$none);
						} else {
							var _v6 = model.userInfo;
							if (_v6.$ === 'Just') {
								var userData = _v6.a;
								return _Utils_Tuple2(
									model,
									function () {
										var msgPath = A2(
											$elm$url$Url$Builder$absolute,
											_List_fromArray(
												['downloadFriends']),
											_List_fromArray(
												[
													A2($elm$url$Url$Builder$string, 'userId', userData.userId)
												]));
										return $elm$http$Http$get(
											{
												expect: A2($elm$http$Http$expectJson, $author$project$LucasCetPlatform$GotFriends, $author$project$LucasCetPlatform$decodeFriendsData),
												url: msgPath
											});
									}());
							} else {
								return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
							}
						}
					case '/multimedia':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{displayMode: $author$project$LucasCetPlatform$UploadFile}),
							$elm$core$Platform$Cmd$none);
					case '/didactique':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									displayMode: $author$project$LucasCetPlatform$PlayApplication,
									player: $author$project$ApplicationPlayer$resetPlayer(model.player)
								}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										A2($elm$core$Task$attempt, $author$project$LucasCetPlatform$GotScreenSize, $elm$browser$Browser$Dom$getViewport),
										function () {
										var msgPath = A2(
											$elm$url$Url$Builder$absolute,
											_List_fromArray(
												['getUserApplications']),
											_List_fromArray(
												[
													A2($elm$url$Url$Builder$string, 'userId', model.imgChoices.userId)
												]));
										return $elm$http$Http$get(
											{
												expect: A2($elm$http$Http$expectJson, $author$project$LucasCetPlatform$AppInfoListe, $author$project$ApplicationCreator$decodeAppState),
												url: msgPath
											});
									}()
									])));
					case '/dictionnaire':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									displayMode: $author$project$LucasCetPlatform$DicoSubstance,
									imgChoices: A5($author$project$Graphic_Downloader$initGraphic, model.imgChoices.userId, 'image', $author$project$LucasCetPlatform$ImagesPicked, $author$project$LucasCetPlatform$LoadNextImagesSet, $author$project$LucasCetPlatform$LoadPreviousImagesSet)
								}),
							$elm$core$Platform$Cmd$none);
					case '/applicationModule':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									appEditor: $author$project$ApplicationCreator$resetApplication(model.appEditor),
									displayMode: $author$project$LucasCetPlatform$ApplicationModule,
									imgChoices: A5($author$project$Graphic_Downloader$initGraphic, model.imgChoices.userId, 'image', $author$project$LucasCetPlatform$IconePicked, $author$project$LucasCetPlatform$LoadNextImagesSet, $author$project$LucasCetPlatform$LoadPreviousImagesSet)
								}),
							function () {
								var msgPath = A2(
									$elm$url$Url$Builder$absolute,
									_List_fromArray(
										['getUserApplications']),
									_List_fromArray(
										[
											A2($elm$url$Url$Builder$string, 'userId', model.imgChoices.userId)
										]));
								return $elm$http$Http$get(
									{
										expect: A2($elm$http$Http$expectJson, $author$project$LucasCetPlatform$AppInfoListe, $author$project$ApplicationCreator$decodeAppState),
										url: msgPath
									});
							}());
					case '/tableSubstance':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{backendCall: 'downloadSubstancePage', displayMode: $author$project$LucasCetPlatform$TableSubstance}),
							A3($author$project$SubstancePlayer$obtainGraphicList, model.subChoices, $author$project$LucasCetPlatform$GotSubstanceList, 'downloadSubstancePage'));
					case '/login':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									appEditor: $author$project$ApplicationCreator$resetApplication(model.appEditor),
									displayMode: $author$project$LucasCetPlatform$LoginDisplay,
									player: $author$project$ApplicationPlayer$closePlayer(model.player),
									subEditor: $author$project$Graphic_Element$resetSubstance(model.subEditor)
								}),
							$elm$core$Platform$Cmd$none);
					default:
						var somethingElse = _v4;
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'LoginAndGetUser':
				if (msg.a.$ === 'Ok') {
					var userData = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								appEditor: A7($author$project$ApplicationCreator$initApp, $author$project$LucasCetPlatform$CreerNouvelleApplication, $author$project$LucasCetPlatform$SelectImage, $author$project$LucasCetPlatform$SetModTitle, $author$project$LucasCetPlatform$SelectSequence, userData.userId, $author$project$LucasCetPlatform$EditApplication, $author$project$LucasCetPlatform$InitialiserApplication),
								imgChoices: A5($author$project$Graphic_Downloader$initGraphic, userData.userId, 'image', $author$project$LucasCetPlatform$ImagesPicked, $author$project$LucasCetPlatform$LoadNextImagesSet, $author$project$LucasCetPlatform$LoadPreviousImagesSet),
								player: $author$project$ApplicationPlayer$initPlayer($author$project$LucasCetPlatform$ActivateApplication)(userData.userId)($author$project$LucasCetPlatform$MessageAcquisition)($author$project$LucasCetPlatform$CancelSelection)($author$project$LucasCetPlatform$ConfirmMessage)($author$project$LucasCetPlatform$SenderOfData)($author$project$LucasCetPlatform$SubstancePicker)($author$project$LucasCetPlatform$ZoomCancel)($author$project$LucasCetPlatform$ContainerPicker)($author$project$LucasCetPlatform$Reseteur)($author$project$LucasCetPlatform$Closit)($author$project$LucasCetPlatform$ZoomRecord)($author$project$LucasCetPlatform$RecordInFile)($author$project$LucasCetPlatform$AppMenuHandler)($author$project$LucasCetPlatform$ShareAllUserChecked),
								subChoices: A7($author$project$SubstancePlayer$initSelectElement, userData.userId, $author$project$LucasCetPlatform$SubstancePicked, $author$project$LucasCetPlatform$SubstanceChosen, $author$project$LucasCetPlatform$AppSubstancePicked, $author$project$LucasCetPlatform$LoadPreviousSubstanceSet, $author$project$LucasCetPlatform$LoadNextSubstanceSet, $author$project$LucasCetPlatform$CleanDico),
								subEditor: $author$project$Graphic_Element$initElement($author$project$LucasCetPlatform$CreerPotentielle)($author$project$LucasCetPlatform$CreerMotrice)($author$project$LucasCetPlatform$CreerRelation)($author$project$LucasCetPlatform$SelectImage)($author$project$LucasCetPlatform$SelectVideo)($author$project$LucasCetPlatform$SetTitle)($author$project$LucasCetPlatform$SelectSubstance)($author$project$LucasCetPlatform$DeploySelectedSubstance)($author$project$LucasCetPlatform$EnregistrerSubstance)(userData.userId),
								userInfo: $elm$core$Maybe$Just(userData),
								vidChoices: A5($author$project$Graphic_Downloader$initGraphic, userData.userId, 'video', $author$project$LucasCetPlatform$VideosPicked, $author$project$LucasCetPlatform$LoadNextVideosSet, $author$project$LucasCetPlatform$LoadPreviousVideosSet)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					var errMsg = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{errorMsg: errMsg}),
						$elm$core$Platform$Cmd$none);
				}
			case 'AppInfoListe':
				if (msg.a.$ === 'Err') {
					var errMsg = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{errorMsg: errMsg}),
						$elm$core$Platform$Cmd$none);
				} else {
					var appState = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								appEditor: A2($author$project$ApplicationCreator$addAppState, model.appEditor, appState),
								player: A2($author$project$ApplicationPlayer$addPlayState, model.player, appState.activeApplication)
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'GotFriends':
				if (msg.a.$ === 'Err') {
					var errMsg = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{errorMsg: errMsg}),
						$elm$core$Platform$Cmd$none);
				} else {
					var lstFriends = msg.a.a;
					var _v7 = model.userInfo;
					if (_v7.$ === 'Just') {
						var userData = _v7.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									displayMode: $author$project$LucasCetPlatform$ChatMessages,
									friends: $elm$core$Maybe$Just(lstFriends)
								}),
							function () {
								var msgPath = A2(
									$elm$url$Url$Builder$absolute,
									_List_fromArray(
										['downloadChatMsg']),
									_List_fromArray(
										[
											A2($elm$url$Url$Builder$string, 'userId', userData.userId)
										]));
								return $elm$http$Http$get(
									{
										expect: A2($elm$http$Http$expectJson, $author$project$LucasCetPlatform$GotMail, $author$project$LucasCetPlatform$decodeChatData),
										url: msgPath
									});
							}());
					} else {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				}
			case 'GotMail':
				if (msg.a.$ === 'Err') {
					var errMsg = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{errorMsg: errMsg}),
						$elm$core$Platform$Cmd$none);
				} else {
					var resultLst = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{chatMsg: resultLst}),
						$elm$core$Platform$Cmd$none);
				}
			case 'CreerPotentielle':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							subEditor: $author$project$Graphic_Element$createSubstancePotentielle(model.subEditor)
						}),
					$elm$core$Platform$Cmd$none);
			case 'CreerMotrice':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							subEditor: $author$project$Graphic_Element$creerSubstanceMotrice(model.subEditor)
						}),
					$elm$core$Platform$Cmd$none);
			case 'CreerRelation':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							subEditor: $author$project$Graphic_Element$creerSubstanceRelation(model.subEditor)
						}),
					$elm$core$Platform$Cmd$none);
			case 'CreerNouvelleApplication':
				var canvas = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							appEditor: A2($author$project$ApplicationCreator$creerApplication, model.appEditor, canvas)
						}),
					$elm$core$Platform$Cmd$none);
			case 'InitialiserApplication':
				var canvas = msg.a;
				return _Utils_Tuple2(
					model,
					A3($author$project$ApplicationCreator$initializeApplicationModule, model.appEditor, canvas, $author$project$LucasCetPlatform$FileSuccess));
			case 'EditApplication':
				var canvas = msg.a;
				var info = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							appEditor: A3($author$project$ApplicationCreator$editSelectedApplication, model.appEditor, canvas, info)
						}),
					$elm$core$Platform$Cmd$none);
			case 'SelectImage':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{displayMode: $author$project$LucasCetPlatform$SelectMedia}),
					A2($author$project$Graphic_Downloader$obtainGraphicList, model.imgChoices, $author$project$LucasCetPlatform$GotImagesList));
			case 'SetTitle':
				var titre = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							subEditor: A2($author$project$Graphic_Element$ajouterTitre, model.subEditor, titre)
						}),
					$elm$core$Platform$Cmd$none);
			case 'SetModTitle':
				var titre = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							appEditor: A2($author$project$ApplicationCreator$setTitle, model.appEditor, titre)
						}),
					$elm$core$Platform$Cmd$none);
			case 'SelectVideo':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{displayMode: $author$project$LucasCetPlatform$SelectMedia}),
					A2($author$project$Graphic_Downloader$obtainGraphicList, model.vidChoices, $author$project$LucasCetPlatform$GotVideosList));
			case 'SelectSubstance':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							backendCall: 'downloadSubstancePage',
							displayMode: $author$project$LucasCetPlatform$ViewSubstance,
							subChoices: $author$project$SubstancePlayer$resetPaging(model.subChoices)
						}),
					A3($author$project$SubstancePlayer$obtainGraphicList, model.subChoices, $author$project$LucasCetPlatform$GotSubstanceList, 'downloadSubstancePage'));
			case 'SelectSequence':
				var metaData = msg.a;
				var appId = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							backendCall: 'downloadMetaSubstancePage',
							displayMode: $author$project$LucasCetPlatform$ViewSubstance,
							subChoices: $author$project$SubstancePlayer$resetPaging(model.subChoices)
						}),
					A5($author$project$ApplicationCreator$obtainMetaSearchResult, model.subChoices, metaData, appId, $author$project$LucasCetPlatform$GotSequenceList, 'downloadMetaSubstancePage'));
			case 'DeploySelectedSubstance':
				var depSub = msg.a;
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'EnregistrerSubstance':
				return _Utils_Tuple2(
					model,
					A2($author$project$Graphic_Element$expedieSubstance, model.subEditor, $author$project$LucasCetPlatform$SubstanceDone));
			case 'SubstanceDone':
				if (msg.a.$ === 'Err') {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								subEditor: $author$project$Graphic_Element$resetSubstance(model.subEditor)
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'ApplicationDone':
				if (msg.a.$ === 'Err') {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								appEditor: $author$project$ApplicationCreator$resetApplication(model.appEditor)
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'LoadNextImagesSet':
				var _v8 = model.imgChoices.graphicPages;
				if (_v8.$ === 'Just') {
					var pages = _v8.a;
					var choices = model.imgChoices;
					return (_Utils_cmp(
						model.imgChoices.currentPage + 2,
						$elm$core$List$length(pages)) > 0) ? _Utils_Tuple2(
						_Utils_update(
							model,
							{
								imgChoices: _Utils_update(
									choices,
									{currentPage: choices.currentPage + 1})
							}),
						A2($author$project$Graphic_Downloader$nextGraphicList, model.imgChoices, $author$project$LucasCetPlatform$GotImagesList)) : _Utils_Tuple2(
						_Utils_update(
							model,
							{
								imgChoices: $author$project$Graphic_Downloader$updateGraphicData(
									_Utils_update(
										choices,
										{currentPage: choices.currentPage + 1}))
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'LoadPreviousImagesSet':
				var choices = model.imgChoices;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							imgChoices: $author$project$Graphic_Downloader$updateGraphicData(
								_Utils_update(
									choices,
									{currentPage: choices.currentPage - 1}))
						}),
					$elm$core$Platform$Cmd$none);
			case 'LoadNextVideosSet':
				var _v9 = model.vidChoices.graphicPages;
				if (_v9.$ === 'Just') {
					var pages = _v9.a;
					var choices = model.vidChoices;
					return (_Utils_cmp(
						model.vidChoices.currentPage + 2,
						$elm$core$List$length(pages)) > 0) ? _Utils_Tuple2(
						_Utils_update(
							model,
							{
								vidChoices: _Utils_update(
									choices,
									{currentPage: choices.currentPage + 1})
							}),
						A2($author$project$Graphic_Downloader$nextGraphicList, model.vidChoices, $author$project$LucasCetPlatform$GotVideosList)) : _Utils_Tuple2(
						_Utils_update(
							model,
							{
								vidChoices: $author$project$Graphic_Downloader$updateGraphicData(
									_Utils_update(
										choices,
										{currentPage: choices.currentPage + 1}))
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'LoadPreviousVideosSet':
				var choices = model.vidChoices;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							vidChoices: $author$project$Graphic_Downloader$updateGraphicData(
								_Utils_update(
									choices,
									{currentPage: choices.currentPage - 1}))
						}),
					$elm$core$Platform$Cmd$none);
			case 'LoadPreviousSubstanceSet':
				var choices = model.subChoices;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							subChoices: $author$project$SubstancePlayer$updateGraphicData(
								_Utils_update(
									choices,
									{currentPage: choices.currentPage - 1}))
						}),
					$elm$core$Platform$Cmd$none);
			case 'LoadNextSubstanceSet':
				var choices = model.subChoices;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							subChoices: $author$project$SubstancePlayer$updateGraphicData(
								_Utils_update(
									choices,
									{currentPage: choices.currentPage + 1}))
						}),
					A3($author$project$SubstancePlayer$nextGraphicList, model.subChoices, $author$project$LucasCetPlatform$GotSubstanceList, model.backendCall));
			case 'GotImagesList':
				if (msg.a.$ === 'Ok') {
					var imagesPackage = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								imgChoices: $author$project$Graphic_Downloader$updateGraphicData(
									A2($author$project$Graphic_Downloader$addNewPage, imagesPackage, model.imgChoices))
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					var error = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{errorMsg: error}),
						$elm$core$Platform$Cmd$none);
				}
			case 'GotVideosList':
				if (msg.a.$ === 'Ok') {
					var videosPackage = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								vidChoices: $author$project$Graphic_Downloader$updateGraphicData(
									A2($author$project$Graphic_Downloader$addNewPage, videosPackage, model.vidChoices))
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					var error = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{errorMsg: error}),
						$elm$core$Platform$Cmd$none);
				}
			case 'GotSubstanceList':
				if (msg.a.$ === 'Err') {
					var error = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{errorMsg: error}),
						$elm$core$Platform$Cmd$none);
				} else {
					var subList = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								subChoices: $author$project$SubstancePlayer$updateGraphicData(
									A2($author$project$SubstancePlayer$addNewPage, subList, model.subChoices))
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'GotSequenceList':
				if (msg.a.$ === 'Err') {
					var error = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{errorMsg: error}),
						$elm$core$Platform$Cmd$none);
				} else {
					var subList = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								subChoices: $author$project$SubstancePlayer$updateGraphicData(
									A2($author$project$SubstancePlayer$addNewPage, subList, model.subChoices))
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'ImagesPicked':
				var src = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							displayMode: $author$project$LucasCetPlatform$DicoSubstance,
							subEditor: A2($author$project$Graphic_Element$definirMedia, model.subEditor, src)
						}),
					$elm$core$Platform$Cmd$none);
			case 'IconePicked':
				var src = msg.a;
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'VideosPicked':
				var src = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							displayMode: $author$project$LucasCetPlatform$DicoSubstance,
							subEditor: A2($author$project$Graphic_Element$definirMedia, model.subEditor, src)
						}),
					$elm$core$Platform$Cmd$none);
			case 'SubstancePicked':
				var sub = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							displayMode: $author$project$LucasCetPlatform$DicoSubstance,
							subEditor: A2($author$project$Graphic_Element$addSubstance, model.subEditor, sub)
						}),
					$elm$core$Platform$Cmd$none);
			case 'SubstanceChosen':
				var sub = msg.a;
				if (sub.$ === 'Potential') {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								displayMode: $author$project$LucasCetPlatform$SelectMedia,
								imgChoices: A2($author$project$Graphic_Downloader$changeClickAction, model.imgChoices, $author$project$LucasCetPlatform$SelectNewMedia),
								subChoices: A2($author$project$SubstancePlayer$recordSubstance, model.subChoices, sub)
							}),
						A2($author$project$Graphic_Downloader$obtainGraphicList, model.vidChoices, $author$project$LucasCetPlatform$GotImagesList));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								displayMode: $author$project$LucasCetPlatform$SelectMedia,
								subChoices: A2($author$project$SubstancePlayer$recordSubstance, model.subChoices, sub),
								vidChoices: A2($author$project$Graphic_Downloader$changeClickAction, model.vidChoices, $author$project$LucasCetPlatform$SelectNewMedia)
							}),
						A2($author$project$Graphic_Downloader$obtainGraphicList, model.vidChoices, $author$project$LucasCetPlatform$GotVideosList));
				}
			case 'SelectNewMedia':
				var media = msg.a;
				return _Utils_Tuple2(
					model,
					A3($author$project$SubstancePlayer$modifySubstanceMedia, model.subChoices, media, $author$project$LucasCetPlatform$FileSuccess));
			case 'AppSubstancePicked':
				var seq = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							appEditor: A2($author$project$ApplicationCreator$addAppSubstance, model.appEditor, seq),
							displayMode: $author$project$LucasCetPlatform$ApplicationModule
						}),
					A3($author$project$ApplicationCreator$addMetaSubstance, model.appEditor, seq, $author$project$LucasCetPlatform$FileSuccess));
			case 'ActivateApplication':
				var appChoiceInfo = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: A2($author$project$ApplicationPlayer$setChosenApp, model.player, appChoiceInfo)
						}),
					A3($author$project$ApplicationPlayer$executeLaunchApp, model.player, appChoiceInfo.appId, $author$project$LucasCetPlatform$AppDetailsLoaded));
			case 'AppDetailsLoaded':
				if (msg.a.$ === 'Err') {
					var error = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{errorMsg: error}),
						$elm$core$Platform$Cmd$none);
				} else {
					var lstRez = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								displayMode: $author$project$LucasCetPlatform$PlayApplication,
								player: A2($author$project$ApplicationPlayer$loadUpData, model.player, lstRez)
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'MessageAcquisition':
				var interSub = msg.a;
				var substance = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: A3($author$project$ApplicationPlayer$substanceClicked, model.player, interSub, substance)
						}),
					$elm$core$Platform$Cmd$none);
			case 'CancelSelection':
				var interSub = msg.a;
				var substance = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: A3($author$project$ApplicationPlayer$cancelSubstanceSelection, model.player, interSub, substance)
						}),
					$elm$core$Platform$Cmd$none);
			case 'ConfirmMessage':
				var geste = msg.a;
				var nouPlay = $author$project$ApplicationPlayer$resetPlayer(model.player);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{player: nouPlay}),
					A3($author$project$ApplicationPlayer$sendGeste, nouPlay, geste, $author$project$LucasCetPlatform$AppDetailsLoaded));
			case 'DeploySequence':
				var elemGrap = msg.a;
				var geste = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: A2($author$project$ApplicationPlayer$deployContainer, model.player, elemGrap)
						}),
					A3($author$project$ApplicationPlayer$sendGeste, model.player, geste, $author$project$LucasCetPlatform$AppDetailsLoaded));
			case 'SenderOfData':
				var geste = msg.a;
				var data = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: A3($author$project$ApplicationPlayer$addDataToGeste, model.player, data, geste)
						}),
					$elm$core$Platform$Cmd$none);
			case 'SubstancePicker':
				var inacSub = msg.a;
				var subPicked = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: A3(
								$author$project$ApplicationPlayer$addSubstance,
								model.player,
								inacSub,
								A2($author$project$LucasCetPlatform$menuDevelopper, inacSub, subPicked))
						}),
					$elm$core$Platform$Cmd$none);
			case 'DeploySubstance':
				var subInactive = msg.a;
				var sub2Dep = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: A4(
								$author$project$ApplicationPlayer$deploySubstance,
								model.player,
								subInactive,
								sub2Dep,
								A2($author$project$LucasCetPlatform$menuDevelopper, subInactive, sub2Dep))
						}),
					$elm$core$Platform$Cmd$none);
			case 'ZoomSubstance':
				var substance = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: A2($author$project$ApplicationPlayer$zoomSubstance, model.player, substance)
						}),
					$elm$core$Platform$Cmd$none);
			case 'ZoomCancel':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: $author$project$ApplicationPlayer$cancelZoom(model.player)
						}),
					$elm$core$Platform$Cmd$none);
			case 'ContainerPicker':
				var contSub = msg.a;
				var elemInter = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: A3(
								$author$project$ApplicationPlayer$addContainer,
								model.player,
								contSub,
								A2($author$project$LucasCetPlatform$menuContainer, contSub, elemInter))
						}),
					$elm$core$Platform$Cmd$none);
			case 'Reseteur':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: $author$project$ApplicationPlayer$resetMenu(model.player)
						}),
					$elm$core$Platform$Cmd$none);
			case 'Closit':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: $author$project$ApplicationPlayer$resetDeployment(model.player)
						}),
					$elm$core$Platform$Cmd$none);
			case 'ZoomRecord':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: $author$project$ApplicationPlayer$recordZoomedSubstance(model.player)
						}),
					$author$project$LucasCetPlatform$sendVid(
						$elm$json$Json$Encode$string('#elmVid')));
			case 'RecordInFile':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: $author$project$ApplicationPlayer$startSavingMime(model.player)
						}),
					$elm$core$Platform$Cmd$none);
			case 'AppMenuHandler':
				var appInfo = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: A3(
								$author$project$ApplicationPlayer$addMenu2App,
								model.player,
								appInfo,
								A2($author$project$LucasCetPlatform$menuApplication, appInfo, model.userInfo))
						}),
					$elm$core$Platform$Cmd$none);
			case 'ShareAllUserChecked':
				var shareOrNot = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: A2($author$project$ApplicationPlayer$updateAppState, model.player, shareOrNot)
						}),
					A3($author$project$ApplicationPlayer$sendAppState, model.player, shareOrNot, $author$project$LucasCetPlatform$FileSuccess));
			case 'Edit_Chat':
				var selectedMsg = msg.a;
				var _v11 = model.userInfo;
				if (_v11.$ === 'Just') {
					var userData = _v11.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								displayMode: $author$project$LucasCetPlatform$ChatDisplay,
								externals: $author$project$LucasCetPlatform$ChatModel(
									A2($author$project$Chat_Creator$initialize, userData.userId, selectedMsg))
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'Stream':
				var recording = msg.a;
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'Chat':
				var chatMsg = msg.a;
				var _v12 = model.externals;
				if (_v12.$ === 'ChatModel') {
					var modelDida = _v12.a;
					return A4(
						$author$project$LucasCetPlatform$updateChatWith,
						$author$project$LucasCetPlatform$Model(model.userInfo)(model.errorMsg)(model.navKey)(model.chatMsg)(model.friends)(model.displayMode)(model.imgChoices)(model.vidChoices)(model.subChoices)(model.subEditor)(model.appEditor)(model.player)(model.dloadValue)(model.uploadValue)(model.backendCall)(model.successFileList)(model.failFileList)(model.totalFileList),
						$author$project$LucasCetPlatform$Chat,
						model,
						A2($author$project$Chat_Creator$update, chatMsg, modelDida));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'SendFiles':
				var fileEvent = msg.a;
				var _v13 = model.userInfo;
				if (_v13.$ === 'Just') {
					var info = _v13.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{totalFileList: fileEvent.dataTransfer.files}),
						$elm$core$Platform$Cmd$batch(
							A2(
								$elm$core$List$map,
								function (a) {
									return A2($author$project$LucasCetPlatform$sendMediaElement, a, info);
								},
								fileEvent.dataTransfer.files)));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'FileSuccess':
				if (msg.a.$ === 'Err') {
					var erreur = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{displayMode: $author$project$LucasCetPlatform$LoginDisplay, errorMsg: erreur}),
						A2($elm$browser$Browser$Navigation$pushUrl, model.navKey, '/'));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{displayMode: $author$project$LucasCetPlatform$LoginDisplay}),
						A2($elm$browser$Browser$Navigation$pushUrl, model.navKey, '/'));
				}
			case 'Progression':
				var progresElem = msg.a;
				if (progresElem.$ === 'Sending') {
					var value = progresElem.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{uploadValue: value.sent / value.size}),
						$elm$core$Platform$Cmd$none);
				} else {
					var value = progresElem.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								dloadValue: value.received / A2($elm$core$Maybe$withDefault, value.received, value.size)
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'GotScreenSize':
				if (msg.a.$ === 'Err') {
					var errMsg = msg.a.a;
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					var viewPort = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								player: A2($author$project$ApplicationPlayer$updateViewport, model.player, viewPort)
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'CleanDico':
				return _Utils_Tuple2(
					model,
					$elm$http$Http$get(
						{
							expect: $elm$http$Http$expectWhatever($author$project$LucasCetPlatform$FileSuccess),
							url: '/deleteDictionnaire'
						}));
			case 'FileCode':
				if (msg.b.$ === 'Err') {
					var errorMsg = msg.b.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{displayMode: $author$project$LucasCetPlatform$LoginDisplay, errorMsg: errorMsg}),
						$elm$core$Platform$Cmd$none);
				} else {
					var file2Send = msg.a;
					var filePath = msg.b.a;
					return _Utils_Tuple2(
						model,
						$elm$http$Http$request(
							{
								body: $elm$http$Http$fileBody(file2Send),
								expect: $elm$http$Http$expectWhatever(
									$author$project$LucasCetPlatform$FileTelecharge(
										$elm$file$File$name(file2Send))),
								headers: _List_Nil,
								method: 'PUT',
								timeout: $elm$core$Maybe$Nothing,
								tracker: $elm$core$Maybe$Just('media.pdf'),
								url: filePath
							}));
				}
			case 'FileTelecharge':
				if (msg.b.$ === 'Err') {
					var fileName = msg.a;
					var error = msg.b.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								failFileList: A2($elm$core$List$cons, fileName, model.failFileList)
							}),
						A3($author$project$LucasCetPlatform$evaluateFiles, model.successFileList, model.failFileList, model.totalFileList));
				} else {
					var fileName = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								successFileList: A2($elm$core$List$cons, fileName, model.successFileList)
							}),
						A3($author$project$LucasCetPlatform$evaluateFiles, model.successFileList, model.failFileList, model.totalFileList));
				}
			default:
				var appInfo = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							player: A3($author$project$ApplicationPlayer$addApplicationMenu, model.player, appInfo, $author$project$ApplicationPlayer$NotShared)
						}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$LucasCetPlatform$SendFiles = function (a) {
	return {$: 'SendFiles', a: a};
};
var $author$project$LucasCetPlatform$Start = function (a) {
	return {$: 'Start', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$paddingName = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left)))))));
	});
var $mdgriffith$elm_ui$Element$paddingEach = function (_v0) {
	var top = _v0.top;
	var right = _v0.right;
	var bottom = _v0.bottom;
	var left = _v0.left;
	if (_Utils_eq(top, right) && (_Utils_eq(top, bottom) && _Utils_eq(top, left))) {
		var topFloat = top;
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				'p-' + $elm$core$String$fromInt(top),
				topFloat,
				topFloat,
				topFloat,
				topFloat));
	} else {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				A4($mdgriffith$elm_ui$Internal$Model$paddingName, top, right, bottom, left),
				top,
				right,
				bottom,
				left));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$overflow = $mdgriffith$elm_ui$Internal$Flag$flag(20);
var $mdgriffith$elm_ui$Element$scrollbars = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.scrollbars);
var $mdgriffith$elm_ui$Element$scrollbarY = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.scrollbarsY);
var $author$project$ApplicationPlayer$zoomAttribute = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
		$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 129, 129, 129)),
		$mdgriffith$elm_ui$Element$scrollbarY,
		$mdgriffith$elm_ui$Element$padding(30)
	]);
var $author$project$ApplicationPlayer$appPlayAttribute = function (appMsgPlayApp) {
	var _v0 = appMsgPlayApp.zoomedSubtance;
	if (_v0.$ === 'Just') {
		return $author$project$ApplicationPlayer$zoomAttribute;
	} else {
		return _List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Background$color(
				A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229)),
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$scrollbars,
				$mdgriffith$elm_ui$Element$centerX,
				$mdgriffith$elm_ui$Element$paddingEach(
				{bottom: 0, left: 0, right: 0, top: 35})
			]);
	}
};
var $mdgriffith$elm_ui$Internal$Model$Right = {$: 'Right'};
var $mdgriffith$elm_ui$Element$alignRight = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$Right);
var $elm$html$Html$Events$onMouseLeave = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseleave',
		$elm$json$Json$Decode$succeed(msg));
};
var $mdgriffith$elm_ui$Element$Events$onMouseLeave = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onMouseLeave);
var $author$project$ApplicationPlayer$afficherApplicationWithMenu = F7(
	function (url, title, onClickHandler, onActivateMenu, appMenu, cancelMenu, appId) {
		if (appMenu.$ === 'Just') {
			var menuList = appMenu.a;
			return _Utils_eq(appId, menuList.a) ? A2(
				$mdgriffith$elm_ui$Element$column,
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width(
							$mdgriffith$elm_ui$Element$px(400)),
							$mdgriffith$elm_ui$Element$height(
							$mdgriffith$elm_ui$Element$px(400)),
							$mdgriffith$elm_ui$Element$Events$onMouseLeave(cancelMenu)
						]),
					menuList.b),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$Input$button,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$inFront(
								A2(
									$mdgriffith$elm_ui$Element$image,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignTop, $mdgriffith$elm_ui$Element$alignRight]),
									{description: 'Coin Image', src: 'img/Media/coin-folder.png'}))
							]),
						{
							label: A2(
								$mdgriffith$elm_ui$Element$image,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										$mdgriffith$elm_ui$Element$px(200)),
										$mdgriffith$elm_ui$Element$height(
										$mdgriffith$elm_ui$Element$px(200))
									]),
								{description: title, src: url}),
							onPress: $elm$core$Maybe$Just(onClickHandler)
						}),
						$mdgriffith$elm_ui$Element$text(title)
					])) : A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width(
						$mdgriffith$elm_ui$Element$px(400)),
						$mdgriffith$elm_ui$Element$height(
						$mdgriffith$elm_ui$Element$px(400)),
						$mdgriffith$elm_ui$Element$Events$onMouseEnter(onActivateMenu)
					]),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$Input$button,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$inFront(
								A2(
									$mdgriffith$elm_ui$Element$image,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignTop, $mdgriffith$elm_ui$Element$alignRight]),
									{description: 'Coin Image', src: 'img/Media/coin-folder.png'}))
							]),
						{
							label: A2(
								$mdgriffith$elm_ui$Element$image,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										$mdgriffith$elm_ui$Element$px(200)),
										$mdgriffith$elm_ui$Element$height(
										$mdgriffith$elm_ui$Element$px(200))
									]),
								{description: title, src: url}),
							onPress: $elm$core$Maybe$Just(onClickHandler)
						}),
						$mdgriffith$elm_ui$Element$text(title)
					]));
		} else {
			return A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width(
						$mdgriffith$elm_ui$Element$px(400)),
						$mdgriffith$elm_ui$Element$height(
						$mdgriffith$elm_ui$Element$px(400)),
						$mdgriffith$elm_ui$Element$Events$onMouseEnter(onActivateMenu)
					]),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$Input$button,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$inFront(
								A2(
									$mdgriffith$elm_ui$Element$image,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignTop, $mdgriffith$elm_ui$Element$alignRight]),
									{description: 'Coin Image', src: 'img/Media/coin-folder.png'}))
							]),
						{
							label: A2(
								$mdgriffith$elm_ui$Element$image,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										$mdgriffith$elm_ui$Element$px(200)),
										$mdgriffith$elm_ui$Element$height(
										$mdgriffith$elm_ui$Element$px(200))
									]),
								{description: title, src: url}),
							onPress: $elm$core$Maybe$Just(onClickHandler)
						}),
						$mdgriffith$elm_ui$Element$text(title)
					]));
		}
	});
var $author$project$ApplicationPlayer$afficherInterfaceSelection = F3(
	function (url, title, onClickHandler) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(400)),
					$mdgriffith$elm_ui$Element$height(
					$mdgriffith$elm_ui$Element$px(400))
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$Input$button,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$inFront(
							A2(
								$mdgriffith$elm_ui$Element$image,
								_List_fromArray(
									[$mdgriffith$elm_ui$Element$alignTop, $mdgriffith$elm_ui$Element$alignRight]),
								{description: 'Coin Image', src: 'img/Media/coin-folder.png'}))
						]),
					{
						label: A2(
							$mdgriffith$elm_ui$Element$image,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width(
									$mdgriffith$elm_ui$Element$px(200)),
									$mdgriffith$elm_ui$Element$height(
									$mdgriffith$elm_ui$Element$px(200))
								]),
							{description: title, src: url}),
						onPress: $elm$core$Maybe$Just(onClickHandler)
					}),
					$mdgriffith$elm_ui$Element$text(title)
				]));
	});
var $author$project$ApplicationPlayer$afficherPlayApp = F2(
	function (appInfo, eleMsgAppEdited) {
		var _v0 = appInfo.appType;
		switch (_v0.$) {
			case 'DidactiqueModule':
				return A7(
					$author$project$ApplicationPlayer$afficherApplicationWithMenu,
					appInfo.iconUrl,
					appInfo.title,
					eleMsgAppEdited.activateApp(appInfo),
					eleMsgAppEdited.deployAppMenu(appInfo),
					eleMsgAppEdited.appMenu,
					eleMsgAppEdited.deactivate,
					appInfo.appId);
			case 'ProprietaireModule':
				return A3(
					$author$project$ApplicationPlayer$afficherInterfaceSelection,
					appInfo.iconUrl,
					'Exécuter l\'Application Proprio',
					eleMsgAppEdited.activateApp(appInfo));
			case 'LocataireModule':
				return A3(
					$author$project$ApplicationPlayer$afficherInterfaceSelection,
					appInfo.iconUrl,
					'Exécuter l\'Application Locataire',
					eleMsgAppEdited.activateApp(appInfo));
			default:
				return A3(
					$author$project$ApplicationPlayer$afficherInterfaceSelection,
					appInfo.iconUrl,
					'Exécuter l\'Application Fournisseur',
					eleMsgAppEdited.activateApp(appInfo));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Left = {$: 'Left'};
var $mdgriffith$elm_ui$Element$alignLeft = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$Left);
var $mdgriffith$elm_ui$Internal$Model$LivePolite = {$: 'LivePolite'};
var $mdgriffith$elm_ui$Element$Region$announce = $mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$LivePolite);
var $mdgriffith$elm_ui$Element$Input$applyLabel = F3(
	function (attrs, label, input) {
		if (label.$ === 'HiddenLabel') {
			var labelText = label.a;
			return A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asColumn,
				$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
				attrs,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[input])));
		} else {
			var position = label.a;
			var labelAttrs = label.b;
			var labelChild = label.c;
			var labelElement = A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				labelAttrs,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[labelChild])));
			switch (position.$) {
				case 'Above':
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
				case 'Below':
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				case 'OnRight':
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				default:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
			}
		}
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $mdgriffith$elm_ui$Internal$Model$Label = function (a) {
	return {$: 'Label', a: a};
};
var $mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute = function (label) {
	if (label.$ === 'HiddenLabel') {
		var textLabel = label.a;
		return $mdgriffith$elm_ui$Internal$Model$Describe(
			$mdgriffith$elm_ui$Internal$Model$Label(textLabel));
	} else {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	}
};
var $mdgriffith$elm_ui$Element$Input$isHiddenLabel = function (label) {
	if (label.$ === 'HiddenLabel') {
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$tabindex = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$tabindex);
var $mdgriffith$elm_ui$Element$Input$checkbox = F2(
	function (attrs, _v0) {
		var label = _v0.label;
		var icon = _v0.icon;
		var checked = _v0.checked;
		var onChange = _v0.onChange;
		var attributes = _Utils_ap(
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(label) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(6),
					$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Events$onClick(
						onChange(!checked))),
					$mdgriffith$elm_ui$Element$Region$announce,
					$mdgriffith$elm_ui$Element$Input$onKeyLookup(
					function (code) {
						return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(
							onChange(!checked)) : (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(
							onChange(!checked)) : $elm$core$Maybe$Nothing);
					}),
					$mdgriffith$elm_ui$Element$Input$tabindex(0),
					$mdgriffith$elm_ui$Element$pointer,
					$mdgriffith$elm_ui$Element$alignLeft,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			attrs);
		return A3(
			$mdgriffith$elm_ui$Element$Input$applyLabel,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					A2($elm$html$Html$Attributes$attribute, 'role', 'checkbox')),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						A2(
							$elm$html$Html$Attributes$attribute,
							'aria-checked',
							checked ? 'true' : 'false')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(label),
						attributes))),
			label,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$centerY,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink)
					]),
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[
							icon(checked)
						]))));
	});
var $elm$core$Basics$pi = _Basics_pi;
var $elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * $elm$core$Basics$pi) / 180;
};
var $mdgriffith$elm_ui$Element$none = $mdgriffith$elm_ui$Internal$Model$Empty;
var $mdgriffith$elm_ui$Element$rgb = F3(
	function (r, g, b) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, r, g, b, 1);
	});
var $mdgriffith$elm_ui$Element$rgba = $mdgriffith$elm_ui$Internal$Model$Rgba;
var $mdgriffith$elm_ui$Internal$Model$Rotate = F2(
	function (a, b) {
		return {$: 'Rotate', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$rotate = $mdgriffith$elm_ui$Internal$Flag$flag(24);
var $mdgriffith$elm_ui$Element$rotate = function (angle) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$rotate,
		A2(
			$mdgriffith$elm_ui$Internal$Model$Rotate,
			_Utils_Tuple3(0, 0, 1),
			angle));
};
var $mdgriffith$elm_ui$Internal$Model$boxShadowClass = function (shadow) {
	return $elm$core$String$concat(
		_List_fromArray(
			[
				shadow.inset ? 'box-inset' : 'box-',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.offset.a) + 'px',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.offset.b) + 'px',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.blur) + 'px',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.size) + 'px',
				$mdgriffith$elm_ui$Internal$Model$formatColorClass(shadow.color)
			]));
};
var $mdgriffith$elm_ui$Internal$Flag$shadows = $mdgriffith$elm_ui$Internal$Flag$flag(19);
var $mdgriffith$elm_ui$Element$Border$shadow = function (almostShade) {
	var shade = {blur: almostShade.blur, color: almostShade.color, inset: false, offset: almostShade.offset, size: almostShade.size};
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$shadows,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			$mdgriffith$elm_ui$Internal$Model$boxShadowClass(shade),
			'box-shadow',
			$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(shade)));
};
var $mdgriffith$elm_ui$Internal$Model$Transparency = F2(
	function (a, b) {
		return {$: 'Transparency', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$transparency = $mdgriffith$elm_ui$Internal$Flag$flag(0);
var $mdgriffith$elm_ui$Element$transparent = function (on) {
	return on ? A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$transparency,
		A2($mdgriffith$elm_ui$Internal$Model$Transparency, 'transparent', 1.0)) : A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$transparency,
		A2($mdgriffith$elm_ui$Internal$Model$Transparency, 'visible', 0.0));
};
var $mdgriffith$elm_ui$Element$Input$white = A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1);
var $mdgriffith$elm_ui$Element$Border$widthXY = F2(
	function (x, y) {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$borderWidth,
			A5(
				$mdgriffith$elm_ui$Internal$Model$BorderWidth,
				'b-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
				y,
				x,
				y,
				x));
	});
var $mdgriffith$elm_ui$Element$Border$widthEach = function (_v0) {
	var bottom = _v0.bottom;
	var top = _v0.top;
	var left = _v0.left;
	var right = _v0.right;
	return (_Utils_eq(top, bottom) && _Utils_eq(left, right)) ? (_Utils_eq(top, right) ? $mdgriffith$elm_ui$Element$Border$width(top) : A2($mdgriffith$elm_ui$Element$Border$widthXY, left, top)) : A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left))))))),
			top,
			right,
			bottom,
			left));
};
var $mdgriffith$elm_ui$Element$Input$defaultCheckbox = function (checked) {
	return A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Internal$Model$htmlClass('focusable'),
				$mdgriffith$elm_ui$Element$width(
				$mdgriffith$elm_ui$Element$px(14)),
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$px(14)),
				$mdgriffith$elm_ui$Element$Font$color($mdgriffith$elm_ui$Element$Input$white),
				$mdgriffith$elm_ui$Element$centerY,
				$mdgriffith$elm_ui$Element$Font$size(9),
				$mdgriffith$elm_ui$Element$Font$center,
				$mdgriffith$elm_ui$Element$Border$rounded(3),
				$mdgriffith$elm_ui$Element$Border$color(
				checked ? A3($mdgriffith$elm_ui$Element$rgb, 59 / 255, 153 / 255, 252 / 255) : A3($mdgriffith$elm_ui$Element$rgb, 211 / 255, 211 / 255, 211 / 255)),
				$mdgriffith$elm_ui$Element$Border$shadow(
				{
					blur: 1,
					color: checked ? A4($mdgriffith$elm_ui$Element$rgba, 238 / 255, 238 / 255, 238 / 255, 0) : A3($mdgriffith$elm_ui$Element$rgb, 238 / 255, 238 / 255, 238 / 255),
					offset: _Utils_Tuple2(0, 0),
					size: 1
				}),
				$mdgriffith$elm_ui$Element$Background$color(
				checked ? A3($mdgriffith$elm_ui$Element$rgb, 59 / 255, 153 / 255, 252 / 255) : $mdgriffith$elm_ui$Element$Input$white),
				$mdgriffith$elm_ui$Element$Border$width(
				checked ? 0 : 1),
				$mdgriffith$elm_ui$Element$inFront(
				A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Border$color($mdgriffith$elm_ui$Element$Input$white),
							$mdgriffith$elm_ui$Element$height(
							$mdgriffith$elm_ui$Element$px(6)),
							$mdgriffith$elm_ui$Element$width(
							$mdgriffith$elm_ui$Element$px(9)),
							$mdgriffith$elm_ui$Element$rotate(
							$elm$core$Basics$degrees(-45)),
							$mdgriffith$elm_ui$Element$centerX,
							$mdgriffith$elm_ui$Element$centerY,
							$mdgriffith$elm_ui$Element$moveUp(1),
							$mdgriffith$elm_ui$Element$transparent(!checked),
							$mdgriffith$elm_ui$Element$Border$widthEach(
							{bottom: 2, left: 2, right: 0, top: 0})
						]),
					$mdgriffith$elm_ui$Element$none))
			]),
		$mdgriffith$elm_ui$Element$none);
};
var $mdgriffith$elm_ui$Element$Input$Label = F3(
	function (a, b, c) {
		return {$: 'Label', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Element$Input$OnLeft = {$: 'OnLeft'};
var $mdgriffith$elm_ui$Element$Input$labelLeft = $mdgriffith$elm_ui$Element$Input$Label($mdgriffith$elm_ui$Element$Input$OnLeft);
var $author$project$ApplicationPlayer$getAppAttribute = F2(
	function (appShareStatus, checkHandler) {
		switch (appShareStatus.$) {
			case 'NoStatus':
				return _List_fromArray(
					[
						A2($mdgriffith$elm_ui$Element$paddingXY, 65, 60),
						$mdgriffith$elm_ui$Element$spacing(40),
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$Border$rounded(20),
						$mdgriffith$elm_ui$Element$Background$color(
						A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255))
					]);
			case 'NotShared':
				return _List_fromArray(
					[
						$mdgriffith$elm_ui$Element$inFront(
						A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$padding(35),
									A2($mdgriffith$elm_ui$Element$spacingXY, 0, 20)
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$row,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$column,
											_List_fromArray(
												[$mdgriffith$elm_ui$Element$alignLeft]),
											_List_fromArray(
												[
													A2(
													$mdgriffith$elm_ui$Element$paragraph,
													_List_Nil,
													_List_fromArray(
														[
															$mdgriffith$elm_ui$Element$text('Partage')
														])),
													A2(
													$mdgriffith$elm_ui$Element$paragraph,
													_List_Nil,
													_List_fromArray(
														[
															$mdgriffith$elm_ui$Element$text('APP TITLE')
														]))
												])),
											A2(
											$mdgriffith$elm_ui$Element$image,
											_List_fromArray(
												[$mdgriffith$elm_ui$Element$alignRight]),
											{description: 'Partage Application', src: 'img/Icons/share-icon2.png'})
										])),
									A2(
									$mdgriffith$elm_ui$Element$Input$checkbox,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignRight]),
									{
										checked: false,
										icon: $mdgriffith$elm_ui$Element$Input$defaultCheckbox,
										label: A2(
											$mdgriffith$elm_ui$Element$Input$labelLeft,
											_List_Nil,
											$mdgriffith$elm_ui$Element$text('Tous les utilisateurs')),
										onChange: checkHandler
									})
								]))),
						A2($mdgriffith$elm_ui$Element$paddingXY, 65, 60),
						$mdgriffith$elm_ui$Element$spacing(40),
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$Border$rounded(20),
						$mdgriffith$elm_ui$Element$Background$color(
						A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255))
					]);
			case 'Global':
				return _List_fromArray(
					[
						$mdgriffith$elm_ui$Element$inFront(
						A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$padding(35),
									A2($mdgriffith$elm_ui$Element$spacingXY, 0, 20)
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$row,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$column,
											_List_fromArray(
												[$mdgriffith$elm_ui$Element$alignLeft]),
											_List_fromArray(
												[
													A2(
													$mdgriffith$elm_ui$Element$paragraph,
													_List_Nil,
													_List_fromArray(
														[
															$mdgriffith$elm_ui$Element$text('Partage')
														])),
													A2(
													$mdgriffith$elm_ui$Element$paragraph,
													_List_Nil,
													_List_fromArray(
														[
															$mdgriffith$elm_ui$Element$text('APP TITLE')
														]))
												])),
											A2(
											$mdgriffith$elm_ui$Element$image,
											_List_fromArray(
												[$mdgriffith$elm_ui$Element$alignRight]),
											{description: 'Partage Application', src: 'img/Icons/share-icon2.png'})
										])),
									A2(
									$mdgriffith$elm_ui$Element$Input$checkbox,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignRight]),
									{
										checked: true,
										icon: $mdgriffith$elm_ui$Element$Input$defaultCheckbox,
										label: A2(
											$mdgriffith$elm_ui$Element$Input$labelLeft,
											_List_Nil,
											$mdgriffith$elm_ui$Element$text('Tous les utilisateurs')),
										onChange: checkHandler
									})
								]))),
						A2($mdgriffith$elm_ui$Element$paddingXY, 65, 60),
						$mdgriffith$elm_ui$Element$spacing(40),
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$Border$rounded(20),
						$mdgriffith$elm_ui$Element$Background$color(
						A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255))
					]);
			default:
				var stringList = appShareStatus.a;
				return _List_Nil;
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Padding = F5(
	function (a, b, c, d, e) {
		return {$: 'Padding', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Model$Spaced = F3(
	function (a, b, c) {
		return {$: 'Spaced', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$extractSpacingAndPadding = function (attrs) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (attr, _v0) {
				var pad = _v0.a;
				var spacing = _v0.b;
				return _Utils_Tuple2(
					function () {
						if (pad.$ === 'Just') {
							var x = pad.a;
							return pad;
						} else {
							if ((attr.$ === 'StyleClass') && (attr.b.$ === 'PaddingStyle')) {
								var _v3 = attr.b;
								var name = _v3.a;
								var t = _v3.b;
								var r = _v3.c;
								var b = _v3.d;
								var l = _v3.e;
								return $elm$core$Maybe$Just(
									A5($mdgriffith$elm_ui$Internal$Model$Padding, name, t, r, b, l));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}(),
					function () {
						if (spacing.$ === 'Just') {
							var x = spacing.a;
							return spacing;
						} else {
							if ((attr.$ === 'StyleClass') && (attr.b.$ === 'SpacingStyle')) {
								var _v6 = attr.b;
								var name = _v6.a;
								var x = _v6.b;
								var y = _v6.c;
								return $elm$core$Maybe$Just(
									A3($mdgriffith$elm_ui$Internal$Model$Spaced, name, x, y));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}());
			}),
		_Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
		attrs);
};
var $mdgriffith$elm_ui$Internal$Model$paddingNameFloat = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(top) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(right) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(bottom) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(left)))))));
	});
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $mdgriffith$elm_ui$Element$wrappedRow = F2(
	function (attrs, children) {
		var _v0 = $mdgriffith$elm_ui$Internal$Model$extractSpacingAndPadding(attrs);
		var padded = _v0.a;
		var spaced = _v0.b;
		if (spaced.$ === 'Nothing') {
			return A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asRow,
				$mdgriffith$elm_ui$Internal$Model$div,
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.wrapped)))),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							attrs))),
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
		} else {
			var _v2 = spaced.a;
			var spaceName = _v2.a;
			var x = _v2.b;
			var y = _v2.c;
			var newPadding = function () {
				if (padded.$ === 'Just') {
					var _v5 = padded.a;
					var name = _v5.a;
					var t = _v5.b;
					var r = _v5.c;
					var b = _v5.d;
					var l = _v5.e;
					if ((_Utils_cmp(r, x / 2) > -1) && (_Utils_cmp(b, y / 2) > -1)) {
						var newTop = t - (y / 2);
						var newRight = r - (x / 2);
						var newLeft = l - (x / 2);
						var newBottom = b - (y / 2);
						return $elm$core$Maybe$Just(
							A2(
								$mdgriffith$elm_ui$Internal$Model$StyleClass,
								$mdgriffith$elm_ui$Internal$Flag$padding,
								A5(
									$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
									A4($mdgriffith$elm_ui$Internal$Model$paddingNameFloat, newTop, newRight, newBottom, newLeft),
									newTop,
									newRight,
									newBottom,
									newLeft)));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}();
			if (newPadding.$ === 'Just') {
				var pad = newPadding.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asRow,
					$mdgriffith$elm_ui$Internal$Model$div,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.wrapped)))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
								_Utils_ap(
									attrs,
									_List_fromArray(
										[pad]))))),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
			} else {
				var halfY = -(y / 2);
				var halfX = -(x / 2);
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					attrs,
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[
								A4(
								$mdgriffith$elm_ui$Internal$Model$element,
								$mdgriffith$elm_ui$Internal$Model$asRow,
								$mdgriffith$elm_ui$Internal$Model$div,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.wrapped)))),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											A2(
												$elm$html$Html$Attributes$style,
												'margin',
												$elm$core$String$fromFloat(halfY) + ('px' + (' ' + ($elm$core$String$fromFloat(halfX) + 'px'))))),
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Internal$Model$Attr(
												A2(
													$elm$html$Html$Attributes$style,
													'width',
													'calc(100% + ' + ($elm$core$String$fromInt(x) + 'px)'))),
											A2(
												$elm$core$List$cons,
												$mdgriffith$elm_ui$Internal$Model$Attr(
													A2(
														$elm$html$Html$Attributes$style,
														'height',
														'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))),
												A2(
													$elm$core$List$cons,
													A2(
														$mdgriffith$elm_ui$Internal$Model$StyleClass,
														$mdgriffith$elm_ui$Internal$Flag$spacing,
														A3($mdgriffith$elm_ui$Internal$Model$SpacingStyle, spaceName, x, y)),
													_List_Nil))))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(children))
							])));
			}
		}
	});
var $author$project$ApplicationPlayer$displayAvailableApp = function (playMsg) {
	var _v0 = playMsg.activeAppList;
	if (_v0.$ === 'Nothing') {
		return $mdgriffith$elm_ui$Element$text('Aucune application disponible');
	} else {
		var activatedList = _v0.a;
		return A2(
			$mdgriffith$elm_ui$Element$wrappedRow,
			A2($author$project$ApplicationPlayer$getAppAttribute, playMsg.shareState, playMsg.shareAllUserChecked),
			A2(
				$elm$core$List$map,
				function (a) {
					return A2($author$project$ApplicationPlayer$afficherPlayApp, a, playMsg);
				},
				activatedList));
	}
};
var $author$project$SubstancePlayer$columnAttribute = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$alignTop,
		$mdgriffith$elm_ui$Element$padding(3),
		$mdgriffith$elm_ui$Element$spaceEvenly,
		$mdgriffith$elm_ui$Element$width(
		$mdgriffith$elm_ui$Element$fillPortion(4)),
		$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
	]);
var $mdgriffith$elm_ui$Internal$Model$Max = F2(
	function (a, b) {
		return {$: 'Max', a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$maximum = F2(
	function (i, l) {
		return A2($mdgriffith$elm_ui$Internal$Model$Max, i, l);
	});
var $author$project$Graphic_Element$displayCanvasImage = F2(
	function (url, inputImg) {
		return A2(
			$mdgriffith$elm_ui$Element$image,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Events$onClick(inputImg),
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$centerY,
					$mdgriffith$elm_ui$Element$height(
					A2($mdgriffith$elm_ui$Element$maximum, 400, $mdgriffith$elm_ui$Element$fill)),
					$mdgriffith$elm_ui$Element$width(
					A2($mdgriffith$elm_ui$Element$maximum, 400, $mdgriffith$elm_ui$Element$fill))
				]),
			{description: 'Une image', src: url});
	});
var $author$project$Graphic_Element$displayCanvasSubstance = F3(
	function (substance, subClicker, dimension) {
		switch (substance.$) {
			case 'Relation':
				var substanceRelation = substance.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					_Utils_ap(
						$author$project$SubstancePlayer$columnAttribute,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Events$onClick(subClicker),
								$mdgriffith$elm_ui$Element$centerX,
								$mdgriffith$elm_ui$Element$centerY
							])),
					_List_fromArray(
						[
							A3(
							$author$project$SubstancePlayer$decorateVideo,
							substanceRelation.media,
							$elm$core$Basics$round(dimension.a * 0.6),
							$elm$core$Basics$round(dimension.b * 0.6)),
							A2(
							$mdgriffith$elm_ui$Element$paragraph,
							_List_Nil,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$text(substanceRelation.name)
								]))
						]));
			case 'Dynamic':
				var substanceDynamic = substance.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					_Utils_ap(
						$author$project$SubstancePlayer$columnAttribute,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Events$onClick(subClicker),
								$mdgriffith$elm_ui$Element$centerX,
								$mdgriffith$elm_ui$Element$centerY
							])),
					_List_fromArray(
						[
							A3(
							$author$project$SubstancePlayer$decorateVideo,
							substanceDynamic.video,
							$elm$core$Basics$round(dimension.a * 0.6),
							$elm$core$Basics$round(dimension.b * 0.6)),
							A2(
							$mdgriffith$elm_ui$Element$paragraph,
							_List_Nil,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$text(substanceDynamic.name)
								]))
						]));
			default:
				var substancePotential = substance.a;
				return A2($author$project$Graphic_Element$displayCanvasImage, substancePotential.image, subClicker);
		}
	});
var $mdgriffith$elm_ui$Element$Border$innerShadow = function (almostShade) {
	var shade = {blur: almostShade.blur, color: almostShade.color, inset: true, offset: almostShade.offset, size: almostShade.size};
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$shadows,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			$mdgriffith$elm_ui$Internal$Model$boxShadowClass(shade),
			'box-shadow',
			$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(shade)));
};
var $mdgriffith$elm_ui$Element$Border$innerGlow = F2(
	function (clr, size) {
		return $mdgriffith$elm_ui$Element$Border$innerShadow(
			{
				blur: size * 2,
				color: clr,
				offset: _Utils_Tuple2(0, 0),
				size: size
			});
	});
var $mdgriffith$elm_ui$Element$Input$Above = {$: 'Above'};
var $mdgriffith$elm_ui$Element$Input$labelAbove = $mdgriffith$elm_ui$Element$Input$Label($mdgriffith$elm_ui$Element$Input$Above);
var $mdgriffith$elm_ui$Element$Input$Placeholder = F2(
	function (a, b) {
		return {$: 'Placeholder', a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$Input$placeholder = $mdgriffith$elm_ui$Element$Input$Placeholder;
var $mdgriffith$elm_ui$Element$Input$TextInputNode = function (a) {
	return {$: 'TextInputNode', a: a};
};
var $mdgriffith$elm_ui$Element$Input$TextArea = {$: 'TextArea'};
var $mdgriffith$elm_ui$Element$Input$autofill = A2(
	$elm$core$Basics$composeL,
	$mdgriffith$elm_ui$Internal$Model$Attr,
	$elm$html$Html$Attributes$attribute('autocomplete'));
var $mdgriffith$elm_ui$Internal$Model$Behind = {$: 'Behind'};
var $mdgriffith$elm_ui$Element$behindContent = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$Behind, element);
};
var $mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding = function (attrs) {
	var gatherSpacing = F2(
		function (attr, found) {
			if ((attr.$ === 'StyleClass') && (attr.b.$ === 'SpacingStyle')) {
				var _v2 = attr.b;
				var x = _v2.b;
				var y = _v2.c;
				if (found.$ === 'Nothing') {
					return $elm$core$Maybe$Just(y);
				} else {
					return found;
				}
			} else {
				return found;
			}
		});
	var _v0 = A3($elm$core$List$foldr, gatherSpacing, $elm$core$Maybe$Nothing, attrs);
	if (_v0.$ === 'Nothing') {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	} else {
		var vSpace = _v0.a;
		return $mdgriffith$elm_ui$Element$moveUp(
			$elm$core$Basics$floor(vSpace / 2));
	}
};
var $mdgriffith$elm_ui$Element$clip = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.clip);
var $mdgriffith$elm_ui$Element$Input$darkGrey = A3($mdgriffith$elm_ui$Element$rgb, 186 / 255, 189 / 255, 182 / 255);
var $mdgriffith$elm_ui$Element$Input$defaultTextPadding = A2($mdgriffith$elm_ui$Element$paddingXY, 12, 12);
var $mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Input$defaultTextPadding,
		$mdgriffith$elm_ui$Element$Border$rounded(3),
		$mdgriffith$elm_ui$Element$Border$color($mdgriffith$elm_ui$Element$Input$darkGrey),
		$mdgriffith$elm_ui$Element$Background$color($mdgriffith$elm_ui$Element$Input$white),
		$mdgriffith$elm_ui$Element$Border$width(1),
		$mdgriffith$elm_ui$Element$spacing(5),
		$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
		$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink)
	]);
var $mdgriffith$elm_ui$Element$Input$getHeight = function (attr) {
	if (attr.$ === 'Height') {
		var h = attr.a;
		return $elm$core$Maybe$Just(h);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Element$Input$isConstrained = function (len) {
	isConstrained:
	while (true) {
		switch (len.$) {
			case 'Content':
				return false;
			case 'Px':
				return true;
			case 'Fill':
				return true;
			case 'Min':
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isConstrained;
			default:
				var l = len.b;
				return true;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$isStacked = function (label) {
	if (label.$ === 'Label') {
		var loc = label.a;
		switch (loc.$) {
			case 'OnRight':
				return false;
			case 'OnLeft':
				return false;
			case 'Above':
				return true;
			default:
				return true;
		}
	} else {
		return true;
	}
};
var $mdgriffith$elm_ui$Element$Input$negateBox = function (box) {
	return {bottom: -box.bottom, left: -box.left, right: -box.right, top: -box.top};
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $mdgriffith$elm_ui$Element$htmlAttribute = $mdgriffith$elm_ui$Internal$Model$Attr;
var $mdgriffith$elm_ui$Element$Input$isFill = function (len) {
	isFill:
	while (true) {
		switch (len.$) {
			case 'Fill':
				return true;
			case 'Content':
				return false;
			case 'Px':
				return false;
			case 'Min':
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$isPixel = function (len) {
	isPixel:
	while (true) {
		switch (len.$) {
			case 'Content':
				return false;
			case 'Px':
				return true;
			case 'Fill':
				return false;
			case 'Min':
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$redistributeOver = F4(
	function (isMultiline, stacked, attr, els) {
		switch (attr.$) {
			case 'Nearby':
				return _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					});
			case 'Width':
				var width = attr.a;
				return $mdgriffith$elm_ui$Element$Input$isFill(width) ? _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent),
						input: A2($elm$core$List$cons, attr, els.input),
						parent: A2($elm$core$List$cons, attr, els.parent)
					}) : (stacked ? _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent)
					}) : _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					}));
			case 'Height':
				var height = attr.a;
				return (!stacked) ? _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent),
						parent: A2($elm$core$List$cons, attr, els.parent)
					}) : ($mdgriffith$elm_ui$Element$Input$isFill(height) ? _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent),
						parent: A2($elm$core$List$cons, attr, els.parent)
					}) : ($mdgriffith$elm_ui$Element$Input$isPixel(height) ? _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					}) : _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					})));
			case 'AlignX':
				return _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent)
					});
			case 'AlignY':
				return _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent)
					});
			case 'StyleClass':
				switch (attr.b.$) {
					case 'SpacingStyle':
						var _v1 = attr.b;
						return _Utils_update(
							els,
							{
								fullParent: A2($elm$core$List$cons, attr, els.fullParent),
								input: A2($elm$core$List$cons, attr, els.input),
								parent: A2($elm$core$List$cons, attr, els.parent),
								wrapper: A2($elm$core$List$cons, attr, els.wrapper)
							});
					case 'PaddingStyle':
						var cls = attr.a;
						var _v2 = attr.b;
						var pad = _v2.a;
						var t = _v2.b;
						var r = _v2.c;
						var b = _v2.d;
						var l = _v2.e;
						if (isMultiline) {
							return _Utils_update(
								els,
								{
									cover: A2($elm$core$List$cons, attr, els.cover),
									parent: A2($elm$core$List$cons, attr, els.parent)
								});
						} else {
							var newTop = t - A2($elm$core$Basics$min, t, b);
							var newLineHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									$elm$html$Html$Attributes$style,
									'line-height',
									'calc(1.0em + ' + ($elm$core$String$fromFloat(
										2 * A2($elm$core$Basics$min, t, b)) + 'px)')));
							var newHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									$elm$html$Html$Attributes$style,
									'height',
									'calc(1.0em + ' + ($elm$core$String$fromFloat(
										2 * A2($elm$core$Basics$min, t, b)) + 'px)')));
							var newBottom = b - A2($elm$core$Basics$min, t, b);
							var reducedVerticalPadding = A2(
								$mdgriffith$elm_ui$Internal$Model$StyleClass,
								$mdgriffith$elm_ui$Internal$Flag$padding,
								A5(
									$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
									A4($mdgriffith$elm_ui$Internal$Model$paddingNameFloat, newTop, r, newBottom, l),
									newTop,
									r,
									newBottom,
									l));
							return _Utils_update(
								els,
								{
									cover: A2($elm$core$List$cons, attr, els.cover),
									input: A2(
										$elm$core$List$cons,
										newHeight,
										A2($elm$core$List$cons, newLineHeight, els.input)),
									parent: A2($elm$core$List$cons, reducedVerticalPadding, els.parent)
								});
						}
					case 'BorderWidth':
						var _v3 = attr.b;
						return _Utils_update(
							els,
							{
								cover: A2($elm$core$List$cons, attr, els.cover),
								parent: A2($elm$core$List$cons, attr, els.parent)
							});
					case 'Transform':
						return _Utils_update(
							els,
							{
								cover: A2($elm$core$List$cons, attr, els.cover),
								parent: A2($elm$core$List$cons, attr, els.parent)
							});
					case 'FontSize':
						return _Utils_update(
							els,
							{
								fullParent: A2($elm$core$List$cons, attr, els.fullParent)
							});
					case 'FontFamily':
						var _v4 = attr.b;
						return _Utils_update(
							els,
							{
								fullParent: A2($elm$core$List$cons, attr, els.fullParent)
							});
					default:
						var flag = attr.a;
						var cls = attr.b;
						return _Utils_update(
							els,
							{
								parent: A2($elm$core$List$cons, attr, els.parent)
							});
				}
			case 'NoAttribute':
				return els;
			case 'Attr':
				var a = attr.a;
				return _Utils_update(
					els,
					{
						input: A2($elm$core$List$cons, attr, els.input)
					});
			case 'Describe':
				return _Utils_update(
					els,
					{
						input: A2($elm$core$List$cons, attr, els.input)
					});
			case 'Class':
				return _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					});
			default:
				return _Utils_update(
					els,
					{
						input: A2($elm$core$List$cons, attr, els.input)
					});
		}
	});
var $mdgriffith$elm_ui$Element$Input$redistribute = F3(
	function (isMultiline, stacked, attrs) {
		return function (redist) {
			return {
				cover: $elm$core$List$reverse(redist.cover),
				fullParent: $elm$core$List$reverse(redist.fullParent),
				input: $elm$core$List$reverse(redist.input),
				parent: $elm$core$List$reverse(redist.parent),
				wrapper: $elm$core$List$reverse(redist.wrapper)
			};
		}(
			A3(
				$elm$core$List$foldl,
				A2($mdgriffith$elm_ui$Element$Input$redistributeOver, isMultiline, stacked),
				{cover: _List_Nil, fullParent: _List_Nil, input: _List_Nil, parent: _List_Nil, wrapper: _List_Nil},
				attrs));
	});
var $mdgriffith$elm_ui$Element$Input$renderBox = function (_v0) {
	var top = _v0.top;
	var right = _v0.right;
	var bottom = _v0.bottom;
	var left = _v0.left;
	return $elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px'))))));
};
var $mdgriffith$elm_ui$Element$alpha = function (o) {
	var transparency = function (x) {
		return 1 - x;
	}(
		A2(
			$elm$core$Basics$min,
			1.0,
			A2($elm$core$Basics$max, 0.0, o)));
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$transparency,
		A2(
			$mdgriffith$elm_ui$Internal$Model$Transparency,
			'transparency-' + $mdgriffith$elm_ui$Internal$Model$floatClass(transparency),
			transparency));
};
var $mdgriffith$elm_ui$Element$Input$charcoal = A3($mdgriffith$elm_ui$Element$rgb, 136 / 255, 138 / 255, 133 / 255);
var $mdgriffith$elm_ui$Element$Input$renderPlaceholder = F3(
	function (_v0, forPlaceholder, on) {
		var placeholderAttrs = _v0.a;
		var placeholderEl = _v0.b;
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				forPlaceholder,
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color($mdgriffith$elm_ui$Element$Input$charcoal),
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.noTextSelection + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.passPointerEvents)),
							$mdgriffith$elm_ui$Element$clip,
							$mdgriffith$elm_ui$Element$Border$color(
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							$mdgriffith$elm_ui$Element$Background$color(
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$alpha(
							on ? 1 : 0)
						]),
					placeholderAttrs)),
			placeholderEl);
	});
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$html$Html$Attributes$spellcheck = $elm$html$Html$Attributes$boolProperty('spellcheck');
var $mdgriffith$elm_ui$Element$Input$spellcheck = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$spellcheck);
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $mdgriffith$elm_ui$Element$Input$value = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$value);
var $mdgriffith$elm_ui$Element$Input$textHelper = F3(
	function (textInput, attrs, textOptions) {
		var withDefaults = _Utils_ap($mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle, attrs);
		var redistributed = A3(
			$mdgriffith$elm_ui$Element$Input$redistribute,
			_Utils_eq(textInput.type_, $mdgriffith$elm_ui$Element$Input$TextArea),
			$mdgriffith$elm_ui$Element$Input$isStacked(textOptions.label),
			withDefaults);
		var onlySpacing = function (attr) {
			if ((attr.$ === 'StyleClass') && (attr.b.$ === 'SpacingStyle')) {
				var _v9 = attr.b;
				return true;
			} else {
				return false;
			}
		};
		var heightConstrained = function () {
			var _v7 = textInput.type_;
			if (_v7.$ === 'TextInputNode') {
				var inputType = _v7.a;
				return false;
			} else {
				return A2(
					$elm$core$Maybe$withDefault,
					false,
					A2(
						$elm$core$Maybe$map,
						$mdgriffith$elm_ui$Element$Input$isConstrained,
						$elm$core$List$head(
							$elm$core$List$reverse(
								A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Element$Input$getHeight, withDefaults)))));
			}
		}();
		var getPadding = function (attr) {
			if ((attr.$ === 'StyleClass') && (attr.b.$ === 'PaddingStyle')) {
				var cls = attr.a;
				var _v6 = attr.b;
				var pad = _v6.a;
				var t = _v6.b;
				var r = _v6.c;
				var b = _v6.d;
				var l = _v6.e;
				return $elm$core$Maybe$Just(
					{
						bottom: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(b - 3)),
						left: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(l - 3)),
						right: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(r - 3)),
						top: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(t - 3))
					});
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var parentPadding = A2(
			$elm$core$Maybe$withDefault,
			{bottom: 0, left: 0, right: 0, top: 0},
			$elm$core$List$head(
				$elm$core$List$reverse(
					A2($elm$core$List$filterMap, getPadding, withDefaults))));
		var inputElement = A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			function () {
				var _v3 = textInput.type_;
				if (_v3.$ === 'TextInputNode') {
					var inputType = _v3.a;
					return $mdgriffith$elm_ui$Internal$Model$NodeName('input');
				} else {
					return $mdgriffith$elm_ui$Internal$Model$NodeName('textarea');
				}
			}(),
			_Utils_ap(
				function () {
					var _v4 = textInput.type_;
					if (_v4.$ === 'TextInputNode') {
						var inputType = _v4.a;
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$type_(inputType)),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputText)
							]);
					} else {
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$clip,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputMultiline),
								$mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding(withDefaults),
								$mdgriffith$elm_ui$Element$paddingEach(parentPadding),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								A2(
									$elm$html$Html$Attributes$style,
									'margin',
									$mdgriffith$elm_ui$Element$Input$renderBox(
										$mdgriffith$elm_ui$Element$Input$negateBox(parentPadding)))),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								A2($elm$html$Html$Attributes$style, 'box-sizing', 'content-box'))
							]);
					}
				}(),
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Input$value(textOptions.text),
							$mdgriffith$elm_ui$Internal$Model$Attr(
							$elm$html$Html$Events$onInput(textOptions.onChange)),
							$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(textOptions.label),
							$mdgriffith$elm_ui$Element$Input$spellcheck(textInput.spellchecked),
							A2(
							$elm$core$Maybe$withDefault,
							$mdgriffith$elm_ui$Internal$Model$NoAttribute,
							A2($elm$core$Maybe$map, $mdgriffith$elm_ui$Element$Input$autofill, textInput.autofill))
						]),
					redistributed.input)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil));
		var wrappedInput = function () {
			var _v0 = textInput.type_;
			if (_v0.$ === 'TextArea') {
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					_Utils_ap(
						(heightConstrained ? $elm$core$List$cons($mdgriffith$elm_ui$Element$scrollbarY) : $elm$core$Basics$identity)(
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin),
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineWrapper)
								])),
						redistributed.parent),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[
								A4(
								$mdgriffith$elm_ui$Internal$Model$element,
								$mdgriffith$elm_ui$Internal$Model$asParagraph,
								$mdgriffith$elm_ui$Internal$Model$div,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Element$inFront(inputElement),
											A2(
												$elm$core$List$cons,
												$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineParent),
												redistributed.wrapper)))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(
									function () {
										if (textOptions.text === '') {
											var _v1 = textOptions.placeholder;
											if (_v1.$ === 'Nothing') {
												return _List_fromArray(
													[
														$mdgriffith$elm_ui$Element$text('\u00A0')
													]);
											} else {
												var place = _v1.a;
												return _List_fromArray(
													[
														A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, _List_Nil, textOptions.text === '')
													]);
											}
										} else {
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Internal$Model$unstyled(
													A2(
														$elm$html$Html$span,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineFiller)
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(textOptions.text + '\u00A0')
															])))
												]);
										}
									}()))
							])));
			} else {
				var inputType = _v0.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						A2(
							$elm$core$List$cons,
							A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin),
							$elm$core$List$concat(
								_List_fromArray(
									[
										redistributed.parent,
										function () {
										var _v2 = textOptions.placeholder;
										if (_v2.$ === 'Nothing') {
											return _List_Nil;
										} else {
											var place = _v2.a;
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Element$behindContent(
													A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, redistributed.cover, textOptions.text === ''))
												]);
										}
									}()
									])))),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[inputElement])));
			}
		}();
		return A3(
			$mdgriffith$elm_ui$Element$Input$applyLabel,
			A2(
				$elm$core$List$cons,
				A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.cursorText),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(textOptions.label) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(5),
					A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$Region$announce, redistributed.fullParent))),
			textOptions.label,
			wrappedInput);
	});
var $mdgriffith$elm_ui$Element$Input$text = $mdgriffith$elm_ui$Element$Input$textHelper(
	{
		autofill: $elm$core$Maybe$Nothing,
		spellchecked: false,
		type_: $mdgriffith$elm_ui$Element$Input$TextInputNode('text')
	});
var $author$project$Graphic_Element$displayCanvasElement = F7(
	function (canvasRdy, title, inputTitle, displayMedia, substance1, substance2, inputSubstance) {
		if (canvasRdy.$ === 'Just') {
			var eleMsg = canvasRdy.a;
			if (substance1.$ === 'Nothing') {
				return A2(
					$mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$Border$innerGlow,
							A3($mdgriffith$elm_ui$Element$rgb255, 105, 55, 200),
							5),
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$padding(25),
							$mdgriffith$elm_ui$Element$spaceEvenly
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$Input$text,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
							{
								label: A2(
									$mdgriffith$elm_ui$Element$Input$labelAbove,
									_List_Nil,
									$mdgriffith$elm_ui$Element$text(title)),
								onChange: inputTitle,
								placeholder: $elm$core$Maybe$Just(
									A2(
										$mdgriffith$elm_ui$Element$Input$placeholder,
										_List_Nil,
										$mdgriffith$elm_ui$Element$text('Titre Substance:'))),
								text: title
							}),
							$mdgriffith$elm_ui$Element$text('Selectionner un élément média'),
							displayMedia,
							A2(
							$mdgriffith$elm_ui$Element$Input$button,
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$Border$innerGlow,
									A3($mdgriffith$elm_ui$Element$rgb255, 225, 155, 2),
									2),
									$mdgriffith$elm_ui$Element$centerX,
									$mdgriffith$elm_ui$Element$centerY
								]),
							{
								label: $mdgriffith$elm_ui$Element$text('Appuyer pour enregistrer'),
								onPress: canvasRdy
							})
						]));
			} else {
				var sub2Display = substance1.a;
				if (substance2.$ === 'Just') {
					var secondSub2Display = substance2.a;
					return A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Border$innerGlow,
								A3($mdgriffith$elm_ui$Element$rgb255, 105, 55, 200),
								5),
								$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$padding(25),
								$mdgriffith$elm_ui$Element$spaceEvenly
							]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Input$text,
								_List_fromArray(
									[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
								{
									label: A2(
										$mdgriffith$elm_ui$Element$Input$labelAbove,
										_List_Nil,
										$mdgriffith$elm_ui$Element$text(title)),
									onChange: inputTitle,
									placeholder: $elm$core$Maybe$Just(
										A2(
											$mdgriffith$elm_ui$Element$Input$placeholder,
											_List_Nil,
											$mdgriffith$elm_ui$Element$text('Titre Substance:'))),
									text: title
								}),
								$mdgriffith$elm_ui$Element$text('Selectionner un élément média'),
								displayMedia,
								$mdgriffith$elm_ui$Element$text('Choisir une substance'),
								A3(
								$author$project$Graphic_Element$displayCanvasSubstance,
								sub2Display,
								inputSubstance,
								_Utils_Tuple2(200, 200)),
								$mdgriffith$elm_ui$Element$text('Choisir une substance'),
								A3(
								$author$project$Graphic_Element$displayCanvasSubstance,
								secondSub2Display,
								inputSubstance,
								_Utils_Tuple2(200, 200)),
								A2(
								$mdgriffith$elm_ui$Element$Input$button,
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$Border$innerGlow,
										A3($mdgriffith$elm_ui$Element$rgb255, 225, 155, 2),
										2),
										$mdgriffith$elm_ui$Element$centerX,
										$mdgriffith$elm_ui$Element$centerY
									]),
								{
									label: $mdgriffith$elm_ui$Element$text('Appuyer pour enregistrer'),
									onPress: canvasRdy
								})
							]));
				} else {
					return A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Border$innerGlow,
								A3($mdgriffith$elm_ui$Element$rgb255, 105, 55, 200),
								5),
								$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$padding(25),
								$mdgriffith$elm_ui$Element$spaceEvenly
							]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Input$text,
								_List_fromArray(
									[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
								{
									label: A2(
										$mdgriffith$elm_ui$Element$Input$labelAbove,
										_List_Nil,
										$mdgriffith$elm_ui$Element$text(title)),
									onChange: inputTitle,
									placeholder: $elm$core$Maybe$Just(
										A2(
											$mdgriffith$elm_ui$Element$Input$placeholder,
											_List_Nil,
											$mdgriffith$elm_ui$Element$text('Titre Substance:'))),
									text: title
								}),
								$mdgriffith$elm_ui$Element$text('Selectionner un élément média'),
								displayMedia,
								$mdgriffith$elm_ui$Element$text('Choisir une substance'),
								A3(
								$author$project$Graphic_Element$displayCanvasSubstance,
								sub2Display,
								inputSubstance,
								_Utils_Tuple2(200, 200)),
								A2(
								$mdgriffith$elm_ui$Element$Input$button,
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$Border$innerGlow,
										A3($mdgriffith$elm_ui$Element$rgb255, 225, 155, 2),
										2),
										$mdgriffith$elm_ui$Element$centerX,
										$mdgriffith$elm_ui$Element$centerY
									]),
								{
									label: $mdgriffith$elm_ui$Element$text('Appuyer pour enregistrer'),
									onPress: canvasRdy
								})
							]));
				}
			}
		} else {
			if (substance1.$ === 'Nothing') {
				return A2(
					$mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$padding(25),
							$mdgriffith$elm_ui$Element$spaceEvenly
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$Input$text,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
							{
								label: A2(
									$mdgriffith$elm_ui$Element$Input$labelAbove,
									_List_Nil,
									$mdgriffith$elm_ui$Element$text(title)),
								onChange: inputTitle,
								placeholder: $elm$core$Maybe$Just(
									A2(
										$mdgriffith$elm_ui$Element$Input$placeholder,
										_List_Nil,
										$mdgriffith$elm_ui$Element$text('Titre Substance:'))),
								text: title
							}),
							$mdgriffith$elm_ui$Element$text('Selectionner un élément média'),
							displayMedia
						]));
			} else {
				var sub2Display = substance1.a;
				if (substance2.$ === 'Just') {
					var secondSub2Display = substance2.a;
					return A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$padding(25),
								$mdgriffith$elm_ui$Element$spaceEvenly
							]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Input$text,
								_List_fromArray(
									[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
								{
									label: A2(
										$mdgriffith$elm_ui$Element$Input$labelAbove,
										_List_Nil,
										$mdgriffith$elm_ui$Element$text(title)),
									onChange: inputTitle,
									placeholder: $elm$core$Maybe$Just(
										A2(
											$mdgriffith$elm_ui$Element$Input$placeholder,
											_List_Nil,
											$mdgriffith$elm_ui$Element$text('Titre Substance:'))),
									text: title
								}),
								$mdgriffith$elm_ui$Element$text('Selectionner un élément média'),
								displayMedia,
								$mdgriffith$elm_ui$Element$text('Choisir une substance'),
								A3(
								$author$project$Graphic_Element$displayCanvasSubstance,
								sub2Display,
								inputSubstance,
								_Utils_Tuple2(200, 200)),
								$mdgriffith$elm_ui$Element$text('Choisir une substance'),
								A3(
								$author$project$Graphic_Element$displayCanvasSubstance,
								secondSub2Display,
								inputSubstance,
								_Utils_Tuple2(200, 200))
							]));
				} else {
					return A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$padding(25),
								$mdgriffith$elm_ui$Element$spaceEvenly
							]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Input$text,
								_List_fromArray(
									[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
								{
									label: A2(
										$mdgriffith$elm_ui$Element$Input$labelAbove,
										_List_Nil,
										$mdgriffith$elm_ui$Element$text(title)),
									onChange: inputTitle,
									placeholder: $elm$core$Maybe$Just(
										A2(
											$mdgriffith$elm_ui$Element$Input$placeholder,
											_List_Nil,
											$mdgriffith$elm_ui$Element$text('Titre Substance:'))),
									text: title
								}),
								$mdgriffith$elm_ui$Element$text('Selectionner un élément média'),
								displayMedia,
								$mdgriffith$elm_ui$Element$text('Choisir une substance'),
								A3(
								$author$project$Graphic_Element$displayCanvasSubstance,
								sub2Display,
								inputSubstance,
								_Utils_Tuple2(200, 200))
							]));
				}
			}
		}
	});
var $author$project$Graphic_Element$displayCanvasVideo = F2(
	function (vidUrl, selectNewVideo) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Background$color(
					A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 0)),
					$mdgriffith$elm_ui$Element$padding(1),
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$centerY,
					$mdgriffith$elm_ui$Element$Events$onClick(selectNewVideo)
				]),
			A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
				$mdgriffith$elm_ui$Element$html(
					A2(
						$elm$html$Html$video,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$src(vidUrl),
								$elm$html$Html$Attributes$controls(true),
								$elm$html$Html$Attributes$width(120),
								$elm$html$Html$Attributes$height(120)
							]),
						_List_Nil))));
	});
var $elm_community$maybe_extra$Maybe$Extra$isJust = function (m) {
	if (m.$ === 'Nothing') {
		return false;
	} else {
		return true;
	}
};
var $author$project$Graphic_Element$displayCanvas = function (elmMsgElementEdited) {
	var _v0 = elmMsgElementEdited.activeCanvas;
	switch (_v0.$) {
		case 'Vide':
			return A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(25),
						$mdgriffith$elm_ui$Element$spaceEvenly,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
					]),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$Input$button,
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Border$innerGlow,
								A3($mdgriffith$elm_ui$Element$rgb255, 255, 200, 150),
								1)
							]),
						{
							label: A2(
								$mdgriffith$elm_ui$Element$column,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$image,
										_List_Nil,
										{description: 'Créer uneSub.SubstancePotentielle', src: '/img/potentielle.jpg'}),
										$mdgriffith$elm_ui$Element$text('Créer uneSub.SubstancePotentielle')
									])),
							onPress: $elm$core$Maybe$Just(elmMsgElementEdited.createPotential)
						}),
						A2(
						$mdgriffith$elm_ui$Element$Input$button,
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Border$innerGlow,
								A3($mdgriffith$elm_ui$Element$rgb255, 255, 200, 150),
								1)
							]),
						{
							label: A2(
								$mdgriffith$elm_ui$Element$column,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$image,
										_List_Nil,
										{description: 'Créer uneSub.SubstanceMotrice', src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRj9FIn2dMmiEtweLMJu0oF2JgEkunxGFELLc3upkVAB3Y_alzn'}),
										$mdgriffith$elm_ui$Element$text('Créer uneSub.SubstanceMotrice')
									])),
							onPress: $elm$core$Maybe$Just(elmMsgElementEdited.createMotrice)
						}),
						A2(
						$mdgriffith$elm_ui$Element$Input$button,
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Border$innerGlow,
								A3($mdgriffith$elm_ui$Element$rgb255, 255, 200, 150),
								1)
							]),
						{
							label: A2(
								$mdgriffith$elm_ui$Element$column,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$image,
										_List_Nil,
										{description: 'Créer uneSub.SubstanceRelation', src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs'}),
										$mdgriffith$elm_ui$Element$text('Créer uneSub.SubstanceRelation')
									])),
							onPress: $elm$core$Maybe$Just(elmMsgElementEdited.createRelation)
						})
					]));
		case 'Potentiel':
			var potCan = _v0.a;
			return ($elm_community$maybe_extra$Maybe$Extra$isJust(potCan.title) && $elm_community$maybe_extra$Maybe$Extra$isJust(potCan.imageUrl)) ? A7(
				$author$project$Graphic_Element$displayCanvasElement,
				$elm$core$Maybe$Just(elmMsgElementEdited.recordSubstance),
				A2($elm$core$Maybe$withDefault, 'Substance Potentielle', potCan.title),
				elmMsgElementEdited.enterTitle,
				A2(
					$author$project$Graphic_Element$displayCanvasImage,
					A2($elm$core$Maybe$withDefault, 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs', potCan.imageUrl),
					elmMsgElementEdited.selectImage),
				$elm$core$Maybe$Nothing,
				$elm$core$Maybe$Nothing,
				elmMsgElementEdited.selectSubstance) : A7(
				$author$project$Graphic_Element$displayCanvasElement,
				$elm$core$Maybe$Nothing,
				A2($elm$core$Maybe$withDefault, 'Substance Potentielle', potCan.title),
				elmMsgElementEdited.enterTitle,
				A2(
					$author$project$Graphic_Element$displayCanvasImage,
					A2($elm$core$Maybe$withDefault, 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs', potCan.imageUrl),
					elmMsgElementEdited.selectImage),
				$elm$core$Maybe$Nothing,
				$elm$core$Maybe$Nothing,
				elmMsgElementEdited.selectSubstance);
		case 'Motrice':
			var motCan = _v0.a;
			return ($elm_community$maybe_extra$Maybe$Extra$isJust(motCan.videoUrl) && ($elm_community$maybe_extra$Maybe$Extra$isJust(motCan.title) && $elm_community$maybe_extra$Maybe$Extra$isJust(motCan.principale))) ? A7(
				$author$project$Graphic_Element$displayCanvasElement,
				$elm$core$Maybe$Just(elmMsgElementEdited.recordSubstance),
				A2($elm$core$Maybe$withDefault, 'Substance Motrice', motCan.title),
				elmMsgElementEdited.enterTitle,
				A2(
					$author$project$Graphic_Element$displayCanvasVideo,
					A2($elm$core$Maybe$withDefault, 'img/vidClick.mp4', motCan.videoUrl),
					elmMsgElementEdited.selectVideo),
				$elm$core$Maybe$Just(
					A2(
						$elm$core$Maybe$withDefault,
						$author$project$SubstancePlayer$Potential(
							A3($author$project$SubstancePlayer$SubstancePotential, '0', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs', 'Nouvelle Substance')),
						motCan.principale)),
				$elm$core$Maybe$Nothing,
				elmMsgElementEdited.selectSubstance) : A7(
				$author$project$Graphic_Element$displayCanvasElement,
				$elm$core$Maybe$Nothing,
				A2($elm$core$Maybe$withDefault, 'Substance Motrice', motCan.title),
				elmMsgElementEdited.enterTitle,
				A2(
					$author$project$Graphic_Element$displayCanvasVideo,
					A2($elm$core$Maybe$withDefault, 'img/vidClick.mp4', motCan.videoUrl),
					elmMsgElementEdited.selectVideo),
				$elm$core$Maybe$Just(
					A2(
						$elm$core$Maybe$withDefault,
						$author$project$SubstancePlayer$Potential(
							A3($author$project$SubstancePlayer$SubstancePotential, '0', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs', 'Nouvelle Substance')),
						motCan.principale)),
				$elm$core$Maybe$Nothing,
				elmMsgElementEdited.selectSubstance);
		default:
			var relCan = _v0.a;
			return ($elm_community$maybe_extra$Maybe$Extra$isJust(relCan.videoUrl) && ($elm_community$maybe_extra$Maybe$Extra$isJust(relCan.title) && ($elm_community$maybe_extra$Maybe$Extra$isJust(relCan.premiere) && $elm_community$maybe_extra$Maybe$Extra$isJust(relCan.seconde)))) ? A7(
				$author$project$Graphic_Element$displayCanvasElement,
				$elm$core$Maybe$Just(elmMsgElementEdited.recordSubstance),
				A2($elm$core$Maybe$withDefault, 'Substance Relation', relCan.title),
				elmMsgElementEdited.enterTitle,
				A2(
					$author$project$Graphic_Element$displayCanvasVideo,
					A2($elm$core$Maybe$withDefault, 'img/vidClick.mp4', relCan.videoUrl),
					elmMsgElementEdited.selectVideo),
				$elm$core$Maybe$Just(
					A2(
						$elm$core$Maybe$withDefault,
						$author$project$SubstancePlayer$Potential(
							A3($author$project$SubstancePlayer$SubstancePotential, '0', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs', 'Nouvelle Substance')),
						relCan.premiere)),
				$elm$core$Maybe$Just(
					A2(
						$elm$core$Maybe$withDefault,
						$author$project$SubstancePlayer$Potential(
							A3($author$project$SubstancePlayer$SubstancePotential, '0', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs', 'Nouvelle Substance')),
						relCan.seconde)),
				elmMsgElementEdited.selectSubstance) : A7(
				$author$project$Graphic_Element$displayCanvasElement,
				$elm$core$Maybe$Nothing,
				A2($elm$core$Maybe$withDefault, 'Substance Relation', relCan.title),
				elmMsgElementEdited.enterTitle,
				A2(
					$author$project$Graphic_Element$displayCanvasVideo,
					A2($elm$core$Maybe$withDefault, 'img/vidClick.mp4', relCan.videoUrl),
					elmMsgElementEdited.selectVideo),
				$elm$core$Maybe$Just(
					A2(
						$elm$core$Maybe$withDefault,
						$author$project$SubstancePlayer$Potential(
							A3($author$project$SubstancePlayer$SubstancePotential, '0', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs', 'Nouvelle Substance')),
						relCan.premiere)),
				$elm$core$Maybe$Just(
					A2(
						$elm$core$Maybe$withDefault,
						$author$project$SubstancePlayer$Potential(
							A3($author$project$SubstancePlayer$SubstancePotential, '0', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs', 'Nouvelle Substance')),
						relCan.seconde)),
				elmMsgElementEdited.selectSubstance);
	}
};
var $author$project$LucasCetPlatform$Edit_Chat = function (a) {
	return {$: 'Edit_Chat', a: a};
};
var $author$project$LucasCetPlatform$displayChatMsg = F2(
	function (chatData, friends) {
		if (friends.$ === 'Just') {
			var userInfoList = friends.a;
			var fUser = $elm$core$List$head(
				A2(
					$elm$core$List$filter,
					function (a) {
						return _Utils_eq(a.userId, chatData.contactId);
					},
					userInfoList));
			if (fUser.$ === 'Just') {
				var userValue = fUser.a;
				return A2(
					$mdgriffith$elm_ui$Element$row,
					_List_Nil,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$text('Message de:'),
							A2(
							$mdgriffith$elm_ui$Element$Input$button,
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$Border$innerGlow,
									A3($mdgriffith$elm_ui$Element$rgb255, 55, 25, 200),
									2)
								]),
							{
								label: $mdgriffith$elm_ui$Element$text(userValue.login),
								onPress: $elm$core$Maybe$Just(
									$author$project$LucasCetPlatform$Edit_Chat(chatData))
							})
						]));
			} else {
				return $mdgriffith$elm_ui$Element$text('Pas d\'amis qui correspond à l\'expéditeur');
			}
		} else {
			return $mdgriffith$elm_ui$Element$text('Pas d\'amis donc pas de messages');
		}
	});
var $author$project$LucasCetPlatform$displayChatRecipient = function (userInfo) {
	return A2(
		$mdgriffith$elm_ui$Element$row,
		_List_Nil,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$text('Expédier message à:'),
				A2(
				$mdgriffith$elm_ui$Element$Input$button,
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$Border$innerGlow,
						A3($mdgriffith$elm_ui$Element$rgb255, 200, 55, 25),
						2)
					]),
				{
					label: $mdgriffith$elm_ui$Element$text(userInfo.login),
					onPress: $elm$core$Maybe$Just(
						$author$project$LucasCetPlatform$Edit_Chat(
							A3($author$project$Chat_Creator$ChatData, _List_Nil, _List_Nil, userInfo.userId)))
				})
			]));
};
var $mdgriffith$elm_ui$Internal$Model$Bottom = {$: 'Bottom'};
var $mdgriffith$elm_ui$Element$alignBottom = $mdgriffith$elm_ui$Internal$Model$AlignY($mdgriffith$elm_ui$Internal$Model$Bottom);
var $author$project$ApplicationPlayer$rowElementAttribute = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Element$spacingXY, 30, 0),
		$mdgriffith$elm_ui$Element$centerX,
		$mdgriffith$elm_ui$Element$Border$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229))
	]);
var $author$project$SubstancePlayer$selectedSequenceAttribute = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Border$width(2),
		$mdgriffith$elm_ui$Element$Border$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 235, 107, 76)),
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 0)),
		$mdgriffith$elm_ui$Element$centerX,
		$mdgriffith$elm_ui$Element$alignTop,
		$mdgriffith$elm_ui$Element$paddingEach(
		{bottom: 0, left: 0, right: 0, top: 10})
	]);
var $mdgriffith$elm_ui$Internal$Flag$fontWeight = $mdgriffith$elm_ui$Internal$Flag$flag(13);
var $mdgriffith$elm_ui$Element$Font$bold = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.bold);
var $author$project$ApplicationPlayer$selectedSequenceTextAttribute = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Element$paddingXY, 0, 15),
		$mdgriffith$elm_ui$Element$Font$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 226, 89, 55)),
		$mdgriffith$elm_ui$Element$Font$size(18),
		$mdgriffith$elm_ui$Element$Font$bold,
		$mdgriffith$elm_ui$Element$Font$family(
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$typeface('Lucida Grande'),
				$mdgriffith$elm_ui$Element$Font$sansSerif
			])),
		$mdgriffith$elm_ui$Element$Font$center
	]);
var $author$project$SubstancePlayer$sequenceAttribute = _List_fromArray(
	[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$alignTop]);
var $author$project$ApplicationPlayer$sequenceTextAttribute = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Element$paddingXY, 0, 15),
		$mdgriffith$elm_ui$Element$Font$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 0)),
		$mdgriffith$elm_ui$Element$Font$size(18),
		$mdgriffith$elm_ui$Element$Font$bold,
		$mdgriffith$elm_ui$Element$Font$family(
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$typeface('Lucida Grande'),
				$mdgriffith$elm_ui$Element$Font$sansSerif
			])),
		$mdgriffith$elm_ui$Element$Font$center
	]);
var $author$project$ApplicationPlayer$sequenceVideo = F3(
	function (appId, videoLink, dimension) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
			$mdgriffith$elm_ui$Element$html(
				A2(
					$elm$html$Html$video,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src('https://storage.googleapis.com/lucascet-data/' + (appId + ('/' + (videoLink + '.mp4')))),
							$elm$html$Html$Attributes$controls(true),
							$elm$html$Html$Attributes$width(dimension.a),
							$elm$html$Html$Attributes$height(dimension.b)
						]),
					_List_Nil)));
	});
var $author$project$ApplicationPlayer$visualizeInterfaceWithMenu = F6(
	function (elementGraphique, appInfo, clickEventHandler, selectMenu, deployedContainer, goneEvent) {
		if (deployedContainer.$ === 'Just') {
			var visualContainer = deployedContainer.a;
			if (selectMenu.$ === 'Just') {
				var menuOverlay = selectMenu.a;
				var paraAttrib = _Utils_eq(elementGraphique.valeur, menuOverlay.a) ? $author$project$ApplicationPlayer$selectedSequenceTextAttribute : $author$project$ApplicationPlayer$sequenceTextAttribute;
				var _v2 = elementGraphique.visuel;
				switch (_v2.$) {
					case 'Bouton':
						return $mdgriffith$elm_ui$Element$text('Error');
					case 'Image':
						return $mdgriffith$elm_ui$Element$text('Error');
					case 'Video':
						var subAttribute = _Utils_eq(elementGraphique.valeur, menuOverlay.a) ? _Utils_ap(
							$author$project$SubstancePlayer$selectedSequenceAttribute,
							_Utils_ap(
								menuOverlay.b,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseLeave(goneEvent)
									]))) : $author$project$SubstancePlayer$sequenceAttribute;
						var videoDimension = _Utils_eq(elementGraphique.valeur, menuOverlay.a) ? _Utils_Tuple2(200, 150) : _Utils_Tuple2(185, 140);
						return _Utils_eq(elementGraphique.valeur, visualContainer.subId) ? A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$centerX]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									paraAttrib,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(elementGraphique.valeur)
										])),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_Utils_ap(
										subAttribute,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$Events$onMouseEnter(
												clickEventHandler(elementGraphique))
											])),
									A3($author$project$ApplicationPlayer$sequenceVideo, appInfo.appId, elementGraphique.valeur, videoDimension)),
									A2(
									$mdgriffith$elm_ui$Element$image,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$centerX]),
									{description: 'Ouverture de Substance', src: 'img/Icons/triangle-relation.png'}),
									visualContainer.deployment
								])) : A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$alignTop]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									paraAttrib,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(elementGraphique.valeur)
										])),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_Utils_ap(
										subAttribute,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$Events$onMouseEnter(
												clickEventHandler(elementGraphique))
											])),
									A3($author$project$ApplicationPlayer$sequenceVideo, appInfo.appId, elementGraphique.valeur, videoDimension))
								]));
					default:
						return $mdgriffith$elm_ui$Element$text('Error');
				}
			} else {
				var _v3 = elementGraphique.visuel;
				switch (_v3.$) {
					case 'Bouton':
						return $mdgriffith$elm_ui$Element$text('Error');
					case 'Image':
						return $mdgriffith$elm_ui$Element$text('Error');
					case 'Video':
						return _Utils_eq(elementGraphique.valeur, visualContainer.subId) ? A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$centerX]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$ApplicationPlayer$sequenceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(elementGraphique.valeur)
										])),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_Utils_ap(
										$author$project$SubstancePlayer$selectedSequenceAttribute,
										_Utils_ap(
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$Events$onMouseEnter(
													clickEventHandler(elementGraphique))
												]),
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$Events$onMouseLeave(goneEvent)
												]))),
									A3(
										$author$project$ApplicationPlayer$sequenceVideo,
										appInfo.appId,
										elementGraphique.valeur,
										_Utils_Tuple2(200, 150))),
									A2(
									$mdgriffith$elm_ui$Element$image,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$centerX]),
									{description: 'Ouverture de Substance', src: 'img/Icons/triangle-relation.png'}),
									visualContainer.deployment
								])) : A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap(
								$author$project$SubstancePlayer$sequenceAttribute,
								_Utils_ap(
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Events$onMouseEnter(
											clickEventHandler(elementGraphique))
										]),
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Events$onMouseLeave(goneEvent)
										]))),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$ApplicationPlayer$sequenceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(elementGraphique.valeur)
										])),
									A3(
									$author$project$ApplicationPlayer$sequenceVideo,
									appInfo.appId,
									elementGraphique.valeur,
									_Utils_Tuple2(185, 140))
								]));
					default:
						return $mdgriffith$elm_ui$Element$text('Error');
				}
			}
		} else {
			if (selectMenu.$ === 'Just') {
				var menuOverlay = selectMenu.a;
				var _v5 = elementGraphique.visuel;
				switch (_v5.$) {
					case 'Bouton':
						return $mdgriffith$elm_ui$Element$text('Error');
					case 'Image':
						return $mdgriffith$elm_ui$Element$text('Error');
					case 'Video':
						return _Utils_eq(elementGraphique.valeur, menuOverlay.a) ? A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$centerX]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$ApplicationPlayer$selectedSequenceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(elementGraphique.valeur)
										])),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_Utils_ap(
										$author$project$SubstancePlayer$selectedSequenceAttribute,
										_Utils_ap(
											menuOverlay.b,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$Events$onMouseLeave(goneEvent)
												]))),
									A3(
										$author$project$ApplicationPlayer$sequenceVideo,
										appInfo.appId,
										elementGraphique.valeur,
										_Utils_Tuple2(185, 140)))
								])) : A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap(
								$author$project$SubstancePlayer$sequenceAttribute,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseEnter(
										clickEventHandler(elementGraphique))
									])),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$ApplicationPlayer$sequenceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(elementGraphique.valeur)
										])),
									A3(
									$author$project$ApplicationPlayer$sequenceVideo,
									appInfo.appId,
									elementGraphique.valeur,
									_Utils_Tuple2(185, 140))
								]));
					default:
						return $mdgriffith$elm_ui$Element$text('Error');
				}
			} else {
				var _v6 = elementGraphique.visuel;
				switch (_v6.$) {
					case 'Bouton':
						return $mdgriffith$elm_ui$Element$text('Error');
					case 'Image':
						return $mdgriffith$elm_ui$Element$text('Error');
					case 'Video':
						return A2(
							$mdgriffith$elm_ui$Element$column,
							_Utils_ap(
								$author$project$SubstancePlayer$sequenceAttribute,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Events$onMouseEnter(
										clickEventHandler(elementGraphique))
									])),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$ApplicationPlayer$sequenceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(elementGraphique.valeur)
										])),
									A3(
									$author$project$ApplicationPlayer$sequenceVideo,
									appInfo.appId,
									elementGraphique.valeur,
									_Utils_Tuple2(185, 140))
								]));
					default:
						return $mdgriffith$elm_ui$Element$text('Error');
				}
			}
		}
	});
var $author$project$ApplicationPlayer$displaySubstanceContainer = F7(
	function (substanceList, appInfo, clickEventHandler, selectedMenu, deployedSubstance, goneEvent, titre) {
		return A2(
			$mdgriffith$elm_ui$Element$row,
			$author$project$ApplicationPlayer$rowElementAttribute,
			A2(
				$elm$core$List$map,
				function (a) {
					return A6($author$project$ApplicationPlayer$visualizeInterfaceWithMenu, a, appInfo, clickEventHandler, selectedMenu, deployedSubstance, goneEvent);
				},
				substanceList));
	});
var $author$project$ApplicationPlayer$displayContainerElement = F2(
	function (appMsgPlayApp, substanceContainer) {
		var _v0 = substanceContainer.interfaceElement;
		if (_v0.$ === 'Just') {
			var substanceGraphElList = _v0.a;
			var _v1 = appMsgPlayApp.chosenApp;
			if (_v1.$ === 'Just') {
				var activeApp = _v1.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[$mdgriffith$elm_ui$Element$centerX]),
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$text(substanceContainer.metaData),
							A7(
							$author$project$ApplicationPlayer$displaySubstanceContainer,
							substanceGraphElList,
							activeApp,
							appMsgPlayApp.sendElemSelected(substanceContainer),
							appMsgPlayApp.selectedElementMenu,
							appMsgPlayApp.deployedContainer,
							appMsgPlayApp.deactivate,
							substanceContainer.metaData)
						]));
			} else {
				return $mdgriffith$elm_ui$Element$text('no app');
			}
		} else {
			return $mdgriffith$elm_ui$Element$text('');
		}
	});
var $mdgriffith$elm_ui$Element$Border$roundEach = function (_v0) {
	var topLeft = _v0.topLeft;
	var topRight = _v0.topRight;
	var bottomLeft = _v0.bottomLeft;
	var bottomRight = _v0.bottomRight;
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + ($elm$core$String$fromInt(topLeft) + ('-' + ($elm$core$String$fromInt(topRight) + ($elm$core$String$fromInt(bottomLeft) + ('-' + $elm$core$String$fromInt(bottomRight)))))),
			'border-radius',
			$elm$core$String$fromInt(topLeft) + ('px ' + ($elm$core$String$fromInt(topRight) + ('px ' + ($elm$core$String$fromInt(bottomRight) + ('px ' + ($elm$core$String$fromInt(bottomLeft) + 'px'))))))));
};
var $author$project$ApplicationPlayer$inputInterfaceAttribute = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Border$widthEach(
		{bottom: 4, left: 0, right: 0, top: 0}),
		$mdgriffith$elm_ui$Element$Border$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 225, 225, 225)),
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 51, 51, 51)),
		$mdgriffith$elm_ui$Element$paddingEach(
		{bottom: 10, left: 0, right: 0, top: 0}),
		$mdgriffith$elm_ui$Element$Font$size(25),
		$mdgriffith$elm_ui$Element$Font$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 179, 179, 179))
	]);
var $author$project$ApplicationPlayer$inputInterfaceTextAttribute = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Font$size(25),
		$mdgriffith$elm_ui$Element$Font$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 179, 179, 179))
	]);
var $mdgriffith$elm_ui$Element$Input$HiddenLabel = function (a) {
	return {$: 'HiddenLabel', a: a};
};
var $mdgriffith$elm_ui$Element$Input$labelHidden = $mdgriffith$elm_ui$Element$Input$HiddenLabel;
var $mdgriffith$elm_ui$Element$moveDown = function (y) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveY,
		$mdgriffith$elm_ui$Internal$Model$MoveY(y));
};
var $mdgriffith$elm_ui$Element$moveRight = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveX,
		$mdgriffith$elm_ui$Internal$Model$MoveX(x));
};
var $author$project$ApplicationPlayer$visualizeInterface = F3(
	function (elementGraphique, interfaceInteractive, appMsgPlayApp) {
		var _v0 = elementGraphique.visuel;
		switch (_v0.$) {
			case 'Bouton':
				return A2(
					$mdgriffith$elm_ui$Element$Input$button,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Background$color(
							A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229)),
							$mdgriffith$elm_ui$Element$height(
							$mdgriffith$elm_ui$Element$px(140)),
							$mdgriffith$elm_ui$Element$width(
							$mdgriffith$elm_ui$Element$px(185)),
							$mdgriffith$elm_ui$Element$moveDown(50),
							$mdgriffith$elm_ui$Element$moveRight(30)
						]),
					{
						label: A2(
							$mdgriffith$elm_ui$Element$paragraph,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Font$color(
									A3($mdgriffith$elm_ui$Element$rgb255, 185, 185, 185)),
									$mdgriffith$elm_ui$Element$Font$size(200),
									$mdgriffith$elm_ui$Element$Font$center,
									$mdgriffith$elm_ui$Element$centerX,
									$mdgriffith$elm_ui$Element$centerY,
									$mdgriffith$elm_ui$Element$moveUp(25)
								]),
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$text(elementGraphique.valeur)
								])),
						onPress: $elm$core$Maybe$Just(
							appMsgPlayApp.sendGeste(interfaceInteractive.gesteAssocie))
					});
			case 'Image':
				return $mdgriffith$elm_ui$Element$text('Error');
			case 'Video':
				return $mdgriffith$elm_ui$Element$text('Error');
			case 'Text':
				var _v1 = interfaceInteractive.gesteAssocie.filtre.idSubstance;
				if (_v1.$ === 'Just') {
					var listSub = _v1.a;
					return A2(
						$mdgriffith$elm_ui$Element$Input$text,
						$author$project$ApplicationPlayer$inputInterfaceAttribute,
						{
							label: $mdgriffith$elm_ui$Element$Input$labelHidden(elementGraphique.valeur),
							onChange: appMsgPlayApp.dataToSend(interfaceInteractive),
							placeholder: $elm$core$Maybe$Just(
								A2(
									$mdgriffith$elm_ui$Element$Input$placeholder,
									$author$project$ApplicationPlayer$inputInterfaceTextAttribute,
									$mdgriffith$elm_ui$Element$text(elementGraphique.valeur))),
							text: A2(
								$elm$core$Maybe$withDefault,
								'',
								$elm$core$List$head(listSub))
						});
				} else {
					return A2(
						$mdgriffith$elm_ui$Element$Input$text,
						$author$project$ApplicationPlayer$inputInterfaceAttribute,
						{
							label: $mdgriffith$elm_ui$Element$Input$labelHidden(elementGraphique.valeur),
							onChange: appMsgPlayApp.dataToSend(interfaceInteractive),
							placeholder: $elm$core$Maybe$Just(
								A2(
									$mdgriffith$elm_ui$Element$Input$placeholder,
									_List_Nil,
									$mdgriffith$elm_ui$Element$text(elementGraphique.valeur))),
							text: ''
						});
				}
			default:
				var _v2 = interfaceInteractive.gesteAssocie.filtre.idSubstance;
				if (_v2.$ === 'Just') {
					var listSub = _v2.a;
					return A2(
						$mdgriffith$elm_ui$Element$Input$text,
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Border$innerGlow,
								A3($mdgriffith$elm_ui$Element$rgb255, 235, 107, 76),
								2)
							]),
						{
							label: A2(
								$mdgriffith$elm_ui$Element$Input$labelAbove,
								_List_Nil,
								$mdgriffith$elm_ui$Element$text(elementGraphique.valeur)),
							onChange: appMsgPlayApp.dataToSend(interfaceInteractive),
							placeholder: $elm$core$Maybe$Just(
								A2(
									$mdgriffith$elm_ui$Element$Input$placeholder,
									_List_Nil,
									$mdgriffith$elm_ui$Element$text(elementGraphique.valeur))),
							text: A2(
								$elm$core$Maybe$withDefault,
								'',
								$elm$core$List$head(listSub))
						});
				} else {
					return A2(
						$mdgriffith$elm_ui$Element$Input$text,
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Border$innerGlow,
								A3($mdgriffith$elm_ui$Element$rgb255, 235, 107, 76),
								2)
							]),
						{
							label: A2(
								$mdgriffith$elm_ui$Element$Input$labelAbove,
								_List_Nil,
								$mdgriffith$elm_ui$Element$text(elementGraphique.valeur)),
							onChange: appMsgPlayApp.dataToSend(interfaceInteractive),
							placeholder: $elm$core$Maybe$Just(
								A2(
									$mdgriffith$elm_ui$Element$Input$placeholder,
									_List_Nil,
									$mdgriffith$elm_ui$Element$text(elementGraphique.valeur))),
							text: ''
						});
				}
		}
	});
var $author$project$ApplicationPlayer$displayHeaderElement = F2(
	function (appMsgPlayApp, interfaceInteractive) {
		var _v0 = interfaceInteractive.interfaceElement;
		if (_v0.$ === 'Just') {
			var elementGraphiqueList = _v0.a;
			return A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						A3($mdgriffith$elm_ui$Element$rgb255, 51, 51, 51)),
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$Border$roundEach(
						{bottomLeft: 0, bottomRight: 0, topLeft: 20, topRight: 20}),
						$mdgriffith$elm_ui$Element$spacing(60)
					]),
				_Utils_ap(
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$column,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$color(
											A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255)),
											$mdgriffith$elm_ui$Element$Font$size(31),
											$mdgriffith$elm_ui$Element$Font$bold,
											$mdgriffith$elm_ui$Element$Font$center
										]),
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text('Sélection')
										])),
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$color(
											A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255)),
											$mdgriffith$elm_ui$Element$Font$size(31),
											$mdgriffith$elm_ui$Element$Font$bold,
											$mdgriffith$elm_ui$Element$Font$center
										]),
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text('Substances')
										]))
								])),
							A2(
							$mdgriffith$elm_ui$Element$image,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
							{description: 'Header icon', src: 'img/Icons/carres-sequence.png'})
						]),
					_Utils_ap(
						A2(
							$elm$core$List$map,
							function (a) {
								return A3($author$project$ApplicationPlayer$visualizeInterface, a, interfaceInteractive, appMsgPlayApp);
							},
							elementGraphiqueList),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Input$button,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Border$rounded(15),
										$mdgriffith$elm_ui$Element$Background$color(
										A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 0)),
										$mdgriffith$elm_ui$Element$mouseOver(
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$Background$color(
												A3($mdgriffith$elm_ui$Element$rgb255, 226, 89, 55))
											]))
									]),
								{
									label: A2(
										$mdgriffith$elm_ui$Element$paragraph,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$Font$color(
												A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255)),
												$mdgriffith$elm_ui$Element$Font$size(31),
												$mdgriffith$elm_ui$Element$Font$center,
												$mdgriffith$elm_ui$Element$centerX,
												$mdgriffith$elm_ui$Element$centerY
											]),
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$text('APPLIQUER')
											])),
									onPress: $elm$core$Maybe$Just(
										appMsgPlayApp.sendGeste(interfaceInteractive.gesteAssocie))
								})
							]))));
		} else {
			return $mdgriffith$elm_ui$Element$text('No Data');
		}
	});
var $author$project$SubstancePlayer$selectedSubstanceAttribute = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 235, 107, 76)),
		$mdgriffith$elm_ui$Element$centerX,
		$mdgriffith$elm_ui$Element$alignTop,
		$mdgriffith$elm_ui$Element$padding(10)
	]);
var $author$project$SubstancePlayer$displaySelectableSubstance = F4(
	function (substance, subClicker, cancelClick, idList) {
		if (idList.$ === 'Just') {
			var stringList = idList.a;
			switch (substance.$) {
				case 'Relation':
					var substanceRelation = substance.a;
					return A2($elm$core$List$member, substanceRelation.subId, stringList) ? A2(
						$mdgriffith$elm_ui$Element$column,
						_Utils_ap(
							$author$project$SubstancePlayer$selectedSubstanceAttribute,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Events$onClick(
									cancelClick(substanceRelation.subId))
								])),
						_List_fromArray(
							[
								A3($author$project$SubstancePlayer$decorateVideo, substanceRelation.media, 270, 210),
								A2(
								$mdgriffith$elm_ui$Element$paragraph,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										A2($mdgriffith$elm_ui$Element$maximum, 185, $mdgriffith$elm_ui$Element$fill)),
										$mdgriffith$elm_ui$Element$Font$size(14)
									]),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text(substanceRelation.name)
									]))
							])) : A2(
						$mdgriffith$elm_ui$Element$column,
						_Utils_ap(
							$author$project$SubstancePlayer$substanceAttribute,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Events$onClick(
									subClicker(substanceRelation.subId))
								])),
						_List_fromArray(
							[
								A3($author$project$SubstancePlayer$decorateVideo, substanceRelation.media, 270, 210),
								A2(
								$mdgriffith$elm_ui$Element$paragraph,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										A2($mdgriffith$elm_ui$Element$maximum, 185, $mdgriffith$elm_ui$Element$fill)),
										$mdgriffith$elm_ui$Element$Font$size(14)
									]),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text(substanceRelation.name)
									]))
							]));
				case 'Dynamic':
					var substanceDynamic = substance.a;
					return A2($elm$core$List$member, substanceDynamic.subId, stringList) ? A2(
						$mdgriffith$elm_ui$Element$column,
						_Utils_ap(
							$author$project$SubstancePlayer$selectedSubstanceAttribute,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Events$onClick(
									cancelClick(substanceDynamic.subId))
								])),
						_List_fromArray(
							[
								A3($author$project$SubstancePlayer$decorateVideo, substanceDynamic.video, 270, 210),
								A2(
								$mdgriffith$elm_ui$Element$paragraph,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										A2($mdgriffith$elm_ui$Element$maximum, 185, $mdgriffith$elm_ui$Element$fill)),
										$mdgriffith$elm_ui$Element$Font$size(14)
									]),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text(substanceDynamic.name)
									]))
							])) : A2(
						$mdgriffith$elm_ui$Element$column,
						_Utils_ap(
							$author$project$SubstancePlayer$substanceAttribute,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Events$onClick(
									subClicker(substanceDynamic.subId))
								])),
						_List_fromArray(
							[
								A3($author$project$SubstancePlayer$decorateVideo, substanceDynamic.video, 270, 210),
								A2(
								$mdgriffith$elm_ui$Element$paragraph,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										A2($mdgriffith$elm_ui$Element$maximum, 185, $mdgriffith$elm_ui$Element$fill)),
										$mdgriffith$elm_ui$Element$Font$size(14)
									]),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text(substanceDynamic.name)
									]))
							]));
				default:
					var substancePotential = substance.a;
					return A2($elm$core$List$member, substancePotential.subId, stringList) ? A2(
						$mdgriffith$elm_ui$Element$column,
						_Utils_ap(
							$author$project$SubstancePlayer$selectedSubstanceAttribute,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Events$onClick(
									cancelClick(substancePotential.subId))
								])),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$image,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										A2($mdgriffith$elm_ui$Element$maximum, 270, $mdgriffith$elm_ui$Element$fill)),
										$mdgriffith$elm_ui$Element$height(
										A2($mdgriffith$elm_ui$Element$maximum, 210, $mdgriffith$elm_ui$Element$fill))
									]),
								{description: 'Potential', src: substancePotential.image}),
								A2(
								$mdgriffith$elm_ui$Element$paragraph,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										A2($mdgriffith$elm_ui$Element$maximum, 185, $mdgriffith$elm_ui$Element$fill)),
										$mdgriffith$elm_ui$Element$Font$size(14)
									]),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text(substancePotential.name)
									]))
							])) : A2(
						$mdgriffith$elm_ui$Element$column,
						_Utils_ap(
							$author$project$SubstancePlayer$substanceAttribute,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Events$onClick(
									subClicker(substancePotential.subId))
								])),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$image,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										A2($mdgriffith$elm_ui$Element$maximum, 270, $mdgriffith$elm_ui$Element$fill)),
										$mdgriffith$elm_ui$Element$height(
										A2($mdgriffith$elm_ui$Element$maximum, 210, $mdgriffith$elm_ui$Element$fill))
									]),
								{description: 'Potential', src: substancePotential.image}),
								A2(
								$mdgriffith$elm_ui$Element$paragraph,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										A2($mdgriffith$elm_ui$Element$maximum, 185, $mdgriffith$elm_ui$Element$fill)),
										$mdgriffith$elm_ui$Element$Font$size(14)
									]),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text(substancePotential.name)
									]))
							]));
			}
		} else {
			switch (substance.$) {
				case 'Relation':
					var substanceRelation = substance.a;
					return A2(
						$mdgriffith$elm_ui$Element$column,
						_Utils_ap(
							$author$project$SubstancePlayer$substanceAttribute,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Events$onClick(
									subClicker(substanceRelation.subId))
								])),
						_List_fromArray(
							[
								A3($author$project$SubstancePlayer$decorateVideo, substanceRelation.media, 270, 210),
								A2(
								$mdgriffith$elm_ui$Element$paragraph,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										A2($mdgriffith$elm_ui$Element$maximum, 185, $mdgriffith$elm_ui$Element$fill)),
										$mdgriffith$elm_ui$Element$Font$size(14)
									]),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text(substanceRelation.name)
									]))
							]));
				case 'Dynamic':
					var substanceDynamic = substance.a;
					return A2(
						$mdgriffith$elm_ui$Element$column,
						_Utils_ap(
							$author$project$SubstancePlayer$substanceAttribute,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Events$onClick(
									subClicker(substanceDynamic.subId))
								])),
						_List_fromArray(
							[
								A3($author$project$SubstancePlayer$decorateVideo, substanceDynamic.video, 270, 210),
								A2(
								$mdgriffith$elm_ui$Element$paragraph,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										A2($mdgriffith$elm_ui$Element$maximum, 185, $mdgriffith$elm_ui$Element$fill)),
										$mdgriffith$elm_ui$Element$Font$size(14)
									]),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text(substanceDynamic.name)
									]))
							]));
				default:
					var substancePotential = substance.a;
					return A2(
						$mdgriffith$elm_ui$Element$column,
						_Utils_ap(
							$author$project$SubstancePlayer$substanceAttribute,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Events$onClick(
									subClicker(substancePotential.subId))
								])),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$image,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										A2($mdgriffith$elm_ui$Element$maximum, 270, $mdgriffith$elm_ui$Element$fill)),
										$mdgriffith$elm_ui$Element$height(
										A2($mdgriffith$elm_ui$Element$maximum, 210, $mdgriffith$elm_ui$Element$fill))
									]),
								{description: 'Potential', src: substancePotential.image}),
								A2(
								$mdgriffith$elm_ui$Element$paragraph,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width(
										A2($mdgriffith$elm_ui$Element$maximum, 185, $mdgriffith$elm_ui$Element$fill)),
										$mdgriffith$elm_ui$Element$Font$size(14)
									]),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text(substancePotential.name)
									]))
							]));
			}
		}
	});
var $author$project$SubstancePlayer$rowSubstanceAttribute = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$spacing(30),
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255))
	]);
var $author$project$SubstancePlayer$displayInteractiveSubstanceList = F4(
	function (substanceList, clickEventHandler, cancelEventHandler, idList) {
		return A2(
			$mdgriffith$elm_ui$Element$wrappedRow,
			$author$project$SubstancePlayer$rowSubstanceAttribute,
			A2(
				$elm$core$List$map,
				function (a) {
					return A4($author$project$SubstancePlayer$displaySelectableSubstance, a, clickEventHandler, cancelEventHandler, idList);
				},
				substanceList));
	});
var $author$project$ApplicationPlayer$mainContainerAttributes2 = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
		$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
		A2($mdgriffith$elm_ui$Element$spacingXY, 30, 0),
		$mdgriffith$elm_ui$Element$padding(20),
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255)),
		$mdgriffith$elm_ui$Element$Border$roundEach(
		{bottomLeft: 15, bottomRight: 15, topLeft: 0, topRight: 0}),
		$mdgriffith$elm_ui$Element$Border$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229)),
		$mdgriffith$elm_ui$Element$Border$width(1),
		$mdgriffith$elm_ui$Element$scrollbars
	]);
var $author$project$ApplicationPlayer$displayInteractiveElement = F2(
	function (appMsgPlayApp, substanceInteractive) {
		var _v0 = substanceInteractive.substanceDisplay;
		if (_v0.$ === 'Just') {
			var substanceGraphElList = _v0.a;
			return A2(
				$mdgriffith$elm_ui$Element$column,
				_Utils_ap(
					$author$project$ApplicationPlayer$mainContainerAttributes2,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Events$onMouseLeave(
							appMsgPlayApp.sendGeste(substanceInteractive.gesteAssocie))
						])),
				_List_fromArray(
					[
						A4(
						$author$project$SubstancePlayer$displayInteractiveSubstanceList,
						substanceGraphElList,
						appMsgPlayApp.sendMsgAcquisition(substanceInteractive),
						appMsgPlayApp.cancelSelection(substanceInteractive),
						substanceInteractive.gesteAssocie.filtre.idSubstance)
					]));
		} else {
			return $mdgriffith$elm_ui$Element$text('');
		}
	});
var $author$project$ApplicationPlayer$displayInterfaceElement = F2(
	function (appMsgPlayApp, interfaceInteractive) {
		var _v0 = interfaceInteractive.interfaceElement;
		if (_v0.$ === 'Just') {
			var elementGraphiqueList = _v0.a;
			return A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[$mdgriffith$elm_ui$Element$centerX]),
				A2(
					$elm$core$List$map,
					function (a) {
						return A3($author$project$ApplicationPlayer$visualizeInterface, a, interfaceInteractive, appMsgPlayApp);
					},
					elementGraphiqueList));
		} else {
			return $mdgriffith$elm_ui$Element$text('No Data');
		}
	});
var $elm$html$Html$Attributes$autoplay = $elm$html$Html$Attributes$boolProperty('autoplay');
var $author$project$SubstancePlayer$columnZoomAttribute = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$padding(30),
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 0)),
		$mdgriffith$elm_ui$Element$centerX,
		$mdgriffith$elm_ui$Element$centerY,
		$mdgriffith$elm_ui$Element$Border$rounded(20),
		$mdgriffith$elm_ui$Element$spacing(10)
	]);
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $mdgriffith$elm_ui$Element$Background$tiledX = function (src) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		A2($elm$virtual_dom$VirtualDom$style, 'background', 'url(\"' + (src + '\") repeat-x')));
};
var $author$project$SubstancePlayer$zoomedSubstanceTextAttribute = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Font$size(20),
		$mdgriffith$elm_ui$Element$Font$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255))
	]);
var $author$project$SubstancePlayer$displaySubstanceZoomed = F7(
	function (substance, closeEvent, recordEvent, startSaving, dimension, isRecording, isSaving) {
		switch (substance.$) {
			case 'Relation':
				var substanceRelation = substance.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					$author$project$SubstancePlayer$columnZoomAttribute,
					_List_fromArray(
						[
							A3(
							$author$project$SubstancePlayer$decorateVideo,
							substanceRelation.media,
							$elm$core$Basics$round(dimension.a * 1.0),
							$elm$core$Basics$round(dimension.b * 1.0)),
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$alignBottom,
									$mdgriffith$elm_ui$Element$spacing(20)
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$zoomedSubstanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceRelation.name)
										])),
									A2(
									$mdgriffith$elm_ui$Element$Input$button,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignRight, $mdgriffith$elm_ui$Element$centerY]),
									{
										label: A2(
											$mdgriffith$elm_ui$Element$paragraph,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$Font$color(
													A3($mdgriffith$elm_ui$Element$rgb255, 107, 107, 107)),
													$mdgriffith$elm_ui$Element$Font$size(30),
													$mdgriffith$elm_ui$Element$Font$family(
													_List_fromArray(
														[
															$mdgriffith$elm_ui$Element$Font$typeface('Lucida Grande'),
															$mdgriffith$elm_ui$Element$Font$sansSerif
														])),
													$mdgriffith$elm_ui$Element$Font$center,
													$mdgriffith$elm_ui$Element$mouseOver(
													_List_fromArray(
														[
															$mdgriffith$elm_ui$Element$Font$color(
															A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255))
														]))
												]),
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$text('X')
												])),
										onPress: $elm$core$Maybe$Just(closeEvent)
									})
								]))
						]));
			case 'Dynamic':
				var substanceDynamic = substance.a;
				return isRecording ? A2(
					$mdgriffith$elm_ui$Element$column,
					$author$project$SubstancePlayer$columnZoomAttribute,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$spacing(10)
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$width(
											$mdgriffith$elm_ui$Element$fillPortion(2))
										]),
									A3(
										$author$project$SubstancePlayer$decorateVideo,
										substanceDynamic.video,
										$elm$core$Basics$round(dimension.a * 0.6),
										$elm$core$Basics$round(dimension.b * 1.0))),
									A2(
									$mdgriffith$elm_ui$Element$column,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$spacing(10)
										]),
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$el,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$width(
													$mdgriffith$elm_ui$Element$fillPortion(1))
												]),
											$mdgriffith$elm_ui$Element$html(
												A2(
													$elm$html$Html$video,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$width(
															$elm$core$Basics$round(dimension.a * 0.4)),
															$elm$html$Html$Attributes$height(
															$elm$core$Basics$round(dimension.b * 1.0)),
															$elm$html$Html$Attributes$id('elmVid'),
															$elm$html$Html$Attributes$autoplay(true)
														]),
													_List_Nil))),
											A2(
											$mdgriffith$elm_ui$Element$el,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$alignBottom,
													$mdgriffith$elm_ui$Element$Background$color(
													A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229)),
													$mdgriffith$elm_ui$Element$height(
													$mdgriffith$elm_ui$Element$px(50)),
													$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
												]),
											A2(
												$mdgriffith$elm_ui$Element$el,
												_List_fromArray(
													[
														$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
														$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
														isSaving ? $mdgriffith$elm_ui$Element$Background$tiledX('img/Media/gif-record.gif') : $mdgriffith$elm_ui$Element$Background$tiledX('img/Media/sinus.png'),
														$mdgriffith$elm_ui$Element$inFront(
														A2(
															$mdgriffith$elm_ui$Element$Input$button,
															_List_fromArray(
																[
																	$mdgriffith$elm_ui$Element$centerX,
																	$mdgriffith$elm_ui$Element$centerY,
																	$mdgriffith$elm_ui$Element$padding(10),
																	$mdgriffith$elm_ui$Element$Border$rounded(100),
																	$mdgriffith$elm_ui$Element$Border$width(2),
																	$mdgriffith$elm_ui$Element$Border$color(
																	A3($mdgriffith$elm_ui$Element$rgb255, 160, 160, 160)),
																	$mdgriffith$elm_ui$Element$Background$color(
																	A3($mdgriffith$elm_ui$Element$rgb255, 204, 204, 204)),
																	$mdgriffith$elm_ui$Element$mouseOver(
																	_List_fromArray(
																		[
																			$mdgriffith$elm_ui$Element$Background$color(
																			A3($mdgriffith$elm_ui$Element$rgb, 255, 255, 255))
																		]))
																]),
															{
																label: A2(
																	$mdgriffith$elm_ui$Element$el,
																	_List_fromArray(
																		[
																			$mdgriffith$elm_ui$Element$width(
																			$mdgriffith$elm_ui$Element$px(25)),
																			$mdgriffith$elm_ui$Element$height(
																			$mdgriffith$elm_ui$Element$px(25)),
																			$mdgriffith$elm_ui$Element$Background$color(
																			A3($mdgriffith$elm_ui$Element$rgb255, 158, 11, 15)),
																			$mdgriffith$elm_ui$Element$centerX,
																			$mdgriffith$elm_ui$Element$centerY
																		]),
																	$mdgriffith$elm_ui$Element$text('')),
																onPress: $elm$core$Maybe$Just(startSaving)
															}))
													]),
												$mdgriffith$elm_ui$Element$text('')))
										]))
								])),
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$alignBottom
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$zoomedSubstanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceDynamic.name)
										])),
									A2(
									$mdgriffith$elm_ui$Element$Input$button,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignRight, $mdgriffith$elm_ui$Element$centerY]),
									{
										label: A2(
											$mdgriffith$elm_ui$Element$image,
											_List_Nil,
											{description: 'Record Mode', src: 'img/Icons/icon-record-off.png'}),
										onPress: $elm$core$Maybe$Just(recordEvent)
									}),
									A2(
									$mdgriffith$elm_ui$Element$Input$button,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignRight, $mdgriffith$elm_ui$Element$centerY]),
									{
										label: A2(
											$mdgriffith$elm_ui$Element$paragraph,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$Font$color(
													A3($mdgriffith$elm_ui$Element$rgb255, 107, 107, 107)),
													$mdgriffith$elm_ui$Element$Font$size(30),
													$mdgriffith$elm_ui$Element$Font$family(
													_List_fromArray(
														[
															$mdgriffith$elm_ui$Element$Font$typeface('Lucida Grande'),
															$mdgriffith$elm_ui$Element$Font$sansSerif
														])),
													$mdgriffith$elm_ui$Element$Font$center,
													$mdgriffith$elm_ui$Element$mouseOver(
													_List_fromArray(
														[
															$mdgriffith$elm_ui$Element$Font$color(
															A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255))
														]))
												]),
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$text('X')
												])),
										onPress: $elm$core$Maybe$Just(closeEvent)
									})
								]))
						])) : A2(
					$mdgriffith$elm_ui$Element$column,
					$author$project$SubstancePlayer$columnZoomAttribute,
					_List_fromArray(
						[
							A3(
							$author$project$SubstancePlayer$decorateVideo,
							substanceDynamic.video,
							$elm$core$Basics$round(dimension.a * 1.0),
							$elm$core$Basics$round(dimension.b * 1.0)),
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$alignBottom,
									$mdgriffith$elm_ui$Element$spacing(10)
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$zoomedSubstanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substanceDynamic.name)
										])),
									A2(
									$mdgriffith$elm_ui$Element$Input$button,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignRight, $mdgriffith$elm_ui$Element$centerY]),
									{
										label: A2(
											$mdgriffith$elm_ui$Element$image,
											_List_Nil,
											{description: 'Record Mode', src: 'img/Icons/icon-record.png'}),
										onPress: $elm$core$Maybe$Just(recordEvent)
									}),
									A2(
									$mdgriffith$elm_ui$Element$Input$button,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignRight, $mdgriffith$elm_ui$Element$centerY]),
									{
										label: A2(
											$mdgriffith$elm_ui$Element$paragraph,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$Font$color(
													A3($mdgriffith$elm_ui$Element$rgb255, 107, 107, 107)),
													$mdgriffith$elm_ui$Element$Font$size(30),
													$mdgriffith$elm_ui$Element$Font$family(
													_List_fromArray(
														[
															$mdgriffith$elm_ui$Element$Font$typeface('Lucida Grande'),
															$mdgriffith$elm_ui$Element$Font$sansSerif
														])),
													$mdgriffith$elm_ui$Element$Font$center,
													$mdgriffith$elm_ui$Element$mouseOver(
													_List_fromArray(
														[
															$mdgriffith$elm_ui$Element$Font$color(
															A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255))
														]))
												]),
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$text('X')
												])),
										onPress: $elm$core$Maybe$Just(closeEvent)
									})
								]))
						]));
			default:
				var substancePotential = substance.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					$author$project$SubstancePlayer$columnZoomAttribute,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$image,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width(
									A2(
										$mdgriffith$elm_ui$Element$maximum,
										$elm$core$Basics$round(dimension.a * 1.0),
										$mdgriffith$elm_ui$Element$fill)),
									$mdgriffith$elm_ui$Element$height(
									A2(
										$mdgriffith$elm_ui$Element$maximum,
										$elm$core$Basics$round(dimension.b * 1.0),
										$mdgriffith$elm_ui$Element$fill))
								]),
							{description: 'Potential', src: substancePotential.image}),
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$alignBottom
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$paragraph,
									$author$project$SubstancePlayer$zoomedSubstanceTextAttribute,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$text(substancePotential.name)
										])),
									A2(
									$mdgriffith$elm_ui$Element$Input$button,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignRight, $mdgriffith$elm_ui$Element$centerY]),
									{
										label: A2(
											$mdgriffith$elm_ui$Element$paragraph,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$Font$color(
													A3($mdgriffith$elm_ui$Element$rgb255, 107, 107, 107)),
													$mdgriffith$elm_ui$Element$Font$size(30),
													$mdgriffith$elm_ui$Element$Font$family(
													_List_fromArray(
														[
															$mdgriffith$elm_ui$Element$Font$typeface('Lucida Grande'),
															$mdgriffith$elm_ui$Element$Font$sansSerif
														])),
													$mdgriffith$elm_ui$Element$Font$center,
													$mdgriffith$elm_ui$Element$mouseOver(
													_List_fromArray(
														[
															$mdgriffith$elm_ui$Element$Font$color(
															A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255))
														]))
												]),
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$text('X')
												])),
										onPress: $elm$core$Maybe$Just(closeEvent)
									})
								]))
						]));
		}
	});
var $author$project$ApplicationPlayer$mainContainerAttributes = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
		$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
		A2($mdgriffith$elm_ui$Element$spacingXY, 30, 0),
		$mdgriffith$elm_ui$Element$padding(20),
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255)),
		$mdgriffith$elm_ui$Element$Border$rounded(15),
		$mdgriffith$elm_ui$Element$Border$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229)),
		$mdgriffith$elm_ui$Element$Border$width(1)
	]);
var $author$project$ApplicationPlayer$displayChosenApp = F2(
	function (appMsgPlayApp, appInfo) {
		var _v0 = appMsgPlayApp.zoomedSubtance;
		if (_v0.$ === 'Just') {
			var substanceZoomed = _v0.a;
			var _v1 = appMsgPlayApp.viewPortInfo;
			if (_v1.$ === 'Just') {
				var viewInfo = _v1.a;
				return A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
						]),
					A7(
						$author$project$SubstancePlayer$displaySubstanceZoomed,
						substanceZoomed,
						appMsgPlayApp.cancelZoom,
						appMsgPlayApp.recordChosen,
						appMsgPlayApp.startSavingMime,
						_Utils_Tuple2(viewInfo.viewport.width - 240, viewInfo.viewport.height - 310),
						appMsgPlayApp.recordZoom,
						appMsgPlayApp.record2File));
			} else {
				return A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
						]),
					A2(
						$mdgriffith$elm_ui$Element$Input$button,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$alignRight, $mdgriffith$elm_ui$Element$alignBottom]),
						{
							label: A2(
								$mdgriffith$elm_ui$Element$paragraph,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Font$color(
										A3($mdgriffith$elm_ui$Element$rgb255, 107, 107, 107)),
										$mdgriffith$elm_ui$Element$Font$size(30),
										$mdgriffith$elm_ui$Element$Font$family(
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$Font$typeface('Lucida Grande'),
												$mdgriffith$elm_ui$Element$Font$sansSerif
											])),
										$mdgriffith$elm_ui$Element$Font$center,
										$mdgriffith$elm_ui$Element$mouseOver(
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$Font$color(
												A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255))
											]))
									]),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text('X')
									])),
							onPress: $elm$core$Maybe$Just(appMsgPlayApp.cancelZoom)
						}));
			}
		} else {
			var _v2 = appMsgPlayApp.subContainerList;
			if (_v2.$ === 'Just') {
				var contList = _v2.a;
				var _v3 = appMsgPlayApp.interfaceList;
				if (_v3.$ === 'Nothing') {
					return A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$padding(50)
							]),
						A2(
							$mdgriffith$elm_ui$Element$row,
							$author$project$ApplicationPlayer$mainContainerAttributes,
							A2(
								$elm$core$List$map,
								function (a) {
									return A2($author$project$ApplicationPlayer$displayContainerElement, appMsgPlayApp, a);
								},
								contList)));
				} else {
					var interList = _v3.a;
					return A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$padding(50)
							]),
						A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$ApplicationPlayer$mainContainerAttributes,
							A2(
								$mdgriffith$elm_ui$Element$row,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$centerX,
										$mdgriffith$elm_ui$Element$onRight(
										A2(
											$mdgriffith$elm_ui$Element$row,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$centerX,
													$mdgriffith$elm_ui$Element$alignTop,
													$mdgriffith$elm_ui$Element$height(
													$mdgriffith$elm_ui$Element$px(140))
												]),
											A2(
												$elm$core$List$map,
												function (a) {
													return A2($author$project$ApplicationPlayer$displayInterfaceElement, appMsgPlayApp, a);
												},
												interList)))
									]),
								A2(
									$elm$core$List$map,
									function (a) {
										return A2($author$project$ApplicationPlayer$displayContainerElement, appMsgPlayApp, a);
									},
									contList))));
				}
			} else {
				var _v4 = appMsgPlayApp.subInterList;
				if (_v4.$ === 'Nothing') {
					var _v5 = appMsgPlayApp.interfaceList;
					if (_v5.$ === 'Nothing') {
						return $mdgriffith$elm_ui$Element$text('No data to display');
					} else {
						var interList = _v5.a;
						return A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$spacing(30),
									$mdgriffith$elm_ui$Element$padding(75)
								]),
							A2(
								$elm$core$List$map,
								function (a) {
									return A2($author$project$ApplicationPlayer$displayInterfaceElement, appMsgPlayApp, a);
								},
								interList));
					}
				} else {
					var subInterList = _v4.a;
					var _v6 = appMsgPlayApp.interfaceList;
					if (_v6.$ === 'Nothing') {
						return A2(
							$mdgriffith$elm_ui$Element$column,
							$author$project$ApplicationPlayer$mainContainerAttributes,
							A2(
								$elm$core$List$map,
								function (a) {
									return A2($author$project$ApplicationPlayer$displayInteractiveElement, appMsgPlayApp, a);
								},
								subInterList));
					} else {
						var interList = _v6.a;
						return A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$padding(50)
								]),
							_Utils_ap(
								A2(
									$elm$core$List$map,
									function (a) {
										return A2($author$project$ApplicationPlayer$displayHeaderElement, appMsgPlayApp, a);
									},
									interList),
								A2(
									$elm$core$List$map,
									function (a) {
										return A2($author$project$ApplicationPlayer$displayInteractiveElement, appMsgPlayApp, a);
									},
									subInterList)));
					}
				}
			}
		}
	});
var $author$project$SubstancePlayer$displayErrorMsg = function (errorHttp) {
	switch (errorHttp.$) {
		case 'BadUrl':
			var stringString = errorHttp.a;
			return 'Mauvaise adresse';
		case 'Timeout':
			return '';
		case 'NetworkError':
			return 'Vérifier le réseau Internet et reccommencer';
		case 'BadStatus':
			var intBasics = errorHttp.a;
			return 'BS1: Erreur de connexion';
		default:
			var stringString = errorHttp.a;
			return 'BB1: Erreur de donnée';
	}
};
var $author$project$ApplicationCreator$developperAppCreer = F2(
	function (appType, elmMsgElementEdited) {
		switch (appType.$) {
			case 'DidactiqueModule':
				return A3(
					$author$project$ApplicationPlayer$afficherInterfaceSelection,
					'https://storage.googleapis.com/lucascet-data/LucasPlateforme/Application/dictionnaire.png',
					'Créer une Application Didactique',
					elmMsgElementEdited.createNewApp(
						$author$project$ApplicationCreator$Didactique($elm$core$Maybe$Nothing)));
			case 'ProprietaireModule':
				return A3(
					$author$project$ApplicationPlayer$afficherInterfaceSelection,
					'https://storage.googleapis.com/lucascet-data/LucasPlateforme/Application/proprietaire.jfif',
					'Créer une App Proprio',
					elmMsgElementEdited.createNewApp(
						$author$project$ApplicationCreator$Proprietaire($elm$core$Maybe$Nothing)));
			case 'LocataireModule':
				return A3(
					$author$project$ApplicationPlayer$afficherInterfaceSelection,
					'https://storage.googleapis.com/lucascet-data/LucasPlateforme/Application/Locataire.png',
					'Créer une App Locataire',
					elmMsgElementEdited.createNewApp(
						$author$project$ApplicationCreator$Locataire($elm$core$Maybe$Nothing)));
			default:
				return A3(
					$author$project$ApplicationPlayer$afficherInterfaceSelection,
					'/img/potentielle.jpg',
					'Créer une App Proprio',
					elmMsgElementEdited.createNewApp($author$project$ApplicationCreator$Absent));
		}
	});
var $author$project$ApplicationCreator$displayProprioElement = F5(
	function (canvasRdy, substance, inputSubstance, title, inputTitle) {
		if (canvasRdy.$ === 'Just') {
			var eleMsg = canvasRdy.a;
			return A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$Border$innerGlow,
						A3($mdgriffith$elm_ui$Element$rgb255, 105, 55, 200),
						5),
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$padding(25),
						$mdgriffith$elm_ui$Element$spaceEvenly
					]),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$Input$text,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
						{
							label: A2(
								$mdgriffith$elm_ui$Element$Input$labelAbove,
								_List_Nil,
								$mdgriffith$elm_ui$Element$text(title)),
							onChange: inputTitle,
							placeholder: $elm$core$Maybe$Just(
								A2(
									$mdgriffith$elm_ui$Element$Input$placeholder,
									_List_Nil,
									$mdgriffith$elm_ui$Element$text('Titre Substance:'))),
							text: title
						}),
						A3(
						$author$project$Graphic_Element$displayCanvasSubstance,
						substance,
						inputSubstance,
						_Utils_Tuple2(800, 800)),
						A2(
						$mdgriffith$elm_ui$Element$Input$button,
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$Border$innerGlow,
								A3($mdgriffith$elm_ui$Element$rgb255, 225, 155, 2),
								2),
								$mdgriffith$elm_ui$Element$centerX,
								$mdgriffith$elm_ui$Element$centerY
							]),
						{
							label: $mdgriffith$elm_ui$Element$text('Appuyer pour enregistrer'),
							onPress: canvasRdy
						})
					]));
		} else {
			return A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$padding(25),
						$mdgriffith$elm_ui$Element$spaceEvenly
					]),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$Input$text,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
						{
							label: A2(
								$mdgriffith$elm_ui$Element$Input$labelAbove,
								_List_Nil,
								$mdgriffith$elm_ui$Element$text(title)),
							onChange: inputTitle,
							placeholder: $elm$core$Maybe$Just(
								A2(
									$mdgriffith$elm_ui$Element$Input$placeholder,
									_List_Nil,
									$mdgriffith$elm_ui$Element$text('Titre Substance:'))),
							text: title
						}),
						A3(
						$author$project$Graphic_Element$displayCanvasSubstance,
						substance,
						inputSubstance,
						_Utils_Tuple2(800, 800))
					]));
		}
	});
var $author$project$ApplicationCreator$displayModule = function (elmMsgElementEdited) {
	var _v0 = elmMsgElementEdited.activeModule;
	switch (_v0.$) {
		case 'Absent':
			var _v1 = elmMsgElementEdited.appState.remainingApplication;
			if (_v1.$ === 'Nothing') {
				var _v2 = elmMsgElementEdited.appState.activeApplication;
				if (_v2.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Element$text('Aucune application disponible');
				} else {
					var activeList = _v2.a;
					return $mdgriffith$elm_ui$Element$text('Aucune application disponible');
				}
			} else {
				var remainList = _v1.a;
				var _v3 = elmMsgElementEdited.appState.activeApplication;
				if (_v3.$ === 'Nothing') {
					return A2(
						$mdgriffith$elm_ui$Element$row,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$padding(25),
								$mdgriffith$elm_ui$Element$spaceEvenly,
								$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
							]),
						A2(
							$elm$core$List$map,
							function (a) {
								return A2($author$project$ApplicationCreator$developperAppCreer, a, elmMsgElementEdited);
							},
							remainList));
				} else {
					var activeList = _v3.a;
					return A2(
						$mdgriffith$elm_ui$Element$row,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$padding(25),
								$mdgriffith$elm_ui$Element$spaceEvenly,
								$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
							]),
						A2(
							$elm$core$List$map,
							function (a) {
								return A2($author$project$ApplicationCreator$developperAppCreer, a, elmMsgElementEdited);
							},
							remainList));
				}
			}
		case 'Didactique':
			var didCan = _v0.a;
			return $elm_community$maybe_extra$Maybe$Extra$isJust(didCan) ? A5(
				$author$project$ApplicationCreator$displayProprioElement,
				$elm$core$Maybe$Just(
					elmMsgElementEdited.initializeApp(
						$author$project$ApplicationCreator$Didactique(didCan))),
				A2(
					$elm$core$Maybe$withDefault,
					$author$project$SubstancePlayer$Potential(
						A3($author$project$SubstancePlayer$SubstancePotential, '0', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs', 'Nouvelle Substance')),
					didCan),
				A2(elmMsgElementEdited.selectSequence, '', ''),
				A2($elm$core$Maybe$withDefault, 'Application Didactique', elmMsgElementEdited.title),
				elmMsgElementEdited.enterTitle) : A5(
				$author$project$ApplicationCreator$displayProprioElement,
				$elm$core$Maybe$Nothing,
				A2(
					$elm$core$Maybe$withDefault,
					$author$project$SubstancePlayer$Potential(
						A3($author$project$SubstancePlayer$SubstancePotential, '0', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs', 'Nouvelle Substance')),
					didCan),
				A2(elmMsgElementEdited.selectSequence, '', ''),
				A2($elm$core$Maybe$withDefault, 'Substance Potentielle', elmMsgElementEdited.title),
				elmMsgElementEdited.enterTitle);
		case 'Proprietaire':
			var prop = _v0.a;
			return $elm_community$maybe_extra$Maybe$Extra$isJust(prop) ? A5(
				$author$project$ApplicationCreator$displayProprioElement,
				$elm$core$Maybe$Just(
					elmMsgElementEdited.initializeApp(
						$author$project$ApplicationCreator$Proprietaire(prop))),
				A2(
					$elm$core$Maybe$withDefault,
					$author$project$SubstancePlayer$Potential(
						A3($author$project$SubstancePlayer$SubstancePotential, '0', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs', 'Nouvelle Substance')),
					prop),
				A2(elmMsgElementEdited.selectSequence, '', ''),
				A2($elm$core$Maybe$withDefault, 'Substance Potentielle', elmMsgElementEdited.title),
				elmMsgElementEdited.enterTitle) : A5(
				$author$project$ApplicationCreator$displayProprioElement,
				$elm$core$Maybe$Nothing,
				A2(
					$elm$core$Maybe$withDefault,
					$author$project$SubstancePlayer$Potential(
						A3($author$project$SubstancePlayer$SubstancePotential, '0', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs', 'Nouvelle Substance')),
					prop),
				A2(elmMsgElementEdited.selectSequence, '', ''),
				A2($elm$core$Maybe$withDefault, 'Substance Potentielle', elmMsgElementEdited.title),
				elmMsgElementEdited.enterTitle);
		default:
			var prop = _v0.a;
			return $elm_community$maybe_extra$Maybe$Extra$isJust(prop) ? A5(
				$author$project$ApplicationCreator$displayProprioElement,
				$elm$core$Maybe$Just(
					elmMsgElementEdited.initializeApp(
						$author$project$ApplicationCreator$Locataire(prop))),
				A2(
					$elm$core$Maybe$withDefault,
					$author$project$SubstancePlayer$Potential(
						A3($author$project$SubstancePlayer$SubstancePotential, '0', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs', 'Nouvelle Substance')),
					prop),
				A2(elmMsgElementEdited.selectSequence, '', ''),
				A2($elm$core$Maybe$withDefault, 'Substance Potentielle', elmMsgElementEdited.title),
				elmMsgElementEdited.enterTitle) : A5(
				$author$project$ApplicationCreator$displayProprioElement,
				$elm$core$Maybe$Nothing,
				A2(
					$elm$core$Maybe$withDefault,
					$author$project$SubstancePlayer$Potential(
						A3($author$project$SubstancePlayer$SubstancePotential, '0', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs', 'Nouvelle Substance')),
					prop),
				A2(elmMsgElementEdited.selectSequence, '', ''),
				A2($elm$core$Maybe$withDefault, 'Substance Potentielle', elmMsgElementEdited.title),
				elmMsgElementEdited.enterTitle);
	}
};
var $author$project$SubstancePlayer$displaySubstancePlain = F2(
	function (substance, dimension) {
		switch (substance.$) {
			case 'Relation':
				var substanceRelation = substance.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					$author$project$SubstancePlayer$columnAttribute,
					_List_fromArray(
						[
							A3(
							$author$project$SubstancePlayer$decorateVideo,
							substanceRelation.media,
							$elm$core$Basics$round(dimension.a * 1.0),
							$elm$core$Basics$round(dimension.b * 1.0)),
							A2(
							$mdgriffith$elm_ui$Element$paragraph,
							_List_Nil,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$text(substanceRelation.name)
								]))
						]));
			case 'Dynamic':
				var substanceDynamic = substance.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					$author$project$SubstancePlayer$columnAttribute,
					_List_fromArray(
						[
							A3(
							$author$project$SubstancePlayer$decorateVideo,
							substanceDynamic.video,
							$elm$core$Basics$round(dimension.a * 1.0),
							$elm$core$Basics$round(dimension.b * 1.0)),
							A2(
							$mdgriffith$elm_ui$Element$paragraph,
							_List_Nil,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$text(substanceDynamic.name)
								]))
						]));
			default:
				var substancePotential = substance.a;
				return A2(
					$mdgriffith$elm_ui$Element$image,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width(
							A2($mdgriffith$elm_ui$Element$maximum, 400, $mdgriffith$elm_ui$Element$fill)),
							$mdgriffith$elm_ui$Element$height(
							A2($mdgriffith$elm_ui$Element$maximum, 400, $mdgriffith$elm_ui$Element$fill))
						]),
					{description: 'Potential', src: substancePotential.image});
		}
	});
var $author$project$SubstancePlayer$visualizeLienSubstance = F2(
	function (substanceLiee, dimension) {
		switch (substanceLiee.$) {
			case 'SubLiee':
				var principale = substanceLiee.a;
				return A2(
					$mdgriffith$elm_ui$Element$row,
					$author$project$SubstancePlayer$rowAttribute,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$alignTop,
									$mdgriffith$elm_ui$Element$width(
									$mdgriffith$elm_ui$Element$fillPortion(1))
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$column,
									$author$project$SubstancePlayer$gradientEffect,
									_List_fromArray(
										[
											A2($author$project$SubstancePlayer$displaySubstancePlain, principale, dimension)
										]))
								]))
						]));
			case 'Error':
				var err = substanceLiee.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$paragraph,
							_List_Nil,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$text(err)
								]))
						]));
			default:
				var str = substanceLiee.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$paragraph,
							_List_Nil,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$text('Error LCA-4S Can\'t link substance:' + str)
								]))
						]));
		}
	});
var $author$project$SubstancePlayer$displayPremierLienSubstance = F2(
	function (substance, dimension) {
		switch (substance.$) {
			case 'Relation':
				var substanceRelation = substance.a;
				return A2($author$project$SubstancePlayer$visualizeLienSubstance, substanceRelation.substance1, dimension);
			case 'Dynamic':
				var substanceDynamic = substance.a;
				return A2($author$project$SubstancePlayer$visualizeLienSubstance, substanceDynamic.principal, dimension);
			default:
				var substancePotential = substance.a;
				return $mdgriffith$elm_ui$Element$text('Pas d\'enfant');
		}
	});
var $author$project$SubstancePlayer$displaySecondLienSubstance = F2(
	function (substance, dimension) {
		switch (substance.$) {
			case 'Relation':
				var substanceRelation = substance.a;
				return A2($author$project$SubstancePlayer$visualizeLienSubstance, substanceRelation.substance2, dimension);
			case 'Dynamic':
				var substanceDynamic = substance.a;
				return $mdgriffith$elm_ui$Element$text('Pas d\'enfant');
			default:
				var substancePotential = substance.a;
				return $mdgriffith$elm_ui$Element$text('Pas d\'enfant');
		}
	});
var $author$project$SubstancePlayer$displaySubstanceStub = F3(
	function (substance, subClicker, dimension) {
		switch (substance.$) {
			case 'Relation':
				var substanceRelation = substance.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					_Utils_ap(
						$author$project$SubstancePlayer$columnAttribute,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Events$onClick(
								subClicker(substance))
							])),
					_List_fromArray(
						[
							A3(
							$author$project$SubstancePlayer$decorateVideo,
							substanceRelation.media,
							$elm$core$Basics$round(dimension.a * 1.2),
							$elm$core$Basics$round(dimension.b * 1.2)),
							A2(
							$mdgriffith$elm_ui$Element$paragraph,
							_List_Nil,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$text(substanceRelation.name)
								]))
						]));
			case 'Dynamic':
				var substanceDynamic = substance.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					_Utils_ap(
						$author$project$SubstancePlayer$columnAttribute,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Events$onClick(
								subClicker(substance))
							])),
					_List_fromArray(
						[
							A3(
							$author$project$SubstancePlayer$decorateVideo,
							substanceDynamic.video,
							$elm$core$Basics$round(dimension.a * 0.9),
							$elm$core$Basics$round(dimension.b * 0.9)),
							A2(
							$mdgriffith$elm_ui$Element$paragraph,
							_List_Nil,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$text(substanceDynamic.name)
								]))
						]));
			default:
				var substancePotential = substance.a;
				return A2(
					$mdgriffith$elm_ui$Element$image,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Events$onClick(
							subClicker(substance)),
							$mdgriffith$elm_ui$Element$width(
							A2($mdgriffith$elm_ui$Element$maximum, 400, $mdgriffith$elm_ui$Element$fill)),
							$mdgriffith$elm_ui$Element$height(
							A2($mdgriffith$elm_ui$Element$maximum, 400, $mdgriffith$elm_ui$Element$fill))
						]),
					{description: 'Potential', src: substancePotential.image});
		}
	});
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $mdgriffith$elm_ui$Internal$Flag$borderStyle = $mdgriffith$elm_ui$Internal$Flag$flag(11);
var $mdgriffith$elm_ui$Element$Border$solid = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$borderStyle, $mdgriffith$elm_ui$Internal$Style$classes.borderSolid);
var $mdgriffith$elm_ui$Element$InternalColumn = function (a) {
	return {$: 'InternalColumn', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$GridPosition = function (a) {
	return {$: 'GridPosition', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$GridTemplateStyle = function (a) {
	return {$: 'GridTemplateStyle', a: a};
};
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $mdgriffith$elm_ui$Internal$Model$AsGrid = {$: 'AsGrid'};
var $mdgriffith$elm_ui$Internal$Model$asGrid = $mdgriffith$elm_ui$Internal$Model$AsGrid;
var $mdgriffith$elm_ui$Internal$Model$getSpacing = F2(
	function (attrs, _default) {
		return A2(
			$elm$core$Maybe$withDefault,
			_default,
			A3(
				$elm$core$List$foldr,
				F2(
					function (attr, acc) {
						if (acc.$ === 'Just') {
							var x = acc.a;
							return $elm$core$Maybe$Just(x);
						} else {
							if ((attr.$ === 'StyleClass') && (attr.b.$ === 'SpacingStyle')) {
								var _v2 = attr.b;
								var x = _v2.b;
								var y = _v2.c;
								return $elm$core$Maybe$Just(
									_Utils_Tuple2(x, y));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}),
				$elm$core$Maybe$Nothing,
				attrs));
	});
var $mdgriffith$elm_ui$Internal$Flag$gridPosition = $mdgriffith$elm_ui$Internal$Flag$flag(35);
var $mdgriffith$elm_ui$Internal$Flag$gridTemplate = $mdgriffith$elm_ui$Internal$Flag$flag(34);
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $mdgriffith$elm_ui$Element$tableHelper = F2(
	function (attrs, config) {
		var onGrid = F3(
			function (rowLevel, columnLevel, elem) {
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$StyleClass,
							$mdgriffith$elm_ui$Internal$Flag$gridPosition,
							$mdgriffith$elm_ui$Internal$Model$GridPosition(
								{col: columnLevel, height: 1, row: rowLevel, width: 1}))
						]),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[elem])));
			});
		var columnWidth = function (col) {
			if (col.$ === 'InternalIndexedColumn') {
				var colConfig = col.a;
				return colConfig.width;
			} else {
				var colConfig = col.a;
				return colConfig.width;
			}
		};
		var columnHeader = function (col) {
			if (col.$ === 'InternalIndexedColumn') {
				var colConfig = col.a;
				return colConfig.header;
			} else {
				var colConfig = col.a;
				return colConfig.header;
			}
		};
		var maybeHeaders = function (headers) {
			return A2(
				$elm$core$List$all,
				$elm$core$Basics$eq($mdgriffith$elm_ui$Internal$Model$Empty),
				headers) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				A2(
					$elm$core$List$indexedMap,
					F2(
						function (col, header) {
							return A3(onGrid, 1, col + 1, header);
						}),
					headers));
		}(
			A2($elm$core$List$map, columnHeader, config.columns));
		var add = F3(
			function (cell, columnConfig, cursor) {
				if (columnConfig.$ === 'InternalIndexedColumn') {
					var col = columnConfig.a;
					return _Utils_update(
						cursor,
						{
							column: cursor.column + 1,
							elements: A2(
								$elm$core$List$cons,
								A3(
									onGrid,
									cursor.row,
									cursor.column,
									A2(
										col.view,
										_Utils_eq(maybeHeaders, $elm$core$Maybe$Nothing) ? (cursor.row - 1) : (cursor.row - 2),
										cell)),
								cursor.elements)
						});
				} else {
					var col = columnConfig.a;
					return {
						column: cursor.column + 1,
						elements: A2(
							$elm$core$List$cons,
							A3(
								onGrid,
								cursor.row,
								cursor.column,
								col.view(cell)),
							cursor.elements),
						row: cursor.row
					};
				}
			});
		var build = F3(
			function (columns, rowData, cursor) {
				var newCursor = A3(
					$elm$core$List$foldl,
					add(rowData),
					cursor,
					columns);
				return {column: 1, elements: newCursor.elements, row: cursor.row + 1};
			});
		var children = A3(
			$elm$core$List$foldl,
			build(config.columns),
			{
				column: 1,
				elements: _List_Nil,
				row: _Utils_eq(maybeHeaders, $elm$core$Maybe$Nothing) ? 1 : 2
			},
			config.data);
		var _v0 = A2(
			$mdgriffith$elm_ui$Internal$Model$getSpacing,
			attrs,
			_Utils_Tuple2(0, 0));
		var sX = _v0.a;
		var sY = _v0.b;
		var template = A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$gridTemplate,
			$mdgriffith$elm_ui$Internal$Model$GridTemplateStyle(
				{
					columns: A2($elm$core$List$map, columnWidth, config.columns),
					rows: A2(
						$elm$core$List$repeat,
						$elm$core$List$length(config.data),
						$mdgriffith$elm_ui$Internal$Model$Content),
					spacing: _Utils_Tuple2(
						$mdgriffith$elm_ui$Element$px(sX),
						$mdgriffith$elm_ui$Element$px(sY))
				}));
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asGrid,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				A2($elm$core$List$cons, template, attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				function () {
					if (maybeHeaders.$ === 'Nothing') {
						return children.elements;
					} else {
						var renderedHeaders = maybeHeaders.a;
						return _Utils_ap(
							renderedHeaders,
							$elm$core$List$reverse(children.elements));
					}
				}()));
	});
var $mdgriffith$elm_ui$Element$table = F2(
	function (attrs, config) {
		return A2(
			$mdgriffith$elm_ui$Element$tableHelper,
			attrs,
			{
				columns: A2($elm$core$List$map, $mdgriffith$elm_ui$Element$InternalColumn, config.columns),
				data: config.data
			});
	});
var $author$project$SubstancePlayer$displayTable = function (subData) {
	var _v0 = subData.elementPages;
	if (_v0.$ === 'Just') {
		var pages = _v0.a;
		var _v1 = A2($elm_community$list_extra$List$Extra$getAt, subData.currentPage, pages);
		if (_v1.$ === 'Just') {
			var aPage = _v1.a;
			if (aPage.$ === 'SubPage') {
				var graphPages = aPage.a;
				return A2(
					$mdgriffith$elm_ui$Element$table,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Border$width(2),
							$mdgriffith$elm_ui$Element$Border$solid,
							A2(
							$mdgriffith$elm_ui$Element$Border$innerGlow,
							A3($mdgriffith$elm_ui$Element$rgb255, 255, 200, 150),
							1)
						]),
					{
						columns: _List_fromArray(
							[
								{
								header: A2(
									$mdgriffith$elm_ui$Element$column,
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$Border$innerGlow,
											A3($mdgriffith$elm_ui$Element$rgb255, 125, 25, 150),
											1)
										]),
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$Input$button,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$Border$width(1),
													$mdgriffith$elm_ui$Element$Border$solid,
													$mdgriffith$elm_ui$Element$Border$rounded(2),
													A2(
													$mdgriffith$elm_ui$Element$Border$innerGlow,
													A3($mdgriffith$elm_ui$Element$rgb255, 0, 20, 150),
													0.5)
												]),
											{
												label: $mdgriffith$elm_ui$Element$text('Effacer le dictionnaire'),
												onPress: $elm$core$Maybe$Just(subData.deleteAll)
											}),
											$mdgriffith$elm_ui$Element$text('Media Substance')
										])),
								view: function (substance) {
									return A3(
										$author$project$SubstancePlayer$displaySubstanceStub,
										substance,
										subData.chosenSubstance,
										_Utils_Tuple2(60, 60));
								},
								width: $mdgriffith$elm_ui$Element$fill
							},
								{
								header: $mdgriffith$elm_ui$Element$text('LienSub.Substance1'),
								view: function (substance) {
									return A2(
										$author$project$SubstancePlayer$displayPremierLienSubstance,
										substance,
										_Utils_Tuple2(60, 60));
								},
								width: $mdgriffith$elm_ui$Element$fill
							},
								{
								header: $mdgriffith$elm_ui$Element$text('LienSub.Substance2'),
								view: function (substance) {
									return A2(
										$author$project$SubstancePlayer$displaySecondLienSubstance,
										substance,
										_Utils_Tuple2(60, 60));
								},
								width: $mdgriffith$elm_ui$Element$fill
							}
							]),
						data: graphPages
					});
			} else {
				return $mdgriffith$elm_ui$Element$text('No Pages');
			}
		} else {
			return $mdgriffith$elm_ui$Element$text('No Pages');
		}
	} else {
		return $mdgriffith$elm_ui$Element$text('No Pages');
	}
};
var $author$project$ApplicationPlayer$displayTitle = function (appInfo) {
	return A2(
		$mdgriffith$elm_ui$Element$paragraph,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$color(
				A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 0)),
				$mdgriffith$elm_ui$Element$Font$size(16),
				$mdgriffith$elm_ui$Element$Font$bold,
				$mdgriffith$elm_ui$Element$Font$family(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$typeface('Lucida Grande'),
						$mdgriffith$elm_ui$Element$Font$sansSerif
					])),
				$mdgriffith$elm_ui$Element$Font$center
			]),
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$text(appInfo.title)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 'OnlyDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 'StaticRootAndDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$AllowHover = {$: 'AllowHover'};
var $mdgriffith$elm_ui$Internal$Model$Layout = {$: 'Layout'};
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	backgroundColor: $elm$core$Maybe$Nothing,
	borderColor: $elm$core$Maybe$Nothing,
	shadow: $elm$core$Maybe$Just(
		{
			blur: 0,
			color: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			offset: _Utils_Tuple2(0, 0),
			size: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 'HoverOption':
					var hoverable = opt.a;
					var _v4 = record.hover;
					if (_v4.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								hover: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 'FocusStyleOption':
					var focusStyle = opt.a;
					var _v5 = record.focus;
					if (_v5.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								focus: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.mode;
					if (_v6.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								mode: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			focus: function () {
				var _v0 = record.focus;
				if (_v0.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			hover: function () {
				var _v1 = record.hover;
				if (_v1.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$AllowHover;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			mode: function () {
				var _v2 = record.mode;
				if (_v2.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$Layout;
				} else {
					var actualMode = _v2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			$elm$core$List$foldr,
			combine,
			{focus: $elm$core$Maybe$Nothing, hover: $elm$core$Maybe$Nothing, mode: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 'Unstyled':
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Styled':
				var styles = el.a.styles;
				var html = el.a.html;
				return A2(
					html,
					mode(styles),
					$mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Text':
				var text = el.a;
				return $mdgriffith$elm_ui$Internal$Model$textElement(text);
			default:
				return $mdgriffith$elm_ui$Internal$Model$textElement('');
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _v0 = options.mode;
			if (_v0.$ === 'NoStaticStyleSheet') {
				return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
			} else {
				return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Internal$Model$toHtml,
			embedStyle,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				attributes,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var $mdgriffith$elm_ui$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			$mdgriffith$elm_ui$Internal$Model$Typeface('Open Sans'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Helvetica'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Verdana'),
			$mdgriffith$elm_ui$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$bgColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontSize,
			$mdgriffith$elm_ui$Internal$Model$FontSize(20)),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontFamily,
			A2(
				$mdgriffith$elm_ui$Internal$Model$FontFamily,
				A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var $mdgriffith$elm_ui$Element$layoutWith = F3(
	function (_v0, attrs, child) {
		var options = _v0.options;
		return A3(
			$mdgriffith$elm_ui$Internal$Model$renderRoot,
			options,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass(
					A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[$mdgriffith$elm_ui$Internal$Style$classes.root, $mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $mdgriffith$elm_ui$Element$layout = $mdgriffith$elm_ui$Element$layoutWith(
	{options: _List_Nil});
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var $mdgriffith$elm_ui$Element$link = F2(
	function (attrs, _v0) {
		var url = _v0.url;
		var label = _v0.label;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$rel('noopener noreferrer')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.link)))),
								attrs))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $author$project$LucasCetPlatform$mapDocument = F2(
	function (_function, _v0) {
		var title = _v0.title;
		var body = _v0.body;
		return {
			body: A2(
				$elm$core$List$map,
				$elm$html$Html$map(_function),
				body),
			title: title
		};
	});
var $elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var $elm$html$Html$Events$custom = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$Event = F2(
	function (dataTransfer, mouseEvent) {
		return {dataTransfer: dataTransfer, mouseEvent: mouseEvent};
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$DataTransfer = F3(
	function (files, types, dropEffect) {
		return {dropEffect: dropEffect, files: files, types: types};
	});
var $elm$file$File$decoder = _File_decoder;
var $mpizenberg$elm_pointer_events$Internal$Decode$all = A2(
	$elm$core$List$foldr,
	$elm$json$Json$Decode$map2($elm$core$List$cons),
	$elm$json$Json$Decode$succeed(_List_Nil));
var $mpizenberg$elm_pointer_events$Internal$Decode$dynamicListOf = function (itemDecoder) {
	var decodeOne = function (n) {
		return A2(
			$elm$json$Json$Decode$field,
			$elm$core$String$fromInt(n),
			itemDecoder);
	};
	var decodeN = function (n) {
		return $mpizenberg$elm_pointer_events$Internal$Decode$all(
			A2(
				$elm$core$List$map,
				decodeOne,
				A2($elm$core$List$range, 0, n - 1)));
	};
	return A2(
		$elm$json$Json$Decode$andThen,
		decodeN,
		A2($elm$json$Json$Decode$field, 'length', $elm$json$Json$Decode$int));
};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$fileListDecoder = $mpizenberg$elm_pointer_events$Internal$Decode$dynamicListOf;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$dataTransferDecoder = A4(
	$elm$json$Json$Decode$map3,
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$DataTransfer,
	A2(
		$elm$json$Json$Decode$field,
		'files',
		$mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$fileListDecoder($elm$file$File$decoder)),
	A2(
		$elm$json$Json$Decode$field,
		'types',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'dropEffect', $elm$json$Json$Decode$string));
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$Event = F6(
	function (keys, button, clientPos, offsetPos, pagePos, screenPos) {
		return {button: button, clientPos: clientPos, keys: keys, offsetPos: offsetPos, pagePos: pagePos, screenPos: screenPos};
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$BackButton = {$: 'BackButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$ErrorButton = {$: 'ErrorButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$ForwardButton = {$: 'ForwardButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$MainButton = {$: 'MainButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$MiddleButton = {$: 'MiddleButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$SecondButton = {$: 'SecondButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$buttonFromId = function (id) {
	switch (id) {
		case 0:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$MainButton;
		case 1:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$MiddleButton;
		case 2:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$SecondButton;
		case 3:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$BackButton;
		case 4:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$ForwardButton;
		default:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$ErrorButton;
	}
};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$buttonDecoder = A2(
	$elm$json$Json$Decode$map,
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$buttonFromId,
	A2($elm$json$Json$Decode$field, 'button', $elm$json$Json$Decode$int));
var $mpizenberg$elm_pointer_events$Internal$Decode$clientPos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Internal$Decode$Keys = F3(
	function (alt, ctrl, shift) {
		return {alt: alt, ctrl: ctrl, shift: shift};
	});
var $mpizenberg$elm_pointer_events$Internal$Decode$keys = A4(
	$elm$json$Json$Decode$map3,
	$mpizenberg$elm_pointer_events$Internal$Decode$Keys,
	A2($elm$json$Json$Decode$field, 'altKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'ctrlKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'shiftKey', $elm$json$Json$Decode$bool));
var $mpizenberg$elm_pointer_events$Internal$Decode$offsetPos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'offsetX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'offsetY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Internal$Decode$pagePos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Internal$Decode$screenPos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'screenX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'screenY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$eventDecoder = A7($elm$json$Json$Decode$map6, $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$Event, $mpizenberg$elm_pointer_events$Internal$Decode$keys, $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$buttonDecoder, $mpizenberg$elm_pointer_events$Internal$Decode$clientPos, $mpizenberg$elm_pointer_events$Internal$Decode$offsetPos, $mpizenberg$elm_pointer_events$Internal$Decode$pagePos, $mpizenberg$elm_pointer_events$Internal$Decode$screenPos);
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$eventDecoder = A3(
	$elm$json$Json$Decode$map2,
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$Event,
	A2($elm$json$Json$Decode$field, 'dataTransfer', $mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$dataTransferDecoder),
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$eventDecoder);
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$on = F2(
	function (event, tag) {
		return A2(
			$elm$html$Html$Events$custom,
			event,
			A2(
				$elm$json$Json$Decode$map,
				function (ev) {
					return {
						message: tag(ev),
						preventDefault: true,
						stopPropagation: true
					};
				},
				$mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$eventDecoder));
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$onFileFromOS = function (config) {
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		_List_fromArray(
			[
				$elm$core$Maybe$Just(
				A2($mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$on, 'dragover', config.onOver)),
				$elm$core$Maybe$Just(
				A2($mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$on, 'drop', config.onDrop)),
				A2(
				$elm$core$Maybe$map,
				$mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$on('dragenter'),
				config.onEnter),
				A2(
				$elm$core$Maybe$map,
				$mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$on('dragleave'),
				config.onLeave)
			]));
};
var $author$project$Graphic_Downloader$showImage = F2(
	function (imgUrl, clickAction) {
		return A2(
			$mdgriffith$elm_ui$Element$image,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Background$color(
					A3($mdgriffith$elm_ui$Element$rgb255, 55, 55, 55)),
					$mdgriffith$elm_ui$Element$Border$width(2),
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(200)),
					$mdgriffith$elm_ui$Element$height(
					$mdgriffith$elm_ui$Element$px(200)),
					$mdgriffith$elm_ui$Element$Events$onClick(
					clickAction(imgUrl))
				]),
			{description: 'Image unavailable', src: imgUrl});
	});
var $author$project$Graphic_Downloader$showImageList = F2(
	function (msgAttributeLList, graphicData) {
		var _v0 = graphicData.graphicPages;
		if (_v0.$ === 'Just') {
			var pages = _v0.a;
			var _v1 = A2($elm_community$list_extra$List$Extra$getAt, graphicData.currentPage, pages);
			if (_v1.$ === 'Just') {
				var graphPages = _v1.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$spacing(10)
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$wrappedRow,
							_Utils_ap(
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$padding(10),
										$mdgriffith$elm_ui$Element$spacing(5)
									]),
								msgAttributeLList),
							A2(
								$elm$core$List$map,
								function (a) {
									return A2(
										$author$project$Graphic_Downloader$showImage,
										_Utils_ap(graphicData.filePrefix, a),
										graphicData.selectGraphicAction);
								},
								graphPages)),
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$spaceEvenly,
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$Input$button,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignLeft]),
									{
										label: $mdgriffith$elm_ui$Element$text('Previous Page'),
										onPress: graphicData.choosePreviousPage
									}),
									A2(
									$mdgriffith$elm_ui$Element$Input$button,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignRight]),
									{
										label: $mdgriffith$elm_ui$Element$text('Next Page'),
										onPress: graphicData.chooseNextPage
									})
								]))
						]));
			} else {
				return $mdgriffith$elm_ui$Element$text(
					'Error : Wrong page #' + $elm$core$String$fromInt(graphicData.currentPage));
			}
		} else {
			return $mdgriffith$elm_ui$Element$text('Error : No pages');
		}
	});
var $author$project$SubstancePlayer$showSubstanceList = F3(
	function (msgAttributeLList, backendCall, subData) {
		var _v0 = subData.elementPages;
		if (_v0.$ === 'Just') {
			var pages = _v0.a;
			var _v1 = A2($elm_community$list_extra$List$Extra$getAt, subData.currentPage, pages);
			if (_v1.$ === 'Just') {
				var aPage = _v1.a;
				if (aPage.$ === 'SubPage') {
					var graphPages = aPage.a;
					return (backendCall === 'downloadAppSubstancePage') ? A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$spacing(10)
							]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$wrappedRow,
								_Utils_ap(
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$padding(10),
											$mdgriffith$elm_ui$Element$spacing(5)
										]),
									msgAttributeLList),
								A2(
									$elm$core$List$map,
									function (a) {
										return A3(
											$author$project$SubstancePlayer$displaySubstanceStub,
											a,
											subData.selectAppSubstanceAction,
											_Utils_Tuple2(60, 60));
									},
									graphPages)),
								A2(
								$mdgriffith$elm_ui$Element$row,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$spaceEvenly,
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$Input$button,
										_List_fromArray(
											[$mdgriffith$elm_ui$Element$alignLeft]),
										{
											label: $mdgriffith$elm_ui$Element$text('Previous Page'),
											onPress: subData.choosePreviousPage
										}),
										A2(
										$mdgriffith$elm_ui$Element$Input$button,
										_List_fromArray(
											[$mdgriffith$elm_ui$Element$alignRight]),
										{
											label: $mdgriffith$elm_ui$Element$text('Next Page'),
											onPress: subData.chooseNextPage
										})
									]))
							])) : A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$spacing(10)
							]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$wrappedRow,
								_Utils_ap(
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$padding(10),
											$mdgriffith$elm_ui$Element$spacing(5)
										]),
									msgAttributeLList),
								A2(
									$elm$core$List$map,
									function (a) {
										return A3(
											$author$project$SubstancePlayer$displaySubstanceStub,
											a,
											subData.selectElementAction,
											_Utils_Tuple2(60, 60));
									},
									graphPages)),
								A2(
								$mdgriffith$elm_ui$Element$row,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$spaceEvenly,
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$Input$button,
										_List_fromArray(
											[$mdgriffith$elm_ui$Element$alignLeft]),
										{
											label: $mdgriffith$elm_ui$Element$text('Previous Page'),
											onPress: subData.choosePreviousPage
										}),
										A2(
										$mdgriffith$elm_ui$Element$Input$button,
										_List_fromArray(
											[$mdgriffith$elm_ui$Element$alignRight]),
										{
											label: $mdgriffith$elm_ui$Element$text('Next Page'),
											onPress: subData.chooseNextPage
										})
									]))
							]));
				} else {
					var lstPages = aPage.a;
					return A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$spacing(10)
							]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$wrappedRow,
								_Utils_ap(
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$padding(10),
											$mdgriffith$elm_ui$Element$spacing(5)
										]),
									msgAttributeLList),
								A2(
									$elm$core$List$map,
									function (a) {
										return A3(
											$author$project$SubstancePlayer$displaySubstanceStub,
											a,
											subData.selectAppSubstanceAction,
											_Utils_Tuple2(60, 60));
									},
									lstPages)),
								A2(
								$mdgriffith$elm_ui$Element$row,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$spaceEvenly,
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$Input$button,
										_List_fromArray(
											[$mdgriffith$elm_ui$Element$alignLeft]),
										{
											label: $mdgriffith$elm_ui$Element$text('Previous Page'),
											onPress: subData.choosePreviousPage
										}),
										A2(
										$mdgriffith$elm_ui$Element$Input$button,
										_List_fromArray(
											[$mdgriffith$elm_ui$Element$alignRight]),
										{
											label: $mdgriffith$elm_ui$Element$text('Next Page'),
											onPress: subData.chooseNextPage
										})
									]))
							]));
				}
			} else {
				return $mdgriffith$elm_ui$Element$text(
					'Error : Wrong page #' + $elm$core$String$fromInt(subData.currentPage));
			}
		} else {
			return $mdgriffith$elm_ui$Element$text('Error : No pages');
		}
	});
var $author$project$Graphic_Downloader$showVideo = F2(
	function (videoLink, msgAction) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Events$onClick(
					msgAction(videoLink))
				]),
			$mdgriffith$elm_ui$Element$html(
				A2(
					$elm$html$Html$video,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$width(200),
							$elm$html$Html$Attributes$height(200),
							$elm$html$Html$Attributes$src(videoLink),
							$elm$html$Html$Attributes$controls(true)
						]),
					_List_Nil)));
	});
var $author$project$Graphic_Downloader$showVideoList = F2(
	function (msgAttributeLList, graphicData) {
		var _v0 = graphicData.graphicPages;
		if (_v0.$ === 'Just') {
			var pages = _v0.a;
			var _v1 = A2($elm_community$list_extra$List$Extra$getAt, graphicData.currentPage, pages);
			if (_v1.$ === 'Just') {
				var graphPages = _v1.a;
				return A2(
					$mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$spacing(10)
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$wrappedRow,
							_Utils_ap(
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$padding(10),
										$mdgriffith$elm_ui$Element$spacing(5)
									]),
								msgAttributeLList),
							A2(
								$elm$core$List$map,
								function (a) {
									return A2(
										$author$project$Graphic_Downloader$showVideo,
										_Utils_ap(graphicData.filePrefix, a),
										graphicData.selectGraphicAction);
								},
								graphPages)),
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$spaceEvenly,
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$Input$button,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignLeft]),
									{
										label: $mdgriffith$elm_ui$Element$text('Previous Page'),
										onPress: graphicData.choosePreviousPage
									}),
									A2(
									$mdgriffith$elm_ui$Element$Input$button,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$alignRight]),
									{
										label: $mdgriffith$elm_ui$Element$text('Next Page'),
										onPress: graphicData.chooseNextPage
									})
								]))
						]));
			} else {
				return $mdgriffith$elm_ui$Element$text(
					'Error : Wrong page #' + $elm$core$String$fromInt(graphicData.currentPage));
			}
		} else {
			return $mdgriffith$elm_ui$Element$text('Error : No pages');
		}
	});
var $author$project$LucasCetPlatform$styledHeader = A2(
	$mdgriffith$elm_ui$Element$row,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$height(
			$mdgriffith$elm_ui$Element$px(187)),
			$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
		]),
	_List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Element$image,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$centerY,
					$mdgriffith$elm_ui$Element$height(
					$mdgriffith$elm_ui$Element$px(62)),
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(323))
				]),
			{description: 'Lucas CET', src: 'img/logo.png'}),
			A2(
			$mdgriffith$elm_ui$Element$link,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$alignRight,
					$mdgriffith$elm_ui$Element$centerY,
					$mdgriffith$elm_ui$Element$height(
					$mdgriffith$elm_ui$Element$px(50)),
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(66))
				]),
			{
				label: A2(
					$mdgriffith$elm_ui$Element$image,
					_List_Nil,
					{description: 'Lucas CET', src: 'img/Icons/icon-menu.png'}),
				url: '/login'
			})
		]));
var $author$project$LucasCetPlatform$styledLinkLabel = F4(
	function (message, imgUrl, isLeftSide, isTop) {
		return A2(
			$mdgriffith$elm_ui$Element$image,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(393)),
					$mdgriffith$elm_ui$Element$height(
					$mdgriffith$elm_ui$Element$px(290)),
					$mdgriffith$elm_ui$Element$inFront(
					A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								isTop ? $mdgriffith$elm_ui$Element$alignTop : $mdgriffith$elm_ui$Element$alignBottom,
								isTop ? $mdgriffith$elm_ui$Element$moveDown(83) : $mdgriffith$elm_ui$Element$moveUp(83),
								isLeftSide ? $mdgriffith$elm_ui$Element$moveLeft(0) : $mdgriffith$elm_ui$Element$moveRight(70),
								$mdgriffith$elm_ui$Element$width(
								$mdgriffith$elm_ui$Element$px(323)),
								$mdgriffith$elm_ui$Element$height(
								$mdgriffith$elm_ui$Element$px(124)),
								$mdgriffith$elm_ui$Element$paddingEach(
								{bottom: 37, left: 0, right: 0, top: 37}),
								$mdgriffith$elm_ui$Element$Font$color(
								A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 0)),
								$mdgriffith$elm_ui$Element$Font$size(16),
								$mdgriffith$elm_ui$Element$Font$bold,
								$mdgriffith$elm_ui$Element$Font$family(
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Font$typeface('Lucida Grande'),
										$mdgriffith$elm_ui$Element$Font$sansSerif
									])),
								$mdgriffith$elm_ui$Element$Font$center
							]),
						$mdgriffith$elm_ui$Element$text(message)))
				]),
			{description: message, src: imgUrl});
	});
var $author$project$Chat_Creator$DropWidgetOnCanvas = function (a) {
	return {$: 'DropWidgetOnCanvas', a: a};
};
var $author$project$Chat_Creator$RienFaire = {$: 'RienFaire'};
var $author$project$Chat_Creator$SaveChatInfo = {$: 'SaveChatInfo'};
var $author$project$Chat_Creator$UpdateSelection = function (a) {
	return {$: 'UpdateSelection', a: a};
};
var $author$project$Chat_Creator$decorateVideo = function (videoLink) {
	return A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Background$color(
				A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 0)),
				$mdgriffith$elm_ui$Element$padding(10),
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
			]),
		A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
			$mdgriffith$elm_ui$Element$html(
				A2(
					$elm$html$Html$video,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$width(200),
							$elm$html$Html$Attributes$height(200),
							$elm$html$Html$Attributes$src(videoLink),
							$elm$html$Html$Attributes$controls(true)
						]),
					_List_Nil))));
};
var $author$project$Chat_Creator$outille = function (tool) {
	return $mdgriffith$elm_ui$Element$inFront(
		A2(
			$mdgriffith$elm_ui$Element$image,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$alpha(0.2),
					$mdgriffith$elm_ui$Element$moveRight(tool.position.clientX),
					$mdgriffith$elm_ui$Element$moveDown(tool.position.clientY)
				]),
			{description: tool.displayUrl, src: tool.displayUrl}));
};
var $author$project$Chat_Creator$afficheEnFace = function (widget) {
	var _v0 = widget.category;
	if (_v0.$ === 'Image') {
		return $mdgriffith$elm_ui$Element$inFront(
			A2(
				$mdgriffith$elm_ui$Element$image,
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$moveRight(widget.position.clientX),
							$mdgriffith$elm_ui$Element$moveDown(widget.position.clientY),
							$mdgriffith$elm_ui$Element$htmlAttribute(
							$elm$html$Html$Attributes$id(
								$elm$core$String$fromInt(widget.widgetId))),
							$mdgriffith$elm_ui$Element$width(
							$mdgriffith$elm_ui$Element$px(900)),
							$mdgriffith$elm_ui$Element$height(
							$mdgriffith$elm_ui$Element$px(300)),
							$mdgriffith$elm_ui$Element$Events$onClick(
							$author$project$Chat_Creator$UpdateSelection(widget))
						]),
					A2($elm$core$List$map, $author$project$Chat_Creator$outille, widget.tools)),
				{description: 'Visual widget', src: widget.displayUrl}));
	} else {
		return $mdgriffith$elm_ui$Element$inFront(
			A2(
				$mdgriffith$elm_ui$Element$el,
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$moveRight(widget.position.clientX),
							$mdgriffith$elm_ui$Element$moveDown(widget.position.clientY),
							$mdgriffith$elm_ui$Element$htmlAttribute(
							$elm$html$Html$Attributes$id(
								$elm$core$String$fromInt(widget.widgetId))),
							$mdgriffith$elm_ui$Element$Events$onClick(
							$author$project$Chat_Creator$UpdateSelection(widget))
						]),
					A2($elm$core$List$map, $author$project$Chat_Creator$outille, widget.tools)),
				$author$project$Chat_Creator$decorateVideo(widget.displayUrl)));
	}
};
var $author$project$Chat_Creator$GotAnswer = F2(
	function (a, b) {
		return {$: 'GotAnswer', a: a, b: b};
	});
var $author$project$Chat_Creator$affiche = function (widget) {
	var _v0 = widget.category;
	if (_v0.$ === 'Image') {
		return A2(
			$mdgriffith$elm_ui$Element$image,
			_Utils_ap(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$htmlAttribute(
						$elm$html$Html$Attributes$id(
							$elm$core$String$fromInt(widget.widgetId))),
						$mdgriffith$elm_ui$Element$width(
						$mdgriffith$elm_ui$Element$px(900)),
						$mdgriffith$elm_ui$Element$height(
						$mdgriffith$elm_ui$Element$px(300))
					]),
				A2($elm$core$List$map, $author$project$Chat_Creator$outille, widget.tools)),
			{description: 'Visual widget', src: widget.displayUrl});
	} else {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$htmlAttribute(
						$elm$html$Html$Attributes$id(
							$elm$core$String$fromInt(widget.widgetId)))
					]),
				A2($elm$core$List$map, $author$project$Chat_Creator$outille, widget.tools)),
			$author$project$Chat_Creator$decorateVideo(widget.displayUrl));
	}
};
var $author$project$Chat_Creator$illumine = function (widget) {
	var _v0 = widget.category;
	if (_v0.$ === 'Image') {
		return A2(
			$mdgriffith$elm_ui$Element$image,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Background$color(
					A3($mdgriffith$elm_ui$Element$rgb255, 55, 55, 55)),
					$mdgriffith$elm_ui$Element$Border$width(2),
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(200)),
					$mdgriffith$elm_ui$Element$height(
					$mdgriffith$elm_ui$Element$px(200))
				]),
			{description: widget.displayUrl, src: widget.displayUrl});
	} else {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Background$color(
					A3($mdgriffith$elm_ui$Element$rgb255, 55, 55, 55)),
					$mdgriffith$elm_ui$Element$Border$width(2)
				]),
			$author$project$Chat_Creator$decorateVideo(widget.displayUrl));
	}
};
var $mdgriffith$elm_ui$Element$Input$Option = F2(
	function (a, b) {
		return {$: 'Option', a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$Input$optionWith = F2(
	function (val, view) {
		return A2($mdgriffith$elm_ui$Element$Input$Option, val, view);
	});
var $author$project$Chat_Creator$displayChoice = F2(
	function (value, widget) {
		var _v0 = widget.category;
		if (_v0.$ === 'Image') {
			return A2(
				$mdgriffith$elm_ui$Element$Input$optionWith,
				value,
				function (state) {
					if (state.$ === 'Selected') {
						return $author$project$Chat_Creator$illumine(widget);
					} else {
						return $author$project$Chat_Creator$affiche(widget);
					}
				});
		} else {
			return A2(
				$mdgriffith$elm_ui$Element$Input$optionWith,
				value,
				function (state) {
					if (state.$ === 'Selected') {
						return $author$project$Chat_Creator$illumine(widget);
					} else {
						return $author$project$Chat_Creator$affiche(widget);
					}
				});
		}
	});
var $mdgriffith$elm_ui$Element$Input$Column = {$: 'Column'};
var $mdgriffith$elm_ui$Element$Input$AfterFound = {$: 'AfterFound'};
var $mdgriffith$elm_ui$Element$Input$BeforeFound = {$: 'BeforeFound'};
var $mdgriffith$elm_ui$Element$Input$Idle = {$: 'Idle'};
var $mdgriffith$elm_ui$Element$Input$NotFound = {$: 'NotFound'};
var $mdgriffith$elm_ui$Element$Input$Selected = {$: 'Selected'};
var $mdgriffith$elm_ui$Element$Input$column = F2(
	function (attributes, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					attributes)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Element$Input$downArrow = 'ArrowDown';
var $mdgriffith$elm_ui$Internal$Model$filter = function (attrs) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (x, _v0) {
				var found = _v0.a;
				var has = _v0.b;
				switch (x.$) {
					case 'NoAttribute':
						return _Utils_Tuple2(found, has);
					case 'Class':
						var key = x.a;
						return _Utils_Tuple2(
							A2($elm$core$List$cons, x, found),
							has);
					case 'Attr':
						var attr = x.a;
						return _Utils_Tuple2(
							A2($elm$core$List$cons, x, found),
							has);
					case 'StyleClass':
						var style = x.b;
						return _Utils_Tuple2(
							A2($elm$core$List$cons, x, found),
							has);
					case 'Width':
						var width = x.a;
						return A2($elm$core$Set$member, 'width', has) ? _Utils_Tuple2(found, has) : _Utils_Tuple2(
							A2($elm$core$List$cons, x, found),
							A2($elm$core$Set$insert, 'width', has));
					case 'Height':
						var height = x.a;
						return A2($elm$core$Set$member, 'height', has) ? _Utils_Tuple2(found, has) : _Utils_Tuple2(
							A2($elm$core$List$cons, x, found),
							A2($elm$core$Set$insert, 'height', has));
					case 'Describe':
						var description = x.a;
						return A2($elm$core$Set$member, 'described', has) ? _Utils_Tuple2(found, has) : _Utils_Tuple2(
							A2($elm$core$List$cons, x, found),
							A2($elm$core$Set$insert, 'described', has));
					case 'Nearby':
						var location = x.a;
						var elem = x.b;
						return _Utils_Tuple2(
							A2($elm$core$List$cons, x, found),
							has);
					case 'AlignX':
						return A2($elm$core$Set$member, 'align-x', has) ? _Utils_Tuple2(found, has) : _Utils_Tuple2(
							A2($elm$core$List$cons, x, found),
							A2($elm$core$Set$insert, 'align-x', has));
					case 'AlignY':
						return A2($elm$core$Set$member, 'align-y', has) ? _Utils_Tuple2(found, has) : _Utils_Tuple2(
							A2($elm$core$List$cons, x, found),
							A2($elm$core$Set$insert, 'align-y', has));
					default:
						return A2($elm$core$Set$member, 'transform', has) ? _Utils_Tuple2(found, has) : _Utils_Tuple2(
							A2($elm$core$List$cons, x, found),
							A2($elm$core$Set$insert, 'transform', has));
				}
			}),
		_Utils_Tuple2(_List_Nil, $elm$core$Set$empty),
		attrs).a;
};
var $mdgriffith$elm_ui$Internal$Model$get = F2(
	function (attrs, isAttr) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, found) {
					return isAttr(x) ? A2($elm$core$List$cons, x, found) : found;
				}),
			_List_Nil,
			$mdgriffith$elm_ui$Internal$Model$filter(attrs));
	});
var $mdgriffith$elm_ui$Element$Input$leftArrow = 'ArrowLeft';
var $mdgriffith$elm_ui$Element$Input$rightArrow = 'ArrowRight';
var $mdgriffith$elm_ui$Element$Input$row = F2(
	function (attributes, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asRow,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				attributes),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Element$Input$upArrow = 'ArrowUp';
var $mdgriffith$elm_ui$Element$Input$radioHelper = F3(
	function (orientation, attrs, input) {
		var track = F2(
			function (opt, _v14) {
				var found = _v14.a;
				var prev = _v14.b;
				var nxt = _v14.c;
				var val = opt.a;
				switch (found.$) {
					case 'NotFound':
						return _Utils_eq(
							$elm$core$Maybe$Just(val),
							input.selected) ? _Utils_Tuple3($mdgriffith$elm_ui$Element$Input$BeforeFound, prev, nxt) : _Utils_Tuple3(found, val, nxt);
					case 'BeforeFound':
						return _Utils_Tuple3($mdgriffith$elm_ui$Element$Input$AfterFound, prev, val);
					default:
						return _Utils_Tuple3(found, prev, nxt);
				}
			});
		var renderOption = function (_v11) {
			var val = _v11.a;
			var view = _v11.b;
			var status = _Utils_eq(
				$elm$core$Maybe$Just(val),
				input.selected) ? $mdgriffith$elm_ui$Element$Input$Selected : $mdgriffith$elm_ui$Element$Input$Idle;
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$pointer,
						function () {
						if (orientation.$ === 'Row') {
							return $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink);
						} else {
							return $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill);
						}
					}(),
						$mdgriffith$elm_ui$Element$Events$onClick(
						input.onChange(val)),
						function () {
						if (status.$ === 'Selected') {
							return $mdgriffith$elm_ui$Internal$Model$Attr(
								A2($elm$html$Html$Attributes$attribute, 'aria-checked', 'true'));
						} else {
							return $mdgriffith$elm_ui$Internal$Model$Attr(
								A2($elm$html$Html$Attributes$attribute, 'aria-checked', 'false'));
						}
					}(),
						$mdgriffith$elm_ui$Internal$Model$Attr(
						A2($elm$html$Html$Attributes$attribute, 'role', 'radio'))
					]),
				view(status));
		};
		var prevNext = function () {
			var _v5 = input.options;
			if (!_v5.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var _v6 = _v5.a;
				var val = _v6.a;
				return function (_v7) {
					var found = _v7.a;
					var b = _v7.b;
					var a = _v7.c;
					switch (found.$) {
						case 'NotFound':
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(b, val));
						case 'BeforeFound':
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(b, val));
						default:
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(b, a));
					}
				}(
					A3(
						$elm$core$List$foldl,
						track,
						_Utils_Tuple3($mdgriffith$elm_ui$Element$Input$NotFound, val, val),
						input.options));
			}
		}();
		var optionArea = function () {
			if (orientation.$ === 'Row') {
				return A2(
					$mdgriffith$elm_ui$Element$Input$row,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(input.label),
						attrs),
					A2($elm$core$List$map, renderOption, input.options));
			} else {
				return A2(
					$mdgriffith$elm_ui$Element$Input$column,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(input.label),
						attrs),
					A2($elm$core$List$map, renderOption, input.options));
			}
		}();
		var events = A2(
			$mdgriffith$elm_ui$Internal$Model$get,
			attrs,
			function (attr) {
				_v3$3:
				while (true) {
					switch (attr.$) {
						case 'Width':
							if (attr.a.$ === 'Fill') {
								return true;
							} else {
								break _v3$3;
							}
						case 'Height':
							if (attr.a.$ === 'Fill') {
								return true;
							} else {
								break _v3$3;
							}
						case 'Attr':
							return true;
						default:
							break _v3$3;
					}
				}
				return false;
			});
		return A3(
			$mdgriffith$elm_ui$Element$Input$applyLabel,
			_Utils_ap(
				A2(
					$elm$core$List$filterMap,
					$elm$core$Basics$identity,
					_List_fromArray(
						[
							$elm$core$Maybe$Just($mdgriffith$elm_ui$Element$alignLeft),
							$elm$core$Maybe$Just(
							$mdgriffith$elm_ui$Element$Input$tabindex(0)),
							$elm$core$Maybe$Just(
							$mdgriffith$elm_ui$Internal$Model$htmlClass('focus')),
							$elm$core$Maybe$Just($mdgriffith$elm_ui$Element$Region$announce),
							$elm$core$Maybe$Just(
							$mdgriffith$elm_ui$Internal$Model$Attr(
								A2($elm$html$Html$Attributes$attribute, 'role', 'radiogroup'))),
							function () {
							if (prevNext.$ === 'Nothing') {
								return $elm$core$Maybe$Nothing;
							} else {
								var _v1 = prevNext.a;
								var prev = _v1.a;
								var next = _v1.b;
								return $elm$core$Maybe$Just(
									$mdgriffith$elm_ui$Element$Input$onKeyLookup(
										function (code) {
											if (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$leftArrow)) {
												return $elm$core$Maybe$Just(
													input.onChange(prev));
											} else {
												if (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$upArrow)) {
													return $elm$core$Maybe$Just(
														input.onChange(prev));
												} else {
													if (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$rightArrow)) {
														return $elm$core$Maybe$Just(
															input.onChange(next));
													} else {
														if (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$downArrow)) {
															return $elm$core$Maybe$Just(
																input.onChange(next));
														} else {
															if (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space)) {
																var _v2 = input.selected;
																if (_v2.$ === 'Nothing') {
																	return $elm$core$Maybe$Just(
																		input.onChange(prev));
																} else {
																	return $elm$core$Maybe$Nothing;
																}
															} else {
																return $elm$core$Maybe$Nothing;
															}
														}
													}
												}
											}
										}));
							}
						}()
						])),
				events),
			input.label,
			optionArea);
	});
var $mdgriffith$elm_ui$Element$Input$radio = $mdgriffith$elm_ui$Element$Input$radioHelper($mdgriffith$elm_ui$Element$Input$Column);
var $author$project$Chat_Creator$askQuestion = function (widget) {
	return $mdgriffith$elm_ui$Element$inFront(
		A2(
			$mdgriffith$elm_ui$Element$Input$radio,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$padding(5),
					$mdgriffith$elm_ui$Element$spaceEvenly,
					A2(
					$mdgriffith$elm_ui$Element$Border$innerGlow,
					A3($mdgriffith$elm_ui$Element$rgb255, 150, 150, 55),
					5),
					$mdgriffith$elm_ui$Element$moveRight(widget.position.clientX),
					$mdgriffith$elm_ui$Element$moveDown(widget.position.clientY),
					$mdgriffith$elm_ui$Element$scrollbars
				]),
			{
				label: A2(
					$mdgriffith$elm_ui$Element$Input$labelAbove,
					_List_Nil,
					$mdgriffith$elm_ui$Element$text('Questionnaire:')),
				onChange: $author$project$Chat_Creator$GotAnswer(widget),
				options: A2($elm$core$List$indexedMap, $author$project$Chat_Creator$displayChoice, widget.constituant),
				selected: $elm$core$Maybe$Just(widget.answer)
			}));
};
var $author$project$Chat_Creator$illumineEnFace = function (widget) {
	var _v0 = widget.category;
	if (_v0.$ === 'Image') {
		return $mdgriffith$elm_ui$Element$inFront(
			A2(
				$mdgriffith$elm_ui$Element$image,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						A3($mdgriffith$elm_ui$Element$rgb255, 55, 55, 55)),
						$mdgriffith$elm_ui$Element$Border$width(2),
						$mdgriffith$elm_ui$Element$moveRight(widget.position.clientX),
						$mdgriffith$elm_ui$Element$moveDown(widget.position.clientY),
						$mdgriffith$elm_ui$Element$width(
						$mdgriffith$elm_ui$Element$px(900)),
						$mdgriffith$elm_ui$Element$height(
						$mdgriffith$elm_ui$Element$px(300))
					]),
				{description: widget.displayUrl, src: widget.displayUrl}));
	} else {
		return $mdgriffith$elm_ui$Element$inFront(
			A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						A3($mdgriffith$elm_ui$Element$rgb255, 55, 55, 55)),
						$mdgriffith$elm_ui$Element$Border$width(2),
						$mdgriffith$elm_ui$Element$moveRight(widget.position.clientX),
						$mdgriffith$elm_ui$Element$moveDown(widget.position.clientY)
					]),
				$author$project$Chat_Creator$decorateVideo(widget.displayUrl)));
	}
};
var $author$project$Chat_Creator$mainContainerAttributes = function (events) {
	return _Utils_ap(
		events,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$fillPortion(4)),
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				A2(
				$mdgriffith$elm_ui$Element$Border$innerGlow,
				A3($mdgriffith$elm_ui$Element$rgb255, 105, 55, 200),
				5),
				$mdgriffith$elm_ui$Element$htmlAttribute(
				$elm$html$Html$Attributes$id('mainContainer'))
			]));
};
var $author$project$Chat_Creator$onDrop = function (msg) {
	return $mdgriffith$elm_ui$Element$htmlAttribute(
		A2(
			$elm$html$Html$Events$on,
			'drop',
			A2(
				$elm$json$Json$Decode$map,
				msg,
				A3(
					$elm$json$Json$Decode$map2,
					$author$project$Chat_Creator$Coordinate,
					A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
					A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float)))));
};
var $author$project$Chat_Creator$StartDrag = function (a) {
	return {$: 'StartDrag', a: a};
};
var $author$project$Chat_Creator$ToggleGroup = function (a) {
	return {$: 'ToggleGroup', a: a};
};
var $author$project$Chat_Creator$onDrag = function (msg) {
	return $mdgriffith$elm_ui$Element$htmlAttribute(
		A2(
			$elm$html$Html$Events$on,
			'dragstart',
			$elm$json$Json$Decode$succeed(msg)));
};
var $author$project$Chat_Creator$plansWidget = function (_v0) {
	var model = _v0.a;
	var widget = _v0.b;
	var _v1 = widget.category;
	switch (_v1.$) {
		case 'Visual':
			return A2(
				$mdgriffith$elm_ui$Element$image,
				_List_fromArray(
					[
						$author$project$Chat_Creator$onDrag(
						$author$project$Chat_Creator$StartDrag(widget))
					]),
				{description: widget.widgetIcon, src: widget.widgetIcon});
		case 'Tool':
			return (!$elm$core$List$isEmpty(model.chatInfo.completedWidgets)) ? A2(
				$mdgriffith$elm_ui$Element$image,
				_List_fromArray(
					[
						$author$project$Chat_Creator$onDrag(
						$author$project$Chat_Creator$StartDrag(widget)),
						$mdgriffith$elm_ui$Element$htmlAttribute(
						$elm$html$Html$Attributes$id(widget.widgetId))
					]),
				{description: widget.widgetIcon, src: widget.widgetIcon}) : $mdgriffith$elm_ui$Element$text('');
		default:
			var _v2 = model.selectedWidget;
			if (_v2.$ === 'Nothing') {
				return $mdgriffith$elm_ui$Element$text('');
			} else {
				return A2(
					$mdgriffith$elm_ui$Element$image,
					_List_fromArray(
						[
							$author$project$Chat_Creator$onDrag(
							$author$project$Chat_Creator$ToggleGroup(widget))
						]),
					{description: widget.widgetIcon, src: widget.widgetIcon});
			}
	}
};
var $author$project$Chat_Creator$DropWidgetOnWidget = F2(
	function (a, b) {
		return {$: 'DropWidgetOnWidget', a: a, b: b};
	});
var $author$project$Chat_Creator$prepareWidget = function (widget) {
	var _v0 = widget.category;
	if (_v0.$ === 'Image') {
		return $mdgriffith$elm_ui$Element$inFront(
			A2(
				$mdgriffith$elm_ui$Element$image,
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$moveRight(widget.position.clientX),
							$mdgriffith$elm_ui$Element$moveDown(widget.position.clientY),
							$mdgriffith$elm_ui$Element$Background$color(
							A3($mdgriffith$elm_ui$Element$rgb255, 105, 105, 105)),
							$mdgriffith$elm_ui$Element$width(
							$mdgriffith$elm_ui$Element$px(900)),
							$mdgriffith$elm_ui$Element$height(
							$mdgriffith$elm_ui$Element$px(300)),
							$author$project$Chat_Creator$onDrop(
							$author$project$Chat_Creator$DropWidgetOnWidget(widget)),
							$mdgriffith$elm_ui$Element$htmlAttribute(
							$elm$html$Html$Attributes$id(
								$elm$core$String$fromInt(widget.widgetId))),
							$mdgriffith$elm_ui$Element$htmlAttribute(
							A2(
								$elm$html$Html$Events$custom,
								'dragover',
								$elm$json$Json$Decode$succeed(
									{message: $author$project$Chat_Creator$RienFaire, preventDefault: true, stopPropagation: true})))
						]),
					A2($elm$core$List$map, $author$project$Chat_Creator$outille, widget.tools)),
				{description: widget.displayUrl, src: widget.displayUrl}));
	} else {
		return $mdgriffith$elm_ui$Element$inFront(
			A2(
				$mdgriffith$elm_ui$Element$el,
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$moveRight(widget.position.clientX),
							$mdgriffith$elm_ui$Element$moveDown(widget.position.clientY),
							$mdgriffith$elm_ui$Element$Background$color(
							A3($mdgriffith$elm_ui$Element$rgb255, 105, 105, 105)),
							$author$project$Chat_Creator$onDrop(
							$author$project$Chat_Creator$DropWidgetOnWidget(widget)),
							$mdgriffith$elm_ui$Element$htmlAttribute(
							$elm$html$Html$Attributes$id(
								$elm$core$String$fromInt(widget.widgetId))),
							$mdgriffith$elm_ui$Element$htmlAttribute(
							A2(
								$elm$html$Html$Events$custom,
								'dragover',
								$elm$json$Json$Decode$succeed(
									{message: $author$project$Chat_Creator$RienFaire, preventDefault: true, stopPropagation: true})))
						]),
					A2($elm$core$List$map, $author$project$Chat_Creator$outille, widget.tools)),
				$author$project$Chat_Creator$decorateVideo(widget.displayUrl)));
	}
};
var $author$project$Chat_Creator$secondContainerAttributes = function (events) {
	return _Utils_ap(
		events,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$fillPortion(4)),
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$htmlAttribute(
				$elm$html$Html$Attributes$id('mainContainer'))
			]));
};
var $author$project$Chat_Creator$view = function (model) {
	var _v0 = model.dragStatus;
	if (_v0.$ === 'SubstanceSearch') {
		var coor = _v0.a;
		return {
			body: _List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$layout,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
						]),
					A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
							]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$row,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$height(
										$mdgriffith$elm_ui$Element$fillPortion(1))
									]),
								A2(
									$elm$core$List$map,
									function (a) {
										return $author$project$Chat_Creator$plansWidget(
											_Utils_Tuple2(model, a));
									},
									model.widgetBlueprints)),
								A2(
								$author$project$Graphic_Downloader$showImageList,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$height(
										$mdgriffith$elm_ui$Element$fillPortion(4)),
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
									]),
								model.imgChoices),
								A2(
								$author$project$Graphic_Downloader$showVideoList,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$height(
										$mdgriffith$elm_ui$Element$fillPortion(4)),
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
									]),
								model.videoChoices)
							])))
				]),
			title: 'LUCAS CHAT'
		};
	} else {
		var _v1 = model.draggedWidget;
		if (_v1.$ === 'Nothing') {
			var _v2 = model.selectedWidget;
			if (_v2.$ === 'Nothing') {
				return {
					body: _List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$alignTop
								]),
							A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$alignTop
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$height(
												$mdgriffith$elm_ui$Element$fillPortion(1)),
												$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
											]),
										_Utils_ap(
											A2(
												$elm$core$List$map,
												function (a) {
													return $author$project$Chat_Creator$plansWidget(
														_Utils_Tuple2(model, a));
												},
												model.widgetBlueprints),
											_List_fromArray(
												[
													A2(
													$mdgriffith$elm_ui$Element$Input$button,
													_List_fromArray(
														[
															A2(
															$mdgriffith$elm_ui$Element$Border$innerGlow,
															A3($mdgriffith$elm_ui$Element$rgb255, 15, 5, 20),
															2)
														]),
													{
														label: $mdgriffith$elm_ui$Element$text('Send message'),
														onPress: $elm$core$Maybe$Just($author$project$Chat_Creator$SaveChatInfo)
													})
												]))),
										$mdgriffith$elm_ui$Element$text('Select a Widget or create a selection'),
										A2(
										$mdgriffith$elm_ui$Element$row,
										$author$project$Chat_Creator$secondContainerAttributes(
											_Utils_ap(
												A2($elm$core$List$map, $author$project$Chat_Creator$afficheEnFace, model.chatInfo.completedWidgets),
												A2($elm$core$List$map, $author$project$Chat_Creator$askQuestion, model.chatInfo.groupWidgets))),
										_List_Nil)
									])))
						]),
					title: 'LUCAS CHAT'
				};
			} else {
				var selWidgets = _v2.a;
				return {
					body: _List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$alignTop
								]),
							A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$alignTop
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$height(
												$mdgriffith$elm_ui$Element$fillPortion(1)),
												$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
											]),
										A2(
											$elm$core$List$map,
											function (a) {
												return $author$project$Chat_Creator$plansWidget(
													_Utils_Tuple2(model, a));
											},
											model.widgetBlueprints)),
										$mdgriffith$elm_ui$Element$text('Selection confirmed'),
										A2(
										$mdgriffith$elm_ui$Element$row,
										_Utils_ap(
											$author$project$Chat_Creator$secondContainerAttributes(
												_Utils_ap(
													A2(
														$elm$core$List$map,
														$author$project$Chat_Creator$afficheEnFace,
														A2(
															$elm$core$List$filter,
															function (a) {
																return A2($elm_community$list_extra$List$Extra$notMember, a, selWidgets);
															},
															model.chatInfo.completedWidgets)),
													A2($elm$core$List$map, $author$project$Chat_Creator$illumineEnFace, selWidgets))),
											A2($elm$core$List$map, $author$project$Chat_Creator$askQuestion, model.chatInfo.groupWidgets)),
										_List_Nil)
									])))
						]),
					title: 'LUCAS CHAT'
				};
			}
		} else {
			var widget = _v1.a;
			var _v3 = widget.category;
			switch (_v3.$) {
				case 'Visual':
					return {
						body: _List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$layout,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
									]),
								A2(
									$mdgriffith$elm_ui$Element$column,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
											$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
										]),
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$row,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$height(
													$mdgriffith$elm_ui$Element$fillPortion(1)),
													$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
												]),
											A2(
												$elm$core$List$map,
												function (a) {
													return $author$project$Chat_Creator$plansWidget(
														_Utils_Tuple2(model, a));
												},
												model.widgetBlueprints)),
											A2(
											$mdgriffith$elm_ui$Element$row,
											_Utils_ap(
												$author$project$Chat_Creator$mainContainerAttributes(
													_List_fromArray(
														[
															$author$project$Chat_Creator$onDrop($author$project$Chat_Creator$DropWidgetOnCanvas),
															$mdgriffith$elm_ui$Element$htmlAttribute(
															A2(
																$elm$html$Html$Events$custom,
																'dragover',
																$elm$json$Json$Decode$succeed(
																	{message: $author$project$Chat_Creator$RienFaire, preventDefault: true, stopPropagation: true})))
														])),
												_Utils_ap(
													A2($elm$core$List$map, $author$project$Chat_Creator$afficheEnFace, model.chatInfo.completedWidgets),
													A2($elm$core$List$map, $author$project$Chat_Creator$askQuestion, model.chatInfo.groupWidgets))),
											_List_Nil)
										])))
							]),
						title: 'LUCAS CHAT'
					};
				case 'Tool':
					return {
						body: _List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$layout,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
									]),
								A2(
									$mdgriffith$elm_ui$Element$column,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
											$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
										]),
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$row,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$height(
													$mdgriffith$elm_ui$Element$fillPortion(1)),
													$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
												]),
											A2(
												$elm$core$List$map,
												function (a) {
													return $author$project$Chat_Creator$plansWidget(
														_Utils_Tuple2(model, a));
												},
												model.widgetBlueprints)),
											A2(
											$mdgriffith$elm_ui$Element$row,
											$author$project$Chat_Creator$mainContainerAttributes(
												_Utils_ap(
													A2($elm$core$List$map, $author$project$Chat_Creator$prepareWidget, model.chatInfo.completedWidgets),
													A2($elm$core$List$map, $author$project$Chat_Creator$askQuestion, model.chatInfo.groupWidgets))),
											_List_Nil)
										])))
							]),
						title: 'LUCAS CHAT'
					};
				default:
					return {
						body: _List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$layout,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
									]),
								A2(
									$mdgriffith$elm_ui$Element$column,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
											$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
										]),
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$row,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$height(
													$mdgriffith$elm_ui$Element$fillPortion(1)),
													$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
												]),
											A2(
												$elm$core$List$map,
												function (a) {
													return $author$project$Chat_Creator$plansWidget(
														_Utils_Tuple2(model, a));
												},
												model.widgetBlueprints)),
											$mdgriffith$elm_ui$Element$text('Place group widget'),
											A2(
											$mdgriffith$elm_ui$Element$row,
											_Utils_ap(
												$author$project$Chat_Creator$mainContainerAttributes(
													_List_fromArray(
														[
															$author$project$Chat_Creator$onDrop($author$project$Chat_Creator$DropWidgetOnCanvas),
															$mdgriffith$elm_ui$Element$htmlAttribute(
															A2(
																$elm$html$Html$Events$custom,
																'dragover',
																$elm$json$Json$Decode$succeed(
																	{message: $author$project$Chat_Creator$RienFaire, preventDefault: true, stopPropagation: true})))
														])),
												_Utils_ap(
													A2($elm$core$List$map, $author$project$Chat_Creator$afficheEnFace, model.chatInfo.completedWidgets),
													A2($elm$core$List$map, $author$project$Chat_Creator$askQuestion, model.chatInfo.groupWidgets))),
											_List_Nil)
										])))
							]),
						title: 'LUCAS CHAT'
					};
			}
		}
	}
};
var $author$project$LucasCetPlatform$view = function (model) {
	var _v0 = model.userInfo;
	if (_v0.$ === 'Nothing') {
		return {
			body: _List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$layout,
					_List_Nil,
					A2(
						$mdgriffith$elm_ui$Element$column,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$paragraph,
								_List_Nil,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text('Login')
									])),
								A2(
								$mdgriffith$elm_ui$Element$link,
								_List_Nil,
								{
									label: $mdgriffith$elm_ui$Element$text('Click to log on facebook'),
									url: '/login/facebook'
								}),
								A2(
								$mdgriffith$elm_ui$Element$paragraph,
								_List_Nil,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text(
										$author$project$SubstancePlayer$displayErrorMsg(model.errorMsg))
									]))
							])))
				]),
			title: 'LUCAS CET'
		};
	} else {
		var info = _v0.a;
		var _v1 = model.displayMode;
		switch (_v1.$) {
			case 'ChatDisplay':
				var _v2 = model.externals;
				if (_v2.$ === 'ChatModel') {
					var modelDida = _v2.a;
					return A2(
						$author$project$LucasCetPlatform$mapDocument,
						$author$project$LucasCetPlatform$Chat,
						$author$project$Chat_Creator$view(modelDida));
				} else {
					return {
						body: _List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$layout,
								_List_Nil,
								$mdgriffith$elm_ui$Element$text('Model Error'))
							]),
						title: 'LUCAS CET'
					};
				}
			case 'LoginDisplay':
				return ((info.userId === '105882307882687') || (info.userId === '112747567193397')) ? {
					body: _List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Background$color(
									A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229))
								]),
							A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$centerX,
										$mdgriffith$elm_ui$Element$paddingEach(
										{bottom: 0, left: 0, right: 0, top: 35})
									]),
								_List_fromArray(
									[
										$author$project$LucasCetPlatform$styledHeader,
										A2(
										$mdgriffith$elm_ui$Element$column,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$alignTop,
												$mdgriffith$elm_ui$Element$centerX,
												$mdgriffith$elm_ui$Element$width(
												$mdgriffith$elm_ui$Element$px(810)),
												A2($mdgriffith$elm_ui$Element$spacingXY, 0, 18)
											]),
										_List_fromArray(
											[
												A2(
												$mdgriffith$elm_ui$Element$row,
												_List_fromArray(
													[
														$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
														$mdgriffith$elm_ui$Element$height(
														$mdgriffith$elm_ui$Element$px(290)),
														A2($mdgriffith$elm_ui$Element$spacingXY, 18, 0)
													]),
												_List_fromArray(
													[
														A2(
														$mdgriffith$elm_ui$Element$link,
														_List_Nil,
														{
															label: A4($author$project$LucasCetPlatform$styledLinkLabel, 'MULTIMEDIA', 'img/menu-item-3.png', true, false),
															url: '/multimedia'
														}),
														A2(
														$mdgriffith$elm_ui$Element$link,
														_List_Nil,
														{
															label: A4($author$project$LucasCetPlatform$styledLinkLabel, 'Application Artisanale', 'img/menu-item-4.png', false, false),
															url: '/chat'
														})
													])),
												A2(
												$mdgriffith$elm_ui$Element$paragraph,
												_List_Nil,
												_List_fromArray(
													[
														$mdgriffith$elm_ui$Element$text(
														$author$project$SubstancePlayer$displayErrorMsg(model.errorMsg))
													]))
											]))
									])))
						]),
					title: 'LUCAS CET'
				} : {
					body: _List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Background$color(
									A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229))
								]),
							A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$centerX,
										$mdgriffith$elm_ui$Element$paddingEach(
										{bottom: 0, left: 0, right: 0, top: 35})
									]),
								_List_fromArray(
									[
										$author$project$LucasCetPlatform$styledHeader,
										A2(
										$mdgriffith$elm_ui$Element$column,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$alignTop,
												$mdgriffith$elm_ui$Element$centerX,
												$mdgriffith$elm_ui$Element$width(
												$mdgriffith$elm_ui$Element$px(810)),
												A2($mdgriffith$elm_ui$Element$spacingXY, 0, 18)
											]),
										_List_fromArray(
											[
												A2(
												$mdgriffith$elm_ui$Element$row,
												_List_fromArray(
													[
														$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
														$mdgriffith$elm_ui$Element$height(
														$mdgriffith$elm_ui$Element$px(290)),
														A2($mdgriffith$elm_ui$Element$spacingXY, 18, 0)
													]),
												_List_fromArray(
													[
														A2(
														$mdgriffith$elm_ui$Element$link,
														_List_Nil,
														{
															label: A4($author$project$LucasCetPlatform$styledLinkLabel, 'DIDACTIC APPLICATION', 'img/menu-item-1.png', true, true),
															url: '/didactique'
														}),
														A2(
														$mdgriffith$elm_ui$Element$link,
														_List_Nil,
														{
															label: A4($author$project$LucasCetPlatform$styledLinkLabel, 'DICTIONNAIRE SUBSTANCE', 'img/menu-item-2.png', false, true),
															url: '/dictionnaire'
														})
													])),
												A2(
												$mdgriffith$elm_ui$Element$row,
												_List_fromArray(
													[
														$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
														$mdgriffith$elm_ui$Element$height(
														$mdgriffith$elm_ui$Element$px(290)),
														A2($mdgriffith$elm_ui$Element$spacingXY, 18, 0)
													]),
												_List_fromArray(
													[
														A2(
														$mdgriffith$elm_ui$Element$link,
														_List_Nil,
														{
															label: A4($author$project$LucasCetPlatform$styledLinkLabel, 'MULTIMEDIA', 'img/menu-item-3.png', true, false),
															url: '/multimedia'
														}),
														A2(
														$mdgriffith$elm_ui$Element$link,
														_List_Nil,
														{
															label: A4($author$project$LucasCetPlatform$styledLinkLabel, 'CREER UNE APPLICATION', 'img/menu-item-4.png', false, false),
															url: '/applicationModule'
														})
													])),
												A2(
												$mdgriffith$elm_ui$Element$paragraph,
												_List_Nil,
												_List_fromArray(
													[
														$mdgriffith$elm_ui$Element$text(
														$author$project$SubstancePlayer$displayErrorMsg(model.errorMsg))
													]))
											]))
									])))
						]),
					title: 'LUCAS CET'
				};
			case 'PlayApplication':
				var _v3 = model.player.chosenApp;
				if (_v3.$ === 'Nothing') {
					return {
						body: _List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$layout,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
									]),
								A2(
									$mdgriffith$elm_ui$Element$column,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
											$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
											$mdgriffith$elm_ui$Element$centerX,
											$mdgriffith$elm_ui$Element$Background$color(
											A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229)),
											$mdgriffith$elm_ui$Element$paddingEach(
											{bottom: 20, left: 20, right: 20, top: 35}),
											$mdgriffith$elm_ui$Element$scrollbarY
										]),
									_List_fromArray(
										[
											$author$project$LucasCetPlatform$styledHeader,
											$author$project$ApplicationPlayer$displayAvailableApp(model.player)
										])))
							]),
						title: 'LUCAS CET'
					};
				} else {
					var appChoice = _v3.a;
					return {
						body: _List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$layout,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
									]),
								A2(
									$mdgriffith$elm_ui$Element$column,
									$author$project$ApplicationPlayer$appPlayAttribute(model.player),
									_List_fromArray(
										[
											$author$project$LucasCetPlatform$styledHeader,
											$author$project$ApplicationPlayer$displayTitle(appChoice),
											A2($author$project$ApplicationPlayer$displayChosenApp, model.player, appChoice)
										])))
							]),
						title: 'LUCAS CET'
					};
				}
			case 'ChatMessages':
				var _v4 = model.friends;
				if (_v4.$ === 'Just') {
					var lstFr = _v4.a;
					var _v5 = model.chatMsg;
					if (_v5.$ === 'Just') {
						var lstMsgs = _v5.a;
						return {
							body: _List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$layout,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Background$color(
											A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229))
										]),
									A2(
										$mdgriffith$elm_ui$Element$column,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
												$mdgriffith$elm_ui$Element$centerX,
												$mdgriffith$elm_ui$Element$paddingEach(
												{bottom: 0, left: 0, right: 0, top: 35})
											]),
										_Utils_ap(
											_List_fromArray(
												[
													$author$project$LucasCetPlatform$styledHeader,
													$mdgriffith$elm_ui$Element$text(info.login)
												]),
											_Utils_ap(
												A2(
													$elm$core$List$map,
													function (a) {
														return A2($author$project$LucasCetPlatform$displayChatMsg, a, model.friends);
													},
													lstMsgs),
												A2($elm$core$List$map, $author$project$LucasCetPlatform$displayChatRecipient, lstFr)))))
								]),
							title: 'LUCAS CET'
						};
					} else {
						return {
							body: _List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$layout,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Background$color(
											A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229))
										]),
									A2(
										$mdgriffith$elm_ui$Element$column,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
												$mdgriffith$elm_ui$Element$centerX,
												$mdgriffith$elm_ui$Element$paddingEach(
												{bottom: 0, left: 0, right: 0, top: 35})
											]),
										_Utils_ap(
											_List_fromArray(
												[
													$author$project$LucasCetPlatform$styledHeader,
													$mdgriffith$elm_ui$Element$text(info.login)
												]),
											A2($elm$core$List$map, $author$project$LucasCetPlatform$displayChatRecipient, lstFr))))
								]),
							title: 'LUCAS CET'
						};
					}
				} else {
					return {
						body: _List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$layout,
								_List_Nil,
								$mdgriffith$elm_ui$Element$text('Model Error'))
							]),
						title: 'LUCAS CET'
					};
				}
			case 'UploadFile':
				return {
					body: _List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Background$color(
									A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229))
								]),
							A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$centerX,
										$mdgriffith$elm_ui$Element$paddingEach(
										{bottom: 0, left: 0, right: 0, top: 35})
									]),
								_List_fromArray(
									[
										$author$project$LucasCetPlatform$styledHeader,
										$mdgriffith$elm_ui$Element$text('Site Visumation'),
										$mdgriffith$elm_ui$Element$text('Gestion Multimédia'),
										$mdgriffith$elm_ui$Element$text('Déposer un fichier ci-dessous pour le télécharger'),
										A2(
										$mdgriffith$elm_ui$Element$column,
										_Utils_ap(
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
													$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
													$mdgriffith$elm_ui$Element$Background$color(
													A3($mdgriffith$elm_ui$Element$rgb255, 14, 255, 235))
												]),
											A2(
												$elm$core$List$map,
												$mdgriffith$elm_ui$Element$htmlAttribute,
												$mpizenberg$elm_pointer_events$Html$Events$Extra$Drag$onFileFromOS(
													{onDrop: $author$project$LucasCetPlatform$SendFiles, onEnter: $elm$core$Maybe$Nothing, onLeave: $elm$core$Maybe$Nothing, onOver: $author$project$LucasCetPlatform$Start}))),
										_List_fromArray(
											[
												A2(
												$mdgriffith$elm_ui$Element$el,
												_List_fromArray(
													[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
												$mdgriffith$elm_ui$Element$text('Déposer le fichier ici')),
												A2(
												$mdgriffith$elm_ui$Element$image,
												_List_fromArray(
													[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
												{description: '', src: '/img/multimedia.jpg'}),
												A2(
												$mdgriffith$elm_ui$Element$el,
												_List_fromArray(
													[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
												$mdgriffith$elm_ui$Element$text(
													$elm$core$String$fromFloat(model.uploadValue)))
											]))
									])))
						]),
					title: 'LUCAS CET'
				};
			case 'SelectMedia':
				return {
					body: _List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
								]),
							A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$padding(30)
									]),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text('Site Visumation'),
										$mdgriffith$elm_ui$Element$text('Dictionnaire Substance'),
										A2(
										$author$project$Graphic_Downloader$showImageList,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$height(
												$mdgriffith$elm_ui$Element$fillPortion(4)),
												$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
											]),
										model.imgChoices),
										A2(
										$author$project$Graphic_Downloader$showVideoList,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$height(
												$mdgriffith$elm_ui$Element$fillPortion(4)),
												$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
											]),
										model.vidChoices)
									])))
						]),
					title: 'LUCAS CET'
				};
			case 'ViewSubstance':
				return {
					body: _List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Background$color(
									A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229))
								]),
							A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$centerX,
										$mdgriffith$elm_ui$Element$paddingEach(
										{bottom: 0, left: 0, right: 0, top: 35})
									]),
								_List_fromArray(
									[
										$author$project$LucasCetPlatform$styledHeader,
										$mdgriffith$elm_ui$Element$text('Site Visumation'),
										$mdgriffith$elm_ui$Element$text('Dictionnaire Substance'),
										A3(
										$author$project$SubstancePlayer$showSubstanceList,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$height(
												$mdgriffith$elm_ui$Element$fillPortion(4)),
												$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
											]),
										model.backendCall,
										model.subChoices)
									])))
						]),
					title: 'LUCAS CET'
				};
			case 'DicoSubstance':
				return {
					body: _List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Background$color(
									A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229))
								]),
							A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$centerX,
										$mdgriffith$elm_ui$Element$paddingEach(
										{bottom: 0, left: 0, right: 0, top: 35})
									]),
								_List_fromArray(
									[
										$author$project$LucasCetPlatform$styledHeader,
										$mdgriffith$elm_ui$Element$text('Site Visumation'),
										$mdgriffith$elm_ui$Element$text('Dictionnaire Substance'),
										$author$project$Graphic_Element$displayCanvas(model.subEditor)
									])))
						]),
					title: 'LUCAS CET'
				};
			case 'ApplicationModule':
				return {
					body: _List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Background$color(
									A3($mdgriffith$elm_ui$Element$rgb255, 229, 229, 229))
								]),
							A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$centerX,
										$mdgriffith$elm_ui$Element$paddingEach(
										{bottom: 0, left: 0, right: 0, top: 35})
									]),
								_List_fromArray(
									[
										$author$project$LucasCetPlatform$styledHeader,
										$mdgriffith$elm_ui$Element$text('Site Visumation'),
										$mdgriffith$elm_ui$Element$text('Applications :'),
										$author$project$ApplicationCreator$displayModule(model.appEditor)
									])))
						]),
					title: 'LUCAS CET'
				};
			default:
				return {
					body: _List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
								]),
							A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$padding(30)
									]),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text('Site Visumation'),
										$mdgriffith$elm_ui$Element$text('Table des Substances'),
										$author$project$SubstancePlayer$displayTable(model.subChoices)
									])))
						]),
					title: 'LUCAS CET'
				};
		}
	}
};
var $author$project$LucasCetPlatform$main = $elm$browser$Browser$application(
	{init: $author$project$LucasCetPlatform$init, onUrlChange: $author$project$LucasCetPlatform$ChangeUrl, onUrlRequest: $author$project$LucasCetPlatform$RequestUrl, subscriptions: $author$project$LucasCetPlatform$subscriptions, update: $author$project$LucasCetPlatform$update, view: $author$project$LucasCetPlatform$view});
_Platform_export({'LucasCetPlatform':{'init':$author$project$LucasCetPlatform$main(
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2(
				$elm$json$Json$Decode$map,
				$elm$core$Maybe$Just,
				A2(
					$elm$json$Json$Decode$andThen,
					function (userId) {
						return A2(
							$elm$json$Json$Decode$andThen,
							function (uploadVideoId) {
								return A2(
									$elm$json$Json$Decode$andThen,
									function (uploadImageId) {
										return A2(
											$elm$json$Json$Decode$andThen,
											function (login) {
												return $elm$json$Json$Decode$succeed(
													{login: login, uploadImageId: uploadImageId, uploadVideoId: uploadVideoId, userId: userId});
											},
											A2($elm$json$Json$Decode$field, 'login', $elm$json$Json$Decode$string));
									},
									A2($elm$json$Json$Decode$field, 'uploadImageId', $elm$json$Json$Decode$string));
							},
							A2($elm$json$Json$Decode$field, 'uploadVideoId', $elm$json$Json$Decode$string));
					},
					A2($elm$json$Json$Decode$field, 'userId', $elm$json$Json$Decode$string)))
			])))(0)}});}(this));