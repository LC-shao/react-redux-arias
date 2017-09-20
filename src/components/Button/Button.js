import React, {Component} from 'react';
import propTypes from 'prop-types';
import reactCSS from 'reactcss';

import {themeDefault as theme} from '../style'

export default class Button extends Component {

	state = {
		disabled: false
	};

	static propTypes = {
		children: propTypes.any,
		disabled: propTypes.bool,
		style: propTypes.object
	};

	static defaultProps = {
		children: "Hello World!",
		disabled: false,
		style: {}
	};

	render() {

		const {
			children,
			disabled,
			style
		} = this.props;

		console.log(theme);

		const styles = reactCSS({
			'default': {
				card: {
					boxShadow: '0 2px 4px rgba(0,0,0,.15)',
					...theme.component.button,
					...style
				},
			},
		});

		return (
			<button disabled={disabled} style={styles.card}>
				{children}
			</button>
		)
	}
}