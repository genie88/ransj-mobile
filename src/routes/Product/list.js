// Sync route definition
export default {
  icon: 'home',
  title: '产品列表',
  exact: true,
  component: resolve => require(['./components/ProductListView'], resolve)
}
