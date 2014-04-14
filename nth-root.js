/*:
	@module-configuration:
		{
			"fileName": "nth-root",
			"moduleName": "nthRoot",
			"authorName": "Richeve S. Bebedor",
			"isGlobal": true
		}
	@end-module-cofiguration

	@module-documentation:
		Calculate the nth root of a number.
		This does not support bigger numbers.
	@end-module-documentation
*/
var nthRoot = function nthRoot( base, root ){
	/*:
		@meta-configuration:
			{
				"base:required": "number",
				"root:required": "number"
			}
		@end-meta-configuration
	*/
	root = -1 * Math.abs( root );
	return Math.pow( base, 1 / root );
};