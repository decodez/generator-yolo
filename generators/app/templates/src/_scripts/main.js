// Main javascript entry point
// Should handle bootstrapping/starting application
<% if(jsPreprocessor === 'none'){ %>'use strict';
var Button = require('../_modules/button/button');
$(function() {
  new Button(); // Activate Link modules logic
});
<% } else{ %>'use strict';
import Button from '../_modules/button/button';
$(() => {
  new Button();
});
<% } %>
