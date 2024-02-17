// FEDCHAIRSIM v5.0 - 21/12/2023

let GDP = 50000
let previous_GDP = 50000
  let debt = 12000
  let inflationRate = 3
  let currentInflation;
  let QE = 0
  let interestRate, realInterestRate, workingInterestRate;
  let previous_GDPValue = 50000
  let previous_debt = 12000
  let previous_capitalinvestmentindex = 100
  let previous_velocity = 4
  let previous_inflation = 3
  let gameOver = false
  let gameWin = false
  let ecoInterval, countInterval, noiseInterval;
  let counter = 1460
  let reperations = 300
  let inflationArray = [
  0,
  0,
  0
];
  let reputation = 50
  let velocity = 4
  let newsInterrupt = false
  let urgentBulliten = false
  let reputationInterval = 60
  let isPaused = false

  let capinvestmentindex = 100
  let manipulateCPICost = 20;
  let rigCPICost = 30;
  let expertAdviceCost = 15;
  let CPIRigFactor = 1;
  let removeDeflationLowerBoundCost = 100;

  let inflationRateLowerBound = 0
  let inflationRateUpperBound = 3

  let blackMailCounter = 15
  let baseToken = 0
  let debtTarget = 0

  let politicalEvent = false
  
let indicator = 10

let strategicReservesAvailable = true

let gameSpeed = 2500
let prevGameSpeed = 2500
let activateToast = true

let soundMoney = false
let winMessage = ``
let hallOfFameForm = ``

let economicAdvisorPic = document.querySelector("#economicadvisorpic");


document.body.style.backgroundImage = 'url("background-bad.png")';

