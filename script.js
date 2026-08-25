
/* RAKSHA BANDHAN OPENING */
const rbOpening = document.getElementById("rbOpening");
const rbEnter = document.getElementById("rbEnter");
const mainExperience = document.getElementById("mainExperience");

if (rbOpening && mainExperience) {
  const particleBox = rbOpening.querySelector(".rb-particles");
  for(let i=0;i<32;i++){
    const p=document.createElement("i");
    p.className="rb-particle";
    p.style.left=Math.random()*100+"%";
    p.style.animationDelay=(Math.random()*4)+"s";
    p.style.animationDuration=(4+Math.random()*4)+"s";
    particleBox.appendChild(p);
  }

  rbEnter.addEventListener("click",()=>{
    rbOpening.classList.add("rb-exit");
    setTimeout(()=>{
      rbOpening.style.display="none";
      mainExperience.classList.remove("rb-main-hidden");
      mainExperience.classList.add("rb-main-show");
      createHearts(18);
    },850);
  });
}

/* STEP 1 + STEP 2 */
const noBtn=document.getElementById("noBtn"),yesBtn=document.getElementById("yesBtn");
const teasingSection=document.getElementById("teasingSection"),quizSection=document.getElementById("quizSection");
const message=document.getElementById("message");let attempts=0;
const messages=["Arey Motu, sach se bhaag kyun rahi ho? 😂","Nice try! 😭😂","Button bhi jaanta hai ki tum jhooth bol rahi ho! 🤣","Vaisu... give up kar do 😈","Itni mehnat NO dabane mein kyun? 😂","Ab toh Haan bolna hi padega! ❤️"];
function moveNoButton(){attempts++;message.textContent=messages[Math.min(attempts-1,messages.length-1)];
const maxX=Math.max(20,window.innerWidth-noBtn.offsetWidth-20),maxY=Math.max(20,window.innerHeight-noBtn.offsetHeight-20);
noBtn.style.position="fixed";noBtn.style.left=Math.random()*maxX+"px";noBtn.style.top=Math.random()*maxY+"px";}
noBtn.addEventListener("mouseenter",moveNoButton);noBtn.addEventListener("touchstart",e=>{e.preventDefault();moveNoButton();});
yesBtn.addEventListener("click",()=>{createHearts(25);teasingSection.classList.add("hidden");quizSection.classList.remove("hidden");startQuiz();});

const quizQuestions=[
{question:"Ghar mein kaam ki baat hote hi tumhe achanak neend kyun aane lagti hai? 😂",option1:"Main lazy nahi hoon 😇",option2:"Haan thodi si 😭",response1:"Hmmm... evidence kuch aur keh raha hai. 🤨😂",response2:"Finally! Sach bol diya Motu 😂❤️"},
{question:"Agar ghar ka kaam aur phone mein se ek choose karna ho... tum phone choose karogi na? 👀😂",option1:"Bilkul nahi 😇",option2:"Phone obviously 📱😂",response1:"Accha ji... itna bada jhooth? 😂",response2:"Mujhe pehle se pata tha! 📱😭"},
{question:"Kya tum mujhe pareshaan karne ka koi special course karti ho? 😂",option1:"Nahi 😇",option2:"Haan, daily practice hai 😈",response1:"Jhooth! Mere paas saare saboot hain. 🚨😂",response2:"At least tum honest toh ho! 😂❤️"}];
let currentQuestion=0;
const quizQuestion=document.getElementById("quizQuestion"),option1=document.getElementById("option1"),option2=document.getElementById("option2"),quizMessage=document.getElementById("quizMessage"),progress=document.getElementById("progress");
function startQuiz(){currentQuestion=0;showQuestion()}function showQuestion(){const q=quizQuestions[currentQuestion];quizQuestion.textContent=q.question;option1.textContent=q.option1;option2.textContent=q.option2;quizMessage.textContent="";progress.textContent=`Question ${currentQuestion+1} / ${quizQuestions.length}`}
function answerQuestion(answer){const q=quizQuestions[currentQuestion];quizMessage.textContent=answer===1?q.response1:q.response2;option1.disabled=true;option2.disabled=true;
setTimeout(()=>{currentQuestion++;if(currentQuestion<quizQuestions.length){option1.disabled=false;option2.disabled=false;showQuestion()}else{showQuizEnd()}},1800)}
option1.addEventListener("click",()=>answerQuestion(1));option2.addEventListener("click",()=>answerQuestion(2));

