import * as React from 'react';
import { IProps, TEvent } from './types';
declare class List<Value = string> extends React.Component<IProps<Value>> {
    listRef: React.RefObject<HTMLElement>;
    ghostRef: React.RefObject<HTMLElement>;
    topOffsets: number[];
    itemTranslateOffsets: number[];
    initialYOffset: number;
    lastScroll: number;
    needle: number;
    afterIndex: number;
    state: {
        itemDragged: number;
        itemDraggedOutOfBounds: number;
        selectedItem: number;
        initialX: number;
        initialY: number;
        targetX: number;
        targetY: number;
        targetHeight: number;
        targetWidth: number;
        liveText: string;
        scrollingSpeed: number;
        scrollWindow: boolean;
    };
    schdOnMouseMove: (e: MouseEvent) => void;
    schdOnTouchMove: (e: TouchEvent) => void;
    schdOnEnd: (e: Event) => void;
    constructor(props: IProps<Value>);
    componentDidMount(): void;
    componentDidUpdate(_prevProps: any, prevState: {
        scrollingSpeed: number;
    }): void;
    componentWillUnmount(): void;
    doScrolling: () => void;
    getChildren: () => Element[];
    static defaultProps: {
        transitionDuration: number;
        lockVertically: boolean;
        removableByMove: boolean;
        voiceover: {
            item: (position: number) => string;
            lifted: (position: number) => string;
            moved: (position: number, up: boolean) => string;
            dropped: (from: number, to: number) => string;
            canceled: (position: number) => string;
        };
    };
    calculateOffsets: () => void;
    getTargetIndex: (e: TEvent) => number;
    onMouseOrTouchStart: (e: MouseEvent & TouchEvent) => void;
    getYOffset: () => number;
    onStart: (target: HTMLElement, clientX: number, clientY: number, index: number) => void;
    onMouseMove: (e: MouseEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    onWheel: (e: React.WheelEvent<Element>) => void;
    onMove: (clientX: number, clientY: number) => null | undefined;
    moveOtherItems: () => void;
    autoScrolling: (clientY: number) => void;
    animateItems: (needle: number, movedItem: number, offset: number, animateMovedItem?: boolean) => void;
    isDraggedItemOutOfBounds: () => boolean;
    onEnd: (e: TouchEvent & MouseEvent) => void;
    onKeyDown: (e: React.KeyboardEvent<Element>) => void;
    render(): JSX.Element;
}
export default List;