document.querySelector("#pausebutton").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
    </svg>`;



$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


disasterEngine();
gdpChart();




function gdpChart(){
var lastDate = 0;
var data = [];

function getDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  while (i < count) {
    var x = baseval;
    var y =
      5

    data.push({
      x,
      y
    });
    lastDate = baseval;
    baseval += 86400000;
    i++;
  }
}

getDayWiseTimeSeries(new Date("01 Jan 2025 GMT").getTime(), 10, {
  min: 10,
  max: 900
});

function getNewSeries(baseval, yrange) {
  var newDate = baseval + 345600000;
  lastDate = newDate;
  data.push({
    x: newDate,
    y: GDP
    
  });
}

function resetData() {
  data = data.slice(data.length - 10, data.length);
}

new Vue({
  el: "#chart",
  components: {
    apexchart: VueApexCharts
  },
  data: {
    series: [
      {
        data: data.slice()
      }
    ],
    chartOptions: {
      logarithmic: true,
      colors:['#0D182C'],
      tooltip: {
        enabled: false},
      

      chart: {
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 8000
          }
          
        },
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
        
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },

      title: {
        align: "left"
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime",
        range: 3888000000
      },
      yaxis: {
        
        
        
      },
      legend: {
        show: false
      }
    }
  },
  mounted: function() {
    this.intervals();
  },
  methods: {
    intervals: function() {
      var me = this;
      window.setInterval(function() {
        getNewSeries(lastDate, {
          min: 10,
          max: 90
        });

        me.$refs.realtimeChart.updateSeries([
          {
            data: data
          }
        ]);
      }, 8000);

      
    }
  }
});
}







//Below runs the inflation gauge
setInterval(function() {
  var newVal = indicator;
  indicator=inflationRate*12
  if (indicator<0){
    indicator=0
  }
  if (indicator>184){
    indicator=184
  }
  
  $('.gauge--3 .semi-circle--mask').attr({
    style: '-webkit-transform: rotate(' + newVal + 'deg);' +
    '-moz-transform: rotate(' + newVal + 'deg);' +
    'transform: rotate(' + newVal + 'deg);'
   });				
}, 1000);







var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});
document.onreadystatechange = function () {
  myModal.show();
};


function economyEngine () {

  
  
  ecoInterval = setInterval(() => {

    if (isPaused == false){

  if (soundMoney == false) {

  interestRate = document.querySelector("#interestRate").value-7.6;
  realInterestRate = interestRate+7.6
  velocity -= debt/400000 //high debt lowers GDP
  
  

  debt-=interestRate*45 //high interest rate lowers debt

  debt+=debt/(interestRate*85) //lower interest rates make servicing debt cheaper

  if (debt > 0) {document.querySelector("#debt").innerHTML = `Currency: <b>$${Math.floor(debt)}</b> per cap`;}
        else {document.querySelector("#debt").innerHTML = `Currency: <b>???</b> per cap`;}
    document.querySelector("#debt").style.color = "#F00015";

    document.querySelector("#CPITargetDisplay").innerHTML = `CPI target is between ${inflationRateLowerBound}% and ${inflationRateUpperBound}%`

    if (reputation >= 0){document.querySelector("#callinfavours").disabled = false;}
    else {document.querySelector("#callinfavours").disabled = true;}

  }




  
  let workingInterestRate = interestRate-7.5;
  velocity-=workingInterestRate/75 //low interest rate juices GDP
  
  if (GDP > 0){document.querySelector("#GDP").innerHTML = `<b>$${Math.floor(GDP)}</b>`}
    else if (GDP < 0) {document.querySelector("#GDP").innerHTML = `<b>???</b>`}

    if (GDP > 0 && GDP < 40000) {document.querySelector("#GDP").style.color = "#F00015";}
        else {document.querySelector("#GDP").style.color = "#0D182C";} 

  GDP=velocity*debt
  
    
    
      
    
  document.querySelector("#inflation").innerHTML = ` <b>${Math.round(inflationRate)}%</b>`
  
      if (inflationRate > inflationRateLowerBound && inflationRate < inflationRateUpperBound){
              document.querySelector("#inflation").style.color = "#0D182B";
      }
      else {
      document.querySelector("#inflation").style.color = "#F00015";}

  
      


  
  velocity-=inflationRate/100 //high inflation hampers GDP
 
    
  document.querySelector("#velocity").innerHTML = `Velocity: <b>${Math.round(velocity * 100) / 100}</b>`;
  document.querySelector("#velocity").style.color = "DarkMagenta";

  if (previous_debt > debt) {
      if (debt > 0){
      document.querySelector("#debtvein").innerHTML =  '<i style="color: #04ED00" class="bi bi-arrow-down-right-square-fill"></i>'}
      else if (debt < 0){
      document.querySelector("#debtvein").innerHTML =  '<i style="color: #04ED00" class="bi bi-arrow-up-right-square-fill"></i>'  
      }
        
  }   else if (previous_debt < debt) {
      if (debt > 0){
      document.querySelector("#debtvein").innerHTML = '<i style="color: #F00015" class="bi bi-arrow-up-right-square-fill"></i>'}
      else if (debt < 0){
      document.querySelector("#debtvein").innerHTML = '<i style="color: #F00015" class="bi bi-arrow-down-right-square-fill"></i>'}  
      }
    
    
    if (previous_velocity < velocity) {
      
      document.querySelector("#velocityvein").innerHTML = '<i style="color: #04ED00" class="bi bi-arrow-up-right-square-fill"></i>'}
      else {
      document.querySelector("#velocityvein").innerHTML = '<i style="color: #F00015" class="bi bi-arrow-down-right-square-fill"></i>'}  
      

        
  //Capital Investment Mechanic

  document.querySelector("#capinvestmentindex").innerHTML = `Production Index: <b>${Math.round(capinvestmentindex * 100) / 100}</b>`;
  document.querySelector("#capinvestmentindex").style.color = "#006400";
  capinvestmentindex+=interestRate/160
  capinvestmentindex-=0.00625
  capinvestmentindex-=(debt-previous_debt)/4000
  velocity+=(capinvestmentindex-100)/100;
    
  //Inflation Mechanic
  currentInflation = percIncrease(previous_GDP,GDP)
  inflationArray.push(currentInflation);  
  if (inflationArray.length > 15){inflationArray.shift();} 
  let coreInflation = inflationArray.reduce((a, b) => a + b, 0)*2 / inflationArray.length;
  inflationRate = (coreInflation-(capinvestmentindex-100))/CPIRigFactor


  if (previous_capitalinvestmentindex < capinvestmentindex) {
      
    document.querySelector("#capitalindexvein").innerHTML = '<i style="color: #04ED00" class="bi bi-arrow-up-right-square-fill"></i>'}
    else {
    document.querySelector("#capitalindexvein").innerHTML = '<i style="color: #F00015" class="bi bi-arrow-down-right-square-fill"></i>'}  
  



  previous_GDP = GDP
  previous_debt = debt
  previous_velocity = velocity
  previous_capitalinvestmentindex = capinvestmentindex
  
  
    
  if (debt < 0){debt=0}
    
  politicalEngine()
  reputationEngine()
  memoEngine()

  if (gameOver == true){
    window.scrollTo(0, 0);
    //document.getElementById("startOver").classList.add("startgameafterdefeat")
}
    
  if (gameOver == true) {clearInterval(ecoInterval);}

}
  
  }, 2500);

}

function qe(){
  debt+=1000
  capinvestmentindex-=0.01
}

function qt(){
  debt-=1000
  capinvestmentindex+=0.01
}

function reputationEngine () {

  if (soundMoney == false){

    if (newsInterrupt == false){

      document.querySelector("#reputation").classList.remove("pauseblink")

        if (reputation >= 0){reputationInterval++ }
    
        
        if (GDP > 40000 &&  inflationRate < inflationRateUpperBound &&  inflationRate > inflationRateLowerBound){
        reputation++
        }
        if (GDP < 40000) {reputation--}
        if (inflationRate > inflationRateUpperBound || inflationRate < inflationRateLowerBound) {reputation--}
    
        document.querySelector("#reputation").innerHTML = `<b>Reputation: ${reputation}</b>`
        
        
        if (reputation>=0){
        document.querySelector("#reputation").style.color = "#04ED00";
        }
        else {
            document.querySelector("#reputation").style.color = "#F00015";
        }
    }
    
    else {
        document.querySelector("#reputation").classList.add("pauseblink")
    }
  }

  else {
    document.querySelector("#reputation").innerHTML = `<b>Reputation: N/A</b>`
    document.querySelector("#reputation").style.color = "#7851A9";
    reputation = 999
  }
           

}

//EXPERT CONSULTANT ADVICE
let expertAdviceTimer = 60
let expertAdvice0,expertAdvice1,expertAdvice2,expertAdvice3,expertAdvice4,expertAdvice5,expertAdvice6;
let expertAdviceArray = [expertAdvice1,expertAdvice2,expertAdvice3,expertAdvice4,expertAdvice5,expertAdvice6];
noExpertAdvice();

//this function is called when the expert advice timer is up
function noExpertAdvice(){
updateChatter(`conadvisor`,`If you need some actual expert advice, hire me through your Policy Actions menu. But it'll cost you.`,`bad`,`add`);
}

