function readList(){
  var thisEvent;
  $("#big-tbody").html("");
  $("#small-tbody").html("");
  database.ref("settings/currentEvent").once('value').then(function(snapshot) {
    thisEvent = snapshot.val();
    $("#thisEvent").html(thisEvent);
    firebase.database().ref('matchs/' + thisEvent).orderByChild("time").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var red = childSnapshot.child("alliances/red/team_keys").val();
        var blue = childSnapshot.child("alliances/blue/team_keys").val();
        console.log(red);
        console.log(blue);
        var teamsData = {
          red: {
            0: {
              finish: false,
              num: ""
            },
            1: {
              finish: false,
              num: ""
            },
            2: {
              finish: false,
              num: ""
            }
          },
          blue: {
            0: {
              finish: false,
              num: ""
            },
            1: {
              finish: false,
              num: ""
            },
            2: {
              finish: false,
              num: ""
            }
          }
        }
        for (var i = 0; i < 3; i++) {
          teamsData.red[i.toString()].num = red[i.toString()];
          teamsData.red[i.toString()].finish = childSnapshot.child("teamCollect/"+red[i.toString()]).exists();
          teamsData.blue[i.toString()].num = blue[i.toString()];
          teamsData.blue[i.toString()].finish = childSnapshot.child("teamCollect/"+blue[i.toString()]).exists();
        }

        $("#big-tbody").append(addMatchList(childSnapshot.key,teamsData));
        $("#small-tbody").append(addMatchList(childSnapshot.key,teamsData,0));

        if(childSnapshot.child("alliances/red/score").val()>childSnapshot.child("alliances/blue/score").val()){
          $("#"+childSnapshot.key+"-small").addClass("table-danger");
          $("#"+childSnapshot.key+"-big").addClass("table-danger");
        }else {
          $("#"+childSnapshot.key+"-small").addClass("table-primary");
          $("#"+childSnapshot.key+"-big").addClass("table-primary");
        }
      });
    });
  });

}
