/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	TAXES_ENABLED,
	DISPLAY_CART_PRICES_INCLUDING_TAX,
} from '@woocommerce/block-settings';
import { createInterpolateElement } from 'wordpress-element';
import FormattedMonetaryAmount from '@woocommerce/base-components/formatted-monetary-amount';
import PropTypes from 'prop-types';
import { TotalsItem } from '@woocommerce/blocks-checkout';

/**
 * Internal dependencies
 */
import './style.scss';

const SHOW_TAXES = TAXES_ENABLED && DISPLAY_CART_PRICES_INCLUDING_TAX;

const TotalsFooterItem = ( { currency, values } ) => {
	const { total_price: totalPrice, total_tax: totalTax } = values;

	return (
		<TotalsItem
			className="wc-block-components-totals-footer-item"
			currency={ currency }
			label={ __( 'Total', 'woo-gutenberg-products-block' ) }
			value={ parseInt( totalPrice, 10 ) }
			description={
				SHOW_TAXES && (
					<p className="wc-block-components-totals-footer-item-tax">
						{ createInterpolateElement(
							__(
								'Including <TaxAmount/> in taxes',
								'woo-gutenberg-products-block'
							),
							{
								TaxAmount: (
									<FormattedMonetaryAmount
										className="wc-block-components-totals-footer-item-tax-value"
										currency={ currency }
										displayType="text"
										value={ parseInt( totalTax, 10 ) }
									/>
								),
							}
						) }
					</p>
				)
			}
		/>
	);
};

TotalsFooterItem.propTypes = {
	currency: PropTypes.object.isRequired,
	values: PropTypes.shape( {
		total_price: PropTypes.string,
		total_tax: PropTypes.string,
	} ).isRequired,
};

export default TotalsFooterItem;
