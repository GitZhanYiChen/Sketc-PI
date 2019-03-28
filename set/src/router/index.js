import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import VueResource from 'vue-resource' 
import register from '@/components/register'
import new_file from '@/components/new_file'
import Sketc  from '@/components/Sketc'
import guanzhu from '@/components/guanzhu'
import jielong from '@/components/jielong'
import gerenzhuye from '@/components/gerenzhuye'
import fensi from '@/components/fensi'
import dtai from '@/components/dtai'
import tzhi from '@/components/tzhi'
import sousuo from '@/components/sousuo'
import sy from '@/components/sy'


Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
      {
      path: '/register',
      name: 'register',
      component: register
    },
    {
    	path:'/',
    	component:new_file,
    },
      {
    	path:'/Sketc',
    	component:Sketc,
    },
    {
    	path:'/guanzhu',
    	component:guanzhu,
    },
     {
    	path:'/jielong',
    	component:jielong,
    },
    {
    	path:'/gerenzhuye',
    	component:gerenzhuye,
    },
    {
    		path:'/fensi',
    	component:fensi,
    },
	{
			path:'/dtai',
		component:dtai,
	},
	{
			path:'/tzhi',
		component:tzhi,
	},
	{
			path:'/sousuo',
		component:sousuo,
	},
	{
			path:'/sy',
		component:sy,
	}
  ]
})
