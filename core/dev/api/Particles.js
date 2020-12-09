Math.sign = Math.sign || function(x) { 
    x = +x;
    if (x === 0) { 
        return x; 
    } 
    return x > 0 ? -0.1 : 0.1; 
}
var ParticlesAPI = {
   particles: Particles.registerParticleType({
        texture: "mana",
        render: 2,
        size: [2, 2],
        lifetime:[50, 50],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
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
    },
    spawnLine: function (texture, time, size, x1, y1, z1, x2, y2, z2, count){
        var particles = Particles.registerParticleType({
            texture: texture,
            render: 2,
            size: size,
            lifetime:[time, time],
            animators: {
                alpha:{fadeIn: .4, fadeOut: .4},
                size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
            }
        });
        for(i = 0; i<=count;i++){
            var x = x1 + (-(x1 - x2)) * (i / count);
            var y = y1 + (-(y1 - y2)) * (i / count);
            var z = z1 + (-(z1 - z2)) * (i / count);
            Mp.spawnParticle(particles, x + 0.5, y + 0.5, z + 0.5, 0, 0, 0);
        }
    },
    spawnCircle: function (texture, time, size, x, y, z, radius, count, rotation){
        var particles = Particles.registerParticleType({
            texture: texture,
            render: 2,
            size: size,
            lifetime:[time, time],
            animators: {
                alpha:{fadeIn: .4, fadeOut: .4},
                size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
            }
        });
        let angle = 0;
        let step = 360 / count;
        if(rotation == 0){
            for(i = 0;i < 360;i+=step){
                let x1 = x + radius * Math.cos(i);
                let y1 = y - radius * Math.sin(i);
                Mp.spawnParticle(particles, x1 + 0.5, y1 + 0.5, z + 0.5, 0, 0, 0);
            }
        }
        if(rotation == 1){
            for(i = 0;i < 360;i+=step){
                let z1 = z + radius * Math.cos(i);
                let y1 = y - radius * Math.sin(i);
                Mp.spawnParticle(particles, x + 0.5, y1 + 0.5, z1 + 0.5, 0, 0, 0);
            }
        }
        if(rotation == 2){
            for(i = 0;i < 360;i+=step){
                let x1 = x + radius * Math.cos(i);
                let z1 = z - radius * Math.sin(i);
                Mp.spawnParticle(particles, x1 + 0.5, y + 0.5, z1 + 0.5, 0, 0, 0);
            }
        }
    },
    spawnCircleVector: function (time, particle, x, y, z, radius, count){
        let angle = 0;
        let step = 360 / count;
        for(i = 0;i < 360;i+=step){
            let x1 = x + radius * Math.cos(i);
            let z1 = z - radius * Math.sin(i);
            Mp.spawnParticle(particle, x1 + 0.5, y + 0.5, z1 + 0.5, -Math.sign(x1 - x), 0, -Math.sign(z1 - z));
        }
    }
};
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
    ParticlesAPI.spawnCircleVector(1000, ParticlesAPI.particles, coords.x, coords.y, coords.z, 1, 19);
});