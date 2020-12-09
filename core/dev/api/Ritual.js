Ritual.arr2 = [];
Ritual.addCraft2 = function (id, result, mana){
    Ritual.arr2.push({id: id, result: result, mana: mana});
};
Ritual.get2 = function (id){
    for(i in Ritual.arr2){
        if(Ritual.arr2[i].id == id){
            return Ritual.arr2[i];
        }
    }
};
Ritual.obj3 = {};
Ritual.register3 = function (id, mana){
    Ritual.obj3[id] = {obj: {mana: mana}, arr: []};
};
Ritual.addCraft3 = function (id, result){
    Ritual.obj3[id].arr.push(result);
};
Ritual.get3 = function (id){
    return Ritual.obj3[id];
};