IDRegistry.genItemID("armor1");
Item.createArmorItem("armor1", "Fire helmet" , {name: "armor_fire", meta: 4}, {type: "helmet", armor: 7, durability: 6993, texture: "armor/armor1.png"}); 

Translation.addTranslation("Fire helmet", {ru: "огненый шлем"});

IDRegistry.genItemID("armor2");
Item.createArmorItem("armor2" , "fire chestplate", {name: "armor_fire", meta: 3}, {type: "chestplate", armor: 10, durability: 9102, texture: "armor/armor1.png"}); 

Translation.addTranslation("fire chestplate", {ru: "огненный нагрудник"});

IDRegistry.genItemID("armor3");
Item.createArmorItem("armor3", "fire leggings", {name: "armor_fire", meta: 2}, {type: "leggings", armor: 9, durability: 8103, texture: "armor/armor2.png"});

Translation.addTranslation("fire leggings", {ru: "огненные поножи"});

IDRegistry.genItemID("armor4");
Item.createArmorItem("armor4", "fire boots", {name: "armor_fire", meta: 1}, {type: "boots", armor: 6, durability: 6438, texture: "armor/armor1.png"});

Translation.addTranslation("fire boots", {ru: "огненые ботинки"});

IDRegistry.genItemID("armor5");
Item.createArmorItem("armor5", "Divine helmet" , {name: "armor", meta: 1}, {type: "helmet", armor: 5, durability: 2775, texture: "armor/armor4.png"}); 

Translation.addTranslation("Divine helmet", {ru: "божественый шлем"});

IDRegistry.genItemID("armor6");
Item.createArmorItem("armor6" , "Divine chestplate", {name: "armor", meta: 2}, {type: "chestplate", armor: 8, durability: 4440, texture: "armor/armor4.png"}); 

Translation.addTranslation("Divine chestplate", {ru: "божественый нагрудник"});

IDRegistry.genItemID("armor7");
Item.createArmorItem("armor7", "Divine leggings", {name: "armor", meta: 3}, {type: "leggings", armor: 7, durability: 3885, texture: "armor/armor3.png"});

Translation.addTranslation("Divine leggings", {ru: "божественые поножи"});

IDRegistry.genItemID("armor8");
Item.createArmorItem("armor8", "Divine boots", {name: "armor", meta: 4}, {type: "boots", armor: 4, durability: 2220, texture: "armor/armor4.png"});

Translation.addTranslation("Divine boots", {ru: "божественый ботинки"});

Item.addCreativeGroup("helmet", Translation.translate("Helmet"), [
	ItemID.armor1,
	ItemID.armor5,
]);
Item.addCreativeGroup("chestplate", Translation.translate("Chestplate"), [
	ItemID.armor2,
	ItemID.armor6,
]);
Item.addCreativeGroup("leggings", Translation.translate("Leggings"), [
	ItemID.armor3,
	ItemID.armor7,
]);
Item.addCreativeGroup("boots", Translation.translate("Boots"), [
	ItemID.armor4,
	ItemID.armor8,
]);

Item.setEnchantType(ItemID.armor1, Native.EnchantType.helmet, 14);

Item.setEnchantType(ItemID.armor2, Native.EnchantType.chestplate, 14);

Item.setEnchantType(ItemID.armor3, Native.EnchantType.leggings, 14);

Item.setEnchantType(ItemID.armor4, Native.EnchantType.boots, 14);

Item.setEnchantType(ItemID.armor5, Native.EnchantType.helmet, 14);

Item.setEnchantType(ItemID.armor6, Native.EnchantType.chestplate, 14);

Item.setEnchantType(ItemID.armor7, Native.EnchantType.leggings, 14);

Item.setEnchantType(ItemID.armor8, Native.EnchantType.boots, 14);

Item.addRepairItemIds(ItemID.armor1, [ItemID.clitok1]);

Item.addRepairItemIds(ItemID.armor2, [ItemID.clitok1]);

Item.addRepairItemIds(ItemID.armor3, [ItemID.clitok1]);

Item.addRepairItemIds(ItemID.armor4, [ItemID.clitok1]);

Item.addRepairItemIds(ItemID.armor5, [ItemID.clitok]);

Item.addRepairItemIds(ItemID.armor6, [ItemID.clitok]);

Item.addRepairItemIds(ItemID.armor7, [ItemID.clitok]);

Item.addRepairItemIds(ItemID.armor8, [ItemID.clitok]);






















