define({ "api": [
  {
    "type": "GET",
    "url": "/api/messages",
    "title": "Get All Messages",
    "group": "Sms",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[\n        {\n            \"_id\": \"5c5375dd5001be3274e3e7c8\",\n            \"userID\": \"5be031d249edd40014019e2c\",\n            \"message\": \"ola mundo\",\n            \"to\": \"12988121269\",\n            \"from\": \"12988121269\",\n            \"dateTime\": \"2019-01-31T22:25:33.284Z\"\n        }\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/sms/sms.doc.js",
    "groupTitle": "Sms",
    "name": "GetApiMessages",
    "sampleRequest": [
      {
        "url": "https://phone-send-sms.herokuapp.com/api/messages"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/api/message",
    "title": "Create sms message",
    "group": "Sms",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "size": "1..255",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "input",
          "content": "{\n\t\"message\": \"ola mundo\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n        \"_id\": \"5c5375dd5001be3274e3e7c8\",\n        \"userID\": \"5be031d249edd40014019e2c\",\n        \"message\": \"ola mundo\",\n        \"to\": \"12988121269\",\n        \"from\": \"12988121269\",\n        \"dateTime\": \"2019-01-31T22:25:33.284Z\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/sms/sms.doc.js",
    "groupTitle": "Sms",
    "name": "PostApiMessage",
    "sampleRequest": [
      {
        "url": "https://phone-send-sms.herokuapp.com/api/message"
      }
    ]
  }
] });
