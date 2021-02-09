IDRegistry.genItemID("RitualActivator"); 
Item.createItem("RitualActivator", "Ritual activator", {name: "Ritual_activator", meta: 0}, {stack: 1});
Translation.addTranslation("Ritual activator", {ru: "Ритуальный активатор"});

Item.registerUseFunctionForID(ItemID.RitualActivator, function(coords, item, block, player) {
    let mana = ManaCore.get(player);
    Mp.message(player, mana.count+"/"+mana.countMax);
    let pa = new PlayerActor(player);
    let bs = BlockSource.getDefaultForActor(player);
    if(Dungeon.isStructure("ritualUpdate.json", coords.x, coords.y, coords.z, 0, pa.getDimension())){
        for(i in Ritual.arr2){
            let te = TileEntity.getTileEntity(coords.x, coords.y, coords.z, bs);
            let obj = Ritual.arr2[i];
            if(te.data.item.id==obj.id){
                Callback.invokeCallback("RitualDC", player, "update", coords);
                if(mana.count>=obj.mana){
                    mana.count-=obj.mana;
                    bs.spawnDroppedItem(coords.x, coords.y+1, coords.z, obj.result, 1, 0, null);
                    te.destroyAnimation();
                }
            }
        }
    }
    if(Dungeon.isStructure("ritualEnchant.json", coords.x, coords.y, coords.z, 0, pa.getDimension())){
        let keys = Object.keys(Ritual.obj3);
        for(i in keys){
            let key = keys[i];
            let te = TileEntity.getTileEntity(coords.x, coords.y, coords.z, bs);
            if(te.data.item.id==key){
                 if(mana.count>=Ritual.obj3[key].obj.mana){
                    let count = Ritual.obj3[key].arr.length - 1;
                    mana.count-=Ritual.obj3[key].obj.mana;
                    Callback.invokeCallback("RitualDC", player, "enchant", coords);
                    bs.spawnDroppedItem(coords.x, coords.y+1, coords.z, Ritual.obj3[key].arr[Math.floor(Math.random()*count)], 1, 0, null);
                    te.destroyAnimation();
                }
            }
        }
    }
    ManaCore.set(player, mana);
});

IDRegistry.genItemID("DarkSphere"); 
Item.createItem("DarkSphere", "Dark sphere", {name: "Dark_sphere", meta: 0}, {stack: 1});
Translation.addTranslation("Dark sphere", {ru: "тёмная сфера"});

Item.registerUseFunctionForID(ItemID.DarkSphere, function(coords, item, block, player) {
    let mana = ManaCore.get(player);
    let random = Math.floor(Math.random()*2000);
    mana.countMax += random;
    Mp.message(player, "ваш максимальный запас маны увеличин на "+random);
    delItem(player, item);
    ManaCore.set(player, mana);
});

IDRegistry.genItemID("manysript1"); 
Item.createItem("manysript1", "Manuscript", {name: "manysript", meta: 0}, {stack: 1});
Translation.addTranslation("Manuscript", {ru: "манускрипт"});

IDRegistry.genItemID("manysript2"); 
Item.createItem("manysript2", "Manuscript Knowledge: Basics", {name: "manysript", meta: 0}, {stack: 1});
Translation.addTranslation("Manuscript Knowledge: Basics", {ru: "манускрипт знание: основы"});
Item.setGlint(ItemID.manysript2, true);



IDRegistry.genItemID("Drune0"); 
Item.createItem("Drune0", "Empty rune", {name: "Drune", meta: 0}, {stack: 1});
Translation.addTranslation("Empty rune", {ru: "пустая руна"});

IDRegistry.genItemID("Drune1"); 
Item.createItem("Drune1", "fire rune", {name: "Drune", meta: 1}, {stack: 1});
Translation.addTranslation("fire rune", {ru: "руна огня"});
Item.setGlint(ItemID.Drune1, true);

IDRegistry.genItemID("Drune2"); 
Item.createItem("Drune2", "Earth rune", {name: "Drune", meta: 2}, {stack: 1});
Translation.addTranslation("Earth rune", {ru: "руна земли"});
Item.setGlint(ItemID.Drune2, true);

IDRegistry.genItemID("Drune3"); 
Item.createItem("Drune3", "Wind rune", {name: "Drune", meta: 3}, {stack: 1});
Translation.addTranslation("Wind rune", {ru: "руна ветра"});
Item.setGlint(ItemID.Drune3, true);

IDRegistry.genItemID("Drune4"); 
Item.createItem("Drune4", "The rune of light", {name: "Drune", meta: 4}, {stack: 1});
Translation.addTranslation("The rune of light", {ru: "руна света"});
Item.setGlint(ItemID.Drune4, true);

