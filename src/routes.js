import Ask from '../src/pages/Ask'
import Comments from '../src/pages/Comments'
import Jobs from '../src/pages/Jobs'
import New from '../src/pages/New'
import Past from '../src/pages/Past'
import Show from '../src/pages/Show'
import Submit from '../src/pages/Submit'

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