
<template>
    <section class="my-14 text-center md:text-left max-w-5xl m-auto formatted-text px-2">

  <h1 class="text-3xl text-center font-bold mb-4 whitespace-break-spaces">About</h1>

  <p class="mt-4">
    Thank you for visiting TextConverter.net!
  </p>

  <p class="mt-4">
    My name is ratHax, and I'm a Swiss software engineer with a master’s degree in computer science that loves to write web tools like this one in his free time. I am here to help you and answer any questions you may have.
  </p>


  <h1 class="text-h3">Get In Touch</h1>
  <p>Whether you have a question about this web app, need assistance, or are interested in its tech stack, i am ready to provide the support you need.</p>

  <h1 class="text-h3">Email Me Anytime: </h1>
  <p>You can reach me directly at rathaxdev@gmail.com. I strive to respond to all inquiries as swiftly as possible.</p>

  <h1 class="text-h3">Feedback</h1>
  <p>Your feedback is invaluable to me. If you have any suggestions on how this tool can be improved or have comments about your experience, please do not hesitate to contact me. I continually working to enhance This app and i really value your input!</p>


  <h1 class="text-h3">Stay Connected</h1>
  <p>Don’t forget to follow me on our social media channels to stay updated on new features, announcements, and more.
  </p>

<ul class="my-5">
  <li class="list-none"><a href="https://github.com/rathax" target="_blank">Github</a></li>
  <li><a href="https://x.com/godlikeplayer1"  target="_blank">X</a></li>
  <li><a href="https://www.reddit.com/user/godlikeplayer2"  target="_blank">Reddit</a></li>

  <li></li>

</ul>

  <p>I am looking forward to hear from you!
  </p>

</section>


</template>
    
    
<script setup lang="ts">
useSeoMeta({
  title: 'Text Converter | About us',
  ogTitle: 'Text Converter | About us',
  description: 'About us page for TextConverter.net',
  ogDescription: 'About us page for TextConverter.net',
  author: 'ratHax',
})
useHead({
  script: [{
    type: "application/ld+json", innerHTML: JSON.stringify([
         {
            "@context": "https://schema.org",
            "@type": ["Person", "Organization"],
            "@id": "https://textConverter.net/about",
            "name": "ratHax",
            "email": "rathaxdev@gmail.com",
            "image": {
               "@type": "ImageObject",
               "inLanguage": "en-US",
               "@id": "https://textConverter.net/#/schema/person/image/",
               "url": "https://generateuuid.net/rathax.jpg",
               "contentUrl": "https://generateuuid.net/rathax.jpg",
               "width": 435,
               "height": 843,
               "caption": "ratHax"
            },
            "logo": { "@id": "https://textConverter.net/#/schema/person/image/" },
            "sameAs": [
               "https://fontdownloader.org/about",
               "https://generateuuid.net/about",
               "https://textconverter.net/about",
               "https://x.com/godlikeplayer1",
               "https://www.reddit.com/user/godlikeplayer2",
               "https://github.com/rathax"
            ]
         }
      ])
  }],
  htmlAttrs: { lang: "en" },
})

</script>
    
<style></style>