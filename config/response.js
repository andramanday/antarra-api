'use strict';

exports.ok = function(datas, msg, res) {
    var data = {
        'error' : false,
        'code': 201,
        'message': msg,
        'record': datas.length,
        'datas': datas
    };
    res.status(201).send(data);
    res.end();
};

exports.error = function(msg, res, errorkode = 401) {
    var data = {
        'error' : true,
        'code': errorkode,
        'message': msg,
        'data' : []
    };
    res.status(401).send(data);
    res.end();
};