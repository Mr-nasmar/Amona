<?php
/**
 * Amona_Menu.
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

/**
 * Amona_Menu.
 *
 * @since 1.0.2
 */
class Amona_Menu {

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
	 * Page title
	 *
	 * @since 1.0.0
	 * @var string $page_title
	 */
	public static $page_title = 'amona';

	/**
	 * Plugin slug
	 *
	 * @since 1.0.0
	 * @var string $plugin_slug
	 */
	public static $plugin_slug = 'amona';

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->initialize_hooks();
	}

	/**
	 * Init Hooks.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function initialize_hooks() {

		self::$page_title  = apply_filters( 'amona_page_title', esc_html__( 'Amona', 'amona' ) );
		self::$plugin_slug = self::get_theme_page_slug();

		add_action( 'admin_menu', array( $this, 'setup_menu' ) );
		add_action( 'admin_init', array( $this, 'settings_admin_scripts' ) );

		add_filter( 'install_plugins_tabs', array( $this, 'add_amona_woo_suggestions_link' ), 1 );
		add_action( 'install_plugins_pre_amona-woo', array( $this, 'update_plugin_suggestions_tab_link' ) );
	}

	/**
	 * Add amona~Woo Suggestions plugin tab link.
	 *
	 * @param array $tabs Plugin tabs.
	 * @since 1.0.0
	 * @return array
	 */
	public function add_amona_woo_suggestions_link( $tabs ) {
		if ( class_exists( 'WooCommerce' ) ) {
			$tabs['amona-woo'] = esc_html__( 'For ', 'amona' ) . self::$page_title . '~Woo';
		}
		return $tabs;
	}

	/**
	 * Update plugin suggestions tab link.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function update_plugin_suggestions_tab_link() {
		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		if ( ! isset( $_GET['tab'] ) || 'amona-woo' !== $_GET['tab'] ) {
			return;
		}
		// phpcs:enable WordPress.Security.NonceVerification.Recommended

		$extensions_url = add_query_arg(
			array(
				'page' => self::$plugin_slug,
				'path' => 'woocommerce',
				'ref'  => 'plugins',
			),
			admin_url( 'admin.php' )
		);

		wp_safe_redirect( $extensions_url );
		exit;
	}

	/**
	 * Theme options page Slug getter including White Label string.
	 *
	 * @since 1.0.0
	 * @return string Theme Options Page Slug.
	 */
	public static function get_theme_page_slug() {
		return apply_filters( 'amona_theme_page_slug', self::$plugin_slug );
	}

	/**
	 *  Initialize after amona gets loaded.
	 *
	 * @since 1.0.0
	 */
	public function settings_admin_scripts() {
		// Enqueue admin scripts.
		/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		if ( ! empty( $_GET['page'] ) && ( self::$plugin_slug === $_GET['page'] || false !== strpos( $_GET['page'], self::$plugin_slug . '_' ) ) ) { //phpcs:ignore
			/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
			add_action( 'admin_enqueue_scripts', array( $this, 'styles_scripts' ) );
			add_filter( 'admin_footer_text', array( $this, 'amona_admin_footer_link' ), 99 );
		}
	}

	/**
	 * Add submenu to admin menu.
	 *
	 * @since 1.0.0
	 */
	public function setup_menu() {
		global $submenu;

		$capability = 'manage_options';

		if ( ! current_user_can( $capability ) ) {
			return;
		}

		$amona_icon = apply_filters( 'amona_menu_icon', 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA4MDAgODAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4MDAgODAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBpZD0iWE1MSURfMTZfIiBkPSJNNDAwLDI1LjFDMTkzLDI1LjEsMjUuMSwxOTMsMjUuMSw0MDBTMTkzLDc3NC45LDQwMCw3NzQuOVM3NzQuOSw2MDcsNzc0LjksNDAwUzYwNywyNS4xLDQwMCwyNS4xeg0KCSBNMjEzLjgsMzIyLjNsNzkuNyw1MC45bDIxMi42LTM2Ljd2NzMuMmMwLDIyLjMtMTAuOCwzNi42LTI1LjksNDAuNGwtMTg2LjcsMzYuN2wtNTMuOC0zMy45Yy0xNy4yLTE1LjItMjUuOS0xOC4xLTI1LjktNDAuNFYzMjIuM3oNCgkgTTU4OC40LDU2NGMwLDIyLjMtMTAuOCwzNi42LTI1LjksNDAuNGwtMjY5LDUwLjlsLTUzLjgtMzMuOWMtMTcuMi0xNS4yLTI1LjktMTguMS0yNS45LTQwLjR2LTkwLjJsNzkuNyw1MC45bDI5NC45LTUwLjlWNTY0eg0KCSBNNTg4LjQsMjE4YzAsMjIuMy0xMC44LDM2LjYtMjUuOSw0MC40bC0yNjksNTAuOWwtNTMuOC0zMy45Yy0xNy4yLTE1LjItMjUuOS0xOC4xLTI1LjktNDAuNHYtOTAuMmw3OS43LDUwLjlsMjk0LjktNTAuOVYyMTh6Ii8+DQo8L3N2Zz4NCg==' );
		$priority   = apply_filters( 'amona_menu_priority', 59 );

		add_menu_page( // phpcs:ignore WPThemeReview.PluginTerritory.NoAddAdminPages.add_menu_pages_add_menu_page -- Taken the menu on top level
			self::$page_title,
			self::$page_title,
			$capability,
			self::$plugin_slug,
			array( $this, 'render_admin_dashboard' ),
			$amona_icon,
			$priority
		);

		// Add Customize submenu.
		add_submenu_page( // phpcs:ignore WPThemeReview.PluginTerritory.NoAddAdminPages.add_menu_pages_add_submenu_page -- Taken the menu on top level
			self::$plugin_slug,
			__( 'Customize', 'amona' ),
			__( 'Customize', 'amona' ),
			$capability,
			'customize.php'
		);

		// Add Custom Layout submenu.
		/** @psalm-suppress UndefinedClass */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		$show_custom_layout_submenu = ( defined( 'AMONA_EXT_VER' ) && ! Amona_Ext_Extension::is_active( 'advanced-hooks' ) ) ? false : true;
		/** @psalm-suppress UndefinedClass */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort

		if ( $show_custom_layout_submenu && defined( 'AMONA_EXT_VER' ) && version_compare( AMONA_EXT_VER, '4.5.0', '<' ) ) {
			add_submenu_page( // phpcs:ignore WPThemeReview.PluginTerritory.NoAddAdminPages.add_menu_pages_add_submenu_page -- Taken the menu on top level
				self::$plugin_slug,
				__( 'Custom Layouts', 'amona' ),
				__( 'Custom Layouts', 'amona' ),
				$capability,
				/** @psalm-suppress UndefinedClass */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
				( defined( 'AMONA_EXT_VER' ) && Amona_Ext_Extension::is_active( 'advanced-hooks' ) ) ? 'edit.php?post_type=amona-advanced-hook' : 'admin.php?page=' . self::$plugin_slug . '&path=custom-layouts'
				/** @psalm-suppress UndefinedClass */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
			);
		}

		if ( ! amona_is_white_labelled() ) {
			// Add amona~Woo Extensions page or Spectra submenu.
			if ( class_exists( 'WooCommerce' ) ) {
				add_submenu_page( // phpcs:ignore WPThemeReview.PluginTerritory.NoAddAdminPages.add_menu_pages_add_submenu_page -- Taken the menu on top level
					self::$plugin_slug,
					'WooCommerce',
					'WooCommerce',
					$capability,
					'admin.php?page=' . self::$plugin_slug . '&path=woocommerce'
				);
			} elseif ( ! $this->spectra_has_top_level_menu() ){
				add_submenu_page( // phpcs:ignore WPThemeReview.PluginTerritory.NoAddAdminPages.add_menu_pages_add_submenu_page -- Taken the menu on top level
					self::$plugin_slug,
					'Spectra',
					'Spectra',
					$capability,
					$this->get_spectra_page_admin_link()
				);
			} else {
				// Do nothing.
			}
		}

		// Rename to Home menu.
		$submenu[ self::$plugin_slug ][0][0] = esc_html__( 'Dashboard', 'amona' ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited -- Required to rename the home menu.
	}

	/**
	 * In version 2.4.1 Spectra introduces top level admin menu so there is no meaning to show Spectra submenu from amona menu.
	 *
	 * @since 1.0.0
	 * @return bool true|false.
	 */
	public function spectra_has_top_level_menu() {
		return defined( 'UAGB_VER' ) && version_compare( UAGB_VER, '2.4.1', '>=' ) ? true : false;
	}

	/**
	 * Provide the Spectra admin page URL.
	 *
	 * @since 1.0.0
	 * @return string url.
	 */
	public function get_spectra_page_admin_link() {
		$spectra_admin_url = defined( 'UAGB_VER' ) ? ( $this->spectra_has_top_level_menu() ? admin_url( 'admin.php?page=' . UAGB_SLUG ) : admin_url( 'options-general.php?page=' . UAGB_SLUG ) ) : 'admin.php?page=' . self::$plugin_slug . '&path=spectra';
		return apply_filters( 'amona_dashboard_spectra_admin_link', $spectra_admin_url );
	}

	/**
	 * Renders the admin settings.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function render_admin_dashboard() {
		$page_action = '';

		if ( isset( $_GET['action'] ) ) { //phpcs:ignore
			/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
			$page_action = sanitize_text_field( wp_unslash( $_GET['action'] ) ); //phpcs:ignore
			/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
			$page_action = str_replace( '_', '-', $page_action );
		}

		?>
		<div class="nas-menu-page-wrapper">
			<div id="nas-menu-page">
				<div class="nas-menu-page-content">
					<div id="amona-dashboard-app" class="amona-dashboard-app"> </div>
				</div>
			</div>
		</div>
		<?php
	}

	/**
	 * Enqueues the needed CSS/JS for the builder's admin settings page.
	 *
	 * @since 1.0.0
	 */
	public function styles_scripts() {

		if ( is_customize_preview() ) {
			return;
		}

		wp_enqueue_style( 'amona-admin-font', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap', array(), AMONA_THEME_VERSION ); // Styles.

		wp_enqueue_style( 'wp-components' );

		/** @psalm-suppress UndefinedClass */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		$show_self_branding = defined( 'AMONA_EXT_VER' ) && is_callable( 'Amona_Ext_White_Label_Markup::show_branding' ) ? Amona_Ext_White_Label_Markup::show_branding() : true;
		/** @psalm-suppress UndefinedClass */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		$user_firstname = wp_get_current_user()->user_firstname;
		$localize       = array(
			'current_user'           => ! empty( $user_firstname ) ? ucfirst( $user_firstname ) : ucfirst( wp_get_current_user()->display_name ),
			'admin_base_url'         => admin_url(),
			'plugin_dir'             => AMONA_THEME_DIR,
			'plugin_ver'             => defined( 'AMONA_EXT_VER' ) ? AMONA_EXT_VER : '',
			'version'                => AMONA_THEME_VERSION,
			'pro_available'          => defined( 'AMONA_EXT_VER' ) ? true : false,
			'pro_installed_status'   => 'installed' === self::get_plugin_status( 'amona-addon/amona-addon.php' ) ? true : false,
			'spectra_plugin_status'  => self::get_plugin_status( 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php' ),
			'theme_name'             => amona_get_theme_name(),
			'plugin_name'            => amona_get_addon_name(),
			'quick_settings'         => self::amona_get_quick_links(),
			'ajax_url'               => admin_url( 'admin-ajax.php' ),
			'is_whitelabel'          => amona_is_white_labelled(),
			'show_self_branding'     => $show_self_branding,
			'admin_url'              => admin_url( 'admin.php' ),
			'home_slug'              => self::$plugin_slug,
			'upgrade_url'            => AMONA_PRO_UPGRADE_URL,
			'customize_url'          => admin_url( 'customize.php' ),
			'amona_base_url'         => admin_url( 'admin.php?page=' . self::$plugin_slug ),
			'logo_url'               => apply_filters( 'amona_admin_menu_icon', AMONA_THEME_DIR . 'inc/assets/images/amona-logo.svg' ),
			'update_nonce'           => wp_create_nonce( 'amona_update_admin_setting' ),
			'integrations'           => self::amona_get_integrations(),
			'show_plugins'           => apply_filters( 'amona_show_free_extend_plugins', true ), // Legacy filter support.
			'useful_plugins'         => self::amona_get_useful_plugins(),
			'extensions'             => self::amona_get_pro_extensions(),
			'plugin_manager_nonce'   => wp_create_nonce( 'amona_plugin_manager_nonce' ),
			'plugin_installer_nonce' => wp_create_nonce( 'updates' ),
			'free_vs_pro_link'       => admin_url( 'admin.php?page=' . self::$plugin_slug . '&path=free-vs-pro' ),
			'show_builder_migration' => Amona_Builder_Helper::is_header_footer_builder_active(),
			'plugin_installing_text' => esc_html__( 'Installing', 'amona' ),
			'plugin_installed_text'  => esc_html__( 'Installed', 'amona' ),
			'plugin_activating_text' => esc_html__( 'Activating', 'amona' ),
			'plugin_activated_text'  => esc_html__( 'Activated', 'amona' ),
			'plugin_activate_text'   => esc_html__( 'Activate', 'amona' ),
			'starter_templates_data' => self::get_starter_template_plugin_data(),
			'amona_docs_data'        => amona_remote_docs_data(),
			'upgrade_notice'         => amona_showcase_upgrade_notices(),
			'show_banner_video'      => apply_filters( 'amona_show_banner_video', true ),
			'is_woo_active'          => class_exists( 'WooCommerce' ) ? true : false,
			'woo_extensions'         => self::amona_get_woo_extensions( false ),
		);

		$this->settings_app_scripts( apply_filters( 'amona_react_admin_localize', $localize ) );
	}

	/**
	 * Get customizer quick links for easy navigation.
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public static function amona_get_quick_links() {
		return apply_filters(
			'amona_quick_settings',
			array(
				'logo-favicon' => array(
					'title'     => __( 'Site Identity', 'amona' ),
					'quick_url' => admin_url( 'customize.php?autofocus[control]=site_icon' ),
				),
				'header'       => array(
					'title'     => __( 'Header Settings', 'amona' ),
					'quick_url' => admin_url( 'customize.php?autofocus[panel]=panel-header-group' ),
				),
				'footer'       => array(
					'title'     => __( 'Footer Settings', 'amona' ),
					'quick_url' => admin_url( 'customize.php?autofocus[section]=section-footer-group' ),
				),
				'colors'       => array(
					'title'     => __( 'Color', 'amona' ),
					'quick_url' => admin_url( 'customize.php?autofocus[section]=section-colors-background' ),
				),
				'typography'   => array(
					'title'     => __( 'Typography', 'amona' ),
					'quick_url' => admin_url( 'customize.php?autofocus[section]=section-typography' ),
				),
				'button'       => array(
					'title'     => __( 'Button', 'amona' ),
					'quick_url' => admin_url( 'customize.php?autofocus[section]=section-buttons' ),
				),
				'blog-options' => array(
					'title'     => __( 'Blog Options', 'amona' ),
					'quick_url' => admin_url( 'customize.php?autofocus[section]=section-blog-group' ),
				),
				'layout'       => array(
					'title'     => __( 'Layout', 'amona' ),
					'quick_url' => admin_url( 'customize.php?autofocus[section]=section-container-layout' ),
				),
				'menus'        => array(
					'title'     => __( 'Menus', 'amona' ),
					'quick_url' => admin_url( 'nav-menus.php' ),
				),
			)
		);
	}

	/**
	 * Get Starter Templates plugin data.
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public static function get_starter_template_plugin_data() {

		/** @psalm-suppress UndefinedClass */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		$st_data = array(
			'title'        => is_callable( 'Amona_Ext_White_Label_Markup::get_whitelabel_string' ) ? Amona_Ext_White_Label_Markup::get_whitelabel_string( 'amona-sites', 'name', __( 'Starter Templates', 'amona' ) ) : __( 'Starter Templates', 'amona' ),
			'description'  => is_callable( 'Amona_Ext_White_Label_Markup::get_whitelabel_string' ) ? Amona_Ext_White_Label_Markup::get_whitelabel_string( 'amona-sites', 'description', __( 'Create professional designed pixel perfect websites in minutes. Get access to 280+ pre-made full website templates for your favorite page builder.', 'amona' ) ) : __( 'Create professional designed pixel perfect websites in minutes. Get access to 280+ pre-made full website templates for your favorite page builder.', 'amona' ),
			'is_available' => defined( 'AMONA_PRO_SITES_VER' ) || defined( 'AMONA_SITES_VER' ) ? true : false,
			'redirection'  => admin_url( 'themes.php?page=starter-templates' ),
			'icon_path'    => 'https://ps.w.org/amona-sites/assets/icon-256x256.gif',
		);
		/** @psalm-suppress UndefinedClass */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort

		$skip_free_version = false;
		$pro_plugin_status = self::get_plugin_status( 'amona-pro-sites/amona-pro-sites.php' );

		if ( 'installed' === $pro_plugin_status || 'activated' === $pro_plugin_status ) {
			$skip_free_version = true;
			$st_data['slug']   = 'amona-pro-sites';
			$st_data['status'] = $pro_plugin_status;
			$st_data['path']   = 'amona-pro-sites/amona-pro-sites.php';
		}

		$free_plugin_status = self::get_plugin_status( 'amona-sites/amona-sites.php' );
		if ( ! $skip_free_version ) {
			$st_data['slug']   = 'amona-sites';
			$st_data['status'] = $free_plugin_status;
			$st_data['path']   = 'amona-sites/amona-sites.php';
		}

		return $st_data;
	}

	/**
	 * Get plugin status
	 *
	 * @since 1.0.0
	 *
	 * @param  string $plugin_init_file Plguin init file.
	 * @return mixed
	 */
	public static function get_plugin_status( $plugin_init_file ) {

		$installed_plugins = get_plugins();

		if ( ! isset( $installed_plugins[ $plugin_init_file ] ) ) {
			return 'install';
		} elseif ( is_plugin_active( $plugin_init_file ) ) {
			return 'activated';
		} else {
			return 'installed';
		}
	}

	/**
	 * Get amona's pro extension list.
	 *
	 * @since 1.0.0
	 * @return array
	 * @access public
	 */
	public static function amona_get_pro_extensions() {
		return apply_filters(
			'amona_addon_list',
			array(
				'colors-and-background' => array(
					'title'     => __( 'Colors & Background', 'amona' ),
					'class'     => 'nas-addon',
					'title_url' => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/colors-background-module/', 'dashboard', 'free-theme', 'documentation' ),
					'links'     => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/colors-background-module/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'typography'            => array(
					'title'     => __( 'Typography', 'amona' ),
					'class'     => 'nas-addon',
					'title_url' => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/typography-module/', 'dashboard', 'free-theme', 'documentation' ),
					'links'     => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/typography-module/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'spacing'               => array(
					'title'     => __( 'Spacing', 'amona' ),
					'class'     => 'nas-addon',
					'title_url' => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/spacing-addon-overview/', 'dashboard', 'free-theme', 'documentation' ),
					'links'     => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/spacing-addon-overview/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'blog-pro'              => array(
					'title'     => __( 'Blog Pro', 'amona' ),
					'class'     => 'nas-addon',
					'title_url' => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/blog-pro-overview/', 'dashboard', 'free-theme', 'documentation' ),
					'links'     => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/blog-pro-overview/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'mobile-header'         => array(
					'title'     => __( 'Mobile Header', 'amona' ),
					'class'     => 'nas-addon',
					'title_url' => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/mobile-header-with-amona/', 'dashboard', 'free-theme', 'documentation' ),
					'links'     => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/mobile-header-with-amona/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'header-sections'       => array(
					'title'     => __( 'Header Sections', 'amona' ),
					'class'     => 'nas-addon',
					'title_url' => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/header-sections-pro/', 'dashboard', 'free-theme', 'documentation' ),
					'links'     => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/header-sections-pro/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'sticky-header'         => array(
					'title'     => __( 'Sticky Header', 'amona' ),
					'class'     => 'nas-addon',
					'title_url' => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/sticky-header-pro/', 'dashboard', 'free-theme', 'documentation' ),
					'links'     => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/sticky-header-pro/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'site-layouts'          => array(
					'title'     => __( 'Site Layouts', 'amona' ),
					'class'     => 'nas-addon',
					'title_url' => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/site-layout-overview/', 'dashboard', 'free-theme', 'documentation' ),
					'links'     => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/site-layout-overview/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'advanced-footer'       => array(
					'title'     => __( 'Footer Widgets', 'amona' ),
					'class'     => 'nas-addon',
					'title_url' => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/footer-widgets-amona-pro/', 'dashboard', 'free-theme', 'documentation' ),
					'links'     => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/footer-widgets-amona-pro/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'nav-menu'              => array(
					'title'     => __( 'Nav Menu', 'amona' ),
					'class'     => 'nas-addon',
					'title_url' => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/nav-menu-addon/', 'dashboard', 'free-theme', 'documentation' ),
					'links'     => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/nav-menu-addon/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'advanced-hooks'        => array(
					'title'           => ( defined( 'AMONA_EXT_VER' ) && version_compare( AMONA_EXT_VER, '4.5.0', '<' ) ) ? __( 'Custom Layouts', 'amona' ) : __( 'Site Builder', 'amona' ),
					'description'     => __( 'Add content conditionally in the various hook areas of the theme.', 'amona' ),
					'manage_settings' => true,
					'class'           => 'nas-addon',
					'title_url'       => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/custom-layouts-pro/', 'dashboard', 'free-theme', 'documentation' ),
					'links'           => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/custom-layouts-pro/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'advanced-headers'      => array(
					'title'           => __( 'Page Headers', 'amona' ),
					'description'     => __( 'Make your header layouts look more appealing and sexy!', 'amona' ),
					'manage_settings' => true,
					'class'           => 'nas-addon',
					'title_url'       => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/page-headers-overview/', 'dashboard', 'free-theme', 'documentation' ),
					'links'           => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/page-headers-overview/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'woocommerce'           => array(
					'title'     => 'WooCommerce',
					'class'     => 'nas-addon',
					'condition' => defined( 'AMONA_EXT_VER' ) && class_exists( 'WooCommerce' ) ? true : false,
					'title_url' => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/woocommerce-module-overview/', 'dashboard', 'free-theme', 'documentation' ),
					'links'     => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/woocommerce-module-overview/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'edd'                   => array(
					'title'     => 'Easy Digital Downloads',
					'class'     => 'nas-addon',
					'condition' => defined( 'AMONA_EXT_VER' ) && class_exists( 'Easy_Digital_Downloads' ) ? true : false,
					'title_url' => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/easy-digital-downloads-module-overview/', 'dashboard', 'free-theme', 'documentation' ),
					'links'     => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/easy-digital-downloads-module-overview/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'learndash'             => array(
					'title'       => 'LearnDash',
					'condition'   => defined( 'AMONA_EXT_VER' ) && class_exists( 'SFWD_LMS' ) ? true : false,
					'description' => __( 'Supercharge your LearnDash website with amazing design features.', 'amona' ),
					'class'       => 'nas-addon',
					'title_url'   => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/learndash-integration-in-amona-pro/', 'dashboard', 'free-theme', 'documentation' ),
					'links'       => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/learndash-integration-in-amona-pro/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'lifterlms'             => array(
					'title'     => 'LifterLMS',
					'class'     => 'nas-addon',
					'condition' => defined( 'AMONA_EXT_VER' ) && class_exists( 'LifterLMS' ) ? true : false,
					'title_url' => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/lifterlms-module-pro/', 'dashboard', 'free-theme', 'documentation' ),
					'links'     => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/lifterlms-module-pro/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
				'white-label'           => array(
					'title'     => __( 'White Label', 'amona' ),
					'class'     => 'nas-addon',
					'title_url' => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/how-to-white-label-amona/', 'dashboard', 'free-theme', 'documentation' ),
					'links'     => array(
						array(
							'link_class'   => 'nas-learn-more',
							'link_url'     => amona_get_pro_url( 'https://nasdesigns.rf.gd/docs/how-to-white-label-amona/', 'dashboard', 'free-theme', 'documentation' ),
							'link_text'    => __( 'Documentation', 'amona' ),
							'target_blank' => true,
						),
					),
				),
			)
		);
	}

	/**
	 * Get amona's recommended WooCommerce extensions.
	 *
	 * @param bool $under_useful_plugins Add under useful plugins or not.
	 *
	 * @since 1.0.1
	 * @return array
	 * @access public
	 */
	public static function amona_get_woo_extensions( $under_useful_plugins = true ) {
		$extensions = array(
			array(
				'title'       => 'CartFlows: Create Sales Funnel',
				'subtitle'    => $under_useful_plugins ? __( '#1 Sales Funnel WordPress Builder.', 'amona' ) : __( 'Build high-converting E-Commerce stores with CartFlows, the ultimate checkout and funnel builder.', 'amona' ),
				'status'      => self::get_plugin_status( 'cartflows/cartflows.php' ),
				'slug'        => 'cartflows',
				'path'        => 'cartflows/cartflows.php',
				'redirection' => ( false === get_option( 'wcf_setup_complete', false ) && ! get_option( 'wcf_setup_skipped', false ) ) ? admin_url( 'index.php?page=cartflow-setup' ) : admin_url( 'admin.php?page=cartflows' ),
				'ratings'     => '(380+)',
				'activations' => '200,000+',
				'logoPath'    => array(
					'internal_icon' => false,
					'icon_path'     => 'https://ps.w.org/cartflows/assets/icon.svg'
				),
			),
			array(
				'title'       => 'Variations Swatches by CartFlows',
				'subtitle'    => $under_useful_plugins ? __( 'Beautiful store variation swatches.', 'amona' ) : __( 'Convert WooCommerce variation dropdown attributes into attractive swatches instantly.', 'amona' ),
				'status'      => self::get_plugin_status( 'variation-swatches-woo/variation-swatches-woo.php' ),
				'slug'        => 'variation-swatches-woo',
				'path'        => 'variation-swatches-woo/variation-swatches-woo.php',
				'redirection' => admin_url( 'admin.php?page=cfvsw_settings' ),
				'ratings'     => '(30+)',
				'activations' => '200,000+',
				'logoPath'    => array(
					'internal_icon' => false,
					'icon_path'     => 'https://ps.w.org/variation-swatches-woo/assets/icon.svg',
				),
			),
			array(
				'title'       => 'Cart Abandonment Recovery',
				'subtitle'    => $under_useful_plugins ? __( 'Recover lost revenue automatically.', 'amona' ) : __( 'Capture emails at checkout and send follow-up emails to recover lost revenue.', 'amona' ),
				'status'      => self::get_plugin_status( 'woo-cart-abandonment-recovery/woo-cart-abandonment-recovery.php' ),
				'slug'        => 'woo-cart-abandonment-recovery',
				'path'        => 'woo-cart-abandonment-recovery/woo-cart-abandonment-recovery.php',
				'redirection' => admin_url( 'admin.php?page=woo-cart-abandonment-recovery' ),
				'ratings'     => '(475+)',
				'activations' => '200,000+',
				'logoPath'    => array(
					'internal_icon' => false,
					'icon_path'     => 'https://ps.w.org/woo-cart-abandonment-recovery/assets/icon-128x128.png',
				),
			),
		);

		if ( ! $under_useful_plugins ) {
			$extensions[] = array(
				'title'       => 'Stripe Payment Gateway for WooCommerce',
				'subtitle'    => __( 'Stripe Payments for WooCommerce ensures secure acceptance of credit cards, Apple Pay, and Google Pay.', 'amona' ),
				'status'      => self::get_plugin_status( 'checkout-plugins-stripe-woo/checkout-plugins-stripe-woo.php' ),
				'slug'        => 'checkout-plugins-stripe-woo',
				'path'        => 'checkout-plugins-stripe-woo/checkout-plugins-stripe-woo.php',
				'redirection' => ( false === get_option( 'cpsw_setup_status', false ) ) ? admin_url( 'index.php?page=cpsw-onboarding' ) : admin_url( 'admin.php?page=wc-settings&tab=cpsw_api_settings' ),
				'ratings'     => '(15+)',
				'activations' => '100,000+',
				'logoPath'    => array(
					'internal_icon' => false,
					'icon_path'     => 'https://ps.w.org/checkout-plugins-stripe-woo/assets/icon-128x128.gif',
				),
			);
			$extensions[] = array(
				'title'       => 'PayPal Payments For WooCommerce',
				'subtitle'    => __( 'PayPal Payments For WooCommerce simplifies and secures PayPal transactions on your store.', 'amona' ),
				'status'      => self::get_plugin_status( 'checkout-paypal-woo/checkout-paypal-woo.php' ),
				'slug'        => 'checkout-paypal-woo',
				'path'        => 'checkout-paypal-woo/checkout-paypal-woo.php',
				'redirection' => ( false === get_option( 'cpsw_setup_status', false ) ) ? admin_url( 'index.php?page=cpsw-onboarding' ) : admin_url( 'admin.php?page=wc-settings&tab=cpsw_api_settings' ),
				'ratings'     => '(2)',
				'activations' => '3,000+',
				'logoPath'    => array(
					'internal_icon' => false,
					'icon_path'     => 'https://ps.w.org/checkout-paypal-woo/assets/icon-128x128.jpg',
				),
			);
		}

		$extensions[] = array(
			'title'       => 'Spectra: Blocks Builder',
			'subtitle'    => $under_useful_plugins ? __( 'Free WordPress Page Builder.', 'amona' ) : __( 'Power-up block editor with advanced blocks for faster and effortlessly website creation.', 'amona' ),
			'status'      => self::get_plugin_status( 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php' ),
			'slug'        => 'ultimate-addons-for-gutenberg',
			'path'        => 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php',
			'redirection' => admin_url( 'options-general.php?page=spectra' ),
			'ratings'     => '(1400+)',
			'activations' => '800,000+',
			'logoPath'    => array(
				'internal_icon' => false,
				'icon_path'     => 'https://ps.w.org/ultimate-addons-for-gutenberg/assets/icon.svg',
			),
		);

		return $extensions;
	}

	/**
	 * Get amona's useful plugins.
	 * @since 1.0.0
	 * @return array
	 * @access public
	 */
	public static function amona_get_useful_plugins() {
		// Making useful plugin section dynamic.
		if ( class_exists( 'WooCommerce' ) ) {
			$useful_plugins = self::amona_get_woo_extensions();
		} else {
			$sc_api_token         = get_option( 'sc_api_token', '' );
			$surecart_redirection = empty( $sc_api_token ) ? 'sc-getting-started' : 'sc-dashboard';

			$useful_plugins = array(
				array(
					'title'       => 'SureCart',
					'subtitle'    => __( 'The new way to sell on WordPress.', 'amona' ),
					'status'      => self::get_plugin_status( 'surecart/surecart.php' ),
					'slug'        => 'surecart',
					'path'        => 'surecart/surecart.php',
					'redirection' => admin_url( 'admin.php?page=' . esc_attr( $surecart_redirection ) ),
					'logoPath'    => array(
						'internal_icon' => false,
						'icon_path'     => 'https://ps.w.org/surecart/assets/icon-128x128.png',
					),
				),
				array(
					'title'       => 'Spectra',
					'subtitle'    => __( 'Free WordPress Page Builder.', 'amona' ),
					'status'      => self::get_plugin_status( 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php' ),
					'slug'        => 'ultimate-addons-for-gutenberg',
					'path'        => 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php',
					'redirection' => admin_url( 'options-general.php?page=spectra' ),
					'logoPath'    => array(
						'internal_icon' => false,
						'icon_path'     => 'https://ps.w.org/ultimate-addons-for-gutenberg/assets/icon.svg',
					),
				),
				array(
					'title'       => 'SureTriggers',
					'subtitle'    => __( 'Automate your WordPress setup.', 'amona' ),
					'isPro'       => false,
					'status'      => self::get_plugin_status( 'suretriggers/suretriggers.php' ),
					'slug'        => 'suretriggers',
					'path'        => 'suretriggers/suretriggers.php',
					'redirection' => admin_url( 'admin.php?page=suretriggers' ),
					'logoPath'    => array(
						'internal_icon' => true,
						'icon_path'     => 'suretriggers',
					),
				),
				array(
					'title'       => 'Presto Player',
					'subtitle'    => __( 'Ultimate Video Player For WordPress.', 'amona' ),
					'status'      => self::get_plugin_status( 'presto-player/presto-player.php' ),
					'slug'        => 'presto-player',
					'path'        => 'presto-player/presto-player.php',
					'redirection' => admin_url( 'edit.php?post_type=pp_video_block' ),
					'logoPath'    => array(
						'internal_icon' => false,
						'icon_path'     => 'https://ps.w.org/presto-player/assets/icon-128x128.png',
					),
				),
			);
		}

		return apply_filters( 'amona_useful_plugins', $useful_plugins );
	}

	/**
	 * Get amona's recommended integrations.
	 *
	 * @since 1.0.0
	 * @return array
	 * @access public
	 */
	public static function amona_get_integrations() {
		$sc_api_token         = get_option( 'sc_api_token', '' );
		$surecart_redirection = empty( $sc_api_token ) ? 'sc-getting-started' : 'sc-dashboard';
		return apply_filters(
			'amona_integrated_plugins',
			array(
				array(
					'title'       => 'Spectra',
					'subtitle'    => __( 'Free WordPress Page Builder Plugin.', 'amona' ),
					'isPro'       => false,
					'status'      => self::get_plugin_status( 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php' ),
					'slug'        => 'ultimate-addons-for-gutenberg',
					'path'        => 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php',
					'redirection' => admin_url( 'options-general.php?page=spectra' ),
					'logoPath'    => array(
						'internal_icon' => false,
						'icon_path'     => 'https://ps.w.org/ultimate-addons-for-gutenberg/assets/icon.svg',
					),
				),
				array(
					'title'       => 'SureCart',
					'subtitle'    => __( 'Simplifying selling online with WordPress.', 'amona' ),
					'isPro'       => false,
					'status'      => self::get_plugin_status( 'surecart/surecart.php' ),
					'redirection' => admin_url( 'admin.php?page=' . esc_attr( $surecart_redirection ) ),
					'slug'        => 'surecart',
					'path'        => 'surecart/surecart.php',
					'logoPath'    => array(
						'internal_icon' => false,
						'icon_path'     => 'https://ps.w.org/surecart/assets/icon-128x128.png',
					),
				),
				array(
					'title'       => 'SureTriggers',
					'subtitle'    => __( 'Automate your WordPress setup.', 'amona' ),
					'isPro'       => false,
					'status'      => self::get_plugin_status( 'suretriggers/suretriggers.php' ),
					'slug'        => 'suretriggers',
					'path'        => 'suretriggers/suretriggers.php',
					'redirection' => admin_url( 'admin.php?page=suretriggers' ),
					'logoPath'    => array(
						'internal_icon' => true,
						'icon_path'     => 'suretriggers',
					),
				),
			)
		);
	}

	/**
	 * Settings app scripts
	 *
	 * @since 1.0.0
	 * @param array $localize Variable names.
	 */
	public function settings_app_scripts( $localize ) {
		$handle            = 'amona-admin-dashboard-app';
		$build_path        = AMONA_THEME_ADMIN_DIR . 'assets/build/';
		$build_url         = AMONA_THEME_ADMIN_URL . 'assets/build/';
		$script_asset_path = $build_path . 'dashboard-app.asset.php';

		/** @psalm-suppress MissingFile */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		$script_info = file_exists( $script_asset_path ) ? include $script_asset_path : array(  // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude.FileIncludeFound -- Not a template file so loading in a normal way.
			'dependencies' => array(),
			'version'      => AMONA_THEME_VERSION,
		);
		/** @psalm-suppress MissingFile */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort

		$script_dep = array_merge( $script_info['dependencies'], array( 'updates', 'wp-hooks' ) );

		wp_register_script(
			$handle,
			$build_url . 'dashboard-app.js',
			$script_dep,
			$script_info['version'],
			true
		);

		wp_register_style(
			$handle,
			$build_url . 'dashboard-app.css',
			array(),
			AMONA_THEME_VERSION
		);

		wp_register_style(
			'amona-admin-google-fonts',
			'https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap',
			array(),
			AMONA_THEME_VERSION
		);

		wp_enqueue_script( $handle );

		wp_set_script_translations( $handle, 'amona' );

		wp_enqueue_style( 'amona-admin-google-fonts' );
		wp_enqueue_style( $handle );

		wp_style_add_data( $handle, 'rtl', 'replace' );

		wp_localize_script( $handle, 'amona_admin', $localize );
	}

	/**
	 *  Add footer link.
	 *
	 * @since 1.0.0
	 */
	public function amona_admin_footer_link() {
		$theme_name = amona_get_theme_name();
		if ( amona_is_white_labelled() ) {
			$footer_text = '<span id="footer-thankyou">' . __( 'Thank you for using', 'amona' ) . '<span class="focus:text-amona-hover active:text-amona-hover hover:text-amona-hover"> ' . esc_html( $theme_name ) . '.</span></span>';
		} else {
			$footer_text = sprintf(
				/* translators: 1: amona, 2: Theme rating link */
				__( 'Enjoyed %1$s? Please leave us a %2$s rating. We really appreciate your support!', 'amona' ),
				'<span class="nas-footer-thankyou"><strong>' . esc_html( $theme_name ) . '</strong>',
				'<a href="https://wordpress.org/support/theme/amona/reviews/?rate=5#new-post" target="_blank">&#9733;&#9733;&#9733;&#9733;&#9733;</a></span>'
			);
		}
		return $footer_text;
	}
}

Amona_Menu::get_instance();
