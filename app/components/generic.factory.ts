/**
 * @author Fmu
 */
import {Injectable, ComponentFactoryResolver, ComponentFactory, Compiler} from "@angular/core";

import {EComponent} from "./e.component";
import {ETestComponent} from "./test/e-test.component";
import {ETestView} from "./test/e-test.view";
import {ETestData} from "./test/e-test.data";
import {ELayoutComponent} from "./layout/e-layout.component";
import {ELayoutView} from "./layout/e-layout.view";
import {ELayoutData} from "./layout/e-layout.data";
import {EPropertyEditorComponent} from "./property-editor/e-property-editor.component";
import {EPropertyEditorView} from "./property-editor/e-property-editor.view";
import {EPropertyEditorData} from "./property-editor/e-property-editor.data";
import {GenericService} from "./generic.service";
import {ETabsData} from "./tabs/e-tabs.data";
import {ETabsView} from "./tabs/e-tabs.view";
import {ETabsComponent} from "./tabs/e-tabs.component";
import {ELabelComponent} from "./label/e-label.component";
import {ELabelData} from "./label/e-label.data";
import {ELabelView} from "./label/e-label.view";
import {EIconData} from "./icon/e-icon.data";
import {EIconView} from "./icon/e-icon.view";
import {EIconComponent} from "./icon/e-icon.component";
import {EImageComponent} from "./image/e-image.component";
import {EImageData} from "./image/e-image.data";
import {EImageView} from "./image/e-image.view";
import {ELayoutGridView} from "./layout-grid/e-layout-grid.view";
import {ELayoutGridComponent} from "./layout-grid/e-layout-grid.component";
import {ELayoutGridData} from "./layout-grid/e-layout-grid.data";
import {EExpenseTileView} from "./expense-tile/e-expense-tile.view";
import {EExpenseTileComponent} from "./expense-tile/e-expense-tile.component";
import {EExpenseTileData} from "./expense-tile/e-expense-tile.data";
import {ETimelineExpenseView} from "./timeline-expense/e-timeline-expense.view";
import {ETimelineExpenseComponent} from "./timeline-expense/e-timeline-expense.component";
import {ETimelineExpenseData} from "./timeline-expense/e-timeline-expense.data";
import {EFooterComponent} from "./footer/e-footer.component";
import {EFooterData} from "./footer/e-footer.data";
import {EFooterView} from "./footer/e-footer.view";
import {EHeaderComponent} from "./header/e-header.component";
import {EHeaderData} from "./header/e-header.data";
import {EHeaderView} from "./header/e-header.view";
import {ELayoutVerticalComponent} from "./layout-vertical/e-layout-vertical.component";
import {ELayoutVerticalData} from "./layout-vertical/e-layout-vertical.data";
import {ELayoutVerticalView} from "./layout-vertical/e-layout-vertical.view";
import {EOverviewExpenseComponent} from "./overview-expense/e-overview-expense.component";
import {EOverviewExpenseData} from "./overview-expense/e-overview-expense.data";
import {EOverviewExpenseView} from "./overview-expense/e-overview-expense.view";
import {EButtonView} from "./button/e-button.view";
import {EButtonData} from "./button/e-button.data";
import {EButtonComponent} from "./button/e-button.component";
import {EUploadView} from "./upload/e-upload.view";
import {EUploadData} from "./upload/e-upload.data";
import {EUploadComponent} from "./upload/e-upload.component";
import {ETotalComponent} from "./total/e-total.component";
import {ETotalData} from "./total/e-total.data";
import {ETotalView} from "./total/e-total.view";
import {EGridData} from "./grid/e-grid.data";
import {EGridView} from "./grid/e-grid.view";
import {EGridComponent} from "./grid/e-grid.component";
import {ESwiperComponent} from "./swiper/e-swiper.component";
import {ESwiperData} from "./swiper/e-swiper.data";
import {ESwiperView} from "./swiper/e-swiper.view";

@Injectable()
export class GenericFactory {
    private controller: GenericService;

    constructor(private componentResolver: Compiler) {
    }

    setController(controller: GenericService) {
        this.controller = controller;
    }

