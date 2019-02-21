import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallePage } from './detalle';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DetallePage,
  ],
  imports: [
    IonicPageModule.forChild(DetallePage),
    ComponentsModule
  ],
})
export class DetallePageModule {}
