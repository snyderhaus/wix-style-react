export const dropdownLayoutDriverProxy = (
  drodpwnLayoutDummy,
  dropdownLayoutTestkit,
  popoverTestkit,
  inputTestkit,
) => {
  return {
    ...Object.keys(drodpwnLayoutDummy()).reduce((prev, current) => {
      return {
        ...prev,
        [current]: async args => {
          const isPopoverShown = await (
            await popoverTestkit()
          ).isContentElementExists();
          if (current === 'isShown' || current === 'exists') {
            return isPopoverShown;
          }

          if (current === 'getDropdown' || current === 'getDropdownItem') {
            return isPopoverShown
              ? (await dropdownLayoutTestkit())[current](args)
              : { isDisplayed: () => false };
          }

          !isPopoverShown && (await inputTestkit.click());

          return await (await dropdownLayoutTestkit())[current](args);
        },
      };
    }, {}),
  };
};
