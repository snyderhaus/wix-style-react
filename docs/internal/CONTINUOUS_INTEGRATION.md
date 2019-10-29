# Continuous Integration

In general, _Continuous Integration_ is a practice of regularly integrating code changes into a code repository, in a way that these changes trigger a build which asserts that nothing is broken.
This process allows multiple developers to merge their commits into a shared repository.

The next phase, assuming all of the build steps finish successfully, is releasing to production manually. That practice called _Continuous Delivery_.

This article describes the flow process (which implements the concepts above) starting the moment we create a pull request into master, by the time the package is published to npm with a deployed Storybook files.
