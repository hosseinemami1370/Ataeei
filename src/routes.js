import Ask from './components/menu/Ask'
import Comments from './components/menu/Comments'
import Jobs from './components/menu/Jobs'
import New from './components/menu/New'
import Past from './components/menu/Past'
import Show from './components/menu/Show'
import Submit from './components/menu/Submit'

export const routes=[
    { path: '/', component: New },
    { path: '/new', component: New },
    { path: '/ask', component: Ask },
    { path: '/jobs', component: Jobs },
    // { path: '/new', component: New },
    { path: '/past', component: Past },
    { path: '/show', component: Show },
    { path: '/submit', component: Submit },
    { path: '/comments', component: Comments },
]