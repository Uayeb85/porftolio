<template>

    <div class="bg-gray-100 pt-5 " id="home"> 
      <div class="homemini">
          <h1 class="text-6xl font-bold text-center text-indigo-600">I <br> <span>Am</span> <br> <span>Uayeb</span> </h1>
          <h2 class="text-2xl pb-15 font-bold text-center text-indigo-600 ">Web Developer</h2>
          <div> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5A67D8" fill-opacity="1" d="M0,288L34.3,261.3C68.6,235,137,181,206,165.3C274.3,149,343,171,411,202.7C480,235,549,277,617,282.7C685.7,288,754,256,823,218.7C891.4,181,960,139,1029,112C1097.1,85,1166,75,1234,101.3C1302.9,128,1371,192,1406,224L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>

          </div>

      </div>
      <div class="homex "  >
        <div class="flex justify-center items-center flex-col intro">
              <h1 class="text-3xl sm:text-6xl font-bold text-center text-indigo-600">I am Uayeb</h1>
              <h2 class="text-1xl sm:text-3xl pb-15 font-bold text-center text-indigo-600">Web Developer</h2>
        </div>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#5A67D8" fill-opacity="1" d="M0,288L34.3,261.3C68.6,235,137,181,206,165.3C274.3,149,343,171,411,202.7C480,235,549,277,617,282.7C685.7,288,754,256,823,218.7C891.4,181,960,139,1029,112C1097.1,85,1166,75,1234,101.3C1302.9,128,1371,192,1406,224L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
      </div>

    </div>
     

</template>

<script>
export default {
  name: 'Intro',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (min-width: 0px)  and (max-width: 768px) {


.homex{
  display: none;
}

}

@media only screen and (min-width: 769px)  and (max-width: 2900px) {


  .homemini{
    display: none;
  }

  .intro{
    height: 50vh;
  }
}


</style>
