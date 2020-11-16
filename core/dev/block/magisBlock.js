IDRegistry.genBlockID("MagicStorage"); 
Block.createBlock("MagicStorage", [{name: "Magic storage", texture: [["nis", 0],["vverx1", 0], ["ctoronS", 0],["storonO", 0], ["storonM", 0], ["ctoronl", 0]],inCreative: true, opaque: true, lightopacity: 1, renderlayer: 2}]);
Translation.addTranslation("Magic storage", {ru: "магичиский накопитель"});

TileEntity.registerPrototype(BlockID.MagicStorage, {
     defaultValues: {
          player: null,
     },
     client: {
         events: {
             particles: function (packet){
                 Particles.addParticle(Native.ParticleType.flame, packet.x+Math.random(), packet.y+1+Math.random(), packet.z+Math.random(), 0, 0, 0, 0);
             }
         }
     },
     tick: function(){
         if(this.data.player)
if (this.blockSource.getBlock(this.x-1, this.y, this.z).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z).id != BlockID.MagicStorage){

if (this.blockSource.getBlock(this.x-1, this.y, this.z+1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z+1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z+1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z+1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x, this.y, this.z+1).id != BlockID.MagicStorage){

if (this.blockSource.getBlock(this.x-1, this.y, this.z+2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z+2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z+2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z+2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x, this.y, this.z+2).id != BlockID.MagicStorage){

if (this.blockSource.getBlock(this.x-1, this.y, this.z-1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z-1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z-1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z-1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x, this.y, this.z-1).id != BlockID.MagicStorage){

if (this.blockSource.getBlock(this.x-1, this.y, this.z-2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z-2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z-2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z-2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x, this.y, this.z-2).id != BlockID.MagicStorage){
         let mana = ManaCore.get(this.data.player);
         let per1 = mana.countMax
         per1 = mana.countMax / 100 * 20; 
         per1 = mana.countMax - per1;
         if(mana.count+1<=per1){
mana.count++;
Mp.spawnParticle(7, this.x+Math.random(), this.y+1+Math.random(), this.z+Math.random(), 0, 0, 0);
ManaCore.set(this.data.player, mana);
} 

}
}
}
} 

} 
} 
} 
} 
} 

}
}
}
}
}

}
}
}
}
}
}
}
}
}
}
     },
     click: function (id, count, data, coords, player){
         this.data.player = player;
         Mp.message(player, "блок привязан к вам");
     }
});
