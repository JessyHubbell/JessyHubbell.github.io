document.addEventListener("DOMContentLoaded", function () {
  const panelContent = {
    sponsors: `
      <h2>Sponsors</h2>
      <div id="sponsor-accordion" class="accordion-menu">
        <div class="accordion-item">
          <button class="accordion-toggle">Tagatha</button>
          <div class="accordion-content">
            <p>The Acid Pools of Tagatha is a brutalist spa retreat where serenity and suffering go hand in hand. Offering violently invigorating treatments, perilous yoga, and caustic relaxation, it's where tension melts, sometimes along with your skin. Guided by sadistic sages and bound by ironclad waivers, it's the ultimate escape... for those who survive.</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-toggle">Rizzo</button>
          <div class="accordion-content">
            <p>Rizzos’ is your ever-changing, interdimensional marketplace, run by the unpredictable and charismatic Rizzo himself. Whether it's the mysterious Bag of Bakkaw or a shelf of bizarre wonders you didn't know you needed, every visit offers a new surprise. From meat to magic, feathers to fortune, Rizzos’ is where curiosity meets cosmic retail.</p>    
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-toggle">Break A Leg</button>
          <div class="accordion-content">
            <p>Coming Soon</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-toggle">Archibald Cares</button>
          <div class="accordion-content">
            <p>He doesn't, but we wrote this section anyway.</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-toggle">TittleTattle</button>
          <div class="accordion-content">
            <p>Coming Soon</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-toggle">I.R.C.</button>
          <div class="accordion-content">
            <p>Coming Soon</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-toggle">Caprine Curios</button>
          <div class="accordion-content">
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
    `,
    segments: `
      <h2>Segments</h2>
  <div id="sponsor-accordion" class="accordion-menu">
    <div class="accordion-item">
      <button class="accordion-toggle">M.L.H.</button>
      <div class="accordion-content">
        <p>Magical Life Hacks: Revealing the dark arts of everyday efficiency because why do something the boring way when a little necromancy or mild soul leeching will do? These tips slice through life’s problems with brutal precision and just enough chaos to keep you guessing if you will survive the lesson. Efficiency has never been this dangerously entertaining</p>
      </div>
    </div>
    <div class="accordion-item">
      <button class="accordion-toggle">ABC</button>
      <div class="accordion-content">
        <p>The Arcane Broadcasting Coalition delivers breaking news, magical mishaps, and realm-shaking updates from every corner of Illadia. Whether it's political prophecy, dragon sightings, or a wizard duel gone wrong, if it's happening, you’ll hear it here first.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button class="accordion-toggle">Cooking With Reggie</button>
      <div class="accordion-content">
        <p>Culinary chaos comes to the realm of Illadia, where measurements are vague, ingredients may scream, and  every simmer hides a secret spell. Reggie seduces flavors from the wildest elements, crafting dishes that tease the senses and tempt the brave. Step into his kitchen if you dare—temptation is always on the menu.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button class="accordion-toggle">Meet your Conqueror</button>
      <div class="accordion-content">
        <p>Your first and possibly last chance to size up the realm’s most ruthless overlords. Expect charm, threats, and a healthy dose of chaos as these conquerors reveal what it really takes to rule Illadia. Approach with caution since some introductions come with hidden agendas and a side of destruction.</p>
      </div>
    </div>
  </div>
    `,
    store: `
      <h2>Arcane Quandaries Store</h2>
      <p><em>Coming Soon.</em> Dust off your coin purse and stay tuned...</p>
    `,
    listen: `
  <h2>Listen to Arcane Quandaries</h2>
  <p>Check out our latest episodes on your favorite platform:</p>
  <ul>
    <li><a href="https://open.spotify.com/show/0zFCMVhVlpyykIwCMQckoj?si=d5c2d900d2f64ca2" target="_blank" rel="noopener noreferrer">Spotify</a></li>
    <li><a href="https://iheart.com/podcast/285999452/" target="_blank" rel="noopener noreferrer">iHeart</a></li>
  </ul>
`,
      contact: `
        <section class="hero" id="hero">
              <h2 class="hero_header">Arcane Quandaries <span class="light">For Archibald </span></h2>
              <br>
              <br>
                <center><form action="https://public.herotofu.com/v1/d8742f00-a8f9-11ee-ae0b-a7e011fe96d3" method="post" accept-charset="UTF-8">
                  <div>
                    <label for="name">Your Name:</label>
                    <input style="width:200px;" name="Name" id="name" type="text" required />
                  </div>
                    <br>
                  <div>
                    <label for="email">Your Email:</label>
                    <input style="width:200px;" name="Email" id="email" type="email" required  />
                  </div>
                    <br>
                    <div>
                    <label for="Question">Quandary:</label>
                     <textarea id="Question" name="Question" style="width:500px; height:150px;" required></textarea>
                  </div>
                    <br>
                  <div>
                    <input type="submit" value="Submit" />
                    <div style="text-indent:-99999px; white-space:nowrap; overflow:hidden; position:absolute;" aria-hidden="true">
                      <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
                    </div>
                  </div>
                    </form></center>
            </section>
    `, 
      credits: `<h2>Cast and Credits</h2>
<div id="sponsor-accordion" class="accordion-menu">
    <div class="accordion-item">
      <button class="accordion-toggle">Archibald</button>
      <div class="accordion-content">
            <p> Voiced by Fargrim Hearthammer</p>
            <p><strong>Arrogant & Dramatic: </strong>Archibald is supremely confident in his actions, believing that every choice he makes is the right one, no matter the consequences. He’s convinced that he has control over the chaos he’s unleashed, even though it's clear that it’s spiraling out of his grasp. This reflects his dramatic flair, as he views himself as the ultimate force of power.
            <br>
            <br>
            <strong>Obsessed with Power: </strong> His obsession with domination and control is evident in every verse. Even when things go wrong, he doesn’t see his own failure—he still thinks he can reign supreme, even over the beast he has unleashed. His arrogance drives him to take responsibility for everything, even when it's clear that he's not fully in control.
            <br>
            <br>
            <strong>Blunt & Vulgar: </strong> Archibald’s language is unrefined and filled with expletives. He curses freely and often, emphasizing his brutal and raw nature. This gives him a sense of being unapologetically rough around the edges.
            <br>
            <br>
            <strong>No Remorse: </strong> He shows no sign of regret or second-guessing. There’s no hesitation, no questioning his actions. Even as the world burns around him, Archibald stands firm in his belief that he’s doing the right thing, no matter the cost.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button class="accordion-toggle">Reggie</button>
      <div class="accordion-content">
            <p> Voiced by Fargrim Hearthammer</p>
            <p><strong>Shapeshifter: </strong> Reggie is a shapeshifter who changes races every time he dies or simply feels like it. Currently, he is a dragonborn, but he was previously a tiefling. His fluidity in form is matched by his adaptability in personality and behavior.
            <br>
            <br>
            <strong>Sexual Deviant: </strong> Reggie has a significant number of people he's slept with. His sexual behavior is far from conventional, and he embraces a hedonistic, no-strings-attached approach to intimacy. He has little regard for societal expectations when it comes to his romantic or sexual life.
            <br>
            <br>
            <strong>Almost as Old as Archibald: </strong> Reggie is nearly as old as Archibald, having seen much of the world’s history unfold alongside his companion. Their bond is long-standing, though it is more of a reluctant friendship than anything affectionate.
            <br>
            <br>
            <strong>Pragmatic & Sarcastic: </strong> Reggie is pragmatic and realistic, offering sarcastic commentary on the chaos around him. His sarcasm cuts through Archibald’s grandiose delusions, giving him a grounded perspective on events. Reggie is not easily impressed and tends to find humor in the absurdity of situations.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button class="accordion-toggle">Ursilla Wainsworth Underhill</button>
      <div class="accordion-content">
            <p>Voiced by Kattski</p>
            <p><strong>Info: </strong> better known as Uwu, is Archibald’s accountant, responsible for managing his vast wealth and ensuring financial stability. While Archibald is consumed by power and world domination, she remains fixated on the bottom line. If he neglects financial matters, she takes control, making sure everything is accounted for and profitable.
            <br><br>
            <strong>Personality: </strong> Ursilla is loud, brash, and completely unafraid to make herself heard. Despite her small size, she dominates conversations with sheer force of will. She has no patience for nonsense, refuses to be intimidated, and is unimpressed by power or grandiosity. Unlike others who fear Archibald, she treats him like a reckless fool who constantly needs supervision.
            <br><br>
            <strong>Relationship with Archibald: </strong> Ursilla is perpetually frustrated with Archibald’s disregard for financial planning. His dramatic, impulsive decisions often conflict with her practical mindset, leading to frequent shouting matches. However, she understands that he won’t handle things himself, so she steps in to take control whenever necessary. She doesn’t ask for permission—she just does what needs to be done.
            <br><br>
            <strong>Work Ethic & Motivation: </strong> Ursilla is fiercely business-minded, always looking for ways to increase profits and cut unnecessary expenses. She has no ethical concerns when it comes to making money—taxation, investments, or outright extortion are all valid strategies in her eyes. To her, financial security is the true foundation of power, and she refuses to let Archibald’s theatrics ruin it.
            <br><br>
            <strong>Behavior & Interaction Style: </strong> Ursilla is direct, blunt, and utterly unapologetic. She doesn’t sugarcoat her words and often resorts to yelling to get her point across. While she constantly argues with Archibald, she remains indispensable—without her, his empire would likely collapse under its own excess. She doesn’t try to change him or rein him in; she simply ensures that, no matter how chaotic things become, the finances remain in check.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button class="accordion-toggle">Jeffery</button>
      <div class="accordion-content">
              <p>Voiced by Dick P.I.</p>
            <p> here is Jeffery section, IDK what to put here</p>
      </div>
    </div>
    <div class="accordion-item">
      <button class="accordion-toggle">Producer</button>
      <div class="accordion-content">
            <p>Voiced by Arsenik The Ripper</p>
            <p><strong>Name: </strong>CAW...
            <br><br>
            <strong>Position:</strong>Caw, Caw, Caw
            <br><br>
            <strong>Background:</strong>CAAAAAAWWWW</p>
      </div>
    </div>
  </div>
    `,
      
  };

  const clickSound = document.getElementById('click-sound');

  document.querySelectorAll('.magic-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Play click sound
      clickSound.currentTime = 0;
      clickSound.play();

      const panelId = link.getAttribute('data-panel');
      const content = panelContent[panelId];

      if (content) {
        openMobileMagicPanel(content, link);
        setupAccordion(); // Initialize accordion for newly injected content
      }
    });
  });

  // Accordion setup function
  function setupAccordion() {
    const accordion = document.getElementById('sponsor-accordion');
    if (!accordion) return; // If no accordion, skip

    const toggles = accordion.querySelectorAll('.accordion-toggle');

    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        // Close other open accordion items
        toggles.forEach(t => {
          if (t !== toggle) {
            t.classList.remove('active');
            t.nextElementSibling.style.maxHeight = null;
          }
        });

        // Toggle clicked item
        toggle.classList.toggle('active');
        const content = toggle.nextElementSibling;
        if (toggle.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  }
});
