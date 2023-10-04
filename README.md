## Demo 1 Requirements

1. Rest API that can handle any structured data in Json -> Specify URIs, status codes, headers, data model, version
2. Rest API with support for crd operations -> Post, Get, Delete
3. Rest API with support for validation -> Json Schema describing the data model for the use case
4. Controller validates incoming payloads against json schema
5. The semantics with ReST API operations such as update if not changed/read if changed -> Update not required, Conditional read is required (if-none-match, etag)
6. Storage of data in key/value store -> Must implement use case provided


## Steps to run
1. Download Redis Image
2. Spin up Redis container `docker run --name csye7255-redis -d redis`
3. Exec into Redis `docker exec -it csye7255-redis redis-cli`
