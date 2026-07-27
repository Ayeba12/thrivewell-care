<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          's TK11-1?The3XTWJ[VbW{8kO3]eC6O[c !b6,zZrKRi9[bY7jjH.WcI*=Yc8C4v' );
define( 'SECURE_AUTH_KEY',   '9kXxcw,I(<15 ,hTg(1[z #$y_?kg L7]6=HfZ^.H.KB+v9[I5Dtfge3dK|@H;Q*' );
define( 'LOGGED_IN_KEY',     'x#@R.+8=VND.;;< (CKbP,%+w/NocjkQ<PxhHdt?E.{,3aTVugtn7}EKwiy Tke ' );
define( 'NONCE_KEY',         '?pv%G@W$Fe6LvyW0hNQf=!YM-_F:g5tYGm6%0nawY,+K}7A=Zl?ye^#B8u=U#Q)t' );
define( 'AUTH_SALT',         'jAU=h9G<SD*?Ld]C>vJ~R%@4m<62)k4D~r&J<BoHD?r:/l8ggbEpXo>.<m.Ae1<3' );
define( 'SECURE_AUTH_SALT',  'K^O6,%fw4*v Us:%qj$ @|eM&Ac]&QxWk*D uz_?J%;~nLn;.$ 5KYV0RI+5@GoG' );
define( 'LOGGED_IN_SALT',    'MwU+x;p_@}#|YX*%3f:~@H$upa:vCe{H*i{Mrj)>_a^l<kDUma<AF5n}D*lCaJ9*' );
define( 'NONCE_SALT',        'gRxwKyG5Y0OIxHgY|gks]bx-5N#Ao)ifl$97RHLU(9^~fWd8|t.U9 ;G]fpyItED' );
define( 'WP_CACHE_KEY_SALT', 'CK9X<[s+Wb.]rL0b0nH1}={fAhtpT|T+W*2lw>x$iPQ).0>cIxFly-Gy#Lhb/Ph-' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



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
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
