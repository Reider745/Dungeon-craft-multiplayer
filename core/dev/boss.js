function arrow(ent){
    let v = Entity.getVelocity(ent);
    let pos = Entity.getPosition(ent);
    let b = BlockSource.getDefaultForDimension(Entity.getDimension(ent))
    Entity.moveToAngle(Entity.spawn(pos.x, pos.y + 4, pos.z, 80), Entity.getLookAngle(ent), {speed: 1});
}
function tnt(ent){
    let pos = Entity.getPosition(ent);
    pos.x += (Math.random()*10)-(Math.random()*10);
    pos.z += (Math.random()*10)-(Math.random()*10);
    Entity.spawn(pos.x, pos.y+8, pos.z, 65);
}
Item.registerUseFunction("glas", function(coords, item, block, player)
{
let b = BlockSource.getDefaultForActor(player);
let boss = b.spawnEntity(coords.x, coords.y, coords.z, "dc:boss1");

Entity.setPrototype({
    entity: boss,
    tick: function (){
        if(Math.random()<=0.05){
            arrow(this.entity);
        }
        if(Math.random()<=0.001){
            tnt(this.entity);
        }
    }
});

if(b.getBlockId(coords.x, coords.y, coords.z)==BlockID.altar3){
if(b.getBlockId(coords.x, coords.y - 1, coords.z)==BlockID.altar1){
if(b.getBlockId(coords.x, coords.y - 1, coords.z + 1)==41){
if(b.getBlockId(coords.x, coords.y - 1, coords.z - 1)==41){
if(b.getBlockId(coords.x + 1, coords.y - 1, coords.z)==41){
if(b.getBlockId(coords.x - 1, coords.y - 1, coords.z)==41){
if(b.getBlockId(coords.x - 1, coords.y - 1, coords.z + 1)==BlockID.altar){
if(b.getBlockId(coords.x - 1, coords.y - 1, coords.z - 1)==BlockID.altar){
if(b.getBlockId(coords.x + 1, coords.y - 1, coords.z + 1)==BlockID.altar){
if(b.getBlockId(coords.x + 1, coords.y - 1, coords.z - 1)==BlockID.altar){

b.setBlock(coords.x, coords.y, coords.z, 0, 0)
let boss = b.spawnEntity(coords.x, coords.y, coords.z, "dc:boss0");
Entity.addEffect(boss,
Native.PotionEffect.regeneration, 2, 9999999, true, false) ;
b.setBlock(coords.x, coords.y - 1, coords.z, 0, 0)
b.setBlock(coords.x + 1, coords.y - 1, coords.z, 0, 0)
b.setBlock(coords.x - 1, coords.y - 1, coords.z, 0, 0)
b.setBlock(coords.x, coords.y - 1, coords.z + 1, 0, 0)
b.setBlock(coords.x, coords.y - 1, coords.z - 1, 0, 0)
b.setBlock(coords.x + 1, coords.y - 1, coords.z + 1, 0, 0)
b.setBlock(coords.x + 1, coords.y - 1, coords.z - 1, 0, 0)
b.setBlock(coords.x - 1, coords.y - 1, coords.z + 1, 0, 0)
b.setBlock(coords.x - 1, coords.y - 1, coords.z - 1, 0, 0)

}
}
}
}
}
}
}
}
} 
}} 
);
