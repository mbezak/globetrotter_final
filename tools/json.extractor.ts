var jp = require('node_modules/jsonpath/jsonpath.js');
import { } from 'jsonpath';

class JSONExtractor {

    public static extract(json, jsonPath: string): any {
        return jp.query(json, jsonPath);
    }
    public static nodes(jsonPath: string): any {
        return jp.nodes(jsonPath);
    }
}
export = JSONExtractor;
