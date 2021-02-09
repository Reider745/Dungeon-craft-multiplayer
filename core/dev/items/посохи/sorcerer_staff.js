IDRegistry.genItemID("sorcererStaff"); 
Item.createItem("sorcererStaff", "sorcerer staff", {name: "sorcerer_staff", meta: 0}, {stack: 1});
Translation.addTranslation("sorcerer staff", {ru: "посох чародея"});

Item.registerUseFunction("sorcererStaff", function(coords, item, block, player){
    if(block.id == BlockID.blockmetal){
        for(let i = 0;i<=15;i++){
            Mp.spawnParticle(PartType.magic, coords.x + Math.random(), coords.y + Math.random(), coords.z + Math.random(), 0, Math.random()/10, 0);
        }
        let bs = BlockSource.getDefaultForActor(player);
        bs.setBlock(coords.x, coords.y, coords.z, BlockID.manaStorage, 0);
        World.addTileEntity(coords.x, coords.y, coords.z);
    }
});
Item.addCreativeGroup("staff", Translation.translate("staff"), [
	  ItemID.sorcererStaff,
	  ItemID.stick2,
]);
/*
name: "mage", 
magisMax: 100, 
magis: 5,
        ProtectionMax: 40,
        Protection: 0,
        necromancerMax: 10,⁹
        necromancer: 0,
        AspectsMax: 100000,
        AspectsNow: 5000,
        Aspects: 0
*/
function isItem(ent){
    
}
ModAPI.addAPICallback("AncientWondersAPI", function(api){
    api.Wands.addStick({
        id: ItemID.sorcererStaff, 
        time: 15,
        texture: {
            name: "sorcerer_staff"
        },
        bonus: {
            necromancer: -5,
            Protection: -5,
            magis: -5,
            aspects: 100
        }
    });
    api.Wands.addIcon(ItemID.sorcererStaff, "sorcerer_staff", 1);
    IDRegistry.genItemID("srollAttack"); 
    Item.createItem("srollAttack", "scroll: attacks \n will hit mobs within a 5 block radius", {name: "sroll", meta: 0}, {stack: 1, isTech: true});
    
    Translation.addTranslation("scroll: attacks \n will hit mobs within a 5 block radius", {ru: "свиток: атаки \n отакует мобов в радиусе 5 блоков"});
   
    Ritual.register3(ItemID.sroll3, 1000);
    Ritual.addCraft3(ItemID.sroll3, ItemID.sorcererStaff);
    

 api.Wands.setPrototype(ItemID.srollAttack, {
    type: "function", 
    compatibility: [ItemID.sroll1], 
    activate: {
        magis: 15,
        necromancer: 10
    },
    setFunction: function(packet){
        let mana = ManaCore.get(packet.player);
        if(mana.count >= 50){
            mana.count-=50;
            ManaCore.set(packet.player, mana);
            let pos = Entity.getPosition(packet.entity);
            let ents = Entity.getAllInRange(pos, 5);
            Entity.damageEntity(packet.entity, 5);
            for(let i in ents){
			            if(Entity.getTypeName(ents[i])!="minecraft:item<>"){
                     Entity.damageEntity(ents[i], 5);
                    pos = Entity.getPosition(ents[i]);
                    for(let i = 0;i<=5;i++){
                         Mp.spawnParticle(PartType.magic, pos.x + Math.random(), pos.y + Math.random(), pos.z + Math.random(), 0, Math.random()/10, 0);
                    }
                }
            }
        }else{
            Mp.message(packet.player,  "нужна маны 50");
        }
    }, 
    installation: function (player, item){
        Entity.setCarriedItem(player, item.id, item.count-1, item.data);
    }
});
});
