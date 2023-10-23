import Vue from 'vue'
import Router from 'vue-router'
import { generateUrl } from '@nextcloud/router'

import GroceryList from './views/GroceryList.vue'
import Settings from './components/Settings.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: generateUrl('apps/grocerylist'),
	linkActiveClass: 'active',
	routes: [
		{
			path: '/settings/:listId',
			name: 'settings',
			components: {
				default: Settings,
			},
			props: {
				default: true,
			},
		},
		{
			path: '/list/:listId',
			name: 'list',
			components: {
				default: GroceryList,
			},
			props: {
				// Get the property type right by parsing the string to number
				default: (route) => ({ listId: Number.parseInt(route.params.listId) }),
			},
		},
	],
})
