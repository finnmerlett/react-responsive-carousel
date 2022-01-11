import React, { CSSProperties } from 'react';
import { action } from '@storybook/addon-actions';
import { Carousel } from '../src/index';

import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

// carousel styles
import '../src/main.scss';
import '../src/carousel.scss';
import '../src/examples/presentation/presentation.scss';

const createCarouselItemImage = (index, options = {}) => (
    <div key={index}>
        <img src={`/assets/${index}.jpeg`} />
        <p className="legend">Legend {index}</p>
    </div>
);

const baseChildren = <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>;

const togglesGroupId = 'Toggles';
const valuesGroupId = 'Values';
const mainGroupId = 'Main';

const getConfigurableProps = () => ({
    showArrows: boolean('showArrows', true, togglesGroupId),
    showStatus: boolean('showStatus', true, togglesGroupId),
    showIndicators: boolean('showIndicators', true, togglesGroupId),
    infiniteLoop: boolean('infiniteLoop', false, togglesGroupId),
    showThumbs: boolean('showThumbs', true, togglesGroupId),
    useKeyboardArrows: boolean('useKeyboardArrows', true, togglesGroupId),
    autoPlay: boolean('autoPlay', false, togglesGroupId),
    stopOnHover: boolean('stopOnHover', true, togglesGroupId),
    swipeable: boolean('swipeable', true, togglesGroupId),
    dynamicHeight: boolean('dynamicHeight', true, togglesGroupId),
    emulateTouch: boolean('emulateTouch', true, togglesGroupId),
    autoFocus: boolean('autoFocus', false, togglesGroupId),
    thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
    selectedItem: number('selectedItem', 0, {}, valuesGroupId),
    interval: number('interval', 2000, {}, valuesGroupId),
    transitionTime: number('transitionTime', 500, {}, valuesGroupId),
    swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
    ariaLabel: text('ariaLabel', undefined),
});

export default {
    title: '03 - Custom',
    decorators: [withKnobs],
    component: Carousel,
};

export const centerModeWithEndSpacing = () => (
    <Carousel
        centerMode
        centerModeEndSpacing={boolean('centerModeEndSpacing', true, mainGroupId)}
        centerSlidePercentage={number('centerSlidePercentage', 80, {}, mainGroupId)}
        {...getConfigurableProps()}
    >
        {baseChildren.props.children}
    </Carousel>
);
