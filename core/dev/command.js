function getPlayer(name){
    let arr = Network.getConnectedPlayers();
    for(let i in arr){
        if(Entity.getNameTag(arr[i])==name){
            return arr[i];
        }
    }
}
if(config.debug.command && config.debug.enabled){
    Callback.addCallback("NativeCommand", function (src){
        let arr = src.split(" ");
        if(arr[0] == "/mana"){
            if(arr[1] == "set"){
                if(arr[2]){
                    if(arr[3]){
                        let player = getPlayer(arr[2]);
                        let mana = ManaCore.get(player);
                        if(mana.countMax<=parseInt(arr[3])){
                            mana.countMax = parseInt(arr[3]);
                        }
                        mana.count = parseInt(arr[3]);
                        Mp.message(player, "вам установлено количество маны - "+arr[3]);
                        ManaCore.set(player, mana);
                        Game.prevent();
                    }
                }
            }
            if(arr[1] == "setMax"){
                if(arr[2]){
                    if(arr[3]){
                        let player = getPlayer(arr[2]);
                        let mana = ManaCore.get(player);
                         if(mana.count>=parseInt(arr[3])){
                            mana.count = parseInt(arr[3]);
                        }
                        mana.countMax = parseInt(arr[3]);
                        Mp.message(player, "вам установлено максимальное количество маны - "+arr[3]);
                        ManaCore.set(player, mana);
                   }
                }
            }
            if(arr[1] == "delet"){
                if(arr[2]){
                    if(arr[3]){
                        let player = getPlayer(arr[2]);
                        ManaCore.create(player);
                        Mp.message(player, "у вас было удалено сохранение маны");
                        ManaCore.set(player, mana);
                    }
                }
            }
        }
    });
}
