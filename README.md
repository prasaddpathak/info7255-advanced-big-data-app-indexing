## Demo 1 Requirements

1. Rest API that can handle any structured data in Json -> Specify URIs, status codes, headers, data model, version
2. Rest API with support for crd operations -> Post, Get, Delete
3. Rest API with support for validation -> Json Schema describing the data model for the use case
4. Controller validates incoming payloads against json schema
5. The semantics with ReST API operations such as update if not changed/read if changed -> Update not required, Conditional read is required (if-none-match, etag)
6. Storage of data in key/value store -> Must implement use case provided

## Demo 2 Requirements

1. Rest API that can handle any structured data in Json
2. Rest API with support for crud operations, including merge/Patch support,  delete
3. Rest API with support for validation
4. Json Schema describing the data model for the use case
5. Advanced semantics with rest API operations such as update if not changed; conditional read and conditional write
6. Storage of data in key/value store
7. Security mechanism must use RS 256 (use google idp if possible. you may generate your own token)

## Steps to run
1. Download docker
2. Build the image `docker build -t info7255 .`
3. Run `docker run -p 3000:3000 -d --name info7255-demo -v $(pwd):/app info7255`
