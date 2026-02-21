import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';

export default class RentalImage extends Component {
  @tracked isLarge = false;

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }

  @action smallSize() {
    this.isLarge = false;
  }

  <template>
    <button
      type="button"
      class="image {{if this.isLarge 'large'}}"
      {{on "click" this.toggleSize}}
      {{on "blur" this.smallSize}}
    >
      <img ...attributes />
      <small>View {{if this.isLarge "Smaller" "Larger"}}</small>
    </button>
  </template>
}
