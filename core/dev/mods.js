if(config.debug.prohibitedItems){
    Item.addToCreative(BlockID.sap, 1, 0, null);
    Item.addToCreative(BlockID.trava, 1, 0, null);
    Item.addToCreative(BlockID.a0, 1, 0, null);
    Item.addToCreative(BlockID.a1, 1, 0, null);
    Item.addToCreative(BlockID.kristaldirt, 1, 0, null);
    Item.addToCreative(BlockID.kristalFire, 1, 0, null);
    Item.addToCreative(BlockID.kristalwind, 1, 0, null);
    Item.addToCreative(BlockID.kristalLight, 1, 0, null);
    Item.addToCreative(BlockID.brickkey, 1, 0, null);
    Item.addToCreative(BlockID.brick3, 1, 0, null);
    Item.addCreativeGroup("prohibited", Translation.translate("prohibited"), [
	      BlockID.sap,
	      BlockID.trava,
	      BlockID.a0,
	      BlockID.a1,
	      BlockID.kristaldirt,
	      BlockID.kristalFire,
	      BlockID.kristalwind,
	      BlockID.kristalLight,
	      BlockID.brickkey,
	      BlockID.brick3
    ]);
}


ModAPI.registerAPI("DungeonAPI", {
    ManaCore: ManaCore,
    Ritual: Ritual,
    Debug: Debug,
    Mp: Mp
});
let ac;
ModAPI.addAPICallback("AchievementsAPI", function(api){
    DA = true;
    ac = api.AchievementAPI;
	api.AchievementAPI.registerGroup({
        uid: "DungeonAchievement",
        name: "Dungeon craft",
        width: 600,
        height: 600,
        size: 100,
        background: "stone",
        icon: {
            id: BlockID.grass2
        }
    });
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "visitRai",
        name: Translation.translate("new world"),
        description: Translation.translate("visit paradise"),
        column: 1,
        row: 2,
        icon: {
            id: ItemID.Gem
        }
    });
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "visitRai2",
        name: Translation.translate("conqueror of worlds"),
        description: Translation.translate("survive in paradise and get out"),
        column: 1,
        row: 3,
        parent: "visitRai",
        icon: {
            id: ItemID.GemEarth
        }
    });
    
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "oreRai",
        name: Translation.translate("mysterious thing"),
        description: Translation.translate("get the ore of paradise"),
        column: 3,
        row: 3,
        parent: "visitRai",
        icon: {
            id: ItemID.clitok
        }
    });
    
   api.AchievementAPI.register("DungeonAchievement", {
        uid: "trade",
        name: Translation.translate("full of paradise?"),
        description: Translation.translate("trade with an angel"),
        column: 4,
        row: 2,
        parent: "visitRai",
        icon: {
            id: ItemID.koin_1
        }
    });
   
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "manaMax",
        name: Translation.translate("powerful magician"),
        description: Translation.translate("pump your mana pool to 100,000"),
        column: 5,
        row: 1,
        type: "challenge",
        parent: "trade",
        icon: {
            id: ItemID.DarkSphere
        }
    });
    
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "manaMax2",
        name: Translation.translate("powerful magician"),
        description: Translation.translate("pump your mana pool to 1,000,000"),
        column: 6,
        row: 1,
        type: "challenge",
        parent: "trade",
        icon: {
            id: ItemID.DarkSphere
        }
    });
    
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "killBoss0",
        name: Translation.translate("bloody eye"),
        description: Translation.translate("kill the boss of the eye"),
        column: 1,
        row: 8,
        type: "challenge",
        icon: {
            id: ItemID.glas
        }
    });
   
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "storageMagic",
        name: Translation.translate("storing magic"),
        description: Translation.translate("find a way to store magic"),
        column: 4,
        row: 4,
        parent: "oreRai",
        icon: {
            id: ItemID.RitualActivator
        }
    });
    
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "Ritual1",
        name: Translation.translate("old magic"),
        description: Translation.translate("use new ore and boss statue"),
        column: 6,
        row: 4,
        parent: "storageMagic",
        icon: {
            id: BlockID.statua
        }
    });
    
    
    Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
        if(item.id == ItemID.Gem && block.id == BlockID.block1) api.AchievementAPI.give(player,  "DungeonAchievement", "visitRai");
    });
    
    Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
        if(item.id == ItemID.Gem2 && block.id == BlockID.block1) api.AchievementAPI.give(player,  "DungeonAchievement", "visitRai");
    });
    
    Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
        if(item.id == ItemID.GemEarth) api.AchievementAPI.give(player,  "DungeonAchievement", "visitRai2");
    });
    
    Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
        if(item.id == ItemID.GemEarth2) api.AchievementAPI.give(player,  "DungeonAchievement", "visitRai2");
    });
    
    Callback.addCallback("DestroyBlock", function (coords, block, player) {
        if(block.id==BlockID.ore) api.AchievementAPI.give(player,  "DungeonAchievement", "oreRai");
    });
    

    Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
        if(item.id == ItemID.DarkSphere && ManaCore.get(player).countMax >= 100000) api.AchievementAPI.give(player,  "DungeonAchievement", "manaMax");
        if(item.id == ItemID.DarkSphere && ManaCore.get(player).countMax >= 1000000) api.AchievementAPI.give(player,  "DungeonAchievement", "manaMax2");
    });
    
    Callback.addCallback("EntityDeath", function (entity, attacker, damageType) {
        if(Entity.getTypeName(entity) == "dc:boss0<>" && Player.isPlayer(attacker)) api.AchievementAPI.give(attacker,  "DungeonAchievement", "killBoss0");
    });
    
    
    Translation.addTranslation("new world", {ru: "иной мир"});
    Translation.addTranslation("visit paradise", {ru: "посетите рай"});
    Translation.addTranslation("conqueror of worlds", {ru: "покоритель миров"});
    Translation.addTranslation("survive in paradise and get out", {ru: "выживите в раю и выберетесь"});
    Translation.addTranslation("mysterious thing", {ru: "загадочная вещь"});
    Translation.addTranslation("get the ore of paradise", {ru: "добудьте руду рая"});
    Translation.addTranslation("full of paradise?", {ru: "насатый рая?"});
    Translation.addTranslation("trade with an angel", {ru: "по торгуйте с ангелом"});
    Translation.addTranslation("powerful magician", {ru: "мощный маг"});
    Translation.addTranslation("pump your mana pool to 100,000", {ru: "прокачайте запас маны до 100.000"});
    Translation.addTranslation("pump your mana pool to 1,000,000", {ru: "прокачайте запас маны до 1,000,000"});
    Translation.addTranslation("bloody eye", {ru: "кровавое око"});
    Translation.addTranslation("kill the boss of the eye", {ru: "убейте босса око"});
    Translation.addTranslation("old magic", {ru: "древняя магия"});
    Translation.addTranslation("use new ore and boss statue", {ru: "используете новую руду и статую босса"});
    Translation.addTranslation("storing magic", {ru: "хранение магии"});
    Translation.addTranslation("find a way to store magic", {ru: "найдите способ хранить магию"});
    Translation.addTranslation("improvement time", {ru: "время улучшения"});
    Translation.addTranslation("use all basic rituals", {ru: "используете все базовые ритуалы"});
});
Callback.addCallback("RitualDC", function(player, type, coords){
    if(DA && type == "statua") ac.give(player,  "DungeonAchievement", "Ritual1");
});
ModAPI.addAPICallback("RecipeViewer", function(api){
    Callback.addCallback("LevelLoaded", function(){
        let RV = api.Core;
        let recipe = Ritual.arr1;
        let recipeList = [];
        let result;
        for(var i in recipe){
            result = recipe[i].obj;
            recipeList.push({
                mana: result.mana,
                input: [
                    {id: result.xp, count: 0, data: 0},
                    {id: result.xm, count: 0, data: 0},
                    {id: result.zp, count: 0, data: 0},
                    {id: result.zm, count: 0, data: 0}
                ],
                output: [
                    {id: recipe[i].id, count: 1, data: 0}
                ]
            });
        }
        RV.registerRecipeType("ritual1", {
            title: "ритуал создания/ritul create",
            contents: {
                icon: BlockID.statua,
                params: {slot: "_default_slot_light"},
                drawing: [],
                elements: {
                    output0: {x: 440, y: 150, size: 120},
                    input0: {x: 440, y: 0, size: 120},
                    input1: {x: 440, y: 300, size: 120}, 
                    input2: {x: 590, y: 150, size: 120},
                    input3: {x: 290, y: 150, size: 120},
                    textMana: {type: "text", x: 150, y: 350, font: {size: 40}},
                },
            },
            recipeList: recipeList,
            onOpen: function(elements, data){
                 elements.get("textMana").onBindingUpdated("text", "mana: "+data.mana);
            }
        });
        recipe = Ritual.arr2;
        recipeList = [];
        let obj;
        for(var i in recipe){
            obj = recipe[i];
            recipeList.push({
                input: [
                    {id: obj.id, count: 0, data: 0},
                ],
                output: [
                    {id: obj.result, count: 1, data: 0}
                ]
            });
        }
        RV.registerRecipeType("ritual2", {
            title: "ритуал улучшения/ritul update",
            contents: {
                icon: BlockID.rityal1,
                params: {slot: "_default_slot_light"},
                drawing: [
                    {type: "bitmap", x: 410, y: 200, scale: 7.5, bitmap: "furnace_bar_guide"}
                ],
                elements: {
                    output0: {x: 640, y: 200, size: 120},
                    input0: {x: 240, y: 200, size: 120},
                    textMana: {type: "text", x: 400, y: 150, font: {size: 40}},
                },
            },
            recipeList: recipeList,
            onOpen: function(elements, data){
                 elements.get("textMana").onBindingUpdated("text", "mana: "+Ritual.get2(data.input[0].id).mana);
            }
        });
        recipeList = [];
        let keys = Object.keys(Ritual.obj3);
        for(var g in keys){
            let key = keys[g];
            for(var i in Ritual.obj3[key].arr){
                recipeList.push({
                    input: [
                        {id: parseInt(key), data: 0},
                    ],
                    output: [
                        {id: Ritual.obj3[key].arr[i], count: 1, data: 0}
                    ] 
                });
            }
        }
        RV.registerRecipeType("ritual3", {
            title: "ритуал зачарование/ritul enchantment",
            contents: {
                icon: BlockID.rityal1,
                params: {slot: "_default_slot_light"},
                drawing: [
                    {type: "bitmap", x: 410, y: 200, scale: 7.5, bitmap: "furnace_bar_guide"}
                ],
                elements: {
                    output0: {x: 640, y: 200, size: 120},
                    input0: {x: 240, y: 200, size: 120},
                    textMana: {type: "text", x: 400, y: 150, font: {size: 40}},
                },
            },
            recipeList: recipeList,
            onOpen: function(elements, data){
                 elements.get("textMana").onBindingUpdated("text", "mana: "+Ritual.get3(data.input[0].id).obj.mana);
            }
        });
        recipeList = [];
        for(var g in Entity.tradeArr){
            let obj = Entity.tradeArr[g];
            recipeList.push({
                input: [
                    {id: obj.item.id, count: obj.item.count, data: obj.item.data},
                ],
                output: [
                    {id: obj.result.id, count: obj.count.max, data: obj.result.data}
                ] 
            });
        }
        RV.registerRecipeType("tradeAngel", {
            title: "торговля/trade",
            contents: {
                icon: 388,
                params: {slot: "_default_slot_light"},
                drawing: [
                    {type: "bitmap", x: 410, y: 200, scale: 7.5, bitmap: "furnace_bar_guide"}
                ],
                elements: {
                    output0: {x: 640, y: 200, size: 120},
                    input0: {x: 240, y: 200, size: 120},
                },
            },
            recipeList: recipeList,
        });
    });
});
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
    MagicCore.setArmor(ItemID.armor1, "Protection", 70);
    MagicCore.setArmor(ItemID.armor2, "Protection", 70);
    MagicCore.setArmor(ItemID.armor3, "Protection", 70);
    MagicCore.setArmor(ItemID.armor4, "Protection", 70);
    MagicCore.setArmor(ItemID.armor5, "Protection", 60);
    MagicCore.setArmor(ItemID.armor6, "Protection", 60);
    MagicCore.setArmor(ItemID.armor7, "Protection", 60);
    MagicCore.setArmor(ItemID.armor8, "Protection", 60);
});
