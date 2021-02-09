IDRegistry.genItemID("Scroll6"); 
Item.createItem("Scroll6", "Svic of the clear day", {name: "Scroll", meta: 6}, {stack: 1});

Translation.addTranslation("Svic of the clear day", {ru: "свиток ясного дня"});

Item.registerUseFunction("Scroll6", function(coords, item, block, player){
let mana = ManaCore.get(player);
if(mana.count>=1000){
mana.count-=1000;
World.setWeather(1);
ManaCore.set(player, mana);
}
}
);

Recipes.addShaped({id: ItemID.Scroll6, count: 1, data: 0},
	["**b", "*a*", "b**"], 
	['a', 340, 0, 'b', 264, 0]);
















