const NOW = 1788922611;

const entitlement = {
  productKey: "pro_trial",
  status: "active",
  expiresAt: 1915412211,
  cohort: null
};

const license = {
  licenseId: "lic_olU2EpLOG4not6jC0qnMeg",
  licenseKey: "MOSHI-KY1A-GXR6-JM3P",
  status: "active",
  effectiveStatus: "active",
  startsAt: NOW,
  expiresAt: 1915412211,
  autoRenew: false,
  email: "rapporbit2@gmail.com",
  emailBoundAt: NOW,
  source: "trial",
  productKey: "pro_trial",
  entitlement: entitlement
};

const activationId = "act_qu3W0Fc167lhZT-GQ__bug";

const BODIES = {
  me: {
    licensePushFanoutEnabled: true,
    licenses: [license],
    entitlements: [entitlement]
  },
  activate: {
    status: "ACTIVE",
    success: true,
    license: license,
    entitlement: entitlement,
    licenses: [license],
    entitlements: [entitlement],
    activationId: activationId
  },
  devices: {
    devices: [],
    activeDevices: 0
  }
};

const url = $request.url;
const data = url.indexOf("/devices") !== -1 ? BODIES.devices
  : url.indexOf("/licenses/activate") !== -1 ? BODIES.activate
    : url.indexOf("/licenses/me") !== -1 ? BODIES.me
      : null;

if (!data) {
  $done({});
} else {
  const body = JSON.stringify(data);
  const headers = { "Content-Type": "application/json" };

  if (typeof $task !== "undefined") {
    $done({ status: "HTTP/1.1 200 OK", headers: headers, body: body });
  } else {
    $done({ response: { status: 200, headers: headers, body: body } });
  }
}