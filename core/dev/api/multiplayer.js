Network.addClientPacket("dc.particle", function(packetData) {
    Particles.addParticle(packetData.p, packetData.x, packetData.y, packetData.z, packetData.vx, packetData.vy, packetData.vz);
});
Network.addClientPacket("dc.message", function(packetData) {
    Game.message(packetData);
});
var Mp = {
    message: function (player, text){
        let client = Network.getClientForPlayer(player);
        if(client != null){
            client.send("dc.message", text);
            Debug.message("message player - "+player+" text: "+text);
        }else{
            Debug.message("[error]message player - "+player);
        }
    },
    spawnParticle: function (type, x, y, z, vx, vy, vz){
        let players = Network.getConnectedPlayers();
        for(i in players){
            let client = Network.getClientForPlayer(players[i]);
            if(client != null){
                client.send("dc.particle", {p: type, x: x, y: y, z: z, vx: vx, vy: vy, vz: vz});
                Debug.message("spawn particle");
            }else{
                Debug.message("[error]message player - "+player);
            }
        }
    }
};



