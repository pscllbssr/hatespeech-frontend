<template>
    <div class="section-element section-form">
        <h2>Hate Speech oder nicht?</h2>
        <div v-if="step == 1 && currentComment">
            <p class="quiz__comment">{{ currentComment.text }}</p>
            <div>
                <button @click="loadResult(true)" class="btn">Ja</button>
                <button @click="loadResult(false)" class="btn">Nein</button>
            </div>
        </div>
        <div v-if="step == 2">
            <p class="quiz__result">{{ result ? 'Richtig!' : 'Falsch!' }} Der Kommentar wurde als {{ currentComment.label ? 'Hate Speech' : 'neutral' }} eingestuft.</p>
            <div>
                <button @click="loadNewComment()" class="btn">&orarr; Nächster Kommentar</button>
            </div>
        </div>
        <div class="section-form__description sans-serif">
            Neuegierig wie die Technik dahinter funktioniert? Unter <router-link to="methodology.html">Methodik</router-link>
            findest du eine ausführliche Beschreibung des Vorgehens.
        </div>
    </div>
</template>
<script>

import comments from '../data/comments.json'

export default {
    data: function () {
    return {
      comments: comments,
      currentComment: null,
      step: 1,
      result: false
    }
  },
  mounted: function(){
      this.loadNewComment()
  },
  methods: {
      loadNewComment(){
          // generate random index
          const index = Math.floor(Math.random() * this.comments.length)

          // load comment and remove from array
          this.currentComment = this.comments[index]
          this.comments.splice(index, 1)

          this.step = 1
      },
      loadResult(answer){
          this.result = this.currentComment.label == answer
          this.step = 2
      }
  }

}
</script>

