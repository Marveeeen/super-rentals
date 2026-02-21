import Route from '@ember/routing/route';
const COMMUNITY_CATEGORIES = ['Condo', 'Estate', 'Apartment'];

export default class IndexRoute extends Route {
  async model() {
    // eslint-disable-next-line warp-drive/no-external-request-patterns
    let response = await fetch('/api/rentals.json');
    let { data } = await response.json();

    return data.map((model) => {
      const { attributes } = model;
      let type = 'Standalone';

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      }

      return { type, ...attributes };
    });
  }
}
