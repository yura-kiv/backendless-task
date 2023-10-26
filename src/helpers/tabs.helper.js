export const getSortedTabs = (tabs) => {
  const sortedTabs = tabs.sort((a, b) => a.order - b.order);
  return sortedTabs;
};