const quizEndSection=document.getElementById("quizEndSection"),photosBtn=document.getElementById("photosBtn");
function showQuizEnd(){quizSection.classList.add("hidden");quizEndSection.classList.remove("hidden")}
photosBtn.addEventListener("click",()=>{quizEndSection.classList.add("hidden");document.getElementById("funZone").classList.remove("hidden");});

/* STEP 3 MEMORY VAULT */
const memories=[
{title:"Little Vaisu ❤️",caption:"Proof that Motu has been cute since day one. Don't deny it. 😂❤️"},
{title:"Temple Bells 🔔",caption:"A peaceful little memory... with just enough Motu energy to make it special. 😇"},
{title:"Traditional Beauty 🌸",caption:"Okay fine... this look is actually really pretty. Don't get too proud. 😏"},
{title:"Green & Graceful 💚",caption:"Somehow you make even a simple moment look like a proper photoshoot. ❤️"},
{title:"Flower Field 🌼",caption:"Walking through a field of flowers like the main character. As expected. 😂"},
{title:"Snow Day ❄️",caption:"Cold hands, snowy mountains, and somehow still smiling. That's a keeper. ❤️"},
{title:"Tree Adventure 🌳",caption:"Proof that Motu can actually look innocent. 😂❤️"},
{title:"Caught Looking Back 👀",caption:"That little look says: 'Yes, I know I'm being photographed.' 😏"},
{title:"Cool Motu 😎",caption:"The sunglasses came out, so obviously the attitude had to come with them. 😂"},
{title:"And Then... ✨",caption:"Okay. No more teasing. This one is genuinely beautiful. ❤️"}];
let current=0;
const vaultIntro=document.getElementById("vaultIntro"),memorySection=document.getElementById("memorySection"),finalSection=document.getElementById("finalSection");
const memoryPhoto=document.getElementById("memoryPhoto"),memoryTitle=document.getElementById("memoryTitle"),memoryCaption=document.getElementById("memoryCaption"),memoryNo=document.getElementById("memoryNo"),counter=document.getElementById("counter"),nextBtn=document.getElementById("nextBtn");
function createHearts(count=20){for(let i=0;i<count;i++){const h=document.createElement("div");h.className="heart";h.textContent=Math.random()>.25?"❤️":"✨";h.style.left=Math.random()*100+"vw";h.style.fontSize=13+Math.random()*20+"px";h.style.animationDuration=2.5+Math.random()*2.5+"s";h.style.animationDelay=Math.random()*1.2+"s";document.body.appendChild(h);setTimeout(()=>h.remove(),6000)}}
function showMemory(){
  const m=memories[current];
  const frame=document.querySelector(".photo-frame");
  if(frame){
    frame.className="photo-frame memory-"+(current+1);
    void frame.offsetWidth;
    frame.className="photo-frame memory-"+(current+1);
  }
  memoryPhoto.src = `memory-${String(current+1).padStart(2,"0")}.jpg`;
  memoryTitle.textContent=m.title;
  memoryCaption.textContent=m.caption;
  memoryNo.textContent=`MEMORY ${String(current+1).padStart(2,"0")}`;
  counter.textContent=`${current+1} / 10`;
  nextBtn.textContent=current===8?"Reveal the Final Memory ✨":"Unlock Next ❤️";
}
document.getElementById("startVaultBtn").addEventListener("click",()=>{vaultIntro.classList.add("hidden");memorySection.classList.remove("hidden");current=0;showMemory();createHearts(30)});
nextBtn.addEventListener("click",()=>{
  createHearts(12);
  if(current<8){
    current++;
    showMemory();
  }else{
    memorySection.classList.add("hidden");
    finalSection.classList.remove("hidden");
    finalSection.classList.add("final-reveal-live");
    createHearts(40);
  }
});
document.getElementById("replayBtn").addEventListener("click",()=>{
  finalSection.classList.add("hidden");
  vaultIntro.classList.remove("hidden");
  createHearts(24);
});

