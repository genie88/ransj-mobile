// Sync route definition
export default {
  icon: 'search',
  title: '搜索',
  exact: true,
  component: resolve => require(['./components/SearchView'], resolve)
}