Item.addCreativeGroup("runes", Translation.translate("Runes"), [
    	ItemID.Drune0,
	   ItemID.Drune1,
	   ItemID.Drune2,
	   ItemID.Drune3,
	   ItemID.Drune4, 
]);

IDRegistry.genItemID("sapling10"); 
Item.createItem("sapling10", "sapling", {name: "sapling", meta: 0}, {stack: 64});

Translation.addTranslation("sapling", {ru: "саженец"});

var Idal = {
    arr: [],
    getLevel: function (data){
        if(data<=100 && data >= 0){
            return 0;
        }
        if(data<=200 && data >= 100){
            return 1;
        }
        if(data<=300 && data >= 200){
            return 2;
        }
        if(data<=400 && data >= 300){
            return 3;
        }
        if(data<=500 && data >= 400){
            return 4;
        }
        if(data<=600 && data >= 500){
            return 5;
        }
        if(data<=700 && data >= 600){
            return 6;
        }
        if(data<=800 && data >= 700){
            return 7;
        }
        if(data<=900 && data >= 800){
            return 8;
        }
        if(data<=999 && data >= 900){
            return 9;
        }
        if(data<=1000 && data >= 1000){
            return 10;
        }
    },
    register: function (id){
        Item.setGlint(id, true);
        Item.setMaxDamage(id, 1000);
        Item.registerNameOverrideFunction(id, function(item, name) {
            return name  + "\n " + item.data + "/" + Item.getMaxDamage(item.id) + " \n уровень: "+ Idal.getLevel(item.data);
        });
        this.arr.push(id);
    }
};

IDRegistry.genItemID("idal"); 
Item.createItem("idal", "idal", {name: "idal", meta: 0}, {stack: 1});
Translation.addTranslation("idal", {ru: "идал"});

IDRegistry.genItemID("idalSave"); 
Item.createItem("idalSave", "idal of conservation", {name: "idal", meta: 0}, {stack: 1});
Translation.addTranslation("idal of conservation", {ru: "идал сохранения"});
Idal.register(ItemID.idalSave);

IDRegistry.genItemID("idalGifts"); 
Item.createItem("idalGifts", "idal gifts", {name: "idal", meta: 0}, {stack: 1});
Translation.addTranslation("idal gifts", {ru: "идал даров"});
Idal.register(ItemID.idalGifts);

const cheakItem = function (id, playerId) {
    if(id && playerId) for(var i = 0;i < 9;i++) {
        var player = new PlayerActor(playerId);
        var item = player.getInventorySlot(i);
        if(item.id == id){
            return {
                id: item.id,
                data: item.data,
                extra: item.extra,
                count: item.count,
                slot: i
			       };
		     }
	   }
};

Callback.addCallback("ServerPlayerTick", function(player, isPlayerDead){
    let item = cheakItem(ItemID.idalGifts, player);
    if(item) if(item.id == ItemID.idalGifts){
        if(Math.random()<=0.01){
            let mana = ManaCore.get(player);
            mana.count += Idal.getLevel(item.data) * 10;
            manaPlayer[player] = mana;
            Network.sendToServer("dc.set", manaPlayer);
        }
    }
});

Callback.addCallback("wasteMana", function(player, manaNow, manaWill){
    let item = cheakItem(ItemID.idalSave, player);
    if(item){
        if(item.id == ItemID.idalSave){
            let spending = manaNow.count - manaWill.count;
            if(spending>=11){
                let per1 = spending / 100 * Idal.getLevel(item.data); 
                per1 = Math.ceil(per1);
                manaWill.count+=per1;
                Debug.message("idal save - "+player+" "+per1);
                manaPlayer[player] = manaWill;
                Network.sendToServer("dc.set", manaPlayer);
            }else{
                manaPlayer[player] = manaWill;
                Network.sendToServer("dc.set", manaPlayer);
                Debug.message("set mana player - "+player+" "+JSON.stringify(manaWill, null, true));
            }
        }else{
            manaPlayer[player] = manaWill;
            Network.sendToServer("dc.set", manaPlayer);
             Debug.message("set mana player - "+player+" "+JSON.stringify(manaWill, null, true));
        }
    }else{
        manaPlayer[player] = manaWill;
        Network.sendToServer("dc.set", manaPlayer);
        Debug.message("set mana player - "+player+" "+JSON.stringify(manaWill, null, true));
    }
});

Item.addCreativeGroup("idals", Translation.translate("idals"), [
    	ItemID.idal,
    	ItemID.idalSave,
     ItemID.idalGifts
]);
