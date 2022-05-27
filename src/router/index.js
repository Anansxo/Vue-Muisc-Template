import VueRouter from 'vue-router'

import SongSeet from '../pages/SongSeet/index.vue'
import Main from '../components/CommonMain.vue'
import NewMuisic from '../pages/NewMusic/index.vue'
export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path:'/',
			redirect:'/main'
		},
		{
			path: '/main',
			name: 'main',
			component: Main,
		},
		{
			path: '/songseet',
			name: 'songseet',
			component: SongSeet
		},
		{
			path:'/newMuisic',
			name:'newMuisic',
			component: NewMuisic
		}
	]
})