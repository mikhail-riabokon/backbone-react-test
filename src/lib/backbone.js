import Backbone from 'backbone';

const originAJAXMethod = Backbone.ajax;

Backbone.ajax = function (request) {
  const data = {
    ...request.data,
    api_token: process.env.REACT_APP_API_KEY,
  };
  const updates = {
    url: `https://api.pipedrive.com/v1${request.url}`,
    data,
  };
  const updatedRequest = {
    ...request,
    ...updates,
  };

  return originAJAXMethod(updatedRequest);
}

export default Backbone;
