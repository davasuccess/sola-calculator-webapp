"use strict";
var fd = document.getElementById('fback');
fd.style.display ='none'; 
// document.getElementById('P_fback').innerHTML = fback
//       let  prin =  document.createElement('button');
//         prin.setAttribute('id', 'btnprint');
//         prin.setAttribute('value', 'print');
//         prin.style.display = 'none';
function DailyUsage(monthlyKWH){
    let annualkwh = 0,  i=0, dailykwh=0, x=0;
    var months = document.getElementById(monthlyKWH).getElementsByTagName('input');
    for(i=0; i < months.length; i++){
        x= months[i].value;
        annualkwh  += Number(x)
    }
    console.log("The Annual power consumption is : ", annualkwh , " Kwh");
   return  dailykwh = annualkwh /356
  //  console.log("The daily power consumption is : ", Math.ceil(dailykwh), " Kwh" )
}

function SunShine(){
    let hrs = 0;
    var zion = document.getElementById("Area");
    let zionValue = zion.value;
    let zionindex = zion.selected

    switch(zionValue){
        case '1':
            hrs= 6;
             console.log("sun hours in Area ",zionValue,"is ", hrs," hours par day");
             break;

             case '2':
                hrs= 6;
                 console.log("sun hours in Area ",zionValue,"is ", hrs," hours par day");
                 break;

                 case '3':
                    hrs= 6;
                     console.log("sun hours in Area ",zionValue,"is ", hrs," hours par day");
                     break;

                     case '4':
                        hrs= 6;
                         console.log("sun hours in Area ",zionValue,"is ", hrs," hours par day");
                         break;

                         case '5':
                            hrs= 4;
                             console.log("sun hours in Area ",zionValue,"is ", hrs," hours par day");
                             break;
                             
                             case '6':
                                hrs= 6;
                                 console.log("sun hours in Area ",zionValue,"is ", hrs," hours par day");
                                 break;

                                 case '7':
                                    hrs= 7;
                                     console.log("sun hours in Area ",zionValue,"is ", hrs," hours par day");
                                     break;

                                     case '8':
                                        hrs= 5;
                                         console.log("sun hours in Area ",zionValue,"is ", hrs," hours par day");
                                         break;

                                         case '9':
                                            hrs= 6;
                                             console.log("sun hours in Area ",zionValue,"is ", hrs," hours par day");
                                             break;

                                                case '10':
                                                    hrs= 6;
                                                    console.log("sun hours in Area ",zionValue,"is ", hrs," hours par day");
                                                    break;
                                                    default:console.log('Sun hours is not specified')
    }
    //console.log(hrs)
    return hrs
    // console.log("The Solar Power needed par day based on daily kilowatt is : ", wattneed_par_day)
} 
function PanelChoice(){
    let panelList  =  document.getElementById('select_panel');
    let panelName ="", panelValue =0, i=0;
    let panelSelected = panelList.selectedIndex;

    panelName = panelList[panelSelected].innerText;
    panelValue =panelList[panelSelected].value;
    var panelDetails = [panelName, panelValue, ]

    return panelDetails
}


function CalculateSolarNeeded(){
  
    var A_daykwh = DailyUsage("mpc");
    console.log("The Kwh needed par day is " ,A_daykwh, "kwh")

    var SunHours = SunShine()
    var Min_SolarParDay = Number(A_daykwh) / Number(SunHours)
     console.log("The Normal Solar panel Require is : ", Math.round(Min_SolarParDay),"Kw " );

     //increamenting the Solar Energy against bad whether Climate
     let realSolarKwNeeded  = Min_SolarParDay * 1.25;
     //compare the home usage by * 1000 to the realSolarKwNeeded 
     let RealWattNeeded = realSolarKwNeeded * 1000

     console.log("Increased Solarpanel Energy is ", realSolarKwNeeded);

     let choosePanel =  PanelChoice()

     var panelName = choosePanel[0];
     var panelValue = choosePanel[1] 
     //To know how many solar panel needed to power the home usage
     let panelNeeded = RealWattNeeded /panelValue
     console.log("RealWattNeeded ",RealWattNeeded )
     console.log("panelNeede ", panelNeeded)

     fd.style.display = 'block';
     var fback = " ";
     fback += "These are complate and accurate information you need about the " +panelName +" solar panel you selected"
     fback += "<h3>Power consumption</h3>";
     fback += "<p>Your average daily electricity power consumption is "+ Math.ceil(A_daykwh)+ " Watt ,</p>";
     fback += '<h3>Additional details </h3>';
     fback += "The Area you selected on the map, the avarage SunShine hour of that area is : "+ SunHours+ " hours par day ";
     fback += " and the realistic panel Watt needed for your home usage is : "+Math.ceil(RealWattNeeded) +" Watt Par day ";
     fback += '<p1>The '+panelName+' '+'you selected generates about '+Math.ceil(panelValue) +' Watt </p1>';
     fback +=' so you need solar panel that generate not less than '+ Math.ceil(RealWattNeeded)+ ' Watt par day';
     fback +='<footer><em>note the result is based on the information your entered and the hour of Sun shine par day </em></footer>'
    

     
    document.getElementById('fback').innerHTML = fback ;
        // document.getElementById('btnprint')= print();
            // prin.style.display = 'inline-block'
}
