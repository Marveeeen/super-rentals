import Route from '@ember/routing/route';
const COMMUNITY_CATEGORIES = ['Condo', 'Estate', 'Apartment'];

export default class RentalRoute extends Route {
  async model(params) {
    const { rental_id } = params;

    // eslint-disable-next-line warp-drive/no-external-request-patterns
    let response = await fetch(`/api/rentals/${rental_id}.json`);
    let { data } = await response.json();

    const { id, attributes } = data;
    let type = 'Standalone';

    if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
      type = 'Community';
    }

    return { id, type, ...attributes };
  }
}
