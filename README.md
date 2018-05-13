# Spring Actuator Web UI

Small status page for Spring Actuator. Spring Actuator Web UI used a combination of `/actuator/info` and `/actuator/health` to display the status.

![Screenshot](https://raw.githubusercontent.com/bodiam/spring-actuator-web-ui/master/screenshots/status.png)

## Usage

Git clone, then copy all resources to `src/main/resources/static`

After that, change your Spring Actuator config to this:

```
management.endpoints.web.cors.allowed-origins=*
management.endpoints.web.cors.allowed-methods=GET
```

You might want to restrict the `allowed-origins` to allow only your domain name.

## Configuration

If you want to change the icon in the page, add the following line to your `application.properties`:

```
info.app.icon=bicycle icon
```

For a list of supported icons, see [the list](https://semantic-ui.com/elements/icon.html) here.

## Demo

See the [status page](https://api.bikeradar.io/status.html) in action.
