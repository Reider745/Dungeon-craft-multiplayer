IDRegistry.genItemID("Scroll2"); 
Item.createItem("Scroll2", "Milk scroll", {name: "Scroll", meta: 2}, {stack: 1});

Translation.addTranslation("Milk scroll", {ru: "свиток мрака"});

Item.registerUseFunction("Scroll2", function(coords, item, block, player){
let mana = ManaCore.get(player);
if(mana.count>=2000){
mana.count-=2000;
World.setWorldTime(15000);
ManaCore.set(player, mana);
} 
}
);

Recipes.addShaped({id: ItemID.Scroll2, count: 1, data: 0},
	["**b", "*a*", "b**"], 
	['a', 340, 0, 'b', 405, 0]);












