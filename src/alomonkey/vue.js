const app = new Vue({
    router
}).$mount('#app')

const Foo = { template: `<div>foo</div>` }
const Bar = { template: '<div>bar</div>' }
const Rutas = {
    name: Rutas,
    template: `<div><div class="link" v-for="ruta in rutas" :key="ruta.id">
        <router-link :to="{ path: /ruta/1 }">
            Router Link {{ ruta.id }}</router-link>
    </div>
    <div class="boton" :style="{ backgroundColor: rutas[this.$route.params.id].color }">
        Hola desde ruta {{ rutas[this.$route.params.id].id }}
    </div></div>` }



const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    {
        path: '/rutas/:id',
        name: 'Rutas',
        component: Rutas
    },
]


const router = new VueRouter({
    routes
})


