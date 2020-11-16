
var rai1 = new Dimensions.CustomDimension("rai1", 1345); 
rai1.setSkyColor(0, 128, 188) 
rai1.setFogColor(0, 128, 188); 
 
rai1.setGenerator(Dimensions.newGenerator({
    layers: [
        {
            minY: 0, maxY: 68, 
            yConversion: [[0, 1], [1, -1]], 
            material: {base: BlockID.stone2, surface: {id:BlockID.dirt2, data: 0, width:4}, cover: BlockID.grass2}, 
            noise: {
                octaves: {count: 4, scale: 20}
            }
        }
    ]
}));

var rai_particle = Particles.registerParticleType({
 texture: "rai_particle",
 render: 2,
 size:[4, 10],
 lifetime: [40, 100],
 animators: {
  alpha:{fadeIn: .4, fadeOut: .4},
  size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
 }
});

Callback.addCallback("ServerPlayerTick", function(player, isPlayerDead) {
let pa = new PlayerActor(player);
let dimension = pa.getDimension();
if(dimension==rai1.id) {
let coords = Entity.getPosition(player);
if(Math.random() <= 0.3){

Particles.addFarParticle(rai_particle, coords.x+Math.random() * 15 - Math.random() * 15, coords.y+Math.random() * 5 - Math.random() * 5, coords.z+Math.random() * 15 - Math.random() * 15, Math.random()*0.1-Math.random()*0.1, Math.random()*0.1-Math.random()*0.1, Math.random()*0.1-Math.random()*0.1, 0);
}
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId == rai1.id) {

    for(i = 0; i < 3; i++){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2){
            
                            setWood(coords);
                            
} 
} 
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId == rai1.id) {
    for(i = 0; i < 15; i++){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2){
            if(World.getBlock(coords.x, coords.y+1, coords.z).id==0){
            World.setBlock(coords.x, coords.y+1, coords.z, BlockID.trava, 0);

} 
}
} 
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId == rai1.id) {
    var random1 = Math.random() * 20;
    if(random1<=1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2){
            if(World.getBlock(coords.x, coords.y+1, coords.z).id==0){
                World.setBlock(coords.x, coords.y+1, coords.z, BlockID.a0, 0);
            }
}
} 
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==rai1.id){
    var random = Math.random()*5;
if (random <= 3){
    for(var i = 0; i < 2; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 20);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ore, 0, 10, true);

} 
} 
}
});

var wood1 = new DungeonAPI("wood.json");
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId == rai1.id){
        let random1 = Math.random() * 20;
        if(random1<=1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            wood1.setStructure(coords.x, coords.y, coords.z, 0);
} 
} 
});

var wood2 = new DungeonAPI("wood2.json");
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId == rai1.id){
        let random1 = Math.random() * 10;
        if(random1<=1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            wood2.setStructure(coords.x, coords.y, coords.z, 0);
} 
} 
});

var wood3 = new DungeonAPI("wood3.json");
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId <= rai1.id){
        let random1 = Math.random() * 10;
        if(random1<=1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            wood3.setStructure(coords.x, coords.y, coords.z, 0);
} 
} 
});

Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){ 
if(item.id==ItemID.Gem){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y, coords.z).id == BlockID.block1) {
Dimensions.transfer(player, rai1.id);
var pos = GenerationUtils.findHighSurface(coords.x, coords.z);
Entity.setPosition(player, pos.x, pos.y+2, pos.z);
Entity.setCarriedItem(player, item.id, item.count-1, item.data);
Entity.setCarriedItem(player, ItemID.GemEarth, 1, 0);
Entity.addEffect(player, Native.PotionEffect.damageResistance, 9, 100);
} 
}
});

Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){ 
if(item.id==ItemID.Gem2){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y, coords.z).id == BlockID.block1) {
Dimensions.transfer(player, rai1.id);
var pos = GenerationUtils.findHighSurface(coords.x, coords.z);
Entity.setPosition(player, pos.x, pos.y+2, pos.z);
Entity.setCarriedItem(player, item.id, item.count-1, item.data);
Entity.setCarriedItem(player, ItemID.GemEarth2, 1, 0);
Entity.addEffect(player, Native.PotionEffect.damageResistance, 9, 100);
} 
}
});

Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){ 
if(item.id==ItemID.GemEarth){
Dimensions.transfer(player, 0);
var pos = GenerationUtils.findHighSurface(coords.x, coords.z);
Entity.setPosition(player, pos.x, pos.y+2, pos.z);
Entity.setCarriedItem(player, item.id, item.count-1, item.data);
}
});
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){ 
if(item.id==ItemID.GemEarth){
Dimensions.transfer(player, 0);
var pos = GenerationUtils.findHighSurface(coords.x, coords.z);
Entity.setPosition(player, pos.x, pos.y+2, pos.z);
Entity.setCarriedItem(player, ItemID.Gem2, 1, 0);
}
});
