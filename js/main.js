$(document).ready(function() {
	var username = getUrlParameter('username');
	var platform = getUrlParameter('platform');
	// v Custom var, If not used the falls back to 10 minute timer
	var refreshtime = getUrlParameter('refreshtime');

	
	
	function getpid() {
		$.ajax({
			type: "get",
			url: "https://thedivisiontab.com/api/search.php?name=" + username + "&platform=" + platform,
			cache: false,
			dataType: "json",
			success: function(divtab) {
				if (divtab.totalresults === 0) {
					console.error("Something went wrong")
					$("img").attr({
						src: "img/JalBated.png",
						alt: "Whoops"
					});
					$(".specialimg").text($("img").attr("alt"));
					$(".container").find("#specialization").text("Something went wrong");
					$(".container").find("#gearscore").text("Please check your username and platform");
					var str = "Usage Here (GitHub/JaLDesign)";
					var result = str.link("https://github.com/JaLDesign/Division-2-Stats-Overlay/#usage");
					document.getElementById("level_dz").innerHTML = result;
				} else if (divtab.totalresults === 1) {
					$('#pid').data('GetPID', divtab.results[0].pid);
					console.log("Grabbed PID: " + divtab.results[0].pid);
				}
			},
			complete: function(divtab) {
				loadstats();
			}
		});
	}

	function loadstats() {
		$.ajax({
			type: "get",
			url: "https://thedivisiontab.com/api/player.php?pid=" + $('#pid').data('GetPID'),
			cache: false,
			dataType: "json",
			success: function(d2stats) {
				console.log("Getting Stats");
				if (d2stats.specialization === "survivalist") {
					$("#level_pve").hide();
					$(".specialimg").attr("src", "img/td2survivalist.png");
					endgamestats(d2stats);
				} else if (d2stats.specialization === "demolitionist") {
					$("#level_pve").hide();
					$(".specialimg").attr("src", "img/td2demolitionist.png");
					endgamestats(d2stats);
				} else if (d2stats.specialization === "sharpshooter") {
					$("#specialimg").attr("src", "img/td2sharpshooter.png");
					endgamestats(d2stats);
					/// If not at end game
				} else if (d2stats.specialization === "") {
					storystats(d2stats);
				}
			}
		});
	}
	getpid();
	setInterval(function() {
		loadstats() // this will run after every 60 seconds
	}, 60000);
});

function endgamestats(d2stats) {
	$("#level_pve").hide();
	$(".container").find("#specialization").text(" " + d2stats.specialization);
	$(".container").find("#gearscore").text('Gear Score | ' + d2stats.gearscore);
	$(".container").find("#level_dz").text('DZ Level | ' + d2stats.level_dz);
	$(".container").find("#kills_pvp").text('PvP Kills | ' + d2stats.kills_pvp);
	$(".container").find("#kills_npc").text('PvE Kills | ' + d2stats.kills_npc);
	$(".container").find("#totaltime").text('🕒 ' + secondsTimeSpanToH(d2stats.timeplayed_total)) + "Hours";
	var ts3 = JSON.parse(d2stats.timeplayed_total);
	if (d2stats.timeplayed_total = ts3) {
		console.log("Time Played: " + ts3);
		//$(".container").find("#last_updated").text("Last Updated: Now!");
	} else if (d2stats.timeplayed_total > ts3) {
		var ts3 = JSON.parse("New Update: " + d2stats.timeplayed_total);
		//$(".container").find("#last_updated").text("Last Updated: Never");
	}
};

function storystats(d2stats) {
	$("#specialimg").hide();
	$("#gearscore").hide();
	$(".container").find("#level_dz").text('DZ Level | ' + d2stats.level_dz);
	$(".container").find("#kills_pvp").text('PvP Kills | ' + d2stats.kills_pvp);
	$(".container").find("#kills_npc").text('NPC Kills | ' + d2stats.kills_npc);
	$(".container").find("#level_pve").text('PvE Level | ' + d2stats.level_pve);
	$(".container").find("#totaltime").text('🕒 ' + secondsTimeSpanToH(d2stats.timeplayed_total)) + "Hours";
};
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
// Convert Seconds to Hs
function secondsTimeSpanToH(s) {
	var h = Math.floor(s / 3600); //Get whole hours
	s -= h * 3600;
	var m = Math.floor(s / 60); //Get remaining minutes
	s -= m * 60;
	return h + " Hours ";
}