
 this.RitualmanaPlus(ItemID.Gem2, 4000, 12000);
	this.RitualmanaPlus(ItemID.Gem, 1000, 18000);
this.RitualCraft(ItemID.clitok, ItemID.Gem, 1, 1000, 2000);

this.ProRitualCraft({
 ItemXm: ItemID.Gem,
 ItemXp: ItemID.gotovka,
 ItemZm: ItemID.clitok,
 ItemZp: ItemID.clitok,
 manaMax: 15000, 
 result: ItemID.poic1, 
 count: 1, 
 manaCount: 5000, 
});

this.ProRitualCraft({
 ItemXm: ItemID.gotovka,
 ItemXp: ItemID.Gem,
 ItemZm: ItemID.clitok,
 ItemZp: ItemID.clitok,
 manaMax: 15000, 
 result: ItemID.poic1, 
 count: 1, 
 manaCount: 5000, 
});

this.ProRitualCraft({
 ItemXm: ItemID.clitok,
 ItemXp: ItemID.clitok,
 ItemZm: ItemID.gotovka,
 ItemZp: ItemID.Gem,
 manaMax: 15000, 
 result: ItemID.poic1, 
 count: 1, 
 manaCount: 5000, 
});

this.ProRitualCraft({
 ItemXm: ItemID.clitok,
 ItemXp: ItemID.clitok,
 ItemZm: ItemID.Gem,
 ItemZp: ItemID.gotovka,
 manaMax: 15000, 
 result: ItemID.poic1, 
 count: 1, 
 manaCount: 5000, 
});

this.ProRitualCraft({
 ItemXm: ItemID.crystalearth,
 ItemXp: ItemID.crystalearth,
 ItemZm: ItemID.crystalLightning,
 ItemZp: ItemID.crystalLightning,
 manaMax: 10000, 
 result: ItemID.clitok, 
 count: 1, 
 manaCount: 10000, 
});

this.ProRitualCraft({
 ItemXm: ItemID.crystalLightning,
 ItemXp: ItemID.crystalLightning,
 ItemZm: ItemID.crystalearth,
 ItemZp: ItemID.crystalearth,
 manaMax: 10000, 
 result: ItemID.clitok, 
 count: 1, 
 manaCount: 10000, 
});
this.ProRitualCraft({
 ItemXm: ItemID.crystalfire,
 ItemXp: ItemID.crystalfire,
 ItemZm: ItemID.crystalearth,
 ItemZp: ItemID.crystalearth,
 manaMax: 20000, 
 result: ItemID.clitok1, 
 count: 1, 
 manaCount: 20000, 
});

this.ProRitualCraft({
 ItemXm: ItemID.crystalearth,
 ItemXp: ItemID.crystalearth,
 ItemZm: ItemID.crystalfire,
 ItemZp: ItemID.crystalfire,
 manaMax: 20000, 
 result: ItemID.clitok1, 
 count: 1, 
 manaCount: 20000, 
});


TileEntity.registerPrototype(BlockID.gubok2, {
defaultValues: {
		progress: 0,
        random: 0
	},

proggres1: function (block, ran, prog, manaCount) {
if(mana!=manaCount && mana<<manaCount){
if (World.getBlock(this.x+2, this.y, this.z+2).id == BlockID.gubok1){
if (World.getBlock(this.x-2, this.y, this.z+2).id == BlockID.gubok1){
if (World.getBlock(this.x+2, this.y, this.z-2).id == BlockID.gubok1){
if (World.getBlock(this.x-2, this.y, this.z-2).id == BlockID.gubok1){


if (World.getBlock(this.x+2, this.y+1, this.z+2).id == block){
if (World.getBlock(this.x-2, this.y+1, this.z+2).id == block){
if (World.getBlock(this.x+2, this.y+1, this.z-2).id == block){
if (World.getBlock(this.x-2, this.y+1, this.z-2).id == block){
if (World.getBlock(this.x, this.y+1, this.z).id == 0){


if(this.data.progress<=prog){
this.data.progress++;
this.data.random==Math.random()*1;

ritualParticle.particle(this.x, this.y+0.9, this.z, 1);
ritualParticle.particle(this.x+2, this.y+0.9, this.z+2, 1);
ritualParticle.particle(this.x-2, this.y+0.9, this.z+2, 1);
ritualParticle.particle(this.x+2, this.y+0.9, this.z-2, 1);
ritualParticle.particle(this.x-2, this.y+0.9, this.z-2, 1);

ritual1.play();
mana-=manaCount;

if(this.data.random>=ran) {
Entity.spawn(this.x-15+Math.random()*30, this.y+1, this.z-15+Math.random()*30, 93);
} 

if (World.getBlock(this.x, this.y+1, this.z).id == 0){
if(this.data.progress>=prog){
World.setBlock(this.x, this.y+1, this.z, block, 0);

ritualParticle.ParticleType(Native.ParticleType.flame, this.x+Math.random(), this.y+1+Math.random(), this.z+Math.random(), 10);

this.data.progress-=prog;
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

tick: function (){
this.proggres1(BlockID.kristalFire, 0.3, 300, 5);
this.proggres1(BlockID.kristalwind, 0.3, 300, 5);
this.proggres1(BlockID.kristalLight, 0.3, 300, 5);
this.proggres1(BlockID.kristaldirt, 0.3, 300, 5);
	},

});

























