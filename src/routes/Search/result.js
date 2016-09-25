// Sync route definition
export default {
  icon: 'search',
  title: '搜索结果',
  exact: true,
  component: resolve => require(['./components/SearchResultView'], resolve)
}
