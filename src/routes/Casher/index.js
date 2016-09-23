// Sync route definition
export default {
  icon: 'cart',
  title: '创建订单',
  exact: true,
  component: resolve => require(['./components/CasherView'], resolve)
}
