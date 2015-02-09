var EventCreator = function (storageEngine, slugGenerator) {
    this.storageEngine = storageEngine;
    this.slugGenerator = slugGenerator;

    var create = function (name, errorCb) {
        if((typeof name != 'undefined') && name !== ''){
          var slug = slugGenerator.slugify(name);

          storageEngine.setObject(slug, {
            name: name
          });

          if((typeof storageEngine.get('events') != 'undefined')){
            var events = storageEngine.get('events');
          } else {
            var events = '';
          }

          var addition = ' ';
          if (events !== '') { addition = ',' };
          events += addition + slug;
          storageEngine.set('events', events);

        } else {
          errorCb("oh boy");
        }
    }

    return {
        create: create
    }
};

module.exports = EventCreator;