//this function is what's called when the player buys expert advice
function getExpertAdvice() {
  reputation -= expertAdviceCost;
  expertAdviceTimer = 60
  expertAdviceLoop();

  //expert advice loop starts here
  function expertAdviceLoop() {
    expertAdviceTimer-=2;

    if (expertAdviceTimer <= 0) {
      noExpertAdvice();
      return;
    }
    

    // Check if there is any expert advice to be given
    expertAdviceArray = [expertAdvice1,expertAdvice2,expertAdvice3,expertAdvice4,expertAdvice5,expertAdvice6];

    if (expertAdviceArray.some(function(str) { return str !== "" && str !== undefined && str !== null; })) {
      expertAdvice0 = ``
  } else {
      expertAdvice0 = `I have no reccomendations at this time.`
  }

  

    //actual expert advice starts here

    if (soundMoney == false){

    if (capinvestmentindex < 100) {
      expertAdvice1 = `Your production is falling too low, increase interest rates to lift it and avoid long term inflation.<br>`;
    } else {
      expertAdvice1 = ``;
    }

    if (inflationRateLowerBound == 0 && reputation > 0) {
      expertAdvice2 = `Expand your CPI target range (via Policy Actions menu) so you can have some price deflation without a reputation hit.<br>`;
    } else {
      expertAdvice2 = ``;
    }

    if (inflationRate > inflationRateUpperBound && rigCPICost == 30){
      expertAdvice3 = `Rig your CPI (via Policy Actions menu) to supress the inflation stats and protect your long-term reputation.`
    }
    else {
      expertAdvice3 = ``;
    }

    if (reputation > 100 && inflationRateLowerBound > -900) {
      expertAdvice4 = `Abolish the CPI deflation target completely, so your citizens can have benefit from falling prices without a reputation hit to yourself.<br>`;
    } else {
      expertAdvice4 = ``;
    }

    if (reputation > 200 && inflationRateLowerBound < -900 && inflationRate < 0) {
      expertAdvice5 = `You've shown citizens that price deflation is nothing to be afriad of. With your stellar reputation, there's an oppertunity to abolish the fiat currency system completely and implement sound money.<br>`;
    } else {
      expertAdvice5 = ``;
    }
  }

    if (soundMoney == true) {
      expertAdvice6 = `Glad to see you did the right thing. I think our job here is done, just gotta wait out the term. It'll fly by.<br>`;
    } else {
      expertAdvice6 = ``;
    }
    


    updateChatter(`conadvisor`, `${expertAdvice0}${expertAdvice1}${expertAdvice2}${expertAdvice3}${expertAdvice4}${expertAdvice5}${expertAdvice6}`, `good`, `add`);

   
    const myTimeout = setTimeout(expertAdviceLoop, 2000);
  }
}



function manipulateCPI() {

  if (inflationRateLowerBound > -900){
  inflationRateLowerBound-=1
}

  inflationRateUpperBound+=1

  reputation-=manipulateCPICost

  manipulateCPICost = manipulateCPICost*2
  document.querySelector("#manipulateCPICost").innerHTML = `${manipulateCPICost}`
}

function rigCPI() {

  CPIRigFactor+=0.5
  

  reputation-=rigCPICost

  rigCPICost = rigCPICost*2
  document.querySelector("#rigCPICost").innerHTML = `${rigCPICost}`
}

function removeDeflationLowerBound(){
  
  inflationRateLowerBound = -999;
  reputation-=100
  document.getElementById("soundmoneyprereq").style.display = "none";


  // Get the anchor element
  const anchor = document.getElementById('removeDeflationLowerBoundItem');

  // Add an event listener to prevent the default action (i.e., clicking)
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
  });

  // Optionally, you can also visually indicate that it's disabled by changing the style
  anchor.style.pointerEvents = 'none';
  anchor.style.color = 'gray'; // Example: change the color to gray

  anchor1.style.pointerEvents = ''; // Reset to default value
  anchor1.style.color = ''; // Reset to default value
  

}

let anchor1 = document.getElementById('implementSoundMoneyItem');
disableSoundMoneyByDefault();

function disableSoundMoneyByDefault(){

 // Add an event listener to prevent the default action (i.e., clicking)
 anchor1.addEventListener('click', function(event) {
   event.preventDefault();
 });

 // Optionally, you can also visually indicate that it's disabled by changing the style
 anchor1.style.pointerEvents = 'none';
 anchor1.style.color = 'gray'; // Example: change the color to gray


}




