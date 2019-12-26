# Changelog

All notable changes are documented in this file.

Types of changes:

1. **Added** for new features.
1. **Changed** for changes in existing functionality.
1. **Deprecated** for soon-to-be removed features.
1. **Removed** for now removed features.
1. **Fixed** for any bug fixes.
1. **Security** in case of vulnerabilities.
1. **Breaking** for breaking changes
1. **Docs** for documentation changes
1. **Lab** components and features that are still in a work in progress

## 6.58.0 - 2019-09-17

### Added

- `<Avatar/>` - Add shape property to support square shape [#4105](https://github.com/wix/wix-style-react/pull/4105)
- `<Page/>` - add `height` prop [#4098](https://github.com/wix/wix-style-react/pull/4098)
- `<FillButton/>` - new component [#4087](https://github.com/wix/wix-style-react/pull/4087)
- `<ImageViewer/>` - add disabled state [#4117](https://github.com/wix/wix-style-react/pull/4117)
- `<FillPreview/>` - add isSelected testkit method [#4120](https://github.com/wix/wix-style-react/pull/4120)
- `<Layout/>` - add support for dataHook [#4119](https://github.com/wix/wix-style-react/pull/4119)

### Fixed

- `<FillPreview/>` - move dataHook to tooltip instead [#4110](https://github.com/wix/wix-style-react/pull/4110)
- `<FillPreview/>` - fix testkit click handler [#4122](https://github.com/wix/wix-style-react/pull/4122)


## 6.57.0 - 2019-09-13

### Added

- `<Tooltip/>` - adding missing transition [#3989](https://github.com/wix/wix-style-react/pull/3989)
- `<Table/>` - add`totalSelectableCount` prop [#4046](https://github.com/wix/wix-style-react/pull/4046)
- `<FillPreview />` - new component [#4024](https://github.com/wix/wix-style-react/pull/4024)

### Fixed

- `<DropdownBase/>` - add support for dynamicWidth [#4074](https://github.com/wix/wix-style-react/pull/4074)
- `<Tooltip/>` - fix inlining issues [#4093](https://github.com/wix/wix-style-react/pull/4093)

## 6.56.0 - 2019-09-11

### Added
- `<Card.Subheader/>` - added neutral skin [#4071](https://github.com/wix/wix-style-react/pull/4071)
- `<InputWithOptions/>` - supports dynamic dropdown width [#4050](https://github.com/wix/wix-style-react/pull/4050)

### Fixed
- `<Button/>`- fixing isButtonDisabled testkit function [#4063](https://github.com/wix/wix-style-react/pull/4063)

## 6.55.0 - 2019-09-09

### Added
- `<LabelledElement/>` - create the component [#4045](https://github.com/wix/wix-style-react/pull/4045)
- `<Input/>` - allow hiding status suffix [#4054](https://github.com/wix/wix-style-react/pull/4054)
- `<FloatingNotification/>` - add `width` prop [#4031](https://github.com/wix/wix-style-react/pull/4031)
- `Cheatshhet`- adding links and examples of the `FoundationFamily` [#4038](https://github.com/wix/wix-style-react/pull/4038)
- `<Table/>` - create `Table.BulkSelectionCheckbox` component [#4032](https://github.com/wix/wix-style-react/pull/4032)
- `<Table/>` - add `totalSelectableCount` prop to better deal with bulk selection in `infiniteScroll` [#4046](https://github.com/wix/wix-style-react/pull/4046)

### Changed
- `<MessageBoxFunctionalLayout/>` - add `height: 100%` when `fullscreen` prop is used [#4055](https://github.com/wix/wix-style-react/pull/4055)
- `<Dropdown/>` - clear selection when option has `selectedId: null` [#4047](https://github.com/wix/wix-style-react/pull/4047)
- `<Avatar/>` - change prop name to `onIndicationClick` [#4059](https://github.com/wix/wix-style-react/pull/4059)
- `<Table/>` - change `showSelectAll` prop to `hideBulkSelectionCheckbox` [#4032](https://github.com/wix/wix-style-react/pull/4032)
- `<CardGalleryItem/>` - encapsulate hover in cardGalleryItem testkit [#4061](https://github.com/wix/wix-style-react/pull/4061)

### Fixed

- `<SegmentedToggle/>` - remove rogue z-index [#4067](https://github.com/wix/wix-style-react/pull/4067)

### Docs
- `<ModalPreviewLayout/>` - move docs to "Components" category [#4058](https://github.com/wix/wix-style-react/pull/4058)
- `<Table/>` - improve column fields documentation [#4064](https://github.com/wix/wix-style-react/pull/4064)

## 6.54.2 - 2019-09-03

- `Cheatsheet` - Fixes of the "Notifications" and "Tooltip" examples. [#4023](https://github.com/wix/wix-style-react/pull/4023)
- `Cheatsheet` - Links and examples fixes [#4029](https://github.com/wix/wix-style-react/pull/4029)
- `<InputWithOptions/>` - fix dropdownWidth prop [#4040](https://github.com/wix/wix-style-react/pull/4040)

## 6.54.1 - 2019-09-01

### Fixed

`<InputWithoptios/>` - move away from using the common proxy for regular driver [#4036](https://github.com/wix/wix-style-react/pull/4036)

## 6.54.0 - 2019-09-01

### Added
- `<Table/>` - add ability to make rows unselectable [#4028](https://github.com/wix/wix-style-react/pull/4028)

## 6.53.1 - 2019-09-01

No Changes (Patch version, only to re-publish Storybook, after failed publish)

## 6.53.0 - 2019-09-01

### Added
- `<Avatar/>` - add `presence` & `indication` props [#4019](https://github.com/wix/wix-style-react/pull/4019)
- `<Table/>` - add `showSelectAll` prop [#4027](https://github.com/wix/wix-style-react/pull/4027)

### Changed
- `<Avatar/>` - migrate theme from `wix-ui-core` [#4030](https://github.com/wix/wix-style-react/pull/4030)
- `<Inputwithoptions/>` - migrate to use popover mechanism [#4001](https://github.com/wix/wix-style-react/pull/4001)

### Docs
- `Cheatsheet` - adding and improving existing examples (Modals, Navigation & Inputs families) [#4016](https://github.com/wix/wix-style-react/pull/4016)


## 6.52.1 - 2019-08-27

No Changes (Patch version, only to re-publish Storybook, after failed publish)

## 6.52.0 - 2019-08-27

### Added
- `<ModalSelectorLayout/>` - add maxHeight prop [#4011](https://github.com/wix/wix-style-react/pull/4011)

### Change
- `<StatsWidget/>` - deprecating in favor of `<StatisticsWidget/>` [#4015](https://github.com/wix/wix-style-react/pull/4015)

### Docs
- `Cheatsheet`- Adding links to `OtherFamily` & `ContentWidgetsFamily` documentations [#4007](https://github.com/wix/wix-style-react/pull/4007)


## 6.51.1 - 2019-08-25

No Changes (Patch version, only to re-publish Storybook, after failed publish)

## 6.51.0 - 2019-08-25

### Added
- `<ToggleButton/>` - new component [#3953](https://github.com/wix/wix-style-react/pull/3953)

### Docs

- `Cheatsheet`- Adding links to `ButtonsFamily` & `NavigationFamily` documentations [#3982](https://github.com/wix/wix-style-react/pull/3982)
- `<Sidebar/>`- fixing the links to the sidebar components documentation [#3980](https://github.com/wix/wix-style-react/issues/3980)
- `Cheatsheet`- Adding links to `TooltipFamily` & `NotificationFamily` documentations [#3984](https://github.com/wix/wix-style-react/pull/3984)
- `Cheatsheet`- Adding links to `ModalsFamily` & `PickerFamily` documentations [#3992](https://github.com/wix/wix-style-react/pull/3992)

## 6.50.2 - 2019-08-20

No Changes (Patch version, only to re-publish package, after failed publish)

## 6.50.1 - 2019-08-20

No Changes (Patch version, only to re-publish package, after failed publish)

## 6.50.0 - 2019-08-20

### Changed

- `<StatisticsWidget />` - rename properties [#3954](https://github.com/wix/wix-style-react/pull/3954)
- `<ModalPreviewLayout/>` - refactor to use `<Text/>` in the header [#3964](https://github.com/wix/wix-style-react/pull/3964)

### Fixed

- `<Dropdown/>` - prepare for inputwithoptions migration [#3957](https://github.com/wix/wix-style-react/pull/3957)
- `<AutoComplete/>` - prepare changes for inputwithoptions migration [#3956](https://github.com/wix/wix-style-react/pull/3956)
- `<MultiSelect/>` - preparation for inputwithoptions migration to popover [#3958](https://github.com/wix/wix-style-react/pull/3958)
- `<AutoComplete/> , <MultiSelect/>, <Dropdown/>` - remove testkit checking tests [#3960](https://github.com/wix/wix-style-react/pull/3960)
- `<Search/>` - improve dataHook usage and prepare for inputwithoptions usage [#3961](https://github.com/wix/wix-style-react/pull/3961)
- `<MultiSelectCheckbox/>` - improve tests and prepare for inputWithOptions migration to Popover [#3963](https://github.com/wix/wix-style-react/pull/3963)
- `<Popover/>` - add a request animation frame polyfill on testing [#3972](https://github.com/wix/wix-style-react/pull/3972)
- `<MultiSelect/>` - fix propTypes [#3878](https://github.com/wix/wix-style-react/pull/3878)

### Docs

- `<ModalPreviewLayout/>` - add playground [#3966](https://github.com/wix/wix-style-react/pull/3966)
- `Cheatsheet`- Adding links to `InputsFamily` documentations [#3933](https://github.com/wix/wix-style-react/pull/3933)
- `Cheatsheet`- Adding links to `LayoutFamily` documentations [#3968](https://github.com/wix/wix-style-react/pull/3968)
- `<PopoverMenu/>` - beta - improve docs [#3959](https://github.com/wix/wix-style-react/pull/3959)
- `<ModalPreviewLayout/>` - improve docs with examples [#3971](https://github.com/wix/wix-style-react/pull/3971)
- `Cheatsheet`- Adding links to `SelectionFamily` documentations [#3973](https://github.com/wix/wix-style-react/pull/3973)

## 6.49.0 - 2019-08-15

### Added

- `<StatisticsWidget />` - add handlers for mouse and keyboard actions [#3915](https://github.com/wix/wix-style-react/pull/3915)
- `<StatisticsWidget />` - add short text when title doesn't fit [#3909](https://github.com/wix/wix-style-react/pull/3909)
- `<StatisticsWidget />` - add examples [#3905](https://github.com/wix/wix-style-react/pull/3905)

### Changed

- `<StatisticsWidget />` - improve drivers API [#3908](https://github.com/wix/wix-style-react/pull/3908)

### Fixed

- `<RichTextInputArea/>` - support value reset [#3923](https://github.com/wix/wix-style-react/pull/3923)
- `<Stepper/>` - added keyboard focusability only [#3949](https://github.com/wix/wix-style-react/pull/3949)
- `<RichTextInputArea/>` - keep newlines of empty html elements in initial value [#3935](https://github.com/wix/wix-style-react/pull/3935)

### Docs

- `<Dropdown/>` - improve documentation [#3917](https://github.com/wix/wix-style-react/pull/3917)
  `<AutoComplete/>` - refactor autocomplete documentation & move tests to test folder [#3926](https://github.com/wix/wix-style-react/pull/3926)

## 6.48.1 - 2019-08-12

### Fixed

- `<RichTextInputArea>` - `Revert` Keep newlines of empty html elements in initial value [#3930](https://github.com/wix/wix-style-react/pull/3930)

## 6.48.0 - 2019-08-12

### Fixed

- `<RichTextInputArea>` - Keep newlines of empty html elements in initial value [#3922](https://github.com/wix/wix-style-react/pull/3922)

### Docs

- `Cheatsheet`- Adding examples to `PickerFamily`[#3884](https://github.com/wix/wix-style-react/pull/3884)

### Added

- `<CardGalleryItem/>` - support background image as node element [#3913](https://github.com/wix/wix-style-react/pull/3913)

## 6.47.1 - 2019-08-11

No Changes (Patch version, only to re-publish Storybook, after failed publish)

## 6.47.0 - 2019-08-11

### Added

- `<ModalPreviewLayout/>` - create the component [#3773](https://github.com/wix/wix-style-react/pull/3773)
- `<StatisticsWidget/>` - `WIP` - Add new component [#3893](https://github.com/wix/wix-style-react/pull/3893)
- `<InputWithOptions/>` - add `native` prop [#3900](https://github.com/wix/wix-style-react/pull/3900)

### Changed

- `<Input/> <ColorInput/>` - support "medium" size [#3891](https://github.com/wix/wix-style-react/pull/3891/files)

### Fixed

- `<Text/>` - extract HOC from the render function [#3881](https://github.com/wix/wix-style-react/pull/3881)
- `<AddItem/>` - fix text color [#3872](https://github.com/wix/wix-style-react/pull/3872)
- `<Popover/>` - expose uni driver [#3890](https://github.com/wix/wix-style-react/pull/3890)
- `<Text/>` - change text color for `light && skin=disabled` [#3861](https://github.com/wix/wix-style-react/pull/3861)
- `<FloatingNotification/>` - support node based labels for buttons [#3916](https://github.com/wix/wix-style-react/pull/3916)
- `<ModalPreviewLayout/>` - fix scrollbar to not hide the header [#3898](https://github.com/wix/wix-style-react/pull/3898)

### Docs

- `Cheatsheet`- Adding examples to `NotificationFamily`[#3882](https://github.com/wix/wix-style-react/pull/3882)

## 6.46.0 - 2019-08-02

### Changed

- `<Notification/>` - allow usage without `<Notification.CloseButton/>` [#3865](https://github.com/wix/wix-style-react/pull/3865)

### Fixed

- `<Tooltip/>` - fix page jump issues on hover [#3851](https://github.com/wix/wix-style-react/pull/3851)
- FIX(protractor typings & testkit exports) - update protractor testkit export definition [#3875](https://github.com/wix/wix-style-react/pull/3875)

## 6.45.1 - 2019-08-01

### Fixed

- `testkit/protractor` - fix .d.ts file to not have duplicate entries [#3867](https://github.com/wix/wix-style-react/pull/3867)
- remove `jscodeshift` dev to avoid deprecation warning - [#3868](https://github.com/wix/wix-style-react/pull/3868)

## 6.45.0 - 2019-08-01

### Fixed

- `<Card.Subheader/>` -fix top/bottom padding to match designs [#3860](https://github.com/wix/wix-style-react/pull/3860)

### Changed

- `<ColorInput/>` - add popoverProps prop [#3858](https://github.com/wix/wix-style-react/pull/3858)

## 6.44.2 - 2019-07-31

No Changes (Patch version, only to re-publish Storybook, after failed publish)

## 6.44.1 - 2019-07-30

No Changes (Patch version, only to re-publish Storybook, after failed publish)

## 6.44.0 - 2019-07-30

### Added

- `<Sidebar/>` - add `isHidden` prop [#3640](https://github.com/wix/wix-style-react/pull/3640)

### Changed

- `<DatePicker/>` - support string width [#3803](https://github.com/wix/wix-style-react/pull/3803)
- `<Tooltip/>` - change default appendTo value to `window` and some extra internal changes [#3848](https://github.com/wix/wix-style-react/pull/3848)
- `<Input/>` - error indicator. Migrate to new tooltip [#3854](https://github.com/wix/wix-style-react/pull/3854)

### Fixed

- `Disabled State Styling` - styling alignments for the following components: `<ToggleButton/>, <AddItem/>, <Text/>, <InputArea/>, <InputWithOptions/>, <SegmentedToggle/>, <RadioButton/>, <Thumbnail/>` [#3776](https://github.com/wix/wix-style-react/pull/3776)
- `<SectionHelper/>, <FloatingNotification/>, <Tag/>` - change/add themes colors [#3786](https://github.com/wix/wix-style-react/pull/3786)

### Docs

- `<Sidebar/>` - create story page with example for Business Manager sidebar [#3817](https://github.com/wix/wix-style-react/pull/3817)
- `<Sidebar/>` - remove WIP category from the sidebar visual components [#3842](https://github.com/wix/wix-style-react/pull/3842)

### Deprecated

- `<SideMenu/>` - deprecated component, you should use `<Sidebar/>` instead [#3847](https://github.com/wix/wix-style-react/pull/3847)

## 6.43.1 - 2019-07-24

- `<PopoverMenu/>` - beta - add back the onClick render prop [#3835](https://github.com/wix/wix-style-react/pull/3835)

## 6.43.0 - 2019-07-24

### Docs

- `Cheatsheet`- Adding examples to `TooltipFamily`[#3804](https://github.com/wix/wix-style-react/pull/3804)
- `Cheatsheet`- Adding examples to `NavigationFamily`[#3802](https://github.com/wix/wix-style-react/pull/3802)

### Added

- POC(Perfer) - add perfer to run through our components bundles [#3798](https://github.com/wix/wix-style-react/pull/3798)
- `<Table>`, `<DataTable>` add `skin` prop for table header styles [#3813](https://github.com/wix/wix-style-react/pull/3813)
- `<PopoverMenu.MenuItem/>`, `<PopoverMenu.Divider/>` - beta - allow overwriting internal dataHook [#3822](https://github.com/wix/wix-style-react/pull/3822)

### Fixed

- `<Text/>` - add default zIndex for ellipsis [#3828](https://github.com/wix/wix-style-react/pull/3828)

## 6.42.0 - 2019-07-24

### Added

- `<SidebarHeader/>` - create the component (WIP) [#3787](https://github.com/wix/wix-style-react/pull/3787)
- `<Carousel/>` - add `dots` & `variableWidth` props [#3760](https://github.com/wix/wix-style-react/pull/3760)

### Docs

- `<Text/>` - migrate text component to sections with new examples [#3702](https://github.com/wix/wix-style-react/pull/3702)
- `<CardGalleryItem/>` - examples refactored to support new PopoverMenu [#3744](https://github.com/wix/wix-style-react/pull/3744)
- `Cheatsheet`- Adding examples to `ContentWidgetsFamily`[#3793](https://github.com/wix/wix-style-react/pull/3793)
- `<CardGalleryitem/>` - popovermenu example should use render prop toggle instead of open [#3809](https://github.com/wix/wix-style-react/pull/3809)
- `Cheatsheet`- Adding examples to `OtherFamily`[#3797](https://github.com/wix/wix-style-react/pull/3797)

### Fixed

- `<PopoverMenu/>` - beta - fix typing for getTrriggerElement [#3791](https://github.com/wix/wix-style-react/pull/3791)
- `<PopoverMenu/>` - beta - tabIndex should be of type number [#3789](https://github.com/wix/wix-style-react/pull/3789)
- `<PopoverMenu/>` - beta - fix triggerElement proptype [#3812](https://github.com/wix/wix-style-react/pull/3812)
- `<DropdownLayout/>` - add stopPropagation() to list items [#3818](https://github.com/wix/wix-style-react/pull/3818)
- `testkit/*.d.ts` - add missing entries of testkits [#3816](https://github.com/wix/wix-style-react/pull/3816)

### Changed

- `<PopoverMenu/>` - beta - expose more control on render props [#3792](https://github.com/wix/wix-style-react/pull/3792)
- `<SidebarDivider/>` - improve component (WIP) [#3799](https://github.com/wix/wix-style-react/pull/3799)

## 6.41.0 - 2019-07-20

### Fixed

- `<Breadcrumbs/>` - fix UniDriver [#3777](https://github.com/wix/wix-style-react/pull/3777)

- `<CardGalleryItem/>` - UniDriver - fix click function [#3744](https://github.com/wix/wix-style-react/pull/3774)

- `<InputWithOptions/>` - fix Input cursor jumping to input start on ArrowUp [#3762](https://github.com/wix/wix-style-react/pull/3762)
- `<PopoverMenu/>`, `<Swatches/>` - fix stylable colors with opacity imports [#3778](https://github.com/wix/wix-style-react/pull/3778)
- `<Popovermenu/>` - beta - fixing testkit definition for clickAtChild [#3779](https://github.com/wix/wix-style-react/pull/3779)

### Changed

- `<Input/>` - replace old puppeteer driver with unidriver for testkit export [#3769](https://github.com/wix/wix-style-react/pull/3769)

## 6.40.0 - 2019-07-17

### Added

- `<SidebarSectionItem/>` - create the component (WIP) [#3751](https://github.com/wix/wix-style-react/pull/3751)
- `<SidebarSectionDivider/>` - create the component (WIP) [#3758](https://github.com/wix/wix-style-react/pull/3758)
- `<Multiselect/>` - add `customSuffix` prop [#3759](https://github.com/wix/wix-style-react/pull/3759)

### Fixed

- `beta/<PopoverMenu/>` - fix `moveBy` prop for [#3755](https://github.com/wix/wix-style-react/pull/3755)

### Docs

- `Cheatsheet`- Adding examples to `ModalFamily`[#3731](https://github.com/wix/wix-style-react/pull/3731)
- `Cheatsheet`- Adding examples to `ButtonsFamily`[#3748](https://github.com/wix/wix-style-react/pull/3748)

## 6.39.0 - 2019-07-14

### Docs

- `Cheatsheet`- Adding examples to `LayoutFamily` [#3714](https://github.com/wix/wix-style-react/pull/3714)
- `Cheatsheet`- Adding examples to `SelectionFamily` [#3727](https://github.com/wix/wix-style-react/pull/3727)
- `<Stepper>` - changes to docs [#3712](https://github.com/wix/wix-style-react/pull/3712)
- `<Page/>` - simplify component docs [#3742](https://github.com/wix/wix-style-react/pull/3742)
- `<Thumbnail/>` - Added example with disabled mode [#3723](https://github.com/wix/wix-style-react/pull/3723)

### Added

- `<PopoverMenu/>` - BETA - UX story [#3626](https://github.com/wix/wix-style-react/pull/3626)
- `<ListItemAction/>` - add RTL support [#3737](https://github.com/wix/wix-style-react/pull/3737)
- `<PopoverMenu/>` - add deprecation log [#3743](https://github.com/wix/wix-style-react/pull/3743)
- `<Slider/>` - added disabled prop [#3723](https://github.com/wix/wix-style-react/pull/3723)

### Changed

- `<PopoverMenu/>` - beta - change wrapText to ellipsis [#3740](https://github.com/wix/wix-style-react/pull/3740)
- `<NumberInput/>` - reduce bundle size [#3739](https://github.com/wix/wix-style-react/pull/3739)
- `<Listitemaction/>` - change wrapText to ellipsis prop [#3700](https://github.com/wix/wix-style-react/pull/3700)
- `Disabled State Color Scheme` - changed colors scheme of components on disabled state to new colors having opacity (rgba) [#3718](https://github.com/wix/wix-style-react/pull/3718) [#3723](https://github.com/wix/wix-style-react/pull/3723)

### Fixed

- `<InputWithTags/>` - removed Input overlay on disabled state [#3718](https://github.com/wix/wix-style-react/pull/3718)
- `<InputWithOptions/>` - Fixing dropdown textOverflow propagate to the input [#3735](https://github.com/wix/wix-style-react/pull/3735)

## 6.38.0 - 2019-07-10

### Added

- `<SidebarSectionTitle/>` - create component for displaying title within the sidebar (WIP) [#3722](https://github.com/wix/wix-style-react/pull/3722)

### Changed

- `<Text/>` - expose tooltip props: hideDelay, showDelay, zIndex [#3725](https://github.com/wix/wix-style-react/pull/3725)

## 6.37.0 - 2019-07-08

### Added

- `<Text/>` - expose tooltip props [#3701](https://github.com/wix/wix-style-react/pull/3701)
- Add Puppeteer & Protractor driver exports for components with UniDriver [#3695](https://github.com/wix/wix-style-react/pull/3695)
- `Cheatsheet`- Adding examples to `InputFamily` [#3682](https://github.com/wix/wix-style-react/pull/3682)

### Fixed

- `<Table/>` - Given only one column exists, treat it as first instead of last style-wise [#3705](https://github.com/wix/wix-style-react/pull/3705)

### Deprecated

- `<Table/>` - deprecate `clickRowChecbox` driver method, you should use `clickRowCheckbox` instead [#3678](https://github.com/wix/wix-style-react/pull/3678)

## 6.36.0 - 2019-07-07

### Added

- `<Button/>` - Teskit - add hasSkin function [#3652](https://github.com/wix/wix-style-react/pull/3652)
- `<Stepper/>` - Export testkit types [#3690](https://github.com/wix/wix-style-react/pull/3690)
- `<PopoverMenu/>` - beta - make sure that beta folder is included in the release [#3698](https://github.com/wix/wix-style-react/pull/3698)
- `npm run components-size` - compiles components to bundles and opens source map explorer [#3622](https://github.com/wix/wix-style-react/pull/3622)

### Docs

- `<Stepper />` - add stepper testkit docs [#3667](https://github.com/wix/wix-style-react/pull/3667)

### Changed

- `<PopoverMenu/>` - change `appendTo` propType [#3662](https://github.com/wix/wix-style-react/pull/3662)
- `<Text/>` - expose tooltip props [#3701](https://github.com/wix/wix-style-react/pull/3701)

## 6.35.0 - 2019-07-03

### Added

- `<Stepper/>` - focus & enter step [#3649](https://github.com/wix/wix-style-react/pull/3649)
- `<Badge/>` - support ellipsis in case of long text [#3628](https://github.com/wix/wix-style-react/pull/3628)

### Changed

- `<Button/>`- migrating `<Button/>` styles from `wix-ui-core` to `wix-style-react` and updating Button.js to use the styles directly from `wix-style-react`.[#3648](https://github.com/wix/wix-style-react/pull/3648)

### Fixed

- infra: fix typing issue - move common types from index.d.ts [#3645](https://github.com/wix/wix-style-react/pull/3645)

## 6.34.1 - 2019-06-27

### Changed

- `<Stepper/>` - resize steps [#3634](https://github.com/wix/wix-style-react/pull/3634)

### Fixed

- transpile `import` keyword in `dist` for dynamically loadable components [#3644](https://github.com/wix/wix-style-react/pull/3644)

## 6.34.0 - 2019-06-26

### Added

- `<IconButton/>`- adding a `transparent` & `premium` skins to icon button. [#3624](https://github.com/wix/wix-style-react/pull/3624)

## 6.33.0 - 2019-06-26

### Docs

- `<Table/>` - simplify `<Page/>` example [#3621](https://github.com/wix/wix-style-react/pull/3621)
- `<Button/>`- adding an example of a transparent button (secondary)[#3623](https://github.com/wix/wix-style-react/pull/3623)

### Fixed

- `<Calendar/>` - FilterDate should not affect calendar if date is modified [#3630](https://github.com/wix/wix-style-react/pull/3630)
- `<PopoverMenu.MenuItem/>` - Fixes double invocation of `onClick` [#3636](https://github.com/wix/wix-style-react/pull/3636)
- `<InputArea/>` - fix error indicator tooltip width [#3638](https://github.com/wix/wix-style-react/pull/3638)

### Added

- `<PopoverMenu/>` - BETA - add types definition [#3578](https://github.com/wix/wix-style-react/pull/3578)
- `<CloseButton/>`- adding a `transparent` skin to close button [#3617](https://github.com/wix/wix-style-react/pull/3617)

### Changed

- `<Loader/>` `<CircularProgressBar/>` `<LinearProgressBar/>` - support dynamic imports on demand [#3097](https://github.com/wix/wix-style-react/pull/3097)

## 6.32.0 - 2019-06-24

### Fixed

- `<Stepper/>` - WIP fix border [3616](https://github.com/wix/wix-style-react/pull/3616)

### Added

- `<NestableList/>` - pass `item` that was dragged to onUpdate api [3600](https://github.com/wix/wix-style-react/pull/3600)

### Changed

- `<Page/>` - migrate E2Es to visual tests [3612](https://github.com/wix/wix-style-react/pull/3612)
- `<Box/>` - migrate E2Es to visual tests [3613](https://github.com/wix/wix-style-react/pull/3613)
- `<Text/>` - migrate E2Es to visual tests [3605](https://github.com/wix/wix-style-react/pull/3605)
- `<Checkbox/>` - migrate E2Es to visual tests [3614](https://github.com/wix/wix-style-react/pull/3614)

## 6.31.0 - 2019-06-21

### Added

- `<Tag/>` - Add new theme [#3599](https://github.com/wix/wix-style-react/pull/3599)

### Fixed

- `<Card>` - CardHeader text ellipsis width propagate parent width [#3601](https://github.com/wix/wix-style-react/pull/3601)
- `<RichTextInputArea/>` - add missing `target` attribute for rendered links [#3602](https://github.com/wix/wix-style-react/pull/3602)

## 6.30.0 - 2019-06-20

### Docs

- `<Carousel/>` - move to "Components" section [#3587](https://github.com/wix/wix-style-react/pull/3587)
- `<Table/>` - add example with virtualization [#3585](https://github.com/wix/wix-style-react/pull/3585)
- `<Table/>` - add example with EmptyState [#3590](https://github.com/wix/wix-style-react/pull/3590)
- `<Table/>` - migrate existing examples to new docs [#3592](https://github.com/wix/wix-style-react/pull/3592)

### Fixed

- `<Stepper/>` - Testkits export for protractor & puppetter [#3591](https://github.com/wix/wix-style-react/pull/3591)
- `<Stepper>` - WIP - fix text colors according to design spec [#3598](https://github.com/wix/wix-style-react/pull/3575)
- `<Steper>` - WIP - fix disabled hover state color [#3595](https://github.com/wix/wix-style-react/pull/3575)
- `<SegmentedToggle/>`- adding options divider [#3575](https://github.com/wix/wix-style-react/pull/3575)
- `<SegmentedToggle/>`- adding options divider [#3575](https://github.com/wix/wix-style-react/pull/3575)
- `<Page/>` - fix warning regarding missing `key` in children [#3603](https://github.com/wix/wix-style-react/pull/3603)

## 6.29.0 - 2019-06-18

### Added

- `<Stepper>` - WIP basic stepper component [#3571](https://github.com/wix/wix-style-react/pull/3571)
- `<Thumbnail/>` — allow custom children [#3568](https://github.com/wix/wix-style-react/pull/3568)

### Docs

- `<Table/>` - add example with infinite scroll [#3584](https://github.com/wix/wix-style-react/pull/3584)

## 6.28.0 - 2019-06-17

### Added

- `<Thumbnail/>` - add title below thumbnail [#3560](https://github.com/wix/wix-style-react/pull/3560)
- `<Button/>`- add primary dark theme [#3565](https://github.com/wix/wix-style-react/pull/3565)
- `<PopoverMenu/>` - BETA - add arrow keys focus navigation [#3522](https://github.com/wix/wix-style-react/pull/3522)
- `<ListItemAction/>` - add text ellipsis support [#3576](https://github.com/wix/wix-style-react/pull/3576)
- `<PopoverMenu/>` - BETA - add text wrap & ellipsis support for menu items [#3577](https://github.com/wix/wix-style-react/pull/3577)

### Changed

- `<Table/>` - migrate to visual grid [#3559](https://github.com/wix/wix-style-react/pull/3559)
- `<Text/>` - set default ellipsis appendTo to window [#3573](https://github.com/wix/wix-style-react/pull/3573)

### Fixed

- `<InputWithOptions/>` - prevent Enter key from triggering form submit [#3562](https://github.com/wix/wix-style-react/pull/3562)

## 6.27.0 - 2019-06-12

### Changed

- `<ColorPicker/>`, `<ColorInput/>` - align with spec, support Swatches [#3544](https://github.com/wix/wix-style-react/pull/3544)
- `<InputArea/>` - change test driver to support for uncontrolled components [#3495](https://github.com/wix/wix-style-react/pull/3495)

### Added

- `<PageHeader/>` Testkit - expose puppeteer testkit [#3536](https://github.com/wix/wix-style-react/pull/3536)
- `<ListItemAction/>` - add classname prop for extensibility [#3543](https://github.com/wix/wix-style-react/pull/3543)
- `<EmptyState/>` add image container className [#3530](https://github.com/wix/wix-style-react/pull/3530)
- `<TextButton/>`- add tiny styling [#3553](https://github.com/wix/wix-style-react/pull/3553)
- `<SectionHelper/>` - add `fullWidth` to support unlimited width content [#3557](https://github.com/wix/wix-style-react/pull/3557)

### Docs

- `<Table/>` - explain compound components [#3538](https://github.com/wix/wix-style-react/pull/3538)
- `<Table/>` - document missing props [#3546](https://github.com/wix/wix-style-react/pull/3546)

## 6.26.0 - 2019-06-06

### Added

- `<IconButton/>`- adding`tiny` & `large` sizes [#3520](https://github.com/wix/wix-style-react/pull/3520)
- `<Sidebar/>` - add new component [#3386](https://github.com/wix/wix-style-react/pull/3386)
- `<DropdownBase/> & <DropdownLayout/>`- support overflow prop [#3541](https://github.com/wix/wix-style-react/pull/3541)

### Fixed

- `<DropdownLayout/>` fix `onOptionMarked` not called on default marked option [#3535](https://github.com/wix/wix-style-react/pull/3535)

### Added

- `<Table/>` - add `deselectRowsByDefault` prop [#3526](https://github.com/wix/wix-style-react/pull/3526)

### Changed

- `<ListItemAction/> & listItemActionBuilder` - add props `as`, `tabIndex`. Support keyboard focusability. [#3519](https://github.com/wix/wix-style-react/pull/3519)
- `<DropdownBase/>` - add tabindex to props list [#3523](https://github.com/wix/wix-style-react/pull/3523)
- `<ListItemAction/>` - change focus style and add onKeyDown [#3525](https://github.com/wix/wix-style-react/pull/3525)
- `<ListItemAction/>` - remove padding mapping and add prop `ref` [#3528](https://github.com/wix/wix-style-react/pull/3528)

### Fixed

- `<AddItem/>` - set type 'button' [#3527](https://github.com/wix/wix-style-react/pull/3527)
- `<ListItemAction/>` - fix tabIndex typo, set default `as` prop to button [#3529](https://github.com/wix/wix-style-react/pull/3529)

## 6.25.1 - 2019-06-04

### Changed

- `<DataTable/>` - remove redundant checking of items by ref [#3457](https://github.com/wix/wix-style-react/pull/3457)

### Fixed

- Foundation - fix stylable calcrgba mixin to use alpha channel values to 0.1 - 1 [#3516](https://github.com/wix/wix-style-react/pull/3516)
- downgrade internal jscodeshift dependency, which uses babel@6, for compatibility [#3511](https://github.com/wix/wix-style-react/pull/3511)

## 6.25.0 - 2019-06-03

### Added

- `<Carousel/>` - add disabled button in non-infinite mode [#3473](https://github.com/wix/wix-style-react/pull/3473)
- `<DropdownBase/>` - add missing testkit method optionsCount [#3508](https://github.com/wix/wix-style-react/pull/3508)
- `<FormField/>` - support ellipsis on top labelPlacement [#3506](https://github.com/wix/wix-style-react/pull/3506)
- `<PopoverMenu/>` - component refactored under beta [#3485](https://github.com/wix/wix-style-react/pull/3485)
- `<DropdownBase/>` - expose 'flip', 'fixed' params and pass it down to popover

### Changed

- `<DropdownLayout>` - changed option `onMouseDown` to `onClick` [#3507](https://github.com/wix/wix-style-react/pull/3507)
- Infra: replace `react-testing-library` with `@testing-library/react` [#3501](https://github.com/wix/wix-style-react/pull/3501)
- Infra: update `jscodeshift` (now does not use deprecated `nomnom` package [#3502](https://github.com/wix/wix-style-react/pull/3502)
- Infra: update husky version [#3503](https://github.com/wix/wix-style-react/pull/3503)

### Fixed

- `<SegmentedToggle/>` - fix selected option border [#3505](https://github.com/wix/wix-style-react/pull/3505)

## 6.24.0 - 2019-05-30

### Added

- `listItemActionBuilder` - add missing paddingSize prop [#3491](https://github.com/wix/wix-style-react/pull/3491)
- `<ListItemAction/>` - add missing paddingSize prop. [#3489](https://github.com/wix/wix-style-react/pull/3489)
- `<Carousel/>` - expose afterChange and beforeChange handlers [#3487](https://github.com/wix/wix-style-react/pull/3487)
- `<DropdownBase/>` - add missing props zIndex, moveBy [#3492](https://github.com/wix/wix-style-react/pull/3492)
- `<ColorInput/>` - add `preset` & `showClear` props [#3486](https://github.com/wix/wix-style-react/pull/3486)

### Changed

- `<ColorInput/>` - remove default value for placeholder [#3474](https://github.com/wix/wix-style-react/pull/3474)
- `<ColorPicker/>` - use smaller size x & v buttons [#3499](https://github.com/wix/wix-style-react/pull/3499)
- `<Swatches/>` - add tooltip for `showClear` button and display `showClearMessage` content [#3477](https://github.com/wix/wix-style-react/pull/3477)

## 6.23.0 - 2019-05-28

### Added

- UX Foundation (stylable) - stylesheets for colors, gradients, shadows etc. [#3461](https://github.com/wix/wix-style-react/pull/3461)
- `<Swatches/>` - new component. [#3464](https://github.com/wix/wix-style-react/pull/3464)

### Docs

- `<Slider/>` - split UX & APi stories, update examples description [#3100](https://github.com/wix/wix-style-react/pull/3100)
- `<Button/>` - fix testkit tab [#3470](https://github.com/wix/wix-style-react/pull/3470)

### Changed

- `listItemActionBuilder` - add dataHook [#3432](https://github.com/wix/wix-style-react/pull/3432)
- `<SegmentedToggle/>` - split UX & API & Migrate Tooltip [#3469](https://github.com/wix/wix-style-react/pull/3469)
- `<Tooltip/>` - add functionality appendTo: by predicate & documentation [#3472](https://github.com/wix/wix-style-react/pull/3472)

## 6.22.0 - 2019-05-23

### Added

- `<CardGalleryItem/>` - add `settingsMenu` prop [#3437](https://github.com/wix/wix-style-react/pull/3437)
- `<Carousel/>` - add `buttonSkin` prop [#3444](https://github.com/wix/wix-style-react/pull/3444)
- `<CirucularProgressBar/>` - add puppeteer driver [#3439](https://github.com/wix/wix-style-react/pull/3439)
- `<Input/>` - add `warning` status [#3449](https://github.com/wix/wix-style-react/pull/3449)
- `<Propotion/>`- add getAspectRatio function to testkit [#3451](https://github.com/wix/wix-style-react/pull/3451)

### Fixed

- `<MultiSelect/>` - fix padding between `<Tag/>` components [#3434](https://github.com/wix/wix-style-react/pull/3434)
- `<Carousel/>` - fix missing `matchMedia` polyfill [#3447](https://github.com/wix/wix-style-react/pull/3447)
- `<Search/>` - fix non working input in React 16 [#3454](https://github.com/wix/wix-style-react/pull/3454)
- `<Popover/>` - fix arrow placement [#3462](https://github.com/wix/wix-style-react/pull/3462)

### Changed

- `<NestableList/>` - add `theme`, `onDragStart` & `onDragEnd` props [#3446](https://github.com/wix/wix-style-react/pull/3446)

## 6.21.0 - 2019-05-20

### Added

- `<DropdownLayout/>` - add `markedOption` prop [#3409](https://github.com/wix/wix-style-react/pull/3409)

### Fixed

- `<Search/>` - fix `getDerivedStateFromProps` warning [#3343](https://github.com/wix/wix-style-react/pull/3343)
- Storybook: fix broken components [#3440](https://github.com/wix/wix-style-react/pull/3440)

## 6.20.0 - 2019-05-20

### Added

- `<Box/>` - add CSS properties to typescript declarations [#3419](https://github.com/wix/wix-style-react/pull/3419)
- `<NestableList/>` - add `onDragStart` and `onDragEnd` callbacks [#3414](https://github.com/wix/wix-style-react/pull/3414)
- `<CardGalleryItem/>` - add badge to card gallery item [#3424](https://github.com/wix/wix-style-react/pull/3424)
- `<Carousel/>` - add `children` prop [#3430](https://github.com/wix/wix-style-react/pull/3430)
- `<SocialPreview/>` - add ellipsis property to text components [#3309](https://github.com/wix/wix-style-react/pull/3309)

### Changed

- `<CardGalleryItem/>` - title and subtitle are not mandatory [#3411](https://github.com/wix/wix-style-react/pull/3411)
- `<Carousel/>` - refactor the component to use react-slick [#3415](https://github.com/wix/wix-style-react/pull/3415)
- `<Carousel/>` - migrate e2e test to visual [#3425](https://github.com/wix/wix-style-react/pull/3425)
- `<Carousel/>` - improve indicator visual design [#3429](https://github.com/wix/wix-style-react/pull/3429)
- `<CircularProgressBar/>` - migrate from wix-ui-backoffice [#3405](https://github.com/wix/wix-style-react/pull/3405)

### Fixed

- `<Tooltip/>` - Add instance methods to .d.ts [#3423](https://github.com/wix/wix-style-react/pull/3423) [#3436](https://github.com/wix/wix-style-react/pull/3436)

## 6.19.0 - 2019-05-16

### Added

- GoogleMapClient - add session to place details api [#3400](https://github.com/wix/wix-style-react/pull/3400)
- `<Tooltip/>` - add disabled prop to disable tooltips trigger behaviour [#3410](https://github.com/wix/wix-style-react/pull/3410)
- `<Search/>` - add `debounceMs` prop for debouncing onChange calls [#3343](https://github.com/wix/wix-style-react/pull/3343)
- `<ModalSelectorLayout/>` - add `debounceSearchMs` prop for debouncing search input onChange calls [#3343](https://github.com/wix/wix-style-react/pull/3343)
- Infra: Add a puppeteer testkit bundle [#3394](https://github.com/wix/wix-style-react/pull/3394)
- `<Table/>` - support row highlighting [#3356](https://github.com/wix/wix-style-react/pull/3356)
- `<ListItemAction>` - create new component and dropdown builder [#3371](https://github.com/wix/wix-style-react/pull/3371)

### Fixed

- `<Text/>` - fix classname clash when given through prop [#3378](https://github.com/wix/wix-style-react/pull/3378)
- `<Card.Subheader/>` - add dataHook [#3408](https://github.com/wix/wix-style-react/pull/3408)
- `<Badge/>` - fix skin typescript declarations typo [#3412](https://github.com/wix/wix-style-react/pull/3412)
- `<Avatar/>` - fix typescript declarations [#3413](https://github.com/wix/wix-style-react/pull/3413)

## 6.18.4 - 2019-05-15

### Fixed

- `<NestableList/>` - revert to use `ComponentWillReceiveProps` for compatibility [#3392](https://github.com/wix/wix-style-react/pull/3392)
- `<Tooltip/>` - fix a mistake where tooltipTestkitFactory exported unidriver types instead of legacy ones. [#3402](https://github.com/wix/wix-style-react/pull/3402)
- `<ImageViewer/>` - fix testkit methods that uses native click() [#3406](https://github.com/wix/wix-style-react/pull/3406)

## 6.18.3 - 2019-05-14

### Fixed

- `<Badge>` - missing dataHook type in types. [#3398](https://github.com/wix/wix-style-react/pull/3398)

## 6.18.2 - 2019-05-14

### Fixed

- `<DataTable/>` - Driver - fix exists() function [#3367](https://github.com/wix/wix-style-react/pull/3367)
- `<Badge/>` - Add missing strings to BadgeSkin type [#3395](https://github.com/wix/wix-style-react/pull/3395)
- `<Box/>` - Add missing classname to typings [#3396](https://github.com/wix/wix-style-react/pull/3396)

## 6.18.1 - 2019-05-13

### Fixed

- `<Tooltip>`, `<Box>`, `<BadgeSelect>`, `<Badge>` - added multiple tests for types [#3391](https://github.com/wix/wix-style-react/pull/3391)

## 6.18.0 - 2019-05-13

### Added

- `<Table/>` - add selected row indication [#3353](https://github.com/wix/wix-style-react/pull/3353)
- `<Card/>` - add `<Card.Subheader/>` component [#3293](https://github.com/wix/wix-style-react/pull/3293)
- Infra: add type definitions for Badge, BadgeSelect, Box, Tooltip and VBox [#3349](https://github.com/wix/wix-style-react/pull/3349)

### Deprecated

- `<RichTextArea />` - deprecated component, you should use `<RichTextInputArea/>` instead [#3354](https://github.com/wix/wix-style-react/pull/3354)

### Changed

- `<FormField/>` - migrated infoicon's tooltip to next generation tooltip. [#3312](https://github.com/wix/wix-style-react/pull/3312)
- `<AddItem/>` - migrated tooltip to next generation, improved documentation, added unidriver [#3326](https://github.com/wix/wix-style-react/pull/3326)
- `<Badge/>` - migrate from `wix-ui-backoffice` [#3362](https://github.com/wix/wix-style-react/pull/3362)
- `<ImageViewer/>` - migrate Tooltip & Button [#3375](https://github.com/wix/wix-style-react/pull/3375)
- `<Loader/>` - migrate Tooltip. [#3376](https://github.com/wix/wix-style-react/pull/3376)
- `<ErrorIndicator/>` - migrate Tooltip [#3380](https://github.com/wix/wix-style-react/pull/3380)
- `<EditableRow/>` - migrate Tooltip, TextLink, Button [#3379](https://github.com/wix/wix-style-react/pull/3379)
- `<FieldLabelAttributes/>` - migrate Tooltip [#3381](https://github.com/wix/wix-style-react/pull/3381)
- `<Button/>` - migrate e2e tests to .visual [#3383](https://github.com/wix/wix-style-react/pull/3383)
- `<NestableList/>` - internal refactors [#3358](https://github.com/wix/wix-style-react/pull/3358)

### Fixed

- `<Input/>` - make noBorderRadius work on round input [#3357](https://github.com/wix/wix-style-react/pull/3357)
- `<Dropdown/>` - use more robust compare of prev options to current. [#3388](https://github.com/wix/wix-style-react/pull/3388)

### Docs

- `<Table/>` document 'onSortClick' function [#3364](https://github.com/wix/wix-style-react/pull/3364)
- `<Tooltip/>` - split documentation to UX and API parts [#3364](https://github.com/wix/wix-style-react/pull/3384)
- `<Tooltip/>` - docs API - add a11y examples [#3385](https://github.com/wix/wix-style-react/pull/3385)

## 6.17.3 - 2019-05-03

### Fixed

- `<NestableList/>` - Fix bad import of PropTypes [#3359](https://github.com/wix/wix-style-react/pull/3359)

## 6.17.2 - 2019-05-03

### Docs

- `<RichTextInputArea/>` - change RichTextArea docs to use the new component [#3352](https://github.com/wix/wix-style-react/pull/3352)

### Fixed

- Infra - remove .d.ts files from root when unnecessary in import-path [fix](https://github.com/wix/import-path/pull/8)

## 6.17.1 - 2019-05-02

### Fixed

- downgrade internally dependency jscodeshift, which uses babel@6, for compatibility [51dd840e](https://github.com/wix/wix-style-react/commit/51dd840e46c58f6d5f80e8275a93f208ce0f8fe6)
- `<Input/>` - fix prop validation warning when providing updateControlledOnClear [#3341](https://github.com/wix/wix-style-react/pull/3341)
- Infra: Remove empty typescript declarations [#3341](https://github.com/wix/wix-style-react/pull/3341)

## 6.17.0 - 2019-05-02

### Added

- `<RichTextInputArea/>` - support removing links by toggling the link button [#3323](https://github.com/wix/wix-style-react/pull/3323)
- Infra - add type definitions - add Avatar types [#3332](https://github.com/wix/wix-style-react/pull/3332)
- `<RichTextInputArea/>` - add scrollBehavior polyfill [#3342](https://github.com/wix/wix-style-react/pull/3342)

### Fixed

- `<Page/>` - allow falsy children (for conditional rendering) [#3311](https://github.com/wix/wix-style-react/pull/3311)
- `<RichTextInputArea/>` - fix list incorrect style [#3337](https://github.com/wix/wix-style-react/pull/3337)

## 6.16.2 - 2019-04-28

### Fixed

- `Button Family` - Proxy driver from ui-core [#3300](https://github.com/wix/wix-style-react/pull/3300)
- `<Checkbox/>` - use css-modules hashed class name instead hardcoded string in testkit [#3286](https://github.com/wix/wix-style-react/pull/3286)

## 6.16.1

### Fixed

- `<Tooltip/>` - fix broken upgrade prop for puppeteer & protractor testkits. [#3296](https://github.com/wix/wix-style-react/pull/3296)

## 6.16.0

### Added

- `<RichTextInputArea/>` - add `status` & `statusMessage` props [#3281](https://github.com/wix/wix-style-react/pull/3281)
- `<DropdownLayout/>` - Add onOptionMarked callback [#3155](https://github.com/wix/wix-style-react/pull/3155)

### Changed

- `<Input>` - add `updateControlledOnClear` prop which if provided fixes an error thrown in the console [#3251](https://github.com/wix/wix-style-react/pull/3251)
- `<ContactItemBuilder/>` - add disable prop [#3248](https://github.com/wix/wix-style-react/pull/3248)

### Deprecated

- `<Page/>` - Add deprecationLog, encouraging consumers to use Page upgrade [#3288](https://github.com/wix/wix-style-react/pull/3288)

### Fixed

- `<Tooltip/>` - make testkit upgrade toggle more specific[#3294](https://github.com/wix/wix-style-react/pull/3294)

## 6.15.0 - 2019-04-21

### Added

- `<MultiSelect/>` stop using autoSizeInput [#3277](https://github.com/wix/wix-style-react/pull/3277)
- `<DataTable/>` (Driver) - Add UniDriver [#3268](https://github.com/wix/wix-style-react/pull/3268)
- `<Checkbox/>` (Driver) - `isChecked()`: Use input value instead of style in driver [#3267](https://github.com/wix/wix-style-react/pull/3267)
- `<ActionButton/>` - add `target` prop [#3204](https://github.com/wix/wix-style-react/pull/3204)
- `<MultiSelect/>` `<Tag/>` - fix disabled state behavior [#3201](https://github.com/wix/wix-style-react/pull/3201)
- `<RichTextInputArea/>` - add `maxHeight` prop [#3263](https://github.com/wix/wix-style-react/pull/3263)

### Fixed

- `<NumberInput/>` - add PropTypes import [#3279](https://github.com/wix/wix-style-react/pull/3279)

## 6.14.0 - 2019-04-18

### Added

- `<MessageBox/>` - add white theme [#3127](https://github.com/wix/wix-style-react/pull/3127)
- `<NumberInput/>` - add `strict` property [#3249](https://github.com/wix/wix-style-react/pull/3249)
- `<Tooltip/>` - major refactor. Total rewrite of component. Follow [upgrade guidelines](https://github.com/wix/wix-style-react/blob/master/src/Tooltip/TooltipNext/MIGRATION-API.md) [#3110](https://github.com/wix/wix-style-react/pull/3110)
- `<SocialPreview/>` - add new component [#3180](https://github.com/wix/wix-style-react/pull/3180)
- Add Drivers: `<Notification/>`(Protractor, Puppeteer), `<Loader/>`(Puppeteer), `<Checkbox/>`(Puppeteer). [#3262](https://github.com/wix/wix-style-react/pull/3262)
- `<RichTextInputArea/>` - add `disabled` prop [#3255](https://github.com/wix/wix-style-react/pull/3255)
- `<DropdownBase/>` - add Popover's `appendTo` prop [#3266](https://github.com/wix/wix-style-react/pull/3266)

## 6.13.0 - 2019-04-08

### Added

- `<PopoverMenuItem/>` - allow `text` prop to accept react nodes [#3224](https://github.com/wix/wix-style-react/pull/3224)
- `<GooglePreview/>` - add new component [#3179](https://github.com/wix/wix-style-react/pull/3179)
- `<TableToolbar/>` - add dataHook props to <Title> and <SelectedCount> [#3198](https://github.com/wix/wix-style-react/pull/3198)

### Changed

- `<Page/>` - Change PageHeader animation [#3230](https://github.com/wix/wix-style-react/pull/3230)

### Fixed

- `<EditableTitle/>` - fix bug where onSubmit is called twice when pressing enter [#3227](https://github.com/wix/wix-style-react/pull/3227)
- `<RichTextInputArea/>` - hide placeholder after changing the block type [#3242](https://github.com/wix/wix-style-react/pull/3242)
- `<Tooltip/>` - Change z-index to be higher than Modal's [#3240](https://github.com/wix/wix-style-react/pull/3240)
- `<Page/>` - fix sticky issue for pageHeaderContainer [#3246](https://github.com/wix/wix-style-react/pull/3246)

### Docs

- `<Button/>` - improved documentation. [#3084](https://github.com/wix/wix-style-react/pull/3084)

## 6.12.3 - 2019-04-02

### Changed

- UniDriver: Upgrade - Use UniDriver from `wix-ui-test-utils` [#3229](https://github.com/wix/wix-style-react/pull/3229)

## 6.12.2 - 2019-04-02

### Fixed

- `<RichTextToolbar/>` - remove unnecessary bracket [418ed84](https://github.com/wix/wix-style-react/commit/418ed84e462efb190f307d4fa9fe28813d8079c8)

## 6.12.1 - 2019-04-01

### Fixed

- `<DataTable/>` - fix style attribute rendering array [#3222](https://github.com/wix/wix-style-react/pull/3222)

## 6.12.0 - 2019-04-01

### Added

- `<RichTextInputArea/>` - add `placeholder` prop [#3214](https://github.com/wix/wix-style-react/pull/3214)

### Fixed

- `<MultiSelect/>` - avoid unnecessary line-breaks by adjusting input size [#3146](https://github.com/wix/wix-style-react/pull/3146)

## 6.11.0 - 2019-03-31

### Added

- `<Accordion/>` - new component for collapsable content [#2902](https://github.com/wix/wix-style-react/pull/2902)
- `<DataTable/>` - add virtualization capability [#3184](https://github.com/wix/wix-style-react/pull/3184)

### Changed

- `<Notification/>` (fix) - Add default zIndex so that Notification is displayed above the `<Page/>`'s minimized Header. overlay [#3181](https://github.com/wix/wix-style-react/pull/3181)
- `<DropdownLayout/>` - complete Unidriver implementation [#3199](https://github.com/wix/wix-style-react/pull/3199)

### Fixed

- `<EditableTitle/>` - Fix exists [#3190](https://github.com/wix/wix-style-react/pull/3190)

### Docs

- `<Page/>` - add link to migration doc in component story [9692962](https://github.com/wix/wix-style-react/commit/969296256d9ad7286c8379adbb8a61e9d3370333)

## 6.10.4 - 2019-03-26

### Changed

- `<Page/>` - With `upgrade` `<Page.Tail/>` will NOT receive `minimized` prop [#3140](https://github.com/wix/wix-style-react/pull/3140)

### Fixed

- `<DropdownLayout/>` - Fix reactDOM driver to use hashed class names #3161(https://github.com/wix/wix-style-react/pull/3161)
- `<Tooltip>` - Set default top/left css properties for tooltip content. [#3119](https://github.com/wix/wix-style-react/pull/3119)
- `<EditableTitle/>` - Prevent horizontal scrollbar [#3176](https://github.com/wix/wix-style-react/pull/3176)
- `<Page/>` (fix&refactor) - Fix Sticky z-index issue. Simplify Header styling and logic #3167(https://github.com/wix/wix-style-react/pull/3167)
- `<EditableTitle/>` minor style fix [#3176](https://github.com/wix/wix-style-react/pull/3176)

### Docs

- `<TextButton>`, `<IconButton>`, `<CloseButton>` - improved documentation. [#3053](https://github.com/wix/wix-style-react/pull/3053), [#3082](https://github.com/wix/wix-style-react/pull/3082), [#3085](https://github.com/wix/wix-style-react/pull/3085)

## 6.10.3 - 2019-03-24

### Fixed

- `<Modal/>` (fix&change): Fix broken `zIndex` prop. Change default zIndex value from `11` to `5000` [#3153](https://github.com/wix/wix-style-react/pull/3153)
- `<DatePicker/>` - add missing customInput support [#3156](https://github.com/wix/wix-style-react/pull/3156)
- `<EditableTitle/>` - fix margins [#3141](https://github.com/wix/wix-style-react/pull/3141)
- `<Search/>` enable passing showOptionsIfEmptyInput prop [#3149](https://github.com/wix/wix-style-react/pull/3140)

## 6.10.2 - 2019-03-24

No Changes (Patch version, only to re-publish Storybook, after failed publish)

## 6.10.1 - 2019-03-24

No Changes (Patch version, only to re-publish Storybook, after failed publish)

## 6.10.0 - 2019-03-22

### Added

- `<Input/>` - add styles for read-only state [#3096](https://github.com/wix/wix-style-react/pull/3096)
- `<EditableTitle/>` - new editable input to compose in the PageHeader [#3074](https://github.com/wix/wix-style-react/pull/3074)

### Fixed

- `<PopoverMenu/>` - Remove default zIndex [#3133](https://github.com/wix/wix-style-react/pull/3133)
- `<Page/>` - Add `z-index: 1` to Page [#3136](https://github.com/wix/wix-style-react/pull/3136)
- `<ColorInput/>` - prevent unremitting `onConfirm` call when clicking outside [#3151](https://github.com/wix/wix-style-react/pull/3151)

## 6.9.0 - 2019-03-18

### Added

- `<GoogleAddressInput/>` - allow passing fields to place details request [#3101](https://github.com/wix/wix-style-react/pull/3101)
- `<InputArea/>` - add minRowsAutoGrow [#3105](https://github.com/wix/wix-style-react/pull/3105)
- `<GoogleAddressInput/>` - attach session token to api calls [#3112](https://github.com/wix/wix-style-react/pull/3112)

### Fixed

- `<Page/>` - Fix Multiple PageHeader dataHooks [#3111](https://github.com/wix/wix-style-react/pull/3111)
- `<Modal>` - disable page scrolling when modal is open [#3086](https://github.com/wix/wix-style-react/pull/3086)
- `<RichTextInputAreaLinkForm/>` - make component to be non-pure [#3113](https://github.com/wix/wix-style-react/pull/3113)
- `<MultiSelect/>` - fix Tab behavior to focus out of the component [#3080](https://github.com/wix/wix-style-react/pull/3080)

## 6.8.0 - 2019-03-13

### Added

- `<Calendar/>` - new supported locales Thai, Chinese, and Czech.[#3078](https://github.com/wix/wix-style-react/pull/3078)
- `<CalendarPanel/>` - new supported locales Thai, Chinese, and Czech.[#3078](https://github.com/wix/wix-style-react/pull/3078)
- `<DatePicker/>` - new supported locales Thai, Chinese, and Czech.[#3078](https://github.com/wix/wix-style-react/pull/3078)
- `<Slider/>` - add single track support [#3062](https://github.com/wix/wix-style-react/pull/3062)
- `<NumberInput />` - add new NumberInput component [#3033](https://github.com/wix/wix-style-react/pull/3033)

### Fixed

- `<ImageViewer/>` - fix image position in Firefox [#3092](https://github.com/wix/wix-style-react/pull/3092)

### Docs

- `<Slider/>` - docs redesign [#3062](https://github.com/wix/wix-style-react/pull/3062)

## 6.7.3 - 2019-03-07

### Added

- `<Layout/>` - add justifyItems and alignItems props [#3056](https://github.com/wix/wix-style-react/pull/3056)
- `<PopoverMenu/>` - add `moveBy` prop [#3064](https://github.com/wix/wix-style-react/pull/3064)
- `<FormField/>` - add `labelSize` prop [#3075](https://github.com/wix/wix-style-react/pull/3075)

### Fixed

- `<Button/>` - fix proptype definition [#3066](https://github.com/wix/wix-style-react/pull/3066)
- `<TextButton/>` - fix proptype definition [#3066](https://github.com/wix/wix-style-react/pull/3066)
- `<CloseButton/>` - fix proptype definition [#3066](https://github.com/wix/wix-style-react/pull/3066)
- `<IconButton/>` - fix proptype definition [#3066](https://github.com/wix/wix-style-react/pull/3066)

## 6.7.2 - 2019-03-03

No Changes (Patch version, only to re-publish Storybook, after failed publish)

## 6.7.1 - 2019-02-28

### Added

- `<MessageBoxFunctionalLayout/>`: Add prefix and suffix icons to modal confirm and cancel buttons [#2991](https://github.com/wix/wix-style-react/pull/2991)

### Fixed

- `<Page/>` (Fix): Prevent Page FixedContainer form blocking `<Notification type="sticky"/>` [#2979](https://github.com/wix/wix-style-react/pull/2979)
- `<GeneratedTestComponent>` - fix puppeteer testkit export

## 6.7.0 - 2019-02-28

### Added

- `<ColorInput/>` - new component for HEX color input [#2898](https://github.com/wix/wix-style-react/pull/2898)
- `<SectionHelper/>` - add experimental Dark theme [#3042](https://github.com/wix/wix-style-react/pull/3042)
- `<RichTextInputArea/>` - add link button [#3047](https://github.com/wix/wix-style-react/pull/3047)

### Docs

- `<Page/>` - Make docs describe the New Page. Improve Component Doc Page. Add examples. [#3049](https://github.com/wix/wix-style-react/pull/3049)

### Deprecated

- `<RadioGroup/>` - deprecated prop `type="button"` [#2874](https://github.com/wix/wix-style-react/pull/2874)

### Fixed

- `<Checkbox/>` - `disabled` & `hasError` styling [#3037](https://github.com/wix/wix-style-react/pull/3037)
- `<MultiSelect/>` - Fix `background-color` styling [#3027](https://github.com/wix/wix-style-react/pull/3027)

## 6.6.1 - 2019-02-26

### Fixed

- `<Input/>` (fix) : Fix placement vertical alignment, and remove required box-shadow in Firefox [#3041](https://github.com/wix/wix-style-react/pull/3041/)

## 6.6.0 - 2019-02-25

### Added

- `<ColorPicker/>` - add feature to disable confirm button [#2998](https://github.com/wix/wix-style-react/pull/2998)

### Fixed

- Infra: avoid dynamic require in testkit/index.js & testkit/enzyme.js [#3000](https://github.com/wix/wix-style-react/pull/3000)
- Infra: remove duplicated `exists` tests [#3022](https://github.com/wix/wix-style-react/pull/3022)
- Infra: fix all eslint warnings and move e2e-runtime to a separate dir [#2996](https://github.com/wix/wix-style-react/pull/2996)

### Changed

- Infra: remove unused deps, fix progress-bar for transpile [#3009](https://github.com/wix/wix-style-react/pull/3009)
- Infra: Add test to check for needed files inside dist presence. Remove stories from dist [#3015](https://github.com/wix/wix-style-react/pull/3015)

### Lab

- `<NoBorderInput/>` - add support for focus props [#3005](https://github.com/wix/wix-style-react/pull/3005)
- `<NoBorderInput/>` - make some style adjustments [#3011](https://github.com/wix/wix-style-react/pull/3011)

### Docs

- `<RichTextArea>` - rewrite story page [#2989](https://github.com/wix/wix-style-react/pull/2989) [#3007](https://github.com/wix/wix-style-react/pull/3007)
- `<FormField/>`, `<Input/>`, `<TextArea/>`, `<TextInput/>` - rewrite story pages [#3010](https://github.com/wix/wix-style-react/pull/3010)
- `<Page/>` improve page layout story [#3014](https://github.com/wix/wix-style-react/pull/3014)

## 6.5.1 - 2019-02-20

### Fixed

- Infra: transpile test directory [#3004](https://github.com/wix/wix-style-react/pull/3004)

## 6.5.0 - 2019-02-20

### Added

- `<Search />` - allow filtering options using custom predicate [#2907](https://github.com/wix/wix-style-react/pull/2907)

### Fixed

- `<DropdownLayout />` - fix double scrollbar issue [#2969](https://github.com/wix/wix-style-react/pull/2969)
- `<SortableList/>` - fix hover event bug [#2923](https://github.com/wix/wix-style-react/pull/2923)
- `<Input/>` - fix disabled ticker color [#2986](https://github.com/wix/wix-style-react/pull/2986)
- `<TimeInput/>` - Fix cut text [#2970](https://github.com/wix/wix-style-react/pull/2970)

### Docs

- `<TextField/>` - rename docs page to `TextInput` [#2977](https://github.com/wix/wix-style-react/pull/2977)
- `<TextArea/>` - refactor story page based on new design [#2975](https://github.com/wix/wix-style-react/pull/2975)
- `<TextInput/>` - improve docs structuring [#2988](https://github.com/wix/wix-style-react/pull/2988)
- `<TextArea/>` - improve documentations after UX review [#2987](https://github.com/wix/wix-style-react/pull/2987)
- `<Input/>` - remove tabs from examples [#2985](https://github.com/wix/wix-style-react/pull/2985)
- `<Page/>` - Write new UX Page Layout story [#2981](https://github.com/wix/wix-style-react/pull/2981)

### Changed

- infra: improve build process. Migrate to `babel@7` [#2868](https://github.com/wix/wix-style-react/pull/2868)

### Lab

- `<NoBorderInput/>` - add new component [#2948](https://github.com/wix/wix-style-react/pull/2948)

### Deprecated

- `<RichTextAreaComposite />` - deprecated component, you should use a composition of `<RichTextArea/>` and `<FormField/>` [#2997](https://github.com/wix/wix-style-react/pull/2997)

## 6.4.0 - 2019-02-18

### Added

- `<SortableList/>` - add `listOfPropsThatAffectItems` to fix rendering bug [#2925](https://github.com/wix/wix-style-react/pull/2925)
- `<PageHeader/>` - Add ellipsis to the title and subtitle [#2871](https://github.com/wix/wix-style-react/pull/2871)
- `<FloatingNotification/>` - add new component [#2820](https://github.com/wix/wix-style-react/pull/2820)
- `<FilePicker/>` - add `name` prop [#2937](https://github.com/wix/wix-style-react/pull/2937)
- `<PopoverMenu/>` - add `onShow` and `onHide` callbacks [#2945](https://github.com/wix/wix-style-react/pull/2945)
- `<TableActionCell>` - add `disabled` property to `primaryAction` [#2961](https://github.com/wix/wix-style-react/pull/2961)
- `<CloseButton/>` - add support for a custom icon [#2960](https://github.com/wix/wix-style-react/pull/2960)

### Changed

- `<Page/>` - refactor and simplify to use `position:sticky` [#2935](https://github.com/wix/wix-style-react/pull/2935)

### Fixed

- `<ContactItemBuilder/>` - fixed ellipsis [#2951](https://github.com/wix/wix-style-react/pull/2951)
- `<ColorPicker/>` - fixed border radius and action button icon size according to design spec [2959](https://github.com/wix/wix-style-react/pull/2959)
- `<DropdownLayout/>` - fix double scrollbar issue [#2969](https://github.com/wix/wix-style-react/pull/2969)

### Lab

- `<RichTextInputArea/>` - use `RichContentEditor` [2943](https://github.com/wix/wix-style-react/pull/2943)

## 6.3.0 - 2019-02-10

### Added

- `<SectionHelper/>` new `appearance="preview"` skin [#2906](https://github.com/wix/wix-style-react/pull/2906)
- `<SortableList/>` - add `delay` and `canDrag` props [#2908](https://github.com/wix/wix-style-react/pull/2908)
- `<SortableList/>` - add animation api [#2852](https://github.com/wix/wix-style-react/pull/2852)
- `<Autocomplete/>` - add empty state feature [#2899](https://github.com/wix/wix-style-react/pull/2899)
- `<Input/>` - add `<Input.Affix/>` and `<Input.IconAffix/>` for prefix/suffix rendering [#2887](https://github.com/wix/wix-style-react/pull/2887)
- `<ColorPicker/>` - add teskit method for cancel action button [#2933](https://github.com/wix/wix-style-react/pull/2933)

### Fixed

- `<Thumbnail/>` - add visual hover state [#2904](https://github.com/wix/wix-style-react/pull/2904)
- `<Notification/>` - replace deprecated components in ActionButton [2903](https://github.com/wix/wix-style-react/pull/2903)
- `<SortableList/>` - item on drag between lists has wrong width [#2912](https://github.com/wix/wix-style-react/pull/2912)
- `<FormField/>` - fix asterisk font style [#2916](https://github.com/wix/wix-style-react/pull/2916)
- `<Carousel/>` - fix layout in firefox [#2928](https://github.com/wix/wix-style-react/pull/2928)
- `<Carousel/>` - fix transition speed [#2927](https://github.com/wix/wix-style-react/pull/2927)
- `<Carousel/>` - fix autoplay speed [#2926](https://github.com/wix/wix-style-react/pull/2926)
- `<Typography/>` - Fix h2 line height from 42px to 36px[#2829](https://github.com/wix/wix-style-react/pull/2829)
- `<ColorPicker/>` - migrated deprecated action buttons to IconButton[#2933](https://github.com/wix/wix-style-react/pull/2933)

### Docs

- `<Popover/>` remove old story and rename the tooltips and popover section [#2881](https://github.com/wix/wix-style-react/pull/2881)

### Lab

- `<RichTextArea/`> - implement basic input area with `Draft.js` [#2914](https://github.com/wix/wix-style-react/pull/2914)

### Infra

- fix typescript project consuming testkit issues by adding `transform-runtime` and use babel’s helpers + generator from `babel-runtime` package [#2905](https://github.com/wix/wix-style-react/pull/2905)

## 6.2.0 - 2019-02-04

### Added

- `<StatsWidget/>` - support custom suffix header action [#2885](https://github.com/wix/wix-style-react/pull/2885)
- `<FormField/>` - add max-width to children [#2894](https://github.com/wix/wix-style-react/pull/2894)
- `<Checkbox/>` - Add error message tooltip [#2892](https://github.com/wix/wix-style-react/pull/2892)

### Fixed

- `<SegmentedToggle/>` - minor CSS fixes in `ToggleIcon` and `ToggleButton` [#2879](https://github.com/wix/wix-style-react/pull/2879)

### Docs

- fix missing Testkits' docs by proxying the drivers from backoffice [#2853](https://github.com/wix/wix-style-react/pull/2853)
- `<Grid/>` - `stretchViewsVertically` is a `<Row/>` prop
- Improve google analytics [#2883](https://github.com/wix/wix-style-react/pull/2883) [#2897](https://github.com/wix/wix-style-react/pull/2897)
- `<Button/>` - improve and tweak documentation [#2880](https://github.com/wix/wix-style-react/pull/2880)

## 6.1.1 - 2019-02-01

### Fixed

- `<ToggleButton/>` - add RTL support for prefix icon [#2878](https://github.com/wix/wix-style-react/pull/2878)

## 6.1.0 - 2019-02-01

### Added

- `<SegmentedToggle/>` - new component [#2797](https://github.com/wix/wix-style-react/pull/2797)
- `<Calendar/>` - add `autoFocus` prop [#2838](https://github.com/wix/wix-style-react/pull/2838)
- `<Text/>` - added `disabled` skin [#2849](https://github.com/wix/wix-style-react/pull/2849)
- `Typography.scss` - added `disabled` skin [#2872](https://github.com/wix/wix-style-react/pull/2872)

### Fixed

- `<SideMenu/>` - fix vertical padding according to spec [#2837](https://github.com/wix/wix-style-react/pull/2837)
- `<Thumbnail/>` - minor css fixes [#2840](https://github.com/wix/wix-style-react/pull/2840)
- `<Input/>` - fix line-height [#2835](https://github.com/wix/wix-style-react/pull/2835)
- `<FormField/>` - show char counter even if label is not displayed [#2855](https://github.com/wix/wix-style-react/pull/2855)

### Docs

- integrate Google analytics with Storybook [#2860](https://github.com/wix/wix-style-react/pull/2860)

## 6.0.0 - 2019-01-28

See [Migrating From v5 to v6](https://github.com/wix/wix-style-react/blob/master/docs/migration/v5-v6.md)

### Breaking

- `<Card/>` - remove deprecated header components [#2735](https://github.com/wix/wix-style-react/pull/2735)
- `<MultiSelect/>` - removed upgrade prop and deprecated callback API [#2757](https://github.com/wix/wix-style-react/pull/2757)
- `<Tags/>` - remove `useOldMargins` prop flag, set the behaviour to false [#2737](https://github.com/wix/wix-style-react/pull/2737)
- `<MessageBoxMarketerialLayout/>` - remove `fixImagePosition` prop [#2743](https://github.com/wix/wix-style-react/pull/2743)
- `<InputWithOptions/>` - remove key presses methods from the driver [#2741](https://github.com/wix/wix-style-react/pull/2741)
- `<DataTable/>` - remove the deprecated `infoTooltip` prop [#2742](https://github.com/wix/wix-style-react/pull/2742)
- `<DataTable/>` - remove the newDesign prop, make it the default [#2764](https://github.com/wix/wix-style-react/pull/2764)
- `<Text/>` - remove the `bold` prop [#2738](https://github.com/wix/wix-style-react/pull/2738)
- `<Notification/>` - Remove old timeout behaviour [#2805](https://github.com/wix/wix-style-react/pull/2805)
- `<Dropdown/>` - remove deprecared uncontrolled mode [#2806](https://github.com/wix/wix-style-react/pull/2806)
- `<MessageBoxFixedHeaderFooter/>` - remove component [#2734](https://github.com/wix/wix-style-react/pull/2734)
- `<TextField/>`, `<DropdownComposite/>`, `<TextArea/>` - remove components [#2740](https://github.com/wix/wix-style-react/pull/2740)
- `<ButtonWithOptions/>`, `<IconWithOptions/>` - remove components [#2746](https://github.com/wix/wix-style-react/pull/2746)
- `<TextLink/>`, `<TextLinkLayout/>`, Backoffice `<Button/>` , `<ButtonLayout/>` - remove components [#2811](https://github.com/wix/wix-style-react/pull/2811)

- TPA - Removed the TPA folder and components [#2744](https://github.com/wix/wix-style-react/pull/2744)
- Typography - Removed old typography classes [#2747](https://github.com/wix/wix-style-react/pull/2747)
- Remove old polyfills [#2736](https://github.com/wix/wix-style-react/pull/2736)
- Remove deprecated `Table/Toolbar` folder [#2739](https://github.com/wix/wix-style-react/pull/2739)
- Backoffice `<Tooltip/>` and `<TextLink/>` - remove components [#2745](https://github.com/wix/wix-style-react/pull/2745)

## 5.26.0 - 2019-01-28

### Added

- `<Button/>` - add premium light skin [#2809](https://github.com/wix/wix-style-react/pull/2809)
- `<PopoverMenu/>` new `showArrow` prop, allows to change visibility of Popover arrow [#2800](https://github.com/wix/wix-style-react/pull/2800)
- `<PopoverMenuItem/>` new `divider` prop, allows to add divider in between PopoverMenu items [#2800](https://github.com/wix/wix-style-react/pull/2800)
- `<Button/>` - add premium light skin [#2809](https://github.com/wix/wix-style-react/pull/2809)

### Changed

- `<Page/>` - Add min/max width according to Grid [#2824](https://github.com/wix/wix-style-react/pull/2824)

### Docs

- `<Button/>` - (Docs) - Emphasize that new drivers are async [#2817](https://github.com/wix/wix-style-react/pull/2817)

## 5.25.0 - 2019-01-23

### Added

- `<CalendarPanel/>` - New panel component (Added also `<CalendarPanelFooter/>`) [#2753](https://github.com/wix/wix-style-react/pull/2753)
- `<Box/>` - New layout component that helps in common alignment use cases [#2726](https://github.com/wix/wix-style-react/pull/2726)
- `<Thumbnail/>` - New selection component for thumbnails selection [#2728](https://github.com/wix/wix-style-react/pull/2728)

### Changed

- `<DropdownLayout/>` - Change option font weight to `normal` instead of `thin` [#2765](https://github.com/wix/wix-style-react/pull/2765)
- `<Text/>` - apply link style only to `<a>` that are direct children [#2788](https://github.com/wix/wix-style-react/pull/2788)
- `<Notification/>` - changed timeout behavior with `upgrade` prop [#2766](https://github.com/wix/wix-style-react/pull/2766)

### Removed

- Drivers cleanup - remove wrapper [#2786](https://github.com/wix/wix-style-react/pull/2786)

### Docs

- `<MultiSelect/>` - improve examples
- `<GoogleAddressInput/>` - update the Google Maps API key in the docs [#2801](https://github.com/wix/wix-style-react/pull/2801)
- `<GoogleAddressInput/>` - create an automated story [#2802](https://github.com/wix/wix-style-react/pull/2802)

### Fixed

- `wix-style-react/dist/testkit` - fix `Cannot find module 'enzyme'` error when importing testkits [#2774](https://github.com/wix/wix-style-react/pull/2774)
- `<Modal/>` - Changing closing transition timing, making it a bit smoother [#2807](https://github.com/wix/wix-style-react/pull/2807)
- `<FieldWithSelectionComposite/>` - fix CSS issue of container div [#2808](https://github.com/wix/wix-style-react/pull/2808)

### Deprecated

- `<Notification/>` - changed timeout behavior with `upgrade` prop [#2766](https://github.com/wix/wix-style-react/pull/2766)
- `<StatsWidget.Filter/>` - deprecated component, you should use the newer `<StatsWidget.FilterButton/>` component instead [#2777](https://github.com/wix/wix-style-react/pull/2777)

## 5.24.0 - 2019-01-14

### Changed

- `<DropdownLayout/>` - move options validation to propTypes [#2717](https://github.com/wix/wix-style-react/pull/2717)
- `<DropdownPopover/>` - Rename to `<DropdownBase/>` [#2730](https://github.com/wix/wix-style-react/pull/2730)

### Deprecated

- `<ButtonWithOptions/>`,`<IconWithOptions/>` - deprecated components [#2706](https://github.com/wix/wix-style-react/pull/2706)
- `<Dropdown/>` - Add support for Controlled `selectedId` [#2719](https://github.com/wix/wix-style-react/pull/2719)
- `<MultiSelect/>` - New Api [#2752](https://github.com/wix/wix-style-react/pull/2752)

### Fixed

- `<Popover/>` - fix component `dataHook` [#2693](https://github.com/wix/wix-style-react/pull/2693)

## 5.23.0 - 2019-01-08

### Added

- `<FormField/>` - allow setting direction for one-unit components [#2698](https://github.com/wix/wix-style-react/pull/2698)

### Changed

- `<Button />`, `<TextButton/>`, `<IconButton/>`, `<CloseButton/>` - add `onClick` callback [#2718](https://github.com/wix/wix-style-react/pull/2718)
- `<SortableList />` - fix key-index dependency and improve performance [#2720](https://github.com/wix/wix-style-react/pull/2720)

### Fixed

- `<Tooltip/>` fix reposition loop and avoid hangs [#2596](https://github.com/wix/wix-style-react/pull/2596)

### Docs

- `<Popover/>` - make autodocs work with the drivers [#2584](https://github.com/wix/wix-style-react/pull/2584)

## 5.22.0 - 2019-01-06

### Added

- `<ColorPicker/>` - trigger confirmation callback when pressing Enter [#2683](https://github.com/wix/wix-style-react/pull/2683)
- `<DropdownLayout/>` - add infinite scroll support [#2712](https://github.com/wix/wix-style-react/pull/2712)
- `<Popover/>` - Added examples for the new `fixed` and `flip` props, added a new `animate` prop. [#2676](https://github.com/wix/wix-style-react/pull/2676)

### Fixed

- `<MultiSelect/>` - Fix scenario when options are not shown when input is non empty [#2696](https://github.com/wix/wix-style-react/pull/2696)
- `<MultiSelect/>` - Fix onBlur to have a valid `event.target.value` [#2695](https://github.com/wix/wix-style-react/pull/2695)
- `<DatePicker/>` - Fixed Calendar Not Closing When Wrapped In `<label/>` tag. [#2590](https://github.com/wix/wix-style-react/pull/2590)

### Changed

- Drivers Cleanup - Remove `setProps` from ALL drivers [#2687](https://github.com/wix/wix-style-react/pull/2687)

### Lab

- `<CalendarPanel/>` - New component - (WIP category) [#2664](https://github.com/wix/wix-style-react/pull/2674)

## 5.21.0 - 2018-12-27

### Added

- `<Popover/>` - added the `animate`, `showDelay` and `hideDelay` [#2661](https://github.com/wix/wix-style-react/pull/2661)

### Changed

- `<DropdownLayout/>` - Remove `setProps` and `isSelectedHightLight` from the driver [#2666](https://github.com/wix/wix-style-react/pull/2666)

### Fixed

- `<EditableSelector/>` - revert migration of using `<IconButton/>` [#2679](https://github.com/wix/wix-style-react/pull/2679)

### Docs

- `<PopoverMenu/>` - migrate docs to use `<AutoDocs/>` [#2668](https://github.com/wix/wix-style-react/pull/2668)

## 5.20.1 - 2018-12-25

### Fixed

- Update the `getStylableState` method to not use `async` / `await` [#2663](https://github.com/wix/wix-style-react/pull/2663)

## 5.20.0 - 2018-12-25

### Added

- `<CardGalleryItem/>` - create new component [#2566](https://github.com/wix/wix-style-react/pull/2566)

### Changed

- `<EditableSelector/>` - migrate to use `<IconButton/>` [#2641](https://github.com/wix/wix-style-react/pull/2641)
- Refactor RTL definitions to support `.rtl` class and `dir` attribute [#2577](https://github.com/wix/wix-style-react/pull/2577)

### Fixed

- `<GoogleAddressInput/>` - fix broken countryCode API [#2628](https://github.com/wix/wix-style-react/pull/2628)
- `<SectionHelper>` - update driver to work properly in browser environments [#2655](https://github.com/wix/wix-style-react/pull/2655)

### Docs

- `<TextField/>` - Add NumberInput example [#2653](https://github.com/wix/wix-style-react/pull/2653)
- `<RichTextArea/>`, `<ImageViewer/>`, `<Tabs/>`, `<TextLink/>`, `<ModalSelectorLayout/>` - Fix broken component names [#2654](https://github.com/wix/wix-style-react/pull/2654)

## 5.19.0 - 2018-12-20

### Added

- `<Card.Header/>` - add fade animation to divider [#2615](https://github.com/wix/wix-style-react/pull/2615)

- `<Button/>` - render with different html tag feature.[#2634](https://github.com/wix/wix-style-react/pull/2634)

## 5.18.3 - 2018-12-19

### Fixed

- `<Button/>` - fixed testkit export handler.

## 5.18.1 - 2018-12-18

### Fixed

- re-add some missing enzyme testkits [#2618](https://github.com/wix/wix-style-react/pull/2618)

### Added

- `<PageHeader/>` - add support for clicking the back button in the driver [#2581](https://github.com/wix/wix-style-react/pull/2581)

## 5.18.0 - 2018-12-18

### Added

- `<Button />` - major refactor. New API. Does not break current Button. Read migration guide: (https://github.com/wix/wix-style-react/blob/master/src/Button/MIGRATION-API.md). [#2507](https://github.com/wix/wix-style-react/pull/2507)

- `<MessageBox />` - Added RTL support [#2608](https://github.com/wix/wix-style-react/pull/2608)
- `<Popover/>` - improve arrow styles [#2594](https://github.com/wix/wix-style-react/pull/2594)

### Fixed

- `<Tooltip/>` - Add back `tooltip-content` data-hook [#2609](https://github.com/wix/wix-style-react/pull/2609)
- `<Search/>` - Allow regexp special chars as search term [#2606](https://github.com/wix/wix-style-react/pull/2606)
- `<Button/>`,`<MessageBoxMarketerialLayout/>` - Fix deprecationLog [#2598](https://github.com/wix/wix-style-react/pull/2598)

## 5.17.0 - 2018-12-17

### Added

- `<Proportion/>` - create a new aspect ratio component [#2565](https://github.com/wix/wix-style-react/pull/2565)
- Add a new component generator [#2552](https://github.com/wix/wix-style-react/pull/2552) [#2593](https://github.com/wix/wix-style-react/pull/2593)

### Fixed

- `<Notification.CloseButton/>` - fix styling [#2578](https://github.com/wix/wix-style-react/pull/2578)
- `<Input/>` - fix testkit driver throwing error when element is null [#2602](https://github.com/wix/wix-style-react/pull/2602)

### Changed

- `<BadgeSelect/>` - refactor internally to use `<Popover/>` [#2595](https://github.com/wix/wix-style-react/pull/2595)

### Lab

- `<ContactItemBuilder/>` - create new component builder [#2556](https://github.com/wix/wix-style-react/pull/2556)
- `<Carousel/>` - add aspect ratio, align navigation buttons and minor refactors [#2592](https://github.com/wix/wix-style-react/pull/2592)

## 5.16.0 - 2018-12-12

### Added

- `<CloseButton>` - new component [#2480](https://github.com/wix/wix-style-react/pull/2480)
- `<Tag/>`, `<MultiSelect/>` - Added RTL support [#2356](https://github.com/wix/wix-style-react/pull/2356)
- `<Input/>`, `<InputArea/>` - Added name ( & type) attribute driver.click() callback [#2528](https://github.com/wix/wix-style-react/pull/2528)
- `<Calendar/>` - Add range support [#2533](https://github.com/wix/wix-style-react/pull/2533)
- `<Popover/>` - add a new component [#2509](https://github.com/wix/wix-style-react/pull/2509)

### Fixed

- `<WixComponent/>` - Update dataHook on componentDidUpdate [#2542](https://github.com/wix/wix-style-react/pull/2542)
- `<Tooltip/>` - Fix testkit `isShown()` to be specific to the Tooltip instance [#2550](https://github.com/wix/wix-style-react/pull/2550)

### Changed

- `<Breadcrumbs/>` - do not limit breadcrumb width given only one item [#2553](https://github.com/wix/wix-style-react/pull/2553)

### Docs

- `<ButtonLayout/>` - story - Add Disabled LinkButton example
- `<PageHeader/>` add better docs for actionBar [#2558](https://github.com/wix/wix-style-react/pull/2558)
- `<Tooltip/>`, `<Modal/>` - add a testkit readme and explanation how to test [#2534](https://github.com/wix/wix-style-react/pull/2534)

### Lab

- `<Carousel/>` - initial creation of component (WIP) [#2536](https://github.com/wix/wix-style-react/pull/2536)

## 5.15.1 - 2018-12-03

### Fixed

- `<Dropdownlayout/>` - Fix update of hovered index [#2530](https://github.com/wix/wix-style-react/pull/2530)

## 5.15.0 - 2018-12-02

### Added

- `<Avatar/>` - Improve story: props and examples [#2514](https://github.com/wix/wix-style-react/pull/2514)

### Fixed

- `<Checkbox/>` - protractor driver - fix click [#2525](https://github.com/wix/wix-style-react/pull/2525)
- `<Table/>` - Fix bulkSelectionState when data changes [#2500](https://github.com/wix/wix-style-react/pull/2500)
- `<Table/>` - testkit - Add ability to use Table driver when using Table in Page [#2515](https://github.com/wix/wix-style-react/pull/2515)

### Docs

- `<Modal/>` - Component Test & Docs - Do proper cleanup of document.body between tests [#2516](https://github.com/wix/wix-style-react/pull/2516)

## 5.14.0 - 2018-11-26

### Added

- `<TextButton/>` - Add new component [#2434](https://github.com/wix/wix-style-react/pull/2434)
- `<IconButton/>` - Add new component [#2445](https://github.com/wix/wix-style-react/pull/2445)

### Changed

- `<DropdownLayout/>` - support controlled mode selection and fix keyboard marking [#2466](https://github.com/wix/wix-style-react/pull/2466)

### Fixed

- `<BadgeSelect/>` - add a z-index to the dropdown container [#2478](https://github.com/wix/wix-style-react/pull/2478)

## 5.13.0 - 2018-11-15

### Added

- `<Skeleton/>` - new component to be used as visual placeholder for async tasks [#2467](https://github.com/wix/wix-style-react/pull/2467)

## 5.12.0 - 2018-11-14

### Added

- `<StatsWidget/>` - support negative trends colors [#2453](https://github.com/wix/wix-style-react/pull/2453)
- `<Collapse/>` - add new component and revise `<Card/>` implementation [#2251](https://github.com/wix/wix-style-react/pull/2251)

### Fixed

- `<TimePicker/>` - add missing classname [#2457](https://github.com/wix/wix-style-react/pull/2457)
- `<ButtonLayout/>` - fix prefix/suffix margin for RTL [#2465](https://github.com/wix/wix-style-react/pull/2465)
- `<Checkbox/>`- generates proper internal id. [#2464](https://github.com/wix/wix-style-react/pull/2464)
- `<Button/>` - increased margin for x-small prefix and suffix icons. [#2470](https://github.com/wix/wix-style-react/pull/2470)

## 5.11.0 - 2018-11-12

### Added

- `<InputArea>` - add name prop to inputarea component [#2449](https://github.com/wix/wix-style-react/pull/2449)
- `<GenericModalLayout/>` - add new component [#2439](https://github.com/wix/wix-style-react/pull/2439)

### Changed

- `<TableActionCell>` - allow passing `PopoverMenu` props [#2417](https://github.com/wix/wix-style-react/pull/2417)
- `<BadgeSelect/>` - make component controlled [#2452](https://github.com/wix/wix-style-react/pull/2452)

## 5.10.0 - 2018-11-11

### Changed

- `<Tag>`- add bo tooltip instead of native title for Tag [#2431](https://github.com/wix/wix-style-react/pull/2431)

### Fixed

- removed unnecessary console.log in deprecation logger.

## 5.9.1 - 2018-11-07

### Deprecated

- `fonts` - Removed fonts from main index file [#2419](https://github.com/wix/wix-style-react/pull/2419)

### Changed

- `<Input>` - change placeholder color for the Input component [#2402](https://github.com/wix/wix-style-react/pull/2402)

- `<MessageBoxMarketerialLayout/>` - update typography [#2411](https://github.com/wix/wix-style-react/pull/2411)

## 5.9.0 - 2018-11-05

### Added

- Added tree shaking - [#2407](https://github.com/wix/wix-style-react/pull/2407)

### Fixed

- `<DropdownLayout/>` - Reserve hovered state when the selected id is 0 [#2405](https://github.com/wix/wix-style-react/pull/2405)

## 5.8.1 - 2018-11-04

### Deprecated

- `<TextArea>` - deprecate and add a snippet story using `<FormField/>` and `<InputArea/>` [#2383](https://github.com/wix/wix-style-react/pull/2383)

### Fixed

- `<Tooltip/>` - Fix potential null dereferencing that happens in React 16 [2391](https://github.com/wix/wix-style-react/pull/2391)
- `<BadgeSelect/>` - fix word wrapping and eyes issues [#2397](https://github.com/wix/wix-style-react/pull/2397)

## 5.8.0 - 2018-10-31

### Added

- `<SideMenu/>`(styling hack) - add data-link-active DOM attribute to allow styling [#2392](https://github.com/wix/wix-style-react/pull/2392)
- `<Text>` - Support anchors inside text component [2384](https://github.com/wix/wix-style-react/pull/2384)

### Changed

- `<BadgeSelect/>` - updated icon size [#2372](https://github.com/wix/wix-style-react/pull/2372)
- `<InputWithOptions/>` - update keyboard navigation to match the a11y guidelines [#2310](https://github.com/wix/wix-style-react/pull/2310)

### Fixed

- `<DropdownLayout/>` - fixed scroll behaviour [#2365](https://github.com/wix/wix-style-react/pull/2365)
- `<Table/>` - Fix column alignment when using a tooltip [#2360](https://github.com/wix/wix-style-react/pull/2360)

### Deprecated

- `<DataTable/>` - deprecate `infoTooltip` in favor of `infoTooltipProps` [#2367](https://github.com/wix/wix-style-react/pull/2367)

### Docs

- `<TextField/>` - deprecated component, and add snippet story using `<FormField/>` [#2361](https://github.com/wix/wix-style-react/pull/2361)

## 5.7.2 - 2018-10-24

### Fixes

- Hot-Fix! Typography deprecationLog - no proxy in production [#2370](https://github.com/wix/wix-style-react/pull/2370)

## 5.7.1 - 2018-10-23

### Added

- `<DatePicker/>` - add `zIndex` prop for popup [#2352](https://github.com/wix/wix-style-react/pull/2352)

### Changed

- `<DatePicker/>` - support custom function in `dateFormat` prop [#2354](https://github.com/wix/wix-style-react/pull/2354)

### Fixed

- `<DropdownLayout/>` - Revert scroll behaviour [#2362](https://github.com/wix/wix-style-react/pull/2362)

## 5.7.0 - 2018-10-22

### Added

- `<Table/>` - support column alignments [#2333](https://github.com/wix/wix-style-react/pull/2333)

### Changed

- `<Tag/>` - add tiny and medium sizes [#2322](https://github.com/wix/wix-style-react/pull/2322)
- `<SortableList/>` - Add draggable item to onDragStart and onDragEnd [#2343](https://github.com/wix/wix-style-react/pull/2343)
- `<DropdownLayout/>` - update the scroll behaviour [#2327](https://github.com/wix/wix-style-react/pull/2327)
- `<Page/>` - make the page's contents expand to full size [#2342](https://github.com/wix/wix-style-react/pull/2342)

### Deprecated

- Typography - Add deprecation log for old classes [#2315](https://github.com/wix/wix-style-react/pull/2315)

### Fixed

- `<ButtonLayout/>` - fix broken text colors for outline theme [#2350](https://github.com/wix/wix-style-react/pull/2350)

### Docs

- Add Dropdown Snippet story using FormField [#2276](https://github.com/wix/wix-style-react/pull/2276)

## 5.6.1 - 2018-10-16

### Fixed

- `<ModalSelectorLayout/>` - fix broken subtitle line [#2336](https://github.com/wix/wix-style-react/pull/2336)

### Added

- `<BadgeSelect/>` - create new component [#2219](https://github.com/wix/wix-style-react/pull/2219)

## 5.6.0 - 2018-10-15

### Fixed

- `<DropdownLayout/>` - replace `deep-eql` dependency (IE11 support) [#2326](https://github.com/wix/wix-style-react/pull/2326)
- `<InputWithTags/>` replace `hasHover` state with native css [#2294](https://github.com/wix/wix-style-react/pull/2294)

### Changed

- `<Text/>` - Update secondary+light color from D50 to D40 [#2312](https://github.com/wix/wix-style-react/pull/2312)
- Typography - Add UX story (move Text and Heading under Components) [#2309](https://github.com/wix/wix-style-react/pull/2309/)

### Added

- Typography - Add css typography classes [#2306](https://github.com/wix/wix-style-react/pull/2306)

## 5.5.2 - 2018-10-09

### Fixed

- Text - Story - fix story autodocs [#2307](https://github.com/wix/wix-style-react/pull/2307)

## 5.5.1 - 2018-10-09

### Changed

- Typography - Update typography of `<Loader/>`, `<Table/>` [#2268](https://github.com/wix/wix-style-react/pull/2268)
- Typography - Update typography of `<Tabs/>`, `<PopoverMenu/>`, `<EditableSelector/>` [#2299](https://github.com/wix/wix-style-react/pull/2299)
- `<InputWithOptions/>` - Do not open options when focused, but rather when clicked [#2280](https://github.com/wix/wix-style-react/pull/2280)
- `<Page/>`,`<PageHeader/>` - Added className prop [#2284](https://github.com/wix/wix-style-react/pull/2284)

### Fixed

- `<DatePicker/>` Move z-index prop to the correct element in css [#2286](https://github.com/wix/wix-style-react/pull/2286)
- `<SideMenu/>` - Fix infinite loop when using React 16 [#2293](https://github.com/wix/wix-style-react/pull/2293)
- `<Table/>` - remove state (Fixes React 16 warning) [#2296](https://github.com/wix/wix-style-react/pull/2296)

## 5.5.0 - 2018-10-02

### Fixed

- `<MultiSelectCheckbox/>` - Fix `onSelect` called twice [#2267](https://github.com/wix/wix-style-react/pull/2267)
- `<InputWithTags/>` - add missing `<Tag>` dataHook [#2289](https://github.com/wix/wix-style-react/pull/2289)
- `<Checkbox/>` - remove `stopPropagation` call on `onClick` [#2290](https://github.com/wix/wix-style-react/pull/2290)
- `<Draggable/>` - fix wrong react import causing React propTypes warning.

### Added

- `<PopoverMenuItem/>`, `<TableActionCell/>` - support disabled menu items [#2235](https://github.com/wix/wix-style-react/pull/2235)

## 5.4.0 - 2018-10-02

### Added

- `<MultiSelect/>` - support reorderable tags (d&d) [#2233](https://github.com/wix/wix-style-react/pull/2233)
- `<SortableList/>` **WIP** - a reusable drag and drop list component

### Fixed

- `<Tooltip/>` and `<Search/>` - refactor old refs usage [#2269](https://github.com/wix/wix-style-react/pull/2269)
- `<InputArea/>`, `<Input/>` and `<RichTextArea/>` - Error icon size margins are incorrect [#2183](https://github.com/wix/wix-style-react/pull/2183)

### Changed

- `<Tag/>` - align to new definitions [#2203](https://github.com/wix/wix-style-react/pull/2203)

### Deprecated

- `<Tag/>` - internal margins were removed as they belong to `tagsInput`. Backward compatible using the `useOldMargins` flag

## 5.3.4 - 2018-09-27

### Fixed

- `<Tooltip/>` remove redundant `console.log()` calls [#2273](https://github.com/wix/wix-style-react/pull/2273)

## 5.3.3 - 2018-09-26

### Fixed

- `<Tags/>` - input box should not have hover color after being focused [#2264](https://github.com/wix/wix-style-react/pull/2264)
- `<Calendar/>` - remove shadow and border-radius from component [#2205](https://github.com/wix/wix-style-react/pull/2205)
- `<Tooltip/>` - add popover prop [#2205](https://github.com/wix/wix-style-react/pull/2205)
- `<Table/>` - fix broken `<TableToolbar/>` docs and `<TableActionCell/>` RTL [#2224](https://github.com/wix/wix-style-react/pull/2224)
- `<SideMenu/>` - support `dataHook` prop [#2256](https://github.com/wix/wix-style-react/pull/2256)
- Polyfills - fix `raf` not setting all methods on the global variable [#2258](https://github.com/wix/wix-style-react/pull/2258)
- `Tooltip` - remove `stopPropagation` from `onClick` as it breaks some use cases [#2260](https://github.com/wix/wix-style-react/pull/2260)
- `<InputWithOptions/>` - fix `onSelect` to be called also when re-selecting same option [#2265](https://github.com/wix/wix-style-react/pull/2265/files)

## 5.3.2 - 2018-09-20

### Fixed

- `typography.scss` - Resolve bug with typography import(related to case-sensitive machines) [#2255](https://github.com/wix/wix-style-react/pull/2255)

## 5.3.1 - 2018-09-18

### Fixed

- `<TableActionCell>` - Fix bad css syntax [#2243](https://github.com/wix/wix-style-react/pull/2243)
- `<DropdownLayout/>`, `<InputArea/>` - new typography Fixes [#2232](https://github.com/wix/wix-style-react/pull/2232)
- `<Text>` - support `dataHook` for ellipsed text [#2246](https://github.com/wix/wix-style-react/pull/2246)
- `<MultiSelect>` - fix testkit to return correct number of tags [#2248](https://github.com/wix/wix-style-react/pull/2248)

## 5.3.0 - 2018-09-16

### Added

- `<SideMenu/>` - add `className` prop to the `Header` component [#2223](https://github.com/wix/wix-style-react/pull/2223)
- `<TableToolbar/>` - add RTL support [#2222](https://github.com/wix/wix-style-react/pull/2222)
- `<Page/>` - add support to Table infinite scroll inside a Page [#2230](https://github.com/wix/wix-style-react/pull/2230)

### Fixed

- `<SectionHelper/>` - add box-sizing to not break styles [#2202](https://github.com/wix/wix-style-react/pull/2202)
- `<Tooltip/>` - fix tooltip jumping [#2225](https://github.com/wix/wix-style-react/pull/2225)
- `<ButtonLayout/>` - remove border from button focus [#2234](https://github.com/wix/wix-style-react/pull/2234)

### Changed

- `<ButtonLayout/>` - update typography [#2198](https://github.com/wix/wix-style-react/pull/2198)
- Technical - remove `PureComponent` from non-pure components [#2160](https://github.com/wix/wix-style-react/pull/2160)
- `<SortableList/>` - improve performance of nested d&d [#2227](https://github.com/wix/wix-style-react/pull/2227)

### Removed

- Remove dead code `src/Backoffice/ButtonLayout` (was never in use) [#2231](https://github.com/wix/wix-style-react/pull/2231)

### Docs

- `<Badge/>` - migrate story to autodocs [#2221](https://github.com/wix/wix-style-react/pull/2221)
- Update Contribution guide [#2220](https://github.com/wix/wix-style-react/pull/2220)

## 5.2.0 - 2018-09-06

### Added

- `<TableActionCell/>` - added a new component [#2031](https://github.com/wix/wix-style-react/pull/2031)
- `<Tooltip/>` - added a new `showArrow` prop [#2200](https://github.com/wix/wix-style-react/pull/2200)

### Changed

- `<SideMenuDrill/>` - add ellipsis, vertically center arrow [#2185](https://github.com/wix/wix-style-react/pull/2185)
- `<DropdownLayout/>` - change the divider's data-hook to `dropdown-divider` [#2159](https://github.com/wix/wix-style-react/pull/2159)

### Fixed

- `<Calendar/>` - Do not fail when missing `value` or `onClose` prop [2214](https://github.com/wix/wix-style-react/pull/2214)

## 5.1.0 - 2018-09-04

### Added

- `<Input/>`, `<InputWithOptions/>` - support focus(options) [#2146](https://github.com/wix/wix-style-react/pull/2146)
- `<AddItem/>` - new themes and functionality [#2074](https://github.com/wix/wix-style-react/pull/2136)
- `<Sidemenu/>` - allow custom className to be passed to Sidemenu components [#2179](https://github.com/wix/wix-style-react/pull/2179)
- `<SideMenu/>` - add rtl support [#2173](https://github.com/wix/wix-style-react/pull/2173)

### Deprecated

- `<Card.ButtonHeader/>` & `<Card.LinkHeader/>` - add deprecation logs, `Card.Header` should be used instead [#2176](https://github.com/wix/wix-style-react/pull/2176)

### Fixed

- `<MultiSelect>` - Fix redundant call to onChange when click-outside [#2175](https://github.com/wix/wix-style-react/pull/2175)
- `<InputWithOptions/>` - disable autocomplete by default [2177](https://github.com/wix/wix-style-react/pull/2177)
- `<Card.Header/>` - fix title & subtitle datahooks [#2176](https://github.com/wix/wix-style-react/pull/2176)
- `<Input/>` - Fix infinite recursion, when you trigger chrome autofill and you have more then 3 inputs in form on screen [#2180](https://github.com/wix/wix-style-react/pull/2180)

## 5.0.0 - 2018-08-29

### Breaking

[Migration guide](./docs/migration/v4-v5.md)

- `<Checkbox/>` - remove prop `active`(use `checked` instead) and value `large`(use `medium` instead) for prop `size`
- `<Icons/>` - remove old icons in favor of new icons
- `<Button/>` - remove prop `withNewIcons` and make it behavior default
- `<DataTable/>` - new styles
- `<Heading/>` - new typography
- `<MultiSelect/>` - remove prop `maxHeight`
- `<Grid/>` & `<Row/>` & `<Col/>` - remove ambitious box-sizing
- `<LanguagePicker/>` - remove component in favor of `<IconWithOptions/>`
- `<SideBar/>` - remove component in favor of `<SideMenu/>`
- `<Grid/>` - remove `import {Card} from 'wix-style-react/Grid'` use `import Card from 'wix-style-react/Card'` instead

## 4.20.1 - 2018-08-28

- `<Card/>` - fix `dataHook` prop to not throw console warning [b0f134](https://github.com/wix/wix-style-react/commit/b0f1349a732c8fb7b95e2ac60d1f6d63be612f97)

## 4.20.0 - 2018-08-28

### Added

- `<MessageBox/>` - add footer actions and image support [#2141](https://github.com/wix/wix-style-react/pull/2141)
- `<SectionHelper/>` - explicitly decide to show or hide close button [#2148](https://github.com/wix/wix-style-react/pull/2148)
- `<Calendar/>` - split to a a separate component [#2144](https://github.com/wix/wix-style-react/pull/2144)
- `<Card.Divider/>` - standalone divider to be used not only under `<Card.Header/>` [#2114](https://github.com/wix/wix-style-react/pull/2114)
- `<SortableList/>` - a D&D sortable list (WIP) [#2151](https://github.com/wix/wix-style-react/pull/2151)

### Fixed

- `<DatePicker/>` - fix onClose prop usage [#2158](https://github.com/wix/wix-style-react/pull/2158)
- `<DatePicker/>` - copy value from props to state on constructor step [#2158](https://github.com/wix/wix-style-react/pull/2158)

## 4.19.0 - 2018-08-26

### Fixed

- `<Tooltip/>` - Fix issue of self unmounting tooltip [#2133](https://github.com/wix/wix-style-react/pull/2133)
- `<Page/>` - Use displayName rather than reference for prop validation [#2154](https://github.com/wix/wix-style-react/pull/2154)

### Changed

- Tests: Update docs how to use polyfills for `Tooltip`, `CollapsedHeader`, `DatePicker` and `Range` [#2139](https://github.com/wix/wix-style-react/pull/2139)

## 4.18.0 - 2018-08-11

### Added

- `<EmptyState/>` - add a new component [#2074](https://github.com/wix/wix-style-react/pull/2074)
  - `<Table.EmptyState/>` - add support for EmptyState inside a `<Table/>` [#2116](https://github.com/wix/wix-style-react/pull/2116)
  - `<EmptyState/>` - make `section` the default theme [#2129](https://github.com/wix/wix-style-react/pull/2129)
  - `<EmptyState/>` - add links to component examples in the story [#2131](https://github.com/wix/wix-style-react/pull/2131)
- `<TextLink/>` - support ellipsis with tooltip [#2108](https://github.com/wix/wix-style-react/pull/2108)

### Fixed

- `<Input/>` - when `type="number"` prevent characters to be typed in Firefox, Safari & Edge [#2100](https://github.com/wix/wix-style-react/pull/2100)
- `<Table/>` - fix column info tooltip position and fix `<FormField/>` icon [#2119](https://github.com/wix/wix-style-react/pull/2119)
- `<RadioGroup/>` - fix css to support nested `<RadioGroup.Radio/>` [#2128](https://github.com/wix/wix-style-react/pull/2128)
- `<Page/>` - fix rendering issues with `react-hot-loader` [#2134](https://github.com/wix/wix-style-react/pull/2134)

## 4.17.0 - 2018-08-08

### Added

- `<TextLink/>` - support prefix and suffix icons [#2088](https://github.com/wix/wix-style-react/pull/2088)
- `<Container/>` - add `fluid` prop to disable min/max width [#2082](https://github.com/wix/wix-style-react/pull/2082)
- `<ImageViewer/>` - allow to specify tooltip content [#2081](https://github.com/wix/wix-style-react/pull/2081)
- `<FormField/>` - add `infoTooltipProps` prop to allow full control of into tooltip [#2099](https://github.com/wix/wix-style-react/pull/2099)

### Changed

- `<TextLink/>` - refactored folder structure and updated protractor testkit [#2088](https://github.com/wix/wix-style-react/pull/2088)
- `<Container/>` - add `className` prop [#2102](https://github.com/wix/wix-style-react/pull/2102)
- `<InputArea/>` - pass event for on focus handler [#2084](https://github.com/wix/wix-style-react/pull/2084)
- `<DatePicker>` - new design for 1 month layout [#2030](https://github.com/wix/wix-style-react/pull/2030)

### Fixed

- `<FormField/>` - update counter color and typography to the same as for placeholder [#2083](https://github.com/wix/wix-style-react/pull/2083)
- `<Table/>` - fix `TableToolbar` import path [#2023](https://github.com/wix/wix-style-react/pull/2023)

## 4.16.0 - 2018-08-05

### Deprecated

- `<Text/>` - Deprecated `bold` prop in favor `weight` prop which can be `thin`, `normal` or `bold`. [#2073](https://github.com/wix/wix-style-react/pull/2073)

### Added

- `<Text/>` - Show Tooltip when ellipsis is active [#2073](https://github.com/wix/wix-style-react/pull/2073)
- `<Text/>` - Extend `size` prop to have also `size="tiny"`. [#2073](https://github.com/wix/wix-style-react/pull/2073)
- `<Heading/>` - Show Tooltip when ellipsis is active [#2068](https://github.com/wix/wix-style-react/pull/2068)

### Fixed

- `<Loader/>` - fix testkit to return textContent instead of innerHTML [#2076](https://github.com/wix/wix-style-react/pull/2076)
- `<SideMenu/>` - fix the back link icon size to 14px [#2080](https://github.com/wix/wix-style-react/pull/2080)

### Changed

- Refactor testkits to import only their relevant technology [#2085](https://github.com/wix/wix-style-react/pull/2085)

## 4.15.0 - 2018-08-02

### Changed

- Refactor deprecated text to new `<Text/>` and `<Heading/>` components [#2037](https://github.com/wix/wix-style-react/pull/2037)

### Fixed

- `<Input/>` - fix error indication bug

## 4.14.1 - 2018-08-02

### Changed

- `<StatsWidget/>` - refactor old Text to new Heading and Badge [#2065](https://github.com/wix/wix-style-react/pull/2065)

### Fixed

- fixed puppeteer driver imports

### Added

- `<Icons/>` - Update wix-ui-icons-common version to handle new icons(ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Crop, Mobile, PauseFilled, PlayFilled, StatusAlertFilled, StatusCompleteFilled, StopFilled, ZoomIn, ZoomOut) [#2067](https://github.com/wix/wix-style-react/pull/2067)

## 4.14.0 - 2018-08-01

### Fixed

- `<Button/>` - Fix focusable button in disabled state [#2054](https://github.com/wix/wix-style-react/pull/2054)

### Added

- `<Input/>` - Added `status` and `statusMessage` props, added loader suffix [#1784](https://github.com/wix/wix-style-react/pull/1784)
- new Testkit drivers for `Text`, `Heading` `Table`, `FormField` and fixed `Input` [#2060](https://github.com/wix/wix-style-react/pull/2060) [#2061](https://github.com/wix/wix-style-react/pull/2061) [#2062](https://github.com/wix/wix-style-react/pull/2062) [#2064](https://github.com/wix/wix-style-react/pull/2064)

### Changed

- `<TextField/>` - Default info tooltip to not use `appendToParent: false` [#2035](https://github.com/wix/wix-style-react/pull/2035)
- `<Loader/>` - styling updates according to the UX guidelines [#2045](https://github.com/wix/wix-style-react/pull/2045)

## 4.13.0 - 2018-07-30

### Fixed

- `<Tooltip/>` - Fix react 16 regression [#2047](https://github.com/wix/wix-style-react/pull/2047)

### Changed

- `<Notification/>` - set notification height to always be 48px https://github.com/wix/wix-style-react/pull/2036

### Added

- `<MultiSelect/>` - add error indication and message, readonly styles [#2041](https://github.com/wix/wix-style-react/pull/2041)

## 4.12.0 - 2018-07-26

### Added

- `<MessageBoxFunctionalLayout/>` - Add fullscreen prop according to design [#2026](https://github.com/wix/wix-style-react/pull/2026)
- `<MessageBoxFunctionalLayout/>` - Add footer border for scrollable content [#2027](https://github.com/wix/wix-style-react/pull/2027)
- `<DropdownLayout/>` - Allowing passing a divider option without an id [#2005](https://github.com/wix/wix-style-react/pull/2005)

### Changed

- `<SideMenuDrill/>` - create a standalone import path [#2040](https://github.com/wix/wix-style-react/pull/2040)

## 4.11.1 - 2018-07-22

### Changed

- `<Page/>` - Allow scrolling with mouse over header [#2015](https://github.com/wix/wix-style-react/pull/2015)
- `<Page/>` - Remove content jumping when minimization occurs[#2016](https://github.com/wix/wix-style-react/pull/2016)

### Fixed

- `<MessageBoxFunctionalyLayout/>` - fix scroll bug and improve docs[#2021](https://github.com/wix/wix-style-react/pull/2021)

## 4.11.0 - 2018-07-20

### Added

- Scrollbar - expose `mixins.scss` with scrollbar mixin to be consumed externally [#2007](https://github.com/wix/wix-style-react/pull/2007)

### Changed

- `<DatePicker/>` - use fixed weeks to prevent dropdown flip [#2017](https://github.com/wix/wix-style-react/pull/2017)

## 4.10.1 - 2018-07-18

- `<Icons/>` - fix wrong icons path in several components [#2012](https://github.com/wix/wix-style-react/pull/2012)

## 4.10.0 - 2018-07-18

### Added

- `<Button/>`- support new icons using the `withNewIcons` prop [#1960](https://github.com/wix/wix-style-react/pull/1960)
- `<FullTextView/>`- the new component that can show tooltip in ellipsis state [#2000](https://github.com/wix/wix-style-react/pull/2000)
- **New Icons** - changed all icons assets to new icons. The new icons can be found [here](https://wix-wix-style-react.surge.sh/?selectedKind=1.%20Foundation&selectedStory=1.4%20Icons&full=0&addons=0&stories=1&panelRight=0) and deprecated icons [here](https://wix-wix-style-react.surge.sh/?selectedKind=1.%20Foundation&selectedStory=1.4%20Icons%20-%20deprecated&full=0&addons=0&stories=1&panelRight=0)

### Changed

- `<Input/>` - migrate to new icons [#1981](https://github.com/wix/wix-style-react/pull/1981)
- `<Card.ButtonHeader/>` - migrate to new icons [#1979](https://github.com/wix/wix-style-react/pull/1979)
- `<Card.CollapsedHeader/>` - migrate to new icons [#1980](https://github.com/wix/wix-style-react/pull/1980)
- `<EditableSelector/>` - improve behavior when editing a line [#1989](https://github.com/wix/wix-style-react/pull/1989)
- `<DropdownLayout/>` - improve performance - items will not appear in DOM if not displayed [#1996](https://github.com/wix/wix-style-react/pull/1996)

### Fixed

- `<Card/>` - collapsed Card header should not have any bottom divider [#1972](https://github.com/wix/wix-style-react/pull/1972)
- `<EditableSelector/>` - fix margins [#1984](https://github.com/wix/wix-style-react/pull/1984)
- `<ColorPicker/>` - fix history bar behavior [#1990](https://github.com/wix/wix-style-react/pull/1990)
- `<RichTextArea/>` - link popover padding is not according to spec [#1997](https://github.com/wix/wix-style-react/pull/1997)
- `<MultiSelect/>` - fix thumb background color on hover bug [#1991](https://github.com/wix/wix-style-react/pull/1991)
- `<Dropdown/>` - fix clickable area below and above the arrow icon [#1999](https://github.com/wix/wix-style-react/pull/1999)
- `<MessageBox/>` - fix footer styles and improve docs [#1995](https://github.com/wix/wix-style-react/pull/1995)
- `<InputWithOptions/>` - Fix broken divider option [#1992](https://github.com/wix/wix-style-react/pull/1992)
- `<Dropdown/>`, `<Slider/>` - Fix colors [#2003](https://github.com/wix/wix-style-react/pull/2003)

## 4.9.0 - 2018-07-10

### Added

- Make new `<Table/>` component officially released [#1974](https://github.com/wix/wix-style-react/pull/1974)

## 4.8.0 - 2018-07-09

### Changed

- `<ColorPicker/>` - migrate to new icons [#1945](https://github.com/wix/wix-style-react/pull/1945)
- `<FieldLabelAttributes/>` - migrate to new icons [#1945](https://github.com/wix/wix-style-react/pull/1945)
- `<SelectionHelper/>` - migrate to new CloseIcon [#1948](https://github.com/wix/wix-style-react/pull/1948)
- `<PopoverMenu/>` - migrate to new CloseIcon [#1948](https://github.com/wix/wix-style-react/pull/1948)
- `<ButtonWithOptions/>` - migrate to new CloseIcon [#1948](https://github.com/wix/wix-style-react/pull/1948)

### Added

- `<Loader/>` - add error and success states [#1953](https://github.com/wix/wix-style-react/pull/1953) [#1963](https://github.com/wix/wix-style-react/pull/1963)
- `<Table/>` - Add `showLastRowDivider` prop [#1964](https://github.com/wix/wix-style-react/pull/1964)

### Fixed

- `<TextField/>` - fix wrong position of info icon [#1966](https://github.com/wix/wix-style-react/pull/1966)

## 4.7.0 - 2018-07-04

### Added

- `<FormField/>` - new component for easier form building [#1889](https://github.com/wix/wix-style-react/pull/1889)

### Changed

- `<RichTextArea/>` - migrate to new icons [#1929](https://github.com/wix/wix-style-react/pull/1929)
- `<StatsWidget/>` - migrate to new icons [#1929](https://github.com/wix/wix-style-react/pull/1929)

### Fixed

- `<Dropdown/>` - fix `noRightBorderRadius` prop to work properly [#1955](https://github.com/wix/wix-style-react/pull/1955)

## 4.6.2 - 2018-07-04

### Added

- `<DropdownLayout/>` - add `minWidthPixels` prop. This prop is available in `<Dropdown/>`, `<XXXWithOptions/>`, `<MultiSelect/>` and similar components... [#1914](https://github.com/wix/wix-style-react/pull/1914)

### Changed

- `shadows` - Updated box-shadow in several components
- `<DatePicker/>` - migrate to new icons [#1922](https://github.com/wix/wix-style-react/pull/1922)
- `<DataTable/>` - migrate to new icons [#1922](https://github.com/wix/wix-style-react/pull/1922)
- `<EditableSelector/>` - migrate to new icons [#1926](https://github.com/wix/wix-style-react/pull/1926)
- `<DatePickerDropdown/>` - migrate to new icons [#1926](https://github.com/wix/wix-style-react/pull/1926)
- `<FilePicker/>` - migrate to new icons [#1928](https://github.com/wix/wix-style-react/pull/1928)
- `<LanguagePicker/>` - migrate to new icons [#1928](https://github.com/wix/wix-style-react/pull/1928)
- `<Modal/>` - migrate to new icons [#1928](https://github.com/wix/wix-style-react/pull/1928)

### Fixed

- `<DrillView/>` - fix wrong chevron icon size

## 4.6.1 - 2018-07-02

### Fixed

- `<Tooltip/>` - another attempt to fix React 16 support [#1894](https://github.com/wix/wix-style-react/pull/1894)

### Changed

- `<DataTable/>` - Make `columns` prop required [#1898](https://github.com/wix/wix-style-react/pull/1898)

## 4.6.0 - 2018-07-02

### Added

- `<Loader/>` - Add tiny size [#1911](https://github.com/wix/wix-style-react/pull/1911)

### Fixed

- `<Input/>` - Remove width property from Input component [#1915](https://github.com/wix/wix-style-react/pull/1915)
- `<Input/>` - Prevent error when clicking on unit suffix [#1908](https://github.com/wix/wix-style-react/pull/1908)

## 4.5.0 - 2018-07-01

### Changed

- `<DatePicker/>` - allow passing custom locale to DatePicker [#1684](https://github.com/wix/wix-style-react/pull/1684)

### Fixed

- `<Input/>` - should not change background color if hovered while focus [#1765](https://github.com/wix/wix-style-react/pull/1765)
- `<Card/>` - add missing box-sizing property to `<Card.Content/>` [#1872](https://github.com/wix/wix-style-react/pull/1872).
- `<SideMenu/>` - Fix SideMenu Header styles [#1900](https://github.com/wix/wix-style-react/pull/1900)

## 4.4.0 - 2018-06-26

### Added

- `<Notification/>` - Make component accessible for screen readers [#1837](https://github.com/wix/wix-style-react/pull/1837)
- `<DropdownLayout/>` - Pressing spacebar should select the highlighted option [#1885](https://github.com/wix/wix-style-react/pull/1885)
- `<CircularPropgressBar/>` - New component [#1870](https://github.com/wix/wix-style-react/pull/1870)

### Changed

- `<Tags/>` - Highlight the autocomplete suggestions when typing [#1818](https://github.com/wix/wix-style-react/pull/1818)
- `<TextArea/>` - InputArea should not add hover styles when focused and hovered [#1820](https://github.com/wix/wix-style-react/pull/1820)

### Fixed

- `<Colorpicker/>` - Fix previous color (history) behavior [1823](https://github.com/wix/wix-style-react/pull/1823)
- `<MultiSelect/>` - fix bug where scrollbar was always shown [#1843](https://github.com/wix/wix-style-react/pull/1843)
- `<MultiSelect/>` - fix onManuallyInput() called twice [#1831](https://github.com/wix/wix-style-react/pull/1831)
- `<DataTable/>` - (fix/optimization) Add data.id as React key [#1878](https://github.com/wix/wix-style-react/pull/1878)
- `<Search/>` - Fixed bug with mounted component and expandable [#1795](https://github.com/wix/wix-style-react/pull/1795)
- `<RichTextArea/>` - pass activeToolbarButton prop to trigger RichTextEditorToolbar re-render after toolbar button click [#1886](https://github.com/wix/wix-style-react/pull/1886)

### Deprecated

- `<Checkbox/>` - add deprecation message for `size=large` and `active` prop [#1848](https://github.com/wix/wix-style-react/pull/1848)

## 4.3.1 - 2018-06-25

### Fixed

- `<Tooltip/>` - revert support for React 16 (introduced in 4.3.0 [#1814](https://github.com/wix/wix-style-react/pull/1814)) due to CPU hug of death bug

## 4.3.0 - 2018-06-18

### Added

- `<TimeInput/>` - Expose isDisable method in it's testkit[1838](https://github.com/wix/wix-style-react/pull/1838)
- `<LinearProgressBar>` - New component [1830](https://github.com/wix/wix-style-react/pull/1830)

### Fixed

- `<AddItem/>` - Fix styles - [1839](https://github.com/wix/wix-style-react/pull/1839)

## 4.2.0 - 2018-06-18

### Changed

- `<Input/>` - select the entire text on click [#1773](https://github.com/wix/wix-style-react/pull/1773)
- `<DataTable/>` - changed styles to new design with `newDesign` flag [#1817](https://github.com/wix/wix-style-react/pull/1817)

### Added

- `<DataTable/>` add newDesign prop [#1817](https://github.com/wix/wix-style-react/pull/1817), See [Storybook](https://wix-wix-style-react.surge.sh/?selectedKind=10.%20Tables&selectedStory=10.1%20DataTable&full=0&addons=0&stories=1&panelRight=0) for further details.
- `<AddItem/>` - create a new component [#1802](https://github.com/wix/wix-style-react/pull/1802) [#1822](https://github.com/wix/wix-style-react/pull/1822)

### Fixed

- `<DatePicker/>` - fix css issues with latest `node-sass` version
- `<Tooltip/>` - support React16 [#1814](https://github.com/wix/wix-style-react/pull/1814)
- `<GoogleAddressInput>` - Fix id management issue [#1834](https://github.com/wix/wix-style-react/pull/1834)

## 4.1.3 - 2018-06-12

### Fixed

- `<TextLink/>` - Updated disabled property behaviour [#1798](https://github.com/wix/wix-style-react/pull/1798)

### Added

- `<DataTable>` - Add info icon with tooltip to table header [#1770](https://github.com/wix/wix-style-react/pull/1770)

## 4.1.2 - 2018-06-12

### Added

- `<RichTextArea/>` - add a flag to generate absolute paths url links [#1746](https://github.com/wix/wix-style-react/pull/1746)
- `<DataTable/>` - add info icon with tooltip to table header [#1770](https://github.com/wix/wix-style-react/pull/1770)

### Fixed

- `<TimePicker/>` - Prevent typing letters [#1751](https://github.com/wix/wix-style-react/pull/1751)

### Changed

- Migrate to yoshi2 and storybook 4 [#1811](https://github.com/wix/wix-style-react/pull/1811)

## 4.1.1 - 2018-06-11

### Fixed

- `<Input>` make ThemedInput noRight(Left)BorderRadius work. Add className prop. And fix DatePicker border. [#1794](https://github.com/wix/wix-style-react/pull/1794)
- `<MultiSelect>` - Fix missing call to onManuallyInput when no options exists [#1804](https://github.com/wix/wix-style-react/pull/1804)
- `<ImageViewer>` align buttons [#1781](https://github.com/wix/wix-style-react/pull/1781/files#diff-48c04422f656c8c0c6302f9b6db9b0ff)

## 4.1.0 - 2018-06-06

### Fixed

- `<Input/>` - display error icon and dropdown arrow [#1769](https://github.com/wix/wix-style-react/pull/1769)
- `<Search/>` - keep the focus after pressing clear button [#1764](https://github.com/wix/wix-style-react/pull/1764)
- `<Input/>` - remove box shadow when focusing Input with 'tags' theme [#1792](https://github.com/wix/wix-style-react/pull/1792)
- fix version dependency of `wix-ui-icons-common` [#1807](https://github.com/wix/wix-style-react/pull/1807)

### Added

- `<ImageViewer>` - Add error state [#1772](https://github.com/wix/wix-style-react/pull/1772)
- `<Search/>` - Added expandable feature [#1775](https://github.com/wix/wix-style-react/pull/1775)
  - KnownIssue with`<Search/>` !!! - When expandable feature is enabled, there is some bug related to keyboard navigation. Please DON't use it yet. Fix will come very soon. Thanks.
- `<FloatingHelper/>` - add new component - 8.6 FloatingHelper [#1767](https://github.com/wix/wix-style-react/pull/1767),[#1790](https://github.com/wix/wix-style-react/pull/1790)

## 4.0.0 - 2018-05-28

### Breaking

- `<ToggleSwitch>` - [migration guide](https://github.com/wix/wix-style-react/blob/master/src/ToggleSwitch/MIGRATION.md)
- `<Text/>` [migration guide](https://github.com/wix/wix-style-react/blob/master/src/Text/MIGRATION.md)
- `<Label/>` [migration guide](https://github.com/wix/wix-style-react/blob/master/src/Label/MIGRATION.md)

## 3.2.0 - 2018-05-28

### Added

- `<MultiSelectCheckbox/>` - new component [#1755](https://github.com/wix/wix-style-react/pull/1755)

### Fixed

- `<DatePicker/>` - focus year value in dropdown [#1748](https://github.com/wix/wix-style-react/pull/1748)

## 3.1.12 - 2018-05-23

### Fixed

- `<Loader/>` - error message margin should be 18px [#1749](https://github.com/wix/wix-style-react/pull/1749)
- `<RadioGroup/>` - fix icon size [#1750](https://github.com/wix/wix-style-react/pull/1750)
- `<RichTextArea/>` - Fix link creation that caused javascript errors [#1745](https://github.com/wix/wix-style-react/pull/1745)

### Added

- `<Card.ButtonHeader/>` - add 'emptyblue' theme [#1740](https://github.com/wix/wix-style-react/pull/1740)
- `<Tag/>` - fix component box-sizing [#1759](https://github.com/wix/wix-style-react/pull/1759)
- `<Tooltip/>` - use appendByPredicate to support custom appending strategies [#1754](https://github.com/wix/wix-style-react/pull/1754)

## 3.1.11 - 2018-05-16

### Changed

- `<Loader/>` - allow nodes in `text` prop [#1733](https://github.com/wix/wix-style-react/pull/1733)

### Fixed

- `<Icons/>` - create a direct import to the icon component [#1735](https://github.com/wix/wix-style-react/pull/1735)
- `<Checkbox/>` - fix test driver by applying the correct change event triggered by a click [#1737](https://github.com/wix/wix-style-react/pull/1737)

### Removed

- `<Selector/>` - remove the unused `<ExtraIcon/>` component [#1736](https://github.com/wix/wix-style-react/pull/1736)

## 3.1.10 - 2018-05-10

### Added

- `<Modal/>` - add an optional close button to the modal [#1728](https://github.com/wix/wix-style-react/pull/1728)

## 3.1.9 0 2018-05-09

### Fix

- docs: fix testkits import path [#1730](https://github.com/wix/wix-style-react/pull/1730)
- `<Label/>` - fix puppeteer testkit driver [#1726](https://github.com/wix/wix-style-react/pull/1726)

## 3.1.8 - 2018-05-08

### Fix

- `<DatePicker/>` - display `placeholderText` after `value` was removed [#1711](https://github.com/wix/wix-style-react/pull/1711)
- `<TextLink/>` - fix hover state logic [#1720](https://github.com/wix/wix-style-react/pull/1720)
- `<Tooltip/>` - update tooltip position after dom is updated [#1722](https://github.com/wix/wix-style-react/pull/1722)

### Changed

- `<ButtonWithOptions/>` - Always call `onSelect` when selecting an option. pass additional prop to indicate selection [#1719](https://github.com/wix/wix-style-react/pull/1719)

## 3.1.7 - 2018-05-02

### Added

- `<Tooltip/>` - add showImmediately prop to disable animations and delay [#1705](https://github.com/wix/wix-style-react/pull/1705)
- `<Notification/>` - add timeout functionality for global notification [#1696](https://github.com/wix/wix-style-react/pull/1696)
- `<Favorite/>` and `<FavoriteFilled/>` icons [#1707](https://github.com/wix/wix-style-react/pull/1707)

## 3.1.6 - 2018-04-29

### Added

- `<NewFolder/>` and `<Rename/>` icons [#1672](https://github.com/wix/wix-style-react/pull/1672)

### Changed

- `<RadioGroup/>` - remove bottom margin from last item [#1687](https://github.com/wix/wix-style-react/pull/1687)
  Note: `RadioGroup.Radio`, if used standalone, no longer includes unexpected `margin-bottom`
- `<PopoverMenu/` - pass the tooltip zIndex prop [#1674](https://github.com/wix/wix-style-react/pull/1674)
- `<Multiselect/>` - make component min-height 36 [#1683](https://github.com/wix/wix-style-react/pull/1683)
- `<Tooltip/>` - recalculate position during scroll [#1681](https://github.com/wix/wix-style-react/pull/1681)
- `<Modal/>` - move box-shadow to each modal layout [#1697](https://github.com/wix/wix-style-react/pull/1697)

### Fixed

- `<Input/>` - fix case when prefix is cut in IE 11 on small inputs [#1692](https://github.com/wix/wix-style-react/pull/1692)
- `<MultiSelect/>` - fix height according to specs [#1683](https://github.com/wix/wix-style-react/pull/1683)
- `<PopoverMenu/>` - ellipsis for long items strings [#1686](https://github.com/wix/wix-style-react/pull/1686)
- `<MultiSelect/>` - placeholder did not get full input width [#1700](https://github.com/wix/wix-style-react/pull/1700)

## 3.1.5 - 2018-04-18

### Added

- `<Tabs/>` - Added missed `hasDivider` property, divider is visible by default [#1676](https://github.com/wix/wix-style-react/pull/1676)
- `<StatsWidget/>` - support empty state [#1670](https://github.com/wix/wix-style-react/pull/1670)

### Fixed

- `<DatePicker/>` - display `placeholderText` when no value given [#1667](https://github.com/wix/wix-style-react/pull/1677)
- `<DatePicker/>` - fix `clickOnNthDay` testkit method [#1667](https://github.com/wix/wix-style-react/pull/1677)
- `<*/>` rely on `mouseUp` instead of `click` to catch `onClickOutside` [issue #1647](https://github.com/wix/wix-style-react/issues/1647) [#1680](https://github.com/wix/wix-style-react/pull/1680)

## 3.1.4 - 2018-04-11

### Fixed

- `Page` - Removed z-index from PageHeader
- `<RichTextArea/>` fix incorrect Tooltip input width [#1657](https://github.com/wix/wix-style-react/pull/1657)
- `<DatePicker/>` fix position in safari [#1656](https://github.com/wix/wix-style-react/pull/1656)

## 3.1.3 - 2018-04-11

### Added

- `<PageHeader>` - Passing minimize state to title component [#1665](https://github.com/wix/wix-style-react/pull/1665)

### Fixed

- `<Tooltip>` - Fixed `Tooltip` positioning within `Page` component [#1649](https://github.com/wix/wix-style-react/pull/1649)
- `<DatePicker/>` - `onChange` called with time part untouched [#1631](https://github.com/wix/wix-style-react/pull/1631)

### Changed

- `<Modal>` - upgrade react-modal version [#1661](https://github.com/wix/wix-style-react/pull/1661)
- `Icons` - Migrate Button, Search, and Tag to wix-ui-icons-common [#1635](https://github.com/wix/wix-style-react/pull/1635)

## 3.1.2 - 2018-04-08

### Fixed

- `<FieldWithSelection>` - Fix missing styling when with Checkbox [#1642](https://github.com/wix/wix-style-react/pull/1642)

## 3.1.1 - 2018-04-08

### Fixed

- Reverted the removal of `Languages` icon

## 3.1.0 - 2018-04-08

### Added

- `<Heading>` component [#1617](https://github.com/wix/wix-style-react/pull/1617)
- `<Button>` - Make it focusable by keyboard only - using new FocusableHOC [#1614](https://github.com/wix/wix-style-react/pull/1614)
- Make keyboard-only focusable for: `<Checkbox> <RadioButton> <RichTextAreaButton> <ToggleSwitch>` [#1624](https://github.com/wix/wix-style-react/pull/1624)

### Changed

- `<Badge>` & `<CounterBadge>` - improve Badge & CounterBadge stories [#1610](https://github.com/wix/wix-style-react/pull/1610)
- Icons - Migrated some of the internal icons to wix-ui-icons-common [#1616](https://github.com/wix/wix-style-react/pull/1616)
- Icons - Migrate arrow icons to wix-ui-icons-common [#1621](https://github.com/wix/wix-style-react/pull/1621)
- Migrate to yoshi [962c7eb](https://github.com/wix/wix-style-react/commit/962c7ebae41102297ebe2a96eb5360b205ab8e6c)

### Fixed

- Typography - fix `h2` line-height and use correct grey colors in `t1` and `t3` [e38cd6a](https://github.com/wix/wix-style-react/commit/e38cd6a8ddee4d67a09dcca106a35b830f3735dc)
- `<DatePicker>` - big date, year dropdown min/max values are no longer hardcoded [#1629](https://github.com/wix/wix-style-react/pull/1629)
- `<MessageBox>` - right margin only if more then one button [#1588](https://github.com/wix/wix-style-react/pull/1588)
- `<DataTable>` - add fallback to text-align:start for IE[#1623](https://github.com/wix/wix-style-react/pull/1623)
- `<DataTable>` - render newly received data on infinite scroll properly [#1618](https://github.com/wix/wix-style-react/pull/1618)
- `<DrillView>` - Fix render new state while in transition casues menu to disappear [#1615](https://github.com/wix/wix-style-react/pull/1615)
- `<ButtonWithOptions>`,`<DropdownLayout>` - don't invoke onSelect when same option is selected [#1579](https://github.com/wix/wix-style-react/pull/1579)

## 3.0.1 - 2018-03-28

### Fixed

- `<DrillView/>` - dont go over a tags if have no onClick prop [#1599](https://github.com/wix/wix-style-react/pull/1599)

- `<Range/>` - fix click race condition

## 3.0.0

### Breaking

- `<DatePicker/>` [migration guide](https://github.com/wix/wix-style-react/blob/master/src/DatePicker/MIGRATION.md)
- `<Badge/>` [migration guide](https://github.com/wix/wix-style-react/blob/master/src/Badge/MIGRATION.md)
- `<CounterBadge/>` [migration guide](https://github.com/wix/wix-style-react/blob/master/src/CounterBadge/MIGRATION.md)
- jQuery no longer used in testkits, may possibly break your tests
- `<Text/>` - no more unexpected `margins` when using any of the following `appearance`s: `H0`, `H1`, `H1.1`, `H2`, `H2.1`, `H3`, `H4`. May break layout.
- SSR support for `.st.css` files: [Instructions](https://github.com/wix/stylable-integration#nodejs-require-hook)
- `<Svg>` - the path for src/svg is deprecated. Instead, every icon/svg should be imported from `src/icons`.

## 2.0.34 - 2018-03-26

### Fixed

- `<Tooltip/>` - fixed Tooltip show and hide functions to accept the relevant props [#1597](https://github.com/wix/wix-style-react/pull/1597)

## 2.0.33 - 2018-03-26

### Fixed

- `<Range/>` - fix e2e eyes failures by making the date fixed [#1589](https://github.com/wix/wix-style-react/pull/1589)
- `<Page/>` - fix an issue that renders `0` in a certain case
- `<Tooltip/>` - fix disabled change when active true [#1584](https://github.com/wix/wix-style-react/pull/1584)
- `<TextLink/>` - remove link prop required field [#1583](https://github.com/wix/wix-style-react/pull/1583)
- `<DrillView/>` - don't trigger `onClick` for disabled items [#1591](https://github.com/wix/wix-style-react/pull/1591)

### Added

- Testing - add `scrollToElement` function for protractor testing [#1569](https://github.com/wix/wix-style-react/pull/1569)

## 2.0.32 - 2018-03-22

### Changed

- `<toggleSwitch>` - add hover style [#1576](https://github.com/wix/wix-style-react/pull/1576)
- Focus-Styles: Disable focus style for component which need keyboardOnly [#1578](https://github.com/wix/wix-style-react/pull/1578)
- `<RichTextEditor/>` - add new focus styles to buttons [#1572](https://github.com/wix/wix-style-react/pull/1572)
- `Grid` - grid rows bottom margin should be 30px [#1483](https://github.com/wix/wix-style-react/pull/1483)

### Fixed

- `<Page/>` - fixed issue when page jumps between minimized and full states on page without scroll [#1467](https://github.com/wix/wix-style-react/issues/1467)
- `<Tooltip/>` - fix Tooltip active and disabled new props transition [#1573](https://github.com/wix/wix-style-react/pull/1573)
- `<Checkbox>` protractor driver: use isFocused from test-common

## 2.0.31 - 2018-03-19

### Added

- `<PopoverMenu>` : add appendTo props [#1568](https://github.com/wix/wix-style-react/pull/1568)
- TextLink - add grayscale. MultiSelect Tags - hover css [#1452](https://github.com/wix/wix-style-react/pull/1452)
- Apply `<Input>` new focus style [#1533](https://github.com/wix/wix-style-react/pull/1533)
- Added event listener for page content resize [#1564](https://github.com/wix/wix-style-react/pull/1564)

### Changed

- Testkit sectionhelper [#1563](https://github.com/wix/wix-style-react/pull/1563)
- Fix missing dataHook - add Range e2e test for DatePicker [#1562](https://github.com/wix/wix-style-react/pull/1562)
- `<FieldWithSelection>` : Prepare for new focus styles [#1559](https://github.com/wix/wix-style-react/pull/1559)

### Fixed

- fix(Selector, Checkbox, ModalSelectorLayout)| ModalSelectorLayout clicking on checkbox fires onToggle twice [#1560](https://github.com/wix/wix-style-react/pull/1560)
- Remove scss calls to fade() [#1554](https://github.com/wix/wix-style-react/pull/1554)

## 2.0.30 - 2018-03-15

### Added

- `<MultiSelect/>` composite component [1538](https://github.com/wix/wix-style-react/pull/1538)

### Changed

- `<ModalSelectorLayout/>` support disabled items [1550](https://github.com/wix/wix-style-react/pull/1550)
- `<InputArea/>`, `<RichTextArea/>`, `<Range>`, `<RadioGroup>` new focus styles [1553](https://github.com/wix/wix-style-react/pull/1553) [1542](https://github.com/wix/wix-style-react/pull/1542) [1548](https://github.com/wix/wix-style-react/pull/1548)
- `<TextLink/>` - `preventDefault` for onClick when no `link` given [1551](https://github.com/wix/wix-style-react/pull/1551)

### Fixed

- `<Tooltip/>` fix `tooltipPlacement` prop [1552](https://github.com/wix/wix-style-react/pull/1552)
- `<ToggleSwitch/>` - Remove from async from isFocused [1544](https://github.com/wix/wix-style-react/pull/1544)
- `<PageHeader/>` - update the title methods in the driver to return the [1549](https://github.com/wix/wix-style-react/pull/1549)

## 2.0.29 - 2018-03-12

### Added

- new icons `Duplicate3`, `EmailOpen`, `Trash4`, `Warning` [1504](https://github.com/wix/wix-style-react/pull/1504)

### Changed

- `<Checkbox/>` focus styles [1521](https://github.com/wix/wix-style-react/pull/1521)
- `<ToggleSwitch/>` new focus styles + protractor isFocused util [1522](https://github.com/wix/wix-style-react/pull/1522)
- `<Tags/>` new focus styles + disable <Input> focus style + bug fixes [1513](https://github.com/wix/wix-style-react/pull/1513)

### Fixed

- `<Page/>` Added more height to content on minimize [1535](https://github.com/wix/wix-style-react/pull/1535)
- `<Button theme="no-border"/>` fix hover prop [1525](https://github.com/wix/wix-style-react/pull/1525)
- `<Notification/>` include padding as part of width [1529](https://github.com/wix/wix-style-react/pull/1529)

## 2.0.28 - 2018-03-06

### Fixed

- `<RadioGroup/>` - fix testkit `getSelectedValue` to return the updated selected option [1515](https://github.com/wix/wix-style-react/pull/1515)

## 2.0.27 - 2018-03-05

### Fixed

- `<Input/>` - revert changed focus style [1509](https://github.com/wix/wix-style-react/pull/1509)

## 2.0.26 - 2018-03-02

### Added

- `<Button/>` Implemented Tiny button [1491](https://github.com/wix/wix-style-react/pull/1491)

### Fixed

- `<Dropdown/>` - do not show options menu on focus [1500](https://github.com/wix/wix-style-react/pull/1500)
- `<DataTable/>` - Fix column width not set when header is hidden [1477](https://github.com/wix/wix-style-react/pull/1477)
- `<Page/>` fixed explorer bug again [1482](https://github.com/wix/wix-style-react/pull/1482)

### Changed

- `<Input/>` - Change Focus style [1496](https://github.com/wix/wix-style-react/pull/1496)
- `<PopoverMenu/>` - change show delay to 0 [1489](https://github.com/wix/wix-style-react/pull/1489)
- `<Tag/>` extend component functionality [1481](https://github.com/wix/wix-style-react/pull/1481)

## 2.0.25 - 2018-02-22

### Changed

- `<Page/>` - Reverted a bug fix for IE [#1468](https://github.com/wix/wix-style-react/pull/1468) that caused google chrome issue.
- Removed the `componentInstance` occurrences in tests.

### **Added** for new features.

- `<Icon/>` - new email icon

## 2.0.24 - 2018-02-19

### Changed

- `<Page.Header/>` - update gradient height [#1458](https://github.com/wix/wix-style-react/pull/1458)

### Fixed

- `<Page/>` fixed bug in IE [#1468](https://github.com/wix/wix-style-react/pull/1468)
- `<Card/>` header title position fix [#1464](https://github.com/wix/wix-style-react/pull/1464)
- `<Selector/>` & `<ModalSelectorLayout/>` cover long text with ellipsis [#1461](https://github.com/wix/wix-style-react/pull/1461)

## 2.0.23 - 2018-02-14

### Fixed

- `<RadioGroup/>` - Fix radio button width (#1457)
- `<Input/>` - Amaterial theme fix, added hover and fade in / out [#1445](https://github.com/wix/wix-style-react/pull/1445)
- `<InputArea/>` - on error tooltip use `theme="dark"` & default `tooltipPlacement="top"` [1456](https://github.com/wix/wix-style-react/pull/1456)
- `<StatsWidget/>` - fix padding issues [#1446](https://github.com/wix/wix-style-react/pull/1446)
- `<GoogleAddressInput/>` fix occasionally missing street number [#1435](https://github.com/wix/wix-style-react/pull/1435)

### Changed

- `<Notification/>` - remove size prop [#1448](https://github.com/wix/wix-style-react/pull/1448)
- `<PopoverMenuItem/>` - add size prop [#1437](https://github.com/wix/wix-style-react/pull/1437)

## 2.0.22 - 2018-02-11

### Fixed

- fix `puppeteer` testkit driver for the `<Label/>` component.

## 2.0.21 - 2018-02-11

### Fixed

- `<Page/>` - Fixed width issues with windows browser.

### Added

- `puppeteer` testkit driver for the `<Label/>` component and added docs.
- Added disabled state for a `<SideMenu/>` Drillview.

## 2.0.20 - 2018-02-07

### Added

- `puppeteer` testkit driver for the `Button` component.

### Changed

- Reference to wix-ui-test-utils

## 2.0.19 - 2018-02-06

### Changed

- `puppeteer` testkit driver for the `Input` component.

### Fixed

- Don't render `PopoverMenuItem` icon if does not exist
- `Breadcrumbs` dark theme color correction.
- `Page` UI fixes for restricted content size.
- `Page` pass the `minimized` property to the content element

## 2.0.18 - 2018-02-02

### Fixed

- Bug fixes in `Page` Component [1422](https://github.com/wix/wix-style-react/pull/1422) [1407](https://github.com/wix/wix-style-react/pull/1407)
- `DropdownLayout` - Hides the drop down when not shown [1408](https://github.com/wix/wix-style-react/pull/1408)
- fix divider color `Card.Header`

### Added

- Automatic Storybook Deployment Upon PR [1418](https://github.com/wix/wix-style-react/pull/1418)

## 2.0.17 - 2018-01-30

### Changed

- Changed order of storybook components [1390](https://github.com/wix/wix-style-react/pull/1390)

### Added

- `<CounterBadge/>` new component from `wix-ui-backoffice` [1392](https://github.com/wix/wix-style-react/pull/1392)

### Fixed

- `<Breadcrumbs/>` add 204px `max-width` on breadcrumb items [1394](https://github.com/wix/wix-style-react/pull/1394)
- `<RadioGroup.Radio/>` use correct `displayName` for `RadioGroup.Radio` [00f303b](https://github.com/wix/wix-style-react/commit/00f303b210bb0dda808f9ab85405c17ea3cf8d03)
- `RadioGroup` add missing `getRadioAtIndex` to enzyme testkit [1398](https://github.com/wix/wix-style-react/pull/1398)

## 2.0.15 - 2018-01-24

### Changed

- Made `wix-ui-test-utils` a dependency

## 2.0.15 - 2018-01-23

### Added

- `<Page/>` Added `fullScreen` prop to Content [1388](https://github.com/wix/wix-style-react/pull/1388)

### Fixed

- `<Page/>` Rendering issues [1381](https://github.com/wix/wix-style-react/pull/1381)

## 2.0.14 - 2018-01-23

### Added

- Add method `click` to `Card.ButtonHeader` testkit [1385](https://github.com/wix/wix-style-react/pull/1385)

### Fixed

- `<Page/>` Add calculation when leaving minimized state [1381](https://github.com/wix/wix-style-react/pull/1381)
- Page background image [1387](https://github.com/wix/wix-style-react/pull/1387)

## 2.0.13 - 2018-01-22

### Changed

- InputArea remove hasCounter class [1322](https://github.com/wix/wix-style-react/pull/1322)
- Fix modal height [1378](https://github.com/wix/wix-style-react/pull/1378)

### Deprecated

- `<ButtonSelection/>` is no longer available [1362](https://github.com/wix/wix-style-react/pull/1362)

## 2.0.12 - 2018-01-17

### Added

- add generic data-hooks to `Tag` and `TooltipContent` & `<TabsItem/>` components [1371](https://github.com/wix/wix-style-react/pull/1371) [1361](https://github.com/wix/wix-style-react/pull/1361)

### Changed

- `<TabItem/>` - use `propType.node` for `title` [1372](https://github.com/wix/wix-style-react/pull/1372)
- update `MoveTo`, `FoodInstock` & `FoodOutOfStock` icons [0ae2ca04e](https://github.com/wix/wix-style-react/commit/0ae2ca04e4faec5972c96c30af14831515c4ee25)

## 2.0.11 - 2018-01-15

### Fixed

- `<Page/>` can receive `sidePadding` without `maxWidth`

### Changed

- `<Notification/>` - no longer require `size`, choose it automatically [1356](https://github.com/wix/wix-style-react/pull/1356)

## 2.0.9 - 2018-01-11

### Added

- Add `sidePadding` props to `<Page/>` [1354](https://github.com/wix/wix-style-react/pull/1354)

## 2.0.8 - 2018-01-11

### Changed

- `<Dropdown/>` - close dropdown when clicking header [1352](https://github.com/wix/wix-style-react/pull/1352)
- Add new icons `Lock` and `LockOpen` [1341](https://github.com/wix/wix-style-react/pull/1341)
- Add PropType `node` to `backLabel` in `SideMenuDrill` [1348](https://github.com/wix/wix-style-react/pull/1348)

### Fixed

- `<TimeInput/>` - Move width property to wrapper [1349](https://github.com/wix/wix-style-react/pull/1349)
- `<Dropdown/>` - use cursor pointer [1346](https://github.com/wix/wix-style-react/pull/1346)
- `<TextLink/>` - fix `doesComponentHasClass` teskit method

## 2.0.7 - 2018-01-10

### Added

- Add `width` and `height` props to `<imageViewer/>` [1340](https://github.com/wix/wix-style-react/pull/1340)
- Add `type="button"` for missing places in the project [1339](https://github.com/wix/wix-style-react/pull/1339)

### Fixed

- fix `<HBox/>` & `<VBox/>` [1345](https://github.com/wix/wix-style-react/pull/1345)
  Fixed tabs styling bug

## 2.0.6 - 2018-01-09

### Added

- `<PopoverMenu/>` - support `buttonHeight` [1335](https://github.com/wix/wix-style-react/pull/1335)

### Changed

- upgrade enzyme to 3.3.0 [1330](https://github.com/wix/wix-style-react/pull/1330)

## 2.0.4 - 2018-01-04

### Fixed

- `<SideMenu/>` - Fix sidebar menu items being hidden [1326](https://github.com/wix/wix-style-react/pull/1326)
- various UI alignments [1300](https://github.com/wix/wix-style-react/pull/1300)
- `<MultiSelect/>` - Save multiselect input on blur [1316](https://github.com/wix/wix-style-react/pull/1316)

### Changed

- `<StatsWidget/>` - Switch stats widget to use button with options from dropdown [1320](https://github.com/wix/wix-style-react/pull/1320)
- `<ModalSelectorLayout/>` - allow `node` in `title` & `subtitle` props
- `<RadioGroup.Button>` - add `content` prop for additional, non label, nodes [1327](https://github.com/wix/wix-style-react/pull/1327)

### Added

- `<Tabs/>` - new type `compactSide` [1291](https://github.com/wix/wix-style-react/pull/1291)

## 2.0.3 - 2017-12-12

### Fixed

- `SideMenuDrill` - Fix empty menu level [1297](https://github.com/wix/wix-style-react/pull/1297)
- Fix exclamation icon blocking interaction on entire row [1311](https://github.com/wix/wix-style-react/pull/1311)
- `DropdownLayout` - Fix drop down rtl options are left aligned [1310](https://github.com/wix/wix-style-react/pull/1310)

### Added

- `Slider` - Add Testkit and e2e [1303](https://github.com/wix/wix-style-react/pull/1303)
- `DropdownLayout` - Added optionsContent to driver [1308](https://github.com/wix/wix-style-react/pull/1308)
- `Icons` - Add new icons and update Google, Facebook, Code and Yandex [1307](https://github.com/wix/wix-style-react/pull/1307)
- `ButtonLayout` - Added icon button styles for `heightlarge` [1313](https://github.com/wix/wix-style-react/pull/1313)

## 2.0.2 - 2017-12-26

### Fixed

- fix css name collision between tooltip and button [1276](https://github.com/wix/wix-style-react/pull/1276)

## 2.0.1 - 2017-12-26

### Added

- MusicalNote icon added [1280](https://github.com/wix/wix-style-react/pull/1280)

### Changed

- `SideMenuDrill.SubMenu` - Add `node` as PropType to `title` in `SideMenuDrill.SubMenu` component [1298](https://github.com/wix/wix-style-react/pull/1298)

### Fixed

- `Page` - Fixed height calculation bug when header changes [1299](https://github.com/wix/wix-style-react/pull/1299)
- `ButtonWithOptions` - Assorted bug fixes [1296](https://github.com/wix/wix-style-react/pull/1296)

## 2.0.0 - 2017-12-24

### Breaking

- `<Grid/>`- Col component defaultProp span is now 12. Might prevent default -15px padding to the left, so should be treated as a breaking change. [1279](https://github.com/wix/wix-style-react/pull/1279)
- `<ModalSelectorLayout/>` - new component, replaces `<ModalSelector>`. Should be used in conjunction with `<Modal/>` [1294](https://github.com/wix/wix-style-react/pull/1294)

### Changed

- `Grid`- Rename `Row` component to `Columns`, and `AutoAdjustedRow` to `AutoAdjustedColumns` [1279](https://github.com/wix/wix-style-react/pull/1279)

### Fixed

- `Page Header` - Update Header scroll threshold size [1289](https://github.com/wix/wix-style-react/pull/1289)
- `MultiSelect` - Allow to write any text as tag when options are empty [1292](https://github.com/wix/wix-style-react/pull/1292)

## 1.2.12 - 2017-12-24

### Added

- `<MultiSelect/>` - Added Multiselect [1289](https://github.com/wix/wix-style-react/pull/1289) [1292](https://github.com/wix/wix-style-react/pull/1292)

### Changed

- `<Page/>` - Added height recalculation when inner height changes [1289](https://github.com/wix/wix-style-react/pull/1289)

## 1.2.11 - 2017-12-21

### Added

- `<MessageBox/>` - Add footerContent props to MessageBox to allow adding footer to the message box [1269](https://github.com/wix/wix-style-react/pull/1269)
- `<Icon.Time/>` - new time icon [1285](https://github.com/wix/wix-style-react/pull/1285)

### Fixed

- `<Notification/>` - fix close button alignment [f59bec356](https://github.com/wix/wix-style-react/commit/f59bec3560f210e189a792820f600843a445e68d)
- `<Card/>` - add more clear docs [1284](https://github.com/wix/wix-style-react/pull/1284)
- `<Page/>` - Added height for title to avoid height calculation errors [1287](https://github.com/wix/wix-style-react/pull/1287)

## 1.2.10 - 2017-12-20

### Fixed

- fix css name collision between tooltip and button [1276](https://github.com/wix/wix-style-react/pull/1276)
- Add background color to page header [1277](https://github.com/wix/wix-style-react/pull/1277)
- PageHeader: update propTypes for title and subtitle [1282](https://github.com/wix/wix-style-react/pull/1282)

## 1.2.9 - 2017-12-18

### Fixed

- fixed import of icon in StatsWidget [1272](https://github.com/wix/wix-style-react/pull/1272)
- revert use `wix-ui-backoffice/ToggleSwitch` [1242](https://github.com/wix/wix-style-react/pull/1242) due to missing RTL support

## 1.2.8 - 2017-12-17

### Fixed

- use actual source of Story & AutoExample [1268](https://github.com/wix/wix-style-react/pull/1268)
- vertically align notification close button in IE11 [1255](https://github.com/wix/wix-style-react/pull/1255)
- remove `z-index` and rely on `initial` [1253](https://github.com/wix/wix-style-react/pull/1253)

### Added

- Allow setting the display of the `TextLinkLayout` element [1262](https://github.com/wix/wix-style-react/pull/1262)
- `Page` - Added docs [1265](https://github.com/wix/wix-style-react/pull/1265)

### Changed

- `ToggleSwitch` - use `wix-ui-backoffice/ToggleSwitch` [1242](https://github.com/wix/wix-style-react/pull/1242)

## 1.2.7 - 2017-12-13

### Fixed

- Add parentSelector and overlayPosition props to modal [1254](https://github.com/wix/wix-style-react/pull/1254)

### Added

- HBox and VBox components [1263](https://github.com/wix/wix-style-react/pull/1263)

## 1.2.6 - 2017-12-13

### Fixed

- Remove unwanted padding from `<FieldWithSelection>` dropdown [1258](https://github.com/wix/wix-style-react/pull/1258)
- support append to parent in tooltip teskit [1252](https://github.com/wix/wix-style-react/pull/1252)

### Changed

- Migrate storybook utils to `wix-storybook-utils` [1215](https://github.com/wix/wix-style-react/pull/1215)

## 1.2.5 - 2017-12-10

### Added

- `DropdownComposite` - [1238](https://github.com/wix/wix-style-react/pull/1238)

### Changed

- `Page` - Change styles [1234](https://github.com/wix/wix-style-react/pull/1234)
- `Page` - Added max-width support [1245](https://github.com/wix/wix-style-react/pull/1245)

### Fixed

- `Input` - RTL is now implemented with direction:rtl [1232](https://github.com/wix/wix-style-react/pull/1232)

## 1.2.4 - 2017-12-06

### Changed

- `DropdownLayout`
  - remove line-height from options in material theme (https://github.com/wix/wix-style-react/commit/7bf3f75e347de4a4920740de92441b5f205f65a1)
  - fix position in safari [1231](https://github.com/wix/wix-style-react/pull/1231)

## 1.2.3 - 2017-12-05

### Changed

- `DropdownLayout` - change option padding to conform to backoffice UX [1127](https://github.com/wix/wix-style-react/pull/1227)

### Fixed

- `<Loader>` - Fix teskit for the case the loader does not exist [1226](https://github.com/wix/wix-style-react/pull/1226), [1228](https://github.com/wix/wix-style-react/pull/1228)
- `<InputWithOptions>` - do not force blur when hiding options dropdown [1125](https://github.com/wix/wix-style-react/pull/1225)

## 1.2.2 - 2017-12-04

### Fixed

- wix-ui-test-utils should be a dep instead of dev-dep

## 1.2.1 - 2017-12-04

### Fixed

- Publish transpiled code (https://github.com/wix/wix-style-react/commit/d165950bfc3b355b1bbc5896797538a52c410ec2)

## 1.2.0 - 2017-12-04

### Changed

- Migrate to wix-ui-test-utils [1204](https://github.com/wix/wix-style-react/pull/1204)
- Removed dist from testkit import path in the examples
- Deprecate export-components script in favor of import-path package [1217](https://github.com/wix/wix-style-react/pull/1217)
- Migrate to haste [1218](https://github.com/wix/wix-style-react/pull/1218)
- `<Loader>`: New loader [1203](https://github.com/wix/wix-style-react/pull/1203)

### Fixed

- `<input>` - Correct prop-types for noRightBorderRadius [1213](https://github.com/wix/wix-style-react/pull/1213)

### Added

- `<Page>` - Add Tabs [1211](https://github.com/wix/wix-style-react/pull/1211)
- `<DropdownLayout>` - Added long options support to dropdown [#1220](https://github.com/wix/wix-style-react/pull/1220)

## 1.1.4624 - 2017-11-29

### Changed

- use node 8.9.1
- remove `module` from package.json, no more `dist/es` folder
- `<MessageBoxFunctionalLayout>` - confirmText & cancelText proptype now node [1202](https://github.com/wix/wix-style-react/pull/1202)

### Fixed

- `<Input>` - correct autofocus cursor position [1208](https://github.com/wix/wix-style-react/pull/1208)

## 1.1.4623 - 2017-11-28

### Added

- New icons: Code, Facebook, Google & Yandex [1197](https://github.com/wix/wix-style-react/pull/1197)

### Changed

- `<PageHeader>` - general improvements [1196](https://github.com/wix/wix-style-react/pull/1196)

### Fixed

- `<Notification.TextLabel/>` - correct style & ellipsed text behaviour [1180](https://github.com/wix/wix-style-react/pull/1180)
- `<Checkbox/>` - do not require `.ltr` [1199](https://github.com/wix/wix-style-react/pull/1199)

## 1.1.4262 - 2017-11-27

### Changed

- `<Page>` refactor & improve docs [1182](https://github.com/wix/wix-style-react/pull/1190), [1182](https://github.com/wix/wix-style-react/pull/1182)

### Fixed

- `<InputArea>` updated to the correct icon [1181](https://github.com/wix/wix-style-react/pull/1181)

## 1.1.4260 - 2017-11-25

### Added

- `<StatsWidget>` - Added new widget (https://github.com/wix/wix-style-react/commit/3209220357d8b8e1bd320de5f1e9512f50214342)
- `<Tooltip>` - Add range polyfill [1178](https://github.com/wix/wix-style-react/pull/1178)
- Package.lock - [1183](https://github.com/wix/wix-style-react/pull/1183)
- Themes - huge refactor to boost performance and api. [1186](https://github.com/wix/wix-style-react/pull/1186)

### Changed

- `<TimeInput>` + `<Search>` - Update docs [1108](https://github.com/wix/wix-style-react/pull/1108)
- `<Tooltip>` - Remove deprecated tooltip [1179](https://github.com/wix/wix-style-react/pull/1179)

### Fixed

- `<ToggleSwitch>` - disable the toggle on disable mode[1174](https://github.com/wix/wix-style-react/pull/1174)
- storybook e2e
- `<InputWithOption>` - Solved Safari issue: [387](https://github.com/wix/wix-style-react/issues/387)
- `<Tooltip>` - Remove setTimeout [1177](https://github.com/wix/wix-style-react/pull/1177)
- Terminal was cleaned from all warning printouts - [1185](https://github.com/wix/wix-style-react/pull/1185)

## 1.1.4259 - 2017-11-22

### Added

- `<Page>` Added more features [1158](https://github.com/wix/wix-style-react/pull/1158)
- Added sorting order icons [1140](https://github.com/wix/wix-style-react/pull/1140)

### Changed

- `<Breadcrumbs>` style changes [1156](https://github.com/wix/wix-style-react/pull/1156)
- `<Tag>` Fixed bug with expanding width [1159](https://github.com/wix/wix-style-react/pull/1159)

## 1.1.4258 - 2017-11-21

### Added

- `<Page>` component and friends [1145](https://github.com/wix/wix-style-react/pull/1145)

### Changed

- `<AutoExample>` e2e approach [1148](https://github.com/wix/wix-style-react/pull/1148)

### Fixed

- `<DataTable>` - missing separators in data table [1153](https://github.com/wix/wix-style-react/pull/1153)
- `<GoogleAddressInput>` remove undefined properties from result [1154](https://github.com/wix/wix-style-react/pull/1154)

## 1.1.4527 - 2017-11-20

### Changed

- Themes implementation without provider [1151](https://github.com/wix/wix-style-react/pull/1151)

### Added

- `<Page>` - additional e2e tests

- `<GoogleAddressInput>` - Allow fetching address data via Places API [1141](https://github.com/wix/wix-style-react/pull/1141)

### Fixed

- TpaThemeProvider - small bug (https://github.com/wix/wix-style-react/commit/d66bf2107f1376c5034ef835303da20716df7e82)
- `<Button>` - Fixed incorrect padding in RTL [1142](https://github.com/wix/wix-style-react/pull/1142)
- `<DropdownLayout>` - Use lodash findIndex instead of native (for IE support)[1143](https://github.com/wix/wix-style-react/pull/1143)
- `<DropdownLayout>`, `<GoogleAddressInput>`, `<MultiSelect>` - Added a selectedHighlight prop to DropdownLayout, meaning after selecting an option if it should highlight it when dropdown is reopened [1136](https://github.com/wix/wix-style-react/pull/1136)
- `<DropdownLayout>` - mouseClickOutside method was fixed [1147](https://github.com/wix/wix-style-react/pull/1147)

## 1.1.4525 - 2017-11-18

### Added

- themes: progressed with themes poc
- `<Page>` - new component (https://github.com/wix/wix-style-react/pull/1127)

### Fixed

- `<GoogleAddressInput>` - pixelated google credit picture in the footer.
  (https://github.com/wix/wix-style-react/pull/1128)
- `<Tooltip>` - Popover jumping problem(https://github.com/wix/wix-style-react/pull/1137)

## 1.1.4524 - 2017-11-14

### Added

- `<ToogleSwitch/>` - Added support for colors, in order to add component to Wix Viewer (https://github.com/wix/wix-style-react/commit/aa4df9ceb95bd3786f812cb44831f027dbcdb2a4)

- Themes harmless side project as a POC.(https://github.com/wix/wix-style-react/commit/2d50e0a99f04fa8af7eb7566fb5b2930d36baeba)

### Fixed

- `<FieldWithSelectionComposite>` - fix-selection-input-type (https://github.com/wix/wix-style-react/pull/1126)
- release.js: run gh-pages-auto-release only when releasing(https://github.com/wix/wix-style-react/commit/d3d8035e57de0ce97c6b1c0544638a0798ec6760)

## 1.1.4523 - 2017-11-13

### Added

- `<Range/>` - now able to work with `<DatePicker/>`s to create date
  range component (https://github.com/wix/wix-style-react/commit/9b32f2a397eec268052036be5230e5b67ea3eda6)

### Fixed

- `<InputWithOptions/>` - do not hide dropdown if `options.length === 0` (https://github.com/wix/wix-style-react/pull/1116)

## 1.1.4252 - 2017-11-10

### Added

- `<Tooltip/>` `shouldUpdatePosition` prop (https://github.com/wix/wix-style-react/commit/da9c496396e7395de53dfb9a8bacbd7520c61012)

### Changed

- `<Tooltip/>` (https://github.com/wix/wix-style-react/commit/5b3fa3b0367bffe512b7ed44b11932b4d456e6ae):
  - default `maxWidth` now `204px`
  - default `textAlign` now `left`
