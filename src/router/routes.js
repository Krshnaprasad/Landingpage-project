
const routes = [
  {
    path: '/',
    component: () => import('layouts/HeadFoot.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') }
    ]
  },

 
]

export default routes
