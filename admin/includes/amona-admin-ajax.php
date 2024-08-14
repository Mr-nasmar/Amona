<?php
/**
 * amona Admin Ajax Base.
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
 * Class Amona_Admin_Ajax.
 *
 * @since 1.0.0
 */
class Amona_Admin_Ajax {

	/**
	 * Ajax action prefix.
	 *
	 * @var string
	 * @since 1.0.0
	 */
	private $prefix = 'amona';

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
	 * Errors class instance.
	 *
	 * @var array
	 * @since 1.0.0
	 */
	private $errors = array();

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->errors = array(
			'permission' => esc_html__( 'Sorry, you are not allowed to do this operation.', 'amona' ),
			'nonce'      => esc_html__( 'Nonce validation failed', 'amona' ),
			'default'    => esc_html__( 'Sorry, something went wrong.', 'amona' ),
			'invalid'    => esc_html__( 'No post data found!', 'amona' ),
		);

		add_action( 'wp_ajax_nas_disable_pro_notices', array( $this, 'disable_amona_pro_notices' ) );
		add_action( 'wp_ajax_amona_recommended_plugin_install', array( $this, 'wp_ajax_install_plugin' ) );
		add_action( 'wp_ajax_nas_migrate_to_builder', array( $this, 'migrate_to_builder' ) );
		add_action( 'wp_ajax_amona_update_admin_setting', array( $this, 'amona_update_admin_setting' ) );
		add_action( 'wp_ajax_amona_recommended_plugin_activate', array( $this, 'required_plugin_activate' ) );
		add_action( 'wp_ajax_amona_recommended_plugin_deactivate', array( $this, 'required_plugin_deactivate' ) );
	}

	/**
	 * Return boolean settings for admin dashboard app.
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public function amona_admin_settings_typewise() {
		return apply_filters(
			'amona_admin_settings_datatypes',
			array(
				'self_hosted_gfonts'    => 'bool',
				'preload_local_fonts'   => 'bool',
				'use_old_header_footer' => 'bool',
			)
		);
	}

	/**
	 * Disable pro upgrade notice from all over in amona.
	 *
	 * @since 1.0.0
	 */
	public function disable_amona_pro_notices() {

		$response_data = array( 'message' => $this->get_error_msg( 'permission' ) );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( $response_data );
		}

		if ( empty( $_POST ) ) {
			$response_data = array( 'message' => $this->get_error_msg( 'invalid' ) );
			wp_send_json_error( $response_data );
		}

		/**
		 * Nonce verification.
		 */
		if ( ! check_ajax_referer( 'amona_update_admin_setting', 'security', false ) ) {
			$response_data = array( 'message' => $this->get_error_msg( 'nonce' ) );
			wp_send_json_error( $response_data );
		}

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( esc_html__( 'You don\'t have the access', 'amona' ) );
		}

		/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		$migrate = isset( $_POST['status'] ) ? sanitize_key( $_POST['status'] ) : '';
		/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort

		$migrate = ( 'true' === $migrate ) ? true : false;
		amona_update_option( 'nas-disable-upgrade-notices', $migrate );

		wp_send_json_success();
	}

	/**
	 * Migrate to New Header Builder
	 *
	 * @since 1.0.0
	 */
	public function migrate_to_builder() {

		$response_data = array( 'message' => $this->get_error_msg( 'permission' ) );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( $response_data );
		}

		if ( empty( $_POST ) ) {
			$response_data = array( 'message' => $this->get_error_msg( 'invalid' ) );
			wp_send_json_error( $response_data );
		}

		/**
		 * Nonce verification.
		 */
		if ( ! check_ajax_referer( 'amona_update_admin_setting', 'security', false ) ) {
			$response_data = array( 'message' => $this->get_error_msg( 'nonce' ) );
			wp_send_json_error( $response_data );
		}

		/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		$migrate = isset( $_POST['status'] ) ? sanitize_key( $_POST['status'] ) : '';
		/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		$migrate = ( 'true' === $migrate ) ? true : false;
		/** @psalm-suppress InvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		$migration_flag = amona_get_option( 'v3-option-migration', false );
		amona_update_option( 'is-header-footer-builder', $migrate );

		if ( $migrate && false === $migration_flag ) {
			require_once AMONA_THEME_DIR . 'inc/theme-update/amona-builder-migration-updater.php';  // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude.FileIncludeFound
			amona_header_builder_migration();
		}

		wp_send_json_success();
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function amona_update_admin_setting() {

		$response_data = array( 'message' => $this->get_error_msg( 'permission' ) );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( $response_data );
		}

		if ( empty( $_POST ) ) {
			$response_data = array( 'message' => $this->get_error_msg( 'invalid' ) );
			wp_send_json_error( $response_data );
		}

		/**
		 * Nonce verification.
		 */
		if ( ! check_ajax_referer( 'amona_update_admin_setting', 'security', false ) ) {
			$response_data = array( 'message' => $this->get_error_msg( 'nonce' ) );
			wp_send_json_error( $response_data );
		}

		$get_bool_settings = $this->amona_admin_settings_typewise();
		/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		$sub_option_key = isset( $_POST['key'] ) ? sanitize_text_field( wp_unslash( $_POST['key'] ) ) : '';
		/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		$sub_option_value = '';

		// @codingStandardsIgnoreStart
		if ( isset( $get_bool_settings[ $sub_option_key ] ) ) {
			if ( 'bool' === $get_bool_settings[ $sub_option_key ] ) {
				/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
				$val = isset( $_POST['value'] ) && 'true' === sanitize_text_field( $_POST['value'] ) ? true : false;
				/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
				$sub_option_value = $val;
			} else {
				/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
				$val = isset( $_POST['value'] ) ? sanitize_text_field( wp_unslash( $_POST['value'] ) ) : '';
				/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
				$sub_option_value = $val;
			}
		}
		// @codingStandardsIgnoreEnd

		amona_API_Init::update_admin_settings_option( $sub_option_key, $sub_option_value );

		$response_data = array(
			'message' => esc_html__( 'Successfully saved data!', 'amona' ),
		);

		wp_send_json_success( $response_data );
	}

	/**
	 * Get ajax error message.
	 *
	 * @param string $type Message type.
	 * @return string
	 * @since 1.0.0
	 */
	public function get_error_msg( $type ) {

		if ( ! isset( $this->errors[ $type ] ) ) {
			$type = 'default';
		}

		return $this->errors[ $type ];
	}

	/**
	 * Required Plugin Activate
	 *
	 * @since 1.0.0
	 */
	public function required_plugin_activate() {

		$response_data = array( 'message' => $this->get_error_msg( 'permission' ) );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( $response_data );
		}

		if ( empty( $_POST ) ) {
			$response_data = array( 'message' => $this->get_error_msg( 'invalid' ) );
			wp_send_json_error( $response_data );
		}

		/**
		 * Nonce verification.
		 */
		if ( ! check_ajax_referer( 'amona_plugin_manager_nonce', 'security', false ) ) {
			$response_data = array( 'message' => $this->get_error_msg( 'nonce' ) );
			wp_send_json_error( $response_data );
		}

		/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		if ( ! current_user_can( 'install_plugins' ) || ! isset( $_POST['init'] ) || ! sanitize_text_field( wp_unslash( $_POST['init'] ) ) ) {
			/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
			wp_send_json_error(
				array(
					'success' => false,
					'message' => esc_html__( 'No plugin specified', 'amona' ),
				)
			);
		}

		/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		$plugin_init = ( isset( $_POST['init'] ) ) ? sanitize_text_field( wp_unslash( $_POST['init'] ) ) : '';
		/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort

		$activate = activate_plugin( $plugin_init );

		if ( is_wp_error( $activate ) ) {
			/** @psalm-suppress PossiblyNullReference */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
			wp_send_json_error(
				array(
					'success' => false,
					'message' => $activate->get_error_message(),
				)
			);
			/** @psalm-suppress PossiblyNullReference */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		}

		/**
		 * Added this flag as tracker to track onboarding and funnel stats for SureCart owners.
		 *
		 * @since 1.0.0
		 */
		if ( 'surecart/surecart.php' === $plugin_init ) {
			update_option( 'surecart_source', 'amona', false );
		}

		wp_send_json_success(
			array(
				'success' => true,
				'message' => esc_html__( 'Plugin Successfully Activated', 'amona' ),
			)
		);
	}

	/**
	 * Required Plugin Activate
	 *
	 * @since 1.0.0
	 */
	public function required_plugin_deactivate() {

		$response_data = array( 'message' => $this->get_error_msg( 'permission' ) );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( $response_data );
		}

		if ( empty( $_POST ) ) {
			$response_data = array( 'message' => $this->get_error_msg( 'invalid' ) );
			wp_send_json_error( $response_data );
		}

		/**
		 * Nonce verification.
		 */
		if ( ! check_ajax_referer( 'amona_plugin_manager_nonce', 'security', false ) ) {
			$response_data = array( 'message' => $this->get_error_msg( 'nonce' ) );
			wp_send_json_error( $response_data );
		}

		/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		if ( ! current_user_can( 'install_plugins' ) || ! isset( $_POST['init'] ) || ! sanitize_text_field( wp_unslash( $_POST['init'] ) ) ) {
			/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
			wp_send_json_error(
				array(
					'success' => false,
					'message' => esc_html__( 'No plugin specified', 'amona' ),
				)
			);
		}

		/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		$plugin_init = ( isset( $_POST['init'] ) ) ? sanitize_text_field( wp_unslash( $_POST['init'] ) ) : '';
		/** @psalm-suppress PossiblyInvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort

		$deactivate = deactivate_plugins( $plugin_init );

		if ( is_wp_error( $deactivate ) ) {
			wp_send_json_error(
				array(
					'success' => false,
					'message' => $deactivate->get_error_message(),
				)
			);
		}

		wp_send_json_success(
			array(
				'success' => true,
				'message' => esc_html__( 'Plugin Successfully Deactivated', 'amona' ),
			)
		);
	}
}

Amona_Admin_Ajax::get_instance();