function newsEngine () {
  
  newsCycle = setInterval(() => {

if (soundMoney == false){

if (newsInterrupt == false){
      
  if (GDP > 40000 || GDP < 100000) { 
      if (previous_GDPValue > GDP) {
      document.querySelector("#newsA").innerHTML =  `${badNews1[Math.floor(Math.random()*badNews1.length)]}`;
      document.body.style.backgroundImage = 'url("background-bad.png")';
        
  }   else if (previous_GDPValue < GDP) {
      document.querySelector("#newsA").innerHTML =  `${goodNews1[Math.floor(Math.random()*goodNews1.length)]}`;
      document.body.style.backgroundImage = 'url("background-good.png")';

      }
    }
    
  if (GDP > 100000 && inflationRate < 10) {
     document.querySelector("#newsA").innerHTML =  `${reallyGoodNews1[Math.floor(Math.random()*reallyGoodNews1.length)]}`;
     document.body.style.backgroundImage = 'url("background-really-good.png")';
    } 
    
  if (GDP > 100000 && inflationRate > 10) {
     document.querySelector("#newsA").innerHTML =  `${hyperInflationNews[Math.floor(Math.random()*hyperInflationNews.length)]}`;
     document.body.style.backgroundImage = 'url("hyper-inflation-news.png")';
    } 
    
  if (GDP < 40000) {
     document.querySelector("#newsA").innerHTML =  `${reallyBadNews1[Math.floor(Math.random()*reallyBadNews1.length)]}`;
     document.body.style.backgroundImage = 'url("background-really-bad.png")';
    } 
    
  }
}

else {
  document.querySelector("#newsA").innerHTML =  `${soundMoneyNews[Math.floor(Math.random()*soundMoneyNews.length)]}`;
  document.body.style.backgroundImage = 'url("background-really-good.png")';
}
    
  
  if (gameOver == true) {clearInterval(newsCycle)}
  
  previous_GDPValue = GDP;
    
  }, 10000);
}






function politicalEngine (){


  //game over, low repuation
  if (reputation < -50){
    gameOver = true
    document.querySelector("#gameovermodalbody").innerHTML = "Your reputation has fallen so low that you have been removed from office."
    return
  }
  
  //game over, coup overthrown government
  if (GDP < 0){
    gameOver = true
    document.querySelector("#gameovermodalbody").innerHTML = "The country has become so impoverished that a populist revolution has overthrown the government. You have managed to flee with your staff to Argentina."
    return
  }
  
  //game over, monetary policy too extreme
  if (interestRate > 500 || interestRate < -500 || debt < 0 || inflationRate < -300 && newsInterrupt == false){
    gameOver = true
    document.querySelector("#gameovermodalbody").innerHTML = "Your monetary policy is so extreme that you have been deemed insane and unfit to continue in your position."
    return
  }
  
  //Urgent Bulliten Impov
  if (GDP < 20000 && GDP > 0) {
    
  document.querySelector("#QT").disabled = true;
  debt+=debt/2
  
  updateChatter(`poladvisor`,`Due to extreme impoverishment, the people have elected a socialist government who is forcing you to monetize their debt, in order to pay for large social welfare programs to offset your tight monetary policy. Loosen policy to unseat this government, else risk a revolution.`,`bad`,'remove');

  urgentBulliten = true

  }
  else{urgentBulliten = false}
  

  //Urgent Bulliten Inequality
 if (capinvestmentindex < 90) {
  document.querySelector("#QT").disabled = true;
  debt+=GDP/600   

  updateChatter(`poladvisor`,`The extreme wealth inequality in society has prompted the government to implement generous reperations for the disadvantaged Apustaja people. These reperations will be forcibly monetized by the central bank. Tighten policy to unseat this government, else inflation could get out of control.`,`bad`,'remove');

  urgentBulliten = true
    

  }
  else{urgentBulliten = false}
  
  //things back to normal
  if (GDP > 30000 && GDP < 300000 && inflationRate < 30 && politicalEvent == false) {
    if (soundMoney == false){
      document.querySelector("#QE").disabled = false;
      document.querySelector("#QT").disabled = false;
    }
  
  urgentBulliten = false
  activateToast = true
  }

  //if (urgentBulliten == true){
   // document.querySelector("#politicaladvisorpic").src="politicalanalystbad.png";
  //}
  
  //game over, confidence in currency lost
  if (inflationRate > 30){
    gameOver = true
    console.log(gameOver)
    document.querySelector("#gameovermodalbody").innerHTML = "Confidence in your currency has been lost, the political leaders have decided to switch to using a foreign stable currency which you have no control over."
    
    return
  }


  //game win variabes

  if (soundMoney == false){
    winMessage = `<b>You have served out your term as Fed Chairman with a final reputation score of <span class="text-success"><b>${reputation}</b></span></b>
    
    <br><br>
    This is the state of the economy as you leave office:<br><br>
    Interest Rate: <b style="color: #FF0080;">${document.querySelector("#interestRate").value}%</b><br>
    GDP per capita: <b style="color: #055C9D;">$${Math.round(GDP * 100) / 100}</b><br>
    CPI (price inflation): <b style="color: #FFA500;">${Math.round(inflationRate * 100) / 100}%</b><br>
    CPI target range: Between <b style="color: #FFA500;">${inflationRateLowerBound}% & ${inflationRateUpperBound}%</b><br>
    Debt per capita: <b style="color: #F00015;">$${Math.round(debt * 100) / 100}</b><br>
    Currency Velocity: <b style="color: #8b008b;">${Math.round(velocity * 100) / 100}</b><br>
    Production Index: <b style="color: #006400;">${Math.round(capinvestmentindex * 100) / 100}</b><br><br>
    News Front Page on the day you leave office:<br><br> ${document.querySelector("#newsA").innerHTML}<br><br>
    <hr>`

    hallOfFameForm = `Be sure to fill out your details below to be added to the Fed Chairman Hall of Fame (including some words of wisdom for the next Fed Chairman!):<br><br>

    <form action="add_score.php">
    <label for="name" class="form-label">Enter name:</label><br>
    <input class="form-control" type="text" id="name" name="name" value=""><br>
    <label class="form-label" for="comment">Share Words of Wisdom:</label><br>
    <textarea class="form-control" type="textarea" id="comment" name="comment" value="example" rows="2" cols="50"></textarea>
    <br>
    <label class="form-label" for="score"></label><br>
    <input class="form-control" type="hidden" id="score" name="score" value="256" readonly>
    <input class="form-control" type="hidden" id="hash" name="hash" value="256" readonly>
    <input class="btn" id="goldbutton" type="submit" value="Submit to Hall of Fame">
    </form> `
    }
    else {
      winMessage = `<b>You have served out your term as Fed Chairman with the satisfaction of having freed your country from fiat currency and central banking. As a consequence of this however there no longer exists a Fed Chairmen Hall of Fame for your name to reside in.</b>
      
    <br><br>
    This is the state of the economy as you leave office:<br><br>
    Interest Rate: <b style="color: #FF0080;">${document.querySelector("#interestRate").value}%</b><br>
    GDP per capita: <b style="color: #055C9D;">$${Math.round(GDP * 100) / 100}</b><br>
    CPI (price inflation): <b style="color: #FFA500;">${Math.round(inflationRate * 100) / 100}%</b><br>
    CPI target range: Between <b style="color: #FFA500;">No Target</b><br>
    Money per capita: <b style="color: #FFA500;">$${Math.round(debt * 100) / 100}</b><br>
    Currency Velocity: <b style="color: #8b008b;">${Math.round(velocity * 100) / 100}</b><br>
    Production Index: <b style="color: #006400;">${Math.round(capinvestmentindex * 100) / 100}</b><br><br>
    News Front Page on the day you leave office:<br><br> ${document.querySelector("#newsA").innerHTML}<br><br>`
      hallOfFameForm = ``
    }



  //game win
  if (counter <= 0){
    gameWin = true
    gameOver = true
    document.querySelector("#gamewinmodalbody").innerHTML = `${winMessage}
    ${hallOfFameForm}`
    window.scrollTo(0, 0);
    document.querySelector("#score").value = reputation*12;
    document.querySelector("#hash").value = reputation*14;
    return
  }

  
}


