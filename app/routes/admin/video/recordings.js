import Route from '@ember/routing/route';
import EmberTableRouteMixin from 'open-event-frontend/mixins/ember-table-route';

export default class extends Route.extend(EmberTableRouteMixin) {
  titleToken() {
    return this.l10n.t('Video Recordings');
  }

  async model(params) {
    let queryString = {
      include        : 'video-stream.event,video-stream.video-channel',
      'page[size]'   : params.per_page || 100,
      'page[number]' : params.page || 1
    };
    queryString = this.applySortFilters(queryString, params);
    return this.asArray(this.store.query('video-recording', queryString));
  }
}
