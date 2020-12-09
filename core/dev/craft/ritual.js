Callback.addCallback("ModsLoaded", function () {
    Ritual.register3(ItemID.manysript1, 1000);
    Ritual.addCraft3(ItemID.manysript1, ItemID.manysript2);
    Ritual.register3(ItemID.Drune0, 1000);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune1);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune2);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune3);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune4);
    
    Ritual.addCraft2(ItemID.armor5, ItemID.armor1, 40000);
    Ritual.addCraft2(ItemID.armor6, ItemID.armor2, 40000);
    Ritual.addCraft2(ItemID.armor7, ItemID.armor3, 40000);
    Ritual.addCraft2(ItemID.armor8, ItemID.armor4, 40000);
    Ritual.addCraft2(ItemID.sword_2, ItemID.sword_1, 30000);
    Ritual.addCraft2(ItemID.pickaxe_2, ItemID.pickaxe_1, 30000);
    Ritual.addCraft2(ItemID.clitok, ItemID.clitok1, 20000);
    Ritual.addCraft2(ItemID.keyDungeon, ItemID.keyDungeon2, 10000);
    
    Entity.addTrade({id: ItemID.crystalLightning}, {id: ItemID.ring});
    Entity.addTrade({id: ItemID.koin_0}, {id: ItemID.clitok1});
    Entity.addTrade({id: ItemID.koin_1}, {id: ItemID.DarkSphere});
    Entity.addTrade({id: ItemID.Drune2}, {id: ItemID.keyDungeon});
    Entity.addTrade({id: 266, count: 8}, {id: ItemID.gotovka});
    
    Ritual.addCraft1(0, {
        xp: ItemID.Gem2,
        xm: ItemID.Gem2,
        zp: ItemID.Gem2,
        zm: ItemID.Gem2,
        mana: 0
     }, function(player, x, y, z){
         let mana = ManaCore.get(player);
         if(mana.count+4000<=mana.countMax){
             mana.count += 4000;
         }else{
             mana.count = mana.countMax;
         }
         ManaCore.set(player, mana);
     });
     Ritual.addCraft1(0, {
        xp: ItemID.Gem,
        xm: ItemID.Gem,
        zp: ItemID.Gem,
        zm: ItemID.Gem,
        mana: 0
     }, function(player, x, y, z){
         let mana = ManaCore.get(player);
         if(mana.count+1000<=mana.countMax){
             mana.count += 1000;
         }else{
             mana.count = mana.countMax;
         }
         ManaCore.set(player, mana);
     });
     Ritual.addCraft1(ItemID.poic1, {
        xp: ItemID.gotovka,
        xm: ItemID.Gem,
        zp: ItemID.clitok,
        zm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.poic1, {
        xp: ItemID.Gem,
        xm: ItemID.gotovka,
        zp: ItemID.clitok,
        zm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.poic1, {
        zp: ItemID.Gem,
        zm: ItemID.gotovka,
        xp: ItemID.clitok,
        xm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.poic1, {
        zp: ItemID.gotovka,
        zm: ItemID.Gem,
        xp: ItemID.clitok,
        xm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.clitok, {
        zp: ItemID.crystalearth,
        zm: ItemID.crystalearth,
        xp: ItemID.crystalLightning,
        xm: ItemID.crystalLightning,
        mana: 1000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.clitok, {
        xp: ItemID.crystalearth,
        xm: ItemID.crystalearth,
        zp: ItemID.crystalLightning,
        zm: ItemID.crystalLightning,
        mana: 1000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.clitok1, {
        zp: ItemID.crystalearth,
        zm: ItemID.crystalearth,
        xp: ItemID.crystalfire,
        xm: ItemID.crystalfire,
        mana: 10000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.clitok1, {
        xp: ItemID.crystalearth,
        xm: ItemID.crystalearth,
        zp: ItemID.crystalfire,
        zm: ItemID.crystalfire,
        mana: 10000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.Gem, {
        xp: ItemID.clitok,
        xm: ItemID.clitok,
        zp: ItemID.clitok,
        zm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});
});