# spree_nice_admin
This extension makes the Spree admin menu and main content section responsive, plus gives the interface a nicer look.

## Changes to database
None

## Changes to the admin html.erb files
Adds currency to orders in list view and also adds order currency to the order details page in the summery section. Moves the order number to the first column, and truncates the emails to give a more user friendly layout.

### NOTE
Because this extension uses the ```order.currency``` you may need to either be using Spree 3.7 or for older versions of spree you may need to have the spree_multiple_currency extension installed. I have not tested it with older versions of Spree.

## Changes to the JS files
Disables the default Spree menu class toggling on the sidebar menu, and then adds a single toggle class to the body for the sidebar-open so the CSS can do the rest.

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
  ```javascript
  //= require spree/backend/spree_nice_admin
  ```
4. Remove the following line from YourProject/vendor/assets/stylesheets/spree/backend/all.css
  ```
   *= require spree/backend/spree_nice_admin
  ```
## ToDo
A lot more could be done, but rather than the work being done in an extension, ideally it wants to be done in the Spree main project, that way you are not chasing updates from the main admin html.erb files back into the extension.

Also with the advent of the Bootstrap 4 into Spree, all this might be irrelevant. 
