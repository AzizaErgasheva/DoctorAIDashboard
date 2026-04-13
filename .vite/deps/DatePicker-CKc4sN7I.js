import { r as __toESM } from "./chunk-BoAXSpZd.js";
import { t as require_react } from "./react.js";
import { $ as shouldForwardProp, Dt as capitalize, Et as require_prop_types, I as alpha, J as useEnhancedEffect, P as useRtl, Tt as clsx, et as generateUtilityClass, i as useTheme, j as useId, t as styled, wt as composeClasses } from "./styled-R1lDpwhy.js";
import { t as createSvgIcon, u as generateUtilityClasses } from "./createSvgIcon-DPm_RyFT.js";
import { $ as FormHelperText, En as resolveComponentProps, Fn as forceReflow, Gn as useEventCallback, In as classNamesShape, J as Grow, L as List, Ln as _inheritsLoose, Mn as useTimeout, Mt as Fade, Nn as TransitionGroup, Pn as Transition, Rn as _objectWithoutPropertiesLoose, Un as useForkRef, V as InputLabel, W as InputAdornment, Wt as useFormControl, Xt as Popper, bn as Paper, dt as DialogActions, gt as dialogClasses, k as ListItem, mt as Dialog, nr as ownerDocument, nt as FormControl, o as useMediaQuery, on as IconButton, ot as DialogContent, p as visuallyHidden, pn as ButtonBase, qn as useControlled, qt as Chip, rn as Typography, s as TextField, tn as useSlotProps, wt as Button, xt as FocusTrap, yn as refType } from "./version-keu71iKk.js";
import { t as _extends } from "./extends-DHQ_ay5K.js";
import { t as require_jsx_runtime } from "./jsx-runtime-Dx-T8GDe.js";
import { f as useThemeProps } from "./styles-BkVbjrfz.js";
import { t as warnOnce } from "./warning-STNjy_bo.js";
//#region node_modules/dom-helpers/esm/hasClass.js
/**
* Checks if a given element has a CSS class.
* 
* @param element the element
* @param className the CSS class name
*/
function hasClass(element, className) {
	if (element.classList) return !!className && element.classList.contains(className);
	return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
//#endregion
//#region node_modules/dom-helpers/esm/addClass.js
/**
* Adds a CSS class to a given element.
* 
* @param element the element
* @param className the CSS class name
*/
function addClass(element, className) {
	if (element.classList) element.classList.add(className);
	else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
	else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
//#endregion
//#region node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
	return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
/**
* Removes a CSS class from a given element.
* 
* @param element the element
* @param className the CSS class name
*/
function removeClass$1(element, className) {
	if (element.classList) element.classList.remove(className);
	else if (typeof element.className === "string") element.className = replaceClassName(element.className, className);
	else element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
}
//#endregion
//#region node_modules/react-transition-group/esm/CSSTransition.js
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
var import_react = /* @__PURE__ */ __toESM(require_react());
var _addClass = function addClass$1(node, classes) {
	return node && classes && classes.split(" ").forEach(function(c) {
		return addClass(node, c);
	});
};
var removeClass = function removeClass(node, classes) {
	return node && classes && classes.split(" ").forEach(function(c) {
		return removeClass$1(node, c);
	});
};
/**
* A transition component inspired by the excellent
* [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
* use it if you're using CSS transitions or animations. It's built upon the
* [`Transition`](https://reactcommunity.org/react-transition-group/transition)
* component, so it inherits all of its props.
*
* `CSSTransition` applies a pair of class names during the `appear`, `enter`,
* and `exit` states of the transition. The first class is applied and then a
* second `*-active` class in order to activate the CSS transition. After the
* transition, matching `*-done` class names are applied to persist the
* transition state.
*
* ```jsx
* function App() {
*   const [inProp, setInProp] = useState(false);
*   return (
*     <div>
*       <CSSTransition in={inProp} timeout={200} classNames="my-node">
*         <div>
*           {"I'll receive my-node-* classes"}
*         </div>
*       </CSSTransition>
*       <button type="button" onClick={() => setInProp(true)}>
*         Click to Enter
*       </button>
*     </div>
*   );
* }
* ```
*
* When the `in` prop is set to `true`, the child component will first receive
* the class `example-enter`, then the `example-enter-active` will be added in
* the next tick. `CSSTransition` [forces a
* reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
* between before adding the `example-enter-active`. This is an important trick
* because it allows us to transition between `example-enter` and
* `example-enter-active` even though they were added immediately one after
* another. Most notably, this is what makes it possible for us to animate
* _appearance_.
*
* ```css
* .my-node-enter {
*   opacity: 0;
* }
* .my-node-enter-active {
*   opacity: 1;
*   transition: opacity 200ms;
* }
* .my-node-exit {
*   opacity: 1;
* }
* .my-node-exit-active {
*   opacity: 0;
*   transition: opacity 200ms;
* }
* ```
*
* `*-active` classes represent which styles you want to animate **to**, so it's
* important to add `transition` declaration only to them, otherwise transitions
* might not behave as intended! This might not be obvious when the transitions
* are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
* the example above (minus `transition`), but it becomes apparent in more
* complex transitions.
*
* **Note**: If you're using the
* [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
* prop, make sure to define styles for `.appear-*` classes as well.
*/
var CSSTransition = /* @__PURE__ */ function(_React$Component) {
	_inheritsLoose(CSSTransition, _React$Component);
	function CSSTransition() {
		var _this;
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		_this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
		_this.appliedClasses = {
			appear: {},
			enter: {},
			exit: {}
		};
		_this.onEnter = function(maybeNode, maybeAppearing) {
			var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
			_this.removeClasses(node, "exit");
			_this.addClass(node, appearing ? "appear" : "enter", "base");
			if (_this.props.onEnter) _this.props.onEnter(maybeNode, maybeAppearing);
		};
		_this.onEntering = function(maybeNode, maybeAppearing) {
			var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0];
			var type = _this$resolveArgument2[1] ? "appear" : "enter";
			_this.addClass(node, type, "active");
			if (_this.props.onEntering) _this.props.onEntering(maybeNode, maybeAppearing);
		};
		_this.onEntered = function(maybeNode, maybeAppearing) {
			var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0];
			var type = _this$resolveArgument3[1] ? "appear" : "enter";
			_this.removeClasses(node, type);
			_this.addClass(node, type, "done");
			if (_this.props.onEntered) _this.props.onEntered(maybeNode, maybeAppearing);
		};
		_this.onExit = function(maybeNode) {
			var node = _this.resolveArguments(maybeNode)[0];
			_this.removeClasses(node, "appear");
			_this.removeClasses(node, "enter");
			_this.addClass(node, "exit", "base");
			if (_this.props.onExit) _this.props.onExit(maybeNode);
		};
		_this.onExiting = function(maybeNode) {
			var node = _this.resolveArguments(maybeNode)[0];
			_this.addClass(node, "exit", "active");
			if (_this.props.onExiting) _this.props.onExiting(maybeNode);
		};
		_this.onExited = function(maybeNode) {
			var node = _this.resolveArguments(maybeNode)[0];
			_this.removeClasses(node, "exit");
			_this.addClass(node, "exit", "done");
			if (_this.props.onExited) _this.props.onExited(maybeNode);
		};
		_this.resolveArguments = function(maybeNode, maybeAppearing) {
			return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
		};
		_this.getClassNames = function(type) {
			var classNames = _this.props.classNames;
			var isStringClassNames = typeof classNames === "string";
			var prefix = isStringClassNames && classNames ? classNames + "-" : "";
			var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
			return {
				baseClassName,
				activeClassName: isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"],
				doneClassName: isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"]
			};
		};
		return _this;
	}
	var _proto = CSSTransition.prototype;
	_proto.addClass = function addClass(node, type, phase) {
		var className = this.getClassNames(type)[phase + "ClassName"];
		var doneClassName = this.getClassNames("enter").doneClassName;
		if (type === "appear" && phase === "done" && doneClassName) className += " " + doneClassName;
		if (phase === "active") {
			if (node) forceReflow(node);
		}
		if (className) {
			this.appliedClasses[type][phase] = className;
			_addClass(node, className);
		}
	};
	_proto.removeClasses = function removeClasses(node, type) {
		var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
		this.appliedClasses[type] = {};
		if (baseClassName) removeClass(node, baseClassName);
		if (activeClassName) removeClass(node, activeClassName);
		if (doneClassName) removeClass(node, doneClassName);
	};
	_proto.render = function render() {
		var _this$props = this.props;
		_this$props.classNames;
		var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
		return /* @__PURE__ */ import_react.createElement(Transition, _extends({}, props, {
			onEnter: this.onEnter,
			onEntered: this.onEntered,
			onEntering: this.onEntering,
			onExit: this.onExit,
			onExiting: this.onExiting,
			onExited: this.onExited
		}));
	};
	return CSSTransition;
}(import_react.Component);
CSSTransition.defaultProps = { classNames: "" };
CSSTransition.propTypes = _extends({}, Transition.propTypes, {
	classNames: classNamesShape,
	onEnter: import_prop_types.default.func,
	onEntering: import_prop_types.default.func,
	onEntered: import_prop_types.default.func,
	onExit: import_prop_types.default.func,
	onExiting: import_prop_types.default.func,
	onExited: import_prop_types.default.func
});
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/locales/utils/getPickersLocalization.js
var getPickersLocalization = (pickersTranslations) => {
	return { components: { MuiLocalizationProvider: { defaultProps: { localeText: _extends({}, pickersTranslations) } } } };
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/locales/enUS.js
var enUSPickers = {
	previousMonth: "Previous month",
	nextMonth: "Next month",
	openPreviousView: "Open previous view",
	openNextView: "Open next view",
	calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
	start: "Start",
	end: "End",
	startDate: "Start date",
	startTime: "Start time",
	endDate: "End date",
	endTime: "End time",
	cancelButtonLabel: "Cancel",
	clearButtonLabel: "Clear",
	okButtonLabel: "OK",
	todayButtonLabel: "Today",
	nextStepButtonLabel: "Next",
	datePickerToolbarTitle: "Select date",
	dateTimePickerToolbarTitle: "Select date & time",
	timePickerToolbarTitle: "Select time",
	dateRangePickerToolbarTitle: "Select date range",
	timeRangePickerToolbarTitle: "Select time range",
	clockLabelText: (view, formattedTime) => `Select ${view}. ${!formattedTime ? "No time selected" : `Selected time is ${formattedTime}`}`,
	hoursClockNumberText: (hours) => `${hours} hours`,
	minutesClockNumberText: (minutes) => `${minutes} minutes`,
	secondsClockNumberText: (seconds) => `${seconds} seconds`,
	selectViewText: (view) => `Select ${view}`,
	calendarWeekNumberHeaderLabel: "Week number",
	calendarWeekNumberHeaderText: "#",
	calendarWeekNumberAriaLabelText: (weekNumber) => `Week ${weekNumber}`,
	calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
	openDatePickerDialogue: (formattedDate) => formattedDate ? `Choose date, selected date is ${formattedDate}` : "Choose date",
	openTimePickerDialogue: (formattedTime) => formattedTime ? `Choose time, selected time is ${formattedTime}` : "Choose time",
	openRangePickerDialogue: (formattedRange) => formattedRange ? `Choose range, selected range is ${formattedRange}` : "Choose range",
	fieldClearLabel: "Clear",
	timeTableLabel: "pick time",
	dateTableLabel: "pick date",
	fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
	fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
	fieldDayPlaceholder: () => "DD",
	fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
	fieldHoursPlaceholder: () => "hh",
	fieldMinutesPlaceholder: () => "mm",
	fieldSecondsPlaceholder: () => "ss",
	fieldMeridiemPlaceholder: () => "aa",
	year: "Year",
	month: "Month",
	day: "Day",
	weekDay: "Week day",
	hours: "Hours",
	minutes: "Minutes",
	seconds: "Seconds",
	meridiem: "Meridiem",
	empty: "Empty"
};
var DEFAULT_LOCALE = enUSPickers;
getPickersLocalization(enUSPickers);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/LocalizationProvider/LocalizationProvider.js
var import_jsx_runtime = require_jsx_runtime();
var _excluded$31 = ["localeText"];
var PickerAdapterContext = /* @__PURE__ */ import_react.createContext(null);
PickerAdapterContext.displayName = "PickerAdapterContext";
var MuiPickersAdapterContext = PickerAdapterContext;
/**
* Demos:
*
* - [Date format and localization](https://mui.com/x/react-date-pickers/adapters-locale/)
* - [Calendar systems](https://mui.com/x/react-date-pickers/calendar-systems/)
* - [Translated components](https://mui.com/x/react-date-pickers/localization/)
* - [UTC and timezones](https://mui.com/x/react-date-pickers/timezone/)
*
* API:
*
* - [LocalizationProvider API](https://mui.com/x/api/date-pickers/localization-provider/)
*/
var LocalizationProvider = function LocalizationProvider(inProps) {
	const { localeText: inLocaleText } = inProps, otherInProps = _objectWithoutPropertiesLoose(inProps, _excluded$31);
	const { adapter: parentAdapter, localeText: parentLocaleText } = import_react.useContext(PickerAdapterContext) ?? {
		utils: void 0,
		adapter: void 0,
		localeText: void 0
	};
	const { children, dateAdapter: DateAdapter, dateFormats, dateLibInstance, adapterLocale, localeText: themeLocaleText } = useThemeProps({
		props: otherInProps,
		name: "MuiLocalizationProvider"
	});
	const localeText = import_react.useMemo(() => _extends({}, themeLocaleText, parentLocaleText, inLocaleText), [
		themeLocaleText,
		parentLocaleText,
		inLocaleText
	]);
	const adapter = import_react.useMemo(() => {
		if (!DateAdapter) {
			if (parentAdapter) return parentAdapter;
			return null;
		}
		const dateAdapter = new DateAdapter({
			locale: adapterLocale,
			formats: dateFormats,
			instance: dateLibInstance
		});
		if (!dateAdapter.isMUIAdapter) throw new Error([
			"MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`",
			"For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`",
			"More information on the installation documentation: https://mui.com/x/react-date-pickers/quickstart/#installation"
		].join(`\n`));
		return dateAdapter;
	}, [
		DateAdapter,
		adapterLocale,
		dateFormats,
		dateLibInstance,
		parentAdapter
	]);
	const defaultDates = import_react.useMemo(() => {
		if (!adapter) return null;
		return {
			minDate: adapter.date("1900-01-01T00:00:00.000"),
			maxDate: adapter.date("2099-12-31T00:00:00.000")
		};
	}, [adapter]);
	const contextValue = import_react.useMemo(() => {
		return {
			utils: adapter,
			adapter,
			defaultDates,
			localeText
		};
	}, [
		defaultDates,
		adapter,
		localeText
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickerAdapterContext.Provider, {
		value: contextValue,
		children
	});
};
LocalizationProvider.displayName = "LocalizationProvider";
LocalizationProvider.propTypes = {
	adapterLocale: import_prop_types.default.any,
	children: import_prop_types.default.node,
	dateAdapter: import_prop_types.default.func,
	dateFormats: import_prop_types.default.shape({
		dayOfMonth: import_prop_types.default.string,
		dayOfMonthFull: import_prop_types.default.string,
		fullDate: import_prop_types.default.string,
		fullTime12h: import_prop_types.default.string,
		fullTime24h: import_prop_types.default.string,
		hours12h: import_prop_types.default.string,
		hours24h: import_prop_types.default.string,
		keyboardDate: import_prop_types.default.string,
		keyboardDateTime12h: import_prop_types.default.string,
		keyboardDateTime24h: import_prop_types.default.string,
		meridiem: import_prop_types.default.string,
		minutes: import_prop_types.default.string,
		month: import_prop_types.default.string,
		monthShort: import_prop_types.default.string,
		normalDate: import_prop_types.default.string,
		normalDateWithWeekday: import_prop_types.default.string,
		seconds: import_prop_types.default.string,
		shortDate: import_prop_types.default.string,
		weekday: import_prop_types.default.string,
		weekdayShort: import_prop_types.default.string,
		year: import_prop_types.default.string
	}),
	dateLibInstance: import_prop_types.default.any,
	localeText: import_prop_types.default.object
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js
var useLocalizationContext = () => {
	const localization = import_react.useContext(PickerAdapterContext);
	if (localization === null) throw new Error([
		"MUI X: Can not find the date and time pickers localization context.",
		"It looks like you forgot to wrap your component in LocalizationProvider.",
		"This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"
	].join("\n"));
	if (localization.adapter === null) throw new Error(["MUI X: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join("\n"));
	const localeText = import_react.useMemo(() => _extends({}, DEFAULT_LOCALE, localization.localeText), [localization.localeText]);
	return import_react.useMemo(() => _extends({}, localization, { localeText }), [localization, localeText]);
};
var usePickerAdapter = () => useLocalizationContext().adapter;
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/hooks/usePickerTranslations.js
var usePickerTranslations = () => useLocalizationContext().localeText;
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/validation/extractValidationProps.js
var DATE_VALIDATION_PROP_NAMES = [
	"disablePast",
	"disableFuture",
	"minDate",
	"maxDate",
	"shouldDisableDate",
	"shouldDisableMonth",
	"shouldDisableYear"
];
var TIME_VALIDATION_PROP_NAMES = [
	"disablePast",
	"disableFuture",
	"minTime",
	"maxTime",
	"shouldDisableTime",
	"minutesStep",
	"ampm",
	"disableIgnoringDatePartForTimeValidation"
];
var DATE_TIME_VALIDATION_PROP_NAMES = ["minDateTime", "maxDateTime"];
var VALIDATION_PROP_NAMES = [
	...DATE_VALIDATION_PROP_NAMES,
	...TIME_VALIDATION_PROP_NAMES,
	...DATE_TIME_VALIDATION_PROP_NAMES
];
/**
* Extract the validation props for the props received by a component.
* Limit the risk of forgetting some of them and reduce the bundle size.
*/
var extractValidationProps = (props) => VALIDATION_PROP_NAMES.reduce((extractedProps, propName) => {
	if (props.hasOwnProperty(propName)) extractedProps[propName] = props[propName];
	return extractedProps;
}, {});
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/hooks/useSplitFieldProps.js
var SHARED_FIELD_INTERNAL_PROP_NAMES = [
	"value",
	"defaultValue",
	"referenceDate",
	"format",
	"formatDensity",
	"onChange",
	"timezone",
	"onError",
	"shouldRespectLeadingZeros",
	"selectedSections",
	"onSelectedSectionsChange",
	"unstableFieldRef",
	"unstableStartFieldRef",
	"unstableEndFieldRef",
	"enableAccessibleFieldDOMStructure",
	"disabled",
	"readOnly",
	"dateSeparator",
	"autoFocus",
	"focused"
];
/**
* Split the props received by the field component into:
* - `internalProps` which are used by the various hooks called by the field component.
* - `forwardedProps` which are passed to the underlying component.
* Note that some forwarded props might be used by the hooks as well.
* For instance, hooks like `useDateField` need props like `onKeyDown` to merge the default event handler and the one provided by the application.
* @template TProps, TValueType
* @param {TProps} props The props received by the field component.
* @param {TValueType} valueType The type of the field value ('date', 'time', or 'date-time').
*/
var useSplitFieldProps = (props, valueType) => {
	return import_react.useMemo(() => {
		const forwardedProps = _extends({}, props);
		const internalProps = {};
		const extractProp = (propName) => {
			if (forwardedProps.hasOwnProperty(propName)) {
				internalProps[propName] = forwardedProps[propName];
				delete forwardedProps[propName];
			}
		};
		SHARED_FIELD_INTERNAL_PROP_NAMES.forEach(extractProp);
		if (valueType === "date") DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
		else if (valueType === "time") TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
		else if (valueType === "date-time") {
			DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
			TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
			DATE_TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
		}
		return {
			forwardedProps,
			internalProps
		};
	}, [props, valueType]);
};
/**
* Extract the internal props from the props received by the field component.
* This makes sure that the internal props not defined in the props are not present in the result.
*/
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/utils/views.js
var areViewsEqual = (views, expectedViews) => {
	if (views.length !== expectedViews.length) return false;
	return expectedViews.every((expectedView) => views.includes(expectedView));
};
var applyDefaultViewProps = ({ openTo, defaultOpenTo, views, defaultViews }) => {
	const viewsWithDefault = views ?? defaultViews;
	let openToWithDefault;
	if (openTo != null) openToWithDefault = openTo;
	else if (viewsWithDefault.includes(defaultOpenTo)) openToWithDefault = defaultOpenTo;
	else if (viewsWithDefault.length > 0) openToWithDefault = viewsWithDefault[0];
	else throw new Error("MUI X: The `views` prop must contain at least one view.");
	return {
		views: viewsWithDefault,
		openTo: openToWithDefault
	};
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/utils/date-utils.js
var mergeDateAndTime = (adapter, dateParam, timeParam) => {
	let mergedDate = dateParam;
	mergedDate = adapter.setHours(mergedDate, adapter.getHours(timeParam));
	mergedDate = adapter.setMinutes(mergedDate, adapter.getMinutes(timeParam));
	mergedDate = adapter.setSeconds(mergedDate, adapter.getSeconds(timeParam));
	mergedDate = adapter.setMilliseconds(mergedDate, adapter.getMilliseconds(timeParam));
	return mergedDate;
};
var findClosestEnabledDate = ({ date, disableFuture, disablePast, maxDate, minDate, isDateDisabled, adapter, timezone }) => {
	const today = mergeDateAndTime(adapter, adapter.date(void 0, timezone), date);
	if (disablePast && adapter.isBefore(minDate, today)) minDate = today;
	if (disableFuture && adapter.isAfter(maxDate, today)) maxDate = today;
	let forward = date;
	let backward = date;
	if (adapter.isBefore(date, minDate)) {
		forward = minDate;
		backward = null;
	}
	if (adapter.isAfter(date, maxDate)) {
		if (backward) backward = maxDate;
		forward = null;
	}
	while (forward || backward) {
		if (forward && adapter.isAfter(forward, maxDate)) forward = null;
		if (backward && adapter.isBefore(backward, minDate)) backward = null;
		if (forward) {
			if (!isDateDisabled(forward)) return forward;
			forward = adapter.addDays(forward, 1);
		}
		if (backward) {
			if (!isDateDisabled(backward)) return backward;
			backward = adapter.addDays(backward, -1);
		}
	}
	return null;
};
var replaceInvalidDateByNull = (adapter, value) => !adapter.isValid(value) ? null : value;
var applyDefaultDate = (adapter, value, defaultValue) => {
	if (value == null || !adapter.isValid(value)) return defaultValue;
	return value;
};
var areDatesEqual = (adapter, a, b) => {
	if (!adapter.isValid(a) && a != null && !adapter.isValid(b) && b != null) return true;
	return adapter.isEqual(a, b);
};
var getMonthsInYear = (adapter, year) => {
	const months = [adapter.startOfYear(year)];
	while (months.length < 12) {
		const prevMonth = months[months.length - 1];
		months.push(adapter.addMonths(prevMonth, 1));
	}
	return months;
};
var getTodayDate = (adapter, timezone, valueType) => valueType === "date" ? adapter.startOfDay(adapter.date(void 0, timezone)) : adapter.date(void 0, timezone);
var formatMeridiem = (adapter, meridiem) => {
	const date = adapter.setHours(adapter.date(), meridiem === "am" ? 2 : 14);
	return adapter.format(date, "meridiem");
};
var DATE_VIEWS = [
	"year",
	"month",
	"day"
];
var isDatePickerView = (view) => DATE_VIEWS.includes(view);
var resolveDateFormat = (adapter, { format, views }, isInToolbar) => {
	if (format != null) return format;
	const formats = adapter.formats;
	if (areViewsEqual(views, ["year"])) return formats.year;
	if (areViewsEqual(views, ["month"])) return formats.month;
	if (areViewsEqual(views, ["day"])) return formats.dayOfMonth;
	if (areViewsEqual(views, ["month", "year"])) return `${formats.month} ${formats.year}`;
	if (areViewsEqual(views, ["day", "month"])) return `${formats.month} ${formats.dayOfMonth}`;
	if (isInToolbar) return /en/.test(adapter.getCurrentLocaleCode()) ? formats.normalDateWithWeekday : formats.normalDate;
	return formats.keyboardDate;
};
var getWeekdays = (adapter, date) => {
	const start = adapter.startOfWeek(date);
	return [
		0,
		1,
		2,
		3,
		4,
		5,
		6
	].map((diff) => adapter.addDays(start, diff));
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useField.utils.js
var getDateSectionConfigFromFormatToken = (adapter, formatToken) => {
	const config = adapter.formatTokenMap[formatToken];
	if (config == null) throw new Error([`MUI X: The token "${formatToken}" is not supported by the Date and Time Pickers.`, "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."].join("\n"));
	if (typeof config === "string") return {
		type: config,
		contentType: config === "meridiem" ? "letter" : "digit",
		maxLength: void 0
	};
	return {
		type: config.sectionType,
		contentType: config.contentType,
		maxLength: config.maxLength
	};
};
var getDaysInWeekStr = (adapter, format) => {
	const elements = [];
	const now = adapter.date(void 0, "default");
	const startDate = adapter.startOfWeek(now);
	const endDate = adapter.endOfWeek(now);
	let current = startDate;
	while (adapter.isBefore(current, endDate)) {
		elements.push(current);
		current = adapter.addDays(current, 1);
	}
	return elements.map((weekDay) => adapter.formatByString(weekDay, format));
};
var getLetterEditingOptions = (adapter, timezone, sectionType, format) => {
	switch (sectionType) {
		case "month": return getMonthsInYear(adapter, adapter.date(void 0, timezone)).map((month) => adapter.formatByString(month, format));
		case "weekDay": return getDaysInWeekStr(adapter, format);
		case "meridiem": {
			const now = adapter.date(void 0, timezone);
			return [adapter.startOfDay(now), adapter.endOfDay(now)].map((date) => adapter.formatByString(date, format));
		}
		default: return [];
	}
};
var NON_LOCALIZED_DIGITS = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9"
];
var getLocalizedDigits = (adapter) => {
	const today = adapter.date(void 0);
	if (adapter.formatByString(adapter.setSeconds(today, 0), "s") === "0") return NON_LOCALIZED_DIGITS;
	return Array.from({ length: 10 }).map((_, index) => adapter.formatByString(adapter.setSeconds(today, index), "s"));
};
var removeLocalizedDigits = (valueStr, localizedDigits) => {
	if (localizedDigits[0] === "0") return valueStr;
	const digits = [];
	let currentFormattedDigit = "";
	for (let i = 0; i < valueStr.length; i += 1) {
		currentFormattedDigit += valueStr[i];
		const matchingDigitIndex = localizedDigits.indexOf(currentFormattedDigit);
		if (matchingDigitIndex > -1) {
			digits.push(matchingDigitIndex.toString());
			currentFormattedDigit = "";
		}
	}
	return digits.join("");
};
var applyLocalizedDigits = (valueStr, localizedDigits) => {
	if (localizedDigits[0] === "0") return valueStr;
	return valueStr.split("").map((char) => localizedDigits[Number(char)]).join("");
};
var isStringNumber = (valueStr, localizedDigits) => {
	const nonLocalizedValueStr = removeLocalizedDigits(valueStr, localizedDigits);
	return nonLocalizedValueStr !== " " && !Number.isNaN(Number(nonLocalizedValueStr));
};
/**
* Make sure the value of a digit section have the right amount of leading zeros.
* E.g.: `03` => `3`
* Warning: Should only be called with non-localized digits. Call `removeLocalizedDigits` with your value if needed.
*/
var cleanLeadingZeros = (valueStr, size) => {
	return Number(valueStr).toString().padStart(size, "0");
};
var cleanDigitSectionValue = (adapter, value, sectionBoundaries, localizedDigits, section) => {
	if (section.type !== "day" && section.contentType === "digit-with-letter") throw new Error([`MUI X: The token "${section.format}" is a digit format with letter in it.'
             This type of format is only supported for 'day' sections`].join("\n"));
	if (section.type === "day" && section.contentType === "digit-with-letter") {
		const date = adapter.setDate(sectionBoundaries.longestMonth, value);
		return adapter.formatByString(date, section.format);
	}
	let valueStr = value.toString();
	if (section.hasLeadingZerosInInput) valueStr = cleanLeadingZeros(valueStr, section.maxLength);
	return applyLocalizedDigits(valueStr, localizedDigits);
};
var getSectionVisibleValue = (section, target, localizedDigits) => {
	let value = section.value || section.placeholder;
	const hasLeadingZeros = target === "non-input" ? section.hasLeadingZerosInFormat : section.hasLeadingZerosInInput;
	if (target === "non-input" && section.hasLeadingZerosInInput && !section.hasLeadingZerosInFormat) value = Number(removeLocalizedDigits(value, localizedDigits)).toString();
	if (["input-rtl", "input-ltr"].includes(target) && section.contentType === "digit" && !hasLeadingZeros && value.length === 1) value = `${value}\u200e`;
	if (target === "input-rtl") value = `\u2068${value}\u2069`;
	return value;
};
var changeSectionValueFormat = (adapter, valueStr, currentFormat, newFormat) => {
	if (getDateSectionConfigFromFormatToken(adapter, currentFormat).type === "weekDay") throw new Error("changeSectionValueFormat doesn't support week day formats");
	return adapter.formatByString(adapter.parse(valueStr, currentFormat), newFormat);
};
var isFourDigitYearFormat = (adapter, format) => adapter.formatByString(adapter.date(void 0, "system"), format).length === 4;
var doesSectionFormatHaveLeadingZeros = (adapter, contentType, sectionType, format) => {
	if (contentType !== "digit") return false;
	const now = adapter.date(void 0, "default");
	switch (sectionType) {
		case "year":
			if (adapter.lib === "dayjs" && format === "YY") return true;
			return adapter.formatByString(adapter.setYear(now, 1), format).startsWith("0");
		case "month": return adapter.formatByString(adapter.startOfYear(now), format).length > 1;
		case "day": return adapter.formatByString(adapter.startOfMonth(now), format).length > 1;
		case "weekDay": return adapter.formatByString(adapter.startOfWeek(now), format).length > 1;
		case "hours": return adapter.formatByString(adapter.setHours(now, 1), format).length > 1;
		case "minutes": return adapter.formatByString(adapter.setMinutes(now, 1), format).length > 1;
		case "seconds": return adapter.formatByString(adapter.setSeconds(now, 1), format).length > 1;
		default: throw new Error("Invalid section type");
	}
};
/**
* Some date libraries like `dayjs` don't support parsing from date with escaped characters.
* To make sure that the parsing works, we are building a format and a date without any separator.
*/
var getDateFromDateSections = (adapter, sections, localizedDigits) => {
	const shouldSkipWeekDays = sections.some((section) => section.type === "day");
	const sectionFormats = [];
	const sectionValues = [];
	for (let i = 0; i < sections.length; i += 1) {
		const section = sections[i];
		if (!(shouldSkipWeekDays && section.type === "weekDay")) {
			sectionFormats.push(section.format);
			sectionValues.push(getSectionVisibleValue(section, "non-input", localizedDigits));
		}
	}
	const formatWithoutSeparator = sectionFormats.join(" ");
	const dateWithoutSeparatorStr = sectionValues.join(" ");
	return adapter.parse(dateWithoutSeparatorStr, formatWithoutSeparator);
};
var createDateStrForV7HiddenInputFromSections = (sections) => sections.map((section) => {
	return `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`;
}).join("");
var createDateStrForV6InputFromSections = (sections, localizedDigits, isRtl) => {
	const dateStr = sections.map((section) => {
		const dateValue = getSectionVisibleValue(section, isRtl ? "input-rtl" : "input-ltr", localizedDigits);
		return `${section.startSeparator}${dateValue}${section.endSeparator}`;
	}).join("");
	if (!isRtl) return dateStr;
	return `\u2066${dateStr}\u2069`;
};
var getSectionsBoundaries = (adapter, localizedDigits, timezone) => {
	const today = adapter.date(void 0, timezone);
	const endOfYear = adapter.endOfYear(today);
	const endOfDay = adapter.endOfDay(today);
	const { maxDaysInMonth, longestMonth } = getMonthsInYear(adapter, today).reduce((acc, month) => {
		const daysInMonth = adapter.getDaysInMonth(month);
		if (daysInMonth > acc.maxDaysInMonth) return {
			maxDaysInMonth: daysInMonth,
			longestMonth: month
		};
		return acc;
	}, {
		maxDaysInMonth: 0,
		longestMonth: null
	});
	return {
		year: ({ format }) => ({
			minimum: 0,
			maximum: isFourDigitYearFormat(adapter, format) ? 9999 : 99
		}),
		month: () => ({
			minimum: 1,
			maximum: adapter.getMonth(endOfYear) + 1
		}),
		day: ({ currentDate }) => ({
			minimum: 1,
			maximum: adapter.isValid(currentDate) ? adapter.getDaysInMonth(currentDate) : maxDaysInMonth,
			longestMonth
		}),
		weekDay: ({ format, contentType }) => {
			if (contentType === "digit") {
				const daysInWeek = getDaysInWeekStr(adapter, format).map(Number);
				return {
					minimum: Math.min(...daysInWeek),
					maximum: Math.max(...daysInWeek)
				};
			}
			return {
				minimum: 1,
				maximum: 7
			};
		},
		hours: ({ format }) => {
			const lastHourInDay = adapter.getHours(endOfDay);
			if (removeLocalizedDigits(adapter.formatByString(adapter.endOfDay(today), format), localizedDigits) !== lastHourInDay.toString()) return {
				minimum: 1,
				maximum: Number(removeLocalizedDigits(adapter.formatByString(adapter.startOfDay(today), format), localizedDigits))
			};
			return {
				minimum: 0,
				maximum: lastHourInDay
			};
		},
		minutes: () => ({
			minimum: 0,
			maximum: adapter.getMinutes(endOfDay)
		}),
		seconds: () => ({
			minimum: 0,
			maximum: adapter.getSeconds(endOfDay)
		}),
		meridiem: () => ({
			minimum: 0,
			maximum: 1
		}),
		empty: () => ({
			minimum: 0,
			maximum: 0
		})
	};
};
var warnedOnceInvalidSection = false;
var validateSections = (sections, valueType) => {
	if (!warnedOnceInvalidSection) {
		const supportedSections = ["empty"];
		if (["date", "date-time"].includes(valueType)) supportedSections.push("weekDay", "day", "month", "year");
		if (["time", "date-time"].includes(valueType)) supportedSections.push("hours", "minutes", "seconds", "meridiem");
		const invalidSection = sections.find((section) => !supportedSections.includes(section.type));
		if (invalidSection) {
			console.warn(`MUI X: The field component you are using is not compatible with the "${invalidSection.type}" date section.`, `The supported date sections are ["${supportedSections.join("\", \"")}"]\`.`);
			warnedOnceInvalidSection = true;
		}
	}
};
var transferDateSectionValue = (adapter, section, dateToTransferFrom, dateToTransferTo) => {
	switch (section.type) {
		case "year": return adapter.setYear(dateToTransferTo, adapter.getYear(dateToTransferFrom));
		case "month": return adapter.setMonth(dateToTransferTo, adapter.getMonth(dateToTransferFrom));
		case "weekDay": {
			let dayInWeekStrOfActiveDate = adapter.formatByString(dateToTransferFrom, section.format);
			if (section.hasLeadingZerosInInput) dayInWeekStrOfActiveDate = cleanLeadingZeros(dayInWeekStrOfActiveDate, section.maxLength);
			const formattedDaysInWeek = getDaysInWeekStr(adapter, section.format);
			const dayInWeekOfActiveDate = formattedDaysInWeek.indexOf(dayInWeekStrOfActiveDate);
			const diff = formattedDaysInWeek.indexOf(section.value) - dayInWeekOfActiveDate;
			return adapter.addDays(dateToTransferFrom, diff);
		}
		case "day": return adapter.setDate(dateToTransferTo, adapter.getDate(dateToTransferFrom));
		case "meridiem": {
			const isAM = adapter.getHours(dateToTransferFrom) < 12;
			const mergedDateHours = adapter.getHours(dateToTransferTo);
			if (isAM && mergedDateHours >= 12) return adapter.addHours(dateToTransferTo, -12);
			if (!isAM && mergedDateHours < 12) return adapter.addHours(dateToTransferTo, 12);
			return dateToTransferTo;
		}
		case "hours": return adapter.setHours(dateToTransferTo, adapter.getHours(dateToTransferFrom));
		case "minutes": return adapter.setMinutes(dateToTransferTo, adapter.getMinutes(dateToTransferFrom));
		case "seconds": return adapter.setSeconds(dateToTransferTo, adapter.getSeconds(dateToTransferFrom));
		default: return dateToTransferTo;
	}
};
var reliableSectionModificationOrder = {
	year: 1,
	month: 2,
	day: 3,
	weekDay: 4,
	hours: 5,
	minutes: 6,
	seconds: 7,
	meridiem: 8,
	empty: 9
};
var mergeDateIntoReferenceDate = (adapter, dateToTransferFrom, sections, referenceDate, shouldLimitToEditedSections) => [...sections].sort((a, b) => reliableSectionModificationOrder[a.type] - reliableSectionModificationOrder[b.type]).reduce((mergedDate, section) => {
	if (!shouldLimitToEditedSections || section.modified) return transferDateSectionValue(adapter, section, dateToTransferFrom, mergedDate);
	return mergedDate;
}, referenceDate);
var isAndroid = () => navigator.userAgent.toLowerCase().includes("android");
var getSectionOrder = (sections, shouldApplyRTL) => {
	const neighbors = {};
	if (!shouldApplyRTL) {
		sections.forEach((_, index) => {
			neighbors[index] = {
				leftIndex: index === 0 ? null : index - 1,
				rightIndex: index === sections.length - 1 ? null : index + 1
			};
		});
		return {
			neighbors,
			startIndex: 0,
			endIndex: sections.length - 1
		};
	}
	const rtl2ltr = {};
	const ltr2rtl = {};
	let groupedSectionsStart = 0;
	let groupedSectionsEnd = 0;
	let RTLIndex = sections.length - 1;
	while (RTLIndex >= 0) {
		groupedSectionsEnd = sections.findIndex((section, index) => index >= groupedSectionsStart && section.endSeparator?.includes(" ") && section.endSeparator !== " / ");
		if (groupedSectionsEnd === -1) groupedSectionsEnd = sections.length - 1;
		for (let i = groupedSectionsEnd; i >= groupedSectionsStart; i -= 1) {
			ltr2rtl[i] = RTLIndex;
			rtl2ltr[RTLIndex] = i;
			RTLIndex -= 1;
		}
		groupedSectionsStart = groupedSectionsEnd + 1;
	}
	sections.forEach((_, index) => {
		const rtlIndex = ltr2rtl[index];
		neighbors[index] = {
			leftIndex: rtlIndex === 0 ? null : rtl2ltr[rtlIndex - 1],
			rightIndex: rtlIndex === sections.length - 1 ? null : rtl2ltr[rtlIndex + 1]
		};
	});
	return {
		neighbors,
		startIndex: rtl2ltr[0],
		endIndex: rtl2ltr[sections.length - 1]
	};
};
var parseSelectedSections = (selectedSections, sections) => {
	if (selectedSections == null) return null;
	if (selectedSections === "all") return "all";
	if (typeof selectedSections === "string") {
		const index = sections.findIndex((section) => section.type === selectedSections);
		return index === -1 ? null : index;
	}
	return selectedSections;
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/buildSectionsFromFormat.js
var expandFormat = ({ adapter, format }) => {
	let formatExpansionOverflow = 10;
	let prevFormat = format;
	let nextFormat = adapter.expandFormat(format);
	while (nextFormat !== prevFormat) {
		prevFormat = nextFormat;
		nextFormat = adapter.expandFormat(prevFormat);
		formatExpansionOverflow -= 1;
		if (formatExpansionOverflow < 0) throw new Error("MUI X: The format expansion seems to be in an infinite loop. Please open an issue with the format passed to the component.");
	}
	return nextFormat;
};
var getEscapedPartsFromFormat = ({ adapter, expandedFormat }) => {
	const escapedParts = [];
	const { start: startChar, end: endChar } = adapter.escapedCharacters;
	const regExp = new RegExp(`(\\${startChar}[^\\${endChar}]*\\${endChar})+`, "g");
	let match = null;
	while (match = regExp.exec(expandedFormat)) escapedParts.push({
		start: match.index,
		end: regExp.lastIndex - 1
	});
	return escapedParts;
};
var getSectionPlaceholder = (adapter, localeText, sectionConfig, sectionFormat) => {
	switch (sectionConfig.type) {
		case "year": return localeText.fieldYearPlaceholder({
			digitAmount: adapter.formatByString(adapter.date(void 0, "default"), sectionFormat).length,
			format: sectionFormat
		});
		case "month": return localeText.fieldMonthPlaceholder({
			contentType: sectionConfig.contentType,
			format: sectionFormat
		});
		case "day": return localeText.fieldDayPlaceholder({ format: sectionFormat });
		case "weekDay": return localeText.fieldWeekDayPlaceholder({
			contentType: sectionConfig.contentType,
			format: sectionFormat
		});
		case "hours": return localeText.fieldHoursPlaceholder({ format: sectionFormat });
		case "minutes": return localeText.fieldMinutesPlaceholder({ format: sectionFormat });
		case "seconds": return localeText.fieldSecondsPlaceholder({ format: sectionFormat });
		case "meridiem": return localeText.fieldMeridiemPlaceholder({ format: sectionFormat });
		default: return sectionFormat;
	}
};
var createSection = ({ adapter, date, shouldRespectLeadingZeros, localeText, localizedDigits, now, token, startSeparator }) => {
	if (token === "") throw new Error("MUI X: Should not call `commitToken` with an empty token");
	const sectionConfig = getDateSectionConfigFromFormatToken(adapter, token);
	const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(adapter, sectionConfig.contentType, sectionConfig.type, token);
	const hasLeadingZerosInInput = shouldRespectLeadingZeros ? hasLeadingZerosInFormat : sectionConfig.contentType === "digit";
	const isValidDate = adapter.isValid(date);
	let sectionValue = isValidDate ? adapter.formatByString(date, token) : "";
	let maxLength = null;
	if (hasLeadingZerosInInput) if (hasLeadingZerosInFormat) maxLength = sectionValue === "" ? adapter.formatByString(now, token).length : sectionValue.length;
	else {
		if (sectionConfig.maxLength == null) throw new Error(`MUI X: The token ${token} should have a 'maxLength' property on it's adapter`);
		maxLength = sectionConfig.maxLength;
		if (isValidDate) sectionValue = applyLocalizedDigits(cleanLeadingZeros(removeLocalizedDigits(sectionValue, localizedDigits), maxLength), localizedDigits);
	}
	return _extends({}, sectionConfig, {
		format: token,
		maxLength,
		value: sectionValue,
		placeholder: getSectionPlaceholder(adapter, localeText, sectionConfig, token),
		hasLeadingZerosInFormat,
		hasLeadingZerosInInput,
		startSeparator,
		endSeparator: "",
		modified: false
	});
};
var buildSections = (parameters) => {
	const { adapter, expandedFormat, escapedParts } = parameters;
	const now = adapter.date(void 0);
	const sections = [];
	let startSeparator = "";
	const validTokens = Object.keys(adapter.formatTokenMap).sort((a, b) => b.length - a.length);
	const regExpFirstWordInFormat = /^([a-zA-Z]+)/;
	const regExpWordOnlyComposedOfTokens = new RegExp(`^(${validTokens.join("|")})*$`);
	const regExpFirstTokenInWord = new RegExp(`^(${validTokens.join("|")})`);
	const getEscapedPartOfCurrentChar = (i) => escapedParts.find((escapeIndex) => escapeIndex.start <= i && escapeIndex.end >= i);
	let i = 0;
	while (i < expandedFormat.length) {
		const escapedPartOfCurrentChar = getEscapedPartOfCurrentChar(i);
		const isEscapedChar = escapedPartOfCurrentChar != null;
		const firstWordInFormat = regExpFirstWordInFormat.exec(expandedFormat.slice(i))?.[1];
		if (!isEscapedChar && firstWordInFormat != null && regExpWordOnlyComposedOfTokens.test(firstWordInFormat)) {
			let word = firstWordInFormat;
			while (word.length > 0) {
				const firstWord = regExpFirstTokenInWord.exec(word)[1];
				word = word.slice(firstWord.length);
				sections.push(createSection(_extends({}, parameters, {
					now,
					token: firstWord,
					startSeparator
				})));
				startSeparator = "";
			}
			i += firstWordInFormat.length;
		} else {
			const char = expandedFormat[i];
			if (!(isEscapedChar && escapedPartOfCurrentChar?.start === i || escapedPartOfCurrentChar?.end === i)) if (sections.length === 0) startSeparator += char;
			else {
				sections[sections.length - 1].endSeparator += char;
				sections[sections.length - 1].isEndFormatSeparator = true;
			}
			i += 1;
		}
	}
	if (sections.length === 0 && startSeparator.length > 0) sections.push({
		type: "empty",
		contentType: "letter",
		maxLength: null,
		format: "",
		value: "",
		placeholder: "",
		hasLeadingZerosInFormat: false,
		hasLeadingZerosInInput: false,
		startSeparator,
		endSeparator: "",
		modified: false
	});
	return sections;
};
var postProcessSections = ({ isRtl, formatDensity, sections }) => {
	return sections.map((section) => {
		const cleanSeparator = (separator) => {
			let cleanedSeparator = separator;
			if (isRtl && cleanedSeparator !== null && cleanedSeparator.includes(" ")) cleanedSeparator = `\u2069${cleanedSeparator}\u2066`;
			if (formatDensity === "spacious" && [
				"/",
				".",
				"-"
			].includes(cleanedSeparator)) cleanedSeparator = ` ${cleanedSeparator} `;
			return cleanedSeparator;
		};
		section.startSeparator = cleanSeparator(section.startSeparator);
		section.endSeparator = cleanSeparator(section.endSeparator);
		return section;
	});
};
var buildSectionsFromFormat = (parameters) => {
	let expandedFormat = expandFormat(parameters);
	if (parameters.isRtl && parameters.enableAccessibleFieldDOMStructure) expandedFormat = expandedFormat.split(" ").reverse().join(" ");
	const escapedParts = getEscapedPartsFromFormat(_extends({}, parameters, { expandedFormat }));
	return postProcessSections(_extends({}, parameters, { sections: buildSections(_extends({}, parameters, {
		expandedFormat,
		escapedParts
	})) }));
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/hooks/usePickerContext.js
var PickerContext = /* @__PURE__ */ import_react.createContext(null);
PickerContext.displayName = "PickerContext";
var usePickerContext = () => {
	const value = import_react.useContext(PickerContext);
	if (value == null) throw new Error("MUI X: The `usePickerContext` hook can only be called inside the context of a Picker component");
	return value;
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useNullablePickerContext.js
/**
* Returns the context passed by the Picker wrapping the current component.
* If the context is not found, returns `null`.
*/
var useNullablePickerContext = () => import_react.useContext(PickerContext);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/hooks/useIsValidValue.js
var IsValidValueContext = /* @__PURE__ */ import_react.createContext(() => true);
IsValidValueContext.displayName = "IsValidValueContext";
function useIsValidValue() {
	return import_react.useContext(IsValidValueContext);
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useNullableFieldPrivateContext.js
var PickerFieldPrivateContext = /* @__PURE__ */ import_react.createContext(null);
PickerFieldPrivateContext.displayName = "PickerFieldPrivateContext";
function useNullableFieldPrivateContext() {
	return import_react.useContext(PickerFieldPrivateContext);
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/components/PickerProvider.js
var PickerActionsContext = /* @__PURE__ */ import_react.createContext(null);
PickerActionsContext.displayName = "PickerActionsContext";
var PickerPrivateContext = /* @__PURE__ */ import_react.createContext({
	ownerState: {
		isPickerDisabled: false,
		isPickerReadOnly: false,
		isPickerValueEmpty: false,
		isPickerOpen: false,
		pickerVariant: "desktop",
		pickerOrientation: "portrait"
	},
	rootRefObject: { current: null },
	labelId: void 0,
	dismissViews: () => {},
	hasUIView: true,
	getCurrentViewMode: () => "UI",
	triggerElement: null,
	viewContainerRole: null,
	defaultActionBarActions: [],
	onPopperExited: void 0
});
PickerPrivateContext.displayName = "PickerPrivateContext";
function PickerProvider(props) {
	const { contextValue, actionsContextValue, privateContextValue, fieldPrivateContextValue, isValidContextValue, localeText, children } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickerContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickerActionsContext.Provider, {
			value: actionsContextValue,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickerPrivateContext.Provider, {
				value: privateContextValue,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickerFieldPrivateContext.Provider, {
					value: fieldPrivateContextValue,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IsValidValueContext.Provider, {
						value: isValidContextValue,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalizationProvider, {
							localeText,
							children
						})
					})
				})
			})
		})
	});
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/hooks/usePickerActionsContext.js
/**
* Returns a subset of the context passed by the Picker wrapping the current component.
* It only contains the actions and never causes a re-render of the component using it.
*/
var usePickerActionsContext = () => {
	const value = import_react.useContext(PickerActionsContext);
	if (value == null) throw new Error(["MUI X: The `usePickerActionsContext` can only be called in fields that are used as a slot of a Picker component"].join("\n"));
	return value;
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useUtils.js
var useDefaultDates = () => useLocalizationContext().defaultDates;
var useNow = (timezone) => {
	const adapter = usePickerAdapter();
	const now = import_react.useRef(void 0);
	if (now.current === void 0) now.current = adapter.date(void 0, timezone);
	return now.current;
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/icons/index.js
/**
* @ignore - internal component.
*/
var ArrowDropDownIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown");
/**
* @ignore - internal component.
*/
var ArrowLeftIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" }), "ArrowLeft");
/**
* @ignore - internal component.
*/
var ArrowRightIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }), "ArrowRight");
/**
* @ignore - internal component.
*/
var CalendarIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" }), "Calendar");
/**
* @ignore - internal component.
*/
var ClockIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" })] }), "Clock");
/**
* @ignore - internal component.
*/
var DateRangeIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" }), "DateRange");
/**
* @ignore - internal component.
*/
var TimeIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" })] }), "Time");
/**
* @ignore - internal component.
*/
var ClearIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Clear");
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/components/PickersArrowSwitcher/pickersArrowSwitcherClasses.js
function getPickersArrowSwitcherUtilityClass(slot) {
	return generateUtilityClass("MuiPickersArrowSwitcher", slot);
}
generateUtilityClasses("MuiPickersArrowSwitcher", [
	"root",
	"spacer",
	"button",
	"previousIconButton",
	"nextIconButton",
	"leftArrowIcon",
	"rightArrowIcon"
]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/usePickerPrivateContext.js
/**
* Returns the private context passed by the Picker wrapping the current component.
*/
var usePickerPrivateContext = () => import_react.useContext(PickerPrivateContext);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/components/PickersArrowSwitcher/PickersArrowSwitcher.js
var _excluded$30 = [
	"children",
	"className",
	"slots",
	"slotProps",
	"isNextDisabled",
	"isNextHidden",
	"onGoToNext",
	"nextLabel",
	"isPreviousDisabled",
	"isPreviousHidden",
	"onGoToPrevious",
	"previousLabel",
	"labelId",
	"classes"
], _excluded2$6 = ["ownerState"], _excluded3$1 = ["ownerState"];
var PickersArrowSwitcherRoot = styled("div", {
	name: "MuiPickersArrowSwitcher",
	slot: "Root"
})({ display: "flex" });
var PickersArrowSwitcherSpacer = styled("div", {
	name: "MuiPickersArrowSwitcher",
	slot: "Spacer"
})(({ theme }) => ({ width: theme.spacing(3) }));
var PickersArrowSwitcherButton = styled(IconButton, {
	name: "MuiPickersArrowSwitcher",
	slot: "Button"
})({ variants: [{
	props: { isButtonHidden: true },
	style: { visibility: "hidden" }
}] });
var useUtilityClasses$21 = (classes) => {
	return composeClasses({
		root: ["root"],
		spacer: ["spacer"],
		button: ["button"],
		previousIconButton: ["previousIconButton"],
		nextIconButton: ["nextIconButton"],
		leftArrowIcon: ["leftArrowIcon"],
		rightArrowIcon: ["rightArrowIcon"]
	}, getPickersArrowSwitcherUtilityClass, classes);
};
var PickersArrowSwitcher = /* @__PURE__ */ import_react.forwardRef(function PickersArrowSwitcher(inProps, ref) {
	const isRtl = useRtl();
	const props = useThemeProps({
		props: inProps,
		name: "MuiPickersArrowSwitcher"
	});
	const { children, className, slots, slotProps, isNextDisabled, isNextHidden, onGoToNext, nextLabel, isPreviousDisabled, isPreviousHidden, onGoToPrevious, previousLabel, labelId, classes: classesProp } = props, other = _objectWithoutPropertiesLoose(props, _excluded$30);
	const { ownerState } = usePickerPrivateContext();
	const classes = useUtilityClasses$21(classesProp);
	const nextProps = {
		isDisabled: isNextDisabled,
		isHidden: isNextHidden,
		goTo: onGoToNext,
		label: nextLabel
	};
	const previousProps = {
		isDisabled: isPreviousDisabled,
		isHidden: isPreviousHidden,
		goTo: onGoToPrevious,
		label: previousLabel
	};
	const PreviousIconButton = slots?.previousIconButton ?? PickersArrowSwitcherButton;
	const previousIconButtonProps = useSlotProps({
		elementType: PreviousIconButton,
		externalSlotProps: slotProps?.previousIconButton,
		additionalProps: {
			size: "medium",
			title: previousProps.label,
			"aria-label": previousProps.label,
			disabled: previousProps.isDisabled,
			edge: "end",
			onClick: previousProps.goTo
		},
		ownerState: _extends({}, ownerState, { isButtonHidden: previousProps.isHidden ?? false }),
		className: clsx(classes.button, classes.previousIconButton)
	});
	const NextIconButton = slots?.nextIconButton ?? PickersArrowSwitcherButton;
	const nextIconButtonProps = useSlotProps({
		elementType: NextIconButton,
		externalSlotProps: slotProps?.nextIconButton,
		additionalProps: {
			size: "medium",
			title: nextProps.label,
			"aria-label": nextProps.label,
			disabled: nextProps.isDisabled,
			edge: "start",
			onClick: nextProps.goTo
		},
		ownerState: _extends({}, ownerState, { isButtonHidden: nextProps.isHidden ?? false }),
		className: clsx(classes.button, classes.nextIconButton)
	});
	const LeftArrowIcon = slots?.leftArrowIcon ?? ArrowLeftIcon;
	const leftArrowIconProps = _objectWithoutPropertiesLoose(useSlotProps({
		elementType: LeftArrowIcon,
		externalSlotProps: slotProps?.leftArrowIcon,
		additionalProps: { fontSize: "inherit" },
		ownerState,
		className: classes.leftArrowIcon
	}), _excluded2$6);
	const RightArrowIcon = slots?.rightArrowIcon ?? ArrowRightIcon;
	const rightArrowIconProps = _objectWithoutPropertiesLoose(useSlotProps({
		elementType: RightArrowIcon,
		externalSlotProps: slotProps?.rightArrowIcon,
		additionalProps: { fontSize: "inherit" },
		ownerState,
		className: classes.rightArrowIcon
	}), _excluded3$1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PickersArrowSwitcherRoot, _extends({
		ref,
		className: clsx(classes.root, className),
		ownerState
	}, other, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviousIconButton, _extends({}, previousIconButtonProps, { children: isRtl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightArrowIcon, _extends({}, rightArrowIconProps)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeftArrowIcon, _extends({}, leftArrowIconProps)) })),
		children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
			variant: "subtitle1",
			component: "span",
			id: labelId,
			children
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersArrowSwitcherSpacer, {
			className: classes.spacer,
			ownerState
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextIconButton, _extends({}, nextIconButtonProps, { children: isRtl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeftArrowIcon, _extends({}, leftArrowIconProps)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightArrowIcon, _extends({}, rightArrowIconProps)) }))
	] }));
});
PickersArrowSwitcher.displayName = "PickersArrowSwitcher";
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/utils/time-utils.js
var EXPORTED_TIME_VIEWS = [
	"hours",
	"minutes",
	"seconds"
];
var TIME_VIEWS = [
	"hours",
	"minutes",
	"seconds",
	"meridiem"
];
var isTimeView = (view) => EXPORTED_TIME_VIEWS.includes(view);
var isInternalTimeView = (view) => TIME_VIEWS.includes(view);
var getMeridiem = (date, adapter) => {
	if (!date) return null;
	return adapter.getHours(date) >= 12 ? "pm" : "am";
};
var convertValueToMeridiem = (value, meridiem, ampm) => {
	if (ampm) {
		if ((value >= 12 ? "pm" : "am") !== meridiem) return meridiem === "am" ? value - 12 : value + 12;
	}
	return value;
};
var convertToMeridiem = (time, meridiem, ampm, adapter) => {
	const newHoursAmount = convertValueToMeridiem(adapter.getHours(time), meridiem, ampm);
	return adapter.setHours(time, newHoursAmount);
};
var getSecondsInDay = (date, adapter) => {
	return adapter.getHours(date) * 3600 + adapter.getMinutes(date) * 60 + adapter.getSeconds(date);
};
var createIsAfterIgnoreDatePart = (disableIgnoringDatePartForTimeValidation, adapter) => (dateLeft, dateRight) => {
	if (disableIgnoringDatePartForTimeValidation) return adapter.isAfter(dateLeft, dateRight);
	return getSecondsInDay(dateLeft, adapter) > getSecondsInDay(dateRight, adapter);
};
var resolveTimeFormat = (adapter, { format, views, ampm }) => {
	if (format != null) return format;
	const formats = adapter.formats;
	if (areViewsEqual(views, ["hours"])) return ampm ? `${formats.hours12h} ${formats.meridiem}` : formats.hours24h;
	if (areViewsEqual(views, ["minutes"])) return formats.minutes;
	if (areViewsEqual(views, ["seconds"])) return formats.seconds;
	if (areViewsEqual(views, ["minutes", "seconds"])) return `${formats.minutes}:${formats.seconds}`;
	if (areViewsEqual(views, [
		"hours",
		"minutes",
		"seconds"
	])) return ampm ? `${formats.hours12h}:${formats.minutes}:${formats.seconds} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}:${formats.seconds}`;
	return ampm ? `${formats.hours12h}:${formats.minutes} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}`;
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/utils/createStepNavigation.js
var DEFAULT_STEP_NAVIGATION = {
	hasNextStep: false,
	hasSeveralSteps: false,
	goToNextStep: () => {},
	areViewsInSameStep: () => true
};
/**
* Create an object that determines whether there is a next step and allows to go to the next step.
* @param {CreateStepNavigationParameters<TStep>} parameters The parameters of the createStepNavigation function
* @returns {CreateStepNavigationReturnValue} The return value of the createStepNavigation function
*/
function createStepNavigation(parameters) {
	const { steps, isViewMatchingStep, onStepChange } = parameters;
	return (parametersBis) => {
		if (steps == null) return DEFAULT_STEP_NAVIGATION;
		const currentStepIndex = steps.findIndex((step) => isViewMatchingStep(parametersBis.view, step));
		const nextStep = currentStepIndex === -1 || currentStepIndex === steps.length - 1 ? null : steps[currentStepIndex + 1];
		return {
			hasNextStep: nextStep != null,
			hasSeveralSteps: steps.length > 1,
			goToNextStep: () => {
				if (nextStep == null) return;
				onStepChange(_extends({}, parametersBis, { step: nextStep }));
			},
			areViewsInSameStep: (viewA, viewB) => {
				return steps.find((step) => isViewMatchingStep(viewA, step)) === steps.find((step) => isViewMatchingStep(viewB, step));
			}
		};
	};
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useViews.js
var warnedOnceNotValidView = false;
function useViews({ onChange, onViewChange, openTo, view: inView, views, autoFocus, focusedView: inFocusedView, onFocusedViewChange, getStepNavigation }) {
	if (!warnedOnceNotValidView) {
		if (inView != null && !views.includes(inView)) {
			console.warn(`MUI X: \`view="${inView}"\` is not a valid prop.`, `It must be an element of \`views=["${views.join("\", \"")}"]\`.`);
			warnedOnceNotValidView = true;
		}
		if (inView == null && openTo != null && !views.includes(openTo)) {
			console.warn(`MUI X: \`openTo="${openTo}"\` is not a valid prop.`, `It must be an element of \`views=["${views.join("\", \"")}"]\`.`);
			warnedOnceNotValidView = true;
		}
	}
	const previousOpenTo = import_react.useRef(openTo);
	const previousViews = import_react.useRef(views);
	const defaultView = import_react.useRef(views.includes(openTo) ? openTo : views[0]);
	const [view, setView] = useControlled({
		name: "useViews",
		state: "view",
		controlled: inView,
		default: defaultView.current
	});
	const [focusedView, setFocusedView] = useControlled({
		name: "useViews",
		state: "focusedView",
		controlled: inFocusedView,
		default: import_react.useRef(autoFocus ? view : null).current
	});
	const stepNavigation = getStepNavigation ? getStepNavigation({
		setView,
		view,
		defaultView: defaultView.current,
		views
	}) : DEFAULT_STEP_NAVIGATION;
	import_react.useEffect(() => {
		if (previousOpenTo.current && previousOpenTo.current !== openTo || previousViews.current && previousViews.current.some((previousView) => !views.includes(previousView))) {
			setView(views.includes(openTo) ? openTo : views[0]);
			previousViews.current = views;
			previousOpenTo.current = openTo;
		}
	}, [
		openTo,
		setView,
		view,
		views
	]);
	const viewIndex = views.indexOf(view);
	const previousView = views[viewIndex - 1] ?? null;
	const nextView = views[viewIndex + 1] ?? null;
	const handleFocusedViewChange = useEventCallback((viewToFocus, hasFocus) => {
		if (hasFocus) setFocusedView(viewToFocus);
		else setFocusedView((prevFocusedView) => viewToFocus === prevFocusedView ? null : prevFocusedView);
		onFocusedViewChange?.(viewToFocus, hasFocus);
	});
	const handleChangeView = useEventCallback((newView) => {
		handleFocusedViewChange(newView, true);
		if (newView === view) return;
		setView(newView);
		if (onViewChange) onViewChange(newView);
	});
	const goToNextView = useEventCallback(() => {
		if (nextView) handleChangeView(nextView);
	});
	const setValueAndGoToNextView = useEventCallback((value, currentViewSelectionState, selectedView) => {
		const isSelectionFinishedOnCurrentView = currentViewSelectionState === "finish";
		const hasMoreViews = selectedView ? views.indexOf(selectedView) < views.length - 1 : Boolean(nextView);
		onChange(value, isSelectionFinishedOnCurrentView && hasMoreViews ? "partial" : currentViewSelectionState, selectedView);
		let currentView = null;
		if (selectedView != null && selectedView !== view) currentView = selectedView;
		else if (isSelectionFinishedOnCurrentView) currentView = view;
		if (currentView == null) return;
		const viewToNavigateTo = views[views.indexOf(currentView) + 1];
		if (viewToNavigateTo == null || !stepNavigation.areViewsInSameStep(currentView, viewToNavigateTo)) return;
		handleChangeView(viewToNavigateTo);
	});
	return _extends({}, stepNavigation, {
		view,
		setView: handleChangeView,
		focusedView,
		setFocusedView: handleFocusedViewChange,
		nextView,
		previousView,
		defaultView: views.includes(openTo) ? openTo : views[0],
		goToNextView,
		setValueAndGoToNextView
	});
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/date-helpers-hooks.js
function useNextMonthDisabled(month, { disableFuture, maxDate, timezone }) {
	const adapter = usePickerAdapter();
	return import_react.useMemo(() => {
		const now = adapter.date(void 0, timezone);
		const lastEnabledMonth = adapter.startOfMonth(disableFuture && adapter.isBefore(now, maxDate) ? now : maxDate);
		return !adapter.isAfter(lastEnabledMonth, month);
	}, [
		disableFuture,
		maxDate,
		month,
		adapter,
		timezone
	]);
}
function usePreviousMonthDisabled(month, { disablePast, minDate, timezone }) {
	const adapter = usePickerAdapter();
	return import_react.useMemo(() => {
		const now = adapter.date(void 0, timezone);
		const firstEnabledMonth = adapter.startOfMonth(disablePast && adapter.isAfter(now, minDate) ? now : minDate);
		return !adapter.isBefore(firstEnabledMonth, month);
	}, [
		disablePast,
		minDate,
		month,
		adapter,
		timezone
	]);
}
function useMeridiemMode(date, ampm, onChange, selectionState) {
	const adapter = usePickerAdapter();
	const cleanDate = import_react.useMemo(() => !adapter.isValid(date) ? null : date, [adapter, date]);
	return {
		meridiemMode: getMeridiem(cleanDate, adapter),
		handleMeridiemChange: import_react.useCallback((mode) => {
			onChange(cleanDate == null ? null : convertToMeridiem(cleanDate, mode, Boolean(ampm), adapter), selectionState ?? "partial");
		}, [
			ampm,
			cleanDate,
			onChange,
			selectionState,
			adapter
		])
	};
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/components/PickerViewRoot/PickerViewRoot.js
var PickerViewRoot = styled("div", {
	slot: "internal",
	shouldForwardProp: void 0
})({
	overflow: "hidden",
	width: 320,
	maxHeight: 336,
	display: "flex",
	flexDirection: "column",
	margin: "0 auto"
});
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useControlledValue.js
/**
* Hooks controlling the value while making sure that:
* - The value returned by `onChange` always have the timezone of `props.value` or `props.defaultValue` if defined
* - The value rendered is always the one from `props.timezone` if defined
*/
var useControlledValue = ({ name, timezone: timezoneProp, value: valueProp, defaultValue, referenceDate, onChange: onChangeProp, valueManager }) => {
	const adapter = usePickerAdapter();
	const [valueWithInputTimezone, setValue] = useControlled({
		name,
		state: "value",
		controlled: valueProp,
		default: defaultValue ?? valueManager.emptyValue
	});
	const inputTimezone = import_react.useMemo(() => valueManager.getTimezone(adapter, valueWithInputTimezone), [
		adapter,
		valueManager,
		valueWithInputTimezone
	]);
	const setInputTimezone = useEventCallback((newValue) => {
		if (inputTimezone == null) return newValue;
		return valueManager.setTimezone(adapter, inputTimezone, newValue);
	});
	const timezoneToRender = import_react.useMemo(() => {
		if (timezoneProp) return timezoneProp;
		if (inputTimezone) return inputTimezone;
		if (referenceDate) return adapter.getTimezone(Array.isArray(referenceDate) ? referenceDate[0] : referenceDate);
		return "default";
	}, [
		timezoneProp,
		inputTimezone,
		referenceDate,
		adapter
	]);
	return {
		value: import_react.useMemo(() => valueManager.setTimezone(adapter, timezoneToRender, valueWithInputTimezone), [
			valueManager,
			adapter,
			timezoneToRender,
			valueWithInputTimezone
		]),
		handleValueChange: useEventCallback((newValue, ...otherParams) => {
			const newValueWithInputTimezone = setInputTimezone(newValue);
			setValue(newValueWithInputTimezone);
			onChangeProp?.(newValueWithInputTimezone, ...otherParams);
		}),
		timezone: timezoneToRender
	};
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/utils/getDefaultReferenceDate.js
var SECTION_TYPE_GRANULARITY = {
	year: 1,
	month: 2,
	day: 3,
	hours: 4,
	minutes: 5,
	seconds: 6,
	milliseconds: 7
};
var getSectionTypeGranularity = (sections) => Math.max(...sections.map((section) => SECTION_TYPE_GRANULARITY[section.type] ?? 1));
var roundDate = (adapter, granularity, date) => {
	if (granularity === SECTION_TYPE_GRANULARITY.year) return adapter.startOfYear(date);
	if (granularity === SECTION_TYPE_GRANULARITY.month) return adapter.startOfMonth(date);
	if (granularity === SECTION_TYPE_GRANULARITY.day) return adapter.startOfDay(date);
	let roundedDate = date;
	if (granularity < SECTION_TYPE_GRANULARITY.minutes) roundedDate = adapter.setMinutes(roundedDate, 0);
	if (granularity < SECTION_TYPE_GRANULARITY.seconds) roundedDate = adapter.setSeconds(roundedDate, 0);
	if (granularity < SECTION_TYPE_GRANULARITY.milliseconds) roundedDate = adapter.setMilliseconds(roundedDate, 0);
	return roundedDate;
};
var getDefaultReferenceDate = ({ props, adapter, granularity, timezone, getTodayDate: inGetTodayDate }) => {
	let referenceDate = inGetTodayDate ? inGetTodayDate() : roundDate(adapter, granularity, getTodayDate(adapter, timezone));
	if (props.minDate != null && adapter.isAfterDay(props.minDate, referenceDate)) referenceDate = roundDate(adapter, granularity, props.minDate);
	if (props.maxDate != null && adapter.isBeforeDay(props.maxDate, referenceDate)) referenceDate = roundDate(adapter, granularity, props.maxDate);
	const isAfter = createIsAfterIgnoreDatePart(props.disableIgnoringDatePartForTimeValidation ?? false, adapter);
	if (props.minTime != null && isAfter(props.minTime, referenceDate)) referenceDate = roundDate(adapter, granularity, props.disableIgnoringDatePartForTimeValidation ? props.minTime : mergeDateAndTime(adapter, referenceDate, props.minTime));
	if (props.maxTime != null && isAfter(referenceDate, props.maxTime)) referenceDate = roundDate(adapter, granularity, props.disableIgnoringDatePartForTimeValidation ? props.maxTime : mergeDateAndTime(adapter, referenceDate, props.maxTime));
	return referenceDate;
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/utils/valueManagers.js
var _excluded$29 = ["value", "referenceDate"];
var singleItemValueManager = {
	emptyValue: null,
	getTodayValue: getTodayDate,
	getInitialReferenceValue: (_ref) => {
		let { value, referenceDate } = _ref, params = _objectWithoutPropertiesLoose(_ref, _excluded$29);
		if (params.adapter.isValid(value)) return value;
		if (referenceDate != null) return referenceDate;
		return getDefaultReferenceDate(params);
	},
	cleanValue: replaceInvalidDateByNull,
	areValuesEqual: areDatesEqual,
	isSameError: (a, b) => a === b,
	hasError: (error) => error != null,
	defaultErrorState: null,
	getTimezone: (adapter, value) => adapter.isValid(value) ? adapter.getTimezone(value) : null,
	setTimezone: (adapter, timezone, value) => value == null ? null : adapter.setTimezone(value, timezone)
};
var singleItemFieldValueManager = {
	updateReferenceValue: (adapter, value, prevReferenceValue) => adapter.isValid(value) ? value : prevReferenceValue,
	getSectionsFromValue: (date, getSectionsFromDate) => getSectionsFromDate(date),
	getV7HiddenInputValueFromSections: createDateStrForV7HiddenInputFromSections,
	getV6InputValueFromSections: createDateStrForV6InputFromSections,
	parseValueStr: (valueStr, referenceValue, parseDate) => parseDate(valueStr.trim(), referenceValue),
	getDateFromSection: (value) => value,
	getDateSectionsFromValue: (sections) => sections,
	updateDateInValue: (value, activeSection, activeDate) => activeDate,
	clearDateSections: (sections) => sections.map((section) => _extends({}, section, { value: "" }))
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/utils/utils.js
function arrayIncludes(array, itemOrItems) {
	if (Array.isArray(itemOrItems)) return itemOrItems.every((item) => array.indexOf(item) !== -1);
	return array.indexOf(itemOrItems) !== -1;
}
var executeInTheNextEventLoopTick = (fn) => {
	setTimeout(fn, 0);
};
var getActiveElementInternal = (root = document) => {
	const activeEl = root.activeElement;
	if (!activeEl) return null;
	if (activeEl.shadowRoot) return getActiveElementInternal(activeEl.shadowRoot);
	return activeEl;
};
/**
* Gets the currently active element within a given node's document.
* This function traverses shadow DOM if necessary.
* @param node - The node from which to get the active element.
* @returns The currently active element, or null if none is found.
*/
var getActiveElement = (node) => {
	return getActiveElementInternal(ownerDocument(node));
};
/**
* Gets the index of the focused list item in a given ul list element.
*
* @param {HTMLUListElement} listElement - The list element to search within.
* @returns {number} The index of the focused list item, or -1 if none is focused.
*/
var getFocusedListItemIndex = (listElement) => {
	return Array.from(listElement.children).indexOf(getActiveElement(listElement));
};
var DEFAULT_DESKTOP_MODE_MEDIA_QUERY = "@media (pointer: fine)";
function mergeSx(...sxProps) {
	return sxProps.reduce((acc, sxProp) => {
		if (Array.isArray(sxProp)) acc.push(...sxProp);
		else if (sxProp != null) acc.push(sxProp);
		return acc;
	}, []);
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersDay/pickersDayClasses.js
function getPickersDayUtilityClass(slot) {
	return generateUtilityClass("MuiPickersDay", slot);
}
var pickersDayClasses = generateUtilityClasses("MuiPickersDay", [
	"root",
	"dayWithMargin",
	"dayOutsideMonth",
	"hiddenDaySpacingFiller",
	"today",
	"selected",
	"disabled"
]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersDay/usePickerDayOwnerState.js
function usePickerDayOwnerState(parameters) {
	const { disabled, selected, today, outsideCurrentMonth, day, disableMargin, disableHighlightToday, showDaysOutsideCurrentMonth } = parameters;
	const adapter = usePickerAdapter();
	const { ownerState: pickerOwnerState } = usePickerPrivateContext();
	return import_react.useMemo(() => _extends({}, pickerOwnerState, {
		day,
		isDaySelected: selected ?? false,
		isDayDisabled: disabled ?? false,
		isDayCurrent: today ?? false,
		isDayOutsideMonth: outsideCurrentMonth ?? false,
		isDayStartOfWeek: adapter.isSameDay(day, adapter.startOfWeek(day)),
		isDayEndOfWeek: adapter.isSameDay(day, adapter.endOfWeek(day)),
		disableMargin: disableMargin ?? false,
		disableHighlightToday: disableHighlightToday ?? false,
		showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth ?? false
	}), [
		adapter,
		pickerOwnerState,
		day,
		selected,
		disabled,
		today,
		outsideCurrentMonth,
		disableMargin,
		disableHighlightToday,
		showDaysOutsideCurrentMonth
	]);
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersDay/PickersDay.js
var _excluded$28 = [
	"autoFocus",
	"className",
	"classes",
	"hidden",
	"isAnimating",
	"onClick",
	"onDaySelect",
	"onFocus",
	"onBlur",
	"onKeyDown",
	"onMouseDown",
	"onMouseEnter",
	"children",
	"isFirstVisibleCell",
	"isLastVisibleCell",
	"day",
	"selected",
	"disabled",
	"today",
	"outsideCurrentMonth",
	"disableMargin",
	"disableHighlightToday",
	"showDaysOutsideCurrentMonth"
];
var useUtilityClasses$20 = (classes, ownerState) => {
	const { isDaySelected, isDayDisabled, isDayCurrent, isDayOutsideMonth, disableMargin, disableHighlightToday, showDaysOutsideCurrentMonth } = ownerState;
	const isHiddenDaySpacingFiller = isDayOutsideMonth && !showDaysOutsideCurrentMonth;
	return composeClasses({
		root: [
			"root",
			isDaySelected && !isHiddenDaySpacingFiller && "selected",
			isDayDisabled && "disabled",
			!disableMargin && "dayWithMargin",
			!disableHighlightToday && isDayCurrent && "today",
			isDayOutsideMonth && showDaysOutsideCurrentMonth && "dayOutsideMonth",
			isHiddenDaySpacingFiller && "hiddenDaySpacingFiller"
		],
		hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
	}, getPickersDayUtilityClass, classes);
};
var styleArg = ({ theme }) => _extends({}, theme.typography.caption, {
	width: 36,
	height: 36,
	borderRadius: "50%",
	padding: 0,
	backgroundColor: "transparent",
	transition: theme.transitions.create("background-color", { duration: theme.transitions.duration.short }),
	color: (theme.vars || theme).palette.text.primary,
	"@media (pointer: fine)": { "&:hover": { backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity) } },
	"&:focus": {
		backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
		[`&.${pickersDayClasses.selected}`]: {
			willChange: "background-color",
			backgroundColor: (theme.vars || theme).palette.primary.dark
		}
	},
	[`&.${pickersDayClasses.selected}`]: {
		color: (theme.vars || theme).palette.primary.contrastText,
		backgroundColor: (theme.vars || theme).palette.primary.main,
		fontWeight: theme.typography.fontWeightMedium,
		"&:hover": {
			willChange: "background-color",
			backgroundColor: (theme.vars || theme).palette.primary.dark
		}
	},
	[`&.${pickersDayClasses.disabled}:not(.${pickersDayClasses.selected})`]: { color: (theme.vars || theme).palette.text.disabled },
	[`&.${pickersDayClasses.disabled}&.${pickersDayClasses.selected}`]: { opacity: .6 },
	variants: [
		{
			props: { disableMargin: false },
			style: { margin: `0 2px` }
		},
		{
			props: {
				isDayOutsideMonth: true,
				showDaysOutsideCurrentMonth: true
			},
			style: { color: (theme.vars || theme).palette.text.secondary }
		},
		{
			props: {
				disableHighlightToday: false,
				isDayCurrent: true
			},
			style: { [`&:not(.${pickersDayClasses.selected})`]: { border: `1px solid ${(theme.vars || theme).palette.text.secondary}` } }
		}
	]
});
var overridesResolver = (props, styles) => {
	const { ownerState } = props;
	return [
		styles.root,
		!ownerState.disableMargin && styles.dayWithMargin,
		!ownerState.disableHighlightToday && ownerState.isDayCurrent && styles.today,
		ownerState.isDayOutsideMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth,
		ownerState.isDayOutsideMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller
	];
};
var PickersDayRoot = styled(ButtonBase, {
	name: "MuiPickersDay",
	slot: "Root",
	overridesResolver
})(styleArg);
var PickersDayFiller = styled("div", {
	name: "MuiPickersDay",
	slot: "Root",
	overridesResolver
})(({ theme }) => _extends({}, styleArg({ theme }), {
	opacity: 0,
	pointerEvents: "none"
}));
var noop$1 = () => {};
var PickersDayRaw = /* @__PURE__ */ import_react.forwardRef(function PickersDay(inProps, forwardedRef) {
	const props = useThemeProps({
		props: inProps,
		name: "MuiPickersDay"
	});
	const { autoFocus = false, className, classes: classesProp, isAnimating, onClick, onDaySelect, onFocus = noop$1, onBlur = noop$1, onKeyDown = noop$1, onMouseDown = noop$1, onMouseEnter = noop$1, children, day, selected, disabled, today, outsideCurrentMonth, disableMargin, disableHighlightToday, showDaysOutsideCurrentMonth } = props, other = _objectWithoutPropertiesLoose(props, _excluded$28);
	const ownerState = usePickerDayOwnerState({
		day,
		selected,
		disabled,
		today,
		outsideCurrentMonth,
		disableMargin,
		disableHighlightToday,
		showDaysOutsideCurrentMonth
	});
	const classes = useUtilityClasses$20(classesProp, ownerState);
	const adapter = usePickerAdapter();
	const ref = import_react.useRef(null);
	const handleRef = useForkRef(ref, forwardedRef);
	useEnhancedEffect(() => {
		if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) ref.current.focus();
	}, [
		autoFocus,
		disabled,
		isAnimating,
		outsideCurrentMonth
	]);
	const handleMouseDown = (event) => {
		onMouseDown(event);
		if (outsideCurrentMonth) event.preventDefault();
	};
	const handleClick = (event) => {
		event.defaultMuiPrevented = true;
		if (!disabled) onDaySelect(day);
		if (outsideCurrentMonth) event.currentTarget.focus();
		if (onClick) onClick(event);
	};
	if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersDayFiller, {
		className: clsx(classes.root, classes.hiddenDaySpacingFiller, className),
		ownerState,
		role: other.role
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersDayRoot, _extends({
		className: clsx(classes.root, className),
		ref: handleRef,
		centerRipple: true,
		disabled,
		tabIndex: selected ? 0 : -1,
		onKeyDown: (event) => onKeyDown(event, day),
		onFocus: (event) => onFocus(event, day),
		onBlur: (event) => onBlur(event, day),
		onMouseEnter: (event) => onMouseEnter(event, day),
		onClick: handleClick,
		onMouseDown: handleMouseDown
	}, other, {
		ownerState,
		children: children ?? adapter.format(day, "dayOfMonth")
	}));
});
PickersDayRaw.displayName = "PickersDayRaw";
PickersDayRaw.propTypes = {
	action: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.shape({ current: import_prop_types.default.shape({ focusVisible: import_prop_types.default.func.isRequired }) })]),
	centerRipple: import_prop_types.default.bool,
	classes: import_prop_types.default.object,
	className: import_prop_types.default.string,
	component: import_prop_types.default.elementType,
	day: import_prop_types.default.object.isRequired,
	disabled: import_prop_types.default.bool,
	disableHighlightToday: import_prop_types.default.bool,
	disableMargin: import_prop_types.default.bool,
	disableRipple: import_prop_types.default.bool,
	disableTouchRipple: import_prop_types.default.bool,
	focusRipple: import_prop_types.default.bool,
	focusVisibleClassName: import_prop_types.default.string,
	isAnimating: import_prop_types.default.bool,
	isFirstVisibleCell: import_prop_types.default.bool.isRequired,
	isLastVisibleCell: import_prop_types.default.bool.isRequired,
	onBlur: import_prop_types.default.func,
	onDaySelect: import_prop_types.default.func.isRequired,
	onFocus: import_prop_types.default.func,
	onFocusVisible: import_prop_types.default.func,
	onKeyDown: import_prop_types.default.func,
	onMouseEnter: import_prop_types.default.func,
	outsideCurrentMonth: import_prop_types.default.bool.isRequired,
	selected: import_prop_types.default.bool,
	showDaysOutsideCurrentMonth: import_prop_types.default.bool,
	style: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	tabIndex: import_prop_types.default.number,
	today: import_prop_types.default.bool,
	TouchRippleProps: import_prop_types.default.object,
	touchRippleRef: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.shape({ current: import_prop_types.default.shape({
		pulsate: import_prop_types.default.func.isRequired,
		start: import_prop_types.default.func.isRequired,
		stop: import_prop_types.default.func.isRequired
	}) })])
};
/**
* Demos:
*
* - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
* API:
*
* - [PickersDay API](https://mui.com/x/api/date-pickers/pickers-day/)
*/
var PickersDay = /* @__PURE__ */ import_react.memo(PickersDayRaw);
PickersDay.displayName = "PickersDay";
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldCharacterEditing.js
var isQueryResponseWithoutValue = (response) => response.saveQuery != null;
/**
* Update the active section value when the user pressed a key that is not a navigation key (arrow key for example).
* This hook has two main editing behaviors
*
* 1. The numeric editing when the user presses a digit
* 2. The letter editing when the user presses another key
*/
var useFieldCharacterEditing = ({ stateResponse: { localizedDigits, sectionsValueBoundaries, state, timezone, setCharacterQuery, setTempAndroidValueStr, updateSectionValue } }) => {
	const adapter = usePickerAdapter();
	const applyQuery = ({ keyPressed, sectionIndex }, getFirstSectionValueMatchingWithQuery, isValidQueryValue) => {
		const cleanKeyPressed = keyPressed.toLowerCase();
		const activeSection = state.sections[sectionIndex];
		if (state.characterQuery != null && (!isValidQueryValue || isValidQueryValue(state.characterQuery.value)) && state.characterQuery.sectionIndex === sectionIndex) {
			const concatenatedQueryValue = `${state.characterQuery.value}${cleanKeyPressed}`;
			const queryResponse = getFirstSectionValueMatchingWithQuery(concatenatedQueryValue, activeSection);
			if (!isQueryResponseWithoutValue(queryResponse)) {
				setCharacterQuery({
					sectionIndex,
					value: concatenatedQueryValue,
					sectionType: activeSection.type
				});
				return queryResponse;
			}
		}
		const queryResponse = getFirstSectionValueMatchingWithQuery(cleanKeyPressed, activeSection);
		if (isQueryResponseWithoutValue(queryResponse) && !queryResponse.saveQuery) {
			setCharacterQuery(null);
			return null;
		}
		setCharacterQuery({
			sectionIndex,
			value: cleanKeyPressed,
			sectionType: activeSection.type
		});
		if (isQueryResponseWithoutValue(queryResponse)) return null;
		return queryResponse;
	};
	const applyLetterEditing = (params) => {
		const findMatchingOptions = (format, options, queryValue) => {
			const matchingValues = options.filter((option) => option.toLowerCase().startsWith(queryValue));
			if (matchingValues.length === 0) return { saveQuery: false };
			return {
				sectionValue: matchingValues[0],
				shouldGoToNextSection: matchingValues.length === 1
			};
		};
		const testQueryOnFormatAndFallbackFormat = (queryValue, activeSection, fallbackFormat, formatFallbackValue) => {
			const getOptions = (format) => getLetterEditingOptions(adapter, timezone, activeSection.type, format);
			if (activeSection.contentType === "letter") return findMatchingOptions(activeSection.format, getOptions(activeSection.format), queryValue);
			if (fallbackFormat && formatFallbackValue != null && getDateSectionConfigFromFormatToken(adapter, fallbackFormat).contentType === "letter") {
				const fallbackOptions = getOptions(fallbackFormat);
				const response = findMatchingOptions(fallbackFormat, fallbackOptions, queryValue);
				if (isQueryResponseWithoutValue(response)) return { saveQuery: false };
				return _extends({}, response, { sectionValue: formatFallbackValue(response.sectionValue, fallbackOptions) });
			}
			return { saveQuery: false };
		};
		const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
			switch (activeSection.type) {
				case "month": {
					const formatFallbackValue = (fallbackValue) => changeSectionValueFormat(adapter, fallbackValue, adapter.formats.month, activeSection.format);
					return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, adapter.formats.month, formatFallbackValue);
				}
				case "weekDay": {
					const formatFallbackValue = (fallbackValue, fallbackOptions) => fallbackOptions.indexOf(fallbackValue).toString();
					return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, adapter.formats.weekday, formatFallbackValue);
				}
				case "meridiem": return testQueryOnFormatAndFallbackFormat(queryValue, activeSection);
				default: return { saveQuery: false };
			}
		};
		return applyQuery(params, getFirstSectionValueMatchingWithQuery);
	};
	const applyNumericEditing = (params) => {
		const getNewSectionValue = ({ queryValue, skipIfBelowMinimum, section }) => {
			const cleanQueryValue = removeLocalizedDigits(queryValue, localizedDigits);
			const queryValueNumber = Number(cleanQueryValue);
			const sectionBoundaries = sectionsValueBoundaries[section.type]({
				currentDate: null,
				format: section.format,
				contentType: section.contentType
			});
			if (queryValueNumber > sectionBoundaries.maximum) return { saveQuery: false };
			if (skipIfBelowMinimum && queryValueNumber < sectionBoundaries.minimum) return { saveQuery: true };
			const shouldGoToNextSection = queryValueNumber * 10 > sectionBoundaries.maximum || cleanQueryValue.length === sectionBoundaries.maximum.toString().length;
			return {
				sectionValue: cleanDigitSectionValue(adapter, queryValueNumber, sectionBoundaries, localizedDigits, section),
				shouldGoToNextSection
			};
		};
		const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
			if (activeSection.contentType === "digit" || activeSection.contentType === "digit-with-letter") return getNewSectionValue({
				queryValue,
				skipIfBelowMinimum: false,
				section: activeSection
			});
			if (activeSection.type === "month") {
				const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(adapter, "digit", "month", "MM");
				const response = getNewSectionValue({
					queryValue,
					skipIfBelowMinimum: true,
					section: {
						type: activeSection.type,
						format: "MM",
						hasLeadingZerosInFormat,
						hasLeadingZerosInInput: true,
						contentType: "digit",
						maxLength: 2
					}
				});
				if (isQueryResponseWithoutValue(response)) return response;
				return _extends({}, response, { sectionValue: changeSectionValueFormat(adapter, response.sectionValue, "MM", activeSection.format) });
			}
			if (activeSection.type === "weekDay") {
				const response = getNewSectionValue({
					queryValue,
					skipIfBelowMinimum: true,
					section: activeSection
				});
				if (isQueryResponseWithoutValue(response)) return response;
				const formattedValue = getDaysInWeekStr(adapter, activeSection.format)[Number(response.sectionValue) - 1];
				return _extends({}, response, { sectionValue: formattedValue });
			}
			return { saveQuery: false };
		};
		return applyQuery(params, getFirstSectionValueMatchingWithQuery, (queryValue) => isStringNumber(queryValue, localizedDigits));
	};
	return useEventCallback((params) => {
		const section = state.sections[params.sectionIndex];
		const response = isStringNumber(params.keyPressed, localizedDigits) ? applyNumericEditing(_extends({}, params, { keyPressed: applyLocalizedDigits(params.keyPressed, localizedDigits) })) : applyLetterEditing(params);
		if (response == null) {
			setTempAndroidValueStr(null);
			return;
		}
		updateSectionValue({
			section,
			newSectionValue: response.sectionValue,
			shouldGoToNextSection: response.shouldGoToNextSection
		});
	});
};
/**
* The letter editing and the numeric editing each define a `CharacterEditingApplier`.
* This function decides what the new section value should be and if the focus should switch to the next section.
*
* If it returns `null`, then the section value is not updated and the focus does not move.
*/
/**
* Function called by `applyQuery` which decides:
* - what is the new section value ?
* - should the query used to get this value be stored for the next key press ?
*
* If it returns `{ sectionValue: string; shouldGoToNextSection: boolean }`,
* Then we store the query and update the section with the new value.
*
* If it returns `{ saveQuery: true` },
* Then we store the query and don't update the section.
*
* If it returns `{ saveQuery: false },
* Then we do nothing.
*/
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/validation/validateDate.js
/**
* Validation props used by the Date Picker, Date Field and Date Calendar components.
*/
/**
* Validation props as received by the validateDate method.
*/
/**
* Name of the props that should be defaulted before being passed to the validateDate method.
*/
var validateDate = ({ props, value, timezone, adapter }) => {
	if (value === null) return null;
	const { shouldDisableDate, shouldDisableMonth, shouldDisableYear, disablePast, disableFuture, minDate, maxDate } = props;
	const now = adapter.date(void 0, timezone);
	switch (true) {
		case !adapter.isValid(value): return "invalidDate";
		case Boolean(shouldDisableDate && shouldDisableDate(value)): return "shouldDisableDate";
		case Boolean(shouldDisableMonth && shouldDisableMonth(value)): return "shouldDisableMonth";
		case Boolean(shouldDisableYear && shouldDisableYear(value)): return "shouldDisableYear";
		case Boolean(disableFuture && adapter.isAfterDay(value, now)): return "disableFuture";
		case Boolean(disablePast && adapter.isBeforeDay(value, now)): return "disablePast";
		case Boolean(minDate && adapter.isBeforeDay(value, minDate)): return "minDate";
		case Boolean(maxDate && adapter.isAfterDay(value, maxDate)): return "maxDate";
		default: return null;
	}
};
validateDate.valueManager = singleItemValueManager;
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/validation/useValidation.js
/**
* Utility hook to check if a given value is valid based on the provided validation props.
* @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
* @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
* @param {UseValidationOptions<TValue, TError, TValidationProps>} options The options to configure the hook.
* @param {TValue} options.value The value to validate.
* @param {PickersTimezone} options.timezone The timezone to use for the validation.
* @param {Validator<TValue, TError, TValidationProps>} options.validator The validator function to use.
* @param {TValidationProps} options.props The validation props, they differ depending on the component.
* @param {(error: TError, value: TValue) => void} options.onError Callback fired when the error associated with the current value changes.
*/
function useValidation(options) {
	const { props, validator, value, timezone, onError } = options;
	const adapter = usePickerAdapter();
	const previousValidationErrorRef = import_react.useRef(validator.valueManager.defaultErrorState);
	const validationError = validator({
		adapter,
		value,
		timezone,
		props
	});
	const hasValidationError = validator.valueManager.hasError(validationError);
	import_react.useEffect(() => {
		if (onError && !validator.valueManager.isSameError(validationError, previousValidationErrorRef.current)) onError(validationError, value);
		previousValidationErrorRef.current = validationError;
	}, [
		validator,
		onError,
		validationError,
		value
	]);
	return {
		validationError,
		hasValidationError,
		getValidationErrorForNewValue: useEventCallback((newValue) => {
			return validator({
				adapter,
				value: newValue,
				timezone,
				props
			});
		})
	};
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldState.js
var QUERY_LIFE_DURATION_MS = 5e3;
var useFieldState = (parameters) => {
	const adapter = usePickerAdapter();
	const translations = usePickerTranslations();
	const isRtl = useRtl();
	const { manager: { validator, valueType, internal_valueManager: valueManager, internal_fieldValueManager: fieldValueManager }, internalPropsWithDefaults, internalPropsWithDefaults: { value: valueProp, defaultValue, referenceDate: referenceDateProp, onChange, format, formatDensity = "dense", selectedSections: selectedSectionsProp, onSelectedSectionsChange, shouldRespectLeadingZeros = false, timezone: timezoneProp, enableAccessibleFieldDOMStructure = true }, forwardedProps: { error: errorProp } } = parameters;
	const { value, handleValueChange, timezone } = useControlledValue({
		name: "a field component",
		timezone: timezoneProp,
		value: valueProp,
		defaultValue,
		referenceDate: referenceDateProp,
		onChange,
		valueManager
	});
	const valueRef = import_react.useRef(value);
	import_react.useEffect(() => {
		valueRef.current = value;
	}, [value]);
	const { hasValidationError } = useValidation({
		props: internalPropsWithDefaults,
		validator,
		timezone,
		value,
		onError: internalPropsWithDefaults.onError
	});
	const localizedDigits = import_react.useMemo(() => getLocalizedDigits(adapter), [adapter]);
	const sectionsValueBoundaries = import_react.useMemo(() => getSectionsBoundaries(adapter, localizedDigits, timezone), [
		adapter,
		localizedDigits,
		timezone
	]);
	const getSectionsFromValue = import_react.useCallback((valueToAnalyze) => fieldValueManager.getSectionsFromValue(valueToAnalyze, (date) => buildSectionsFromFormat({
		adapter,
		localeText: translations,
		localizedDigits,
		format,
		date,
		formatDensity,
		shouldRespectLeadingZeros,
		enableAccessibleFieldDOMStructure,
		isRtl
	})), [
		fieldValueManager,
		format,
		translations,
		localizedDigits,
		isRtl,
		shouldRespectLeadingZeros,
		adapter,
		formatDensity,
		enableAccessibleFieldDOMStructure
	]);
	const [state, setState] = import_react.useState(() => {
		const sections = getSectionsFromValue(value);
		validateSections(sections, valueType);
		const stateWithoutReferenceDate = {
			sections,
			lastExternalValue: value,
			lastSectionsDependencies: {
				format,
				isRtl,
				locale: adapter.locale
			},
			tempValueStrAndroid: null,
			characterQuery: null
		};
		const granularity = getSectionTypeGranularity(sections);
		return _extends({}, stateWithoutReferenceDate, { referenceValue: valueManager.getInitialReferenceValue({
			referenceDate: referenceDateProp,
			value,
			adapter,
			props: internalPropsWithDefaults,
			granularity,
			timezone
		}) });
	});
	const [selectedSections, innerSetSelectedSections] = useControlled({
		controlled: selectedSectionsProp,
		default: null,
		name: "useField",
		state: "selectedSections"
	});
	const setSelectedSections = (newSelectedSections) => {
		innerSetSelectedSections(newSelectedSections);
		onSelectedSectionsChange?.(newSelectedSections);
	};
	const parsedSelectedSections = import_react.useMemo(() => parseSelectedSections(selectedSections, state.sections), [selectedSections, state.sections]);
	const activeSectionIndex = parsedSelectedSections === "all" ? 0 : parsedSelectedSections;
	const sectionOrder = import_react.useMemo(() => getSectionOrder(state.sections, isRtl && !enableAccessibleFieldDOMStructure), [
		state.sections,
		isRtl,
		enableAccessibleFieldDOMStructure
	]);
	const areAllSectionsEmpty = import_react.useMemo(() => state.sections.every((section) => section.value === ""), [state.sections]);
	const hasPartiallyFilledSectionsOnBlur = import_react.useMemo(() => {
		if (activeSectionIndex != null) return false;
		const filledSections = state.sections.filter((s) => s.value !== "");
		return filledSections.length > 0 && state.sections.length - filledSections.length > 0;
	}, [state.sections, activeSectionIndex]);
	const error = import_react.useMemo(() => {
		if (errorProp !== void 0) return errorProp;
		return hasValidationError || hasPartiallyFilledSectionsOnBlur;
	}, [
		hasValidationError,
		hasPartiallyFilledSectionsOnBlur,
		errorProp
	]);
	const publishValue = (newValue) => {
		handleValueChange(newValue, { validationError: validator({
			adapter,
			value: newValue,
			timezone,
			props: internalPropsWithDefaults
		}) });
	};
	const setSectionValue = (sectionIndex, newSectionValue) => {
		const newSections = [...state.sections];
		newSections[sectionIndex] = _extends({}, newSections[sectionIndex], {
			value: newSectionValue,
			modified: true
		});
		return newSections;
	};
	const sectionToUpdateOnNextInvalidDateRef = import_react.useRef(null);
	const updateSectionValueOnNextInvalidDateTimeout = useTimeout();
	const setSectionUpdateToApplyOnNextInvalidDate = (newSectionValue) => {
		if (activeSectionIndex == null) return;
		sectionToUpdateOnNextInvalidDateRef.current = {
			sectionIndex: activeSectionIndex,
			value: newSectionValue
		};
		updateSectionValueOnNextInvalidDateTimeout.start(0, () => {
			sectionToUpdateOnNextInvalidDateRef.current = null;
		});
	};
	const clearValue = () => {
		if (valueManager.areValuesEqual(adapter, value, valueManager.emptyValue)) setState((prevState) => _extends({}, prevState, {
			sections: prevState.sections.map((section) => _extends({}, section, { value: "" })),
			tempValueStrAndroid: null,
			characterQuery: null
		}));
		else {
			setState((prevState) => _extends({}, prevState, { characterQuery: null }));
			publishValue(valueManager.emptyValue);
		}
	};
	const clearActiveSection = () => {
		if (activeSectionIndex == null) return;
		const activeSection = state.sections[activeSectionIndex];
		if (activeSection.value === "") return;
		setSectionUpdateToApplyOnNextInvalidDate("");
		if (fieldValueManager.getDateFromSection(value, activeSection) === null) setState((prevState) => _extends({}, prevState, {
			sections: setSectionValue(activeSectionIndex, ""),
			tempValueStrAndroid: null,
			characterQuery: null
		}));
		else {
			setState((prevState) => _extends({}, prevState, { characterQuery: null }));
			publishValue(fieldValueManager.updateDateInValue(value, activeSection, null));
		}
	};
	const updateValueFromValueStr = (valueStr) => {
		const parseDateStr = (dateStr, referenceDate) => {
			const date = adapter.parse(dateStr, format);
			if (!adapter.isValid(date)) return null;
			return mergeDateIntoReferenceDate(adapter, date, buildSectionsFromFormat({
				adapter,
				localeText: translations,
				localizedDigits,
				format,
				date,
				formatDensity,
				shouldRespectLeadingZeros,
				enableAccessibleFieldDOMStructure,
				isRtl
			}), referenceDate, false);
		};
		publishValue(fieldValueManager.parseValueStr(valueStr, state.referenceValue, parseDateStr));
	};
	const cleanActiveDateSectionsIfValueNullTimeout = useTimeout();
	const updateSectionValue = ({ section, newSectionValue, shouldGoToNextSection }) => {
		updateSectionValueOnNextInvalidDateTimeout.clear();
		cleanActiveDateSectionsIfValueNullTimeout.clear();
		const activeDate = fieldValueManager.getDateFromSection(value, section);
		/**
		* Decide which section should be focused
		*/
		if (shouldGoToNextSection && activeSectionIndex < state.sections.length - 1) setSelectedSections(activeSectionIndex + 1);
		/**
		* Try to build a valid date from the new section value
		*/
		const newSections = setSectionValue(activeSectionIndex, newSectionValue);
		const newActiveDateSections = fieldValueManager.getDateSectionsFromValue(newSections, section);
		const newActiveDate = getDateFromDateSections(adapter, newActiveDateSections, localizedDigits);
		/**
		* If the new date is valid,
		* Then we merge the value of the modified sections into the reference date.
		* This makes sure that we don't lose some information of the initial date (like the time on a date field).
		*/
		if (adapter.isValid(newActiveDate)) {
			const mergedDate = mergeDateIntoReferenceDate(adapter, newActiveDate, newActiveDateSections, fieldValueManager.getDateFromSection(state.referenceValue, section), true);
			if (activeDate == null) cleanActiveDateSectionsIfValueNullTimeout.start(0, () => {
				if (valueRef.current === value) setState((prevState) => _extends({}, prevState, {
					sections: fieldValueManager.clearDateSections(state.sections, section),
					tempValueStrAndroid: null
				}));
			});
			return publishValue(fieldValueManager.updateDateInValue(value, section, mergedDate));
		}
		/**
		* If all the sections are filled but the date is invalid and the previous date is valid or null,
		* Then we publish an invalid date.
		*/
		if (newActiveDateSections.every((sectionBis) => sectionBis.value !== "") && (activeDate == null || adapter.isValid(activeDate))) {
			setSectionUpdateToApplyOnNextInvalidDate(newSectionValue);
			return publishValue(fieldValueManager.updateDateInValue(value, section, newActiveDate));
		}
		/**
		* If the previous date is not null,
		* Then we publish the date as `newActiveDate to prevent error state oscillation`.
		* @link: https://github.com/mui/mui-x/issues/17967
		*/
		if (activeDate != null) {
			setSectionUpdateToApplyOnNextInvalidDate(newSectionValue);
			publishValue(fieldValueManager.updateDateInValue(value, section, newActiveDate));
		}
		/**
		* If the previous date is already null,
		* Then we don't publish the date and we update the sections.
		*/
		return setState((prevState) => _extends({}, prevState, {
			sections: newSections,
			tempValueStrAndroid: null
		}));
	};
	const setTempAndroidValueStr = (tempValueStrAndroid) => setState((prevState) => _extends({}, prevState, { tempValueStrAndroid }));
	const setCharacterQuery = useEventCallback((newCharacterQuery) => {
		setState((prevState) => _extends({}, prevState, { characterQuery: newCharacterQuery }));
	});
	if (value !== state.lastExternalValue) {
		const isActiveDateInvalid = sectionToUpdateOnNextInvalidDateRef.current != null && !adapter.isValid(fieldValueManager.getDateFromSection(value, state.sections[sectionToUpdateOnNextInvalidDateRef.current.sectionIndex]));
		let sections;
		if (isActiveDateInvalid) sections = setSectionValue(sectionToUpdateOnNextInvalidDateRef.current.sectionIndex, sectionToUpdateOnNextInvalidDateRef.current.value);
		else sections = getSectionsFromValue(value);
		setState((prevState) => _extends({}, prevState, {
			lastExternalValue: value,
			sections,
			sectionsDependencies: {
				format,
				isRtl,
				locale: adapter.locale
			},
			referenceValue: isActiveDateInvalid ? prevState.referenceValue : fieldValueManager.updateReferenceValue(adapter, value, prevState.referenceValue),
			tempValueStrAndroid: null
		}));
	}
	if (isRtl !== state.lastSectionsDependencies.isRtl || format !== state.lastSectionsDependencies.format || adapter.locale !== state.lastSectionsDependencies.locale) {
		const sections = getSectionsFromValue(value);
		validateSections(sections, valueType);
		setState((prevState) => _extends({}, prevState, {
			lastSectionsDependencies: {
				format,
				isRtl,
				locale: adapter.locale
			},
			sections,
			tempValueStrAndroid: null,
			characterQuery: null
		}));
	}
	if (state.characterQuery != null && !error && activeSectionIndex == null) setCharacterQuery(null);
	if (state.characterQuery != null && state.sections[state.characterQuery.sectionIndex]?.type !== state.characterQuery.sectionType) setCharacterQuery(null);
	import_react.useEffect(() => {
		if (sectionToUpdateOnNextInvalidDateRef.current != null) sectionToUpdateOnNextInvalidDateRef.current = null;
	});
	const cleanCharacterQueryTimeout = useTimeout();
	import_react.useEffect(() => {
		if (state.characterQuery != null) cleanCharacterQueryTimeout.start(QUERY_LIFE_DURATION_MS, () => setCharacterQuery(null));
		return () => {};
	}, [
		state.characterQuery,
		setCharacterQuery,
		cleanCharacterQueryTimeout
	]);
	import_react.useEffect(() => {
		if (state.tempValueStrAndroid != null && activeSectionIndex != null) clearActiveSection();
	}, [state.sections]);
	return {
		activeSectionIndex,
		areAllSectionsEmpty,
		error,
		localizedDigits,
		parsedSelectedSections,
		sectionOrder,
		sectionsValueBoundaries,
		state,
		timezone,
		value,
		clearValue,
		clearActiveSection,
		setCharacterQuery,
		setSelectedSections,
		setTempAndroidValueStr,
		updateSectionValue,
		updateValueFromValueStr,
		getSectionsFromValue
	};
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldInternalPropsWithDefaults.js
/**
* Applies the default values to the field internal props.
* This is a temporary hook that will be removed during a follow up when `useField` will receive the internal props without the defaults.
* It is only here to allow the migration to be done in smaller steps.
*/
function useFieldInternalPropsWithDefaults(parameters) {
	const { manager: { internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToFieldInternalProps }, internalProps, skipContextFieldRefAssignment } = parameters;
	const pickerContext = useNullablePickerContext();
	const fieldPrivateContext = useNullableFieldPrivateContext();
	const handleFieldRef = useForkRef(internalProps.unstableFieldRef, skipContextFieldRefAssignment ? null : fieldPrivateContext?.fieldRef);
	const setValue = pickerContext?.setValue;
	const handleChangeFromPicker = import_react.useCallback((newValue, ctx) => {
		return setValue?.(newValue, {
			validationError: ctx.validationError,
			shouldClose: false
		});
	}, [setValue]);
	return useApplyDefaultValuesToFieldInternalProps(import_react.useMemo(() => {
		if (fieldPrivateContext != null && pickerContext != null) return _extends({
			value: pickerContext.value,
			onChange: handleChangeFromPicker,
			timezone: pickerContext.timezone,
			disabled: pickerContext.disabled,
			readOnly: pickerContext.readOnly,
			autoFocus: pickerContext.autoFocus && !pickerContext.open,
			focused: pickerContext.open ? true : void 0,
			format: pickerContext.fieldFormat,
			formatDensity: fieldPrivateContext.formatDensity,
			enableAccessibleFieldDOMStructure: fieldPrivateContext.enableAccessibleFieldDOMStructure,
			selectedSections: fieldPrivateContext.selectedSections,
			onSelectedSectionsChange: fieldPrivateContext.onSelectedSectionsChange,
			unstableFieldRef: handleFieldRef
		}, internalProps);
		return internalProps;
	}, [
		pickerContext,
		fieldPrivateContext,
		internalProps,
		handleChangeFromPicker,
		handleFieldRef
	]));
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/syncSelectionToDOM.js
function syncSelectionToDOM(parameters) {
	const { focused, domGetters, stateResponse: { parsedSelectedSections, state } } = parameters;
	if (!domGetters.isReady()) return;
	const selection = ownerDocument(domGetters.getRoot()).getSelection();
	if (!selection) return;
	if (parsedSelectedSections == null) {
		if (selection.rangeCount > 0 && selection.getRangeAt(0).startContainer instanceof Node && domGetters.getRoot().contains(selection.getRangeAt(0).startContainer)) selection.removeAllRanges();
		if (focused) domGetters.getRoot().blur();
		return;
	}
	if (!domGetters.getRoot().contains(getActiveElement(domGetters.getRoot()))) return;
	const range = new window.Range();
	let target;
	if (parsedSelectedSections === "all") target = domGetters.getRoot();
	else if (state.sections[parsedSelectedSections].type === "empty") target = domGetters.getSectionContainer(parsedSelectedSections);
	else target = domGetters.getSectionContent(parsedSelectedSections);
	range.selectNodeContents(target);
	target.focus();
	selection.removeAllRanges();
	selection.addRange(range);
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldRootHandleKeyDown.js
/**
* Returns the `onKeyDown` handler to pass to the root element of the field.
*/
function useFieldRootHandleKeyDown(parameters) {
	const adapter = usePickerAdapter();
	const { manager: { internal_fieldValueManager: fieldValueManager }, internalPropsWithDefaults: { minutesStep, disabled, readOnly }, stateResponse: { state, value, activeSectionIndex, parsedSelectedSections, sectionsValueBoundaries, localizedDigits, timezone, sectionOrder, clearValue, clearActiveSection, setSelectedSections, updateSectionValue } } = parameters;
	return useEventCallback((event) => {
		if (disabled) return;
		switch (true) {
			case (event.ctrlKey || event.metaKey) && String.fromCharCode(event.keyCode) === "A" && !event.shiftKey && !event.altKey:
				event.preventDefault();
				setSelectedSections("all");
				break;
			case event.key === "ArrowRight":
				event.preventDefault();
				if (parsedSelectedSections == null) setSelectedSections(sectionOrder.startIndex);
				else if (parsedSelectedSections === "all") setSelectedSections(sectionOrder.endIndex);
				else {
					const nextSectionIndex = sectionOrder.neighbors[parsedSelectedSections].rightIndex;
					if (nextSectionIndex !== null) setSelectedSections(nextSectionIndex);
				}
				break;
			case event.key === "ArrowLeft":
				event.preventDefault();
				if (parsedSelectedSections == null) setSelectedSections(sectionOrder.endIndex);
				else if (parsedSelectedSections === "all") setSelectedSections(sectionOrder.startIndex);
				else {
					const nextSectionIndex = sectionOrder.neighbors[parsedSelectedSections].leftIndex;
					if (nextSectionIndex !== null) setSelectedSections(nextSectionIndex);
				}
				break;
			case event.key === "Delete":
				event.preventDefault();
				if (readOnly) break;
				if (parsedSelectedSections == null || parsedSelectedSections === "all") clearValue();
				else clearActiveSection();
				break;
			case [
				"ArrowUp",
				"ArrowDown",
				"Home",
				"End",
				"PageUp",
				"PageDown"
			].includes(event.key): {
				event.preventDefault();
				if (readOnly || activeSectionIndex == null) break;
				if (parsedSelectedSections === "all") setSelectedSections(activeSectionIndex);
				const activeSection = state.sections[activeSectionIndex];
				updateSectionValue({
					section: activeSection,
					newSectionValue: adjustSectionValue(adapter, timezone, activeSection, event.key, sectionsValueBoundaries, localizedDigits, fieldValueManager.getDateFromSection(value, activeSection), { minutesStep }),
					shouldGoToNextSection: false
				});
				break;
			}
		}
	});
}
function getDeltaFromKeyCode(keyCode) {
	switch (keyCode) {
		case "ArrowUp": return 1;
		case "ArrowDown": return -1;
		case "PageUp": return 5;
		case "PageDown": return -5;
		default: return 0;
	}
}
function adjustSectionValue(adapter, timezone, section, keyCode, sectionsValueBoundaries, localizedDigits, activeDate, stepsAttributes) {
	const delta = getDeltaFromKeyCode(keyCode);
	const isStart = keyCode === "Home";
	const isEnd = keyCode === "End";
	const shouldSetAbsolute = section.value === "" || isStart || isEnd;
	const adjustDigitSection = () => {
		const sectionBoundaries = sectionsValueBoundaries[section.type]({
			currentDate: activeDate,
			format: section.format,
			contentType: section.contentType
		});
		const getCleanValue = (value) => cleanDigitSectionValue(adapter, value, sectionBoundaries, localizedDigits, section);
		const step = section.type === "minutes" && stepsAttributes?.minutesStep ? stepsAttributes.minutesStep : 1;
		let newSectionValueNumber;
		if (shouldSetAbsolute) {
			if (section.type === "year" && !isEnd && !isStart) return adapter.formatByString(adapter.date(void 0, timezone), section.format);
			if (delta > 0 || isStart) newSectionValueNumber = sectionBoundaries.minimum;
			else newSectionValueNumber = sectionBoundaries.maximum;
		} else newSectionValueNumber = parseInt(removeLocalizedDigits(section.value, localizedDigits), 10) + delta * step;
		if (newSectionValueNumber % step !== 0) {
			if (delta < 0 || isStart) newSectionValueNumber += step - (step + newSectionValueNumber) % step;
			if (delta > 0 || isEnd) newSectionValueNumber -= newSectionValueNumber % step;
		}
		if (newSectionValueNumber > sectionBoundaries.maximum) return getCleanValue(sectionBoundaries.minimum + (newSectionValueNumber - sectionBoundaries.maximum - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
		if (newSectionValueNumber < sectionBoundaries.minimum) return getCleanValue(sectionBoundaries.maximum - (sectionBoundaries.minimum - newSectionValueNumber - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
		return getCleanValue(newSectionValueNumber);
	};
	const adjustLetterSection = () => {
		const options = getLetterEditingOptions(adapter, timezone, section.type, section.format);
		if (options.length === 0) return section.value;
		if (shouldSetAbsolute) {
			if (delta > 0 || isStart) return options[0];
			return options[options.length - 1];
		}
		return options[((options.indexOf(section.value) + delta) % options.length + options.length) % options.length];
	};
	if (section.contentType === "digit" || section.contentType === "digit-with-letter") return adjustDigitSection();
	return adjustLetterSection();
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldRootProps.js
/**
* Generate the props to pass to the root element of the field.
* It is not used by the non-accessible DOM structure (with an <input /> element for editing).
* It should be used in the MUI accessible DOM structure and the Base UI implementation.
* @param {UseFieldRootPropsParameters} parameters The parameters of the hook.
* @returns {UseFieldRootPropsReturnValue} The props to forward to the root element of the field.
*/
function useFieldRootProps(parameters) {
	const { manager, focused, setFocused, domGetters, stateResponse, applyCharacterEditing, internalPropsWithDefaults, stateResponse: { parsedSelectedSections, sectionOrder, state, clearValue, setCharacterQuery, setSelectedSections, updateValueFromValueStr }, internalPropsWithDefaults: { disabled = false, readOnly = false } } = parameters;
	const handleKeyDown = useFieldRootHandleKeyDown({
		manager,
		internalPropsWithDefaults,
		stateResponse
	});
	const containerClickTimeout = useTimeout();
	const handleClick = useEventCallback((event) => {
		if (disabled || !domGetters.isReady()) return;
		setFocused(true);
		if (parsedSelectedSections === "all") containerClickTimeout.start(0, () => {
			const cursorPosition = document.getSelection().getRangeAt(0).startOffset;
			if (cursorPosition === 0) {
				setSelectedSections(sectionOrder.startIndex);
				return;
			}
			let sectionIndex = 0;
			let cursorOnStartOfSection = 0;
			while (cursorOnStartOfSection < cursorPosition && sectionIndex < state.sections.length) {
				const section = state.sections[sectionIndex];
				sectionIndex += 1;
				cursorOnStartOfSection += `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`.length;
			}
			setSelectedSections(sectionIndex - 1);
		});
		else if (!focused) {
			setFocused(true);
			setSelectedSections(sectionOrder.startIndex);
		} else if (!domGetters.getRoot().contains(event.target)) setSelectedSections(sectionOrder.startIndex);
	});
	const handleInput = useEventCallback((event) => {
		if (!domGetters.isReady() || parsedSelectedSections !== "all") return;
		const keyPressed = event.target.textContent ?? "";
		domGetters.getRoot().innerHTML = state.sections.map((section) => `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`).join("");
		syncSelectionToDOM({
			focused,
			domGetters,
			stateResponse
		});
		if (keyPressed.length === 0 || keyPressed.charCodeAt(0) === 10) {
			clearValue();
			setSelectedSections("all");
		} else if (keyPressed.length > 1) updateValueFromValueStr(keyPressed);
		else {
			if (parsedSelectedSections === "all") setSelectedSections(0);
			applyCharacterEditing({
				keyPressed,
				sectionIndex: 0
			});
		}
	});
	const handlePaste = useEventCallback((event) => {
		if (readOnly || parsedSelectedSections !== "all") {
			event.preventDefault();
			return;
		}
		const pastedValue = event.clipboardData.getData("text");
		event.preventDefault();
		setCharacterQuery(null);
		updateValueFromValueStr(pastedValue);
	});
	const handleFocus = useEventCallback(() => {
		if (focused || disabled || !domGetters.isReady()) return;
		const activeElement = getActiveElement(domGetters.getRoot());
		setFocused(true);
		if (!(domGetters.getSectionIndexFromDOMElement(activeElement) != null)) setSelectedSections(sectionOrder.startIndex);
	});
	return {
		onKeyDown: handleKeyDown,
		onBlur: useEventCallback(() => {
			setTimeout(() => {
				if (!domGetters.isReady()) return;
				const activeElement = getActiveElement(domGetters.getRoot());
				if (!domGetters.getRoot().contains(activeElement)) {
					setFocused(false);
					setSelectedSections(null);
				}
			});
		}),
		onFocus: handleFocus,
		onClick: handleClick,
		onPaste: handlePaste,
		onInput: handleInput,
		contentEditable: parsedSelectedSections === "all",
		tabIndex: internalPropsWithDefaults.disabled || parsedSelectedSections === 0 ? -1 : 0
	};
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldHiddenInputProps.js
/**
* Generate the props to pass to the hidden input element of the field.
* It is not used by the non-accessible DOM structure (with an <input /> element for editing).
* It should be used in the MUI accessible DOM structure and the Base UI implementation.
* @param {UseFieldHiddenInputPropsParameters} parameters The parameters of the hook.
* @returns {UseFieldHiddenInputPropsReturnValue} The props to forward to the hidden input element of the field.
*/
function useFieldHiddenInputProps(parameters) {
	const { manager: { internal_fieldValueManager: fieldValueManager }, stateResponse: { areAllSectionsEmpty, state, updateValueFromValueStr } } = parameters;
	const handleChange = useEventCallback((event) => {
		updateValueFromValueStr(event.target.value);
	});
	return {
		value: import_react.useMemo(() => areAllSectionsEmpty ? "" : fieldValueManager.getV7HiddenInputValueFromSections(state.sections), [
			areAllSectionsEmpty,
			state.sections,
			fieldValueManager
		]),
		onChange: handleChange
	};
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldSectionContainerProps.js
/**
* Generate the props to pass to the container element of each section of the field.
* It is not used by the non-accessible DOM structure (with an <input /> element for editing).
* It should be used in the MUI accessible DOM structure and the Base UI implementation.
* @param {UseFieldRootPropsParameters} parameters The parameters of the hook.
* @returns {UseFieldRootPropsReturnValue} The props to forward to the container element of each section of the field.
*/
function useFieldSectionContainerProps(parameters) {
	const { stateResponse: { setSelectedSections }, internalPropsWithDefaults: { disabled = false } } = parameters;
	const createHandleClick = import_react.useCallback((sectionIndex) => (event) => {
		if (disabled || event.isDefaultPrevented()) return;
		setSelectedSections(sectionIndex);
	}, [disabled, setSelectedSections]);
	return import_react.useCallback((sectionIndex) => ({
		"data-sectionindex": sectionIndex,
		onClick: createHandleClick(sectionIndex)
	}), [createHandleClick]);
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldSectionContentProps.js
/**
* Generate the props to pass to the content element of each section of the field.
* It is not used by the non-accessible DOM structure (with an <input /> element for editing).
* It should be used in the MUI accessible DOM structure and the Base UI implementation.
* @param {UseFieldRootPropsParameters} parameters The parameters of the hook.
* @returns {UseFieldRootPropsReturnValue} The props to forward to the content element of each section of the field.
*/
function useFieldSectionContentProps(parameters) {
	const adapter = usePickerAdapter();
	const translations = usePickerTranslations();
	const { focused, domGetters, stateResponse, applyCharacterEditing, manager: { internal_fieldValueManager: fieldValueManager }, stateResponse: { parsedSelectedSections, sectionsValueBoundaries, state, value, clearActiveSection, setCharacterQuery, setSelectedSections, updateSectionValue, updateValueFromValueStr }, internalPropsWithDefaults: { disabled = false, readOnly = false } } = parameters;
	const isContainerEditable = parsedSelectedSections === "all";
	const isEditable = !isContainerEditable && !disabled && !readOnly;
	/**
	* If a section content has been updated with a value we don't want to keep,
	* Then we need to imperatively revert it (we can't let React do it because the value did not change in his internal representation).
	*/
	const revertDOMSectionChange = useEventCallback((sectionIndex) => {
		if (!domGetters.isReady()) return;
		const section = state.sections[sectionIndex];
		domGetters.getSectionContent(sectionIndex).innerHTML = section.value || section.placeholder;
		syncSelectionToDOM({
			focused,
			domGetters,
			stateResponse
		});
	});
	const handleInput = useEventCallback((event) => {
		if (!domGetters.isReady()) return;
		const target = event.target;
		const keyPressed = target.textContent ?? "";
		const sectionIndex = domGetters.getSectionIndexFromDOMElement(target);
		const section = state.sections[sectionIndex];
		if (readOnly) {
			revertDOMSectionChange(sectionIndex);
			return;
		}
		if (keyPressed.length === 0) {
			if (section.value === "") {
				revertDOMSectionChange(sectionIndex);
				return;
			}
			const inputType = event.nativeEvent.inputType;
			if (inputType === "insertParagraph" || inputType === "insertLineBreak") {
				revertDOMSectionChange(sectionIndex);
				return;
			}
			revertDOMSectionChange(sectionIndex);
			clearActiveSection();
			return;
		}
		applyCharacterEditing({
			keyPressed,
			sectionIndex
		});
		revertDOMSectionChange(sectionIndex);
	});
	const handleMouseUp = useEventCallback((event) => {
		event.preventDefault();
	});
	const handlePaste = useEventCallback((event) => {
		event.preventDefault();
		if (readOnly || disabled || typeof parsedSelectedSections !== "number") return;
		const activeSection = state.sections[parsedSelectedSections];
		const pastedValue = event.clipboardData.getData("text");
		const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
		const digitsOnly = /^[0-9]+$/.test(pastedValue);
		const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
		if (activeSection.contentType === "letter" && lettersOnly || activeSection.contentType === "digit" && digitsOnly || activeSection.contentType === "digit-with-letter" && digitsAndLetterOnly) {
			setCharacterQuery(null);
			updateSectionValue({
				section: activeSection,
				newSectionValue: pastedValue,
				shouldGoToNextSection: true
			});
		} else if (!lettersOnly && !digitsOnly) {
			setCharacterQuery(null);
			updateValueFromValueStr(pastedValue);
		}
	});
	const handleDragOver = useEventCallback((event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "none";
	});
	const createFocusHandler = import_react.useCallback((sectionIndex) => () => {
		if (disabled) return;
		setSelectedSections(sectionIndex);
	}, [disabled, setSelectedSections]);
	return import_react.useCallback((section, sectionIndex) => {
		const sectionBoundaries = sectionsValueBoundaries[section.type]({
			currentDate: fieldValueManager.getDateFromSection(value, section),
			contentType: section.contentType,
			format: section.format
		});
		return {
			onInput: handleInput,
			onPaste: handlePaste,
			onMouseUp: handleMouseUp,
			onDragOver: handleDragOver,
			onFocus: createFocusHandler(sectionIndex),
			"aria-readonly": readOnly,
			"aria-valuenow": getSectionValueNow(section, adapter),
			"aria-valuemin": sectionBoundaries.minimum,
			"aria-valuemax": sectionBoundaries.maximum,
			"aria-valuetext": section.value ? getSectionValueText(section, adapter) : translations.empty,
			"aria-label": translations[section.type],
			"aria-disabled": disabled,
			tabIndex: !isEditable || isContainerEditable || sectionIndex > 0 ? -1 : 0,
			contentEditable: !isContainerEditable && !disabled && !readOnly,
			role: "spinbutton",
			"data-range-position": section.dateName || void 0,
			spellCheck: isEditable ? false : void 0,
			autoCapitalize: isEditable ? "none" : void 0,
			autoCorrect: isEditable ? "off" : void 0,
			children: section.value || section.placeholder,
			inputMode: section.contentType === "letter" ? "text" : "numeric"
		};
	}, [
		sectionsValueBoundaries,
		isContainerEditable,
		disabled,
		readOnly,
		isEditable,
		translations,
		adapter,
		handleInput,
		handlePaste,
		handleMouseUp,
		handleDragOver,
		createFocusHandler,
		fieldValueManager,
		value
	]);
}
function getSectionValueText(section, adapter) {
	if (!section.value) return;
	switch (section.type) {
		case "month": {
			if (section.contentType === "digit") {
				const dateWithMonth = adapter.setMonth(adapter.date(), Number(section.value) - 1);
				return adapter.isValid(dateWithMonth) ? adapter.format(dateWithMonth, "month") : "";
			}
			const parsedDate = adapter.parse(section.value, section.format);
			return parsedDate && adapter.isValid(parsedDate) ? adapter.format(parsedDate, "month") : void 0;
		}
		case "day":
			if (section.contentType === "digit") {
				const dateWithDay = adapter.setDate(adapter.startOfYear(adapter.date()), Number(section.value));
				return adapter.isValid(dateWithDay) ? adapter.format(dateWithDay, "dayOfMonthFull") : "";
			}
			return section.value;
		case "weekDay": return;
		default: return;
	}
}
function getSectionValueNow(section, adapter) {
	if (!section.value) return;
	switch (section.type) {
		case "weekDay":
			if (section.contentType === "letter") return;
			return Number(section.value);
		case "meridiem": {
			const parsedDate = adapter.parse(`01:00 ${section.value}`, `${adapter.formats.hours12h}:${adapter.formats.minutes} ${section.format}`);
			if (parsedDate) return adapter.getHours(parsedDate) >= 12 ? 1 : 0;
			return;
		}
		case "day": return section.contentType === "digit-with-letter" ? parseInt(section.value, 10) : Number(section.value);
		case "month": {
			if (section.contentType === "digit") return Number(section.value);
			const parsedDate = adapter.parse(section.value, section.format);
			return parsedDate ? adapter.getMonth(parsedDate) + 1 : void 0;
		}
		default: return section.contentType !== "letter" ? Number(section.value) : void 0;
	}
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldV7TextField.js
var useFieldV7TextField = (parameters) => {
	const { props, manager, skipContextFieldRefAssignment, manager: { valueType, internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel } } = parameters;
	const { internalProps, forwardedProps } = useSplitFieldProps(props, valueType);
	const internalPropsWithDefaults = useFieldInternalPropsWithDefaults({
		manager,
		internalProps,
		skipContextFieldRefAssignment
	});
	const { sectionListRef: sectionListRefProp, onBlur, onClick, onFocus, onInput, onPaste, onKeyDown, onClear, clearable } = forwardedProps;
	const { disabled = false, readOnly = false, autoFocus = false, focused: focusedProp, unstableFieldRef } = internalPropsWithDefaults;
	const sectionListRef = import_react.useRef(null);
	const handleSectionListRef = useForkRef(sectionListRefProp, sectionListRef);
	const domGetters = import_react.useMemo(() => ({
		isReady: () => sectionListRef.current != null,
		getRoot: () => sectionListRef.current.getRoot(),
		getSectionContainer: (sectionIndex) => sectionListRef.current.getSectionContainer(sectionIndex),
		getSectionContent: (sectionIndex) => sectionListRef.current.getSectionContent(sectionIndex),
		getSectionIndexFromDOMElement: (element) => sectionListRef.current.getSectionIndexFromDOMElement(element)
	}), [sectionListRef]);
	const stateResponse = useFieldState({
		manager,
		internalPropsWithDefaults,
		forwardedProps
	});
	const { areAllSectionsEmpty, error, parsedSelectedSections, sectionOrder, state, value, clearValue, setSelectedSections } = stateResponse;
	const applyCharacterEditing = useFieldCharacterEditing({ stateResponse });
	const openPickerAriaLabel = useOpenPickerButtonAriaLabel(value);
	const [focused, setFocused] = import_react.useState(false);
	function focusField(newSelectedSections = 0) {
		if (disabled || !sectionListRef.current || getActiveSectionIndex(sectionListRef) != null) return;
		const newParsedSelectedSections = parseSelectedSections(newSelectedSections, state.sections);
		setFocused(true);
		sectionListRef.current.getSectionContent(newParsedSelectedSections).focus();
	}
	const rootProps = useFieldRootProps({
		manager,
		internalPropsWithDefaults,
		stateResponse,
		applyCharacterEditing,
		focused,
		setFocused,
		domGetters
	});
	const hiddenInputProps = useFieldHiddenInputProps({
		manager,
		stateResponse
	});
	const createSectionContainerProps = useFieldSectionContainerProps({
		stateResponse,
		internalPropsWithDefaults
	});
	const createSectionContentProps = useFieldSectionContentProps({
		manager,
		stateResponse,
		applyCharacterEditing,
		internalPropsWithDefaults,
		domGetters,
		focused
	});
	const handleRootKeyDown = useEventCallback((event) => {
		onKeyDown?.(event);
		rootProps.onKeyDown(event);
	});
	const handleRootBlur = useEventCallback((event) => {
		onBlur?.(event);
		rootProps.onBlur(event);
	});
	const handleRootFocus = useEventCallback((event) => {
		onFocus?.(event);
		rootProps.onFocus(event);
	});
	const handleRootClick = useEventCallback((event) => {
		if (event.isDefaultPrevented()) return;
		onClick?.(event);
		rootProps.onClick(event);
	});
	const handleRootPaste = useEventCallback((event) => {
		onPaste?.(event);
		rootProps.onPaste(event);
	});
	const handleRootInput = useEventCallback((event) => {
		onInput?.(event);
		rootProps.onInput(event);
	});
	const handleClear = useEventCallback((event, ...args) => {
		event.preventDefault();
		onClear?.(event, ...args);
		clearValue();
		if (!isFieldFocused$1(sectionListRef)) focusField(0);
		else setSelectedSections(sectionOrder.startIndex);
	});
	const elements = import_react.useMemo(() => {
		return state.sections.map((section, sectionIndex) => {
			const content = createSectionContentProps(section, sectionIndex);
			return {
				container: createSectionContainerProps(sectionIndex),
				content: createSectionContentProps(section, sectionIndex),
				before: { children: section.startSeparator },
				after: {
					children: section.endSeparator,
					"data-range-position": section.isEndFormatSeparator ? content["data-range-position"] : void 0
				}
			};
		});
	}, [
		state.sections,
		createSectionContainerProps,
		createSectionContentProps
	]);
	import_react.useEffect(() => {
		if (sectionListRef.current == null) throw new Error([
			"MUI X: The `sectionListRef` prop has not been initialized by `PickersSectionList`",
			"You probably tried to pass a component to the `textField` slot that contains an `<input />` element instead of a `PickersSectionList`.",
			"",
			"If you want to keep using an `<input />` HTML element for the editing, please add the `enableAccessibleFieldDOMStructure={false}` prop to your Picker or Field component:",
			"",
			"<DatePicker enableAccessibleFieldDOMStructure={false} slots={{ textField: MyCustomTextField }} />",
			"",
			"Learn more about the field accessible DOM structure on the MUI documentation: https://mui.com/x/react-date-pickers/fields/#fields-to-edit-a-single-element"
		].join("\n"));
		if (autoFocus && !disabled && sectionListRef.current) sectionListRef.current.getSectionContent(sectionOrder.startIndex).focus();
	}, []);
	useEnhancedEffect(() => {
		if (!focused || !sectionListRef.current) return;
		if (parsedSelectedSections === "all") sectionListRef.current.getRoot().focus();
		else if (typeof parsedSelectedSections === "number") {
			const domElement = sectionListRef.current.getSectionContent(parsedSelectedSections);
			if (domElement) domElement.focus();
		}
	}, [parsedSelectedSections, focused]);
	useEnhancedEffect(() => {
		syncSelectionToDOM({
			focused,
			domGetters,
			stateResponse
		});
	});
	import_react.useImperativeHandle(unstableFieldRef, () => ({
		getSections: () => state.sections,
		getActiveSectionIndex: () => getActiveSectionIndex(sectionListRef),
		setSelectedSections: (newSelectedSections) => {
			if (disabled || !sectionListRef.current) return;
			const newParsedSelectedSections = parseSelectedSections(newSelectedSections, state.sections);
			setFocused((newParsedSelectedSections === "all" ? 0 : newParsedSelectedSections) !== null);
			setSelectedSections(newSelectedSections);
		},
		focusField,
		isFieldFocused: () => isFieldFocused$1(sectionListRef)
	}));
	return _extends({}, forwardedProps, rootProps, {
		onBlur: handleRootBlur,
		onClick: handleRootClick,
		onFocus: handleRootFocus,
		onInput: handleRootInput,
		onPaste: handleRootPaste,
		onKeyDown: handleRootKeyDown,
		onClear: handleClear
	}, hiddenInputProps, {
		error,
		clearable: Boolean(clearable && !areAllSectionsEmpty && !readOnly && !disabled),
		focused: focusedProp ?? focused,
		sectionListRef: handleSectionListRef,
		enableAccessibleFieldDOMStructure: true,
		elements,
		areAllSectionsEmpty,
		disabled,
		readOnly,
		autoFocus,
		openPickerAriaLabel
	});
};
function getActiveSectionIndex(sectionListRef) {
	const activeElement = getActiveElement(sectionListRef.current?.getRoot());
	if (!activeElement || !sectionListRef.current || !sectionListRef.current.getRoot().contains(activeElement)) return null;
	return sectionListRef.current.getSectionIndexFromDOMElement(activeElement);
}
function isFieldFocused$1(sectionListRef) {
	const activeElement = getActiveElement(sectionListRef.current?.getRoot());
	return !!sectionListRef.current && sectionListRef.current.getRoot().contains(activeElement);
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldV6TextField.js
var cleanString = (dirtyString) => dirtyString.replace(/[\u2066\u2067\u2068\u2069]/g, "");
var addPositionPropertiesToSections = (sections, localizedDigits, isRtl) => {
	let position = 0;
	let positionInInput = isRtl ? 1 : 0;
	const newSections = [];
	for (let i = 0; i < sections.length; i += 1) {
		const section = sections[i];
		const renderedValue = getSectionVisibleValue(section, isRtl ? "input-rtl" : "input-ltr", localizedDigits);
		const sectionStr = `${section.startSeparator}${renderedValue}${section.endSeparator}`;
		const sectionLength = cleanString(sectionStr).length;
		const sectionLengthInInput = sectionStr.length;
		const cleanedValue = cleanString(renderedValue);
		const startInInput = positionInInput + (cleanedValue === "" ? 0 : renderedValue.indexOf(cleanedValue[0])) + section.startSeparator.length;
		const endInInput = startInInput + cleanedValue.length;
		newSections.push(_extends({}, section, {
			start: position,
			end: position + sectionLength,
			startInInput,
			endInInput
		}));
		position += sectionLength;
		positionInInput += sectionLengthInInput;
	}
	return newSections;
};
var useFieldV6TextField = (parameters) => {
	const isRtl = useRtl();
	const focusTimeout = useTimeout();
	const selectionSyncTimeout = useTimeout();
	const { props, manager, skipContextFieldRefAssignment, manager: { valueType, internal_valueManager: valueManager, internal_fieldValueManager: fieldValueManager, internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel } } = parameters;
	const { internalProps, forwardedProps } = useSplitFieldProps(props, valueType);
	const internalPropsWithDefaults = useFieldInternalPropsWithDefaults({
		manager,
		internalProps,
		skipContextFieldRefAssignment
	});
	const { onFocus, onClick, onPaste, onBlur, onKeyDown, onClear, clearable, inputRef: inputRefProp, placeholder: inPlaceholder } = forwardedProps;
	const { readOnly = false, disabled = false, autoFocus = false, focused, unstableFieldRef } = internalPropsWithDefaults;
	const inputRef = import_react.useRef(null);
	const handleRef = useForkRef(inputRefProp, inputRef);
	const stateResponse = useFieldState({
		manager,
		internalPropsWithDefaults,
		forwardedProps
	});
	const { activeSectionIndex, areAllSectionsEmpty, error, localizedDigits, parsedSelectedSections, sectionOrder, state, value, clearValue, clearActiveSection, setCharacterQuery, setSelectedSections, setTempAndroidValueStr, updateSectionValue, updateValueFromValueStr, getSectionsFromValue } = stateResponse;
	const applyCharacterEditing = useFieldCharacterEditing({ stateResponse });
	const openPickerAriaLabel = useOpenPickerButtonAriaLabel(value);
	const sections = import_react.useMemo(() => addPositionPropertiesToSections(state.sections, localizedDigits, isRtl), [
		state.sections,
		localizedDigits,
		isRtl
	]);
	function syncSelectionFromDOM() {
		const browserStartIndex = inputRef.current.selectionStart ?? 0;
		let nextSectionIndex;
		if (browserStartIndex <= sections[0].startInInput) nextSectionIndex = 1;
		else if (browserStartIndex >= sections[sections.length - 1].endInInput) nextSectionIndex = 1;
		else nextSectionIndex = sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
		setSelectedSections(nextSectionIndex === -1 ? sections.length - 1 : nextSectionIndex - 1);
	}
	function focusField(newSelectedSection = 0) {
		if (getActiveElement(inputRef.current) === inputRef.current) return;
		inputRef.current?.focus();
		setSelectedSections(newSelectedSection);
	}
	const handleInputFocus = useEventCallback((event) => {
		onFocus?.(event);
		const input = inputRef.current;
		focusTimeout.start(0, () => {
			if (!input || input !== inputRef.current) return;
			if (activeSectionIndex != null) return;
			if (input.value.length && Number(input.selectionEnd) - Number(input.selectionStart) === input.value.length) setSelectedSections("all");
			else syncSelectionFromDOM();
		});
	});
	const handleInputClick = useEventCallback((event, ...args) => {
		if (event.isDefaultPrevented()) return;
		onClick?.(event, ...args);
		syncSelectionFromDOM();
	});
	const handleInputPaste = useEventCallback((event) => {
		onPaste?.(event);
		event.preventDefault();
		if (readOnly || disabled) return;
		const pastedValue = event.clipboardData.getData("text");
		if (typeof parsedSelectedSections === "number") {
			const activeSection = state.sections[parsedSelectedSections];
			const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
			const digitsOnly = /^[0-9]+$/.test(pastedValue);
			const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
			if (activeSection.contentType === "letter" && lettersOnly || activeSection.contentType === "digit" && digitsOnly || activeSection.contentType === "digit-with-letter" && digitsAndLetterOnly) {
				setCharacterQuery(null);
				updateSectionValue({
					section: activeSection,
					newSectionValue: pastedValue,
					shouldGoToNextSection: true
				});
				return;
			}
			if (lettersOnly || digitsOnly) return;
		}
		setCharacterQuery(null);
		updateValueFromValueStr(pastedValue);
	});
	const handleContainerBlur = useEventCallback((event) => {
		onBlur?.(event);
		setSelectedSections(null);
	});
	const handleInputChange = useEventCallback((event) => {
		if (readOnly) return;
		const targetValue = event.target.value;
		if (targetValue === "") {
			clearValue();
			return;
		}
		const eventData = event.nativeEvent.data;
		const shouldUseEventData = eventData && eventData.length > 1;
		const valueStr = shouldUseEventData ? eventData : targetValue;
		const cleanValueStr = cleanString(valueStr);
		if (parsedSelectedSections === "all") setSelectedSections(activeSectionIndex);
		if (activeSectionIndex == null || shouldUseEventData) {
			updateValueFromValueStr(shouldUseEventData ? eventData : cleanValueStr);
			return;
		}
		let keyPressed;
		if (parsedSelectedSections === "all" && cleanValueStr.length === 1) keyPressed = cleanValueStr;
		else {
			const prevValueStr = cleanString(fieldValueManager.getV6InputValueFromSections(sections, localizedDigits, isRtl));
			let startOfDiffIndex = -1;
			let endOfDiffIndex = -1;
			for (let i = 0; i < prevValueStr.length; i += 1) {
				if (startOfDiffIndex === -1 && prevValueStr[i] !== cleanValueStr[i]) startOfDiffIndex = i;
				if (endOfDiffIndex === -1 && prevValueStr[prevValueStr.length - i - 1] !== cleanValueStr[cleanValueStr.length - i - 1]) endOfDiffIndex = i;
			}
			const activeSection = sections[activeSectionIndex];
			if (startOfDiffIndex < activeSection.start || prevValueStr.length - endOfDiffIndex - 1 > activeSection.end) return;
			const activeSectionEndRelativeToNewValue = cleanValueStr.length - prevValueStr.length + activeSection.end - cleanString(activeSection.endSeparator || "").length;
			keyPressed = cleanValueStr.slice(activeSection.start + cleanString(activeSection.startSeparator || "").length, activeSectionEndRelativeToNewValue);
		}
		if (keyPressed.length === 0) {
			if (isAndroid()) setTempAndroidValueStr(valueStr);
			clearActiveSection();
			return;
		}
		applyCharacterEditing({
			keyPressed,
			sectionIndex: activeSectionIndex
		});
	});
	const handleClear = useEventCallback((event, ...args) => {
		event.preventDefault();
		onClear?.(event, ...args);
		clearValue();
		if (!isFieldFocused(inputRef)) focusField(0);
		else setSelectedSections(sectionOrder.startIndex);
	});
	const handleContainerKeyDown = useFieldRootHandleKeyDown({
		manager,
		internalPropsWithDefaults,
		stateResponse
	});
	const wrappedHandleContainerKeyDown = useEventCallback((event) => {
		onKeyDown?.(event);
		handleContainerKeyDown(event);
	});
	const placeholder = import_react.useMemo(() => {
		if (inPlaceholder !== void 0) return inPlaceholder;
		return fieldValueManager.getV6InputValueFromSections(getSectionsFromValue(valueManager.emptyValue), localizedDigits, isRtl);
	}, [
		inPlaceholder,
		fieldValueManager,
		getSectionsFromValue,
		valueManager.emptyValue,
		localizedDigits,
		isRtl
	]);
	const valueStr = import_react.useMemo(() => state.tempValueStrAndroid ?? fieldValueManager.getV6InputValueFromSections(state.sections, localizedDigits, isRtl), [
		state.sections,
		fieldValueManager,
		state.tempValueStrAndroid,
		localizedDigits,
		isRtl
	]);
	import_react.useEffect(() => {
		if (inputRef.current && inputRef.current === getActiveElement(inputRef.current)) setSelectedSections("all");
	}, []);
	useEnhancedEffect(() => {
		function syncSelectionToDOM() {
			if (!inputRef.current) return;
			if (parsedSelectedSections == null) {
				if (inputRef.current.scrollLeft) inputRef.current.scrollLeft = 0;
				return;
			}
			if (inputRef.current !== getActiveElement(inputRef.current)) return;
			const currentScrollTop = inputRef.current.scrollTop;
			if (parsedSelectedSections === "all") inputRef.current.select();
			else {
				const selectedSection = sections[parsedSelectedSections];
				const selectionStart = selectedSection.type === "empty" ? selectedSection.startInInput - selectedSection.startSeparator.length : selectedSection.startInInput;
				const selectionEnd = selectedSection.type === "empty" ? selectedSection.endInInput + selectedSection.endSeparator.length : selectedSection.endInInput;
				if (selectionStart !== inputRef.current.selectionStart || selectionEnd !== inputRef.current.selectionEnd) {
					if (inputRef.current === getActiveElement(inputRef.current)) inputRef.current.setSelectionRange(selectionStart, selectionEnd);
				}
				selectionSyncTimeout.start(0, () => {
					if (inputRef.current && inputRef.current === getActiveElement(inputRef.current) && inputRef.current.selectionStart === inputRef.current.selectionEnd && (inputRef.current.selectionStart !== selectionStart || inputRef.current.selectionEnd !== selectionEnd)) syncSelectionToDOM();
				});
			}
			inputRef.current.scrollTop = currentScrollTop;
		}
		syncSelectionToDOM();
	});
	const inputMode = import_react.useMemo(() => {
		if (activeSectionIndex == null) return "text";
		if (state.sections[activeSectionIndex].contentType === "letter") return "text";
		return "numeric";
	}, [activeSectionIndex, state.sections]);
	const shouldShowPlaceholder = !(inputRef.current && inputRef.current === getActiveElement(inputRef.current)) && areAllSectionsEmpty;
	import_react.useImperativeHandle(unstableFieldRef, () => ({
		getSections: () => state.sections,
		getActiveSectionIndex: () => {
			const browserStartIndex = inputRef.current.selectionStart ?? 0;
			const browserEndIndex = inputRef.current.selectionEnd ?? 0;
			if (browserStartIndex === 0 && browserEndIndex === 0) return null;
			const nextSectionIndex = browserStartIndex <= sections[0].startInInput ? 1 : sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
			return nextSectionIndex === -1 ? sections.length - 1 : nextSectionIndex - 1;
		},
		setSelectedSections: (newSelectedSections) => setSelectedSections(newSelectedSections),
		focusField,
		isFieldFocused: () => isFieldFocused(inputRef)
	}));
	return _extends({}, forwardedProps, {
		error,
		"aria-invalid": error,
		clearable: Boolean(clearable && !areAllSectionsEmpty && !readOnly && !disabled),
		onBlur: handleContainerBlur,
		onClick: handleInputClick,
		onFocus: handleInputFocus,
		onPaste: handleInputPaste,
		onKeyDown: wrappedHandleContainerKeyDown,
		onClear: handleClear,
		inputRef: handleRef,
		enableAccessibleFieldDOMStructure: false,
		placeholder,
		inputMode,
		autoComplete: "off",
		value: shouldShowPlaceholder ? "" : valueStr,
		onChange: handleInputChange,
		focused,
		disabled,
		readOnly,
		autoFocus,
		openPickerAriaLabel
	});
};
function isFieldFocused(inputRef) {
	return inputRef.current === getActiveElement(inputRef.current);
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useField.js
var useField = (parameters) => {
	const fieldPrivateContext = useNullableFieldPrivateContext();
	return (parameters.props.enableAccessibleFieldDOMStructure ?? fieldPrivateContext?.enableAccessibleFieldDOMStructure ?? true ? useFieldV7TextField : useFieldV6TextField)(parameters);
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/managers/useDateManager.js
function useDateManager(parameters = {}) {
	const { enableAccessibleFieldDOMStructure = true } = parameters;
	return import_react.useMemo(() => ({
		valueType: "date",
		validator: validateDate,
		internal_valueManager: singleItemValueManager,
		internal_fieldValueManager: singleItemFieldValueManager,
		internal_enableAccessibleFieldDOMStructure: enableAccessibleFieldDOMStructure,
		internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToDateFieldInternalProps,
		internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel
	}), [enableAccessibleFieldDOMStructure]);
}
function useOpenPickerButtonAriaLabel(value) {
	const adapter = usePickerAdapter();
	const translations = usePickerTranslations();
	return import_react.useMemo(() => {
		const formattedValue = adapter.isValid(value) ? adapter.format(value, "fullDate") : null;
		return translations.openDatePickerDialogue(formattedValue);
	}, [
		value,
		translations,
		adapter
	]);
}
function useApplyDefaultValuesToDateFieldInternalProps(internalProps) {
	const adapter = usePickerAdapter();
	const validationProps = useApplyDefaultValuesToDateValidationProps(internalProps);
	return import_react.useMemo(() => _extends({}, internalProps, validationProps, { format: internalProps.format ?? adapter.formats.keyboardDate }), [
		internalProps,
		validationProps,
		adapter
	]);
}
function useApplyDefaultValuesToDateValidationProps(props) {
	const adapter = usePickerAdapter();
	const defaultDates = useDefaultDates();
	return import_react.useMemo(() => ({
		disablePast: props.disablePast ?? false,
		disableFuture: props.disableFuture ?? false,
		minDate: applyDefaultDate(adapter, props.minDate, defaultDates.minDate),
		maxDate: applyDefaultDate(adapter, props.maxDate, defaultDates.maxDate)
	}), [
		props.minDate,
		props.maxDate,
		props.disableFuture,
		props.disablePast,
		adapter,
		defaultDates
	]);
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DateField/useDateField.js
var useDateField = (props) => {
	return useField({
		manager: useDateManager(props),
		props
	});
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useFieldOwnerState.js
function useFieldOwnerState(parameters) {
	const { ownerState: pickerOwnerState } = usePickerPrivateContext();
	const isRtl = useRtl();
	return import_react.useMemo(() => _extends({}, pickerOwnerState, {
		isFieldDisabled: parameters.disabled ?? false,
		isFieldReadOnly: parameters.readOnly ?? false,
		isFieldRequired: parameters.required ?? false,
		fieldDirection: isRtl ? "rtl" : "ltr"
	}), [
		pickerOwnerState,
		parameters.disabled,
		parameters.readOnly,
		parameters.required,
		isRtl
	]);
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersTextField/pickersTextFieldClasses.js
function getPickersTextFieldUtilityClass(slot) {
	return generateUtilityClass("MuiPickersTextField", slot);
}
var pickersTextFieldClasses = generateUtilityClasses("MuiPickersTextField", [
	"root",
	"focused",
	"disabled",
	"error",
	"required"
]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInputBase/pickersInputBaseClasses.js
function getPickersInputBaseUtilityClass(slot) {
	return generateUtilityClass("MuiPickersInputBase", slot);
}
var pickersInputBaseClasses = generateUtilityClasses("MuiPickersInputBase", [
	"root",
	"focused",
	"disabled",
	"error",
	"notchedOutline",
	"sectionContent",
	"sectionBefore",
	"sectionAfter",
	"adornedStart",
	"adornedEnd",
	"input",
	"inputSizeSmall",
	"activeBar"
]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersSectionList/pickersSectionListClasses.js
function getPickersSectionListUtilityClass(slot) {
	return generateUtilityClass("MuiPickersSectionList", slot);
}
var pickersSectionListClasses = generateUtilityClasses("MuiPickersSectionList", [
	"root",
	"section",
	"sectionContent"
]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersSectionList/PickersSectionList.js
var _excluded$27 = [
	"slots",
	"slotProps",
	"elements",
	"sectionListRef",
	"classes"
];
var PickersSectionListRoot = styled("div", {
	name: "MuiPickersSectionList",
	slot: "Root"
})({
	direction: "ltr /*! @noflip */",
	outline: "none"
});
var PickersSectionListSection = styled("span", {
	name: "MuiPickersSectionList",
	slot: "Section"
})({});
var PickersSectionListSectionSeparator = styled("span", {
	name: "MuiPickersSectionList",
	slot: "SectionSeparator"
})({ whiteSpace: "pre" });
var PickersSectionListSectionContent = styled("span", {
	name: "MuiPickersSectionList",
	slot: "SectionContent"
})({ outline: "none" });
var useUtilityClasses$19 = (classes) => {
	return composeClasses({
		root: ["root"],
		section: ["section"],
		sectionContent: ["sectionContent"]
	}, getPickersSectionListUtilityClass, classes);
};
function PickersSection(props) {
	const { slots, slotProps, element, classes } = props;
	const { ownerState } = usePickerPrivateContext();
	const Section = slots?.section ?? PickersSectionListSection;
	const sectionProps = useSlotProps({
		elementType: Section,
		externalSlotProps: slotProps?.section,
		externalForwardedProps: element.container,
		className: classes.section,
		ownerState
	});
	const SectionContent = slots?.sectionContent ?? PickersSectionListSectionContent;
	const sectionContentProps = useSlotProps({
		elementType: SectionContent,
		externalSlotProps: slotProps?.sectionContent,
		externalForwardedProps: element.content,
		additionalProps: { suppressContentEditableWarning: true },
		className: classes.sectionContent,
		ownerState
	});
	const SectionSeparator = slots?.sectionSeparator ?? PickersSectionListSectionSeparator;
	const sectionSeparatorBeforeProps = useSlotProps({
		elementType: SectionSeparator,
		externalSlotProps: slotProps?.sectionSeparator,
		externalForwardedProps: element.before,
		ownerState: _extends({}, ownerState, { separatorPosition: "before" })
	});
	const sectionSeparatorAfterProps = useSlotProps({
		elementType: SectionSeparator,
		externalSlotProps: slotProps?.sectionSeparator,
		externalForwardedProps: element.after,
		ownerState: _extends({}, ownerState, { separatorPosition: "after" })
	});
	const sectionContentRef = import_react.useRef(null);
	const handleSectionContentRef = useForkRef(sectionContentProps.ref, sectionContentRef);
	const handleContentBlur = (event) => {
		const next = event.relatedTarget;
		const root = event.currentTarget.closest(`.${pickersSectionListClasses.root}`);
		if (root && next instanceof Node && root.contains(next)) {
			event.stopPropagation();
			return;
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, _extends({}, sectionProps, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionSeparator, _extends({}, sectionSeparatorBeforeProps)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionContent, _extends({}, sectionContentProps, {
			ref: handleSectionContentRef,
			onBlur: handleContentBlur
		})),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionSeparator, _extends({}, sectionSeparatorAfterProps))
	] }));
}
PickersSection.propTypes = {
	classes: import_prop_types.default.object.isRequired,
	element: import_prop_types.default.shape({
		after: import_prop_types.default.object.isRequired,
		before: import_prop_types.default.object.isRequired,
		container: import_prop_types.default.object.isRequired,
		content: import_prop_types.default.object.isRequired
	}).isRequired,
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object
};
/**
* Demos:
*
* - [Custom field](https://mui.com/x/react-date-pickers/custom-field/)
*
* API:
*
* - [PickersSectionList API](https://mui.com/x/api/date-pickers/pickers-section-list/)
*/
var PickersSectionList = /* @__PURE__ */ import_react.forwardRef(function PickersSectionList(inProps, ref) {
	const props = useThemeProps({
		props: inProps,
		name: "MuiPickersSectionList"
	});
	const { slots, slotProps, elements, sectionListRef, classes: classesProp } = props, other = _objectWithoutPropertiesLoose(props, _excluded$27);
	const classes = useUtilityClasses$19(classesProp);
	const { ownerState } = usePickerPrivateContext();
	const rootRef = import_react.useRef(null);
	const handleRootRef = useForkRef(ref, rootRef);
	const getRoot = (methodName) => {
		if (!rootRef.current) throw new Error(`MUI X: Cannot call sectionListRef.${methodName} before the mount of the component.`);
		return rootRef.current;
	};
	import_react.useImperativeHandle(sectionListRef, () => ({
		getRoot() {
			return getRoot("getRoot");
		},
		getSectionContainer(index) {
			return getRoot("getSectionContainer").querySelector(`.${pickersSectionListClasses.section}[data-sectionindex="${index}"]`);
		},
		getSectionContent(index) {
			return getRoot("getSectionContent").querySelector(`.${pickersSectionListClasses.section}[data-sectionindex="${index}"] .${pickersSectionListClasses.sectionContent}`);
		},
		getSectionIndexFromDOMElement(element) {
			const root = getRoot("getSectionIndexFromDOMElement");
			if (element == null || !root.contains(element)) return null;
			let sectionContainer = null;
			if (element.classList.contains(pickersSectionListClasses.section)) sectionContainer = element;
			else if (element.classList.contains(pickersSectionListClasses.sectionContent)) sectionContainer = element.parentElement;
			if (sectionContainer == null) return null;
			return Number(sectionContainer.dataset.sectionindex);
		}
	}));
	const Root = slots?.root ?? PickersSectionListRoot;
	const rootProps = useSlotProps({
		elementType: Root,
		externalSlotProps: slotProps?.root,
		externalForwardedProps: other,
		additionalProps: {
			ref: handleRootRef,
			suppressContentEditableWarning: true
		},
		className: classes.root,
		ownerState
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, _extends({}, rootProps, { children: rootProps.contentEditable ? elements.map(({ content, before, after }) => `${before.children}${content.children}${after.children}`).join("") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: elements.map((element, elementIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersSection, {
		slots,
		slotProps,
		element,
		classes
	}, elementIndex)) }) }));
});
PickersSectionList.displayName = "PickersSectionList";
PickersSectionList.propTypes = {
	classes: import_prop_types.default.object,
	contentEditable: import_prop_types.default.bool.isRequired,
	elements: import_prop_types.default.arrayOf(import_prop_types.default.shape({
		after: import_prop_types.default.object.isRequired,
		before: import_prop_types.default.object.isRequired,
		container: import_prop_types.default.object.isRequired,
		content: import_prop_types.default.object.isRequired
	})).isRequired,
	sectionListRef: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.shape({ current: import_prop_types.default.shape({
		getRoot: import_prop_types.default.func.isRequired,
		getSectionContainer: import_prop_types.default.func.isRequired,
		getSectionContent: import_prop_types.default.func.isRequired,
		getSectionIndexFromDOMElement: import_prop_types.default.func.isRequired
	}) })]),
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersTextField/usePickerTextFieldOwnerState.js
var PickerTextFieldOwnerStateContext = /* @__PURE__ */ import_react.createContext(null);
PickerTextFieldOwnerStateContext.displayName = "PickerTextFieldOwnerStateContext";
var usePickerTextFieldOwnerState = () => {
	const value = import_react.useContext(PickerTextFieldOwnerStateContext);
	if (value == null) throw new Error(["MUI X: The `usePickerTextFieldOwnerState` can only be called in components that are used inside a PickerTextField component"].join("\n"));
	return value;
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInputBase/PickersInputBase.js
var _excluded$26 = [
	"elements",
	"areAllSectionsEmpty",
	"defaultValue",
	"label",
	"value",
	"onChange",
	"id",
	"autoFocus",
	"endAdornment",
	"startAdornment",
	"renderSuffix",
	"slots",
	"slotProps",
	"contentEditable",
	"tabIndex",
	"onInput",
	"onPaste",
	"onKeyDown",
	"fullWidth",
	"name",
	"readOnly",
	"inputProps",
	"inputRef",
	"sectionListRef",
	"onFocus",
	"onBlur",
	"classes",
	"ownerState"
];
var round = (value) => Math.round(value * 1e5) / 1e5;
var PickersInputBaseRoot = styled("div", {
	name: "MuiPickersInputBase",
	slot: "Root"
})(({ theme }) => _extends({}, theme.typography.body1, {
	color: (theme.vars || theme).palette.text.primary,
	cursor: "text",
	padding: 0,
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	position: "relative",
	boxSizing: "border-box",
	letterSpacing: `${round(.15 / 16)}em`,
	variants: [{
		props: { isInputInFullWidth: true },
		style: { width: "100%" }
	}]
}));
var PickersInputBaseSectionsContainer = styled(PickersSectionListRoot, {
	name: "MuiPickersInputBase",
	slot: "SectionsContainer"
})(({ theme }) => ({
	padding: "4px 0 5px",
	fontFamily: theme.typography.fontFamily,
	fontSize: "inherit",
	lineHeight: "1.4375em",
	flexGrow: 1,
	outline: "none",
	display: "flex",
	flexWrap: "nowrap",
	overflow: "hidden",
	letterSpacing: "inherit",
	width: "182px",
	variants: [
		{
			props: { fieldDirection: "rtl" },
			style: { justifyContent: "end" }
		},
		{
			props: { inputSize: "small" },
			style: { paddingTop: 1 }
		},
		{
			props: {
				hasStartAdornment: false,
				isFieldFocused: false,
				isFieldValueEmpty: true
			},
			style: {
				color: "currentColor",
				opacity: 0
			}
		},
		{
			props: {
				hasStartAdornment: false,
				isFieldFocused: false,
				isFieldValueEmpty: true,
				inputHasLabel: false
			},
			style: theme.vars ? { opacity: theme.vars.opacity.inputPlaceholder } : { opacity: theme.palette.mode === "light" ? .42 : .5 }
		},
		{
			props: {
				hasStartAdornment: false,
				isFieldFocused: false,
				isFieldValueEmpty: true,
				inputHasLabel: true,
				isLabelShrunk: true
			},
			style: theme.vars ? { opacity: theme.vars.opacity.inputPlaceholder } : { opacity: theme.palette.mode === "light" ? .42 : .5 }
		}
	]
}));
var PickersInputBaseSection = styled(PickersSectionListSection, {
	name: "MuiPickersInputBase",
	slot: "Section"
})(({ theme }) => ({
	fontFamily: theme.typography.fontFamily,
	fontSize: "inherit",
	letterSpacing: "inherit",
	lineHeight: "1.4375em",
	display: "inline-block",
	whiteSpace: "nowrap"
}));
var PickersInputBaseSectionContent = styled(PickersSectionListSectionContent, {
	name: "MuiPickersInputBase",
	slot: "SectionContent",
	overridesResolver: (props, styles) => styles.content
})(({ theme }) => ({
	fontFamily: theme.typography.fontFamily,
	lineHeight: "1.4375em",
	letterSpacing: "inherit",
	width: "fit-content",
	outline: "none"
}));
var PickersInputBaseSectionSeparator = styled(PickersSectionListSectionSeparator, {
	name: "MuiPickersInputBase",
	slot: "Separator"
})(() => ({
	whiteSpace: "pre",
	letterSpacing: "inherit"
}));
var PickersInputBaseInput = styled("input", {
	name: "MuiPickersInputBase",
	slot: "Input",
	overridesResolver: (props, styles) => styles.hiddenInput
})(_extends({}, visuallyHidden));
var PickersInputBaseActiveBar = styled("div", {
	name: "MuiPickersInputBase",
	slot: "ActiveBar"
})(({ theme, ownerState }) => ({
	display: "none",
	position: "absolute",
	height: 2,
	bottom: 2,
	borderTopLeftRadius: 2,
	borderTopRightRadius: 2,
	transition: theme.transitions.create(["width", "left"], { duration: theme.transitions.duration.shortest }),
	backgroundColor: (theme.vars || theme).palette.primary.main,
	"[data-active-range-position=\"start\"] &, [data-active-range-position=\"end\"] &": { display: "block" },
	"[data-active-range-position=\"start\"] &": { left: ownerState.sectionOffsets[0] },
	"[data-active-range-position=\"end\"] &": { left: ownerState.sectionOffsets[1] }
}));
var useUtilityClasses$18 = (classes, ownerState) => {
	const { isFieldFocused, isFieldDisabled, isFieldReadOnly, hasFieldError, inputSize, isInputInFullWidth, inputColor, hasStartAdornment, hasEndAdornment } = ownerState;
	return composeClasses({
		root: [
			"root",
			isFieldFocused && !isFieldDisabled && "focused",
			isFieldDisabled && "disabled",
			isFieldReadOnly && "readOnly",
			hasFieldError && "error",
			isInputInFullWidth && "fullWidth",
			`color${capitalize(inputColor)}`,
			inputSize === "small" && "inputSizeSmall",
			hasStartAdornment && "adornedStart",
			hasEndAdornment && "adornedEnd"
		],
		notchedOutline: ["notchedOutline"],
		input: ["input"],
		sectionsContainer: ["sectionsContainer"],
		sectionContent: ["sectionContent"],
		sectionBefore: ["sectionBefore"],
		sectionAfter: ["sectionAfter"],
		activeBar: ["activeBar"]
	}, getPickersInputBaseUtilityClass, classes);
};
function resolveSectionElementWidth(sectionElement, rootRef, index, dateRangePosition) {
	if (sectionElement.content.id) {
		const activeSectionElements = rootRef.current?.querySelectorAll(`[data-sectionindex="${index}"] [data-range-position="${dateRangePosition}"]`);
		if (activeSectionElements) return Array.from(activeSectionElements).reduce((currentActiveBarWidth, element) => {
			return currentActiveBarWidth + element.offsetWidth;
		}, 0);
	}
	return 0;
}
function resolveSectionWidthAndOffsets(elements, rootRef) {
	let activeBarWidth = 0;
	if (rootRef.current?.getAttribute("data-active-range-position") === "end") for (let i = elements.length - 1; i >= elements.length / 2; i -= 1) activeBarWidth += resolveSectionElementWidth(elements[i], rootRef, i, "end");
	else for (let i = 0; i < elements.length / 2; i += 1) activeBarWidth += resolveSectionElementWidth(elements[i], rootRef, i, "start");
	return {
		activeBarWidth,
		sectionOffsets: [rootRef.current?.querySelector(`[data-sectionindex="0"]`)?.offsetLeft || 0, rootRef.current?.querySelector(`[data-sectionindex="${elements.length / 2}"]`)?.offsetLeft || 0]
	};
}
/**
* @ignore - internal component.
*/
var PickersInputBase = /* @__PURE__ */ import_react.forwardRef(function PickersInputBase(inProps, ref) {
	const props = useThemeProps({
		props: inProps,
		name: "MuiPickersInputBase"
	});
	const { elements, areAllSectionsEmpty, value, onChange, id, endAdornment, startAdornment, renderSuffix, slots, slotProps, contentEditable, tabIndex, onInput, onPaste, onKeyDown, name, readOnly, inputProps, inputRef, sectionListRef, onFocus, onBlur, classes: classesProp, ownerState: ownerStateProp } = props, other = _objectWithoutPropertiesLoose(props, _excluded$26);
	const ownerStateContext = usePickerTextFieldOwnerState();
	const rootRef = import_react.useRef(null);
	const activeBarRef = import_react.useRef(null);
	const sectionOffsetsRef = import_react.useRef([]);
	const handleRootRef = useForkRef(ref, rootRef);
	const handleInputRef = useForkRef(inputProps?.ref, inputRef);
	const muiFormControl = useFormControl();
	if (!muiFormControl) throw new Error("MUI X: PickersInputBase should always be used inside a PickersTextField component");
	const ownerState = ownerStateProp ?? ownerStateContext;
	const handleInputFocus = (event) => {
		muiFormControl.onFocus?.(event);
		onFocus?.(event);
	};
	const handleHiddenInputFocus = (event) => {
		handleInputFocus(event);
	};
	const handleKeyDown = (event) => {
		onKeyDown?.(event);
		if (event.key === "Enter" && !event.defaultMuiPrevented) {
			if (rootRef.current?.dataset.multiInput) return;
			const closestForm = rootRef.current?.closest("form");
			const submitTrigger = closestForm?.querySelector("[type=\"submit\"]");
			if (!closestForm || !submitTrigger) return;
			event.preventDefault();
			closestForm.requestSubmit(submitTrigger);
		}
	};
	const handleInputBlur = (event) => {
		muiFormControl.onBlur?.(event);
		onBlur?.(event);
	};
	import_react.useEffect(() => {
		if (muiFormControl) muiFormControl.setAdornedStart(Boolean(startAdornment));
	}, [muiFormControl, startAdornment]);
	import_react.useEffect(() => {
		if (!muiFormControl) return;
		if (areAllSectionsEmpty) muiFormControl.onEmpty();
		else muiFormControl.onFilled();
	}, [muiFormControl, areAllSectionsEmpty]);
	const classes = useUtilityClasses$18(classesProp, ownerState);
	const InputRoot = slots?.root || PickersInputBaseRoot;
	const inputRootProps = useSlotProps({
		elementType: InputRoot,
		externalSlotProps: slotProps?.root,
		externalForwardedProps: other,
		additionalProps: {
			"aria-invalid": muiFormControl.error,
			ref: handleRootRef
		},
		className: classes.root,
		ownerState
	});
	const InputSectionsContainer = slots?.input || PickersInputBaseSectionsContainer;
	const isSingleInputRange = elements.some((element) => element.content["data-range-position"] !== void 0);
	import_react.useEffect(() => {
		if (!isSingleInputRange || !ownerState.isPickerOpen) return;
		const { activeBarWidth, sectionOffsets } = resolveSectionWidthAndOffsets(elements, rootRef);
		sectionOffsetsRef.current = [sectionOffsets[0], sectionOffsets[1]];
		if (activeBarRef.current) activeBarRef.current.style.width = `${activeBarWidth}px`;
	}, [
		elements,
		isSingleInputRange,
		ownerState.isPickerOpen
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputRoot, _extends({}, inputRootProps, { children: [
		startAdornment,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersSectionList, {
			sectionListRef,
			elements,
			contentEditable,
			tabIndex,
			className: classes.sectionsContainer,
			onFocus: handleInputFocus,
			onBlur: handleInputBlur,
			onInput,
			onPaste,
			onKeyDown: handleKeyDown,
			slots: {
				root: InputSectionsContainer,
				section: PickersInputBaseSection,
				sectionContent: PickersInputBaseSectionContent,
				sectionSeparator: PickersInputBaseSectionSeparator
			},
			slotProps: {
				root: _extends({}, slotProps?.input, { ownerState }),
				sectionContent: { className: pickersInputBaseClasses.sectionContent },
				sectionSeparator: ({ separatorPosition }) => ({ className: separatorPosition === "before" ? pickersInputBaseClasses.sectionBefore : pickersInputBaseClasses.sectionAfter })
			}
		}),
		endAdornment,
		renderSuffix ? renderSuffix(_extends({}, muiFormControl)) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersInputBaseInput, _extends({
			name,
			className: classes.input,
			value,
			onChange,
			id,
			"aria-hidden": "true",
			tabIndex: -1,
			readOnly,
			required: muiFormControl.required,
			disabled: muiFormControl.disabled,
			onFocus: handleHiddenInputFocus
		}, inputProps, { ref: handleInputRef })),
		isSingleInputRange && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersInputBaseActiveBar, {
			className: classes.activeBar,
			ref: activeBarRef,
			ownerState: { sectionOffsets: sectionOffsetsRef.current }
		})
	] }));
});
PickersInputBase.displayName = "PickersInputBase";
PickersInputBase.propTypes = {
	areAllSectionsEmpty: import_prop_types.default.bool.isRequired,
	className: import_prop_types.default.string,
	component: import_prop_types.default.elementType,
	contentEditable: import_prop_types.default.bool.isRequired,
	"data-multi-input": import_prop_types.default.string,
	elements: import_prop_types.default.arrayOf(import_prop_types.default.shape({
		after: import_prop_types.default.object.isRequired,
		before: import_prop_types.default.object.isRequired,
		container: import_prop_types.default.object.isRequired,
		content: import_prop_types.default.object.isRequired
	})).isRequired,
	endAdornment: import_prop_types.default.node,
	fullWidth: import_prop_types.default.bool,
	id: import_prop_types.default.string,
	inputProps: import_prop_types.default.object,
	inputRef: refType,
	label: import_prop_types.default.node,
	margin: import_prop_types.default.oneOf([
		"dense",
		"none",
		"normal"
	]),
	name: import_prop_types.default.string,
	onChange: import_prop_types.default.func.isRequired,
	onClick: import_prop_types.default.func.isRequired,
	onInput: import_prop_types.default.func.isRequired,
	onKeyDown: import_prop_types.default.func.isRequired,
	onPaste: import_prop_types.default.func.isRequired,
	ownerState: import_prop_types.default.any,
	readOnly: import_prop_types.default.bool,
	renderSuffix: import_prop_types.default.func,
	sectionListRef: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.shape({ current: import_prop_types.default.shape({
		getRoot: import_prop_types.default.func.isRequired,
		getSectionContainer: import_prop_types.default.func.isRequired,
		getSectionContent: import_prop_types.default.func.isRequired,
		getSectionIndexFromDOMElement: import_prop_types.default.func.isRequired
	}) })]),
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object,
	startAdornment: import_prop_types.default.node,
	style: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	value: import_prop_types.default.string.isRequired
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersOutlinedInput/pickersOutlinedInputClasses.js
function getPickersOutlinedInputUtilityClass(slot) {
	return generateUtilityClass("MuiPickersOutlinedInput", slot);
}
var pickersOutlinedInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses("MuiPickersOutlinedInput", [
	"root",
	"notchedOutline",
	"input"
]));
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersOutlinedInput/Outline.js
var _excluded$25 = [
	"children",
	"className",
	"label",
	"notched",
	"shrink"
];
var OutlineRoot = styled("fieldset", {
	name: "MuiPickersOutlinedInput",
	slot: "NotchedOutline"
})(({ theme }) => {
	const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
	return {
		textAlign: "left",
		position: "absolute",
		bottom: 0,
		right: 0,
		top: -5,
		left: 0,
		margin: 0,
		padding: "0 8px",
		pointerEvents: "none",
		borderRadius: "inherit",
		borderStyle: "solid",
		borderWidth: 1,
		overflow: "hidden",
		minWidth: "0%",
		borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
	};
});
var OutlineLabel = styled("span", {
	slot: "internal",
	shouldForwardProp: void 0
})(({ theme }) => ({
	fontFamily: theme.typography.fontFamily,
	fontSize: "inherit"
}));
var OutlineLegend = styled("legend", {
	slot: "internal",
	shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "notched"
})(({ theme }) => ({
	float: "unset",
	width: "auto",
	overflow: "hidden",
	variants: [
		{
			props: { inputHasLabel: false },
			style: {
				padding: 0,
				lineHeight: "11px",
				transition: theme.transitions.create("width", {
					duration: 150,
					easing: theme.transitions.easing.easeOut
				})
			}
		},
		{
			props: { inputHasLabel: true },
			style: {
				display: "block",
				padding: 0,
				height: 11,
				fontSize: "0.75em",
				visibility: "hidden",
				maxWidth: .01,
				transition: theme.transitions.create("max-width", {
					duration: 50,
					easing: theme.transitions.easing.easeOut
				}),
				whiteSpace: "nowrap",
				"& > span": {
					paddingLeft: 5,
					paddingRight: 5,
					display: "inline-block",
					opacity: 0,
					visibility: "visible"
				}
			}
		},
		{
			props: {
				inputHasLabel: true,
				notched: true
			},
			style: {
				maxWidth: "100%",
				transition: theme.transitions.create("max-width", {
					duration: 100,
					easing: theme.transitions.easing.easeOut,
					delay: 50
				})
			}
		}
	]
}));
/**
* @ignore - internal component.
*/
function Outline(props) {
	const { className, label, notched } = props, other = _objectWithoutPropertiesLoose(props, _excluded$25);
	const ownerState = usePickerTextFieldOwnerState();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutlineRoot, _extends({
		"aria-hidden": true,
		className
	}, other, {
		ownerState,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutlineLegend, {
			ownerState,
			notched,
			children: label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutlineLabel, { children: label }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutlineLabel, {
				className: "notranslate",
				children: "​"
			})
		})
	}));
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersOutlinedInput/PickersOutlinedInput.js
var _excluded$24 = [
	"label",
	"autoFocus",
	"ownerState",
	"classes",
	"notched"
];
var PickersOutlinedInputRoot = styled(PickersInputBaseRoot, {
	name: "MuiPickersOutlinedInput",
	slot: "Root"
})(({ theme }) => {
	const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
	return {
		padding: "0 14px",
		borderRadius: (theme.vars || theme).shape.borderRadius,
		[`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: { borderColor: (theme.vars || theme).palette.text.primary },
		"@media (hover: none)": { [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: { borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor } },
		[`&.${pickersOutlinedInputClasses.focused} .${pickersOutlinedInputClasses.notchedOutline}`]: {
			borderStyle: "solid",
			borderWidth: 2
		},
		[`&.${pickersOutlinedInputClasses.disabled}`]: {
			[`& .${pickersOutlinedInputClasses.notchedOutline}`]: { borderColor: (theme.vars || theme).palette.action.disabled },
			"*": { color: (theme.vars || theme).palette.action.disabled }
		},
		[`&.${pickersOutlinedInputClasses.error} .${pickersOutlinedInputClasses.notchedOutline}`]: { borderColor: (theme.vars || theme).palette.error.main },
		variants: Object.keys((theme.vars ?? theme).palette).filter((key) => (theme.vars ?? theme).palette[key]?.main ?? false).map((color) => ({
			props: { inputColor: color },
			style: { [`&.${pickersOutlinedInputClasses.focused}:not(.${pickersOutlinedInputClasses.error}) .${pickersOutlinedInputClasses.notchedOutline}`]: { borderColor: (theme.vars || theme).palette[color].main } }
		}))
	};
});
var PickersOutlinedInputSectionsContainer = styled(PickersInputBaseSectionsContainer, {
	name: "MuiPickersOutlinedInput",
	slot: "SectionsContainer"
})({
	padding: "16.5px 0",
	variants: [{
		props: { inputSize: "small" },
		style: { padding: "8.5px 0" }
	}]
});
var useUtilityClasses$17 = (classes) => {
	return _extends({}, classes, composeClasses({
		root: ["root"],
		notchedOutline: ["notchedOutline"],
		input: ["input"]
	}, getPickersOutlinedInputUtilityClass, classes));
};
/**
* @ignore - internal component.
*/
var PickersOutlinedInput = /* @__PURE__ */ import_react.forwardRef(function PickersOutlinedInput(inProps, ref) {
	const props = useThemeProps({
		props: inProps,
		name: "MuiPickersOutlinedInput"
	});
	const { label, classes: classesProp, notched } = props, other = _objectWithoutPropertiesLoose(props, _excluded$24);
	const muiFormControl = useFormControl();
	const classes = useUtilityClasses$17(classesProp);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersInputBase, _extends({
		slots: {
			root: PickersOutlinedInputRoot,
			input: PickersOutlinedInputSectionsContainer
		},
		renderSuffix: (state) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outline, {
			shrink: Boolean(notched || state.adornedStart || state.focused || state.filled),
			notched: Boolean(notched || state.adornedStart || state.focused || state.filled),
			className: classes.notchedOutline,
			label: label != null && label !== "" && muiFormControl?.required ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
				label,
				" ",
				"*"
			] }) : label
		})
	}, other, {
		label,
		classes,
		ref
	}));
});
PickersOutlinedInput.displayName = "PickersOutlinedInput";
PickersOutlinedInput.propTypes = {
	areAllSectionsEmpty: import_prop_types.default.bool.isRequired,
	className: import_prop_types.default.string,
	component: import_prop_types.default.elementType,
	contentEditable: import_prop_types.default.bool.isRequired,
	"data-multi-input": import_prop_types.default.string,
	elements: import_prop_types.default.arrayOf(import_prop_types.default.shape({
		after: import_prop_types.default.object.isRequired,
		before: import_prop_types.default.object.isRequired,
		container: import_prop_types.default.object.isRequired,
		content: import_prop_types.default.object.isRequired
	})).isRequired,
	endAdornment: import_prop_types.default.node,
	fullWidth: import_prop_types.default.bool,
	id: import_prop_types.default.string,
	inputProps: import_prop_types.default.object,
	inputRef: refType,
	label: import_prop_types.default.node,
	margin: import_prop_types.default.oneOf([
		"dense",
		"none",
		"normal"
	]),
	name: import_prop_types.default.string,
	notched: import_prop_types.default.bool,
	onChange: import_prop_types.default.func.isRequired,
	onClick: import_prop_types.default.func.isRequired,
	onInput: import_prop_types.default.func.isRequired,
	onKeyDown: import_prop_types.default.func.isRequired,
	onPaste: import_prop_types.default.func.isRequired,
	ownerState: import_prop_types.default.any,
	readOnly: import_prop_types.default.bool,
	renderSuffix: import_prop_types.default.func,
	sectionListRef: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.shape({ current: import_prop_types.default.shape({
		getRoot: import_prop_types.default.func.isRequired,
		getSectionContainer: import_prop_types.default.func.isRequired,
		getSectionContent: import_prop_types.default.func.isRequired,
		getSectionIndexFromDOMElement: import_prop_types.default.func.isRequired
	}) })]),
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object,
	startAdornment: import_prop_types.default.node,
	style: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	value: import_prop_types.default.string.isRequired
};
PickersOutlinedInput.muiName = "Input";
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersFilledInput/pickersFilledInputClasses.js
function getPickersFilledInputUtilityClass(slot) {
	return generateUtilityClass("MuiPickersFilledInput", slot);
}
var pickersFilledInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses("MuiPickersFilledInput", [
	"root",
	"underline",
	"input"
]));
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersFilledInput/PickersFilledInput.js
var _excluded$23 = [
	"label",
	"autoFocus",
	"disableUnderline",
	"hiddenLabel",
	"classes"
];
var PickersFilledInputRoot = styled(PickersInputBaseRoot, {
	name: "MuiPickersFilledInput",
	slot: "Root",
	shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "disableUnderline"
})(({ theme }) => {
	const light = theme.palette.mode === "light";
	const bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
	const backgroundColor = light ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
	const hoverBackground = light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
	const disabledBackground = light ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
	return {
		backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
		borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
		borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
		transition: theme.transitions.create("background-color", {
			duration: theme.transitions.duration.shorter,
			easing: theme.transitions.easing.easeOut
		}),
		"&:hover": {
			backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
			"@media (hover: none)": { backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor }
		},
		[`&.${pickersFilledInputClasses.focused}`]: { backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor },
		[`&.${pickersFilledInputClasses.disabled}`]: { backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground },
		variants: [
			...Object.keys((theme.vars ?? theme).palette).filter((key) => (theme.vars ?? theme).palette[key].main).map((color) => ({
				props: {
					inputColor: color,
					disableUnderline: false
				},
				style: { "&::after": { borderBottom: `2px solid ${(theme.vars || theme).palette[color]?.main}` } }
			})),
			{
				props: { disableUnderline: false },
				style: {
					"&::after": {
						left: 0,
						bottom: 0,
						content: "\"\"",
						position: "absolute",
						right: 0,
						transform: "scaleX(0)",
						transition: theme.transitions.create("transform", {
							duration: theme.transitions.duration.shorter,
							easing: theme.transitions.easing.easeOut
						}),
						pointerEvents: "none"
					},
					[`&.${pickersFilledInputClasses.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
					[`&.${pickersFilledInputClasses.error}`]: { "&:before, &:after": { borderBottomColor: (theme.vars || theme).palette.error.main } },
					"&::before": {
						borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
						left: 0,
						bottom: 0,
						content: "\"\\00a0\"",
						position: "absolute",
						right: 0,
						transition: theme.transitions.create("border-bottom-color", { duration: theme.transitions.duration.shorter }),
						pointerEvents: "none"
					},
					[`&:hover:not(.${pickersFilledInputClasses.disabled}, .${pickersFilledInputClasses.error}):before`]: { borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}` },
					[`&.${pickersFilledInputClasses.disabled}:before`]: { borderBottomStyle: "dotted" }
				}
			},
			{
				props: { hasStartAdornment: true },
				style: { paddingLeft: 12 }
			},
			{
				props: { hasEndAdornment: true },
				style: { paddingRight: 12 }
			}
		]
	};
});
var PickersFilledSectionsContainer = styled(PickersInputBaseSectionsContainer, {
	name: "MuiPickersFilledInput",
	slot: "sectionsContainer",
	shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "hiddenLabel"
})({
	paddingTop: 25,
	paddingRight: 12,
	paddingBottom: 8,
	paddingLeft: 12,
	variants: [
		{
			props: { inputSize: "small" },
			style: {
				paddingTop: 21,
				paddingBottom: 4
			}
		},
		{
			props: { hasStartAdornment: true },
			style: { paddingLeft: 0 }
		},
		{
			props: { hasEndAdornment: true },
			style: { paddingRight: 0 }
		},
		{
			props: { hiddenLabel: true },
			style: {
				paddingTop: 16,
				paddingBottom: 17
			}
		},
		{
			props: {
				hiddenLabel: true,
				inputSize: "small"
			},
			style: {
				paddingTop: 8,
				paddingBottom: 9
			}
		}
	]
});
var useUtilityClasses$16 = (classes, ownerState) => {
	const { inputHasUnderline } = ownerState;
	return _extends({}, classes, composeClasses({
		root: ["root", inputHasUnderline && "underline"],
		input: ["input"]
	}, getPickersFilledInputUtilityClass, classes));
};
/**
* @ignore - internal component.
*/
var PickersFilledInput = /* @__PURE__ */ import_react.forwardRef(function PickersFilledInput(inProps, ref) {
	const props = useThemeProps({
		props: inProps,
		name: "MuiPickersFilledInput"
	});
	const { label, disableUnderline = false, hiddenLabel = false, classes: classesProp } = props, other = _objectWithoutPropertiesLoose(props, _excluded$23);
	const ownerState = _extends({}, usePickerTextFieldOwnerState(), { inputHasUnderline: !disableUnderline });
	const classes = useUtilityClasses$16(classesProp, ownerState);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersInputBase, _extends({
		slots: {
			root: PickersFilledInputRoot,
			input: PickersFilledSectionsContainer
		},
		slotProps: {
			root: { disableUnderline },
			input: { hiddenLabel }
		}
	}, other, {
		label,
		classes,
		ref,
		ownerState
	}));
});
PickersFilledInput.displayName = "PickersFilledInput";
PickersFilledInput.propTypes = {
	areAllSectionsEmpty: import_prop_types.default.bool.isRequired,
	className: import_prop_types.default.string,
	component: import_prop_types.default.elementType,
	contentEditable: import_prop_types.default.bool.isRequired,
	"data-multi-input": import_prop_types.default.string,
	disableUnderline: import_prop_types.default.bool,
	elements: import_prop_types.default.arrayOf(import_prop_types.default.shape({
		after: import_prop_types.default.object.isRequired,
		before: import_prop_types.default.object.isRequired,
		container: import_prop_types.default.object.isRequired,
		content: import_prop_types.default.object.isRequired
	})).isRequired,
	endAdornment: import_prop_types.default.node,
	fullWidth: import_prop_types.default.bool,
	hiddenLabel: import_prop_types.default.bool,
	id: import_prop_types.default.string,
	inputProps: import_prop_types.default.object,
	inputRef: refType,
	label: import_prop_types.default.node,
	margin: import_prop_types.default.oneOf([
		"dense",
		"none",
		"normal"
	]),
	name: import_prop_types.default.string,
	onChange: import_prop_types.default.func.isRequired,
	onClick: import_prop_types.default.func.isRequired,
	onInput: import_prop_types.default.func.isRequired,
	onKeyDown: import_prop_types.default.func.isRequired,
	onPaste: import_prop_types.default.func.isRequired,
	ownerState: import_prop_types.default.any,
	readOnly: import_prop_types.default.bool,
	renderSuffix: import_prop_types.default.func,
	sectionListRef: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.shape({ current: import_prop_types.default.shape({
		getRoot: import_prop_types.default.func.isRequired,
		getSectionContainer: import_prop_types.default.func.isRequired,
		getSectionContent: import_prop_types.default.func.isRequired,
		getSectionIndexFromDOMElement: import_prop_types.default.func.isRequired
	}) })]),
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object,
	startAdornment: import_prop_types.default.node,
	style: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	value: import_prop_types.default.string.isRequired
};
PickersFilledInput.muiName = "Input";
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInput/pickersInputClasses.js
function getPickersInputUtilityClass(slot) {
	return generateUtilityClass("MuiPickersFilledInput", slot);
}
var pickersInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses("MuiPickersInput", [
	"root",
	"underline",
	"input"
]));
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInput/PickersInput.js
var _excluded$22 = [
	"label",
	"autoFocus",
	"disableUnderline",
	"ownerState",
	"classes"
];
var PickersInputRoot = styled(PickersInputBaseRoot, {
	name: "MuiPickersInput",
	slot: "Root",
	shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "disableUnderline"
})(({ theme }) => {
	let bottomLineColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
	if (theme.vars) bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
	return {
		"label + &": { marginTop: 16 },
		variants: [...Object.keys((theme.vars ?? theme).palette).filter((key) => (theme.vars ?? theme).palette[key].main).map((color) => ({
			props: {
				inputColor: color,
				inputHasUnderline: true
			},
			style: { "&::after": { borderBottom: `2px solid ${(theme.vars || theme).palette[color].main}` } }
		})), {
			props: { inputHasUnderline: true },
			style: {
				"&::after": {
					background: "red",
					left: 0,
					bottom: 0,
					content: "\"\"",
					position: "absolute",
					right: 0,
					transform: "scaleX(0)",
					transition: theme.transitions.create("transform", {
						duration: theme.transitions.duration.shorter,
						easing: theme.transitions.easing.easeOut
					}),
					pointerEvents: "none"
				},
				[`&.${pickersInputClasses.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
				[`&.${pickersInputClasses.error}`]: { "&:before, &:after": { borderBottomColor: (theme.vars || theme).palette.error.main } },
				"&::before": {
					borderBottom: `1px solid ${bottomLineColor}`,
					left: 0,
					bottom: 0,
					content: "\"\\00a0\"",
					position: "absolute",
					right: 0,
					transition: theme.transitions.create("border-bottom-color", { duration: theme.transitions.duration.shorter }),
					pointerEvents: "none"
				},
				[`&:hover:not(.${pickersInputClasses.disabled}, .${pickersInputClasses.error}):before`]: {
					borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
					"@media (hover: none)": { borderBottom: `1px solid ${bottomLineColor}` }
				},
				[`&.${pickersInputClasses.disabled}:before`]: { borderBottomStyle: "dotted" }
			}
		}]
	};
});
var useUtilityClasses$15 = (classes, ownerState) => {
	const { inputHasUnderline } = ownerState;
	return _extends({}, classes, composeClasses({
		root: ["root", !inputHasUnderline && "underline"],
		input: ["input"]
	}, getPickersInputUtilityClass, classes));
};
/**
* @ignore - internal component.
*/
var PickersInput = /* @__PURE__ */ import_react.forwardRef(function PickersInput(inProps, ref) {
	const props = useThemeProps({
		props: inProps,
		name: "MuiPickersInput"
	});
	const { label, disableUnderline = false, classes: classesProp } = props, other = _objectWithoutPropertiesLoose(props, _excluded$22);
	const ownerState = _extends({}, usePickerTextFieldOwnerState(), { inputHasUnderline: !disableUnderline });
	const classes = useUtilityClasses$15(classesProp, ownerState);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersInputBase, _extends({
		slots: { root: PickersInputRoot },
		slotProps: { root: { disableUnderline } }
	}, other, {
		ownerState,
		label,
		classes,
		ref
	}));
});
PickersInput.displayName = "PickersInput";
PickersInput.propTypes = {
	areAllSectionsEmpty: import_prop_types.default.bool.isRequired,
	className: import_prop_types.default.string,
	component: import_prop_types.default.elementType,
	contentEditable: import_prop_types.default.bool.isRequired,
	"data-multi-input": import_prop_types.default.string,
	disableUnderline: import_prop_types.default.bool,
	elements: import_prop_types.default.arrayOf(import_prop_types.default.shape({
		after: import_prop_types.default.object.isRequired,
		before: import_prop_types.default.object.isRequired,
		container: import_prop_types.default.object.isRequired,
		content: import_prop_types.default.object.isRequired
	})).isRequired,
	endAdornment: import_prop_types.default.node,
	fullWidth: import_prop_types.default.bool,
	id: import_prop_types.default.string,
	inputProps: import_prop_types.default.object,
	inputRef: refType,
	label: import_prop_types.default.node,
	margin: import_prop_types.default.oneOf([
		"dense",
		"none",
		"normal"
	]),
	name: import_prop_types.default.string,
	onChange: import_prop_types.default.func.isRequired,
	onClick: import_prop_types.default.func.isRequired,
	onInput: import_prop_types.default.func.isRequired,
	onKeyDown: import_prop_types.default.func.isRequired,
	onPaste: import_prop_types.default.func.isRequired,
	ownerState: import_prop_types.default.any,
	readOnly: import_prop_types.default.bool,
	renderSuffix: import_prop_types.default.func,
	sectionListRef: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.shape({ current: import_prop_types.default.shape({
		getRoot: import_prop_types.default.func.isRequired,
		getSectionContainer: import_prop_types.default.func.isRequired,
		getSectionContent: import_prop_types.default.func.isRequired,
		getSectionIndexFromDOMElement: import_prop_types.default.func.isRequired
	}) })]),
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object,
	startAdornment: import_prop_types.default.node,
	style: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	value: import_prop_types.default.string.isRequired
};
PickersInput.muiName = "Input";
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersTextField.js
var _excluded$21 = [
	"onFocus",
	"onBlur",
	"className",
	"classes",
	"color",
	"disabled",
	"error",
	"variant",
	"required",
	"hiddenLabel",
	"InputProps",
	"inputProps",
	"inputRef",
	"sectionListRef",
	"elements",
	"areAllSectionsEmpty",
	"onClick",
	"onKeyDown",
	"onKeyUp",
	"onPaste",
	"onInput",
	"endAdornment",
	"startAdornment",
	"tabIndex",
	"contentEditable",
	"focused",
	"value",
	"onChange",
	"fullWidth",
	"id",
	"name",
	"helperText",
	"FormHelperTextProps",
	"label",
	"InputLabelProps",
	"data-active-range-position"
];
var VARIANT_COMPONENT = {
	standard: PickersInput,
	filled: PickersFilledInput,
	outlined: PickersOutlinedInput
};
var PickersTextFieldRoot = styled(FormControl, {
	name: "MuiPickersTextField",
	slot: "Root"
})({ maxWidth: "100%" });
var useUtilityClasses$14 = (classes, ownerState) => {
	const { isFieldFocused, isFieldDisabled, isFieldRequired } = ownerState;
	return composeClasses({ root: [
		"root",
		isFieldFocused && !isFieldDisabled && "focused",
		isFieldDisabled && "disabled",
		isFieldRequired && "required"
	] }, getPickersTextFieldUtilityClass, classes);
};
var PickersTextField = /* @__PURE__ */ import_react.forwardRef(function PickersTextField(inProps, ref) {
	const props = useThemeProps({
		props: inProps,
		name: "MuiPickersTextField"
	});
	const { onFocus, onBlur, className, classes: classesProp, color = "primary", disabled = false, error = false, variant = "outlined", required = false, hiddenLabel = false, InputProps, inputProps, inputRef, sectionListRef, elements, areAllSectionsEmpty, onClick, onKeyDown, onKeyUp, onPaste, onInput, endAdornment, startAdornment, tabIndex, contentEditable, focused, value, onChange, fullWidth, id: idProp, name, helperText, FormHelperTextProps, label, InputLabelProps, "data-active-range-position": dataActiveRangePosition } = props, other = _objectWithoutPropertiesLoose(props, _excluded$21);
	const handleRootRef = useForkRef(ref, import_react.useRef(null));
	const id = useId(idProp);
	const helperTextId = helperText && id ? `${id}-helper-text` : void 0;
	const inputLabelId = label && id ? `${id}-label` : void 0;
	const fieldOwnerState = useFieldOwnerState({
		disabled: props.disabled,
		required: props.required,
		readOnly: InputProps?.readOnly
	});
	const ownerState = import_react.useMemo(() => _extends({}, fieldOwnerState, {
		isFieldValueEmpty: areAllSectionsEmpty,
		isFieldFocused: focused ?? false,
		hasFieldError: error ?? false,
		inputSize: props.size ?? "medium",
		inputColor: color ?? "primary",
		isInputInFullWidth: fullWidth ?? false,
		hasStartAdornment: Boolean(startAdornment ?? InputProps?.startAdornment),
		hasEndAdornment: Boolean(endAdornment ?? InputProps?.endAdornment),
		inputHasLabel: !!label,
		isLabelShrunk: Boolean(InputLabelProps?.shrink)
	}), [
		fieldOwnerState,
		areAllSectionsEmpty,
		focused,
		error,
		props.size,
		color,
		fullWidth,
		startAdornment,
		endAdornment,
		InputProps?.startAdornment,
		InputProps?.endAdornment,
		label,
		InputLabelProps?.shrink
	]);
	const classes = useUtilityClasses$14(classesProp, ownerState);
	const PickersInputComponent = VARIANT_COMPONENT[variant];
	const inputAdditionalProps = {};
	if (variant === "outlined") {
		if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") inputAdditionalProps.notched = InputLabelProps.shrink;
		inputAdditionalProps.label = label;
	} else if (variant === "filled") inputAdditionalProps.hiddenLabel = hiddenLabel;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickerTextFieldOwnerStateContext.Provider, {
		value: ownerState,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PickersTextFieldRoot, _extends({
			className: clsx(classes.root, className),
			ref: handleRootRef,
			focused,
			disabled,
			variant,
			error,
			color,
			fullWidth,
			required,
			ownerState
		}, other, { children: [
			label != null && label !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputLabel, _extends({
				htmlFor: id,
				id: inputLabelId
			}, InputLabelProps, { children: label })),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersInputComponent, _extends({
				elements,
				areAllSectionsEmpty,
				onClick,
				onKeyDown,
				onKeyUp,
				onInput,
				onPaste,
				onFocus,
				onBlur,
				endAdornment,
				startAdornment,
				tabIndex,
				contentEditable,
				value,
				onChange,
				id,
				fullWidth,
				inputProps,
				inputRef,
				sectionListRef,
				label,
				name,
				role: "group",
				"aria-labelledby": inputLabelId,
				"aria-describedby": helperTextId,
				"aria-live": helperTextId ? "polite" : void 0,
				"data-active-range-position": dataActiveRangePosition
			}, inputAdditionalProps, InputProps)),
			helperText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormHelperText, _extends({ id: helperTextId }, FormHelperTextProps, { children: helperText }))
		] }))
	});
});
PickersTextField.displayName = "PickersTextField";
PickersTextField.propTypes = {
	areAllSectionsEmpty: import_prop_types.default.bool.isRequired,
	className: import_prop_types.default.string,
	color: import_prop_types.default.oneOf([
		"error",
		"info",
		"primary",
		"secondary",
		"success",
		"warning"
	]),
	component: import_prop_types.default.elementType,
	contentEditable: import_prop_types.default.bool.isRequired,
	disabled: import_prop_types.default.bool.isRequired,
	elements: import_prop_types.default.arrayOf(import_prop_types.default.shape({
		after: import_prop_types.default.object.isRequired,
		before: import_prop_types.default.object.isRequired,
		container: import_prop_types.default.object.isRequired,
		content: import_prop_types.default.object.isRequired
	})).isRequired,
	endAdornment: import_prop_types.default.node,
	error: import_prop_types.default.bool.isRequired,
	focused: import_prop_types.default.bool,
	FormHelperTextProps: import_prop_types.default.object,
	fullWidth: import_prop_types.default.bool,
	helperText: import_prop_types.default.node,
	hiddenLabel: import_prop_types.default.bool,
	id: import_prop_types.default.string,
	InputLabelProps: import_prop_types.default.object,
	inputProps: import_prop_types.default.object,
	InputProps: import_prop_types.default.object,
	inputRef: refType,
	label: import_prop_types.default.node,
	margin: import_prop_types.default.oneOf([
		"dense",
		"none",
		"normal"
	]),
	name: import_prop_types.default.string,
	onBlur: import_prop_types.default.func.isRequired,
	onChange: import_prop_types.default.func.isRequired,
	onClick: import_prop_types.default.func.isRequired,
	onFocus: import_prop_types.default.func.isRequired,
	onInput: import_prop_types.default.func.isRequired,
	onKeyDown: import_prop_types.default.func.isRequired,
	onPaste: import_prop_types.default.func.isRequired,
	readOnly: import_prop_types.default.bool,
	required: import_prop_types.default.bool,
	sectionListRef: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.shape({ current: import_prop_types.default.shape({
		getRoot: import_prop_types.default.func.isRequired,
		getSectionContainer: import_prop_types.default.func.isRequired,
		getSectionContent: import_prop_types.default.func.isRequired,
		getSectionIndexFromDOMElement: import_prop_types.default.func.isRequired
	}) })]),
	size: import_prop_types.default.oneOf(["medium", "small"]),
	startAdornment: import_prop_types.default.node,
	style: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	value: import_prop_types.default.string.isRequired,
	variant: import_prop_types.default.oneOf([
		"filled",
		"outlined",
		"standard"
	])
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/components/PickerFieldUI.js
var _excluded$20 = ["enableAccessibleFieldDOMStructure"], _excluded2$5 = [
	"InputProps",
	"readOnly",
	"onClear",
	"clearable",
	"clearButtonPosition",
	"openPickerButtonPosition",
	"openPickerAriaLabel"
], _excluded3 = [
	"onPaste",
	"onKeyDown",
	"inputMode",
	"readOnly",
	"InputProps",
	"inputProps",
	"inputRef",
	"onClear",
	"clearable",
	"clearButtonPosition",
	"openPickerButtonPosition",
	"openPickerAriaLabel"
], _excluded4 = ["ownerState"], _excluded5 = ["ownerState"], _excluded6 = ["ownerState"], _excluded7 = ["ownerState"], _excluded8 = ["InputProps", "inputProps"];
var noop = () => {};
var cleanFieldResponse = (_ref) => {
	let { enableAccessibleFieldDOMStructure } = _ref, fieldResponse = _objectWithoutPropertiesLoose(_ref, _excluded$20);
	if (enableAccessibleFieldDOMStructure) {
		const { InputProps, readOnly, onClear, clearable, clearButtonPosition, openPickerButtonPosition, openPickerAriaLabel } = fieldResponse, other = _objectWithoutPropertiesLoose(fieldResponse, _excluded2$5);
		const mergedInputProps = other?.slotProps?.input ? mergeSlotProps(other?.slotProps?.input, InputProps) : noop;
		return {
			clearable,
			onClear,
			clearButtonPosition,
			openPickerButtonPosition,
			openPickerAriaLabel,
			textFieldProps: _extends({}, other, other?.slotProps?.input ? { slotProps: _extends({}, other?.slotProps, { input: (ownerState) => _extends({}, resolveComponentProps(mergedInputProps, ownerState), { readOnly }) }) } : { InputProps: _extends({}, InputProps ?? {}, { readOnly }) })
		};
	}
	const { onPaste, onKeyDown, inputMode, readOnly, InputProps, inputProps, inputRef, onClear, clearable, clearButtonPosition, openPickerButtonPosition, openPickerAriaLabel } = fieldResponse, other = _objectWithoutPropertiesLoose(fieldResponse, _excluded3);
	const mergedInputProps = other?.slotProps?.input ? mergeSlotProps(other?.slotProps?.input, InputProps) : noop;
	const mergedHtmlInputProps = other?.slotProps?.htmlInput ? mergeSlotProps(other?.slotProps?.htmlInput, inputProps) : noop;
	return {
		clearable,
		onClear,
		clearButtonPosition,
		openPickerButtonPosition,
		openPickerAriaLabel,
		textFieldProps: _extends({}, other, other?.slotProps?.input || other?.slotProps?.htmlInput ? { slotProps: _extends({}, other?.slotProps, {
			input: (ownerState) => _extends({}, resolveComponentProps(mergedInputProps, ownerState), { readOnly }),
			htmlInput: (ownerState) => _extends({}, resolveComponentProps(mergedHtmlInputProps, ownerState), {
				inputMode,
				onPaste,
				onKeyDown,
				ref: inputRef
			})
		}) } : {
			InputProps: _extends({}, InputProps ?? {}, { readOnly }),
			inputProps: _extends({}, inputProps ?? {}, {
				inputMode,
				onPaste,
				onKeyDown,
				ref: inputRef
			})
		})
	};
};
var PickerFieldUIContext = /* @__PURE__ */ import_react.createContext({
	slots: {},
	slotProps: {},
	inputRef: void 0
});
PickerFieldUIContext.displayName = "PickerFieldUIContext";
function PickerFieldUI(props) {
	const { fieldResponse, defaultOpenPickerIcon } = props;
	const translations = usePickerTranslations();
	const pickerContext = useNullablePickerContext();
	const pickerFieldUIContext = import_react.useContext(PickerFieldUIContext);
	const { textFieldProps, onClear, clearable, openPickerAriaLabel, clearButtonPosition: clearButtonPositionProp = "end", openPickerButtonPosition: openPickerButtonPositionProp = "end" } = cleanFieldResponse(fieldResponse);
	const ownerState = useFieldOwnerState(textFieldProps);
	const handleClickOpeningButton = useEventCallback((event) => {
		event.preventDefault();
		pickerContext?.setOpen((prev) => !prev);
	});
	const triggerStatus = pickerContext ? pickerContext.triggerStatus : "hidden";
	const clearButtonPosition = clearable ? clearButtonPositionProp : null;
	const openPickerButtonPosition = triggerStatus !== "hidden" ? openPickerButtonPositionProp : null;
	const TextField$1 = pickerFieldUIContext.slots.textField ?? (fieldResponse.enableAccessibleFieldDOMStructure === false ? TextField : PickersTextField);
	const InputAdornment$1 = pickerFieldUIContext.slots.inputAdornment ?? InputAdornment;
	const startInputAdornmentProps = _objectWithoutPropertiesLoose(useSlotProps({
		elementType: InputAdornment$1,
		externalSlotProps: pickerFieldUIContext.slotProps.inputAdornment,
		additionalProps: { position: "start" },
		ownerState: _extends({}, ownerState, { position: "start" })
	}), _excluded4);
	const endInputAdornmentProps = _objectWithoutPropertiesLoose(useSlotProps({
		elementType: InputAdornment$1,
		externalSlotProps: pickerFieldUIContext.slotProps.inputAdornment,
		additionalProps: { position: "end" },
		ownerState: _extends({}, ownerState, { position: "end" })
	}), _excluded5);
	const OpenPickerButton = pickerFieldUIContext.slots.openPickerButton ?? IconButton;
	const openPickerButtonProps = _objectWithoutPropertiesLoose(useSlotProps({
		elementType: OpenPickerButton,
		externalSlotProps: pickerFieldUIContext.slotProps.openPickerButton,
		additionalProps: {
			disabled: triggerStatus === "disabled",
			onClick: handleClickOpeningButton,
			"aria-label": openPickerAriaLabel,
			edge: textFieldProps.variant !== "standard" ? openPickerButtonPosition : false
		},
		ownerState
	}), _excluded6);
	const OpenPickerIcon = pickerFieldUIContext.slots.openPickerIcon ?? defaultOpenPickerIcon;
	const openPickerIconProps = useSlotProps({
		elementType: OpenPickerIcon,
		externalSlotProps: pickerFieldUIContext.slotProps.openPickerIcon,
		ownerState
	});
	const ClearButton = pickerFieldUIContext.slots.clearButton ?? IconButton;
	const clearButtonProps = _objectWithoutPropertiesLoose(useSlotProps({
		elementType: ClearButton,
		externalSlotProps: pickerFieldUIContext.slotProps.clearButton,
		className: "clearButton",
		additionalProps: {
			title: translations.fieldClearLabel,
			tabIndex: -1,
			onClick: onClear,
			disabled: fieldResponse.disabled || fieldResponse.readOnly,
			edge: textFieldProps.variant !== "standard" && clearButtonPosition !== openPickerButtonPosition ? clearButtonPosition : false
		},
		ownerState
	}), _excluded7);
	const ClearIcon$1 = pickerFieldUIContext.slots.clearIcon ?? ClearIcon;
	const clearIconProps = useSlotProps({
		elementType: ClearIcon$1,
		externalSlotProps: pickerFieldUIContext.slotProps.clearIcon,
		additionalProps: { fontSize: "small" },
		ownerState
	});
	textFieldProps.ref = useForkRef(textFieldProps.ref, pickerContext?.rootRef);
	const additionalTextFieldInputProps = {};
	const textFieldInputProps = resolveComponentProps(textFieldProps?.slotProps?.input ?? textFieldProps.InputProps, ownerState);
	if (pickerContext) additionalTextFieldInputProps.ref = pickerContext.triggerRef;
	if (!textFieldInputProps?.startAdornment && (clearButtonPosition === "start" || openPickerButtonPosition === "start")) additionalTextFieldInputProps.startAdornment = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputAdornment$1, _extends({}, startInputAdornmentProps, { children: [openPickerButtonPosition === "start" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenPickerButton, _extends({}, openPickerButtonProps, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenPickerIcon, _extends({}, openPickerIconProps)) })), clearButtonPosition === "start" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClearButton, _extends({}, clearButtonProps, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClearIcon$1, _extends({}, clearIconProps)) }))] }));
	if (!textFieldInputProps?.endAdornment && (clearButtonPosition === "end" || openPickerButtonPosition === "end")) additionalTextFieldInputProps.endAdornment = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputAdornment$1, _extends({}, endInputAdornmentProps, { children: [clearButtonPosition === "end" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClearButton, _extends({}, clearButtonProps, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClearIcon$1, _extends({}, clearIconProps)) })), openPickerButtonPosition === "end" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenPickerButton, _extends({}, openPickerButtonProps, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenPickerIcon, _extends({}, openPickerIconProps)) }))] }));
	if (!additionalTextFieldInputProps?.endAdornment && !additionalTextFieldInputProps?.startAdornment && pickerFieldUIContext.slots.inputAdornment) additionalTextFieldInputProps.endAdornment = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputAdornment$1, _extends({}, endInputAdornmentProps));
	if (clearButtonPosition != null) textFieldProps.sx = [{
		"& .clearButton": { opacity: 1 },
		"@media (pointer: fine)": {
			"& .clearButton": { opacity: 0 },
			"&:hover, &:focus-within": { ".clearButton": { opacity: 1 } }
		}
	}, ...Array.isArray(textFieldProps.sx) ? textFieldProps.sx : [textFieldProps.sx]];
	const resolvedTextFieldInputProps = textFieldProps?.slotProps?.input ? resolveComponentProps(mergeSlotProps(textFieldInputProps, additionalTextFieldInputProps), ownerState) : _extends({}, textFieldInputProps, additionalTextFieldInputProps);
	textFieldProps.inputProps = textFieldProps?.slotProps?.htmlInput ? resolveComponentProps(textFieldProps.slotProps.htmlInput, ownerState) : textFieldProps.inputProps;
	delete textFieldProps?.slotProps?.input;
	if (fieldResponse.enableAccessibleFieldDOMStructure) delete textFieldProps?.slotProps;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField$1, _extends({}, textFieldProps, { InputProps: resolvedTextFieldInputProps }));
}
function mergeSlotProps(slotPropsA, slotPropsB) {
	if (!slotPropsA) return slotPropsB;
	if (!slotPropsB) return slotPropsA;
	return (ownerState) => {
		return _extends({}, resolveComponentProps(slotPropsB, ownerState), resolveComponentProps(slotPropsA, ownerState));
	};
}
/**
* The `textField` slot props cannot be handled inside `PickerFieldUI` because it would be a breaking change to not pass the enriched props to `useField`.
* Once the non-accessible DOM structure will be removed, we will be able to remove the `textField` slot and clean this logic.
*/
function useFieldTextFieldProps(parameters) {
	const { ref, externalForwardedProps, slotProps } = parameters;
	const pickerFieldUIContext = import_react.useContext(PickerFieldUIContext);
	const pickerContext = useNullablePickerContext();
	const ownerState = useFieldOwnerState(externalForwardedProps);
	const { InputProps, inputProps } = externalForwardedProps, otherExternalForwardedProps = _objectWithoutPropertiesLoose(externalForwardedProps, _excluded8);
	const textFieldProps = useSlotProps({
		elementType: PickersTextField,
		externalSlotProps: mergeSlotProps(pickerFieldUIContext.slotProps.textField, slotProps?.textField),
		externalForwardedProps: otherExternalForwardedProps,
		additionalProps: {
			ref,
			sx: pickerContext?.rootSx,
			label: pickerContext?.label,
			name: pickerContext?.name,
			className: pickerContext?.rootClassName,
			inputRef: pickerFieldUIContext.inputRef
		},
		ownerState
	});
	textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
	textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
	return textFieldProps;
}
function PickerFieldUIContextProvider(props) {
	const { slots = {}, slotProps = {}, inputRef, children } = props;
	const contextValue = import_react.useMemo(() => ({
		inputRef,
		slots: {
			openPickerButton: slots.openPickerButton,
			openPickerIcon: slots.openPickerIcon,
			textField: slots.textField,
			inputAdornment: slots.inputAdornment,
			clearIcon: slots.clearIcon,
			clearButton: slots.clearButton
		},
		slotProps: {
			openPickerButton: slotProps.openPickerButton,
			openPickerIcon: slotProps.openPickerIcon,
			textField: slotProps.textField,
			inputAdornment: slotProps.inputAdornment,
			clearIcon: slotProps.clearIcon,
			clearButton: slotProps.clearButton
		}
	}), [
		inputRef,
		slots.openPickerButton,
		slots.openPickerIcon,
		slots.textField,
		slots.inputAdornment,
		slots.clearIcon,
		slots.clearButton,
		slotProps.openPickerButton,
		slotProps.openPickerIcon,
		slotProps.textField,
		slotProps.inputAdornment,
		slotProps.clearIcon,
		slotProps.clearButton
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickerFieldUIContext.Provider, {
		value: contextValue,
		children
	});
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DateField/DateField.js
var _excluded$19 = ["slots", "slotProps"];
/**
* Demos:
*
* - [DateField](http://mui.com/x/react-date-pickers/date-field/)
* - [Fields](https://mui.com/x/react-date-pickers/fields/)
*
* API:
*
* - [DateField API](https://mui.com/x/api/date-pickers/date-field/)
*/
var DateField = /* @__PURE__ */ import_react.forwardRef(function DateField(inProps, inRef) {
	const themeProps = useThemeProps({
		props: inProps,
		name: "MuiDateField"
	});
	const { slots, slotProps } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded$19);
	const fieldResponse = useDateField(useFieldTextFieldProps({
		slotProps,
		ref: inRef,
		externalForwardedProps: other
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickerFieldUIContextProvider, {
		slots,
		slotProps,
		inputRef: other.inputRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickerFieldUI, {
			fieldResponse,
			defaultOpenPickerIcon: CalendarIcon
		})
	});
});
DateField.displayName = "DateField";
DateField.propTypes = {
	autoFocus: import_prop_types.default.bool,
	className: import_prop_types.default.string,
	clearable: import_prop_types.default.bool,
	clearButtonPosition: import_prop_types.default.oneOf(["end", "start"]),
	color: import_prop_types.default.oneOf([
		"error",
		"info",
		"primary",
		"secondary",
		"success",
		"warning"
	]),
	component: import_prop_types.default.elementType,
	defaultValue: import_prop_types.default.object,
	disabled: import_prop_types.default.bool,
	disableFuture: import_prop_types.default.bool,
	disablePast: import_prop_types.default.bool,
	enableAccessibleFieldDOMStructure: import_prop_types.default.bool,
	focused: import_prop_types.default.bool,
	format: import_prop_types.default.string,
	formatDensity: import_prop_types.default.oneOf(["dense", "spacious"]),
	FormHelperTextProps: import_prop_types.default.object,
	fullWidth: import_prop_types.default.bool,
	helperText: import_prop_types.default.node,
	hiddenLabel: import_prop_types.default.bool,
	id: import_prop_types.default.string,
	InputLabelProps: import_prop_types.default.object,
	inputProps: import_prop_types.default.object,
	InputProps: import_prop_types.default.object,
	inputRef: refType,
	label: import_prop_types.default.node,
	margin: import_prop_types.default.oneOf([
		"dense",
		"none",
		"normal"
	]),
	maxDate: import_prop_types.default.object,
	minDate: import_prop_types.default.object,
	name: import_prop_types.default.string,
	onBlur: import_prop_types.default.func,
	onChange: import_prop_types.default.func,
	onClear: import_prop_types.default.func,
	onError: import_prop_types.default.func,
	onFocus: import_prop_types.default.func,
	onSelectedSectionsChange: import_prop_types.default.func,
	openPickerButtonPosition: import_prop_types.default.oneOf(["end", "start"]),
	readOnly: import_prop_types.default.bool,
	referenceDate: import_prop_types.default.object,
	required: import_prop_types.default.bool,
	selectedSections: import_prop_types.default.oneOfType([import_prop_types.default.oneOf([
		"all",
		"day",
		"empty",
		"hours",
		"meridiem",
		"minutes",
		"month",
		"seconds",
		"weekDay",
		"year"
	]), import_prop_types.default.number]),
	shouldDisableDate: import_prop_types.default.func,
	shouldDisableMonth: import_prop_types.default.func,
	shouldDisableYear: import_prop_types.default.func,
	shouldRespectLeadingZeros: import_prop_types.default.bool,
	size: import_prop_types.default.oneOf(["medium", "small"]),
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object,
	style: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	timezone: import_prop_types.default.string,
	unstableFieldRef: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
	value: import_prop_types.default.object,
	variant: import_prop_types.default.oneOf([
		"filled",
		"outlined",
		"standard"
	])
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DateCalendar/useIsDateDisabled.js
var useIsDateDisabled = ({ shouldDisableDate, shouldDisableMonth, shouldDisableYear, minDate, maxDate, disableFuture, disablePast, timezone }) => {
	const adapter = usePickerAdapter();
	return import_react.useCallback((day) => validateDate({
		adapter,
		value: day,
		timezone,
		props: {
			shouldDisableDate,
			shouldDisableMonth,
			shouldDisableYear,
			minDate,
			maxDate,
			disableFuture,
			disablePast
		}
	}) !== null, [
		adapter,
		shouldDisableDate,
		shouldDisableMonth,
		shouldDisableYear,
		minDate,
		maxDate,
		disableFuture,
		disablePast,
		timezone
	]);
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DateCalendar/useCalendarState.js
var createCalendarStateReducer = (reduceAnimations, adapter) => (state, action) => {
	switch (action.type) {
		case "setVisibleDate": return _extends({}, state, {
			slideDirection: action.direction,
			currentMonth: action.month,
			isMonthSwitchingAnimating: !adapter.isSameMonth(action.month, state.currentMonth) && !reduceAnimations && !action.skipAnimation,
			focusedDay: action.focusedDay
		});
		case "changeMonthTimezone": {
			const newTimezone = action.newTimezone;
			if (adapter.getTimezone(state.currentMonth) === newTimezone) return state;
			let newCurrentMonth = adapter.setTimezone(state.currentMonth, newTimezone);
			if (adapter.getMonth(newCurrentMonth) !== adapter.getMonth(state.currentMonth)) newCurrentMonth = adapter.setMonth(newCurrentMonth, adapter.getMonth(state.currentMonth));
			return _extends({}, state, { currentMonth: newCurrentMonth });
		}
		case "finishMonthSwitchingAnimation": return _extends({}, state, { isMonthSwitchingAnimating: false });
		default: throw new Error("missing support");
	}
};
var useCalendarState = (params) => {
	const { value, referenceDate: referenceDateProp, disableFuture, disablePast, maxDate, minDate, onMonthChange, onYearChange, reduceAnimations, shouldDisableDate, timezone, getCurrentMonthFromVisibleDate } = params;
	const adapter = usePickerAdapter();
	const reducerFn = import_react.useRef(createCalendarStateReducer(Boolean(reduceAnimations), adapter)).current;
	const referenceDate = import_react.useMemo(() => {
		return singleItemValueManager.getInitialReferenceValue({
			value,
			adapter,
			timezone,
			props: params,
			referenceDate: referenceDateProp,
			granularity: SECTION_TYPE_GRANULARITY.day
		});
	}, [referenceDateProp, timezone]);
	const [calendarState, dispatch] = import_react.useReducer(reducerFn, {
		isMonthSwitchingAnimating: false,
		focusedDay: referenceDate,
		currentMonth: adapter.setDate(referenceDate, 1),
		slideDirection: "left"
	});
	const isDateDisabled = useIsDateDisabled({
		shouldDisableDate,
		minDate,
		maxDate,
		disableFuture,
		disablePast,
		timezone
	});
	import_react.useEffect(() => {
		dispatch({
			type: "changeMonthTimezone",
			newTimezone: adapter.getTimezone(referenceDate)
		});
	}, [referenceDate, adapter]);
	return {
		referenceDate,
		calendarState,
		setVisibleDate: useEventCallback(({ target, reason }) => {
			if (reason === "cell-interaction" && calendarState.focusedDay != null && adapter.isSameDay(target, calendarState.focusedDay)) return;
			const skipAnimation = reason === "cell-interaction";
			let month;
			let focusedDay;
			if (reason === "cell-interaction") {
				month = getCurrentMonthFromVisibleDate(target, calendarState.currentMonth);
				focusedDay = target;
			} else {
				month = adapter.isSameMonth(target, calendarState.currentMonth) ? calendarState.currentMonth : adapter.startOfMonth(target);
				focusedDay = target;
				if (isDateDisabled(focusedDay)) {
					const startOfMonth = adapter.startOfMonth(target);
					const endOfMonth = adapter.endOfMonth(target);
					focusedDay = findClosestEnabledDate({
						adapter,
						date: focusedDay,
						minDate: adapter.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
						maxDate: adapter.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
						disablePast,
						disableFuture,
						isDateDisabled,
						timezone
					});
				}
			}
			const hasChangedMonth = !adapter.isSameMonth(calendarState.currentMonth, month);
			const hasChangedYear = !adapter.isSameYear(calendarState.currentMonth, month);
			if (hasChangedMonth) onMonthChange?.(month);
			if (hasChangedYear) onYearChange?.(adapter.startOfYear(month));
			dispatch({
				type: "setVisibleDate",
				month,
				direction: adapter.isAfterDay(month, calendarState.currentMonth) ? "left" : "right",
				focusedDay: calendarState.focusedDay != null && focusedDay != null && adapter.isSameDay(focusedDay, calendarState.focusedDay) ? calendarState.focusedDay : focusedDay,
				skipAnimation
			});
		}),
		isDateDisabled,
		onMonthSwitchingAnimationEnd: import_react.useCallback(() => {
			dispatch({ type: "finishMonthSwitchingAnimation" });
		}, [])
	};
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DateCalendar/pickersFadeTransitionGroupClasses.js
var getPickersFadeTransitionGroupUtilityClass = (slot) => generateUtilityClass("MuiPickersFadeTransitionGroup", slot);
var pickersFadeTransitionGroupClasses = generateUtilityClasses("MuiPickersFadeTransitionGroup", ["root"]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DateCalendar/PickersFadeTransitionGroup.js
var _excluded$18 = ["children"];
var useUtilityClasses$13 = (classes) => {
	return composeClasses({ root: ["root"] }, getPickersFadeTransitionGroupUtilityClass, classes);
};
var PickersFadeTransitionGroupRoot = styled(TransitionGroup, {
	name: "MuiPickersFadeTransitionGroup",
	slot: "Root"
})({
	display: "block",
	position: "relative"
});
/**
* @ignore - do not document.
*/
function PickersFadeTransitionGroup(inProps) {
	const props = useThemeProps({
		props: inProps,
		name: "MuiPickersFadeTransitionGroup"
	});
	const { className, reduceAnimations, transKey, classes: classesProp } = props;
	const { children } = props, other = _objectWithoutPropertiesLoose(props, _excluded$18);
	const classes = useUtilityClasses$13(classesProp);
	const theme = useTheme();
	if (reduceAnimations) return children;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersFadeTransitionGroupRoot, {
		className: clsx(classes.root, className),
		ownerState: other,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fade, {
			appear: false,
			mountOnEnter: true,
			unmountOnExit: true,
			timeout: {
				appear: theme.transitions.duration.enteringScreen,
				enter: theme.transitions.duration.enteringScreen,
				exit: 0
			},
			children
		}, transKey)
	});
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DateCalendar/pickersSlideTransitionClasses.js
var getPickersSlideTransitionUtilityClass = (slot) => generateUtilityClass("MuiPickersSlideTransition", slot);
var pickersSlideTransitionClasses = generateUtilityClasses("MuiPickersSlideTransition", [
	"root",
	"slideEnter-left",
	"slideEnter-right",
	"slideEnterActive",
	"slideExit",
	"slideExitActiveLeft-left",
	"slideExitActiveLeft-right"
]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DateCalendar/PickersSlideTransition.js
var _excluded$17 = [
	"children",
	"className",
	"reduceAnimations",
	"slideDirection",
	"transKey",
	"classes"
];
var useUtilityClasses$12 = (classes, ownerState) => {
	const { slideDirection } = ownerState;
	return composeClasses({
		root: ["root"],
		exit: ["slideExit"],
		enterActive: ["slideEnterActive"],
		enter: [`slideEnter-${slideDirection}`],
		exitActive: [`slideExitActiveLeft-${slideDirection}`]
	}, getPickersSlideTransitionUtilityClass, classes);
};
var PickersSlideTransitionRoot = styled(TransitionGroup, {
	name: "MuiPickersSlideTransition",
	slot: "Root",
	overridesResolver: (_, styles) => [
		styles.root,
		{ [`.${pickersSlideTransitionClasses["slideEnter-left"]}`]: styles["slideEnter-left"] },
		{ [`.${pickersSlideTransitionClasses["slideEnter-right"]}`]: styles["slideEnter-right"] },
		{ [`.${pickersSlideTransitionClasses.slideEnterActive}`]: styles.slideEnterActive },
		{ [`.${pickersSlideTransitionClasses.slideExit}`]: styles.slideExit },
		{ [`.${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: styles["slideExitActiveLeft-left"] },
		{ [`.${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: styles["slideExitActiveLeft-right"] }
	]
})(({ theme }) => {
	const slideTransition = theme.transitions.create("transform", {
		duration: theme.transitions.duration.complex,
		easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
	});
	return {
		display: "block",
		position: "relative",
		overflowX: "hidden",
		"& > *": {
			position: "absolute",
			top: 0,
			right: 0,
			left: 0
		},
		[`& .${pickersSlideTransitionClasses["slideEnter-left"]}`]: {
			willChange: "transform",
			transform: "translate(100%)",
			zIndex: 1
		},
		[`& .${pickersSlideTransitionClasses["slideEnter-right"]}`]: {
			willChange: "transform",
			transform: "translate(-100%)",
			zIndex: 1
		},
		[`& .${pickersSlideTransitionClasses.slideEnterActive}`]: {
			transform: "translate(0%)",
			transition: slideTransition
		},
		[`& .${pickersSlideTransitionClasses.slideExit}`]: { transform: "translate(0%)" },
		[`& .${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: {
			willChange: "transform",
			transform: "translate(-100%)",
			transition: slideTransition,
			zIndex: 0
		},
		[`& .${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: {
			willChange: "transform",
			transform: "translate(100%)",
			transition: slideTransition,
			zIndex: 0
		}
	};
});
/**
* @ignore - do not document.
*/
function PickersSlideTransition(inProps) {
	const props = useThemeProps({
		props: inProps,
		name: "MuiPickersSlideTransition"
	});
	const { children, className, reduceAnimations, slideDirection, transKey, classes: classesProp } = props, other = _objectWithoutPropertiesLoose(props, _excluded$17);
	const { ownerState: pickerOwnerState } = usePickerPrivateContext();
	const ownerState = _extends({}, pickerOwnerState, { slideDirection });
	const classes = useUtilityClasses$12(classesProp, ownerState);
	const theme = useTheme();
	if (reduceAnimations) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: clsx(classes.root, className),
		children
	});
	const transitionClasses = {
		exit: classes.exit,
		enterActive: classes.enterActive,
		enter: classes.enter,
		exitActive: classes.exitActive
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersSlideTransitionRoot, {
		className: clsx(classes.root, className),
		childFactory: (element) => /* @__PURE__ */ import_react.cloneElement(element, { classNames: transitionClasses }),
		role: "presentation",
		ownerState,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CSSTransition, _extends({
			mountOnEnter: true,
			unmountOnExit: true,
			timeout: theme.transitions.duration.complex,
			classNames: transitionClasses
		}, other, { children }), transKey)
	});
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DateCalendar/dayCalendarClasses.js
var getDayCalendarUtilityClass = (slot) => generateUtilityClass("MuiDayCalendar", slot);
var dayCalendarClasses = generateUtilityClasses("MuiDayCalendar", [
	"root",
	"header",
	"weekDayLabel",
	"loadingContainer",
	"slideTransition",
	"monthContainer",
	"weekContainer",
	"weekNumberLabel",
	"weekNumber"
]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DateCalendar/DayCalendar.js
var _excluded$16 = [
	"parentProps",
	"day",
	"focusedDay",
	"selectedDays",
	"isDateDisabled",
	"currentMonthNumber",
	"isViewFocused"
], _excluded2$4 = ["ownerState"];
var useUtilityClasses$11 = (classes) => {
	return composeClasses({
		root: ["root"],
		header: ["header"],
		weekDayLabel: ["weekDayLabel"],
		loadingContainer: ["loadingContainer"],
		slideTransition: ["slideTransition"],
		monthContainer: ["monthContainer"],
		weekContainer: ["weekContainer"],
		weekNumberLabel: ["weekNumberLabel"],
		weekNumber: ["weekNumber"]
	}, getDayCalendarUtilityClass, classes);
};
var weeksContainerHeight = 240;
var PickersCalendarDayRoot = styled("div", {
	name: "MuiDayCalendar",
	slot: "Root"
})({});
var PickersCalendarDayHeader = styled("div", {
	name: "MuiDayCalendar",
	slot: "Header"
})({
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
});
var PickersCalendarWeekDayLabel = styled(Typography, {
	name: "MuiDayCalendar",
	slot: "WeekDayLabel"
})(({ theme }) => ({
	width: 36,
	height: 40,
	margin: "0 2px",
	textAlign: "center",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	color: (theme.vars || theme).palette.text.secondary
}));
var PickersCalendarWeekNumberLabel = styled(Typography, {
	name: "MuiDayCalendar",
	slot: "WeekNumberLabel"
})(({ theme }) => ({
	width: 36,
	height: 40,
	margin: "0 2px",
	textAlign: "center",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	color: (theme.vars || theme).palette.text.disabled
}));
var PickersCalendarWeekNumber = styled(Typography, {
	name: "MuiDayCalendar",
	slot: "WeekNumber"
})(({ theme }) => _extends({}, theme.typography.caption, {
	width: 36,
	height: 36,
	padding: 0,
	margin: `0 2px`,
	color: (theme.vars || theme).palette.text.disabled,
	fontSize: "0.75rem",
	alignItems: "center",
	justifyContent: "center",
	display: "inline-flex"
}));
var PickersCalendarLoadingContainer = styled("div", {
	name: "MuiDayCalendar",
	slot: "LoadingContainer"
})({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: weeksContainerHeight
});
var PickersCalendarSlideTransition = styled(PickersSlideTransition, {
	name: "MuiDayCalendar",
	slot: "SlideTransition"
})({ minHeight: weeksContainerHeight });
var PickersCalendarWeekContainer = styled("div", {
	name: "MuiDayCalendar",
	slot: "MonthContainer"
})({ overflow: "hidden" });
var PickersCalendarWeek = styled("div", {
	name: "MuiDayCalendar",
	slot: "WeekContainer"
})({
	margin: `2px 0`,
	display: "flex",
	justifyContent: "center"
});
function WrappedDay(_ref) {
	let { parentProps, day, focusedDay, selectedDays, isDateDisabled, currentMonthNumber, isViewFocused } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded$16);
	const { disabled, disableHighlightToday, isMonthSwitchingAnimating, showDaysOutsideCurrentMonth, slots, slotProps, timezone } = parentProps;
	const adapter = usePickerAdapter();
	const now = useNow(timezone);
	const isFocusableDay = focusedDay != null && adapter.isSameDay(day, focusedDay);
	const isFocusedDay = isViewFocused && isFocusableDay;
	const isSelected = selectedDays.some((selectedDay) => adapter.isSameDay(selectedDay, day));
	const isToday = adapter.isSameDay(day, now);
	const isDisabled = import_react.useMemo(() => disabled || isDateDisabled(day), [
		disabled,
		isDateDisabled,
		day
	]);
	const isOutsideCurrentMonth = import_react.useMemo(() => adapter.getMonth(day) !== currentMonthNumber, [
		adapter,
		day,
		currentMonthNumber
	]);
	const ownerState = usePickerDayOwnerState({
		day,
		selected: isSelected,
		disabled: isDisabled,
		today: isToday,
		outsideCurrentMonth: isOutsideCurrentMonth,
		disableMargin: void 0,
		disableHighlightToday,
		showDaysOutsideCurrentMonth
	});
	const Day = slots?.day ?? PickersDay;
	const dayProps = _objectWithoutPropertiesLoose(useSlotProps({
		elementType: Day,
		externalSlotProps: slotProps?.day,
		additionalProps: _extends({
			disableHighlightToday,
			showDaysOutsideCurrentMonth,
			role: "gridcell",
			isAnimating: isMonthSwitchingAnimating,
			"data-timestamp": adapter.toJsDate(day).valueOf()
		}, other),
		ownerState: _extends({}, ownerState, {
			day,
			isDayDisabled: isDisabled,
			isDaySelected: isSelected
		})
	}), _excluded2$4);
	const isFirstVisibleCell = import_react.useMemo(() => {
		const startOfMonth = adapter.startOfMonth(adapter.setMonth(day, currentMonthNumber));
		if (!showDaysOutsideCurrentMonth) return adapter.isSameDay(day, startOfMonth);
		return adapter.isSameDay(day, adapter.startOfWeek(startOfMonth));
	}, [
		currentMonthNumber,
		day,
		showDaysOutsideCurrentMonth,
		adapter
	]);
	const isLastVisibleCell = import_react.useMemo(() => {
		const endOfMonth = adapter.endOfMonth(adapter.setMonth(day, currentMonthNumber));
		if (!showDaysOutsideCurrentMonth) return adapter.isSameDay(day, endOfMonth);
		return adapter.isSameDay(day, adapter.endOfWeek(endOfMonth));
	}, [
		currentMonthNumber,
		day,
		showDaysOutsideCurrentMonth,
		adapter
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Day, _extends({}, dayProps, {
		day,
		disabled: isDisabled,
		autoFocus: !isOutsideCurrentMonth && isFocusedDay,
		today: isToday,
		outsideCurrentMonth: isOutsideCurrentMonth,
		isFirstVisibleCell,
		isLastVisibleCell,
		selected: isSelected,
		tabIndex: isFocusableDay ? 0 : -1,
		"aria-selected": isSelected,
		"aria-current": isToday ? "date" : void 0
	}));
}
/**
* @ignore - do not document.
*/
function DayCalendar(inProps) {
	const props = useThemeProps({
		props: inProps,
		name: "MuiDayCalendar"
	});
	const adapter = usePickerAdapter();
	const { onFocusedDayChange, className, classes: classesProp, currentMonth, selectedDays, focusedDay, loading, onSelectedDaysChange, onMonthSwitchingAnimationEnd, readOnly, reduceAnimations, renderLoading = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "..." }), slideDirection, TransitionProps, disablePast, disableFuture, minDate, maxDate, shouldDisableDate, shouldDisableMonth, shouldDisableYear, dayOfWeekFormatter = (date) => adapter.format(date, "weekdayShort").charAt(0).toUpperCase(), hasFocus, onFocusedViewChange, gridLabelId, displayWeekNumber, fixedWeekNumber, timezone } = props;
	const now = useNow(timezone);
	const classes = useUtilityClasses$11(classesProp);
	const isRtl = useRtl();
	const isDateDisabled = useIsDateDisabled({
		shouldDisableDate,
		shouldDisableMonth,
		shouldDisableYear,
		minDate,
		maxDate,
		disablePast,
		disableFuture,
		timezone
	});
	const translations = usePickerTranslations();
	const handleDaySelect = useEventCallback((day) => {
		if (readOnly) return;
		onSelectedDaysChange(day);
	});
	const focusDay = (day) => {
		if (!isDateDisabled(day)) {
			onFocusedDayChange(day);
			onFocusedViewChange?.(true);
		}
	};
	const handleKeyDown = useEventCallback((event, day) => {
		switch (event.key) {
			case "ArrowUp":
				focusDay(adapter.addDays(day, -7));
				event.preventDefault();
				break;
			case "ArrowDown":
				focusDay(adapter.addDays(day, 7));
				event.preventDefault();
				break;
			case "ArrowLeft": {
				const newFocusedDayDefault = adapter.addDays(day, isRtl ? 1 : -1);
				const nextAvailableMonth = adapter.addMonths(day, isRtl ? 1 : -1);
				focusDay(findClosestEnabledDate({
					adapter,
					date: newFocusedDayDefault,
					minDate: isRtl ? newFocusedDayDefault : adapter.startOfMonth(nextAvailableMonth),
					maxDate: isRtl ? adapter.endOfMonth(nextAvailableMonth) : newFocusedDayDefault,
					isDateDisabled,
					timezone
				}) || newFocusedDayDefault);
				event.preventDefault();
				break;
			}
			case "ArrowRight": {
				const newFocusedDayDefault = adapter.addDays(day, isRtl ? -1 : 1);
				const nextAvailableMonth = adapter.addMonths(day, isRtl ? -1 : 1);
				focusDay(findClosestEnabledDate({
					adapter,
					date: newFocusedDayDefault,
					minDate: isRtl ? adapter.startOfMonth(nextAvailableMonth) : newFocusedDayDefault,
					maxDate: isRtl ? newFocusedDayDefault : adapter.endOfMonth(nextAvailableMonth),
					isDateDisabled,
					timezone
				}) || newFocusedDayDefault);
				event.preventDefault();
				break;
			}
			case "Home":
				focusDay(adapter.startOfWeek(day));
				event.preventDefault();
				break;
			case "End":
				focusDay(adapter.endOfWeek(day));
				event.preventDefault();
				break;
			case "PageUp":
				focusDay(adapter.addMonths(day, 1));
				event.preventDefault();
				break;
			case "PageDown":
				focusDay(adapter.addMonths(day, -1));
				event.preventDefault();
				break;
			case "Enter":
			case " ":
				handleDaySelect(day);
				event.preventDefault();
				break;
			default: break;
		}
	});
	const handleFocus = useEventCallback((event, day) => focusDay(day));
	const handleBlur = useEventCallback((event, day) => {
		if (focusedDay != null && adapter.isSameDay(focusedDay, day)) onFocusedViewChange?.(false);
	});
	const currentMonthNumber = adapter.getMonth(currentMonth);
	const currentYearNumber = adapter.getYear(currentMonth);
	const validSelectedDays = import_react.useMemo(() => selectedDays.filter((day) => !!day).map((day) => adapter.startOfDay(day)), [adapter, selectedDays]);
	const transitionKey = `${currentYearNumber}-${currentMonthNumber}`;
	const slideNodeRef = import_react.useMemo(() => /* @__PURE__ */ import_react.createRef(), [transitionKey]);
	const weeksToDisplay = import_react.useMemo(() => {
		const toDisplay = adapter.getWeekArray(currentMonth);
		let nextMonth = adapter.addMonths(currentMonth, 1);
		while (fixedWeekNumber && toDisplay.length < fixedWeekNumber) {
			const additionalWeeks = adapter.getWeekArray(nextMonth);
			const hasCommonWeek = adapter.isSameDay(toDisplay[toDisplay.length - 1][0], additionalWeeks[0][0]);
			additionalWeeks.slice(hasCommonWeek ? 1 : 0).forEach((week) => {
				if (toDisplay.length < fixedWeekNumber) toDisplay.push(week);
			});
			nextMonth = adapter.addMonths(nextMonth, 1);
		}
		return toDisplay;
	}, [
		currentMonth,
		fixedWeekNumber,
		adapter
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PickersCalendarDayRoot, {
		role: "grid",
		"aria-labelledby": gridLabelId,
		className: classes.root,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PickersCalendarDayHeader, {
			role: "row",
			className: classes.header,
			children: [displayWeekNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersCalendarWeekNumberLabel, {
				variant: "caption",
				role: "columnheader",
				"aria-label": translations.calendarWeekNumberHeaderLabel,
				className: classes.weekNumberLabel,
				children: translations.calendarWeekNumberHeaderText
			}), getWeekdays(adapter, now).map((weekday, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersCalendarWeekDayLabel, {
				variant: "caption",
				role: "columnheader",
				"aria-label": adapter.format(weekday, "weekday"),
				className: classes.weekDayLabel,
				children: dayOfWeekFormatter(weekday)
			}, i.toString()))]
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersCalendarLoadingContainer, {
			className: classes.loadingContainer,
			children: renderLoading()
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersCalendarSlideTransition, _extends({
			transKey: transitionKey,
			onExited: onMonthSwitchingAnimationEnd,
			reduceAnimations,
			slideDirection,
			className: clsx(className, classes.slideTransition)
		}, TransitionProps, {
			nodeRef: slideNodeRef,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersCalendarWeekContainer, {
				ref: slideNodeRef,
				role: "rowgroup",
				className: classes.monthContainer,
				children: weeksToDisplay.map((week, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PickersCalendarWeek, {
					role: "row",
					className: classes.weekContainer,
					"aria-rowindex": index + 1,
					children: [displayWeekNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersCalendarWeekNumber, {
						className: classes.weekNumber,
						role: "rowheader",
						"aria-label": translations.calendarWeekNumberAriaLabelText(adapter.getWeekNumber(week[0])),
						children: translations.calendarWeekNumberText(adapter.getWeekNumber(week[0]))
					}), week.map((day, dayIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WrappedDay, {
						parentProps: props,
						day,
						selectedDays: validSelectedDays,
						isViewFocused: hasFocus,
						focusedDay,
						onKeyDown: handleKeyDown,
						onFocus: handleFocus,
						onBlur: handleBlur,
						onDaySelect: handleDaySelect,
						isDateDisabled,
						currentMonthNumber,
						"aria-colindex": dayIndex + 1
					}, day.toString()))]
				}, `week-${week[0]}`))
			})
		}))]
	});
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/MonthCalendar/monthCalendarClasses.js
function getMonthCalendarUtilityClass(slot) {
	return generateUtilityClass("MuiMonthCalendar", slot);
}
var monthCalendarClasses = generateUtilityClasses("MuiMonthCalendar", [
	"root",
	"button",
	"disabled",
	"selected"
]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/MonthCalendar/MonthCalendarButton.js
var _excluded$15 = [
	"autoFocus",
	"classes",
	"disabled",
	"selected",
	"value",
	"onClick",
	"onKeyDown",
	"onFocus",
	"onBlur",
	"slots",
	"slotProps"
];
var useUtilityClasses$10 = (classes, ownerState) => {
	return composeClasses({ button: [
		"button",
		ownerState.isMonthDisabled && "disabled",
		ownerState.isMonthSelected && "selected"
	] }, getMonthCalendarUtilityClass, classes);
};
var DefaultMonthButton = styled("button", {
	name: "MuiMonthCalendar",
	slot: "Button",
	overridesResolver: (_, styles) => [
		styles.button,
		{ [`&.${monthCalendarClasses.disabled}`]: styles.disabled },
		{ [`&.${monthCalendarClasses.selected}`]: styles.selected }
	]
})(({ theme }) => _extends({
	color: "unset",
	backgroundColor: "transparent",
	border: 0,
	outline: 0
}, theme.typography.subtitle1, {
	height: 36,
	width: 72,
	borderRadius: 18,
	cursor: "pointer",
	"&:focus": { backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity) },
	"&:hover": { backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity) },
	"&:disabled": {
		cursor: "auto",
		pointerEvents: "none"
	},
	[`&.${monthCalendarClasses.disabled}`]: { color: (theme.vars || theme).palette.text.secondary },
	[`&.${monthCalendarClasses.selected}`]: {
		color: (theme.vars || theme).palette.primary.contrastText,
		backgroundColor: (theme.vars || theme).palette.primary.main,
		"&:focus, &:hover": { backgroundColor: (theme.vars || theme).palette.primary.dark }
	}
}));
/**
* @ignore - do not document.
*/
var MonthCalendarButton = /* @__PURE__ */ import_react.memo(function MonthCalendarButton(props) {
	const { autoFocus, classes: classesProp, disabled, selected, value, onClick, onKeyDown, onFocus, onBlur, slots, slotProps } = props, other = _objectWithoutPropertiesLoose(props, _excluded$15);
	const ref = import_react.useRef(null);
	const { ownerState: pickerOwnerState } = usePickerPrivateContext();
	const ownerState = _extends({}, pickerOwnerState, {
		isMonthDisabled: disabled,
		isMonthSelected: selected
	});
	const classes = useUtilityClasses$10(classesProp, ownerState);
	useEnhancedEffect(() => {
		if (autoFocus) ref.current?.focus();
	}, [autoFocus]);
	const MonthButton = slots?.monthButton ?? DefaultMonthButton;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthButton, _extends({}, useSlotProps({
		elementType: MonthButton,
		externalSlotProps: slotProps?.monthButton,
		externalForwardedProps: other,
		additionalProps: {
			disabled,
			ref,
			type: "button",
			role: "radio",
			"aria-checked": selected,
			onClick: (event) => onClick(event, value),
			onKeyDown: (event) => onKeyDown(event, value),
			onFocus: (event) => onFocus(event, value),
			onBlur: (event) => onBlur(event, value)
		},
		ownerState,
		className: classes.button
	})));
});
MonthCalendarButton.displayName = "MonthCalendarButton";
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/MonthCalendar/MonthCalendar.js
var _excluded$14 = [
	"autoFocus",
	"className",
	"currentMonth",
	"classes",
	"value",
	"defaultValue",
	"referenceDate",
	"disabled",
	"disableFuture",
	"disablePast",
	"maxDate",
	"minDate",
	"onChange",
	"shouldDisableMonth",
	"readOnly",
	"disableHighlightToday",
	"onMonthFocus",
	"hasFocus",
	"onFocusedViewChange",
	"monthsPerRow",
	"timezone",
	"gridLabelId",
	"slots",
	"slotProps"
];
var useUtilityClasses$9 = (classes) => {
	return composeClasses({ root: ["root"] }, getMonthCalendarUtilityClass, classes);
};
function useMonthCalendarDefaultizedProps(props, name) {
	const themeProps = useThemeProps({
		props,
		name
	});
	return _extends({}, themeProps, useApplyDefaultValuesToDateValidationProps(themeProps), { monthsPerRow: themeProps.monthsPerRow ?? 3 });
}
var isSameMonth = (monthA, monthB, yearA, yearB, adapter) => Boolean(monthA === monthB && yearB && adapter.isSameYear(yearA, yearB));
var MonthCalendarRoot = styled("div", {
	name: "MuiMonthCalendar",
	slot: "Root",
	shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "monthsPerRow"
})({
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-evenly",
	rowGap: 16,
	padding: "8px 0",
	width: 320,
	boxSizing: "border-box",
	variants: [{
		props: { monthsPerRow: 3 },
		style: { columnGap: 24 }
	}, {
		props: { monthsPerRow: 4 },
		style: { columnGap: 0 }
	}]
});
/**
* Demos:
*
* - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
*
* API:
*
* - [MonthCalendar API](https://mui.com/x/api/date-pickers/month-calendar/)
*/
var MonthCalendar = /* @__PURE__ */ import_react.forwardRef(function MonthCalendar(inProps, ref) {
	const props = useMonthCalendarDefaultizedProps(inProps, "MuiMonthCalendar");
	const { autoFocus, className, currentMonth, classes: classesProp, value: valueProp, defaultValue, referenceDate: referenceDateProp, disabled, disableFuture, disablePast, maxDate, minDate, onChange, shouldDisableMonth, readOnly, onMonthFocus, hasFocus, onFocusedViewChange, monthsPerRow, timezone: timezoneProp, gridLabelId, slots, slotProps } = props, other = _objectWithoutPropertiesLoose(props, _excluded$14);
	const { value, handleValueChange, timezone } = useControlledValue({
		name: "MonthCalendar",
		timezone: timezoneProp,
		value: valueProp,
		defaultValue,
		referenceDate: referenceDateProp,
		onChange,
		valueManager: singleItemValueManager
	});
	const now = useNow(timezone);
	const isRtl = useRtl();
	const adapter = usePickerAdapter();
	const { ownerState } = usePickerPrivateContext();
	const referenceDate = import_react.useMemo(() => singleItemValueManager.getInitialReferenceValue({
		value,
		adapter,
		props,
		timezone,
		referenceDate: referenceDateProp,
		granularity: SECTION_TYPE_GRANULARITY.month
	}), []);
	const classes = useUtilityClasses$9(classesProp);
	const todayMonth = import_react.useMemo(() => adapter.getMonth(now), [adapter, now]);
	const selectedMonth = import_react.useMemo(() => {
		if (value != null) return adapter.getMonth(value);
		return null;
	}, [value, adapter]);
	const [focusedMonth, setFocusedMonth] = import_react.useState(() => selectedMonth || adapter.getMonth(referenceDate));
	const [internalHasFocus, setInternalHasFocus] = useControlled({
		name: "MonthCalendar",
		state: "hasFocus",
		controlled: hasFocus,
		default: autoFocus ?? false
	});
	const changeHasFocus = useEventCallback((newHasFocus) => {
		setInternalHasFocus(newHasFocus);
		if (onFocusedViewChange) onFocusedViewChange(newHasFocus);
	});
	const isMonthDisabled = import_react.useCallback((dateToValidate) => {
		const firstEnabledMonth = adapter.startOfMonth(disablePast && adapter.isAfter(now, minDate) ? now : minDate);
		const lastEnabledMonth = adapter.startOfMonth(disableFuture && adapter.isBefore(now, maxDate) ? now : maxDate);
		const monthToValidate = adapter.startOfMonth(dateToValidate);
		if (adapter.isBefore(monthToValidate, firstEnabledMonth)) return true;
		if (adapter.isAfter(monthToValidate, lastEnabledMonth)) return true;
		if (!shouldDisableMonth) return false;
		return shouldDisableMonth(monthToValidate);
	}, [
		disableFuture,
		disablePast,
		maxDate,
		minDate,
		now,
		shouldDisableMonth,
		adapter
	]);
	const handleMonthSelection = useEventCallback((_event, month) => {
		if (readOnly) return;
		const baseDateForMonth = (value && currentMonth && !adapter.isSameYear(value, currentMonth) ? adapter.setYear(value, adapter.getYear(currentMonth)) : value) ?? currentMonth ?? referenceDate;
		handleValueChange(adapter.setMonth(baseDateForMonth, month));
	});
	const focusMonth = useEventCallback((month) => {
		if (!isMonthDisabled(adapter.setMonth(value ?? currentMonth ?? referenceDate, month))) {
			setFocusedMonth(month);
			changeHasFocus(true);
			if (onMonthFocus) onMonthFocus(month);
		}
	});
	import_react.useEffect(() => {
		setFocusedMonth((prevFocusedMonth) => selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth);
	}, [selectedMonth]);
	const handleKeyDown = useEventCallback((event, month) => {
		const monthsInYear = 12;
		const monthsInRow = 3;
		switch (event.key) {
			case "ArrowUp":
				focusMonth((monthsInYear + month - monthsInRow) % monthsInYear);
				event.preventDefault();
				break;
			case "ArrowDown":
				focusMonth((monthsInYear + month + monthsInRow) % monthsInYear);
				event.preventDefault();
				break;
			case "ArrowLeft":
				focusMonth((monthsInYear + month + (isRtl ? 1 : -1)) % monthsInYear);
				event.preventDefault();
				break;
			case "ArrowRight":
				focusMonth((monthsInYear + month + (isRtl ? -1 : 1)) % monthsInYear);
				event.preventDefault();
				break;
			case "Enter":
			case " ":
				handleMonthSelection(event, month);
				event.preventDefault();
				break;
			default: break;
		}
	});
	const handleMonthFocus = useEventCallback((event, month) => {
		focusMonth(month);
	});
	const handleMonthBlur = useEventCallback((event, month) => {
		if (focusedMonth === month) changeHasFocus(false);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthCalendarRoot, _extends({
		ref,
		className: clsx(classes.root, className),
		ownerState,
		role: "radiogroup",
		"aria-labelledby": gridLabelId,
		monthsPerRow
	}, other, { children: getMonthsInYear(adapter, currentMonth ?? value ?? referenceDate).map((month) => {
		const monthNumber = adapter.getMonth(month);
		const monthText = adapter.format(month, "monthShort");
		const monthLabel = adapter.format(month, "month");
		const isSelected = isSameMonth(monthNumber, selectedMonth, month, value, adapter);
		const isDisabled = disabled || isMonthDisabled(month);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthCalendarButton, {
			selected: isSelected,
			value: monthNumber,
			onClick: handleMonthSelection,
			onKeyDown: handleKeyDown,
			autoFocus: internalHasFocus && monthNumber === focusedMonth,
			disabled: isDisabled,
			tabIndex: monthNumber === focusedMonth && !isDisabled ? 0 : -1,
			onFocus: handleMonthFocus,
			onBlur: handleMonthBlur,
			"aria-current": isSameMonth(monthNumber, todayMonth, month, now, adapter) ? "date" : void 0,
			"aria-label": monthLabel,
			slots,
			slotProps,
			classes: classesProp,
			children: monthText
		}, monthText);
	}) }));
});
MonthCalendar.displayName = "MonthCalendar";
MonthCalendar.propTypes = {
	autoFocus: import_prop_types.default.bool,
	classes: import_prop_types.default.object,
	className: import_prop_types.default.string,
	currentMonth: import_prop_types.default.object,
	defaultValue: import_prop_types.default.object,
	disabled: import_prop_types.default.bool,
	disableFuture: import_prop_types.default.bool,
	disableHighlightToday: import_prop_types.default.bool,
	disablePast: import_prop_types.default.bool,
	gridLabelId: import_prop_types.default.string,
	hasFocus: import_prop_types.default.bool,
	maxDate: import_prop_types.default.object,
	minDate: import_prop_types.default.object,
	monthsPerRow: import_prop_types.default.oneOf([3, 4]),
	onChange: import_prop_types.default.func,
	onFocusedViewChange: import_prop_types.default.func,
	onMonthFocus: import_prop_types.default.func,
	readOnly: import_prop_types.default.bool,
	referenceDate: import_prop_types.default.object,
	shouldDisableMonth: import_prop_types.default.func,
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	timezone: import_prop_types.default.string,
	value: import_prop_types.default.object
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/YearCalendar/yearCalendarClasses.js
function getYearCalendarUtilityClass(slot) {
	return generateUtilityClass("MuiYearCalendar", slot);
}
var yearCalendarClasses = generateUtilityClasses("MuiYearCalendar", [
	"root",
	"button",
	"disabled",
	"selected"
]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/YearCalendar/YearCalendarButton.js
var _excluded$13 = [
	"autoFocus",
	"classes",
	"disabled",
	"selected",
	"value",
	"onClick",
	"onKeyDown",
	"onFocus",
	"onBlur",
	"slots",
	"slotProps"
];
var useUtilityClasses$8 = (classes, ownerState) => {
	return composeClasses({ button: [
		"button",
		ownerState.isYearDisabled && "disabled",
		ownerState.isYearSelected && "selected"
	] }, getYearCalendarUtilityClass, classes);
};
var DefaultYearButton = styled("button", {
	name: "MuiYearCalendar",
	slot: "Button",
	overridesResolver: (_, styles) => [
		styles.button,
		{ [`&.${yearCalendarClasses.disabled}`]: styles.disabled },
		{ [`&.${yearCalendarClasses.selected}`]: styles.selected }
	]
})(({ theme }) => _extends({
	color: "unset",
	backgroundColor: "transparent",
	border: 0,
	outline: 0
}, theme.typography.subtitle1, {
	height: 36,
	width: 72,
	borderRadius: 18,
	cursor: "pointer",
	"&:focus": { backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.action.active, theme.palette.action.focusOpacity) },
	"&:hover": { backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity) },
	"&:disabled": {
		cursor: "auto",
		pointerEvents: "none"
	},
	[`&.${yearCalendarClasses.disabled}`]: { color: (theme.vars || theme).palette.text.secondary },
	[`&.${yearCalendarClasses.selected}`]: {
		color: (theme.vars || theme).palette.primary.contrastText,
		backgroundColor: (theme.vars || theme).palette.primary.main,
		"&:focus, &:hover": { backgroundColor: (theme.vars || theme).palette.primary.dark }
	}
}));
/**
* @ignore - internal component.
*/
var YearCalendarButton = /* @__PURE__ */ import_react.memo(function YearCalendarButton(props) {
	const { autoFocus, classes: classesProp, disabled, selected, value, onClick, onKeyDown, onFocus, onBlur, slots, slotProps } = props, other = _objectWithoutPropertiesLoose(props, _excluded$13);
	const ref = import_react.useRef(null);
	const { ownerState: pickerOwnerState } = usePickerPrivateContext();
	const ownerState = _extends({}, pickerOwnerState, {
		isYearDisabled: disabled,
		isYearSelected: selected
	});
	const classes = useUtilityClasses$8(classesProp, ownerState);
	useEnhancedEffect(() => {
		if (autoFocus) ref.current?.focus();
	}, [autoFocus]);
	const YearButton = slots?.yearButton ?? DefaultYearButton;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearButton, _extends({}, useSlotProps({
		elementType: YearButton,
		externalSlotProps: slotProps?.yearButton,
		externalForwardedProps: other,
		additionalProps: {
			disabled,
			ref,
			type: "button",
			role: "radio",
			"aria-checked": selected,
			onClick: (event) => onClick(event, value),
			onKeyDown: (event) => onKeyDown(event, value),
			onFocus: (event) => onFocus(event, value),
			onBlur: (event) => onBlur(event, value)
		},
		ownerState,
		className: classes.button
	})));
});
YearCalendarButton.displayName = "YearCalendarButton";
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/YearCalendar/YearCalendar.js
var _excluded$12 = [
	"autoFocus",
	"className",
	"classes",
	"value",
	"defaultValue",
	"referenceDate",
	"disabled",
	"disableFuture",
	"disablePast",
	"maxDate",
	"minDate",
	"onChange",
	"readOnly",
	"shouldDisableYear",
	"disableHighlightToday",
	"onYearFocus",
	"hasFocus",
	"onFocusedViewChange",
	"yearsOrder",
	"yearsPerRow",
	"timezone",
	"gridLabelId",
	"slots",
	"slotProps"
];
var useUtilityClasses$7 = (classes) => {
	return composeClasses({ root: ["root"] }, getYearCalendarUtilityClass, classes);
};
function useYearCalendarDefaultizedProps(props, name) {
	const themeProps = useThemeProps({
		props,
		name
	});
	return _extends({}, themeProps, useApplyDefaultValuesToDateValidationProps(themeProps), {
		yearsPerRow: themeProps.yearsPerRow ?? 3,
		yearsOrder: themeProps.yearsOrder ?? "asc"
	});
}
var YearCalendarRoot = styled("div", {
	name: "MuiYearCalendar",
	slot: "Root",
	shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "yearsPerRow"
})({
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-evenly",
	rowGap: 12,
	padding: "6px 0",
	overflowY: "auto",
	height: "100%",
	width: 320,
	maxHeight: 280,
	boxSizing: "border-box",
	position: "relative",
	variants: [{
		props: { yearsPerRow: 3 },
		style: { columnGap: 24 }
	}, {
		props: { yearsPerRow: 4 },
		style: {
			columnGap: 0,
			padding: "0 2px"
		}
	}]
});
var YearCalendarButtonFiller = styled("div", {
	name: "MuiYearCalendar",
	slot: "ButtonFiller"
})({
	height: 36,
	width: 72
});
/**
* Demos:
*
* - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
*
* API:
*
* - [YearCalendar API](https://mui.com/x/api/date-pickers/year-calendar/)
*/
var YearCalendar = /* @__PURE__ */ import_react.forwardRef(function YearCalendar(inProps, ref) {
	const props = useYearCalendarDefaultizedProps(inProps, "MuiYearCalendar");
	const { autoFocus, className, classes: classesProp, value: valueProp, defaultValue, referenceDate: referenceDateProp, disabled, disableFuture, disablePast, maxDate, minDate, onChange, readOnly, shouldDisableYear, onYearFocus, hasFocus, onFocusedViewChange, yearsOrder, yearsPerRow, timezone: timezoneProp, gridLabelId, slots, slotProps } = props, other = _objectWithoutPropertiesLoose(props, _excluded$12);
	const { value, handleValueChange, timezone } = useControlledValue({
		name: "YearCalendar",
		timezone: timezoneProp,
		value: valueProp,
		defaultValue,
		referenceDate: referenceDateProp,
		onChange,
		valueManager: singleItemValueManager
	});
	const now = useNow(timezone);
	const isRtl = useRtl();
	const adapter = usePickerAdapter();
	const { ownerState } = usePickerPrivateContext();
	const referenceDate = import_react.useMemo(() => singleItemValueManager.getInitialReferenceValue({
		value,
		adapter,
		props,
		timezone,
		referenceDate: referenceDateProp,
		granularity: SECTION_TYPE_GRANULARITY.year
	}), []);
	const classes = useUtilityClasses$7(classesProp);
	const todayYear = import_react.useMemo(() => adapter.getYear(now), [adapter, now]);
	const selectedYear = import_react.useMemo(() => {
		if (value != null) return adapter.getYear(value);
		return null;
	}, [value, adapter]);
	const [focusedYear, setFocusedYear] = import_react.useState(() => selectedYear || adapter.getYear(referenceDate));
	const [internalHasFocus, setInternalHasFocus] = useControlled({
		name: "YearCalendar",
		state: "hasFocus",
		controlled: hasFocus,
		default: autoFocus ?? false
	});
	const changeHasFocus = useEventCallback((newHasFocus) => {
		setInternalHasFocus(newHasFocus);
		if (onFocusedViewChange) onFocusedViewChange(newHasFocus);
	});
	const isYearDisabled = import_react.useCallback((dateToValidate) => {
		if (disablePast && adapter.isBeforeYear(dateToValidate, now)) return true;
		if (disableFuture && adapter.isAfterYear(dateToValidate, now)) return true;
		if (minDate && adapter.isBeforeYear(dateToValidate, minDate)) return true;
		if (maxDate && adapter.isAfterYear(dateToValidate, maxDate)) return true;
		if (!shouldDisableYear) return false;
		return shouldDisableYear(adapter.startOfYear(dateToValidate));
	}, [
		disableFuture,
		disablePast,
		maxDate,
		minDate,
		now,
		shouldDisableYear,
		adapter
	]);
	const handleYearSelection = useEventCallback((_event, year) => {
		if (readOnly) return;
		handleValueChange(adapter.setYear(value ?? referenceDate, year));
	});
	const focusYear = useEventCallback((year) => {
		if (!isYearDisabled(adapter.setYear(value ?? referenceDate, year))) {
			setFocusedYear(year);
			changeHasFocus(true);
			onYearFocus?.(year);
		}
	});
	import_react.useEffect(() => {
		setFocusedYear((prevFocusedYear) => selectedYear !== null && prevFocusedYear !== selectedYear ? selectedYear : prevFocusedYear);
	}, [selectedYear]);
	const verticalDirection = yearsOrder !== "desc" ? yearsPerRow * 1 : yearsPerRow * -1;
	const horizontalDirection = isRtl && yearsOrder === "asc" || !isRtl && yearsOrder === "desc" ? -1 : 1;
	const handleKeyDown = useEventCallback((event, year) => {
		switch (event.key) {
			case "ArrowUp":
				focusYear(year - verticalDirection);
				event.preventDefault();
				break;
			case "ArrowDown":
				focusYear(year + verticalDirection);
				event.preventDefault();
				break;
			case "ArrowLeft":
				focusYear(year - horizontalDirection);
				event.preventDefault();
				break;
			case "ArrowRight":
				focusYear(year + horizontalDirection);
				event.preventDefault();
				break;
			case "Enter":
			case " ":
				handleYearSelection(event, year);
				event.preventDefault();
				break;
			default: break;
		}
	});
	const handleYearFocus = useEventCallback((event, year) => {
		focusYear(year);
	});
	const handleYearBlur = useEventCallback((event, year) => {
		if (focusedYear === year) changeHasFocus(false);
	});
	const scrollerRef = import_react.useRef(null);
	const handleRef = useForkRef(ref, scrollerRef);
	import_react.useEffect(() => {
		if (autoFocus || scrollerRef.current === null) return;
		const tabbableButton = scrollerRef.current.querySelector("[tabindex=\"0\"]");
		if (!tabbableButton) return;
		const offsetHeight = tabbableButton.offsetHeight;
		const offsetTop = tabbableButton.offsetTop;
		const clientHeight = scrollerRef.current.clientHeight;
		const scrollTop = scrollerRef.current.scrollTop;
		const elementBottom = offsetTop + offsetHeight;
		if (offsetHeight > clientHeight || offsetTop < scrollTop) return;
		scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
	}, [autoFocus]);
	const yearRange = adapter.getYearRange([minDate, maxDate]);
	if (yearsOrder === "desc") yearRange.reverse();
	let fillerAmount = yearsPerRow - yearRange.length % yearsPerRow;
	if (fillerAmount === yearsPerRow) fillerAmount = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(YearCalendarRoot, _extends({
		ref: handleRef,
		className: clsx(classes.root, className),
		ownerState,
		role: "radiogroup",
		"aria-labelledby": gridLabelId,
		yearsPerRow
	}, other, { children: [yearRange.map((year) => {
		const yearNumber = adapter.getYear(year);
		const isSelected = yearNumber === selectedYear;
		const isDisabled = disabled || isYearDisabled(year);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearCalendarButton, {
			selected: isSelected,
			value: yearNumber,
			onClick: handleYearSelection,
			onKeyDown: handleKeyDown,
			autoFocus: internalHasFocus && yearNumber === focusedYear,
			disabled: isDisabled,
			tabIndex: yearNumber === focusedYear && !isDisabled ? 0 : -1,
			onFocus: handleYearFocus,
			onBlur: handleYearBlur,
			"aria-current": todayYear === yearNumber ? "date" : void 0,
			slots,
			slotProps,
			classes: classesProp,
			children: adapter.format(year, "year")
		}, adapter.format(year, "year"));
	}), Array.from({ length: fillerAmount }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearCalendarButtonFiller, {}, index))] }));
});
YearCalendar.displayName = "YearCalendar";
YearCalendar.propTypes = {
	autoFocus: import_prop_types.default.bool,
	classes: import_prop_types.default.object,
	className: import_prop_types.default.string,
	defaultValue: import_prop_types.default.object,
	disabled: import_prop_types.default.bool,
	disableFuture: import_prop_types.default.bool,
	disableHighlightToday: import_prop_types.default.bool,
	disablePast: import_prop_types.default.bool,
	gridLabelId: import_prop_types.default.string,
	hasFocus: import_prop_types.default.bool,
	maxDate: import_prop_types.default.object,
	minDate: import_prop_types.default.object,
	onChange: import_prop_types.default.func,
	onFocusedViewChange: import_prop_types.default.func,
	onYearFocus: import_prop_types.default.func,
	readOnly: import_prop_types.default.bool,
	referenceDate: import_prop_types.default.object,
	shouldDisableYear: import_prop_types.default.func,
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	timezone: import_prop_types.default.string,
	value: import_prop_types.default.object,
	yearsOrder: import_prop_types.default.oneOf(["asc", "desc"]),
	yearsPerRow: import_prop_types.default.oneOf([3, 4])
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersCalendarHeader/pickersCalendarHeaderClasses.js
var getPickersCalendarHeaderUtilityClass = (slot) => generateUtilityClass("MuiPickersCalendarHeader", slot);
var pickersCalendarHeaderClasses = generateUtilityClasses("MuiPickersCalendarHeader", [
	"root",
	"labelContainer",
	"label",
	"switchViewButton",
	"switchViewIcon"
]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersCalendarHeader/PickersCalendarHeader.js
var _excluded$11 = [
	"slots",
	"slotProps",
	"currentMonth",
	"disabled",
	"disableFuture",
	"disablePast",
	"maxDate",
	"minDate",
	"onMonthChange",
	"onViewChange",
	"view",
	"reduceAnimations",
	"views",
	"labelId",
	"className",
	"classes",
	"timezone",
	"format"
], _excluded2$3 = ["ownerState"];
var useUtilityClasses$6 = (classes) => {
	return composeClasses({
		root: ["root"],
		labelContainer: ["labelContainer"],
		label: ["label"],
		switchViewButton: ["switchViewButton"],
		switchViewIcon: ["switchViewIcon"]
	}, getPickersCalendarHeaderUtilityClass, classes);
};
var PickersCalendarHeaderRoot = styled("div", {
	name: "MuiPickersCalendarHeader",
	slot: "Root"
})({
	display: "flex",
	alignItems: "center",
	marginTop: 12,
	marginBottom: 4,
	paddingLeft: 24,
	paddingRight: 12,
	maxHeight: 40,
	minHeight: 40
});
var PickersCalendarHeaderLabelContainer = styled("div", {
	name: "MuiPickersCalendarHeader",
	slot: "LabelContainer"
})(({ theme }) => _extends({
	display: "flex",
	overflow: "hidden",
	alignItems: "center",
	cursor: "pointer",
	marginRight: "auto"
}, theme.typography.body1, { fontWeight: theme.typography.fontWeightMedium }));
var PickersCalendarHeaderLabel = styled("div", {
	name: "MuiPickersCalendarHeader",
	slot: "Label"
})({ marginRight: 6 });
var PickersCalendarHeaderSwitchViewButton = styled(IconButton, {
	name: "MuiPickersCalendarHeader",
	slot: "SwitchViewButton"
})({
	marginRight: "auto",
	variants: [{
		props: { view: "year" },
		style: { [`.${pickersCalendarHeaderClasses.switchViewIcon}`]: { transform: "rotate(180deg)" } }
	}]
});
var PickersCalendarHeaderSwitchViewIcon = styled(ArrowDropDownIcon, {
	name: "MuiPickersCalendarHeader",
	slot: "SwitchViewIcon"
})(({ theme }) => ({
	willChange: "transform",
	transition: theme.transitions.create("transform"),
	transform: "rotate(0deg)"
}));
/**
* Demos:
*
* - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
* - [DateRangeCalendar](https://mui.com/x/react-date-pickers/date-range-calendar/)
* - [Custom slots and subcomponents](https://mui.com/x/react-date-pickers/custom-components/)
*
* API:
*
* - [PickersCalendarHeader API](https://mui.com/x/api/date-pickers/pickers-calendar-header/)
*/
var PickersCalendarHeader = /* @__PURE__ */ import_react.forwardRef(function PickersCalendarHeader(inProps, ref) {
	const translations = usePickerTranslations();
	const adapter = usePickerAdapter();
	const props = useThemeProps({
		props: inProps,
		name: "MuiPickersCalendarHeader"
	});
	const { slots, slotProps, currentMonth: month, disabled, disableFuture, disablePast, maxDate, minDate, onMonthChange, onViewChange, view, reduceAnimations, views, labelId, className, classes: classesProp, timezone, format = `${adapter.formats.month} ${adapter.formats.year}` } = props, other = _objectWithoutPropertiesLoose(props, _excluded$11);
	const { ownerState } = usePickerPrivateContext();
	const classes = useUtilityClasses$6(classesProp);
	const SwitchViewButton = slots?.switchViewButton ?? PickersCalendarHeaderSwitchViewButton;
	const switchViewButtonProps = useSlotProps({
		elementType: SwitchViewButton,
		externalSlotProps: slotProps?.switchViewButton,
		additionalProps: {
			size: "small",
			"aria-label": translations.calendarViewSwitchingButtonAriaLabel(view)
		},
		ownerState: _extends({}, ownerState, { view }),
		className: classes.switchViewButton
	});
	const SwitchViewIcon = slots?.switchViewIcon ?? PickersCalendarHeaderSwitchViewIcon;
	const switchViewIconProps = _objectWithoutPropertiesLoose(useSlotProps({
		elementType: SwitchViewIcon,
		externalSlotProps: slotProps?.switchViewIcon,
		ownerState,
		className: classes.switchViewIcon
	}), _excluded2$3);
	const selectNextMonth = () => onMonthChange(adapter.addMonths(month, 1));
	const selectPreviousMonth = () => onMonthChange(adapter.addMonths(month, -1));
	const isNextMonthDisabled = useNextMonthDisabled(month, {
		disableFuture,
		maxDate,
		timezone
	});
	const isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
		disablePast,
		minDate,
		timezone
	});
	const handleToggleView = () => {
		if (views.length === 1 || !onViewChange || disabled) return;
		if (views.length === 2) onViewChange(views.find((el) => el !== view) || views[0]);
		else onViewChange(views[views.indexOf(view) !== 0 ? 0 : 1]);
	};
	if (views.length === 1 && views[0] === "year") return null;
	const label = adapter.formatByString(month, format);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PickersCalendarHeaderRoot, _extends({}, other, {
		ownerState,
		className: clsx(classes.root, className),
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PickersCalendarHeaderLabelContainer, {
			role: "presentation",
			onClick: handleToggleView,
			ownerState,
			"aria-live": "polite",
			className: classes.labelContainer,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersFadeTransitionGroup, {
				reduceAnimations,
				transKey: label,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersCalendarHeaderLabel, {
					id: labelId,
					ownerState,
					className: classes.label,
					children: label
				})
			}), views.length > 1 && !disabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchViewButton, _extends({}, switchViewButtonProps, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchViewIcon, _extends({}, switchViewIconProps)) }))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fade, {
			in: view === "day",
			appear: !reduceAnimations,
			enter: !reduceAnimations,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersArrowSwitcher, {
				slots,
				slotProps,
				onGoToPrevious: selectPreviousMonth,
				isPreviousDisabled: isPreviousMonthDisabled,
				previousLabel: translations.previousMonth,
				onGoToNext: selectNextMonth,
				isNextDisabled: isNextMonthDisabled,
				nextLabel: translations.nextMonth
			})
		})]
	}));
});
PickersCalendarHeader.displayName = "PickersCalendarHeader";
PickersCalendarHeader.propTypes = {
	classes: import_prop_types.default.object,
	className: import_prop_types.default.string,
	currentMonth: import_prop_types.default.object.isRequired,
	disabled: import_prop_types.default.bool,
	disableFuture: import_prop_types.default.bool,
	disablePast: import_prop_types.default.bool,
	format: import_prop_types.default.string,
	labelId: import_prop_types.default.string,
	maxDate: import_prop_types.default.object.isRequired,
	minDate: import_prop_types.default.object.isRequired,
	onMonthChange: import_prop_types.default.func.isRequired,
	onViewChange: import_prop_types.default.func,
	reduceAnimations: import_prop_types.default.bool.isRequired,
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	timezone: import_prop_types.default.string.isRequired,
	view: import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]).isRequired,
	views: import_prop_types.default.arrayOf(import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]).isRequired).isRequired
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useReduceAnimations.js
var PREFERS_REDUCED_MOTION = "@media (prefers-reduced-motion: reduce)";
var mobileVersionMatches = typeof navigator !== "undefined" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i);
var androidVersion = mobileVersionMatches && mobileVersionMatches[1] ? parseInt(mobileVersionMatches[1], 10) : null;
var iOSVersion = mobileVersionMatches && mobileVersionMatches[2] ? parseInt(mobileVersionMatches[2], 10) : null;
var slowAnimationDevices = androidVersion && androidVersion < 10 || iOSVersion && iOSVersion < 13 || false;
function useReduceAnimations(customReduceAnimations) {
	const prefersReduced = useMediaQuery(PREFERS_REDUCED_MOTION, { defaultMatches: false });
	if (customReduceAnimations != null) return customReduceAnimations;
	return prefersReduced || slowAnimationDevices;
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DateCalendar/dateCalendarClasses.js
var getDateCalendarUtilityClass = (slot) => generateUtilityClass("MuiDateCalendar", slot);
var dateCalendarClasses = generateUtilityClasses("MuiDateCalendar", ["root", "viewTransitionContainer"]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DateCalendar/DateCalendar.js
var _excluded$10 = [
	"autoFocus",
	"onViewChange",
	"value",
	"defaultValue",
	"referenceDate",
	"disableFuture",
	"disablePast",
	"onChange",
	"onYearChange",
	"onMonthChange",
	"reduceAnimations",
	"shouldDisableDate",
	"shouldDisableMonth",
	"shouldDisableYear",
	"view",
	"views",
	"openTo",
	"className",
	"classes",
	"disabled",
	"readOnly",
	"minDate",
	"maxDate",
	"disableHighlightToday",
	"focusedView",
	"onFocusedViewChange",
	"showDaysOutsideCurrentMonth",
	"fixedWeekNumber",
	"dayOfWeekFormatter",
	"slots",
	"slotProps",
	"loading",
	"renderLoading",
	"displayWeekNumber",
	"yearsOrder",
	"yearsPerRow",
	"monthsPerRow",
	"timezone"
];
var useUtilityClasses$5 = (classes) => {
	return composeClasses({
		root: ["root"],
		viewTransitionContainer: ["viewTransitionContainer"]
	}, getDateCalendarUtilityClass, classes);
};
function useDateCalendarDefaultizedProps(props, name) {
	const themeProps = useThemeProps({
		props,
		name
	});
	const reduceAnimations = useReduceAnimations(themeProps.reduceAnimations);
	return _extends({}, themeProps, useApplyDefaultValuesToDateValidationProps(themeProps), {
		loading: themeProps.loading ?? false,
		openTo: themeProps.openTo ?? "day",
		views: themeProps.views ?? ["year", "day"],
		reduceAnimations,
		renderLoading: themeProps.renderLoading ?? (() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "..." }))
	});
}
var DateCalendarRoot = styled(PickerViewRoot, {
	name: "MuiDateCalendar",
	slot: "Root"
})({
	display: "flex",
	flexDirection: "column",
	height: 336
});
var DateCalendarViewTransitionContainer = styled(PickersFadeTransitionGroup, {
	name: "MuiDateCalendar",
	slot: "ViewTransitionContainer"
})({});
/**
* Demos:
*
* - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
* - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
* - [Validation](https://mui.com/x/react-date-pickers/validation/)
*
* API:
*
* - [DateCalendar API](https://mui.com/x/api/date-pickers/date-calendar/)
*/
var DateCalendar = /* @__PURE__ */ import_react.forwardRef(function DateCalendar(inProps, ref) {
	const adapter = usePickerAdapter();
	const { ownerState } = usePickerPrivateContext();
	const id = useId();
	const props = useDateCalendarDefaultizedProps(inProps, "MuiDateCalendar");
	const { autoFocus, onViewChange, value: valueProp, defaultValue, referenceDate: referenceDateProp, disableFuture, disablePast, onChange, onMonthChange, reduceAnimations, shouldDisableDate, shouldDisableMonth, shouldDisableYear, view: inView, views, openTo, className, classes: classesProp, disabled, readOnly, minDate, maxDate, disableHighlightToday, focusedView: focusedViewProp, onFocusedViewChange, showDaysOutsideCurrentMonth, fixedWeekNumber, dayOfWeekFormatter, slots, slotProps, loading, renderLoading, displayWeekNumber, yearsOrder, yearsPerRow, monthsPerRow, timezone: timezoneProp } = props, other = _objectWithoutPropertiesLoose(props, _excluded$10);
	const { value, handleValueChange, timezone } = useControlledValue({
		name: "DateCalendar",
		timezone: timezoneProp,
		value: valueProp,
		defaultValue,
		referenceDate: referenceDateProp,
		onChange,
		valueManager: singleItemValueManager
	});
	const { view, setView, focusedView, setFocusedView, goToNextView, setValueAndGoToNextView } = useViews({
		view: inView,
		views,
		openTo,
		onChange: handleValueChange,
		onViewChange,
		autoFocus,
		focusedView: focusedViewProp,
		onFocusedViewChange
	});
	const { referenceDate, calendarState, setVisibleDate, isDateDisabled, onMonthSwitchingAnimationEnd } = useCalendarState({
		value,
		referenceDate: referenceDateProp,
		reduceAnimations,
		onMonthChange,
		minDate,
		maxDate,
		shouldDisableDate,
		disablePast,
		disableFuture,
		timezone,
		getCurrentMonthFromVisibleDate: (visibleDate, prevMonth) => {
			if (adapter.isSameMonth(visibleDate, prevMonth)) return prevMonth;
			return adapter.startOfMonth(visibleDate);
		}
	});
	const minDateWithDisabled = disabled && value || minDate;
	const maxDateWithDisabled = disabled && value || maxDate;
	const gridLabelId = `${id}-grid-label`;
	const hasFocus = focusedView !== null;
	const CalendarHeader = slots?.calendarHeader ?? PickersCalendarHeader;
	const calendarHeaderProps = useSlotProps({
		elementType: CalendarHeader,
		externalSlotProps: slotProps?.calendarHeader,
		additionalProps: {
			views,
			view,
			currentMonth: calendarState.currentMonth,
			onViewChange: setView,
			onMonthChange: (month) => setVisibleDate({
				target: month,
				reason: "header-navigation"
			}),
			minDate: minDateWithDisabled,
			maxDate: maxDateWithDisabled,
			disabled,
			disablePast,
			disableFuture,
			reduceAnimations,
			timezone,
			labelId: gridLabelId
		},
		ownerState
	});
	const handleDateMonthChange = useEventCallback((newDate) => {
		const startOfMonth = adapter.startOfMonth(newDate);
		const endOfMonth = adapter.endOfMonth(newDate);
		const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
			adapter,
			date: newDate,
			minDate: adapter.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
			maxDate: adapter.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
			disablePast,
			disableFuture,
			isDateDisabled,
			timezone
		}) : newDate;
		if (closestEnabledDate) {
			setValueAndGoToNextView(closestEnabledDate, "finish");
			setVisibleDate({
				target: closestEnabledDate,
				reason: "cell-interaction"
			});
		} else {
			goToNextView();
			setVisibleDate({
				target: startOfMonth,
				reason: "cell-interaction"
			});
		}
	});
	const handleDateYearChange = useEventCallback((newDate) => {
		const startOfYear = adapter.startOfYear(newDate);
		const endOfYear = adapter.endOfYear(newDate);
		const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
			adapter,
			date: newDate,
			minDate: adapter.isBefore(minDate, startOfYear) ? startOfYear : minDate,
			maxDate: adapter.isAfter(maxDate, endOfYear) ? endOfYear : maxDate,
			disablePast,
			disableFuture,
			isDateDisabled,
			timezone
		}) : newDate;
		if (closestEnabledDate) {
			setValueAndGoToNextView(closestEnabledDate, "finish");
			setVisibleDate({
				target: closestEnabledDate,
				reason: "cell-interaction"
			});
		} else {
			goToNextView();
			setVisibleDate({
				target: startOfYear,
				reason: "cell-interaction"
			});
		}
	});
	const handleSelectedDayChange = useEventCallback((day) => {
		if (day) return handleValueChange(mergeDateAndTime(adapter, day, value ?? referenceDate), "finish", view);
		return handleValueChange(day, "finish", view);
	});
	import_react.useEffect(() => {
		if (adapter.isValid(value)) setVisibleDate({
			target: value,
			reason: "controlled-value-change"
		});
	}, [value]);
	const classes = useUtilityClasses$5(classesProp);
	const baseDateValidationProps = {
		disablePast,
		disableFuture,
		maxDate,
		minDate
	};
	const commonViewProps = {
		disableHighlightToday,
		readOnly,
		disabled,
		timezone,
		gridLabelId,
		slots,
		slotProps
	};
	const prevOpenViewRef = import_react.useRef(view);
	import_react.useEffect(() => {
		if (prevOpenViewRef.current === view) return;
		if (focusedView === prevOpenViewRef.current) setFocusedView(view, true);
		prevOpenViewRef.current = view;
	}, [
		focusedView,
		setFocusedView,
		view
	]);
	const selectedDays = import_react.useMemo(() => [value], [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DateCalendarRoot, _extends({
		ref,
		className: clsx(classes.root, className),
		ownerState
	}, other, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarHeader, _extends({}, calendarHeaderProps, {
		slots,
		slotProps
	})), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateCalendarViewTransitionContainer, {
		reduceAnimations,
		className: classes.viewTransitionContainer,
		transKey: view,
		ownerState,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			view === "year" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
				value,
				onChange: handleDateYearChange,
				shouldDisableYear,
				hasFocus,
				onFocusedViewChange: (isViewFocused) => setFocusedView("year", isViewFocused),
				yearsOrder,
				yearsPerRow,
				referenceDate
			})),
			view === "month" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
				currentMonth: calendarState.currentMonth,
				hasFocus,
				className,
				value,
				onChange: handleDateMonthChange,
				shouldDisableMonth,
				onFocusedViewChange: (isViewFocused) => setFocusedView("month", isViewFocused),
				monthsPerRow,
				referenceDate
			})),
			view === "day" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayCalendar, _extends({}, calendarState, baseDateValidationProps, commonViewProps, {
				onMonthSwitchingAnimationEnd,
				hasFocus,
				onFocusedDayChange: (focusedDate) => setVisibleDate({
					target: focusedDate,
					reason: "cell-interaction"
				}),
				reduceAnimations,
				selectedDays,
				onSelectedDaysChange: handleSelectedDayChange,
				shouldDisableDate,
				shouldDisableMonth,
				shouldDisableYear,
				onFocusedViewChange: (isViewFocused) => setFocusedView("day", isViewFocused),
				showDaysOutsideCurrentMonth,
				fixedWeekNumber,
				dayOfWeekFormatter,
				displayWeekNumber,
				loading,
				renderLoading
			}))
		] })
	})] }));
});
DateCalendar.displayName = "DateCalendar";
DateCalendar.propTypes = {
	autoFocus: import_prop_types.default.bool,
	classes: import_prop_types.default.object,
	className: import_prop_types.default.string,
	dayOfWeekFormatter: import_prop_types.default.func,
	defaultValue: import_prop_types.default.object,
	disabled: import_prop_types.default.bool,
	disableFuture: import_prop_types.default.bool,
	disableHighlightToday: import_prop_types.default.bool,
	disablePast: import_prop_types.default.bool,
	displayWeekNumber: import_prop_types.default.bool,
	fixedWeekNumber: import_prop_types.default.number,
	focusedView: import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]),
	loading: import_prop_types.default.bool,
	maxDate: import_prop_types.default.object,
	minDate: import_prop_types.default.object,
	monthsPerRow: import_prop_types.default.oneOf([3, 4]),
	onChange: import_prop_types.default.func,
	onFocusedViewChange: import_prop_types.default.func,
	onMonthChange: import_prop_types.default.func,
	onViewChange: import_prop_types.default.func,
	onYearChange: import_prop_types.default.func,
	openTo: import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]),
	readOnly: import_prop_types.default.bool,
	reduceAnimations: import_prop_types.default.bool,
	referenceDate: import_prop_types.default.object,
	renderLoading: import_prop_types.default.func,
	shouldDisableDate: import_prop_types.default.func,
	shouldDisableMonth: import_prop_types.default.func,
	shouldDisableYear: import_prop_types.default.func,
	showDaysOutsideCurrentMonth: import_prop_types.default.bool,
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	timezone: import_prop_types.default.string,
	value: import_prop_types.default.object,
	view: import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]),
	views: import_prop_types.default.arrayOf(import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]).isRequired),
	yearsOrder: import_prop_types.default.oneOf(["asc", "desc"]),
	yearsPerRow: import_prop_types.default.oneOf([3, 4])
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/components/pickersToolbarClasses.js
function getPickersToolbarUtilityClass(slot) {
	return generateUtilityClass("MuiPickersToolbar", slot);
}
var pickersToolbarClasses = generateUtilityClasses("MuiPickersToolbar", [
	"root",
	"title",
	"content"
]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useToolbarOwnerState.js
function useToolbarOwnerState() {
	const { ownerState: pickerOwnerState } = usePickerPrivateContext();
	const isRtl = useRtl();
	return import_react.useMemo(() => _extends({}, pickerOwnerState, { toolbarDirection: isRtl ? "rtl" : "ltr" }), [pickerOwnerState, isRtl]);
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/components/PickersToolbar.js
var _excluded$9 = [
	"children",
	"className",
	"classes",
	"toolbarTitle",
	"hidden",
	"titleId",
	"classes",
	"landscapeDirection"
];
var useUtilityClasses$4 = (classes) => {
	return composeClasses({
		root: ["root"],
		title: ["title"],
		content: ["content"]
	}, getPickersToolbarUtilityClass, classes);
};
var PickersToolbarRoot = styled("div", {
	name: "MuiPickersToolbar",
	slot: "Root"
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "space-between",
	padding: theme.spacing(2, 3),
	variants: [{
		props: { pickerOrientation: "landscape" },
		style: {
			height: "auto",
			maxWidth: 160,
			padding: 16,
			justifyContent: "flex-start",
			flexWrap: "wrap"
		}
	}]
}));
var PickersToolbarContent = styled("div", {
	name: "MuiPickersToolbar",
	slot: "Content",
	shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "landscapeDirection"
})({
	display: "flex",
	flexWrap: "wrap",
	width: "100%",
	flex: 1,
	justifyContent: "space-between",
	alignItems: "center",
	flexDirection: "row",
	variants: [{
		props: { pickerOrientation: "landscape" },
		style: {
			justifyContent: "flex-start",
			alignItems: "flex-start",
			flexDirection: "column"
		}
	}, {
		props: {
			pickerOrientation: "landscape",
			landscapeDirection: "row"
		},
		style: { flexDirection: "row" }
	}]
});
var PickersToolbar = /* @__PURE__ */ import_react.forwardRef(function PickersToolbar(inProps, ref) {
	const props = useThemeProps({
		props: inProps,
		name: "MuiPickersToolbar"
	});
	const { children, className, classes: classesProp, toolbarTitle, hidden, titleId, landscapeDirection } = props, other = _objectWithoutPropertiesLoose(props, _excluded$9);
	const ownerState = useToolbarOwnerState();
	const classes = useUtilityClasses$4(classesProp);
	if (hidden) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PickersToolbarRoot, _extends({
		ref,
		className: clsx(classes.root, className),
		ownerState
	}, other, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
		color: "text.secondary",
		variant: "overline",
		id: titleId,
		className: classes.title,
		children: toolbarTitle
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersToolbarContent, {
		className: classes.content,
		ownerState,
		landscapeDirection,
		children
	})] }));
});
PickersToolbar.displayName = "PickersToolbar";
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DatePicker/datePickerToolbarClasses.js
function getDatePickerToolbarUtilityClass(slot) {
	return generateUtilityClass("MuiDatePickerToolbar", slot);
}
var datePickerToolbarClasses = generateUtilityClasses("MuiDatePickerToolbar", ["root", "title"]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DatePicker/DatePickerToolbar.js
var _excluded$8 = [
	"toolbarFormat",
	"toolbarPlaceholder",
	"className",
	"classes"
];
var useUtilityClasses$3 = (classes) => {
	return composeClasses({
		root: ["root"],
		title: ["title"]
	}, getDatePickerToolbarUtilityClass, classes);
};
var DatePickerToolbarRoot = styled(PickersToolbar, {
	name: "MuiDatePickerToolbar",
	slot: "Root"
})({});
var DatePickerToolbarTitle = styled(Typography, {
	name: "MuiDatePickerToolbar",
	slot: "Title"
})({ variants: [{
	props: { pickerOrientation: "landscape" },
	style: { margin: "auto 16px auto auto" }
}] });
/**
* Demos:
*
* - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
* - [Custom components](https://mui.com/x/react-date-pickers/custom-components/)
*
* API:
*
* - [DatePickerToolbar API](https://mui.com/x/api/date-pickers/date-picker-toolbar/)
*/
var DatePickerToolbar = /* @__PURE__ */ import_react.forwardRef(function DatePickerToolbar(inProps, ref) {
	const props = useThemeProps({
		props: inProps,
		name: "MuiDatePickerToolbar"
	});
	const { toolbarFormat, toolbarPlaceholder = "––", className, classes: classesProp } = props, other = _objectWithoutPropertiesLoose(props, _excluded$8);
	const adapter = usePickerAdapter();
	const { value, views, orientation } = usePickerContext();
	const translations = usePickerTranslations();
	const ownerState = useToolbarOwnerState();
	const classes = useUtilityClasses$3(classesProp);
	const dateText = import_react.useMemo(() => {
		if (!adapter.isValid(value)) return toolbarPlaceholder;
		const formatFromViews = resolveDateFormat(adapter, {
			format: toolbarFormat,
			views
		}, true);
		return adapter.formatByString(value, formatFromViews);
	}, [
		value,
		toolbarFormat,
		toolbarPlaceholder,
		adapter,
		views
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DatePickerToolbarRoot, _extends({
		ref,
		toolbarTitle: translations.datePickerToolbarTitle,
		className: clsx(classes.root, className)
	}, other, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DatePickerToolbarTitle, {
		variant: "h4",
		align: orientation === "landscape" ? "left" : "center",
		ownerState,
		className: classes.title,
		children: dateText
	}) }));
});
DatePickerToolbar.displayName = "DatePickerToolbar";
DatePickerToolbar.propTypes = {
	classes: import_prop_types.default.object,
	className: import_prop_types.default.string,
	hidden: import_prop_types.default.bool,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	titleId: import_prop_types.default.string,
	toolbarFormat: import_prop_types.default.string,
	toolbarPlaceholder: import_prop_types.default.node
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DatePicker/shared.js
function useDatePickerDefaultizedProps(props, name) {
	const themeProps = useThemeProps({
		props,
		name
	});
	return _extends({}, themeProps, useApplyDefaultValuesToDateValidationProps(themeProps), { localeText: import_react.useMemo(() => {
		if (themeProps.localeText?.toolbarTitle == null) return themeProps.localeText;
		return _extends({}, themeProps.localeText, { datePickerToolbarTitle: themeProps.localeText.toolbarTitle });
	}, [themeProps.localeText]) }, applyDefaultViewProps({
		views: themeProps.views,
		openTo: themeProps.openTo,
		defaultViews: ["year", "day"],
		defaultOpenTo: "day"
	}), { slots: _extends({ toolbar: DatePickerToolbar }, themeProps.slots) });
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/components/PickerPopper/pickerPopperClasses.js
function getPickerPopperUtilityClass(slot) {
	return generateUtilityClass("MuiPickerPopper", slot);
}
generateUtilityClasses("MuiPickerPopper", ["root", "paper"]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/components/PickerPopper/PickerPopper.js
var _excluded$7 = [
	"PaperComponent",
	"ownerState",
	"children",
	"paperSlotProps",
	"paperClasses",
	"onPaperClick",
	"onPaperTouchStart"
];
var useUtilityClasses$2 = (classes) => {
	return composeClasses({
		root: ["root"],
		paper: ["paper"]
	}, getPickerPopperUtilityClass, classes);
};
var PickerPopperRoot = styled(Popper, {
	name: "MuiPickerPopper",
	slot: "Root"
})(({ theme }) => ({ zIndex: theme.zIndex.modal }));
var PickerPopperPaper = styled(Paper, {
	name: "MuiPickerPopper",
	slot: "Paper"
})({
	outline: 0,
	transformOrigin: "top center",
	variants: [{
		props: ({ popperPlacement }) => new Set([
			"top",
			"top-start",
			"top-end"
		]).has(popperPlacement),
		style: { transformOrigin: "bottom center" }
	}]
});
function clickedRootScrollbar(event, doc) {
	return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
/**
* Based on @mui/material/ClickAwayListener without the customization.
* We can probably strip away even more since children won't be portaled.
* @param {boolean} active Only listen to clicks when the popper is opened.
* @param {(event: MouseEvent | TouchEvent) => void} onClickAway The callback to call when clicking outside the popper.
* @returns {Array} The ref and event handler to listen to the outside clicks.
*/
function useClickAwayListener(active, onClickAway) {
	const movedRef = import_react.useRef(false);
	const syntheticEventRef = import_react.useRef(false);
	const nodeRef = import_react.useRef(null);
	const activatedRef = import_react.useRef(false);
	import_react.useEffect(() => {
		if (!active) return;
		function armClickAwayListener() {
			activatedRef.current = true;
		}
		document.addEventListener("mousedown", armClickAwayListener, true);
		document.addEventListener("touchstart", armClickAwayListener, true);
		return () => {
			document.removeEventListener("mousedown", armClickAwayListener, true);
			document.removeEventListener("touchstart", armClickAwayListener, true);
			activatedRef.current = false;
		};
	}, [active]);
	const handleClickAway = useEventCallback((event) => {
		if (!activatedRef.current) return;
		const insideReactTree = syntheticEventRef.current;
		syntheticEventRef.current = false;
		const doc = ownerDocument(nodeRef.current);
		if (!nodeRef.current || "clientX" in event && clickedRootScrollbar(event, doc)) return;
		if (movedRef.current) {
			movedRef.current = false;
			return;
		}
		let insideDOM;
		if (event.composedPath) insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
		else insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
		if (!insideDOM && !insideReactTree) onClickAway(event);
	});
	const handleSynthetic = (event) => {
		if (!event.defaultMuiPrevented) syntheticEventRef.current = true;
	};
	import_react.useEffect(() => {
		if (active) {
			const doc = ownerDocument(nodeRef.current);
			const handleTouchMove = () => {
				movedRef.current = true;
			};
			doc.addEventListener("touchstart", handleClickAway);
			doc.addEventListener("touchmove", handleTouchMove);
			return () => {
				doc.removeEventListener("touchstart", handleClickAway);
				doc.removeEventListener("touchmove", handleTouchMove);
			};
		}
	}, [active, handleClickAway]);
	import_react.useEffect(() => {
		if (active) {
			const doc = ownerDocument(nodeRef.current);
			doc.addEventListener("click", handleClickAway);
			return () => {
				doc.removeEventListener("click", handleClickAway);
				syntheticEventRef.current = false;
			};
		}
	}, [active, handleClickAway]);
	return [
		nodeRef,
		handleSynthetic,
		handleSynthetic
	];
}
var PickerPopperPaperWrapper = /* @__PURE__ */ import_react.forwardRef((props, ref) => {
	const { PaperComponent, ownerState, children, paperSlotProps, paperClasses, onPaperClick, onPaperTouchStart } = props, other = _objectWithoutPropertiesLoose(props, _excluded$7);
	const paperProps = useSlotProps({
		elementType: PaperComponent,
		externalSlotProps: paperSlotProps,
		additionalProps: {
			tabIndex: -1,
			elevation: 8,
			ref
		},
		className: paperClasses,
		ownerState
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperComponent, _extends({}, other, paperProps, {
		onClick: (event) => {
			onPaperClick(event);
			paperProps.onClick?.(event);
		},
		onTouchStart: (event) => {
			onPaperTouchStart(event);
			paperProps.onTouchStart?.(event);
		},
		ownerState,
		children
	}));
});
PickerPopperPaperWrapper.displayName = "PickerPopperPaperWrapper";
function PickerPopper(inProps) {
	const { children, placement = "bottom-start", slots, slotProps, classes: classesProp } = useThemeProps({
		props: inProps,
		name: "MuiPickerPopper"
	});
	const { open, popupRef, reduceAnimations } = usePickerContext();
	const { ownerState: pickerOwnerState, rootRefObject } = usePickerPrivateContext();
	const { dismissViews, getCurrentViewMode, onPopperExited, triggerElement, viewContainerRole } = usePickerPrivateContext();
	import_react.useEffect(() => {
		function handleKeyDown(nativeEvent) {
			if (open && nativeEvent.key === "Escape") dismissViews();
		}
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [dismissViews, open]);
	const lastFocusedElementRef = import_react.useRef(null);
	import_react.useEffect(() => {
		if (viewContainerRole === "tooltip" || getCurrentViewMode() === "field") return;
		if (open) lastFocusedElementRef.current = getActiveElement(rootRefObject.current);
		else if (lastFocusedElementRef.current && lastFocusedElementRef.current instanceof HTMLElement) setTimeout(() => {
			if (lastFocusedElementRef.current instanceof HTMLElement) lastFocusedElementRef.current.focus();
		});
	}, [
		open,
		viewContainerRole,
		getCurrentViewMode,
		rootRefObject
	]);
	const classes = useUtilityClasses$2(classesProp);
	const [clickAwayRef, onPaperClick, onPaperTouchStart] = useClickAwayListener(open, useEventCallback(() => {
		if (viewContainerRole === "tooltip") executeInTheNextEventLoopTick(() => {
			if (rootRefObject.current?.contains(getActiveElement(rootRefObject.current)) || popupRef.current?.contains(getActiveElement(popupRef.current))) return;
			dismissViews();
		});
		else dismissViews();
	}));
	const handlePaperRef = useForkRef(useForkRef(import_react.useRef(null), popupRef), clickAwayRef);
	const handleKeyDown = (event) => {
		if (event.key === "Escape") {
			event.stopPropagation();
			dismissViews();
		}
	};
	const Transition = slots?.desktopTransition ?? reduceAnimations ? Fade : Grow;
	const FocusTrap$1 = slots?.desktopTrapFocus ?? FocusTrap;
	const Paper = slots?.desktopPaper ?? PickerPopperPaper;
	const Popper = slots?.popper ?? PickerPopperRoot;
	const popperProps = useSlotProps({
		elementType: Popper,
		externalSlotProps: slotProps?.popper,
		additionalProps: {
			transition: true,
			role: viewContainerRole == null ? void 0 : viewContainerRole,
			open,
			placement,
			anchorEl: triggerElement,
			onKeyDown: handleKeyDown
		},
		className: classes.root,
		ownerState: pickerOwnerState
	});
	const ownerState = import_react.useMemo(() => _extends({}, pickerOwnerState, { popperPlacement: popperProps.placement }), [pickerOwnerState, popperProps.placement]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popper, _extends({}, popperProps, { children: ({ TransitionProps }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusTrap$1, _extends({
		open,
		disableAutoFocus: true,
		disableRestoreFocus: true,
		disableEnforceFocus: viewContainerRole === "tooltip",
		isEnabled: () => true
	}, slotProps?.desktopTrapFocus, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transition, _extends({}, TransitionProps, slotProps?.desktopTransition, {
		onExited: (event) => {
			onPopperExited?.();
			slotProps?.desktopTransition?.onExited?.(event);
			TransitionProps?.onExited?.();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickerPopperPaperWrapper, {
			PaperComponent: Paper,
			ownerState,
			ref: handlePaperRef,
			onPaperClick,
			onPaperTouchStart,
			paperClasses: classes.paper,
			paperSlotProps: slotProps?.desktopPaper,
			children
		})
	})) })) }));
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/usePicker/hooks/useOrientation.js
function getOrientation() {
	if (typeof window === "undefined") return "portrait";
	if (window.screen && window.screen.orientation && window.screen.orientation.angle) return Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait";
	if (window.orientation) return Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
	return "portrait";
}
function useOrientation(views, customOrientation) {
	const [orientation, setOrientation] = import_react.useState(getOrientation);
	useEnhancedEffect(() => {
		const eventHandler = () => {
			setOrientation(getOrientation());
		};
		window.addEventListener("orientationchange", eventHandler);
		return () => {
			window.removeEventListener("orientationchange", eventHandler);
		};
	}, []);
	if (arrayIncludes(views, [
		"hours",
		"minutes",
		"seconds"
	])) return "portrait";
	return customOrientation ?? orientation;
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/usePicker/hooks/useValueAndOpenStates.js
function useValueAndOpenStates(parameters) {
	const { props, valueManager, validator } = parameters;
	const { value: valueProp, defaultValue: defaultValueProp, onChange, referenceDate, timezone: timezoneProp, onAccept, closeOnSelect, open: openProp, onOpen, onClose } = props;
	const { current: defaultValue } = import_react.useRef(defaultValueProp);
	const { current: isValueControlled } = import_react.useRef(valueProp !== void 0);
	const { current: isOpenControlled } = import_react.useRef(openProp !== void 0);
	const adapter = usePickerAdapter();
	if (props.renderInput != null) warnOnce([
		"MUI X: The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.",
		"You can replace it with the `textField` component slot in most cases.",
		"For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."
	]);
	import_react.useEffect(() => {
		if (isValueControlled !== (valueProp !== void 0)) console.error([
			`MUI X: A component is changing the ${isValueControlled ? "" : "un"}controlled value of a Picker to be ${isValueControlled ? "un" : ""}controlled.`,
			"Elements should not switch from uncontrolled to controlled (or vice versa).",
			"Decide between using a controlled or uncontrolled valuefor the lifetime of the component.",
			"The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
			"More info: https://fb.me/react-controlled-components"
		].join("\n"));
	}, [valueProp]);
	import_react.useEffect(() => {
		if (!isValueControlled && defaultValue !== defaultValueProp) console.error(["MUI X: A component is changing the defaultValue of an uncontrolled Picker after being initialized. To suppress this warning opt to use a controlled value."].join("\n"));
	}, [JSON.stringify(defaultValue)]);
	const { timezone, value, handleValueChange } = useControlledValue({
		name: "a picker component",
		timezone: timezoneProp,
		value: valueProp,
		defaultValue,
		referenceDate,
		onChange,
		valueManager
	});
	const [state, setState] = import_react.useState(() => ({
		open: false,
		lastExternalValue: value,
		clockShallowValue: void 0,
		lastCommittedValue: value,
		hasBeenModifiedSinceMount: false
	}));
	const { getValidationErrorForNewValue } = useValidation({
		props,
		validator,
		timezone,
		value,
		onError: props.onError
	});
	const setOpen = useEventCallback((action) => {
		const newOpen = typeof action === "function" ? action(state.open) : action;
		if (!isOpenControlled) setState((prevState) => _extends({}, prevState, { open: newOpen }));
		if (newOpen && onOpen) onOpen();
		if (!newOpen) onClose?.();
	});
	const setValue = useEventCallback((newValue, options) => {
		const { changeImportance = "accept", skipPublicationIfPristine = false, validationError, shortcut, source, shouldClose = changeImportance === "accept" } = options ?? {};
		let shouldFireOnChange;
		let shouldFireOnAccept;
		if (!skipPublicationIfPristine && !isValueControlled && !state.hasBeenModifiedSinceMount) {
			shouldFireOnChange = true;
			shouldFireOnAccept = changeImportance === "accept";
		} else {
			shouldFireOnChange = !valueManager.areValuesEqual(adapter, newValue, value);
			shouldFireOnAccept = changeImportance === "accept" && !valueManager.areValuesEqual(adapter, newValue, state.lastCommittedValue);
		}
		setState((prevState) => _extends({}, prevState, {
			clockShallowValue: shouldFireOnChange ? void 0 : prevState.clockShallowValue,
			lastCommittedValue: shouldFireOnAccept ? newValue : prevState.lastCommittedValue,
			hasBeenModifiedSinceMount: true
		}));
		let cachedContext = null;
		const getContext = () => {
			if (!cachedContext) {
				let inferredSource;
				if (source) inferredSource = source;
				else if (shortcut) inferredSource = "view";
				else inferredSource = "unknown";
				cachedContext = {
					validationError: validationError == null ? getValidationErrorForNewValue(newValue) : validationError,
					source: inferredSource
				};
				if (shortcut) cachedContext.shortcut = shortcut;
			}
			return cachedContext;
		};
		if (shouldFireOnChange) handleValueChange(newValue, getContext());
		if (shouldFireOnAccept && onAccept) onAccept(newValue, getContext());
		if (shouldClose) setOpen(false);
	});
	if (value !== state.lastExternalValue) setState((prevState) => _extends({}, prevState, {
		lastExternalValue: value,
		clockShallowValue: void 0,
		hasBeenModifiedSinceMount: true
	}));
	const setValueFromView = useEventCallback((newValue, selectionState = "partial") => {
		if (selectionState === "shallow") {
			setState((prev) => _extends({}, prev, {
				clockShallowValue: newValue,
				hasBeenModifiedSinceMount: true
			}));
			return;
		}
		setValue(newValue, {
			changeImportance: selectionState === "finish" && closeOnSelect ? "accept" : "set",
			source: "view"
		});
	});
	import_react.useEffect(() => {
		if (isOpenControlled) {
			if (openProp === void 0) throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
			setState((prevState) => _extends({}, prevState, { open: openProp }));
		}
	}, [isOpenControlled, openProp]);
	return {
		timezone,
		state,
		setValue,
		setValueFromView,
		setOpen,
		value,
		viewValue: import_react.useMemo(() => valueManager.cleanValue(adapter, state.clockShallowValue === void 0 ? value : state.clockShallowValue), [
			adapter,
			valueManager,
			state.clockShallowValue,
			value
		])
	};
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/usePicker/usePicker.js
var _excluded$6 = ["className", "sx"];
var usePicker = ({ ref, props, valueManager, valueType, variant, validator, onPopperExited, autoFocusView, rendererInterceptor: RendererInterceptor, localeText, viewContainerRole, getStepNavigation }) => {
	const { views, view: viewProp, openTo, onViewChange, viewRenderers, reduceAnimations: reduceAnimationsProp, orientation: orientationProp, disableOpenPicker, closeOnSelect, disabled, readOnly, formatDensity, enableAccessibleFieldDOMStructure, selectedSections, onSelectedSectionsChange, format, label, autoFocus, name } = props;
	const { className, sx } = props, propsToForwardToView = _objectWithoutPropertiesLoose(props, _excluded$6);
	/**
	* TODO: Improve how we generate the aria-label and aria-labelledby attributes.
	*/
	const labelId = useId();
	const adapter = usePickerAdapter();
	const reduceAnimations = useReduceAnimations(reduceAnimationsProp);
	const orientation = useOrientation(views, orientationProp);
	const { current: initialView } = import_react.useRef(openTo ?? null);
	/**
	* Refs
	*/
	const [triggerElement, triggerRef] = import_react.useState(null);
	const popupRef = import_react.useRef(null);
	const fieldRef = import_react.useRef(null);
	const rootRefObject = import_react.useRef(null);
	const rootRef = useForkRef(ref, rootRefObject);
	const { timezone, state, setOpen, setValue, setValueFromView, value, viewValue } = useValueAndOpenStates({
		props,
		valueManager,
		validator
	});
	const { view, setView, defaultView, focusedView, setFocusedView, setValueAndGoToNextView, goToNextStep, hasNextStep, hasSeveralSteps } = useViews({
		view: viewProp,
		views,
		openTo,
		onChange: setValueFromView,
		onViewChange,
		autoFocus: autoFocusView,
		getStepNavigation
	});
	const clearValue = useEventCallback(() => setValue(valueManager.emptyValue, { source: "view" }));
	const setValueToToday = useEventCallback(() => setValue(valueManager.getTodayValue(adapter, timezone, valueType), { source: "view" }));
	const acceptValueChanges = useEventCallback(() => setValue(value, { source: "view" }));
	const cancelValueChanges = useEventCallback(() => setValue(state.lastCommittedValue, {
		skipPublicationIfPristine: true,
		source: "view"
	}));
	const dismissViews = useEventCallback(() => {
		setValue(value, {
			skipPublicationIfPristine: true,
			source: "view"
		});
	});
	const { hasUIView, viewModeLookup, timeViewsCount } = import_react.useMemo(() => views.reduce((acc, viewForReduce) => {
		const viewMode = viewRenderers[viewForReduce] == null ? "field" : "UI";
		acc.viewModeLookup[viewForReduce] = viewMode;
		if (viewMode === "UI") {
			acc.hasUIView = true;
			if (isTimeView(viewForReduce)) acc.timeViewsCount += 1;
		}
		return acc;
	}, {
		hasUIView: false,
		viewModeLookup: {},
		timeViewsCount: 0
	}), [viewRenderers, views]);
	const currentViewMode = viewModeLookup[view];
	const getCurrentViewMode = useEventCallback(() => currentViewMode);
	const [popperView, setPopperView] = import_react.useState(currentViewMode === "UI" ? view : null);
	if (popperView !== view && viewModeLookup[view] === "UI") setPopperView(view);
	useEnhancedEffect(() => {
		if (currentViewMode === "field" && state.open) {
			setOpen(false);
			setTimeout(() => {
				fieldRef?.current?.setSelectedSections(view);
				fieldRef?.current?.focusField(view);
			});
		}
	}, [view]);
	useEnhancedEffect(() => {
		if (!state.open) return;
		let newView = view;
		if (currentViewMode === "field" && popperView != null) newView = popperView;
		if (newView !== defaultView && viewModeLookup[newView] === "UI" && viewModeLookup[defaultView] === "UI") newView = defaultView;
		if (newView !== view) setView(newView);
		setFocusedView(newView, true);
	}, [state.open]);
	const ownerState = import_react.useMemo(() => ({
		isPickerValueEmpty: valueManager.areValuesEqual(adapter, value, valueManager.emptyValue),
		isPickerOpen: state.open,
		isPickerDisabled: props.disabled ?? false,
		isPickerReadOnly: props.readOnly ?? false,
		pickerOrientation: orientation,
		pickerVariant: variant
	}), [
		adapter,
		valueManager,
		value,
		state.open,
		orientation,
		variant,
		props.disabled,
		props.readOnly
	]);
	const triggerStatus = import_react.useMemo(() => {
		if (disableOpenPicker || !hasUIView) return "hidden";
		if (disabled || readOnly) return "disabled";
		return "enabled";
	}, [
		disableOpenPicker,
		hasUIView,
		disabled,
		readOnly
	]);
	const wrappedGoToNextStep = useEventCallback(goToNextStep);
	const defaultActionBarActions = import_react.useMemo(() => {
		if (closeOnSelect && !hasSeveralSteps) return [];
		return ["cancel", "nextOrAccept"];
	}, [closeOnSelect, hasSeveralSteps]);
	const actionsContextValue = import_react.useMemo(() => ({
		setValue,
		setOpen,
		clearValue,
		setValueToToday,
		acceptValueChanges,
		cancelValueChanges,
		setView,
		goToNextStep: wrappedGoToNextStep
	}), [
		setValue,
		setOpen,
		clearValue,
		setValueToToday,
		acceptValueChanges,
		cancelValueChanges,
		setView,
		wrappedGoToNextStep
	]);
	const contextValue = import_react.useMemo(() => _extends({}, actionsContextValue, {
		value,
		timezone,
		open: state.open,
		views,
		view: popperView,
		initialView,
		disabled: disabled ?? false,
		readOnly: readOnly ?? false,
		autoFocus: autoFocus ?? false,
		variant,
		orientation,
		popupRef,
		reduceAnimations,
		triggerRef,
		triggerStatus,
		hasNextStep,
		fieldFormat: format ?? "",
		name,
		label,
		rootSx: sx,
		rootRef,
		rootClassName: className
	}), [
		actionsContextValue,
		value,
		rootRef,
		variant,
		orientation,
		reduceAnimations,
		disabled,
		readOnly,
		format,
		className,
		name,
		label,
		sx,
		triggerStatus,
		hasNextStep,
		timezone,
		state.open,
		popperView,
		views,
		initialView,
		autoFocus
	]);
	const privateContextValue = import_react.useMemo(() => ({
		dismissViews,
		ownerState,
		hasUIView,
		getCurrentViewMode,
		rootRefObject,
		labelId,
		triggerElement,
		viewContainerRole,
		defaultActionBarActions,
		onPopperExited
	}), [
		dismissViews,
		ownerState,
		hasUIView,
		getCurrentViewMode,
		labelId,
		triggerElement,
		viewContainerRole,
		defaultActionBarActions,
		onPopperExited
	]);
	const fieldPrivateContextValue = import_react.useMemo(() => ({
		formatDensity,
		enableAccessibleFieldDOMStructure,
		selectedSections,
		onSelectedSectionsChange,
		fieldRef
	}), [
		formatDensity,
		enableAccessibleFieldDOMStructure,
		selectedSections,
		onSelectedSectionsChange,
		fieldRef
	]);
	const isValidContextValue = (testedValue) => {
		const error = validator({
			adapter,
			value: testedValue,
			timezone,
			props
		});
		return !valueManager.hasError(error);
	};
	const renderCurrentView = () => {
		if (popperView == null) return null;
		const renderer = viewRenderers[popperView];
		if (renderer == null) return null;
		const rendererProps = _extends({}, propsToForwardToView, {
			views,
			timezone,
			value: viewValue,
			onChange: setValueAndGoToNextView,
			view: popperView,
			onViewChange: setView,
			showViewSwitcher: timeViewsCount > 1,
			timeViewsCount
		}, viewContainerRole === "tooltip" ? {
			focusedView: null,
			onFocusedViewChange: () => {}
		} : {
			focusedView,
			onFocusedViewChange: setFocusedView
		});
		if (RendererInterceptor) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RendererInterceptor, {
			viewRenderers,
			popperView,
			rendererProps
		});
		return renderer(rendererProps);
	};
	return {
		providerProps: {
			localeText,
			contextValue,
			privateContextValue,
			actionsContextValue,
			fieldPrivateContextValue,
			isValidContextValue
		},
		renderCurrentView,
		ownerState
	};
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersLayout/pickersLayoutClasses.js
function getPickersLayoutUtilityClass(slot) {
	return generateUtilityClass("MuiPickersLayout", slot);
}
var pickersLayoutClasses = generateUtilityClasses("MuiPickersLayout", [
	"root",
	"landscape",
	"contentWrapper",
	"toolbar",
	"actionBar",
	"tabs",
	"shortcuts"
]);
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersActionBar/PickersActionBar.js
var _excluded$5 = ["actions"];
var PickersActionBarRoot = styled(DialogActions, {
	name: "MuiPickersLayout",
	slot: "ActionBar"
})({});
/**
* Demos:
*
* - [Custom slots and subcomponents](https://mui.com/x/react-date-pickers/custom-components/)
* - [Custom layout](https://mui.com/x/react-date-pickers/custom-layout/)
*
* API:
*
* - [PickersActionBar API](https://mui.com/x/api/date-pickers/pickers-action-bar/)
*/
function PickersActionBarComponent(props) {
	const { actions } = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
	const translations = usePickerTranslations();
	const { clearValue, setValueToToday, acceptValueChanges, cancelValueChanges, goToNextStep, hasNextStep } = usePickerContext();
	if (actions == null || actions.length === 0) return null;
	const buttons = actions?.map((actionType) => {
		switch (actionType) {
			case "clear": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: clearValue,
				children: translations.clearButtonLabel
			}, actionType);
			case "cancel": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: cancelValueChanges,
				children: translations.cancelButtonLabel
			}, actionType);
			case "accept": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: acceptValueChanges,
				children: translations.okButtonLabel
			}, actionType);
			case "today": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: setValueToToday,
				children: translations.todayButtonLabel
			}, actionType);
			case "next": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: goToNextStep,
				children: translations.nextStepButtonLabel
			}, actionType);
			case "nextOrAccept":
				if (hasNextStep) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: goToNextStep,
					children: translations.nextStepButtonLabel
				}, actionType);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: acceptValueChanges,
					children: translations.okButtonLabel
				}, actionType);
			default: return null;
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersActionBarRoot, _extends({}, other, { children: buttons }));
}
PickersActionBarComponent.propTypes = {
	actions: import_prop_types.default.arrayOf(import_prop_types.default.oneOf([
		"accept",
		"cancel",
		"clear",
		"next",
		"nextOrAccept",
		"today"
	]).isRequired),
	disableSpacing: import_prop_types.default.bool,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	])
};
var PickersActionBar = /* @__PURE__ */ import_react.memo(PickersActionBarComponent);
PickersActionBar.displayName = "PickersActionBar";
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersShortcuts/PickersShortcuts.js
var _excluded$4 = ["items", "changeImportance"], _excluded2$2 = ["getValue"];
var PickersShortcutsRoot = styled(List, {
	name: "MuiPickersLayout",
	slot: "Shortcuts"
})({});
/**
* Demos:
*
* - [Shortcuts](https://mui.com/x/react-date-pickers/shortcuts/)
*
* API:
*
* - [PickersShortcuts API](https://mui.com/x/api/date-pickers/pickers-shortcuts/)
*/
function PickersShortcuts(props) {
	const { items, changeImportance = "accept" } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
	const { setValue } = usePickerActionsContext();
	const isValidValue = useIsValidValue();
	if (items == null || items.length === 0) return null;
	const resolvedItems = items.map((_ref) => {
		let { getValue } = _ref, item = _objectWithoutPropertiesLoose(_ref, _excluded2$2);
		const newValue = getValue({ isValid: isValidValue });
		return _extends({}, item, {
			label: item.label,
			onClick: () => {
				setValue(newValue, {
					changeImportance,
					shortcut: item,
					source: "view"
				});
			},
			disabled: !isValidValue(newValue)
		});
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersShortcutsRoot, _extends({
		dense: true,
		sx: [{
			maxHeight: 336,
			maxWidth: 200,
			overflow: "auto"
		}, ...Array.isArray(other.sx) ? other.sx : [other.sx]]
	}, other, { children: resolvedItems.map((item) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, _extends({}, item)) }, item.id ?? item.label);
	}) }));
}
PickersShortcuts.propTypes = {
	changeImportance: import_prop_types.default.oneOf(["accept", "set"]),
	className: import_prop_types.default.string,
	component: import_prop_types.default.elementType,
	dense: import_prop_types.default.bool,
	disablePadding: import_prop_types.default.bool,
	items: import_prop_types.default.arrayOf(import_prop_types.default.shape({
		getValue: import_prop_types.default.func.isRequired,
		id: import_prop_types.default.string,
		label: import_prop_types.default.string.isRequired
	})),
	style: import_prop_types.default.object,
	subheader: import_prop_types.default.node,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	])
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersLayout/usePickerLayout.js
var _excluded$3 = ["ownerState"];
function toolbarHasView(toolbarProps) {
	return toolbarProps.view !== null;
}
var useUtilityClasses$1 = (classes, ownerState) => {
	const { pickerOrientation } = ownerState;
	return composeClasses({
		root: ["root", pickerOrientation === "landscape" && "landscape"],
		contentWrapper: ["contentWrapper"],
		toolbar: ["toolbar"],
		actionBar: ["actionBar"],
		tabs: ["tabs"],
		landscape: ["landscape"],
		shortcuts: ["shortcuts"]
	}, getPickersLayoutUtilityClass, classes);
};
var usePickerLayout = (props) => {
	const { ownerState: pickerOwnerState, defaultActionBarActions } = usePickerPrivateContext();
	const { view } = usePickerContext();
	const isRtl = useRtl();
	const { children, slots, slotProps, classes: classesProp } = props;
	const ownerState = import_react.useMemo(() => _extends({}, pickerOwnerState, {
		layoutDirection: isRtl ? "rtl" : "ltr",
		hasShortcuts: false
	}), [pickerOwnerState, isRtl]);
	const classes = useUtilityClasses$1(classesProp, ownerState);
	const ActionBar = slots?.actionBar ?? PickersActionBar;
	const actionBar = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBar, _extends({}, _objectWithoutPropertiesLoose(useSlotProps({
		elementType: ActionBar,
		externalSlotProps: slotProps?.actionBar,
		additionalProps: { actions: defaultActionBarActions },
		className: classes.actionBar,
		ownerState
	}), _excluded$3)));
	const Toolbar = slots?.toolbar;
	const toolbarProps = useSlotProps({
		elementType: Toolbar,
		externalSlotProps: slotProps?.toolbar,
		className: classes.toolbar,
		ownerState
	});
	const toolbar = toolbarHasView(toolbarProps) && !!Toolbar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toolbar, _extends({}, toolbarProps)) : null;
	const content = children;
	const Tabs = slots?.tabs;
	const tabs = view && Tabs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, _extends({ className: classes.tabs }, slotProps?.tabs)) : null;
	const Shortcuts = slots?.shortcuts ?? PickersShortcuts;
	const shortcutsProps = useSlotProps({
		elementType: Shortcuts,
		externalSlotProps: slotProps?.shortcuts,
		className: classes.shortcuts,
		ownerState
	});
	const hasShortcuts = Array.isArray(shortcutsProps?.items) && shortcutsProps.items.length > 0;
	return {
		toolbar,
		content,
		tabs,
		actionBar,
		shortcuts: view && !!Shortcuts ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shortcuts, _extends({}, shortcutsProps)) : null,
		ownerState: _extends({}, ownerState, { hasShortcuts })
	};
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/PickersLayout/PickersLayout.js
var useUtilityClasses = (classes, ownerState) => {
	const { pickerOrientation } = ownerState;
	return composeClasses({
		root: ["root", pickerOrientation === "landscape" && "landscape"],
		contentWrapper: ["contentWrapper"]
	}, getPickersLayoutUtilityClass, classes);
};
var PickersLayoutRoot = styled("div", {
	name: "MuiPickersLayout",
	slot: "Root"
})({
	display: "grid",
	gridAutoColumns: "max-content auto max-content",
	gridAutoRows: "max-content auto max-content",
	[`& .${pickersLayoutClasses.actionBar}`]: {
		gridColumn: "1 / 4",
		gridRow: 3
	},
	variants: [
		{
			props: {
				pickerOrientation: "landscape",
				hasShortcuts: false
			},
			style: { [`& .${pickersLayoutClasses.toolbar}`]: {
				gridColumn: 1,
				gridRow: "1 / 3"
			} }
		},
		{
			props: {
				pickerOrientation: "landscape",
				hasShortcuts: true
			},
			style: {
				[`& .${pickersLayoutClasses.toolbar}`]: {
					gridColumn: "2 / 4",
					gridRow: 1,
					maxWidth: "max-content"
				},
				[`& .${pickersLayoutClasses.shortcuts}`]: {
					gridColumn: 1,
					gridRow: 2
				}
			}
		},
		{
			props: { pickerOrientation: "portrait" },
			style: {
				[`& .${pickersLayoutClasses.toolbar}`]: {
					gridColumn: "2 / 4",
					gridRow: 1
				},
				[`& .${pickersLayoutClasses.shortcuts}`]: {
					gridColumn: 1,
					gridRow: "2 / 3"
				}
			}
		},
		{
			props: {
				hasShortcuts: true,
				layoutDirection: "rtl"
			},
			style: { [`& .${pickersLayoutClasses.shortcuts}`]: { gridColumn: 4 } }
		}
	]
});
var PickersLayoutContentWrapper = styled("div", {
	name: "MuiPickersLayout",
	slot: "ContentWrapper"
})({
	gridColumn: "2 / 4",
	gridRow: 2,
	display: "flex",
	flexDirection: "column"
});
/**
* Demos:
*
* - [Custom layout](https://mui.com/x/react-date-pickers/custom-layout/)
*
* API:
*
* - [PickersLayout API](https://mui.com/x/api/date-pickers/pickers-layout/)
*/
var PickersLayout = /* @__PURE__ */ import_react.forwardRef(function PickersLayout(inProps, ref) {
	const props = useThemeProps({
		props: inProps,
		name: "MuiPickersLayout"
	});
	const { toolbar, content, tabs, actionBar, shortcuts, ownerState } = usePickerLayout(props);
	const { orientation, variant } = usePickerContext();
	const { sx, className, classes: classesProp } = props;
	const classes = useUtilityClasses(classesProp, ownerState);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PickersLayoutRoot, {
		ref,
		sx,
		className: clsx(classes.root, className),
		ownerState,
		children: [
			orientation === "landscape" ? shortcuts : toolbar,
			orientation === "landscape" ? toolbar : shortcuts,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersLayoutContentWrapper, {
				className: classes.contentWrapper,
				ownerState,
				children: variant === "desktop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [content, tabs] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [tabs, content] })
			}),
			actionBar
		]
	});
});
PickersLayout.displayName = "PickersLayout";
PickersLayout.propTypes = {
	children: import_prop_types.default.node,
	classes: import_prop_types.default.object,
	className: import_prop_types.default.string,
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	])
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/utils/createNonRangePickerStepNavigation.js
function createNonRangePickerStepNavigation(parameters) {
	const { steps } = parameters;
	return createStepNavigation({
		steps,
		isViewMatchingStep: (view, step) => {
			return step.views == null || step.views.includes(view);
		},
		onStepChange: ({ step, defaultView, setView, view, views }) => {
			const targetView = step.views == null ? defaultView : step.views.find((viewBis) => views.includes(viewBis));
			if (targetView !== view) setView(targetView);
		}
	});
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useDesktopPicker/useDesktopPicker.js
/**
* Hook managing all the single-date desktop pickers:
* - DesktopDatePicker
* - DesktopDateTimePicker
* - DesktopTimePicker
*/
var _excluded$2 = ["props", "steps"], _excluded2$1 = ["ownerState"];
var useDesktopPicker = (_ref) => {
	let { props, steps } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded$2);
	const { slots, slotProps: innerSlotProps, label, inputRef, localeText } = props;
	const { providerProps, renderCurrentView, ownerState } = usePicker(_extends({}, pickerParams, {
		props,
		localeText,
		autoFocusView: true,
		viewContainerRole: "dialog",
		variant: "desktop",
		getStepNavigation: createNonRangePickerStepNavigation({ steps })
	}));
	const labelId = providerProps.privateContextValue.labelId;
	const isToolbarHidden = innerSlotProps?.toolbar?.hidden ?? false;
	const Field = slots.field;
	const fieldProps = _objectWithoutPropertiesLoose(useSlotProps({
		elementType: Field,
		externalSlotProps: innerSlotProps?.field,
		additionalProps: _extends({}, isToolbarHidden && { id: labelId }),
		ownerState
	}), _excluded2$1);
	const Layout = slots.layout ?? PickersLayout;
	let labelledById = labelId;
	if (isToolbarHidden) if (label) labelledById = `${labelId}-label`;
	else labelledById = void 0;
	const slotProps = _extends({}, innerSlotProps, {
		toolbar: _extends({}, innerSlotProps?.toolbar, { titleId: labelId }),
		popper: _extends({ "aria-labelledby": labelledById }, innerSlotProps?.popper)
	});
	const renderPicker = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PickerProvider, _extends({}, providerProps, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, _extends({}, fieldProps, {
		slots: _extends({}, slots, fieldProps.slots),
		slotProps: _extends({}, slotProps, fieldProps.slotProps),
		inputRef
	})), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickerPopper, {
		slots,
		slotProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, _extends({}, slotProps?.layout, {
			slots,
			slotProps,
			children: renderCurrentView()
		}))
	})] }));
	renderPicker.displayName = "renderPicker";
	return { renderPicker };
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/dateViewRenderers/dateViewRenderers.js
var renderDateViewCalendar = ({ view, onViewChange, views, focusedView, onFocusedViewChange, value, defaultValue, referenceDate, onChange, className, classes, disableFuture, disablePast, minDate, maxDate, shouldDisableDate, shouldDisableMonth, shouldDisableYear, reduceAnimations, onMonthChange, monthsPerRow, onYearChange, yearsOrder, yearsPerRow, slots, slotProps, loading, renderLoading, disableHighlightToday, readOnly, disabled, showDaysOutsideCurrentMonth, dayOfWeekFormatter, sx, autoFocus, fixedWeekNumber, displayWeekNumber, timezone }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateCalendar, {
	view,
	onViewChange,
	views: views.filter(isDatePickerView),
	focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
	onFocusedViewChange,
	value,
	defaultValue,
	referenceDate,
	onChange,
	className,
	classes,
	disableFuture,
	disablePast,
	minDate,
	maxDate,
	shouldDisableDate,
	shouldDisableMonth,
	shouldDisableYear,
	reduceAnimations,
	onMonthChange,
	monthsPerRow,
	onYearChange,
	yearsOrder,
	yearsPerRow,
	slots,
	slotProps,
	loading,
	renderLoading,
	disableHighlightToday,
	readOnly,
	disabled,
	showDaysOutsideCurrentMonth,
	dayOfWeekFormatter,
	sx,
	autoFocus,
	fixedWeekNumber,
	displayWeekNumber,
	timezone
});
renderDateViewCalendar.displayName = "renderDateViewCalendar";
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DesktopDatePicker/DesktopDatePicker.js
/**
* Demos:
*
* - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
* - [Validation](https://mui.com/x/react-date-pickers/validation/)
*
* API:
*
* - [DesktopDatePicker API](https://mui.com/x/api/date-pickers/desktop-date-picker/)
*/
var DesktopDatePicker = /* @__PURE__ */ import_react.forwardRef(function DesktopDatePicker(inProps, ref) {
	const adapter = usePickerAdapter();
	const defaultizedProps = useDatePickerDefaultizedProps(inProps, "MuiDesktopDatePicker");
	const viewRenderers = _extends({
		day: renderDateViewCalendar,
		month: renderDateViewCalendar,
		year: renderDateViewCalendar
	}, defaultizedProps.viewRenderers);
	const { renderPicker } = useDesktopPicker({
		ref,
		props: _extends({}, defaultizedProps, {
			closeOnSelect: defaultizedProps.closeOnSelect ?? true,
			viewRenderers,
			format: resolveDateFormat(adapter, defaultizedProps, false),
			yearsPerRow: defaultizedProps.yearsPerRow ?? 4,
			slots: _extends({ field: DateField }, defaultizedProps.slots),
			slotProps: _extends({}, defaultizedProps.slotProps, {
				field: (ownerState) => _extends({}, resolveComponentProps(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps)),
				toolbar: _extends({ hidden: true }, defaultizedProps.slotProps?.toolbar)
			})
		}),
		valueManager: singleItemValueManager,
		valueType: "date",
		validator: validateDate,
		steps: null
	});
	return renderPicker();
});
DesktopDatePicker.displayName = "DesktopDatePicker";
DesktopDatePicker.propTypes = {
	autoFocus: import_prop_types.default.bool,
	className: import_prop_types.default.string,
	closeOnSelect: import_prop_types.default.bool,
	dayOfWeekFormatter: import_prop_types.default.func,
	defaultValue: import_prop_types.default.object,
	disabled: import_prop_types.default.bool,
	disableFuture: import_prop_types.default.bool,
	disableHighlightToday: import_prop_types.default.bool,
	disableOpenPicker: import_prop_types.default.bool,
	disablePast: import_prop_types.default.bool,
	displayWeekNumber: import_prop_types.default.bool,
	enableAccessibleFieldDOMStructure: import_prop_types.default.any,
	fixedWeekNumber: import_prop_types.default.number,
	format: import_prop_types.default.string,
	formatDensity: import_prop_types.default.oneOf(["dense", "spacious"]),
	inputRef: refType,
	label: import_prop_types.default.node,
	loading: import_prop_types.default.bool,
	localeText: import_prop_types.default.object,
	maxDate: import_prop_types.default.object,
	minDate: import_prop_types.default.object,
	monthsPerRow: import_prop_types.default.oneOf([3, 4]),
	name: import_prop_types.default.string,
	onAccept: import_prop_types.default.func,
	onChange: import_prop_types.default.func,
	onClose: import_prop_types.default.func,
	onError: import_prop_types.default.func,
	onMonthChange: import_prop_types.default.func,
	onOpen: import_prop_types.default.func,
	onSelectedSectionsChange: import_prop_types.default.func,
	onViewChange: import_prop_types.default.func,
	onYearChange: import_prop_types.default.func,
	open: import_prop_types.default.bool,
	openTo: import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]),
	orientation: import_prop_types.default.oneOf(["landscape", "portrait"]),
	readOnly: import_prop_types.default.bool,
	reduceAnimations: import_prop_types.default.bool,
	referenceDate: import_prop_types.default.object,
	renderLoading: import_prop_types.default.func,
	selectedSections: import_prop_types.default.oneOfType([import_prop_types.default.oneOf([
		"all",
		"day",
		"empty",
		"hours",
		"meridiem",
		"minutes",
		"month",
		"seconds",
		"weekDay",
		"year"
	]), import_prop_types.default.number]),
	shouldDisableDate: import_prop_types.default.func,
	shouldDisableMonth: import_prop_types.default.func,
	shouldDisableYear: import_prop_types.default.func,
	showDaysOutsideCurrentMonth: import_prop_types.default.bool,
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	timezone: import_prop_types.default.string,
	value: import_prop_types.default.object,
	view: import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]),
	viewRenderers: import_prop_types.default.shape({
		day: import_prop_types.default.func,
		month: import_prop_types.default.func,
		year: import_prop_types.default.func
	}),
	views: import_prop_types.default.arrayOf(import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]).isRequired),
	yearsOrder: import_prop_types.default.oneOf(["asc", "desc"]),
	yearsPerRow: import_prop_types.default.oneOf([3, 4])
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/components/PickersModalDialog.js
var PickersModalDialogRoot = styled(Dialog, { slot: "internal" })({
	[`& .${dialogClasses.container}`]: { outline: 0 },
	[`& .${dialogClasses.paper}`]: {
		outline: 0,
		minWidth: 320
	}
});
var PickersModalDialogContent = styled(DialogContent, { slot: "internal" })({ "&:first-of-type": { padding: 0 } });
function PickersModalDialog(props) {
	const { children, slots, slotProps } = props;
	const { open } = usePickerContext();
	const { dismissViews, onPopperExited } = usePickerPrivateContext();
	const Dialog = slots?.dialog ?? PickersModalDialogRoot;
	const Transition = slots?.mobileTransition ?? Fade;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, _extends({
		open,
		onClose: () => {
			dismissViews();
			onPopperExited?.();
		}
	}, slotProps?.dialog, {
		TransitionComponent: Transition,
		TransitionProps: slotProps?.mobileTransition,
		PaperComponent: slots?.mobilePaper,
		PaperProps: slotProps?.mobilePaper,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersModalDialogContent, { children })
	}));
}
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/internals/hooks/useMobilePicker/useMobilePicker.js
/**
* Hook managing all the single-date mobile pickers:
* - MobileDatePicker
* - MobileDateTimePicker
* - MobileTimePicker
*/
var _excluded$1 = ["props", "steps"], _excluded2 = ["ownerState"];
var useMobilePicker = (_ref) => {
	let { props, steps } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded$1);
	const { slots, slotProps: innerSlotProps, label, inputRef, localeText } = props;
	const { providerProps, renderCurrentView, ownerState } = usePicker(_extends({}, pickerParams, {
		props,
		localeText,
		autoFocusView: true,
		viewContainerRole: "dialog",
		variant: "mobile",
		getStepNavigation: createNonRangePickerStepNavigation({ steps })
	}));
	const labelId = providerProps.privateContextValue.labelId;
	const isToolbarHidden = innerSlotProps?.toolbar?.hidden ?? false;
	const Field = slots.field;
	const fieldProps = _objectWithoutPropertiesLoose(useSlotProps({
		elementType: Field,
		externalSlotProps: innerSlotProps?.field,
		additionalProps: _extends({}, isToolbarHidden && { id: labelId }),
		ownerState
	}), _excluded2);
	const Layout = slots.layout ?? PickersLayout;
	let labelledById = labelId;
	if (isToolbarHidden) if (label) labelledById = `${labelId}-label`;
	else labelledById = void 0;
	const slotProps = _extends({}, innerSlotProps, {
		toolbar: _extends({}, innerSlotProps?.toolbar, { titleId: labelId }),
		mobilePaper: _extends({ "aria-labelledby": labelledById }, innerSlotProps?.mobilePaper)
	});
	const renderPicker = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PickerProvider, _extends({}, providerProps, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, _extends({}, fieldProps, {
		slots: _extends({}, slots, fieldProps.slots),
		slotProps: _extends({}, slotProps, fieldProps.slotProps),
		inputRef
	})), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickersModalDialog, {
		slots,
		slotProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, _extends({}, slotProps?.layout, {
			slots,
			slotProps,
			children: renderCurrentView()
		}))
	})] }));
	renderPicker.displayName = "renderPicker";
	return { renderPicker };
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/MobileDatePicker/MobileDatePicker.js
/**
* Demos:
*
* - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
* - [Validation](https://mui.com/x/react-date-pickers/validation/)
*
* API:
*
* - [MobileDatePicker API](https://mui.com/x/api/date-pickers/mobile-date-picker/)
*/
var MobileDatePicker = /* @__PURE__ */ import_react.forwardRef(function MobileDatePicker(inProps, ref) {
	const adapter = usePickerAdapter();
	const defaultizedProps = useDatePickerDefaultizedProps(inProps, "MuiMobileDatePicker");
	const { renderPicker } = useMobilePicker({
		ref,
		props: _extends({}, defaultizedProps, {
			viewRenderers: _extends({
				day: renderDateViewCalendar,
				month: renderDateViewCalendar,
				year: renderDateViewCalendar
			}, defaultizedProps.viewRenderers),
			format: resolveDateFormat(adapter, defaultizedProps, false),
			slots: _extends({ field: DateField }, defaultizedProps.slots),
			slotProps: _extends({}, defaultizedProps.slotProps, {
				field: (ownerState) => _extends({}, resolveComponentProps(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps)),
				toolbar: _extends({ hidden: false }, defaultizedProps.slotProps?.toolbar)
			})
		}),
		valueManager: singleItemValueManager,
		valueType: "date",
		validator: validateDate,
		steps: null
	});
	return renderPicker();
});
MobileDatePicker.displayName = "MobileDatePicker";
MobileDatePicker.propTypes = {
	autoFocus: import_prop_types.default.bool,
	className: import_prop_types.default.string,
	closeOnSelect: import_prop_types.default.bool,
	dayOfWeekFormatter: import_prop_types.default.func,
	defaultValue: import_prop_types.default.object,
	disabled: import_prop_types.default.bool,
	disableFuture: import_prop_types.default.bool,
	disableHighlightToday: import_prop_types.default.bool,
	disableOpenPicker: import_prop_types.default.bool,
	disablePast: import_prop_types.default.bool,
	displayWeekNumber: import_prop_types.default.bool,
	enableAccessibleFieldDOMStructure: import_prop_types.default.any,
	fixedWeekNumber: import_prop_types.default.number,
	format: import_prop_types.default.string,
	formatDensity: import_prop_types.default.oneOf(["dense", "spacious"]),
	inputRef: refType,
	label: import_prop_types.default.node,
	loading: import_prop_types.default.bool,
	localeText: import_prop_types.default.object,
	maxDate: import_prop_types.default.object,
	minDate: import_prop_types.default.object,
	monthsPerRow: import_prop_types.default.oneOf([3, 4]),
	name: import_prop_types.default.string,
	onAccept: import_prop_types.default.func,
	onChange: import_prop_types.default.func,
	onClose: import_prop_types.default.func,
	onError: import_prop_types.default.func,
	onMonthChange: import_prop_types.default.func,
	onOpen: import_prop_types.default.func,
	onSelectedSectionsChange: import_prop_types.default.func,
	onViewChange: import_prop_types.default.func,
	onYearChange: import_prop_types.default.func,
	open: import_prop_types.default.bool,
	openTo: import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]),
	orientation: import_prop_types.default.oneOf(["landscape", "portrait"]),
	readOnly: import_prop_types.default.bool,
	reduceAnimations: import_prop_types.default.bool,
	referenceDate: import_prop_types.default.object,
	renderLoading: import_prop_types.default.func,
	selectedSections: import_prop_types.default.oneOfType([import_prop_types.default.oneOf([
		"all",
		"day",
		"empty",
		"hours",
		"meridiem",
		"minutes",
		"month",
		"seconds",
		"weekDay",
		"year"
	]), import_prop_types.default.number]),
	shouldDisableDate: import_prop_types.default.func,
	shouldDisableMonth: import_prop_types.default.func,
	shouldDisableYear: import_prop_types.default.func,
	showDaysOutsideCurrentMonth: import_prop_types.default.bool,
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	timezone: import_prop_types.default.string,
	value: import_prop_types.default.object,
	view: import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]),
	viewRenderers: import_prop_types.default.shape({
		day: import_prop_types.default.func,
		month: import_prop_types.default.func,
		year: import_prop_types.default.func
	}),
	views: import_prop_types.default.arrayOf(import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]).isRequired),
	yearsOrder: import_prop_types.default.oneOf(["asc", "desc"]),
	yearsPerRow: import_prop_types.default.oneOf([3, 4])
};
//#endregion
//#region node_modules/@mui/x-date-pickers/esm/DatePicker/DatePicker.js
var _excluded = ["desktopModeMediaQuery"];
/**
* Demos:
*
* - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
* - [Validation](https://mui.com/x/react-date-pickers/validation/)
*
* API:
*
* - [DatePicker API](https://mui.com/x/api/date-pickers/date-picker/)
*/
var DatePicker = /* @__PURE__ */ import_react.forwardRef(function DatePicker(inProps, ref) {
	const props = useThemeProps({
		props: inProps,
		name: "MuiDatePicker"
	});
	const { desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
	if (useMediaQuery(desktopModeMediaQuery, { defaultMatches: true })) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopDatePicker, _extends({ ref }, other));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileDatePicker, _extends({ ref }, other));
});
DatePicker.displayName = "DatePicker";
DatePicker.propTypes = {
	autoFocus: import_prop_types.default.bool,
	className: import_prop_types.default.string,
	closeOnSelect: import_prop_types.default.bool,
	dayOfWeekFormatter: import_prop_types.default.func,
	defaultValue: import_prop_types.default.object,
	desktopModeMediaQuery: import_prop_types.default.string,
	disabled: import_prop_types.default.bool,
	disableFuture: import_prop_types.default.bool,
	disableHighlightToday: import_prop_types.default.bool,
	disableOpenPicker: import_prop_types.default.bool,
	disablePast: import_prop_types.default.bool,
	displayWeekNumber: import_prop_types.default.bool,
	enableAccessibleFieldDOMStructure: import_prop_types.default.any,
	fixedWeekNumber: import_prop_types.default.number,
	format: import_prop_types.default.string,
	formatDensity: import_prop_types.default.oneOf(["dense", "spacious"]),
	inputRef: refType,
	label: import_prop_types.default.node,
	loading: import_prop_types.default.bool,
	localeText: import_prop_types.default.object,
	maxDate: import_prop_types.default.object,
	minDate: import_prop_types.default.object,
	monthsPerRow: import_prop_types.default.oneOf([3, 4]),
	name: import_prop_types.default.string,
	onAccept: import_prop_types.default.func,
	onChange: import_prop_types.default.func,
	onClose: import_prop_types.default.func,
	onError: import_prop_types.default.func,
	onMonthChange: import_prop_types.default.func,
	onOpen: import_prop_types.default.func,
	onSelectedSectionsChange: import_prop_types.default.func,
	onViewChange: import_prop_types.default.func,
	onYearChange: import_prop_types.default.func,
	open: import_prop_types.default.bool,
	openTo: import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]),
	orientation: import_prop_types.default.oneOf(["landscape", "portrait"]),
	readOnly: import_prop_types.default.bool,
	reduceAnimations: import_prop_types.default.bool,
	referenceDate: import_prop_types.default.object,
	renderLoading: import_prop_types.default.func,
	selectedSections: import_prop_types.default.oneOfType([import_prop_types.default.oneOf([
		"all",
		"day",
		"empty",
		"hours",
		"meridiem",
		"minutes",
		"month",
		"seconds",
		"weekDay",
		"year"
	]), import_prop_types.default.number]),
	shouldDisableDate: import_prop_types.default.func,
	shouldDisableMonth: import_prop_types.default.func,
	shouldDisableYear: import_prop_types.default.func,
	showDaysOutsideCurrentMonth: import_prop_types.default.bool,
	slotProps: import_prop_types.default.object,
	slots: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	timezone: import_prop_types.default.string,
	value: import_prop_types.default.object,
	view: import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]),
	viewRenderers: import_prop_types.default.shape({
		day: import_prop_types.default.func,
		month: import_prop_types.default.func,
		year: import_prop_types.default.func
	}),
	views: import_prop_types.default.arrayOf(import_prop_types.default.oneOf([
		"day",
		"month",
		"year"
	]).isRequired),
	yearsOrder: import_prop_types.default.oneOf(["asc", "desc"]),
	yearsPerRow: import_prop_types.default.oneOf([3, 4])
};
//#endregion
export { PickersSectionListRoot as $, getLocalizedDigits as $t, yearCalendarClasses as A, convertValueToMeridiem as At, useFieldTextFieldProps as B, CalendarIcon as Bt, DateCalendar as C, singleItemValueManager as Ct, pickersCalendarHeaderClasses as D, useMeridiemMode as Dt, PickersCalendarHeader as E, PickerViewRoot as Et, pickersSlideTransitionClasses as F, PickersArrowSwitcher as Ft, PickersFilledInput as G, useDefaultDates as Gt, PickersInput as H, ClockIcon as Ht, pickersFadeTransitionGroupClasses as I, usePickerPrivateContext as It, PickersOutlinedInput as J, PickerProvider as Jt, getPickersFilledInputUtilityClass as K, useNow as Kt, DateField as L, ArrowDropDownIcon as Lt, getMonthCalendarUtilityClass as M, isInternalTimeView as Mt, monthCalendarClasses as N, isTimeView as Nt, YearCalendar as O, useViews as Ot, dayCalendarClasses as P, resolveTimeFormat as Pt, PickersSectionList as Q, buildSectionsFromFormat as Qt, PickerFieldUI as R, ArrowLeftIcon as Rt, pickersToolbarClasses as S, singleItemFieldValueManager as St, getDateCalendarUtilityClass as T, useControlledValue as Tt, getPickersInputUtilityClass as U, DateRangeIcon as Ut, PickersTextField as V, ClearIcon as Vt, pickersInputClasses as W, TimeIcon as Wt, pickersOutlinedInputClasses as X, useNullablePickerContext as Xt, getPickersOutlinedInputUtilityClass as Y, useIsValidValue as Yt, PickersInputBase as Z, usePickerContext as Zt, DatePickerToolbar as _, pickersDayClasses as _t, renderDateViewCalendar as a, resolveDateFormat as an, getPickersInputBaseUtilityClass as at, useToolbarOwnerState as b, getFocusedListItemIndex as bt, PickersLayout as c, extractValidationProps as cn, pickersTextFieldClasses as ct, usePickerLayout as d, LocalizationProvider as dn, useField as dt, DATE_VIEWS as en, PickersSectionListSection as et, PickersShortcuts as f, MuiPickersAdapterContext as fn, useValidation as ft, useDatePickerDefaultizedProps as g, getPickersDayUtilityClass as gt, usePicker as h, usePickerDayOwnerState as ht, DesktopDatePicker as i, isDatePickerView as in, pickersSectionListClasses as it, MonthCalendar as j, createIsAfterIgnoreDatePart as jt, getYearCalendarUtilityClass as k, EXPORTED_TIME_VIEWS as kt, PickersLayoutContentWrapper as l, usePickerTranslations as ln, useDateField as lt, pickersLayoutClasses as m, PickersDay as mt, MobileDatePicker as n, formatMeridiem as nn, PickersSectionListSectionSeparator as nt, useDesktopPicker as o, applyDefaultViewProps as on, pickersInputBaseClasses as ot, PickersActionBar as p, validateDate as pt, pickersFilledInputClasses as q, usePickerActionsContext as qt, useMobilePicker as r, getTodayDate as rn, getPickersSectionListUtilityClass as rt, createNonRangePickerStepNavigation as s, useSplitFieldProps as sn, getPickersTextFieldUtilityClass as st, DatePicker as t, applyDefaultDate as tn, PickersSectionListSectionContent as tt, PickersLayoutRoot as u, usePickerAdapter as un, useDateManager as ut, datePickerToolbarClasses as v, DEFAULT_DESKTOP_MODE_MEDIA_QUERY as vt, dateCalendarClasses as w, SECTION_TYPE_GRANULARITY as wt, getPickersToolbarUtilityClass as x, mergeSx as xt, PickersToolbar as y, arrayIncludes as yt, PickerFieldUIContextProvider as z, ArrowRightIcon as zt };

//# sourceMappingURL=DatePicker-CKc4sN7I.js.map