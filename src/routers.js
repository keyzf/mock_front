export default [{
  path: '/',
  name: 'home',
  component: require('./views/home/index')
}, {
  path: '/category/:id',
  name: 'category',
  component: require('./views/category/index')
}]

