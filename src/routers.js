export default [{
  path: '/',
  name: 'home',
  component: require('./views/home/Index')
}, {
  path: '/category/:id',
  name: 'category',
  component: require('./views/category/Index')
}]

