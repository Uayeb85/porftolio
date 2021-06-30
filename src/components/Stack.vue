<template>
    <div class="bg-indigo-600 pb-12" id="about">
      <div class="triangle"></div>
      <div class="pb-10">
        <h2 class="mt-20 md:pt-10  text-gray-100 font-extrabold text-3xl md:text-6xl about text-center">Stack</h2>
      </div>

      <div class="bg-indigo-400 rounded-lg overflow-hidden shadow-lg flex justify-around mb-5 md:ml-5 md:mr-5 pb-5 pt-5 items-center">
        <img class="iconos ml-3" src="../assets/hmtl5.png" alt="html">
        <img class="iconos ml-3" src="../assets/css.png" alt="css">
        <img class="iconos ml-3" src="../assets/js.png" alt="javascript">
      </div>

      <div class="bg-indigo-400 rounded-lg overflow-hidden shadow-lg flex justify-around mb-5 md:ml-5 md:mr-5 pb-5 pt-5 items-center">
        <img class="iconos ml-3" src="../assets/logo.png" alt="vue">
        <img class="iconos ml-3" src="../assets/nuxt.png" alt="nuxt">
        <img class="iconos ml-3" src="../assets/tailwind.png" alt="tailwind">
      </div>

      <div class="bg-indigo-400 rounded-lg overflow-hidden shadow-lg flex justify-around mb-5 md:ml-5 md:mr-5 pb-5 pt-5 items-center">
        <img class="iconos sm:ml-3 " src="../assets/firebase.png" alt="firebase">
        <img class="iconos ml-3" src="../assets/boot.png" alt="bootstrap">
        <img class="iconos ml-3" src="../assets/python.png" alt="python">
      </div>

    </div>



</template>

<script>
export default {
  name: 'About',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (min-width: 0px)  and (max-width: 768px) {
.triangle {
  position: relative;
  background: #FFFAF0;
  height: 10vh;
}

.triangle::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 50px 0 50px;
  border-color: #FFFAF0 transparent transparent transparent;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
}

.iconos{
  width: 75px;
}



}



@media only screen and (min-width: 769px)  and (max-width: 2900px) {


.iconos{
  width: 155px;
}

}




</style>
