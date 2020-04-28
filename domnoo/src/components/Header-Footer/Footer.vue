<template>
    <footer>
        <div class="container">
            <div>
                <img :src="logoIcon"/>
                <div class="contact">
                    <div>Vizo </div>
                    <div>011 pizza 22</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import Logo from '../../assets/images/logo.png';

    export default {
        data(){
            return {
                logoIcon: Logo 
            }
        }
    }

</script>
