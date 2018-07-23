import React, { Component } from 'react';
import propTypes from 'prop-types';
import './PagerNav.css';

class PagerNavItem extends Component {

    static propTypes = {
        label: propTypes.any,
        disabled: propTypes.bool,
        id: propTypes.string,
        onClick: propTypes.func,
        active: propTypes.bool
    }

    static defaultTyProps = {
        disable: false,
        onClick: () => { }
    }

    render() {
        return (
            <button
                key={this.props.id}
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                className={(this.props.active === true) ? 'active-page' : ''}>
                {this.props.label}
            </button>
        );
    }
}

export default PagerNavItem;