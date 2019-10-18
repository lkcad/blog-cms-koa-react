import Home from './routerTest/Home'
import Child from './routerTest/Child'
import GrandChild from './routerTest/GrandChild'
import Root from  './routerTest/Root'
const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/child/:id",
        component: Child,
        routes: [
          {
            path: "/child/:id/grand-child",
            component: GrandChild
          }
        ]
      }
    ]
  }
];

export default routes
