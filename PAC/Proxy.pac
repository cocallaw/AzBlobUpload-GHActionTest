function FindProxyForURL(url, host) {

// If the hostname matches, to proxy server.
	if (dnsDomainIs(host, "portal.ezloader.app") ||
		shExpMatch(host, "(*.ezloader.app|ezloader.app)"))
		return "PROXY 10.0.0.4:8888;";

// DEFAULT RULE: All other traffic, go DIRECT.
	return "DIRECT";

}