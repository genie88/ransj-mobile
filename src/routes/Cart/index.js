// Sync route definition
export default {
  icon: 'cart',
  title: '购物车',
  exact: true,
  component: resolve => require(['./components/CartView'], resolve)
}
