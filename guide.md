## Install Sanity

`npm install @sanity/cli`

### Initilise it

`sanity init --project-plan boosted-free-2021-12-08`

<p>or</p>

`npx sanity init --project-plan boosted-free-2021-12-08`

login using google or email id password > Create new project > clean project > sanity start

```
export defalut {
  name: 'user',
  title:'User',
  type: 'document'
  field: [
    {
      name: "userName",
      title: 'userName',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string
    }
  ]
}
```

in schemas.js -> import user and add user to line 15

### frontend package

```
npm install @sanity/client @sanity/image-url react-google-login react-icons react-loader-spiiner react-masonary-css react-router-dom uuid
```
