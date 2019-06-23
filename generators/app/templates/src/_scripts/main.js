<% if(jsPreprocessor === 'none'){ %>
  // Main javascript entry point
  // Should handle bootstrapping/starting application

'use strict';
require('../_styles/main.scss');

var Button = require('../_modules/button/button');

$(function() {
  new Button(); // Activate Link modules logic
});
  
<% } else{ %>  
import '../_styles/main.scss';


import Button from '../_modules/button/button';

$(() => {
  new Button();
});

<% } %>