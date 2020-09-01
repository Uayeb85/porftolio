<template>
    <div class="bg-gray-100 " id="work">
        <div class="pt-12">
          <h2 class="md:pt-10  text-indigo-600 font-extrabold text-3xl md:text-6xl about text-center">Work</h2>
        </div>

      <div class="work md:flex md:justify-around mt-12">
        <div class="max-w-sm rounded overflow-hidden shadow-lg pb-10">
        <a href="https://grupokho.com/"> 
          <img class="w-full" src="../assets/iamuayeb-kho.png" alt="Sunset in the mountains">
            <div class="px-6 py-4">
              <div class=" text-indigo-600 font-bold text-2xl mb-2 text-center md:text-left">KOH Agency</div>
                <p class="text-indigo-500 text-base text-center md:text-left">
                 Digital Marketing Agency
                </p>
              </div> 
          </a> 
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg pb-10">
          <a href="http://regucom.com.mx/"> 
            <img class="w-full" src="../assets/iamuayeb-regucom.jpg" alt="Sunset in the mountains">
              <div class="px-6 py-4">
                <div class=" text-indigo-600 font-bold text-2xl mb-2 text-center md:text-left">REGUCOM</div>
                  <p class="text-indigo-500 text-base text-center md:text-left">
                  Telecom Provider
                  </p>
                </div> 
          </a> 
          </div>

           <div class="max-w-sm rounded overflow-hidden shadow-lg pb-10">
          <a href="http://psico-media.com//"> 
            <img class="w-full" src="../assets/iamuayeb-psicomedia.jpg" alt="Sunset in the mountains">
              <div class="px-6 py-4">
                <div class=" text-indigo-600 font-bold text-2xl mb-2 text-center md:text-left">Psico-media</div>
                  <p class="text-indigo-500 text-base text-center md:text-left">
                   Coach and Mindfulness Instructor
                  </p>
                </div> 
          </a> 
          </div>
    
      </div>

      <div class="work md:flex md:justify-around mt-10 pb-12">
        <div class="max-w-sm rounded overflow-hidden shadow-lg pb-10">
        <a href="http://www.grupotvcable.com.mx/"> 
          <img class="w-full" src="../assets/iamuayeb-tvcable.jpg" alt="Sunset in the mountains">
            <div class="px-6 py-4">
              <div class=" text-indigo-600 font-bold text-2xl mb-2 text-center md:text-left">Grupo TVCable</div>
                <p class="text-indigo-500 text-base text-center md:text-left">
                 CATV and regional ISP
                </p>
              </div> 
          </a> 
          </div>
    
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




a{
 text-decoration: none;
}

.margen{
  margin-top: 20px;
}

.work{
  display: flex;
  flex-direction: column;
  align-items: center;
}

}



@media only screen and (min-width: 769px)  and (max-width: 2900px) {



}




</style>