//Example format: (ecoadvisor,`Blah BLah Blah`good`,`add`) -- add will hide the badge, remove will show it
function updateChatter(advisor,speech,pic,badge){
  if (soundMoney == false){
    document.querySelector(`#${advisor}`).innerHTML = `${speech}`
    document.querySelector(`#${advisor}pic`).src=`${advisor}${pic}.png`;

    const addOrRemove = badge === 'add' ? 'add' : 'remove';
    document.querySelector(`#${advisor}badge`).classList[addOrRemove]("displayno");
  }
  else {
    document.querySelector(`#ecoadvisorpic`).src=`x01.png`;
    document.querySelector(`#poladvisorpic`).src=`x01.png`;
    document.querySelector(`#disadvisorpic`).src=`x01.png`;
    document.querySelector(`#conadvisorpic`).src=`conadvisorgood.png`;

    document.querySelector(`#ecoadvisor`).innerHTML = `*This staff member has been laid off, their services are no longer required*`
    document.querySelector(`#poladvisor`).innerHTML = `*This staff member has been laid off, their services are no longer required*`
    document.querySelector(`#disadvisor`).innerHTML = `*This staff member has been laid off, their services are no longer required*`
    document.querySelector(`#conadvisor`).innerHTML = `Glad to see you did the right thing. I think our job here is done, just gotta wait out the term. It'll fly by.`
  }
}


//Initial Chatter
updateChatter(`ecoadvisor`,`Hey, what's good? I'm Josh, your economic advisor!`,`good`,'add');
updateChatter(`poladvisor`,`Hi there, I'm Mikayla, your political analyst.`,`good`,'add');
updateChatter(`disadvisor`,`Great to meet you! I'm David, your disaster expert.`,`good`,'add');


// Changing the Advisor Chatter
function advisorChatter() {

  // Economic Chatter
  if (inflationRate >= inflationRateLowerBound && inflationRate <= inflationRateUpperBound && GDP > 40000 && GDP < 125000 && politicalEvent == false){
    updateChatter(`ecoadvisor`,getRandomChatter(1),`good`,'add');
}

  // Political Chatter
  setTimeout(function() {
    if (GDP > 30000 && GDP < 300000 && inflationRate < 30 && politicalEvent == false) {
      updateChatter(`poladvisor`,getRandomChatter(2),`good`,'add');
      }
  }, 2000);

  // Disaster Chatter
  setTimeout(function() {
    if (newsInterrupt == false){
      updateChatter(`disadvisor`,getRandomChatter(3),`good`,'add');
    }
  }, 4000);
}

// Set interval to call advisorChatter
setInterval(advisorChatter, 15000);

//Selecting Random Chatter from advisorchatter.js file
function getRandomChatter(group) {

  let selectedGroup;

  if (group === 1) {
    selectedGroup = group1;
  } else if (group === 2) {
    selectedGroup = group2;
  } else if (group === 3) {
    selectedGroup = group3;
  } else {
    return "Invalid group number";
  }

  const randomIndex = Math.floor(Math.random() * selectedGroup.length);
  return selectedGroup[randomIndex];
}



