# spree_nice_admin
This extension makes the Spree admin menu and main content section responsive, plus gives the interface a nicer look.

## Changes to database
None

## Changes to the admin html.erb files
Adds currency to orders in list view and also adds order currency to the order details page in the summery section. Moves the order number to the first column, and truncates the emails to give a more user friendly layout.

### NOTE
Because this extension uses the ```order.currency``` you may need to either be using Spree 3.7 or for older versions of spree you may need to have the spree_multiple_currency extension installed. I have not tested it with older versions of Spree.

## Changes to the JS files
Disables the default Spree menu class toggling on the main menu, and then adds a single toggle class for the menu for use on handheld devices.

## Changes to the CSS files
Just simple backend styling.

## Installation

1. Add this line to the bottom of your Gemfile:
  ```ruby
  gem 'spree_nice_admin', github: 'matthewkennedy/spree_nice_admin'
  ```

2. Install the gem using Bundler:
  ```ruby
  bundle install
  ```

3. Copy & run the following commands in order
  ```ruby
  bundle exec rails g spree_nice_admin:install
  ```

## Uninstalling

  1. Remove this line to the bottom of your Gemfile:
    ```ruby
    gem 'spree_nice_admin', github: 'matthewkennedy/spree_nice_admin'
    ```

  2. Remove the gem using Bundler:
    ```ruby
    bundle
    ```

  3. Remove the following line from YourProject/vendor/assets/javascript/spree/backend/all.js
    ```ruby
    //= require spree/backend/spree_nice_admin
    ```
  4. Remove the following line from YourProject/vendor/assets/stylesheets/spree/backend/all.css
    ```ruby
     *= require spree/backend/spree_nice_admin
    ```

## Testing

First bundle your dependencies, then run `rake`. `rake` will default to building the dummy app if it does not exist, then it will run specs. The dummy app can be regenerated by using `rake test_app`.

```shell
bundle
bundle exec rake
```

When testing your applications integration with this extension you may use it's factories.
Simply add this require statement to your spec_helper:

```ruby
require 'spree_nice_admin/factories'
```


## Contributing

If you'd like to contribute, please take a look at the
[instructions](CONTRIBUTING.md) for installing dependencies and crafting a good
pull request.

Copyright (c) 2018 [name of extension creator], released under the New BSD License