    /**
     * Creates a component of the type given as a parameter
     * @param type recognized value from the generic frontend framework
     * @returns {any} a component
     */
    createInstance(type: string): EComponent {
        switch (type) {

            case "button"                :
                return new EButtonComponent({
                    controller: this.controller,
                    data: new EButtonData(),
                    factory: this.createButtonFactory()
                });
            case "grid"        :
                return new EGridComponent({
                    controller: this.controller,
                    data: new EGridData(),
                    factory: this.createGridFactory()
                });

            case "icon"                  :
                return new EIconComponent({
                    controller: this.controller,
                    data: new EIconData(),
                    factory: this.createIconFactory()
                });
            case "image"                 :
                return new EImageComponent({
                    controller: this.controller,
                    data: new EImageData(),
                    factory: this.createImageFactory()
                });
            case "label"                 :
                return new ELabelComponent({
                    controller: this.controller,
                    data: new ELabelData(),
                    factory: this.createLabelFactory()
                });
            case "layout"                :
                return new ELayoutComponent({
                    controller: this.controller,
                    data: new ELayoutData(),
                    factory: this.createLayoutFactory()
                });

            case "layout-grid"           :
                return new ELayoutGridComponent({
                    controller: this.controller,
                    data: new ELayoutGridData(),
                    factory: this.createLayoutGridFactory()
                });

            case "layout-vertical"       :
                return new ELayoutVerticalComponent({
                    controller: this.controller,
                    data: new ELayoutVerticalData(),
                    factory: this.createLayoutVerticalFactory()
                });
            case "property-editor"       :
                return new EPropertyEditorComponent({
                    controller: this.controller,
                    data: new EPropertyEditorData(),
                    factory: this.createPropertyEditorFactory()
                });
            case "swiper"                 :
                return new ESwiperComponent({
                    controller: this.controller,
                    data: new ESwiperData(),
                    factory: this.createSwiperFactory()
                });

            case "total"                 :
                return new ETotalComponent({
                    controller: this.controller,
                    data: new ETotalData(),
                    factory: this.createTotalFactory()
                });

            case "tabs"                  :
                return new ETabsComponent({
                    controller: this.controller,
                    data: new ETabsData(),
                    factory: this.createTabsFactory()
                });
            case "test"                  :
                return new ETestComponent({
                    controller: this.controller,
                    data: new ETestData(),
                    factory: this.createTestFactory()
                });

            case "expense-tile"          :
                return new EExpenseTileComponent({
                    controller: this.controller,
                    data: new EExpenseTileData(),
                    factory: this.createExpenseTileFactory()
                });
            case "timeline-expense"      :
                return new ETimelineExpenseComponent({
                    controller: this.controller,
                    data: new ETimelineExpenseData(),
                    factory: this.createTimelineExpenseFactory()
                });
            case "overview-expense"      :
                return new EOverviewExpenseComponent({
                    controller: this.controller,
                    data: new EOverviewExpenseData(),
                    factory: this.createOverviewExpenseFactory()
                });
            case "footer"                :
                return new EFooterComponent({
                    controller: this.controller,
                    data: new EFooterData(),
                    factory: this.createFooterFactory()
                });
            case "header"                :
                return new EHeaderComponent({
                    controller: this.controller,
                    data: new EHeaderData(),
                    factory: this.createHeaderFactory()
                });
            case "upload"                :
                return new EUploadComponent({
                    controller: this.controller,
                    data: new EUploadData(),
                    factory: this.createUploadFactory()
                });


            default         :
                return null;

        }
    }

    private createButtonFactory(): Promise<ComponentFactory<EButtonView>> {
        return this.componentResolver
            .compileComponentAsync(EButtonView)
            .then((factory: ComponentFactory<EButtonView>) => {
                return factory;
            });
    }

    private createHeaderFactory(): Promise<ComponentFactory<EHeaderView>> {
        return this.componentResolver
            .compileComponentAsync(EHeaderView)
            .then((factory: ComponentFactory<EHeaderView>) => {
                return factory;
            });
    }

    private createFooterFactory(): Promise<ComponentFactory<EFooterView>> {
        return this.componentResolver
            .compileComponentAsync(EFooterView)
            .then((factory: ComponentFactory<EFooterView>) => {
                return factory;
            });
    }

