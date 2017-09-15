import color from 'color';
import palletDefault from '../pallet/palletDefault';
import {addPrimaryColor} from './themeUtils';

// pallet definition for default theme
let pallet = {
	...palletDefault,
	...addPrimaryColor(palletDefault.primaryColor),
};

// defaultTheme
let dt = {};
dt.bodyBg = pallet.primaryBgColor;
// Base background color for most components
dt.component = {};
dt.component.background= pallet.primaryBgColor;
dt.component.fontFamily= '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif';
dt.component.fontForNumber= '"Helvetica Neue For Number"';
dt.component.fontForCode= 'Consolas, Menlo, Courier, monospace';
dt.component.headingColor= color(pallet.primaryBgColor).darken(0.15);
dt.component.textColor= color(pallet.primaryTextColor).fade(0.65);
dt.component.textColorSecondary= color(pallet.primaryTextColor).fade(0.43);
dt.component.headingColorDark= color(pallet.primaryBgColor).fade(0.97);
dt.component.textColorDark= color(pallet.primaryBgColor).fade(0.91);
dt.component.textColorSecondaryDark= color(pallet.primaryBgColor).fade(0.67);
dt.component.fontSizeBase= '12px';
dt.component.fontSizeLarge= '14px';
dt.component.lineHeightBase= 1.5;
dt.component.borderRadiusBase= '4px';
dt.component.borderRadiusSmall= '2px';

// The background colors for active and hover states for things like
// list items or table cells.
dt.component.ItemActiveBg= pallet.primaryOne;
dt.component.ItemHoverBg= pallet.primaryOne;

// ICONFONT TODO
// @iconfont-css-prefix    : anticon;
// @icon-url               : "https://at.alicdn.com/t/font_zck90zmlh7hf47vi";

// LINK
dt.component.link = {};
dt.component.link.color= pallet.primaryColor;
dt.component.link.hoverColor= pallet.primaryFive;
dt.component.link.activeColor= pallet.primarySeven;
dt.component.link.hoverDecoration= 'none';

// Animation
dt.component.animation.easeOut= 'cubic-bezier(0.215, 0.61, 0.355, 1)';
dt.component.animation.easeIn= 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
dt.component.animation.easeInOut= 'cubic-bezier(0.645, 0.045, 0.355, 1)';
dt.component.animation.easeOutBack= 'cubic-bezier(0.12, 0.4, 0.29, 1.46)';
dt.component.animation.easeInBack= 'cubic-bezier(0.71, -0.46, 0.88, 0.6)';
dt.component.animation.easeInOutBack= 'cubic-bezier(0.71, -0.46, 0.29, 1.46)';
dt.component.animation.easeOutCirc= 'cubic-bezier(0.08, 0.82, 0.17, 1)';
dt.component.animation.easeInCirc= 'cubic-bezier(0.6, 0.04, 0.98, 0.34)';
dt.component.animation.easeInOutCirc= 'cubic-bezier(0.78, 0.14, 0.15, 0.86)';
dt.component.animation.easeOutQunit= 'cubic-bezier(0.23, 1, 0.32, 1)';
dt.component.animation.easeInQunit= 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
dt.component.animation.easeInOutQunit= 'cubic-bezier(0.86, 0, 0.07, 1)';

// Border style
dt.component.borderColorBase= pallet.borderColorBase;
dt.component.borderColorSplit= color(pallet.borderColorBase).darken(0.1);
dt.component.borderWidthBase= '1px';
dt.component.borderStyleBase= 'solid';

// Outline
dt.component.outlineBlurSize= 0;
dt.component.outlineWidth= '2px';
dt.component.outlineColor= pallet.primaryColor;

// Default background color for disabled states, Collapse wrappers,
// and several active and hover states.
dt.component.backgroundColorBase= pallet.primaryItemBgColor;
dt.component.backgroundColorActive= color(pallet.primaryItemBgColor).darken(0.07);

