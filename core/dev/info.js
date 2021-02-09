IMPORT("DungeonAPI");
IMPORT("ToolLib");
IMPORT("TileRender");
IMPORT("add-onCreter");
var config = FileTools.ReadJSON(__dir__+"/config.json");
const PartType = {
    mana: Particles.registerParticleType({
        texture: "mana",
        render: 2,
        size: [2, 2],
        lifetime:[50, 50],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    forest: Particles.registerParticleType({
        texture: "EnchantedForest_particle",
        render: 2,
        size: [2, 2],
        lifetime:[50, 50],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    magic: Particles.registerParticleType({
        texture: "magic_particle",
        render: 2,
        size: [2, 2],
        lifetime:[50, 50],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    fire: Particles.registerParticleType({
        texture: "fire",
        render: 2,
        size: [2, 2],
        lifetime:[50, 50],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
};
let DA = false;

function generation(){

}
