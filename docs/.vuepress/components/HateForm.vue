<template>
    <div class="section_element section-form">
        <h2>Teste den Hate Speech Classifier</h2>
        <div v-if="loading" class="loading">
            <p>loading...</p>
        </div>
        <div v-if="!result">
            <form @submit.prevent="submit">
                <textarea rows="4" 
                    placeholder="Lass deinem Hass freien Lauf..." 
                    v-model="text"
                    required="required"
                    ref="comment"/>
                <input type="submit" class="btn">
            </form>
        </div>
        <div v-if="result" class="hate-result">            
            <div>
                <h3>Hass-Barometer</h3>
                <vue-easy-pie-chart 
                    :percent="result.prob[1] * 100"
                    :line-width="5"
                    :bar-color="primary_color"
                    :size="200"></vue-easy-pie-chart>
            </div>
            <div>
                <h3>&nbsp;</h3>
                <p>
                    <small>Der Computer sagt:</small><br>
                    <span v-if="result.bin" class="danger">Hate Speech!</span>
                    <span v-else>Kein Hate Speech</span>
                    <br>
                    <small>Deine Eingabe</small><br>
                    {{ result.text }}<br>
                    <small>Normalisierter Text</small><br>
                    {{ result.text_cleaned }}
                </p>
                <p>
                    <button @click.prevent="reset()" class="btn">&larr; nochmal probieren</button>
                </p>
            </div>
        </div>
    </div>
</template>
<script>

import { API_LOCATION } from "../config"
import VueEasyPieChart from 'vue-easy-pie-chart'
import 'vue-easy-pie-chart/dist/vue-easy-pie-chart.css'

export default {
    data() {
        return { 
            text: '', 
            model: 'v3_rf',
            result: false,
            loading: false,
            primary_color: '#f41839'
        }
    },
    components:{ VueEasyPieChart },
    methods: {
        submit(){
                this.result = false;
                this.loading = true;

                let formData = new FormData();
                formData.append('model', this.model);
                formData.append('text', this.text);
                
                fetch(API_LOCATION, {
                    method: 'POST', 
                    body: formData                  
                }).then( response => {                                    
                    this.loading = false;
                    return response.json();    
                }).then( 
                    myJson => {
                        this.result = myJson;
                }).catch( error => {                                    
                    this.loading = false;
                    alert(error);
                });
        }, 
        reset(){
            this.result = false
            this.text = ""
            this.$nextTick(() => this.$refs.comment.focus())
        }

    }
}
</script>
<style lang="stylus">


</style>


