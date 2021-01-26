<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
//define( 'DB_NAME', 'wordpress_maja' );
define( 'DB_NAME', $_ENV["MYSQL_ADDON_DB"] );

/** MySQL database username */
//define( 'DB_USER', 'root' );
define( 'DB_USER', $_ENV["MYSQL_ADDON_USER"] );

/** MySQL database password */
//define( 'DB_PASSWORD', '' );
define( 'DB_PASSWORD', $_ENV["MYSQL_ADDON_PASSWORD"] );

/** MySQL hostname */
//define( 'DB_HOST', 'localhost' );
define( 'DB_HOST', $_ENV["MYSQL_ADDON_HOST"] );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '}crJ5coCMiMrxc<QtA8L:%`$F5tD.HI3zQ=nq0xswql~T^i7$x_DHr8&_R6C_+&}' );
define( 'SECURE_AUTH_KEY',  '^snjaRgN5!zvXR&v;J+QX#;sTq`G(S@O}6NJ-=z6tU@I!}J}gKGq3~;sCjC]?(U0' );
define( 'LOGGED_IN_KEY',    'U8XFmyy96>QLUlNCe%$h2:1LcCpBa8moIPog,J%Bo$/>gRQg1N]KK($0vH?)tP|9' );
define( 'NONCE_KEY',        '3}|j4r n!S)VbR`oUI9FHsAkX?6)y5`xGXi8|p2Qk2;^-mADJ#f&TSOq[E,h!8vv' );
define( 'AUTH_SALT',        '~e3<%u{Fs6F.9<se}>fdz3^SLR[o.l,di7JP@*udeGUx:uCsL%y0?N&zr`+;N CA' );
define( 'SECURE_AUTH_SALT', '^WnYKi71@2dF6ryHAql,0q7S,S!;NQBnaPs1ER0<B>%]{9g{~YB?%&)d:G+pYJ7^' );
define( 'LOGGED_IN_SALT',   'FK>8q|BbMrESu$@*KB>.+8v?vrHRY~;<.jM6w8`(g{O7V9>U^`eP`)!N/KQs8`6b' );
define( 'NONCE_SALT',       '>q^Fzl03bt{UpI7A/{[]9p+lT=ib5qNe;A,.1cxpz%pG9_Z^x#dpd7/[/}&hV/~$' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
