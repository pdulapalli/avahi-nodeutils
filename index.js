"use strict";
var Promise = require("bluebird");
var child_process_1 = require("child_process");
function setHostname(hostname) {
    return new Promise(function (resolve, reject) {
        child_process_1.exec('avahi-set-host-name ' + hostname, function (err, stdout, stderr) {
            if (err) {
                reject(err);
            }
            else {
                resolve(true);
            }
        });
    });
}
exports.setHostname = setHostname;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUVwQyw4QkFBbUIsZUFFbkIsQ0FBQyxDQUZpQztBQUVsQyxxQkFBNEIsUUFBZ0I7SUFDeEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFVLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDeEMsb0JBQUksQ0FBQyxzQkFBc0IsR0FBRyxRQUFRLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU07WUFDeEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDZixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQztBQVplLG1CQUFXLGNBWTFCLENBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQcm9taXNlIGZyb20gXCJibHVlYmlyZFwiO1xuXG5pbXBvcnQge2V4ZWN9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEhvc3RuYW1lKGhvc3RuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBleGVjKCdhdmFoaS1zZXQtaG9zdC1uYW1lICcgKyBob3N0bmFtZSwgKGVyciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
