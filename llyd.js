if ($response.status == 200 && $request.method == 'GET') {
 const bodyObj = JSON.parse($response.body);

 if ($request.url.indexOf('limitation') != -1) {
  bodyObj.modules = [];
  bodyObj.auditionDuration = 72000;
 } else {
  bodyObj.from = 1482071586
  bodyObj.to = 1671373986
 }

 $done({body: JSON.stringify(bodyObj)})
} else {
 $done({})
}
