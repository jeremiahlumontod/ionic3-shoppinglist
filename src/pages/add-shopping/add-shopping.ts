import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';


@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  // Creating a new Object 
  shoppingItem = {} as ShoppingItem;
  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingPage');
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    console.log(shoppingItem);
    /*
      Create a new anonymous object and convert itemNumber to a number.
      Push this to our Firebase database under the 'shopping-list' node.
    */
    // this.shoppingItemRef$.push({
    //   itemName: this.shoppingItem.itemName,
    //   itemNumber: Number(this.shoppingItem.itemNumber)
    // });

    // Reset our ShoppingItem
    // this.shoppingItem = {} as ShoppingItem;

    // Navigate the user back to the ShoppingListPage
    // this.navCtrl.pop();
  }
  
}