// Disabled states
dt.component.disableColor= color(pallet.black).fade(0.25);
dt.component.disableBg=dt.component.backgroundColorBase;
dt.component.disableColorDark = color(pallet.white).fade(0.35);

// Shadow
@shadow-color           : rgba(0, 0, 0, .2);
@box-shadow-base        : @shadow-1-down;
@shadow-1-up            : 0 -1px 6px @shadow-color;
@shadow-1-down          : 0 1px 6px @shadow-color;
@shadow-1-left          : -1px 0 6px @shadow-color;
@shadow-1-right         : 1px 0 6px @shadow-color;
@shadow-2               : 0 2px 8px @shadow-color;

// Buttons
@btn-font-weight        : 500;
@btn-border-radius-base : @border-radius-base;
@btn-border-radius-sm   : @border-radius-base;

@btn-primary-color      : #fff;
@btn-primary-bg         : @primary-color;

@btn-default-color      : @text-color;
@btn-default-bg         : #fff;
@btn-default-border     : @border-color-base;

@btn-danger-color       : @error-color;
@btn-danger-bg          : @background-color-base;
@btn-danger-border      : @border-color-base;

@btn-disable-color      : @disabled-color;
@btn-disable-bg         : @disabled-bg;
@btn-disable-border     : @border-color-base;

@btn-padding-base       : 0 15px;
@btn-font-size-lg       : @font-size-lg;
@btn-padding-lg         : @btn-padding-base;
@btn-padding-sm         : 0 7px;

@btn-height-base        : 28px;
@btn-height-lg          : 32px;
@btn-height-sm          : 22px;

@btn-circle-size        : @btn-height-base;
@btn-circle-size-lg     : @btn-height-lg;
@btn-circle-size-sm     : @btn-height-sm;

@btn-group-border       : @primary-7;

// Radio buttons
@radio-button-bg           : @btn-default-bg;
@radio-button-color        : @btn-default-color;

// Media queries breakpoints
// Extra small screen / phone
@screen-xs              : 480px;
@screen-xs-min          : @screen-xs;

// Small screen / tablet
@screen-sm              : 768px;
@screen-sm-min          : @screen-sm;

// Medium screen / desktop
@screen-md              : 992px;
@screen-md-min          : @screen-md;

// Large screen / wide desktop
@screen-lg              : 1200px;
@screen-lg-min          : @screen-lg;

// Extra Large screen / full hd
@screen-xl              : 1600px;
@screen-xl-min          : @screen-xl;

// provide a maximum
@screen-xs-max          : (@screen-sm-min - 1px);
@screen-sm-max          : (@screen-md-min - 1px);
@screen-md-max          : (@screen-lg-min - 1px);
@screen-lg-max          : (@screen-xl-min - 1px);

// Grid system
@grid-columns           : 24;
@grid-gutter-width      : 0;

// Layout
@layout-body-background      : #ececec;
@layout-header-background    : #404040;
@layout-header-height        : 64px;
@layout-header-padding       : 0 50px;
@layout-footer-padding       : 24px 50px;
@layout-sider-background     : @layout-header-background;
@layout-trigger-height       : 48px;
@layout-trigger-background   : tint(@heading-color, 20%);
@layout-trigger-color        : #fff;
@layout-zero-trigger-width   : 36px;
@layout-zero-trigger-height  : 42px;

// z-index list
@zindex-affix           : 10;
@zindex-back-top        : 10;
@zindex-modal-mask      : 1000;
@zindex-modal           : 1000;
@zindex-notification    : 1010;
@zindex-message         : 1010;
@zindex-popover         : 1030;
@zindex-picker          : 1050;
@zindex-dropdown        : 1050;
@zindex-tooltip         : 1060;

// Animation
@animation-duration-slow: .3s; // Modal
@animation-duration-base: .2s;
@animation-duration-fast: .1s; // Tooltip

// Form
// ---
@label-required-color        : @highlight-color;
@label-color                 : @heading-color;
@form-item-margin-bottom     : 24px;
@form-item-trailing-colon    : true;

