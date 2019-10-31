# Continuous Integration

In general, _Continuous Integration_ is a practice of regularly integrating code changes into a code repository, in a way that these changes trigger a build which asserts that nothing is broken.
This process allows multiple developers to merge their commits into a shared repository.

The next phase, assuming all of the build steps finish successfully, is releasing to production manually. That practice called _Continuous Delivery_.

This article describes the flow process (which implements the concepts above) starting the moment we merge a commit into master, by the time the package is published to npm with a deployed Storybook files.

## Terminology

Before we start, we should understand the following TeamCity terms:

- Build Step - a task to be executed (for instance, `npm run build`)
- Build - a process that executes list of build steps
- Build Chain - a process that refers to several build processes as a single pipeline
- Build Configuration - a collection of settings that define the build process
- Composite Build Configuration - a type of build configuration that aggregates results from several build processes which could be executed in parallel
- Project - a collection of build configurations (a project could be contained inside another project)

<p align="center">
  <img width="80%" src="../assets/teamcity-terminology.png">
</p>

## Integrating TeamCity with WSR

As we know, Wix has more than one server of TeamCity. That's actually why we have two different TeamCity projects for WSR:

- [wix-style-react](http://tc.dev.wixpress.com/project.html?projectId=Wix_Angular_WixStyleReact&branch_Wix_Angular_WixStyleReact=__all_branches__) - the main project that's associated with the master branch
- [FedInfra WixStyleReac WixStyleReactNew Parallel](http://pullrequest-tc.dev.wixpress.com/project.html?projectId=FedInfra_WixStyleReac_WixStyleReactNew_Parallel&branch_FedInfra_WixStyleReac_WixStyleReactNew_Parallel=4401%2Fmerge) - a project that's associated with the other branches and triggered when creating a pull request

Also, there are a few differences between them, which we'll mention during the article, however both consists of similar build configurations.
