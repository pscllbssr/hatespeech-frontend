<template>
    
</template>

<script>
export default {
    mounted: function(){
        const api_location = this.$site.themeConfig.api

        let formData = new FormData();
        formData.append('text', 'dummy');

        fetch(api_location, {
                    method: 'POST', 
                    body: formData                  
                })
    }
}
</script>
