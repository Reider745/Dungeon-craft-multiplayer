function setStructure (file, dimension, x, y, z){
    let structure  = Dungeon.getStructure(file);
    for(i in structure){
        let identifier = getIdentifier(structure[i]);
        x = identifier.x + x;
        y = identifier.y + y;
        z = identifier.z + z;
        let blockSource = BlockSource.getDefaultForDimension(dimension)
        blockSource.setBlock(x, y, z, identifier.id, identifier.data)
    }
}
