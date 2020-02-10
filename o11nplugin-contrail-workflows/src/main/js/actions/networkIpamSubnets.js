if(!item) return null;
var actionResult = new Array();
var subnets = item.getIpamSubnets();
if (!subnets) return null;
var subnetList = subnets.getSubnets();

subnetList.forEach(function (value) {
    var subnet = ContrailUtils.ipamSubnetToString(value);
    if(subnet) actionResult.push(subnet);
});
return actionResult;