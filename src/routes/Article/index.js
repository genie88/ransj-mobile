// Sync route definition
export default {
  icon: 'article',
  title: '文章模板',
  exact: true,
  component: resolve => require(['./components/ArticleView'], resolve)
}
