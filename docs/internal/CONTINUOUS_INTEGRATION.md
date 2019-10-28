# Continuous Integration

In general, _Continuous Integration_ is a practice of regularly integrating code changes into a code repository, in a way that these changes trigger a build which asserts that nothing is broken.
This process allows multiple developers to merge their commits into a shared repository.

The next phase, after all of the build steps finish successfully, is releasing to production manually. This practice called _Continuous Delivery_.

This article describes the process starting the moment we merge a commit into master by the time the package is published to npm with a deployed Storybook files.