document.getElementById("restartBtn").addEventListener("click",()=>{
  // Restart the entire experience from the Motu question.
  currentQuestion = 0;
  attempts = 0;
  noBtn.style.position = "relative";
  noBtn.style.left = "";
  noBtn.style.top = "";
  message.textContent = "";
  quizMessage.textContent = "";
  option1.disabled = false;
  option2.disabled = false;
  finalSection.classList.add("hidden");
  vaultIntro.classList.add("hidden");
  memorySection.classList.add("hidden");
  quizEndSection.classList.add("hidden");
  quizSection.classList.add("hidden");
  teasingSection.classList.remove("hidden");
  const gm = document.getElementById("gameModal");
  if (gm) gm.classList.add("hidden");
  createHearts(18);
});

/* SIMPLE, ROBUST FUN ZONE */
const funZone=document.getElementById("funZone");
const toVaultBtn=document.getElementById("toVaultBtn");
const gameModal=document.getElementById("gameModal");
const gameArea=document.getElementById("gameArea");
const gameTitle=document.getElementById("gameTitle");
const gameInstruction=document.getElementById("gameInstruction");
const gameScore=document.getElementById("gameScore");
const closeGame=document.getElementById("closeGame");
let funTimer=null;

if(toVaultBtn) toVaultBtn.onclick=()=>{
  if(funZone) funZone.classList.add("hidden");
  const vault=document.getElementById("vaultIntro");
  if(vault) vault.classList.remove("hidden");
};

if(closeGame) closeGame.onclick=()=>{
  clearInterval(funTimer);
  if(gameModal) gameModal.classList.add("hidden");
};

document.querySelectorAll(".fun-card").forEach(btn=>{
  btn.onclick=()=>startFunGame(btn.dataset.game);
});

function startFunGame(type){
  clearInterval(funTimer);
  gameModal.classList.remove("hidden");
  if(type==="heart") heartGame();
  else if(type==="tap") tapGame();
  else noGame();
}
function pos(el){
  el.style.left=Math.floor(Math.random()*82)+"%";
  el.style.top=Math.floor(Math.random()*75)+"%";
}
function finishFun(text){
  clearInterval(funTimer);
  gameArea.innerHTML='<div class="game-success">'+text+'<br><br>🏆 You win!</div>';
  gameScore.textContent="Bonus game complete ❤️";
}
function heartGame(){
  let s=0,t=15;
  gameTitle.textContent="❤️ Heart Catcher";
  gameInstruction.textContent="Catch 10 hearts!";
  gameScore.textContent="0 / 10";
  const spawn=()=>{
    gameArea.innerHTML="";
    const x=document.createElement("button");x.className="game-heart";x.textContent="❤️";pos(x);
    x.onclick=()=>{s++;if(s>=10)finishFun("You caught all the hearts! ❤️😂");else{gameScore.textContent=s+" / 10";spawn()}};
    gameArea.appendChild(x);
  };
  spawn();
  funTimer=setInterval(()=>{t--;if(t<=0){clearInterval(funTimer);gameArea.innerHTML='<div class="game-success">Time up! 😂<br>Try again.</div>'}},1000);
}
function tapGame(){
  let s=0;
  gameTitle.textContent="😂 Motu Tap";
  gameInstruction.textContent="Tap Motu 10 times!";
  gameScore.textContent="0 / 10";
  const spawn=()=>{
    gameArea.innerHTML="";
    const x=document.createElement("button");x.className="game-target";x.textContent="😂";pos(x);
    x.onclick=()=>{s++;if(s>=10)finishFun("Motu has officially been tapped. 😂❤️");else{gameScore.textContent=s+" / 10";spawn()}};
    gameArea.appendChild(x);
  };
  spawn();
}
function noGame(){
  let s=0,t=15;
  gameTitle.textContent="😈 Catch the NO";
  gameInstruction.textContent="Catch the NO button 5 times!";
  gameScore.textContent="0 / 5";
  const spawn=()=>{
    gameArea.innerHTML="";
    const x=document.createElement("button");x.className="game-no";x.textContent="NO 😈";pos(x);
    x.onclick=()=>{s++;if(s>=5)finishFun("You finally caught the NO! 😂");else{gameScore.textContent=s+" / 5";spawn()}};
    x.onmouseenter=()=>pos(x);
    gameArea.appendChild(x);
  };
  spawn();
  funTimer=setInterval(()=>{t--;if(t<=0){clearInterval(funTimer);gameArea.innerHTML='<div class="game-success">NO escaped again! 😂<br>Try again.</div>'}},1000);
}