// Input
// ---
@input-height-base           : 28px;
@input-height-lg             : 32px;
@input-height-sm             : 22px;
@input-padding-horizontal    : 7px;
@input-padding-vertical-base : 4px;
@input-padding-vertical-sm   : 1px;
@input-padding-vertical-lg   : 6px;
@input-placeholder-color     : @disabled-color;
@input-color                 : @text-color;
@input-border-color          : @border-color-base;
@input-bg                    : #fff;
@input-addon-bg              : #eee;
@input-hover-border-color    : @primary-color;
@input-disabled-bg           : @disabled-bg;

// Tooltip
// ---
//* Tooltip max width
@tooltip-max-width: 250px;
//** Tooltip text color
@tooltip-color: #fff;
//** Tooltip background color
@tooltip-bg: rgba(0, 0, 0, .75);
//** Tooltip arrow width
@tooltip-arrow-width: 5px;
//** Tooltip distance with trigger
@tooltip-distance: @tooltip-arrow-width - 1px + 4px;
//** Tooltip arrow color
@tooltip-arrow-color: @tooltip-bg;

// Popover
// ---
//** Popover body background color
@popover-bg: #fff;
//** Popover text color
@popover-color: @text-color;
//** Popover maximum width
@popover-min-width: 177px;
//** Popover arrow width
@popover-arrow-width: 4px;
//** Popover arrow color
@popover-arrow-color: @popover-bg;
//** Popover outer arrow width
@popover-arrow-outer-width: (@popover-arrow-width + 1px);
//** Popover outer arrow color
@popover-arrow-outer-color: fadeout(@border-color-base, 30%);
//** Popover distance with trigger
@popover-distance: @popover-arrow-width + 4px;

// Modal
// --
@modal-mask-bg: rgba(55, 55, 55, 0.6);

// Progress
// --
@process-default-color: @primary-color;
@progress-remaining-color: @background-color-base;

// Menu
// ---
@menu-dark-bg: @layout-header-background;
@menu-dark-submenu-bg: #333;
@menu-collapsed-width: 64px;

// Spin
// ---
@spin-dot-size-sm: 14px;
@spin-dot-size: 20px;
@spin-dot-size-lg: 32px;

// Table
// --
@table-header-bg: @background-color-base;
@table-header-sort-bg: @background-color-active;
@table-row-hover-bg: @primary-1;
@table-selected-row-bg: #fafafa;
@table-padding-vertical: 16px;
@table-padding-horizontal: 8px;

// Tag
// --
@tag-default-bg: #f3f3f3;
@tag-default-color: @text-color;
@tag-font-size: @font-size-base;

// TimePicker
// ---
@time-picker-panel-column-width: 56px;
@time-picker-panel-width: @time-picker-panel-column-width * 3;
@time-picker-selected-bg: @background-color-base;

// Carousel
// ---
@carousel-dot-width: 16px;
@carousel-dot-height: 3px;
@carousel-dot-active-width: 24px;

// Badge
// ---
@badge-height: 20px;
@badge-dot-size: 8px;
@badge-font-size: @font-size-base;

// Rate
// ---
@rate-star-color: #f5a623;
@rate-star-bg: #e9e9e9;

// Card
// ---
@card-head-height: 48px;
@card-head-color: @heading-color;
@card-head-background: @component-background;

// Tabs
// ---
@tabs-card-head-background: #f9f9f9;
@tabs-title-font-size: @font-size-lg;

// BackTop
@back-top-color: #fff;
@back-top-bg: rgba(64, 64, 64, 0.4);
@back-top-hover-bg: rgba(64, 64, 64, 0.6);

// Avatar
@avatar-size-base: 32px;
@avatar-size-lg: 40px;
@avatar-size-sm: 24px;
@avatar-font-size-base: 18px;
@avatar-font-size-lg: 24px;
@avatar-font-size-sm: 14px;
@avatar-bg: #ccc;
@avatar-color: #fff;
@avatar-border-radius: @border-radius-base;
};
	}
}