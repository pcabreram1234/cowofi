
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'explorer', component: () => import('src/pages/ExploreSpaces.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/Auth/Login.vue') },
      { path: 'register', component: () => import('pages/Auth/Register.vue') },
    ]
  },
  {
    path: '/spaces',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'create', component: () => import('pages/Spaces/Create.vue') },
      { path: 'view/:spaceId', component: () => import('src/pages/Spaces/CompleteDetails.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
