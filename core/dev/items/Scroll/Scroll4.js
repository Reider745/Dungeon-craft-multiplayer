let fire = {
    set: function (x, y, z, id, data, player){
        let b = BlockSource.getDefaultForActor(player);
        if(b.getBlock(x, y, z).id==0){
            if(b.getBlock(x, y-1, z).id>=0){
            b.setBlock(x, y, z, id, data);
            }
        }
    }, 
};

IDRegistry.genItemID("Scroll4"); 
Item.createItem("Scroll4", "scroll of fire", {name: "Scroll", meta: 3}, {stack: 1});

Translation.addTranslation("scroll of fire", {ru: "свиток огня"});

Item.registerUseFunction("Scroll4", function(coords, item, block, player){
let mana = ManaCore.get(player);
if(mana.count>=50){
mana.count-=50;
Entity.addEffect(player, Native.PotionEffect.fireResistance, 0, 150, false, false);

fire.set(coords.x, coords.y+1, coords.z, 51, 0, player);
fire.set(coords.x+1, coords.y+1, coords.z, 51, 0, player);
fire.set(coords.x-1, coords.y+1, coords.z, 51, 0, player);

fire.set(coords.x, coords.y+1, coords.z+1, 51, 0, player);
fire.set(coords.x+1, coords.y+1, coords.z+1, 51, 0, player);
fire.set(coords.x-1, coords.y+1, coords.z+1, 51, 0, player);

fire.set(coords.x, coords.y+1, coords.z-1, 51, 0, player);
fire.set(coords.x+1, coords.y+1, coords.z-1, 51, 0, player);
fire.set(coords.x-1, coords.y+1, coords.z-1, 51, 0, player);


fire.set(coords.x, coords.y, coords.z, 51, 0, player);
fire.set(coords.x+1, coords.y, coords.z, 51, 0, player);
fire.set(coords.x-1, coords.y, coords.z, 51, 0, player);

fire.set(coords.x, coords.y, coords.z+1, 51, 0, player);
fire.set(coords.x+1, coords.y, coords.z+1, 51, 0, player);
fire.set(coords.x-1, coords.y, coords.z+1, 51, 0, player);

fire.set(coords.x, coords.y, coords.z-1, 51, 0, player);
fire.set(coords.x+1, coords.y, coords.z-1, 51, 0, player);
fire.set(coords.x-1, coords.y, coords.z-1, 51, 0, player);

fire.set(coords.x, coords.y+2, coords.z, 51, 0, player);
fire.set(coords.x+1, coords.y+2, coords.z, 51, 0, player);
fire.set(coords.x-1, coords.y+2, coords.z, 51, 0, player);

fire.set(coords.x, coords.y+2, coords.z+1, 51, 0, player);
fire.set(coords.x+1, coords.y+2, coords.z+1, 51, 0, player);
fire.set(coords.x-1, coords.y+2, coords.z+1, 51, 0, player);

fire.set(coords.x, coords.y+1, coords.z-1, 51, 0, player);
fire.set(coords.x+1, coords.y+1, coords.z-1, 51, 0, player);
fire.set(coords.x-1, coords.y+1, coords.z-1, 51, 0, player);

ManaCore.set(player, mana);
}
}
);

Recipes.addShaped({id: ItemID.Scroll4, count: 1, data: 0},
	["**b", "*a*", "b**"], 
	['a', 340, 0, 'b', 87, 0]);

Item.addCreativeGroup("sroll", Translation.translate("Sroll"), [
	ItemID.Scroll6,
 ItemID.Scroll2, 
 ItemID.Scroll4, 
 ItemID.Scroll1,
]);


















