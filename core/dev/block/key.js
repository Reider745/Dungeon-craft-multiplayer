IDRegistry.genBlockID("brickkey");
Block.createBlock("brickkey", [ {name: "brickkey", texture: [["brickBlock", 1],["brickBlock", 1],["keyBlock", 0],["keyBlock", 0],["brickBlock", 0]], inCreative: false}]);

Translation.addTranslation("brickkey", {ru: "блок с входом под ключ"});

Block.setDestroyTime(BlockID.brickkey, 9999999999999);

var renderChest = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(BlockID.brickkey, -1, renderChest); 
     var modelChest = BlockRenderer.createModel(); 
           renderChest.addEntry(modelChest);
modelChest.addBox (0/16, 0, 6/16, 16/16, 1, 10/16, BlockID.brickkey, 0);

IDRegistry.genBlockID("brick3");
Block.createBlock("brick3", [ {name: "brickkey2", texture: [["brickBlock", 1],["brickBlock", 1],["brick2", 0],["brick2", 0],["brickBlock", 0]], inCreative: false}]);

Block.setDestroyTime(BlockID.brick3, 9999999999999);

Translation.addTranslation("brickkey2", {ru: "тонкая стена"});

var renderChest2 = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(BlockID.brick3, -1, renderChest2); 
     var modelChest2 = BlockRenderer.createModel(); 
           renderChest2.addEntry(modelChest2);
modelChest2.addBox (0/16, 0, 6/16, 16/16, 1, 10/16, BlockID.brick3, 0);

