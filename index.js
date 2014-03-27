
module.exports = autorequire;

/**
 * Auto-require component-bundle(1) plugin.
 * Automatically requires the current
 * bundle's `name`.
 *
 * @api public
 * @param {Builder} builder
 */

function autorequire(builder) {
  var name = builder.config.local[0];
  builder.append('require("' + name + '");');
}
