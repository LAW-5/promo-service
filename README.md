# Promo Service

Dev environment

- URL=0.0.0.0:5002
- DATABASE_URL=postgres://eacyoizpvwudjs:dc8900b0e94723cf0191529ccd4d36b7ad2259e6c4d4c93f60142970fc1c71e8@ec2-54-211-255-161.compute-1.amazonaws.com:5432/d3qt2p1f01apn

Run command:
`docker-compose up`

## List of Endpoints

### Create Promo

`POST /promo`

Request body

```json
{
  "code": "ab",
  "percentage": 20,
  "maxCut": 10000,
  "maxUse": 1
}
```

Response

```json
{
  "status": 200
}
```

### Get Our Promo List

`GET /promo`

No request body

Response

```json
{
  "data": [
    {
      "id": 3,
      "code": "ab",
      "percentage": 20,
      "maxCut": 10000,
      "maxUse": 1,
      "totalUse": 0
    }
  ],
  "status": 200
}
```

### Delete Promo

`DELETE /promo`

Request body

```json
{
  "id": 3
}
```

Response

* Successfully delete promo

    ```json
    {
        "status": 200
    }
    ```

* No promo with given id

    ```json
    {
        "status": 404,
        "error": [
            "No promo with given id"
        ]
    }
    ```

### Use Promo

`POST /promo/use`

Request body

```json
{
  "id": 4
}
```

Response

* Successfully use promo

    ```json
    {
        "status": 200
    }
    ```

    Note: When user successfully use promo, attribute totalUse in the promo with given id automatically increased by one

* Promo has reached its max use

    ```json
    {
        "status": 400,
        "error": [
            "Promo have reach max usage"
        ]
    }
    ```

* No promo with given id

    ```json
    {
        "status": 404,
        "error": [
            "No promo with given id"
        ]
    }
    ```
    
