# # Design Strategy with Codex

A remake of [Design at Wikimedia](https://design.wikimedia.org/) using [Codex](https://doc.wikimedia.org/codex/latest/) and [Vitepress](https://vitepress.dev/).

Preview at https://design-strategy-codex.pages.dev/

## Content management

Content is stored at `docs/` as Markdown and JSON. Assets are stored at `docs/public/` and rendered as-is.

## Development

### Local

You should have NPM installed.

Install Node dependencies:

```sh
npm install
```

Serve site:

```sh
npm run docs:dev
```

Visit `http://localhost:5173/`

### Deployment

See [Blubber docs](https://doc.wikimedia.org/releng/blubber/) for container configuration.

Build image locally:

```sh
DOCKER_BUILDKIT=1 docker build --tag wmf/design-landing-page --target production -f .pipeline/blubber.yaml .
```

Run image:

```sh
docker run -ti -p 8080:8080 wmf/design-landing-page
```

Visit `http://localhost:8080/`

### Publish new image version

To create a new image version merge your change into the *master* branch.

This triggers the publish-image pipeline. Image is available at `docker-registry.wikimedia.org/repos/sre/miscweb/design-landing-page:<timestamp>`

### Deploy changes

- Merge changes to master branch.

- Wait for CI pipeline to finish and check latest tag on the [publish job log](https://gitlab.wikimedia.org/repos/sre/miscweb/design-landing-page/-/jobs/) _(check the step `#13`)_. Alternatively the [docker registry](https://docker-registry.wikimedia.org/repos/sre/miscweb/design-landing-page/tags/) can be checked but it takes a long time to update.

- Update image version on [deployment-charts](https://gerrit.wikimedia.org/r/plugins/gitiles/operations/deployment-charts/%2B/refs/heads/master/helmfile.d/services/miscweb/values-design-landing-page.yaml#3) with the latest tag.

- Add **wmf-sre-collab** group as reviewer and wait until the change is merged.

- Deploy to production from the [deployment server](https://wikitech.wikimedia.org/wiki/Deployment_server).

_See also: [WikiTech: Miscweb](https://wikitech.wikimedia.org/wiki/Miscweb#Deploy_to_Kubernets)._
