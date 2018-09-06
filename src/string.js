let startsWith = (str, prefix) => str.indexOf(prefix) === 0;
let endsWith = (str, suffix) => str.indexOf(suffix, str.length - suffix.length) !== -1;


module.exports = {
	startsWith: startsWith,
	endsWith: endsWith
}