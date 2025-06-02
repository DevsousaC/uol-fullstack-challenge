/* Generates a random hero from each team */
const jlHeroRandom = document.getElementById('jl-hero');
const avHeroRandom = document.getElementById('av-hero');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const jlRandomHero = getRandomNumber(1, 3); 
const avRandomHero = getRandomNumber(1, 3); 

if (jlHeroRandom) {
  jlHeroRandom.src = `./src/images/jl-hero-${jlRandomHero}.svg`;
}
if (avHeroRandom) {
  avHeroRandom.src = `./src/images/av-hero-${avRandomHero}.svg`;
}

/* overshadows the unselected team */
const teamRadios = document.querySelectorAll('input[name="selected_team"]');
teamRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.checked) {
      console.log(radio)
      if (radio.id === 'av-radio') {
        console.log(jlHeroRandom)
        jlHeroRandom.classList.add('grayscale');
        avHeroRandom.classList.remove('grayscale');
      } else if (radio.id === 'jl-radio') {
        avHeroRandom.classList.add('grayscale');
        jlHeroRandom.classList.remove('grayscale');
      }
    }
  });
});
