import Backbone from 'backbone';

const originAJAXMethod = Backbone.ajax;

Backbone.ajax = function (request) {
  const data = {
    ...request.data,
    api_token: 'f225d3d46ed3da1db8859d3f8f8d18213ffd70d7',
  };
  const updates = {
    url: `https://api.pipedrive.com/v1${request.url}`,
    data,
  }
  const updatedRequest = {
    ...request,
    ...updates,
  }

  return originAJAXMethod(updatedRequest);
}

export default Backbone;
