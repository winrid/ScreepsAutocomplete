/**
 * An object representing the specified position in the room. Every object in the room contains RoomPosition as the pos
 * property. The position object of a custom location can be obtained using the Room.getPositionAt() method.
 *
 * @class
 * @constructor
 */
RoomPosition = function()
{
};

RoomPosition.prototype = {
	/**
	 * X position in the room.
	 *
	 * @type number
	 */
	x: 0,

	/**
	 * Y position in the room.
	 *
	 * @type number
	 */
	y: 0,

	/**
	 * The name of the room.
	 *
	 * @type string
	 */
	roomName: "",

	/**
	 * Check whether this position is in the given range of another position.
	 *
	 * @param {RoomPosition} toPos The target position.
	 * @param {number} range The range distance.
	 * @return {boolean}
	 */
	inRangeTo: function(toPos, range) { },

	/**
	 * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1)
	 *
	 * @param {Object|RoomPosition} target Can be a RoomPosition object or any object containing RoomPosition.
	 * @return {booelan}
	 */
	isNearTo: function(x, y) { },

	/**
	 * Get linear direction to the specified position.
	 *
	 * @param {Object|RoomPosition} target Can be a RoomPosition object or any object containing RoomPosition.
	 * @return A number representing one of the direction constants.
	 */
	getDirectionTo: function(x, y) { },

	/**
	 * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath.
	 *
	 * @param {Object|RoomPosition} target Can be a RoomPosition object or any object containing RoomPosition.
	 * @param {Object} [opts] An object containing pathfinding options flags (see Room.findPath for more details).
	 * @return An array with Path Steps
	 */
	findPathTo: function(target, opts) { },

	/**
	 * Find an object of the specified type with the shortest path. Uses A* search algorithm.
	 *
	 * @param {number} type See Room.find.
	 * @param {Object} [opts] An object containing pathfinding options (see Room.findPath), or filter
	 */
	findNearest: function(type, opts) { },

	/**
	 * Find all objects in the specified linear range of the given type.
	 *
	 * @param {number} type See Room.find.
	 * @param {number} range The range distance.
	 * @param {Object} [opts] See Room.find.
	 * @return {Object[]} An array with the objects found.
	 */
	findInRange: function(type, range, opts) { },

	/**
	 * Check whether this position is the same as the specified position.
	 *
	 * @param {Object|RoomPosition} target Can be a RoomPosition object or any object containing RoomPosition.
	 * @return {boolean}
	 */
	equalsTo: function(x, y) { }
};