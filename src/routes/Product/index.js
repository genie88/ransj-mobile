// Sync route definition
export default {
  icon: 'home',
  title: '产品详情',
  exact: true,
  component: resolve => require(['./components/ProductView'], resolve)
}
