/**
 * Customizer controls toggles
 *
 * @package Amona
 */

( function( $ ) {

	/**
	 * Helper class for the main Customizer interface.
	 *
	 * @since 1.0.0
	 * @class ASTCustomizer
	 */
	AmonaNotices = {

		/**
		 * Initializes our custom logic for the Customizer.
		 *
		 * @since 1.0.0
		 * @method init
		 */
		init: function()
		{
			this._bind();
		},

		/**
		 * Binds events for the amona Portfolio.
		 *
		 * @since 1.0.0
		 * @access private
		 * @method _bind
		 */
		_bind: function()
		{
			$( document ).on('click', '.amona-notice-close', AmonaNotices._dismissNoticeNew );
			$( document ).on('click', '.amona-notice .notice-dismiss', AmonaNotices._dismissNotice );
		},

		_dismissNotice: function( event ) {
			event.preventDefault();

			var repeat_notice_after = $( this ).parents('.amona-notice').data( 'repeat-notice-after' ) || '';
			var notice_id = $( this ).parents('.amona-notice').attr( 'id' ) || '';

			AmonaNotices._ajax( notice_id, repeat_notice_after );
		},

		_dismissNoticeNew: function( event ) {
			event.preventDefault();

			var repeat_notice_after = $( this ).attr( 'data-repeat-notice-after' ) || '';
			var notice_id = $( this ).parents('.amona-notice').attr( 'id' ) || '';

			var $el = $( this ).parents('.amona-notice');
			$el.fadeTo( 100, 0, function() {
				$el.slideUp( 100, function() {
					$el.remove();
				});
			});

			AmonaNotices._ajax( notice_id, repeat_notice_after );

			var link   = $( this ).attr( 'href' ) || '';
			var target = $( this ).attr( 'target' ) || '';
			if( '' !== link && '_blank' === target ) {
				window.open(link , '_blank');
			}
		},

		_ajax: function( notice_id, repeat_notice_after ) {
			
			if( '' === notice_id ) {
				return;
			}

			$.ajax({
				url: ajaxurl,
				type: 'POST',
				data: {
					action            : 'amona-notice-dismiss',
					nonce             : AmonaNotices._notice_nonce,
					notice_id         : notice_id,
					repeat_notice_after : parseInt( repeat_notice_after ),
				},
			});

		}
	};

	$( function() {
		AmonaNotices.init();
	} );
} )( jQuery );