# `random-group-assigner`

[![Netlify Status](https://api.netlify.com/api/v1/badges/b721cffe-d7ea-450e-a5e7-ac9692af196e/deploy-status)](https://app.netlify.com/sites/tud-ise-go/deploys)

This tiny tool allows you to assign (i.e., _redirect_) people to a randomly-picked URL from a predefined set of URLs. It supports multiple projects (by specifying a `project=xxx` query parameter), so several projects can use it simultaneously.

## Example usage

Let's assume you want to randomly assign your experiment's participants to one of four groups. Each group (i.e., each treatment) has a distinct URL. You now need to divide all participants into four same-size groups. Here's what you need to do:

1. Edit [`links.ts`](links.ts) to add the following:
```ts
"gregors-cool-experiment": {
  groups: [
    'https://www.example.com/link-for-the-first-treatment-group/',
    'https://www.example.com/link-for-the-second-treatment-group/',
    'https://www.example.com/link-for-the-third-treatment-group/',
    'https://www.example.com/link-for-the-fourth-treatment-group/',
  ]
},
```

2. Push/merge your changes to the `main` branch.

3. You're done. The changes will be automatically deployed, so you can send the following link to all participants: `https://tud-ise-go.netlify.app/?project=gregors-cool-experiment` (the `project` query parameter maps to they key used in step 1). When someone visits this link, they will be redirected to one of the four specified URLs above.