    private createImageFactory(): Promise <ComponentFactory <EImageView>> {
        return this.componentResolver
            .compileComponentAsync(EImageView)
            .then((factory: ComponentFactory<EImageView>) => {
                return factory;
            });
    }

    private createGridFactory(): Promise <ComponentFactory <EGridView>> {
        return this.componentResolver
            .compileComponentAsync(EGridView)
            .then((factory: ComponentFactory<EGridView>) => {
                return factory;
            });
    }

    private createIconFactory(): Promise <ComponentFactory <EIconView>> {
        return this.componentResolver
            .compileComponentAsync(EIconView)
            .then((factory: ComponentFactory<EIconView>) => {
                return factory;
            });
    }

    private createSwiperFactory(): Promise <ComponentFactory <ESwiperView>> {
        return this.componentResolver
            .compileComponentAsync(ESwiperView)
            .then((factory: ComponentFactory<ESwiperView>) => {
                return factory;
            });
    }

    private createTabsFactory(): Promise <ComponentFactory <ETabsView>> {
        return this.componentResolver
            .compileComponentAsync(ETabsView)
            .then((factory: ComponentFactory<ETabsView>) => {
                return factory;
            });
    }

    private createTestFactory(): Promise <ComponentFactory <ETestView>> {
        return this.componentResolver
            .compileComponentAsync(ETestView)
            .then((factory: ComponentFactory<ETestView>) => {
                return factory;
            });
    }

    private createLabelFactory(): Promise <ComponentFactory <ELabelView>> {
        return this.componentResolver
            .compileComponentAsync(ELabelView)
            .then((factory: ComponentFactory<ELabelView>) => {
                return factory;
            });
    }

    private createLayoutFactory(): Promise <ComponentFactory <ELayoutView>> {
        return this.componentResolver
            .compileComponentAsync(ELayoutView)
            .then((factory: ComponentFactory<ELayoutView>) => {
                return factory;
            });
    }

    private createLayoutGridFactory(): Promise <ComponentFactory <ELayoutGridView>> {
        return this.componentResolver
            .compileComponentAsync(ELayoutGridView)
            .then((factory: ComponentFactory<ELayoutGridView>) => {
                return factory;
            });
    }

    private createPropertyEditorFactory(): Promise <ComponentFactory <EPropertyEditorView>> {
        return this.componentResolver
            .compileComponentAsync(EPropertyEditorView)
            .then((factory: ComponentFactory<EPropertyEditorView>) => {
                return factory;
            });
    }

    private createExpenseTileFactory(): Promise <ComponentFactory <EExpenseTileView>> {
        return this.componentResolver
            .compileComponentAsync(EExpenseTileView)
            .then((factory: ComponentFactory<EExpenseTileView>) => {
                return factory;
            });
    }

    private createTimelineExpenseFactory(): Promise <ComponentFactory <ETimelineExpenseView>> {
        return this.componentResolver
            .compileComponentAsync(ETimelineExpenseView)
            .then((factory: ComponentFactory<ETimelineExpenseView>) => {
                return factory;
            });
    }

    private createLayoutVerticalFactory(): Promise <ComponentFactory <ELayoutVerticalView>> {
        return this.componentResolver
            .compileComponentAsync(ELayoutVerticalView)
            .then((factory: ComponentFactory<ELayoutVerticalView>) => {
                return factory;
            });
    }

    private createUploadFactory(): Promise <ComponentFactory <EUploadView>> {
        return this.componentResolver
            .compileComponentAsync(EUploadView)
            .then((factory: ComponentFactory<EUploadView>) => {
                return factory;
            });
    }

    private createTotalFactory(): Promise <ComponentFactory <ETotalView>> {
        return this.componentResolver
            .compileComponentAsync(ETotalView)
            .then((factory: ComponentFactory<ETotalView>) => {
                return factory;
            });
    }

    private createOverviewExpenseFactory(): Promise <ComponentFactory <EOverviewExpenseView>> {
        return this.componentResolver
            .compileComponentAsync(EOverviewExpenseView)
            .then((factory: ComponentFactory<EOverviewExpenseView>) => {
                return factory;
            });
    }
}