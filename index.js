var RtmClient = require('@slack/client').RtmClient;
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;

var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

let channel;

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
    for (const c of rtmStartData.channels) {
        if (c.is_member && c.name ==='testchannel') { channel = c.id }
    }
    console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}`);
});

rtm.on(RTM_EVENTS.MESSAGE, function(message) {
    //console.log(message);
    if( message.subtype == 'channel_join'){
        //console.log(message);
        switch(message.user_profile.first_name) {
            case "Luis":
                rtm.sendMessage("Welcome " + message.user_profile.first_name + "! He has joined us to help out on events!" , channel);
            default:
                break;
        }
        
    }
});

rtm.start();