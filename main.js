import './main.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';

const hmtl = `
<div id="page">
  <div>
    <header>
      <h1>Trey Moody</h1>
    </header>
  </div>
  <div class="box-for-two">
  <div id="bio">
    <h3>Trey Moody was born and raised in San Antonio, Texas. His first book, Thought That Nature (Sarabande Books,
      2014), won the Kathryn A. Morton Prize in Poetry. His writing has received support from the Academy of American
      Poets, Slope Editions, Texas State University, and the University of Nebraska-Lincoln, and his poems have been
      published in The Believer, Conduit, Ecotone, Gulf Coast, and West Branch. He teaches at Creighton University and
      lives with his daughter in Omaha, Nebraska.</h3>
    <pre>contact: treyemoody@yahoo.com</pre>
  </div>
  <div id="photo"><img src="images/trey-moody-photo.jpg" alt="Trey Moody author photo"></div>
</div>
</div>
`;

document.querySelector('#app').innerHTML = `
<div id="page">
  <div>
    <header>
      <h1>Trey Moody</h1>
    </header>
  </div>
  <div class="box-for-two">
  <div id="bio">
    <h3>Trey Moody was born and raised in San Antonio, Texas. His first book, Thought That Nature (Sarabande Books,
      2014), won the Kathryn A. Morton Prize in Poetry. His writing has received support from the Academy of American
      Poets, Slope Editions, Texas State University, and the University of Nebraska-Lincoln, and his poems have been
      published in The Believer, Conduit, Ecotone, Gulf Coast, and West Branch. He teaches at Creighton University and
      lives with his daughter in Omaha, Nebraska.</h3>
    <pre>contact: treyemoody@yahoo.com</pre>
  </div>
  <div id="photo"><img src="images/trey-moody-photo.jpg" alt="Trey Moody author photo"></div>
</div>
</div>
`;

function displayYear() {
  const yearEl = document.querySelector('#year');
  const year = new Date().getFullYear();
  yearEl.append(year);
}
document.body.onload = displayYear;

// setupCounter(document.querySelector('#counter'));