function memoEngine() {
  if (politicalEvent == false){
    if (newsInterrupt == true){
      updateChatter(`ecoadvisor`,`Due to the disaster currently unfolding everyone will blame said disaster for any economic chaos that occurs, therefore anything you do currently will not affect your reputation.`,`good`,'remove');
      }
      
    else {
      
        if (inflationRate < inflationRateLowerBound){
            updateChatter(`ecoadvisor`,`Inflation is below target. Loosen monetary policy to bring it back above ${inflationRateLowerBound}%.`,`bad`,'remove');
        
          }
        if (inflationRate > inflationRateUpperBound){
            updateChatter(`ecoadvisor`,`Inflation is above target. Tighten monetary policy to bring it back below ${inflationRateUpperBound}%.`,`bad`,'remove');
        }
        if (GDP < 40000){
            updateChatter(`ecoadvisor`,`GDP is below target. Stimulate the economy to bring it above $40,000.`,`bad`,'remove');
        }
        if (GDP > 200000){
            updateChatter(`ecoadvisor`,`The economy is overheating. Tighten policy to cool it down.`,`bad`,'remove');
        }
    }
  }
}



function disasterEngine(){
    
  let disasterCounter = 0

  let disasterLength = 100

  setInterval(function () {

    if(politicalEvent == true || newsInterrupt == true){disasterCounter = 0}

    if (isPaused == false && soundMoney == false){

  disasterCounter+=Math.floor(Math.random()*10)

  

    if (disasterCounter > 100 && gameOver == false && politicalEvent == false) {

  
    disasterCounter = 0

    //List of disasters that are randomly selected from
    let disasterFunctions = [terroristAttack, naturalDisaster, pandemic, presidentBlackMail, presidentTradeDeal, warOverseas, btcBlackMail, newGasFields, strategicReserves, aiDevelopment]; 

    function warOverseas() {
      toastIt(`A war has broken out overseas`,`Political Advisor`);
      innerLoop();
      
      function innerLoop(){
      if (urgentBulliten == false){
      politicalEvent = true
      disasterLength--


      if (disasterLength > 25){
      document.querySelector('#memoToastContents').innerHTML = `<b>Important Political Memo:</b> War Broken out Overseas`
      
      if (strategicReservesAvailable == true){
        capinvestmentindex-=0.05
        updateChatter(`poladvisor`,`A war has broken out overseas and as a consequence we've lost access to some of our key trading partners. Fortunately the Strategic Petroleum Reserve is full, and will be used by the President to soften the economic damage.`,`bad`,'remove');
      }
      else {
      capinvestmentindex-=0.1
      updateChatter(`poladvisor`,`A war has broken out overseas and as a consequence we've lost access to some of our key trading partners. Unfortunately the Strategic Petroleum Reserve is empty, so the economic damage will be bad.`,`bad`,'remove');
    }
      }

      if (disasterLength < 25){
        updateChatter(`poladvisor`,`The war is over and investment is returning!`,`good`,'add');

        if (strategicReservesAvailable == true){
          capinvestmentindex+=0.05
        }
        else {capinvestmentindex+=0.1}
        }


      

    if (disasterLength < 1){
      strategicReservesAvailable = false
      resetDisaster();
      return
    }
    else {
      const myTimeout = setTimeout(innerLoop, 2000);    
    }
  } 
}
    }

  function strategicReserves() { 
    toastIt(`Strategic Petroleum Reserves emptied`,`Political Advisor`);
    innerLoop();

    function innerLoop(){
    if (urgentBulliten == false){
    politicalEvent = true
    strategicReservesAvailable = false
    disasterLength--


    if (disasterLength > 90){
      updateChatter(`poladvisor`,`The president has decided to empty the Strategic Petroleum Reserves to flood the domestic market with cheap fuel in order to help him win re-election. This will reduce inflation and boost production temporarily.`,`bad`,'remove');
    capinvestmentindex+=1.0
    }

    if (disasterLength < 10){
      updateChatter(`poladvisor`,`The Strategic Petroleum Reserves are empty, this will push fuel prices and therefore inflation higher.`,`bad`,'remove');
      capinvestmentindex-=1.0
      }


    

  if (disasterLength < 1){
    resetDisaster();
    return
  }
  else {
    const myTimeout = setTimeout(innerLoop, 2000);    
  }
} 
    }
  }


    function presidentBlackMail() { 
      toastIt(`The President is blackmailing you`,`Political Advisor`);
      innerLoop();

      function innerLoop(){
      if (urgentBulliten == false){
      politicalEvent = true
      updateChatter(`poladvisor`,`The President is having his allies in the media slander you, the only way to stop your reputation being destroyed is to lower rates to <b>0%</b> and keep them there for <b>${blackMailCounter*2}</b> more days, so he can brag about being a good economic manager.`,`bad`,'remove');
    

      if(blackMailCounter < 1){
        resetDisaster();
        return} 

      if (realInterestRate <= 0){
          blackMailCounter--
          }

      if (realInterestRate > 0){
          reputation-=2
          }
      
      const myTimeout = setTimeout(innerLoop, 2000);

      
  } 
}
    }

  function btcBlackMail() { 
    toastIt(`Our reserve currency status is threatened`,`Political Advisor`);
    innerLoop();
    
    function innerLoop(){
    if (urgentBulliten == false){
    politicalEvent = true
    updateChatter(`poladvisor`,`A South American country is threatening to ditch our currency as their reserve and switch to a BTC standard, unless we debase our currency by 25% to ease their debt burdens. If we refuse and they switch to BTC it will cost us <b>50</b> reputation points. So debt must reach <b>$${Math.round(debtTarget)}</b> within <b>${disasterLength-20}</b> days.`,`bad`,'remove');

    disasterLength--

    if (baseToken === 0){
      debtTarget = debt+(debt/4);
      baseToken = 1
    }

    if (debt >= debtTarget){
    resetDisaster();
    return}

    const myTimeout = setTimeout(innerLoop, 2000);

    if(disasterLength < 20){
      reputation-=50
      resetDisaster();
      return
    }
      
} 
  }
}

  function presidentTradeDeal() { 
    toastIt(`Major trade deal signed`,`Economic Advisor`);
    innerLoop();

    function innerLoop(){
  
    politicalEvent = true
    updateChatter(`ecoadvisor`,`The President has brokered a major trade deal which will allow our products to be exported to new markets, as well as giving our companies access to cheaper foreign labour.`,`good`,'remove');
    
    capinvestmentindex+=0.15
    disasterLength--

    if (disasterLength < 20){
      resetDisaster();
      return
    }


      const myTimeout = setTimeout(innerLoop, 2000);    
} 
  }

function newGasFields() {
  toastIt(`New gas fields discovered`,`Economic Advisor`);
  innerLoop();
  
  function innerLoop(){
    politicalEvent = true
    updateChatter(`ecoadvisor`,`New easily accessible gas fields have been discovered within our country, which is leading to a boom of cheap energy fueling manafacturing. This should lead to falling prices for consumers.`,`good`,'remove');

    capinvestmentindex+=0.2
    disasterLength--

    if (disasterLength < 1){
      resetDisaster();
      return
    }


      const myTimeout = setTimeout(innerLoop, 2000);   
  } 
} 


function aiDevelopment() {
  toastIt(`AI breakthrough boosts productivity`,`Economic Advisor`);
  innerLoop();
  
  function innerLoop(){
    politicalEvent = true
    updateChatter(`ecoadvisor`,`A breakthrough in AI technology is boosting productivity. Fewer entry-level white collar workers are needed which is freeing up labour for blue collar work.`,`good`,'remove');

    capinvestmentindex+=0.1
    disasterLength--

    if (disasterLength < 1){
      resetDisaster();
      return
    }


      const myTimeout = setTimeout(innerLoop, 2000);   
  } 
} 
 
      function terroristAttack() { 
          toastIt(`Major terrorist attack underway`,`Disaster Advisor`);

          newsInterrupt = true
          updateChatter(`disadvisor`,`A major terrorist attack has occured, and citizens are afraid to travel which has shocked the economy. Consider stimulus if needed to help the economy recover.`,`bad`,'remove');
          document.querySelector("#newsA").innerHTML =  `<b>PBS:</b> Thousands killed in largest terrorist attack in nation's history, flights grounded and borders temporarily closed pending investigation.`;
          
          velocity-=velocity/4
            

          const myTimeout = setTimeout(resetDisaster, 30000);
          
    }
 
      function naturalDisaster() { 
          newsInterrupt = true
          toastIt(`Natural disaster underway`,`Disaster Advisor`);
          updateChatter(`disadvisor`,`A large earthquake has caused widespread damage in a major city and the demand for goods and services has skyrocketed as the rebuild commences. Consider cooling the economy off if needed, to prevent inflation.`,`bad`,'remove');
          document.querySelector("#newsA").innerHTML =  `<b>PBS:</b> Huge earthquake devastates nation's third largest city, construction workers flying in from around the country to assist in rebuilding effort.`;
         
          velocity+=velocity/3
          capinvestmentindex-=capinvestmentindex/20

          const myTimeout = setTimeout(resetDisaster, 60000);
          
      } 
 
      function pandemic() { 
          toastIt(`Major pandemic in progress`,`Disaster Advisor`);
          innerLoop();

          function innerLoop(){

          newsInterrupt = true
          document.querySelector("#newsA").innerHTML =  `<b>PBS:</b> Worst pandemic in 100 years gripping the world, shopping malls and tourist hotspots empty as citizens try to avoid the virus.`;
          

          if (velocity > 1 && disasterLength > 75){
          velocity-=velocity/20
          capinvestmentindex-=0.1
          updateChatter(`disadvisor`,`An unperecented pandemic is spreading around the world, and citzens have been ordered by health authorities to stay at home and avoid any non-essential travel. You must provide stimulus to stop the economy seizing up.`,`bad`,'remove');
          }

        
          if (disasterLength < 25){
            velocity+=velocity/20
            capinvestmentindex+=0.05
            updateChatter(`disadvisor`,`The pandemic is ending and everyone is heading back out to spend, shop, travel. You must hike rates to avoid inflation getting out of control.`,`bad`,'remove');
          }

          disasterLength-=1
          
          if (disasterLength < 0){
            resetDisaster();
            return;
          }

          const myTimeout = setTimeout(innerLoop, 2000);
          
      } 
    }

      function resetDisaster(){
        newsInterrupt = false
        politicalEvent = false
        blackMailCounter = 15
        disasterCounter = 0
        disasterLength = 100
        baseToken = 0

      }

  function randomNumber(n) { 
	  return Math.floor( Math.random() * n ); 
  }

  disasterFunctions[ randomNumber( disasterFunctions.length ) ](); 

 }
}
                         
}, 5000);                       
  

}

