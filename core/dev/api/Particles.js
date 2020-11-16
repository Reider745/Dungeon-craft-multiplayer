Math.sign = Math.sign || function(x) { 
    x = +x;
    if (x === 0) { 
        return x; 
    } 
    return x > 0 ? -0.1 : 0.1; 
}
var ParticlesAPI = {
    getVector: function (pos1, pos2){
        let vector = {
            x: Math.sign(pos1.x-pos2.x),
            y: Math.sign(pos1.y-pos2.y),
            z: Math.sign(pos1.z-pos2.z)
        }
        return vector;
    },
    coords: function(texture, time, size, x1, y1, z1, x2, y2, z2){
        let particles = Particles.registerParticleType({
            texture: texture,
            render: 2,
            size: size,
            lifetime:[time, time],
            animators: {
                alpha:{fadeIn: .4, fadeOut: .4},
                size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
            }
        });
        var vx = -((x1 + 0.5) - (x2 + 0.5)) / time;
        var vy = -((y1 + 0.5) - (y2 + 0.5)) / time;
        var vz = -((z1 + 0.5) - (z2 + 0.5)) / time;
        Mp.spawnParticle(particles, x1 + 0.5, y1 + 0.5, z1 + 0.5, vx, vy, vz);
    }
};