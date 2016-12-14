"use strict";
var jp = require('node_modules/jsonpath/jsonpath.js');
var JSONExtractor = (function () {
    function JSONExtractor() {
    }
    JSONExtractor.extract = function (json, jsonPath) {
        return jp.query(json, jsonPath);
    };
    JSONExtractor.nodes = function (jsonPath) {
        return jp.nodes(jsonPath);
    };
    return JSONExtractor;
}());
module.exports = JSONExtractor;
//# sourceMappingURL=json.extractor.js.map