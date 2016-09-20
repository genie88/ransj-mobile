// Sync route definition
export default {
  icon: 'farmer',
  title: '农场模板',
  exact: true,
  component: resolve => require(['./components/FarmerView'], resolve)
}
