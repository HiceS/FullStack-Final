const initState = {
    "version": "2019-12-02T22:43:23.573Z",
    "categories": [
      {
        "id": 12345345123123124,
        "name": "BMW Parts",
        "description": "pretty okay stuff",
        "photo": "https://cdn.motor1.com/images/mgl/vEJmQ/s1/bmw-i8-m-rendering.jpg",
        "items": [
          {
            "id": 216745,
            "name": "good stuff1",
            "price": 123,
            "info": "pretty good shape",
            "photos": [
              "www.google.com",
              "www.imgur.com"
            ]
          },
          {
            "id": 216745,
            "name": "good stuff1",
            "price": 123,
            "info": "pretty good shape",
            "photos": [
              "www.google.com",
              "www.imgur.com"
            ]
          }
        ]
      },
      {
        "id": 12312312312312334,
        "name": "Other stuff",
        "description": "much better stuff",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg",
        "items": [
          {
            "id": 216745,
            "name": "good stuff1",
            "price": 123,
            "info": "pretty good shape",
            "photos": [
              "www.google.com",
              "www.imgur.com"
            ]
          },
          {
            "id": 216745,
            "name": "good stuff1",
            "price": 123,
            "info": "pretty good shape",
            "photos": [
              "www.google.com",
              "www.imgur.com"
            ]
          }
        ]
      }
    ]
  } 

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;