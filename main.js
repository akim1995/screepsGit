var roleHarvester = require('./role.harvester');
module.exports.loop = function () {
	for(var name in Game.creeps) {
			let creep = Game.creeps[name];
			let creepRole = creep.memory.role;
		if(creepRole === 'harvester') {
				roleHarvester.run(creep);
		}
	}
}
