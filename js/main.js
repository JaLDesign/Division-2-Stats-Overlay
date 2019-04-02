$(document).ready(function() {
  function getpid(){
    $.ajax({
      type: "get",
      url: "https://thedivisiontab.com/api/search.php?name=" + username + "&platform=" + platform,
      cache: false,
      dataType: "json",
      success: function(divtab) {
        if(divtab.totalresults === 0){
	  console.error("Fuck")
		 $("img").attr({
			  src: "img/JalBated.png",
			  alt: "Whoops"
		});
		$( "#specialimg" ).text( $( "img" ).attr( "alt" ) );			
		$(".container").find("#specialization").text("Something went wrong");
		$(".container").find("#gearscore").text("Please check your username and platform");
	    }else if (divtab.totalresults === 1){
		$('#pid').data('GetPID', divtab.results[0].pid);
		console.log("Grabbed PID: " + divtab.results[0].pid);
		}
	  },
	  complete: function(divtab) {
	  loadstats();
	}
	});
  }	
	
  function loadstats(){

    $.ajax({
      type: "get",
      url: "https://thedivisiontab.com/api/player.php?pid=" + $('#pid').data('GetPID'),
      cache: false,
      dataType: "json",
      success: function(d2stats) {
        console.log("Hey, I am alive");
 
        if (d2stats.specialization === "survivalist"){
		  $("#level_pve").hide();
		  $("#specialimg").attr("src","img/td2survivalist.png");
		  endgamestats(d2stats);

        } else if (d2stats.specialization === "demolitionist"){
		  $("#level_pve").hide();
		  $("#specialimg").attr("src","img/td2demolitionist.png");
          endgamestats(d2stats);

        } else if (d2stats.specialization === "sharpshooter"){
		  $("#specialimg").attr("src","img/td2sharpshooter.png");
		  endgamestats(d2stats);
/// If not at end game
        } else if (d2stats.specialization === "") {
		storystats(d2stats);
        }
      }			
    });
  }

getpid();
setInterval(function(){
    loadstats() // this will run after every 60 seconds
}, 60000);
  });
// Convert Seconds to H:M:S

function secondsTimeSpanToHMS(s) {
    var h = Math.floor(s/3600); //Get whole hours
    s -= h*3600;
    var m = Math.floor(s/60); //Get remaining minutes
    s -= m*60;
    return h + " Hours"; //Return Hours
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};	
var username = getUrlParameter('username');
var platform = getUrlParameter('platform');
// v Custom var, If not used the falls back to 10 minute timer
var refreshtime = getUrlParameter('refreshtime');

function endgamestats(d2stats){
$("#level_pve").hide();
$(".container").find("#specialization").text(" " + d2stats.specialization);
$(".container").find("#gearscore").text('Gear Score | '+ d2stats.gearscore);
$(".container").find("#level_dz").text('DZ Level | '+ d2stats.level_dz);
$(".container").find("#kills_pvp").text('DZ Kills | '+ d2stats.kills_pvp);
$(".container").find("#kills_npc").text('NPC Kills | '+ d2stats.kills_npc);
 $(".container").find("#totaltime").text('🕒 '+  secondsTimeSpanToHMS(d2stats.timeplayed_total)) + "Hours";
};

function storystats(d2stats){
$("#specialimg").hide();
$("#specialization").hide();
$("#gearscore").hide();
$(".container").find("#level_dz").text('DZ Level | '+ d2stats.level_dz);
$(".container").find("#kills_pvp").text('DZ Kills | '+ d2stats.kills_pvp);
$(".container").find("#kills_npc").text('NPC Kills | '+ d2stats.kills_npc);
$(".container").find("#level_pve").text('PvE Level | '+ d2stats.level_pve);
$(".container").find("#totaltime").text('🕒 '+  secondsTimeSpanToHMS(d2stats.timeplayed_total)) + "Hours";
	
}

