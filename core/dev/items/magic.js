IDRegistry.genItemID("RitualActivator"); 
Item.createItem("RitualActivator", "Ritual activator", {name: "Ritual_activator", meta: 0}, {stack: 1});
Translation.addTranslation("Ritual activator", {ru: "Ритуальный активатор"});

Item.registerUseFunctionForID(ItemID.RitualActivator, function(coords, item, block, player) {
    let mana = ManaCore.get(player);
    Mp.message(player, mana.count+"/"+mana.countMax);
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

ModAPI.addAPICallback("AncientWondersAPI", function(api){
    const MagicCore = api.MagicCore;
    Item.registerUseFunctionForID(ItemID.manysript2, function(coords, item, block, player) {
        let mana = ManaCore.get(player);
        if(mana.count >= 5000){
            MagicCore.piece(player, "magis");
            MagicCore.piece(player, "Protection");
            MagicCore.piece(player, "necromancer");
            if(MagicCore.isClass(player)){
                mana.count-=5000;
            }
            ManaCore.set(player, mana);
        }else{
            Mp.message(player, "у вас не хватает маны, нужно не меньше 5000");
        }
        
    });
    
});

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
