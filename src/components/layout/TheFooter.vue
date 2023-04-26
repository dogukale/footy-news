<template>
  <footer class="w-full h-[40vh] bg-football bg-right-bottom">
    <article class="grid place-items-center h-full max-w-screen-xl mx-auto my-10">
      <section>
        <h2 class="text-white text-5xl text-center">Abonneer op onze nieuwsbrief!</h2>
        <div class="flex mt-10 w-full justify-center">
          <input type="text" class="bg-white text-gunmetal p-5 sm:w-full" placeholder="E-mailadres">
          <input type="submit" class="bg-verdigris text-white p-5 hover:cursor-pointer">
        </div>
      </section>
    </article>

    <article class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto py-10 px-10 sm:px-5">
      <section class="text-gunmetal mb-10">
        <h2 class="text-4xl font-bold mb-5">Wie zijn wij?</h2>
        <p class="mb-5 w-5/6">Footy News is de grootste voetbalnieuws van Nederland. Het laatste voetbalnieuws lees je op Footy News. Alles over voetbal, clubs, spelers en transfers!</p>
        <p>'Footy News</p>
      </section>
      <section class="text-gunmetal mb-10">
        <h2 class="text-4xl font-bold mb-5">Auteurs</h2>
        <ul>
          <li>De Telegraaf</li>
          <li>AD.nl</li>
          <li>Voetbalnieuws</li>
          <li>Voetbalprimeur</li>
          <li>FC update</li>
          <li>Soccer News</li>
          <li>Voetbal Headliner</li>
        </ul>
      </section>
      <section class="text-gunmetal mb-10">
        <h2 class="text-4xl font-bold mb-5">Top trending</h2>
        <ul>
          <li>De Telegraaf</li>
          <li>AD.nl</li>
          <li>Voetbalnieuws</li>
          <li>Voetbalprimeur</li>
          <li>FC update</li>
          <li>Soccer News</li>
          <li>Voetbal Headliner</li>
        </ul>
      </section>
      <section class="text-gunmetal mb-10 sm:w-5/6">
        <h2 class="text-4xl font-bold mb-5">Abonneer</h2>
        <h2 class="mb-10">Abonneer je op onze nieuwsbrief en wees de eerste die het nieuws leest!</h2>
        <div class="flex">
          <input type="text" class="border-solid border border-silver bg-white text-gunmetal p-3 w-full" placeholder="E-mailadres">
          <input type="submit" class="bg-verdigris text-white p-3 hover:cursor-pointer">
        </div>
      </section>
    </article>

    <section class="flex flex-col sm:flex-row text-center justify-between max-w-screen-xl mx-auto py-5 px-5">
      <p class="text-gunmetal">Algemene voorwaarden & Privacybeleid</p>
      <p class="text-gunmetal">© 2022 Footy News B.V. Alle rechten voorbehouden.</p>
    </section>
  </footer>
</template>

<style scoped>
footer > section {
  border-top: 1px solid #22333B;
}
</style>