function countFunction () {
  countInterval = setInterval(() => { 

    if (isPaused == false){
    
      if (soundMoney == false){
          counter--
      }
      else{
        counter-=2
      }
    document.querySelector("#counter").innerHTML = `<b>${counter}</b> days left in office`
    
    if (gameOver == true && gameWin == false) {
      //document.querySelector("#startOver").disabled = false;
      clearInterval(countInterval)

      document.querySelector("#gameStats").innerHTML = `
      This is the state of the economy as you leave office, having served <b>${1460-counter}</b> days and with a final reputation of <b>${reputation}</b>:<br><br>
      Interest Rate: <b style="color: #FF0080;">${document.querySelector("#interestRate").value}%</b><br>
      GDP per capita: <b style="color: #055C9D;">$${Math.round(GDP * 100) / 100}</b><br>
      CPI (price inflation): <b style="color: #FFA500;">${Math.round(inflationRate * 100) / 100}%</b><br>
      CPI target range: Between <b style="color: #FFA500;">${inflationRateLowerBound}% & ${inflationRateUpperBound}%</b><br>
      Debt per capita: <b style="color: #F00015;">$${Math.round(debt * 100) / 100}</b><br>
      Currency Velocity: <b style="color: #8b008b;">${Math.round(velocity * 100) / 100}</b><br>
      Production Index: <b style="color: #006400;">${Math.round(capinvestmentindex * 100) / 100}</b><br><br>
      News Front Page on the day you leave office:<br><br> ${document.querySelector("#newsA").innerHTML}<br><br>`



      let gameOverModal = new bootstrap.Modal(document.getElementById('gameovermodal'), {});
gameOverModal.show();
    }

    if (gameWin == true) {
      clearInterval(countInterval)
      let gameWinModal = new bootstrap.Modal(document.getElementById('gamewinmodal'), {});
      gameWinModal.show();
    }
  }
  
  }, 1000);
}







