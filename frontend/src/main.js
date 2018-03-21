import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import pageContent from './Content.vue'

import board from './Board.vue'
import leftMenu from './components/LeftMenu.vue'
import statusList from './components/StatusList.vue'
import taskList from './components/TaskList.vue'
import contentList from './components/TaskContentList.vue'
import taskMenu from './components/TaskMenu.vue'
import newBoardMenu from './components/NewBoardMenu.vue'
import boardListMenu from './components/BoardListMenu.vue'
import newStatusMenu from './components/NewStatusMenu.vue'
import newTaskMenu from './components/NewTaskMenu.vue'

Vue.component('board', board);
Vue.component('leftMenu', leftMenu);
Vue.component('statusList', statusList);
Vue.component('taskList', taskList);
Vue.component('contentList', contentList);
Vue.component('taskMenu', taskMenu);
Vue.component('newBoardMenu', newBoardMenu);
Vue.component('boardListMenu', boardListMenu);
Vue.component('newStatusMenu', newStatusMenu);
Vue.component('newTaskMenu', newTaskMenu);
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#content',
    router,
    render: h => h(pageContent)
})