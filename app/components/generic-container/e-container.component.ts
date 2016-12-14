import {GenericContainerComponent} from "./generic-container.component";
import {GenericView} from "../generic.view";
import {GenericContainerData} from "./generic-container.data";
/**
 * The purpose of this class is simplifying coding when doing polimorfic operations with GenericContainerComponents
 */
export class EContainerComponent extends GenericContainerComponent<GenericContainerData, GenericView<GenericContainerData>> {
}
