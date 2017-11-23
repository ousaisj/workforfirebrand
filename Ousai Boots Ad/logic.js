
// Reference to the creative's various properties and elements.
var creative = {};
var counter = 0;

/**
 * Called on the window load event.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

/**
 * Set up references to DOM elements.
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('main-container');
  creative.dom.exit = document.getElementById('exit');
  creative.dom.phase1 = document.getElementById('phase1');
  creative.dom.phase2 = document.getElementById('phase2');
  creative.dom.phase3 = document.getElementById('phase3');
  creative.dom.phase4 = document.getElementById('phase4');
  creative.dom.lockup = document.getElementById('lockup');
  creative.dom.terms = document.getElementById('terms');
  creative.dom.termsbtn = document.getElementById('terms-btn');

  creative.dom.terms.style.opacity = 1
  creative.dom.terms.onclick = function() { creative.dom.terms.style.display = 'none' }
  creative.dom.termsbtn.onclick = function() { creative.dom.terms.style.display = 'block'; }
}

/**
 * The Enabler is now initialized and any extra modules have been loaded.
 */
function init() {
  addListeners();
  // Polite loading
  if (Enabler.isVisible()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}



/**
 * Add appropriate listeners after the creative's DOM has been set up.
 */
function addListeners() {
  creative.dom.exit.addEventListener('click', exitClickHandler);
}

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.exit.style.display = "block";

  phase1();

}

function phase1() {
  creative.dom.phase1.style.opacity = 1;

  creative.dom.lockup.style.opacity = 0;

  setTimeout(function() { phase1b();  }, 4000)
}
function phase1b() {
  creative.dom.phase1.style.opacity = 0;

  setTimeout(function() { phase2(); }, 450)
}
function phase2() {
  
  creative.dom.phase2.style.opacity = 1;

  creative.dom.lockup.style.opacity = 1;

  setTimeout(function() { phase2b(); }, 4000)
}
function phase2b() {
  creative.dom.phase2.style.opacity = 0;
  creative.dom.lockup.style.opacity = 0;
  setTimeout(function() { phase3(); }, 450)
}
function phase3() {
  creative.dom.phase3.style.opacity = 1;

  setTimeout(function() { phase3b(); }, 4000)
}
function phase3b() {
  creative.dom.phase3.style.opacity = 0;

  setTimeout(function() { phase4(); }, 450)
}
function phase4() {
  creative.dom.phase4.style.opacity = 1;

  creative.dom.lockup.style.opacity = 1; 

  if (counter == 0) {
    setTimeout(function() { phase4b(); }, 4000)
    counter++;
  } else {
    //end
  }   
}
function phase4b() {
  creative.dom.phase4.style.opacity = 0;
  creative.dom.lockup.style.opacity = 0; 
  setTimeout(function() { phase1(); }, 450)
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function exitClickHandler() {
  Enabler.exit('BackgroundExit');
}

/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);