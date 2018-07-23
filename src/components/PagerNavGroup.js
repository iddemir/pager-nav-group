import React, { Component } from 'react';
import propTypes from 'prop-types';
import PagerNavItem from './PagerNavItem';

class PagerNavGroup extends Component {
    static propTypes = {
        totalPage: propTypes.number.isRequired,
        activePage: propTypes.number.isRequired,
        showNeighborButton: propTypes.bool,
        showPrevButton: propTypes.bool,
        showNextButton: propTypes.bool,
        showGoFirstButton: propTypes.bool,
        showGoLastButton: propTypes.bool,
        neighborButtonTotal: propTypes.number,
        prevButtonLabel: propTypes.any,
        nextButtonLabel: propTypes.any,
        goFirstButtonLabel: propTypes.any,
        goLastButtonLabel: propTypes.any,
        onChange: propTypes.func
    }
    static defaultProps = {
        showNeighborButton: true,
        showGoFirstButton: true,
        showGoLastButton: true,
        showPrevButton: true,
        showNextButton: true,
        neighborButtonTotal: 2,
        prevButtonLabel: '<',
        nextButtonLabel: '>',
        goFirstButtonLabel: 'First',
        goLastButtonLabel: 'Last',
        onChange: () => { }
    }

    determineShowned(totalPage, activePage, neighborButtonTotal, showNeighborButton = true) {

        if (showNeighborButton === false) {
            let start = activePage;
            let end = activePage;
            return { start, end };
        }

        let start = activePage - neighborButtonTotal;
        let end = activePage + neighborButtonTotal;

        if (end > totalPage) end = totalPage;
        if (start < 1) start = 1;

        return { start, end };
    }

    renderItems(totalPage, activePage, determinedButtons) {

        const {
            showPrevButton,
            showNextButton,
            showGoFirstButton,
            showGoLastButton,
            prevButtonLabel,
            nextButtonLabel,
            goFirstButtonLabel,
            goLastButtonLabel,
            onChange
        } = this.props;

        const buttons = [];

        if (showPrevButton) {
            buttons.push(
                <PagerNavItem
                    label={prevButtonLabel}
                    disabled={(activePage === 1) ? true : false}
                    key="go-prev"
                    onClick={() => onChange(activePage - 1)}
                />
            );
        }
        if (showGoFirstButton) {
            buttons.push(
                <PagerNavItem
                    label={goFirstButtonLabel}
                    disabled={(activePage === 1) ? true : false}
                    key="jump-first"
                    onClick={() => onChange(1)}
                />
            );
        }
        for (let index = determinedButtons.start; index <= determinedButtons.end; index++) {

            let active = (index === activePage) ? true : false;

            buttons.push(
                <PagerNavItem
                    label={index}
                    key={index}
                    onClick={() => onChange(index)}
                    active={active}
                />
            );
        }
        if (showGoLastButton) {
            buttons.push(
                <PagerNavItem
                    label={goLastButtonLabel}
                    disabled={(activePage === totalPage) ? true : false}
                    key="go-next"
                    onClick={() => onChange(totalPage)}
                />
            );
        }
        if (showNextButton) {
            buttons.push(
                <PagerNavItem
                    label={nextButtonLabel}
                    disabled={(activePage === totalPage) ? true : false}
                    key="jump-last"
                    onClick={() => onChange(activePage + 1)}
                />
            );
        }

        return buttons;
    }

    render() {
        const { totalPage, activePage, neighborButtonTotal, showNeighborButton } = this.props;
        const determinedButtons = this.determineShowned(totalPage, activePage, neighborButtonTotal, showNeighborButton);
        return (
            <div className="PagerNavWrapper" > {this.renderItems(totalPage, activePage, determinedButtons)} </div>
        );
    }
}

export default PagerNavGroup;