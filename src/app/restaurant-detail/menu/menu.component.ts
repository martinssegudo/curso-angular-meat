import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
	selector: 'mt-menu',
	templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

	menu: Observable<MenuItem[]>

	constructor(
		private restaurantService: RestaurantsService,
		private route: ActivatedRoute
	) { }

	// Para pegar a referencia do menu do restaurant
	ngOnInit() {
		this.menu = this.restaurantService.menuOfRestaurants(this.route.parent.snapshot.params['id'])
	}

	addMenuItem(item: MenuItem) {
		console.log(item)
	}

}
