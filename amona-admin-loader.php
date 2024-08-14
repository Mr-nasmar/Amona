<?php
/**
 * Amona Admin Loader
 *
 * @package     Amona
 * @author      nasdesigns
 * @copyright   Copyright (c) 2024, Amona
 * @link        https://nasdesigns.rf.gd/
 * @since       Amona 1.2.7
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Amona_Admin_Loader' ) ) : 
	/**
	 * Amona_Admin_Loader
	 *
	 * @since 1.0.0
	 */
	class Amona_Admin_Loader {

		/**
		 * Instance
		 *
		 * @access private
		 * @var null $instance
		 * @since 1.0.0
		 */
		private static $instance;

		/**
		 * Initiator
		 *
		 * @since 1.0.0
		 * @return object initialized object of class.
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				/** @psalm-suppress InvalidPropertyAssignmentValue */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
				self::$instance = new self();
				/** @psalm-suppress InvalidPropertyAssignmentValue */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
		    define( 'AMONA_THEME_ADMIN_DIR', AMONA_THEME_DIR . 'inc/admin/' );
		    define( 'AMONA_THEME_ADMIN_URI', AMONA_THEME_URI . 'inc/admin/' );
		    
			$this->includes();
		}

		/**
		 * Include required classes.
		 *
		 * @since 1.0.0
		 */
		public function includes() {
			/* Ajax init */
			require_once AMONA_THEME_ADMIN_DIR . 'includes/amona-admin-ajax.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude.FileIncludeFound -- Not a template file so loading in a normal way.

			/* Setup Menu */
			require_once AMONA_THEME_ADMIN_DIR . 'includes/amona-menu.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude.FileIncludeFound -- Not a template file so loading in a normal way.
		
			require_once AMONA_THEME_ADMIN_DIR . 'includes/amona-theme-builder-free.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude.FileIncludeFound -- Not a template file so loading in a normal way.
		}
	}
endif;

Amona_Admin_Loader::get_instance();
