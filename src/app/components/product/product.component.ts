import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
 @Input() product!: Product;
 @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();

 onProductOutput(product: Product){
  console.log(product)
 }

 ngOnInit(){
  this.productOutput.emit(this.product)
 }

}