function percIncrease(a, b) {
        let percent;
        if(b !== 0) {
            if(a !== 0) {
                percent = (b - a) / a * 100;
            } else {
                percent = b * 100;
            }
        } else {
            percent = - a * 100;            
        }       
        return (percent);
    }


function pageReload(){
  window.location.reload();
}


function playPause() {

    if (isPaused == false){
      isPaused = true
      document.querySelector("#pausebutton").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
    </svg>`;
    document.querySelector("#pausebutton").classList.add("pauseblink");
      return
      
    }

    if (isPaused == true){
      isPaused = false
      document.querySelector("#pausebutton").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
    </svg>`;
    document.querySelector("#pausebutton").classList.remove("pauseblink");

      return
      
    }

   
}

function dumpRates() {
  document.querySelector("#interestRate").value-=0.25;
}

function pumpRates() {
  document.querySelector("#interestRate").value++
  document.querySelector("#interestRate").value-=0.75;
}


function toastIt(contents,advisor) {
  if (advisor == `Political Advisor`){
    var toastcolor = document.querySelector('.toast-body');
    toastcolor.style.backgroundColor = '#800020';
  }
  if (advisor == `Disaster Advisor`){
    var toastcolor = document.querySelector('.toast-body');
    toastcolor.style.backgroundColor = '#B8860B';
  }

  document.querySelector('#memoToastContents').innerHTML = `<b>Important Memo: </b>${contents}.<br>See your ${advisor} for more info.`
  
  let existingToast = bootstrap.Toast.getInstance(document.querySelector('#memoToastAlert'));

  
    new bootstrap.Toast(document.querySelector('#memoToastAlert'), { delay: 10000,animation: false }).show(); 

}



function implementSoundMoney(){

  reputation-=200

  console.log("Sound money implemented!")
  
  soundMoney = true

  //adjustments to how debt/money works
  let moneyCounter = document.querySelector("#debt");
  moneyCounter.innerHTML = `Money: <b>$${Math.floor(debt)}</b> per cap`;
  moneyCounter.style.color = "#FFA500";
  document.querySelector("#debtvein").innerHTML =  ''

  //get rid of CPI target range
  document.querySelector("#CPITargetDisplay").innerHTML = `There is no CPI target.`
  inflationRateUpperBound = 999

  //disable controls
  document.querySelector("#callinfavours").disabled = true;
  document.querySelector("#QT").disabled = true;
  document.querySelector("#QE").disabled = true;
  document.querySelector("#interestRate").disabled = true;
  document.querySelector("#pumpratesbutton").disabled = true;
  document.querySelector("#dumpratesbutton").disabled = true;
  

  let targetRate = 5

  savings+=2000
  soundMoneyLoop();
  targetInterestRateLoop();
  function soundMoneyLoop(){

    updateChatter(`conadvisor`,`Glad to see you did the right thing. I think our job here is done, just gotta wait out the term. It'll fly by.`,`good`,`add`);

    document.getElementById("interestRate").value = realInterestRate;
    interestRate = realInterestRate-7.6
  


    realInterestRate += ((targetRate - realInterestRate) / 20);
    realInterestRate = parseFloat(realInterestRate.toFixed(2));

    
    
  
    const myTimeout = setTimeout(soundMoneyLoop, 2000);
  }

  function targetInterestRateLoop(){
    targetRate = generateInterestRate();
    const myTimeout = setTimeout(targetInterestRateLoop, 20000);
  }
}


function generateInterestRate() {
  return Math.floor(Math.random() * (16 - 4 + 1)) + 4;
}