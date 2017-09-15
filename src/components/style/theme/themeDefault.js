import color from 'tinycolor2';
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
dt.component.headingColor= color(pallet.primaryBgColor).darken(0.15).toString();
dt.component.textColor= color(pallet.primaryTextColor).setAlpha(0.65).toString();
dt.component.textColorSecondary= color(pallet.primaryTextColor).setAlpha(0.43).toString();
dt.component.headingColorDark= color(pallet.primaryBgColor).setAlpha(0.97).toString();
dt.component.textColorDark= color(pallet.primaryBgColor).setAlpha(0.91).toString();
dt.component.textColorSecondaryDark= color(pallet.primaryBgColor).setAlpha(0.67).toString();
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
dt.component.borderColorSplit= color(pallet.borderColorBase).darken(0.1).toString();
dt.component.borderWidthBase= '1px';
dt.component.borderStyleBase= 'solid';

// Outline
dt.component.outlineBlurSize= 0;
dt.component.outlineWidth= '2px';
dt.component.outlineColor= pallet.primaryColor;

// Default background color for disabled states, Collapse wrappers,
// and several active and hover states.
dt.component.backgroundColorBase= pallet.primaryItemBgColor;
dt.component.backgroundColorActive= color(pallet.primaryItemBgColor).darken(0.07).toString();

// Disabled states
dt.component.disableColor= color(pallet.black).setAlpha(0.25).toString();
dt.component.disableBg=dt.component.backgroundColorBase;
dt.component.disableColorDark = color(pallet.white).setAlpha(0.35).toString();

dt.component.shadow={};
dt.component.shadow.shadowColor = 'rgba(0, 0, 0, .2)';
dt.component.shadow.boxShadowBase = '0 1px 6px rgba(0, 0, 0, .2)';
dt.component.shadow.shadowUp = '0 -1px 6px rgba(0, 0, 0, .2)';
dt.component.shadow.shadowDown = '0 1px 6px rgba(0, 0, 0, .2)';
dt.component.shadow.shadowLeft = '-1px 0 6px rgba(0, 0, 0, .2)';
dt.component.shadow.shadowRight = '1px 0 6px rgba(0, 0, 0, .2)';
dt.component.shadow.shadowTwo = '0 2px 8px rgba(0, 0, 0, .2)';

//Button
dt.component.button={};
dt.component.button.btnFontWeight = 500;
dt.component.button.btnBorderRadiusBase = dt.component.borderRadiusBase;
dt.component.button.btnBorderRadiusSm = dt.component.borderRadiusBase;
dt.component.button.btnPrimatyColor = '#fff';
dt.component.button.btnPrimatyBg = '#000';
dt.component.button.btnDefaultColor = dt.component.textColor;
dt.component.button.btnDefaultBg = "#fff";
dt.component.button.btnDefaultBorder = dt.component.borderColorBase;
dt.component.button.btndangerColor = pallet.errorColor;
dt.component.button.btndangerBg = dt.component.backgroundColorBase;
dt.component.button.btndangerBorder = dt.component.borderColorBase;
dt.component.button.btnDisableColor = dt.component.disableColor;
dt.component.button.btnDisableBg = dt.component.disableBg;
dt.component.button.btnDisableBorder = dt.component.borderColorBase;
dt.component.button.btnPaddingBase = '0 15px';
dt.component.button.btnfontSizeLg = dt.component.fontSizeLarge;
dt.component.button.btnPaddingLg = '0 15px';
dt.component.button.btnPaddingSm = '0 7px';
dt.component.button.btnHeightBase = '28px';
dt.component.button.btnHeightLg = '32px';
dt.component.button.btnHeightSm = '22px';
dt.component.button.btnCircleSize = dt.component.button.btnHeightBase;
dt.component.button.btnCircleSizeLg = dt.component.button.btnHeightLg;
dt.component.button.btnCircleSizeSm = dt.component.button.btnHeightSm;
dt.component.button.btnGroupBorder = pallet.primarySeven;
dt.component.button.radioButtonBg = dt.component.button.btnDefaultBg;
dt.component.button.radioButtonColor = dt.component.button.btnDefaultColor;

