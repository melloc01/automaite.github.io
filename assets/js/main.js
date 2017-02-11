axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

// Segment
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
analytics.load("PeeC2J5foYare7wdLnPTFxws2uRSTvgE");
analytics.page();
}}();

var ZAPIER_URL = "https://hooks.zapier.com/hooks/catch/1987664/d1v9t8/";

function App() {
  var vm = this;

  vm.newLead = newLead;
  vm.handleInvitationForm = handleInvitationForm;

  init();

  function init() {
    axios.get('https://ipinfo.io/json')
      .then(function (response) {
        vm.geo = response.data;
      });
  }

  function handleInvitationForm(event) {
    var form = event.target,
        email = form.querySelector('input[type="email"]').value,
        messageCt = form.querySelector('#form-message'),
        formContent = form.querySelector('#form-content');

    var data = {
      email: email,
      timestamp: new Date().toString(),
      geolocation: vm.geo
    };

    sendZapier(data);

    messageCt.removeAttribute('hidden');
    formContent.setAttribute('hidden', 'true');
  }

  function newLead(data) {
    sendZapier(data);
  }

  function sendZapier(data) {
      axios.post(ZAPIER_URL, JSON.stringify(data));
  }

  return this;
}

window.App = new App();
