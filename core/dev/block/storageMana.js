IDRegistry.genBlockID("manaStorage");
Block.createBlock("manaStorage", [ {name: "mana Storage", texture: [["brick2", 0]], inCreative: true}]);

Translation.addTranslation("mana Storage", {ru: "хранилище маны"});

var Particles = ModAPI.requireGlobal("Particles");
TileEntity.registerPrototype(BlockID.manaStorage, {

     defaultValues: {
         mode: "nothing",
         manaStorage: 0,
         player: null 
     },
     isData: function(){
     },
     tick: function(){
         if(this.data.mode=="give"){
             let mana = ManaCore.get(this.data.player);
             let per1 = mana.countMax;
             per1 = mana.countMax / 100 * 5; 
             per1 = mana.countMax - per1;
             if(mana.count<=per1-1){
                 if(this.data.manaStorage>=1){
                     mana.count++;
                     ManaCore.set(this.data.player, mana);
                     this.data.manaStorage--;
                     let pos = Entity.getPosition(this.data.player);
                     ParticlesAPI.coords("rai_particle", 40, [3,3], this.x, this.y, this.z, pos.x, pos.y, pos.z);
                 }
             }
         }
         if(this.data.mode=="accumulate"){
             let mana = ManaCore.get(this.data.player);
             if(this.data.manaStorage<=19999){
                 if(mana.count>=1){
                     mana.count--;
                     this.data.manaStorage++;
                     ManaCore.set(this.data.player, mana);
                     let pos = Entity.getPosition(this.data.player);
                     ParticlesAPI.coords("rai_particle", 40, [3,3], pos.x, pos.y, pos.z, this.x, this.y, this.z);
                 }
             }
         }
     },
     click: function(id, count, data, coords, player){
        if(DA) ac.give(player,  "DungeonAchievement", "storageMagic");
        if(Entity.getSneaking(player)==true){
             Mp.message(player,  "mana: " + this.data.manaStorage + ";");
         }else{
             if(this.data.player != player){
                 this.data.player = player;
                 Mp.message(player, "блок привязан к вам");
             }else{
                 let v = true;
                 if(this.data.mode=="accumulate"){
                     if(v==true){
                         v = false;
                         this.data.mode="give";
                         Mp.message(player, "вы сменили рижим на "+this.data.mode);
                     }
                 }
                 if(this.data.mode=="nothing"){
                     if(v==true){
                         v = false;
                         this.data.mode="accumulate";
                         Mp.message(player, "вы сменили рижим на "+this.data.mode);
                     }
                 }
                 if(this.data.mode=="give"){
                     if(v==true){
                         v = false;
                         this.data.mode="nothing";
                         Mp.message(player, "вы сменили рижим на "+this.data.mode);
                     }
                 }
                 v = true;
             }
         }
     }
});

var mesh2 = new RenderMesh();
var renderAPI2 = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.manaStorage, -1, renderAPI2); 
var modelAPI2 = new BlockRenderer.Model(mesh2);  

           renderAPI2.addEntry(modelAPI2);
mesh2.importFromFile(__dir__ + "/res/model/magis_storage.obj", "obj", null);
mesh2.setBlockTexture("storage-mana", 0);

























