'use strict';

exports.ok = function(datas, res) {
  var data = {
      'status': 200,
      'datas': datas
  };
  res.json(data);
  res.end();
};