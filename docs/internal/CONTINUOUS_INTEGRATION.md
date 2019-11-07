# Continuous Integration

In general, _Continuous Integration_ is a practice of regularly integrating code changes into a code repository, in a way that these changes trigger a build which asserts that nothing is broken.
This process allows multiple developers to merge their commits into a shared repository simultaneously.

The next phase, assuming all of the build steps finish successfully, is releasing to production. That practice is applied manually and called _Continuous Delivery_.

This article describes the flow process (which implements the concepts above) starting the moment we merge a commit into master, by the time the package is published to npm and Storybook files are deployed.

## Terminology

Before we start, we better recognize the following TeamCity terms:

- Build Step - a task to be executed (for instance, `npm run build`)
- Build - a process that executes list of build steps
- Build Chain - a process that refers to several build processes as a single pipeline
- Build Configuration - a collection of settings that define the build process
- Composite Build Configuration - a type of build configuration that aggregates results from several build processes, which could be executed in parallel
- Project - a collection of build configurations (a project could be contained inside another project)

<p align="center">
  <img width="80%" src="../assets/teamcity-terminology.png">
</p>

## Integrating TeamCity with WSR

As we apparently know, Wix owns multiple TeamCity servers. Two of them are being used by WSR, and that's actually why we have two different TeamCity projects:

- [wix-style-react](http://tc.dev.wixpress.com/project.html?projectId=Wix_Angular_WixStyleReact&branch_Wix_Angular_WixStyleReact=__all_branches__) - the main project that's associated with the master branch
- [FedInfra WixStyleReac WixStyleReactNew Parallel](http://pullrequest-tc.dev.wixpress.com/project.html?projectId=FedInfra_WixStyleReac_WixStyleReactNew_Parallel&branch_FedInfra_WixStyleReac_WixStyleReactNew_Parallel=4401%2Fmerge) - a project that's associated with the other branches and triggered when creating a pull request

Also, there are a few differences between them, which we'll mention during the article, however both consists of similar build configurations.

The entry **build configuration**, that actually triggers everything, is called [`wix-style-react`](http://tc.dev.wixpress.com/viewType.html?buildTypeId=CommonComponent_WixStyleReact) (what a surprise 😉).
Notice that we differentiate between the project (which has an identical name) and the build configuration. Builds of this configuration are started and associated with new commits of the branch.

Anyway, this build configuration depends on another **composite** build configuration - which is [`wix-style-react-tests-composite`](http://tc.dev.wixpress.com/viewType.html?buildTypeId=Wix_Angular_WixStyleReact_WixStyleReactTests_WixStyleReactTestsComposite). In case you're curious, the dependency is applied when triggering new entry build and defined by the following rules:

- If the latest composite build success, the entry build would use this build instead of triggering a new (composite) build
- If the latest composite build fails (broken test/fails to start/aborted), the entry build would fail

Here's a diagram that demonstrates the dependency:

<p align="center">
  <img width="80%" src="../assets/wsr-composite-build.png">
</p>

The next thing we're going to do is understanding how `wix-style-react-tests-composite` works under the hood.

## The Composite Build

Well, we already said that the composite build configuration is typically triggered by `wix-style-react`. The point is, this build configuration depends on several other build configurations itself.

Let's categorize them:

- Testing - these configurations are responsible to run build steps that ensure there are no issues in various aspects (unit, visual, e2e, performance, etc.). For example, `test1:unit`.
- Promotion - these configurations are responsible to run build steps that actually publish artifacts (package, docs, etc.). For example, `wix-style-react-install-build-publish`.

It's important to understand that the major benefit is parallel builds. This means that the tests might finish before the promotion.
