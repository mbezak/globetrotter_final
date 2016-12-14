import {EComponent} from "../../genericframework/e.component";
import {GenericComponent} from "../../genericframework/generic.component";
import {GenericView} from "../../genericframework/generic.view";
import {GenericContainerData} from "./generic-container.data";

/**
 * This class must be extended by Container Components such as Layout or Tabs that have the purpose of displaying other Components
 */
export class GenericContainerComponent<D extends GenericContainerData, V extends GenericView<D>> extends GenericComponent<D, V> {
    /**
     * This method manipulates GenericContainerData instance to include the EComponent in corresponding placement
     * @param placement string identifying the part of the container component where the EComponent should be displayed.
     *        The placement names vary and are specified for each type of container.
     * @param component EComponent that is to be included in the EContainerComponent
     */
    public placeChild(placement: string, component: EComponent) {
        this.data.setChild(placement, component);
    }
}