# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint           | method | Description                                                             |
| -------------------| ------ | ------------------------------------------------------------------------|
| `/stock`           | `GET`  | retreive a list of products in stock                                    |

| `/stock/product_1` | `GET`  | retreive a specific product  with description and quantite in stock     |

| `/stock/product_13`|`DELETE`| Delete the product  from the database                                   |

| `/stock/product_12`| `POST` | Add a new product in the stock with  description and quantite in stock  |

| `/custumers`       | `GET`  | retreive a list of custumers in the database                            |

| `/custumers/1`     |  `POST`|   Add a new custumer to the databas                                     |       

| `/custumers/12`    | `PATCH`|  Update certains iformations of the custumer in the databas             |

| `/custumers/1`     |`DELETE`|   Remove a custumer from the databas                                    |    

| `/seating`         | `GET`  | retreive a list of taking/ available in the cafe                        |

| `/seating/s_1`     | `PATCH`| Update status of the seat                                               |

