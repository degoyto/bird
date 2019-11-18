<template>
 <div>
    <vueHeadful title="Bird - Sobre"/>
    <Header></Header>
    <InfoSobre></InfoSobre>
    <RodapeSobre> </RodapeSobre>
 </div>
</template>

<script>
import InfoSobre from "../components/InfoSobre.vue"
import RodapeSobre from "../components/RodapeSobre.vue"
import Header from "../components/Header2.vue"
import vueHeadful from "vue-headful";

export default {
  name: 'sobre',
  components: {
   InfoSobre,
    RodapeSobre,
    Header,
    vueHeadful
  }
};
</script>