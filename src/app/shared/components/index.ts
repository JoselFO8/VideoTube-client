// importar componentes
import { CardUserComponent } from "./cards/card-user/card-user.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { TitleH1Component } from "./titles/title-h1/title-h1.component";

// Loaders
import { CardLoaderComponent } from "./loaders/card-loader/card-loader.component";

// Buttons
import { SolidButtonComponent } from "./buttons/solid-button/solid-button.component";

// Complex Table
import { ComplexTableComponent } from "./tablets/complex-table/complex-table.component";
import { CtTbodyComponent } from "./tablets/complex-table/ct-tbody/ct-tbody.component";
import { CtTheadComponent } from "./tablets/complex-table/ct-thead/ct-thead.component";
import { CtTfootComponent } from "./tablets/complex-table/ct-tfoot/ct-tfoot.component";
import { VideoPreviewComponent } from "./cards/card-video/video-preview/video-preview.component";
import { CardVideoComponent } from "./cards/card-video/card-video.component";
import { CardVideoRowComponent } from "./cards/card-video-row/card-video-row.component";
import { CommentBoxComponent } from "./box/comment-box/comment-box.component";


// fromComponents ?
export const components: any[] = [
    CardUserComponent, // Organizar de forma alfabetica 
    CardVideoComponent,
    CardVideoRowComponent,
    CarouselComponent,
    TitleH1Component,
    // Loaders
    CardLoaderComponent,
    // Buttons
    SolidButtonComponent,
    // Box
    CommentBoxComponent,
    // Video
    VideoPreviewComponent,
    // Complex-Table
    ComplexTableComponent,
    CtTheadComponent,
    CtTbodyComponent,
    CtTfootComponent
    
];

// export all components
export * from './cards/card-user/card-user.component';
export * from './titles/title-h1/title-h1.component';
export * from "./cards/card-video/card-video.component";

// Loaders
export * from './loaders/card-loader/card-loader.component'

// Buttons
export * from "./buttons/solid-button/solid-button.component";

// Box
export * from "./box/comment-box/comment-box.component";

// Video
export * from "./cards/card-video/video-preview/video-preview.component";
export * from "./cards/card-video-row/card-video-row.component";


// Complex Table
export * from "./tablets/complex-table/complex-table.component";
export * from "./tablets/complex-table/ct-tbody/ct-tbody.component";
export * from "./tablets/complex-table/ct-thead/ct-thead.component";
export * from "./tablets/complex-table/ct-tfoot/ct-tfoot.component";
