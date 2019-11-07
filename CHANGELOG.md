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

## 7.14.1 - 2019-11-07

## Fixed
- `<Ticker/>` - add missing propType [#4479](https://github.com/wix/wix-style-react/pull/4479)
- Fixing wix-style-react polyfills to run in SSR without reference errors [#4463](https://github.com/wix/wix-style-react/pull/4463)

## 7.14.0 - 2019-11-07

### Added

- `<ComposerHeader/>`- added prop "dropShadow" [#4431](https://github.com/wix/wix-style-react/pull/4431)
- `<Swatches />` - added onCancel prop [#4470](https://github.com/wix/wix-style-react/pull/4470)

### Fixed

- `<MediaOverlay />` - Added controlled hover mode and fixed middle content positioning issue [#4465](https://github.com/wix/wix-style-react/pull/4465)
- `<ModalSelectorLayout/>` - add scrollbar styling [#4457](https://github.com/wix/wix-style-react/pull/4457)
- `<Thumbnail/>` - Fix selection borders not visible on focus [#4469](https://github.com/wix/wix-style-react/pull/4469)
- `<Heading/>` - add missing propType [#4466](https://github.com/wix/wix-style-react/pull/4466)
- `<LabelledElement/>` - fix placeholder for children [#4430](https://github.com/wix/wix-style-react/pull/4430)

### Changed

- `<CardGalleryItem/>` - refactor to use MediaOverlay internally [#4459](https://github.com/wix/wix-style-react/pull/4459)
- `<SidebarSectionItem/>` - change padding when drillable [#4476](https://github.com/wix/wix-style-react/pull/4476)
- `<Sidebar/>` - change width to 228px [#4477](https://github.com/wix/wix-style-react/pull/4477)

## 7.13.0 - 2019-11-05

### Added

- `<ModalMobileLayout/>` - create component [#4400](https://github.com/wix/wix-style-react/pull/4400)
- `<Swatches />` - add onChange prop [#4434](https://github.com/wix/wix-style-react/pull/4434)
- `<PreviewWidget/>`- new component (Work In Progress) [#4407](https://github.com/wix/wix-style-react/pull/4407)
- `<SidebarBackButton/>` - create component [#4429](https://github.com/wix/wix-style-react/pull/4429)
- `<MediaOverlay/>` - add compound component with dragg handle icon [#4451](https://github.com/wix/wix-style-react/pull/4451)
- `<InputWithLabel/>` - add customInput prop [#4450](https://github.com/wix/wix-style-react/pull/4450)

### Changed

- `<SidebarSectionItem/>` - improve design [#4445](https://github.com/wix/wix-style-react/pull/4445)

### Fixed

- `<StatisticsWidget/>` - Fix onClick issue [#4419](https://github.com/wix/wix-style-react/pull/4419)
- `<SortableList/>` - fix doubling of items during dragging [#4425](https://github.com/wix/wix-style-react/pull/4425)
- `<ImageViewer/>` - re-add `showRemoveButton` prop [#4408](https://github.com/wix/wix-style-react/pull/4408)
- `<DataTable/>` - virtualized, fix outer element [#4455](https://github.com/wix/wix-style-react/pull/4455)
- `<DataTable/>` - memoized row when virtualized [#4462](https://github.com/wix/wix-style-react/pull/4462)
- `<BarChart/>` - fix padding according to spec [#4449](https://github.com/wix/wix-style-react/pull/4449)

### Docs

- Cheatsheet - add `<ModalMobileLayout/>` to modal family [#4432](https://github.com/wix/wix-style-react/pull/4432)

## 7.12.0 - 2019-10-29

### Added

- `<SortableList/>` - droppable feature [#4409](https://github.com/wix/wix-style-react/pull/4409)
- `<SortableList/>` - insert rule feature [#4406](https://github.com/wix/wix-style-react/pull/4406)
- `<MediaOverlay />` - new component [#4396](https://github.com/wix/wix-style-react/pull/4396)

### Fixed

- `<MultiSelect/>` - Remove little bounce of I-cursor when input gets focus [#4384](https://github.com/wix/wix-style-react/pull/4384)
- `<AutoCompleteWithLabel/>` - fix controlled mode [#4404](https://github.com/wix/wix-style-react/pull/4404)
- `<Sidebar/>` - Fix open/close transitions [#4399](https://github.com/wix/wix-style-react/pull/4399)

## 7.11.0 - 2019-10-28

### Added

- `<AutoCompleteWithLabel/>`, `<InputWithLabel/>` - expose necessary Input props [#4386](https://github.com/wix/wix-style-react/pull/4386)

### Changed

- `<MultiSelect/>` - remove pointer cursor from Tags on hover [#4382](https://github.com/wix/wix-style-react/pull/4382)
- `<Page.Content/>` - Changed `children` prop to be of type node [#4394](https://github.com/wix/wix-style-react/pull/4394)

### Fixed

- `<Proportion/>` - make sure that proportion is not stretching more then its container size [#4385](https://github.com/wix/wix-style-react/pull/4385)
- `<AutoCompleteWithLabel/>` - fix callback for onSelect [#4398](https://github.com/wix/wix-style-react/pull/4398)

### Docs

- `<Sidebar/>` - fix broken example in story page [#4388](https://github.com/wix/wix-style-react/pull/4388)

## 7.10.0 - 2019-10-23

### Added

- `<Sidebar/>` - add `skin` prop [#4299](https://github.com/wix/wix-style-react/pull/4299)
- `<FormField/>` - add `charCount` prop [#4350](https://github.com/wix/wix-style-react/pull/4350)
- `<AutoCompleteWithLabel/>` - create the component [#4052](https://github.com/wix/wix-style-react/pull/4052)
- `<Swatches/>` - add clickEmptySwatch method to testkit [#4357](https://github.com/wix/wix-style-react/pull/4357)
- `<InputWithLabel />`, `<AutoCompleteWithLabel />` - add `onChange`, `onFocus` & `onBlur` props [#4375](https://github.com/wix/wix-style-react/pull/4375)
- `<RadioGroup.Button/>` - Add `tabIndex` prop [#4370](https://github.com/wix/wix-style-react/pull/4370)
- `<FloatingNotification/>` - pass rest props to the buttons [#4376](https://github.com/wix/wix-style-react/pull/4376)
- `<SidebarSectionItem />` - add prop alwaysDisplayChevron [#4379](https://github.com/wix/wix-style-react/pull/4379)

### Changed

- `<SidebarHeader/>` - change padding [#4359](https://github.com/wix/wix-style-react/pull/4359)
- `<Heading/>` - change `light` style for H6 [#4374](https://github.com/wix/wix-style-react/pull/4374)
- `<MessageBoxFunctionalLayout/>` - improve header & body design [#4373](https://github.com/wix/wix-style-react/pull/4373)

### Fixed

- `<SectionHelper/>` - fix margin without close button [#4360](https://github.com/wix/wix-style-react/pull/4360)
- `<InputArea/>` - fix error indicator leak inside testkit [#4363](https://github.com/wix/wix-style-react/pull/4363)

## 7.9.0 - 2019-10-21

### Added

- `<Card />` - Add types for component [#4303](https://github.com/wix/wix-style-react/pull/4303)
- `<Datepicker /> <Calendar />` - Add types for components [#4302](https://github.com/wix/wix-style-react/pull/4302)
- EllipsisHoc - universal hoc for components that need to shrink if prop ellipsis is given [#4340](https://github.com/wix/wix-style-react/pull/4340)

### Fixed

- `<DatePicker/>` - fix placeholder in firefox [#4322](https://github.com/wix/wix-style-react/pull/4322)

## 7.8.0 - 2019-10-16

### Added

- `<SegmentedToggle/>` - fix proptypes and add controlled mode [#4308](https://github.com/wix/wix-style-react/pull/4308)
- `<ComposerHeader/>` - add box shadow to bottom border [#4317](https://github.com/wix/wix-style-react/pull/4317)

## 7.7.0 - 2019-10-15

### Added

- `<Sidebar/>` - add right border [#4265](https://github.com/wix/wix-style-react/pull/4265)
- readd react-motion package to dependecies [#4255](https://github.com/wix/wix-style-react/pull/4255)
- `<RadioGroup/>` - New prop - Selection area [#4206](https://github.com/wix/wix-style-react/pull/4206)
- `<Tag/>` - Add ellipsis to long tags in a container [#4180](https://github.com/wix/wix-style-react/pull/4180)

### Changed

- `<SidebarHeader/>` - make `title` and `subtitle` optional [#4268](https://github.com/wix/wix-style-react/pull/4268)

### Deprecated

- `<Tag/>` - Remove `wrap` prop, wrap is now `true` by default [#4180](https://github.com/wix/wix-style-react/pull/4180)

## 7.6.1 - 2019-10-10

### Added

- `<MessageBoxFunctionalLayout/>` - add support for `margin` prop [#4230](https://github.com/wix/wix-style-react/pull/4230)

### Fixed

- `<CalendarPanel/>` - move e2e to .visual [#4219](https://github.com/wix/wix-style-react/pull/4219)
- `<PopoverMenu/>` - add maxheight support and set default value [#4235](https://github.com/wix/wix-style-react/pull/4235)
- `<FormField/>` - make sure that internal tooltip is unique enough [#4240](https://github.com/wix/wix-style-react/pull/4240)
- `<DropdownLayout/>` - fixed drivers to work with infinite scroll [#4239](https://github.com/wix/wix-style-react/pull/4239)
- `<Dropdownlayout/>` - fix keyboard navigation on infinite scroll [#4233](https://github.com/wix/wix-style-react/pull/4233)

## 7.6.0 - 2019-10-07

### Added

- `<Barchart />` - add onDescriptionInfoShown callback [#4178](https://github.com/wix/wix-style-react/pull/4178)
- `<BarChart />` - add typings [#4189](https://github.com/wix/wix-style-react/pull/4189)
- `<Divider/>` - create the component [#4204](https://github.com/wix/wix-style-react/pull/4204)
- `<Checkbox/>` - New prop - Selection area [#4201](https://github.com/wix/wix-style-react/pull/4201)
- `<Checkbox/>` - New prop - Vertical alignment [#4215](https://github.com/wix/wix-style-react/pull/4215)
- `<DropdownLayout/>` - add support for string based max and min width props [#4216](https://github.com/wix/wix-style-react/pull/4216)

### Fixed

- `<MessageBoxFunctionalLayout/>` - Align footer buttons to center [#4122](https://github.com/wix/wix-style-react/pull/4212)
- `<ComposerHeader/>` - set composerHeader to box-sizing: content-box [#4195](https://github.com/wix/wix-style-react/pull/4195)
- `<Barchart />` - fix labelShort when there is descriptionInfo [#4183](https://github.com/wix/wix-style-react/pull/4183)
- `<PopoverMenu/>` - remove autofocus feature to fix page jumping issues [#4186](https://github.com/wix/wix-style-react/pull/4186)
- `<DropdownBase/>` - fix testkit methods to search for the content with popovers methods [#4186](https://github.com/wix/wix-style-react/pull/4186)
- `<Accordion/>` - fix missing expand label when using icon [#4192](https://github.com/wix/wix-style-react/pull/4192)
- `<Sidebar/>` - prevent crashing when all `<Sidebar.Item/>` elements are disabled [#4214](https://github.com/wix/wix-style-react/pull/4214)

## 7.5.0 - 2019-10-02

### Added

- `<BarChart/>` - new component [#4092](https://github.com/wix/wix-style-react/pull/4092)
- `<ComposerHeader/>` - new component [#4107](https://github.com/wix/wix-style-react/pull/4107)

### Fixed

- `<DatePicker/>` - prop initialOpen should not work when disabled [#4174](https://github.com/wix/wix-style-react/pull/4174)
- `<Input/>` - Fixed inaccurate text mark [#4177](https://github.com/wix/wix-style-react/pull/4177)

### Changed

- `<Checkbox/>` - use new tooltip [#4170](https://github.com/wix/wix-style-react/pull/4170)

## 7.4.0 - 2019-09-26

### Added

- `<AddItem/>` - 2 new props: removeIcon and removePadding [#4166](https://github.com/wix/wix-style-react/pull/4166)
- `<MessageBoxMarketerialLayout/>` - add buttons padding removal prop [#4168](https://github.com/wix/wix-style-react/pull/4168)

### Docs

- `<DatePicker/>` - Added documentation [#4170](https://github.com/wix/wix-style-react/pull/4170)

## 7.3.2 - 2019-09-25

- Internal changes

## 7.3.1 - 2019-09-25

### Added

- `<CardGalleryItem />` - added prop `disabled` for primaryAction [#4160](https://github.com/wix/wix-style-react/pull/4160)
- `<ImageViewer/>` - show a `<Loader/>` and the previous image while an image is loading; do not render `<AddItem/>` behind the image since it's visible in the background of transparent images [#4099](https://github.com/wix/wix-style-react/pull/4099)

### Fixed

- `<FormField/>` - fix label color [#4158](https://github.com/wix/wix-style-react/pull/4158)

## 7.3.0 - 2019-09-24

### Added

- `<ImageViewer/>` - add a prop for render Remove Button [#4070](https://github.com/wix/wix-style-react/pull/4070)
- `<StatisticsWidget />` - add children support for stats [#4053](https://github.com/wix/wix-style-react/pull/4053)
- `<InputWithLabel/>` - create the component [#4051](https://github.com/wix/wix-style-react/pull/4051)

### Changed

- `<FormField/> <InfoIcon/>` - Add size prop [#4123](https://github.com/wix/wix-style-react/pull/4123)
- `<Input/>` - change disabled border and background colors [#4146](https://github.com/wix/wix-style-react/pull/4146)

### Fixed

- `<DropdownBase/>` - fix clickTargetElement method in testkit [#4152](https://github.com/wix/wix-style-react/pull/4152)
- `<Stepper/>` - Fix ellipsis problem with Safari [#4153](https://github.com/wix/wix-style-react/pull/4153)
- `<Tag/>` - remove redundant e2e when we have .visual already [#4139](https://github.com/wix/wix-style-react/pull/4139)
- `<ImageViewer/>` - fix removeRoundedBorders property. [#4131](https://github.com/wix/wix-style-react/issues/4131)
- `<FormField/>` - fix alignment when `size` is small [#4151](https://github.com/wix/wix-style-react/issues/4151)

### Docs

- `<Dropdown/>, <AutoComplete/>` - add overflow example [#4140](https://github.com/wix/wix-style-react/pull/4140)
- `<Breadcrumbs/>`- improving Breadcrumbs docs and adding visual tests [#4121](https://github.com/wix/wix-style-react/pull/4121/files)

## 7.2.0 - 2019-09-19

### Added

- `<Avatar/>` - add new colors [#4114](https://github.com/wix/wix-style-react/pull/4114)
- `<InputArea>` - added support for 'small' size [#4066](https://github.com/wix/wix-style-react/pull/4066)

### Changed

- `<Table/>` - improve `disabled` behavior [#4103](https://github.com/wix/wix-style-react/pull/4103)

### Deprecated

- `<Avatar/>` - deprecate old colors, you should use the new colors [#4114](https://github.com/wix/wix-style-react/pull/4114)

### Fixed

- `<ColorPicker/>` - add support for mobile dragging [#4102](https://github.com/wix/wix-style-react/pull/4102)

### Docs

- `<Modal/>`- improving Modal docs [#4104](https://github.com/wix/wix-style-react/pull/4104)

## 7.1.0 - 2019-09-18

### Added

- `<Swatches />` - new layout and add color button [#4079](https://github.com/wix/wix-style-react/pull/4079)

### Changed

- `<Fillpreview/>` - extract fillbutton functionality and refactor code [#4129](https://github.com/wix/wix-style-react/pull/4129)

## 7.0.0 - 2019-09-18

See [Migrating From v6 to v7](https://github.com/wix/wix-style-react/blob/master/docs/migration/v6-v7.md)

- `React` dev dependencies upgraded to v16. [#4106](https://github.com/wix/wix-style-react/pull/4106)
- `<RichTextArea/> <RichTextAreaComposite/>` - Removed, replaced by `<RichTextInputArea/>` [#4106](https://github.com/wix/wix-style-react/pull/4106)

---

For changelog of older version [see here](CHANGELOG-V3-V6.md)
