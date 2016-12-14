import {GenericData} from "../../genericframework/generic.data";
import {EComponent} from "../../genericframework/e.component";
/**
 * GenericContainerData must be extended by Data classes of Components such as Layout or Tabs that have the purpose of displaying other Components
 */
export abstract class GenericContainerData extends GenericData {
    /**
     * The implementation of this method should set the Container Data model
     * such that the EComponent is put inside the container with the id corresponding to the placement parameter
     * and, therefore, the view can access and display the component
     *
     * @param placement string representing the id of the desired container for the component
     * @param component EComponent to be displayed in specified placement
     */
    abstract setChild(placement: string, component: EComponent);
}