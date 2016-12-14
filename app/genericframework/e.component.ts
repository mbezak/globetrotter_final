/**
 * @author Cristiana Man
 */
import {GenericComponent} from "./generic.component";
import {GenericData} from "./generic.data";
import {GenericView} from "./generic.view";

/**
 * The purpose of this class is simplifying coding when doing polimorfic operations with GenericComponents
 */
export class EComponent extends GenericComponent<GenericData, GenericView<GenericData>> {
}
