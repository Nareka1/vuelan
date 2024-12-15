<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
// import Button from './components/Button.vue'

const navbarheight = ref('1em')

const scrollnav = () => {
  if (window.scrollY > 40) {
    navbarheight.value = '4rem'
  } else {
    navbarheight.value = '5rem'
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollnav)
})

onBeforeMount(() => {
  window.removeEventListener('scroll', scrollnav)
})

const scrolltotentang = () => {
  const tentang = document.getElementById('tentang')
  tentang.scrollIntoView({ behavior: 'smooth' })
  tentang.style.paddingTop = '80px'
}

const scrolltolayanan = () => {
  const layanan = document.getElementById('layanan')
  layanan.scrollIntoView({ behavior: 'smooth' })
  layanan.style.paddingTop = '80px'
}

const scrolltolanguage = () => {
  const language = document.getElementById('language')
  language.scrollIntoView({ behavior: 'smooth' })
  language.style.paddingTop = '80px'
}

const scrolltoskill = () => {
  const skill = document.getElementById('skill')
  skill.scrollIntoView({ behavior: 'smooth' })
  skill.style.paddingTop = '80px'
}
</script>

<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
  </head>
  <body>
    <!-- header -->
    <header class="inline">
      <nav
        :style="{ height: navbarheight }"
        class="flex justify-between sticky p-5 top-0 z-50 bg-indigo-600"
      >
        <div>
          <i class="fa-solid fa-ghost text-3xl"></i>
        </div>

        <ul class="flex gap-11 text-center text-dark-green cursor-pointer">
          <li class="hover:font-bold transition-all text-lg" @click="scrolltotentang">Tentang</li>
          <li class="hover:font-bold transition-all text-lg" @click="scrolltolayanan">Layanan</li>
          <li class="hover:font-bold transition-all text-lg" @click="scrolltolanguage">
            Languange
          </li>
          <li class="hover:font-bold transition-all text-lg" @click="scrolltoskill">Skill</li>
        </ul>
      </nav>
      <!-- header main -->
      <div class="flex justify-between items-center p-11 h-96">
        <div>
          <h1
            class="text-4xl font-bold text-indigo-400"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Halo aku Nareka
          </h1>
          <h3 class="text-2xl font-bold 0" data-aos="fade-right" data-aos-duration="1000">
            aku seorang developer
          </h3>
          <p data-aos="fade-right" data-aos-duration="1000">
            aku membuat web ini dengan framework vue dan tailwindcss
          </p>
        </div>

        <div>
          <img src="./assets/hambuh.png" alt="foto" width="60%" />
        </div>
      </div>
    </header>

    <main>
      <!-- about page -->
      <section id="tentang" class="flex mx-10 mt-20">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h3 class="text-lg font-bold capitalize">tentang aku</h3>
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates aliquam eligendi
            voluptatum, tempora cumque eaque est provident sint? Exercitationem, animi facere
            consequuntur ad ab dolor pariatur sequi provident et ut.
          </h1>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <h3 class="text-lg font-bold">Kontakku</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt excepturi a, numquam
            voluptatibus rerum itaque doloremque. Minima repellat dolor expedita, doloribus veniam
            tempore eligendi dolorum, quae ab sit, cupiditate vitae.
          </p>
        </div>
      </section>

      <!-- service page -->
      <section id="layanan">
        <div class="flex justify-center my-20">
          <h3 class="text-2xl font-bold" data-aos="fade-up" data-aos-duration="1000">
            Layanan yang aku berikan
          </h3>
        </div>

        <div class="flex gap-10 mx-10" data-aos="fade-up" data-aos-duration="1000">
          <div class="rounded-xl p-5 w-45 bg-slate-200 shadow-lg">
            <div></div>

            <div>
              <h1 class="text-slate-700 font-bold">web developer</h1>
              <p class="text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus nobis
                officiis corporis cupiditate nulla labore commodi iure vitae.
              </p>
            </div>
          </div>

          <div class="rounded-xl p-5 w-45 bg-slate-200 shadow-lg">
            <div></div>

            <div>
              <h1 class="text-slate-700 font-bold">web developer</h1>
              <p class="text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus nobis
                officiis corporis cupiditate nulla labore commodi iure vitae.
              </p>
            </div>
          </div>

          <div class="rounded-xl p-5 w-45 bg-slate-200 shadow-lg">
            <div></div>

            <div>
              <h1 class="text-slate-700 font-bold">web developer</h1>
              <p class="text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus nobis
                officiis corporis cupiditate nulla labore commodi iure vitae.
              </p>
            </div>
          </div>

          <div class="rounded-xl p-5 w-45 bg-slate-200 shadow-lg">
            <div></div>

            <div>
              <h1 class="text-slate-700 font-bold">web developer</h1>
              <p class="text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus nobis
                officiis corporis cupiditate nulla labore commodi iure vitae.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- languange page -->
      <section id="language" class="p-8 mt-10 bg-sky-900 text-slate-50">
        <div class="bg-white w-full h-1 rounded-sm justify-self-center"></div>
        <div class="justify-self-center my-20">
          <h1 class="text-4xl font-bold">Language</h1>
        </div>

        <div class="flex justify-evenly p-5 mx-10">
          <div
            class="p-3 rounded-lg h-24 border-green-300 border-2 text-center text-4xl w-40 fab fa-html5"
          >
            <h1 class="text-sm">HTML</h1>
          </div>

          <div
            class="p-3 rounded-lg h-24 border-green-300 border-2 text-center text-4xl w-40 fab fa-css3-alt"
          >
            <h1 class="text-sm">CSS</h1>
          </div>

          <div
            class="p-3 rounded-lg h-24 border-green-300 border-2 text-center text-4xl w-40 fab fa-js"
          >
            <h1 class="text-sm">JavaScript</h1>
          </div>

          <div
            class="p-3 rounded-lg h-24 border-green-300 border-2 text-center text-4xl w-40 fab fa-python"
          >
            <h1 class="text-sm">Python</h1>
          </div>
        </div>
      </section>

      <!-- education page -->
      <section id="skill">
        <header class="text-center my-10" data-aos="fade-up" data-aos-duration="1000">
          <h3 class="capitalize font-bold text-indigo-400 text-xl underline">
            skill dan pendidikan
          </h3>
          <h1 class="capitalize font-bold text-3xl">My Resume</h1>
        </header>

        <div
          class="max-w-lg mx-auto my-10 p-6 rounded-lg shadow-xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="border-l-4 mb-6 border-blue-500 pl-4 h-full relative">
            <div class="absolute left-0 -ml-2 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div class="relative">
              <p class="font-bold text-2xl">UI/UX designer</p>
              <p class="font-bold">Figma corp</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, et fugit impedit
                recusandae odit deleniti quibusdam voluptatibus voluptatum sequi, rem ex? Quis iure
                accusamus fugiat magnam repellendus, earum ipsam quasi.
              </p>
            </div>

            <div class="absolute top-44 left-0 -ml-2 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div class="relative mt-3">
              <p class="font-bold text-2xl">SMA</p>
              <p class="font-bold">SMA Gege 1</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, et fugit impedit
                recusandae odit deleniti quibusdam voluptatibus voluptatum sequi, rem ex? Quis iure
                accusamus fugiat magnam repellendus, earum ipsam quasi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-indigo-700 text-white py-10">
      <header class="flex justify-evenly">
        <div>
          <div>
            <h3 class="text-4xl font-bold mb-6">Mari kita bicarakan!</h3>
            <h1>Info Kontak</h1>
          </div>

          <div>
            <h3 class="text-2xl font-bold">Hubungi Saya</h3>
            <h1>wa : 08123456789</h1>
            <h1>email : <a href="mailto:info@gege.com">mailtoinfo@gege.com</a></h1>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold">Sosial Media</h3>
          <div class="">
            <div class="mb-5">
              <i class="fa-brands fa-instagram"></i>
              <h1>@hue</h1>
            </div>
            <div class="mb-5">
              <i class="fa-brands fa-facebook"></i>
              <h1>@hue</h1>
            </div>
            <div class="mb-5">
              <i class="fa-brands fa-linkedin"></i>
              <h1>@hue</h1>
            </div>
          </div>
        </div>
      </header>

      <div>
        <div class="text-center border-t-2 pt-10">
          <h1>&copy;copyright by: huek 2025</h1>
        </div>
      </div>
      <div>
        <h1 class="text-red-900">halo</h1>
      </div>
    </footer>
  </body>
</template>

<style scoped>
/* body{
  color:
} */

nav {
  transition: all 0.4s ease;
}

.card {
  padding: 1em;
  border: 2px solid black;
  border-radius: 1em;
}
</style>
