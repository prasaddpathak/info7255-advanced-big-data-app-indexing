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

## Demo 3 Requirements

1. Rest API that can handle any structured data in Json
2. Rest API with support for crud operations, including merge support, cascaded delete
3. Rest API with support for validation
4. Json Schema describing the data model for the use case
5. Advanced semantics with rest API operations such as update if not changed
6. Storage of data in key/value store
7. Search with join using Elastic
8. Parent-Child indexing (Demo must show patch working all the way to the index)
9. Queueing
10. Security

## Setup Redis
1. Download Redis Image `docker pull redis`
2. Spin up Redis container `docker run  --name csye7255-redis -p 6379:6379 -d redis`
3. Exec into Redis `docker exec -it csye7255-redis redis-cli`

## Setup RabbitMQ
1. Download latest RabbitMQ image `docker pull rabbitmq`
2. Spin ip RabbitMQ container `docker run -d --hostname csye7255-rabbit --name csye7255-rabbit -p 15672:15672 rabbitmq:3-management`

## Setup ElasticSearch
1. Download latest RabbitMQ image `docker pull elasticsearch:8.11.0`
2. Spin ip RabbitMQ container `docker run -d --name csye7255-elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.17.14`
