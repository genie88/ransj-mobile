// Sync route definition
export default {
  icon: 'cart',
  title: '付款',
  exact: true,
  component: resolve => require(['./components/CasherPayView'], resolve)
}
