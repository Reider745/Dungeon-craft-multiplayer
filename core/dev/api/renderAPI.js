let renderAPI = {
setCristalPidestal: function (id) {

var renderAPI = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(id, -1, renderAPI); 
     var modelAPI = BlockRenderer.createModel(); 
           renderAPI.addEntry(modelAPI);
modelAPI.addBox (2/16, 0, 2/16, 14/16, 0.0625, 14/16, id, 0);

modelAPI.addBox (5/16, 0.0625, 5/16, 11/16, 0.9375, 11/16, id, 0);

modelAPI.addBox (3/16, 0.9375, 3/16, 13/16, 1, 13/16, id, 0);

}, 

setGlblock1: function (id) {

var renderAPI = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(id, -1, renderAPI); 
     var modelAPI = BlockRenderer.createModel(); 
           renderAPI.addEntry(modelAPI);

modelAPI.addBox (1/16, 0, 1/16, 15/16, 0.125, 15/16, id, 0);

modelAPI.addBox (6/16, 0.125, 6/16, 10/16, 0.9375, 10/16, id, 0);

modelAPI.addBox (4/16, 0.9375, 4/16, 12/16, 1, 12/16, id, 0);
}, 
steve: function (id) {
var renderAPI = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(id, -1, renderAPI); 
     var modelAPI = BlockRenderer.createModel(); 
           renderAPI.addEntry(modelAPI);

modelAPI.addBox (1/16, 0, 1/16, 15/16, 0.0625, 15/16, id, 0);

modelAPI.addBox (2/16, 0.0625, 2/16, 14/16, 0.125, 14/16, id, 0);

modelAPI.addBox (10/16, 0.125, 5/16, 8/16, 1, 12/16, id, 0);
}, 
ManaGenerator: function (id) {
var renderAPI = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(id, -1, renderAPI); 
     var modelAPI = BlockRenderer.createModel(); 
           renderAPI.addEntry(modelAPI);

modelAPI.addBox (0/16, 0, 0/16, 16/16, 0.125, 16/16, id, 0);
modelAPI.addBox (0/16, 0.875, 0/16, 16/16, 1, 16/16, id, 0);
modelAPI.addBox (0/16, 0.125, 0/16, 2/16, 0.875, 2/16, id, 0);
modelAPI.addBox (14/16, 0.125, 14/16, 16/16, 0.875, 16/16, id, 0);
modelAPI.addBox (14/16, 0.125, 0/16, 16/16, 0.875, 2/16, id, 0);
modelAPI.addBox (0/16, 0.125, 14/16, 2/16, 0.875, 16/16, id, 0);
modelAPI.addBox (11/16, 0.125, 11/16, 5/16, 0.3125, 5/16, id, 0);


}, 
setblock: function (id, obj, texture) {
let file = __dir__ + "/res/model/" + obj;
var mesh = new RenderMesh();
var renderAPI = new ICRender.Model(); 
BlockRenderer.setStaticICRender(id, -1, renderAPI); 
var modelAPI = new BlockRenderer.Model(mesh);  

           renderAPI.addEntry(modelAPI);
mesh.importFromFile(file, "obj", null);
mesh.setBlockTexture(texture, 0);
} 
};
