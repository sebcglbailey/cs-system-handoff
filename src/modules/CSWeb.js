const symbols = [
	{
		componentName: "Accordion",
		names: [
			"Accordion/01 Header/02 XS-S/03 Text Only/Basic",
			"Accordion/01 Header/02 XS-S/03 Text Only/Description",
			"Accordion/01 Header/01 M-XL/03 Text Only/Basic",
			"Accordion/01 Header/01 M-XL/03 Text Only/2 Columns",
			"Accordion/01 Header/01 M-XL/03 Text Only/3 Columns",
			"Accordion/01 Header/02 XS-S/02 Icon/Basic",
			"Accordion/01 Header/02 XS-S/02 Icon/Description",
			"Accordion/01 Header/01 M-XL/02 Icon/2 Columns",
			"Accordion/01 Header/01 M-XL/02 Icon/3 Columns",
			"Accordion/01 Header/02 XS-S/01 Logo/Basic",
			"Accordion/01 Header/02 XS-S/01 Logo/Balance",
			"Accordion/01 Header/01 M-XL/01 Logo/2 Columns",
			"Accordion/01 Header/01 M-XL/01 Logo/3 Columns"
		]
	},
	{
		componentName: "Accordion.ContentSection",
		names: [
			"Accordion/02 Content/04 Details/02 XS-S",
			"Accordion/02 Content/04 Details/01 M-XL"
		]
	},
	{
		componentName: "Accordion.ContentAccordion",
		names: [
			"Accordion/02 Content/03 Content Accordion/02 XS-S/01 Closed",
			"Accordion/02 Content/03 Content Accordion/02 XS-S/02 Open",
			"Accordion/02 Content/03 Content Accordion/01 M-XL/01 Closed",
			"Accordion/02 Content/03 Content Accordion/01 M-XL/02 Open"
		]
	},
	{
		componentName: "Accordion.ContentAccordionList",
		names: [
			"Accordion/02 Content/03 Content Accordion/02 XS-S/04 Content Open",
			"Accordion/02 Content/03 Content Accordion/02 XS-S/03 Content",
			"Accordion/02 Content/03 Content Accordion/01 M-XL/04 Content Open",
			"Accordion/02 Content/03 Content Accordion/01 M-XL/03 Content"
		]
	},
	{
		componentName: "Autosuggest",
		names: [
			"Form/_field/Filter options/__Light/Active",
			"Form/_field/Filter options/__Light/Dirty",
			"Form/_field/Filter options/__Light/Loading",
			"Form/_field/Filter options/_Dark/Active",
			"Form/_field/Filter options/_Dark/Dirty",
			"Form/_field/Filter options/_Dark/Loading"
		]
	},
	{
		componentName: "Button",
		names: [
			"Button/_Tertiary/Large/_Dark/Loading",
			"Button/_Tertiary/Tiny/_Dark/Hover - Active [Smart]",
			"Button/_Tertiary/Tiny/__Light/Hover - Active [Smart]",
			"Button/_Secondary/Tiny/_Dark/Hover - Active [Smart]",
			"Button/_Secondary/Tiny/__Light/Hover - Active [Smart]",
			"Button/__Primary/Tiny/_Dark/Hover - Active [Smart]",
			"Button/__Primary/Tiny/__Light/Hover - Active [Smart]",
			"Button/_Tertiary/Tiny/_Dark/Disabled [Smart]",
			"Button/_Tertiary/Tiny/__Light/Disabled [Smart]",
			"Button/_Secondary/Tiny/_Dark/Disabled [Smart]",
			"Button/_Secondary/Tiny/__Light/Disabled [Smart]",
			"Button/__Primary/Tiny/_Dark/Disabled [Smart]",
			"Button/__Primary/Tiny/__Light/Disabled [Smart]",
			"Button/_Tertiary/Tiny/_Dark/_Default [Smart]",
			"Button/_Tertiary/Tiny/__Light/_Default [Smart]",
			"Button/_Secondary/Tiny/_Dark/_Default [Smart]",
			"Button/_Secondary/Tiny/__Light/_Default [Smart]",
			"Button/__Primary/Tiny/_Dark/_Default [Smart]",
			"Button/__Primary/Tiny/__Light/_Default [Smart]",
			"Button/_Tertiary/Small/_Dark/Hover - Active [Smart]",
			"Button/_Tertiary/Small/__Light/Hover - Active [Smart]",
			"Button/_Secondary/Small/_Dark/Hover - Active [Smart]",
			"Button/_Secondary/Small/__Light/Hover - Active [Smart]",
			"Button/__Primary/Small/_Dark/Hover - Active [Smart]",
			"Button/__Primary/Small/__Light/Hover - Active [Smart]",
			"Button/_Tertiary/Small/_Dark/Disabled [Smart]",
			"Button/_Tertiary/Small/__Light/Disabled [Smart]",
			"Button/_Secondary/Small/_Dark/Disabled [Smart]",
			"Button/_Secondary/Small/__Light/Disabled [Smart]",
			"Button/__Primary/Small/_Dark/Disabled [Smart]",
			"Button/__Primary/Small/__Light/Disabled [Smart]",
			"Button/_Tertiary/Small/_Dark/_Default [Smart]",
			"Button/_Tertiary/Small/__Light/_Default [Smart]",
			"Button/_Secondary/Small/_Dark/_Default [Smart]",
			"Button/_Secondary/Small/__Light/_Default [Smart]",
			"Button/__Primary/Small/_Dark/_Default [Smart]",
			"Button/__Primary/Small/__Light/_Default [Smart]",
			"Button/_Tertiary/Large/_Dark/Hover - Active [Smart]",
			"Button/_Tertiary/Large/__Light/Hover - Active [Smart]",
			"Button/_Secondary/Large/_Dark/Hover - Active [Smart]",
			"Button/_Secondary/Large/__Light/Hover - Active [Smart]",
			"Button/__Primary/Large/_Dark/Hover - Active [Smart]",
			"Button/__Primary/Large/__Light/Hover - Active [Smart]",
			"Button/_Tertiary/Large/_Dark/Disabled [Smart]",
			"Button/_Tertiary/Large/__Light/Disabled [Smart]",
			"Button/_Secondary/Large/_Dark/Disabled [Smart]",
			"Button/_Secondary/Large/__Light/Disabled [Smart]",
			"Button/__Primary/Large/_Dark/Disabled [Smart]",
			"Button/__Primary/Large/__Light/Disabled [Smart]",
			"Button/_Tertiary/Large/_Dark/_Default [Smart]",
			"Button/_Tertiary/Large/__Light/_Default [Smart]",
			"Button/_Secondary/Large/_Dark/_Default [Smart]",
			"Button/_Secondary/Large/__Light/_Default [Smart]",
			"Button/__Primary/Large/_Dark/_Default [Smart]",
			"Button/__Primary/Large/__Light/_Default [Smart]",
			"Button/_Tertiary/Large/_Dark/Hover - Active",
			"Button/_Tertiary/Large/_Dark/Disabled",
			"Button/_Tertiary/Large/_Dark/_Default",
			"Button/_Tertiary/Small/_Dark/Loading",
			"Button/_Tertiary/Small/_Dark/Hover - Active",
			"Button/_Tertiary/Small/_Dark/Disabled",
			"Button/_Tertiary/Small/_Dark/_Default",
			"Button/_Tertiary/Tiny/_Dark/Loading",
			"Button/_Tertiary/Tiny/_Dark/Hover - Active",
			"Button/_Tertiary/Tiny/_Dark/Disabled",
			"Button/_Tertiary/Tiny/_Dark/_Default",
			"Button/_Secondary/Large/_Dark/Loading",
			"Button/_Secondary/Large/_Dark/Hover - Active",
			"Button/_Secondary/Large/_Dark/Disabled",
			"Button/_Secondary/Large/_Dark/_Default",
			"Button/_Secondary/Small/_Dark/Loading",
			"Button/_Secondary/Small/_Dark/Hover - Active",
			"Button/_Secondary/Small/_Dark/Disabled",
			"Button/_Secondary/Small/_Dark/_Default",
			"Button/_Secondary/Tiny/_Dark/Loading",
			"Button/_Secondary/Tiny/_Dark/Hover - Active",
			"Button/_Secondary/Tiny/_Dark/Disabled",
			"Button/_Secondary/Tiny/_Dark/_Default",
			"Button/__Primary/Tiny/_Dark/Loading",
			"Button/__Primary/Tiny/_Dark/Hover - Active",
			"Button/__Primary/Tiny/_Dark/Disabled",
			"Button/__Primary/Tiny/_Dark/_Default",
			"Button/__Primary/Small/_Dark/Loading",
			"Button/__Primary/Small/_Dark/Hover - Active",
			"Button/__Primary/Small/_Dark/Disabled",
			"Button/__Primary/Small/_Dark/_Default",
			"Button/__Primary/Large/_Dark/Loading",
			"Button/__Primary/Large/_Dark/Hover - Active",
			"Button/__Primary/Large/_Dark/Disabled",
			"Button/__Primary/Large/_Dark/_Default",
			"Button/_Tertiary/Large/__Light/Loading",
			"Button/_Tertiary/Large/__Light/Hover - Active",
			"Button/_Tertiary/Large/__Light/Disabled",
			"Button/_Tertiary/Large/__Light/_Default",
			"Button/_Tertiary/Small/__Light/Loading",
			"Button/_Tertiary/Small/__Light/Hover - Active",
			"Button/_Tertiary/Small/__Light/Disabled",
			"Button/_Tertiary/Small/__Light/_Default",
			"Button/_Tertiary/Tiny/__Light/Loading",
			"Button/_Tertiary/Tiny/__Light/Hover - Active",
			"Button/_Tertiary/Tiny/__Light/Disabled",
			"Button/_Tertiary/Tiny/__Light/_Default",
			"Button/_Secondary/Large/__Light/Loading",
			"Button/_Secondary/Large/__Light/Hover - Active",
			"Button/_Secondary/Large/__Light/Disabled",
			"Button/_Secondary/Large/__Light/_Default",
			"Button/_Secondary/Small/__Light/Loading",
			"Button/_Secondary/Small/__Light/Hover - Active",
			"Button/_Secondary/Small/__Light/Disabled",
			"Button/_Secondary/Small/__Light/_Default",
			"Button/_Secondary/Tiny/__Light/Loading",
			"Button/_Secondary/Tiny/__Light/Hover - Active",
			"Button/_Secondary/Tiny/__Light/Disabled",
			"Button/_Secondary/Tiny/__Light/_Default",
			"Button/__Primary/Tiny/__Light/Loading",
			"Button/__Primary/Tiny/__Light/Hover - Active",
			"Button/__Primary/Tiny/__Light/Disabled",
			"Button/__Primary/Tiny/__Light/_Default",
			"Button/__Primary/Small/__Light/Loading",
			"Button/__Primary/Small/__Light/Hover - Active",
			"Button/__Primary/Small/__Light/Disabled",
			"Button/__Primary/Small/__Light/_Default",
			"Button/__Primary/Large/__Light/Loading",
			"Button/__Primary/Large/__Light/Hover - Active",
			"Button/__Primary/Large/__Light/Disabled",
			"Button/__Primary/Large/__Light/_Default",
			"Button/_Sticky/01 Default",
			"Button/_Sticky/02 Hover + Active",
			"Button/_Sticky/04 Disabled",
			"Button/_Sticky/03 Loading",
		]
	},
	{
		componentName: "Card",
		names: ["Card/__Light/_Base", "Card/_Dark/_Base"]
	},
	{
		componentName: "CardDetails",
		names: [
			"Card/__Light/Detail/M-XL/_Default",
			"Card/__Light/Detail/M-XL/With icon",
			"Card/__Light/Detail/M-XL/With image",
			"Card/_Dark/Detail/M-XL/_Default",
			"Card/_Dark/Detail/M-XL/With icon",
			"Card/_Dark/Detail/M-XL/With image",
			"Card/__Light/Detail/XS-S/_Default",
			"Card/__Light/Detail/XS-S/With icon",
			"Card/__Light/Detail/XS-S/With image",
			"Card/_Dark/Detail/XS-S/_Default",
			"Card/_Dark/Detail/XS-S/With icon",
			"Card/_Dark/Detail/XS-S/With image"
		]
	},
	{
		componentName: "Checkbox",
		names: [
			"Form/Checkbox/_Default/_Dark/_Default",
			"Form/Checkbox/_Default/_Dark/With Description",
			"Form/Checkbox/_Default/__Light/_Default",
			"Form/Checkbox/_Default/__Light/With Description",
			"Form/Checkbox/_Default/_Dark/_Default [Disabled]",
			"Form/Checkbox/_Default/_Dark/With Description [Disabled]",
			"Form/Checkbox/_Default/__Light/_Default [Disabled]",
			"Form/Checkbox/_Default/__Light/With Description [Disabled]",
			"Form/Checkbox/_Default/_Dark/Compact [Disabled]",
			"Form/Checkbox/_Default/__Light/Compact [Disabled]",
		]
	},
	{
		componentName: "ContextualHelp",
		names: [
			"_global/info-contextual/Dark",
			"_global/info-contextual/Light",
			"_global/info-contextual/Overlay",
		]
	},
	{
		componentName: "Criteria",
		names: [
			"Form/_overrides/Criteria/Warning/_On Light",
			"Form/_overrides/Criteria/Error/_On Light",
			"Form/_overrides/Criteria/Success/_On Light",
			"Form/_overrides/Criteria/Warning/On Dark",
			"Form/_overrides/Criteria/Error/On Dark",
			"Form/_overrides/Criteria/Success/On Dark",
		]
	},
	{
		componentName: "DonutSecondary",
		names: [
			"Donuts/Secondary/01 XS-S/Default",
			"Donuts/Secondary/02 M-XL/Default",
			"Donuts/Secondary/01 XS-S/Number",
			"Donuts/Secondary/02 M-XL/Number",
		]
	},
	{
		componentName: "DonutSimple",
		names: [
			"Donuts/Simple/Small/01 Alpha",
			"Donuts/Simple/Large/05 Epsilon",
			"Donuts/Simple/Large/04 Delta",
			"Donuts/Simple/Large/03 Gamma",
			"Donuts/Simple/Large/02 Beta",
			"Donuts/Simple/Large/01 Alpha",
			"Donuts/Simple/Large/00 Theta",
			"Donuts/Simple/Tiny/Dark/05 Epsilon",
			"Donuts/Simple/Tiny/Dark/04 Delta",
			"Donuts/Simple/Tiny/Dark/03 Gamma",
			"Donuts/Simple/Tiny/Dark/02 Beta",
			"Donuts/Simple/Tiny/Dark/01 Alpha",
			"Donuts/Simple/Tiny/Dark/00 Theta",
			"Donuts/Simple/Tiny/Light/01 Alpha",
			"Donuts/Simple/Tiny/Light/00 Theta",
			"Donuts/Simple/Tiny/Light/02 Beta",
			"Donuts/Simple/Tiny/Light/03 Gamma",
			"Donuts/Simple/Tiny/Light/04 Delta",
			"Donuts/Simple/Tiny/Light/05 Epsilon",
			"Donuts/Simple/Small/00 Theta",
			"Donuts/Simple/Small/02 Beta",
			"Donuts/Simple/Small/03 Gamma",
			"Donuts/Simple/Small/04 Delta",
			"Donuts/Simple/Small/05 Epsilon",
		]
	},
	{
		componentName: "DonutTertiary",
		names: [
			"Donuts/Tertiary/01 XS-S/Start",
			"Donuts/Tertiary/02 M-XL/Start",
			"Donuts/Tertiary/01 XS-S/Continue",
			"Donuts/Tertiary/02 M-XL/Continue",
			"Donuts/Tertiary/01 XS-S/Tasks",
			"Donuts/Tertiary/02 M-XL/Tasks",
		]
	},
	{
		componentName: "Drawer",
		names: [
			"_global/Drawer/_Right/01 XS-S",
			"_global/Drawer/_Right/02 M",
			"_global/Drawer/_Right/03 L-XL",
			"_global/Drawer/Bottom/01 XS-S",
			"_global/Drawer/Bottom/02 M-XL",
		]
	},
	{
		componentName: "Dropdown",
		names: [
			"Form/_field/Dropdown/_Dark/Disabled",
			"Form/_field/Dropdown/__Light/Disabled",
			"Form/_field/Dropdown/_Dark/Error",
			"Form/_field/Dropdown/_Dark/Warning",
			"Form/_field/Dropdown/__Light/Error",
			"Form/_field/Dropdown/__Light/Warning",
			"Form/_field/Dropdown/_Dark/Success",
			"Form/_field/Dropdown/_Dark/Dirty",
			"Form/_field/Dropdown/_Dark/Active",
			"Form/_field/Dropdown/_Dark/_Default",
			"Form/_field/Dropdown/__Light/Success",
			"Form/_field/Dropdown/__Light/Dirty",
			"Form/_field/Dropdown/__Light/Active",
			"Form/_field/Dropdown/__Light/_Default",
		]
	},
	{
		componentName: "Header",
		names: [
			"Text/Full-width title/__Light/Without Description/04 XS-S/02 Switch",
			"Text/Full-width title/__Light/Without Description/03 M",
			"Text/Full-width title/__Light/Without Description/02 L",
			"Text/Full-width title/__Light/Without Description/01 XL",
			"Text/Full-width title/__Light/With Description/03 M",
			"Text/Full-width title/__Light/With Description/02 L",
			"Text/Full-width title/__Light/With Description/01 L-XL",
			"Text/Full-width title/_Dark/Without Description/04 XS-S/02 Switch",
			"Text/Full-width title/_Dark/Without Description/03 M",
			"Text/Full-width title/_Dark/Without Description/02 L",
			"Text/Full-width title/_Dark/Without Description/01 XL",
			"Text/Full-width title/_Dark/With Description/03 M",
			"Text/Full-width title/_Dark/With Description/02 L",
			"Text/Full-width title/_Dark/With Description/01 L-XL",
		]
	},
	{
		componentName: "Information",
		names: [
			"Text/Information/_Dark",
			"Text/Information/__Light",
		]
	},
	{
		componentName: "Label",
		names: [
			"Form/Label/__Light/Default Disabled",
			"Form/Label/_Dark/Default Disabled",
			"Form/Label/__Light/Simple Disabled",
			"Form/Label/_Dark/Simple Disabled",
			"Form/Label/__Light/_Default",
			"Form/Label/_Dark/_Default",
			"Form/Label/__Light/Simple",
			"Form/Label/_Dark/Simple",
		]
	},
	{
		componentName: "[List] List item",
		names: [
			"Text/Bullet/_Dark/04 With Link",
			"Text/Bullet/_Dark/03 Negative",
			"Text/Bullet/_Dark/02 Positive",
			"Text/Bullet/_Dark/01 Default",
			"Text/Bullet/__Light/04 With Link",
			"Text/Bullet/__Light/03 Negative",
			"Text/Bullet/__Light/02 Positive",
			"Text/Bullet/__Light/01 Default",
		]
	},
	{
		componentName: "MegaLoader",
		names: [
			"_global/Mega Spinner/Text only",
			"_global/Mega Spinner/With image",
		]
	},
	{
		componentName: "MenuSecondary",
		names: [
			"Navigation/_SecondaryNav/_XS-S/No scroll",
			"Navigation/_SecondaryNav/_XS-S/Right aligned",
			"Navigation/_SecondaryNav/_XS-S/Center aligned",
			"Navigation/_SecondaryNav/_XS-S/Left aligned",
			"Navigation/_SecondaryNav/M",
			"Navigation/_SecondaryNav/L",
			"Navigation/_SecondaryNav/XL",
	},
	{
		componentName: "MultiSelect",
		names: [
			"Form/Multi Select/_Default",
			"Form/Multi Select/Hover",
			"Form/Multi Select/Active",
		]
	},
	{
		componentName: "Notification",
		names: [
			"Notifications/_Dark/XS-S",
			"Notifications/_Dark/M-XL",
			"Notifications/__Light/XS-S",
			"Notifications/__Light/M-XL",
		]
	},
	{
		componentName: "Pager",
		names: [
			"_global/Pager/On Dark/08/08",
			"_global/Pager/On Dark/08/07",
			"_global/Pager/On Dark/08/06",
			"_global/Pager/On Dark/08/05",
			"_global/Pager/On Dark/08/04",
			"_global/Pager/On Dark/08/03",
			"_global/Pager/On Dark/08/02",
			"_global/Pager/On Dark/08/01",
			"_global/Pager/On Dark/07/07",
			"_global/Pager/On Dark/07/06",
			"_global/Pager/On Dark/07/05",
			"_global/Pager/On Dark/07/04",
			"_global/Pager/On Dark/07/03",
			"_global/Pager/On Dark/07/02",
			"_global/Pager/On Dark/07/01",
			"_global/Pager/On Dark/06/06",
			"_global/Pager/On Dark/06/05",
			"_global/Pager/On Dark/06/04",
			"_global/Pager/On Dark/06/03",
			"_global/Pager/On Dark/06/02",
			"_global/Pager/On Dark/06/01",
			"_global/Pager/On Dark/05/05",
			"_global/Pager/On Dark/05/04",
			"_global/Pager/On Dark/05/03",
			"_global/Pager/On Dark/05/02",
			"_global/Pager/On Dark/05/01",
			"_global/Pager/On Dark/04/04",
			"_global/Pager/On Dark/04/03",
			"_global/Pager/On Dark/04/02",
			"_global/Pager/On Dark/04/01",
			"_global/Pager/On Dark/03/03",
			"_global/Pager/On Dark/03/02",
			"_global/Pager/On Dark/03/01",
			"_global/Pager/On Light/08/08",
			"_global/Pager/On Light/08/07",
			"_global/Pager/On Light/08/06",
			"_global/Pager/On Light/08/05",
			"_global/Pager/On Light/08/04",
			"_global/Pager/On Light/08/03",
			"_global/Pager/On Light/08/02",
			"_global/Pager/On Light/08/01",
			"_global/Pager/On Light/07/07",
			"_global/Pager/On Light/07/06",
			"_global/Pager/On Light/07/05",
			"_global/Pager/On Light/07/04",
			"_global/Pager/On Light/07/03",
			"_global/Pager/On Light/07/02",
			"_global/Pager/On Light/07/01",
			"_global/Pager/On Light/06/06",
			"_global/Pager/On Light/06/05",
			"_global/Pager/On Light/06/04",
			"_global/Pager/On Light/06/03",
			"_global/Pager/On Light/06/02",
			"_global/Pager/On Light/06/01",
			"_global/Pager/On Light/05/05",
			"_global/Pager/On Light/05/04",
			"_global/Pager/On Light/05/03",
			"_global/Pager/On Light/05/02",
			"_global/Pager/On Light/05/01",
			"_global/Pager/On Light/04/04",
			"_global/Pager/On Light/04/03",
			"_global/Pager/On Light/04/02",
			"_global/Pager/On Light/04/01",
			"_global/Pager/On Light/03/03",
			"_global/Pager/On Light/03/02",
			"_global/Pager/On Light/03/01",
		]
	},
	{
		componentName: "Password",
		names: [
			"Form/Label + Field/__Light/Simple Password",
			"Form/Label + Field/__Light/Password",
			"Form/Label + Field/_Dark/Simple Password",
			"Form/Label + Field/_Dark/Password",
			"Form/_field/Password/_Dark/Disabled",
			"Form/_field/Password/_Dark/Visible",
			"Form/_field/Password/__Light/Disabled",
			"Form/_field/Password/__Light/Visible",
			"Form/_field/Password/_Dark/Error",
			"Form/_field/Password/_Dark/Warning",
			"Form/_field/Password/__Light/Error",
			"Form/_field/Password/__Light/Warning",
			"Form/_field/Password/_Dark/Success",
			"Form/_field/Password/_Dark/Dirty",
			"Form/_field/Password/_Dark/Active",
			"Form/_field/Password/_Dark/_Default",
			"Form/_field/Password/__Light/Success",
			"Form/_field/Password/__Light/Dirty",
			"Form/_field/Password/__Light/Active",
			"Form/_field/Password/__Light/_Default",
		]
	},
	{
		componentName: "Pill",
		names: [
			"Text/Number/_overrides/__Light/01 Body",
			"Text/Number/_overrides/__Light/02 Success",
			"Text/Number/_overrides/__Light/03 Failure",
			"Text/Number/_overrides/__Light/04 Disabled",
			"Text/Number/_overrides/_Dark/01 Body",
			"Text/Number/_overrides/_Dark/02 Success",
			"Text/Number/_overrides/_Dark/03 Failure",
			"Text/Number/_overrides/_Dark/04 Disabled",
		]
	},
	{
		componentName: "Popover",
		names: [
			"_global/Popup position/On Light/04 Left",
			"_global/Popup position/On Light/03 Right",
			"_global/Popup position/On Light/02 Bottom",
			"_global/Popup position/On Light/01 Top",
			"_global/Popup position/On Dark/04 Left",
			"_global/Popup position/On Dark/03 Right",
			"_global/Popup position/On Dark/02 Bottom",
			"_global/Popup position/On Dark/01 Top",
			"Text/Popup/__Light/01 Default",
			"Text/Popup/_Dark/01 Default",
		]
	},
	{
		componentName: "Progress",
		names: [
			"_global/Progress/__Light/Linked/Link",
			"_global/Progress/__Light/Linked/Unavailable",
			"_global/Progress/__Light/Solo/Link",
			"_global/Progress/__Light/Linked/_Default",
			"_global/Progress/__Light/Solo/_Default",
			"_global/Progress/__Light/Solo/Unavailable",
			"_global/Progress/_Dark/Linked/Link",
			"_global/Progress/_Dark/Linked/Unavailable",
			"_global/Progress/_Dark/Solo/Link",
			"_global/Progress/_Dark/Linked/_Default",
			"_global/Progress/_Dark/Solo/_Default",
			"_global/Progress/_Dark/Solo/Unavailable",
		]
	},
	{
		componentName: "ProgressRing",
		names: [
			"Donuts/_overrides/Ring/Epsilon/100%",
			"Donuts/_overrides/Ring/Tertiary/100%",
			"Donuts/_overrides/Ring/Short Term Debt/100%",
			"Donuts/_overrides/Ring/Long Term Debt/100%",
			"Donuts/_overrides/Ring/Alpha/30%",
			"Donuts/_overrides/Ring/Tertiary/30%",
			"Donuts/_overrides/Ring/Alpha/25%",
			"Donuts/_overrides/Ring/Tertiary/25%",
			"Donuts/_overrides/Ring/Short Term Debt/25%",
			"Donuts/_overrides/Ring/Long Term Debt/25%",
			"Donuts/_overrides/Ring/Alpha/15%",
			"Donuts/_overrides/Ring/Change/Alpha/Up",
			"Donuts/_overrides/Ring/Change/Beta/Up",
			"Donuts/_overrides/Ring/Change/Gamma/Up",
			"Donuts/_overrides/Ring/Change/Delta/Up",
			"Donuts/_overrides/Ring/Change/Epsilon/Up",
			"Donuts/_overrides/Ring/Change/Alpha/Down",
			"Donuts/_overrides/Ring/Change/Beta/Down",
			"Donuts/_overrides/Ring/Change/Gamma/Down",
			"Donuts/_overrides/Ring/Change/Delta/Down",
			"Donuts/_overrides/Ring/Change/Epsilon/Down",
			"Donuts/_overrides/Ring/Tertiary/15%",
			"Donuts/_overrides/Ring/Beta/35%",
			"Donuts/_overrides/Ring/Tertiary/35%",
			"Donuts/_overrides/Ring/Gamma/50%",
			"Donuts/_overrides/Ring/Tertiary/50%",
			"Donuts/_overrides/Ring/Short Term Debt/50%",
			"Donuts/_overrides/Ring/Long Term Debt/50%",
			"Donuts/_overrides/Ring/Beta/40%",
			"Donuts/_overrides/Ring/Tertiary/40%",
			"Donuts/_overrides/Ring/Epsilon/85%",
			"Donuts/_overrides/Ring/Tertiary/85%",
			"Donuts/_overrides/Ring/Epsilon/75%",
			"Donuts/_overrides/Ring/Tertiary/75%",
			"Donuts/_overrides/Ring/Short Term Debt/75%",
			"Donuts/_overrides/Ring/Long Term Debt/75%",
			"Donuts/_overrides/Ring/Delta/70%",
			"Donuts/_overrides/Ring/Delta/62%",
			"Donuts/_overrides/Ring/Tertiary/62%",
			"Donuts/_overrides/Ring/Gamma/55%",
			"Donuts/_overrides/Ring/Tertiary/55%",
		]
	},
	{
		componentName: "Prompt",
		names: [
			"Prompt/_Dark/04 XL",
			"Prompt/_Dark/03 L",
			"Prompt/_Dark/02 M",
			"Prompt/_Dark/01 XS-S",
			"Prompt/__Light/04 XL",
			"Prompt/__Light/03 L",
			"Prompt/__Light/02 M",
			"Prompt/__Light/01 XS-S",
		]
	},
	{
		componentName: "Radio",
		names: [
			"Form/Radio/02 Desktop/_Dark/_Default",
			"Form/Radio/01 Mobile/_Dark/_Default",
			"Form/Radio/02 Desktop/_Dark/With Description",
			"Form/Radio/01 Mobile/_Dark/With Description",
			"Form/Radio/02 Desktop/__Light/_Default",
			"Form/Radio/01 Mobile/__Light/_Default",
			"Form/Radio/02 Desktop/__Light/With Description",
			"Form/Radio/01 Mobile/__Light/With Description",
			"Form/Radio/02 Desktop/_Dark/_Default [Disabled]",
			"Form/Radio/01 Mobile/_Dark/_Default [Disabled]",
			"Form/Radio/02 Desktop/_Dark/With Description [Disabled]",
			"Form/Radio/01 Mobile/_Dark/With Description [Disabled]",
			"Form/Radio/02 Desktop/__Light/_Default [Disabled]",
			"Form/Radio/01 Mobile/__Light/_Default [Disabled]",
			"Form/Radio/02 Desktop/__Light/With Description [Disabled]",
			"Form/Radio/01 Mobile/__Light/With Description [Disabled]",
			"Form/Radio/02 Desktop/_Dark/Compact",
			"Form/Radio/01 Mobile/_Dark/Compact",
			"Form/Radio/02 Desktop/__Light/Compact",
			"Form/Radio/01 Mobile/__Light/Compact",
			"Form/Radio/02 Desktop/_Dark/Compact [Disabled]",
			"Form/Radio/01 Mobile/_Dark/Compact [Disabled]",
			"Form/Radio/02 Desktop/__Light/Compact [Disabled]",
			"Form/Radio/01 Mobile/__Light/Compact [Disabled]",
		]
	},
	{
		componentName: "RadioGroup",
		names: [
			"Form/Radio Group/02 Desktop/_Dark/Simple",
			"Form/Radio Group/01 Mobile/_Dark/Simple",
			"Form/Radio Group/02 Desktop/_Dark/_Default",
			"Form/Radio Group/01 Mobile/_Dark/_Default",
			"Form/Radio Group/02 Desktop/__Light/Simple",
			"Form/Radio Group/01 Mobile/__Light/Simple",
			"Form/Radio Group/02 Desktop/__Light/_Default",
			"Form/Radio Group/01 Mobile/__Light/_Default",
		]
	},
	{
		componentName: "Ratings",
		names: [
			"_global/Rating/5",
			"_global/Rating/4.5",
			"_global/Rating/4",
			"_global/Rating/3.5",
			"_global/Rating/3",
			"_global/Rating/2.5",
			"_global/Rating/2",
			"_global/Rating/1.5",
			"_global/Rating/1",
			"_global/Rating/0.5",
			"_global/Rating/0",
			"_global/Rating/_Rating with count",
		]
	},
	{
		componentName: "SectionTitle",
		names: [
			"Text/SectionTitle/M-XL",
			"Text/SectionTitle/XS-S",
		]
	},
	{
		componentName: "SegmentedControl",
		names: [
			"Form/Segmented control/Group/Large/2 options",
			"Form/Segmented control/Group/Small/2 options",
			"Form/Segmented control/Group/Large/3 options",
			"Form/Segmented control/Group/Small/3 options",
		]
	},
	{
		componentName: "SegmentedControlOption",
		names: [
			"Form/Segmented control/Option/Small/Disabled",
			"Form/Segmented control/Option/Small/Active",
			"Form/Segmented control/Option/Small/Hover",
			"Form/Segmented control/Option/Small/_default",
			"Form/Segmented control/Option/Large/Disabled",
			"Form/Segmented control/Option/Large/Active",
			"Form/Segmented control/Option/Large/Hover",
			"Form/Segmented control/Option/Large/_default",
		]
	},
	{
		componentName: "Tag",
		names: [
			"_global/Tag/__Light/_Default [Smart]",
			"_global/Tag/__Light/_Default [Fixed]",
			"_global/Tag/__Light/Secondary [Smart]",
			"_global/Tag/__Light/Secondary [Fixed]",
			"_global/Tag/__Light/Negative [Smart]",
			"_global/Tag/__Light/Negative [Fixed]",
			"_global/Tag/__Light/Positive [Smart]",
			"_global/Tag/__Light/Positive [Fixed]",
			"_global/Tag/__Light/Attention [Smart]",
			"_global/Tag/__Light/Attention [Fixed]",
			"_global/Tag/__Light/Information [Smart]",
			"_global/Tag/__Light/Information [Fixed]",
			"_global/Tag/__Light/Outline",
			"_global/Tag/_Dark/_Default [Smart]",
			"_global/Tag/_Dark/_Default [Fixed]",
			"_global/Tag/_Dark/Secondary [Smart]",
			"_global/Tag/_Dark/Secondary [Fixed]",
			"_global/Tag/_Dark/Negative [Smart]",
			"_global/Tag/_Dark/Negative [Fixed]",
			"_global/Tag/_Dark/Positive [Smart]",
			"_global/Tag/_Dark/Positive [Fixed]",
			"_global/Tag/_Dark/Attention [Smart]",
			"_global/Tag/_Dark/Information [Fixed]",
			"_global/Tag/_Dark/Information [Smart]",
			"_global/Tag/_Dark/Attention [Fixed]",
			"_global/Tag/_Dark/Outline",
			"_global/Tag/Overlay [Lighten] [Fixed]",
			"_global/Tag/Overlay [Lighten] [Smart]",
			"_global/Tag/Overlay [Darken] [Fixed]",
			"_global/Tag/Overlay [Darken] [Smart]",
		]
	},
	{
		componentName: "TextInput",
		names: [
			"Form/_field/Input + Prefix + Suffix/_Dark/Disabled",
			"Form/_field/Input + Prefix + Suffix/__Light/Disabled",
			"Form/_field/Input + Suffix/_Dark/Disabled",
			"Form/_field/Input + Suffix/__Light/Disabled",
			"Form/_field/Input + Prefix/_Dark/Disabled",
			"Form/_field/Input + Prefix/__Light/Disabled",
			"Form/_field/Input/_Dark/Disabled",
			"Form/_field/Input/__Light/Disabled",
			"Form/_field/Input + Prefix + Suffix/_Dark/Error",
			"Form/_field/Input + Prefix + Suffix/_Dark/Warning",
			"Form/_field/Input + Prefix + Suffix/__Light/Error",
			"Form/_field/Input + Prefix + Suffix/__Light/Warning",
			"Form/_field/Input + Suffix/_Dark/Error",
			"Form/_field/Input + Suffix/_Dark/Warning",
			"Form/_field/Input + Suffix/__Light/Error",
			"Form/_field/Input + Suffix/__Light/Warning",
			"Form/_field/Input + Prefix/_Dark/Error",
			"Form/_field/Input + Prefix/_Dark/Warning",
			"Form/_field/Input + Prefix/__Light/Error",
			"Form/_field/Input + Prefix/__Light/Warning",
			"Form/_field/Input/_Dark/Error",
			"Form/_field/Input/_Dark/Warning",
			"Form/_field/Input/__Light/Error",
			"Form/_field/Input/__Light/Warning",
			"Form/_field/Input + Prefix + Suffix/_Dark/Success",
			"Form/_field/Input + Prefix + Suffix/_Dark/Dirty",
			"Form/_field/Input + Prefix + Suffix/_Dark/Active",
			"Form/_field/Input + Prefix + Suffix/_Dark/_Default",
			"Form/_field/Input + Prefix + Suffix/__Light/Success",
			"Form/_field/Input + Prefix + Suffix/__Light/Dirty",
			"Form/_field/Input + Prefix + Suffix/__Light/Active",
			"Form/_field/Input + Prefix + Suffix/__Light/_Default",
			"Form/_field/Input + Suffix/_Dark/Success",
			"Form/_field/Input + Suffix/_Dark/Dirty",
			"Form/_field/Input + Suffix/_Dark/Active",
			"Form/_field/Input + Suffix/_Dark/_Default",
			"Form/_field/Input + Suffix/__Light/Success",
			"Form/_field/Input + Suffix/__Light/Dirty",
			"Form/_field/Input + Suffix/__Light/Active",
			"Form/_field/Input + Suffix/__Light/_Default",
			"Form/_field/Input + Prefix/_Dark/Success",
			"Form/_field/Input + Prefix/_Dark/Dirty",
			"Form/_field/Input + Prefix/_Dark/Active",
			"Form/_field/Input + Prefix/_Dark/_Default",
			"Form/_field/Input + Prefix/__Light/Success",
			"Form/_field/Input + Prefix/__Light/Dirty",
			"Form/_field/Input + Prefix/__Light/Active",
			"Form/_field/Input + Prefix/__Light/_Default",
			"Form/_field/Input/_Dark/Success",
			"Form/_field/Input/_Dark/Dirty",
			"Form/_field/Input/_Dark/Active",
			"Form/_field/Input/_Dark/_Default",
			"Form/_field/Input/__Light/Success",
			"Form/_field/Input/__Light/Dirty",
			"Form/_field/Input/__Light/Active",
			"Form/_field/Input/__Light/_Default",
		]
	},
	{
		componentName: "TextAreaInput",
		names: [
			"Form/_field/Text Area/_Dark/Disabled",
			"Form/_field/Text Area/__Light/Disabled",
			"Form/_field/Text Area/_Dark/Error",
			"Form/_field/Text Area/_Dark/Warning",
			"Form/_field/Text Area/__Light/Error",
			"Form/_field/Text Area/__Light/Warning",
			"Form/_field/Text Area/_Dark/Success",
			"Form/_field/Text Area/_Dark/Dirty",
			"Form/_field/Text Area/_Dark/Active",
			"Form/_field/Text Area/_Dark/_Default",
			"Form/_field/Text Area/__Light/Success",
			"Form/_field/Text Area/__Light/Dirty",
			"Form/_field/Text Area/__Light/Active",
			"Form/_field/Text Area/__Light/_Default",
		]
	},
	{
		componentName: "ToggleSwitch",
		names: [
			"Form/Checkbox/Switch/_Dark/Compact",
			"Form/Checkbox/Switch/__Light/Compact",
			"Form/Checkbox/Switch/_Dark/_Default",
			"Form/Checkbox/Switch/_Dark/With Description",
			"Form/Checkbox/Switch/__Light/_Default",
			"Form/Checkbox/Switch/__Light/With Description",
			"Form/Checkbox/Switch/_Dark/_Default [Disabled]",
			"Form/Checkbox/Switch/_Dark/With Description [Disabled]",
			"Form/Checkbox/Switch/__Light/_Default [Disabled]",
			"Form/Checkbox/Switch/__Light/With Description [Disabled]",
			"Form/Checkbox/Switch/_Dark/Compact [Disabled]",
			"Form/Checkbox/Switch/__Light/Compact [Disabled]",
		]
	},
	{
		componentName: "PrimaryNav",
		names: [
			"Navigation/__PrimaryNav/_XS-S [Header]",
			"Navigation/__PrimaryNav/M",
			"Navigation/__PrimaryNav/L",
			"Navigation/__PrimaryNav/XL",
			"Navigation/__PrimaryNav/_XS-S [Menu]",
		]
	},
	{
		componentName: "MenuItem",
		names: [
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/M-XL/Dashboard/_Default",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/M-XL/Dashboard/Active",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/M-XL/Report/_Default",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/M-XL/Report/Active",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/M-XL/Offers/_Default",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/M-XL/Offers/Active",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/M-XL/Protect/_Default",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/M-XL/Protect/Active",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/M-XL/Timeline/_Default",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/M-XL/Timeline/Active",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/M-XL/Coaching/_Default",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/M-XL/Coaching/Active",
			"Navigation /🚫 overrides / __PrimaryNav / MenuItem / XS - S / Dashboard / _Default",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/XS-S/Dashboard/Active",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/XS-S/Report/_Default",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/XS-S/Report/Active",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/XS-S/Offers/_Default",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/XS-S/Offers/Active",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/XS-S/Protect/_Default",
			"Navigation/🚫 overrides/_MyAccountMenu/MenuItem/My Account/_Default",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/XS-S/Protect/Active",
			"Navigation/🚫 overrides/_MyAccountMenu/MenuItem/Account drawer/My Account/Active",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/XS-S/Timeline/_Default",
			"Navigation/🚫 overrides/_MyAccountMenu/MenuItem/Account drawer/Help/_Default",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/XS-S/Timeline/Active",
			"Navigation/🚫 overrides/_MyAccountMenu/MenuItem/Account drawer/Help/Active",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/XS-S/Coaching/_Default",
			"Navigation/🚫 overrides/_MyAccountMenu/MenuItem/Account drawer/Log out/_Default",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/XS-S/Coaching/Active",
			"Navigation/🚫 overrides/_MyAccountMenu/MenuItem/Account drawer/Log out/Active",
			"Navigation/🚫 overrides/MyAccountItem/L-XL",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/XS-S/_Template",
			"Navigation/🚫 overrides/__PrimaryNav/MenuItem/M-XL/_Template",
		]
	},
	{
		componentName: "MyAccountMenu",
		names: [
			"Navigation/_MyAccountMenu/_XS-S",
			"Navigation/_MyAccountMenu/M",
			"Navigation/_MyAccountMenu/L - XL",
		]
	}
];

export default symbols;
