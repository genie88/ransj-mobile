// Sync route definition
export default {
  icon: 'home',
  title: '产品组合',
  exact: true,
  component: resolve => require(['./components/ProductGroupView'], resolve)
}
