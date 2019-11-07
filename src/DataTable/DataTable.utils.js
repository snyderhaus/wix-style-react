import shallowEqual from 'shallowequal';

export function virtualRowsAreEqual(prevProps, nextProps) {
  const {
    style: prevStyle,
    data: prevData,
    index: prevIndex,
    ...prevRest
  } = prevProps;
  const {
    style: nextStyle,
    data: nextData,
    index: nextIndex,
    ...nextRest
  } = nextProps;

  return (
    nextIndex === prevIndex &&
    shallowEqual(prevStyle, nextStyle) &&
    shallowEqual(prevData[prevIndex], nextData[nextIndex]) &&
    shallowEqual(prevRest, nextRest)
  );
}
