export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // new feature
        'fix', // fix bug
        'hotfix', // hotfix bug
        'doc', // doc change
        'style', // style change
        'test', // test code change
        'chore', // build and deploy
        'release', // publish version
      ],
    ],
  },
}
