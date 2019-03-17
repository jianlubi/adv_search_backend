'use strict';
module.exports = (sequelize, DataTypes) => {
  var School = sequelize.define('School', {
  school_name: DataTypes.STRING
}, {});
School.associate = function(models) {
// associations can be defined here
};
return School;
};