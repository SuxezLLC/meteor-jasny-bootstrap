Package.describe({
    name: 'suxez:jasny-bootstrap',
    version: '1.0.1',
    // Brief, one-line summary of the package.
    summary: 'Jansy Bootstrap (3.1.3) extensions.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/SuxezLLC/meteor-jasny-bootstrap',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    var path = Npm.require('path');
    var lib_path = path.join('lib');

    api.use('jquery');
    api.use(['twbs:bootstrap@3.3.4', 'nemo64:bootstrap@3.3.1_1'], 'client', {weak: true});

    api.add_files(path.join(lib_path, 'css', 'jasny-bootstrap.css'), 'client');
    api.add_files(path.join(lib_path, 'js', 'jasny-bootstrap.js'), 'client');

});

