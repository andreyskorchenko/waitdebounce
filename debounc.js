export function debounce(fn, ms) {
    var to = undefined;

    return function() {
        var tc = this;
        var ta = arguments;

        clearTimeout(to);

        to = setTimeout(function() {
            fn.apply(tc, ta);
        }, ms);
    };
}