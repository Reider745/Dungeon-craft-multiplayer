IDRegistry.genItemID("sword_1"); 
Item.createItem("sword_1", "The sword of fire", {name: "sword_1", meta: 0}, {stack: 1});

Translation.addTranslation("The sword of fire", {ru: "меч огня"});

Item.setEnchantType(ItemID.sword_1, Native.EnchantType.weapon, 14);

Item.addRepairItemIds(ItemID.sword_1, [ItemID.clitok1]);

IDRegistry.genItemID("pickaxe_1"); 
Item.createItem("pickaxe_1", "pickaxe Fire", {name: "pickaxe_1", meta: 0}, {stack: 1});

Item.setEnchantType(ItemID.pickaxe_1, Native.EnchantType.pickaxe, 14);

Translation.addTranslation("pickaxe Fire", {ru: "кирка огня"});

Item.addRepairItemIds(ItemID.pickaxe_1, [ItemID.clitok1]);

IDRegistry.genItemID("sword_2");
Item.createItem("sword_2", "The sword of God", {name: "sword2", meta: 0}, {stack: 1});

Item.addRepairItemIds(ItemID.sword_2, [ItemID.clitok]);

var godSword = new RenderMesh(__dir__ + "/res/model/sword_god.obj","obj");
ItemModel.getFor(ItemID.sword_2, 0).setHandModel(godSword, "3dItem/3d_god_sword")


Translation.addTranslation("The sword of God", {ru: "меч бога"});

Item.setEnchantType(ItemID.sword_2, Native.EnchantType.weapon, 14);

IDRegistry.genItemID("pickaxe_2"); Item.createItem("pickaxe_2", "pickaxe of God", {name: "kirka", meta: 0}, {stack: 1});

Item.addRepairItemIds(ItemID.sword_2, [ItemID.clitok]);

Item.addRepairItemIds(ItemID.pickaxe_2, [ItemID.clitok]);

Translation.addTranslation("pickaxe of God", {ru: "Кирка бога"});

Item.addCreativeGroup("sword", Translation.translate("Sword"), [
	ItemID.sword_1,
	ItemID.sword_2,
]);
Item.addCreativeGroup("pickaxe", Translation.translate("Pickaxe"), [
	ItemID.pickaxe_1,
	ItemID.pickaxe_2,
]);

ToolAPI.addToolMaterial("fire", {
    durability: 4440,
    level: 4,
    efficiency: 18,
    damage: 10,
    enchantability: 14
});



ToolAPI.addToolMaterial("god", {
    durability: 2220,
    level: 5,
    efficiency: 6,
    damage: 6,
    enchantability: 14
});

ToolAPI.setTool(ItemID["sword_1"], "fire", ToolType.sword);

ToolAPI.setTool(ItemID["sword_2"], "god", ToolType.sword);

ToolAPI.setTool(ItemID["pickaxe_1"], "fire", ToolType.pickaxe);

ToolAPI.setTool(ItemID["pickaxe_2"], "god", ToolType.pickaxe);




Item.registerUseFunction("sword_1", function(coords, item, block, player)
{
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y + 1, coords.z).id==0){
b.setBlock(coords.x, coords.y + 1, coords.z, 51, 0);
}
}
);

Callback.addCallback("PlayerAttack", function (player, victim) { 
var item = Entity.getCarriedItem(player);
if(item.id==ItemID.sword_1){
Entity.setFire(victim, 80, true);
} 
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
var item = Entity.getCarriedItem(player);
if(item.id==ItemID.sword_2){
var random = Math.random() * 1;
if(random <= 0.1){
var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 93);
World.playSoundAtEntity(victim, "ambient.weather.thunder", 50);
Entity.damageEntity(victim, 20);
}
} 
});
















