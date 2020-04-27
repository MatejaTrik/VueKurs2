<template>
    <header>
        <div class="container clear">
             <div class="logo">
                <img :src="logoIcon">
             </div>
             <div class="nav">
                <img @click.prevent="showSidepanel = !showSidepanel" :src="menuIcon">
             </div>
             <md-drawer 
                class="md-right side-drawer"
                :md-active.sync="showSidepanel"
             />
        </div>
    </header>
</template>

<script>
    import Logo from '../../assets/images/logo.png'
    import Menu from '../../assets/images/menu.png'

    export default {
        data() {
            return{
                logoIcon: Logo,
                menuIcon: Menu,
                showSidepanel: false
            }
        }
    }
</script>