// Media queries breakpoints
// Extra small screen / phone
dt.component.screen={};
dt.component.screen.xs = '480px';
dt.component.screen.sm = '768px';
dt.component.screen.md = '992px';
dt.component.screen.lg = '1200px';
dt.component.screen.xl = '1600px';

dt.component.screen.xsMin = '480px';
dt.component.screen.smMin = '768px';
dt.component.screen.mdMin = '992px';
dt.component.screen.lgMin = '1200px';
dt.component.screen.xlMin = '1600px';

dt.component.screen.xsMin = '479';
dt.component.screen.smMin = '767px';
dt.component.screen.mdMin = '991px';
dt.component.screen.lgMin = '1119px';
dt.component.screen.xlMin = '1599px';

// Grid system
dt.component.GridColumns = 24;
dt.component.GridGutterWidth = 0;

// Layout

dt.component.layout = {};
dt.component.layout.bodyBackground = '#ececec';
dt.component.layout.headerBackground = '#404040';
dt.component.layout.headerHeight = '64px';
dt.component.layout.headerPadding = '0 50px';
dt.component.layout.footerPadding = '24px 50px';
dt.component.layout.siderBackground = dt.component.layout.headerBackground;
dt.component.layout.triggerHeight = '48px';
//@layout-trigger-background   : tint(@heading-color, 20%);
dt.component.layout.triggerBackground = '';
dt.component.layout.triggerColor = '#fff';
dt.component.layout.zeroTriggerWidth = '36px';
dt.component.layout.zeroTriggerHeight = '42px';


// z-index list
dt.component.zIndex = {};
dt.component.zIndex.Affix = 10;
dt.component.zIndex.backTop = 10;
dt.component.zIndex.modalMask = 1000;
dt.component.zIndex.modal = 1000;
dt.component.zIndex.notification = 1010;
dt.component.zIndex.message = 1010;
dt.component.zIndex.popover = 1030;
dt.component.zIndex.picker = 1050;
dt.component.zIndex.dropDown = 1050;
dt.component.zIndex.toolTip = 1060;

// Animation
dt.component.animation.durationSlow = '.3s';// Modal
dt.component.animation.durationBase = '.2s';
dt.component.animation.durationFast = '.1s'; // Tooltip

// Form
dt.component.from={};
dt.component.from.labelRequiredColor = '';
// ---@label-required-color        : @highlight-color;
dt.component.from.labelColor = dt.component.headingColor;
dt.component.from.itemMarginBottom = '24px';
dt.component.from.itemTrailingColon = true;

// Input
dt.component.input={};
dt.component.input.heightBase = '28px';
dt.component.input.heightLg = '32px';
dt.component.input.heightSm = '22px';
dt.component.input.paddingHorizontal = '7px';
dt.component.input.paddingVerticalBase = '4px';
dt.component.input.paddingVerticalSm = '1px';
dt.component.input.paddingVerticalLg = '6px';
dt.component.input.placeholder = '#ccc';
dt.component.input.color = dt.component.textColor;
dt.component.input.borderColor = pallet.borderColorBase;
dt.component.input.bg = '#fff';
dt.component.input.addonBg = '#eee';
dt.component.input.hoverBorderColor = pallet.borderColorBase;
dt.component.input.disabledBg = '';
//@input-disabled-bg           : @disabled-bg;

// Tooltip
dt.component.tooltip={};
dt.component.tooltip.maxWidth = '250px';
dt.component.tooltip.color = '#fff';
dt.component.tooltip.bg = 'rgba(0, 0, 0, .75)';
dt.component.tooltip.arrowWidth = '5px';
dt.component.tooltip.distance = '8px';
dt.component.tooltip.arrowColor = 'rgba(0, 0, 0, .75)';

// Popover
dt.component.popover={};
dt.component.popover.bg = '#fff';
dt.component.popover.color = dt.component.textColor;
dt.component.popover.minWidth = '177px';
dt.component.popover.arrowColor = dt.component.popover.bg;
dt.component.popover.arrowWidth = '4px';
dt.component.popover.arrowOuterWidth = '5px';
dt.component.popover.arrowOuterColor = '';
//@popover-arrow-outer-color: fadeout(@border-color-base, 30%);
dt.component.popover.distance = '8px';

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